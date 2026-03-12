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
{
id:101,
difficulty:"medium",
category:"architecture",
question:"Which Snowflake layer manages authentication and access control?",
options:[
"Cloud Services Layer",
"Compute Layer",
"Storage Layer",
"Warehouse Layer"
],
answer:0,
explanation:"Authentication, metadata, and security are handled by the Cloud Services layer."
},

{
id:102,
difficulty:"medium",
category:"architecture",
question:"Snowflake separates storage and compute primarily to:",
options:[
"Improve query syntax",
"Allow independent scaling",
"Reduce SQL complexity",
"Increase network speed"
],
answer:1,
explanation:"Snowflake's architecture allows compute and storage to scale independently."
},

{
id:103,
difficulty:"hard",
category:"architecture",
question:"What component maintains Snowflake metadata including schemas and roles?",
options:[
"Cloud Services",
"Warehouse Cache",
"Micro-partition catalog",
"External metadata service"
],
answer:0,
explanation:"Metadata is stored and managed in the Cloud Services layer."
},

{
id:104,
difficulty:"medium",
category:"query_optimization",
question:"Which Snowflake feature automatically organizes table data for pruning?",
options:[
"Automatic clustering",
"Materialized views",
"Stages",
"Streams"
],
answer:0,
explanation:"Automatic clustering reorganizes micro-partitions to improve pruning."
},

{
id:105,
difficulty:"medium",
category:"query_optimization",
question:"Which command shows query performance metrics?",
options:[
"QUERY_PROFILE",
"QUERY_HISTORY",
"SHOW PROFILE",
"EXPLAIN QUERY"
],
answer:0,
explanation:"QUERY_PROFILE provides detailed query execution metrics."
},

{
id:106,
difficulty:"hard",
category:"query_optimization",
question:"Which factor most affects micro-partition pruning effectiveness?",
options:[
"Warehouse size",
"Clustering keys",
"SQL formatting",
"User roles"
],
answer:1,
explanation:"Clustering keys improve pruning by organizing micro-partition metadata."
},

{
id:107,
difficulty:"medium",
category:"streams",
question:"A stream on a table tracks changes since:",
options:[
"Table creation",
"Last query",
"Last stream consumption",
"Last warehouse restart"
],
answer:2,
explanation:"Streams track changes since the last offset consumed."
},

{
id:108,
difficulty:"medium",
category:"streams",
question:"Which stream type tracks changes on views?",
options:[
"Standard streams",
"Append-only streams",
"View streams",
"Dynamic streams"
],
answer:2,
explanation:"View streams capture changes from underlying tables."
},

{
id:109,
difficulty:"hard",
category:"streams",
question:"Which stream type only tracks inserts?",
options:[
"Append-only stream",
"View stream",
"Standard stream",
"Delta stream"
],
answer:0,
explanation:"Append-only streams track insert operations only."
},

{
id:110,
difficulty:"medium",
category:"tasks",
question:"Tasks in Snowflake execute:",
options:[
"SQL statements",
"Python scripts",
"Java code",
"Shell scripts"
],
answer:0,
explanation:"Tasks run SQL statements or stored procedures."
},

{
id:111,
difficulty:"medium",
category:"tasks",
question:"Which parameter controls task scheduling frequency?",
options:[
"SCHEDULE",
"CRON",
"INTERVAL",
"TASK_RATE"
],
answer:0,
explanation:"The SCHEDULE parameter defines execution timing."
},

{
id:112,
difficulty:"hard",
category:"tasks",
question:"What enables task dependency chains?",
options:[
"TASK GRAPH",
"PIPELINE MODE",
"TASK TREE",
"TASK LINK"
],
answer:0,
explanation:"Task graphs allow dependencies between tasks."
},

{
id:113,
difficulty:"medium",
category:"dynamic_tables",
question:"Dynamic tables update based on:",
options:[
"Refresh schedules",
"Target lag freshness",
"Warehouse uptime",
"Manual triggers"
],
answer:1,
explanation:"Dynamic tables maintain freshness via target lag."
},

{
id:114,
difficulty:"hard",
category:"dynamic_tables",
question:"Dynamic tables are internally implemented using:",
options:[
"Streams and tasks",
"Materialized views",
"External tables",
"Query caches"
],
answer:0,
explanation:"Dynamic tables leverage streams and tasks under the hood."
},

{
id:115,
difficulty:"medium",
category:"snowpark",
question:"Snowpark enables developers to:",
options:[
"Run Python inside Snowflake",
"Replace warehouses",
"Store files",
"Manage roles"
],
answer:0,
explanation:"Snowpark runs developer code inside Snowflake compute."
},

{
id:116,
difficulty:"hard",
category:"snowpark",
question:"Snowpark stored procedures are executed where?",
options:[
"Client environment",
"Warehouse compute layer",
"Cloud services layer",
"External container"
],
answer:1,
explanation:"Snowpark procedures run in warehouse compute."
},

{
id:117,
difficulty:"medium",
category:"iceberg",
question:"Iceberg tables support which type of storage?",
options:[
"External object storage",
"Local disk",
"Warehouse storage",
"Temporary cache"
],
answer:0,
explanation:"Iceberg tables store data in external object storage."
},

{
id:118,
difficulty:"hard",
category:"iceberg",
question:"Which Iceberg feature enables snapshot-based data versioning?",
options:[
"Partition logs",
"Metadata manifests",
"Schema registry",
"External catalog"
],
answer:1,
explanation:"Iceberg metadata manifests track snapshots."
},

{
id:119,
difficulty:"medium",
category:"security",
question:"Which Snowflake feature masks column values dynamically?",
options:[
"Masking policies",
"Streams",
"Views",
"Tasks"
],
answer:0,
explanation:"Masking policies dynamically hide sensitive values."
},

{
id:120,
difficulty:"hard",
category:"security",
question:"Which feature allows conditional data masking?",
options:[
"Role-aware masking policies",
"Network policies",
"Secure views",
"Row access policies"
],
answer:0,
explanation:"Masking policies can apply conditions based on roles."
},

{
id:121,
difficulty:"medium",
category:"rbac",
question:"Which object grants privileges to users indirectly?",
options:[
"Roles",
"Warehouses",
"Tables",
"Schemas"
],
answer:0,
explanation:"Roles grant privileges which are assigned to users."
},

{
id:122,
difficulty:"hard",
category:"rbac",
question:"Which Snowflake feature prevents privilege escalation?",
options:[
"Least privilege RBAC",
"Network policies",
"Task chaining",
"Stages"
],
answer:0,
explanation:"RBAC with least privilege prevents privilege escalation."
},

{
id:123,
difficulty:"medium",
category:"cost",
question:"Which feature automatically suspends idle warehouses?",
options:[
"AUTO_SUSPEND",
"WAREHOUSE_PAUSE",
"COST_OPTIMIZER",
"QUERY_LIMIT"
],
answer:0,
explanation:"AUTO_SUSPEND stops idle warehouses to reduce costs."
},

