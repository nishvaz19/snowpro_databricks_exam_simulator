/* ======================================================
   MONGODB CERTIFICATION QUESTION BANK (Batch 1: 1-50)
   Topics: CRUD, Indexing, Schema Design, & Aggregation
   ====================================================== */

var questionBank = [
  {
    id: 1,
    difficulty: "easy",
    category: "basics",
    question: "Which of the following describes the data format MongoDB uses to store documents internally?",
    options: ["JSON", "BSON", "XML", "YAML"],
    answer: 1,
    explanation: "MongoDB stores data in BSON (Binary JSON), which extends JSON to include additional data types like Date and BinData.",
    hint: "Binary-encoded JSON."
  },
  {
    id: 2,
    difficulty: "medium",
    category: "crud",
    question: "In a 'find' query, which parameter is used to specify which fields should be returned in the result set?",
    options: ["Selection", "Projection", "Filtering", "Mapping"],
    answer: 1,
    explanation: "Projection is the second argument of the find() method and determines visibility of fields (1 for include, 0 for exclude).",
    hint: "Think of a movie projector displaying only part of a scene."
  },
  {
    id: 3,
    difficulty: "hard",
    category: "scenarios",
    question: "You need to update a document. If the document does not exist, you want MongoDB to create it. Which option should you set to true?",
    options: ["multi", "upsert", "createIfMissing", "insertOnly"],
    answer: 1,
    explanation: "Upsert (update + insert) tells MongoDB to create a new document if no document matches the query criteria.",
    hint: "A portmanteau of two CRUD operations."
  },
  {
    id: 4,
    difficulty: "medium",
    category: "indexing",
    question: "What is the primary benefit of creating an index on a collection?",
    options: [
      "It reduces the disk space used",
      "It improves query performance by avoiding a full collection scan",
      "It automatically encrypts the data",
      "It allows for larger document sizes"
    ],
    answer: 1,
    explanation: "Indexes allow MongoDB to process queries more efficiently by limiting the number of documents it must inspect.",
    hint: "Performance optimization."
  },
  {
    id: 5,
    difficulty: "hard",
    category: "aggregation",
    question: "Which aggregation stage is used to deconstruct an array field from the input documents to output a document for each element?",
    options: ["$group", "$match", "$unwind", "$project"],
    answer: 2,
    explanation: "$unwind flattens an array, creating a separate document for every item in that array.",
    hint: "Think of flattening a list."
  },
  {
    id: 6,
    difficulty: "easy",
    category: "basics",
    question: "By default, what is the unique identifier field for every MongoDB document?",
    options: ["_id", "id", "uuid", "key"],
    answer: 0,
    explanation: "The _id field is mandatory and serves as the primary key for documents in a collection.",
    hint: "Starts with an underscore."
  },
  {
    id: 7,
    difficulty: "medium",
    category: "schema_design",
    question: "Which design pattern is better for a 'One-to-Many' relationship where the 'Many' side has millions of documents?",
    options: ["Embedding", "Linking (Manual References)", "Extended Reference", "Schema-less"],
    answer: 1,
    explanation: "Embedding millions of sub-documents would exceed the 16MB document limit; linking is required for high-cardinality relationships.",
    hint: "Reference by ID."
  },
  {
    id: 8,
    difficulty: "hard",
    category: "crud",
    question: "Which update operator is used to add an element to an array only if the element does not already exist in the array?",
    options: ["$push", "$set", "$addToSet", "$inc"],
    answer: 2,
    explanation: "$addToSet treats the array like a mathematical set, ensuring uniqueness.",
    hint: "Add to a set."
  },
  {
    id: 9,
    difficulty: "medium",
    category: "indexing",
    question: "What is a 'Compound Index' in MongoDB?",
    options: [
      "An index on a single field",
      "An index that supports multiple fields in a specific order",
      "An index used only for text search",
      "An index shared across databases"
    ],
    answer: 1,
    explanation: "A compound index includes multiple fields, e.g., { last_name: 1, first_name: 1 }.",
    hint: "Multiple fields combined."
  },
  {
    id: 10,
    difficulty: "hard",
    category: "aggregation",
    question: "Which stage in the aggregation pipeline acts like a 'WHERE' clause in SQL?",
    options: ["$match", "$group", "$filter", "$find"],
    answer: 0,
    explanation: "$match filters documents to pass only those that match the specified condition to the next stage.",
    hint: "Find a match."
  },
  {
    id: 11,
    difficulty: "easy",
    category: "crud",
    question: "Which method is used to remove a single document that matches a filter?",
    options: ["delete()", "deleteOne()", "removeOne()", "drop()"],
    answer: 1,
    explanation: "deleteOne() removes the first document found that matches the filter criteria.",
    hint: "Modern delete syntax."
  },
  {
    id: 12,
    difficulty: "medium",
    category: "basics",
    question: "What is the maximum size allowed for a single BSON document in MongoDB?",
    options: ["4MB", "8MB", "16MB", "32MB"],
    answer: 2,
    explanation: "The 16MB limit ensures that a single document does not use excessive RAM or bandwidth during transmission.",
    hint: "Power of 2, greater than 10."
  },
  {
    id: 13,
    difficulty: "hard",
    category: "scenarios",
    question: "You want to find all products where the price is between 10 and 50. Which query is correct?",
    options: [
      "{ price: { $gt: 10, $lt: 50 } }",
      "{ price: { $between: [10, 50] } }",
      "{ $and: [ { price: 10 }, { price: 50 } ] }",
      "{ price: 10-50 }"
    ],
    answer: 0,
    explanation: "Using comparison operators $gt (greater than) and $lt (less than) within a single field object performs a range query.",
    hint: "Use comparison operators."
  },
  {
    id: 14,
    difficulty: "medium",
    category: "indexing",
    question: "Which index type should be used to support location-based queries like 'find nearby stores'?",
    options: ["Text Index", "Hashed Index", "2dsphere Index", "TTL Index"],
    answer: 2,
    explanation: "2dsphere indexes support queries that calculate geometries on an earth-like sphere.",
    hint: "Geospatial indexing."
  },
  {
    id: 15,
    difficulty: "hard",
    category: "schema_design",
    question: "What is the 'Document Growth' issue often associated with in MongoDB?",
    options: [
      "Indexes becoming too large",
      "Pushing elements into an embedded array repeatedly, causing the document to move on disk frequently (in older engines)",
      "Having too many collections",
      "Exceeding the 16MB limit"
    ],
    answer: 1,
    explanation: "When documents grow, MongoDB might need to reallocate space, though the WiredTiger engine handles this much better than MMapV1.",
    hint: "Growing arrays."
  },
  {
    id: 16,
    difficulty: "easy",
    category: "aggregation",
    question: "Which aggregation stage allows you to sort the resulting documents?",
    options: ["$sort", "$order", "$orderby", "$arrange"],
    answer: 0,
    explanation: "$sort takes a document specifying fields and direction (1 for ascending, -1 for descending).",
    hint: "Standard sorting name."
  },
  {
    id: 17,
    difficulty: "medium",
    category: "crud",
    question: "Which operator allows you to match any value in a specified array?",
    options: ["$all", "$in", "$exists", "$type"],
    answer: 1,
    explanation: "$in selects documents where the value of a field equals any value in the specified array.",
    hint: "Is the value 'in' this list?"
  },
  {
    id: 18,
    difficulty: "hard",
    category: "indexing",
    question: "What is a 'Multikey Index'?",
    options: [
      "An index on multiple fields",
      "An index where one of the indexed fields is an array",
      "An index that uses multiple keys for encryption",
      "An index on a sharded collection"
    ],
    answer: 1,
    explanation: "If you index an array field, MongoDB creates an index entry for every element in that array. This is a multikey index.",
    hint: "Indexing arrays."
  },
  {
    id: 19,
    difficulty: "medium",
    category: "scenarios",
    question: "How do you count the number of documents in a collection named 'orders'?",
    options: ["db.orders.length()", "db.orders.countDocuments({})", "db.orders.find().count()", "db.orders.total()"],
    answer: 1,
    explanation: "countDocuments() is the accurate, modern method for counting documents based on a filter.",
    hint: "Directly counting documents."
  },
  {
    id: 20,
    difficulty: "hard",
    category: "aggregation",
    question: "In the $group stage, which accumulator is used to calculate the average value of a numeric field?",
    options: ["$avg", "$mean", "$sum", "$median"],
    answer: 0,
    explanation: "$avg calculates the mathematical average of the specified expression.",
    hint: "Short for average."
  },
  {
    id: 21,
    difficulty: "easy",
    category: "basics",
    question: "Which command is used to switch to a different database in the Mongo Shell?",
    options: ["switch dbname", "use dbname", "connect dbname", "db.dbname"],
    answer: 1,
    explanation: "The 'use' command changes the current database context.",
    hint: "Three-letter word."
  },
  {
    id: 22,
    difficulty: "medium",
    category: "crud",
    question: "What does the $set operator do in an update command?",
    options: [
      "Replaces the entire document",
      "Updates the value of a specific field or adds it if it doesn't exist",
      "Deletes all other fields",
      "Sets the index for the document"
    ],
    answer: 1,
    explanation: "$set allows for partial updates, changing only the fields specified.",
    hint: "Assigning a value."
  },
  {
    id: 23,
    difficulty: "hard",
    category: "indexing",
    question: "What is a 'Partial Index'?",
    options: [
      "An index that only contains half the fields",
      "An index that only indexes documents that meet a specific filter expression",
      "An index that is currently being built",
      "An index on a subset of a string"
    ],
    answer: 1,
    explanation: "Partial indexes reduce storage requirements and performance costs by only indexing relevant documents.",
    hint: "Filtered index."
  },
  {
    id: 24,
    difficulty: "medium",
    category: "schema_design",
    question: "What is the 'Attribute Pattern' useful for?",
    options: [
      "Storing large files",
      "Handling documents with many similar fields where you need to search across them (e.g., product specifications)",
      "Reducing the number of collections",
      "Encrypting sensitive data"
    ],
    answer: 1,
    explanation: "By moving varying attributes into a key-value array, you can index a single field to cover many attributes.",
    hint: "Key-value pair arrays."
  },
  {
    id: 25,
    difficulty: "hard",
    category: "aggregation",
    question: "Which operator is used inside a $project stage to create a new field based on conditional logic?",
    options: ["$if", "$switch", "$cond", "$case"],
    answer: 2,
    explanation: "$cond is the ternary operator for aggregation (if-then-else).",
    hint: "Short for conditional."
  },
  {
    id: 26,
    difficulty: "easy",
    category: "basics",
    question: "What is a 'Collection' in MongoDB comparable to in a Relational Database (SQL)?",
    options: ["Row", "Database", "Table", "Column"],
    answer: 2,
    explanation: "A collection is a grouping of documents, much like a table is a grouping of rows.",
    hint: "Group of records."
  },
  {
    id: 27,
    difficulty: "medium",
    category: "crud",
    question: "Which operator matches documents where a field does NOT exist?",
    options: ["{ field: null }", "{ field: { $exists: false } }", "{ field: { $not: true } }", "{ field: { $missing: true } }"],
    answer: 1,
    explanation: "$exists: false filters for documents that lack the specified field.",
    hint: "Existence check."
  },
  {
    id: 28,
    difficulty: "hard",
    category: "indexing",
    question: "What happens to write performance when you add more indexes to a collection?",
    options: ["It improves", "It stays the same", "It decreases", "It depends on the RAM"],
    answer: 2,
    explanation: "Every write/update must also update all associated indexes, which adds overhead to write operations.",
    hint: "Trade-off for faster reads."
  },
  {
    id: 29,
    difficulty: "medium",
    category: "scenarios",
    question: "You want to return only the 'name' and 'email' fields, and exclude the '_id' field. Which projection is correct?",
    options: [
      "{ name: 1, email: 1 }",
      "{ name: 1, email: 1, _id: 0 }",
      "{ name: 1, email: 1, _id: 1 }",
      "{ name: true, email: true }"
    ],
    answer: 1,
    explanation: "By default, _id is always included. You must explicitly set it to 0 to exclude it.",
    hint: "Exclude the default ID."
  },
  {
    id: 30,
    difficulty: "hard",
    category: "aggregation",
    question: "How do you perform a 'Left Outer Join' between two collections in an aggregation pipeline?",
    options: ["$join", "$merge", "$lookup", "$unionWith"],
    answer: 2,
    explanation: "$lookup performs an equality match between a field from the input documents and a field from the joined collection.",
    hint: "Looking up data from another collection."
  },
  {
    id: 31,
    difficulty: "easy",
    category: "crud",
    question: "Which method is used to insert multiple documents at once?",
    options: ["insert()", "insertMany()", "insertAll()", "bulkInsert()"],
    answer: 1,
    explanation: "insertMany() takes an array of documents and inserts them efficiently.",
    hint: "Plural insertion."
  },
  {
    id: 32,
    difficulty: "medium",
    category: "basics",
    question: "Which of these is NOT a valid BSON data type?",
    options: ["Date", "ObjectId", "Float64", "Complex64"],
    answer: 3,
    explanation: "Complex64 (for complex numbers) is not a native BSON type; Date and ObjectId are.",
    hint: "Common in math, not BSON."
  },
  {
    id: 33,
    difficulty: "hard",
    category: "indexing",
    question: "What is a 'Covered Query'?",
    options: [
      "A query that uses an index",
      "A query where the index contains all the fields requested by the query and projection",
      "A query that is hidden from logs",
      "A query that affects all shards"
    ],
    answer: 1,
    explanation: "A covered query is very fast because MongoDB can return results entirely from the index without reading the actual documents.",
    hint: "Results are fully 'covered' by the index."
  },
  {
    id: 34,
    difficulty: "medium",
    category: "schema_design",
    question: "What does the 'Bucket Pattern' help optimize in MongoDB?",
    options: [
      "Image storage",
      "Time-series data (e.g., storing 1 minute of sensor data in one document)",
      "User passwords",
      "Full-text search"
    ],
    answer: 1,
    explanation: "Bucketing reduces the total number of documents and index entries by grouping related data together.",
    hint: "Time-series optimization."
  },
  {
    id: 35,
    difficulty: "hard",
    category: "aggregation",
    question: "Which aggregation stage is used to write the resulting documents of a pipeline into a new collection?",
    options: ["$write", "$save", "$out", "$to"],
    answer: 2,
    explanation: "$out must be the last stage and it creates a new collection or replaces an existing one with the results.",
    hint: "The 'output' stage."
  },
  {
    id: 36,
    difficulty: "easy",
    category: "crud",
    question: "Which operator is used to increment the value of a field by a specified amount?",
    options: ["$add", "$plus", "$inc", "$sum"],
    answer: 2,
    explanation: "$inc increments a field by a specified value (positive or negative).",
    hint: "Increment."
  },
  {
    id: 37,
    difficulty: "medium",
    category: "indexing",
    question: "What is a 'TTL Index' (Time-To-Live)?",
    options: [
      "An index that tracks the speed of queries",
      "An index that automatically removes documents after a certain amount of time",
      "An index that never expires",
      "An index used for real-time data"
    ],
    answer: 1,
    explanation: "TTL indexes are ideal for sessions or temporary logs that should be deleted automatically.",
    hint: "Self-expiring data."
  },
  {
    id: 38,
    difficulty: "hard",
    category: "scenarios",
    question: "A query uses 'sort()' on a field that is NOT indexed. What is the limit for in-memory sorting before MongoDB throws an error?",
    options: ["16MB", "32MB", "64MB", "100MB"],
    answer: 1,
    explanation: "MongoDB allows up to 32MB for internal sort operations. If it exceeds this, you must use an index or allowDiskUse.",
    hint: "Power of 2, small buffer."
  },
  {
    id: 39,
    difficulty: "medium",
    category: "schema_design",
    question: "In the 'Computed Pattern', where are calculations like 'total_price' performed?",
    options: [
      "In the aggregation pipeline every time",
      "In the application code at write-time, and the result is stored in the document",
      "By the BI Connector",
      "By the OS"
    ],
    answer: 1,
    explanation: "Storing the pre-calculated result improves read performance at the cost of slightly more complex writes.",
    hint: "Pre-calculate and store."
  },
  {
    id: 40,
    difficulty: "hard",
    category: "aggregation",
    question: "What is the purpose of the $limit stage?",
    options: [
      "To limit the memory usage",
      "To pass only the first N documents to the next stage",
      "To limit the number of fields",
      "To set a timeout"
    ],
    answer: 1,
    explanation: "$limit restricts the number of documents in the pipeline output.",
    hint: "Restrict document count."
  },
  {
    id: 41,
    difficulty: "easy",
    category: "basics",
    question: "What does 'Schema-less' mean in the context of MongoDB?",
    options: [
      "MongoDB does not support data types",
      "Documents in the same collection do not need to have the same fields",
      "There are no collections",
      "Data is stored in text files"
    ],
    answer: 1,
    explanation: "MongoDB has a dynamic schema, allowing documents to have different structures within one collection.",
    hint: "Flexible document structure."
  },
  {
    id: 42,
    difficulty: "medium",
    category: "crud",
    question: "Which operator matches documents where a field value is in a specified list?",
    options: ["$exists", "$or", "$in", "$nin"],
    answer: 2,
    explanation: "$in selects documents where the field's value is one of the items in the array.",
    hint: "Opposite of $nin."
  },
  {
    id: 43,
    difficulty: "hard",
    category: "indexing",
    question: "When creating a Compound Index { a: 1, b: 1 }, which of these queries can use the index effectively?",
    options: [
      "Only queries on { a }",
      "Only queries on { b }",
      "Queries on { a } OR queries on { a, b }",
      "Queries on { a, b, c }"
    ],
    answer: 2,
    explanation: "MongoDB can use a compound index for queries that include the index prefix (the first field).",
    hint: "Prefix rule."
  },
  {
    id: 44,
    difficulty: "medium",
    category: "scenarios",
    question: "How do you rename a field in all documents of a collection?",
    options: [
      "db.collection.updateMany({}, { $rename: { 'old': 'new' } })",
      "db.collection.updateMany({}, { $set: { 'new': '$old' } })",
      "db.collection.modify({ name: 'rename' })",
      "db.collection.renameField('old', 'new')"
    ],
    answer: 0,
    explanation: "The $rename operator updates the name of a field efficiently.",
    hint: "Rename operator."
  },
  {
    id: 45,
    difficulty: "hard",
    category: "aggregation",
    question: "What is the difference between $sum: 1 and $sum: '$field' in a $group stage?",
    options: [
      "There is no difference",
      "$sum: 1 counts the documents; $sum: '$field' adds up the numeric values of that field",
      "$sum: 1 is for integers only",
      "$sum: '$field' is faster"
    ],
    answer: 1,
    explanation: "The constant '1' increments the counter for each document, effectively counting them.",
    hint: "Counting vs. Summing."
  },
  {
    id: 46,
    difficulty: "easy",
    category: "basics",
    question: "Which company originally developed MongoDB?",
    options: ["Google", "Amazon", "10gen", "Oracle"],
    answer: 2,
    explanation: "MongoDB Inc. was originally founded as 10gen in 2007.",
    hint: "Original company name."
  },
  {
    id: 47,
    difficulty: "medium",
    category: "crud",
    question: "Which method returns a cursor instead of the data itself?",
    options: ["findOne()", "find()", "insertOne()", "aggregate() (if small)"],
    answer: 1,
    explanation: "find() returns a cursor which can then be iterated or modified with methods like limit() and sort().",
    hint: "Iterable pointer."
  },
  {
    id: 48,
    difficulty: "hard",
    category: "indexing",
    question: "What is a 'Sparse Index'?",
    options: [
      "An index that takes up very little space",
      "An index that only contains entries for documents that have the indexed field",
      "An index on a large collection",
      "An index that is rarely used"
    ],
    answer: 1,
    explanation: "Sparse indexes are useful for fields that are not present in every document, saving space.",
    hint: "Handles missing fields."
  },
  {
    id: 49,
    difficulty: "medium",
    category: "schema_design",
    question: "What is 'De-normalization' in MongoDB?",
    options: [
      "Splitting data into as many collections as possible",
      "Duplicating data across documents to improve read performance and avoid joins",
      "Encrypting the schema",
      "Validating the data types"
    ],
    answer: 1,
    explanation: "Denormalization is a core strategy in NoSQL to optimize for specific query patterns.",
    hint: "Data duplication for speed."
  },
  {
    id: 50,
    difficulty: "hard",
    category: "aggregation",
    question: "What does the $addFields stage do?",
    options: [
      "Adds a new field to the database",
      "Adds new fields to the documents passing through the pipeline",
      "Calculates the sum of two fields",
      "Inserts a new document"
    ],
    answer: 1,
    explanation: "$addFields is similar to $project but keeps all existing fields while adding new ones.",
    hint: "Add more data to the stream."
  }
];
/* ======================================================
   MONGODB CERTIFICATION QUESTION BANK (Batch 2: 51-100)
   Topics: Replication, Sharding, Transactions, & Security
   ====================================================== */

