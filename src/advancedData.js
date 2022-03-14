import * as go from 'gojs'
export const components = [
    {
        Name: "Endpoints",
        Key: "Endpoints",
        components: [
            {
                Name: "Azure CDN",
                Key: "Azure_CDN",
                Text: "Content Delivery Network",
                checked: false
            },
            {
                Name: "Azure DNS",
                Key: "Azure_DNS",
                Text: "DNS traffic manager",
                checked: false
            },
            {
                Name: "Azure Front Door",
                Key: "Azure_Front_Door",
                Text: "Application Delivery Network",
                checked: false
            }
        ]
    },
    {
        Name: "Authentication",
        Key: "Authentication",
        components: [
            {
                Name: "Identity Manager",
                Key: "Identity_Manager",
                Text: "Identity Manager",
                checked: false
            },
            {
                Name: "Azure Active Directory",
                Key: "Azure_Active_Directory",
                Text: "Azure Active Directory",
                checked: false
            },
            {
                Name: "Azure Active Directory B2C",
                Key: "Azure_Active_Directory_B2C",
                Text: "Azure Active Directory B2C",
                checked: false
            }
        ]
    },
    {
        Name: "Compute Service",
        Key: "Compute_Service",
        components: [
            {
                Name: "Computer Services",
                Key: "Compute_Services",
                Text: "Computer Services",
                checked: false
            },
            {
                Name: "Azure Functions",
                Key: "Azure_Functions",
                Text: "Event Driven",
                checked: false
            }
        ]
    },
    {
        Name: "Caching",
        Key: "Caching",
        components: [
            {
                Name: "Redis",
                Key: "Redis",
                Text: "In Memory Cache",
                checked: false
            },
        ]
    },
    {
        Name: "Database",
        Key: "Database",
        components: [
            {
                Name: "Azure SQL",
                Key: "Azure_SQL",
                Text: "Relational",
                checked: false
            },
            {
                Name: "Cosmos",
                Key: "Cosmos",
                Text: "Document Database",
                checked: false
            },
            {
                Name: "Cosmos",
                Key: "Cosmos",
                Text: "Wide-column database",
                checked: false
            },
            {
                Name: "Cosmos",
                Key: "Cosmos",
                Text: "Key-value database",
                checked: false
            },
            {
                Name: "Cosmos",
                Key: "Cosmos",
                Text: "Graph database",
                checked: false
            },
            {
                Name: "Redis",
                Key: "Redis",
                Text: "In Memory",
                checked: false
            }        
        ]
    },
    {
        Name: "Storage",
        Key: "Storage",
        components: [
            {
                Name: "Blob",
                Key: "Blob",
                Text: "Streaming and Random Access",
                checked: false
            },
            {
                Name: "Blob",
                Key: "Blob",
                Text: "Access application data from anywhere",
                checked: false
            },
            {
                Name: "Blob",
                Key: "Blob",
                Text: "Efficient backup/restore, disaster recovery, and archiving",
                checked: false
            }, 
            {
                Name: "Azure Files",
                Key: "Azure_Files",
                Text: "Replace or supplement on-premises file servers",
                checked: false
            },
            {
                Name: "Azure Files",
                Key: "Azure_Files",
                Text: "Lift and shift' applications that use file shares",
                checked: false
            },
            {
                Name: "Azure Files",
                Key: "Azure_Files",
                Text: "Use file shares to simplify cloud development",
                checked: false
            },
            {
                Name:"Azure Disks",
                Key: "Azure_Disks",
                Text: "Lift and shift' applications that use persistent disks",
                checked: false
            }          
        ]
    },
    {
        Name : "Scale",
        Key: "Scale",
        components:[
            {
                Name: "Scale",
                Key: "Scale",
                Text:"High Availability",
                checked:false
            }
        ]
    },
    {
        Name : "Management",
        Key: "Management",
        components:[
            {
                Name: "Azure_Monitor",
                Key: "Azure_Monitor",
                Text:"Monitoring",
                checked:false
            }
        ]
    },
    {
        Name : "Security",
        Key: "Security",
        components:[
            {
                Name: "Azure_Key_Vault",
                Key: "Azure_Key_Vault",
                Text:"Secret Management",
                checked:false
            }
        ]
    }
]

