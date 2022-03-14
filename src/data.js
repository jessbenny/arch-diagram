export const data = {
  nodes: [
    {
      key: 1,
      layout: {
        x: 50,
        y: 100,
        width: 60,
        height: 60
      },
      alignment: 0.0,
      parent: -1,
      icon:'resources/Icons/Identity/10221-icon-service-Azure-Active-Directory.svg',
      text: 'Azure Active Directory',
      loc:'50 100'
    },
    {
      key: 2,
      layout: {
        x: 50,
        y: 300,
        width: 60,
        height: 60
      },
      alignment: 1,
      parent: -1,
      icon:'resources/Icons/Web/10309-icon-service-Azure-Media-Service.svg',
      text: 'Internet',
      loc:'50 300'
    },
    {
      key: 3,
      layout: {
        x: 50,
        y: 500,
        width: 60,
        height: 60
      },
      alignment: 0.0,
      parent: -1,
      icon:'resources/Icons/Networking/10064-icon-service-DNS-Zones.svg',
      text: 'Azure DNS',
      loc:'50 500'
    },
    {
      key: 4,
      layout: {
        x: 300,
        y: 100,
        width: 60,
        height: 60
      },
      alignment: 0.5,
      parent: 0,
      icon:'resources/Icons/App Services/00046-icon-service-App-Service-Plans.svg',
      text: 'App Service Plan',
      loc:'300 100',
      group:10
    },
    {
      key: 5,
      layout: {
        x: 300,
        y: 300,
        width: 60,
        height: 60
      },
      alignment: 0.5,
      parent: 0,
      icon:'resources/Icons/App Services/10035-icon-service-App-Services.svg',
      text:'App Service Web app',
      loc:'300 300',
      group:10
    },
    {
      key: 6,
      layout: {
        x: 300,
        y: 500,
        width: 60,
        height: 60
      },
      alignment: 0.5,
      parent: 10,
      icon:'resources/Icons/General/10780-icon-service-Blob-Block.svg',
      text: 'Storage blob',
      loc:'300 500',
      group:12
    },
    {
      key: 7,
      layout: {
        x: 600,
        y: 100,
        width: 60,
        height: 60
      },
      alignment: 0.5,
      parent: 9,
      icon:'resources/Icons/Databases/10132-icon-service-SQL-Server.svg',
      text: 'Logical Server',
      loc:'600 100',
      group:11
    },
    {
      key: 8,
      layout: {
        x: 550,
        y: 200,
        width: 60,
        height: 60
      },
      alignment: 0.5,
      parent: 9,
      icon:'resources/Icons/Databases/10130-icon-service-SQL-Database.svg',
      text:'Database',
      loc:'550 200',
      group:11
    },
    {
      key: 9,
      layout: {
        x: 650,
        y: 200,
        width: 60,
        height: 60
      },
      alignment: 0.5,
      parent: 9,
      icon:'resources/Icons/Databases/10130-icon-service-SQL-Database.svg ',
      text:'Database',
      loc:'650 200',
      group:11
    },
    {
      key: 10,
      group: 12,
      layout: {
        x: 200,
        y: 50,
        width: 250,
        height: 350
      },
      color:"#d8dadb",
      stroke: "1px black",
      // loc:'200, 50',
      isGroup:true
    },
    {
      key: 11,
      group: 12,
      layout: {
        x: 500,
        y: 130,
        width: 250,
        height: 150
      },
      color:"#d8dadb",
      stroke: "1px black",
      text:'Azure SQL Database',
      isGroup:true
    },
    {
      key: 12,
      layout: {
        x: 175,
        y: 25,
        width: 725,
        height: 575
      },
      color:"white",
      stroke: "1px dashed blue",
      text:'Resource Group',
      isGroup:true
    },

  ],
  groups: [
    {
      key: 0,
      parent: 10,
      layout: {
        x: 200,
        y: 50,
        width: 250,
        height: 350
      },
      color:"#d8dadb",
      stroke: "1px black",
    },
    {
      key: 9,
      parent: 10,
      layout: {
        x: 500,
        y: 130,
        width: 250,
        height: 150
      },
      color:"#d8dadb",
      stroke: "1px black",
      text:'Azure SQL Database'
    },
    {
      key: 10,
      layout: {
        x: 175,
        y: 25,
        width: 725,
        height: 575
      },
      color:"white",
      stroke: "1px dashed blue",
      text:'Refrom Group'
    },
  ],
  edges: [
    {
      key: 0,
      from: 2,
      to: 1,
      bends: [],
      labels: [],
      tag: null,
      stroke:'1px dashed gray'
    },
    {
      key: 1,
      from: 2,
      to: 3,
      bends: [],
      labels: [],
      tag: null,
      stroke:'1px dashed gray'
    },
    {
      key: 2,
      from: 2,
      to: 5,
      bends: [],
      labels: [],
      tag: null,
      stroke:'1px blue'
    },
  ]
}