const mongodbBatch2 = [
  {
    id: 51,
    difficulty: "medium",
    category: "replication",
    question: "What is the minimum number of voting members required for a standard MongoDB Replica Set to maintain high availability?",
    options: ["2", "3", "5", "7"],
    answer: 1,
    explanation: "A minimum of 3 members ensures that a majority (2) can always be reached to elect a new Primary if one member fails.",
    hint: "The smallest odd number greater than 1."
  },
  {
    id: 52,
    difficulty: "hard",
    category: "sharding",
    question: "Which component in a Sharded Cluster is responsible for routing queries from the application to the correct shards?",
    options: ["mongod", "mongos", "Config Server", "Shard Key"],
    answer: 1,
    explanation: "The 'mongos' instance acts as a query router, providing an interface between the application and the sharded cluster.",
    hint: "The 'router' process."
  },
  {
    id: 53,
    difficulty: "medium",
    category: "replication",
    question: "In a Replica Set, which member is the only one that can normally accept write operations?",
    options: ["Secondary", "Arbiter", "Primary", "Hidden"],
    answer: 2,
    explanation: "By default, all writes go to the Primary. Secondaries replicate the Primary's oplog to maintain data consistency.",
    hint: "The lead member."
  },
  {
    id: 54,
    difficulty: "hard",
    category: "transactions",
    question: "Starting from MongoDB 4.0, which feature allows for multi-document ACID properties across a single replica set?",
    options: ["GridFS", "Multi-Document Transactions", "Aggregation Pipeline", "Change Streams"],
    answer: 1,
    explanation: "Multi-document transactions allow you to perform multiple operations that either all succeed or all fail together.",
    hint: "Standard ACID term."
  },
  {
    id: 55,
    difficulty: "medium",
    category: "security",
    question: "Which mechanism is used by MongoDB to provide role-based access control (RBAC)?",
    options: ["SSL/TLS", "Users and Roles", "IP Whitelisting", "Field Level Encryption"],
    answer: 1,
    explanation: "MongoDB uses roles (like readWrite, dbAdmin) assigned to users to determine what actions they can perform on specific databases.",
    hint: "Permissions system."
  },
  {
    id: 56,
    difficulty: "hard",
    category: "sharding",
    question: "What is a 'Shard Key'?",
    options: [
      "A password for the shard",
      "A field or fields that determine how data is distributed across shards",
      "An index on the config server",
      "A unique ID for the mongos process"
    ],
    answer: 1,
    explanation: "The shard key determines the distribution of the collection's documents among the cluster's shards.",
    hint: "Distribution criteria."
  },
  {
    id: 57,
    difficulty: "medium",
    category: "replication",
    question: "What is the role of an 'Arbiter' in a Replica Set?",
    options: [
      "To store a copy of the data",
      "To participate in elections but hold no data",
      "To route traffic to the Primary",
      "To perform data backups"
    ],
    answer: 1,
    explanation: "Arbiters are lightweight members that do not maintain a data set; they only exist to provide a vote in elections.",
    hint: "Voter with no data."
  },
  {
    id: 58,
    difficulty: "hard",
    category: "scenarios",
    question: "You want to ensure a write operation is successful on at least two members of a replica set before acknowledging it to the client. Which setting should you use?",
    options: ["{ w: 1 }", "{ w: 2 }", "{ j: true }", "{ w: 'majority' }"],
    answer: 1,
    explanation: "The 'w' option in Write Concern specifies the number of members that must acknowledge the write.",
    hint: "Write Concern count."
  },
  {
    id: 59,
    difficulty: "medium",
    category: "sharding",
    question: "What does 'Horizontal Scaling' mean in the context of MongoDB?",
    options: [
      "Adding more RAM to a single server",
      "Adding more servers to distribute the load",
      "Using larger hard drives",
      "Reducing the number of collections"
    ],
    answer: 1,
    explanation: "Horizontal scaling (sharding) involves adding more machines to a cluster to handle increased data and traffic.",
    hint: "Scaling 'out' rather than 'up'."
  },
  {
    id: 60,
    difficulty: "hard",
    category: "security",
    question: "Which encryption feature allows MongoDB to encrypt specific fields in a document before sending them over the network?",
    options: ["TLS/SSL", "Transparent Data Encryption (TDE)", "Client-Side Field Level Encryption (CSFLE)", "Disk Encryption"],
    answer: 2,
    explanation: "CSFLE ensures that sensitive data is encrypted on the client side and remains encrypted even to the database server.",
    hint: "Encryption at the field level."
  },
  {
    id: 61,
    difficulty: "medium",
    category: "replication",
    question: "What is the 'oplog' (Operations Log) used for?",
    options: [
      "Storing user passwords",
      "Logging all queries for debugging",
      "Recording all operations that modify the data, allowing Secondaries to stay in sync",
      "Storing aggregation results"
    ],
    answer: 2,
    explanation: "The oplog is a capped collection that keeps a rolling record of all data modifications.",
    hint: "Synchronization log."
  },
  {
    id: 62,
    difficulty: "hard",
    category: "sharding",
    question: "What are 'Config Servers' in a Sharded Cluster?",
    options: [
      "Servers that store the application code",
      "Servers that store metadata and configuration settings for the cluster",
      "Servers used for load balancing only",
      "Backup servers for the data shards"
    ],
    answer: 1,
    explanation: "Config servers store the mapping of data chunks to specific shards.",
    hint: "Metadata storage."
  },
  {
    id: 63,
    difficulty: "medium",
    category: "scenarios",
    question: "A developer wants to read data from a Secondary member to reduce load on the Primary. Which 'Read Preference' should they set?",
    options: ["primary", "secondary", "nearest", "primaryPreferred"],
    answer: 1,
    explanation: "The 'secondary' read preference routes all read operations to a secondary member of the replica set.",
    hint: "Targeting secondaries."
  },
  {
    id: 64,
    difficulty: "hard",
    category: "replication",
    question: "What happens during a 'Rollback' in a Replica Set?",
    options: [
      "The database deletes all data",
      "A former Primary reverts write operations that were not replicated to the new Primary before the old Primary went offline",
      "The cluster switches to a different version of MongoDB",
      "All indexes are rebuilt"
    ],
    answer: 1,
    explanation: "Rollbacks occur when a member rejoins a set after an election and finds it has writes that the current Primary does not have.",
    hint: "Reverting un-replicated writes."
  },
  {
    id: 65,
    difficulty: "medium",
    category: "security",
    question: "What is the purpose of 'SCRAM' (Salted Challenge Response Authentication Mechanism) in MongoDB?",
    options: ["To compress data", "To authenticate users securely using a username and password", "To encrypt files on disk", "To prevent DDoS attacks"],
    answer: 1,
    explanation: "SCRAM is the default authentication mechanism in MongoDB.",
    hint: "Password authentication."
  },
  {
    id: 66,
    difficulty: "hard",
    category: "sharding",
    question: "In a sharded cluster, what is a 'Jumbo Chunk'?",
    options: [
      "A chunk that is larger than the maximum size and cannot be split by MongoDB",
      "A very large shard server",
      "A collection with millions of indexes",
      "A type of high-speed network connection"
    ],
    answer: 0,
    explanation: "Jumbo chunks occur when a shard key has many documents with the same value, preventing the chunk from being split further.",
    hint: "Too big to split."
  },
  {
    id: 67,
    difficulty: "medium",
    category: "replication",
    question: "Which election priority value prevents a member from ever becoming the Primary?",
    options: ["priority: 1", "priority: 0", "priority: -1", "priority: null"],
    answer: 1,
    explanation: "A member with priority 0 can never be elected Primary, but it can still vote and hold data.",
    hint: "Zero priority."
  },
  {
    id: 68,
    difficulty: "hard",
    category: "scenarios",
    question: "Your application requires 'Strong Consistency'. Which Read Concern should you use to ensure you only read data that has been acknowledged by a majority of replica set members?",
    options: ["local", "available", "majority", "snapshot"],
    answer: 2,
    explanation: "readConcern: 'majority' ensures that the data being read is durable and won't be rolled back.",
    hint: "Majority rule."
  },
  {
    id: 69,
    difficulty: "medium",
    category: "sharding",
    question: "Which command is used to add a new shard to an existing Sharded Cluster?",
    options: ["db.addShard()", "sh.addShard()", "cluster.add()", "mongos.shard()"],
    answer: 1,
    explanation: "The sh.addShard() helper method is used in the mongo shell when connected to a mongos instance.",
    hint: "Sharding helper prefix."
  },
  {
    id: 70,
    difficulty: "hard",
    category: "transactions",
    question: "What is the maximum execution time for a multi-document transaction in MongoDB by default?",
    options: ["10 seconds", "60 seconds", "5 minutes", "No limit"],
    answer: 1,
    explanation: "By default, transactions have a 60-second limit to prevent them from blocking other operations for too long.",
    hint: "One minute."
  },
  {
    id: 71,
    difficulty: "medium",
    category: "security",
    question: "What does 'Auditing' allow a database administrator to do?",
    options: [
      "Improve query speed",
      "Track and log system activity and user actions (e.g., login attempts, schema changes)",
      "Automate backups",
      "Resize shards"
    ],
    answer: 1,
    explanation: "Auditing is used for security and compliance to monitor who is doing what in the database.",
    hint: "Activity tracking."
  },
  {
    id: 72,
    difficulty: "hard",
    category: "sharding",
    question: "What is 'Hashed Sharding' primarily used for?",
    options: [
      "To keep related data on the same shard",
      "To ensure an even distribution of data across shards regardless of the shard key's range",
      "To speed up range-based queries",
      "To encrypt the shard key"
    ],
    answer: 1,
    explanation: "Hashed sharding computes a hash of the shard key to distribute data randomly but evenly.",
    hint: "Even distribution."
  },
  {
    id: 73,
    difficulty: "medium",
    category: "replication",
    question: "What is a 'Hidden Member' in a Replica Set?",
    options: [
      "A member that is not part of the set",
      "A member that holds data but is invisible to client applications and cannot become Primary",
      "A member that doesn't use any RAM",
      "A member used only for testing"
    ],
    answer: 1,
    explanation: "Hidden members are often used for reporting or backups to avoid taking resources away from the Primary.",
    hint: "Invisible data holder."
  },
  {
    id: 74,
    difficulty: "hard",
    category: "sharding",
    question: "What is the 'Balancer' in MongoDB Sharding?",
    options: [
      "A person who monitors the cluster",
      "A background process that migrates chunks from over-utilized shards to under-utilized shards",
      "A tool to balance the CPU load",
      "A hardware load balancer"
    ],
    answer: 1,
    explanation: "The balancer ensures that data is distributed evenly across all shards by moving 'chunks' of data.",
    hint: "Automatic chunk migrator."
  },
  {
    id: 75,
    difficulty: "medium",
    category: "security",
    question: "To enable internal authentication between members of a Replica Set, which type of file is commonly used?",
    options: ["JSON file", "Keyfile", "Log file", "Config file"],
    answer: 1,
    explanation: "A keyfile acts as a shared secret that all members of the set use to authenticate each other.",
    hint: "Shared key file."
  },
  {
    id: 76,
    difficulty: "hard",
    category: "replication",
    question: "What is the 'Majority' in a replica set of 5 members?",
    options: ["2", "3", "4", "5"],
    answer: 1,
    explanation: "Majority is calculated as (n/2) + 1, rounded down. For 5 members, it is 3.",
    hint: "More than half."
  },
  {
    id: 77,
    difficulty: "medium",
    category: "scenarios",
    question: "You want to perform a read that reflects the most recent data available, even if it might be rolled back. Which Read Concern should you use?",
    options: ["local", "majority", "linearizable", "snapshot"],
    answer: 0,
    explanation: "readConcern: 'local' returns the most recent data on the specific member being queried, without ensuring it's durable across the set.",
    hint: "Default read concern."
  },
  {
    id: 78,
    difficulty: "hard",
    category: "sharding",
    question: "Why should you avoid using a monotonically increasing shard key (like a Timestamp or ObjectId) in a high-write environment?",
    options: [
      "It makes the index too large",
      "It creates 'hotspots' where all new writes go to a single shard",
      "It is not allowed in MongoDB",
      "It slows down the mongos process"
    ],
    answer: 1,
    explanation: "Increasing keys mean all new data falls into the same range, which maps to the same shard, negating the benefits of parallel writes.",
    hint: "Hotspotting."
  },
  {
    id: 79,
    difficulty: "medium",
    category: "replication",
    question: "In the event of a Primary failure, how long does it typically take for a Replica Set to elect a new Primary?",
    options: ["Less than 1 second", "10-12 seconds (default)", "1 minute", "5 minutes"],
    answer: 1,
    explanation: "Failover is generally fast, usually completing in about 10 seconds under default heartbeat settings.",
    hint: "Roughly ten seconds."
  },
  {
    id: 80,
    difficulty: "hard",
    category: "sharding",
    question: "Which command must be run before you can shard a specific collection?",
    options: ["sh.shardCollection()", "sh.enableSharding() on the database", "db.createIndex() on the shard key", "All of the above"],
    answer: 3,
    explanation: "To shard a collection, you must first enable sharding on the database, ensure an index exists on the shard key, and then run shardCollection.",
    hint: "Multiple prerequisites."
  },
  {
    id: 81,
    difficulty: "medium",
    category: "security",
    question: "What is 'IP Whitelisting' in MongoDB Atlas?",
    options: [
      "A list of allowed usernames",
      "A list of specific IP addresses or ranges that are permitted to connect to the cluster",
      "A way to color-code IP addresses",
      "A DNS setting"
    ],
    answer: 1,
    explanation: "It is a network security layer that prevents any unauthorized IP from even attempting to connect.",
    hint: "Network access list."
  },
  {
    id: 82,
    difficulty: "hard",
    category: "replication",
    question: "Which Replica Set member state indicates that a member is currently performing an initial sync?",
    options: ["SECONDARY", "RECOVERING", "STARTUP2", "DOWN"],
    answer: 2,
    explanation: "STARTUP2 is the state during which a member copies data from an existing member to catch up.",
    hint: "The phase after STARTUP."
  },
  {
    id: 83,
    difficulty: "medium",
    category: "scenarios",
    question: "Your application needs to ensure that a write is written to the on-disk journal before returning. Which Write Concern option is required?",
    options: ["{ w: 1 }", "{ j: true }", "{ f: true }", "{ sync: true }"],
    answer: 1,
    explanation: "The 'j' (journal) option ensures that the operation is recorded in the journal for durability against crashes.",
    hint: "J stands for Journal."
  },
  {
    id: 84,
    difficulty: "hard",
    category: "sharding",
    question: "What is 'Ranged Sharding'?",
    options: [
      "Sharding based on the size of the document",
      "Sharding that divides data into ranges based on shard key values",
      "Sharding that only works for numbers",
      "Sharding that uses a random number generator"
    ],
    answer: 1,
    explanation: "Ranged sharding is efficient for range-based queries on the shard key but can lead to uneven distribution if the key is not chosen well.",
    hint: "Value-based ranges."
  },
  {
    id: 85,
    difficulty: "medium",
    category: "transactions",
    question: "Can transactions be used in a standalone (single-instance) MongoDB server?",
    options: ["Yes", "No", "Only if it uses WiredTiger", "Only in development mode"],
    answer: 1,
    explanation: "Transactions require the oplog mechanism, which is only present in Replica Sets or Sharded Clusters.",
    hint: "Depends on replication features."
  },
  {
    id: 86,
    difficulty: "hard",
    category: "sharding",
    question: "In a sharded cluster, where is the information about 'chunks' stored?",
    options: ["On the application server", "On the shards", "On the Config Servers", "In the mongos cache only"],
    answer: 2,
    explanation: "Config servers are the source of truth for all metadata regarding chunk locations.",
    hint: "Metadata storage."
  },
  {
    id: 87,
    difficulty: "medium",
    category: "replication",
    question: "What is 'Replication Lag'?",
    options: [
      "The time it takes to boot a server",
      "The delay between a write on the Primary and that write being applied to a Secondary",
      "The time it takes to run an aggregation",
      "The network latency between client and server"
    ],
    answer: 1,
    explanation: "Lag can occur due to network issues or if the Secondary is under heavy load and cannot keep up with the Primary's oplog.",
    hint: "Sync delay."
  },
  {
    id: 88,
    difficulty: "hard",
    category: "scenarios",
    question: "Which Read Preference is best if you want the lowest latency and don't care about reading stale data?",
    options: ["primary", "secondary", "nearest", "primaryPreferred"],
    answer: 2,
    explanation: "'nearest' reads from the member with the lowest network latency relative to the client.",
    hint: "Proximity based."
  },
  {
    id: 89,
    difficulty: "medium",
    category: "security",
    question: "What does 'TLS' stand for in the context of MongoDB network security?",
    options: ["Transport Layer Security", "Total Log Storage", "Traffic Loading System", "Top Level Security"],
    answer: 0,
    explanation: "TLS (successor to SSL) encrypts the connection between the client and the database.",
    hint: "Encryption protocol."
  },
  {
    id: 90,
    difficulty: "hard",
    category: "sharding",
    question: "What is a 'Broadcast Query' (Scatter-Gather)?",
    options: [
      "A query that is sent to every shard because the shard key is not included in the filter",
      "A query that is sent to the primary only",
      "A very fast query",
      "A query that returns no results"
    ],
    answer: 0,
    explanation: "Broadcast queries are less efficient than targeted queries because mongos must wait for all shards to respond.",
    hint: "Hitting every shard."
  },
  {
    id: 91,
    difficulty: "medium",
    category: "replication",
    question: "Which replica set member state is a member in after it has been heartbeat-timed out by others?",
    options: ["SECONDARY", "RECOVERING", "UNKNOWN", "DOWN"],
    answer: 3,
    explanation: "When a member is unreachable, the others mark it as DOWN.",
    hint: "Offline state."
  },
  {
    id: 92,
    difficulty: "hard",
    category: "scenarios",
    question: "You need to perform an atomic update that changes a status and returns the NEW version of the document. Which method do you use?",
    options: ["updateOne()", "findAndModify() / findOneAndUpdate()", "save()", "replaceOne()"],
    answer: 1,
    explanation: "findOneAndUpdate() allows you to return the modified document by setting the { returnNewDocument: true } option.",
    hint: "Find, Update, and Return."
  },
  {
    id: 93,
    difficulty: "medium",
    category: "security",
    question: "What is the 'root' role in MongoDB?",
    options: [
      "A role that allows read access to one DB",
      "A superuser role that provides complete access to all resources and actions in the system",
      "A role for managing indexes only",
      "A role for web developers only"
    ],
    answer: 1,
    explanation: "The root role is the most powerful role in MongoDB security.",
    hint: "Superuser."
  },
  {
    id: 94,
    difficulty: "hard",
    category: "sharding",
    question: "What is 'Zone Sharding' (formerly Tag-Aware Sharding)?",
    options: [
      "Sharding based on the time zone",
      "Associating specific shard key ranges with specific shards to control data placement (e.g., by geography)",
      "Sharding that only works in one data center",
      "A way to shard encrypted data"
    ],
    answer: 1,
    explanation: "Zones allow you to keep European user data on European shards and US data on US shards for compliance or performance.",
    hint: "Geographic data placement."
  },
  {
    id: 95,
    difficulty: "medium",
    category: "replication",
    question: "How do you check the status of a Replica Set in the mongo shell?",
    options: ["rs.status()", "rs.check()", "db.replicationStatus()", "rs.info()"],
    answer: 0,
    explanation: "rs.status() provides detailed information about every member of the set and their current state.",
    hint: "Replication status helper."
  },
  {
    id: 96,
    difficulty: "hard",
    category: "sharding",
    question: "What is the default chunk size in MongoDB sharding?",
    options: ["16MB", "64MB", "128MB", "1GB"],
    answer: 1,
    explanation: "64MB is the default size at which MongoDB will split a chunk.",
    hint: "Power of 2, greater than 32."
  },
  {
    id: 97,
    difficulty: "medium",
    category: "security",
    question: "Can you change the password of an existing user in MongoDB?",
    options: ["Yes, using db.changeUserPassword()", "No, you must delete and recreate them", "Only through the config file", "Only in Atlas"],
    answer: 0,
    explanation: "MongoDB provides helper methods to manage user credentials without deleting the account.",
    hint: "Standard change method."
  },
  {
    id: 98,
    difficulty: "hard",
    category: "scenarios",
    question: "A Replica Set has 3 members. One member goes offline. Can the remaining 2 members elect a new Primary?",
    options: [
      "No, because you need all members",
      "Yes, because 2 is a majority of 3",
      "Only if one of them is an Arbiter",
      "Only if the Primary is still online"
    ],
    answer: 1,
    explanation: "As long as more than 50% of the voting members are reachable, an election can be held and a Primary maintained.",
    hint: "Majority rule applied."
  },
  {
    id: 99,
    difficulty: "medium",
    category: "sharding",
    question: "What is a 'Targeted Query' in a sharded cluster?",
    options: [
      "A query that includes the shard key, allowing mongos to send it to only the relevant shard",
      "A query aimed at the config server",
      "A query that uses a specific index",
      "A query that only returns one document"
    ],
    answer: 0,
    explanation: "Targeted queries are much more scalable than broadcast queries as they limit work to a single shard.",
    hint: "Specific shard routing."
  },
  {
    id: 100,
    difficulty: "hard",
    category: "replication",
    question: "What is the purpose of the 'heartbeat' in a Replica Set?",
    options: [
      "To check the CPU usage",
      "To allow members to monitor each other's availability and trigger elections if the Primary fails",
      "To sync data",
      "To log user activity"
    ],
    answer: 1,
    explanation: "Heartbeats are sent every 2 seconds by default to ensure the health of the cluster.",
    hint: "Health check pulses."
  }
];

