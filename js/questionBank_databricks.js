/* Note: This template follows the logic requested. 
   1-20: Databricks Lakehouse Architecture & Delta Lake
   To reach 280, the pattern continues across:
   21-60: Delta Lake deep dive (Z-Order, Liquid Clustering, CDF)
   61-120: PySpark DataFrames & Spark SQL (Window functions, joins, broadcast)
   121-180: Structured Streaming & Auto Loader (Watermarking, Trigger.Once)
   181-220: Unity Catalog (Permissions, Lineage, External Locations)
   221-250: DLT (SCD Type 1 & 2, Quality Expectations)
   251-280: Databricks SQL & Security (Dashboards, Alerts, Service Principals)
   281-: Custom scenarios and MCQ
*/
const questionBank = [
/* ======================================================
DATABRICKS LAKEHOUSE ARCHITECTURE & DELTA LAKE
====================================================== */

{
id:1,
difficulty:"easy",
category:"architecture",
question:"What is the primary storage format that enables ACID transactions on the Databricks Lakehouse?",
options:[
"Parquet",
"Delta Lake",
"Avro",
"CSV"
],
answer:1,
explanation:"Delta Lake is an open-source storage layer that brings ACID transactions to Apache Spark and big data workloads."
},

{
id:2,
difficulty:"easy",
category:"architecture",
question:"Which layer of the Medallion Architecture contains raw, unprocessed data in its native format?",
options:[
"Bronze",
"Silver",
"Gold",
"Platinum"
],
answer:0,
explanation:"The Bronze layer is the landing zone for raw data, often kept in its original format for lineage and reprocessing."
},

{
id:3,
difficulty:"medium",
category:"delta_lake",
question:"Which Delta Lake command is used to reduce the number of small files and improve query performance?",
options:[
"VACUUM",
"OPTIMIZE",
"REORG",
"COMPACT"
],
answer:1,
explanation:"The OPTIMIZE command compacts small Parquet files into larger, more efficient files (usually 1GB)."
},

{
id:4,
difficulty:"hard",
category:"delta_lake",
question:"After running 'VACUUM table_name RETAIN 0 HOURS', what is the immediate consequence?",
options:[
"The table is deleted",
"Transaction logs are cleared, and historical versions for Time Travel are lost",
"The table is converted to a Parquet table",
"Performance is degraded by 50%"
],
answer:1,
explanation:"VACUUM removes files no longer referenced by a Delta table. Setting retention to 0 removes all history, breaking Time Travel."
},

{
id:5,
difficulty:"medium",
category:"architecture",
question:"Which feature of the Databricks Lakehouse allows users to query data as it existed at a specific point in time?",
options:[
"Data Skipping",
"Z-Order Clustering",
"Time Travel",
"Snapshot Isolation"
],
answer:2,
explanation:"Delta Lake's Time Travel allows you to query older versions of data using TIMESTAMP AS OF or VERSION AS OF."
},

/* ======================================================
ELT WITH SPARK SQL & PYTHON
====================================================== */

{
id:6,
difficulty:"medium",
category:"elt",
question:"In Spark SQL, which function is used to flatten a column containing an array into multiple rows?",
options:[
"FLATTEN()",
"EXPLODE()",
"EXPAND()",
"SLICE()"
],
answer:1,
explanation:"EXPLODE() takes an array or map and returns a new row for each element."
},

{
id:7,
difficulty:"medium",
category:"elt",
question:"Which keyword is used in a MERGE INTO statement to handle records that exist in the source but not the target?",
options:[
"WHEN MATCHED",
"WHEN NOT MATCHED",
"WHEN NEW",
"INSERT ONLY"
],
answer:1,
explanation:"WHEN NOT MATCHED is used to define the action (usually INSERT) for new records arriving from the source."
},

{
id:8,
difficulty:"hard",
category:"elt",
question:"When using Structured Streaming, what does the 'checkpointLocation' option provide?",
options:[
"Data encryption keys",
"Metadata to track processing progress and handle failures",
"The final destination path of the data",
"A temporary storage for shuffle files"
],
answer:1,
explanation:"Checkpoints store the state of the stream, allowing it to resume exactly where it left off after a failure."
},

/* ======================================================
DELTA LIVE TABLES (DLT)
====================================================== */

{
id:9,
difficulty:"medium",
category:"dlt",
question:"In Delta Live Tables, which constraint type allows data to be processed but flags it in the event logs if it fails validation?",
options:[
"EXPECT ... ON VIOLATION FAIL UPDATE",
"EXPECT ... ON VIOLATION DROP ROW",
"EXPECT ...",
"ASSERT ..."
],
answer:2,
explanation:"A simple EXPECT statement records the violation but allows the record to pass through to the target table."
},

{
id:10,
difficulty:"easy",
category:"dlt",
question:"What is the primary benefit of using 'Live Tables' over standard Spark DataFrames?",
options:[
"It supports COBOL",
"It manages task orchestration and data lineage automatically",
"It is cheaper for small datasets",
"It removes the need for a Unity Catalog"
],
answer:1,
explanation:"DLT automates the complexity of managing dependencies, environment setup, and recovery."
},

/* ======================================================
UNITY CATALOG & GOVERNANCE
====================================================== */

{
id:11,
difficulty:"medium",
category:"governance",
question:"What is the hierarchy of data objects in Unity Catalog?",
options:[
"Metastore > Catalog > Schema > Table",
"Workspace > Database > Table",
"Catalog > Metastore > Table",
"Account > Workspace > Schema"
],
answer:0,
explanation:"Unity Catalog follows a three-level namespace: catalog.schema.table, all residing within a Metastore."
},

{
id:12,
difficulty:"hard",
category:"governance",
question:"Which command is used to grant a user the ability to read from a table in Unity Catalog?",
options:[
"GRANT READ ON TABLE",
"GRANT SELECT ON TABLE",
"ALLOW SELECT ON TABLE",
"GRANT ACCESS ON TABLE"
],
answer:1,
explanation:"Standard SQL syntax 'GRANT SELECT ON TABLE' is used for read access in Unity Catalog."
},

/* ======================================================
DATABRICKS SQL & WAREHOUSING
====================================================== */

{
id:13,
difficulty:"easy",
category:"db_sql",
question:"Which Databricks component is optimized specifically for running BI queries and providing a SQL-native interface?",
options:[
"Jobs Clusters",
"Serverless SQL Warehouses",
"All-Purpose Clusters",
"Photon Engine"
],
answer:1,
explanation:"SQL Warehouses are specialized compute resources for Databricks SQL workloads."
},

{
id:14,
difficulty:"medium",
category:"db_sql",
question:"What is the purpose of the 'Photon' engine in Databricks?",
options:[
"To write Python code",
"To provide high-performance vectorized query execution",
"To manage cloud storage security",
"To orchestrate Delta Live Tables"
],
answer:1,
explanation:"Photon is a C++ based execution engine designed to accelerate SQL workloads."
},

/* ======================================================
INCREMENTAL PROCESSING & AUTO LOADER
====================================================== */

{
id:15,
difficulty:"medium",
category:"ingestion",
question:"Which Databricks tool is specifically designed to incrementally ingest files from cloud storage as they arrive?",
options:[
"COPY INTO",
"Auto Loader",
"Spark.read.csv",
"Delta Restore"
],
answer:1,
explanation:"Auto Loader (cloudFiles) efficiently processes new files in cloud storage without manual state management."
},

{
id:16,
difficulty:"hard",
category:"ingestion",
question:"When using Auto Loader, what does 'Schema Inference' do?",
options:[
"It forces all columns to be Strings",
"It automatically detects the data types and structure of the input files",
"It deletes files that don't match a predefined schema",
"It translates SQL to Python"
],
answer:1,
explanation:"Schema Inference allows Auto Loader to detect the schema of data automatically, reducing manual configuration."
},

/* ======================================================
WORKFLOWS & ORCHESTRATION
====================================================== */

{
id:17,
difficulty:"medium",
category:"orchestration",
question:"In Databricks Workflows, what is a 'Repair Run'?",
options:[
"A process that fixes corrupt Delta tables",
"Running only the failed tasks in a multi-task job",
"A command to update Spark versions",
"A backup of the workspace"
],
answer:1,
explanation:"Repair Run allows you to restart a job from the point of failure, saving time and compute costs."
},

{
id:18,
difficulty:"medium",
category:"architecture",
question:"Which of the following describes a 'Serverless' compute option in Databricks?",
options:[
"The user manages the VPC and VM instances",
"Databricks manages the compute infrastructure in its own account",
"The compute never turns off",
"It only supports Scala"
],
answer:1,
explanation:"Serverless compute removes the need for users to manage infrastructure, providing instant start times and managed scaling."
},

{
id:19,
difficulty:"hard",
category:"delta_lake",
question:"What happens to the underlying data files when a Delta table is 'dropped' if it is a MANAGED table?",
options:[
"The files remain in storage",
"The files are deleted from the storage location",
"The files are moved to a trash folder",
"Only the metadata is deleted"
],
answer:1,
explanation:"For Managed tables, dropping the table deletes both the metadata in the Hive Metastore/Unity Catalog and the physical data files."
},

{
id:20,
difficulty:"medium",
category:"elt",
question:"Which Spark function should be used to handle corrupt records during JSON ingestion?",
options:[
"mode: 'PERMISSIVE'",
"mode: 'FAILFAST'",
"mode: 'DROP_MALFORMED'",
"All of the above"
],
answer:3,
explanation:"Spark provides multiple modes: PERMISSIVE (sets nulls), DROP_MALFORMED (ignores them), and FAILFAST (crashes) to handle bad data."
},
/* ======================================================
DELTA LAKE DEEP DIVE (21 - 60)
====================================================== */

{
id:21,
difficulty:"hard",
category:"delta_lake",
question:"A data engineer notices that queries filtering on 'customer_id' and 'transaction_date' are slow. The table is already partitioned by 'year'. Which optimization strategy is most effective?",
options:[
"Z-Order by (customer_id, transaction_date)",
"Partition by (customer_id)",
"Run VACUUM every hour",
"Convert the table to a Shallow Clone"
],
answer:0,
explanation:"Z-Ordering is ideal for high-cardinality columns frequently used in join or filter predicates to co-locate related information."
},

{
id:22,
difficulty:"medium",
category:"delta_lake",
question:"What is the default retention period for the Delta Log before entries are candidates for deletion?",
options:[
"7 days",
"30 days",
"90 days",
"1 year"
],
answer:1,
explanation:"While VACUUM defaults to 7 days for data files, the Delta transaction log (checkpoint) cleanup defaults to 30 days."
},

{
id:23,
difficulty:"hard",
category:"delta_lake",
question:"Scenario: You need to synchronize a Silver table with a Gold table. The Gold table must reflect deletes from the Silver table. Which feature should you enable on the Silver table?",
options:[
"Z-Order",
"Change Data Feed (CDF)",
"Liquid Clustering",
"Deep Clone"
],
answer:1,
explanation:"CDF provides the row-level changes (including deletes) required for downstream incremental updates."
},

{
id:24,
difficulty:"medium",
category:"delta_lake",
question:"Which Delta feature allows you to create a new table that shares the same data files as the source table but allows independent metadata changes?",
options:[
"Deep Clone",
"Shallow Clone",
"External Table",
"Managed Table"
],
answer:1,
explanation:"Shallow clones only copy the metadata/transaction log; the actual data files are referenced from the source."
},

{
id:25,
difficulty:"hard",
category:"delta_lake",
question:"Which optimization technique is recommended for tables that grow rapidly and have shifting query patterns, replacing the need for manual Z-Ordering and Partitioning?",
options:[
"Dynamic File Pruning",
"Liquid Clustering",
"Bloom Filter Indexes",
"Broadcast Joins"
],
answer:1,
explanation:"Liquid Clustering simplifies performance tuning by automatically adjusting data layout without fixed partition columns."
},

/* ======================================================
PYSPARK DATAFRAMES & SPARK SQL (61 - 120)
====================================================== */

{
id:26,
difficulty:"medium",
category:"spark_sql",
question:"You are calculating a 7-day rolling average of sales. Which SQL clause is required?",
options:[
"GROUP BY",
"ORDER BY sales DESC",
"ROWS BETWEEN 6 PRECEDING AND CURRENT ROW",
"LATERAL VIEW EXPLODE"
],
answer:2,
explanation:"Window functions with a frame definition (ROWS BETWEEN) are used for moving/rolling aggregates."
},

{
id:27,
difficulty:"hard",
category:"pyspark",
question:"Scenario: A join between a 10TB table and a 50MB lookup table is triggering a Shuffle Hash Join, causing performance bottlenecks. How should you force a Broadcast Join?",
options:[
"df1.join(broadcast(df2), 'id')",
"df1.repartition('id').join(df2, 'id')",
"set spark.sql.autoBroadcastJoinThreshold = -1",
"df1.join(df2.coalesce(1), 'id')"
],
answer:0,
explanation:"The broadcast() hint tells Spark to send the small table to all executors, avoiding a full shuffle."
},

{
id:28,
difficulty:"medium",
category:"pyspark",
question:"Which method is the most efficient way to reduce the number of partitions in a DataFrame after a heavy filter operation?",
options:[
"repartition()",
"coalesce()",
"distinct()",
"persist()"
],
answer:1,
explanation:"coalesce() avoids a full shuffle by moving data within existing partitions to reach the target number."
},

{
id:29,
difficulty:"hard",
category:"spark_sql",
question:"You need to extract a specific value from a nested JSON string column named 'raw_data' where the key is 'user.details.id'. Which syntax is correct?",
options:[
"raw_data:user.details.id",
"get_json_object(raw_data, '$.user.details.id')",
"extract(raw_data, 'user_id')",
"raw_data['user']['details']['id']"
],
answer:1,
explanation:"get_json_object uses JSONPath to navigate and extract values from stringified JSON columns."
},

{
id:30,
difficulty:"medium",
category:"pyspark",
question:"What is the result of applying df.cache() to a DataFrame?",
options:[
"The data is immediately written to disk",
"The DataFrame is marked for caching and will be stored in memory upon the next action",
"The DataFrame is converted to a Delta table",
"All executors are restarted"
],
answer:1,
explanation:"Caching is a lazy operation. It only populates the cache when an action (like count() or collect()) is called."
},

/* ======================================================
SCENARIO-BASED PROFESSIONAL LEVEL
====================================================== */

{
id:31,
difficulty:"hard",
category:"delta_lake",
question:"A production job fails with a 'ConcurrentAppendException'. Two separate jobs were attempting to write to the same Delta table. How can this be resolved?",
options:[
"Delta Lake does not support concurrent writes",
"Ensure the jobs are writing to different partitions to allow 'Conflict Detection' to pass",
"Lower the Spark version",
"Use a Shallow Clone for one of the jobs"
],
answer:1,
explanation:"Delta Lake supports concurrent writes. If the operations append to different partitions, they can often proceed simultaneously via optimistic concurrency control."
},

{
id:32,
difficulty:"medium",
category:"spark_sql",
question:"In a Medallion Architecture, what is the primary purpose of the Silver layer?",
options:[
"Archive raw data permanently",
"Provide 'Source of Truth' data that is cleaned, joined, and filtered",
"Store high-level aggregates for BI dashboards",
"Run machine learning training exclusively"
],
answer:1,
explanation:"The Silver layer represents refined data that has been validated and enriched for general use."
},

{
id:33,
difficulty:"hard",
category:"pyspark",
question:"Which Spark operation will result in a wide transformation (shuffling)?",
options:[
"select()",
"filter()",
"groupBy()",
"map()"
],
answer:2,
explanation:"Wide transformations like groupBy, join, and repartition require data to be moved across executors (a shuffle)."
},

{
id:34,
difficulty:"medium",
category:"delta_lake",
question:"How do you retrieve the version number of a Delta table that was active exactly 2 hours ago?",
options:[
"DESCRIBE HISTORY table_name",
"SELECT current_version()",
"SHOW LOGS FOR table_name",
"RESTORE table_name"
],
answer:0,
explanation:"DESCRIBE HISTORY provides a list of all transactions, timestamps, and versions for the table."
},

{
id:35,
difficulty:"hard",
category:"elt",
question:"Scenario: You are using the MERGE INTO command. You want to update an existing record only if the 'source.update_time' is newer than 'target.update_time'. What is the correct syntax?",
options:[
"WHEN MATCHED AND source.update_time > target.update_time THEN UPDATE SET *",
"UPDATE IF NEWER",
"WHEN MATCHED THEN UPDATE WHERE source.new",
"MERGE ONLY NEWER"
],
answer:0,
explanation:"Delta's MERGE INTO supports optional conditions on the WHEN MATCHED clause for fine-grained logic."
},
/* ======================================================
DELTA LAKE DEEP DIVE (36 - 60)
====================================================== */

{
id:36,
difficulty:"medium",
category:"delta_lake",
question:"What is the primary function of the VACUUM command in Delta Lake?",
options:[
"To compress small files into larger ones",
"To remove data files no longer referenced by a Delta table and older than the retention threshold",
"To update the table schema to the latest version",
"To delete the transaction log history"
],
answer:1,
explanation:"VACUUM cleans up stale data files. By default, it removes files older than 7 days."
},

{
id:37,
difficulty:"hard",
category:"delta_lake",
question:"Scenario: A table has frequent inserts (every minute). You notice performance degrading due to the 'small file problem.' Which feature is the best first step to automate the fix?",
options:[
"Manual Z-ORDER every hour",
"Turning on Auto-Compaction and Optimized Write",
"Increasing the cluster size",
"Partitioning by a high-cardinality timestamp"
],
answer:1,
explanation:"Auto-compaction and Optimized Write (Bin-packing) ensure Spark writes larger, more efficient files during the write process."
},

{
id:38,
difficulty:"medium",
category:"delta_lake",
question:"On which type of columns should Z-ORDER typically be applied for maximum performance gain?",
options:[
"Columns with low cardinality like 'Gender'",
"Columns frequently used in join keys or filter predicates with high cardinality",
"Columns used for partitioning",
"Boolean columns"
],
answer:1,
explanation:"Z-Ordering is most effective on high-cardinality columns (e.g., user_id) used in filters to allow for data skipping."
},

{
id:39,
difficulty:"hard",
category:"delta_lake",
question:"How does Liquid Clustering differ from traditional Partitioning and Z-ORDER?",
options:[
"It requires you to define a fixed hierarchy of folders",
"It is deterministic and never changes the data layout",
"It allows for flexible, non-indexed data clustering that can evolve without rewriting the table",
"It only works on Parquet files, not Delta"
],
answer:2,
explanation:"Liquid clustering replaces fixed partitioning and Z-order with a flexible layout that simplifies tuning and supports evolving query patterns."
},

{
id:40,
difficulty:"medium",
category:"delta_lake",
question:"A user wants to query a Delta table as it existed 10 days ago. The VACUUM command was run yesterday with a 7-day retention. What happens?",
options:[
"The query succeeds normally",
"The query fails because the required underlying data files were deleted",
"The query returns the current data instead",
"The query triggers an automatic RESTORE"
],
answer:1,
explanation:"Time travel relies on the physical data files. Since VACUUM removed files older than 7 days, 10-day-old data is gone."
},

/* ======================================================
SPARK ARCHITECTURE & PERFORMANCE (61 - 120)
====================================================== */

{
id:41,
difficulty:"hard",
category:"spark_performance",
question:"You have 200 GB of data. How should you determine the number of Spark partitions for optimal shuffle performance?",
options:[
"Always use the default of 200",
"Target partition sizes between 128MB and 200MB",
"Create 1 partition per 1GB",
"Create as many partitions as there are rows"
],
answer:1,
explanation:"Aiming for 128MB-200MB per partition balances parallelism with the overhead of managing too many tasks."
},

{
id:42,
difficulty:"medium",
category:"spark_performance",
question:"What is a major risk of 'Over-partitioning' (creating too many small partitions)?",
options:[
"Data Skew",
"Out of Memory errors on the driver due to task management overhead",
"Disk spill on executors",
"Faster query execution"
],
answer:1,
explanation:"The driver must track every task. Thousands of tiny tasks overwhelm the driver and increase scheduling latency."
},

{
id:43,
difficulty:"hard",
category:"spark_performance",
question:"In the Spark UI, you see 199 tasks finish in 5 seconds, but 1 task takes 20 minutes. What is the most likely cause?",
options:[
"The cluster is too small",
"Data Skew (one partition is much larger than others)",
"Network latency",
"The driver is failing"
],
answer:1,
explanation:"Data skew occurs when one key (e.g., 'Unknown' or 'Null') has significantly more data than others, causing one task to process the bulk of the work."
},

{
id:44,
difficulty:"medium",
category:"spark_performance",
question:"When is coalesce() preferred over repartition()?",
options:[
"When increasing the number of partitions",
"When decreasing the number of partitions to avoid a full shuffle",
"When you need to ensure data is perfectly balanced across nodes",
"When performing a Join"
],
answer:1,
explanation:"coalesce() minimizes data movement by merging existing partitions, whereas repartition() performs a full shuffle."
},

{
id:45,
difficulty:"hard",
category:"spark_performance",
question:"Why is using .collect() on a large DataFrame dangerous in production?",
options:[
"It deletes the data from S3",
"It moves all data from the executors to the Driver's memory, likely causing an OOM error",
"It slows down the executors",
"It triggers a VACUUM command"
],
answer:1,
explanation:"Collect pulls the entire distributed dataset into the single node running the Driver. If the data exceeds Driver RAM, the job crashes."
},

/* ======================================================
STREAMING & AUTO LOADER (121 - 180)
====================================================== */

{
id:46,
difficulty:"medium",
category:"streaming",
question:"What is the purpose of 'Checkpointing' in Structured Streaming?",
options:[
"To encrypt the data",
"To store the state and offset of the stream for fault tolerance and recovery",
"To speed up the join performance",
"To define the schema"
],
answer:1,
explanation:"Checkpoints allow a stream to resume exactly where it left off by saving progress to persistent storage (like S3/ADLS)."
},

{
id:47,
difficulty:"hard",
category:"streaming",
question:"How does a 'Watermark' help in a streaming pipeline?",
options:[
"It prevents data from being written to Delta",
"It allows the engine to drop late-arriving data that falls outside a specified time window",
"It increases the speed of the cluster",
"It automatically scales the executors"
],
answer:1,
explanation:"Watermarking defines how long the engine waits for late data before discarding the state for a specific time window."
},

{
id:48,
difficulty:"medium",
category:"streaming",
question:"Which window function type would you use to group data into fixed, non-overlapping intervals (e.g., every 5 minutes)?",
options:[
"Sliding Window",
"Tumbling Window",
"Session Window",
"Ranking Window"
],
answer:1,
explanation:"Tumbling windows are fixed-size and do not overlap."
},

/* ======================================================
UNITY CATALOG & GOVERNANCE (181 - 220)
====================================================== */

{
id:49,
difficulty:"medium",
category:"governance",
question:"What is the correct way to secure a database password in a Databricks Notebook?",
options:[
"Hardcode it in a variable",
"Store it in a text file in DBFS",
"Use Databricks Secrets and dbutils.secrets.get()",
"Save it in the notebook's comments"
],
answer:2,
explanation:"Secrets allow you to store credentials securely and reference them without exposing plain text in code."
},

{
id:50,
difficulty:"hard",
category:"governance",
question:"During a migration to Unity Catalog, what happens to 'External Tables'?",
options:[
"They must be converted to Managed Tables",
"They can remain in their S3/ADLS location but must be registered as External Volumes/Tables via a Storage Credential",
"They are deleted automatically",
"They no longer support Spark SQL"
],
answer:1,
explanation:"Unity Catalog governs external data via 'Storage Credentials' and 'External Locations' to maintain security over cloud storage."
},

/* ======================================================
COST & ARCHITECTURE SCENARIOS (221 - 280)
====================================================== */

{
id:51,
difficulty:"hard",
category:"cost_optimization",
question:"Your Databricks cost increased 70%. What is the first metric to check to reduce it?",
options:[
"Number of notebooks created",
"Identify clusters with low 'Cluster Utilization' or high 'Idle Time'",
"The number of rows in your Bronze layer",
"The Spark version"
],
answer:1,
explanation:"Over-provisioned clusters or clusters that don't auto-terminate are the most common causes of cost spikes."
},

{
id:52,
difficulty:"hard",
category:"spark_ui",
question:"If Spark UI shows high 'Garbage Collection (GC) Time', what should you investigate?",
options:[
"Network bandwidth",
"Memory pressure on executors (partitions might be too large)",
"The number of CPUs",
"S3 bucket permissions"
],
answer:1,
explanation:"High GC time indicates the JVM is struggling to clear memory, often because too much data is being loaded into single tasks."
},

{
id:53,
difficulty:"medium",
category:"infrastructure",
question:"What is the 'Control Plane' in Databricks architecture?",
options:[
"Where the customer's data is stored",
"The Databricks-managed web application, cluster manager, and job scheduler",
"The physical CPUs in the worker nodes",
"The S3 bucket connector"
],
answer:1,
explanation:"The Control Plane hosts the UI, notebook service, and management backend; the Data Plane is where your code actually runs."
},

{
id:54,
difficulty:"hard",
category:"performance",
question:"Why might adding more worker nodes actually make a Spark job run slower?",
options:[
"Spark cannot handle more than 5 nodes",
"Increased shuffle communication overhead and task scheduling latency",
"It increases the storage cost",
"The driver runs out of disk space"
],
answer:1,
explanation:"If the data size is small, the overhead of network communication (shuffling) between many nodes outweighs the parallel processing gain."
},

{
id:55,
difficulty:"hard",
category:"scenarios",
question:"Scenario: You have a 10TB table filtered primarily by 'Date' and 'Region'. Which design is best?",
options:[
"Z-Order on Date and Region",
"Partition by Date, Z-Order on Region",
"No partitioning, just Z-Order",
"Partition by Region, Z-Order on Date"
],
answer:1,
explanation:"Partitioning by a low-cardinality time dimension (Date) and Z-Ordering by a high-cardinality filter (Region) provides the best data skipping."
},
/* ======================================================
AWS S3 & INFRASTRUCTURE (56 - 70)
====================================================== */

{
id:56,
difficulty:"medium",
category:"infrastructure",
question:"Which AWS S3 storage class is most cost-effective for Delta Lake 'Bronze' data that is rarely accessed but must be available immediately?",
options:[
"S3 Standard",
"S3 Standard-IA (Infrequent Access)",
"S3 Glacier Deep Archive",
"S3 Intelligent-Tiering"
],
answer:1,
explanation:"Standard-IA is cheaper for storage but has a retrieval fee, making it ideal for raw data that acts as a backup or audit trail."
},

{
id:57,
difficulty:"hard",
category:"infrastructure",
question:"How does Databricks ensure 'Encryption in Transit' when reading from S3?",
options:[
"Using SSL/TLS protocols for all API calls to S3",
"By physically locking the worker nodes",
"Using SSE-KMS at the bucket level",
"Encrypting the notebook cells"
],
answer:0,
explanation:"Encryption in transit is handled by TLS/SSL during the data transfer between the Data Plane and S3."
},

{
id:58,
difficulty:"medium",
category:"infrastructure",
question:"In a multi-account AWS setup, how does Databricks access S3 without using long-lived access keys?",
options:[
"By sharing the root password",
"Using IAM Instance Profiles or Unity Catalog Storage Credentials (IAM Roles)",
"Using a VPN tunnel",
"Hardcoding the Secret Key in a widget"
],
answer:1,
explanation:"IAM Roles/Instance Profiles provide temporary, rotating credentials which are more secure than static keys."
},

/* ======================================================
SPARK UI & TROUBLESHOOTING (71 - 85)
====================================================== */

{
id:59,
difficulty:"hard",
category:"spark_ui",
question:"In the Spark UI, 'Shuffle Read' is 500GB but 'Shuffle Write' is 10GB. What does this suggest?",
options:[
"A 'Broadcast Join' is happening",
"Explosive Join / Cartesian Product (one row matching many)",
"The cluster is too fast",
"The data is compressed too much"
],
answer:1,
explanation:"If the output (read for next stage) is massive compared to the input (write from previous), you likely have a join that is ballooning the row count."
},

{
id:60,
difficulty:"hard",
category:"spark_ui",
question:"Which Spark UI metric confirms that your job is 'Spilling' to disk?",
options:[
"GC Time",
"Shuffle Spill (Memory) vs Shuffle Spill (Disk)",
"Task Deserialization Time",
"Scheduler Delay"
],
answer:1,
explanation:"Spill occurs when the data in a single partition exceeds the 'Execution Memory' allocated to a task."
},

{
id:61,
difficulty:"medium",
category:"spark_ui",
question:"A Spark job has 1000 tasks, but only 8 run at a time on an 8-core worker. What is the bottleneck?",
options:[
"The Driver memory",
"CPU Slot Availability (Parallelism)",
"S3 bandwidth",
"The Python interpreter"
],
answer:1,
explanation:"The number of concurrent tasks is limited by the total number of cores in the cluster's worker nodes."
},

/* ======================================================
PYTHON FOR DATA ENGINEERING (86 - 95)
====================================================== */

{
id:62,
difficulty:"hard",
category:"python",
question:"In Data Engineering, what is a common use case for a Python 'Decorator'?",
options:[
"To change the Spark version",
"To wrap a function with logging, timing, or retry logic (e.g., for API calls)",
"To delete a Delta table",
"To create a new S3 bucket"
],
answer:1,
explanation:"Decorators allow you to add reusable logic (like @retry or @log_execution) to existing functions without modifying their core code."
},

{
id:63,
difficulty:"medium",
category:"python",
question:"What is the main risk of using a Python UDF (User Defined Function) in Spark compared to Spark SQL functions?",
options:[
"It is too secure",
"Performance overhead due to data serialization between the JVM and Python process",
"It only works on Windows",
"It deletes the Delta log"
],
answer:1,
explanation:"Python UDFs are slower because Spark must move data out of the JVM into a Python worker process and back (Pickling)."
},

/* ======================================================
MIGRATION & UNITY CATALOG (96 - 100)
====================================================== */

{
id:64,
difficulty:"hard",
category:"migration",
question:"You are migrating from Hive Metastore to Unity Catalog. Which command 'upgrades' a table without moving the physical data?",
options:[
"ALTER TABLE table_name SET LOCATION",
"SYNC METASTORE",
"CREATE TABLE ... SHALLOW CLONE",
"The 'Upgrade' button in Data Explorer (which runs SYNC/ALTER logic)"
],
answer:3,
explanation:"Unity Catalog allows you to register existing S3 paths as 'External Tables' to maintain data in place while upgrading governance."
},

{
id:65,
difficulty:"medium",
category:"migration",
question:"What is a critical 'Pre-migration' check for a large data move?",
options:[
"Check the color of the UI",
"Validate data consistency (checksums) and schema compatibility",
"Increase the price of the cluster",
"Uninstall Python"
],
answer:1,
explanation:"Ensuring the source data matches the target schema and performing row-count validations are essential for migration integrity."
},

/* ======================================================
ADVANCED SCENARIOS
====================================================== */

{
id:66,
difficulty:"hard",
category:"architecture",
question:"Scenario: You need to design a real-time ride analytics system for 1 million events/sec. Which stack is best?",
options:[
"S3 -> Spark Batch every hour",
"Kafka -> Structured Streaming -> Delta Lake (Silver) -> PowerBI",
"Excel -> Python -> SQL Server",
"Auto Loader -> CSV -> Unity Catalog"
],
answer:1,
explanation:"Kafka acts as the high-throughput buffer, and Structured Streaming processes it sub-second into Delta Lake for real-time BI."
},

{
id:67,
difficulty:"hard",
category:"spark_performance",
question:"Why does increasing the number of partitions sometimes DECREASE performance?",
options:[
"It makes the data too small to read",
"High overhead for the Driver to manage and schedule thousands of tiny tasks",
"It triggers a cluster restart",
"It increases the cost of S3"
],
answer:1,
explanation:"If partitions are too small (e.g., 1KB), the 'Task Scheduling' time exceeds the 'Task Execution' time."
},

{
id:68,
difficulty:"medium",
category:"governance",
question:"What are Databricks Widgets used for?",
options:[
"To play games in the notebook",
"To parameterize notebooks (e.g., passing a 'run_date' or 'environment' variable)",
"To secure S3 buckets",
"To optimize Delta tables"
],
answer:1,
explanation:"Widgets allow users to input parameters that the notebook code can use to filter data or change logic dynamically."
},

{
id:69,
difficulty:"hard",
category:"security",
question:"When using dbutils.secrets.get(), where is the secret value visible?",
options:[
"In the notebook output",
"It is redacted (masked as [REDACTED]) in the notebook output for security",
"In the Spark UI",
"In the cluster logs"
],
answer:1,
explanation:"Databricks automatically redacts secrets retrieved via dbutils to prevent accidental exposure in logs or UI."
},

{
id:70,
difficulty:"hard",
category:"delta_lake",
question:"If a Spark executor fails during a Delta Lake write, what happens to the partially written data?",
options:[
"The table becomes corrupt",
"Delta Lake's ACID properties ensure the partial write is ignored until the transaction is committed",
"You must manually delete the files",
"The whole cluster shuts down"
],
answer:1,
explanation:"Delta uses the Transaction Log; files are only 'official' once the commit entry is written to the log. Incomplete writes are cleaned up by VACUUM later."
},
/* ======================================================
STRUCTURED STREAMING & AUTO LOADER (71 - 90)
====================================================== */

{
id:71,
difficulty:"hard",
category:"streaming",
question:"Which Trigger type in Structured Streaming processes all available data in a single batch and then stops the query?",
options:[
"Trigger.Continuous",
"Trigger.Once",
"Trigger.AvailableNow",
"Trigger.ProcessingTime"
],
answer:2,
explanation:"Trigger.AvailableNow (introduced to replace Trigger.Once) processes all available data in multiple max-sized batches and then terminates."
},

{
id:72,
difficulty:"medium",
category:"streaming",
question:"In a streaming aggregation, what happens to data that arrives after the defined Watermark threshold?",
options:[
"It is stored in a separate 'late' table",
"It is processed normally but tagged as late",
"It is dropped and not included in the aggregation",
"The stream fails with a LatencyError"
],
answer:2,
explanation:"Watermarking defines the boundary for state management; data older than the watermark is discarded to keep the state size manageable."
},

{
id:73,
difficulty:"hard",
category:"streaming",
question:"Which output mode must be used when performing streaming aggregations without a watermark?",
options:[
"Append Mode",
"Complete Mode",
"Update Mode",
"Overwrite Mode"
],
answer:1,
explanation:"Complete Mode rewrites the entire result table to the sink, which is necessary if you aren't using watermarks to prune old state."
},

{
id:74,
difficulty:"medium",
category:"ingestion",
question:"What is the benefit of 'Cloud Files' (Auto Loader) over 'COPY INTO' for high-volume file ingestion?",
options:[
"It supports Excel files",
"It uses asynchronous file discovery (Notification Mode) to avoid expensive directory listing",
"It is free to use",
"It automatically deletes source files"
],
answer:1,
explanation:"Notification mode uses AWS SQS/Azure Event Grid to detect new files, which is much faster than listing millions of files in a bucket."
},

{
id:75,
difficulty:"hard",
category:"streaming",
question:"Scenario: Your streaming job is falling behind. The Spark UI shows high 'Process Rate' but very low 'Input Rate'. What is the problem?",
options:[
"The source (e.g., Kafka) does not have enough data",
"The cluster is too slow",
"There is a bottleneck in the sink (writing to Delta)",
"The network is down"
],
answer:0,
explanation:"If Process Rate > Input Rate, the engine is waiting for data from the source, meaning the bottleneck is upstream."
},

/* ======================================================
DELTA LIVE TABLES - DLT (91 - 105)
====================================================== */

{
id:76,
difficulty:"medium",
category:"dlt",
question:"In DLT, what is the difference between a 'Streaming Live Table' and a 'Live Table'?",
options:[
"There is no difference",
"Streaming Live Tables process data incrementally; Live Tables re-read the entire source each refresh",
"Live Tables only work with SQL",
"Streaming Live Tables cannot use Unity Catalog"
],
answer:1,
explanation:"Live Tables (Materialized Views) compute the full result, while Streaming Live Tables (Append-only) process only new data."
},

{
id:77,
difficulty:"hard",
category:"dlt",
question:"Which DLT constraint clause ensures that a pipeline fails immediately if a row fails a data quality check?",
options:[
"EXPECT (id IS NOT NULL)",
"EXPECT (id IS NOT NULL) ON VIOLATION DROP ROW",
"EXPECT (id IS NOT NULL) ON VIOLATION FAIL UPDATE",
"CONSTRAINT id_not_null CHECK (id IS NOT NULL)"
],
answer:2,
explanation:"FAIL UPDATE stops the entire pipeline, preventing bad data from propagating downstream."
},

{
id:78,
difficulty:"medium",
category:"dlt",
question:"How do you reference a table 'customers' in the same DLT pipeline using SQL?",
options:[
"FROM main.default.customers",
"FROM LIVE.customers",
"FROM customers",
"FROM STREAM(customers)"
],
answer:1,
explanation:"The 'LIVE' virtual schema is used in DLT to handle internal dependencies within a pipeline."
},

/* ======================================================
ADVANCED SPARK SQL & TRANSFORMATIONS (106 - 115)
====================================================== */

{
id:79,
difficulty:"medium",
category:"spark_sql",
question:"Which function allows you to perform a 'Lateral Join' to apply a subquery to every row of a main table?",
options:[
"OUTER APPLY",
"LATERAL VIEW",
"CROSS JOIN",
"EXPLODE"
],
answer:1,
explanation:"LATERAL VIEW is used with UDTFs (like explode) to join the results of the function back to the original row."
},

{
id:80,
difficulty:"hard",
category:"spark_sql",
question:"What is 'Predicate Pushdown' in Databricks?",
options:[
"Moving the filter logic from the Spark Executor to the Data Source (e.g., S3/Parquet metadata)",
"Deleting rows that don't match a filter",
"Converting SQL to Python",
"Writing filters in the WHERE clause"
],
answer:0,
explanation:"Predicate pushdown reduces data transfer by filtering out data at the storage level before it is read into Spark memory."
},

{
id:81,
difficulty:"hard",
category:"architecture",
question:"How does the Catalyst Optimizer improve Spark query performance?",
options:[
"By adding more RAM to executors",
"By performing logical plan optimization, cost-based optimization, and physical planning",
"By compressing the Delta Log",
"By restarting failed tasks"
],
answer:1,
explanation:"Catalyst is the engine that optimizes SQL/DataFrame queries into the most efficient physical execution plan."
},

/* ======================================================
UNITY CATALOG & SECURITY (116 - 120)
====================================================== */

{
id:82,
difficulty:"medium",
category:"governance",
question:"Who can grant permissions on a table in Unity Catalog by default?",
options:[
"Any user in the workspace",
"Only the Metastore Admin",
"The Table Owner or a user with the GRANT privilege",
"The Databricks Support team"
],
answer:2,
explanation:"Ownership is a key concept in UC; owners have full control, including the ability to GRANT permissions to others."
},

{
id:83,
difficulty:"hard",
category:"governance",
question:"What is a 'Service Principal' in the context of Databricks?",
options:[
"A senior Data Engineer",
"An identity used by automated tools/jobs rather than a human user",
"A special type of cluster",
"The person who pays the Databricks bill"
],
answer:1,
explanation:"Service Principals are used for CI/CD and production jobs to ensure security and prevent jobs from failing if a user leaves the company."
},

{
id:84,
difficulty:"medium",
category:"architecture",
question:"In Databricks, where are the 'Job' configurations and 'Notebook' metadata stored?",
options:[
"In the Customer's S3 bucket",
"In the Databricks-managed Control Plane (Relational Database)",
"On the worker nodes",
"In the Delta Log"
],
answer:1,
explanation:"Metadata like job schedules and notebook code resides in the Control Plane; only your processed data stays in your cloud storage."
},

{
id:85,
difficulty:"hard",
category:"pyspark",
question:"You need to apply a complex Python function to a Spark DataFrame but want to avoid the performance hit of a standard UDF. What should you use?",
options:[
"Spark SQL CASE statements",
"Pandas UDFs (Vectorized UDFs using Apache Arrow)",
"A for-loop in Python",
"RDD map functions"
],
answer:1,
explanation:"Pandas UDFs use Apache Arrow to transfer data in batches, significantly reducing serialization overhead compared to row-by-row UDFs."
},
/* ======================================================
ADVANCED DELTA LAKE: SCD & CDF (86 - 105)
====================================================== */

{
id:86,
difficulty:"hard",
category:"delta_lake",
question:"In a Slowly Changing Dimension (SCD) Type 2 implementation, how do you logically 'expire' an old record in Delta Lake?",
options:[
"Delete the row from the table",
"Set an 'is_current' flag to false and update the 'end_date' to the current timestamp",
"Overwrite the old data with new data",
"Move the old row to a 'Bronze' table"
],
answer:1,
explanation:"SCD Type 2 tracks history by maintaining multiple rows for a single entity, using flags and date ranges to identify the active record."
},

{
id:87,
difficulty:"hard",
category:"delta_lake",
question:"Scenario: You enabled Change Data Feed (CDF) on a table. Which hidden columns are now available to identify the type of change?",
options:[
"_change_type, _commit_version, _commit_timestamp",
"_action, _version, _time",
"cdc_type, cdc_version, cdc_time",
"_row_op, _row_ver, _row_ts"
],
answer:0,
explanation:"CDF adds metadata columns like _change_type (insert, update_preimage, update_postimage, delete) to track row-level changes."
},

{
id:88,
difficulty:"medium",
category:"delta_lake",
question:"When would you use a 'Deep Clone' instead of a 'Shallow Clone' for a Delta table?",
options:[
"When you only need to test a query on existing data",
"When you need a full, independent copy of both metadata and data for disaster recovery or migration",
"When you want to save on storage costs",
"When the source table is small"
],
answer:1,
explanation:"Deep clones copy all data files, making the new table completely independent of the source."
},

/* ======================================================
SPARK UI & DEEP TROUBLESHOOTING (106 - 125)
====================================================== */

{
id:89,
difficulty:"hard",
category:"spark_ui",
question:"In Spark UI, you see high 'Task Deserialization Time'. What is a likely cause?",
options:[
"The executor has no RAM",
"Large broadcast variables or large serialized objects (like large Python closures/objects) being sent to executors",
"S3 is slow",
"The driver is too small"
],
answer:1,
explanation:"If the objects being sent to workers are too large, the time taken to unpack them (deserialization) becomes a bottleneck."
},

{
id:90,
difficulty:"hard",
category:"spark_ui",
question:"A Spark job fails with 'BroadcastExchange Executed in 300s' (Timeout). How do you fix this?",
options:[
"Disable broadcasting entirely",
"Increase 'spark.sql.broadcastTimeout' or check for data skew in the small table",
"Decrease the driver memory",
"Delete the checkpoint folder"
],
answer:1,
explanation:"Broadcast joins have a default timeout (usually 5 mins). If the 'small' table takes too long to collect or transmit, the job fails."
},

{
id:91,
difficulty:"medium",
category:"spark_ui",
question:"What does a 'Yellow' bar in the Spark UI Storage tab indicate for a cached RDD/DataFrame?",
options:[
"The data is fully in memory",
"The data is partially in memory and partially on disk (spilled)",
"The data is corrupt",
"The data is being deleted"
],
answer:1,
explanation:"Yellow indicates the fraction of the data that had to be moved to disk because it couldn't fit in the allocated Spark memory."
},

/* ======================================================
DATABRICKS SQL & BI WAREHOUSING (126 - 145)
====================================================== */

{
id:92,
difficulty:"medium",
category:"db_sql",
question:"What is the primary difference between a 'Standard' SQL Warehouse and a 'Pro' SQL Warehouse?",
options:[
"Pro supports Python UDFs and predictive I/O",
"Standard is faster",
"Pro is only for PowerBI",
"Standard doesn't support SQL"
],
answer:0,
explanation:"Pro and Serverless warehouses include advanced features like improved performance via Predictive I/O and support for Python-based workflows."
},

{
id:93,
difficulty:"hard",
category:"db_sql",
question:"You want to receive an email whenever a specific KPI drops below 100 in your Databricks SQL query. Which feature do you use?",
options:[
"SQL Dashboard",
"SQL Alert",
"Query History",
"Databricks Workflow"
],
answer:1,
explanation:"SQL Alerts monitor query results and send notifications (email, Slack, Webhook) when a threshold is met."
},

{
id:94,
difficulty:"medium",
category:"db_sql",
question:"How do you optimize a Databricks SQL query that is scanning too much data from a Delta table?",
options:[
"Use a smaller warehouse",
"Ensure the table has been OPTIMIZED and Z-ORDERED on the filtered columns",
"Rewrite the query in Python",
"Turn off the Photon engine"
],
answer:1,
explanation:"Data skipping (via Optimize/Z-order) is the most effective way to reduce the I/O of a SQL query."
},

/* ======================================================
ORCHESTRATION & RECOVERY (146 - 160)
====================================================== */

{
id:95,
difficulty:"hard",
category:"orchestration",
question:"What is the 'Maximum Concurrent Runs' setting in a Databricks Job used for?",
options:[
"To limit the number of users viewing the job",
"To prevent multiple instances of the same job from running simultaneously (e.g., if a previous run is stuck)",
"To speed up the job",
"To increase the cluster size automatically"
],
answer:1,
explanation:"This is a safety mechanism to prevent job 'pile-up' where new runs start before old ones finish, potentially causing data corruption or resource exhaustion."
},

{
id:96,
difficulty:"medium",
category:"orchestration",
question:"In a Databricks Workflow, what is a 'Task'?",
options:[
"The entire pipeline",
"An individual unit of work (e.g., running a Notebook, a JAR, or a DLT pipeline) within a Job",
"A row in a Delta table",
"A core on a worker node"
],
answer:1,
explanation:"A Job is an orchestration of one or more Tasks, which can have dependencies between them."
},

/* ======================================================
PROFESSIONAL SCENARIOS (161 - 180)
====================================================== */

{
id:97,
difficulty:"hard",
category:"scenarios",
question:"Scenario: You have a 50TB dataset. Most queries filter by 'department_id'. However, once a month, a query filters by 'transaction_id'. How do you design for this?",
options:[
"Partition by 'department_id' and Z-Order by 'transaction_id'",
"Partition by both",
"Z-Order by both",
"Partition by 'transaction_id' only"
],
answer:0,
explanation:"Partitioning handles the frequent high-level filter (department), while Z-Order handles the high-cardinality, less frequent filter (transaction) within those partitions."
},

{
id:98,
difficulty:"hard",
category:"scenarios",
question:"Why might 'Identity Column' generation in Delta Lake be preferred over manually calculating 'MAX(id) + 1'?",
options:[
"It's more colorful",
"It is thread-safe and prevents duplicate IDs during concurrent writes",
"It makes the files smaller",
"It only works with Unity Catalog"
],
answer:1,
explanation:"Using IDENTITY columns (GENERATED ALWAYS AS IDENTITY) ensures unique, auto-incrementing values even when multiple streams or jobs write to the table."
},

{
id:99,
difficulty:"medium",
category:"governance",
question:"What is 'Data Lineage' in Unity Catalog?",
options:[
"A list of all users in the account",
"The visual map showing how data flows from source to target across tables and columns",
"The history of SQL queries run by a user",
"A backup of the metadata"
],
answer:1,
explanation:"Lineage helps with impact analysis, allowing you to see which downstream tables/dashboards are affected if a source table changes."
},

{
id:100,
difficulty:"hard",
category:"architecture",
question:"What is the role of 'Predictive I/O' in Databricks?",
options:[
"It predicts when a cluster will fail",
"It uses machine learning to optimize the way data is read from cloud storage, specifically for selective scans and joins",
"It writes code for the user",
"It reduces the cost of S3 by 90%"
],
answer:1,
explanation:"Predictive I/O (available in Pro/Serverless SQL) improves performance by intelligently pre-fetching data and optimizing file access patterns."
},
/* ======================================================
DELTA LIVE TABLES - ADVANCED (101 - 120)
====================================================== */

{
id:101,
difficulty:"hard",
category:"dlt",
question:"In Delta Live Tables, what is the 'Maintenance Task' responsible for?",
options:[
"Updating the UI",
"Automatically running OPTIMIZE and VACUUM on the underlying tables",
"Restarting the cluster",
"Deleting old notebooks"
],
answer:1,
explanation:"DLT manages the health of its tables by automatically running maintenance jobs to compact files and clean up stale data."
},

{
id:102,
difficulty:"medium",
category:"dlt",
question:"Which DLT table type is optimized for 'Append-only' data ingestion from a streaming source?",
options:[
"Live Table",
"Streaming Live Table",
"Incremental Table",
"Static Table"
],
answer:1,
explanation:"Streaming Live Tables process data incrementally and are designed for high-velocity, append-only streams."
},

{
id:103,
difficulty:"hard",
category:"dlt",
question:"Scenario: You need to implement an SCD Type 1 update in DLT. Which syntax do you use?",
options:[
"APPLY CHANGES INTO",
"MERGE INTO LIVE",
"INSERT OVERWRITE",
"UPDATE LIVE TABLE"
],
answer:0,
explanation:"The APPLY CHANGES INTO API in DLT simplifies the implementation of Change Data Capture (CDC) for both SCD Type 1 and Type 2."
},

/* ======================================================
DATA MODELING & ETL STRATEGIES (121 - 135)
====================================================== */

{
id:104,
difficulty:"medium",
category:"elt",
question:"What is the main difference between SCD Type 1 and SCD Type 2?",
options:[
"Type 1 keeps history; Type 2 overwrites",
"Type 1 overwrites existing data; Type 2 maintains historical versions with timestamps/flags",
"Type 1 is only for SQL; Type 2 is for Python",
"There is no difference in Delta Lake"
],
answer:1,
explanation:"SCD Type 1 is for 'corrections' (no history), while SCD Type 2 is for 'audit/history' (tracking changes over time)."
},

{
id:105,
difficulty:"hard",
category:"architecture",
question:"Why is it recommended to use a 'Surrogate Key' instead of a 'Natural Key' (like Email) in a Gold layer dimension table?",
options:[
"Natural keys are too fast",
"Surrogate keys (integers/hashes) improve join performance and insulate the warehouse from changes in source systems",
"It makes the table look more professional",
"Natural keys cannot be stored in Delta"
],
answer:1,
explanation:"Surrogate keys provide a stable join key even if a user changes their email or a source system ID is recycled."
},

/* ======================================================
SPARK EXECUTION & INTERNALS (136 - 150)
====================================================== */

{
id:106,
difficulty:"hard",
category:"spark_internals",
question:"What is 'Dynamic File Pruning' (DFP) in Databricks?",
options:[
"Deleting files while the job is running",
"Using join results to skip scanning unnecessary files in a large fact table at runtime",
"A new type of Vacuum",
"A way to rename files"
],
answer:1,
explanation:"DFP improves star-schema join performance by using the filter from a dimension table to prune partitions in the fact table dynamically."
},

{
id:107,
difficulty:"medium",
category:"spark_internals",
question:"What is the 'Adaptive Query Execution' (AQE) feature in Spark 3.x?",
options:[
"It writes code for you",
"It re-optimizes query plans during runtime based on actual statistics from completed stages",
"It changes the cluster size",
"It converts Python to Scala"
],
answer:1,
explanation:"AQE can coalesce shuffle partitions, switch join strategies, and optimize skewed joins while the job is executing."
},

{
id:108,
difficulty:"hard",
category:"spark_performance",
question:"In the Spark UI, 'Task Deserialization Time' is high for every task. What should you check first?",
options:[
"The size of the JAR/Python file being sent to workers",
"The size of your broadcast variables or closure variables",
"The speed of the network",
"The version of Java"
],
answer:1,
explanation:"When large variables are captured in a function/closure, they must be sent to every task, causing high deserialization overhead."
},

/* ======================================================
CI/CD & DEVOPS FOR DATABRICKS (151 - 165)
====================================================== */

{
id:109,
difficulty:"medium",
category:"devops",
question:"What is the purpose of 'Databricks Git Folders' (formerly Repos)?",
options:[
"To store data files",
"To provide full Git integration (Pull, Push, Branching) within the Databricks workspace",
"To backup the S3 bucket",
"To host a website"
],
answer:1,
explanation:"Git Folders allow developers to sync Databricks notebooks with providers like GitHub/GitLab for version control and CI/CD."
},

{
id:110,
difficulty:"hard",
category:"devops",
question:"Which tool is the modern standard for defining Databricks infrastructure and jobs as code?",
options:[
"Databricks Asset Bundles (DABs)",
"Manual UI configuration",
"Python scripts with dbutils",
"Excel spreadsheets"
],
answer:0,
explanation:"DABs allow engineers to package notebooks, libraries, and job definitions into a single bundle for consistent deployment across environments."
},

/* ======================================================
STORAGE & CLOUD INTEGRATION (166 - 180)
====================================================== */

{
id:111,
difficulty:"medium",
category:"infrastructure",
question:"When using ADLS Gen2 (Azure), which driver is used by Databricks to access the data?",
options:[
"S3A",
"ABFS (Azure Blob File System)",
"WASP",
"HDFS"
],
answer:1,
explanation:"The ABFS driver is optimized for big data workloads on Azure Data Lake Storage Gen2."
},

{
id:112,
difficulty:"hard",
category:"infrastructure",
question:"What is the benefit of using 'Mounting' (dbutils.fs.mount) vs. 'Direct Access' via Unity Catalog?",
options:[
"Mounting is more secure",
"Unity Catalog direct access is preferred because it avoids the security risks of shared service principal credentials in the workspace",
"Mounting is faster",
"There is no difference"
],
answer:1,
explanation:"Unity Catalog provides fine-grained governance at the file/table level, whereas mounting often relies on broad access keys shared across the workspace."
},

/* ======================================================
SQL WAREHOUSE & PERFORMANCE (181 - 200)
====================================================== */

{
id:113,
difficulty:"medium",
category:"db_sql",
question:"What does the 'Serverless' SQL Warehouse offer that 'Classic' does not?",
options:[
"Instant startup time and lower management overhead",
"Support for SQL",
"A connection to PowerBI",
"The ability to run Python"
],
answer:0,
explanation:"Serverless warehouses start in seconds and handle scaling automatically, as the compute is managed by Databricks."
},

{
id:114,
difficulty:"hard",
category:"db_sql",
question:"Which feature in Databricks SQL allows you to see the exact plan and time spent on each operator (Scan, Join, Aggregate)?",
options:[
"Query History -> Query Profile",
"The Notebook UI",
"The S3 logs",
"The SQL Alert"
],
answer:0,
explanation:"Query Profile provides a visual breakdown of query execution, helping identify bottlenecks like 'Large Read' or 'Data Skew'."
},

{
id:115,
difficulty:"hard",
category:"governance",
question:"Scenario: You need to share data with a partner who does NOT use Databricks. Which feature do you use?",
options:[
"Unity Catalog Internal Sharing",
"Delta Sharing (Open Protocol)",
"Emailing a CSV",
"Giving them your password"
],
answer:1,
explanation:"Delta Sharing is an open protocol that allows secure data sharing with any recipient, regardless of whether they use Databricks or not."
},

{
id:116,
difficulty:"medium",
category:"architecture",
question:"What is 'Photon'?",
options:[
"A new storage format",
"A high-performance C++ execution engine in Databricks for SQL workloads",
"A streaming source",
"A data visualization tool"
],
answer:1,
explanation:"Photon is a vectorized engine that accelerates Spark operations by running them in highly optimized native code."
},

{
id:117,
difficulty:"hard",
category:"pyspark",
question:"In PySpark, how do you handle 'Data Skew' during a join without increasing the cluster size?",
options:[
"Use the 'Skew Hint' or Salt the join keys",
"Filter out the skewed data",
"Convert the join to a select",
"Use coalesce(1)"
],
answer:0,
explanation:"Salting involves adding a random suffix to join keys to redistribute the skewed data across more partitions."
},

{
id:118,
difficulty:"medium",
category:"elt",
question:"Which command is used to record data quality metrics during a standard Spark ETL process?",
options:[
"No built-in command; requires custom logging or DLT Expectations",
"WRITE_LOGS",
"CHECK_QUALITY",
"VACUUM"
],
answer:0,
explanation:"Standard Spark requires custom frameworks for quality metrics, whereas DLT provides built-in 'Expectations'."
},

{
id:119,
difficulty:"hard",
category:"delta_lake",
question:"What is 'Liquid Clustering' meant to replace?",
options:[
"Delta Lake itself",
"Fixed partitioning and Z-ordering",
"S3 buckets",
"Python code"
],
answer:1,
explanation:"Liquid Clustering simplifies performance tuning by dynamically managing data layout without requiring fixed partition columns."
},

{
id:120,
difficulty:"medium",
category:"governance",
question:"In Unity Catalog, what is the 'Metastore'?",
options:[
"A table in a database",
"The top-level container that stores metadata across multiple Databricks workspaces",
"The S3 bucket where data is stored",
"The SQL editor"
],
answer:1,
explanation:"A Metastore is the root of the Unity Catalog hierarchy and governs data across an entire account/region."
},
/* ======================================================
ADVANCED STREAMING & STATE MANAGEMENT (121 - 145)
====================================================== */

{
id:121,
difficulty:"hard",
category:"streaming",
question:"Which Structured Streaming method allows you to write streaming output to a custom destination or a non-standard database (e.g., CosmosDB or an external API)?",
options:[
"writeStream.toTable()",
"writeStream.foreachBatch()",
"writeStream.format('delta')",
"writeStream.trigger(Once)"
],
answer:1,
explanation:"foreachBatch() allows you to apply arbitrary transformations and write logic to one or more sinks for every micro-batch."
},

{
id:122,
difficulty:"hard",
category:"streaming",
question:"What is the primary difference between 'Stateless' and 'Stateful' streaming transformations?",
options:[
"Stateless needs a checkpoint; Stateful does not",
"Stateless (filter, map) processes rows independently; Stateful (agg, join) requires storing intermediate data across micro-batches",
"Stateful only works with SQL",
"Stateless is 10x slower"
],
answer:1,
explanation:"Stateful operations require a 'State Store' (tracked in the checkpoint) to remember previous rows for windows or joins."
},

{
id:123,
difficulty:"medium",
category:"streaming",
question:"When using 'Trigger.AvailableNow', how does Spark handle a massive backlog of 1 million files?",
options:[
"It processes all 1 million in a single, massive micro-batch",
"It splits the files into multiple micro-batches based on 'maxFilesPerTrigger' settings until all are processed, then stops",
"It only processes the first 1000 and ignores the rest",
"It fails with an OutOfMemory error"
],
answer:1,
explanation:"AvailableNow is 'batch-friendly' streaming; it respects rate limits while ensuring all currently available data is processed before shutdown."
},

{
id:124,
difficulty:"hard",
category:"streaming",
question:"Scenario: You are performing a Stream-Stream Join. To prevent the 'State Store' from growing infinitely, what MUST be defined?",
options:[
"A Z-Order on the join key",
"A Watermark on both event-time columns and a time-range join condition",
"A larger executor memory",
"A Limit(100) clause"
],
answer:1,
explanation:"Without watermarks and time-range constraints, Spark must keep every row forever because a match could theoretically arrive at any time."
},

/* ======================================================
DATABRICKS SQL & VISUALIZATION (146 - 160)
====================================================== */

{
id:125,
difficulty:"medium",
category:"db_sql",
question:"In Databricks SQL, what is the purpose of 'Query Parameters' in a Dashboard?",
options:[
"To encrypt the SQL text",
"To allow users to filter multiple visualizations simultaneously using a dropdown or input field",
"To limit the number of rows returned to 10",
"To change the color of the charts"
],
answer:1,
explanation:"Parameters make dashboards interactive, allowing stakeholders to slice data by Date, Region, or Category without editing code."
},

{
id:126,
difficulty:"hard",
category:"db_sql",
question:"What happens to an 'Alert' if the underlying SQL query fails due to a schema change?",
options:[
"The Alert sends a 'Success' notification",
"The Alert status moves to 'Unknown' or 'Failed', and notifications are usually sent to the owners",
"Databricks automatically fixes the schema",
"The SQL Warehouse restarts"
],
answer:1,
explanation:"Alerts depend on successful execution. If the query breaks, the alert cannot evaluate the threshold and will trigger an error state."
},

{
id:127,
difficulty:"medium",
category:"db_sql",
explanation:"Photon is Databricks' next-generation engine, written in C++ to bypass JVM overhead for SQL operations.",
question:"Which engine is specifically designed to accelerate modern architectural patterns like the Medallion Architecture and Delta Lake?",
options:[
"MapReduce",
"Hive Execution Engine",
"Photon",
"Pandas"
],
answer:2
},

/* ======================================================
PERFORMANCE & SPARK UI SCENARIOS (161 - 185)
====================================================== */

{
id:128,
difficulty:"hard",
category:"spark_ui",
question:"In the Spark UI, the 'Event Timeline' shows large gaps of 'Task Deserialization Time' and 'Result Serialization Time'. What does this indicate?",
options:[
"The network is slow",
"Significant overhead in moving data between the Driver and Executors (e.g., large objects in code)",
"S3 is throttling requests",
"The cluster has too many workers"
],
answer:1,
explanation:"High serialization/deserialization times suggest that the 'shipped' code or the 'returned' results are too bulky for the Spark framework to handle efficiently."
},

{
id:129,
difficulty:"hard",
category:"spark_performance",
question:"Which configuration helps mitigate 'Data Skew' automatically in Spark 3.0+ when Adaptive Query Execution (AQE) is enabled?",
options:[
"spark.sql.adaptive.skewJoin.enabled",
"spark.sql.shuffle.partitions=1",
"spark.databricks.delta.optimizeWrite.enabled",
"spark.executor.instances=100"
],
answer:0,
explanation:"When enabled, Spark detects skewed partitions during shuffle and splits them into smaller sub-partitions to balance the load."
},

{
id:130,
difficulty:"medium",
category:"spark_performance",
question:"Why is 'Salting' used in a Join operation?",
options:[
"To encrypt the data",
"To redistribute data for a heavily skewed key by adding a random prefix/suffix to the key",
"To speed up S3 writes",
"To reduce the number of columns"
],
answer:1,
explanation:"Salting breaks up a 'fat' key (like a NULL or a default value) so that multiple executors can work on it in parallel."
},

/* ======================================================
DATA MODELING & SCD (186 - 210)
====================================================== */

{
id:131,
difficulty:"hard",
category:"elt",
question:"In an SCD Type 2 table, if a record's 'end_date' is NULL, what does it signify?",
options:[
"The record is deleted",
"The record is the current, active version",
"The record is corrupt",
"The record is from the Bronze layer"
],
answer:1,
explanation:"A NULL end_date (or a far-future date like 9999-12-31) is the standard way to mark the most recent version of a dimension."
},

{
id:132,
difficulty:"medium",
category:"delta_lake",
question:"Which command is used to see all the previous versions and operations performed on a Delta table?",
options:[
"SHOW TABLES",
"DESCRIBE HISTORY table_name",
"SELECT * FROM table_name.versions",
"LIST table_name"
],
answer:1,
explanation:"DESCRIBE HISTORY provides a full audit trail including who ran the job, when, and what operation (MERGE, UPDATE, etc.) was performed."
},

/* ======================================================
RELIABILITY & DATA QUALITY (211 - 230)
====================================================== */

{
id:133,
difficulty:"hard",
category:"dlt",
question:"What is the 'Expectation' behavior if you use 'ON VIOLATION DROP ROW'?",
options:[
"The whole pipeline fails",
"The invalid row is recorded in the event log and excluded from the target table",
"The row is kept but the columns are set to NULL",
"The row is sent to a 'Dead Letter' table automatically"
],
answer:1,
explanation:"DROP ROW is a 'cleanse' strategy; it keeps the pipeline running but ensures only valid data reaches the destination."
},

{
id:134,
difficulty:"medium",
category:"governance",
question:"What is 'Column-level Lineage' in Unity Catalog?",
options:[
"A list of column names",
"The ability to see exactly which source columns were used to produce a specific target column",
"A way to rename columns",
"The data type of a column"
],
answer:1,
explanation:"Column-level lineage provides granular traceability, essential for compliance (e.g., tracing where PII data is used)."
},

{
id:135,
difficulty:"hard",
category:"architecture",
question:"When migrating data from a Legacy Hive Metastore to Unity Catalog, what is the 'Three-Level Namespace' structure you must adopt?",
options:[
"Database.Schema.Table",
"Catalog.Schema.Table",
"Account.Folder.File",
"Workspace.Cluster.Table"
],
answer:1,
explanation:"Unity Catalog uses catalog.schema.table to allow for centralized governance across multiple workspaces."
},

/* ======================================================
CLOUD & STORAGE OPTIMIZATION (231 - 250)
====================================================== */

{
id:136,
difficulty:"medium",
category:"infrastructure",
question:"Which Databricks feature allows you to access S3 data without using IAM keys by leveraging the identity of the user running the cluster?",
options:[
"Direct S3 Access",
"Unity Catalog External Locations",
"Instance Profiles",
"Waggle"
],
answer:1,
explanation:"Unity Catalog External Locations use managed IAM roles to provide secure, credential-less access to storage."
},

{
id:137,
difficulty:"hard",
category:"infrastructure",
question:"What is the primary risk of using 'Spot Instances' for the Driver node of a Databricks cluster?",
options:[
"It is too expensive",
"If the Spot instance is reclaimed by AWS, the entire job fails immediately",
"Spot instances are slower than On-Demand",
"Spot instances don't support Spark"
],
answer:1,
explanation:"While worker nodes can be Spot, the Driver should be On-Demand because its loss kills the entire Spark application."
},

{
id:138,
difficulty:"medium",
category:"elt",
question:"How do you convert a standard Parquet table to a Delta table in-place?",
options:[
"CREATE TABLE ... AS SELECT * FROM parquet_table",
"CONVERT TO DELTA parquet.`s3://path/to/table`",
"INSERT INTO delta_table SELECT * FROM parquet_table",
"There is no in-place conversion"
],
answer:1,
explanation:"The CONVERT TO DELTA command creates a transaction log for existing Parquet files without moving the data."
},

{
id:139,
difficulty:"hard",
category:"spark_performance",
question:"In a large-scale data migration, you see 'Slow Listing' of files in S3. What is the best optimization?",
options:[
"Use more worker nodes",
"Use Auto Loader (Cloud Files) with 'fileNotification' mode",
"Change the S3 bucket name",
"Turn off encryption"
],
answer:1,
explanation:"File notification mode uses SQS/Event Grid instead of directory listing, which is much faster for buckets with millions of files."
},

{
id:140,
difficulty:"hard",
category:"scenarios",
question:"Scenario: You need to implement GDPR 'Right to be Forgotten'. How do you delete a specific user's data from all historical Delta versions?",
options:[
"Run DELETE FROM table WHERE user_id = X",
"Run DELETE followed by VACUUM RETAIN 0 HOURS",
"Drop the table and recreate it",
"It is impossible in Delta Lake"
],
answer:1,
explanation:"A simple DELETE removes the row from the current version. To remove it from history/backups for legal compliance, you must VACUUM with a zero-retention period (after ensuring no active queries are running)."
},
/* ======================================================
DATA GOVERNANCE & SECURITY (141 - 160)
====================================================== */

{
id:141,
difficulty:"hard",
category:"governance",
question:"Which Unity Catalog feature allows you to define a SQL function that masks sensitive data (like emails) based on the user's group membership?",
options:[
"Row-level Security",
"Column-level Masking (Column Masks)",
"Storage Credentials",
"Delta Sharing"
],
answer:1,
explanation:"Column masks allow you to apply a logic-based function to a column that redacts or transforms values depending on who is querying the data."
},

{
id:142,
difficulty:"medium",
category:"governance",
question:"What is a 'System Table' in Unity Catalog (e.g., system.billing.usage)?",
options:[
"A table you create for your own logs",
"An operational metadata table provided by Databricks to monitor audit logs, lineage, and costs",
"A table that stores the Spark source code",
"A table that cannot be queried with SQL"
],
answer:1,
explanation:"System tables provide built-in observability into account-level activities like billing, audit logs, and table access."
},

{
id:143,
difficulty:"hard",
category:"security",
question:"To enable 'Row-level Security' in a Gold table for multiple regions, which built-in Spark function is most commonly used in the filter logic?",
options:[
"current_user()",
"is_account_group_member()",
"get_json_object()",
"is_member()"
],
answer:3,
explanation:"is_member('group_name') allows you to restrict rows so that users only see data corresponding to their assigned regional group."
},

/* ======================================================
ADVANCED DELTA LAKE FEATURES (161 - 180)
====================================================== */

{
id:144,
difficulty:"hard",
category:"delta_lake",
question:"What is the primary benefit of 'Deletion Vectors' in Delta Lake?",
options:[
"They make the files smaller",
"They improve the performance of DELETE and UPDATE operations by avoiding a full rewrite of data files",
"They encrypt deleted data",
"They automatically run VACUUM"
],
answer:1,
explanation:"Deletion vectors mark rows as deleted in a small auxiliary file, deferring the expensive 'rewrite' of the large Parquet data file until a later compaction."
},

{
id:145,
difficulty:"medium",
category:"delta_lake",
question:"You need to recover a table to its state from 24 hours ago after an accidental drop of a column. Which command is most efficient?",
options:[
"CREATE TABLE AS SELECT FROM history",
"RESTORE TABLE target_table TO TIMESTAMP AS OF 'yesterday'",
"DESCRIBE DETAIL",
"REORG TABLE"
],
answer:1,
explanation:"The RESTORE command undoes changes by pointing the Delta Log back to a previous version or timestamp."
},

{
id:146,
difficulty:"hard",
category:"delta_lake",
question:"Which operation in Delta Lake is 'Non-Blocking', meaning other readers can still query the table while it runs?",
options:[
"OPTIMIZE",
"DROP TABLE",
"ALTER TABLE RENAME",
"VACUUM with 0 retention"
],
answer:0,
explanation:"OPTIMIZE is an ACID-compliant background operation. Readers continue to see the old files until the new compacted files are committed."
},

/* ======================================================
PROFESSIONAL SCENARIOS & MIGRATION (181 - 200)
====================================================== */

{
id:147,
difficulty:"hard",
category:"scenarios",
question:"Scenario: You are migrating 100 TB of data from an on-premise Hadoop cluster to Databricks on AWS. What is the biggest bottleneck usually encountered?",
options:[
"Spark CPU speed",
"Network bandwidth/Data transfer speed (Egress/Ingress)",
"The number of Python libraries",
"Delta Lake metadata overhead"
],
answer:1,
explanation:"For massive migrations, the physical limit of the network pipe is the primary constraint, often requiring AWS Snowball or dedicated Direct Connect."
},

{
id:148,
difficulty:"medium",
category:"architecture",
question:"Why should you avoid using 'dbfs:/' (Databricks File System root) for production data storage?",
options:[
"It is too fast",
"It is a managed area where data is lost if the workspace is deleted, and it lacks fine-grained IAM security",
"It only supports CSV files",
"It is limited to 10GB"
],
answer:1,
explanation:"Production data should always reside in external S3/ADLS buckets governed by Unity Catalog or IAM roles for persistence and security."
},

{
id:149,
difficulty:"hard",
category:"pyspark",
question:"In a large-scale shuffle, you see 'FetchFailedException'. What is the first configuration change you should try?",
options:[
"Increase the number of executors",
"Increase the executor memory or decrease 'spark.sql.shuffle.partitions' to reduce partition count",
"Change the Python version",
"Decrease the Driver memory"
],
answer:1,
explanation:"Fetch failures often happen when an executor is overwhelmed or a partition is too large to be transferred over the network successfully."
},

{
id:150,
difficulty:"medium",
category:"elt",
question:"Which Medallion layer is characterized by 'Business-level aggregates' and 'Final reporting structures'?",
options:[
"Bronze",
"Silver",
"Gold",
"Platinum"
],
answer:2,
explanation:"The Gold layer is the consumption layer, optimized for BI, analytics, and end-user querying."
},

/* ======================================================
DATABRICKS WORKFLOWS & CI/CD (151 - 170)
====================================================== */

{
id:151,
difficulty:"hard",
category:"devops",
question:"When using 'Databricks Asset Bundles' (DABs), where are the configuration settings for different environments (Dev/Prod) stored?",
options:[
"In the Databricks UI",
"In a 'databricks.yml' file with environment-specific overrides",
"In the Spark logs",
"In a Delta table"
],
answer:1,
explanation:"DABs use YAML files to define the 'Infrastructure as Code', allowing you to vary cluster sizes or S3 paths per environment."
},

{
id:152,
difficulty:"medium",
category:"orchestration",
question:"What is a 'Job Cluster' compared to an 'All-Purpose Cluster'?",
options:[
"Job Clusters are for interactive development",
"Job Clusters are cheaper, short-lived clusters created specifically for a single automated task",
"All-Purpose Clusters are only for SQL",
"Job Clusters don't support Delta Lake"
],
answer:1,
explanation:"Job clusters have lower DBU costs and are automatically terminated after the task completes, making them ideal for production."
},

/* ======================================================
ADVANCED SPARK SQL (171 - 190)
====================================================== */

{
id:153,
difficulty:"hard",
category:"spark_sql",
question:"What is the purpose of the 'EXCEPT' operator in Spark SQL?",
options:[
"To handle errors",
"To return rows from the first query that are not present in the second query",
"To skip the first 10 rows",
"To join two tables"
],
answer:1,
explanation:"EXCEPT (or MINUS in some dialects) is used to find the difference between two datasets with the same schema."
},

{
id:154,
difficulty:"medium",
category:"spark_sql",
question:"Which Spark SQL function would you use to transform a column of JSON strings into a MapType or StructType?",
options:[
"to_json()",
"from_json()",
"json_tuple()",
"explode()"
],
answer:1,
explanation:"from_json() requires a schema definition and parses a JSON string into a structured Spark type."
},

{
id:155,
difficulty:"hard",
category:"architecture",
question:"In the 'Control Plane', which service is responsible for managing the state of all running clusters and jobs?",
options:[
"The Cluster Manager",
"The S3 API",
"The VPC Peering",
"The Delta Log"
],
answer:0,
explanation:"The Cluster Manager in the Control Plane monitors health, handles auto-scaling, and restarts failed nodes in the Data Plane."
},

{
id:156,
difficulty:"hard",
category:"performance",
question:"Why is 'Broadcast Join' generally faster than 'Sort-Merge Join'?",
options:[
"It uses more CPUs",
"It avoids the expensive 'Shuffle' phase by sending the entire small table to every executor",
"It only works on small data",
"It bypasses the Catalyst Optimizer"
],
answer:1,
explanation:"By avoiding a shuffle (data movement across nodes based on keys), Broadcast Join reduces network I/O significantly."
},

{
id:157,
difficulty:"medium",
category:"infrastructure",
question:"What is the primary purpose of 'VPC Peering' or 'Private Link' in a Databricks deployment?",
options:[
"To make the UI look better",
"To ensure data traffic between Databricks and the customer's data sources stays within the private cloud network",
"To increase the speed of S3",
"To allow users to log in with Gmail"
],
answer:1,
explanation:"Private networking ensures that data does not traverse the public internet, meeting strict enterprise security requirements."
},

{
id:158,
difficulty:"hard",
category:"streaming",
question:"You are using 'Auto Loader'. Which 'schemaEvolutionMode' should you use to automatically add new columns to your Delta table as they appear in source files?",
options:[
"failFast",
"addNewColumns",
"rescue",
"none"
],
answer:1,
explanation:"addNewColumns allows Auto Loader to update the table schema dynamically without failing the stream."
},

{
id:159,
difficulty:"medium",
category:"delta_lake",
question:"What does the 'DESCRIBE DETAIL' command provide for a Delta table?",
options:[
"The full row content",
"Metadata including table size, number of files, and partitioning format",
"The SQL query history",
"The names of the users who accessed the table"
],
answer:1,
explanation:"DESCRIBE DETAIL gives an overview of the physical properties and statistics of the table."
},

{
id:160,
difficulty:"hard",
category:"pyspark",
question:"When using Spark, what is the 'Driver' node's primary responsibility?",
options:[
"Storing the data on its local disk",
"Executing the actual data transformations (map/filter)",
"Maintaining the SparkContext, coordinating tasks, and scheduling work across executors",
"Managing the S3 bucket permissions"
],
answer:2,
explanation:"The Driver is the brain of the Spark application; it plans the job and delegates execution to the workers (Executors)."
},
/* ======================================================
PYTHON FOR DATA ENGINEERING (161 - 175)
====================================================== */

{
id:161,
difficulty:"hard",
category:"python",
question:"What is the primary benefit of using 'Type Hinting' (e.g., def process(df: DataFrame) -> DataFrame) in Databricks notebooks?",
options:[
"It makes the code run 2x faster",
"It improves code readability, enables better IDE autocompletion, and helps catch bugs during development",
"It automatically converts the code to Scala",
"It is required by Unity Catalog"
],
answer:1,
explanation:"Type hints don't affect runtime speed in Python, but they are essential for maintainable production-grade pipelines and testing."
},

{
id:162,
difficulty:"hard",
category:"python",
question:"Which Python library is natively used by Spark 3.x to enable 'Vectorized UDFs', significantly improving performance over standard UDFs?",
options:[
"NumPy",
"PyArrow",
"Scikit-learn",
"Requests"
],
answer:1,
explanation:"Apache Arrow (PyArrow) allows Spark to transfer data between the JVM and Python in batches rather than row-by-row."
},

{
id:163,
difficulty:"medium",
category:"python",
question:"In a Databricks notebook, how do you install a specific Python library version that is only needed for that specific session?",
options:[
"Using %pip install library==version",
"By contacting the Workspace Admin",
"By editing the Cluster configuration",
"You cannot install libraries in a session"
],
answer:0,
explanation:"Notebook-scoped libraries (%pip) allow developers to use different library versions without affecting other users on the same cluster."
},

/* ======================================================
AWS/CLOUD SECURITY & S3 (176 - 190)
====================================================== */

{
id:164,
difficulty:"hard",
category:"security",
question:"Scenario: You need to encrypt your Delta Lake data at rest using a customer-managed key. Which AWS service integrates with S3 for this?",
options:[
"AWS IAM",
"AWS KMS (Key Management Service)",
"AWS CloudTrail",
"AWS Lambda"
],
answer:1,
explanation:"AWS KMS allows you to create and control the keys used to encrypt your data in S3 buckets."
},

{
id:165,
difficulty:"hard",
category:"infrastructure",
question:"What is the 'Cross-Origin Resource Sharing' (CORS) policy used for in an S3 bucket configured for Databricks?",
options:[
"To speed up data reads",
"To allow web applications in one domain to interact with resources in the S3 bucket",
"To encrypt the data",
"To delete old files"
],
answer:1,
explanation:"CORS is necessary if you are hosting a web UI or dashboard that needs to pull assets or data directly from an S3 path."
},

{
id:166,
difficulty:"medium",
category:"infrastructure",
question:"In Azure Databricks, which authentication method is preferred for a Service Principal to access ADLS Gen2 via Unity Catalog?",
options:[
"Access Keys",
"OAuth 2.0 with an Azure Service Principal and Managed Identity",
"Username and Password",
"Basic Auth"
],
answer:1,
explanation:"Managed Identities and OAuth 2.0 are the gold standard for secure, passwordless authentication in Azure."
},

/* ======================================================
COST MANAGEMENT & DBU OPTIMIZATION (191 - 210)
====================================================== */

{
id:167,
difficulty:"hard",
category:"cost_optimization",
question:"Your Databricks bill shows high 'Idle Time' costs. Which cluster setting should you adjust?",
options:[
"Increase the number of Workers",
"Decrease the 'Auto-Termination' minutes",
"Switch to a GPU instance",
"Enable Photon"
],
answer:1,
explanation:"Lowering the auto-termination threshold ensures clusters shut down quickly after a job or interactive session finishes."
},

{
id:168,
difficulty:"medium",
category:"cost_optimization",
question:"Which instance type is typically the most cost-effective for Spark 'Worker' nodes in a non-production, non-critical environment?",
options:[
"On-Demand Instances",
"Spot Instances",
"Reserved Instances",
"Dedicated Hosts"
],
answer:1,
explanation:"Spot instances offer up to 90% savings, though they carry the risk of being reclaimed by the cloud provider."
},

{
id:169,
difficulty:"hard",
category:"cost_optimization",
question:"How does 'Serverless Compute' help reduce costs for SQL Warehouses?",
options:[
"It is always free",
"It eliminates the 'Cold Start' time and you only pay for the exact seconds the query is running",
"It uses slower CPUs",
"It doesn't use S3"
],
answer:1,
explanation:"Serverless scales nearly instantly and stops charging immediately after the query, whereas 'Classic' warehouses stay active for a minimum duration."
},

/* ======================================================
PROFESSIONAL WORKFLOW SCENARIOS (211 - 225)
====================================================== */

{
id:170,
difficulty:"hard",
category:"scenarios",
question:"Scenario: A data pipeline must be compliant with 'Data Residency' laws, requiring European data to stay in a specific region. How is this enforced in Databricks?",
options:[
"By using a global cluster",
"By deploying the Databricks Workspace and associated S3/ADLS buckets in the specific AWS/Azure region (e.g., eu-central-1)",
"By using a VPN",
"By naming the tables 'Europe'"
],
answer:1,
explanation:"Data residency is a physical infrastructure requirement; the data plane must be located in the legally required geographic region."
},

{
id:171,
difficulty:"medium",
category:"orchestration",
question:"What is the 'Repair Run' feature in Databricks Jobs?",
options:[
"It deletes the job",
"It allows you to rerun only the failed tasks in a multi-task job, preserving the state of successful tasks",
"It updates the Spark version",
"It fixes syntax errors in Python"
],
answer:1,
explanation:"Repair Run saves time and money by not re-processing steps that already succeeded in a previous attempt."
},

{
id:172,
difficulty:"hard",
category:"scenarios",
question:"You have a 10TB table and need to perform a 'Full Refresh' every Sunday. What is the most efficient way to clear the table while keeping the schema and metadata?",
options:[
"DROP TABLE and CREATE TABLE",
"DELETE FROM table",
"TRUNCATE TABLE table_name",
"VACUUM table"
],
answer:2,
explanation:"TRUNCATE is an efficient metadata operation in Delta that removes all data files without needing to drop and recreate the table object."
},

/* ======================================================
ADVANCED SPARK UI & DEBUGGING (226 - 240)
====================================================== */

{
id:173,
difficulty:"hard",
category:"spark_ui",
question:"You notice 'Long Stages' in the Spark UI where the 'Scheduler Delay' is high. What does this usually mean?",
options:[
"The network is slow",
"The Driver is overwhelmed with too many small tasks or is struggling to communicate with executors",
"The S3 bucket is full",
"The workers are too powerful"
],
answer:1,
explanation:"Scheduler delay is the time the Driver takes to give a task to an executor. High values suggest the Driver is the bottleneck."
},

{
id:174,
difficulty:"medium",
category:"spark_ui",
question:"Where can you find the 'Query Plan' (Logical and Physical) in the Spark UI?",
options:[
"In the 'Executors' tab",
"In the 'SQL' tab, by clicking on the specific Query ID",
"In the 'Environment' tab",
"In the 'Storage' tab"
],
answer:1,
explanation:"The SQL tab provides a visual DAG of the query and the detailed text-based plans (Parsed, Analyzed, Optimized, and Physical)."
},

{
id:175,
difficulty:"hard",
category:"spark_performance",
question:"Why would you use 'repartition()' instead of 'coalesce()' when preparing data for a join?",
options:[
"To make the files smaller",
"To increase the number of partitions and ensure data is evenly distributed across the cluster (balancing the load)",
"To avoid a shuffle",
"To save memory"
],
answer:1,
explanation:"Unlike coalesce(), repartition() forces a full shuffle, which is necessary if you need to increase parallelism or fix an uneven data distribution."
},

{
id:176,
difficulty:"medium",
category:"delta_lake",
question:"What is the 'Delta Checkpoint' file?",
options:[
"A backup of the data",
"An aggregated state of the transaction log (JSON files) saved in Parquet format to speed up table state calculation",
"A file that stores user passwords",
"A log of the cluster temperature"
],
answer:1,
explanation:"Checkpoints allow Spark to avoid reading thousands of small JSON log files every time a table is opened."
},

{
id:177,
difficulty:"hard",
category:"governance",
question:"In Unity Catalog, what is an 'Information Schema'?",
options:[
"A training guide for users",
"A standard set of read-only views that provide metadata about all catalogs, schemas, and tables the user has access to",
"A schema used to store JSON data",
"The master password for the catalog"
],
answer:1,
explanation:"The information_schema is a SQL-standard way to programmatically query table definitions, permissions, and lineage."
},

{
id:178,
difficulty:"hard",
category:"scenarios",
question:"Scenario: You are designing a 'Medallion Architecture' for a financial auditing firm. Which layer MUST contain the 'immutable' raw events for legal compliance?",
options:[
"Bronze",
"Silver",
"Gold",
"Audit"
],
answer:0,
explanation:"The Bronze layer acts as the landing zone for raw, unchanged data, serving as the ultimate source of truth for audits."
},

{
id:179,
difficulty:"medium",
category:"pyspark",
question:"How do you explicitly clear the Spark cache for a specific DataFrame 'df'?",
options:[
"df.unpersist()",
"spark.catalog.clearCache()",
"df.delete()",
"spark.stop()"
],
answer:0,
explanation:"unpersist() removes the DataFrame from memory/disk cache and releases the associated resources."
},

{
id:180,
difficulty:"hard",
category:"infrastructure",
question:"What is the 'Data Plane' in Databricks architecture?",
options:[
"The UI where you write code",
"The cloud account (AWS/Azure/GCP) where the clusters run and the data is processed",
"The Databricks billing system",
"The customer's laptop"
],
answer:1,
explanation:"The Data Plane contains the compute resources and storage; your data never leaves this plane to go to the Databricks Control Plane."
},
/* ======================================================
UNITY CATALOG: PERMISSIONS & EXTERNAL LOCATIONS (181 - 200)
====================================================== */

{
id:181,
difficulty:"hard",
category:"governance",
question:"Which privilege is required for a user to create a new 'Catalog' within a Unity Catalog Metastore?",
options:[
"CREATE CATALOG",
"USE METASTORE",
"ACCOUNT ADMIN or METASTORE ADMIN",
"OWNERSHIP"
],
answer:2,
explanation:"Only Account Admins or the designated Metastore Admin have the authority to create top-level Catalogs."
},

{
id:182,
difficulty:"medium",
category:"governance",
question:"What is the purpose of an 'External Location' in Unity Catalog?",
options:[
"To store the Spark logs",
"To map a cloud storage path (S3/ADLS) to a specific Storage Credential for governed access",
"To host a public website",
"To link to a different Databricks account"
],
answer:1,
explanation:"External Locations combine a cloud URI with a Storage Credential, allowing UC to manage access to files outside of managed storage."
},

{
id:183,
difficulty:"hard",
category:"governance",
question:"Scenario: You want to allow a user to see that a table exists but prevent them from reading the actual data. Which privilege should you NOT grant?",
options:[
"USE CATALOG",
"USE SCHEMA",
"SELECT",
"BROWSE"
],
answer:2,
explanation:"SELECT allows the user to read data. To simply see the metadata, they only need USE CATALOG and USE SCHEMA (and naturally, they shouldn't have SELECT)."
},

{
id:184,
difficulty:"medium",
category:"governance",
question:"What happens to the data when you run 'DROP TABLE' on a 'Managed Table' in Unity Catalog?",
options:[
"Only the metadata is deleted; files remain in S3",
"Both the metadata and the underlying data files are deleted",
"The table is moved to the Trash bin",
"The data is encrypted and locked"
],
answer:1,
explanation:"Managed Tables are fully owned by Databricks; dropping them cleans up the physical storage automatically."
},

/* ======================================================
DLT: SCD TYPE 2 & QUALITY (201 - 215)
====================================================== */

{
id:185,
difficulty:"hard",
category:"dlt",
question:"In DLT 'APPLY CHANGES INTO', what is the purpose of the 'SEQUENCE BY' clause?",
options:[
"To sort the output table by ID",
"To handle out-of-order data by using a version or timestamp to determine the 'latest' record",
"To create an index",
"To count the number of rows"
],
answer:1,
explanation:"SEQUENCE BY is critical for CDC (Change Data Capture) to ensure that an older update arriving late doesn't overwrite a newer one."
},

{
id:186,
difficulty:"hard",
category:"dlt",
question:"You are implementing SCD Type 2 in DLT. Which clause defines which columns should trigger a new historical row when their values change?",
options:[
"TRACK HISTORY ON",
"EXCEPT_COLUMN_LIST",
"STORED AS SCD2",
"BYPASS ON"
],
answer:1,
explanation:"While not a direct keyword, in DLT SCD2 logic, you typically track changes on all columns unless specified otherwise, or use specific logic to identify the 'keys' vs 'attributes'."
},

{
id:187,
difficulty:"medium",
category:"dlt",
question:"Where can you view the 'Event Log' for a DLT pipeline to analyze data quality metrics (Expectations)?",
options:[
"In the S3 bucket only",
"Via the DLT Pipeline UI under 'Pipeline Details' or by querying the JSON log location",
"In the Spark Driver logs",
"In the Unity Catalog Audit Log"
],
answer:1,
explanation:"The DLT UI provides a built-in dashboard for quality metrics, and the underlying data is stored as a table for custom SQL analysis."
},

/* ======================================================
IDENTITY & SECURITY (216 - 230)
====================================================== */

{
id:188,
difficulty:"hard",
category:"security",
question:"What is 'SCIM' (System for Cross-domain Identity Management) used for in Databricks?",
options:[
"To encrypt data packets",
"To automatically sync users and groups from an Identity Provider (like Azure AD or Okta) to Databricks",
"To speed up SQL queries",
"To manage S3 bucket policies"
],
answer:1,
explanation:"SCIM ensures that when a user is added or removed from your corporate directory, their access to Databricks is updated automatically."
},

{
id:189,
difficulty:"medium",
category:"governance",
question:"Which Unity Catalog object acts as a 'wrapper' around a cloud service principal or IAM role?",
options:[
"Storage Credential",
"External Location",
"Metastore",
"Catalog"
],
answer:0,
explanation:"A Storage Credential holds the actual IAM role or Access Key, which is then used by External Locations."
},

{
id:190,
difficulty:"hard",
category:"security",
question:"Scenario: You need to give a Python script running on a local server access to Databricks. What is the most secure authentication method?",
options:[
"Hardcoding your personal username and password",
"Using a Personal Access Token (PAT)",
"Using a Databricks Service Principal with a Client Secret (OAuth)",
"Sharing a SSH key"
],
answer:2,
explanation:"Service Principals with OAuth are more secure and manageable for automated 'non-human' access than PATs tied to individuals."
},

/* ======================================================
DATABRICKS SQL & ADVANCED SECURITY (231 - 250)
====================================================== */

{
id:191,
difficulty:"medium",
category:"db_sql",
question:"What is the 'Query History' tab in Databricks SQL primarily used for?",
options:[
"To write new queries",
"To audit past executions, check performance bottlenecks, and see who ran what query",
"To delete tables",
"To schedule jobs"
],
answer:1,
explanation:"Query History is essential for debugging slow SQL and auditing data access for compliance."
},

{
id:192,
difficulty:"hard",
category:"db_sql",
question:"In Databricks SQL, what does the 'Limit 1000' default in the editor help prevent?",
options:[
"Disk spill on the warehouse",
"Crashing the browser by attempting to render millions of rows in the UI",
"S3 throttling",
"Unauthorized data access"
],
answer:1,
explanation:"Rendering massive result sets in a web browser causes lag; the limit ensures the UI remains responsive during development."
},

{
id:193,
difficulty:"medium",
category:"governance",
question:"What is the difference between a 'Volume' and a 'Table' in Unity Catalog?",
options:[
"Volumes are for structured data; Tables are for unstructured",
"Tables represent tabular data (Parquet/Delta); Volumes represent non-tabular files (PDFs, Images, CSVs in raw form)",
"Volumes only work on Azure",
"Tables are free; Volumes cost money"
],
answer:1,
explanation:"UC Volumes provide a way to govern and access unstructured or raw files using the same security model as tables."
},

{
id:194,
difficulty:"hard",
category:"architecture",
question:"Which Photon feature allows for faster reading of data by predicting which data blocks will be needed next?",
options:[
"Predictive I/O",
"Lazy Evaluation",
"Adaptive Shuffle",
"Bloom Filters"
],
answer:0,
explanation:"Predictive I/O uses machine learning to optimize file scanning, making selective queries much faster."
},

{
id:195,
difficulty:"hard",
category:"elt",
question:"Scenario: You are updating a Gold table. You want to ensure that if the update fails, the table remains in its previous state. How does Delta Lake handle this?",
options:[
"By taking a manual backup before the write",
"Using ACID transactions; the new data is only visible once the commit to the Delta Log succeeds",
"By using a 'Dry Run' mode",
"By restarting the cluster"
],
answer:1,
explanation:"ACID compliance ensures that operations are 'All or Nothing'. A failure results in an automatic rollback of the uncommitted transaction."
},

{
id:196,
difficulty:"medium",
category:"delta_lake",
question:"What is the purpose of the 'FSCK REPAIR TABLE' command (or 'MSCK REPAIR' in Hive)?",
options:[
"To fix broken Python code",
"To synchronize the metadata with the physical files in storage (specifically for non-Delta tables)",
"To delete old logs",
"To speed up the cluster"
],
answer:1,
explanation:"While Delta handles this automatically, FSCK/MSCK is used for Parquet/CSV tables to detect new partitions added manually to storage."
},

{
id:197,
difficulty:"hard",
category:"spark_performance",
question:"Why is 'Z-Order' better than 'Partitioning' for a column with 1 million unique values (e.g., user_id)?",
options:[
"Partitioning would create too many small files and folders, overwhelming the file system and metadata",
"Z-Order is only for integers",
"Partitioning is only for dates",
"Z-Order deletes the data"
],
answer:0,
explanation:"High-cardinality partitioning leads to the 'Small File Problem'. Z-Ordering co-locates data within fewer files, enabling efficient skipping."
},

{
id:198,
difficulty:"medium",
category:"infrastructure",
question:"What is 'Workspace-level' vs 'Account-level' identity in Databricks?",
options:[
"One is for users; one is for bots",
"Account-level identities are managed centrally and can be assigned to multiple workspaces; workspace-level is local to one",
"Account-level is only for billing",
"There is no difference"
],
answer:1,
explanation:"Unity Catalog requires Account-level identities to ensure consistent permissions across different environments (Dev, Test, Prod)."
},

{
id:199,
difficulty:"hard",
category:"governance",
question:"Scenario: A user has 'SELECT' permission on a View but NO permission on the underlying Tables. Can they query the View?",
options:[
"No, they need access to the source tables",
"Yes, Unity Catalog supports 'View Delegation' where the view owner's permissions are used",
"Only if they are an admin",
"Only if the tables are in the same schema"
],
answer:1,
explanation:"Views allow you to provide restricted access to data without exposing the complex or sensitive underlying tables."
},

{
id:200,
difficulty:"hard",
category:"scenarios",
question:"How do you design a Databricks Job to run every time a new file arrives in S3 with the lowest possible latency?",
options:[
"Schedule the job to run every minute",
"Use Structured Streaming with Auto Loader and a 'Continuous' trigger",
"Manually start the job",
"Use a cron expression"
],
answer:1,
explanation:"Continuous trigger (or a very short processing time trigger) combined with Auto Loader provides sub-second file discovery and processing."
},
/* ======================================================
ADVANCED DLT: SCD TYPE 1 & 2 (201 - 220)
====================================================== */

{
id:201,
difficulty:"hard",
category:"dlt",
question:"In a DLT 'APPLY CHANGES INTO' statement, which argument is used to specify that you want to perform an SCD Type 2 (historical) track instead of Type 1?",
options:[
"STORED AS HISTORICAL",
"STORED AS SCD2",
"KEEP HISTORY",
"APPLY AS VERSIONED"
],
answer:1,
explanation:"The 'STORED AS SCD2' clause in DLT automatically handles the creation of start_at, end_at, and is_current columns."
},

{
id:202,
difficulty:"hard",
category:"dlt",
question:"When using SCD Type 1 in DLT, what happens when a source record is updated with a 'null' value for a previously populated column?",
options:[
"The update is ignored",
"The target column is updated to null (overwritten)",
"The pipeline fails",
"A new version is created"
],
answer:1,
explanation:"SCD Type 1 is a destructive update; it mirrors the source's current state, including nulls, unless logic is added to handle them."
},

{
id:203,
difficulty:"medium",
category:"dlt",
question:"What is the purpose of the 'ignore_null_updates' option in a DLT CDC pipeline?",
options:[
"To stop the pipeline if a null is found",
"To prevent null values in the source from overwriting valid data in the target table",
"To delete null rows",
"To convert nulls to empty strings"
],
answer:1,
explanation:"This setting is common in streaming CDC where partial updates might only contain a few changed columns and the rest as nulls."
},

{
id:204,
difficulty:"hard",
category:"dlt",
question:"Scenario: You have a DLT pipeline where Table B depends on Table A. If you perform a 'Refresh Selection' on Table B only, what does DLT do?",
options:[
"Fails because Table A isn't selected",
"Automatically calculates if Table A needs to be refreshed first to maintain consistency",
"Only updates Table B using stale data from Table A",
"Deletes Table A"
],
answer:1,
explanation:"DLT's graph-based orchestrator understands dependencies and ensures upstream data is valid before processing downstream."
},

/* ======================================================
DLT QUALITY EXPECTATIONS & MONITORING (221 - 235)
====================================================== */

{
id:205,
difficulty:"medium",
category:"dlt",
question:"Which DLT Expectation should be used if you want to keep the bad data but simply count how many rows failed the check?",
options:[
"CONSTRAINT ... EXPECT",
"CONSTRAINT ... EXPECT ... ON VIOLATION DROP ROW",
"CONSTRAINT ... EXPECT ... ON VIOLATION FAIL UPDATE",
"CONSTRAINT ... EXPECT ... ON VIOLATION WARN"
],
answer:0,
explanation:"A simple 'EXPECT' (without an 'ON VIOLATION' action) allows the row through but logs the failure in the event log."
},

{
id:206,
difficulty:"hard",
category:"dlt",
question:"How can you programmatically query the data quality results (passed/failed counts) of a DLT pipeline for a custom dashboard?",
options:[
"Query the 'event_log' table associated with the DLT storage location",
"Check the Spark UI",
"Read the Delta Log JSON files manually",
"It is only visible in the DLT UI"
],
answer:0,
explanation:"DLT stores all pipeline metadata, including expectation results, in a Delta-formatted event log table."
},

/* ======================================================
DATABRICKS SQL SECURITY & PERMISSIONS (236 - 250)
====================================================== */

{
id:207,
difficulty:"medium",
category:"db_sql",
question:"In Databricks SQL, what is the 'Run as Viewer' vs 'Run as Owner' setting for a Dashboard?",
options:[
"One is for speed; one is for cost",
"Viewer: Uses the person looking at the dashboard's permissions; Owner: Uses the creator's permissions to access data",
"There is no 'Run as' setting",
"Viewer is for read-only SQL"
],
answer:1,
explanation:"'Run as Owner' allows users to see data they might not have direct table access to, whereas 'Run as Viewer' enforces strict RBAC."
},

{
id:208,
difficulty:"hard",
category:"governance",
question:"Which Unity Catalog privilege is required for a user to execute a 'DESCRIBE TABLE' command successfully?",
options:[
"DESCRIBE",
"SELECT",
"USE SCHEMA and BROWSE (or SELECT)",
"READ METADATA"
],
answer:2,
explanation:"To see table metadata, you need permission to use the parent catalog/schema and the BROWSE (or any higher) privilege on the table."
},

{
id:209,
difficulty:"medium",
category:"db_sql",
question:"How do you prevent a 'Heavy' SQL query from consuming too many resources on a shared SQL Warehouse?",
options:[
"The warehouse automatically uses 'Intelligent Workload Management' to scale and prioritize",
"Kill the query manually every 5 minutes",
"Lower the RAM on the cluster",
"Use a CSV instead"
],
answer:0,
explanation:"Pro and Serverless warehouses manage concurrency and resource allocation dynamically to prevent one user from blocking others."
},

{
id:210,
difficulty:"hard",
category:"security",
question:"Scenario: You need to share a subset of a Gold table with an external vendor. What is the most secure 'Unity Catalog' approach?",
options:[
"Create a 'Dynamic View' that filters data based on the vendor's identity and share it via Delta Sharing",
"Export to CSV and SFTP it",
"Give the vendor a Service Principal with Admin access",
"Clone the whole table into their S3 bucket"
],
answer:0,
explanation:"Dynamic views combined with Delta Sharing allow for secure, real-time, filtered access without moving the data."
},

/* ======================================================
IDENTITY MANAGEMENT & ACCOUNT CONCEPTS (211 - 230)
====================================================== */

{
id:211,
difficulty:"medium",
category:"governance",
question:"What is the 'Account Console' in Databricks used for?",
options:[
"Writing SQL queries",
"Managing cross-workspace identities, billing, Metastores, and global configurations",
"Creating notebooks",
"Visualizing data"
],
answer:1,
explanation:"The Account Console is the highest level of management, controlling multiple workspaces and account-wide security."
},

{
id:212,
difficulty:"hard",
category:"governance",
question:"Which role is required to enable Unity Catalog for a specific Workspace?",
options:[
"Workspace Admin",
"Account Admin",
"Metastore Admin",
"Cloud Provider Admin (IAM)"
],
answer:1,
explanation:"Only Account Admins can link a Metastore to a Workspace, which is the final step in enabling Unity Catalog."
},

/* ======================================================
ADVANCED ARCHITECTURE SCENARIOS (231 - 250)
====================================================== */

{
id:213,
difficulty:"hard",
category:"scenarios",
question:"Scenario: You have a global application. Users in Europe need sub-second query performance. Your data is stored in US-East-1. What is the best solution?",
options:[
"Use a larger cluster in the US",
"Implement 'Delta Sharing' to replicate data to a local European workspace/region",
"Use a VPN",
"There is no way to speed up the speed of light"
],
answer:1,
explanation:"Cross-region latency is a physical constraint. Replicating data to the region closest to the users is the standard architectural fix."
},

{
id:214,
difficulty:"hard",
category:"performance",
question:"Why is 'Liquid Clustering' preferred over 'Z-Order' for a table that is updated constantly throughout the day?",
options:[
"Z-Order requires a full rewrite of the data to be effective, whereas Liquid Clustering is incremental and less expensive to maintain",
"Liquid Clustering is faster for small data",
"Z-Order doesn't work with Delta",
"Liquid Clustering is free"
],
answer:0,
explanation:"Liquid clustering avoids the heavy 'Optimize' overhead associated with maintaining Z-order in frequently changing datasets."
},

{
id:215,
difficulty:"medium",
category:"elt",
question:"What is the primary benefit of the 'Medallion Architecture'?",
options:[
"It makes the data look like a medal",
"It provides a clear framework for incremental data improvement and reliability (Raw -> Cleaned -> Aggregated)",
"It is required by AWS",
"It allows you to use Excel"
],
answer:1,
explanation:"The structure ensures that errors are caught early (Silver) and only high-quality data reaches the business users (Gold)."
},
/* ======================================================
SERVICE PRINCIPALS & KEY ROTATION (216 - 235)
====================================================== */

{
id:216,
difficulty:"hard",
category:"security",
question:"When implementing 'Key Rotation' for a Databricks Personal Access Token (PAT) used in a CI/CD pipeline, what is the best practice to avoid downtime?",
options:[
"Delete the old token and wait for the error to create a new one",
"Generate a new token, update the CI/CD secret, and then revoke the old token after confirming a successful run",
"Tokens never expire in Databricks",
"Use a single token for all users"
],
answer:1,
explanation:"Overlapping tokens during rotation ensures that the automated process remains authenticated while the credentials are being updated."
},

{
id:217,
difficulty:"hard",
category:"security",
question:"What is the purpose of a 'Secret Scope' in Databricks?",
options:[
"To hide the code from other users",
"To provide a secure container for sensitive credentials (API keys, passwords) that can be referenced in notebooks without exposure",
"To encrypt the S3 bucket",
"To limit the number of clusters"
],
answer:1,
explanation:"Secret Scopes (backed by Databricks or Azure Key Vault) allow you to use dbutils.secrets.get() to safely pull credentials into your code."
},

{
id:218,
difficulty:"medium",
category:"security",
question:"Who can create a 'Service Principal' in a Unity Catalog-enabled account?",
options:[
"Any user",
"Account Admins",
"Only the person who created the AWS account",
"The Spark Driver"
],
answer:1,
explanation:"Account Admins manage identities globally, ensuring service principals are available across multiple workspaces."
},

/* ======================================================
CI/CD & ASSET BUNDLES (236 - 250)
====================================================== */

{
id:219,
difficulty:"hard",
category:"devops",
question:"In a 'Databricks Asset Bundle' (DAB) project, which file defines the different targets (e.g., dev, staging, prod) and their specific cluster configurations?",
options:[
"bundle.json",
"databricks.yml",
"setup.py",
"cluster.cfg"
],
answer:1,
explanation:"The databricks.yml file is the root configuration that orchestrates environments, resources, and deployment variables."
},

{
id:220,
difficulty:"medium",
category:"devops",
question:"What is the 'Git Provider' integration used for in Databricks Repos/Git Folders?",
options:[
"To host the Databricks website",
"To sync notebook changes with a remote repository like GitHub, Bitbucket, or GitLab",
"To download Python libraries",
"To store large CSV files"
],
answer:1,
explanation:"Git integration enables professional software development workflows (branching, PRs) directly within the Databricks UI."
},

/* ======================================================
DATABRICKS SQL: DASHBOARDS & ALERTS (251 - 265)
====================================================== */

{
id:221,
difficulty:"hard",
category:"db_sql",
question:"Scenario: You need a dashboard to show data for the 'Currently Logged In User' only. Which SQL function do you use in the query?",
options:[
"GET_USER()",
"CURRENT_USER()",
"SESSION_ID()",
"WHOAMI"
],
answer:1,
explanation:"CURRENT_USER() returns the email of the person running the query, allowing for dynamic, personalized dashboard views."
},

{
id:222,
difficulty:"medium",
category:"db_sql",
question:"How do you share a Databricks SQL Dashboard with an external user who does NOT have a Databricks account?",
options:[
"Send them the URL",
"Export as PDF or use 'Delta Sharing' for the underlying data",
"Give them your login",
"There is no way"
],
answer:1,
explanation:"For non-users, exporting the result or using the open-source Delta Sharing protocol for the data is the standard approach."
},

{
id:223,
difficulty:"hard",
category:"db_sql",
question:"Which setting determines how often a Databricks SQL Warehouse 'scales down' when there is no activity?",
options:[
"Auto-Stop / Auto-Termination minutes",
"Scaling Factor",
"Cluster Throttling",
"Idle Timeout"
],
answer:0,
explanation:"Setting a low auto-stop (e.g., 10 minutes) ensures you are not billed for idle compute time on the warehouse."
},

/* ======================================================
ADVANCED ARCHITECTURE & RECOVERY (266 - 280)
====================================================== */

{
id:224,
difficulty:"hard",
category:"architecture",
question:"What is the 'Disaster Recovery' strategy for a Delta Lake table in case of a regional AWS failure?",
options:[
"Running OPTIMIZE every hour",
"Using 'Deep Clone' to replicate the table to a different AWS region periodically",
"Restarting the cluster",
"Using a standard S3 backup"
],
answer:1,
explanation:"Deep Clones are independent copies that include the data files, making them the primary tool for cross-region data redundancy."
},

{
id:225,
difficulty:"hard",
category:"governance",
question:"How do you audit 'Who accessed which column' in a specific Gold table last Tuesday?",
options:[
"Check the Spark UI logs",
"Query the 'system.access.table_usage' or 'audit_logs' system tables in Unity Catalog",
"Ask the IT department",
"It is not possible to see column-level access"
],
answer:1,
explanation:"Unity Catalog system tables provide a comprehensive audit trail of all data access, down to the user and column level."
},

{
id:226,
difficulty:"medium",
category:"elt",
question:"In the Medallion Architecture, which layer is best suited for 'Business Logic' and 'Data Cleansing'?",
options:[
"Bronze",
"Silver",
"Gold",
"Staging"
],
answer:1,
explanation:"Silver is where you refine raw data into a validated, clean state ready for aggregation."
},

{
id:227,
difficulty:"hard",
category:"infrastructure",
question:"What is the 'Customer-Managed VPC' deployment mode in Databricks?",
options:[
"Databricks provides the network",
"The customer provides their own pre-configured VPC/VNet for the Data Plane to reside in",
"Data is stored in the Databricks account",
"Clusters run on-premise"
],
answer:1,
explanation:"This mode gives enterprises full control over network security, firewalls, and routing for their Databricks clusters."
},

{
id:228,
difficulty:"hard",
category:"spark_performance",
question:"Why is it risky to use 'Auto-scaling' for a Structured Streaming job with a 'Continuous' trigger?",
options:[
"Streaming jobs cannot scale",
"Auto-scaling might cause frequent rebalancing, which increases latency and interrupts the sub-second processing",
"It costs too much",
"It deletes the checkpoint"
],
answer:1,
explanation:"For ultra-low latency (Continuous), a fixed-size cluster is usually preferred to maintain consistent performance."
},

{
id:229,
difficulty:"medium",
category:"pyspark",
question:"How do you read a specific version (Time Travel) of a Delta table using PySpark?",
options:[
"spark.read.option('versionAsOf', 5).load(path)",
"spark.read.table('table@v5')",
"spark.read.version(5).table('table')",
"spark.read.delta(version=5)"
],
answer:0,
explanation:"The versionAsOf or timestampAsOf options in the reader allow you to access historical states of the table."
},

{
id:230,
difficulty:"hard",
category:"governance",
question:"In Unity Catalog, what is 'Search' used for in the Data Explorer?",
options:[
"To find files in S3",
"To discover tables, columns, and comments across all catalogs using natural language or keywords",
"To search the internet",
"To find failed cluster logs"
],
answer:1,
explanation:"Search is a metadata discovery tool that helps users find relevant data assets across the entire organization's metastore."
},
/* ======================================================
LAKEHOUSE FEDERATION & INTEROP (231 - 245)
====================================================== */

{
id:231,
difficulty:"hard",
category:"architecture",
question:"What is 'Lakehouse Federation' in Databricks?",
options:[
"Moving all data into one S3 bucket",
"A feature allowing Unity Catalog to query external databases (SQL Server, Snowflake, BigQuery) without moving the data",
"A way to join AWS and Azure accounts",
"A new type of Spark cluster"
],
answer:1,
explanation:"Federation allows you to create 'Foreign Catalogs' that point to external engines, enabling cross-source joins in Spark SQL."
},

{
id:232,
difficulty:"hard",
category:"architecture",
question:"How can you use Apache Iceberg tables within Azure Databricks via Unity Catalog?",
options:[
"You cannot; only Delta is supported",
"By using 'UniForm' (Universal Format), which allows Delta tables to be read as Iceberg by external engines",
"By renaming .parquet to .iceberg",
"By installing a Hadoop plugin"
],
answer:1,
explanation:"Delta Lake UniForm automatically generates Iceberg metadata so that Iceberg-compatible tools can read Delta tables without conversion."
},

/* ======================================================
REAL-TIME ANALYTICS DESIGN (246 - 260)
====================================================== */

{
id:233,
difficulty:"hard",
category:"scenarios",
question:"Design Scenario: You need to build a 'Real-time Ride Analytics' system handling millions of events/sec. Which component handles the 'buffer' between the app and Spark?",
options:[
"S3",
"A Message Queue like Kafka, Event Hub, or Kinesis",
"A Delta Table",
"A SQL Warehouse"
],
answer:1,
explanation:"A distributed message queue is required to decouple high-velocity producers from the streaming consumers."
},

{
id:234,
difficulty:"hard",
category:"streaming",
question:"In a high-scale streaming job, why might the 'Processing Delay' keep increasing even if the 'Batch Duration' is stable?",
options:[
"The cluster is too small",
"The sink (target table) is experiencing write-throttling or metadata bottlenecks",
"The source is empty",
"The Driver is too powerful"
],
answer:1,
explanation:"If the target system (S3/Delta) cannot keep up with the commit frequency, the overall end-to-end delay will grow indefinitely."
},

/* ======================================================
DEEP SPARK UI METRICS (261 - 275)
====================================================== */

{
id:235,
difficulty:"hard",
category:"spark_ui",
question:"In the Spark UI 'Executors' tab, you see one executor with 80% 'GC Time' and 0% 'Task Time'. What does this indicate?",
options:[
"The node is healthy",
"The executor is stuck in a 'Full GC' cycle, likely due to a memory leak or a single massive partition (Data Skew)",
"The network is disconnected",
"The CPU is too fast"
],
answer:1,
explanation:"Excessive Garbage Collection time means the JVM is spending all its energy trying to free memory rather than doing work."
},

{
id:236,
difficulty:"hard",
category:"spark_ui",
question:"Which Spark UI metric would you analyze to determine if 'Task Deserialization' is causing a bottleneck in a job with 100,000 tasks?",
options:[
"Shuffle Read Size",
"Task Deserialization Time in the 'Summary Metrics' of the Stage page",
"Input Size",
"Executor ID"
],
answer:1,
explanation:"With high task counts, the overhead of the Driver sending tasks to workers can become larger than the task execution time itself."
},

{
id:237,
difficulty:"hard",
category:"performance",
question:"Why does 'Disk Spill' significantly degrade performance?",
options:[
"It deletes the data",
"Disk I/O is orders of magnitude slower than RAM access, and it adds extra serialization/deserialization cycles",
"It causes the cluster to restart",
"It requires more S3 credits"
],
answer:1,
explanation:"Spill is a 'last resort' for Spark. It prevents OOM but introduces massive latency due to mechanical/SSD disk speeds."
},

/* ======================================================
MIGRATION & GOVERNANCE (276 - 280)
====================================================== */

{
id:238,
difficulty:"hard",
category:"migration",
question:"When migrating from Hive Metastore to Unity Catalog, what is the 'UCX' tool used for?",
options:[
"To write Python code",
"An open-source utility provided by Databricks Labs to automate the assessment and migration of workspace objects",
"To encrypt the data",
"To replace Spark"
],
answer:1,
explanation:"UCX (Unity Catalog Migration) helps identify compatible tables and automates the 'SYNC' process."
},

{
id:239,
difficulty:"hard",
category:"governance",
question:"Which Unity Catalog feature ensures 'Separation of Duties' by allowing one user to manage permissions but NOT see the data?",
options:[
"SELECT privilege",
"Metastore Admin vs. Data Owner roles",
"S3 bucket policy",
"Python decorators"
],
answer:1,
explanation:"In UC, the privilege to grant (GRANT) can be separated from the privilege to read (SELECT), fulfilling compliance requirements."
},

{
id:240,
difficulty:"hard",
category:"scenarios",
question:"How do you handle 'Late-Arriving Data' in a streaming aggregate that must be 100% accurate for financial reporting?",
options:[
"Drop the late data",
"Use a large Watermark and 'Update' or 'Complete' output mode to incorporate late data into the final counts",
"Restart the stream every day",
"Use a batch job instead"
],
answer:1,
explanation:"A combination of stateful watermarking and the correct output mode allows Spark to 'correct' previous results as late data arrives."
},

/* ======================================================
FINAL MIXED MASTER CLASS (241 - 280)
====================================================== */

{
id:241,
difficulty:"hard",
category:"infrastructure",
question:"What is 'Cross-Workspace Search' in Unity Catalog?",
options:[
"Searching the web from Databricks",
"The ability to discover and query tables from any workspace linked to the same Metastore",
"Finding users in a different AWS account",
"It is not supported"
],
answer:1,
explanation:"Since UC is account-level, you can query `prod_catalog.schema.table` from a `dev_workspace` if you have the permissions."
},

{
id:242,
difficulty:"hard",
category:"performance",
question:"Scenario: A job writes 1000 small files per run. After 6 months, it's slow. What is the most effective long-term fix?",
options:[
"Switch to a larger cluster",
"Enable 'Auto-Compaction' and 'Optimized Writes' on the Delta table properties",
"Manually delete the files",
"Use a CSV format"
],
answer:1,
explanation:"Automated compaction prevents the 'Small File Problem' from ever accumulating in the first place."
},

{
id:243,
difficulty:"medium",
category:"security",
question:"What is the purpose of 'IP Access Lists' in Databricks?",
options:[
"To speed up the internet",
"To restrict access to the Databricks UI and APIs to specific trusted IP ranges (e.g., your VPN)",
"To block S3",
"To list all user emails"
],
answer:1,
explanation:"IP Access Lists provide a layer of network security to ensure only authorized corporate networks can access the workspace."
},

{
id:244,
difficulty:"hard",
category:"architecture",
question:"In a 'Hub and Spoke' Databricks architecture, what does the 'Hub' typically represent?",
options:[
"The internet",
"The central Unity Catalog Metastore and shared data governance account",
"A specific worker node",
"The billing department"
],
answer:1,
explanation:"The Hub manages the central data assets while the Spokes are individual business units or dev teams with their own workspaces."
},

{
id:245,
difficulty:"hard",
category:"spark_sql",
question:"Which Spark SQL operator is used to 'flatten' an array of structs into multiple rows?",
options:[
"UNNEST",
"EXPLODE",
"FLATTEN",
"LATERAL JOIN"
],
answer:1,
explanation:"EXPLODE takes each element of an array and creates a new row for it, preserving the other column values."
},

{
id:246,
difficulty:"medium",
category:"governance",
question:"In Unity Catalog, what is the 'Root' container?",
options:[
"A Table",
"A Schema",
"A Catalog",
"A Metastore"
],
answer:3,
explanation:"The hierarchy is: Metastore > Catalog > Schema > Table/Volume."
},

{
id:247,
difficulty:"hard",
category:"scenarios",
question:"Why might a broadcast join cause an OutOfMemory (OOM) error even if the table is smaller than 'spark.sql.autoBroadcastJoinThreshold'?",
options:[
"The table is too small",
"The table is highly compressed on disk but expands significantly in memory when deserialized",
"The network is too fast",
"The Driver is using a GPU"
],
answer:1,
explanation:"Spark estimates size based on disk statistics. If a 10MB Parquet file expands to 2GB in memory, the Driver may crash during the broadcast."
},

{
id:248,
difficulty:"hard",
category:"cost_optimization",
question:"How can you attribute Databricks costs to specific departments in a shared cluster environment?",
options:[
"By using 'Cluster Tags' and analyzing the System Billing tables",
"By asking users to log their hours",
"It is impossible",
"By the number of rows processed"
],
answer:0,
explanation:"Tags propagate to the cloud provider's billing and Databricks' own usage tables, allowing for precise cost allocation."
},

{
id:249,
difficulty:"hard",
category:"architecture",
question:"What happens if a Databricks Workspace is deleted? Is the data in Unity Catalog lost?",
options:[
"Yes, everything is gone",
"No, the Metastore and the data in S3 remain; you can simply link a new workspace to the same Metastore",
"The data is moved to a backup bucket",
"The cloud provider shuts down the account"
],
answer:1,
explanation:"Unity Catalog decouples the data/governance layer from the individual workspace, providing better resilience."
},

{
id:250,
difficulty:"hard",
category:"governance",
question:"Which command allows you to see the effective permissions a user has on an object, including inherited ones?",
options:[
"SHOW GRANTS",
"DESCRIBE TABLE",
"SHOW PERMISSIONS",
"LIST ACCESS"
],
answer:0,
explanation:"SHOW GRANTS ON [object] lists all explicitly defined privileges for that specific entity."
},

/* IDs 251-280 are variations on the above themes to ensure full coverage of the 280-question target, emphasizing high-cardinality partitioning, liquid clustering vs Z-order, and cost reduction strategies. */
/* ======================================================
PYTHON FOR DATA ENGINEERING - ADVANCED (251 - 265)
====================================================== */

{
id:251,
difficulty:"hard",
category:"python",
question:"In a Databricks Python notebook, what is the 'Global Temp View' used for compared to a standard 'Temp View'?",
options:[
"It is faster",
"It is shared across all sessions/notebooks attached to the same cluster, while standard is local to one session",
"It persists after the cluster restarts",
"It is stored in S3"
],
answer:1,
explanation:"Global temp views are tied to the system-preserved 'global_temp' database and allow different users/notebooks on one cluster to share data."
},

{
id:252,
difficulty:"medium",
category:"python",
question:"Which Python built-in function is most useful for applying a transformation to every element in a list before converting it to a Spark DataFrame?",
options:[
"filter()",
"map()",
"reduce()",
"zip()"
],
answer:1,
explanation:"map() allows you to apply a function (like a data-cleaning step) to an iterable efficiently in Python before parallelizing it with Spark."
},

{
id:253,
difficulty:"hard",
category:"python",
question:"What happens if you use a 'non-serializable' object (like an open database connection) inside a Spark map function?",
options:[
"Spark automatically serializes it",
"The job fails with a 'PicklingError' because the Driver cannot ship the object to the Executors",
"It runs slowly",
"The connection is shared across the cluster"
],
answer:1,
explanation:"Executors are separate JVM processes; objects must be 'Pickle-able' to be sent over the network. Database connections should be opened *inside* the mapPartitions call."
},

/* ======================================================
DELTA LAKE: LIQUID CLUSTERING & EVOLUTION (266 - 275)
====================================================== */

{
id:254,
difficulty:"hard",
category:"delta_lake",
question:"When using Delta Lake 'Liquid Clustering', what determines how data is physically grouped on disk?",
options:[
"The order of rows in the source",
"The columns specified in the 'CLUSTER BY' clause",
"The partition columns",
"The size of the files"
],
answer:1,
explanation:"Liquid clustering uses the CLUSTER BY columns to dynamically group data, allowing for flexible data skipping without the rigidity of partitioning."
},

{
id:255,
difficulty:"medium",
category:"delta_lake",
question:"How do you enable 'Schema Evolution' during a Spark DataFrame write to a Delta table?",
options:[
"By setting the option 'mergeSchema' to 'true'",
"By deleting the old table",
"By renaming the columns to match",
"It happens automatically by default"
],
answer:0,
explanation:"By default, Delta enforces schema. To add new columns, you must explicitly use .option('mergeSchema', 'true')."
},

/* ======================================================
INFRASTRUCTURE & COST: THE MASTER BATCH (276 - 280)
====================================================== */

{
id:256,
difficulty:"hard",
category:"infrastructure",
question:"What is the impact of 'Multi-Cluster Load Balancing' in a SQL Warehouse?",
options:[
"It makes queries 10x faster",
"It automatically starts additional clusters to handle high concurrency and shuts them down when demand drops",
"It increases the RAM of a single node",
"It moves data between AWS regions"
],
answer:1,
explanation:"Load balancing (scaling out) prevents users from waiting in a queue when many people are querying at the same time."
},

{
id:257,
difficulty:"medium",
category:"cost_optimization",
question:"Which Databricks UI tool allows you to see the DBU (Databricks Unit) consumption per job or per user?",
options:[
"The Spark UI",
"The Account Console -> Usage tab",
"The Workspace Admin settings",
"The Catalog Explorer"
],
answer:1,
explanation:"The Account Console is the central hub for monitoring costs and billing across all workspaces."
},

{
id:258,
difficulty:"hard",
category:"architecture",
question:"In a 'Hub and Spoke' architecture, why would you use 'Private Link' (AWS/Azure) for the Spoke workspaces?",
options:[
"To save on S3 costs",
"To ensure all traffic between the Databricks Control Plane and the Workspace remains on a private network, bypassing the public internet",
"To speed up Python execution",
"To allow external users to login"
],
answer:1,
explanation:"Private Link is a security requirement for many regulated industries to prevent data exfiltration and public exposure."
},

{
id:259,
difficulty:"hard",
category:"scenarios",
question:"Scenario: You are designing a 'Medallion' pipeline. Your Silver table has a 'Change Data Feed' enabled. What is the most efficient way to update the Gold table?",
options:[
"Full refresh of the Gold table every hour",
"Using a streaming query to read from the Silver table's CDF and applying MERGE INTO the Gold table",
"Manually checking for new rows",
"Copying the whole Silver table to Gold"
],
answer:1,
explanation:"Streaming from a CDF source allows for 'Incremental Gold' updates, which is much more efficient than full refreshes for large tables."
},

{
id:260,
difficulty:"medium",
category:"governance",
question:"What is 'Data Discovery' in the context of Unity Catalog?",
options:[
"Finding new data on the internet",
"The ability for users to search and explore available data assets, descriptions, and lineage within the organization",
"A tool for deleting old data",
"A way to see the Spark version"
],
answer:1,
explanation:"Unity Catalog acts as a centralized data catalog, making it easy for data scientists and analysts to find the right data for their projects."
},

/* ======================================================
THE FINAL STRETCH (261 - 280)
====================================================== */

{
id:261,
difficulty:"hard",
category:"pyspark",
question:"Which Spark operation is known to be 'Narrow' (no shuffle required)?",
options:[
"groupBy()",
"join()",
"filter()",
"distinct()"
],
answer:2,
explanation:"Narrow transformations (like filter or map) can be performed on a single partition without moving data between nodes."
},

{
id:262,
difficulty:"medium",
category:"delta_lake",
question:"What is the default retention period for a Delta Lake 'VACUUM' command?",
options:[
"24 hours",
"7 days",
"30 days",
"1 year"
],
answer:1,
explanation:"By default, VACUUM will not delete files younger than 7 days to protect against active readers and allow for time travel."
},

{
id:263,
difficulty:"hard",
category:"spark_ui",
question:"If you see 'Skew' in the Spark UI, but the code is a simple 'select' and 'write' (no join or group), what is the likely cause?",
options:[
"The source files are unevenly sized (e.g., one massive file and 1000 tiny ones)",
"The cluster is too big",
"The Python version is wrong",
"The S3 bucket is in the wrong region"
],
answer:0,
explanation:"Skew can happen at the 'Read' stage if the input files are not balanced, causing one task to process much more data than others."
},

{
id:264,
difficulty:"medium",
category:"governance",
question:"In Unity Catalog, what does 'GRANTEE' refer to?",
options:[
"The person giving the permission",
"The user, group, or service principal receiving the permission",
"The name of the table",
"The storage location"
],
answer:1,
explanation:"The Grantee is the target of the GRANT statement (e.g., GRANT SELECT ON table TO [grantee])."
},

{
id:265,
difficulty:"hard",
category:"scenarios",
question:"Scenario: You need to migrate a 500TB table. You want to ensure no 'Downtime' for readers. What is the best strategy?",
options:[
"Stop all jobs for 24 hours",
"Use 'Deep Clone' to create the new table and swap the names in the metastore once finished",
"Rename the S3 bucket",
"Delete the old table first"
],
answer:1,
explanation:"Deep clone allows you to build the new table in the background. Once ready, a quick metadata swap (rename) provides an atomic switch for users."
},

{
id:266,
difficulty:"medium",
category:"db_sql",
question:"What is a 'Visual Alert' in Databricks SQL?",
options:[
"A flashing light on the cluster",
"An alert that triggers when a specific visualization value crosses a threshold",
"A way to see the Spark code",
"An email with a screenshot of the dashboard"
],
answer:1,
explanation:"Alerts can be tied directly to query results, notifying users when metrics (like 'Daily Error Rate') exceed limits."
},

{
id:267,
difficulty:"hard",
category:"infrastructure",
question:"How does 'Egress' cost factor into a multi-cloud Databricks setup (e.g., Databricks on AWS reading data from Azure)?",
options:[
"It is free",
"Cloud providers charge significantly for moving data out of their network (Egress), making cross-cloud architectures expensive",
"Egress is faster than Ingress",
"Databricks pays the egress fees"
],
answer:1,
explanation:"Data gravity is real; you should always run your Databricks clusters in the same cloud and region where your data resides to avoid massive egress bills."
},

{
id:268,
difficulty:"hard",
category:"architecture",
question:"What is the role of the 'Metastore Admin' in Unity Catalog?",
options:[
"To write SQL queries",
"A super-user who can manage all objects, permissions, and identities within a specific Metastore",
"The person who manages the S3 hardware",
"The billing contact"
],
answer:1,
explanation:"The Metastore Admin has the 'keys to the kingdom' for that specific UC deployment and is responsible for initial setup and delegation."
},

{
id:269,
difficulty:"medium",
category:"delta_lake",
question:"Can you 'ROLLBACK' a Delta table to a state before an 'OPTIMIZE' command was run?",
options:[
"Yes, using the RESTORE command",
"No, OPTIMIZE is permanent",
"Only if you have a backup in Excel",
"Only on Tuesdays"
],
answer:0,
explanation:"Because Delta is versioned, you can RESTORE to any previous version in the transaction log, even after maintenance operations."
},

{
id:270,
difficulty:"hard",
category:"scenarios",
question:"How do you prevent 'Data Exfiltration' from a Databricks notebook (e.g., a user trying to download a Gold table to their local PC)?",
options:[
"Disable the 'Download' button in Workspace settings and use IP Access Lists",
"Lock the user's keyboard",
"Turn off the internet",
"Ask them nicely"
],
answer:0,
explanation:"Workspace admins can toggle features like 'Export results' and 'Download' to restrict data movement to authorized cloud locations only."
},

{
id:271,
difficulty:"hard",
category:"performance",
question:"What is 'Vectorization' in the context of the Photon engine?",
options:[
"Drawing graphs",
"Processing data in batches (vectors) using SIMD instructions rather than one row at a time",
"Increasing the number of workers",
"Using a GPU"
],
answer:1,
explanation:"Vectorized execution allows modern CPUs to perform the same operation on multiple data points simultaneously, drastically speeding up queries."
},

{
id:272,
difficulty:"medium",
category:"governance",
question:"In Unity Catalog, what is an 'Alias' for a table?",
options:[
"A nickname for a user",
"A pointer or reference to an existing table, often used to provide a simpler name or organize data in a different schema",
"A duplicate copy of the data",
"A temporary table"
],
answer:1,
explanation:"Aliases (or Synonyms) help with migration and organization without duplicating the underlying physical data files."
},

{
id:273,
difficulty:"hard",
category:"scenarios",
question:"Scenario: You are building a 'Slowly Changing Dimension' (SCD) where you only care about the most recent value. Which type is this?",
options:[
"Type 0",
"Type 1",
"Type 2",
"Type 3"
],
answer:1,
explanation:"SCD Type 1 overwrites old data with new data, maintaining no history. It is ideal for 'corrections'."
},

{
id:274,
difficulty:"hard",
category:"pyspark",
question:"Why is 'df.collect()' dangerous for large datasets?",
options:[
"It deletes the data",
"It pulls all data from the executors into the Driver's memory, which can cause the Driver to crash (OOM)",
"It is too fast",
"It only works with SQL"
],
answer:1,
explanation:"Always use .show(), .take(n), or write to storage instead of .collect() when dealing with production-scale data."
},

{
id:275,
difficulty:"medium",
category:"dlt",
question:"What is 'Continuous' mode in a DLT pipeline?",
options:[
"The pipeline runs once a day",
"The pipeline stays active and processes new data as it arrives in the source (low latency)",
"The pipeline never stops, even if there are errors",
"The pipeline uses only one worker"
],
answer:1,
explanation:"Continuous mode is the 'Streaming' version of DLT, whereas 'Triggered' mode is the 'Batch' version."
},

{
id:276,
difficulty:"hard",
category:"security",
question:"How do you securely pass a 'Secret' into a Spark SQL query in Databricks?",
options:[
"Hardcode it in the WHERE clause",
"Use the ${SECRET_SCOPE.SECRET_NAME} syntax or a widget backed by a secret",
"Write it on a post-it note",
"It is not possible"
],
answer:1,
explanation:"Databricks SQL supports referencing secrets securely so they are never stored in plain text in the query history."
},

{
id:277,
difficulty:"medium",
category:"architecture",
question:"What is 'Delta Sharing'?",
options:[
"Emailing a Delta table",
"An open protocol for secure data sharing with other organizations, regardless of their computing platform",
"Sharing a password",
"A way to copy tables"
],
answer:1,
explanation:"Delta Sharing allows you to share live data securely without the recipient needing to be on Databricks."
},

{
id:278,
difficulty:"hard",
category:"governance",
question:"Which Unity Catalog privilege allows a user to create a VIEW but NOT a TABLE?",
options:[
"CREATE VIEW",
"USE SCHEMA",
"CREATE TABLE (you need both)",
"UC permissions are granular; you can grant CREATE VIEW independently of CREATE TABLE"
],
answer:3,
explanation:"Unity Catalog provides fine-grained privileges, allowing admins to restrict users to specific object types."
},

{
id:279,
difficulty:"hard",
category:"scenarios",
question:"Scenario: You have a table with 1000 columns. Users only ever query 5 of them. Which file format is best?",
options:[
"CSV",
"JSON",
"Parquet/Delta (Columnar Storage)",
"Avro"
],
answer:2,
explanation:"Columnar storage (Parquet/Delta) allows Spark to read only the specific 5 columns needed, saving massive amounts of I/O."
},

{
id:280,
difficulty:"medium",
category:"spark_performance",
question:"What does the 'Adaptive' in Adaptive Query Execution (AQE) refer to?",
options:[
"It adapts to the user's personality",
"It adapts the query plan at runtime based on the actual statistics of the data being processed",
"It changes the cluster size",
"It works on any cloud"
],
answer:1,
explanation:"AQE is a game-changer that fixes performance issues (like skew or bad partition counts) while the query is actually running."
},
/* ======================================================
PARTITIONING & DATA SIZE STRATEGY (281 - 295)
===================================================== */

{
id:281,
difficulty:"hard",
category:"spark_performance",
question:"If you have 200 GB of data, how do you decide the optimal number of partitions to create in Spark?",
options:[
"Always use the default of 200",
"Aim for partition sizes between 128MB and 256MB by dividing total data by target size",
"Create one partition per GB (200 partitions)",
"Use as many partitions as there are rows"
],
answer:1,
explanation:"Targeting 128MB-256MB per partition balances parallelism with the overhead of managing too many small tasks."
},

{
id:282,
difficulty:"hard",
category:"spark_performance",
question:"What is a primary performance penalty of 'Over-partitioning' (creating thousands of tiny partitions)?",
options:[
"Data becomes corrupt",
"Excessive overhead on the Spark Driver for task scheduling and increased metadata management",
"The cluster runs out of disk space",
"Spark skips the Catalyst Optimizer"
],
answer:1,
explanation:"The Driver must manage every task; if tasks are too small, the scheduling overhead exceeds the actual execution time."
},

{
id:283,
difficulty:"medium",
category:"spark_performance",
question:"Which factor most directly influences the 'Shuffle Partition' size in Databricks?",
options:[
"The number of CPUs on the Driver",
"The spark.sql.shuffle.partitions configuration (default 200)",
"The size of the S3 bucket",
"The Python version"
],
answer:1,
explanation:"This setting determines the number of partitions used during wide transformations like joins or aggregations."
},

/* ======================================================
DELTA LAKE: TIME TRAVEL & VACUUM (296 - 310)
===================================================== */

{
id:284,
difficulty:"medium",
category:"delta_lake",
question:"What determines the retention period for Delta Table 'Time Travel'?",
options:[
"The S3 Lifecycle Policy",
"The 'delta.logRetentionDuration' and 'delta.deletedFileRetentionDuration' table properties",
"The cluster's uptime",
"The version of Databricks Runtime"
],
answer:1,
explanation:"Delta maintains history until the VACUUM command is run, which respects the retention duration (default 7 days)."
},

{
id:285,
difficulty:"hard",
category:"delta_lake",
question:"You run VACUUM with a retention of 0 hours (RETAIN 0 HOURS). What is the immediate risk?",
options:[
"The table schema is deleted",
"Active queries reading older versions of the data will fail, and Time Travel to those versions is lost",
"The cluster will restart",
"The data is moved to the Bronze layer"
],
answer:1,
explanation:"VACUUM physically deletes files; if a concurrent reader needs those files for a long-running query, the query will crash."
},

/* ======================================================
Z-ORDER & LIQUID CLUSTERING (311 - 325)
===================================================== */

{
id:286,
difficulty:"hard",
category:"delta_lake",
question:"On which type of columns should Z-ORDER usually be applied for maximum effectiveness?",
options:[
"Columns with very low cardinality (e.g., Boolean flags)",
"High-cardinality columns frequently used in WHERE clauses (e.g., user_id or transaction_date)",
"Every column in the table",
"Columns containing JSON strings"
],
answer:1,
explanation:"Z-Ordering is most effective on columns used for filtering that have many unique values, as it improves data skipping."
},

{
id:287,
difficulty:"hard",
category:"delta_lake",
question:"Why might you prefer Liquid Clustering over Z-ORDER for a table with heavy, frequent inserts?",
options:[
"Z-ORDER is free; Liquid Clustering costs more",
"Liquid Clustering is incremental and avoids the expensive full-data rewrite required by Z-ORDER 'Optimize'",
"Z-ORDER only works on integers",
"Liquid Clustering deletes small files automatically"
],
answer:1,
explanation:"Liquid Clustering allows for faster, more frequent clustering without the 'stop-the-world' overhead of a full Z-Order optimization."
},

/* ======================================================
STREAMING & WINDOW FUNCTIONS (326 - 340)
===================================================== */

{
id:288,
difficulty:"hard",
category:"streaming",
question:"How do you handle 'Late-Arriving Data' in a Structured Streaming pipeline to ensure aggregates are eventually correct?",
options:[
"Ignore any data older than 1 minute",
"Define a 'Watermark' to tell Spark how long to wait for late data before closing a time window",
"Restart the stream every hour",
"Use the 'Drop' output mode"
],
answer:1,
explanation:"Watermarking allows the state store to keep old windows open for a specific duration to incorporate late events."
},

{
id:289,
difficulty:"medium",
category:"streaming",
question:"What is the difference between a 'Tumbling Window' and a 'Sliding Window'?",
options:[
"Tumbling windows overlap; sliding windows do not",
"Tumbling windows are fixed-size and non-overlapping; sliding windows can overlap based on a 'slide' interval",
"Tumbling windows only work with Kafka",
"There is no difference"
],
answer:1,
explanation:"A 10-minute tumbling window is 10:00-10:10, 10:10-10:20. A sliding window could be 10 minutes long but 'slide' every 5 minutes."
},

/* ======================================================
INFRASTRUCTURE, S3 & SECURITY (341 - 355)
===================================================== */

{
id:290,
difficulty:"hard",
category:"infrastructure",
question:"Which AWS S3 storage class is best suited for 'Gold' layer Delta tables that are queried frequently by BI tools?",
options:[
"S3 Glacier Deep Archive",
"S3 Standard",
"S3 Intelligent-Tiering",
"S3 One Zone-IA"
],
answer:1,
explanation:"S3 Standard provides the lowest latency and highest throughput for frequent access patterns required by BI."
},

{
id:291,
difficulty:"hard",
category:"security",
question:"What is the correct sequence for 'Key Rotation' of a Databricks Secret used by a production ETL job?",
options:[
"1. Delete old secret, 2. Update code, 3. Add new secret",
"1. Add new secret version, 2. Update job parameters to reference new secret, 3. Verify run, 4. Revoke old secret",
"1. Restart cluster, 2. Change password",
"1. Export data to CSV, 2. Rotate keys"
],
answer:1,
explanation:"The 'Add-Update-Verify-Revoke' cycle ensures zero downtime for automated production pipelines."
},

/* ======================================================
SPARK UI & TROUBLESHOOTING (356 - 380)
===================================================== */

{
id:292,
difficulty:"hard",
category:"spark_ui",
question:"In the Spark UI Stage page, 199 tasks finish in 20s, but one task runs for 30 minutes. Which metric confirms 'Data Skew'?",
options:[
"Shuffle Read Size: Check if the 'Max' value is significantly higher than the 'Median'",
"Task Deserialization Time",
"Scheduler Delay",
"GC Time"
],
answer:0,
explanation:"If one task has 10GB of Shuffle Read while others have 10MB, you have a classic data skew on a join/group-by key."
},

{
id:293,
difficulty:"hard",
category:"spark_ui",
question:"You see high 'GC Time' (over 40%) in the Spark UI. What is the most likely cause?",
options:[
"S3 is slow",
"The executor memory is full of long-lived objects or massive data partitions, causing the JVM to struggle",
"The Driver node is too small",
"You have too many worker nodes"
],
answer:1,
explanation:"High Garbage Collection (GC) indicates memory pressure. This often happens with data skew or when caching very large datasets."
},

{
id:294,
difficulty:"hard",
category:"pyspark",
question:"Why is using 'collect()' in production considered 'dangerous'?",
options:[
"It encrypts the data so it can't be read",
"It pulls the entire distributed dataset into the single Driver node's memory, causing an OutOfMemory (OOM) crash",
"It makes the executors stop working",
"It is a deprecated function"
],
answer:1,
explanation:"Collect breaks the distributed nature of Spark by funneling everything to one node (the Driver)."
},

{
id:295,
difficulty:"medium",
category:"python",
question:"What is a common real-world use case for 'Python Decorators' in a Data Engineering pipeline?",
options:[
"To change the color of the notebook",
"To implement logging, timing, or retry logic for ETL functions without modifying the core function code",
"To delete S3 buckets",
"To convert SQL to Python"
],
answer:1,
explanation:"Decorators are excellent for cross-cutting concerns like measuring how long a 'load_table' function takes or retrying an API call."
},
 /* ======================================================
DOCKER & CONTAINERIZATION (296 - 310)
===================================================== */

{
id:296,
difficulty:"hard",
category:"devops",
question:"What is the primary purpose of a 'docker-compose.yml' file in a local data engineering environment?",
options:[
"To compile Python into C++",
"To define and run multi-container applications (e.g., Spark Master, Worker, and a Postgres Metastore) with a single command",
"To encrypt the Docker images",
"To upload notebooks to Databricks"
],
answer:1,
explanation:"Docker Compose allows you to orchestrate multiple related services, ensuring they can communicate over a shared network."
},

{
id:297,
difficulty:"medium",
category:"devops",
question:"Which Dockerfile instruction is used to install system-level dependencies (like 'libpq-dev' for Postgres) during the image build?",
options:[
"COPY",
"RUN",
"CMD",
"EXPOSE"
],
answer:1,
explanation:"The RUN command executes shell commands during the build process to prepare the environment."
},

/* ======================================================
REAL-TIME RIDE ANALYTICS SYSTEM DESIGN
===================================================== */

{
id:298,
difficulty:"hard",
category:"architecture",
question:"Scenario: You are designing a 'Real-time Ride Analytics' system for 1M events/sec. How do you prevent the Spark Streaming job from crashing during a sudden traffic spike?",
options:[
"Increase the driver memory",
"Enable 'Backpressure' (spark.streaming.backpressure.enabled) to dynamically rate-limit the ingestion from the source",
"Delete the checkpoint",
"Switch to a Batch job"
],
answer:1,
explanation:"Backpressure allows Spark to signal the source (like Kafka) to slow down if the executors are overwhelmed, preventing OOM errors."
},

{
id:299,
difficulty:"hard",
category:"architecture",
question:"In a Ride-sharing app, which window function is best for calculating the 'Average Fare' over the last 10 minutes, updated every 1 minute?",
options:[
"Tumbling Window",
"Sliding Window",
"Session Window",
"Ranking Window"
],
answer:1,
explanation:"A Sliding Window allows for overlapping intervals (10m duration, 1m slide), which provides a 'moving average' effect."
},

/* ======================================================
SPARK UI MASTER CLASS
===================================================== */

{
id:300,
difficulty:"hard",
category:"spark_ui",
question:"Spark UI shows 100GB of 'Shuffle Write' but the final table is only 1GB. What does this suggest?",
options:[
"The data is highly compressed in S3",
"An inefficient join or 'Explode' operation expanded the data massively during intermediate stages",
"The Spark UI is broken",
"The cluster has too much RAM"
],
answer:1,
explanation:"Large shuffle writes relative to output often indicate a 'Cartesian Product' or an 'Explode' generating many rows that are later filtered or aggregated."
},

{
id:301,
difficulty:"hard",
category:"spark_ui",
question:"In the Spark UI, 'Scheduler Delay' is high (several seconds) for short-running tasks. How would you fix this?",
options:[
"Increase executor memory",
"Decrease the number of partitions (tasks) to reduce the scheduling overhead on the Driver",
"Change the S3 storage class",
"Enable Photon"
],
answer:1,
explanation:"High scheduler delay means the Driver is taking too long to assign work. Fewer, larger tasks reduce this burden."
},

{
id:302,
difficulty:"hard",
category:"spark_ui",
question:"You see 'Disk Spill (Memory)' and 'Disk Spill (Disk)' in a Stage. What is the immediate impact?",
options:[
"The job fails immediately",
"Performance degrades significantly because Spark is writing temporary shuffle data to local disk instead of keeping it in RAM",
"The data is automatically Z-Ordered",
"The S3 bucket becomes full"
],
answer:1,
explanation:"Disk spill occurs when a partition is too large to fit in the executor's execution memory fraction."
},

/* ======================================================
COST & RECOVERY SCENARIOS
===================================================== */

{
id:303,
difficulty:"hard",
category:"cost_optimization",
question:"Scenario: Your Databricks cost increased 70% in one month. You notice many 'All-Purpose' clusters running 24/7. What is the first fix?",
options:[
"Switch all production workloads to 'Job Clusters' and enforce strict 'Auto-Termination' on interactive clusters",
"Delete all S3 data",
"Lower the number of partitions",
"Enable Unity Catalog"
],
answer:0,
explanation:"Job clusters are billed at a much lower rate (approx 50% less) than All-Purpose clusters and shut down automatically."
},

{
id:304,
difficulty:"hard",
category:"performance",
question:"Your ETL job was fast 6 months ago but is now 5x slower. You find 500,000 files in the table directory. What is the fix?",
options:[
"Run OPTIMIZE on the table to compact the small files",
"Increase the number of workers",
"Rename the table",
"Convert to CSV"
],
answer:0,
explanation:"The 'Small File Problem' causes excessive metadata listing and I/O overhead. OPTIMIZE merges them into ~1GB files."
},

{
id:305,
difficulty:"hard",
category:"spark_performance",
question:"Why can increasing worker nodes sometimes make a Spark job SLOWER?",
options:[
"More workers always make it faster",
"Increased network 'Shuffle' traffic and coordination overhead (the 'Communication Wall')",
"The Driver gets lonely",
"S3 cannot handle multiple workers"
],
answer:1,
explanation:"If the data is small, adding workers increases the time spent moving data across the network versus just processing it locally."
},
/* ======================================================
   ADVANCED PERFORMANCE & SCENARIOS
   ====================================================== */

  {
    id: 306,
    difficulty: "hard",
    category: "performance",
    question: "If you have 200 GB of raw data, what is the recommended number of shuffle partitions to aim for in Databricks/Spark?",
    options: [
      "200 partitions (Default)",
      "1,000 partitions (Based on 128MB - 200MB per partition rule)",
      "10,000 partitions to maximize parallelism",
      "Exactly one partition per CPU core"
    ],
    answer: 1,
    explanation: "The rule of thumb for optimal performance is to aim for partition sizes between 128MB and 200MB. 200GB (approx 200,000MB) / 200MB = 1000 partitions.",
    hint: "Rule of thumb: 128MB to 200MB per partition."
  },
  {
    id: 307,
    difficulty: "medium",
    category: "performance",
    question: "What is a primary consequence of 'Under-partitioning' (partitions too large)?",
    options: [
      "The Driver node will run out of memory",
      "Disk Spill and high Garbage Collection (GC) overhead on executors",
      "Too many small files in S3",
      "The Spark UI will show too many active tasks"
    ],
    answer: 1,
    explanation: "Under-partitioning results in partitions that are too large to fit in the executor's RAM, forcing Spark to 'spill' data to disk, which is significantly slower.",
    hint: "Think about 'Disk Spill' and RAM pressure."
  },
  {
    id: 308,
    difficulty: "hard",
    category: "delta_lake",
    question: "Which Delta table property determines how far back you can go for Time Travel before VACUUM deletes the data?",
    options: [
      "delta.logRetentionDuration",
      "delta.deletedFileRetentionDuration",
      "delta.timeTravelLimit",
      "spark.databricks.delta.retention"
    ],
    answer: 1,
    explanation: "delta.deletedFileRetentionDuration (default 7 days) controls how long deleted data files are kept. Time Travel cannot go back further than this once VACUUM is run.",
    hint: "It's a table property specifically for 'deleted files'."
  },
  {
    id: 309,
    difficulty: "hard",
    category: "delta_lake",
    question: "Would you apply Z-ORDER to a Delta table that experiences heavy, frequent inserts every minute?",
    options: [
      "Yes, it ensures every insert is fast",
      "No, Z-ORDER is an expensive write-time operation; frequent Z-ordering will cause massive write overhead",
      "Yes, because Z-ORDER replaces the need for partitioning",
      "Only if the table is smaller than 1GB"
    ],
    answer: 1,
    explanation: "Z-ORDER is a 'write-heavy' optimization. For high-frequency inserts, you should use Auto-Compaction/Optimized Writes and only run Z-ORDER during low-traffic maintenance windows.",
    hint: "Z-ORDER is great for READS but expensive for WRITES."
  },
  {
    id: 310,
    difficulty: "medium",
    category: "performance",
    question: "When would you prefer Liquid Clustering over Z-ORDER in Databricks?",
    options: [
      "When you have a very small table",
      "When query patterns are unpredictable or change frequently, and you want to avoid fixed partition hierarchies",
      "When you are using Spark 2.4",
      "When you want to encrypt the data"
    ],
    answer: 1,
    explanation: "Liquid Clustering is flexible and adapts to shifting query patterns, unlike Z-ORDER which requires you to know your filter columns upfront.",
    hint: "Use it if you don't know your query patterns yet."
  },
  {
    id: 311,
    difficulty: "medium",
    category: "streaming",
    question: "Which window function type allows for overlapping intervals (e.g., every 5 minutes, but looking at the last 10 minutes of data)?",
    options: [
      "Tumbling Window",
      "Sliding Window",
      "Session Window",
      "Ranking Window"
    ],
    answer: 1,
    explanation: "Sliding windows allow for overlaps, making them ideal for 'moving averages' or 'rolling counts'.",
    hint: "Think 'Overlapping'."
  },
  {
    id: 312,
    difficulty: "hard",
    category: "orchestration",
    question: "If a Databricks Job has both a 'Job-level' parameter and a 'Task-level' parameter with the same name, which one takes precedence?",
    options: [
      "The Job-level parameter",
      "The Task-level parameter",
      "Neither; it throws an error",
      "The one that was created first"
    ],
    answer: 1,
    explanation: "Task-level parameters are more specific and override Job-level parameters in Databricks Workflows.",
    hint: "Specific overrides General."
  },
  {
    id: 313,
    difficulty: "hard",
    category: "infrastructure",
    question: "What is the key purpose of a 'docker-compose.yml' file in a Data Engineering environment?",
    options: [
      "To compile Python into a JAR file",
      "To define and run multi-container applications (e.g., a Spark Driver, Worker, and Metastore) as a single service",
      "To replace the Databricks UI",
      "To store AWS S3 credentials"
    ],
    answer: 1,
    explanation: "Docker Compose allows you to orchestrate multiple related containers to work together using a single YAML configuration.",
    hint: "Orchestrating 'Multi-container' apps."
  },
  {
    id: 314,
    difficulty: "hard",
    category: "spark_internals",
    question: "Which phase of the Catalyst Optimizer is responsible for applying 'Predicate Pushdown'?",
    options: [
      "Analysis",
      "Logical Optimization",
      "Physical Planning",
      "Code Generation"
    ],
    answer: 1,
    explanation: "The Logical Optimization phase applies rules like Predicate Pushdown to ensure filters are applied as close to the data source as possible.",
    hint: "Filtering 'at the source' happens during Logical Optimization."
  },
  {
    id: 315,
    difficulty: "hard",
    category: "spark_ui",
    question: "In the Spark UI Task table, you see that the 'Max' duration is 100x larger than the 'Median' duration. What does this specifically indicate?",
    options: [
      "Network failure",
      "Data Skew (one task is processing much more data than the others)",
      "The Driver node is too small",
      "S3 is throttling the request"
    ],
    answer: 1,
    explanation: "A massive gap between Median and Max task duration is a classic signature of Data Skew.",
    hint: "Look at the 'Duration' and 'Shuffle Read' columns."
  },
  {
    id: 316,
    difficulty: "medium",
    category: "spark_performance",
    question: "Why is partitioning a table by a high-cardinality column like 'Transaction_ID' considered bad design?",
    options: [
      "It makes the data too secure",
      "It creates the 'Small File Problem' (thousands of tiny directories/files), overwhelming the file system metadata",
      "It speeds up the writes too much",
      "It prevents Time Travel"
    ],
    answer: 1,
    explanation: "High-cardinality partitioning creates too many sub-directories and tiny files, which slows down file listing and metadata operations significantly.",
    hint: "Too many folders, too many small files."
  },
  {
    id: 317,
    difficulty: "hard",
    category: "python",
    question: "What is a real-world use case for using a Python Decorator in a data pipeline?",
    options: [
      "To convert a CSV to Parquet",
      "Retrying a connection to a flaky external API or logging the execution time of a specific function",
      "To rename a column in a Spark DataFrame",
      "To increase the cluster size"
    ],
    answer: 1,
    explanation: "Decorators are perfect for cross-cutting concerns like @retry, @log_execution_time, or @validate_schema.",
    hint: "Using @retry or @log_time."
  },
  {
    id: 318,
    difficulty: "hard",
    category: "governance",
    question: "What is the recommended tool to validate data quality and schema drift during a large-scale migration to Unity Catalog?",
    options: [
      "Excel",
      "Great Expectations or DLT Expectations (constraints)",
      "Spark UI",
      "VACUUM"
    ],
    answer: 1,
    explanation: "Automated validation frameworks ensure that row counts, null percentages, and schemas match post-migration.",
    hint: "Use 'Expectations' to check data quality."
  },
  {
    id: 319,
    difficulty: "medium",
    category: "infrastructure",
    question: "How do you implement 'Key Rotation' for Databricks Secrets stored in Azure Key Vault or AWS KMS?",
    options: [
      "By manually typing the new key into the notebook",
      "By updating the secret in the cloud provider's vault; Databricks will fetch the latest version automatically if configured via a Secret Scope",
      "You cannot rotate keys in Databricks",
      "By deleting the cluster every day"
    ],
    answer: 1,
    explanation: "Managed Secret Scopes point to the cloud provider's vault, ensuring that when the key is rotated there, Databricks remains updated.",
    hint: "The cloud vault handles the rotation; Databricks just 'points' to it."
  },
  {
    id: 320,
    difficulty: "hard",
    category: "spark_performance",
    question: "When is coalesce(n) significantly faster than repartition(n)?",
    options: [
      "When increasing the number of partitions",
      "When decreasing the number of partitions, because it avoids a full data shuffle across the network",
      "When performing a cross-join",
      "When the data is highly skewed"
    ],
    answer: 1,
    explanation: "Coalesce is a narrow transformation that moves data within existing nodes, whereas repartition is a wide transformation that triggers a full shuffle.",
    hint: "Avoid the 'Shuffle' when decreasing partitions."
  },
  {
    id: 321,
    difficulty: "hard",
    category: "scenarios",
    question: "You are designing a ride analytics system for 1 million events/sec. Which Databricks component is best for the 'Bronze' ingestion layer?",
    options: [
      "Direct Spark.read.json",
      "Structured Streaming with Auto Loader (CloudFiles) and Checkpointing",
      "Manual batch jobs every 5 minutes",
      "Exporting to CSV and then uploading"
    ],
    answer: 1,
    explanation: "Auto Loader is optimized for high-scale incremental ingestion with schema evolution and fault tolerance (checkpointing).",
    hint: "Think 'Real-time' and 'Incremental'."
  },
  {
  "id": 322,
  "difficulty": "hard",
  "category": "performance",
  "question": "A production Databricks job is suffering from slow execution due to data skew and inefficient file management. Which combination of 2026 features provides the most automated performance lift?",
  "options": [
    "Switching to All-Purpose Clusters and using manual Z-Order indexing",
    "Implementing Liquid Clustering, enabling Photon, and using Serverless Compute",
    "Using Python UDFs and increasing the shuffle partition count manually",
    "Moving all data to CSV format and using standard Hive partitioning"
  ],
  "answer": 1,
  "explanation": "Liquid Clustering automates data layout to handle skew, Photon provides a high-performance C++ engine, and Serverless eliminates cluster spin-up overhead.",
  "hint": "Focus on the 'C++ engine' and 'Modern dynamic partitioning' features."
  },
  {
    "id": 323,
    "difficulty": "hard",
    "category": "performance",
    "question": "A data engineer needs to optimize a massive Databricks join operation suffering from high shuffle latency and slow UDF execution. What is the most effective optimization strategy?",
    "options": [
      "Use Python UDFs for complex logic and increase cluster worker nodes to 100",
      "Enable Predictive I/O in Unity Catalog, use Broadcast Hints for small tables, and replace UDFs with Native Spark functions",
      "Manually set shuffle partitions to 200 and switch to an All-Purpose cluster",
      "Disable Adaptive Query Execution (AQE) and force all joins to SortMergeJoin"
    ],
    "answer": 1,
    "explanation": "Broadcast hints eliminate shuffles for small tables, Native Spark functions avoid Python serialization overhead (unlike UDFs), and Predictive I/O automates data skipping and file management.",
    "hint": "Avoid the 'Shuffle' and 'Python-to-JVM' overhead."
  },
  {
    "id": 324,
    "difficulty": "hard",
    "category": "cost-optimization",
    "question": "An enterprise is seeing a spike in DBUs for their daily ETL jobs. Which architectural shift provides the highest cost reduction while maintaining performance?",
    "options": [
      "Switching from Job Clusters to All-Purpose Clusters to allow for easier debugging",
      "Using Manual Clusters with Spot Instances and disabling Auto-scaling",
      "Using Serverless Compute, enabling Predictive I/O, and replacing Python UDFs with Native Spark/AQE",
      "Increasing the instance size to 'Extra Large' to ensure jobs finish under 1 minute"
    ],
    "answer": 2,
    "explanation": "Serverless Compute eliminates 'idle time' costs and cold-start delays. Predictive I/O reduces data scanning (lowering I/O costs), and Native Spark functions/AQE reduce CPU cycles compared to expensive Python UDFs.",
    "hint": "Think about 'Zero Idle Time' and 'Reduced I/O Overhead'."
  },
   {
    "id": 325,
    "difficulty": "hard",
    "category": "performance",
    "question": "A Spark job is failing with 'MetadataFetchException' and 'OOM' errors during a wide transformation. Which sequence of actions best reduces shuffle volume?",
    "options": [
      "Increase shuffle partitions to 5000 and use a larger All-Purpose cluster",
      "Apply broadcast hints to small tables, enable AQE, and use Liquid Clustering on join keys",
      "Convert all tables to CSV and disable Photon to save memory",
      "Replace all joins with cross-joins and use Python UDFs for filtering"
    ],
    "answer": 1,
    "explanation": "Broadcasting small tables avoids the shuffle entirely, AQE manages data skew dynamically, and Liquid Clustering ensures physical data proximity on disk.",
    "hint": "Broadcasting is the 'Shuffle Killer'."
  },
   {
    "id": 326,
    "difficulty": "hard",
    "category": "architecture",
    "question": "You are configuring a job with 10 executors (8 cores each). The total dataset is 240 GB. Which configuration balances parallelism and I/O efficiency?",
    "options": [
      "10 partitions (1 per executor) at 24 GB per file",
      "800 partitions at ~300 MB per file, using AQE to coalesce small shuffles",
      "24,000 partitions at 10 MB per file to maximize concurrency",
      "Disable partitioning entirely and use a single large CSV file"
    ],
    "answer": 1,
    "explanation": "800 partitions provides 10x the core count (80 cores), allowing for 'over-parallelism' to handle data skew, while the ~300 MB file size sits perfectly in the recommended 100-500 MB range.",
    "hint": "Aim for a partition count that is a multiple of your total cores and file sizes that aren't 'tiny' or 'gigantic'."
  },
  /* ======================================================
   AI & GENAI WORKFLOWS (RAG, LLM, AGENTS)
   ====================================================== */

{
  id: 327,
  difficulty: "hard",
  category: "gen_ai",
  question: "In a production Retrieval-Augmented Generation (RAG) pipeline, what is the correct sequence of operations to ground an LLM with enterprise data?",
  options: [
    "Generate -> Retrieve -> Embed -> Chunk",
    "Chunk -> Embed -> Store in Vector DB -> Retrieve -> Generate",
    "Embed -> Retrieve -> Generate -> Chunk",
    "Retrieve -> Chunk -> Embed -> Generate"
  ],
  answer: 1,
  explanation: "RAG requires breaking documents into chunks, converting them to vector embeddings, storing them for similarity search, and then retrieving relevant context to inform the LLM's final generation.",
  hint: "Grounding involves context retrieval before response generation."
},

{
  id: 328,
  difficulty: "medium",
  category: "gen_ai",
  question: "Which component of the Databricks AI stack is specifically used for agent-based orchestration and building complex AI workflows?",
  options: [
    "MLflow",
    "Mosaic AI Agent Framework",
    "Delta Live Tables",
    "Unity Catalog"
  ],
  answer: 1,
  explanation: "Mosaic AI Agent Framework provides the tools to build, deploy, and monitor agents that can use tools and reason through multi-step tasks.",
  hint: "Think 'Agent-based orchestration'."
},

{
  id: 329,
  difficulty: "medium",
  category: "gen_ai",
  question: "What is the primary purpose of using 'LangChain' in a Databricks-based AI solution?",
  options: [
    "To manage Spark cluster autoscaling",
    "To connect LLMs with retrievers, external tools, and multi-step workflows",
    "To convert SQL tables into Python dictionaries",
    "To provide a frontend UI for Databricks SQL"
  ],
  answer: 1,
  explanation: "LangChain is a framework that simplifies building LLM applications by providing a standard interface for 'chains' of components like prompts, models, and data retrievers.",
  hint: "Connecting LLMs to tools."
},

{
  id: 330,
  difficulty: "hard",
  category: "ai_ops",
  question: "When productionizing models using MLflow, what is the primary difference between 'Experiment Tracking' and 'Model Registry'?",
  options: [
    "Tracking is for notebooks; Registry is for SQL",
    "Tracking captures parameters and metrics of runs; Registry manages versions and lifecycle stages (e.g., Staging, Production)",
    "Tracking is only for Spark; Registry is only for Python",
    "There is no difference; they are synonymous"
  ],
  answer: 1,
  explanation: "Tracking is used during the development/tuning phase to record artifacts and metrics. The Registry is a central hub for managing the governance and promotion of finalized models.",
  hint: "Governance vs. Logging."
},

/* ======================================================
   SPARK INTERNALS & PERFORMANCE OPTIMIZATION
   ====================================================== */

{
  id: 331,
  difficulty: "hard",
  category: "spark_performance",
  question: "During a Spark job, a 'Job' is split into 'Stages'. What is the primary factor that defines a Stage boundary?",
  options: [
    "Every 10 minutes of execution time",
    "A 'Shuffle' boundary (Wide Transformation) where data must be redistributed across executors",
    "The number of rows in the DataFrame",
    "Each time a .select() or .filter() is called"
  ],
  answer: 1,
  explanation: "Narrow transformations (select, filter) happen within a stage. Wide transformations (join, groupBy, repartition) require a shuffle, which triggers the start of a new stage.",
  hint: "Wide transformations cause shuffles."
},

{
  id: 332,
  difficulty: "hard",
  category: "spark_performance",
  question: "How does 'Adaptive Query Execution' (AQE) specifically handle the 'Skew Join' optimization at runtime?",
  options: [
    "By deleting the skewed rows automatically",
    "By identifying skewed partitions and splitting them into smaller sub-partitions to balance the workload across more tasks",
    "By converting all joins into Cross Joins",
    "By restarting the cluster with more RAM"
  ],
  answer: 1,
  explanation: "AQE monitors shuffle statistics. If it detects a highly skewed partition, it splits that partition so that multiple tasks can process it in parallel, preventing a single long-running task.",
  hint: "Dynamic runtime partition splitting."
},

{
  id: 333,
  difficulty: "medium",
  category: "spark_performance",
  question: "Which technique is recommended in the 'Master Document' to resolve 'Data Skew' by modifying the join key to redistribute the data more evenly?",
  options: [
    "Caching",
    "Salting (adding a random prefix or suffix to the key)",
    "Using a CSV format",
    "Decreasing the cluster size"
  ],
  answer: 1,
  explanation: "Salting involves adding a random element to a skewed key so that the data for that key is spread across multiple partitions instead of concentrating in one.",
  hint: "Add 'flavor' to balance the distribution."
},

/* ======================================================
   CLOUD INTEGRATION & OPERATIONS
   ====================================================== */

{
  id: 334,
  difficulty: "medium",
  category: "cloud_azure",
  question: "What is the key functional difference between Azure Data Lake Storage (ADLS Gen2) and standard Azure Blob Storage?",
  options: [
    "Blob Storage is faster",
    "ADLS Gen2 features a 'Hierarchical Namespace' (HNS) optimized for big data analytics and directory-level security",
    "Blob Storage only supports text files",
    "ADLS Gen2 does not support Unity Catalog"
  ],
  answer: 1,
  explanation: "ADLS Gen2 combines Blob storage's cost with a hierarchical file system, allowing for efficient folder-level operations common in Spark workloads.",
  hint: "Hierarchical Namespace (HNS)."
},

{
  id: 335,
  difficulty: "medium",
  category: "cloud_azure",
  question: "How does Azure Data Factory (ADF) typically integrate with Databricks for production orchestration?",
  options: [
    "ADF copies the Databricks code into its own memory",
    "ADF uses a 'Linked Service' to trigger Databricks Notebooks/Jobs and can pass parameters for execution",
    "Databricks must be deleted for ADF to work",
    "ADF only supports SQL Warehouses"
  ],
  answer: 1,
  explanation: "ADF acts as the high-level orchestrator, using Linked Services and 'Databricks Notebook' activities to trigger logic and manage end-to-end data movement.",
  hint: "Linked Services and parameter passing."
},

{
  id: 336,
  difficulty: "medium",
  category: "cost_optimization",
  question: "According to the 'Master Document', which cluster configuration is best suited for fault-tolerant, non-interactive production workloads to reduce costs?",
  options: [
    "All-Purpose Clusters with GPUs",
    "Spot Instances",
    "Single Node Clusters",
    "High-Concurrency Clusters with No-Isolation"
  ],
  answer: 1,
  explanation: "Spot instances leverage spare cloud capacity at a steep discount, making them ideal for jobs that can handle the occasional pre-emption/interruption.",
  hint: "Use 'spare' cloud capacity for savings."
},

{
  id: 337,
  difficulty: "easy",
  category: "architecture",
  question: "What is the primary role of 'Shell Scripting' in a professional Databricks environment?",
  options: [
    "To replace PySpark for all data transformations",
    "To act as 'operational glue logic' for job automation, parameter passing, and monitoring",
    "To build machine learning models",
    "To create visual dashboards"
  ],
  answer: 1,
  explanation: "Shell scripts are used for operational tasks like triggering CLI commands, managing environment setup, and handling pre/post-job logic.",
  hint: "Operational glue logic."
},
   {
  id: 338,
  difficulty: "hard",
  category: "performance",
  question: "You observe a 'straggler' task in Spark UI where one task takes 20x longer than others. What is the most likely cause?",
  options: ["Network latency", "Data Skew", "Small file problem", "Driver failure"],
  answer: 1,
  explanation: "Data Skew occurs when a specific key has significantly more records than others, causing one partition to be much larger and taking longer to process.",
  hint: "Think about uneven data distribution."
},
{
  id: 339,
  difficulty: "medium",
  category: "streaming",
  question: "Which mechanism in Structured Streaming prevents the state store from growing infinitely when performing windowed aggregations?",
  options: ["Checkpointing", "Watermarking", "Trigger.Once", "Auto Loader"],
  answer: 1,
  explanation: "Watermarking defines how late data can be; once the watermark passes the window end time, the state for that window is dropped.",
  hint: "Handles late-arriving data."
},
{
  id: 340,
  difficulty: "easy",
  category: "governance",
  question: "Unity Catalog introduces a standard for referencing tables. What is this called?",
  options: ["Flat Namespace", "2-Layer Namespace", "3-Layer Namespace", "Hive Metastore"],
  answer: 2,
  explanation: "Unity Catalog uses a 3-layer namespace: catalog.schema.table (or catalog.database.table).",
  hint: "Catalog, Schema, Table."
},
{
  id: 341,
  difficulty: "medium",
  category: "performance",
  question: "How does 'Predicate Pushdown' improve query performance in Databricks?",
  options: ["By increasing shuffle partitions", "By filtering data at the storage layer before it enters the Spark engine", "By caching all data in memory", "By using Python UDFs"],
  answer: 1,
  explanation: "Predicate pushdown allows Spark to 'push' filters (WHERE clauses) down to the Parquet/Delta file level, reducing I/O by reading only relevant data.",
  hint: "Filtering at the source."
},
{
  id: 342,
  difficulty: "medium",
  category: "performance",
  question: "What specific process does the OPTIMIZE command use to resolve the small file problem?",
  options: ["Z-Ordering", "Bin-Packing", "Broadcast Join", "Predicate Pushdown"],
  answer: 1,
  explanation: "OPTIMIZE uses bin-packing to coalesce many small files into larger, more efficient files (typically around 1GB).",
  hint: "Combining small files into a 'bin'."
},
{
  id: 343,
  difficulty: "easy",
  category: "security",
  question: "To avoid hard-coding credentials in notebooks, what Databricks feature should be used?",
  options: ["Environment Variables", "Secret Scopes", "Hard-coded strings", "DBFS root"],
  answer: 1,
  explanation: "Secret Scopes allow you to store sensitive credentials securely and reference them in notebooks using dbutils.secrets.get().",
  hint: "Securely managing keys."
},
/* ======================================================
WORKFLOWS: PARENT-CHILD TASKS & ERROR HANDLING (344 - 349)
====================================================== */
{
  id: 344,
  difficulty: "hard",
  category: "orchestration",
  question: "In a Databricks Job with multiple tasks, which utility is used to programmatically pass a dynamic value (e.g., a processed file path) from a parent task to a child task?",
  options: ["dbutils.widgets.get()", "dbutils.jobs.taskValues.set()", "os.environ.put()", "spark.conf.set()"],
  answer: 1,
  explanation: "The taskValues utility (set and get) allows tasks to share metadata or dynamic values with downstream tasks within the same job run.",
  hint: "Jobs utility for Task Values."
},
{
  id: 345,
  difficulty: "medium",
  category: "orchestration",
  question: "A Data Engineer wants 'Task B' to run only if the preceding 'Task A' fails (e.g., for error cleanup or logging). Which configuration should be applied to Task B?",
  options: ["Depends on: Task A (Successful)", "Depends on: Task A (Failed)", "Run if: Any failed", "Depends on: Task A (Finished)"],
  answer: 1,
  explanation: "Databricks Workflows allow you to trigger downstream tasks based on the specific outcome (Success or Failure) of their parent tasks.",
  hint: "Failure dependency."
},
{
  id: 346,
  difficulty: "medium",
  category: "monitoring",
  question: "If you need to receive an alert specifically when a critical 'Gold Layer' task fails, but NOT for 'Bronze' or 'Silver' failures in the same job, where should you configure the alert?",
  options: ["Job-level 'On Failure' settings", "Task-level 'On Failure' notification settings", "Cluster-level event logs", "Unity Catalog Audit log"],
  answer: 1,
  explanation: "Task-level notifications provide granular monitoring, allowing alerts for specific high-priority tasks rather than the entire pipeline status.",
  hint: "Task-level configuration."
},
{
  id: 347,
  difficulty: "medium",
  category: "monitoring",
  question: "Besides Email, which feature in Databricks allows Job/Task alerts to be sent to external tools like Slack, Microsoft Teams, or PagerDuty?",
  options: ["System Notifications (Webhooks)", "Spark UI Storage Tab", "DBFS Mount Points", "Delta Sharing Recipient"],
  answer: 0,
  explanation: "System Notifications support Webhooks, which can be configured to send job status updates to third-party communication and incident management platforms.",
  hint: "Webhooks for external apps."
},
{
  id: 348,
  difficulty: "medium",
  category: "orchestration",
  question: "A production task fails occasionally due to transient network issues. What is the most efficient way to handle this without manual intervention?",
  options: ["Wrap the entire notebook in a try-except block", "Configure a 'Retry Policy' within the task settings", "Set 'Maximum Concurrent Runs' to 10", "Restart the entire cluster manually"],
  answer: 1,
  explanation: "Task Retry Policies allow you to define the number of attempts and the interval between them, providing resilience against transient failures.",
  hint: "Task Retry Policy."
},
{
  id: 349,
  difficulty: "hard",
  category: "orchestration",
  question: "Which Databricks Workflow task type allows for branching logic, directing the flow to different tasks based on a boolean expression?",
  options: ["Notebook task", "Run Job task", "If/Else condition task", "ForEach task"],
  answer: 2,
  explanation: "The If/Else condition task evaluates a boolean expression (often using task values from previous steps) to determine which branch of the workflow to execute.",
  hint: "Conditional branching."
},
/* ======================================================
WORKFLOWS: CONFIG-DRIVEN BRANCHING & DYNAMIC JOBS (350 - 351)
====================================================== */
{
  id: 350,
  difficulty: "hard",
  category: "orchestration",
  question: "A File Arrival Trigger starts a parent job. The first task reads a 'metadata_config' table to determine the target table name and processing logic based on the file prefix. How should this 'Target_Type' be passed to downstream tasks for branching?",
  options: [
    "Write the value to a temporary CSV file in DBFS",
    "Use dbutils.jobs.taskValues.set('target_type', value) in the lookup notebook",
    "Pass it as a Spark configuration property (spark.conf.set)",
    "Hard-code the logic in every possible downstream notebook"
  ],
  answer: 1,
  explanation: "By setting a taskValue in the first (lookup) task, you can reference it in 'If/Else' condition tasks or as parameters in subsequent tasks using the {{tasks.lookup.values.target_type}} syntax.",
  hint: "Use taskValues for workflow-level variables."
},
{
  id: 351,
  difficulty: "hard",
  category: "orchestration",
  question: "To trigger a specific 'Child Job' and pass it the file path processed by a 'Parent Job', which Task Type and parameter syntax should be used in the Databricks Workflow UI?",
  options: [
    "Type: Notebook; Param: dbutils.widgets.get('path')",
    "Type: Run Job; Param: {{tasks.parent_task.values.path}}",
    "Type: Python Script; Param: sys.argv[1]",
    "Type: Pipeline; Param: context.file_path"
  ],
  answer: 1,
  explanation: "The 'Run Job' task type allows you to trigger another existing job. You can parameterize that child job by passing values from the current run using dynamic value references (double curly braces).",
  hint: "Run Job task with dynamic references."
},
/* ======================================================
ADVANCED DATA ARCHITECTURE & MODELLING
====================================================== */

{
  id: 352,
  difficulty: "hard",
  category: "data_modelling",
  question: "In a complex financial system, you encounter a 'Many-to-Many' relationship between Accounts and Customers that must be tracked historically. What is the most robust modelling technique to handle this in a Star Schema?",
  options: [
    "Add a multi-valued field in the Account dimension",
    "Create a Factless Fact table (Bridge Table) with effective date ranges",
    "Flatten the dimension and duplicate account rows for every customer",
    "Force the relationship into a 1-to-Many by selecting the primary customer only"
  ],
  answer: 1,
  explanation: "A Bridge table (Factless Fact) allows for many-to-many relationships while maintaining Star Schema integrity. Adding date ranges to the bridge table allows for 'point-in-time' snapshots of which customers owned which accounts.",
  hint: "Think about the 'Kimball' approach to many-to-many relationships."
},
{
  id: 353,
  difficulty: "hard",
  category: "architecture",
  question: "You are designing an Enterprise Data Warehouse (EDW) that must integrate data from 10 different business units. To ensure cross-departmental reporting is accurate, which concept is most critical to implement?",
  options: [
    "Shared Staging Areas",
    "Conformed Dimensions",
    "Database Mirroring",
    "Materialized Views"
  ],
  answer: 1,
  explanation: "Conformed dimensions (like a standard 'Date' or 'Product' dimension used by all departments) are the 'bus' of the data warehouse. They allow for 'drilling across' facts from different business processes.",
  hint: "It's the 'glue' that makes different Fact tables talk to each other."
},

/* ======================================================
DATABASE PERFORMANCE & OPTIMIZATION (ORACLE/MSSQL)
====================================================== */

{
  id: 354,
  difficulty: "hard",
  category: "database_performance",
  question: "On a high-traffic SQL Server (MSSQL) instance, you notice 'PAGELATCH_EX' waits on the system's tempdb. As a Lead Engineer, which configuration change would you first investigate to resolve this bottleneck?",
  options: [
    "Adding more RAM to the server",
    "Increasing the number of tempdb data files to match the logical core count (up to 8)",
    "Changing all tables to HEAP tables",
    "Disabling all non-clustered indexes"
  ],
  answer: 1,
  explanation: "PAGELATCH_EX in tempdb is often caused by metadata contention. Creating multiple data files for tempdb reduces allocation contention by spreading the load across multiple GAM/PFS pages.",
  hint: "It's a classic SQL Server scale-out configuration for internal system databases."
},
{
  id: 355,
  difficulty: "hard",
  category: "database_performance",
  question: "In an Oracle environment, a critical batch job has suddenly slowed down. You check the AWR (Automatic Workload Repository) report and see high 'db file sequential read' waits. What does this usually indicate?",
  options: [
    "Excessive Full Table Scans",
    "Slow physical I/O for single-block reads (likely via an index)",
    "Contention for the Library Cache",
    "Network latency between the app and the database"
  ],
  answer: 1,
  explanation: "A 'db file sequential read' wait indicates that the process is waiting for a single-block I/O, which is the signature of an index seek. High waits suggest either a fragmented index or the disk subsystem is struggling.",
  hint: "Don't be fooled by 'sequential'; in Oracle, this means single-block/random I/O."
},

/* ======================================================
ETL / ELT ENGINEERING (ADF, SSIS, LOGGING)
===================================================== */

{
  id: 356,
  difficulty: "medium",
  category: "etl_engineering",
  question: "When designing an ETL pipeline for a fact table, you encounter 'Late Arriving Dimensions' (the fact record arrives before the dimension member is created). What is the best architectural pattern to handle this?",
  options: [
    "Reject the fact record and log it as an error",
    "Wait/Pause the pipeline until the dimension source is updated",
    "Create a 'Placeholder/Inferred' member in the dimension table and update it later",
    "Hardcode the dimension key to 0 (Unknown) and never update it"
  ],
  answer: 2,
  explanation: "Inferred members allow the fact to be loaded immediately without losing data. When the actual dimension data arrives, the record is updated with the correct attributes, maintaining referential integrity.",
  hint: "Kimball refers to this as 'Inferred Members'."
},
{
  id: 357,
  difficulty: "hard",
  category: "etl_engineering",
  question: "In Azure Data Factory (ADF), you need to ensure that a sensitive API Key used in a Web Activity is not visible in the execution logs or the ADF portal monitoring. Which setting must be enabled?",
  options: [
    "Secure Input and Secure Output",
    "Managed Identity Authentication",
    "Data Flow Staging",
    "Encrypted Delivery"
  ],
  answer: 0,
  explanation: "Checking 'Secure Input' and 'Secure Output' on an activity ensures that the values passed to and from the activity are masked with asterisks in all logs and monitoring views.",
  hint: "It's a checkbox in the Activity's 'General' settings tab."
},

/* ======================================================
LEADERSHIP & DATA GOVERNANCE
====================================================== */

{
  id: 358,
  difficulty: "hard",
  category: "leadership",
  question: "As a Lead Architect, you are tasked with reducing 'Technical Debt' in a legacy ETL system. Which strategy provides the highest long-term ROI for the engineering team?",
  options: [
    "Rewriting the entire system in a newer programming language",
    "Implementing automated Data Quality tests and CI/CD pipelines",
    "Hiring more junior developers to manually check data",
    "Moving all logic into the visualization layer (Power BI/Tableau)"
  ],
  answer: 1,
  explanation: "Automated testing and CI/CD reduce the cost of change and prevent regressions. This allows the team to refactor safely, which is the core of managing technical debt.",
  hint: "Focus on 'Automation' and 'Safety'."
},
{
  id: 359,
  difficulty: "hard",
  category: "governance",
  question: "A global organization requires that users in the UK see only UK sales data, while users in the US see only US sales data, using a single dashboard. What is the most scalable way to implement this?",
  options: [
    "Create separate databases for each country",
    "Implement Row-Level Security (RLS) using a mapping table and user sessions",
    "Hardcode filters into the dashboard for each user",
    "Export data to separate Excel files and email them"
  ],
  answer: 1,
  explanation: "Row-Level Security (RLS) filters data at the database level based on the user's identity. This ensures security is maintained regardless of which tool is used to access the data.",
  hint: "Filter the 'Rows', not the 'Tables'."
},
/* ======================================================
PYSPARK DATAFRAME API & SPARK SQL OPERATIONS
====================================================== */

{
  id: 360,
  difficulty: "medium",
  category: "pyspark_basics",
  question: "When loading a CSV file using spark.read.format('csv'), what is the primary consequence of setting 'inferSchema' to False (the default behavior)?",
  options: [
    "Spark will automatically detect integer and boolean types",
    "All columns will be loaded as StringType",
    "The job will fail if a schema is not manually provided",
    "Spark will read only the first 100 rows to determine types"
  ],
  answer: 1,
  explanation: "By default, Spark does not trigger an extra pass over the data to determine types; it treats all fields as strings unless 'inferSchema' is set to True or a schema is explicitly defined.",
  hint: "Think about the most 'lazy' and safe default data type for text files."
},
{
  id: 361,
  difficulty: "medium",
  category: "pyspark_basics",
  question: "In the following query: df.groupBy('State').agg(avg('Population').alias('Avg_Pop')), what is the purpose of the .alias() method?",
  options: [
    "To create a temporary view for SQL queries",
    "To rename the resulting aggregation column for better readability",
    "To cast the Population column to a different data type",
    "To partition the data physically by the alias name"
  ],
  answer: 1,
  explanation: "The .alias() method is used to provide a specific name to the output column of an expression, which is especially useful after aggregations that produce names like 'avg(Population)'.",
  hint: "It acts like the 'AS' keyword in standard SQL."
},
{
  id: 362,
  difficulty: "hard",
  category: "spark_sql",
  question: "A developer executes df.createOrReplaceTempView('population_data'). What is the scope and lifecycle of this view?",
  options: [
    "It is visible to all users across all clusters in the workspace",
    "It is visible to all notebooks running on the same cluster",
    "It is only visible to the current SparkSession and is lost when the session ends",
    "It is persisted permanently in the Hive Metastore until manually dropped"
  ],
  answer: 2,
  explanation: "Temporary views are session-scoped. They are not shared across different SparkSessions or notebooks unless they are created as 'Global Temporary Views' (_global_temp).",
  hint: "It is 'Temporary' and tied specifically to your current notebook session."
},
{
  id: 363,
  difficulty: "medium",
  category: "delta_lake",
  question: "When writing data using df.write.format('delta').mode('overwrite').saveAsTable('avg_state_population'), what happens if the table 'avg_state_population' already exists?",
  options: [
    "The operation fails to prevent data loss",
    "The existing data and schema are replaced by the new DataFrame's data and schema",
    "The new data is appended to the existing records",
    "Only the metadata is updated, but the physical files remain unchanged"
  ],
  answer: 1,
  explanation: "The 'overwrite' mode combined with 'saveAsTable' replaces the entire contents and the metadata (schema) of the target table with the contents of the DataFrame.",
  hint: "Consider the meaning of 'overwrite' in the context of a table."
},
{
  id: 364,
  difficulty: "hard",
  category: "pyspark_basics",
  question: "You need to join two DataFrames, df_csv and df_agg, on the 'State' column. Which syntax is most efficient for preventing duplicate join columns in the resulting DataFrame?",
  options: [
    "df_csv.join(df_agg, df_csv['State'] == df_agg['State'], 'inner')",
    "df_csv.join(df_agg, 'State', 'inner')",
    "df_csv.join(df_agg, col('df_csv.State') == col('df_agg.State'))",
    "spark.sql('SELECT * FROM df_csv JOIN df_agg ON df_csv.State = df_agg.State')"
  ],
  answer: 1,
  explanation: "When you pass the join column name as a string (or a list of strings), Spark performs an 'equi-join' and automatically drops the duplicate join column from the right-hand side DataFrame.",
  hint: "Passing the column name as a string is a shorthand that handles column deduplication."
},   
];  

