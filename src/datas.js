export const dataCheckBox = {
    B2C:{
      label:"B2C",
      checked:false
    },
    Application_Content_Delivery:{
      label:"Application Content Delivery",
      checked:false
    },
    Content_Delivery:{
      label:"Content Delivery",
      checked:false
    },
    Modular_Web_Application:{
      label:"Modular Web Application",
      checked:false
    },
    Audio_Video_Streaming:{
      label:"Audio/Video Streaming",
      checked:false
    },
    Event_Driven_Processing:{
      label:"Event-Driven Processing",
      checked:false
    },
    Caching:{
      label:"Caching",
      checked:false
    },
    Graph_Data_Store:{
      label:"Graph Data Store",
      checked:false
    },
    Relational_Data :{
      label:"Relational Data",
      checked:false
    },
    enable_Search:{
      label:"Enable Search",
      checked:false
    },
  }

  export const componentsData = {
    B2C: {
      nodes :[
        {
          key: 1,
          alignment: 0.0,
          parent: -1,
          icon:'resources/Icons/Identity/10221-icon-service-Azure-Active-Directory.svg',
          text: 'Azure Active Directory',
          loc:'50 100'
        },
        {
          key: 2,
          alignment: 1,
          parent: -1,
          icon:'resources/Icons/Web/10309-icon-service-Azure-Media-Service.svg',
          text: 'Internet',
          loc:'50 300'
        },
        {
          key: 3,
          alignment: 0.0,
          parent: -1,
          icon:'resources/Icons/Networking/10064-icon-service-DNS-Zones.svg',
          text: 'Azure DNS',
          loc:'50 500'
        },
      ],
      edges : [
        {
          key: 0,
          from: 2,
          to: 1,
          bends: [],
          labels: ['Authentication'],
          tag: null,
          stroke:'1px dashed gray',
        },
        {
          key: 1,
          from: 2,
          to: 3,
          bends: [],
          labels: ['DNS Lookup'],
          tag: null,
          stroke:'1px dashed gray'
        },
      ],
      groups: [
  
      ]
    },
    Application_Content_Delivery:{
      nodes:[
        {
          key: 4,
          alignment: 0.0,
          parent: -1,
          icon:'resources/Icons/Networking/10073-icon-service-Front-Doors.svg',
          text: 'Azure Front Door',
          group:30,
          loc:'300 300'
        },
      ],
      edges:[
        {
          key: 2,
          from: 2,
          to: 4,
          bends: [],
          labels: [],
          tag: null,
          stroke:'1px blue'
        },
      ],
      groups:[
          {
            key: 30,
            color:"white",
            stroke: "1px dashed blue",
            name:'Resource Group',
            text:'Resource Group',
            isGroup:true
          },
      ]
    },
    Content_Delivery:{
      nodes:[
        {
          key: 5,
          alignment: 0.0,
          parent: -1,
          icon:'resources/Icons/App Services/00056-icon-service-CDN-Profiles.svg',
          text: 'Azure CDN',
          group:30,
          loc:'300 600'
        },
      ],
      edges:[
        {
          key: 3,
          from: 2,
          to: 5,
          bends: [],
          labels: [],
          tag: null,
          stroke:'1px blue'
        },
      ],
      groups:[
        {
          key: 30,
          color:"white",
          stroke: "1px dashed blue",
          name:'Resource Group',
          text:'Resource Group',
          isGroup:true
        },
      ]
    },
    Audio_Video_Streaming:{
      nodes:[
        {
          key: 6,
          alignment: 0.0,
          parent: -1,
          icon:'resources/Icons/General/10780-icon-service-Blob-Block.svg',
          text: 'Blob',
          group:31,
          loc:'500 600'
        },
        {
          key: 7,
          alignment: 0.0,
          parent: -1,
          icon:'resources/Icons/General/10800-icon-service-File.svg',
          text: 'Static Content',
          group:31,
          loc:'600 600'
        },
      ],
      edges: [
        {
          key: 4,
          from: 6,
          to: 5,
          bends: [],
          labels: [],
          tag: null,
          stroke:'1px dashed blak'
        },
      ],
      groups:[
        {
          key: 31,
          color:"gray",
          stroke: "1px dashed blue",
          group:30,
          name:'Blob Group',
          text:''
        },
      ]
    },
    Modular_Web_Application:{
        nodes:[
            {
                key: 8,
                icon:'resources/Icons/webapp-webjobs.svg',
                text: 'App Service Plan',
                group:32,
                loc:'450 300'
            },
            {
                key: 9,
                // icon:'resources/Icons/App Services/00046-icon-service-App-Service-Plans.svg',
                text: 'Web App',
                group:32,
                loc:'450 400'
            }
        ],
        edges:[
            {
                key: 4,
                from: 4,
                to: 8,
                bends: [],
                labels: [],
                tag: null,
                stroke:'1px dashed blak'
              }
        ],
        groups:[
            {
                key: 32,
                color:"#d7d7d6",
                name:'Web Front End',
                text: 'Web Front End',
                group:30,
            },
        ]
    },
    Event_Driven_Processing:{
        nodes:[
            {
                key: 10,
                icon:'resources/Icons/storage-queue.svg',
                text: 'Queue',
                group:32,
                loc:'600 300'
            },
            {
                key: 11,
                icon:'resources/Icons/functions.svg',
                text: 'Function App',
                group:32,
                loc:'750 300'
            },
        ],
        edges:[
              {
                key: 5,
                from: 8,
                to: 10,
                bends: [],
                labels: [],
                tag: null,
                stroke:'1px dashed blak'
              },
              {
                key: 6,
                from: 10,
                to: 11,
                bends: [],
                labels: [],
                tag: null,
                stroke:'1px dashed blak'
              },
        ],
        groups:[
            {
                key: 32,
                color:"#d7d7d6",
                name:'Web Front End',
                text: 'Web Front End',
                group:30,
            },
        ]
    },
    Caching:{
        nodes:[
            {
                key: 12,
                icon:'resources/Icons/cache-including-redis.svg',
                text: 'Redis Cache',
                group:30,
                loc:'900 355'
            },
        ],
        edges:[
            {
                key: 7,
                from: 32,
                to: 12,
                bends: [],
                labels: [],
                tag: null,
                stroke:'1px dashed blak'
              },
        ],
        groups:[

        ]
    },
    Relational_Data:{
        nodes:[
            {
                key: 13,
                icon:'resources/Icons/Databases/10130-icon-service-SQL-Database.svg',
                text: 'Azure SQL Database',
                group:33,
                loc:'1050 300'
            },
        ],
        edges:[
            {
                key: 8,
                from: 32,
                to: 33,
                bends: [],
                labels: [],
                tag: null,
                stroke:'1px dashed blak'
              },
              {
                key: 9,
                from: 33,
                to: 12,
                bends: [],
                labels: [],
                tag: null,
                stroke:'1px dashed blak'
              },
        ],
        groups:[
            {
                key: 33,
                color:"#d7d7d6",
                name:'Data Storage',
                text: 'Data Storage',
                group:30,
            },
        ]
    },
    Graph_Data_Store:{
        nodes:[
            {
                key: 14,
                icon:'resources/Icons/Databases/10121-icon-service-Azure-Cosmos-DB.svg',
                text: 'Cosmos DB',
                group:33,
                loc:'1150 300'
            },
        ],
        edges:[
            {
                key: 8,
                from: 32,
                to: 33,
                bends: [],
                labels: [],
                tag: null,
                stroke:'1px dashed blak'
              },
              {
                key: 9,
                from: 33,
                to: 12,
                bends: [],
                labels: [],
                tag: null,
                stroke:'1px dashed blak'
              },
        ],
        groups:[
            {
                key: 33,
                color:"#d7d7d6",
                name:'Data Storage',
                text: 'Data Storage',
                group:30,
            },
        ]
    },
    enable_Search:{
        nodes:[
            {
                key: 15,
                icon:'resources/Icons/App Services/10044-icon-service-Search-Services.svg',
                text: 'Azure Search',
                group:30,
                loc:'1110 500'
            },
        ],
        edges:[
            {
                key: 10,
                from: 33,
                to: 15,
                bends: [],
                labels: [],
                tag: null,
                stroke:'1px dashed blak'
              },
              {
                key: 11,
                from: 32,
                to: 15,
                bends: [],
                labels: [],
                tag: null,
                stroke:'1px dashed blak'
              },
        ],
        groups:[]
    }
  }
  