export const componentsMeta = {
    Endpoints: {
        Internet_Web: [{
            key: 1,
            icon: 'resources/Icons/Web/10309-icon-service-Azure-Media-Service.svg',
            text: 'Web Client',
            loc: '50 300',
            col: 0,
            row: 1,
            edges: [1, 2, 3, 4],
            scale : false
        }],
        Mobile: [{
            key: 1,
            icon: 'resources/Icons/General/10822-icon-service-Mobile.svg',
            text: 'App Client',
            loc: '50 300',
            col: 0,
            row: 1,
            edges: [1, 2, 3, 4],
            scale : false
        }],
        Azure_CDN: [{
            key: 2,
            icon: 'resources/Icons/App Services/00056-icon-service-CDN-Profiles.svg',
            text: 'Azure CDN',
            loc: '250 650',
            edge: [4],
            scale : false
        }],
        Azure_DNS: [{
            key: 3,
            icon: 'resources/Icons/Networking/10064-icon-service-DNS-Zones.svg',
            text: 'Azure DNS',
            loc: '50 550',
            edge: [2],
            scale : false

        }],
        Azure_Front_Door: [
            {
                key: 4,
                icon: 'resources/Icons/Networking/10073-icon-service-Front-Doors.svg',
                text: 'Azure Front Door',
                loc: '250 300',
                edge: [5,14],
                scale : false
            }
        ]
    },
    Authentication: {
        Azure_Active_Directory: [{
            key: 5,
            icon: 'resources/Icons/Identity/10221-icon-service-Azure-Active-Directory.svg',
            text: 'Azure Active Directory',
            loc: '50 50',
            edge: [1],
            scale : false

        }],
        Azure_Active_Directory_B2C: [{
            key: 17,
            icon: 'resources/Icons/Identity/10228-icon-service-Azure-AD-B2C.svg',
            text: 'Azure Active Directory B2C',
            loc: '-100 50x',
            edge: [13],
            scale : false

        }]
    },
    Compute_Service: {
        App_Service: [{
            key: 6,
            icon: 'resources/Icons/App Services/00046-icon-service-App-Service-Plans.svg',
            text: 'App Service',
            group: 105,
            loc: '450 300',
            edge: [18],
            scale : true
        }],
        Azure_Kubernetes_Service: [{
            key: 6,
            icon: 'resources/Icons/Compute/10023-icon-service-Kubernetes-Services.svg',
            text: 'Azure Kubernates Service',
            group: 103,
            loc: '450 300',
            edge:[18],
            scale : true
        }],
        Azure_Functions: [{
            key: 8,
            icon: 'resources/Icons/functions.svg',
            text: 'Azure Functions',
            group: 103,
            loc: '750 300',
            edge:[9],
            scale : true
        },
        {
            key: 16,
            icon: 'resources/Icons/storage-queue.svg',
            text: 'Queue',
            group: 103,
            loc: '600 300',
            edge:[8],
            scale : true
        }],
        Web_App: [
            {
                key: 15,
                icon: 'resources/Icons/webapp-webjobs.svg',
                text: 'Web App',
                group: 105,
                loc: '450 400',
                edge:[],
                scale : true
            }
        ]
    },
    Caching: {
        Redis: [{
            key: 10,
            icon: 'resources/Icons/cache-including-redis.svg',
            text: 'Redis Cache',
            group: 101,
            loc: '925 425',
            edge:[11,12],
            scale : true
        }]
    },
    Database: {
        Azure_SQL: [{
            key: 11,
            icon: 'resources/Icons/Databases/10130-icon-service-SQL-Database.svg',
            text: 'Azure SQL Database',
            group: 104,
            loc: '1050 300',
            edge:[10,12,20],
            scale : true
        }],
        Cosmos: [{
            key: 12,
            icon: 'resources/Icons/Databases/10121-icon-service-Azure-Cosmos-DB.svg',
            text: 'Cosmos DB',
            group: 104,
            loc: '1150 300',
            edge:[10,12,20],
            scale : true
        }]
    },
    Storage:{
        Blob: [{
            key: 13,
            icon: 'resources/Icons/General/10780-icon-service-Blob-Block.svg',
            text: 'Blob',
            group: 101,
            loc: '500 650',
            edge: [6],
            scale : false
        }],
        Azure_Files:[{
            key:18,
            icon:'resources/Icons/General/10801-icon-service-Files.svg',
            text: 'Azure Files',
            group: 106,
            loc: '600 100',
            edge: [15],
            scale : false
        }],
        Azure_Disks:[
            {
                key:19,
                icon:'resources/Icons/Compute/10032-icon-service-Disks.svg',
                text: 'Azure Disks',
                group: 106,
                loc: '750 100',
                edge: [15],
                scale : false
            }
        ]
    },
    Management:{
        Azure_Monitor:[
            {
                key:20,
                icon:'resources/Icons/Management + Governance/00001-icon-service-Monitor.svg',
                text: 'Azure Monitor',
                group: 107,
                loc: '1050 500',
                edge: [18,19,20],
                scale : false
            },
            {
                key:21,
                icon:'resources/Icons/Management + Governance/00009-icon-service-Log-Analytics-Workspaces.svg',
                text: 'Log Analytics',
                group: 107,
                loc: '1050 600',
                edge: [],
                scale : false
            }
        ]
    },
    Security:{
        Azure_Key_Vault:[
            {
            key:22,
            icon:'resources/Icons/Security/10245-icon-service-Key-Vaults.svg',
            text: 'Azure Key Vault',
            group: 101,
            loc: '400 100',
            edge: [17,19],
            scale : false
            }
        ] 
    }



}