{
id:124,
difficulty:"medium",
category:"cost",
question:"Which warehouse feature allows concurrency scaling?",
options:[
"Multi-cluster warehouses",
"Elastic compute",
"Query acceleration",
"Warehouse cache"
],
answer:0,
explanation:"Multi-cluster warehouses scale compute clusters."
},

{
id:125,
difficulty:"hard",
category:"cost",
question:"Which view helps identify warehouse credit consumption?",
options:[
"WAREHOUSE_METERING_HISTORY",
"QUERY_HISTORY",
"TABLE_STORAGE_METRICS",
"COST_USAGE"
],
answer:0,
explanation:"WAREHOUSE_METERING_HISTORY shows credit usage."
},

{
id:126,
difficulty:"medium",
category:"query_optimization",
question:"Which query pattern can reduce scan size?",
options:[
"SELECT *",
"Column pruning",
"Nested queries",
"Cross joins"
],
answer:1,
explanation:"Selecting only required columns reduces scanned data."
},

{
id:127,
difficulty:"hard",
category:"query_optimization",
question:"Which feature accelerates queries by caching intermediate results?",
options:[
"Result cache",
"Warehouse cache",
"Local disk cache",
"Micro cache"
],
answer:1,
explanation:"Warehouse cache stores frequently accessed data."
},

{
id:128,
difficulty:"medium",
category:"governance",
question:"Which Snowflake feature tracks object-level access?",
options:[
"ACCESS_HISTORY",
"QUERY_HISTORY",
"LOGIN_HISTORY",
"SESSION_HISTORY"
],
answer:0,
explanation:"ACCESS_HISTORY records object-level access."
},

{
id:129,
difficulty:"hard",
category:"governance",
question:"Which feature supports cross-account data governance?",
options:[
"Secure data sharing",
"External stages",
"Streams",
"Tasks"
],
answer:0,
explanation:"Secure data sharing allows governed cross-account data access."
},

{
id:130,
difficulty:"medium",
category:"architecture",
question:"Which component handles SQL compilation?",
options:[
"Cloud services layer",
"Compute layer",
"Warehouse layer",
"Storage layer"
],
answer:0,
explanation:"SQL compilation happens in the cloud services layer."
},
{
id:131,
difficulty:"medium",
category:"architecture",
question:"Which Snowflake feature enables automatic query acceleration for large scans?",
options:[
"Search Optimization Service",
"Query Acceleration Service",
"Auto Clustering",
"Warehouse Scaling"
],
answer:1,
explanation:"Query Acceleration Service offloads parts of large queries to shared compute."
},

{
id:132,
difficulty:"medium",
category:"architecture",
question:"Which service automatically organizes micro-partitions to improve pruning?",
options:[
"Automatic Clustering",
"Materialized Views",
"Search Optimization",
"Streams"
],
answer:0,
explanation:"Automatic clustering reorganizes micro-partitions to improve performance."
},

{
id:133,
difficulty:"hard",
category:"architecture",
question:"Which Snowflake feature provides cross-region disaster recovery?",
options:[
"Failover Groups",
"Replication Groups",
"Warehouse Backup",
"Stage Replication"
],
answer:0,
explanation:"Failover groups enable cross-region disaster recovery."
},

{
id:134,
difficulty:"medium",
category:"snowpark",
question:"Snowpark allows which type of execution model?",
options:[
"Client-side processing",
"In-database compute execution",
"Edge compute",
"Serverless Python runtime"
],
answer:1,
explanation:"Snowpark executes code directly inside Snowflake warehouses."
},

{
id:135,
difficulty:"hard",
category:"snowpark",
question:"Which API structure is central to Snowpark transformations?",
options:[
"Snowpark DataFrame API",
"SQL Executor",
"Warehouse Engine",
"Compute Handler"
],
answer:0,
explanation:"Snowpark uses DataFrame APIs similar to Spark."
},

{
id:136,
difficulty:"medium",
category:"streams",
question:"Which object records row-level changes for CDC pipelines?",
options:[
"Stream",
"Task",
"Stage",
"Pipe"
],
answer:0,
explanation:"Streams capture change data for tables."
},

{
id:137,
difficulty:"hard",
category:"streams",
question:"What happens when a stream becomes stale?",
options:[
"Stream resets automatically",
"Stream becomes unreadable",
"Offset resets",
"Stream deletes data"
],
answer:1,
explanation:"If data retention passes, streams can become stale."
},

{
id:138,
difficulty:"medium",
category:"tasks",
question:"Which Snowflake object schedules recurring SQL execution?",
options:[
"Task",
"Procedure",
"Stream",
"Pipeline"
],
answer:0,
explanation:"Tasks schedule SQL execution."
},

{
id:139,
difficulty:"hard",
category:"tasks",
question:"Which feature allows dependency chains between tasks?",
options:[
"Task graphs",
"Stream triggers",
"Warehouse scaling",
"SQL pipelines"
],
answer:0,
explanation:"Task graphs allow dependent tasks."
},

{
id:140,
difficulty:"medium",
category:"dynamic_tables",
question:"Dynamic tables aim to replace which ETL pattern?",
options:[
"Streams + Tasks pipelines",
"Stored procedures",
"External stages",
"Secure views"
],
answer:0,
explanation:"Dynamic tables simplify pipelines built using streams and tasks."
},

{
id:141,
difficulty:"medium",
category:"dynamic_tables",
question:"Dynamic table freshness is controlled using:",
options:[
"TARGET_LAG",
"REFRESH_TIME",
"SCHEDULE_INTERVAL",
"PIPELINE_DELAY"
],
answer:0,
explanation:"TARGET_LAG determines freshness goals."
},

{
id:142,
difficulty:"hard",
category:"dynamic_tables",
question:"Dynamic tables internally rely on:",
options:[
"Materialized views",
"Streams and tasks",
"Stages",
"External compute"
],
answer:1,
explanation:"Dynamic tables use streams and tasks internally."
},

{
id:143,
difficulty:"medium",
category:"iceberg",
question:"Iceberg tables allow Snowflake to query:",
options:[
"External open table formats",
"Temporary tables",
"Only Snowflake tables",
"JSON metadata only"
],
answer:0,
explanation:"Iceberg tables support open table formats."
},

{
id:144,
difficulty:"hard",
category:"iceberg",
question:"Which engine interoperability is supported by Iceberg?",
options:[
"Spark",
"Trino",
"Flink",
"All of the above"
],
answer:3,
explanation:"Iceberg supports multiple engines."
},

{
id:145,
difficulty:"medium",
category:"security",
question:"Which feature masks sensitive column values dynamically?",
options:[
"Masking policies",
"Streams",
"Views",
"Tasks"
],
answer:0,
explanation:"Masking policies dynamically mask column data."
},

{
id:146,
difficulty:"hard",
category:"security",
question:"Which Snowflake feature enforces row-level filtering?",
options:[
"Row access policies",
"Network policies",
"Secure views",
"Masking policies"
],
answer:0,
explanation:"Row access policies filter rows dynamically."
},