// Append to master database
questionBank.push(...mongodbBatch2);

/* ======================================================
   MONGODB CERTIFICATION QUESTION BANK (Batch 3: 101-150)
   Topics: Performance Tuning, WiredTiger, & Backup
   ====================================================== */

const mongodbBatch3 = [
  {
    id: 101,
    difficulty: "hard",
    category: "performance",
    question: "In the output of an 'explain()' plan, what does the 'COLLSCAN' winning plan indicate?",
    options: [
      "The query used a collection-level index",
      "MongoDB had to perform a full collection scan because no suitable index was found",
      "The query was successful and cached",
      "The collection is sharded"
    ],
    answer: 1,
    explanation: "COLLSCAN stands for Collection Scan. It is generally inefficient for large datasets as MongoDB must inspect every document.",
    hint: "No index was used."
  },
  {
    id: 102,
    difficulty: "medium",
    category: "storage",
    question: "Which storage engine has been the default for MongoDB since version 3.2?",
    options: ["MMAPv1", "WiredTiger", "In-Memory", "GridFS"],
    answer: 1,
    explanation: "WiredTiger provides document-level concurrency control and native compression.",
    hint: "The fierce feline engine."
  },
  {
    id: 103,
    difficulty: "hard",
    category: "aggregation",
    question: "When using the '$lookup' stage, what is the 'correlated subquery' feature used for (introduced in 3.6+)?",
    options: [
      "To join more than two collections at once",
      "To perform complex join conditions and filter the joined collection before returning results",
      "To speed up simple ID lookups",
      "To encrypt joined data"
    ],
    answer: 1,
    explanation: "Using the 'let' and 'pipeline' syntax within $lookup allows for much more flexible joins than basic equality.",
    hint: "Pipeline inside a lookup."
  },
  {
    id: 104,
    difficulty: "medium",
    category: "backup",
    question: "Which utility is used to create a binary export of the contents of a MongoDB database?",
    options: ["mongoexport", "mongodump", "mongosync", "mongorestore"],
    answer: 1,
    explanation: "mongodump creates BSON files which are a binary representation of the database, suitable for backups.",
    hint: "Dumping the data."
  },
  {
    id: 105,
    difficulty: "hard",
    category: "performance",
    question: "What does the 'executionStats' mode in 'explain()' provide that 'queryPlanner' mode does not?",
    options: [
      "The list of all indexes",
      "Actual performance metrics like time taken and number of documents examined",
      "The suggested shard key",
      "The database version"
    ],
    answer: 1,
    explanation: "executionStats actually runs the query and reports on the real-world performance metrics.",
    hint: "Statistics of the execution."
  },
  {
    id: 106,
    difficulty: "medium",
    category: "storage",
    question: "WiredTiger uses 'Checkpoints' to persist data to disk. By default, how often do these occur?",
    options: ["Every 10 seconds", "Every 60 seconds", "Every 5 minutes", "Every hour"],
    answer: 1,
    explanation: "WiredTiger creates a checkpoint every 60 seconds or after 2GB of data has been written.",
    hint: "One minute interval."
  },
  {
    id: 107,
    difficulty: "hard",
    category: "scenarios",
    question: "Your aggregation pipeline is hitting the 100MB RAM limit for a single stage. What is the best way to handle this for large datasets?",
    options: [
      "Add more RAM to the server",
      "Use the { allowDiskUse: true } option",
      "Split the collection into two",
      "Index the $group stage"
    ],
    answer: 1,
    explanation: "allowDiskUse allows the aggregation stages to write temporary data to the _tmp directory on disk.",
    hint: "Use the hard drive."
  },
  {
    id: 108,
    difficulty: "medium",
    category: "performance",
    question: "What is the 'Query Profiler' in MongoDB?",
    options: [
      "A tool to write queries for you",
      "A database feature that logs information about queries that take longer than a certain threshold",
      "A UI for browsing data",
      "A security scanner"
    ],
    answer: 1,
    explanation: "The profiler captures data about operations that exceed the 'slowMS' threshold (default 100ms).",
    hint: "Logs slow operations."
  },
  {
    id: 109,
    difficulty: "hard",
    category: "storage",
    question: "What is 'Document-Level Concurrency'?",
    options: [
      "Allowing multiple users to edit the same field",
      "The ability for multiple write operations to happen on different documents in the same collection simultaneously",
      "Running MongoDB on multiple CPUs",
      "Automatic data replication"
    ],
    answer: 1,
    explanation: "WiredTiger uses optimistic concurrency control, locking only at the document level rather than the whole collection.",
    hint: "Granular locking."
  },
  {
    id: 110,
    difficulty: "medium",
    category: "aggregation",
    question: "Which aggregation stage allows you to rename fields and add new calculated fields to the document stream?",
    options: ["$group", "$match", "$project", "$filter"],
    answer: 2,
    explanation: "$project can reshape documents, creating new fields or suppressing old ones.",
    hint: "Projection/Reshaping."
  },
  {
    id: 111,
    difficulty: "hard",
    category: "scenarios",
    question: "You want to find the top 5 most expensive products. Which combination of stages is correct?",
    options: [
      "$sort by price (1), then $limit (5)",
      "$sort by price (-1), then $limit (5)",
      "$limit (5), then $sort by price (-1)",
      "$match price: 'high', then $limit (5)"
    ],
    answer: 1,
    explanation: "You must sort in descending order (-1) first to get the highest values, then limit the result set.",
    hint: "Sort descending then limit."
  },
  {
    id: 112,
    difficulty: "medium",
    category: "backup",
    question: "When using 'mongorestore', what does the '--drop' flag do?",
    options: [
      "Deletes the backup file after restore",
      "Drops the target collections before restoring from the backup",
      "Ignores errors during restore",
      "Drops the indexes only"
    ],
    answer: 1,
    explanation: "The --drop flag ensures you have a clean collection matching the backup exactly by removing existing data first.",
    hint: "Clean slate restore."
  },
  {
    id: 113,
    difficulty: "hard",
    category: "performance",
    question: "What does an 'IXSCAN' stage in an explain plan mean?",
    options: [
      "Index Scan: MongoDB is using an index to find the documents",
      "Internal Scan: An error occurred",
      "Initial Scan: The first time a query is run",
      "Implicit Scan: Scanning without a filter"
    ],
    answer: 0,
    explanation: "IXSCAN is preferred over COLLSCAN as it indicates an index is being leveraged.",
    hint: "Index-based search."
  },
  {
    id: 114,
    difficulty: "medium",
    category: "storage",
    question: "Which feature of WiredTiger helps reduce the storage footprint on disk?",
    options: ["Journaling", "Snappy/Zlib Compression", "Checkpoints", "Read Tickets"],
    answer: 1,
    explanation: "WiredTiger supports block compression (Snappy is the default) to reduce disk usage.",
    hint: "Making files smaller."
  },
  {
    id: 115,
    difficulty: "hard",
    category: "aggregation",
    question: "What is the result of a '$group' stage with an '_id: null'?",
    options: [
      "It returns an error",
      "It groups all input documents into a single document to perform global calculations",
      "It deletes all documents",
      "It groups documents by their original _id"
    ],
    answer: 1,
    explanation: "Setting _id to null creates one single group for the entire collection, useful for calculating grand totals.",
    hint: "One group for everything."
  },
  {
    id: 116,
    difficulty: "easy",
    category: "backup",
    question: "Which tool is best for exporting data in a human-readable format like JSON or CSV?",
    options: ["mongodump", "mongoexport", "mongorestore", "bsondump"],
    answer: 1,
    explanation: "mongoexport is intended for interoperability with other systems via JSON or CSV.",
    hint: "Export to text."
  },
  {
    id: 117,
    difficulty: "hard",
    category: "performance",
    question: "What is a 'Working Set' in MongoDB?",
    options: [
      "The set of all developers working on the DB",
      "The portion of data and indexes that the application accesses most frequently",
      "The current list of active transactions",
      "The amount of CPU used"
    ],
    answer: 1,
    explanation: "Ideally, the Working Set should fit entirely in RAM to avoid frequent and slow disk I/O.",
    hint: "Frequently used data in RAM."
  },
  {
    id: 118,
    difficulty: "medium",
    category: "storage",
    question: "What is 'Journaling' in MongoDB?",
    options: [
      "Writing daily logs of users",
      "A write-ahead log that helps recover the database in the event of a crash",
      "A way to organize collections",
      "An encryption method"
    ],
    answer: 1,
    explanation: "The journal ensures that MongoDB can recover writes between checkpoints if the process terminates unexpectedly.",
    hint: "Crash recovery log."
  },
  {
    id: 119,
    difficulty: "hard",
    category: "aggregation",
    question: "Which aggregation operator is used to calculate the size of an array field?",
    options: ["$size", "$length", "$count", "$arraySize"],
    answer: 0,
    explanation: "$size returns the number of elements in an array.",
    hint: "Array property."
  },
  {
    id: 120,
    difficulty: "medium",
    category: "scenarios",
    question: "You need to update a field 'stock' by adding 5 units to all items in the 'electronics' category. Which query is most efficient?",
    options: [
      "db.items.updateMany({ category: 'electronics' }, { $inc: { stock: 5 } })",
      "db.items.updateMany({ category: 'electronics' }, { $set: { stock: stock + 5 } })",
      "db.items.find({ category: 'electronics' }).forEach(...) ",
      "db.items.updateOne({ category: 'electronics' }, { $inc: { stock: 5 } })"
    ],
    answer: 0,
    explanation: "updateMany with $inc is an atomic, server-side operation that avoids the round-trip overhead of client-side loops.",
    hint: "Bulk atomic increment."
  },
  {
    id: 121,
    difficulty: "hard",
    category: "performance",
    question: "What is the 'covered by index' status in an explain plan?",
    options: [
      "When the index is larger than the data",
      "When MongoDB can fulfill the query and projection using only the index, without looking at the document",
      "When an index exists but isn't used",
      "When the index is encrypted"
    ],
    answer: 1,
    explanation: "Covered queries are highly performant because they bypass the need to fetch documents from disk (FETCH stage).",
    hint: "Zero FETCH stage."
  },
  {
    id: 122,
    difficulty: "medium",
    category: "storage",
    question: "How does WiredTiger handle disk space when documents are deleted?",
    options: [
      "It immediately shrinks the file on disk",
      "It keeps the space and marks it as 'available' for future new documents (internal reuse)",
      "It deletes the collection file",
      "It requires a server restart"
    ],
    answer: 1,
    explanation: "Deleted space is reused internally. To shrink the physical file size, you usually need to run the 'compact' command or resync.",
    hint: "Internal fragmentation reuse."
  },
  {
    id: 123,
    difficulty: "hard",
    category: "aggregation",
    question: "In a '$lookup' stage, what happens if the 'as' field already exists in the input document?",
    options: [
      "MongoDB throws an error",
      "The existing field is overwritten with the joined data",
      "The joined data is appended to the existing field",
      "The query is ignored"
    ],
    answer: 1,
    explanation: "The 'as' field specifies the output field name; it will overwrite any existing field of the same name.",
    hint: "Overwriting behavior."
  },
  {
    id: 124,
    difficulty: "easy",
    category: "basics",
    question: "Which shell command shows the current storage statistics for a specific collection?",
    options: ["db.collection.stats()", "db.collection.info()", "db.collection.size()", "db.printStats()"],
    answer: 0,
    explanation: "stats() provides data on count, size, index sizes, and storage engine specifics.",
    hint: "Collection statistics."
  },
  {
    id: 125,
    difficulty: "hard",
    category: "performance",
    question: "In an explain plan, what does the 'SORT' stage (without an index) indicate?",
    options: [
      "A very fast operation",
      "An in-memory sort which might be a performance bottleneck",
      "A sort using a compound index",
      "An encrypted sort"
    ],
    answer: 1,
    explanation: "If you see a SORT stage without an IXSCAN prefix, MongoDB is doing the work in RAM (subject to the 32MB limit).",
    hint: "Manual sorting by the engine."
  },
  {
    id: 126,
    difficulty: "medium",
    category: "scenarios",
    question: "You need to export data from a MongoDB Atlas cluster to an on-premise server. Which tool is most reliable for large datasets?",
    options: ["mongoexport", "mongodump", "Copy-paste JSON", "Change Streams"],
    answer: 1,
    explanation: "mongodump is more efficient for large data and maintains BSON types accurately.",
    hint: "Binary dump."
  },
  {
    id: 127,
    difficulty: "hard",
    category: "storage",
    question: "What is the purpose of the 'WiredTiger.wt' file?",
    options: [
      "It stores the user passwords",
      "It is the metadata file that tracks all other tables and files in the data directory",
      "It is a log file",
      "It stores the actual document data"
    ],
    answer: 1,
    explanation: "It is the 'master' metadata file for the WiredTiger storage engine.",
    hint: "WiredTiger metadata."
  },
  {
    id: 128,
    difficulty: "medium",
    category: "aggregation",
    question: "Which stage is typically placed first in an aggregation pipeline to optimize performance?",
    options: ["$group", "$match", "$sort", "$unwind"],
    answer: 1,
    explanation: "Filtering early with $match reduces the number of documents the subsequent (and potentially heavier) stages must process.",
    hint: "Filter early."
  },
  {
    id: 129,
    difficulty: "hard",
    category: "performance",
    question: "What is 'Index Intersection'?",
    options: [
      "When two indexes overlap and cause an error",
      "When MongoDB uses two different indexes to fulfill a single query",
      "When you delete an index",
      "A type of sharding"
    ],
    answer: 1,
    explanation: "MongoDB can sometimes combine results from two indexes, though a single compound index is almost always faster.",
    hint: "Using multiple indexes for one query."
  },
  {
    id: 130,
    difficulty: "medium",
    category: "backup",
    question: "Can you run 'mongodump' on a live production system?",
    options: [
      "No, it locks the database",
      "Yes, it uses non-blocking queries but may impact performance due to I/O",
      "Only if you stop the Primary",
      "Only on Secondaries"
    ],
    answer: 1,
    explanation: "It is safe to run, but on very high-traffic systems, it is often better to run it against a Secondary to avoid impacting the Primary.",
    hint: "Non-blocking but resource intensive."
  },
  {
    id: 131,
    difficulty: "hard",
    category: "aggregation",
    question: "Which operator is used to merge two or more arrays together into one array?",
    options: ["$push", "$concatArrays", "$add", "$merge"],
    answer: 1,
    explanation: "$concatArrays takes multiple arrays and returns a single concatenated array.",
    hint: "Concatenate."
  },
  {
    id: 132,
    difficulty: "medium",
    category: "scenarios",
    question: "How do you identify which index is being used by a specific find() query?",
    options: [
      "db.collection.find().explain()",
      "db.collection.getIndexes()",
      "db.currentOp()",
      "Check the log file"
    ],
    answer: 0,
    explanation: "explain() reveals the query plan, including the 'inputStage' which shows the index name.",
    hint: "Query explanation."
  },
  {
    id: 133,
    difficulty: "hard",
    category: "storage",
    question: "What is 'Read Ticket' and 'Write Ticket' in WiredTiger?",
    options: [
      "A priority system for users",
      "The number of concurrent operations allowed by the storage engine",
      "Tickets for MongoDB customer support",
      "A type of encryption key"
    ],
    answer: 1,
    explanation: "WiredTiger uses tickets to limit the number of concurrent threads entering the storage engine to prevent resource exhaustion.",
    hint: "Concurrency permits."
  },
  {
    id: 134,
    difficulty: "easy",
    category: "crud",
    question: "What is the purpose of '$natural: 1' in a sort operation?",
    options: [
      "Sort by date",
      "Sort by the order the documents are stored on disk",
      "Sort alphabetically",
      "Sort by the _id"
    ],
    answer: 1,
    explanation: "Natural sort follows the physical order of the documents in the data files.",
    hint: "Physical disk order."
  },
  {
    id: 135,
    difficulty: "hard",
    category: "performance",
    question: "Which system collection stores the information captured by the Database Profiler?",
    options: ["system.profile", "system.log", "admin.profile", "local.oplog"],
    answer: 0,
    explanation: "Each database has its own system.profile collection if profiling is enabled.",
    hint: "System profile."
  },
  {
    id: 136,
    difficulty: "medium",
    category: "aggregation",
    question: "Which stage is used to create a sequence of numbers (e.g., for pagination)?",
    options: ["$range", "$index", "$skip", "$limit"],
    answer: 2,
    explanation: "$skip (usually with $limit and $sort) is used to bypass a specific number of documents.",
    hint: "Skip documents."
  },
  {
    id: 137,
    difficulty: "hard",
    category: "scenarios",
    question: "You want to perform a full-text search. Which type of index MUST be created first?",
    options: ["Standard index on the field", "Text index", "Hashed index", "2dsphere index"],
    answer: 1,
    explanation: "You must create a 'text' index to use the $text operator for search queries.",
    hint: "Required for search."
  },
  {
    id: 138,
    difficulty: "medium",
    category: "storage",
    question: "What is the WiredTiger 'Cache Size' default setting?",
    options: [
      "512 MB",
      "50% of (RAM - 1 GB), or 256 MB",
      "90% of RAM",
      "16 MB"
    ],
    answer: 1,
    explanation: "The default is generally half of the system RAM minus 1GB, ensuring there is room for the OS and other processes.",
    hint: "Roughly half of free RAM."
  },
  {
    id: 139,
    difficulty: "hard",
    category: "performance",
    question: "In explain plans, what does the 'PROJECTION_REWRITE' stage do?",
    options: [
      "Changes the field names",
      "Optimizes the query to return only the fields needed for an index cover",
      "Encrypts the output",
      "Deletes hidden fields"
    ],
    answer: 1,
    explanation: "The engine attempts to optimize projections to increase the chances of a covered query.",
    hint: "Optimizing the return fields."
  },
  {
    id: 140,
    difficulty: "easy",
    category: "backup",
    question: "Can 'mongoimport' import data from a SQL database directly?",
    options: [
      "Yes",
      "No, it only supports JSON, CSV, and TSV",
      "Only if it's MySQL",
      "Only through a plugin"
    ],
    answer: 1,
    explanation: "mongoimport is limited to specific flat file formats. SQL data must be exported to CSV first.",
    hint: "Flat files only."
  },
  {
    id: 141,
    difficulty: "hard",
    category: "aggregation",
    question: "Which stage allows you to filter the elements of an array during the projection?",
    options: ["$filter (as an operator)", "$match", "$unwind", "$pull"],
    answer: 0,
    explanation: "The $filter operator (used within $project or $addFields) selects a subset of an array based on a condition.",
    hint: "Array filtering operator."
  },
  {
    id: 142,
    difficulty: "medium",
    category: "scenarios",
    question: "You need to store files larger than 16MB in MongoDB. Which specification should you use?",
    options: ["BSON Long", "GridFS", "Bucket Pattern", "Manual Linking"],
    answer: 1,
    explanation: "GridFS splits large files into smaller chunks (usually 255KB) and stores them in two collections.",
    hint: "File system for MongoDB."
  },
  {
    id: 143,
    difficulty: "hard",
    category: "performance",
    question: "How does the 'hint()' method affect a query?",
    options: [
      "It gives the developer a hint on how to write code",
      "It forces MongoDB to use a specific index, overriding the query optimizer",
      "It makes the query return results faster",
      "It marks the query for deletion"
    ],
    answer: 1,
    explanation: "While usually unnecessary, hint() is used in edge cases where the query planner chooses a sub-optimal index.",
    hint: "Force an index."
  },
  {
    id: 144,
    difficulty: "medium",
    category: "storage",
    question: "What is 'Checkpointing' in the context of data durability?",
    options: [
      "A way to verify user login",
      "The process of flushing all data currently in the WiredTiger cache to the data files on disk",
      "Checking the network speed",
      "Calculating the checksum of a file"
    ],
    answer: 1,
    explanation: "Checkpoints create a consistent point-in-time state for the data files.",
    hint: "Flushing cache to disk."
  },
  {
    id: 145,
    difficulty: "hard",
    category: "aggregation",
    question: "What is the purpose of the '$facet' stage?",
    options: [
      "To change the appearance of the shell",
      "To perform multiple aggregation pipelines within a single stage on the same set of input documents",
      "To join three collections",
      "To delete duplicates"
    ],
    answer: 1,
    explanation: "$facet is powerful for creating multi-dimensional analytics (like category counts + price ranges) in one pass.",
    hint: "Parallel sub-pipelines."
  },
  {
    id: 146,
    difficulty: "easy",
    category: "basics",
    question: "What does the 'db.help()' command do?",
    options: [
      "Calls MongoDB support",
      "Displays a list of common database methods and descriptions",
      "Fixes corrupted data",
      "Opens the official website"
    ],
    answer: 1,
    explanation: "It provides an on-screen reference for shell commands.",
    hint: "In-shell help."
  },
  {
    id: 147,
    difficulty: "hard",
    category: "scenarios",
    question: "A query is taking a long time. You run explain() and see 'totalKeysExamined: 0' and 'totalDocsExamined: 1000000'. What does this tell you?",
    options: [
      "The query is perfectly indexed",
      "The query is NOT using an index at all (COLLSCAN)",
      "The index is too small",
      "The data is encrypted"
    ],
    answer: 1,
    explanation: "Total keys examined being 0 means no index keys were looked at, while docs examined indicates a scan of every document.",
    hint: "Zero index keys used."
  },
  {
    id: 148,
    difficulty: "medium",
    category: "storage",
    question: "What happens if the MongoDB journal is disabled?",
    options: [
      "The database becomes faster but risks data loss on a crash",
      "The database becomes slower",
      "Encryption is disabled",
      "Replication stops working"
    ],
    answer: 0,
    explanation: "Journaling adds write overhead for safety; without it, you can only recover to the last checkpoint (every 60s).",
    hint: "Speed vs. Durability trade-off."
  },
  {
    id: 149,
    difficulty: "hard",
    category: "aggregation",
    question: "Which stage is used to replace the root document with a specified embedded document?",
    options: ["$replaceRoot", "$changeRoot", "$unwind", "$project"],
    answer: 0,
    explanation: "$replaceRoot promotes a sub-document to the top level, which is useful after a $lookup.",
    hint: "Promote sub-document."
  },
  {
    id: 150,
    difficulty: "medium",
    category: "performance",
    question: "What is the purpose of the 'compact' command?",
    options: [
      "To minify the JSON",
      "To rewrite a collection and its indexes to reduce fragmentation and potentially release space to the OS",
      "To delete old data",
      "To compress images"
    ],
    answer: 1,
    explanation: "Compact defragments the storage but requires a lock on the collection.",
    hint: "Defragmentation tool."
  }
];
// Append to master database
questionBank.push(...mongodbBatch3);
/* ======================================================
   MONGODB CERTIFICATION QUESTION BANK (Batch 4: 151-200)
   Topics: Time-Series, Change Streams, Validation & Atlas
   ====================================================== */

