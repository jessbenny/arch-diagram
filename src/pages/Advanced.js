import AdvancedMenu from "./advancedMenu";
import { useEffect, useRef, useState } from "react";
import * as go from 'gojs'
import { components, componentsMeta, edgeData, GroupData } from '../advancedData'
import { ReactDiagram } from "gojs-react";
import { Button, Typography } from "@mui/material";
import { ConstructionOutlined, Download } from "@mui/icons-material";

function Advanced() {

    const [componentData, setComponentData] = useState([])
    const [applicationType, setApplicationType] = useState('Web')
    const [computeType, setComputeType] = useState('Modular')
    const [scaled, setScaled] = useState(false)
    const [nodeDataArray, setNodeDataArray] = useState([])
    const [linkDataArray, setLinkDataArray] = useState([])
    const [scaledNodes, setScaledNodes] = useState([])
    const [scaledEdges, setScaledEdges] = useState([])
    const [changedKeys, setChangedKeys] = useState([])
    const [keyMapping,setKeyMapping] = useState([])

    const graphRef = useRef()

    var diagram;

    useEffect(() => {
        setComponentData(components)
        loadInitialNodes(applicationType)
    }, [])

    const loadInitialNodes = (value) => {
        if (value === 'Web') {
            setNodeDataArray([
                componentsMeta['Endpoints']['Internet_Web'][0],
            ])
        }
        else {
            setNodeDataArray([
                componentsMeta['Endpoints']['Mobile'][0]
            ])
        }
    }

    const initDiagram = () => {
        const $ = go.GraphObject.make;
        // set your license key here before creating the diagram: go.Diagram.licenseKey = "...";
        diagram =
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
                new go.Binding('fromSpot', 'fromSpot'),
                $(go.TextBlock,
                    { editable: true, maxLines: 2, font: '12pt Sans-Serif', height: 120, width: 100, textAlign: 'center' },  // some room around the text
                    new go.Binding('text').makeTwoWay()
                ),
                $(go.Picture, { desiredSize: new go.Size(60, 60), margin: new go.Margin(16, 0, 0, 0) },
                    new go.Binding('source', 'icon')),
            );

        diagram.groupTemplate =
            $(go.Group, "Vertical",
                $(go.Panel, "Auto",
                    $(go.Shape, "Rectangle",  // surrounds the Placeholder
                        {
                            parameter1: 14,
                        },
                        new go.Binding('fill', 'color')
                    ),
                    $(go.Placeholder,    // represents the area of all member parts,
                        { padding: 5 }),  // with some extra padding around them
                        $(go.TextBlock,         // group title
                            { alignment: go.Spot.BottomRight, margin: new go.Margin(16, 0, 0, 16), font: "Bold 12pt Sans-Serif" },
                            new go.Binding("text", "text")),
                ),
            );

        diagram.linkTemplate =
            $(go.Link,
                new go.Binding("routing", "routing"),
                new go.Binding('fromSpot', 'fromSpot'),
                new go.Binding('toSpot', 'toSpot'),
                $(go.Shape),
                $(go.Shape, { toArrow: "Standard" }),
                $(go.TextBlock,                        // this is a Link label
                new go.Binding("text", "text"),
                {   segmentOffset: new go.Point(0, -10),
                    segmentOrientation: go.Link.OrientUpright,
                    font:'12pt Sans-Serif'
                })
            );

        return diagram;

    }

    const handleModelChange = (changes) => {
        // alert('GoJS model changed!');
    }

    const handleSideMenuChange = (category, item, e) => {
        const status = !componentData[category]['components'][item]['checked']
        let newComponentsData = componentData
        newComponentsData[category]['components'][item]['checked'] = !newComponentsData[category]['components'][item]['checked']
        setComponentData([...newComponentsData])
        if (componentData[category]['components'][item]['Key'] === 'Scale') {
            handleStandByRegion(status)
            return
        }
        if (newComponentsData[category]['components'][item]['checked'])
            updateGraph(category, item)
        else
            rearrangeGraph(category, item)
    }

    const handleApplicationChange = (e, value) => {
        setApplicationType(value)
        let newNodeDataArray = nodeDataArray;
        newNodeDataArray = newNodeDataArray.filter(node => node['key'] !== 1)
        if (value === 'Web')
            newNodeDataArray = [...newNodeDataArray, componentsMeta['Endpoints']['Internet_Web'][0]]
        else
            newNodeDataArray = [...newNodeDataArray, componentsMeta['Endpoints']['Mobile'][0]]
        setNodeDataArray([...newNodeDataArray])
    }

    const handleComputeChange = (e, value) => {
        setComputeType(value)
        let newNodeDataArray = nodeDataArray;
        let newLinkDataArray = linkDataArray;
        const nodesToAddModular = !scaled?[6, 15, 105, 103]:[6, 15, 105, 103,1006, 1015, 1105, 1103]
        const nodesToAddMicroService = !scaled?[6]:[6,106]
        const nodeDetailsToAddModular = [
            componentsMeta['Compute_Service']['App_Service'][0],
            componentsMeta['Compute_Service']['Web_App'][0],
            GroupData['103'],
            GroupData['105']
        ]
        const nodeDetailsToAddMicroServices = [
            componentsMeta['Compute_Service']['Azure_Kubernetes_Service'][0],
            GroupData['103'],
        ]
        if (value === 'Modular') {
            newNodeDataArray = newNodeDataArray.filter(node => !nodesToAddMicroService.includes(node['key']))

            const {nodes,edges}  = scaled?generateStandByNodes(JSON.parse(JSON.stringify(nodeDetailsToAddModular)) , [edgeData[14]]):{nodes:[],edges:[]}
            newNodeDataArray = [...newNodeDataArray,
                ...nodeDetailsToAddModular,
                ...nodes
            ]
            setNodeDataArray([...newNodeDataArray])
            setLinkDataArray([...linkDataArray,...edges])
        }
        if (value === 'MicroService') {
            newNodeDataArray = newNodeDataArray.filter(node => !nodesToAddModular.includes(node['key']))
            const {nodes,edges} = scaled?generateStandByNodes( JSON.parse(JSON.stringify(nodeDetailsToAddMicroServices)) , [edgeData[14]]):{nodes:[],edges:[]}
            newNodeDataArray = [...newNodeDataArray,
                ...nodeDetailsToAddMicroServices,
                ...nodes
            ]
            setNodeDataArray([...newNodeDataArray])
            setLinkDataArray([...linkDataArray,...edges])
        }
    }

    const updateGraph = (category, item) => {
        let newNodeDataArray = nodeDataArray;
        let newLinkDataArray = linkDataArray;
        const newLinks = []
        const categoryKey = componentData[category]['Key']
        const key = componentData[category]['components'][item]['Key']
        if (key === 'Compute_Services') {
            handleComputeChange(null, computeType)
            return
        }
        const componentDetails = componentsMeta[categoryKey][key]
        const groupNodes = []
        for (let component of componentDetails) {
            const edges = component['edge']
            for (let edge of edges) {
                newLinkDataArray = [...newLinkDataArray, edgeData[edge]]
                newLinks.push(edgeData[edge])
            }
            if (component['group']) {
                let group = component['group']
                while (group !== null) {
                    const groupNode = GroupData[group]
                    groupNodes.push(groupNode)
                    group = groupNode['group'] ? groupNode['group'] : null
                }
            }
        }
        if (scaled) {
            const newNodes = [...componentDetails, ...groupNodes]
            const scalableNodes = JSON.parse(JSON.stringify(newNodes.filter(node => node['scale'] === true)))
            const { nodes, edges } = generateStandByNodes(scalableNodes, newLinks)
            newNodeDataArray = [...newNodeDataArray, ...componentDetails, ...groupNodes, ...nodes]
            setNodeDataArray([...newNodeDataArray])
            setLinkDataArray([...newLinkDataArray, ...edges])
        }
        else {
            newNodeDataArray = [...newNodeDataArray, ...componentDetails, ...groupNodes]
            setLinkDataArray([...newLinkDataArray])
            setNodeDataArray([...newNodeDataArray])
        }
    }

    const rearrangeGraph = (category, item) => {
        let newNodeDataArray = nodeDataArray;
        let newLinkDataArray = linkDataArray;
        const categoryKey = componentData[category]['Key']
        const key = componentData[category]['components'][item]['Key']
        const componentDetails = componentsMeta[categoryKey][key]
        const keysToRemove = componentDetails.map(component => component['key'])
        const scaledKeys = scaled?keysToRemove.map(key=>key+1000):[]
        keysToRemove.push(...scaledKeys)
        newNodeDataArray = newNodeDataArray.filter(node => !keysToRemove.includes(node['key']))
        let edgesToRemove = []
        componentDetails.forEach(component => {
            const edges = [...component['edge']]
            const scaledEdges = scaled?edges.map(edge=>edge+100):[]
            edges.forEach((edge,index)=>{
                if (keysToRemove.includes(edgeData[edge]['from']) || keysToRemove.includes(edgeData[edge]['to']) || keysToRemove.includes(edgeData[edge]['from']+1000) || keysToRemove.includes(edgeData[edge]['to']+1000)){
                    edgesToRemove.push(edge)
                    if(scaled) edgesToRemove.push(edge+100)
                }
            })
            newNodeDataArray.forEach(node=>{
                if(node['edge']){
                    let index = 0;
                    for(const edge of edges){
                        if(node['edge'].includes(edge)){
                            edges.splice(index,1)
                        }
                        else{
                            index++;
                        }
                    }
                 
                }
            })
            edgesToRemove = [...edgesToRemove, ...edges]
        })
        newLinkDataArray = newLinkDataArray.filter(link=> !edgesToRemove.includes(link['key']))
        setNodeDataArray([...newNodeDataArray])
        setLinkDataArray([...newLinkDataArray])
    }

    const makeSvg = () => {
        let svgDiagram = graphRef.current.getDiagram()
        let svg = svgDiagram.makeSvg({ scale: 1, background: "white" })
        let svgstr = new XMLSerializer().serializeToString(svg)
        let blob = new Blob([svgstr], { type: "image/svg+xml" })
        var url = window.URL.createObjectURL(blob);
        var filename = "mySVGFile.svg";

        var a = document.createElement("a");
        a.style = "display: none";
        a.href = url;
        a.download = filename;

        // IE 11
        if (window.navigator.msSaveBlob !== undefined) {
            window.navigator.msSaveBlob(blob, filename);
            return;
        }

        document.body.appendChild(a);
        requestAnimationFrame(() => {
            a.click();
            window.URL.revokeObjectURL(url);
            document.body.removeChild(a);
        })
    }

    const handleStandByRegion = (needScaling) => {
        if (needScaling) {
            addStandByRegion()
            setScaled(true)
        }
        else {
            removeStandByRegion()
            setScaled(false)
        }
    }

    const addStandByRegion = () => {
        const scalableNodes = JSON.parse(JSON.stringify(nodeDataArray.filter(node => node['scale'] === true)))
        const newKeyMapping = {
            ...keyMapping
        }
        scalableNodes.forEach(node => {
            const newKey = node['key'] + 1000
            newKeyMapping[node['key']] = newKey
            node['key'] = newKey
            if (node['group']) {
                node['group'] = node['group'] + 1000
            }
            if (node['loc']) {
                const locationX = parseInt(node['loc'].split(" ")[0])
                let locationY = parseInt(node['loc'].split(" ")[1])
                locationY = locationY + 550
                node['loc'] = `${locationX} ${locationY}`
            }
        })
        const newEdgeList = [edgeData[99]]
        const changedKeys = Object.keys(newKeyMapping)
        linkDataArray.forEach(link => {
            if ((changedKeys.includes(String(link['from'])) || changedKeys.includes(String(link['to']))) && !link['noDuplicate']) {
                const newFrom = changedKeys.includes(String(link.from)) ? newKeyMapping[link.from] : link.from
                const newTo = changedKeys.includes(String(link.to)) ? newKeyMapping[link.to] : link.to
                const newLink = {
                    ...link,
                    key: link.key + 100,
                    from: newFrom,
                    to: newTo,
                }
                newEdgeList.push(newLink)
            }
        })
        const newNodeDataArray = [...nodeDataArray, ...scalableNodes];
        const newLinkDataArray = [...linkDataArray, ...newEdgeList]
        setLinkDataArray([...newLinkDataArray])
        setNodeDataArray([...newNodeDataArray])
        setScaledNodes(scalableNodes.map(node => node.key))
        setScaledEdges(newEdgeList.map(edge => edge.key))
        setKeyMapping({...newKeyMapping})
    }

    const removeStandByRegion = () => {
        const newNodeDataArray = nodeDataArray.filter(node => !scaledNodes.includes(node.key))
        const newLinkDataArray = linkDataArray.filter(link => !scaledEdges.includes(link.key))
        setLinkDataArray([...newLinkDataArray])
        setNodeDataArray([...newNodeDataArray])
        setScaledNodes([])
        setScaledEdges([])
        setKeyMapping({})
    }

    const generateStandByNodes = (scalableNodes, newEdges) => {
        const newKeyMapping = {
            ...keyMapping
        }
        scalableNodes.forEach(node => {
            const newKey = node['key'] + 1000
            newKeyMapping[node['key']] = newKey
            node['key'] = newKey
            if (node['group']) {
                node['group'] = node['group'] + 1000
            }
            if (node['loc']) {
                const locationX = parseInt(node['loc'].split(" ")[0])
                let locationY = parseInt(node['loc'].split(" ")[1])
                locationY = locationY + 550
                node['loc'] = `${locationX} ${locationY}`
            }
        })
        const newEdgeList = []
        const changedKeys = Object.keys(newKeyMapping)
        setKeyMapping({...newKeyMapping})
        newEdges.forEach(link => {
            if ((changedKeys.includes(String(link['from'])) || changedKeys.includes(String(link['to']))) && !link['noDuplicate']) {
                const newFrom = changedKeys.includes(String(link.from)) ? newKeyMapping[link.from] : link.from
                const newTo = changedKeys.includes(String(link.to)) ? newKeyMapping[link.to] : link.to
                const newLink = {
                    ...link,
                    key: link.key + 100,
                    from: newFrom,
                    to: newTo,
                }
                newEdgeList.push(newLink)
            }
        })
        return ({
            nodes: scalableNodes,
            edges: newEdgeList
        })
    }


    return (
        <div style={{ height: window.innerHeight }}>
                <div className="d-flex justify-content-center">
                    <Typography variant="h2" className="mt-2 mb-2" >Architecture</Typography>
                </div>
            <div className='d-flex' style={{ height: '90%' }}>
                <div className="h-100" style={{ overflowY: 'scroll' }}>
                    <AdvancedMenu applicationType={applicationType} data={componentData}
                        handleChange={handleSideMenuChange} handleApplicationChange={handleApplicationChange}
                        handleComputeChange={handleComputeChange} />
                </div>
                <div className="ms-2 mt-2">
                    <ReactDiagram
                        initDiagram={initDiagram}
                        divClassName='diagram-component'
                        nodeDataArray={nodeDataArray}
                        linkDataArray={linkDataArray}
                        onModelChange={handleModelChange}
                        ref={graphRef}
                    />
                </div>
            </div>
        </div>
    )
}

export default Advanced