{
id:147,
difficulty:"medium",
category:"rbac",
question:"Privileges in Snowflake are granted to:",
options:[
"Roles",
"Users",
"Tables",
"Schemas"
],
answer:0,
explanation:"Privileges are assigned to roles."
},

{
id:148,
difficulty:"hard",
category:"rbac",
question:"Which role manages users and roles?",
options:[
"ACCOUNTADMIN",
"SECURITYADMIN",
"SYSADMIN",
"ORGADMIN"
],
answer:1,
explanation:"SECURITYADMIN manages users and roles."
},

{
id:149,
difficulty:"medium",
category:"cost",
question:"Which parameter suspends warehouses when idle?",
options:[
"AUTO_SUSPEND",
"AUTO_STOP",
"COST_LIMIT",
"WAREHOUSE_TIMEOUT"
],
answer:0,
explanation:"AUTO_SUSPEND pauses warehouses when idle."
},

{
id:150,
difficulty:"hard",
category:"cost",
question:"Which table shows compute credit usage history?",
options:[
"WAREHOUSE_METERING_HISTORY",
"QUERY_HISTORY",
"COST_USAGE",
"ACCOUNT_HISTORY"
],
answer:0,
explanation:"Warehouse metering history shows compute credit usage."
},
{
id:151,
difficulty:"medium",
category:"snowpipe",
question:"What is the primary purpose of Snowpipe Streaming?",
options:[
"Batch loading large datasets",
"Low-latency continuous data ingestion",
"Query acceleration",
"Warehouse auto scaling"
],
answer:1,
explanation:"Snowpipe Streaming enables low-latency ingestion of streaming data."
},

{
id:152,
difficulty:"hard",
category:"snowpipe",
question:"Snowpipe Streaming eliminates the need for which component?",
options:[
"Cloud messaging services",
"External stages",
"Streams",
"Tasks"
],
answer:0,
explanation:"Snowpipe Streaming allows direct ingestion without external cloud messaging."
},

{
id:153,
difficulty:"medium",
category:"snowpipe",
question:"Which Snowflake object processes files for continuous ingestion?",
options:[
"PIPE",
"STREAM",
"TASK",
"WAREHOUSE"
],
answer:0,
explanation:"Pipes automate data ingestion using Snowpipe."
},

{
id:154,
difficulty:"hard",
category:"snowpipe",
question:"Snowpipe auto-ingest typically relies on:",
options:[
"Cloud event notifications",
"SQL polling",
"Warehouse triggers",
"Task chains"
],
answer:0,
explanation:"Snowpipe uses cloud storage event notifications."
},

{
id:155,
difficulty:"medium",
category:"search_optimization",
question:"What is the purpose of Search Optimization Service?",
options:[
"Improve selective query performance",
"Increase warehouse size",
"Reduce storage cost",
"Optimize clustering keys"
],
answer:0,
explanation:"Search optimization accelerates highly selective queries."
},

{
id:156,
difficulty:"hard",
category:"search_optimization",
question:"Which query pattern benefits most from Search Optimization Service?",
options:[
"Point lookups",
"Full table scans",
"Large aggregations",
"Bulk inserts"
],
answer:0,
explanation:"Search optimization improves point lookup performance."
},

{
id:157,
difficulty:"medium",
category:"search_optimization",
question:"Search Optimization Service works by creating:",
options:[
"Additional metadata indexes",
"Materialized views",
"Cached tables",
"Temporary partitions"
],
answer:0,
explanation:"Search optimization builds metadata structures for faster lookup."
},

{
id:158,
difficulty:"hard",
category:"search_optimization",
question:"Which table type supports Search Optimization Service?",
options:[
"Permanent tables",
"Temporary tables",
"Transient tables",
"All of the above"
],
answer:3,
explanation:"Search optimization can be enabled on multiple table types."
},

{
id:159,
difficulty:"medium",
category:"hybrid_tables",
question:"Hybrid tables in Snowflake combine:",
options:[
"Transactional and analytical workloads",
"External and internal tables",
"Structured and semi-structured data",
"Batch and streaming ingestion"
],
answer:0,
explanation:"Hybrid tables support transactional and analytical operations."
},

{
id:160,
difficulty:"hard",
category:"hybrid_tables",
question:"Which workload type benefits most from hybrid tables?",
options:[
"High-throughput transactional workloads",
"Static historical analytics",
"Cold data storage",
"Data sharing"
],
answer:0,
explanation:"Hybrid tables support transactional workloads alongside analytics."
},

{
id:161,
difficulty:"medium",
category:"query_acceleration",
question:"Query Acceleration Service improves performance by:",
options:[
"Adding extra compute resources automatically",
"Compressing micro-partitions",
"Reducing SQL parsing time",
"Increasing cache size"
],
answer:0,
explanation:"Query Acceleration Service offloads query processing to additional compute."
},

{
id:162,
difficulty:"hard",
category:"query_acceleration",
question:"Query Acceleration Service is most beneficial for:",
options:[
"Large scan queries with selective filters",
"Small point lookups",
"DDL statements",
"Metadata queries"
],
answer:0,
explanation:"The service accelerates large scan queries."
},

{
id:163,
difficulty:"medium",
category:"replication",
question:"Which Snowflake feature enables database replication across regions?",
options:[
"Database replication",
"Secure sharing",
"Streams",
"Stages"
],
answer:0,
explanation:"Database replication copies data across regions."
},

{
id:164,
difficulty:"hard",
category:"replication",
question:"Replication between Snowflake accounts is managed using:",
options:[
"Replication groups",
"Task graphs",
"Secure views",
"External stages"
],
answer:0,
explanation:"Replication groups manage object replication."
},

{
id:165,
difficulty:"medium",
category:"failover",
question:"Failover groups are used for:",
options:[
"Disaster recovery",
"Query optimization",
"Cost management",
"Data masking"
],
answer:0,
explanation:"Failover groups enable disaster recovery across regions."
},

{
id:166,
difficulty:"hard",
category:"failover",
question:"Failover groups replicate which objects?",
options:[
"Databases",
"Users",
"Roles",
"All of the above"
],
answer:3,
explanation:"Failover groups replicate databases, roles, and users."
},

{
id:167,
difficulty:"medium",
category:"governance",
question:"Which feature tracks detailed object usage?",
options:[
"ACCESS_HISTORY",
"QUERY_HISTORY",
"LOGIN_HISTORY",
"ROLE_HISTORY"
],
answer:0,
explanation:"ACCESS_HISTORY tracks detailed object access."
},

{
id:168,
difficulty:"hard",
category:"governance",
question:"Which feature supports column-level data protection?",
options:[
"Masking policies",
"Streams",
"Tasks",
"Stages"
],
answer:0,
explanation:"Masking policies protect sensitive column data."
},

{
id:169,
difficulty:"medium",
category:"security",
question:"Which policy restricts login IP addresses?",
options:[
"Network policy",
"Row access policy",
"Masking policy",
"Task policy"
],
answer:0,
explanation:"Network policies restrict allowed IP ranges."
},

