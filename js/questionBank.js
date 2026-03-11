const questionBank = [

/* ======================================================
SNOWFLAKE ARCHITECTURE
====================================================== */

{
id:1,
difficulty:"easy",
category:"architecture",
question:"What is the primary architectural advantage of Snowflake compared to traditional databases?",
options:[
"Separation of compute and storage",
"Use of indexes",
"Single node query engine",
"Local disk storage"
],
answer:0,
explanation:"Snowflake separates compute (virtual warehouses) from storage allowing independent scaling."
},

{
id:2,
difficulty:"easy",
category:"architecture",
question:"Which layer in Snowflake manages authentication, metadata, and query optimization?",
options:[
"Storage Layer",
"Cloud Services Layer",
"Compute Layer",
"Warehouse Layer"
],
answer:1,
explanation:"The Cloud Services layer handles authentication, infrastructure management, metadata, and query parsing."
},

{
id:3,
difficulty:"easy",
category:"architecture",
question:"Which Snowflake component executes SQL queries?",
options:[
"Virtual Warehouse",
"Database",
"Stage",
"Metadata Layer"
],
answer:0,
explanation:"Virtual warehouses are compute clusters responsible for executing queries."
},

{
id:4,
difficulty:"medium",
category:"architecture",
question:"Which layer stores compressed micro-partitions?",
options:[
"Cloud Services Layer",
"Storage Layer",
"Compute Layer",
"Warehouse Layer"
],
answer:1,
explanation:"The storage layer stores compressed micro-partitions for optimized storage."
},

{
id:5,
difficulty:"medium",
category:"architecture",
question:"What happens when multiple warehouses query the same table?",
options:[
"They compete for CPU resources",
"They share compute resources",
"They operate independently",
"They lock the table"
],
answer:2,
explanation:"Warehouses operate independently due to separation of compute and storage."
},

{
id:6,
difficulty:"hard",
category:"architecture",
question:"What component is responsible for query compilation?",
options:[
"Cloud Services",
"Virtual Warehouse",
"Storage Layer",
"Query Cache"
],
answer:0,
explanation:"Query compilation occurs in the Cloud Services layer."
},

/* ======================================================
VIRTUAL WAREHOUSES
====================================================== */

{
id:7,
difficulty:"easy",
category:"warehouse",
question:"What does a Snowflake Virtual Warehouse provide?",
options:[
"Data storage",
"Compute resources for queries",
"User authentication",
"Network security"
],
answer:1,
explanation:"Virtual warehouses provide compute resources used for executing SQL queries."
},

{
id:8,
difficulty:"easy",
category:"warehouse",
question:"What happens when AUTO_SUSPEND is enabled?",
options:[
"Warehouse shuts down after inactivity",
"Warehouse deletes cached results",
"Warehouse scales automatically",
"Warehouse stops queries"
],
answer:0,
explanation:"AUTO_SUSPEND automatically suspends a warehouse after a defined inactivity period."
},

{
id:9,
difficulty:"medium",
category:"warehouse",
question:"What Snowflake feature automatically adds clusters to support concurrency?",
options:[
"Auto Suspend",
"Multi-Cluster Warehouse",
"Result Cache",
"Snowpipe"
],
answer:1,
explanation:"Multi-cluster warehouses add compute clusters to handle concurrency spikes."
},

{
id:10,
difficulty:"medium",
category:"warehouse",
question:"Which parameter controls number of concurrent queries?",
options:[
"MAX_CLUSTER_COUNT",
"MAX_CONCURRENCY_LEVEL",
"AUTO_RESUME",
"STATEMENT_TIMEOUT"
],
answer:1,
explanation:"MAX_CONCURRENCY_LEVEL defines concurrency before queries queue."
},

{
id:11,
difficulty:"hard",
category:"warehouse",
question:"Which action will NOT interrupt running queries?",
options:[
"Resizing warehouse",
"Suspending warehouse",
"Dropping warehouse",
"Restarting account"
],
answer:0,
explanation:"Resizing warehouses affects only new queries."
},

/* ======================================================
DATA LOADING
====================================================== */

{
id:12,
difficulty:"easy",
category:"data_loading",
question:"Which command loads data into a Snowflake table?",
options:[
"COPY INTO",
"LOAD DATA",
"INSERT FILE",
"IMPORT DATA"
],
answer:0,
explanation:"COPY INTO is the primary command used to load data."
},

{
id:13,
difficulty:"easy",
category:"data_loading",
question:"Which Snowflake feature automatically loads new files from cloud storage?",
options:[
"Streams",
"Tasks",
"Snowpipe",
"External Tables"
],
answer:2,
explanation:"Snowpipe provides continuous automated ingestion."
},

{
id:14,
difficulty:"medium",
category:"data_loading",
question:"What is the optimal file size for Snowpipe ingestion?",
options:[
"5KB-100KB",
"5MB-100MB",
"1GB-5GB",
"10GB+"
],
answer:1,
explanation:"Snowflake recommends files between 5MB and 100MB."
},

{
id:15,
difficulty:"medium",
category:"data_loading",
question:"Which command uploads local files into an internal stage?",
options:[
"COPY",
"PUT",
"LOAD",
"STAGE"
],
answer:1,
explanation:"PUT uploads files from local systems into Snowflake stages."
},

{
id:16,
difficulty:"hard",
category:"data_loading",
question:"Which option removes the outer JSON array when loading files?",
options:[
"FLATTEN_ARRAY",
"STRIP_OUTER_ARRAY",
"REMOVE_ARRAY",
"ARRAY_TRIM"
],
answer:1,
explanation:"STRIP_OUTER_ARRAY removes the top-level JSON array."
},

/* ======================================================
CACHING
====================================================== */

{
id:17,
difficulty:"easy",
category:"performance",
question:"Which cache stores final query results?",
options:[
"Metadata Cache",
"Result Cache",
"Warehouse Cache",
"Local Cache"
],
answer:1,
explanation:"Result Cache stores final query output for 24 hours."
},

{
id:18,
difficulty:"medium",
category:"performance",
question:"When can result cache be reused?",
options:[
"When query text changes",
"When underlying data changes",
"When identical query is executed",
"When warehouse size changes"
],
answer:2,
explanation:"Queries must be identical and underlying data unchanged."
},

{
id:19,
difficulty:"hard",
category:"performance",
question:"Which cache requires an active warehouse?",
options:[
"Result Cache",
"Metadata Cache",
"Warehouse Cache",
"Cloud Cache"
],
answer:2,
explanation:"Warehouse cache stores local data and requires compute."
},

/* ======================================================
SECURITY
====================================================== */

{
id:20,
difficulty:"easy",
category:"security",
question:"Which Snowflake model controls permissions?",
options:[
"RBAC",
"ABAC",
"LDAP",
"ACL"
],
answer:0,
explanation:"Snowflake uses Role Based Access Control."
},

{
id:21,
difficulty:"medium",
category:"security",
question:"Which role can manage users and roles?",
options:[
"SYSADMIN",
"SECURITYADMIN",
"USERADMIN",
"ACCOUNTADMIN"
],
answer:1,
explanation:"SECURITYADMIN manages users, roles and privileges."
},

{
id:22,
difficulty:"medium",
category:"security",
question:"Which feature masks sensitive data dynamically?",
options:[
"Encryption",
"Masking Policy",
"Secure Views",
"Network Policy"
],
answer:1,
explanation:"Masking policies dynamically mask column data."
},

{
id:23,
difficulty:"hard",
category:"security",
question:"Which privilege allows viewing masked data?",
options:[
"UNMASK",
"ADMIN",
"SHOW DATA",
"VIEW DATA"
],
answer:0,
explanation:"UNMASK privilege allows viewing masked values."
},

/* ======================================================
TIME TRAVEL & FAILSAFE
====================================================== */

{
id:24,
difficulty:"easy",
category:"data_protection",
question:"How long is Fail-safe retention?",
options:[
"1 day",
"3 days",
"7 days",
"30 days"
],
answer:2,
explanation:"Fail-safe retention period is always 7 days."
},

{
id:25,
difficulty:"easy",
category:"data_protection",
question:"What feature allows querying historical data?",
options:[
"Fail-safe",
"Time Travel",
"Snapshot",
"Replication"
],
answer:1,
explanation:"Time Travel allows querying past data versions."
},

{
id:26,
difficulty:"medium",
category:"data_protection",
question:"What is maximum Time Travel retention for Enterprise edition?",
options:[
"1 day",
"7 days",
"30 days",
"90 days"
],
answer:3,
explanation:"Enterprise edition supports up to 90 days."
},

{
id:27,
difficulty:"hard",
category:"data_protection",
question:"Which tables do NOT support Time Travel?",
options:[
"Permanent tables",
"Transient tables",
"External tables",
"Temporary tables"
],
answer:2,
explanation:"External tables do not support Time Travel."
},

/* ======================================================
SEMI STRUCTURED DATA
====================================================== */

{
id:28,
difficulty:"easy",
category:"semi_structured",
question:"Which Snowflake data type stores JSON?",
options:[
"OBJECT",
"ARRAY",
"VARIANT",
"MAP"
],
answer:2,
explanation:"VARIANT stores semi-structured data like JSON."
},

{
id:29,
difficulty:"medium",
category:"semi_structured",
question:"Which function converts VARIANT to relational rows?",
options:[
"EXPLODE",
"FLATTEN",
"NORMALIZE",
"UNNEST"
],
answer:1,
explanation:"FLATTEN expands semi-structured arrays."
},

{
id:30,
difficulty:"hard",
category:"semi_structured",
question:"Which operator accesses JSON attributes?",
options:[
":",
".",
"->",
"::"
],
answer:0,
explanation:"The colon operator accesses JSON keys."
},

/* ======================================================
STREAMS & TASKS
====================================================== */

{
id:31,
difficulty:"easy",
category:"pipelines",
question:"What object tracks table changes?",
options:[
"Task",
"Stream",
"Pipe",
"Log"
],
answer:1,
explanation:"Streams track inserts, updates, and deletes."
},

{
id:32,
difficulty:"medium",
category:"pipelines",
question:"Which object schedules SQL execution?",
options:[
"Stream",
"Pipe",
"Task",
"Warehouse"
],
answer:2,
explanation:"Tasks schedule SQL statements."
},

{
id:33,
difficulty:"hard",
category:"pipelines",
question:"Which pipeline pattern uses Streams + Tasks?",
options:[
"CDC pipelines",
"Batch ETL",
"External ingestion",
"Warehouse scaling"
],
answer:0,
explanation:"Streams + Tasks implement Change Data Capture pipelines."
},

/* ======================================================
DATA SHARING
====================================================== */

{
id:34,
difficulty:"easy",
category:"sharing",
question:"What Snowflake feature shares data without copying?",
options:[
"Replication",
"Secure Data Sharing",
"Export",
"External Tables"
],
answer:1,
explanation:"Secure Data Sharing allows sharing without moving data."
},

{
id:35,
difficulty:"medium",
category:"sharing",
question:"Which object defines shared datasets?",
options:[
"Share",
"Replication Group",
"Warehouse",
"Database Role"
],
answer:0,
explanation:"Shares define objects available for sharing."
},

{
id:36,
difficulty:"hard",
category:"sharing",
question:"Which account type accesses shares without full license?",
options:[
"Reader Account",
"External Account",
"Guest Account",
"Partner Account"
],
answer:0,
explanation:"Reader accounts access shared data without full Snowflake license."
},

/* ======================================================
PERFORMANCE OPTIMIZATION
====================================================== */

{
id:37,
difficulty:"medium",
category:"performance",
question:"Which feature reorganizes large tables for filtering?",
options:[
"Clustering Key",
"Partition Index",
"Sort Key",
"Hash Key"
],
answer:0,
explanation:"Clustering keys optimize large tables."
},

{
id:38,
difficulty:"hard",
category:"performance",
question:"Which scenario benefits most from clustering?",
options:[
"Small lookup tables",
"Large range queries",
"Temporary tables",
"Query cache usage"
],
answer:1,
explanation:"Clustering benefits large tables with range filtering."
},

{
id:39,
difficulty:"medium",
category:"performance",
question:"Which tool analyzes query performance?",
options:[
"Query Profiler",
"Query Debugger",
"Execution Viewer",
"Warehouse Monitor"
],
answer:0,
explanation:"Query profiler visualizes execution steps."
},

/* ======================================================
SQL PRACTICE QUESTIONS
====================================================== */

{
id:40,
difficulty:"medium",
category:"sql",
question:"Which command shows all warehouses?",
options:[
"SHOW WAREHOUSES",
"LIST WAREHOUSES",
"DESCRIBE WAREHOUSES",
"SELECT * FROM WAREHOUSES"
],
answer:0,
explanation:"SHOW WAREHOUSES lists all virtual warehouses."
},

{
id:41,
difficulty:"medium",
category:"sql",
question:"Which command lists files in a stage?",
options:[
"SHOW FILES",
"LIST @stage",
"GET FILES",
"STAGE FILES"
],
answer:1,
explanation:"LIST @stage displays staged files."
},

{
id:42,
difficulty:"medium",
category:"sql",
question:"Which SQL command unloads table data?",
options:[
"COPY INTO stage",
"EXPORT TABLE",
"UNLOAD DATA",
"DUMP TABLE"
],
answer:0,
explanation:"COPY INTO stage unloads table data."
},

{
id:43,
difficulty:"hard",
category:"sql",
question:"Which function returns current role?",
options:[
"CURRENT_ROLE()",
"ROLE()",
"USER_ROLE()",
"GET_ROLE()"
],
answer:0,
explanation:"CURRENT_ROLE() returns active role."
},

{
id:44,
difficulty:"hard",
category:"sql",
question:"Which command displays grants for a role?",
options:[
"SHOW GRANTS TO ROLE",
"SHOW ROLE GRANTS",
"LIST GRANTS",
"DISPLAY GRANTS"
],
answer:0,
explanation:"SHOW GRANTS TO ROLE shows role privileges."
},

/* ======================================================
ADDITIONAL QUESTIONS
====================================================== */

{
id:45,
difficulty:"easy",
category:"file_formats",
question:"Default file format for COPY if none specified?",
options:[
"JSON",
"CSV",
"PARQUET",
"AVRO"
],
answer:1,
explanation:"CSV is the default format."
},

{
id:46,
difficulty:"medium",
category:"file_formats",
question:"Which format loads fastest?",
options:[
"CSV",
"JSON",
"PARQUET",
"XML"
],
answer:2,
explanation:"Columnar formats like Parquet load fastest."
},

{
id:47,
difficulty:"medium",
category:"metadata",
question:"Where are account metadata views stored?",
options:[
"ACCOUNT_USAGE",
"INFO_SCHEMA",
"METADATA_DB",
"SYS_TABLES"
],
answer:0,
explanation:"ACCOUNT_USAGE contains metadata views."
},

{
id:48,
difficulty:"hard",
category:"metadata",
question:"Query history retention?",
options:[
"7 days",
"14 days",
"90 days",
"365 days"
],
answer:2,
explanation:"ACCOUNT_USAGE retains 90 days."
},

{
id:49,
difficulty:"medium",
category:"security",
question:"Which feature restricts IP access?",
options:[
"Network Policy",
"Masking Policy",
"Access Policy",
"Security Policy"
],
answer:0,
explanation:"Network policies restrict login IP ranges."
},

{
id:50,
difficulty:"easy",
category:"data_types",
question:"Which type stores geospatial data?",
options:[
"GEO",
"GEOGRAPHY",
"LOCATION",
"MAP"
],
answer:1,
explanation:"GEOGRAPHY stores spatial data."
},

{
id:51,
difficulty:"medium",
category:"replication",
question:"Which feature replicates databases across regions?",
options:[
"Database Replication",
"Secure Share",
"Failover Groups",
"Mirror Tables"
],
answer:2,
explanation:"Failover groups replicate databases."
},

{
id:52,
difficulty:"hard",
category:"replication",
question:"What supports disaster recovery?",
options:[
"Failover Groups",
"Secure Views",
"Masking Policies",
"Streams"
],
answer:0,
explanation:"Failover groups support DR."
},

{
id:53,
difficulty:"medium",
category:"monitoring",
question:"Which view tracks warehouse load?",
options:[
"WAREHOUSE_LOAD_HISTORY",
"QUERY_HISTORY",
"WAREHOUSE_STATS",
"LOAD_MONITOR"
],
answer:0,
explanation:"WAREHOUSE_LOAD_HISTORY tracks load."
},

{
id:54,
difficulty:"medium",
category:"monitoring",
question:"Which table tracks logins?",
options:[
"LOGIN_HISTORY",
"USER_ACTIVITY",
"AUTH_LOG",
"ACCESS_HISTORY"
],
answer:0,
explanation:"LOGIN_HISTORY tracks user logins."
},

{
id:55,
difficulty:"hard",
category:"monitoring",
question:"Which view tracks access to objects?",
options:[
"ACCESS_HISTORY",
"QUERY_LOG",
"OBJECT_ACCESS",
"ROLE_HISTORY"
],
answer:0,
explanation:"ACCESS_HISTORY records object usage."
},

{
id:56,
difficulty:"medium",
category:"cost",
question:"What consumes Snowflake credits?",
options:[
"Storage",
"Compute warehouses",
"Metadata",
"Stages"
],
answer:1,
explanation:"Compute usage consumes credits."
},

{
id:57,
difficulty:"hard",
category:"cost",
question:"Which feature reduces compute cost?",
options:[
"Auto Suspend",
"Replication",
"Fail-safe",
"Materialized Views"
],
answer:0,
explanation:"Auto suspend stops compute billing."
},

{
id:58,
difficulty:"medium",
category:"security",
question:"Which authentication method is supported?",
options:[
"OAuth",
"Password",
"MFA",
"All of the above"
],
answer:3,
explanation:"Snowflake supports multiple auth methods."
},

{
id:59,
difficulty:"medium",
category:"stages",
question:"Which stage type is managed by Snowflake?",
options:[
"Internal Stage",
"External Stage",
"S3 Stage",
"Azure Stage"
],
answer:0,
explanation:"Internal stages are managed by Snowflake."
},

{
id:60,
difficulty:"hard",
category:"stages",
question:"Which command removes files from a stage?",
options:[
"REMOVE",
"DELETE",
"DROP FILE",
"PURGE"
],
answer:0,
explanation:"REMOVE deletes staged files."
},
{
id:61,
difficulty:"medium",
category:"architecture",
question:"What is the main purpose of Snowflake virtual warehouses?",
options:[
"Data storage",
"Query compute execution",
"Metadata management",
"User authentication"
],
answer:1,
explanation:"Virtual warehouses provide independent compute resources used to run queries."
},

{
id:62,
difficulty:"easy",
category:"architecture",
question:"Where does Snowflake store table data?",
options:[
"Virtual Warehouse",
"Cloud Storage Layer",
"Metadata Layer",
"Client Cache"
],
answer:1,
explanation:"Snowflake stores table data in the cloud storage layer."
},

{
id:63,
difficulty:"medium",
category:"architecture",
question:"Which Snowflake layer manages query parsing and optimization?",
options:[
"Cloud Services Layer",
"Storage Layer",
"Compute Layer",
"Network Layer"
],
answer:0,
explanation:"The Cloud Services layer manages query parsing, optimization, and metadata."
},

{
id:64,
difficulty:"medium",
category:"query_optimization",
question:"Which feature allows Snowflake to prune unnecessary data blocks during queries?",
options:[
"Result Cache",
"Micro-partition pruning",
"Query acceleration",
"Materialized views"
],
answer:1,
explanation:"Snowflake uses micro-partition metadata to skip irrelevant partitions."
},

{
id:65,
difficulty:"medium",
category:"query_optimization",
question:"Which cache stores results of previously executed queries?",
options:[
"Metadata cache",
"Result cache",
"Query cache",
"Warehouse cache"
],
answer:1,
explanation:"Snowflake result cache stores query results for reuse."
},

{
id:66,
difficulty:"hard",
category:"query_optimization",
question:"What happens if underlying data changes after a cached query?",
options:[
"Cache remains valid",
"Cache invalidates automatically",
"Query fails",
"Manual refresh required"
],
answer:1,
explanation:"Snowflake invalidates cached results when underlying data changes."
},

{
id:67,
difficulty:"medium",
category:"streams",
question:"What is the primary purpose of a Snowflake stream?",
options:[
"Store backup data",
"Track table changes",
"Optimize query plans",
"Manage compute clusters"
],
answer:1,
explanation:"Streams track change data capture (CDC) for tables."
},

{
id:68,
difficulty:"medium",
category:"streams",
question:"Streams record which type of changes?",
options:[
"INSERT only",
"UPDATE only",
"INSERT UPDATE DELETE",
"DDL changes"
],
answer:2,
explanation:"Streams track insert, update, and delete changes."
},

{
id:69,
difficulty:"hard",
category:"streams",
question:"What happens when a stream is consumed by a task?",
options:[
"Data deletes from table",
"Stream offset advances",
"Table resets",
"Warehouse restarts"
],
answer:1,
explanation:"Consuming a stream advances the stream offset."
},

{
id:70,
difficulty:"medium",
category:"tasks",
question:"Which feature schedules SQL statements automatically?",
options:[
"Streams",
"Tasks",
"Procedures",
"Warehouses"
],
answer:1,
explanation:"Tasks allow scheduled execution of SQL statements."
},

{
id:71,
difficulty:"medium",
category:"tasks",
question:"Which syntax creates a scheduled Snowflake task?",
options:[
"CREATE TASK",
"CREATE JOB",
"CREATE PROCESS",
"CREATE SCHEDULE"
],
answer:0,
explanation:"CREATE TASK defines a scheduled SQL job."
},

{
id:72,
difficulty:"hard",
category:"tasks",
question:"Which object can trigger a task automatically when new data arrives?",
options:[
"Stage",
"Stream",
"External function",
"Warehouse"
],
answer:1,
explanation:"Tasks can be triggered by streams detecting data changes."
},

{
id:73,
difficulty:"medium",
category:"dynamic_tables",
question:"Dynamic tables are primarily used for what purpose?",
options:[
"Automated data transformation pipelines",
"External data sharing",
"User authentication",
"File staging"
],
answer:0,
explanation:"Dynamic tables automate incremental data transformations."
},

{
id:74,
difficulty:"medium",
category:"dynamic_tables",
question:"Dynamic tables refresh based on what parameter?",
options:[
"Warehouse size",
"Target lag",
"Query cost",
"Cache duration"
],
answer:1,
explanation:"Dynamic tables maintain freshness using the TARGET_LAG parameter."
},

{
id:75,
difficulty:"hard",
category:"dynamic_tables",
question:"Dynamic tables replace which traditional pipeline components?",
options:[
"Streams and Tasks",
"External functions",
"Stages",
"Materialized views"
],
answer:0,
explanation:"Dynamic tables simplify pipelines by replacing streams and tasks."
},

{
id:76,
difficulty:"medium",
category:"snowpark",
question:"What language is Snowpark primarily designed to support?",
options:[
"JavaScript",
"Python",
"COBOL",
"Swift"
],
answer:1,
explanation:"Snowpark supports Python, Scala, and Java."
},

{
id:77,
difficulty:"medium",
category:"snowpark",
question:"Snowpark allows developers to run code where?",
options:[
"Client machines",
"Snowflake compute layer",
"External servers",
"Browser"
],
answer:1,
explanation:"Snowpark executes code inside Snowflake warehouses."
},

{
id:78,
difficulty:"hard",
category:"snowpark",
question:"What is a Snowpark DataFrame?",
options:[
"A Snowflake table",
"A distributed data abstraction",
"A warehouse",
"A schema object"
],
answer:1,
explanation:"Snowpark DataFrames represent distributed datasets similar to Spark."
},

{
id:79,
difficulty:"medium",
category:"iceberg",
question:"Snowflake Iceberg tables store data where?",
options:[
"Snowflake storage",
"External object storage",
"Virtual warehouses",
"Local disk"
],
answer:1,
explanation:"Iceberg tables store data in external object storage like S3."
},

{
id:80,
difficulty:"medium",
category:"iceberg",
question:"Iceberg tables allow interoperability with which engines?",
options:[
"Spark",
"Trino",
"Flink",
"All of the above"
],
answer:3,
explanation:"Iceberg tables enable multi-engine access."
},

{
id:81,
difficulty:"hard",
category:"iceberg",
question:"Which metadata format do Iceberg tables use?",
options:[
"JSON metadata files",
"Binary logs",
"SQL tables",
"CSV"
],
answer:0,
explanation:"Iceberg uses JSON metadata manifests."
},

{
id:82,
difficulty:"medium",
category:"security",
question:"Which Snowflake feature restricts access to specific rows?",
options:[
"Row Access Policies",
"Column masking",
"Network policies",
"Stages"
],
answer:0,
explanation:"Row access policies enforce row-level security."
},

{
id:83,
difficulty:"medium",
category:"security",
question:"What feature hides sensitive column values?",
options:[
"Column masking policies",
"Streams",
"Stages",
"Tasks"
],
answer:0,
explanation:"Masking policies protect sensitive column data."
},

{
id:84,
difficulty:"hard",
category:"security",
question:"Which object manages IP restrictions?",
options:[
"Security policy",
"Network policy",
"RBAC policy",
"Access rule"
],
answer:1,
explanation:"Network policies restrict allowed IP addresses."
},

{
id:85,
difficulty:"medium",
category:"rbac",
question:"In Snowflake RBAC, privileges are granted to what?",
options:[
"Users only",
"Roles",
"Tables",
"Warehouses"
],
answer:1,
explanation:"Privileges are assigned to roles."
},

{
id:86,
difficulty:"medium",
category:"rbac",
question:"Which role has the highest privileges in Snowflake?",
options:[
"SYSADMIN",
"ACCOUNTADMIN",
"SECURITYADMIN",
"PUBLIC"
],
answer:1,
explanation:"ACCOUNTADMIN is the top-level role."
},

{
id:87,
difficulty:"hard",
category:"rbac",
question:"Which role typically manages users and roles?",
options:[
"SYSADMIN",
"ACCOUNTADMIN",
"SECURITYADMIN",
"ORGADMIN"
],
answer:2,
explanation:"SECURITYADMIN manages users and roles."
},

{
id:88,
difficulty:"medium",
category:"cost",
question:"What primarily drives Snowflake compute cost?",
options:[
"Storage usage",
"Virtual warehouse runtime",
"Number of users",
"Schema count"
],
answer:1,
explanation:"Compute cost depends on warehouse runtime."
},

{
id:89,
difficulty:"medium",
category:"cost",
question:"Auto-suspend helps reduce costs by:",
options:[
"Deleting data",
"Stopping idle warehouses",
"Reducing storage",
"Compressing tables"
],
answer:1,
explanation:"Auto-suspend stops compute when idle."
},

{
id:90,
difficulty:"hard",
category:"cost",
question:"Which feature helps identify expensive queries?",
options:[
"QUERY_HISTORY",
"STAGE_HISTORY",
"USER_HISTORY",
"ROLE_HISTORY"
],
answer:0,
explanation:"QUERY_HISTORY provides query execution metrics."
},

{
id:91,
difficulty:"medium",
category:"architecture",
question:"Which Snowflake feature enables secure data sharing without copying data?",
options:[
"Data replication",
"Secure data sharing",
"External tables",
"Snowpipe"
],
answer:1,
explanation:"Secure data sharing allows cross-account data access without copying."
},

{
id:92,
difficulty:"medium",
category:"architecture",
question:"What is the smallest unit of data storage in Snowflake?",
options:[
"File block",
"Micro-partition",
"Segment",
"Chunk"
],
answer:1,
explanation:"Snowflake automatically partitions data into micro-partitions."
},

{
id:93,
difficulty:"hard",
category:"architecture",
question:"Approximate size of a Snowflake micro-partition?",
options:[
"1MB",
"16MB",
"50MB",
"200MB"
],
answer:1,
explanation:"Micro-partitions are typically around 16MB compressed."
},

{
id:94,
difficulty:"medium",
category:"query_optimization",
question:"Which feature precomputes query results for faster execution?",
options:[
"Materialized views",
"Stages",
"Streams",
"Tasks"
],
answer:0,
explanation:"Materialized views store precomputed query results."
},

{
id:95,
difficulty:"hard",
category:"query_optimization",
question:"Which function analyzes query execution plans?",
options:[
"EXPLAIN",
"PLAN",
"ANALYZE",
"PROFILE"
],
answer:0,
explanation:"EXPLAIN shows query execution plans."
},

{
id:96,
difficulty:"medium",
category:"snowpipe",
question:"Snowpipe is used for what purpose?",
options:[
"Batch data loading",
"Continuous data ingestion",
"Query optimization",
"Warehouse scaling"
],
answer:1,
explanation:"Snowpipe enables automatic continuous ingestion."
},

{
id:97,
difficulty:"medium",
category:"snowpipe",
question:"Snowpipe is typically triggered by:",
options:[
"File arrival events",
"Manual SQL queries",
"User login",
"Warehouse restart"
],
answer:0,
explanation:"Snowpipe listens for new file events."
},

{
id:98,
difficulty:"hard",
category:"snowpipe",
question:"Snowpipe relies on which messaging service?",
options:[
"SQS / PubSub",
"Kafka",
"RabbitMQ",
"SMTP"
],
answer:0,
explanation:"Snowpipe uses cloud event messaging such as SQS."
},

{
id:99,
difficulty:"medium",
category:"governance",
question:"Which feature tracks data lineage in Snowflake?",
options:[
"Access history",
"Object dependencies",
"Streams",
"Tasks"
],
answer:1,
explanation:"Object dependencies track lineage between objects."
},

{
id:100,
difficulty:"medium",
category:"governance",
question:"Which view tracks object access for auditing?",
options:[
"ACCESS_HISTORY",
"QUERY_HISTORY",
"LOGIN_HISTORY",
"TABLE_HISTORY"
],
answer:0,
explanation:"ACCESS_HISTORY tracks object usage."
},  

];


/* ======================================================
UTILITIES
====================================================== */

function getRandomQuestions(count){
return questionBank
.sort(()=>0.5-Math.random())
.slice(0,count)
}

function getQuestionsByDifficulty(level){
return questionBank.filter(q=>q.difficulty===level)
}

function getQuestionsByCategory(category){
return questionBank.filter(q=>q.category===category)
}
