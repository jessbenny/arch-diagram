import * as go from 'gojs'
import { ReactDiagram } from 'gojs-react';
import { data } from '../data'
import React, { useEffect, useState } from 'react';

import SideMenu from './sideMenu'

import { componentsData, dataCheckBox } from '../datas'

function Basic(){
    const [checkData, setCheckData] = useState({})
  const [nodeDataArray, setNodeDataArray] = useState([])
  const [linkDataArray, setLinkDataArray] = useState([])


  useEffect(() => {
    setCheckData(dataCheckBox)
  }, [])


  const initDiagram = () => {
    const $ = go.GraphObject.make;
    // set your license key here before creating the diagram: go.Diagram.licenseKey = "...";
    const diagram =
      $(go.Diagram,
        {
          'undoManager.isEnabled': true,  // must be set to allow for model change listening
          // 'undoManager.maxHistoryLength': 0,  // uncomment disable undo/redo functionality
          'clickCreatingTool.archetypeNodeData': { text: 'new node', color: 'lightblue' },
          model: new go.GraphLinksModel(
            {
              linkKeyProperty: 'key'  // IMPORTANT! must be defined for merges and data sync when using GraphLinksModel
            })
        });

    // define a simple Node template
    diagram.nodeTemplate =
      $(go.Node, 'Spot',  // the Shape will go around the TextBlock
      new go.Binding('location', 'loc', go.Point.parse),
        $(go.TextBlock,
          { editable: true, maxLines: 2, font: '10pt sans-serif', height: 100, width:100, textAlign: 'center' },  // some room around the text
          new go.Binding('text').makeTwoWay()
        ),
        $(go.Picture, { desiredSize: new go.Size(60, 60), margin: new go.Margin(16, 0, 0, 0) },
          new go.Binding('source', 'icon')),
      );

    diagram.groupTemplate =
      $(go.Group, "Vertical" ,
        $(go.Panel, "Auto",
          $(go.Shape, "RoundedRectangle",  // surrounds the Placeholder
            {
              parameter1: 14},
              new go.Binding('fill', 'color')
            ),
          $(go.Placeholder,    // represents the area of all member parts,
            { padding: 0 })  // with some extra padding around them
        ),
        $(go.TextBlock,         // group title
          { alignment: go.Spot.BottomRight, margin: new go.Margin(0,30,0,0), font: "Bold 12pt Sans-Serif" },
          new go.Binding("text", "text")),
      );

      return diagram;
      
    }

  const handleModelChange = (changes) => {
    console.log('new Node List', nodeDataArray)
    console.log('new Link List', linkDataArray)
    // alert('GoJS model changed!');
  }

  const handleSideMenuChange = (key, e) => {
    let checkDataNew = checkData
    checkDataNew[key].checked = !checkDataNew[key].checked
    setCheckData({
      ...checkDataNew
    })
    updateGraph(key, e)
  }

  const updateGraph = (key, e) => {
    let newNodeDataArray = nodeDataArray;
    let newLinkDataArray = linkDataArray;
    const componentDetails = componentsData[key]
    if (componentDetails.groups.length) {
      const group = componentDetails.groups[0]
      const label = group.name;
      let groupId = null;
      newNodeDataArray.forEach((node, index) => {
        if (node.name == label) {
          groupId = index
          return;
        }
      })
      if (groupId !== null) {
        let currentGroup = newNodeDataArray[groupId]
        const groupNodeId = currentGroup.key
        if (componentDetails.nodes) {
          let nodes = componentDetails.nodes
          nodes.forEach((node, index) => {
            if (node.group === currentGroup.key) {
              nodes[index].group = groupNodeId
            }
          })
          newNodeDataArray = [...newNodeDataArray, ...nodes]
        }
      }
      else {
        group['isGroup'] = true
        newNodeDataArray = [...newNodeDataArray, group]
        if (componentDetails.nodes) {
          let nodes = componentDetails.nodes
          nodes.forEach((node, index) => {
            if (node.group === group.key) {
              nodes[index].group = group.key
            }
          })
          newNodeDataArray = [...newNodeDataArray, ...nodes]
        }
      }
    }
    else {
      const nodes = componentDetails.nodes
      newNodeDataArray = [...newNodeDataArray, ...nodes]
    }
    if (componentDetails.edges) {
      const edges = componentDetails.edges
      edges.forEach(edge=>{
        edge.key = 1000+edge.key
      })
      newLinkDataArray = [...newLinkDataArray, ...edges]
    }
    setLinkDataArray([...newLinkDataArray])
    setNodeDataArray([...newNodeDataArray])
  }

  return (
    <div className="App">
      <div className='d-flex'>
        <div>
          <SideMenu dataChecked={checkData} handleChange={handleSideMenuChange} />
        </div>
        <div>
          <ReactDiagram
            initDiagram={initDiagram}
            divClassName='diagram-component'
            nodeDataArray={nodeDataArray}
            linkDataArray={linkDataArray}
            onModelChange={handleModelChange}
          />
        </div>
      </div>
    </div>
  );
}

export default Basic