{
id:170,
difficulty:"hard",
category:"security",
question:"Which feature allows conditional data visibility based on roles?",
options:[
"Row access policies",
"Secure views",
"Masking policies",
"Stages"
],
answer:0,
explanation:"Row access policies filter rows dynamically based on roles."
},

{
id:171,
difficulty:"medium",
category:"cost",
question:"Which Snowflake feature helps reduce compute cost during idle periods?",
options:[
"AUTO_SUSPEND",
"Auto clustering",
"Query acceleration",
"Search optimization"
],
answer:0,
explanation:"AUTO_SUSPEND pauses warehouses during inactivity."
},

{
id:172,
difficulty:"hard",
category:"cost",
question:"Which table tracks Snowflake credit usage per warehouse?",
options:[
"WAREHOUSE_METERING_HISTORY",
"QUERY_HISTORY",
"ACCOUNT_USAGE",
"COST_MONITOR"
],
answer:0,
explanation:"WAREHOUSE_METERING_HISTORY shows credit consumption."
},

{
id:173,
difficulty:"medium",
category:"performance",
question:"Which feature improves lookup performance on large tables?",
options:[
"Search Optimization Service",
"Streams",
"Stages",
"Tasks"
],
answer:0,
explanation:"Search optimization improves selective lookup queries."
},

{
id:174,
difficulty:"hard",
category:"performance",
question:"Which query design improves scan efficiency?",
options:[
"Column pruning",
"SELECT * queries",
"Nested joins",
"Cartesian joins"
],
answer:0,
explanation:"Selecting only required columns reduces scanned data."
},

{
id:175,
difficulty:"medium",
category:"architecture",
question:"Which Snowflake service parses SQL queries?",
options:[
"Cloud Services layer",
"Compute layer",
"Storage layer",
"Warehouse layer"
],
answer:0,
explanation:"The cloud services layer parses SQL."
},

{
id:176,
difficulty:"hard",
category:"architecture",
question:"Which component stores Snowflake metadata?",
options:[
"Cloud Services layer",
"Compute layer",
"Warehouse cache",
"External catalog"
],
answer:0,
explanation:"Metadata is stored in the cloud services layer."
},

{
id:177,
difficulty:"medium",
category:"architecture",
question:"What enables independent scaling of compute resources?",
options:[
"Virtual warehouses",
"Stages",
"Streams",
"Dynamic tables"
],
answer:0,
explanation:"Virtual warehouses scale compute independently."
},

{
id:178,
difficulty:"hard",
category:"architecture",
question:"Which feature allows multiple clusters per warehouse?",
options:[
"Multi-cluster warehouse",
"Auto suspend",
"Task graph",
"Materialized views"
],
answer:0,
explanation:"Multi-cluster warehouses scale concurrency."
},

{
id:179,
difficulty:"medium",
category:"streams_tasks",
question:"Which pipeline pattern is commonly used for CDC processing?",
options:[
"Stream → Task → Merge",
"Stage → Task → View",
"Task → Stream → Table",
"View → Stream → Task"
],
answer:0,
explanation:"Streams feed tasks that merge changes."
},

{
id:180,
difficulty:"hard",
category:"streams_tasks",
question:"Which parameter prevents tasks from running simultaneously?",
options:[
"ALLOW_OVERLAPPING_EXECUTION",
"TASK_TIMEOUT",
"QUERY_LIMIT",
"EXECUTION_POLICY"
],
answer:0,
explanation:"This parameter controls overlapping execution."
},

{
id:181,
difficulty:"medium",
category:"snowpark",
question:"Snowpark DataFrames allow developers to:",
options:[
"Write distributed data transformations",
"Manage warehouses",
"Create roles",
"Configure stages"
],
answer:0,
explanation:"Snowpark DataFrames enable distributed transformations."
},

{
id:182,
difficulty:"hard",
category:"snowpark",
question:"Which language is NOT supported by Snowpark?",
options:[
"Python",
"Scala",
"Java",
"Go"
],
answer:3,
explanation:"Snowpark supports Python, Scala, and Java."
},

{
id:183,
difficulty:"medium",
category:"dynamic_tables",
question:"Dynamic tables help automate:",
options:[
"Data transformation pipelines",
"Security policies",
"Warehouse scaling",
"Data sharing"
],
answer:0,
explanation:"Dynamic tables automate transformation pipelines."
},

{
id:184,
difficulty:"hard",
category:"dynamic_tables",
question:"Dynamic tables track freshness using:",
options:[
"TARGET_LAG",
"REFRESH_DELAY",
"SCHEDULE_INTERVAL",
"PIPELINE_RATE"
],
answer:0,
explanation:"TARGET_LAG defines freshness expectations."
},

{
id:185,
difficulty:"medium",
category:"iceberg",
question:"Iceberg tables store data primarily in:",
options:[
"External object storage",
"Warehouse storage",
"Temporary cache",
"Local disks"
],
answer:0,
explanation:"Iceberg tables use external object storage."
},

{
id:186,
difficulty:"hard",
category:"iceberg",
question:"Which metadata format does Iceberg rely on?",
options:[
"Manifest files",
"SQL tables",
"Binary logs",
"CSV files"
],
answer:0,
explanation:"Iceberg uses manifest files for metadata."
},

{
id:187,
difficulty:"medium",
category:"security",
question:"Which Snowflake feature hides sensitive column data?",
options:[
"Masking policies",
"Streams",
"Stages",
"Tasks"
],
answer:0,
explanation:"Masking policies hide column values."
},

{
id:188,
difficulty:"hard",
category:"security",
question:"Which feature enforces row-level filtering based on user roles?",
options:[
"Row access policies",
"Secure views",
"Masking policies",
"External tables"
],
answer:0,
explanation:"Row access policies enforce row filtering."
},

{
id:189,
difficulty:"medium",
category:"governance",
question:"Which view tracks login attempts?",
options:[
"LOGIN_HISTORY",
"QUERY_HISTORY",
"ACCESS_HISTORY",
"SESSION_HISTORY"
],
answer:0,
explanation:"LOGIN_HISTORY tracks login events."
},

{
id:190,
difficulty:"hard",
category:"governance",
question:"Which object dependency feature supports lineage tracking?",
options:[
"OBJECT_DEPENDENCIES",
"QUERY_HISTORY",
"TABLE_USAGE",
"ROLE_HISTORY"
],
answer:0,
explanation:"Object dependencies track lineage."
},

{
id:191,
difficulty:"medium",
category:"performance",
question:"Which feature precomputes query results?",
options:[
"Materialized views",
"Streams",
"Stages",
"Tasks"
],
answer:0,
explanation:"Materialized views store precomputed query results."
},

{
id:192,
difficulty:"hard",
category:"performance",
question:"Which service improves large scan query performance?",
options:[
"Query Acceleration Service",
"Search Optimization",
"Auto Clustering",
"Dynamic Tables"
],
answer:0,
explanation:"Query Acceleration Service accelerates large scans."
},

{
id:193,
difficulty:"medium",
category:"cost",
question:"Which command displays warehouse credit usage?",
options:[
"WAREHOUSE_METERING_HISTORY",
"QUERY_HISTORY",
"SHOW COST",
"ACCOUNT_USAGE"
],
answer:0,
explanation:"Warehouse metering history tracks credits."
},