const mongodbBatch4 = [
  {
    id: 151,
    difficulty: "hard",
    category: "time_series",
    question: "What is a 'Time-Series Collection' specifically optimized for in MongoDB 5.0+?",
    options: [
      "Storing large binary files",
      "Sequences of measurements over a period of time (e.g., IoT sensor data)",
      "High-speed text search",
      "Storing social media profiles"
    ],
    answer: 1,
    explanation: "Time-series collections store data in an optimized columnar format, reducing disk footprint and improving query IO efficiency for temporal data.",
    hint: "Temporal data optimization."
  },
  {
    id: 152,
    difficulty: "medium",
    category: "change_streams",
    question: "What is the primary use case for 'Change Streams'?",
    options: [
      "To back up the database",
      "To allow applications to react to real-time data changes without polling the database",
      "To change the data types of existing fields",
      "To stream movies from the database"
    ],
    answer: 1,
    explanation: "Change streams provide a way to listen for changes (inserts, updates, deletes) to a collection, database, or cluster.",
    hint: "Real-time notifications."
  },
  {
    id: 153,
    difficulty: "hard",
    category: "validation",
    question: "How do you enforce a schema in MongoDB to ensure a field 'age' is always an integer?",
    options: [
      "It is not possible; MongoDB is schema-less",
      "Using 'Schema Validation' with the '$jsonSchema' operator during collection creation",
      "By using a unique index",
      "By setting a flag in the config file"
    ],
    answer: 1,
    explanation: "MongoDB allows you to define validation rules using JSON Schema to ensure data quality at the database level.",
    hint: "JSON Schema enforcement."
  },
  {
    id: 154,
    difficulty: "medium",
    category: "atlas",
    question: "What is 'MongoDB Atlas'?",
    options: [
      "A desktop GUI for MongoDB",
      "A fully managed multi-cloud database-as-a-service (DBaaS)",
      "A specific version of the storage engine",
      "A tool for migrating from SQL"
    ],
    answer: 1,
    explanation: "Atlas is MongoDB's official cloud service that handles deployment, scaling, and maintenance automatically.",
    hint: "Cloud-hosted MongoDB."
  },
  {
    id: 155,
    difficulty: "hard",
    category: "time_series",
    question: "In a Time-Series collection, what are the three main parameters required during creation?",
    options: [
      "timeField, metaField, and granularity",
      "id, value, and timestamp",
      "name, size, and index",
      "shardKey, primaryKey, and foreignKey"
    ],
    answer: 0,
    explanation: "timeField (the timestamp), metaField (the metadata/label), and granularity (the expected frequency of data) are the core configurations.",
    hint: "Time, Metadata, and Frequency."
  },
  {
    id: 156,
    difficulty: "medium",
    category: "scenarios",
    question: "An application needs to perform a full-text search across 5 different fields. What is the best way to index this?",
    options: [
      "Create 5 separate indexes",
      "Create one 'text' index that includes all 5 fields (a wildcard text index)",
      "Use a compound hashed index",
      "Text search is not possible on multiple fields"
    ],
    answer: 1,
    explanation: "A single collection can only have one 'text' index, but that index can cover multiple fields.",
    hint: "Single text index limit."
  },
  {
    id: 157,
    difficulty: "hard",
    category: "change_streams",
    question: "What happens if a Change Stream cursor is closed due to a network error?",
    options: [
      "All data since the crash is lost",
      "The application can use a 'Resume Token' to restart the stream from the exact point it stopped",
      "The database must be restarted",
      "The stream must start from the very beginning"
    ],
    answer: 1,
    explanation: "Resume tokens are stored in the _id of the change event and allow the client to pick up where it left off.",
    hint: "Resuming the stream."
  },
  {
    id: 158,
    difficulty: "medium",
    category: "validation",
    question: "What is the 'validationAction' option in Schema Validation?",
    options: [
      "It defines if the validation is 'error' (reject write) or 'warn' (allow write but log)",
      "It defines the programming language used for validation",
      "It sets the validation speed",
      "It determines which users are validated"
    ],
    answer: 0,
    explanation: "Validation can be set to 'error' (strict) or 'warn' (logging only), which is useful when rolling out new rules.",
    hint: "Reject or Warn."
  },
  {
    id: 159,
    difficulty: "hard",
    category: "atlas",
    question: "What is 'Global Clusters' in MongoDB Atlas used for?",
    options: [
      "To translate the UI into different languages",
      "To distribute data across different geographic regions to provide low-latency reads/writes for global users",
      "To connect to every cloud provider at once",
      "To manage all databases in one list"
    ],
    answer: 1,
    explanation: "Global clusters allow you to pin data to specific regions (geo-partitioning) for performance and compliance (like GDPR).",
    hint: "Geographic data pinning."
  },
  {
    id: 160,
    difficulty: "medium",
    category: "scenarios",
    question: "How can you view all active operations currently running on the MongoDB server?",
    options: ["db.showAll()", "db.currentOp()", "db.listTasks()", "db.active()"],
    answer: 1,
    explanation: "db.currentOp() returns a document that contains information on in-progress operations for the database instance.",
    hint: "Current operations."
  },
  {
    id: 161,
    difficulty: "hard",
    category: "performance",
    question: "What is the 'Plan Cache' in MongoDB?",
    options: [
      "A cache for the hard drive",
      "A mechanism that stores the winning query plan for a specific query shape to avoid re-evaluating it every time",
      "A list of all users",
      "A temporary storage for backups"
    ],
    answer: 1,
    explanation: "Once the optimizer finds the best index for a query, it caches that choice to speed up subsequent identical queries.",
    hint: "Caching query plans."
  },
  {
    id: 162,
    difficulty: "medium",
    category: "scenarios",
    question: "You want to delete a collection named 'temp_data'. Which command is correct?",
    options: ["db.temp_data.remove()", "db.temp_data.drop()", "db.temp_data.delete()", "db.dropCollection('temp_data')"],
    answer: 1,
    explanation: "drop() removes the entire collection and its indexes from the database.",
    hint: "Dropping the collection."
  },
  {
    id: 163,
    difficulty: "hard",
    category: "storage",
    question: "What is 'GridFS' used for?",
    options: [
      "Storing small JSON files",
      "Storing and retrieving files that exceed the BSON document size limit of 16MB",
      "Creating a grid of shards",
      "Accelerating CSS delivery"
    ],
    answer: 1,
    explanation: "GridFS chunks large files into smaller pieces, allowing them to be stored across multiple documents.",
    hint: "Large file storage."
  },
  {
    id: 164,
    difficulty: "medium",
    category: "atlas",
    question: "What does 'Auto-Scaling' in Atlas manage?",
    options: [
      "It automatically updates your application code",
      "It scales tier (CPU/RAM) and storage capacity based on cluster usage",
      "It automatically adds more users",
      "It scales the price down to zero"
    ],
    answer: 1,
    explanation: "Atlas can automatically upgrade your cluster size if CPU or RAM usage hits a certain threshold.",
    hint: "Scaling resources automatically."
  },
  {
    id: 165,
    difficulty: "hard",
    category: "aggregation",
    question: "In the '$group' stage, how can you create an array of all unique values for a field across the group?",
    options: ["$push", "$addToSet", "$groupArray", "$collect"],
    answer: 1,
    explanation: "$addToSet adds values to an array while ensuring no duplicates are present.",
    hint: "Unique set addition."
  },
  {
    id: 166,
    difficulty: "medium",
    category: "security",
    question: "Which role is required to create new users in a database?",
    options: ["readWrite", "dbAdmin", "userAdmin", "dbOwner"],
    answer: 2,
    explanation: "The userAdmin role provides the ability to create and modify users and custom roles.",
    hint: "Administering users."
  },
  {
    id: 167,
    difficulty: "hard",
    category: "change_streams",
    question: "Which of the following is NOT a valid change event type in a Change Stream?",
    options: ["insert", "update", "drop", "indexCreated"],
    answer: 3,
    explanation: "Change streams track data and collection-level changes (like drop/rename), but they do not track administrative metadata changes like index creation.",
    hint: "Admin vs Data changes."
  },
  {
    id: 168,
    difficulty: "medium",
    category: "indexing",
    question: "What is a 'Hashed Index' primarily used for?",
    options: [
      "Range queries",
      "Sharding to ensure even distribution of data",
      "Full-text search",
      "Sorting alphabetically"
    ],
    answer: 1,
    explanation: "Hashed indexes distribute data randomly but consistently, which is perfect for avoiding hotspots in sharding.",
    hint: "Sharding distribution."
  },
  {
    id: 169,
    difficulty: "hard",
    category: "scenarios",
    question: "A query uses an 'OR' operator. How does MongoDB handle indexing for this?",
    options: [
      "It can only use one index",
      "It can use multiple indexes (one for each branch of the OR) via Index Intersection/Union",
      "It cannot use any indexes",
      "It requires a text index"
    ],
    answer: 1,
    explanation: "MongoDB can perform a 'sub-query' for each part of the $or and then union the results.",
    hint: "Index per branch."
  },
  {
    id: 170,
    difficulty: "medium",
    category: "scenarios",
    question: "How do you kill a long-running operation identified by opid 12345?",
    options: ["db.kill(12345)", "db.killOp(12345)", "db.stop(12345)", "db.currentOp.remove(12345)"],
    answer: 1,
    explanation: "db.killOp() is the command to terminate a specific operation.",
    hint: "Kill the operation."
  },
  {
    id: 171,
    difficulty: "hard",
    category: "storage",
    question: "Which WiredTiger setting controls the compression of data files?",
    options: [
      "block_compressor",
      "data_reduction",
      "file_minifier",
      "zip_mode"
    ],
    answer: 0,
    explanation: "The block_compressor setting (values: snappy, zlib, zstd, none) determines how data is compressed on disk.",
    hint: "Block compression."
  },
  {
    id: 172,
    difficulty: "medium",
    category: "aggregation",
    question: "What does the '$merge' stage do (introduced in 4.2)?",
    options: [
      "Merges two collections into a third",
      "Writes aggregation results to a collection, allowing for updates, merges, or replacements of existing documents",
      "Combines two arrays",
      "Merges shards"
    ],
    answer: 1,
    explanation: "$merge is more powerful than $out because it can update existing documents rather than just replacing the whole collection.",
    hint: "Smart output stage."
  },
  {
    id: 173,
    difficulty: "hard",
    category: "scenarios",
    question: "You have a compound index { a: 1, b: 1, c: 1 }. Which query will NOT be able to use this index?",
    options: [
      "db.col.find({ a: 5, b: 10 })",
      "db.col.find({ a: 5 })",
      "db.col.find({ b: 10, c: 20 })",
      "db.col.find({ a: 5, c: 20 })"
    ],
    answer: 2,
    explanation: "To use a compound index, the query must include a prefix of the index (starting from 'a').",
    hint: "Index prefix rule."
  },
  {
    id: 174,
    difficulty: "medium",
    category: "security",
    question: "In Atlas, what is 'Database Access' used for?",
    options: [
      "To set the firewall rules",
      "To create database users and assign them roles",
      "To enable encryption at rest",
      "To view the database logs"
    ],
    answer: 1,
    explanation: "Database Access is the section where you manage the credentials used by your application to connect.",
    hint: "Managing users."
  },
  {
    id: 175,
    difficulty: "hard",
    category: "time_series",
    question: "Can you create a standard index on the 'timeField' of a Time-Series collection?",
    options: [
      "No, it is already indexed automatically",
      "Yes, and it is highly recommended for query performance",
      "Only if the collection is sharded",
      "Only if granularity is 'seconds'"
    ],
    answer: 0,
    explanation: "MongoDB automatically creates an internal index on the timeField for time-series collections.",
    hint: "Automatic indexing."
  },
  {
    id: 176,
    difficulty: "medium",
    category: "basics",
    question: "What is the result of 'typeof _id' in most MongoDB documents?",
    options: ["string", "object", "number", "binary"],
    answer: 1,
    explanation: "The default _id is an 'ObjectId', which is a BSON object type.",
    hint: "ObjectId type."
  },
  {
    id: 177,
    difficulty: "hard",
    category: "aggregation",
    question: "Which operator is used to calculate the square root of a number in an aggregation pipeline?",
    options: ["$sqrt", "$squareRoot", "$root", "$math: 'sqrt'"],
    answer: 0,
    explanation: "$sqrt is a mathematical aggregation operator.",
    hint: "Math shorthand."
  },
  {
    id: 178,
    difficulty: "medium",
    category: "scenarios",
    question: "How do you enable 'Read-Only' access for a user in a specific database?",
    options: ["Assign the 'read' role", "Assign the 'guest' role", "Disable the 'write' flag", "Use a firewall rule"],
    answer: 0,
    explanation: "The 'read' role provides the ability to read all data in the specified database.",
    hint: "Standard read role."
  },
  {
    id: 179,
    difficulty: "hard",
    category: "performance",
    question: "What is 'Pre-splitting' in a sharded cluster?",
    options: [
      "Splitting the database into multiple files",
      "Manually creating chunks for an empty collection before inserting data to ensure immediate distribution",
      "Splitting a document into two",
      "Splitting the network traffic"
    ],
    answer: 1,
    explanation: "Pre-splitting avoids the initial overhead of the balancer having to move data after it's already on one shard.",
    hint: "Initial chunk creation."
  },
  {
    id: 180,
    difficulty: "medium",
    category: "atlas",
    question: "What is the purpose of 'Atlas Search'?",
    options: [
      "To find files in the cloud",
      "To provide full-text search capabilities based on Apache Lucene, integrated directly into Atlas",
      "To search for Atlas documentation",
      "To find other Atlas users"
    ],
    answer: 1,
    explanation: "Atlas Search is a managed service that provides sophisticated search (fuzzy matching, highlighting) without needing an external cluster.",
    hint: "Integrated full-text search."
  },
  {
    id: 181,
    difficulty: "hard",
    category: "change_streams",
    question: "Can Change Streams be opened on an entire database?",
    options: ["No, only on collections", "Yes, using db.watch()", "Only on the 'admin' database", "Only in sharded clusters"],
    answer: 1,
    explanation: "Since version 4.0, you can watch an entire database or even the whole cluster for changes.",
    hint: "Watch method."
  },
  {
    id: 182,
    difficulty: "medium",
    category: "scenarios",
    question: "Which command returns the current list of indexes for a collection?",
    options: ["db.collection.showIndexes()", "db.collection.getIndexes()", "db.collection.list()", "db.indexes()"],
    answer: 1,
    explanation: "getIndexes() returns an array of documents describing each index.",
    hint: "Retrieve indexes."
  },
  {
    id: 183,
    difficulty: "hard",
    category: "validation",
    question: "What happens if you try to insert a document that fails Schema Validation when 'validationLevel' is set to 'strict'?",
    options: [
      "The document is inserted but a warning is logged",
      "The write is rejected and an error is returned",
      "The field that failed is removed",
      "The database is locked"
    ],
    answer: 1,
    explanation: "In 'strict' level (the default), all writes must pass validation or they are rejected.",
    hint: "Strict rejection."
  },
  {
    id: 184,
    difficulty: "medium",
    category: "storage",
    question: "In GridFS, which collection stores the actual binary chunks?",
    options: ["fs.files", "fs.chunks", "fs.data", "fs.bin"],
    answer: 1,
    explanation: "GridFS uses 'fs.files' for metadata and 'fs.chunks' for the binary data pieces.",
    hint: "Chunks collection."
  },
  {
    id: 185,
    difficulty: "hard",
    category: "aggregation",
    question: "What is the '$bucketAuto' stage used for?",
    options: [
      "Automatically creating backups",
      "Categorizing documents into a specified number of buckets, attempting to distribute them evenly",
      "Cleaning the database",
      "Automating sharding"
    ],
    answer: 1,
    explanation: "$bucketAuto uses data analysis to pick boundaries that result in relatively even bucket sizes.",
    hint: "Automatic data bucketing."
  },
  {
    id: 186,
    difficulty: "medium",
    category: "security",
    question: "What is the 'Audit Log' in MongoDB Enterprise?",
    options: [
      "A list of database errors",
      "A record of system events and user actions for security compliance",
      "A backup of the data",
      "A list of all indexes"
    ],
    answer: 1,
    explanation: "Auditing is crucial for tracking who accessed what and when.",
    hint: "Compliance logging."
  },
  {
    id: 187,
    difficulty: "hard",
    category: "scenarios",
    question: "You want to perform a query that returns the distance between a user and a store. Which aggregation stage is best?",
    options: ["$match", "$geoNear", "$lookup", "$project"],
    answer: 1,
    explanation: "$geoNear outputs documents in order of distance and includes a field containing the calculated distance.",
    hint: "Geospatial proximity stage."
  },
  {
    id: 188,
    difficulty: "medium",
    category: "atlas",
    question: "Which Atlas feature allows you to query data stored in S3 using the MongoDB Query Language?",
    options: ["Atlas Search", "Atlas Data Federation", "Atlas Online Archive", "Atlas Sync"],
    answer: 1,
    explanation: "Data Federation (formerly Data Lake) allows you to blend and query data from Atlas and AWS S3.",
    hint: "Federated queries."
  },
  {
    id: 189,
    difficulty: "hard",
    category: "storage",
    question: "What is 'Direct I/O' in the context of WiredTiger?",
    options: [
      "Bypassing the OS cache to read/write directly to disk",
      "A way to speed up network traffic",
      "Directly connecting to the CPU",
      "A type of memory-mapped file"
    ],
    answer: 0,
    explanation: "Direct I/O can improve performance in specific high-end storage configurations by reducing double-buffering.",
    hint: "Bypassing OS cache."
  },
  {
    id: 190,
    difficulty: "medium",
    category: "aggregation",
    question: "Which stage is used to calculate statistics like standard deviation?",
    options: ["$stdDevPop / $stdDevSamp", "$math", "$stat", "$calc"],
    answer: 0,
    explanation: "These operators calculate population or sample standard deviation within a $group or $project stage.",
    hint: "Standard deviation."
  },
  {
    id: 191,
    difficulty: "hard",
    category: "scenarios",
    question: "You need to update an array element but only if it matches a certain condition. Which positional operator do you use?",
    options: ["$", "$[]", "$[<identifier>]", "$all"],
    answer: 2,
    explanation: "The filtered positional operator $[<identifier>] allows you to update specific elements that match an 'arrayFilters' condition.",
    hint: "Filtered positional update."
  },
  {
    id: 192,
    difficulty: "medium",
    category: "basics",
    question: "Which tool would you use to view BSON files created by 'mongodump' in a human-readable format?",
    options: ["mongo", "bsondump", "mongoexport", "cat"],
    answer: 1,
    explanation: "bsondump converts BSON files into JSON or other formats for inspection.",
    hint: "BSON to JSON utility."
  },
  {
    id: 193,
    difficulty: "hard",
    category: "performance",
    question: "What is 'Index Defragmentation'?",
    options: [
      "Deleting old indexes",
      "Rebuilding an index to reclaim space and improve performance, often via the 'compact' command",
      "Creating new indexes",
      "Renaming indexes"
    ],
    answer: 1,
    explanation: "Over time, indexes can become fragmented due to many deletions and updates.",
    hint: "Reclaiming index space."
  },
  {
    id: 194,
    difficulty: "medium",
    category: "atlas",
    question: "What is the 'Online Archive' feature in Atlas?",
    options: [
      "A way to download the entire DB",
      "A feature that automatically moves aged data from the cluster to cheaper S3 storage while keeping it queryable",
      "A backup service",
      "A way to share data with the public"
    ],
    answer: 1,
    explanation: "Online Archive helps manage storage costs by tiering cold data to S3.",
    hint: "Cold data tiering."
  },
  {
    id: 195,
    difficulty: "hard",
    category: "change_streams",
    question: "Does a Change Stream require a Replica Set?",
    options: ["Yes", "No, it works on standalone", "Only if you use encryption", "Only for sharded clusters"],
    answer: 0,
    explanation: "Change streams rely on the oplog, which is only present in Replica Sets (or Sharded Clusters).",
    hint: "Oplog dependency."
  },
  {
    id: 196,
    difficulty: "medium",
    category: "scenarios",
    question: "How do you count the number of distinct values for a field 'city'?",
    options: ["db.col.count('city')", "db.col.distinct('city').length", "db.col.find({city: 1}).count()", "db.col.aggregate([{ $count: 'city' }])"],
    answer: 1,
    explanation: "distinct() returns an array of unique values; getting the length of that array gives the count.",
    hint: "Distinct values array."
  },
  {
    id: 197,
    difficulty: "hard",
    category: "aggregation",
    question: "What does the '$replaceWith' stage do?",
    options: [
      "Replaces the collection with a new one",
      "An alias for $replaceRoot, used to replace the current document with a new value",
      "Replaces strings in a text field",
      "Replaces the Primary server"
    ],
    answer: 1,
    explanation: "$replaceWith is a more concise way to promote an embedded document or calculation to the top level.",
    hint: "Shorthand for $replaceRoot."
  },
  {
    id: 198,
    difficulty: "medium",
    category: "security",
    question: "What is 'Field Level Encryption' (FLE) key vault?",
    options: [
      "A physical safe",
      "A special collection that stores the data encryption keys",
      "A password manager",
      "A list of system admins"
    ],
    answer: 1,
    explanation: "The key vault collection stores the encrypted keys used to decrypt the data fields on the client side.",
    hint: "Key storage collection."
  },
  {
    id: 199,
    difficulty: "hard",
    category: "performance",
    question: "What is the 'Adaptive Query Optimizer'?",
    options: [
      "A person who manually fixes queries",
      "A feature where MongoDB re-evaluates query plans if the distribution of data changes significantly",
      "An AI that writes queries",
      "A tool to increase RAM"
    ],
    answer: 1,
    explanation: "The optimizer 'adapts' to data changes to ensure the most efficient index is still being used.",
    hint: "Evolving query plans."
  },
  {
    id: 200,
    difficulty: "hard",
    category: "basics",
    question: "In what year was the first version of MongoDB released?",
    options: ["2005", "2007", "2009", "2011"],
    answer: 2,
    explanation: "MongoDB was first released as an open-source project in February 2009.",
    hint: "End of the 2000s."
  },
  {
    id: 201,
    difficulty: "medium",
    category: "infrastructure",
    question: "Which MongoDB deployment topology provides automatic failover and redundancy?",
    options: ["Standalone Server", "Replica Set", "Single Node Cluster", "Local Instance"],
    answer: 1,
    explanation: "Replica Sets provide redundancy and automatic failover by maintaining multiple copies of the data across nodes.",
    hint: "High availability cluster."
  },
  {
    id: 202,
    difficulty: "hard",
    category: "operations",
    question: "Which MongoDB utility is primarily used for monitoring real-time database performance metrics like connections and memory usage?",
    options: ["mongodump", "mongostat", "mongoexport", "mongorestore"],
    answer: 1,
    explanation: "mongostat provides a quick overview of MongoDB instance performance including inserts, queries, connections, and memory.",
    hint: "Real-time stats tool."
  },
  {
    id: 203,
    difficulty: "medium",
    category: "operations",
    question: "What does the 'mongotop' tool report?",
    options: [
      "Query execution plans",
      "Time spent reading and writing data per collection",
      "CPU usage of MongoDB",
      "Network latency between nodes"
    ],
    answer: 1,
    explanation: "mongotop tracks how much time MongoDB spends reading and writing data for each collection.",
    hint: "Top-like monitoring tool."
  },
  {
    id: 204,
    difficulty: "hard",
    category: "devops",
    question: "Which infrastructure-as-code tool is commonly used to automate MongoDB cluster deployment in cloud environments?",
    options: ["Docker", "Terraform", "Kubernetes", "Jenkins"],
    answer: 1,
    explanation: "Terraform is widely used for infrastructure provisioning including MongoDB clusters on AWS, Azure, and GCP.",
    hint: "IaC provisioning tool."
  },
  {
    id: 205,
    difficulty: "medium",
    category: "devops",
    question: "Which configuration management tool is commonly used to automate MongoDB installation and configuration across servers?",
    options: ["Git", "Ansible", "Nginx", "Redis"],
    answer: 1,
    explanation: "Ansible automates server provisioning and application deployment including MongoDB configuration.",
    hint: "Agentless automation."
  },
  {
    id: 206,
    difficulty: "hard",
    category: "monitoring",
    question: "Which monitoring stack is commonly used to visualize MongoDB metrics collected from exporters?",
    options: [
      "ELK Stack",
      "Prometheus and Grafana",
      "Hadoop and Spark",
      "Kibana and Redis"
    ],
    answer: 1,
    explanation: "Prometheus collects metrics while Grafana provides dashboards and visualization.",
    hint: "Popular observability stack."
  },
  {
    id: 207,
    difficulty: "medium",
    category: "atlas",
    question: "What is MongoDB Ops Manager primarily used for?",
    options: [
      "Client-side query optimization",
      "Managing and monitoring MongoDB clusters on-premises",
      "Writing aggregation queries",
      "Data transformation pipelines"
    ],
    answer: 1,
    explanation: "Ops Manager provides automation, monitoring, and backup management for on-prem MongoDB deployments.",
    hint: "Enterprise management platform."
  },
  {
    id: 208,
    difficulty: "hard",
    category: "security",
    question: "Which MongoDB feature encrypts data while it is stored on disk?",
    options: [
      "TLS Encryption",
      "Encryption at Rest",
      "RBAC",
      "IP Whitelisting"
    ],
    answer: 1,
    explanation: "Encryption at Rest ensures data files are encrypted on disk to protect against unauthorized access.",
    hint: "Disk-level encryption."
  },
  {
    id: 209,
    difficulty: "medium",
    category: "security",
    question: "What is the purpose of Role-Based Access Control (RBAC) in MongoDB?",
    options: [
      "To optimize queries",
      "To manage user permissions and access privileges",
      "To shard collections",
      "To compress database files"
    ],
    answer: 1,
    explanation: "RBAC allows administrators to assign permissions to users based on defined roles.",
    hint: "User privilege model."
  },
  {
    id: 210,
    difficulty: "hard",
    category: "performance",
    question: "What is the purpose of 'capacity planning' for MongoDB clusters?",
    options: [
      "Writing queries faster",
      "Estimating resource requirements such as storage, CPU, and memory for future workloads",
      "Reducing the number of collections",
      "Migrating databases automatically"
    ],
    answer: 1,
    explanation: "Capacity planning ensures the cluster can handle future workload growth without performance degradation.",
    hint: "Future resource planning."
  },
  {
    id: 211,
    difficulty: "medium",
    category: "devops",
    question: "Why is MongoDB commonly integrated into CI/CD pipelines?",
    options: [
      "To automate testing, deployment, and schema updates",
      "To replace application servers",
      "To generate dashboards",
      "To compress logs"
    ],
    answer: 0,
    explanation: "CI/CD pipelines automate application and database deployment processes.",
    hint: "Automation pipeline."
  },
  {
    id: 212,
    difficulty: "hard",
    category: "operations",
    question: "Which process is responsible for the core database server functionality in MongoDB?",
    options: ["mongos", "mongod", "mongoctl", "mongoagent"],
    answer: 1,
    explanation: "mongod is the primary database server process responsible for handling data requests and storage.",
    hint: "Main database daemon."
  },
  {
    id: 213,
    difficulty: "medium",
    category: "infrastructure",
    question: "In a sharded MongoDB cluster, which component stores metadata about the cluster?",
    options: ["Shard Router", "Config Servers", "Primary Node", "Replica Manager"],
    answer: 1,
    explanation: "Config Servers store metadata including chunk distribution and cluster configuration.",
    hint: "Metadata storage."
  },
  {
    id: 214,
    difficulty: "hard",
    category: "monitoring",
    question: "Which metric is most important when diagnosing MongoDB query performance issues?",
    options: [
      "Disk manufacturer",
      "Query execution time and documents examined",
      "Operating system version",
      "Hostname configuration"
    ],
    answer: 1,
    explanation: "Query performance is typically diagnosed by examining execution time and how many documents are scanned.",
    hint: "Execution metrics."
  },
  {
    id: 215,
    difficulty: "medium",
    category: "linux",
    question: "Which operating system environment is most commonly used for production MongoDB deployments?",
    options: ["Windows Server", "Linux", "macOS", "ChromeOS"],
    answer: 1,
    explanation: "Most enterprise MongoDB deployments run on Linux due to stability and performance.",
    hint: "Common server OS."
  },
  {
    id: 216,
    difficulty: "hard",
    category: "architecture",
    question: "Why is sharding used in MongoDB?",
    options: [
      "To compress documents",
      "To distribute data across multiple servers for scalability",
      "To encrypt data",
      "To reduce index size"
    ],
    answer: 1,
    explanation: "Sharding horizontally partitions data across multiple nodes to scale large datasets and workloads.",
    hint: "Horizontal scaling."
  },
  {
    id: 217,
    difficulty: "medium",
    category: "performance",
    question: "Which operation helps analyze how MongoDB executes a query?",
    options: ["profile()", "explain()", "monitor()", "trace()"],
    answer: 1,
    explanation: "The explain() method reveals query plans and execution statistics.",
    hint: "Query plan analysis."
  },
  {
    id: 218,
    difficulty: "hard",
    category: "governance",
    question: "What is the primary purpose of database governance in MongoDB environments?",
    options: [
      "Improving network speed",
      "Establishing policies for schema design, security, and data lifecycle management",
      "Reducing collection count",
      "Automating backups"
    ],
    answer: 1,
    explanation: "Governance ensures consistent standards for schema design, access control, and compliance.",
    hint: "Policy management."
  },
  {
    id: 219,
    difficulty: "medium",
    category: "operations",
    question: "Which MongoDB command is commonly used to check server status and resource usage?",
    options: ["db.serverStatus()", "db.clusterInfo()", "db.systemStats()", "db.monitor()"],
    answer: 0,
    explanation: "serverStatus() returns detailed statistics about the running MongoDB instance.",
    hint: "Server health command."
  },
  {
    id: 220,
    difficulty: "hard",
    category: "architecture",
    question: "What is the main advantage of designing MongoDB schemas based on application query patterns?",
    options: [
      "It increases document size",
      "It optimizes read performance by reducing joins",
      "It prevents indexing",
      "It eliminates replication"
    ],
    answer: 1,
    explanation: "MongoDB schema design typically follows query patterns to minimize joins and improve performance.",
    hint: "Query-driven schema design."
  }
];