export const GroupData = {
    101: {
        key: 101,
        color: "white",
        stroke: "1px dashed blue",
        name: 'Resource Group',
        text: 'Resource Group',
        isGroup: true,
        scale : true,
        fromSpot:go.Spot.RightCenter

    },
    102: {
        key: 102,
        color: "gray",
        stroke: "1px dashed blue",
        group: 101,
        name: 'Blob Group',
        text: '',
        isGroup: true,
        scale : true
    },
    103: {
        key: 103,
        color: "#d7d7d6",
        name: 'Web Front End',
        text: 'Compute Services',
        group: 101,
        isGroup: true,
        scale : true
    },
    104: {
        key: 104,
        color: "#d7d7d6",
        name: 'Data Storage',
        text: 'Database',
        group: 101,
        isGroup: true,
        scale : true
    },
    105: {
        key: 105,
        color: "white",
        name: 'App Service Plan',
        text: 'App Service Plan',
        group: 103,
        isGroup: true,
        scale : true
    },
    106: {
        key: 106,
        color: "#d7d7d6",
        name: 'Storage',
        text: 'Data Storage',
        group: 101,
        isGroup: true,
        scale : false
    },
    107: {
        key: 107,
        color: "#d7d7d6",
        name: 'Monitoring',
        text: '',
        group: 101,
        isGroup: true,
        scale : false
    },
}