{
id:194,
difficulty:"hard",
category:"cost",
question:"Which query pattern wastes the most compute resources?",
options:[
"SELECT *",
"Column filtering",
"Partition pruning",
"Selective joins"
],
answer:0,
explanation:"SELECT * scans unnecessary columns."
},

{
id:195,
difficulty:"medium",
category:"architecture",
question:"Which Snowflake feature enables secure cross-account data sharing?",
options:[
"Secure Data Sharing",
"Replication",
"Streams",
"Stages"
],
answer:0,
explanation:"Secure data sharing allows live sharing without copying data."
},

{
id:196,
difficulty:"hard",
category:"architecture",
question:"Which feature allows cross-cloud replication of databases?",
options:[
"Failover groups",
"Materialized views",
"Search optimization",
"Dynamic tables"
],
answer:0,
explanation:"Failover groups support cross-cloud replication."
},

{
id:197,
difficulty:"medium",
category:"architecture",
question:"What is the smallest unit of data storage in Snowflake?",
options:[
"Micro-partition",
"Data block",
"Segment",
"Chunk"
],
answer:0,
explanation:"Snowflake stores data in micro-partitions."
},

{
id:198,
difficulty:"hard",
category:"architecture",
question:"Approximate compressed size of a Snowflake micro-partition?",
options:[
"16MB",
"1MB",
"100MB",
"256MB"
],
answer:0,
explanation:"Micro-partitions are roughly 16MB compressed."
},

{
id:199,
difficulty:"medium",
category:"architecture",
question:"Which Snowflake component executes queries?",
options:[
"Virtual warehouse",
"Cloud services",
"Storage layer",
"Metadata layer"
],
answer:0,
explanation:"Virtual warehouses perform compute execution."
},

{
id:200,
difficulty:"hard",
category:"architecture",
question:"Which layer handles query optimization and metadata management?",
options:[
"Cloud Services layer",
"Storage layer",
"Compute layer",
"Warehouse cache"
],
answer:0,
explanation:"The cloud services layer handles query optimization and metadata."
},

  
{
id:201,
difficulty:"hard",
category:"architecture",
question:"Which feature enables multi-region replication of Snowflake databases?",
options:[
"Database replication",
"Secure sharing",
"External tables",
"Streams"
],
answer:0,
explanation:"Database replication enables multi-region data replication."
},

{
id:202,
difficulty:"hard",
category:"architecture",
question:"Which Snowflake object coordinates disaster recovery between accounts?",
options:[
"Failover groups",
"Replication groups",
"Backup clusters",
"Warehouse mirrors"
],
answer:0,
explanation:"Failover groups orchestrate disaster recovery."
},

{
id:203,
difficulty:"medium",
category:"query_optimization",
question:"Which Snowflake service improves selective query filtering performance?",
options:[
"Search Optimization Service",
"Query Acceleration Service",
"Auto Clustering",
"Materialized Views"
],
answer:0,
explanation:"Search optimization improves selective queries."
},

{
id:204,
difficulty:"hard",
category:"query_optimization",
question:"Which scenario benefits most from Search Optimization Service?",
options:[
"Point lookup queries",
"Large table scans",
"Warehouse scaling",
"Streams pipelines"
],
answer:0,
explanation:"Search optimization improves point lookups."
},

{
id:205,
difficulty:"medium",
category:"governance",
question:"Which Snowflake feature tracks lineage between objects?",
options:[
"Object dependencies",
"Streams",
"Tasks",
"Views"
],
answer:0,
explanation:"Object dependencies track lineage."
},

{
id:206,
difficulty:"hard",
category:"governance",
question:"Which view records detailed object access events?",
options:[
"ACCESS_HISTORY",
"LOGIN_HISTORY",
"QUERY_HISTORY",
"ROLE_HISTORY"
],
answer:0,
explanation:"ACCESS_HISTORY tracks object-level access."
},

{
id:207,
difficulty:"medium",
category:"streams_tasks",
question:"A common CDC pipeline pattern in Snowflake is:",
options:[
"Stream → Task → Merge",
"Task → Stream → View",
"Stage → Stream → Task",
"View → Task → Table"
],
answer:0,
explanation:"CDC pipelines use streams with tasks executing merges."
},

{
id:208,
difficulty:"hard",
category:"streams_tasks",
question:"What prevents tasks from overlapping execution?",
options:[
"ALLOW_OVERLAPPING_EXECUTION",
"WAREHOUSE_LIMIT",
"STREAM_OFFSET",
"TASK_POLICY"
],
answer:0,
explanation:"This parameter controls task overlap."
},

{
id:209,
difficulty:"medium",
category:"cost",
question:"Which feature scales warehouses automatically under heavy load?",
options:[
"Multi-cluster warehouses",
"Auto clustering",
"Streams",
"Stages"
],
answer:0,
explanation:"Multi-cluster warehouses scale compute clusters."
},

{
id:210,
difficulty:"hard",
category:"cost",
question:"Which query pattern causes unnecessary compute cost?",
options:[
"SELECT *",
"Column filtering",
"Partition pruning",
"Predicate pushdown"
],
answer:0,
explanation:"SELECT * scans unnecessary columns."
},
{
id:211,
difficulty:"medium",
category:"architecture",
question:"Which Snowflake layer is responsible for query parsing and optimization?",
options:[
"Cloud Services layer",
"Compute layer",
"Storage layer",
"Virtual warehouse layer"
],
answer:0,
explanation:"The Cloud Services layer handles query parsing, optimization, and metadata."
},

{
id:212,
difficulty:"hard",
category:"architecture",
question:"Which Snowflake component stores table metadata and statistics used for pruning?",
options:[
"Cloud Services layer",
"Virtual warehouse",
"External stage",
"Search optimization service"
],
answer:0,
explanation:"Metadata and statistics are maintained within the Cloud Services layer."
},

{
id:213,
difficulty:"medium",
category:"performance",
question:"What Snowflake feature automatically reorganizes table micro-partitions to improve query performance?",
options:[
"Auto Clustering",
"Search Optimization",
"Materialized Views",
"Query Acceleration Service"
],
answer:0,
explanation:"Auto Clustering reorganizes micro-partitions to maintain clustering keys."
},

{
id:214,
difficulty:"hard",
category:"performance",
question:"Which Snowflake feature automatically accelerates large scan queries using additional compute resources?",
options:[
"Query Acceleration Service",
"Auto clustering",
"Materialized views",
"Search optimization"
],
answer:0,
explanation:"Query Acceleration Service allocates additional compute resources for large scan queries."
},

{
id:215,
difficulty:"medium",
category:"governance",
question:"Which Snowflake feature helps enforce dynamic row-level security?",
options:[
"Row access policies",
"Masking policies",
"Secure views",
"Network policies"
],
answer:0,
explanation:"Row access policies enforce row-level filtering based on roles."
},

