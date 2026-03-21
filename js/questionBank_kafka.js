const questionBank = [
  {
    id: 1,
    difficulty: "easy",
    category: "fundamentals",
    question: "What is the primary role of a 'Partition' in a Kafka Topic?",
    options: [
      "To provide data encryption at rest",
      "To allow a topic to scale horizontally by distributing data across multiple brokers",
      "To act as a backup for the main topic",
      "To manage user access control lists (ACLs)"
    ],
    answer: 1,
    explanation: "Partitions allow Kafka to scale by spreading data across multiple servers. Each partition can be hosted on a different broker, enabling parallel processing and high throughput.",
    hint: "Think about how Kafka achieves parallelism."
  },
  {
    id: 2,
    difficulty: "easy",
    category: "fundamentals",
    question: "In Kafka, what does an 'Offset' represent?",
    options: [
      "The time a message was created",
      "The size of the message in bytes",
      "A unique, sequential ID assigned to each message within a partition",
      "The number of replicas for a specific message"
    ],
    answer: 2,
    explanation: "An offset is a unique identifier for a message within its partition. It is used by consumers to track their progress in reading the log.",
    hint: "It acts like a pointer in a file."
  },
  {
    id: 3,
    difficulty: "medium",
    category: "architecture",
    question: "Which component was traditionally responsible for leader election and cluster metadata before Kafka 2.8?",
    options: [
      "Kafka Controller",
      "Schema Registry",
      "Zookeeper",
      "KRaft Mode"
    ],
    answer: 2,
    explanation: "Zookeeper was used for metadata management and leader election. Since Kafka 2.8/3.0, KRaft (Kafka Raft) is replacing Zookeeper to manage metadata internally.",
    hint: "The external service Kafka used to depend on."
  },
  {
    id: 4,
    difficulty: "medium",
    category: "producer",
    question: "When setting 'acks=all', what must happen before the producer receives a success response?",
    options: [
      "Only the leader replica must acknowledge the message",
      "The message must be written to at least one follower's disk",
      "The leader and all In-Sync Replicas (ISR) must acknowledge the message",
      "The message must be consumed by at least one consumer"
    ],
    answer: 2,
    explanation: "With acks=all (or acks=-1), the leader waits for the full set of in-sync replicas to acknowledge the record, ensuring the highest level of durability.",
    hint: "Maximum durability setting."
  },
  {
    id: 5,
    difficulty: "hard",
    category: "administration",
    question: "A topic has a replication factor of 3 and 'min.insync.replicas' set to 2. If two brokers go down, what happens to a producer with 'acks=all'?",
    options: [
      "The producer continues to work normally",
      "The producer will receive a NotEnoughReplicasException",
      "The producer will automatically switch to acks=1",
      "The producer will block until all 3 brokers are back up"
    ],
    answer: 1,
    explanation: "If two brokers are down, only 1 replica is available. Since min.insync.replicas is 2, the 'acks=all' requirement cannot be met, causing an exception.",
    hint: "Compare available replicas to the minimum required."
  },
  {
    id: 6,
    difficulty: "medium",
    category: "consumer",
    question: "What happens if a new consumer joins a consumer group where all partitions are already assigned?",
    options: [
      "The new consumer remains idle",
      "A rebalance is triggered, and partitions are redistributed",
      "The new consumer steals a partition from the oldest member",
      "The consumer group is deleted"
    ],
    answer: 1,
    explanation: "A rebalance occurs. If there are more consumers than partitions, some consumers (the extra ones) will sit idle with no partitions assigned.",
    hint: "Partition-to-consumer mapping limit."
  },
  {
    id: 7,
    difficulty: "easy",
    category: "storage",
    question: "What is 'Log Compaction' in Kafka?",
    options: [
      "A way to compress logs to save disk space using GZIP",
      "A mechanism to ensure Kafka only retains the last known value for each message key",
      "The process of moving old logs to S3 storage",
      "A tool for encrypting sensitive data in partitions"
    ],
    answer: 1,
    explanation: "Log compaction ensures that for each key, at least the last value is retained. It is useful for restoring state in tables or caches.",
    hint: "Key-based retention strategy."
  },
  {
    id: 8,
    difficulty: "medium",
    category: "producer",
    question: "Which producer property controls how long to wait for more messages to arrive before sending a batch?",
    options: [
      "batch.size",
      "linger.ms",
      "request.timeout.ms",
      "max.block.ms"
    ],
    answer: 1,
    explanation: "linger.ms adds a small delay to allow the producer to wait for more messages to fill up a batch, increasing throughput at the cost of slight latency.",
    hint: "Latency vs Throughput trade-off."
  },
  {
    id: 9,
    difficulty: "hard",
    category: "consumer",
    question: "What is the effect of setting 'enable.auto.commit' to false?",
    options: [
      "Offsets are never saved, and consumers always start from the end",
      "The consumer must manually commit offsets using the API",
      "Kafka will automatically commit offsets every 5 seconds",
      "Messages are deleted from the broker immediately after being read"
    ],
    answer: 1,
    explanation: "When auto-commit is disabled, the developer is responsible for calling commitSync() or commitAsync() to acknowledge processed messages.",
    hint: "Manual offset management."
  },
  {
    id: 10,
    difficulty: "medium",
    category: "architecture",
    question: "What is an 'In-Sync Replica' (ISR)?",
    options: [
      "Any replica that exists in the cluster",
      "A follower that has successfully caught up to the leader's log within a certain timeframe",
      "A backup broker that is currently turned off",
      "A consumer that is reading at the same speed as the producer"
    ],
    answer: 1,
    explanation: "ISR is the set of replicas that are 'caught up' with the leader. If a leader fails, only a member of the ISR is typically eligible to become the new leader.",
    hint: "The 'healthy' subset of replicas."
  },
  {
    id: 11,
    difficulty: "easy",
    category: "fundamentals",
    question: "Can you decrease the number of partitions for an existing Kafka topic?",
    options: [
      "Yes, using the kafka-topics.sh tool",
      "No, Kafka does not support decreasing partitions",
      "Yes, but only if the topic is empty",
      "Yes, but only if the topic is log-compacted"
    ],
    answer: 1,
    explanation: "Kafka only supports increasing the number of partitions. Decreasing them would involve complex data redistribution and is not natively supported.",
    hint: "Think about the immutability of the log structure."
  },
  {
    id: 12,
    difficulty: "medium",
    category: "producer",
    question: "What is the primary benefit of sending messages with a 'Key'?",
    options: [
      "It makes the message smaller",
      "It ensures all messages with the same key go to the same partition (preserving order)",
      "It automatically encrypts the message",
      "It bypasses the need for a broker"
    ],
    answer: 1,
    explanation: "Using a key ensures that messages are routed to the same partition, which guarantees that a consumer will see them in the order they were produced.",
    hint: "Strict ordering within a partition."
  },
  {
    id: 13,
    difficulty: "hard",
    category: "producer",
    question: "What does 'enable.idempotence=true' protect against?",
    options: [
      "Broker disk failure",
      "Duplicate messages caused by producer retries on network errors",
      "Consumers reading too slowly",
      "Unauthorized access to topics"
    ],
    answer: 1,
    explanation: "An idempotent producer ensures that even if a producer retries a request due to a network timeout, the broker will only commit the message once.",
    hint: "Duplicate prevention."
  },
  {
    id: 14,
    difficulty: "medium",
    category: "consumer",
    question: "What does the 'auto.offset.reset=earliest' setting do?",
    options: [
      "Deletes all current data in the topic",
      "Tells the consumer to start from the beginning of the log if no valid offset is found",
      "Forces the consumer to re-read every message on every restart",
      "Resets the broker's clock"
    ],
    answer: 1,
    explanation: "If a consumer group is new or its offset is invalid/deleted, 'earliest' ensures it starts from the oldest available message rather than skipping to the end.",
    hint: "Behavior for new consumer groups."
  },
  {
    id: 15,
    difficulty: "medium",
    category: "administration",
    question: "Which CLI tool is used to check the consumer lag of a group?",
    options: [
      "kafka-topics.sh",
      "kafka-consumer-groups.sh",
      "kafka-console-consumer.sh",
      "kafka-configs.sh"
    ],
    answer: 1,
    explanation: "The kafka-consumer-groups tool allows you to describe groups and see the 'LOG-END-OFFSET' vs 'CURRENT-OFFSET' to calculate lag.",
    hint: "Managing consumer group states."
  },
  {
    id: 16,
    difficulty: "medium",
    category: "consumer",
    question: "Which consumer configuration limits the number of records returned in a single call to poll()?",
    options: [
      "max.partition.fetch.bytes",
      "fetch.max.bytes",
      "max.poll.records",
      "receive.buffer.bytes"
    ],
    answer: 2,
    explanation: "max.poll.records allows you to control the amount of data your application has to process in a single iteration, helping to stay within the max.poll.interval.ms limit.",
    hint: "Setting the record count per poll."
  },
  {
    id: 17,
    difficulty: "medium",
    category: "producer",
    question: "Which compression type usually provides the best balance of CPU usage and compression ratio for Kafka?",
    options: ["gzip", "snappy", "lz4", "zstd"],
    answer: 1,
    explanation: "Snappy (developed by Google) is designed for high speed and reasonable compression, making it a popular choice for Kafka's real-time streams.",
    hint: "Think speed over maximum compression."
  },
  {
    id: 18,
    difficulty: "easy",
    category: "fundamentals",
    question: "What does it mean that Kafka is a 'distributed commit log'?",
    options: [
      "It is a relational database",
      "It is an append-only data structure spread across multiple nodes",
      "It only stores logs about server errors",
      "It deletes messages as soon as they are read"
    ],
    answer: 1,
    explanation: "Kafka is fundamentally a log where records are appended at the end. Being distributed means this log is partitioned and replicated across many servers.",
    hint: "Append-only and multi-node."
  },
  {
    id: 19,
    difficulty: "medium",
    category: "administration",
    question: "What is an 'Under-Replicated Partition'?",
    options: [
      "A partition with zero replicas",
      "A partition where the number of in-sync replicas (ISR) is less than the configured replication factor",
      "A partition that is too small",
      "A partition that has been deleted"
    ],
    answer: 1,
    explanation: "This occurs when one or more follower replicas are not caught up with the leader, often due to broker failure or network issues.",
    hint: "Missing in-sync members."
  },
  {
    id: 20,
    difficulty: "hard",
    category: "fundamentals",
    question: "Kafka 0.10+ supports message timestamps. What is 'LogAppendTime'?",
    options: [
      "The time the producer created the message",
      "The time the broker received and wrote the message to the log",
      "The time the consumer read the message",
      "The time the message expires"
    ],
    answer: 1,
    explanation: "LogAppendTime is a broker-side setting where Kafka overwrites the producer's timestamp with the time it actually appended the message to its log.",
    hint: "Broker-defined arrival time."
  },
  {
    id: 21,
    difficulty: "medium",
    category: "storage",
    question: "If 'cleanup.policy' is set to 'delete' (the default), what determines when a message is removed?",
    options: [
      "The message size only",
      "The key of the message",
      "Retention time (retention.ms) or Retention size (retention.bytes)",
      "The consumer group status"
    ],
    answer: 2,
    explanation: "In 'delete' mode, Kafka discards segments once they exceed the configured time or size limits.",
    hint: "Time or size thresholds."
  },
  {
    id: 22,
    difficulty: "easy",
    category: "administration",
    question: "In server.properties, which setting allows Kafka to store data across multiple disk paths?",
    options: [
      "data.dir",
      "log.dirs",
      "storage.paths",
      "broker.id.path"
    ],
    answer: 1,
    explanation: "log.dirs accepts a comma-separated list of directories. Kafka will distribute new partitions across these paths to balance disk I/O.",
    hint: "The plural directory setting."
  },
  {
    id: 23,
    difficulty: "medium",
    category: "consumer",
    question: "What is the relationship between 'Heartbeats' and 'Polls' in the Java Consumer?",
    options: [
      "They are the same thing",
      "Heartbeats happen on a separate background thread; Polls happen on the main application thread",
      "Polls trigger heartbeats manually",
      "Heartbeats are only sent when the buffer is full"
    ],
    answer: 1,
    explanation: "Since Kafka 0.10.1, heartbeats are sent by a background thread so that the Group Coordinator doesn't kick the consumer out if the main thread takes too long to process a poll.",
    hint: "Background vs. Foreground tasks."
  },
  {
    id: 24,
    difficulty: "hard",
    category: "producer",
    question: "Which producer config must be increased if you are sending very large messages (e.g., > 1MB)?",
    options: [
      "max.request.size",
      "batch.size",
      "buffer.memory",
      "linger.ms"
    ],
    answer: 0,
    explanation: "max.request.size limits the size of a single request sent by the producer. It must be aligned with the broker's message.max.bytes.",
    hint: "The request-level limit."
  },
  {
    id: 25,
    difficulty: "medium",
    category: "architecture",
    question: "What is 'At-Least-Once' delivery semantics?",
    options: [
      "Messages are guaranteed to be delivered exactly once",
      "Messages may be delivered more than once but never lost",
      "Messages may be lost but never duplicated",
      "Messages are only delivered if the consumer requests them twice"
    ],
    answer: 1,
    explanation: "This is the default. If a producer fails to get an ack, it retries, which might result in the message being written/read twice.",
    hint: "Durability over uniqueness."
  },
  {
    id: 26,
    difficulty: "hard",
    category: "administration",
    question: "What is the default number of partitions for the internal '__consumer_offsets' topic?",
    options: ["1", "10", "50", "100"],
    answer: 2,
    explanation: "Kafka creates 50 partitions for this topic to ensure that offset commits can be distributed across different brokers in the cluster.",
    hint: "A standard 'mid-range' default number."
  },
  {
    id: 27,
    difficulty: "medium",
    category: "administration",
    question: "Which metric tells you how many messages a replica is behind the leader?",
    options: [
      "Replica Lag (Records)",
      "Bytes In Per Sec",
      "Active Controller Count",
      "Under Replicated Partitions"
    ],
    answer: 0,
    explanation: "Replica lag represents the number of records the follower needs to fetch to catch up to the leader's current Log End Offset.",
    hint: "Distance between logs."
  },
  {
    id: 28,
    difficulty: "hard",
    category: "architecture",
    question: "What is the 'Leader Epoch' used for in Kafka?",
    options: [
      "To track how many days the broker has been running",
      "To prevent data loss and log divergence during leader failovers",
      "To encrypt data",
      "To count the number of consumers"
    ],
    answer: 1,
    explanation: "Leader Epochs act as a versioning system for partition leaders, ensuring that when a leader changes, followers can correctly sync and truncate their logs.",
    hint: "Consistency during failover."
  },
  {
    id: 29,
    difficulty: "medium",
    category: "administration",
    question: "If 'auto.leader.rebalance.enable' is true, what will Kafka periodically do?",
    options: [
      "Restart all brokers",
      "Check if the 'Preferred Leader' is the current leader and trigger an election if not",
      "Move data between disks",
      "Create new partitions"
    ],
    answer: 1,
    explanation: "This ensures that leadership is distributed according to the preferred replica list, preventing 'leader skew' on specific brokers.",
    hint: "Returning to the preferred state."
  },
  {
    id: 30,
    difficulty: "medium",
    category: "architecture",
    question: "What is the default value of 'min.insync.replicas'?",
    options: ["0", "1", "2", "3"],
    answer: 1,
    explanation: "The default is 1, meaning that even if acks=all, only the leader needs to have the data for the write to succeed if no followers are in-sync.",
    hint: "The most permissive safety setting."
  },
  {
    id: 31,
    difficulty: "easy",
    category: "producer",
    question: "If a producer uses 'acks=1', when does it receive an acknowledgment?",
    options: [
      "As soon as the message is sent over the network",
      "Once the leader has written the record to its local log",
      "Once the full ISR has written the record",
      "Once the consumer has read the record"
    ],
    answer: 1,
    explanation: "acks=1 means the leader acknowledges without waiting for followers, providing a balance of speed and durability.",
    hint: "Leader-only confirmation."
  },
  {
    id: 32,
    difficulty: "medium",
    category: "consumer",
    question: "What is the main difference between 'subscribe()' and 'assign()' in the Kafka Consumer API?",
    options: [
      "subscribe() is for SSL; assign() is for PLAIN",
      "subscribe() uses dynamic partition assignment (group management); assign() manually attaches to specific partitions",
      "assign() is only for Java; subscribe() is for Python",
      "There is no difference"
    ],
    answer: 1,
    explanation: "Use subscribe() when you want the group coordinator to handle rebalances. Use assign() when you want full control over which partitions a consumer reads.",
    hint: "Manual vs. Automatic assignment."
  },
  {
    id: 33,
    difficulty: "easy",
    category: "fundamentals",
    question: "Why is Kafka faster than a traditional message queue like RabbitMQ for high-throughput streaming?",
    options: [
      "It doesn't use disks",
      "It uses 'Zero Copy' and treats data as a sequential log, avoiding complex index management per message",
      "It only supports small messages",
      "It doesn't support security"
    ],
    answer: 1,
    explanation: "Kafka's use of the OS page cache and the 'sendfile' system call (Zero Copy) makes it extremely efficient at moving data from disk to network.",
    hint: "Sequential I/O and kernel optimizations."
  },
  {
    id: 34,
    difficulty: "medium",
    category: "storage",
    question: "What happens when a Kafka log segment reaches the 'log.segment.bytes' limit?",
    options: [
      "The topic is deleted",
      "The current segment is closed and a new segment is 'rolled' (created)",
      "The broker stops accepting data",
      "The data is compressed into a ZIP file"
    ],
    answer: 1,
    explanation: "Kafka splits partition logs into segments. Rolling a segment allows Kafka to apply retention and compaction policies more easily.",
    hint: "Rolling a new file."
  },
  {
    id: 35,
    difficulty: "hard",
    category: "administration",
    question: "Which broker setting is used to provide the external IP/hostname that clients should use to connect?",
    options: [
      "listeners",
      "advertised.listeners",
      "zookeeper.connect",
      "broker.hostname"
    ],
    answer: 1,
    explanation: "If Kafka is behind a NAT or in Docker, the 'listeners' might be an internal IP, but 'advertised.listeners' tells clients how to find it from the outside.",
    hint: "The address shared with clients."
  },
  {
    id: 36,
    difficulty: "medium",
    category: "producer",
    question: "What does 'metadata.max.age.ms' control?",
    options: [
      "How long a message stays in the broker",
      "The frequency at which the producer forces a refresh of its metadata (topic/partition/leader info)",
      "The age of the broker hardware",
      "The session timeout"
    ],
    answer: 1,
    explanation: "The producer needs to know which broker is the leader for a partition. This setting ensures it refreshes that info even if no errors occur.",
    hint: "Metadata refresh interval."
  },
  {
    id: 37,
    difficulty: "easy",
    category: "consumer",
    question: "In a consumer, what identifies which group it belongs to?",
    options: [
      "client.id",
      "group.id",
      "member.id",
      "consumer.name"
    ],
    answer: 1,
    explanation: "The group.id is a string that uniquely identifies the consumer group. All consumers with the same group.id work together.",
    hint: "The shared group identifier."
  },
  {
    id: 38,
    difficulty: "hard",
    category: "storage",
    question: "In log compaction, what does 'min.cleanable.dirty.ratio' control?",
    options: [
      "The percentage of messages that are deleted",
      "The ratio of the 'dirty' (uncompacted) part of the log to the 'clean' (compacted) part required to trigger cleaning",
      "The speed of the disk",
      "The number of replicas"
    ],
    answer: 1,
    explanation: "A higher ratio means Kafka waits longer to compact, which is more efficient for I/O but takes more disk space. Default is 0.5 (50%).",
    hint: "Trigger threshold for compaction."
  },
  {
    id: 39,
    difficulty: "medium",
    category: "consumer",
    question: "If 'enable.auto.commit' is true, what does 'auto.commit.interval.ms' do?",
    options: [
      "It deletes data every X milliseconds",
      "It sets the frequency at which the consumer's current offset is saved to Kafka",
      "It triggers a rebalance",
      "It measures the network speed"
    ],
    answer: 1,
    explanation: "The consumer will automatically send its current offset to the __consumer_offsets topic at this fixed interval.",
    hint: "Offset saving frequency."
  },
  {
    id: 40,
    difficulty: "hard",
    category: "administration",
    question: "Which threads are responsible for reading requests from the network and putting them into the request queue?",
    options: [
      "Log Cleaner threads",
      "Network threads (num.network.threads)",
      "I/O threads (num.io.threads)",
      "Controller threads"
    ],
    answer: 1,
    explanation: "Network threads handle the initial network processing. They pass the requests to a queue, which I/O threads then pick up to write to disk.",
    hint: "The front-line network handlers."
  },
  {
    id: 41,
    difficulty: "medium",
    category: "producer",
    question: "What happens if a producer's 'request.timeout.ms' is shorter than the time the broker takes to process the request?",
    options: [
      "The broker crashes",
      "The producer will time out and potentially retry the request",
      "The message is successfully sent anyway",
      "The consumer cannot see the message"
    ],
    answer: 1,
    explanation: "The producer will close the connection and treat it as a failure, potentially retrying if the 'retries' config allows it.",
    hint: "Client-side wait limit."
  },
  {
    id: 42,
    difficulty: "easy",
    category: "fundamentals",
    question: "What is the maximum number of consumers that can actively read from a topic with 10 partitions within a single group?",
    options: ["1", "5", "10", "Unlimited"],
    answer: 2,
    explanation: "Since one partition can only be read by one consumer in a group, any consumers beyond the partition count (10) will remain idle.",
    hint: "1:1 mapping limit."
  },
  {
    id: 43,
    difficulty: "hard",
    category: "administration",
    question: "What is 'Rack Awareness' in Kafka?",
    options: [
      "A way to label the physical servers",
      "A feature that ensures replicas of the same partition are spread across different physical racks or availability zones",
      "A security tool for hardware",
      "A process to speed up disk access"
    ],
    answer: 1,
    explanation: "By setting 'broker.rack', Kafka ensures that a single rack failure won't take down all replicas of a partition, increasing fault tolerance.",
    hint: "Geo-spatial redundancy."
  },
  {
    id: 44,
    difficulty: "medium",
    category: "consumer",
    question: "Which setting prevents a consumer from constantly 'spinning' and making requests when there is no new data?",
    options: [
      "fetch.max.wait.ms",
      "heartbeat.interval.ms",
      "session.timeout.ms",
      "max.poll.interval.ms"
    ],
    answer: 0,
    explanation: "Kafka will hold the fetch request for up to this amount of time to wait for data to arrive before sending an empty response.",
    hint: "Waiting for data before responding."
  },
  {
    id: 45,
    difficulty: "hard",
    category: "producer",
    question: "What is the 'buffer.memory' setting in a Kafka producer?",
    options: [
      "The amount of RAM dedicated to the OS cache",
      "The total bytes of memory the producer can use to buffer records waiting to be sent",
      "The size of the Java Heap",
      "The disk space used by the producer"
    ],
    answer: 1,
    explanation: "If the application sends messages faster than the producer can transmit them, they fill up this buffer. If it's full, the producer blocks for max.block.ms.",
    hint: "Total memory for pending messages."
  },
  {
    id: 46,
    difficulty: "medium",
    category: "administration",
    question: "True or False: 'message.max.bytes' (broker-side) should generally be equal to or larger than 'max.message.bytes' (topic-side).",
    options: ["True", "False"],
    answer: 0,
    explanation: "The broker-side limit is the global ceiling. If a topic has a larger limit than the broker, the broker will still reject the message.",
    hint: "Global vs. Specific limits."
  },
  {
    id: 47,
    difficulty: "hard",
    category: "storage",
    question: "Which broker thread is responsible for executing the Log Compaction process?",
    options: [
      "The Controller",
      "Log Cleaner threads",
      "I/O threads",
      "Replica Manager"
    ],
    answer: 1,
    explanation: "The log cleaner thread periodically scans compacted topics and removes older records with duplicate keys.",
    hint: "Cleaning the logs."
  },
  {
    id: 48,
    difficulty: "medium",
    category: "architecture",
    question: "Why does Kafka perform better on Linux than on some other operating systems?",
    options: [
      "It is written in Bash",
      "It makes extensive use of the Linux Page Cache and efficient 'sendfile' syscalls",
      "Linux is the only OS that supports Java",
      "Linux disks are faster"
    ],
    answer: 1,
    explanation: "Kafka is designed to rely on the OS's ability to cache files in RAM (Page Cache), reducing the need for application-level caching.",
    hint: "Operating system optimizations."
  },
  {
    id: 49,
    difficulty: "easy",
    category: "administration",
    question: "If 'delete.topic.enable' is false, what happens when you run a delete command?",
    options: [
      "The topic is deleted immediately",
      "The topic is marked for deletion but the data remains on disk and the topic is still usable",
      "The broker crashes",
      "The CLI tool asks for a password"
    ],
    answer: 1,
    explanation: "In older versions of Kafka, this was false by default. It essentially disables the administrative delete functionality.",
    hint: "Disabling the delete feature."
  },
  {
    id: 50,
    difficulty: "hard",
    category: "architecture",
    question: "What is the 'High Watermark' in a Kafka partition?",
    options: [
      "The offset of the very last message written to the leader",
      "The offset of the last message that has been successfully replicated to all ISRs",
      "The maximum size a partition can grow to",
      "The timestamp of the most recent message"
    ],
    answer: 1,
    explanation: "The High Watermark is the highest offset that is safely replicated to the ISRs. Consumers can only read up to this point to ensure consistency.",
    hint: "The limit for consumer visibility."
  },
  {
    id: 51,
    difficulty: "hard",
    category: "consumer",
    question: "What is the primary benefit of 'Static Membership' in a Kafka Consumer Group (introduced in Kafka 2.3)?",
    options: [
      "It allows consumers to share the same partition",
      "It reduces unnecessary rebalances when a consumer is restarted within the session timeout",
      "It encrypts the group coordinator communications",
      "It prevents the use of Avro schemas"
    ],
    answer: 1,
    explanation: "By assigning a 'group.instance.id', a consumer becomes a static member. If it restarts, it keeps its partitions without triggering a group-wide rebalance, provided it returns before the session timeout.",
    hint: "Think about persistent identity."
  },
  {
    id: 52,
    difficulty: "medium",
    category: "architecture",
    question: "What is 'Unclean Leader Election' in Kafka?",
    options: [
      "Electing a leader from the set of in-sync replicas (ISR)",
      "Electing a leader from replicas that are NOT in the ISR, potentially causing data loss",
      "Electing a leader manually via the CLI",
      "A leader election that happens during a security breach"
    ],
    answer: 1,
    explanation: "Unclean leader election allows a non-ISR replica to become leader. This favors availability over consistency, but can lead to the loss of messages that weren't replicated to the new leader.",
    hint: "Availability vs. Durability trade-off."
  },
  {
    id: 53,
    difficulty: "medium",
    category: "administration",
    question: "Which configuration parameter defines the maximum time a broker will wait for a replica to catch up before removing it from the ISR?",
    options: [
      "replica.lag.time.max.ms",
      "zookeeper.session.timeout.ms",
      "heartbeat.interval.ms",
      "request.timeout.ms"
    ],
    answer: 0,
    explanation: "If a follower hasn't sent a fetch request or hasn't caught up to the leader's log end offset within this time, the leader removes it from the ISR.",
    hint: "Timing the 'in-sync' status."
  },
  {
    id: 54,
    difficulty: "hard",
    category: "producer",
    question: "To guarantee strict message ordering while allowing multiple retries, which combination of producer settings is required if 'enable.idempotence' is false?",
    options: [
      "retries=0",
      "max.in.flight.requests.per.connection=1 and retries > 0",
      "acks=0",
      "batch.size=0"
    ],
    answer: 1,
    explanation: "Limiting in-flight requests to 1 ensures that if a batch fails and is retried, no subsequent batch can be successfully written out of order.",
    hint: "Limit concurrent requests to one."
  },
  {
    id: 55,
    difficulty: "medium",
    category: "consumer",
    question: "What does a 'Consumer Rebalance' signify in a Kafka cluster?",
    options: [
      "The broker is moving data between disks",
      "The process of redistributing partition ownership among consumers in a group",
      "A security update to the consumer ACLs",
      "The consumer is deleting old offsets"
    ],
    answer: 1,
    explanation: "Rebalancing occurs when a consumer joins/leaves a group or topic metadata changes, ensuring partitions are fairly distributed among active members.",
    hint: "Ownership shift."
  },
  {
    id: 56,
    difficulty: "hard",
    category: "storage",
    question: "In the context of Log Compaction, what is a 'Tombstone'?",
    options: [
      "A message with a null value used to signify the deletion of a key",
      "A corrupted segment file",
      "The very first message in a partition",
      "A marker for a crashed broker"
    ],
    answer: 0,
    explanation: "In a compacted topic, sending a message with a specific key and a null value (tombstone) tells Kafka to eventually delete all previous occurrences of that key.",
    hint: "Deleting a key in a compacted log."
  },
  {
    id: 57,
    difficulty: "medium",
    category: "architecture",
    question: "What is the purpose of the 'Controller' broker in a Kafka cluster?",
    options: [
      "To handle all producer requests",
      "To manage partition leader elections and replicas across the cluster",
      "To store the actual message data",
      "To provide the GUI for Kafka management"
    ],
    answer: 1,
    explanation: "The Controller is a broker responsible for managing states of partitions and replicas, including electing new leaders when existing ones fail.",
    hint: "The cluster's 'brain'."
  },
  {
    id: 58,
    difficulty: "medium",
    category: "serialization",
    question: "Why is Avro preferred over JSON for high-volume Kafka deployments?",
    options: [
      "JSON is not supported by Kafka",
      "Avro is a binary format that is more compact and supports schema evolution",
      "Avro is easier for humans to read than JSON",
      "Avro does not require a schema"
    ],
    answer: 1,
    explanation: "Avro's binary format reduces payload size significantly compared to text-based JSON, and its integration with Schema Registry allows for robust version control.",
    hint: "Binary efficiency and versioning."
  },
  {
    id: 59,
    difficulty: "hard",
    category: "serialization",
    question: "In Schema Registry, what is 'BACKWARD' compatibility?",
    options: [
      "New schemas can be used to read data written with the previous schema",
      "Data written with the new schema can be read by consumers using the previous schema",
      "Any version of the schema can read any other version",
      "Schemas cannot be changed once created"
    ],
    answer: 0,
    explanation: "Backward compatibility means the new schema can read data written by the older schema. This is the default mode in Confluent Schema Registry.",
    hint: "New reads Old."
  },
  {
    id: 60,
    difficulty: "medium",
    category: "administration",
    question: "What is a Kafka 'Quota' used for?",
    options: [
      "To limit the number of topics a user can create",
      "To control the produce/consume throughput (bytes per second) for specific clients",
      "To limit the disk space used by a single partition",
      "To set the maximum number of brokers in a cluster"
    ],
    answer: 1,
    explanation: "Quotas allow administrators to prevent a single 'noisy neighbor' client from overwhelming the cluster by throttling their bandwidth.",
    hint: "Throttling throughput."
  },
  {
    id: 61,
    difficulty: "easy",
    category: "fundamentals",
    question: "What happens if a message is produced to a topic that does not yet exist and 'auto.create.topics.enable' is set to true?",
    options: [
      "The message is lost",
      "The broker automatically creates the topic with default settings",
      "The producer throws an exception",
      "The broker crashes"
    ],
    answer: 1,
    explanation: "With auto-creation enabled, Kafka creates the topic using the cluster-wide default partition count and replication factor.",
    hint: "Implicit creation."
  },
  {
    id: 62,
    difficulty: "medium",
    category: "consumer",
    question: "What is the 'Group Coordinator' in Kafka?",
    options: [
      "The client-side library that manages threads",
      "A specific broker responsible for managing a consumer group's offsets and heartbeats",
      "A Zookeeper node",
      "The leader of the first partition"
    ],
    answer: 1,
    explanation: "For every consumer group, one broker is designated as the Group Coordinator. It manages the group's state and rebalances.",
    hint: "Broker-side group manager."
  },
  {
    id: 63,
    difficulty: "hard",
    category: "architecture",
    question: "What is the 'Zero Copy' optimization in Kafka?",
    options: [
      "Data is never written to disk",
      "Data is transferred directly from the disk cache to the network buffer without being copied into the application memory",
      "Kafka does not keep any replicas of data",
      "The producer does not wait for an acknowledgment"
    ],
    answer: 1,
    explanation: "By using the 'sendfile' system call, Kafka avoids copying data into the user space, significantly improving performance for consumer fetches.",
    hint: "Direct kernel-level transfer."
  },
  {
    id: 64,
    difficulty: "medium",
    category: "producer",
    question: "What is the 'Custom Partitioner' used for in a Kafka Producer?",
    options: [
      "To encrypt specific messages",
      "To override the default logic of how messages are mapped to partitions based on keys",
      "To change the replication factor dynamically",
      "To delete messages after they are sent"
    ],
    answer: 1,
    explanation: "If you need specific logic (e.g., all 'VIP' customers in Partition 0), you implement the Partitioner interface in your code.",
    hint: "User-defined routing logic."
  },
  {
    id: 65,
    difficulty: "medium",
    category: "storage",
    question: "What does 'retention.ms' control in a topic configuration?",
    options: [
      "The time it takes to produce a message",
      "The maximum time Kafka will retain a message before deleting it (in non-compacted topics)",
      "How long a consumer can stay idle",
      "The heartbeat frequency"
    ],
    answer: 1,
    explanation: "This is the time-based retention policy. Once a message is older than this threshold, it is eligible for deletion to free up space.",
    hint: "Log expiration timer."
  },
  {
    id: 66,
    difficulty: "hard",
    category: "consumer",
    question: "What is the 'Incremental Cooperative Rebalancing' protocol?",
    options: [
      "A protocol where all consumers stop reading during a rebalance",
      "A protocol that only reassigns partitions that need to move, allowing others to continue processing",
      "A way to rebalance Zookeeper",
      "A protocol that requires manual intervention for every rebalance"
    ],
    answer: 1,
    explanation: "Introduced in Kafka 2.4, this avoids 'stop-the-world' rebalances by letting consumers keep their current partitions while new ones are assigned.",
    hint: "Smoother, non-blocking rebalance."
  },
  {
    id: 67,
    difficulty: "medium",
    category: "administration",
    question: "Which command is used to change the number of partitions for an existing topic?",
    options: [
      "kafka-topics.sh --alter --partitions <count>",
      "kafka-topics.sh --update --partitions <count>",
      "kafka-reassign-partitions.sh",
      "Partitions cannot be changed"
    ],
    answer: 0,
    explanation: "You can increase partitions using the --alter command, but remember that this may break key-based ordering logic.",
    hint: "Alter the metadata."
  },
  {
    id: 68,
    difficulty: "hard",
    category: "architecture",
    question: "In KRaft mode, where is the cluster metadata stored?",
    options: [
      "In Zookeeper",
      "In an internal metadata topic called __cluster_metadata",
      "In a local text file on each broker",
      "In the Schema Registry"
    ],
    answer: 1,
    explanation: "KRaft replaces Zookeeper by storing metadata in a dedicated internal log, managed by a quorum of controller nodes.",
    hint: "Metadata as a log."
  },
  {
    id: 69,
    difficulty: "medium",
    category: "security",
    question: "What is the purpose of 'SASL/PLAIN' in Kafka security?",
    options: [
      "To encrypt data in transit",
      "To provide simple username/password authentication",
      "To manage firewall rules",
      "To sign message payloads"
    ],
    answer: 1,
    explanation: "SASL/PLAIN is a simple mechanism for authenticating clients using clear-text credentials (usually used with SSL/TLS to ensure the password isn't visible).",
    hint: "Simple authentication."
  },
  {
    id: 70,
    difficulty: "hard",
    category: "producer",
    question: "What happens to the producer's internal buffer if 'max.block.ms' is reached?",
    options: [
      "It automatically deletes the oldest message",
      "The send() call throws a TimeoutException",
      "The producer restarts",
      "The broker is forced to accept the data"
    ],
    answer: 1,
    explanation: "If the producer's buffer is full or metadata is unavailable for longer than max.block.ms, the application will receive an exception.",
    hint: "Timeout for sending."
  },
  {
    id: 71,
    difficulty: "easy",
    category: "fundamentals",
    question: "True or False: A single Kafka partition can be consumed by multiple consumers in the same consumer group simultaneously.",
    options: ["True", "False"],
    answer: 1,
    explanation: "To maintain ordering, each partition is assigned to exactly one consumer within a group. Multiple consumers in the same group cannot read from the same partition at once.",
    hint: "Exclusive partition ownership per group."
  },
  {
    id: 72,
    difficulty: "medium",
    category: "consumer",
    question: "What is the purpose of 'heartbeat.interval.ms'?",
    options: [
      "To sync data between brokers",
      "To let the Group Coordinator know a consumer is still alive",
      "To measure network latency",
      "To trigger a log compaction"
    ],
    answer: 1,
    explanation: "Consumers send heartbeats to the coordinator. If heartbeats stop, the coordinator assumes the consumer has failed and triggers a rebalance.",
    hint: "Keeping the group membership active."
  },
  {
    id: 73,
    difficulty: "hard",
    category: "architecture",
    question: "What is 'Preferred Leader Election'?",
    options: [
      "Manually choosing the fastest broker as leader",
      "An automated process that moves the partition leader back to the first broker in its replica list (the preferred leader)",
      "A security feature that prevents unauthorized leaders",
      "A way to elect a leader without using Zookeeper"
    ],
    answer: 1,
    explanation: "To maintain balanced load, Kafka tries to ensure that the 'preferred' (first in the list) replica is the leader for that partition.",
    hint: "Restoring the intended balance."
  },
  {
    id: 74,
    difficulty: "medium",
    category: "serialization",
    question: "In Schema Registry, what is 'FORWARD' compatibility?",
    options: [
      "Older consumers can read data written with the new schema",
      "New consumers can read data written with the old schema",
      "Schemas can only be updated once per hour",
      "Data is automatically converted to JSON"
    ],
    answer: 0,
    explanation: "Forward compatibility ensures that data produced with a new schema can be read by consumers still using the old schema.",
    hint: "Old reads New."
  },
  {
    id: 75,
    difficulty: "medium",
    category: "administration",
    question: "Which setting controls the maximum size of a single request the broker will accept?",
    options: [
      "max.message.bytes",
      "message.max.bytes",
      "socket.request.max.bytes",
      "batch.size"
    ],
    answer: 1,
    explanation: "message.max.bytes (on the broker) and max.message.bytes (on the topic) define the upper limit for a message size.",
    hint: "Broker-side message size limit."
  },
  {
    id: 76,
    difficulty: "hard",
    category: "storage",
    question: "What is the 'Index' file in a Kafka segment used for?",
    options: [
      "To store the actual message data",
      "To map offsets to physical positions in the .log file for fast lookups",
      "To store consumer group information",
      "To encrypt the segment"
    ],
    answer: 1,
    explanation: "The index file allows Kafka to quickly jump to a specific offset within a segment without scanning the entire file.",
    hint: "Offset-to-position mapping."
  },
  {
    id: 77,
    difficulty: "medium",
    category: "consumer",
    question: "What does 'fetch.min.bytes' do?",
    options: [
      "Sets the minimum size of a message",
      "Sets the minimum amount of data the broker should return to a consumer in a single fetch request",
      "Limits the total disk space of a topic",
      "Sets the minimum number of consumers in a group"
    ],
    answer: 1,
    explanation: "By increasing fetch.min.bytes, you reduce the number of fetch requests (saving CPU) at the cost of some latency while data accumulates.",
    hint: "Batching data for the consumer."
  },
  {
    id: 78,
    difficulty: "medium",
    category: "producer",
    question: "What is the default 'partitioner.class' for Kafka Producers if no key is provided?",
    options: [
      "RoundRobinPartitioner",
      "DefaultPartitioner (Sticky Partitioner since 2.4)",
      "HashPartitioner",
      "RandomPartitioner"
    ],
    answer: 1,
    explanation: "Modern Kafka uses the Sticky Partitioner, which tries to fill a batch for one partition before moving to the next, improving throughput.",
    hint: "Efficient batching logic."
  },
  {
    id: 79,
    difficulty: "hard",
    category: "architecture",
    question: "How does Kafka handle 'Zombie Producers' in a transactional setting?",
    options: [
      "By deleting the producer's data",
      "Using an 'epoch' (Producer ID + Producer Epoch) to fence out older producer instances",
      "By requiring a manual restart of the broker",
      "Zombie producers are not possible in Kafka"
    ],
    answer: 1,
    explanation: "Transactions use an epoch to ensure that if a new instance of a producer starts, any old instance (the zombie) is rejected when it tries to commit.",
    hint: "Fencing older instances."
  },
  {
    id: 80,
    difficulty: "medium",
    category: "administration",
    question: "What is the purpose of the 'kafka-reassign-partitions.sh' tool?",
    options: [
      "To rename a topic",
      "To move partitions to different brokers (e.g., when adding a new broker to the cluster)",
      "To delete partitions",
      "To change the leader of a partition"
    ],
    answer: 1,
    explanation: "This tool is used for balancing the cluster. When you add nodes, Kafka doesn't automatically move data; you must use this tool to redistribute load.",
    hint: "Moving data between brokers."
  },
  {
    id: 81,
    difficulty: "easy",
    category: "fundamentals",
    question: "What is the 'Bootstrap Servers' list in a Kafka client config?",
    options: [
      "A complete list of all brokers in the cluster",
      "An initial list of brokers used to discover the full cluster membership and metadata",
      "The list of consumers in a group",
      "A list of database servers"
    ],
    answer: 1,
    explanation: "The client only needs to connect to one or two brokers (the bootstrap) to receive the 'Metadata Response' containing the full list of brokers.",
    hint: "Initial contact point."
  },
  {
    id: 82,
    difficulty: "medium",
    category: "consumer",
    question: "In a consumer, what is the 'session.timeout.ms'?",
    options: [
      "The time a consumer waits for a message",
      "The time the Group Coordinator waits to hear a heartbeat before marking a consumer as dead",
      "The time the consumer takes to process a batch",
      "The time until the offset expires"
    ],
    answer: 1,
    explanation: "If no heartbeat is received within this time, the coordinator triggers a rebalance and reassigns the consumer's partitions.",
    hint: "Detection time for consumer failure."
  },
  {
    id: 83,
    difficulty: "hard",
    category: "consumer",
    question: "What is the 'max.poll.interval.ms' setting used for?",
    options: [
      "The maximum time between heartbeats",
      "The maximum time the consumer can take to process messages before it's considered stuck and leaves the group",
      "The time until the consumer stops polling entirely",
      "The maximum size of a poll request"
    ],
    answer: 1,
    explanation: "This prevents 'livelock' where a consumer is sending heartbeats but its processing thread is blocked and not actually doing work.",
    hint: "Processing time limit."
  },
  {
    id: 84,
    difficulty: "medium",
    category: "administration",
    question: "Which metric is the most important to monitor for consumer health?",
    options: [
      "Producer throughput",
      "Consumer Lag",
      "Broker CPU usage",
      "The number of partitions"
    ],
    answer: 1,
    explanation: "Consumer Lag (the distance between the latest message and the consumer's offset) tells you if your application is keeping up with real-time data.",
    hint: "How far behind are we?"
  },
  {
    id: 85,
    difficulty: "hard",
    category: "architecture",
    question: "What does 'min.insync.replicas' do when 'acks=all'?",
    options: [
      "Sets the number of followers that must be in the cluster",
      "Defines the minimum number of replicas that must acknowledge the write for it to be successful",
      "Forces Kafka to always have 3 replicas",
      "Guarantees that no data is ever lost"
    ],
    answer: 1,
    explanation: "If acks=all and the number of ISRs is below this value, the producer will get a NotEnoughReplicas error, ensuring durability requirements are met.",
    hint: "Minimum threshold for successful writes."
  },
  {
    id: 86,
    difficulty: "medium",
    category: "fundamentals",
    question: "What is the difference between a 'Topic' and a 'Log'?",
    options: [
      "A Topic is a logical name; a Log is the physical storage of messages in that topic",
      "A Log is for errors only; a Topic is for data",
      "There is no difference",
      "A Topic is stored in RAM; a Log is on disk"
    ],
    answer: 0,
    explanation: "A Kafka topic is essentially a categorized stream of messages, physically implemented as a set of partitioned logs on the brokers.",
    hint: "Logical vs. Physical."
  },
  {
    id: 87,
    difficulty: "medium",
    category: "producer",
    question: "What is the 'RecordAccumulator' in the Kafka Producer?",
    options: [
      "A component that counts the number of errors",
      "A buffer that groups records into batches per partition for efficient transmission",
      "The database that stores producer history",
      "A tool for calculating message size"
    ],
    answer: 1,
    explanation: "It holds the records in memory until they are ready to be sent as a batch to the broker, controlled by linger.ms and batch.size.",
    hint: "The producer's batching area."
  },
  {
    id: 88,
    difficulty: "hard",
    category: "architecture",
    question: "What is 'Jitter' in the context of producer retries?",
    options: [
      "Network noise",
      "Adding a small random delay to retry intervals to prevent 'Thundering Herd' scenarios",
      "A type of data corruption",
      "A security vulnerability"
    ],
    answer: 1,
    explanation: "Jitter ensures that thousands of producers don't all retry at the exact same millisecond, which could overwhelm the broker.",
    hint: "Randomizing retry timing."
  },
  {
    id: 89,
    difficulty: "medium",
    category: "administration",
    question: "What does the 'Segment Roll' mean in Kafka?",
    options: [
      "Deleting a topic",
      "The closing of a current segment file and the creation of a new one based on size or time limits",
      "Moving data to a new broker",
      "Restarting the broker"
    ],
    answer: 1,
    explanation: "Kafka logs are split into segments. A roll happens when a segment reaches 'log.segment.bytes' or 'log.roll.ms'.",
    hint: "Starting a new log file."
  },
  {
    id: 90,
    difficulty: "hard",
    category: "consumer",
    question: "In Kafka Consumers, what is the 'Committed Offset'?",
    options: [
      "The position the consumer is currently reading",
      "The last offset that has been successfully acknowledged by the consumer and stored in __consumer_offsets",
      "The highest offset in the topic",
      "The offset of the first message"
    ],
    answer: 1,
    explanation: "This is the checkpoint. If a consumer crashes, it will resume from the last committed offset.",
    hint: "The saved progress point."
  },
  {
    id: 91,
    difficulty: "medium",
    category: "security",
    question: "What does 'SSL Client Authentication' provide?",
    options: [
      "Encryption only",
      "Both encryption and a way for the broker to verify the identity of the client via certificates",
      "A faster connection",
      "The ability to bypass ACLs"
    ],
    answer: 1,
    explanation: "Standard SSL provides encryption. Client Auth (mTLS) requires the client to present its own certificate to prove who it is.",
    hint: "Two-way certificate check."
  },
  {
    id: 92,
    difficulty: "hard",
    category: "architecture",
    question: "What is a 'Fenced' broker in KRaft?",
    options: [
      "A broker that is behind a firewall",
      "A broker that has lost its connection to the controller quorum and is no longer part of the active cluster",
      "A broker with a full disk",
      "A broker that is being deleted"
    ],
    answer: 1,
    explanation: "In KRaft, if a broker fails to send heartbeats to the controller, it is fenced, and its leaders are reassigned.",
    hint: "Isolated from the quorum."
  },
  {
    id: 93,
    difficulty: "medium",
    category: "serialization",
    question: "In Schema Registry, what is 'FULL' compatibility?",
    options: [
      "All schemas ever created are compatible",
      "Both Backward and Forward compatibility (New reads Old AND Old reads New)",
      "The schema has 100% of the data",
      "JSON is converted to XML"
    ],
    answer: 1,
    explanation: "Full compatibility ensures you can upgrade producers and consumers in any order without breaking the system.",
    hint: "Bidirectional versioning."
  },
  {
    id: 94,
    difficulty: "medium",
    category: "administration",
    question: "Which tool is used to view the contents of a segment's index file?",
    options: [
      "kafka-run-class.sh kafka.tools.DumpLogSegments",
      "cat <filename>",
      "kafka-console-consumer.sh",
      "kafka-topics.sh"
    ],
    answer: 0,
    explanation: "DumpLogSegments is the internal tool used to inspect the binary log and index files for troubleshooting.",
    hint: "Dumping the log binary."
  },
  {
    id: 95,
    difficulty: "hard",
    category: "architecture",
    question: "What is the 'Purge' operation in a Kafka cluster?",
    options: [
      "Deleting a topic",
      "Using the administrative API to delete all messages in a topic up to a specific offset",
      "A security sweep",
      "Clearing the producer's RAM"
    ],
    answer: 1,
    explanation: "Administrators can 'truncate' the log by deleting messages before a certain offset using the DeleteRecords API.",
    hint: "Deleting messages without deleting the topic."
  },
  {
    id: 96,
    difficulty: "easy",
    category: "fundamentals",
    question: "True or False: Kafka messages are immutable.",
    options: ["True", "False"],
    answer: 0,
    explanation: "Once a message is written to the log, it cannot be changed. If you need to update a value, you write a new version of the message.",
    hint: "Append-only nature."
  },
  {
    id: 97,
    difficulty: "medium",
    category: "producer",
    question: "Which producer setting prevents data loss in case of a broker failure by ensuring data is on disk before acking?",
    options: [
      "acks=1",
      "acks=all",
      "retries=max",
      "linger.ms=100"
    ],
    answer: 1,
    explanation: "acks=all (with proper ISR/min.insync.replicas) ensures multiple brokers have the data, making it highly unlikely that the data will be lost if one fails.",
    hint: "Highest safety level."
  },
  {
    id: 98,
    difficulty: "medium",
    category: "administration",
    question: "How do you identify 'Skewed Partitions' in a cluster?",
    options: [
      "Look for partitions with different numbers of replicas",
      "Look for partitions that have significantly more data or traffic than others on the same topic",
      "Check the broker's clock",
      "Use the kafka-topics.sh --describe command"
    ],
    answer: 1,
    explanation: "Skew occurs when keys are not distributed evenly, leading to some brokers working much harder than others.",
    hint: "Uneven data distribution."
  },
  {
    id: 99,
    difficulty: "hard",
    category: "consumer",
    question: "What is the 'Internal Offset Topic' name in Kafka?",
    options: [
      "__kafka_offsets",
      "__consumer_offsets",
      "system.offsets",
      "offsets.log"
    ],
    answer: 1,
    explanation: "Kafka stores all consumer group offsets in a special internal, compacted topic named __consumer_offsets.",
    hint: "The internal storage for checkpoints."
  },
  {
    id: 100,
    difficulty: "hard",
    category: "architecture",
    question: "What is the role of 'Follower' replicas during a normal produce/consume flow?",
    options: [
      "They serve read requests for all clients",
      "They only replicate data from the leader to provide redundancy",
      "They delete old data",
      "They manage the consumer groups"
    ],
    answer: 1,
    explanation: "Traditionally, followers only fetch data from leaders. (Note: Since Kafka 2.4, consumers CAN read from closest followers to save cross-AZ costs, but redundancy is their primary role).",
    hint: "Replication and standby."
  },
  {
    id: 101,
    difficulty: "medium",
    category: "kafka_connect",
    question: "What is the primary purpose of Kafka Connect?",
    options: [
      "To provide a GUI for Kafka",
      "To simplify the streaming of data between Kafka and external systems (databases, file systems, etc.)",
      "To replace the Kafka Producer API",
      "To manage broker security"
    ],
    answer: 1,
    explanation: "Kafka Connect is a framework for connecting Kafka with external data sources (Source Connectors) and sinks (Sink Connectors) using a configuration-based approach.",
    hint: "A bridge to external systems."
  },
  {
    id: 102,
    difficulty: "hard",
    category: "kafka_connect",
    question: "In Kafka Connect, what is a 'Converter'?",
    options: [
      "A tool to change the broker ID",
      "A component that transforms data between Kafka Connect's internal format and the serialized format (e.g., Avro, JSON, Protobuf)",
      "A hardware device for the network",
      "A script to convert Java to Python"
    ],
    answer: 1,
    explanation: "Converters are used to serialize and deserialize data as it moves in and out of Kafka via Connectors.",
    hint: "Serialization handler in Connect."
  },
  {
    id: 103,
    difficulty: "medium",
    category: "kafka_streams",
    question: "What is a 'KStream' in the Kafka Streams API?",
    options: [
      "A snapshot of the current state of a topic",
      "An unbounded, continuous stream of individual records (an insert-only stream)",
      "A tool for deleting topics",
      "A list of all brokers"
    ],
    answer: 1,
    explanation: "A KStream represents a stream of records where each record is an independent piece of information in the dataset.",
    hint: "The 'record stream' concept."
  },
  {
    id: 104,
    difficulty: "hard",
    category: "kafka_streams",
    question: "What is the duality between a KStream and a KTable?",
    options: [
      "They are unrelated",
      "A KStream is a log of changes, while a KTable is the current state (like a database table)",
      "A KTable is for writing; a KStream is for reading",
      "One is only for strings, the other for numbers"
    ],
    answer: 1,
    explanation: "A KTable is essentially a view of a KStream that tracks the 'last known value' for each key, representing state.",
    hint: "Stream as changes, Table as state."
  },
  {
    id: 105,
    difficulty: "medium",
    category: "ksqldb",
    question: "What is ksqlDB?",
    options: [
      "A replacement for Oracle Database",
      "An event streaming database that allows you to process Kafka data using SQL syntax",
      "A security plugin for Kafka",
      "A tool for managing Zookeeper"
    ],
    answer: 1,
    explanation: "ksqlDB abstracts the Kafka Streams API into a SQL-like interface, making it easier to build stream processing applications.",
    hint: "SQL for streaming."
  },
  {
    id: 106,
    difficulty: "hard",
    category: "kafka_streams",
    question: "What is 'State Store' in Kafka Streams?",
    options: [
      "A remote database used by Kafka",
      "A local storage (often RocksDB) used to store the state of stateful operations like joins and aggregations",
      "The RAM used by the broker",
      "A list of active consumers"
    ],
    answer: 1,
    explanation: "Kafka Streams uses state stores to allow for stateful processing without needing to call an external database for every record.",
    hint: "Local state for joins/aggregations."
  },
  {
    id: 107,
    difficulty: "medium",
    category: "kafka_connect",
    question: "What is a 'Distributed' Kafka Connect cluster?",
    options: [
      "A cluster that runs on one machine",
      "A cluster where multiple workers share the load of running connectors and tasks for high availability and scalability",
      "A group of brokers",
      "A way to connect to multiple Zookeepers"
    ],
    answer: 1,
    explanation: "In distributed mode, Kafka Connect uses a group of workers that automatically rebalance connector tasks if a worker fails.",
    hint: "Multi-worker Connect setup."
  },
  {
    id: 108,
    difficulty: "hard",
    category: "kafka_connect",
    question: "What is a 'Single Message Transform' (SMT) in Kafka Connect?",
    options: [
      "A way to delete an entire topic",
      "A lightweight transformation applied to individual records as they pass through a connector (e.g., masking a field)",
      "A tool for bulk-loading data",
      "A compression algorithm"
    ],
    answer: 1,
    explanation: "SMTs allow you to modify data (like renaming a field or dropping a column) without needing a full-blown Kafka Streams application.",
    hint: "Record-by-record transformation."
  },
  {
    id: 109,
    difficulty: "medium",
    category: "kafka_streams",
    question: "In Kafka Streams, what is a 'Topology'?",
    options: [
      "A map of the network cables",
      "The directed acyclic graph (DAG) of processing nodes that represent the transformation logic",
      "The list of partitions in a topic",
      "The hardware configuration of the brokers"
    ],
    answer: 1,
    explanation: "The topology defines how data flows from source topics through various transformations to sink topics or state stores.",
    hint: "The processing logic graph."
  },
  {
    id: 110,
    difficulty: "hard",
    category: "kafka_streams",
    question: "What is 'Tumbling Window' in Kafka Streams?",
    options: [
      "A window that overlaps with other windows",
      "A fixed-size, non-overlapping, and contiguous time window",
      "A window that moves every time a message arrives",
      "A way to delete old data"
    ],
    answer: 1,
    explanation: "Tumbling windows are defined by a fixed time interval (e.g., 5 minutes) and do not overlap. A record belongs to exactly one window.",
    hint: "Fixed-size, no overlap."
  },
  {
    id: 111,
    difficulty: "medium",
    category: "kafka_connect",
    question: "What does the 'Offset Storage Topic' do in Kafka Connect Distributed mode?",
    options: [
      "Stores the log of all messages",
      "Stores the progress (offsets) of the source or sink connectors to allow for resuming after a restart",
      "Stores the password for the database",
      "Stores the connector configuration"
    ],
    answer: 1,
    explanation: "This internal topic ensures that if a Connect worker crashes, another worker can pick up where it left off.",
    hint: "Connector checkpoint storage."
  },
  {
    id: 112,
    difficulty: "hard",
    category: "ksqldb",
    question: "In ksqlDB, what is the difference between a 'Push Query' and a 'Pull Query'?",
    options: [
      "They are the same",
      "Push Query is a continuous stream of updates; Pull Query is a point-in-time lookup of the current state",
      "Push is for writing; Pull is for reading",
      "Push Query is faster than Pull Query"
    ],
    answer: 1,
    explanation: "Push queries stay open and send new results as events arrive. Pull queries return the current value from a materialized view and finish.",
    hint: "Continuous stream vs. Point-in-time lookup."
  },
  {
    id: 113,
    difficulty: "medium",
    category: "kafka_streams",
    question: "What is 'Stateless Processing' in Kafka Streams?",
    options: [
      "Processing that doesn't use RAM",
      "Operations like filter() or map() that do not require information from previous records",
      "Processing that only works with strings",
      "A way to run Kafka without a database"
    ],
    answer: 1,
    explanation: "Stateless operations look at each record in isolation and do not require a state store.",
    hint: "No history required."
  },
  {
    id: 114,
    difficulty: "hard",
    category: "kafka_streams",
    question: "What is 'GlobalKTable' and how does it differ from a regular KTable?",
    options: [
      "GlobalKTable is stored on every instance of the application, allowing for joins with any record without re-partitioning",
      "GlobalKTable is stored in the cloud; KTable is local",
      "GlobalKTable only stores keys",
      "GlobalKTable is slower than KTable"
    ],
    answer: 0,
    explanation: "A regular KTable is partitioned like a topic. A GlobalKTable is replicated in full to every application instance, making 'Broadcast Joins' possible.",
    hint: "Fully replicated state vs. Partitioned state."
  },
  {
    id: 115,
    difficulty: "medium",
    category: "kafka_connect",
    question: "Which connector would you use to move data from a Postgres database into Kafka in real-time?",
    options: [
      "S3 Sink Connector",
      "JDBC Source Connector (or Debezium for CDC)",
      "Elasticsearch Sink Connector",
      "HTTP Source Connector"
    ],
    answer: 1,
    explanation: "JDBC is a general standard, while Debezium is specifically optimized for Change Data Capture (CDC) from databases.",
    hint: "Source from a relational DB."
  },
  {
    id: 116,
    difficulty: "hard",
    category: "architecture",
    question: "What is 'Changelog Topic' in Kafka Streams?",
    options: [
      "A topic that stores every single message ever sent",
      "An internal topic that backs up a state store to ensure the state can be restored if the application crashes",
      "A topic used for security logs",
      "A topic that stores the application code"
    ],
    answer: 1,
    explanation: "To make local state stores fault-tolerant, Kafka Streams writes every update to a compacted 'changelog' topic in Kafka.",
    hint: "Backup for the state store."
  },
  {
    id: 117,
    difficulty: "medium",
    category: "ksqldb",
    question: "What does the 'EMIT CHANGES' clause do in a ksqlDB query?",
    options: [
      "It deletes the data",
      "It tells ksqlDB to stream results continuously as they are processed (Push Query)",
      "It changes the schema of the table",
      "It stops the query"
    ],
    answer: 1,
    explanation: "EMIT CHANGES turns a standard SELECT statement into a continuous stream of events.",
    hint: "Making a query continuous."
  },
  {
    id: 118,
    difficulty: "hard",
    category: "kafka_streams",
    question: "What is 'Join Windows' in Kafka Streams?",
    options: [
      "A window used for aggregations",
      "A time-based boundary that defines how close together two records from different streams must be to be joined",
      "A way to join two topics with different partition counts",
      "A security feature for joins"
    ],
    answer: 1,
    explanation: "When joining two KStreams, you must define a window (e.g., 10 minutes) because streams are theoretically infinite.",
    hint: "Temporal alignment for stream joins."
  },
  {
    id: 119,
    difficulty: "medium",
    category: "kafka_connect",
    question: "What is the role of a 'Worker' in Kafka Connect?",
    options: [
      "A physical machine or container that executes connector tasks",
      "A person who manages Kafka",
      "A special type of broker",
      "A tool for writing Java code"
    ],
    answer: 0,
    explanation: "Workers are the JVM processes that run the Connector and Task logic.",
    hint: "The runtime process for Connect."
  },
  {
    id: 120,
    difficulty: "hard",
    category: "kafka_streams",
    question: "How does Kafka Streams handle 'Late-Arriving Data'?",
    options: [
      "It deletes the data immediately",
      "By using 'Grace Periods' on windowed operations to allow for a certain amount of delay before closing the window",
      "By slowing down the entire cluster",
      "By ignoring the timestamp"
    ],
    answer: 1,
    explanation: "Grace periods allow the application to process records that arrive after the window has technically ended due to network or processing delays.",
    hint: "Windowing with a buffer for delays."
  },
  {
    id: 121,
    difficulty: "medium",
    category: "fundamentals",
    question: "Which component of the Confluent Platform provides a central location for managing schemas?",
    options: ["Control Center", "Schema Registry", "KSQL", "Rest Proxy"],
    answer: 1,
    explanation: "Schema Registry stores a versioned history of Avro, JSON, or Protobuf schemas and enforces compatibility rules.",
    hint: "The metadata store for schemas."
  },
  {
    id: 122,
    difficulty: "hard",
    category: "kafka_streams",
    question: "What is 'Co-partitioning' in the context of Joins?",
    options: [
      "Ensuring two topics have the same name",
      "Ensuring two topics have the same number of partitions and use the same partitioning strategy for joining",
      "Storing data in the same broker",
      "Using the same compression"
    ],
    answer: 1,
    explanation: "For a KStream-KStream or KStream-KTable join, records with the same key must reside in the same partition index on both topics.",
    hint: "Prerequisite for local joins."
  },
  {
    id: 123,
    difficulty: "medium",
    category: "kafka_connect",
    question: "What happens if a Kafka Connect task fails?",
    options: [
      "The entire cluster shuts down",
      "The status is reported as FAILED, and it must typically be restarted manually or via API (unless using an auto-restart tool)",
      "The task is automatically deleted",
      "The broker takes over the task"
    ],
    answer: 1,
    explanation: "Unlike consumer groups, Kafka Connect does not automatically restart failed tasks; it requires intervention or an external manager.",
    hint: "Manual vs. Automatic task recovery."
  },
  {
    id: 124,
    difficulty: "hard",
    category: "ksqldb",
    question: "In ksqlDB, what is a 'Materialized View'?",
    options: [
      "A picture of the database",
      "A table created from a stream that maintains the latest state and can be queried with low latency",
      "A backup of the topic",
      "A temporary result that is deleted after 5 minutes"
    ],
    answer: 1,
    explanation: "Materialized views are stored in local state stores (RocksDB) and are updated in real-time as new events arrive.",
    hint: "Queryable state from a stream."
  },
  {
    id: 125,
    difficulty: "medium",
    category: "kafka_streams",
    question: "What is the default state-store engine used by Kafka Streams?",
    options: ["MySQL", "Redis", "RocksDB", "MongoDB"],
    answer: 2,
    explanation: "RocksDB is an embedded, high-performance key-value store used by Kafka Streams for persistent local state.",
    hint: "Embedded key-value store."
  },
  {
    id: 126,
    difficulty: "hard",
    category: "architecture",
    question: "What is 'Exactly-Once Semantics' (EOS) in Kafka?",
    options: [
      "A setting that makes Kafka 100% slower",
      "A combination of idempotent producers and atomic transactions across multiple partitions/topics",
      "A way to only send one message per day",
      "A setting that only works with one broker"
    ],
    answer: 1,
    explanation: "EOS ensures that even in the face of failures, the result of a process-transform-write cycle is as if the data was processed exactly once.",
    hint: "Idempotence + Transactions."
  },
  {
    id: 127,
    difficulty: "medium",
    category: "administration",
    question: "What does the 'confluent.support.metrics.enable' setting do?",
    options: [
      "Speeds up the cluster",
      "Sends anonymous usage and health metrics to Confluent to help with support",
      "Deletes old metrics",
      "Enables the Prometheus exporter"
    ],
    answer: 1,
    explanation: "This is a Confluent-specific feature used for proactive support and license management.",
    hint: "Support-oriented telemetry."
  },
  {
    id: 128,
    difficulty: "hard",
    category: "kafka_streams",
    question: "What is 'Hopping Window' in Kafka Streams?",
    options: [
      "A window that is only active during the day",
      "Fixed-size windows that can overlap (defined by window size and advance interval)",
      "A window that changes size dynamically",
      "A window used for single records"
    ],
    answer: 1,
    explanation: "For example, a 5-minute window that 'hops' every 1 minute. This results in overlapping time segments.",
    hint: "Fixed size, possible overlap."
  },
  {
    id: 129,
    difficulty: "medium",
    category: "kafka_connect",
    question: "What is 'Dead Letter Queue' (DLQ) in Kafka Connect?",
    options: [
      "A topic where Kafka stores deleted topics",
      "A topic where sink connectors send records that failed to be processed (e.g., due to serialization errors)",
      "A tool for managing dead brokers",
      "A way to encrypt messages"
    ],
    answer: 1,
    explanation: "DLQs allow the connector to keep running while setting aside 'bad' data for later inspection. Only available for Sink connectors.",
    hint: "Handling error records in Connect."
  },
  {
    id: 130,
    difficulty: "hard",
    category: "kafka_streams",
    question: "What does 'processing.guarantee' set to 'exactly_once_v2' do?",
    options: [
      "It disables all security",
      "It enables the latest, most efficient implementation of Exactly-Once processing in Kafka Streams",
      "It makes the application read-only",
      "It forces the application to use Zookeeper"
    ],
    answer: 1,
    explanation: "Exactly_once_v2 (introduced in 2.5) reduces the overhead of transactions by using a more efficient mechanism for task fencing.",
    hint: "Efficient EOS setting."
  },
  {
    id: 131,
    difficulty: "easy",
    category: "ksqldb",
    question: "Which ksqlDB statement is used to create a stream from an existing Kafka topic?",
    options: ["CREATE TABLE", "CREATE STREAM", "INSERT INTO", "SELECT ALL"],
    answer: 1,
    explanation: "CREATE STREAM allows you to define the schema and the underlying topic for a new stream object.",
    hint: "The stream creation command."
  },
  {
    id: 132,
    difficulty: "medium",
    category: "kafka_connect",
    question: "What is the purpose of 'Config Providers' in Kafka Connect?",
    options: [
      "To store the cluster code",
      "To securely pull secrets (like passwords) from external sources like Vault or environment variables instead of hardcoding them",
      "To manage the number of workers",
      "To provide the GUI"
    ],
    answer: 1,
    explanation: "Config Providers ensure sensitive information is not stored in plain text in connector configuration files.",
    hint: "Secret management for Connect."
  },
  {
    id: 133,
    difficulty: "hard",
    category: "kafka_streams",
    question: "What is a 'Processor' in the Kafka Streams Processor API (PAPI)?",
    options: [
      "A hardware CPU",
      "A low-level node that allows you to define custom logic and interact directly with state stores",
      "A script that runs on the broker",
      "A tool for monitoring RAM"
    ],
    answer: 1,
    explanation: "PAPI is the low-level alternative to the Streams DSL, giving you maximum control over the processing logic.",
    hint: "Low-level custom logic node."
  },
  {
    id: 134,
    difficulty: "medium",
    category: "ksqldb",
    question: "What is the 'rowkey' in ksqlDB?",
    options: [
      "A unique ID for every column",
      "A system column representing the Kafka message key",
      "A tool for encrypting rows",
      "The timestamp of the row"
    ],
    answer: 1,
    explanation: "In ksqlDB, ROWKEY is a special alias that allows you to access or manipulate the underlying Kafka key.",
    hint: "The ksqlDB alias for message keys."
  },
  {
    id: 135,
    difficulty: "hard",
    category: "kafka_streams",
    question: "What is 'Interactive Queries' in Kafka Streams?",
    options: [
      "A way to chat with other developers",
      "A feature that allows you to query the local state stores of a Kafka Streams application from an external service",
      "A tool for debugging code",
      "A command-line interface for the broker"
    ],
    answer: 1,
    explanation: "This allows you to treat your streaming application like a distributed database by exposing its state via an API (e.g., REST).",
    hint: "Querying application state from outside."
  },
  {
    id: 136,
    difficulty: "medium",
    category: "administration",
    question: "What is 'Confluent Control Center' used for?",
    options: [
      "To write Java code",
      "A web-based GUI for managing and monitoring Kafka clusters, connectors, and streams",
      "A replacement for Zookeeper",
      "A way to run Kafka on a phone"
    ],
    answer: 1,
    explanation: "Control Center is the management console for the Confluent Platform, providing deep visibility into cluster health and data streams.",
    hint: "The visual management UI."
  },
  {
    id: 137,
    difficulty: "hard",
    category: "kafka_streams",
    question: "What is 'Punctuator' in Kafka Streams?",
    options: [
      "A tool for correcting grammar",
      "A function that executes at regular intervals (based on stream-time or wall-clock time) in the Processor API",
      "A type of network error",
      "A way to stop the application"
    ],
    answer: 1,
    explanation: "Punctuators allow you to perform periodic tasks, such as clearing a cache or emitting a summary, independent of incoming records.",
    hint: "Scheduled task within the processor."
  },
  {
    id: 138,
    difficulty: "medium",
    category: "kafka_connect",
    question: "Which Kafka Connect property ensures that the connector can find its plugin JAR files?",
    options: ["jar.path", "plugin.path", "connect.libs", "worker.plugins"],
    answer: 1,
    explanation: "The plugin.path must contain the directories where the connector's binaries and dependencies are located.",
    hint: "The path to the plugins."
  },
  {
    id: 139,
    difficulty: "hard",
    category: "ksqldb",
    question: "What is a 'Persistent Query' in ksqlDB?",
    options: [
      "A query that runs for 5 minutes",
      "A server-side query (like CREATE STREAM AS SELECT) that runs continuously until manually terminated",
      "A query that is saved in a text file",
      "A query that only looks at historical data"
    ],
    answer: 1,
    explanation: "Persistent queries are the backbone of ksqlDB applications; they are managed by the server and survive restarts.",
    hint: "Continuous server-side processing."
  },
  {
    id: 140,
    difficulty: "medium",
    category: "kafka_streams",
    question: "What is 'Session Window' in Kafka Streams?",
    options: [
      "A window that lasts exactly 1 hour",
      "A window that groups records based on activity and 'inactivity gaps' rather than fixed time boundaries",
      "A window for security logins",
      "A way to delete data"
    ],
    answer: 1,
    explanation: "Session windows are useful for user behavior analysis, where a session ends if no data is received for a specified 'gap' time.",
    hint: "Activity-based windowing."
  },
  {
    id: 141,
    difficulty: "hard",
    category: "architecture",
    question: "What is 'Tiered Storage' in Confluent/Kafka?",
    options: [
      "Storing data on different types of brokers",
      "Offloading older log segments to cost-effective object storage (like S3 or GCS) while keeping them accessible to consumers",
      "A way to rank the importance of topics",
      "A security level"
    ],
    answer: 1,
    explanation: "Tiered Storage allows for nearly infinite data retention by separating compute (brokers) from long-term storage (cloud buckets).",
    hint: "Log offloading to cloud storage."
  },
  {
    id: 142,
    difficulty: "medium",
    category: "kafka_connect",
    question: "What is a 'Connector' vs a 'Task' in Kafka Connect?",
    options: [
      "They are the same thing",
      "A Connector is the logical job; Tasks are the parallel units of work that actually move the data",
      "Tasks are for sources; Connectors are for sinks",
      "Connectors are in Java; Tasks are in SQL"
    ],
    answer: 1,
    explanation: "A connector coordinates the overall job, but it splits the workload into one or more tasks to enable parallelism.",
    hint: "Logical job vs. physical unit of work."
  },
  {
    id: 143,
    difficulty: "hard",
    category: "kafka_streams",
    question: "What is 'Wall-clock time' vs 'Stream-time' in Kafka Streams?",
    options: [
      "Wall-clock is the actual time now; Stream-time is based on the timestamps in the data records",
      "They are the same",
      "Wall-clock is for brokers; Stream-time is for consumers",
      "Stream-time is always faster"
    ],
    answer: 0,
    explanation: "Kafka Streams is 'data-driven.' It advances its internal clock based on the timestamps of the messages it processes, not the system clock.",
    hint: "Current time vs. Data-driven time."
  },
  {
    id: 144,
    difficulty: "medium",
    category: "ksqldb",
    question: "What does 'ASSERT' do in ksqlDB?",
    options: [
      "It deletes data",
      "It is used in testing to verify that a condition is met (e.g., checking if a stream contains a specific value)",
      "It encrypts the table",
      "It stops the server"
    ],
    answer: 1,
    explanation: "ASSERT is often used in automated ksqlDB testing to validate the output of stream processing logic.",
    hint: "Logical verification."
  },
  {
    id: 145,
    difficulty: "hard",
    category: "administration",
    question: "What is the purpose of the 'Cluster Linking' feature in Confluent?",
    options: [
      "To connect two brokers",
      "To mirror topics across different clusters (e.g., across regions) without needing MirrorMaker 2",
      "To merge two different companies' data",
      "To speed up the network"
    ],
    answer: 1,
    explanation: "Cluster Linking allows for native, byte-for-byte replication between clusters, preserving offsets and reducing operational complexity.",
    hint: "Native cluster-to-cluster replication."
  },
  {
    id: 146,
    difficulty: "medium",
    category: "kafka_connect",
    question: "What is the 'tasks.max' configuration in Kafka Connect?",
    options: [
      "The total number of tasks in the entire cluster",
      "The maximum number of parallel tasks a specific connector can create",
      "The number of CPU cores",
      "The maximum number of messages per task"
    ],
    answer: 1,
    explanation: "This allows you to control the parallelism of a connector. If a topic has 10 partitions, setting tasks.max=10 allows each task to handle one partition.",
    hint: "Connector parallelism limit."
  },
  {
    id: 147,
    difficulty: "hard",
    category: "kafka_streams",
    question: "What is 'Record Cache' in Kafka Streams?",
    options: [
      "A way to store all messages in RAM",
      "An internal cache used to deduplicate and compact updates to the state store before writing them to the changelog",
      "A security tool",
      "The OS page cache"
    ],
    answer: 1,
    explanation: "Caching reduces the traffic to Kafka's internal changelog topics by only sending the 'final' update for a key within a certain timeframe.",
    hint: "State store write-reduction."
  },
  {
    id: 148,
    difficulty: "medium",
    category: "ksqldb",
    question: "Which ksqlDB command shows you the list of currently running persistent queries?",
    options: ["SHOW QUERIES", "LIST STREAMS", "DESCRIBE TOPIC", "GET STATUS"],
    answer: 0,
    explanation: "SHOW QUERIES provides the query ID, status, and the SQL statement for all active persistent queries.",
    hint: "Viewing active queries."
  },
  {
    id: 149,
    difficulty: "hard",
    category: "architecture",
    question: "What is the 'Self-Balancing Clusters' feature in Confluent?",
    options: [
      "A way for the broker to fix its own hardware",
      "An automated mechanism that monitors cluster load and reassigns partitions to balance throughput and disk usage across brokers",
      "A tool for deleting old topics",
      "A way to automatically scale the number of consumers"
    ],
    answer: 1,
    explanation: "This automates the work usually done manually with the partition reassignment tool, ensuring the cluster stays balanced.",
    hint: "Automatic data redistribution."
  },
  {
    id: 150,
    difficulty: "medium",
    category: "kafka_connect",
    question: "In a Kafka Connect Sink connector, what happens if the external system is unavailable?",
    options: [
      "The connector deletes the messages",
      "The task will retry based on its configuration and eventually fail if the system stays down",
      "The broker crashes",
      "The messages are sent to Zookeeper"
    ],
    answer: 1,
    explanation: "Connectors have retry logic. If all retries fail, the task stops, and the error must be resolved before restarting the task.",
    hint: "Error handling for external failures."
  },
  {
    id: 151,
    difficulty: "medium",
    category: "security",
    question: "In Kafka, what is the default behavior if no Access Control Lists (ACLs) are defined for a topic?",
    options: [
      "All users are denied access",
      "All users have full access (if no authorizer is configured)",
      "Only the super-user has access",
      "The topic is automatically deleted"
    ],
    answer: 1,
    explanation: "If an authorizer is not configured, Kafka defaults to no security. Once an authorizer is enabled, the default changes to 'deny' unless an explicit ACL or super-user status exists.",
    hint: "Think about Kafka's 'open-by-default' start."
  },
  {
    id: 152,
    difficulty: "hard",
    category: "security",
    question: "Which security protocol should be used for end-to-end encryption between a producer and a broker?",
    options: ["SASL_PLAINTEXT", "SSL", "PLAINTEXT", "SASL_SCRAM"],
    answer: 1,
    explanation: "SSL (or TLS) provides encryption for data in transit. SASL is for authentication; if you want both, you use SASL_SSL.",
    hint: "Encryption of the wire."
  },
  {
    id: 153,
    difficulty: "medium",
    category: "security",
    question: "What is the primary role of 'Principal' in Kafka ACLs?",
    options: [
      "The leader of the cluster",
      "The identifier of the user or service attempting the operation (e.g., User:Alice)",
      "A type of broker",
      "The main partition of a topic"
    ],
    answer: 1,
    explanation: "A Principal represents the identity (User) being granted or denied permissions in an ACL entry.",
    hint: "Who is the user?"
  },
  {
    id: 154,
    difficulty: "hard",
    category: "security",
    question: "When using Kerberos (GSSAPI) for authentication, what is the 'Keytab' file used for?",
    options: [
      "To store the message data",
      "To allow a service to authenticate to the KDC without requiring a password in plain text",
      "To encrypt the Kafka log files",
      "To manage consumer offsets"
    ],
    answer: 1,
    explanation: "Keytabs contain pairs of Kerberos principals and encrypted keys, allowing automated services to log in securely.",
    hint: "Headless authentication."
  },
  {
    id: 155,
    difficulty: "medium",
    category: "troubleshooting",
    question: "A producer is receiving 'Expiring 10 record(s) ...: 30001 ms has passed since batch creation plus linger time'. What is the most likely cause?",
    options: [
      "The broker is too fast",
      "The producer cannot connect to the broker or the broker is taking too long to respond (exceeding request.timeout.ms)",
      "The message size is too small",
      "The topic has too many partitions"
    ],
    answer: 1,
    explanation: "This usually points to network issues or broker saturation, where batches are sitting in the producer's queue longer than the allowed delivery timeout.",
    hint: "Timeout in the producer queue."
  },
  {
    id: 156,
    difficulty: "hard",
    category: "security",
    question: "What is 'RBAC' (Role-Based Access Control) in the Confluent Platform?",
    options: [
      "A way to restart brokers",
      "A system that simplifies security by assigning permissions to roles (e.g., Developer, Admin) rather than individual users",
      "A type of data compression",
      "A protocol for Zookeeper"
    ],
    answer: 1,
    explanation: "RBAC allows for scalable security management by grouping permissions into logical roles that map to organizational functions.",
    hint: "Scaling permissions via roles."
  },
  {
    id: 157,
    difficulty: "medium",
    category: "troubleshooting",
    question: "What does a high 'Consumer Lag' typically indicate?",
    options: [
      "The producer is offline",
      "The consumer is processing messages slower than they are being produced",
      "The broker has run out of disk space",
      "The network is too fast"
    ],
    answer: 1,
    explanation: "Lag is the delta between the last produced message and the last consumed message. High lag means the consumer cannot keep up.",
    hint: "Production > Consumption."
  },
  {
    id: 158,
    difficulty: "hard",
    category: "security",
    question: "In Kafka ACLs, what does the 'Resource' type 'Group' control?",
    options: [
      "Access to broker groups",
      "Permissions related to consumer group operations like joining and committing offsets",
      "Permissions to create new users",
      "The ability to group topics together"
    ],
    answer: 1,
    explanation: "The 'Group' resource type is used to authorize consumers to participate in a specific consumer group.",
    hint: "Permissions for the consumer's ID."
  },
  {
    id: 159,
    difficulty: "medium",
    category: "security",
    question: "What is 'SASL_SCRAM' used for?",
    options: [
      "Encrypting disks",
      "A secure username/password authentication mechanism that uses salted challenge-response",
      "Scanning for viruses",
      "Speeding up the producer"
    ],
    answer: 1,
    explanation: "SCRAM (Salted Challenge Response Authentication Mechanism) is more secure than PLAIN because it doesn't send passwords over the wire in a way that can be easily recovered.",
    hint: "Secure salted passwords."
  },
  {
    id: 160,
    difficulty: "hard",
    category: "troubleshooting",
    question: "You see 'LEADER_NOT_AVAILABLE' in your producer logs for a specific partition. What is the first thing you should check?",
    options: [
      "The consumer group status",
      "If the brokers hosting that partition are online and if a leader has been elected",
      "The producer's batch size",
      "The OS version"
    ],
    answer: 1,
    explanation: "This error occurs when the partition has no active leader, often due to a broker crash or a failure in the leader election process.",
    hint: "Check partition health."
  },
  {
    id: 161,
    difficulty: "medium",
    category: "security",
    question: "What is the role of 'allow.everyone.if.no.acl.found' in the authorizer configuration?",
    options: [
      "It deletes all ACLs",
      "When set to true, it allows access to a resource if no specific ACL is defined for it",
      "It forces everyone to use a password",
      "It disables the broker"
    ],
    answer: 1,
    explanation: "This is a transition setting. When false (the secure default for production), any resource without an ACL is denied to everyone except super-users.",
    hint: "Default policy for missing rules."
  },
  {
    id: 162,
    difficulty: "hard",
    category: "security",
    question: "How does Kafka handle 'Wildcard' ACLs?",
    options: [
      "It doesn't support them",
      "By using the '*' character to represent 'all' resources of a certain type or all principals",
      "By using regular expressions",
      "By creating a topic named '*'"
    ],
    answer: 1,
    explanation: "Kafka supports the use of '*' to apply a rule to all topics, all groups, or all users at once.",
    hint: "One rule for everything."
  },
  {
    id: 163,
    difficulty: "medium",
    category: "troubleshooting",
    question: "If a broker's CPU is spiking due to 'Request Handler' load, what is a likely cause?",
    options: [
      "The disk is too slow",
      "Too many small produce requests (lack of batching) or expensive SSL decryption",
      "The topics have too few partitions",
      "The consumer is idle"
    ],
    answer: 1,
    explanation: "Processing thousands of tiny requests per second is CPU-intensive. Improving producer batching or using more efficient security settings can help.",
    hint: "Overhead of many small tasks."
  },
  {
    id: 164,
    difficulty: "hard",
    category: "security",
    question: "What is 'Audit Logging' in a Kafka cluster?",
    options: [
      "Checking the data for spelling errors",
      "Recording security-related events (like who accessed which topic and when) for compliance and forensic analysis",
      "A way to count messages",
      "A backup of the database"
    ],
    answer: 1,
    explanation: "Audit logs provide a trail of 'Who did what' across the cluster, which is essential for regulated industries.",
    hint: "Security activity tracking."
  },
  {
    id: 165,
    difficulty: "medium",
    category: "troubleshooting",
    question: "What happens if a broker runs out of disk space?",
    options: [
      "It automatically deletes the oldest topic",
      "The broker will likely shut down or stop accepting writes for all partitions it leads",
      "It starts sending data to the cloud",
      "It compresses the data with 100% efficiency"
    ],
    answer: 1,
    explanation: "Kafka requires disk space to function. If a disk is full, the broker cannot append to the log and will fail to prevent data corruption.",
    hint: "Total service interruption."
  },
  {
    id: 166,
    difficulty: "hard",
    category: "security",
    question: "In an SSL setup, what is the purpose of the 'Truststore'?",
    options: [
      "To store the private keys of the broker",
      "To store the certificates of the Certificate Authorities (CAs) that the broker should trust",
      "To store the user passwords",
      "To store the audit logs"
    ],
    answer: 1,
    explanation: "The truststore is used to verify the certificates presented by other parties (clients or other brokers).",
    hint: "Verification of others."
  },
  {
    id: 167,
    difficulty: "medium",
    category: "troubleshooting",
    question: "A consumer group is constantly rebalancing. What should you investigate?",
    options: [
      "The number of partitions",
      "Unstable network, consumer heartbeat timeouts, or processing taking longer than max.poll.interval.ms",
      "The topic retention policy",
      "The broker's disk speed"
    ],
    answer: 1,
    explanation: "If a consumer fails to heartbeat or takes too long to process a batch, the group coordinator assumes it's dead and triggers a rebalance.",
    hint: "Check consumer 'health' signals."
  },
  {
    id: 168,
    difficulty: "hard",
    category: "security",
    question: "What is 'Host-based' ACL filtering in Kafka?",
    options: [
      "Restricting access based on the broker's IP",
      "Allowing or denying access based on the IP address of the client (Producer/Consumer)",
      "A way to name the servers",
      "A firewall setting"
    ],
    answer: 1,
    explanation: "Kafka ACLs can include a host field, allowing you to say 'User:Alice can read Topic:A only from IP 192.168.1.5'.",
    hint: "Access by location."
  },
  {
    id: 169,
    difficulty: "medium",
    category: "security",
    question: "Which component is responsible for storing ACLs in a standard Kafka cluster?",
    options: ["The broker log", "Zookeeper (or the __cluster_metadata topic in KRaft)", "The consumer", "A local XML file"],
    answer: 1,
    explanation: "ACLs must be shared across the cluster. Traditionally they lived in Zookeeper; in modern Kafka, they are part of the metadata log.",
    hint: "Shared metadata storage."
  },
  {
    id: 170,
    difficulty: "hard",
    category: "troubleshooting",
    question: "What is a 'Skewed Leader' distribution?",
    options: [
      "When some partitions have more replicas than others",
      "When one or two brokers are the leaders for a disproportionately large number of partitions",
      "When the brokers are in different countries",
      "When the data is encrypted"
    ],
    answer: 1,
    explanation: "This leads to uneven resource usage. One broker might be at 90% CPU while others are at 10%. Preferred leader election fixes this.",
    hint: "Uneven workload on brokers."
  },
  {
    id: 171,
    difficulty: "medium",
    category: "security",
    question: "What does the 'DESCRIBE' operation allow in an ACL?",
    options: [
      "The ability to delete the topic",
      "The ability to view metadata about the resource (e.g., viewing topic configuration or partition count)",
      "The ability to read the actual messages",
      "The ability to change the broker ID"
    ],
    answer: 1,
    explanation: "DESCRIBE is a low-level permission required for many CLI tools and management UIs to simply 'see' that the topic exists.",
    hint: "Metadata-only access."
  },
  {
    id: 172,
    difficulty: "hard",
    category: "security",
    question: "When configuring 'mTLS' (Mutual TLS), who must provide a certificate?",
    options: [
      "Only the broker",
      "Only the client",
      "Both the broker and the client",
      "Neither, only passwords are used"
    ],
    answer: 2,
    explanation: "In mTLS, the broker proves its identity to the client, and the client proves its identity to the broker using certificates.",
    hint: "Two-way trust."
  },
  {
    id: 173,
    difficulty: "medium",
    category: "troubleshooting",
    question: "Why might you see 'NetworkClient: Node -1 disconnected' in your logs?",
    options: [
      "The broker is deleting data",
      "The client failed to establish an initial connection to any bootstrap server",
      "The consumer is finished reading",
      "The producer is too fast"
    ],
    answer: 1,
    explanation: "Node -1 is the internal ID for the bootstrap phase. This usually means the IP/Port is wrong or a firewall is blocking the connection.",
    hint: "Failure at the very start."
  },
  {
    id: 174,
    difficulty: "hard",
    category: "security",
    question: "What is 'Prefixed ACLs' (introduced in Kafka 2.0)?",
    options: [
      "ACLs that only apply to the start of the day",
      "A way to apply an ACL to all resources that start with a specific string (e.g., 'finance-*')",
      "A way to encrypt the prefix of a message",
      "A security tool for Zookeeper"
    ],
    answer: 1,
    explanation: "Prefixed ACLs allow for easier management by grouping related topics or groups under a common name pattern.",
    hint: "Pattern-based permissions."
  },
  {
    id: 175,
    difficulty: "medium",
    category: "troubleshooting",
    question: "What is the consequence of setting 'zookeeper.session.timeout.ms' too low?",
    options: [
      "The broker will run faster",
      "Brokers may be incorrectly marked as offline due to transient network jitters, causing unnecessary leader elections",
      "Data will be deleted",
      "Consumers will stop reading"
    ],
    answer: 1,
    explanation: "If the broker misses a heartbeat due to a small network spike, Zookeeper will think it's gone. This creates cluster instability.",
    hint: "Sensitivity to network blips."
  },
  {
    id: 176,
    difficulty: "hard",
    category: "security",
    question: "In the context of 'SASL/OAUTHBEARER', what provides the token?",
    options: [
      "Kafka itself",
      "An external Identity Provider (IdP) like Okta, Keycloak, or Azure AD",
      "The local file system",
      "Zookeeper"
    ],
    answer: 1,
    explanation: "OAUTHBEARER allows Kafka to integrate with modern enterprise identity systems using JWT tokens.",
    hint: "Modern web-standard auth."
  },
  {
    id: 177,
    difficulty: "medium",
    category: "troubleshooting",
    question: "What does 'In-Sync Replicas (ISR) Shrink' signify?",
    options: [
      "The cluster is getting smaller",
      "Follower replicas are failing to keep up with the leader, potentially due to resource exhaustion or network issues",
      "The data is being compressed",
      "The replication factor was decreased"
    ],
    answer: 1,
    explanation: "When a follower falls behind, the leader removes it from the ISR. A shrinking ISR is a warning sign of broker health issues.",
    hint: "Losing the 'in-sync' status."
  },
  {
    id: 178,
    difficulty: "hard",
    category: "security",
    question: "Which ACL permission is required to perform a 'Log Compaction' or change topic configs?",
    options: ["READ", "WRITE", "ALTER", "DESCRIBE_CONFIGS"],
    answer: 2,
    explanation: "ALTER permission is required to change the state or configuration of a resource like a topic.",
    hint: "Permission to change things."
  },
  {
    id: 179,
    difficulty: "medium",
    category: "troubleshooting",
    question: "If 'Disk I/O Wait' is high on a Kafka broker, which of the following is NOT a likely solution?",
    options: [
      "Adding more disks (log.dirs)",
      "Increasing the number of partitions",
      "Switching to faster SSDs",
      "Reducing the replication factor"
    ],
    answer: 1,
    explanation: "Increasing partitions actually increases the number of open file handles and can sometimes worsen I/O contention if not handled carefully. The other options directly reduce or speed up I/O.",
    hint: "Which one adds more files?"
  },
  {
    id: 180,
    difficulty: "hard",
    category: "security",
    question: "How does 'Fencing' protect a cluster during a network partition?",
    options: [
      "By physically locking the server rack",
      "By ensuring only the 'latest' leader (with the highest epoch) can write to the log, ignoring stale leaders",
      "By deleting the network cables",
      "By encrypting the traffic"
    ],
    answer: 1,
    explanation: "Fencing prevents 'Split Brain' scenarios where two brokers think they are both the leader for the same partition.",
    hint: "Version-based leadership control."
  },
  {
    id: 181,
    difficulty: "medium",
    category: "security",
    question: "What is the difference between 'Authentication' and 'Authorization' in Kafka?",
    options: [
      "They are the same",
      "Authentication is 'Who are you?'; Authorization is 'What are you allowed to do?'",
      "Authentication is for brokers; Authorization is for clients",
      "Authorization is for SSL; Authentication is for SASL"
    ],
    answer: 1,
    explanation: "Authentication proves identity (login), while Authorization checks if that identity has rights to a resource (ACLs).",
    hint: "Identity vs. Permission."
  },
  {
    id: 182,
    difficulty: "hard",
    category: "troubleshooting",
    question: "A consumer group is stuck in 'PreparingRebalance' state for a long time. What is likely happening?",
    options: [
      "The brokers are too fast",
      "A member of the group is not acknowledging the rebalance, or is taking too long to close its resources",
      "The topic is empty",
      "The producer is offline"
    ],
    answer: 1,
    explanation: "The coordinator waits for all members to 'join' the rebalance. If one consumer is 'zombie' or slow, it can hang the whole group.",
    hint: "Waiting for group consensus."
  },
  {
    id: 183,
    difficulty: "medium",
    category: "security",
    question: "Which Kafka component allows you to map a Kerberos principal (alice@REALM.COM) to a Kafka user (alice)?",
    options: ["ACLs", "sasl.kerberos.principal.to.local.rules", "Schema Registry", "The Authorizer"],
    answer: 1,
    explanation: "These rules (similar to auth_to_local in Hadoop) transform complex Kerberos names into simple internal Kafka usernames.",
    hint: "Principal mapping rules."
  },
  {
    id: 184,
    difficulty: "hard",
    category: "security",
    question: "What is 'Secret Protection' in Confluent Platform?",
    options: [
      "Encrypting the message body",
      "A tool to encrypt sensitive configuration values (like passwords) in properties files on disk",
      "A way to hide topic names",
      "A backup for SSL certificates"
    ],
    answer: 1,
    explanation: "It prevents passwords from being visible in plain text within the server.properties or connector.properties files.",
    hint: "Configuration encryption."
  },
  {
    id: 185,
    difficulty: "medium",
    category: "troubleshooting",
    question: "Why would you see 'CommitFailedException' in a Java Consumer?",
    options: [
      "The broker is down",
      "The time between poll() calls exceeded max.poll.interval.ms, causing the consumer to be kicked out of the group",
      "The message was too large",
      "The offset was negative"
    ],
    answer: 1,
    explanation: "If you take too long to process data, the coordinator reassigns your partitions. When you finally try to commit, you no longer own them.",
    hint: "Processing took too long."
  },
  {
    id: 186,
    difficulty: "hard",
    category: "security",
    question: "What is the purpose of 'Inter-Broker Communication' security?",
    options: [
      "To protect data as brokers sync with each other",
      "To speed up the network",
      "To allow brokers to share passwords",
      "To prevent brokers from talking to each other"
    ],
    answer: 0,
    explanation: "Brokers are also clients of each other. Securing this traffic is critical to prevent internal eavesdropping or impersonation.",
    hint: "Internal cluster encryption."
  },
  {
    id: 187,
    difficulty: "medium",
    category: "security",
    question: "When using 'SASL/SCRAM-SHA-256', where are the credentials stored by default?",
    options: ["In a text file", "In Zookeeper (or the metadata log in KRaft)", "In the producer's RAM", "In the SSL certificate"],
    answer: 1,
    explanation: "Credentials for SCRAM are stored in the cluster metadata so all brokers can access them to authenticate users.",
    hint: "Metadata-based credentials."
  },
  {
    id: 188,
    difficulty: "hard",
    category: "troubleshooting",
    question: "What does a high 'Metadata Response Time' metric indicate?",
    options: [
      "The disk is full",
      "The Controller or Zookeeper is under heavy load and struggling to respond to client requests for topic/broker info",
      "The network is too slow",
      "The messages are too large"
    ],
    answer: 1,
    explanation: "Clients request metadata often. If the cluster management layer (Controller) is slow, every client operation will feel sluggish.",
    hint: "Cluster management bottleneck."
  },
  {
    id: 189,
    difficulty: "medium",
    category: "security",
    question: "What does 'Super User' status mean in Kafka?",
    options: [
      "A user who can delete the internet",
      "A principal that bypasses all ACL checks and has full access to everything",
      "A broker that is very fast",
      "A consumer that reads all topics"
    ],
    answer: 1,
    explanation: "Super users are defined in server.properties and are necessary for administrative tasks like setting up initial ACLs.",
    hint: "The 'root' user of Kafka."
  },
  {
    id: 190,
    difficulty: "hard",
    category: "troubleshooting",
    question: "In a 'MirrorMaker 2' setup, what is the 'Offset Sync' topic used for?",
    options: [
      "To store the actual data",
      "To map offsets between the source cluster and the target cluster for easier consumer migration",
      "To encrypt the data",
      "To count the number of brokers"
    ],
    answer: 1,
    explanation: "Since offsets differ between clusters, this topic tracks the mapping so consumers can switch clusters without re-reading everything.",
    hint: "Cross-cluster offset translation."
  },
  {
    id: 191,
    difficulty: "medium",
    category: "security",
    question: "Which Kafka command line tool is used to manage ACLs?",
    options: ["kafka-topics.sh", "kafka-acls.sh", "kafka-security.sh", "kafka-configs.sh"],
    answer: 1,
    explanation: "The kafka-acls.sh tool is the standard utility for adding, removing, and listing access rules.",
    hint: "The ACL manager tool."
  },
  {
    id: 192,
    difficulty: "hard",
    category: "troubleshooting",
    question: "You see 'CorruptRecordException' in the broker logs. What is the most likely cause?",
    options: [
      "A bug in the producer",
      "Disk failure or memory corruption on the broker/producer side",
      "The topic has been deleted",
      "The message is too small"
    ],
    answer: 1,
    explanation: "This usually indicates that the CRC (Cyclic Redundancy Check) for a message batch failed, meaning data was altered on disk or in flight.",
    hint: "Data integrity failure."
  },
  {
    id: 193,
    difficulty: "medium",
    category: "security",
    question: "What does 'SASL_PLAINTEXT' mean?",
    options: [
      "Encrypted authentication",
      "Authentication (like username/password) is used, but the subsequent data transfer is NOT encrypted",
      "No security at all",
      "Only for Zookeeper"
    ],
    answer: 1,
    explanation: "This is often used in internal, trusted networks to provide identity without the CPU overhead of SSL encryption.",
    hint: "Auth only, no encryption."
  },
  {
    id: 194,
    difficulty: "hard",
    category: "security",
    question: "What is 'Namespace' isolation in a multi-tenant Kafka cluster?",
    options: [
      "Using different brokers for each user",
      "Using prefixes (e.g., 'teamA.topic1', 'teamB.topic1') combined with ACLs to prevent teams from seeing each other's data",
      "Deleting the data after 5 minutes",
      "Encrypting the topic names"
    ],
    answer: 1,
    explanation: "Since Kafka is multi-tenant, naming conventions and ACLs are the primary way to provide logical isolation.",
    hint: "Logical separation by naming."
  },
  {
    id: 195,
    difficulty: "medium",
    category: "troubleshooting",
    question: "What metric would you use to find the 'Noisy Neighbor' in a Kafka cluster?",
    options: [
      "Total CPU",
      "Client Produce/Fetch Quota metrics",
      "The number of topics",
      "The broker ID"
    ],
    answer: 1,
    explanation: "Kafka tracks throughput per client ID. Monitoring these metrics shows who is consuming the most bandwidth.",
    hint: "Tracking client throughput."
  },
  {
    id: 196,
    difficulty: "hard",
    category: "security",
    question: "How does the 'OAuth' flow work for a Kafka Producer?",
    options: [
      "The producer sends its password to the broker",
      "The producer gets a token from an OAuth server and presents it to the broker for validation",
      "The broker calls the producer",
      "OAuth is not supported"
    ],
    answer: 1,
    explanation: "This follows standard OAuth2 patterns, allowing for centralized token-based identity management.",
    hint: "Token-based login."
  },
  {
    id: 197,
    difficulty: "medium",
    category: "troubleshooting",
    question: "A producer is retrying indefinitely. Which setting controls the maximum time a producer will spend retrying a single message?",
    options: ["retries", "delivery.timeout.ms", "retry.backoff.ms", "request.timeout.ms"],
    answer: 1,
    explanation: "In modern Kafka clients, delivery.timeout.ms is the upper bound for the entire lifecycle of a message, including all retries.",
    hint: "The ultimate deadline for a message."
  },
  {
    id: 198,
    difficulty: "hard",
    category: "security",
    question: "What is 'Identical Principal' in the context of multi-cluster replication?",
    options: [
      "The same password for everyone",
      "The requirement that the same user identity must exist on both source and destination clusters for ACLs to migrate correctly",
      "A type of broker",
      "A way to rename users"
    ],
    answer: 1,
    explanation: "Security must be consistent across clusters if you are using tools like MirrorMaker 2 to replicate ACLs.",
    hint: "Consistent identity across sites."
  },
  {
    id: 199,
    difficulty: "medium",
    category: "troubleshooting",
    question: "What is 'Log Cleaner Log' used for?",
    options: [
      "To delete the entire log",
      "To troubleshoot why log compaction might be failing or taking too long",
      "To store user passwords",
      "To count the number of messages"
    ],
    answer: 1,
    explanation: "The log-cleaner.log file on the broker contains details about every compaction cycle, including how many bytes were cleaned.",
    hint: "Diagnostics for compaction."
  },
  {
    id: 200,
    difficulty: "hard",
    category: "security",
    question: "Which security layer is processed first when a client connects to a broker?",
    options: ["ACL check", "Network layer encryption (SSL/TLS)", "Authentication (SASL)", "Quota check"],
    answer: 1,
    explanation: "The handshake (SSL/TLS) happens first to establish the secure channel, followed by Authentication, and finally Authorization (ACLs).",
    hint: "The order of the handshake."
  },
  {
    id: 201,
    difficulty: "medium",
    category: "architecture",
    question: "What is 'Event Sourcing'?",
    options: [
      "Storing only the current state of an object",
      "Capturing all changes to an application state as a sequence of immutable events",
      "A way to delete old data",
      "A type of database indexing"
    ],
    answer: 1,
    explanation: "In Event Sourcing, the state of a system is derived by replaying the log of events from the beginning.",
    hint: "State as a sequence of events."
  },
  {
    id: 202,
    difficulty: "hard",
    category: "performance",
    question: "To achieve the absolute lowest latency for a producer, which 'acks' setting would you use?",
    options: ["acks=all", "acks=1", "acks=0", "acks=-1"],
    answer: 2,
    explanation: "With acks=0, the producer does not wait for any acknowledgment from the broker, but this carries a high risk of data loss.",
    hint: "Fire and forget."
  },
  {
    id: 203,
    difficulty: "medium",
    category: "architecture",
    question: "What is 'CQRS' (Command Query Responsibility Segregation)?",
    options: [
      "A security protocol",
      "A pattern that separates the models for reading data from the models for writing data",
      "A way to rename topics",
      "A tool for Zookeeper"
    ],
    answer: 1,
    explanation: "Kafka is often used as the 'write' side, while views in Elasticsearch or KTables serve as the 'read' side in a CQRS architecture.",
    hint: "Separate reads and writes."
  },
  {
    id: 204,
    difficulty: "hard",
    category: "performance",
    question: "What is the impact of a large 'batch.size' on a producer?",
    options: [
      "It reduces memory usage",
      "It increases potential throughput by sending more data per request, but can increase memory usage and latency",
      "It makes the producer slower",
      "It deletes old data"
    ],
    answer: 1,
    explanation: "Large batches are more efficient for the broker but require the producer to wait longer to fill the batch.",
    hint: "Throughput vs. Latency/Memory."
  },
  {
    id: 205,
    difficulty: "medium",
    category: "architecture",
    question: "What is 'Fan-out' architecture in Kafka?",
    options: [
      "One topic being consumed by many different consumer groups for different purposes",
      "One broker sending data to one consumer",
      "Deleting data across multiple brokers",
      "A hardware cooling system"
    ],
    answer: 0,
    explanation: "One of Kafka's strengths is that data can be read by many independent applications simultaneously without performance degradation for the producer.",
    hint: "One-to-many data distribution."
  },
  {
    id: 206,
    difficulty: "hard",
    category: "performance",
    question: "Why should you avoid having too many partitions (e.g., hundreds of thousands) per broker?",
    options: [
      "It makes the messages larger",
      "It increases overhead for metadata management, file handles, and recovery time during broker failure",
      "It makes the broker run out of electricity",
      "It only works with small topics"
    ],
    answer: 1,
    explanation: "Each partition is a set of files. Too many partitions slow down the Controller and increase the time it takes to elect leaders during a restart.",
    hint: "The 'cost' of a partition."
  },
  {
    id: 207,
    difficulty: "medium",
    category: "architecture",
    question: "What is the 'Kappa Architecture'?",
    options: [
      "A system with both batch and speed layers",
      "A simplification of the Lambda architecture where all data processing is handled as a single stream",
      "A way to name topics with Greek letters",
      "A security level"
    ],
    answer: 1,
    explanation: "In Kappa architecture, there is no separate batch layer (like Hadoop). The stream processing engine (Kafka) handles both real-time and historical data.",
    hint: "Stream-only architecture."
  },
  {
    id: 208,
    difficulty: "hard",
    category: "performance",
    question: "How does 'compression.type' affect broker CPU?",
    options: [
      "It has no effect",
      "The broker may need to decompress and recompress data if the broker's setting differs from the producer's",
      "It makes the broker use less CPU",
      "It only affects the consumer"
    ],
    answer: 1,
    explanation: "To avoid CPU spikes, ensure the producer's compression type matches the broker's topic configuration.",
    hint: "The cost of transcoding."
  },
  {
    id: 209,
    difficulty: "medium",
    category: "architecture",
    question: "What is a 'Side Output' in stream processing?",
    options: [
      "A topic used for error records that couldn't be processed by the main logic",
      "The main output of the application",
      "A backup of the topic",
      "A way to shut down the application"
    ],
    answer: 0,
    explanation: "Side outputs allow you to branch your stream to handle edge cases or errors without stopping the main pipeline.",
    hint: "Secondary data path."
  },
  {
    id: 210,
    difficulty: "hard",
    category: "performance",
    question: "Which JVM setting is most critical for Kafka's performance given its reliance on the Page Cache?",
    options: [
      "Very large Heap size (e.g., 64GB)",
      "Moderate Heap size (e.g., 4-6GB) to leave plenty of RAM for the OS Page Cache",
      "Zero Heap size",
      "Enabling the ParallelGC only"
    ],
    answer: 1,
    explanation: "Kafka doesn't store data in its own RAM; it relies on the OS. A heap that is too large can lead to long GC pauses and leave less room for the Page Cache.",
    hint: "Balance between Java and OS memory."
  },
  {
    id: 211,
    difficulty: "medium",
    category: "architecture",
    question: "What is the 'Transactional Producer' used for?",
    options: [
      "To pay for Kafka usage",
      "To allow a producer to send batches of messages to multiple partitions atomically (all or nothing)",
      "To speed up the network",
      "To encrypt data"
    ],
    answer: 1,
    explanation: "This is a key component for achieving 'Exactly-Once' semantics, especially in read-process-write loops.",
    hint: "Atomic multi-partition writes."
  },
  {
    id: 212,
    difficulty: "hard",
    category: "performance",
    question: "What is 'End-to-End Latency' in Kafka?",
    options: [
      "The time it takes to write to disk",
      "The total time from when a producer sends a message to when a consumer receives it",
      "The speed of the network cable",
      "The time the broker has been running"
    ],
    answer: 1,
    explanation: "This metric accounts for producer batching, broker replication, and consumer fetch intervals.",
    hint: "The full lifecycle duration."
  },
  {
    id: 213,
    difficulty: "medium",
    category: "architecture",
    question: "What is 'Backpressure' in a Kafka system?",
    options: [
      "When the producer pushes too much data",
      "The natural flow control where a slow consumer causes the system to buffer data, eventually slowing down the whole pipeline",
      "A type of physical pressure on the server",
      "A security feature"
    ],
    answer: 1,
    explanation: "Kafka handles backpressure by having consumers 'pull' data. If a consumer is slow, it simply doesn't pull, and data buffers in the broker.",
    hint: "Slowing down the flow."
  },
  {
    id: 214,
    difficulty: "hard",
    category: "performance",
    question: "How does the 'num.io.threads' setting affect performance?",
    options: [
      "It controls how many users can connect",
      "It defines the number of threads used for disk I/O and log operations",
      "It controls the network speed",
      "It has no effect"
    ],
    answer: 1,
    explanation: "This should usually be set equal to the number of physical disks or at least the number of CPU cores to handle disk requests efficiently.",
    hint: "Threads for disk tasks."
  },
  {
    id: 215,
    difficulty: "medium",
    category: "architecture",
    question: "What is 'Schema Evolution'?",
    options: [
      "The process of the schema getting larger over time",
      "The ability to update a data schema (e.g., adding a field) without breaking existing producers or consumers",
      "Deleting old schemas",
      "Converting Avro to JSON"
    ],
    answer: 1,
    explanation: "Schema Registry enforces rules (Backward, Forward, Full) to ensure that producers and consumers can still talk during updates.",
    hint: "Safe schema updates."
  },
  {
    id: 216,
    difficulty: "hard",
    category: "performance",
    question: "What is the benefit of 'Sticky Partitioning'?",
    options: [
      "It makes the disk sticky",
      "It improves throughput by keeping records in the same batch for as long as possible instead of cycling through partitions too quickly",
      "It prevents partitions from moving",
      "It is a security setting"
    ],
    answer: 1,
    explanation: "Sticky partitioning (introduced in 2.4) reduces latency and increases throughput by creating larger batches when no key is provided.",
    hint: "Better batching for keyless data."
  },
  {
    id: 217,
    difficulty: "medium",
    category: "architecture",
    question: "What is the 'Log-Centric' design of Kafka?",
    options: [
      "A focus on error messages",
      "Treating the log as the single source of truth and the primary storage mechanism for all data",
      "A way to name files",
      "A type of security"
    ],
    answer: 1,
    explanation: "Unlike a database where the table is primary, in Kafka, the immutable log of events is the primary structure.",
    hint: "The log is the database."
  },
  {
    id: 218,
    difficulty: "hard",
    category: "performance",
    question: "Which metric is the best indicator of 'Broker Saturation'?",
    options: [
      "Total disk space",
      "The 'Request Handler Avg Idle Percent' (lower means more saturated)",
      "The broker ID",
      "The number of topics"
    ],
    answer: 1,
    explanation: "If the request handler threads are 0% idle, the broker is completely overwhelmed and cannot handle more requests.",
    hint: "Idle time of the 'workers'."
  },
  {
    id: 219,
    difficulty: "medium",
    category: "architecture",
    question: "What is 'At-Most-Once' delivery?",
    options: [
      "Messages are never lost",
      "Messages may be lost but are never duplicated (e.g., by disabling retries)",
      "Messages are sent twice",
      "The consumer reads from the end"
    ],
    answer: 1,
    explanation: "This is common in high-volume telemetry where losing a single packet is better than stalling the system with retries.",
    hint: "Loss is acceptable, duplicates are not."
  },
  {
    id: 220,
    difficulty: "hard",
    category: "performance",
    question: "How does 'Message Key' choice affect performance?",
    options: [
      "It doesn't",
      "Poor key choice (low cardinality) leads to data skew, where one partition gets all the data while others stay idle",
      "Keys make the messages smaller",
      "Keys are only for security"
    ],
    answer: 1,
    explanation: "A good key ensures data is spread evenly across all partitions (and thus all brokers).",
    hint: "Avoiding the 'hot partition' problem."
  },
  {
    id: 221,
    difficulty: "medium",
    category: "architecture",
    question: "What is a 'Compact' topic used for in a State Machine?",
    options: [
      "To save disk space by only keeping the latest state for each key",
      "To delete all data",
      "To speed up the network",
      "To group brokers"
    ],
    answer: 0,
    explanation: "Compaction allows Kafka to act like a database table where you only care about the most recent value for a given ID.",
    hint: "Latest-value retention."
  },
  {
    id: 222,
    difficulty: "hard",
    category: "performance",
    question: "What is the purpose of the 'OS Page Cache' in Kafka?",
    options: [
      "To store the application code",
      "To keep frequently accessed segments of the log in RAM, allowing for 'memory-speed' reads and writes",
      "To manage user passwords",
      "To encrypt the disk"
    ],
    answer: 1,
    explanation: "Kafka is designed so that recent data is almost always read from RAM (the cache) rather than hitting the slow physical disk.",
    hint: "RAM-speed disk access."
  },
  {
    id: 223,
    difficulty: "medium",
    category: "architecture",
    question: "What is 'Consumer Rebalance Protocol' evolution?",
    options: [
      "The process of consumers getting faster",
      "The shift from Eager Rebalancing (stop-the-world) to Cooperative Incremental Rebalancing",
      "Deleting the consumer group",
      "Changing the consumer ID"
    ],
    answer: 1,
    explanation: "Modern Kafka versions aim to make rebalances nearly invisible by only stopping the partitions that actually need to move.",
    hint: "Smoother partition handoffs."
  },
  {
    id: 224,
    difficulty: "hard",
    category: "performance",
    question: "What happens if you set 'fetch.max.bytes' too high in a consumer?",
    options: [
      "The consumer will run out of memory (OOM)",
      "The broker will crash",
      "The network will be 100% idle",
      "Nothing happens"
    ],
    answer: 0,
    explanation: "The consumer must be able to hold the entire fetched batch in its RAM. If this exceeds the JVM heap, it will crash.",
    hint: "Memory limit on the client side."
  },
  {
    id: 225,
    difficulty: "medium",
    category: "architecture",
    question: "What is 'Event-Driven Architecture' (EDA)?",
    options: [
      "A way to plan parties",
      "A software design pattern where decoupled services communicate by reacting to events (state changes)",
      "A type of database query",
      "A security level"
    ],
    answer: 1,
    explanation: "Kafka is the central nervous system for EDA, allowing services to act on data as it happens without being directly connected.",
    hint: "Decoupled reactive systems."
  },
  {
    id: 226,
    difficulty: "hard",
    category: "performance",
    question: "Why is 'XFS' or 'EXT4' preferred over other filesystems for Kafka storage?",
    options: [
      "They are the only ones that work",
      "They provide better performance for large sequential writes and handling of many large files",
      "They are smaller",
      "They are made by Confluent"
    ],
    answer: 1,
    explanation: "Kafka's performance is tied to filesystem efficiency. XFS is generally recommended for its scalability and performance with Kafka's I/O patterns.",
    hint: "Filesystem optimization."
  },
  {
    id: 227,
    difficulty: "medium",
    category: "architecture",
    question: "What is 'Multi-Region Replication'?",
    options: [
      "Using two brokers",
      "Replicating Kafka data across different geographical regions for disaster recovery and low-latency local access",
      "A way to name topics",
      "A security setting"
    ],
    answer: 1,
    explanation: "Tools like Confluent Multi-Region Clusters (MRC) allow for automated failover between regions with zero data loss (RPO=0).",
    hint: "Geo-replication."
  },
  {
    id: 228,
    difficulty: "hard",
    category: "performance",
    question: "What is 'Producer Fencing' in transactions?",
    options: [
      "Surrounding the producer with a wall",
      "Ensuring that an older instance of a producer cannot commit a transaction after a newer instance has started",
      "Deleting the producer's data",
      "Encrypting the producer's traffic"
    ],
    answer: 1,
    explanation: "This prevents 'zombie' producers from causing data corruption in exactly-once pipelines.",
    hint: "Zombie protection."
  },
  {
    id: 229,
    difficulty: "medium",
    category: "architecture",
    question: "What is 'Stateless' vs 'Stateful' processing?",
    options: [
      "Stateless is for numbers; Stateful is for text",
      "Stateless processing only looks at the current record; Stateful processing remembers previous data (aggregations, joins)",
      "Stateful is faster than Stateless",
      "They are the same"
    ],
    answer: 1,
    explanation: "Stateless (e.g., filter) is easy to scale. Stateful (e.g., count) requires local storage like RocksDB.",
    hint: "Context-awareness in streaming."
  },
  {
    id: 230,
    difficulty: "hard",
    category: "performance",
    question: "Which setting controls how many threads are available to handle incoming network requests?",
    options: ["num.io.threads", "num.network.threads", "num.replica.fetchers", "num.partitions"],
    answer: 1,
    explanation: "Network threads take requests off the socket. If this is too low, you will see high network processor idle time but slow responses.",
    hint: "Threads for network sockets."
  },
  {
    id: 231,
    difficulty: "medium",
    category: "architecture",
    question: "What is a 'Tombstone' in a compacted topic?",
    options: [
      "A record with a null value that tells Kafka to eventually delete that key",
      "A broken broker",
      "A message that is 100 years old",
      "A security certificate"
    ],
    answer: 0,
    explanation: "Sending a null value for a key effectively 'deletes' that key from the compacted log after the clean-up process runs.",
    hint: "The delete marker."
  },
  {
    id: 232,
    difficulty: "hard",
    category: "performance",
    question: "What is 'Throughput vs Latency' in the context of 'linger.ms'?",
    options: [
      "Higher linger.ms increases throughput but also increases latency",
      "Higher linger.ms decreases throughput",
      "linger.ms has no effect on throughput",
      "linger.ms only affects security"
    ],
    answer: 0,
    explanation: "Waiting slightly longer (linger) allows for bigger batches (throughput), but the first message in the batch waits longer (latency).",
    hint: "The classic streaming trade-off."
  },
  {
    id: 233,
    difficulty: "medium",
    category: "architecture",
    question: "What is 'Data Lineage' in Kafka?",
    options: [
      "The age of the data",
      "Tracking the path of data from its origin through all transformations to its final destination",
      "A type of data compression",
      "A security tool"
    ],
    answer: 1,
    explanation: "Lineage helps you understand 'where this data came from' and 'who is using it,' which is vital for data governance.",
    hint: "Tracing the data flow."
  },
  {
    id: 234,
    difficulty: "hard",
    category: "performance",
    question: "Why should 'Auto-commit' be disabled for critical processing?",
    options: [
      "It makes the consumer slower",
      "Because it can lead to data loss or duplicate processing if the consumer crashes before/after processing but before/after the auto-interval",
      "It is not supported in Java",
      "It deletes the data"
    ],
    answer: 1,
    explanation: "Manual offset control (commitSync/Async) allows you to ensure the message is fully processed before the offset is saved.",
    hint: "Precise control over 'Done'."
  },
  {
    id: 235,
    difficulty: "medium",
    category: "architecture",
    question: "What is a 'Connector Cluster'?",
    options: [
      "A group of brokers",
      "A dedicated group of Kafka Connect workers that run specific types of connectors (e.g., all database connectors)",
      "A group of consumers",
      "A way to name topics"
    ],
    answer: 1,
    explanation: "Scaling Connect separately from Brokers allows you to allocate resources based on the I/O needs of your external systems.",
    hint: "Dedicated worker group for Connect."
  },
  {
    id: 236,
    difficulty: "hard",
    category: "performance",
    question: "What does 'replica.socket.receive.buffer.bytes' do?",
    options: [
      "Sets the disk size",
      "Sets the size of the network buffer used for replication traffic between brokers",
      "Sets the RAM for consumers",
      "Sets the password length"
    ],
    answer: 1,
    explanation: "Tuning this can help replication performance in high-latency or high-bandwidth networks (like across regions).",
    hint: "Buffer for internal broker traffic."
  },
  {
    id: 237,
    difficulty: "medium",
    category: "architecture",
    question: "What is 'Microservices Choreography'?",
    options: [
      "A central service telling everyone what to do",
      "Services reacting independently to events on a bus (Kafka) without a central coordinator",
      "A type of network cable",
      "A security protocol"
    ],
    answer: 1,
    explanation: "In choreography, each service knows what to do when it sees an event (e.g., 'OrderCreated'), leading to a more decoupled system.",
    hint: "Decentralized reaction to events."
  },
  {
    id: 238,
    difficulty: "hard",
    category: "performance",
    question: "What is 'JMX' (Java Management Extensions) used for in Kafka?",
    options: [
      "Writing Java code",
      "Exposing internal metrics (e.g., lag, throughput, CPU) for monitoring tools like Prometheus or Datadog",
      "A type of security",
      "A way to restart the broker"
    ],
    answer: 1,
    explanation: "JMX is the standard way to 'peek' inside a running Kafka broker to see its health and performance metrics.",
    hint: "The gateway to metrics."
  },
  {
    id: 239,
    difficulty: "medium",
    category: "architecture",
    question: "What is a 'Dead Letter Topic' (DLT)?",
    options: [
      "A topic that has been deleted",
      "A special topic where messages that failed processing are sent for later manual review or retry",
      "A security tool",
      "A way to name topics"
    ],
    answer: 1,
    explanation: "DLTs prevent a single 'poison pill' message from blocking an entire processing pipeline.",
    hint: "Error handling destination."
  },
  {
    id: 240,
    difficulty: "hard",
    category: "performance",
    question: "What is the consequence of having a high 'log.cleaner.backoff.ms'?",
    options: [
      "Data is deleted faster",
      "The broker waits longer to retry a failed compaction, leading to wasted disk space on dirty logs",
      "The broker runs faster",
      "There is no effect"
    ],
    answer: 1,
    explanation: "Compaction is a background task. If it fails, you want it to retry reasonably soon to keep disk usage under control.",
    hint: "Wait time for compaction retries."
  },
  {
    id: 241,
    difficulty: "medium",
    category: "architecture",
    question: "What is 'CDC' (Change Data Capture)?",
    options: [
      "A type of security",
      "Streaming every insert, update, and delete from a database into Kafka in real-time",
      "A way to compress data",
      "A type of broker"
    ],
    answer: 1,
    explanation: "CDC tools like Debezium turn your database into an event stream, allowing other services to react to database changes.",
    hint: "Database changes as events."
  },
  {
    id: 242,
    difficulty: "hard",
    category: "performance",
    question: "How does 'SSL overhead' affect Kafka throughput?",
    options: [
      "It has no effect",
      "Encryption and decryption take CPU cycles, which can reduce the total number of messages a broker can process",
      "It makes the network faster",
      "It only affects consumers"
    ],
    answer: 1,
    explanation: "SSL is expensive. Using hardware acceleration or newer Java versions can mitigate this, but it will always be slower than plaintext.",
    hint: "The CPU cost of security."
  },
  {
    id: 243,
    difficulty: "medium",
    category: "architecture",
    question: "What is a 'Broadcast Join'?",
    options: [
      "Joining two very large topics",
      "Joining a large stream (KStream) with a small, fully replicated table (GlobalKTable)",
      "A security protocol",
      "A way to send messages to everyone"
    ],
    answer: 1,
    explanation: "By replicating the small table to every node, you avoid the network cost of re-partitioning the large stream.",
    hint: "Large stream + Small local table."
  },
  {
    id: 244,
    difficulty: "hard",
    category: "performance",
    question: "What is 'Dirty Ratio' in log compaction?",
    options: [
      "The amount of data that is corrupted",
      "The percentage of the log that consists of uncompacted (new) data compared to compacted (old) data",
      "The number of users in a group",
      "The size of the broker"
    ],
    answer: 1,
    explanation: "A higher dirty ratio triggers the cleaner to work, balancing disk space savings against the CPU cost of compaction.",
    hint: "Compactable vs. Compacted data ratio."
  },
  {
    id: 245,
    difficulty: "medium",
    category: "architecture",
    question: "What is 'Data Sovereignty' in a global Kafka setup?",
    options: [
      "The speed of the data",
      "The legal requirement that data must stay within a specific physical region (e.g., GDPR)",
      "A way to name topics",
      "A security setting"
    ],
    answer: 1,
    explanation: "Architects must design replication filters to ensure sensitive data doesn't cross borders into unauthorized regions.",
    hint: "Data location laws."
  },
  {
    id: 246,
    difficulty: "hard",
    category: "performance",
    question: "What is the benefit of 'Zero Copy' for a Kafka Consumer?",
    options: [
      "It makes the consumer faster by skipping the data entirely",
      "It allows data to be sent from disk to network without being copied into the application's memory (JVM)",
      "It is a security feature",
      "It reduces the number of partitions"
    ],
    answer: 1,
    explanation: "This OS-level optimization is why Kafka can saturate 10Gbps network cards with very low CPU usage.",
    hint: "Direct kernel-level data transfer."
  },
  {
    id: 247,
    difficulty: "medium",
    category: "architecture",
    question: "What is 'SchemaID' in an Avro message?",
    options: [
      "The name of the user",
      "A 4-byte identifier at the start of the message that points to the specific schema version in the Schema Registry",
      "A way to compress data",
      "The broker ID"
    ],
    answer: 1,
    explanation: "Instead of sending the whole schema with every message, Kafka sends only the ID, saving significant bandwidth.",
    hint: "The link between data and schema."
  },
  {
    id: 248,
    difficulty: "hard",
    category: "performance",
    question: "How does 'Swap' usage on a Linux server affect Kafka performance?",
    options: [
      "It makes it faster",
      "It is extremely detrimental, as paging to disk causes long latency spikes and pauses; swap should usually be disabled",
      "It has no effect on Java",
      "It only affects the logs"
    ],
    answer: 1,
    explanation: "If Kafka's process gets swapped to disk, performance will drop by orders of magnitude. Production servers should have 'swappiness' set to 1 or 0.",
    hint: "Disk-based RAM is too slow."
  },
  {
    id: 249,
    difficulty: "medium",
    category: "architecture",
    question: "What is a 'Stateful Service' in a Kafka ecosystem?",
    options: [
      "A service that doesn't use a database",
      "A service that needs to keep track of information across multiple events (e.g., a windowed average)",
      "A service that is only in one country",
      "A security tool"
    ],
    answer: 1,
    explanation: "Kafka Streams and Flink are common tools for building stateful services that can 'remember' the past.",
    hint: "Memory-driven processing."
  },
  {
    id: 250,
    difficulty: "hard",
    category: "performance",
    question: "What is the 'Log Cleaner' thread's impact on Broker I/O?",
    options: [
      "It reduces I/O",
      "It increases disk I/O because it has to read and write segments during the compaction process",
      "It has no impact",
      "It only affects the network"
    ],
    answer: 1,
    explanation: "Compaction is a background I/O intensive task. It should be scheduled or throttled during peak production hours if disk I/O is a bottleneck.",
    hint: "Background maintenance cost."
  },
];