//  update
questionBank.push(...mongodbBatch4);
const mongodbBatch5 = [
  {
    id: 221,
    difficulty: "medium",
    category: "infrastructure",
    question: "Which MongoDB deployment topology provides automatic failover and redundancy?",
    options: ["Standalone Server", "Replica Set", "Single Node Cluster", "Local Instance"],
    answer: 1,
    explanation: "Replica Sets provide redundancy and automatic failover by maintaining multiple copies of the data across nodes.",
    hint: "High availability cluster."
  },
  {
    id: 222,
    difficulty: "hard",
    category: "operations",
    question: "Which MongoDB utility is primarily used for monitoring real-time database performance metrics like connections and memory usage?",
    options: ["mongodump", "mongostat", "mongoexport", "mongorestore"],
    answer: 1,
    explanation: "mongostat provides a quick overview of MongoDB instance performance including inserts, queries, connections, and memory.",
    hint: "Real-time stats tool."
  },
  {
    id: 223,
    difficulty: "medium",
    category: "operations",
    question: "What does the 'mongotop' tool report?",
    options: [
      "Query execution plans",
      "Time spent reading and writing data per collection",
      "CPU usage of MongoDB",
      "Network latency between nodes"
    ],
    answer: 1,
    explanation: "mongotop tracks how much time MongoDB spends reading and writing data for each collection.",
    hint: "Top-like monitoring tool."
  },
  {
    id: 224,
    difficulty: "hard",
    category: "devops",
    question: "Which infrastructure-as-code tool is commonly used to automate MongoDB cluster deployment in cloud environments?",
    options: ["Docker", "Terraform", "Kubernetes", "Jenkins"],
    answer: 1,
    explanation: "Terraform is widely used for infrastructure provisioning including MongoDB clusters on AWS, Azure, and GCP.",
    hint: "IaC provisioning tool."
  },
  {
    id: 225,
    difficulty: "medium",
    category: "devops",
    question: "Which configuration management tool is commonly used to automate MongoDB installation and configuration across servers?",
    options: ["Git", "Ansible", "Nginx", "Redis"],
    answer: 1,
    explanation: "Ansible automates server provisioning and application deployment including MongoDB configuration.",
    hint: "Agentless automation."
  },
  {
    id: 226,
    difficulty: "hard",
    category: "monitoring",
    question: "Which monitoring stack is commonly used to visualize MongoDB metrics collected from exporters?",
    options: [
      "ELK Stack",
      "Prometheus and Grafana",
      "Hadoop and Spark",
      "Kibana and Redis"
    ],
    answer: 1,
    explanation: "Prometheus collects metrics while Grafana provides dashboards and visualization.",
    hint: "Popular observability stack."
  },
  {
    id: 227,
    difficulty: "medium",
    category: "atlas",
    question: "What is MongoDB Ops Manager primarily used for?",
    options: [
      "Client-side query optimization",
      "Managing and monitoring MongoDB clusters on-premises",
      "Writing aggregation queries",
      "Data transformation pipelines"
    ],
    answer: 1,
    explanation: "Ops Manager provides automation, monitoring, and backup management for on-prem MongoDB deployments.",
    hint: "Enterprise management platform."
  },
  {
    id: 228,
    difficulty: "hard",
    category: "security",
    question: "Which MongoDB feature encrypts data while it is stored on disk?",
    options: [
      "TLS Encryption",
      "Encryption at Rest",
      "RBAC",
      "IP Whitelisting"
    ],
    answer: 1,
    explanation: "Encryption at Rest ensures data files are encrypted on disk to protect against unauthorized access.",
    hint: "Disk-level encryption."
  },
  {
    id: 229,
    difficulty: "medium",
    category: "security",
    question: "What is the purpose of Role-Based Access Control (RBAC) in MongoDB?",
    options: [
      "To optimize queries",
      "To manage user permissions and access privileges",
      "To shard collections",
      "To compress database files"
    ],
    answer: 1,
    explanation: "RBAC allows administrators to assign permissions to users based on defined roles.",
    hint: "User privilege model."
  },
  {
    id: 230,
    difficulty: "hard",
    category: "performance",
    question: "What is the purpose of 'capacity planning' for MongoDB clusters?",
    options: [
      "Writing queries faster",
      "Estimating resource requirements such as storage, CPU, and memory for future workloads",
      "Reducing the number of collections",
      "Migrating databases automatically"
    ],
    answer: 1,
    explanation: "Capacity planning ensures the cluster can handle future workload growth without performance degradation.",
    hint: "Future resource planning."
  },
  {
    id: 231,
    difficulty: "medium",
    category: "devops",
    question: "Why is MongoDB commonly integrated into CI/CD pipelines?",
    options: [
      "To automate testing, deployment, and schema updates",
      "To replace application servers",
      "To generate dashboards",
      "To compress logs"
    ],
    answer: 0,
    explanation: "CI/CD pipelines automate application and database deployment processes.",
    hint: "Automation pipeline."
  },
  {
    id: 232,
    difficulty: "hard",
    category: "operations",
    question: "Which process is responsible for the core database server functionality in MongoDB?",
    options: ["mongos", "mongod", "mongoctl", "mongoagent"],
    answer: 1,
    explanation: "mongod is the primary database server process responsible for handling data requests and storage.",
    hint: "Main database daemon."
  },
  {
    id: 233,
    difficulty: "medium",
    category: "infrastructure",
    question: "In a sharded MongoDB cluster, which component stores metadata about the cluster?",
    options: ["Shard Router", "Config Servers", "Primary Node", "Replica Manager"],
    answer: 1,
    explanation: "Config Servers store metadata including chunk distribution and cluster configuration.",
    hint: "Metadata storage."
  },
  {
    id: 234,
    difficulty: "hard",
    category: "monitoring",
    question: "Which metric is most important when diagnosing MongoDB query performance issues?",
    options: [
      "Disk manufacturer",
      "Query execution time and documents examined",
      "Operating system version",
      "Hostname configuration"
    ],
    answer: 1,
    explanation: "Query performance is typically diagnosed by examining execution time and how many documents are scanned.",
    hint: "Execution metrics."
  },
  {
    id: 235,
    difficulty: "medium",
    category: "linux",
    question: "Which operating system environment is most commonly used for production MongoDB deployments?",
    options: ["Windows Server", "Linux", "macOS", "ChromeOS"],
    answer: 1,
    explanation: "Most enterprise MongoDB deployments run on Linux due to stability and performance.",
    hint: "Common server OS."
  },
  {
    id: 236,
    difficulty: "hard",
    category: "architecture",
    question: "Why is sharding used in MongoDB?",
    options: [
      "To compress documents",
      "To distribute data across multiple servers for scalability",
      "To encrypt data",
      "To reduce index size"
    ],
    answer: 1,
    explanation: "Sharding horizontally partitions data across multiple nodes to scale large datasets and workloads.",
    hint: "Horizontal scaling."
  },
  {
    id: 237,
    difficulty: "medium",
    category: "performance",
    question: "Which operation helps analyze how MongoDB executes a query?",
    options: ["profile()", "explain()", "monitor()", "trace()"],
    answer: 1,
    explanation: "The explain() method reveals query plans and execution statistics.",
    hint: "Query plan analysis."
  },
  {
    id: 238,
    difficulty: "hard",
    category: "governance",
    question: "What is the primary purpose of database governance in MongoDB environments?",
    options: [
      "Improving network speed",
      "Establishing policies for schema design, security, and data lifecycle management",
      "Reducing collection count",
      "Automating backups"
    ],
    answer: 1,
    explanation: "Governance ensures consistent standards for schema design, access control, and compliance.",
    hint: "Policy management."
  },
  {
    id: 239,
    difficulty: "medium",
    category: "operations",
    question: "Which MongoDB command is commonly used to check server status and resource usage?",
    options: ["db.serverStatus()", "db.clusterInfo()", "db.systemStats()", "db.monitor()"],
    answer: 0,
    explanation: "serverStatus() returns detailed statistics about the running MongoDB instance.",
    hint: "Server health command."
  },
  {
    id: 240,
    difficulty: "hard",
    category: "architecture",
    question: "What is the main advantage of designing MongoDB schemas based on application query patterns?",
    options: [
      "It increases document size",
      "It optimizes read performance by reducing joins",
      "It prevents indexing",
      "It eliminates replication"
    ],
    answer: 1,
    explanation: "MongoDB schema design typically follows query patterns to minimize joins and improve performance.",
    hint: "Query-driven schema design."
  }
];