{
id:216,
difficulty:"hard",
category:"governance",
question:"Which policy dynamically masks sensitive column data based on user role?",
options:[
"Masking policy",
"Row access policy",
"Network policy",
"Task policy"
],
answer:0,
explanation:"Masking policies dynamically mask column values depending on user roles."
},

{
id:217,
difficulty:"medium",
category:"security",
question:"Which Snowflake feature restricts allowed client IP addresses?",
options:[
"Network policies",
"Masking policies",
"Row access policies",
"Secure views"
],
answer:0,
explanation:"Network policies restrict login access by IP range."
},

{
id:218,
difficulty:"hard",
category:"security",
question:"Which Snowflake capability allows secure sharing of live data without copying it?",
options:[
"Secure Data Sharing",
"Replication",
"Streams",
"External tables"
],
answer:0,
explanation:"Secure Data Sharing allows live data access without replication."
},

{
id:219,
difficulty:"medium",
category:"data_sharing",
question:"Which Snowflake object is used to share datasets across accounts?",
options:[
"Share",
"Stage",
"Pipe",
"Task"
],
answer:0,
explanation:"Shares are used to share data across Snowflake accounts."
},

{
id:220,
difficulty:"hard",
category:"data_sharing",
question:"Which Snowflake marketplace allows providers to publish datasets for consumers?",
options:[
"Snowflake Marketplace",
"Data Exchange",
"External Stage",
"Snowpark Hub"
],
answer:0,
explanation:"Snowflake Marketplace enables dataset publishing and consumption."
},

{
id:221,
difficulty:"medium",
category:"performance",
question:"Which Snowflake mechanism avoids scanning unnecessary columns during queries?",
options:[
"Column pruning",
"Auto clustering",
"Search optimization",
"Warehouse scaling"
],
answer:0,
explanation:"Column pruning reduces the number of columns scanned."
},

{
id:222,
difficulty:"hard",
category:"performance",
question:"Which mechanism avoids scanning unnecessary micro-partitions during queries?",
options:[
"Micro-partition pruning",
"Materialized views",
"Search optimization",
"Query acceleration"
],
answer:0,
explanation:"Micro-partition pruning eliminates unnecessary data scans."
},

{
id:223,
difficulty:"medium",
category:"storage",
question:"Which Snowflake feature allows querying semi-structured JSON data directly?",
options:[
"VARIANT data type",
"Structured columns",
"External tables",
"Search optimization"
],
answer:0,
explanation:"VARIANT supports semi-structured formats like JSON and Avro."
},

{
id:224,
difficulty:"hard",
category:"storage",
question:"Which Snowflake feature stores metadata for semi-structured fields to improve performance?",
options:[
"Automatic schema extraction",
"Materialized views",
"Clustering keys",
"Task graphs"
],
answer:0,
explanation:"Snowflake extracts metadata from semi-structured data automatically."
},

{
id:225,
difficulty:"medium",
category:"cost",
question:"Which warehouse setting suspends compute after inactivity?",
options:[
"AUTO_SUSPEND",
"AUTO_SCALE",
"QUERY_ACCELERATION",
"COST_MONITOR"
],
answer:0,
explanation:"AUTO_SUSPEND stops warehouses after idle time."
},

{
id:226,
difficulty:"hard",
category:"cost",
question:"Which view shows Snowflake warehouse credit usage over time?",
options:[
"WAREHOUSE_METERING_HISTORY",
"QUERY_HISTORY",
"LOGIN_HISTORY",
"ACCESS_HISTORY"
],
answer:0,
explanation:"This view tracks warehouse credit consumption."
},

{
id:227,
difficulty:"medium",
category:"replication",
question:"Which Snowflake feature enables database replication across regions?",
options:[
"Database replication",
"Secure data sharing",
"Streams",
"Tasks"
],
answer:0,
explanation:"Database replication copies databases to other regions."
},

{
id:228,
difficulty:"hard",
category:"replication",
question:"Which Snowflake object groups databases for replication management?",
options:[
"Replication groups",
"Warehouse groups",
"Failover clusters",
"Share groups"
],
answer:0,
explanation:"Replication groups manage database replication."
},

{
id:229,
difficulty:"medium",
category:"failover",
question:"Which Snowflake feature enables automatic disaster recovery across regions?",
options:[
"Failover groups",
"Replication groups",
"Search optimization",
"Dynamic tables"
],
answer:0,
explanation:"Failover groups enable cross-region DR."
},

{
id:230,
difficulty:"hard",
category:"failover",
question:"Which objects can be replicated within a failover group?",
options:[
"Databases, roles, and users",
"Tables only",
"Warehouses only",
"External stages"
],
answer:0,
explanation:"Failover groups replicate databases, users, and roles."
},

{
id:231,
difficulty:"medium",
category:"snowpark",
question:"Snowpark allows developers to write data pipelines using which abstraction?",
options:[
"DataFrames",
"Tasks",
"Streams",
"Stages"
],
answer:0,
explanation:"Snowpark uses DataFrames for distributed data processing."
},

{
id:232,
difficulty:"hard",
category:"snowpark",
question:"Which programming language is NOT currently supported by Snowpark?",
options:[
"Go",
"Python",
"Scala",
"Java"
],
answer:0,
explanation:"Snowpark currently supports Python, Scala, and Java."
},

{
id:233,
difficulty:"medium",
category:"dynamic_tables",
question:"Dynamic tables automatically refresh based on which parameter?",
options:[
"TARGET_LAG",
"REFRESH_RATE",
"PIPE_INTERVAL",
"STREAM_OFFSET"
],
answer:0,
explanation:"TARGET_LAG defines how fresh the data should be."
},

{
id:234,
difficulty:"hard",
category:"dynamic_tables",
question:"Dynamic tables primarily replace which traditional pipeline approach?",
options:[
"Streams + Tasks",
"External tables",
"Materialized views",
"Secure views"
],
answer:0,
explanation:"Dynamic tables simplify stream/task pipelines."
},

{
id:235,
difficulty:"medium",
category:"monitoring",
question:"Which view provides detailed SQL execution history?",
options:[
"QUERY_HISTORY",
"LOGIN_HISTORY",
"ACCESS_HISTORY",
"SESSION_HISTORY"
],
answer:0,
explanation:"QUERY_HISTORY tracks executed SQL statements."
},

{
id:236,
difficulty:"hard",
category:"monitoring",
question:"Which Snowflake table function returns query execution plans?",
options:[
"SYSTEM$EXPLAIN_PLAN_JSON",
"QUERY_HISTORY",
"SHOW PLAN",
"PLAN_HISTORY"
],
answer:0,
explanation:"SYSTEM$EXPLAIN_PLAN_JSON returns detailed query plans."
},

{
id:237,
difficulty:"medium",
category:"architecture",
question:"Which Snowflake component performs query execution?",
options:[
"Virtual warehouse",
"Cloud services",
"Metadata service",
"Storage layer"
],
answer:0,
explanation:"Virtual warehouses execute SQL queries."
},