// --- TOP 100 INTERVIEW INDICES ---
// These indices point to unique, high-value questions from the bank for rapid interview prep.
// Focus: Distributed Architecture, Exactly-Once Semantics, Performance Tuning, and Troubleshooting.
const hotsQuestions = [
    // 1. Fundamentals & Scaling (Partitions, Offsets, Replication Factor) - 15 indices
    0, 1, 2, 4, 10, 15, 20, 25, 30, 45, 
    150, 151, 152, 153, 154,

    // 2. Producer Deep Dive (Acks, Retries, Idempotence, Compression) - 20 indices
    5, 6, 7, 8, 9, 50, 55, 60, 65, 70, 
    75, 80, 85, 90, 95, 100, 105, 110, 115, 120,

    // 3. Consumer Groups & Rebalancing (Sticky Assignors, Commit Strategies) - 20 indices
    125, 130, 135, 140, 145, 160, 165, 170, 175, 180, 
    185, 190, 195, 200, 205, 210, 215, 220, 225, 230,

    // 4. Broker Internals & Storage (Log Compaction, Segmenting, ISR, KRaft) - 15 indices
    3, 11, 12, 13, 14, 235, 240, 241, 242, 243, 
    244, 245, 246, 247, 250,

    // 5. Advanced Patterns (Exactly-Once (EOS), Schema Registry, Kafka Connect) - 15 indices
    16, 17, 18, 19, 21, 22, 23, 24, 26, 27, 
    28, 29, 31, 32, 249,

    // 6. Performance, Monitoring & Hardware (JVM Tuning, OS Swappiness, Latency) - 15 indices
    33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 
    43, 44, 46, 47, 48
];