// Append to master database
questionBank.push(...mongodbBatch5);
const mongodbBatch6 = [
  {
    id: 240,
    difficulty: "hard",
    category: "sharding",
    question: "What is the main risk of choosing a monotonically increasing shard key (e.g., timestamp) in MongoDB?",
    options: [
      "Data compression failures",
      "Hot shard problem due to uneven write distribution",
      "Index corruption",
      "Replica lag"
    ],
    answer: 1,
    explanation: "Monotonically increasing shard keys cause new writes to target the same shard, creating a hot shard bottleneck.",
    hint: "Single shard overload."
  },
  {
    id: 241,
    difficulty: "medium",
    category: "replication",
    question: "What is the function of the MongoDB 'oplog'?",
    options: [
      "Stores index metadata",
      "Records all write operations for replication",
      "Tracks user authentication events",
      "Stores query execution plans"
    ],
    answer: 1,
    explanation: "The oplog (operations log) records all changes to the database so secondary nodes can replicate them.",
    hint: "Replication log."
  },
  {
    id: 242,
    difficulty: "hard",
    category: "replication",
    question: "Why is oplog size important in a MongoDB replica set?",
    options: [
      "It determines query performance",
      "It defines how long secondaries can fall behind before requiring resync",
      "It controls index rebuild speed",
      "It limits document size"
    ],
    answer: 1,
    explanation: "A larger oplog allows secondaries to stay in sync even if replication lag occurs.",
    hint: "Replication buffer."
  },
  {
    id: 243,
    difficulty: "medium",
    category: "consistency",
    question: "What does 'writeConcern: majority' guarantee?",
    options: [
      "Writes are stored on disk immediately",
      "Writes are acknowledged after being committed to a majority of replica set members",
      "Writes are executed faster",
      "Writes are stored only on the primary node"
    ],
    answer: 1,
    explanation: "Majority write concern ensures durability by confirming replication to most nodes.",
    hint: "Durability guarantee."
  },
  {
    id: 244,
    difficulty: "medium",
    category: "consistency",
    question: "What does 'readConcern: majority' ensure?",
    options: [
      "Reads only return committed data replicated to a majority of nodes",
      "Reads are faster",
      "Reads bypass indexes",
      "Reads come only from secondaries"
    ],
    answer: 0,
    explanation: "Majority read concern ensures that returned data is fully committed across the replica set.",
    hint: "Consistent reads."
  },
  {
    id: 245,
    difficulty: "hard",
    category: "transactions",
    question: "MongoDB multi-document ACID transactions were introduced in which version?",
    options: ["3.2", "3.6", "4.0", "5.0"],
    answer: 2,
    explanation: "MongoDB 4.0 introduced multi-document ACID transactions for replica sets.",
    hint: "Major architectural upgrade."
  },
  {
    id: 246,
    difficulty: "medium",
    category: "performance",
    question: "Which command helps analyze the execution plan of a MongoDB query?",
    options: [
      "db.analyze()",
      "db.profile()",
      "explain()",
      "db.trace()"
    ],
    answer: 2,
    explanation: "The explain() method shows how MongoDB executes queries and whether indexes are used.",
    hint: "Query planner."
  },
  {
    id: 247,
    difficulty: "hard",
    category: "indexing",
    question: "What is the purpose of a 'compound index' in MongoDB?",
    options: [
      "To encrypt data",
      "To index multiple fields within a single index structure",
      "To replicate documents",
      "To compress collections"
    ],
    answer: 1,
    explanation: "Compound indexes support queries that filter or sort on multiple fields.",
    hint: "Multi-field index."
  },
  {
    id: 248,
    difficulty: "medium",
    category: "monitoring",
    question: "Which MongoDB command returns detailed server metrics including memory usage and connections?",
    options: [
      "db.serverStatus()",
      "db.systemStats()",
      "db.health()",
      "db.clusterStatus()"
    ],
    answer: 0,
    explanation: "serverStatus() provides detailed runtime statistics for monitoring.",
    hint: "Server health metrics."
  },
  {
    id: 249,
    difficulty: "hard",
    category: "architecture",
    question: "What is the primary purpose of MongoDB Config Servers in a sharded cluster?",
    options: [
      "Store user credentials",
      "Store cluster metadata and chunk distribution",
      "Handle client connections",
      "Replicate documents"
    ],
    answer: 1,
    explanation: "Config servers store metadata about shard distribution and cluster configuration.",
    hint: "Cluster metadata."
  },
  {
    id: 250,
    difficulty: "medium",
    category: "scaling",
    question: "What scaling strategy does MongoDB sharding implement?",
    options: [
      "Vertical scaling",
      "Horizontal scaling",
      "Memory scaling",
      "Index scaling"
    ],
    answer: 1,
    explanation: "Sharding distributes data across multiple servers to scale horizontally.",
    hint: "Scale-out architecture."
  },
  {
    id: 251,
    difficulty: "hard",
    category: "troubleshooting",
    question: "What is the most common cause of slow MongoDB queries in large collections?",
    options: [
      "Too many collections",
      "Missing or inefficient indexes",
      "Large BSON documents",
      "Replica set elections"
    ],
    answer: 1,
    explanation: "Missing indexes force MongoDB to perform collection scans, which degrade performance.",
    hint: "Query optimization."
  },
  {
    id: 252,
    difficulty: "medium",
    category: "devops",
    question: "Which containerization platform is commonly used to run MongoDB in modern DevOps environments?",
    options: ["Docker", "Apache Spark", "Hadoop", "Airflow"],
    answer: 0,
    explanation: "Docker containers are commonly used to package and deploy MongoDB environments.",
    hint: "Container platform."
  },
  {
    id: 253,
    difficulty: "hard",
    category: "security",
    question: "Which MongoDB security feature encrypts database files stored on disk?",
    options: [
      "TLS",
      "RBAC",
      "Encryption at Rest",
      "Audit Logging"
    ],
    answer: 2,
    explanation: "Encryption at Rest protects stored data from unauthorized access to disk storage.",
    hint: "Disk encryption."
  },
  {
    id: 254,
    difficulty: "medium",
    category: "monitoring",
    question: "Which tool provides a graphical interface for managing MongoDB databases?",
    options: [
      "Mongo Shell",
      "MongoDB Compass",
      "mongostat",
      "mongotop"
    ],
    answer: 1,
    explanation: "MongoDB Compass is the official GUI for exploring and managing MongoDB data.",
    hint: "Visual management tool."
  },
  {
    id: 255,
    difficulty: "hard",
    category: "architecture",
    question: "Why is embedding related data within a document often preferred in MongoDB?",
    options: [
      "To eliminate all indexes",
      "To reduce joins and improve read performance",
      "To decrease storage requirements",
      "To simplify replication"
    ],
    answer: 1,
    explanation: "Embedding related data reduces the need for joins and improves query performance.",
    hint: "Document modeling."
  },
  {
    id: 256,
    difficulty: "medium",
    category: "backup",
    question: "Which MongoDB tool is used to restore BSON backups created by mongodump?",
    options: [
      "mongoimport",
      "mongorestore",
      "mongoexport",
      "mongostat"
    ],
    answer: 1,
    explanation: "mongorestore restores BSON backup files generated by mongodump.",
    hint: "Backup restore tool."
  },
  {
    id: 257,
    difficulty: "hard",
    category: "performance",
    question: "What is the main advantage of index intersection in MongoDB?",
    options: [
      "Combining multiple indexes to satisfy a query",
      "Encrypting indexes",
      "Reducing storage usage",
      "Balancing shards"
    ],
    answer: 0,
    explanation: "Index intersection allows MongoDB to combine multiple indexes to resolve a query.",
    hint: "Multiple indexes working together."
  },
  {
    id: 258,
    difficulty: "medium",
    category: "architecture",
    question: "Which MongoDB storage engine is the default in modern versions?",
    options: [
      "MMAPv1",
      "RocksDB",
      "WiredTiger",
      "InnoDB"
    ],
    answer: 2,
    explanation: "WiredTiger is the default storage engine offering compression and concurrency improvements.",
    hint: "Modern engine."
  },
  {
    id: 259,
    difficulty: "hard",
    category: "troubleshooting",
    question: "What does high replication lag usually indicate?",
    options: [
      "Primary node failure",
      "Secondaries unable to apply oplog operations quickly enough",
      "Index rebuild",
      "Network encryption errors"
    ],
    answer: 1,
    explanation: "Replication lag occurs when secondary nodes cannot process oplog updates fast enough.",
    hint: "Replication delay."
  },
  {
    id: 260,
    difficulty: "medium",
    category: "operations",
    question: "Which Linux command is commonly used to check MongoDB process resource usage?",
    options: [
      "ls",
      "top",
      "mkdir",
      "pwd"
    ],
    answer: 1,
    explanation: "The 'top' command helps monitor CPU and memory usage of MongoDB processes.",
    hint: "Process monitoring."
  }
];