{
id:238,
difficulty:"hard",
category:"architecture",
question:"Which Snowflake architecture principle allows independent scaling of compute and storage?",
options:[
"Multi-cluster shared data architecture",
"Distributed OLTP engine",
"Columnar indexing",
"Partitioned warehouse clusters"
],
answer:0,
explanation:"Snowflake uses multi-cluster shared data architecture."
},

{
id:239,
difficulty:"medium",
category:"storage",
question:"What is the approximate compressed size of a Snowflake micro-partition?",
options:[
"16MB",
"1MB",
"100MB",
"256MB"
],
answer:0,
explanation:"Snowflake micro-partitions are roughly 16MB compressed."
},

{
id:240,
difficulty:"hard",
category:"storage",
question:"How does Snowflake achieve high compression efficiency?",
options:[
"Columnar storage with automatic encoding",
"Row-based storage",
"Manual compression tuning",
"Partitioned indexing"
],
answer:0,
explanation:"Snowflake uses columnar storage with automatic encoding."
},
{
id:241,
difficulty:"hard",
category:"cost_optimization",
question:"A warehouse runs frequent short queries but remains idle for long periods. What configuration best minimizes cost?",
options:[
"Enable AUTO_SUSPEND and AUTO_RESUME",
"Increase warehouse size",
"Disable query result caching",
"Enable multi-cluster scaling"
],
answer:0,
explanation:"Auto suspend/resume reduces cost during idle periods."
},

{
id:242,
difficulty:"hard",
category:"cost_optimization",
question:"A team frequently reruns identical queries. Which Snowflake feature minimizes compute usage?",
options:[
"Result cache",
"Materialized views",
"Search optimization",
"Query acceleration"
],
answer:0,
explanation:"Result cache returns results without re-executing the query."
},

{
id:243,
difficulty:"medium",
category:"warehouse_sizing",
question:"A BI dashboard has many concurrent users running small queries. Which configuration improves performance?",
options:[
"Multi-cluster warehouse",
"Increase micro-partitions",
"Disable auto suspend",
"Use external tables"
],
answer:0,
explanation:"Multi-cluster warehouses handle concurrency efficiently."
},

{
id:244,
difficulty:"hard",
category:"warehouse_sizing",
question:"Which warehouse scaling policy prioritizes minimizing queuing delays?",
options:[
"Standard scaling policy",
"Economy scaling policy",
"Auto suspend policy",
"Query acceleration policy"
],
answer:0,
explanation:"Standard scaling launches clusters faster to avoid queuing."
},

{
id:245,
difficulty:"medium",
category:"query_tuning",
question:"A query scans an entire large table but filters on one column. Which technique improves performance?",
options:[
"Define a clustering key",
"Disable caching",
"Increase warehouse size",
"Use external stage"
],
answer:0,
explanation:"Clustering improves pruning on filtered columns."
},

{
id:246,
difficulty:"hard",
category:"query_tuning",
question:"A query repeatedly aggregates the same large dataset. Which feature improves performance?",
options:[
"Materialized views",
"Streams",
"Tasks",
"Search optimization"
],
answer:0,
explanation:"Materialized views store precomputed aggregations."
},

{
id:247,
difficulty:"medium",
category:"architecture_design",
question:"A company needs to share data with partners without duplicating storage. Which Snowflake feature should be used?",
options:[
"Secure Data Sharing",
"Database replication",
"External tables",
"Streams"
],
answer:0,
explanation:"Secure Data Sharing allows sharing live data without copying it."
},

{
id:248,
difficulty:"hard",
category:"architecture_design",
question:"A global company needs disaster recovery across multiple regions. What architecture should be implemented?",
options:[
"Failover groups",
"External stages",
"Multi-cluster warehouses",
"Secure views"
],
answer:0,
explanation:"Failover groups support cross-region DR."
},

{
id:249,
difficulty:"medium",
category:"security_architecture",
question:"Sensitive customer columns must be hidden from analysts. Which Snowflake feature solves this?",
options:[
"Masking policies",
"Streams",
"Stages",
"Tasks"
],
answer:0,
explanation:"Masking policies dynamically mask sensitive column values."
},

{
id:250,
difficulty:"hard",
category:"security_architecture",
question:"Access to specific rows should depend on user role. Which feature should be implemented?",
options:[
"Row access policies",
"Secure views",
"Network policies",
"Masking policies"
],
answer:0,
explanation:"Row access policies enforce row-level filtering."
},

{
id:251,
difficulty:"medium",
category:"troubleshooting",
question:"A query is slow due to scanning many micro-partitions. What should be investigated first?",
options:[
"Clustering strategy",
"Warehouse size",
"Network policies",
"External stages"
],
answer:0,
explanation:"Poor clustering can cause excessive partition scanning."
},

{
id:252,
difficulty:"hard",
category:"troubleshooting",
question:"Users experience query queuing during peak hours. What is the best solution?",
options:[
"Enable multi-cluster warehouses",
"Disable auto suspend",
"Use materialized views",
"Enable search optimization"
],
answer:0,
explanation:"Multi-cluster warehouses reduce query queuing."
},

{
id:253,
difficulty:"medium",
category:"cost_optimization",
question:"Which practice reduces compute costs when exploring large datasets?",
options:[
"Use LIMIT clauses",
"Disable pruning",
"Increase warehouse size",
"Disable caching"
],
answer:0,
explanation:"LIMIT reduces scanned data during exploration."
},

{
id:254,
difficulty:"hard",
category:"cost_optimization",
question:"Which Snowflake feature helps identify queries consuming the most credits?",
options:[
"QUERY_HISTORY",
"LOGIN_HISTORY",
"ACCESS_HISTORY",
"SESSION_HISTORY"
],
answer:0,
explanation:"Query history tracks query execution metrics."
},

{
id:255,
difficulty:"medium",
category:"query_tuning",
question:"A query retrieves unnecessary columns from a large table. Which optimization helps?",
options:[
"Column pruning",
"Warehouse scaling",
"Auto clustering",
"Search optimization"
],
answer:0,
explanation:"Column pruning reduces scanned columns."
},

{
id:256,
difficulty:"hard",
category:"query_tuning",
question:"A query repeatedly performs complex joins across large tables. What improves performance?",
options:[
"Materialized views",
"Network policies",
"External tables",
"Streams"
],
answer:0,
explanation:"Materialized views precompute joins."
},

{
id:257,
difficulty:"medium",
category:"architecture_design",
question:"A company wants separate compute resources for ETL and BI workloads. What should they use?",
options:[
"Separate virtual warehouses",
"Separate accounts",
"Separate regions",
"External stages"
],
answer:0,
explanation:"Separate warehouses isolate compute workloads."
},

{
id:258,
difficulty:"hard",
category:"architecture_design",
question:"What Snowflake architecture principle enables compute clusters to access shared storage?",
options:[
"Multi-cluster shared data architecture",
"Row-based architecture",
"Partitioned clusters",
"OLTP replication"
],
answer:0,
explanation:"Snowflake uses multi-cluster shared data architecture."
},

{
id:259,
difficulty:"medium",
category:"security_architecture",
question:"Which policy controls which IP ranges can access Snowflake?",
options:[
"Network policies",
"Masking policies",
"Row access policies",
"Task policies"
],
answer:0,
explanation:"Network policies restrict login IP ranges."
},

