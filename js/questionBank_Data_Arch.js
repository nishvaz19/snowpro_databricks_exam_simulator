/* ======================================================
ENTERPRISE DATA ARCHITECTURE & DATA WAREHOUSE
====================================================== */

const questionBank = [

{
id:1,
difficulty:"easy",
category:"architecture",
question:"What is the primary goal of an Enterprise Data Warehouse?",
options:[
"Serve transactional workloads",
"Support analytics and reporting",
"Replace operational databases",
"Store application configuration"
],
answer:1,
explanation:"Enterprise Data Warehouses are designed for analytics, BI reporting, and decision support rather than operational transaction processing."
},

{
id:2,
difficulty:"easy",
category:"architecture",
question:"Which architecture separates compute and storage for scalability?",
options:[
"On-Prem Data Warehouse",
"Cloud Data Warehouse",
"Flat File Architecture",
"Client Server Model"
],
answer:1,
explanation:"Cloud warehouses like Snowflake and BigQuery separate storage and compute for elastic scalability."
},

{
id:3,
difficulty:"medium",
category:"data-modelling",
question:"Who popularized dimensional modelling used in data warehouses?",
options:[
"Edgar Codd",
"Ralph Kimball",
"Bill Inmon",
"Michael Stonebraker"
],
answer:1,
explanation:"Ralph Kimball introduced dimensional modelling using star schemas for analytics systems."
},

{
id:4,
difficulty:"easy",
category:"data-modelling",
question:"Which schema is most commonly used in analytics data warehouses?",
options:[
"Star Schema",
"Network Schema",
"Hierarchical Schema",
"Graph Schema"
],
answer:0,
explanation:"Star schema is widely used because it simplifies analytical queries."
},

{
id:5,
difficulty:"medium",
category:"data-modelling",
question:"What is the grain of a fact table?",
options:[
"Number of columns in a table",
"Level of detail stored in each row",
"Number of indexes",
"Data compression level"
],
answer:1,
explanation:"Grain defines the lowest level of detail represented in the fact table."
},

{
id:6,
difficulty:"medium",
category:"data-modelling",
question:"Which fact table type records every individual event?",
options:[
"Snapshot Fact",
"Transaction Fact",
"Accumulating Fact",
"Aggregate Fact"
],
answer:1,
explanation:"Transaction fact tables store each event such as purchases or financial transactions."
},

{
id:7,
difficulty:"medium",
category:"data-modelling",
question:"Which Slowly Changing Dimension preserves full historical data?",
options:[
"SCD Type 1",
"SCD Type 2",
"SCD Type 3",
"SCD Type 0"
],
answer:1,
explanation:"SCD Type 2 stores history by creating new rows for each change."
},

{
id:8,
difficulty:"medium",
category:"data-engineering",
question:"Which ingestion technique captures database changes from transaction logs?",
options:[
"Snapshot replication",
"Change Data Capture",
"Manual batch export",
"Data scraping"
],
answer:1,
explanation:"Log-based Change Data Capture captures changes directly from database transaction logs."
},

{
id:9,
difficulty:"medium",
category:"data-engineering",
question:"Which architecture layer stores raw unprocessed data in a lakehouse?",
options:[
"Gold Layer",
"Silver Layer",
"Bronze Layer",
"Diamond Layer"
],
answer:2,
explanation:"Bronze layer stores raw ingested data before transformation."
},

{
id:10,
difficulty:"medium",
category:"lakehouse",
question:"Which architecture combines data lakes and warehouses?",
options:[
"Lambda Architecture",
"Lakehouse Architecture",
"Service Mesh",
"OLTP Architecture"
],
answer:1,
explanation:"Lakehouse architecture merges lake flexibility with warehouse performance."
},

{
id:11,
difficulty:"medium",
category:"streaming",
question:"What is the main purpose of an event streaming platform?",
options:[
"Store relational data",
"Process real-time data streams",
"Replace databases",
"Provide BI dashboards"
],
answer:1,
explanation:"Streaming platforms process high-volume real-time event streams."
},

{
id:12,
difficulty:"hard",
category:"architecture",
question:"Which architecture layer defines business metrics like revenue or churn?",
options:[
"Data Lake",
"Streaming Layer",
"Semantic Layer",
"ETL Layer"
],
answer:2,
explanation:"Semantic layers standardize business metrics used across analytics tools."
},

{
id:13,
difficulty:"medium",
category:"governance",
question:"Which concept tracks how data flows from source systems to dashboards?",
options:[
"Data replication",
"Data lineage",
"Data indexing",
"Data caching"
],
answer:1,
explanation:"Data lineage shows how data moves across pipelines and systems."
},

{
id:14,
difficulty:"medium",
category:"security",
question:"Which security model assigns permissions based on roles?",
options:[
"RBAC",
"ABAC",
"MAC",
"DAC"
],
answer:0,
explanation:"Role-Based Access Control assigns permissions via roles."
},

{
id:15,
difficulty:"hard",
category:"ml-platform",
question:"What is the primary function of a Feature Store?",
options:[
"Store images",
"Manage ML features for training and inference",
"Store SQL queries",
"Replace data warehouses"
],
answer:1,
explanation:"Feature stores store ML features for model training and real-time inference."
},

{
id:16,
difficulty:"medium",
category:"performance",
question:"Which technique improves query performance by splitting large tables?",
options:[
"Partitioning",
"Encryption",
"Masking",
"Normalization"
],
answer:0,
explanation:"Partitioning divides large tables into smaller segments to improve query performance."
},

{
id:17,
difficulty:"hard",
category:"data-fabric",
question:"What is the primary purpose of a Data Fabric architecture?",
options:[
"Centralized OLTP processing",
"Unified data access across distributed systems",
"Replace data lakes",
"Store machine learning models"
],
answer:1,
explanation:"Data Fabric provides unified data access across distributed data sources."
},

{
id:18,
difficulty:"hard",
category:"big-data",
question:"Which modeling approach separates Hubs, Links, and Satellites?",
options:[
"Dimensional Modeling",
"Data Vault Modeling",
"Graph Modeling",
"Columnar Modeling"
],
answer:1,
explanation:"Data Vault uses Hubs, Links, and Satellites to enable scalable data warehouse modeling."
},

{
id:19,
difficulty:"hard",
category:"event-architecture",
question:"Which modeling pattern records every user interaction as an event?",
options:[
"Activity Schema",
"Snowflake Schema",
"Network Model",
"Hierarchical Model"
],
answer:0,
explanation:"Activity schemas store all user interactions as events."
},

{
id:20,
difficulty:"hard",
category:"scale",
question:"Which architecture supports 100B+ events per day systems?",
options:[
"Single-node database",
"Distributed streaming architecture",
"Excel spreadsheets",
"Manual ETL processing"
],
answer:1,
explanation:"Petabyte-scale architectures rely on distributed event streaming platforms."
}

];