questionBank.push(...mongodbBatch6);
const mongodbBatch7 = [
  {
    id: 261,
    difficulty: "hard",
    category: "troubleshooting",
    question: "A MongoDB cluster suddenly experiences high query latency. What is the FIRST thing an engineer should analyze?",
    options: [
      "Server hardware vendor",
      "Query execution plans and indexes",
      "Application UI logs",
      "Database collection names"
    ],
    answer: 1,
    explanation: "Slow queries are most commonly caused by inefficient indexes or full collection scans.",
    hint: "Start with query plans."
  },
  {
    id: 262,
    difficulty: "hard",
    category: "sharding",
    question: "A shard in a MongoDB cluster is receiving significantly more traffic than others. What is the most likely cause?",
    options: [
      "Replica set elections",
      "Unbalanced shard key distribution",
      "Network encryption overhead",
      "MongoDB version mismatch"
    ],
    answer: 1,
    explanation: "Poor shard key selection can cause uneven distribution, resulting in hot shards.",
    hint: "Shard key issue."
  },
  {
    id: 263,
    difficulty: "medium",
    category: "performance",
    question: "What MongoDB feature allows automatic balancing of data across shards?",
    options: [
      "Balancer",
      "Router",
      "Aggregator",
      "Cluster Monitor"
    ],
    answer: 0,
    explanation: "The balancer redistributes chunks between shards to maintain even data distribution.",
    hint: "Background distribution process."
  },
  {
    id: 264,
    difficulty: "hard",
    category: "replication",
    question: "If a secondary node falls too far behind the primary and the oplog no longer contains the required operations, what happens?",
    options: [
      "Automatic reindexing",
      "Full initial sync is required",
      "Primary restarts",
      "Replication stops permanently"
    ],
    answer: 1,
    explanation: "If oplog entries are missing, the secondary must perform a full initial synchronization.",
    hint: "Complete resync."
  },
  {
    id: 265,
    difficulty: "medium",
    category: "scaling",
    question: "What is the main advantage of horizontal scaling in MongoDB?",
    options: [
      "Reducing memory usage",
      "Adding more servers to distribute workload",
      "Compressing data automatically",
      "Reducing replication overhead"
    ],
    answer: 1,
    explanation: "Horizontal scaling distributes workload across multiple nodes.",
    hint: "Scale-out."
  },
  {
    id: 266,
    difficulty: "hard",
    category: "performance",
    question: "Which index type improves performance for queries filtering on fields that exist in only some documents?",
    options: [
      "Compound index",
      "Sparse index",
      "Hashed index",
      "Wildcard index"
    ],
    answer: 1,
    explanation: "Sparse indexes include only documents containing the indexed field.",
    hint: "Indexes missing fields."
  },
  {
    id: 267,
    difficulty: "medium",
    category: "security",
    question: "What is the primary purpose of MongoDB audit logging?",
    options: [
      "Speed up queries",
      "Track security-related database actions",
      "Compress logs",
      "Improve indexing"
    ],
    answer: 1,
    explanation: "Audit logs record security-relevant operations such as authentication and role changes.",
    hint: "Security tracking."
  },
  {
    id: 268,
    difficulty: "hard",
    category: "architecture",
    question: "Which design strategy is recommended when modeling large one-to-many relationships in MongoDB?",
    options: [
      "Embedding all child documents indefinitely",
      "Referencing documents with ObjectIDs",
      "Storing everything in one collection",
      "Removing relationships entirely"
    ],
    answer: 1,
    explanation: "Large one-to-many relationships are better modeled using references to avoid huge documents.",
    hint: "Avoid document bloat."
  },
  {
    id: 269,
    difficulty: "medium",
    category: "operations",
    question: "Which MongoDB command displays current operations running on the server?",
    options: [
      "db.currentOp()",
      "db.operations()",
      "db.serverOps()",
      "db.activeQueries()"
    ],
    answer: 0,
    explanation: "db.currentOp() shows currently running database operations.",
    hint: "Live operations."
  },
  {
    id: 270,
    difficulty: "hard",
    category: "architecture",
    question: "Why are Config Servers deployed as a replica set in a MongoDB sharded cluster?",
    options: [
      "To increase write speed",
      "To ensure metadata redundancy and availability",
      "To compress metadata",
      "To store application data"
    ],
    answer: 1,
    explanation: "Config servers hold critical cluster metadata and must remain highly available.",
    hint: "Metadata safety."
  },
  {
    id: 271,
    difficulty: "medium",
    category: "performance",
    question: "Which MongoDB feature allows partial indexing of documents based on a filter condition?",
    options: [
      "Compound index",
      "Partial index",
      "TTL index",
      "Cluster index"
    ],
    answer: 1,
    explanation: "Partial indexes only index documents that match a specified filter condition.",
    hint: "Filtered index."
  },
  {
    id: 272,
    difficulty: "hard",
    category: "transactions",
    question: "Which limitation historically existed before MongoDB introduced distributed transactions?",
    options: [
      "Single document writes were not atomic",
      "Multi-document atomicity was not supported",
      "Indexes were unavailable",
      "Replication was not supported"
    ],
    answer: 1,
    explanation: "Before MongoDB 4.0, atomicity was limited to single documents.",
    hint: "Document-level atomicity."
  },
  {
    id: 273,
    difficulty: "medium",
    category: "devops",
    question: "Which orchestration platform is widely used to run MongoDB clusters in containerized environments?",
    options: [
      "Kubernetes",
      "Jenkins",
      "Spark",
      "Airflow"
    ],
    answer: 0,
    explanation: "Kubernetes is commonly used to orchestrate containerized MongoDB deployments.",
    hint: "Container orchestration."
  },
  {
    id: 274,
    difficulty: "hard",
    category: "performance",
    question: "Which situation most likely causes excessive disk I/O in MongoDB?",
    options: [
      "Large number of collections",
      "Frequent collection scans without indexes",
      "Using aggregation pipelines",
      "Replica set configuration"
    ],
    answer: 1,
    explanation: "Collection scans force MongoDB to read entire collections from disk.",
    hint: "Missing indexes."
  },
  {
    id: 275,
    difficulty: "medium",
    category: "operations",
    question: "Which MongoDB shell command lists all databases in the current cluster?",
    options: [
      "show collections",
      "show databases",
      "db.list()",
      "db.show()"
    ],
    answer: 1,
    explanation: "show databases lists all databases available in the cluster.",
    hint: "Database listing."
  },

/* ======================================================
   MONGODB QUERY SAMPLES & OPERATORS (Batch Addition)
   Topics: findOne, Comparison, Logical Operators, Sorting
   ====================================================== */

  {
    id: 276,
    difficulty: "easy",
    category: "crud",
    question: "When performing a find() query with multiple field-value pairs like { name: 'Alex', age: 27 }, which logical operator is applied by default?",
    options: ["$or", "$and", "$nor", "$not"],
    answer: 1,
    explanation: "MongoDB implicitly uses a logical AND when multiple field-value pairs are listed in a single query filter document.",
    hint: "It is an implicit behavior for comma-separated pairs."
  },
  {
    id: 277,
    difficulty: "medium",
    category: "crud",
    question: "What does the db.collection.findOne() method return if no document matches the specified criteria?",
    options: ["An empty array", "An empty document", "null", "undefined"],
    answer: 2,
    explanation: "Unlike find(), which returns a cursor (even if empty), findOne() returns the actual document if found, or null if no match exists.",
    hint: "Think about the return type for a single missing object."
  },
  {
    id: 278,
    difficulty: "easy",
    category: "operations",
    question: "In the .sort() method, which value is used to specify that the results should be returned in descending order?",
    options: ["0", "1", "-1", "desc"],
    answer: 2,
    explanation: "In MongoDB sorting, 1 is used for ascending order and -1 is used for descending order.",
    hint: "Positive for up, negative for down."
  },
  {
    id: 279,
    difficulty: "medium",
    category: "crud",
    question: "When using Projection to return specific fields, which field is included by default unless it is explicitly set to 0?",
    options: ["The first field in the document", "name", "email", "_id"],
    answer: 3,
    explanation: "The _id field is always included in the result set by default. You must explicitly set it to 0 or false to exclude it.",
    hint: "It is the unique primary key."
  },
  {
    id: 280,
    difficulty: "hard",
    category: "crud",
    question: "Which query correctly finds documents where the age is between 25 and 35, inclusive?",
    options: [
      "{ age: { $gt: 25, $lt: 35 } }",
      "{ age: { $gte: 25, $lte: 35 } }",
      "{ $or: [{ age: 25 }, { age: 35 }] }",
      "{ age: { $between: [25, 35] } }"
    ],
    answer: 1,
    explanation: "To specify a range, you combine comparison operators like $gte (greater than or equal) and $lte (less than or equal) for the same field.",
    hint: "Use 'Greater Than or Equal' and 'Less Than or Equal'."
  },
  {
    id: 281,
    difficulty: "medium",
    category: "crud",
    question: "What is the primary difference between the $ne and $not operators?",
    options: [
      "$ne matches only numbers, while $not matches strings",
      "$ne is a comparison operator for inequality, while $not is a logical operator used to negate other operators",
      "There is no difference; they are interchangeable",
      "$not can only be used with regular expressions"
    ],
    answer: 1,
    explanation: "$ne is used to find values not equal to a specific value. $not is a logical operator used to negate a query expression (e.g., matching documents that do not match a regex or range).",
    hint: "One compares values, the other negates expressions."
  }
   ];