{
id:260,
difficulty:"hard",
category:"security_architecture",
question:"Which Snowflake feature supports secure data exchange between organizations?",
options:[
"Snowflake Marketplace",
"Streams",
"Tasks",
"Stages"
],
answer:0,
explanation:"Snowflake Marketplace allows sharing datasets."
},

{
id:261,
difficulty:"medium",
category:"troubleshooting",
question:"A query plan shows excessive partition scans. What likely caused this?",
options:[
"Poor clustering",
"Warehouse scaling",
"Query caching",
"Stage configuration"
],
answer:0,
explanation:"Poor clustering reduces pruning efficiency."
},

{
id:262,
difficulty:"hard",
category:"troubleshooting",
question:"A warehouse experiences long query queues even with large cluster size. What is the best solution?",
options:[
"Enable multi-cluster warehouse",
"Increase micro-partitions",
"Disable caching",
"Enable masking"
],
answer:0,
explanation:"Multi-cluster scaling handles concurrency."
},

{
id:263,
difficulty:"medium",
category:"cost_optimization",
question:"Which Snowflake feature prevents unnecessary recomputation of identical queries?",
options:[
"Result cache",
"Streams",
"Stages",
"Tasks"
],
answer:0,
explanation:"Result caching returns stored results."
},

{
id:264,
difficulty:"hard",
category:"cost_optimization",
question:"Which query design practice minimizes scanned data volume?",
options:[
"Predicate filtering",
"SELECT *",
"Cross joins",
"Unfiltered scans"
],
answer:0,
explanation:"Predicate filtering reduces scanned rows."
},

{
id:265,
difficulty:"medium",
category:"warehouse_sizing",
question:"A data science team runs heavy ML queries occasionally. Which warehouse configuration is most efficient?",
options:[
"Use larger warehouse temporarily",
"Use smallest warehouse always",
"Disable auto suspend",
"Use external stages"
],
answer:0,
explanation:"Scaling up temporarily handles heavy workloads."
},

{
id:266,
difficulty:"hard",
category:"warehouse_sizing",
question:"Which warehouse policy prioritizes cost savings over query latency?",
options:[
"Economy scaling policy",
"Standard scaling policy",
"Auto resume policy",
"Query acceleration policy"
],
answer:0,
explanation:"Economy scaling reduces cluster startup frequency."
},

{
id:267,
difficulty:"medium",
category:"query_tuning",
question:"Which feature helps accelerate highly selective queries?",
options:[
"Search Optimization Service",
"Streams",
"Tasks",
"Stages"
],
answer:0,
explanation:"Search optimization speeds up selective queries."
},

{
id:268,
difficulty:"hard",
category:"query_tuning",
question:"Which Snowflake service accelerates large scan queries automatically?",
options:[
"Query Acceleration Service",
"Search optimization",
"Auto clustering",
"Materialized views"
],
answer:0,
explanation:"Query Acceleration Service accelerates large scans."
},

{
id:269,
difficulty:"medium",
category:"architecture_design",
question:"Which Snowflake object manages continuous ingestion from cloud storage?",
options:[
"Pipe",
"Task",
"Stream",
"View"
],
answer:0,
explanation:"Pipes automate Snowpipe ingestion."
},

{
id:270,
difficulty:"hard",
category:"architecture_design",
question:"Which Snowflake feature enables low latency streaming ingestion?",
options:[
"Snowpipe Streaming",
"Streams",
"Stages",
"Tasks"
],
answer:0,
explanation:"Snowpipe Streaming supports low latency ingestion."
},

{
id:271,
difficulty:"medium",
category:"security_architecture",
question:"Which Snowflake feature tracks detailed object access activity?",
options:[
"ACCESS_HISTORY",
"QUERY_HISTORY",
"LOGIN_HISTORY",
"SESSION_HISTORY"
],
answer:0,
explanation:"ACCESS_HISTORY records object-level access."
},

{
id:272,
difficulty:"hard",
category:"security_architecture",
question:"Which Snowflake view tracks failed login attempts?",
options:[
"LOGIN_HISTORY",
"QUERY_HISTORY",
"ACCESS_HISTORY",
"SESSION_HISTORY"
],
answer:0,
explanation:"LOGIN_HISTORY records login attempts."
},

{
id:273,
difficulty:"medium",
category:"troubleshooting",
question:"Which Snowflake view helps diagnose slow queries?",
options:[
"QUERY_HISTORY",
"LOGIN_HISTORY",
"ACCESS_HISTORY",
"ROLE_HISTORY"
],
answer:0,
explanation:"Query history contains execution metrics."
},

{
id:274,
difficulty:"hard",
category:"troubleshooting",
question:"Which function returns detailed query execution plans?",
options:[
"SYSTEM$EXPLAIN_PLAN_JSON",
"QUERY_HISTORY",
"SHOW PLAN",
"PLAN_HISTORY"
],
answer:0,
explanation:"SYSTEM$EXPLAIN_PLAN_JSON returns JSON execution plans."
},

{
id:275,
difficulty:"medium",
category:"cost_optimization",
question:"Which Snowflake feature reduces cost by suspending warehouses automatically?",
options:[
"AUTO_SUSPEND",
"Auto clustering",
"Search optimization",
"Query acceleration"
],
answer:0,
explanation:"AUTO_SUSPEND stops idle warehouses."
},

{
id:276,
difficulty:"hard",
category:"cost_optimization",
question:"Which table shows Snowflake credit usage for each warehouse?",
options:[
"WAREHOUSE_METERING_HISTORY",
"QUERY_HISTORY",
"ACCESS_HISTORY",
"LOGIN_HISTORY"
],
answer:0,
explanation:"Warehouse metering history tracks credit usage."
},

{
id:277,
difficulty:"medium",
category:"architecture_design",
question:"Which Snowflake feature allows querying external cloud storage data directly?",
options:[
"External tables",
"Streams",
"Tasks",
"Materialized views"
],
answer:0,
explanation:"External tables query data stored outside Snowflake."
},

{
id:278,
difficulty:"hard",
category:"architecture_design",
question:"Which Snowflake feature supports open table formats like Apache Iceberg?",
options:[
"Iceberg tables",
"Materialized views",
"Search optimization",
"Task graphs"
],
answer:0,
explanation:"Iceberg tables support open table formats."
},

{
id:279,
difficulty:"medium",
category:"security_architecture",
question:"Which Snowflake role has full administrative privileges?",
options:[
"ACCOUNTADMIN",
"SECURITYADMIN",
"SYSADMIN",
"USERADMIN"
],
answer:0,
explanation:"ACCOUNTADMIN has full privileges."
},

{
id:280,
difficulty:"hard",
category:"security_architecture",
question:"Which role is responsible for managing users and roles?",
options:[
"USERADMIN",
"ACCOUNTADMIN",
"SYSADMIN",
"PUBLIC"
],
answer:0,
explanation:"USERADMIN manages users and roles."
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