export const edgeData = {
    1: {
        key: 1,
        from: 1,
        to: 5,
        bends: [],
        labels: ['Authentication'],
        text:'Authentication',
        tag: null,
        stroke: '1px dashed gray',
        routing:go.Link.Normal
    },
    2: {
        key: 2,
        from: 1,
        to: 3,
        bends: [],
        labels: ['DNS Lookup'],
        text: 'DNS Lookup',
        tag: null,
        stroke: '1px dashed gray',
        routing:go.Link.Normal
    },
    3: {
        key: 3,
        from: 2,
        to: 4,
        bends: [],
        labels: [],
        tag: null,
        stroke: '1px blue',
        routing:go.Link.Normal
    },
    4: {
        key: 4,
        from: 1,
        to: 2,
        bends: [],
        labels: [],
        tag: null,
        stroke: '1px blue',
        routing:go.Link.Normal
    },
    5: {
        key: 5,
        from: 4,
        to: 1,
        bends: [],
        labels: [],
        tag: null,
        stroke: '1px dashed blak',
        routing:go.Link.Normal
    },
    6: {
        key: 6,
        from: 13,
        to: 2,
        bends: [],
        labels: [],
        tag: null,
        stroke: '1px dashed blak',
        routing:go.Link.Normal
    },
    7: {
        key: 7,
        from: 105,
        to: 6,
        bends: [],
        labels: [],
        tag: null,
        stroke: '1px dashed blak',
        routing:go.Link.Normal
    },
    8: {
        key: 8,
        from: 6,
        to: 16,
        bends: [],
        labels: [],
        tag: null,
        stroke: '1px dashed blak',
        routing:go.Link.Normal
    },
    9: {
        key: 9,
        from: 16,
        to: 8,
        bends: [],
        labels: [],
        tag: null,
        stroke: '1px dashed blak',
        routing:go.Link.Normal
    },
    10: {
        key: 10,
        from: 104,
        to: 103,
        bends: [],
        labels: [],
        tag: null,
        stroke: '1px dashed blak',
        routing:go.Link.AvoidsNodes
    },
    11: {
        key: 11,
        from: 103,
        to: 10,
        bends: [],
        labels: [],
        tag: null,
        stroke: '1px dashed blak',
        routing:go.Link.Orthogonal
    },
    12: {
        key: 12,
        from: 10,
        to: 104,
        bends: [],
        labels: [],
        tag: null,
        stroke: '1px dashed blak',
        routing:go.Link.Orthogonal
    },
    13: {
        key: 13,
        from: 5,
        to: 17,
        bends: [],
        labels: [],
        tag: null,
        stroke: '1px dashed blak',
        routing:go.Link.Normal
    },
    14: {
        key: 14,
        from: 4,
        to: 103,
        bends: [],
        labels: [],
        tag: null,
        stroke: '1px dashed blak',
        routing:go.Link.Orthogonal
    },
    15: {
        key: 15,
        from: 106,
        to: 103,
        bends: [],
        labels: [],
        tag: null,
        stroke: '1px dashed blak',
        noDuplicate:true,
        routing:go.Link.Orthogonal
    },
    16: {
        key: 16,
        from: 106,
        to: 103,
        bends: [],
        labels: [],
        tag: null,
        stroke: '1px dashed blak',
        routing:go.Link.Orthogonal
    },
    17: {
        key: 17,
        from: 103,
        fromSpot:go.Spot.TopRightSides,
        to: 22,
        bends: [],
        labels: [],
        tag: null,
        stroke: '1px dashed blak',
        noDuplicate:true,
        routing:go.Link.Orthogonal
    },
    18:{
        key: 18,
        from: 103,
        fromSpot:go.Spot.BottomCenter,
        to: 107,
        toSpot:go.Spot.LeftCenter,
        bends: [],
        labels: [],
        text:'Diagnostic Logs and Metric Data',
        tag: null,
        stroke: '1px dashed blak',
        noDuplicate:true,
        routing:go.Link.Orthogonal
    },
    19:{
        key: 19,
        from: 22,
        fromSpot:go.Spot.LeftCenter,
        to: 107,
        toSpot:go.Spot.LeftCenter,
        bends: [],
        labels: [],
        tag: null,
        stroke: '1px dashed blak',
        noDuplicate:true,
        routing:go.Link.AvoidsNodes
    },
    20:{
        key: 20,
        from: 104,
        to:107,
        fromSpot:go.Spot.BottomCenter,
        toSpot:go.Spot.BottomRightSides,
        bends: [],
        labels: [],
        text:'Diagnostic logs',
        tag: null,
        stroke: '1px dashed blak',
        noDuplicate:true,
        routing:go.Link.Orthogonal
    },
    99: {
        key: 99,
        from: 101,
        to: 1101,
        bends: [],
        fromSpot:go.Spot.RightCenter,
        toSpot:go.Spot.RightCenter,
        labels: ['Geo Replication'],
        text: 'Geo Replication',
        tag: null,
        stroke: '1px dashed blcak',
        routing:go.Link.Orthogonal
    },
}