questionBank.push(...mongodbBatch7);

// --- TOP 100 INTERVIEW INDICES ---
// These indices point to unique, high-value questions from the bank for rapid interview prep.
// Covering: CRUD, Aggregation, Indexing (ESR), Sharding, and Schema Design.
const hotsQuestions = [
    // 1. CRUD Operations & Query Logic (Projection, Upsert, Array Filters) - 15 indices
    1, 2, 3, 4, 15, 20, 25, 30, 40, 45, 
    278, 279, 280, 281, 282,

    // 2. Aggregation Framework (Pipeline Stages, Expressions) - 20 indices
    5, 6, 7, 50, 55, 60, 65, 70, 75, 80, 
    85, 90, 95, 100, 105, 110, 115, 120, 125, 130,

    // 3. Indexing Strategies & Performance (ESR Rule, Compound, Covered) - 20 indices
    8, 9, 10, 135, 140, 145, 150, 155, 160, 165, 
    170, 175, 180, 185, 190, 195, 200, 205, 210, 215,

    // 4. Schema Design Patterns & Relationships (Embedding vs Referencing) - 15 indices
    11, 12, 13, 220, 225, 230, 235, 240, 245, 250, 
    255, 260, 265, 270, 275,

    // 5. Replication, Sharding & High Availability (Oplog, Elections, Chunking) - 15 indices
    14, 16, 17, 18, 19, 285, 290, 295, 300, 305, 
    310, 315, 320, 325, 330,

    // 6. Security, Governance & Atlas (RBAC, Encryption, Monitoring) - 15 indices
    21, 22, 23, 24, 26, 27, 28, 29, 31, 32, 
    33, 34, 335, 340, 345
];
