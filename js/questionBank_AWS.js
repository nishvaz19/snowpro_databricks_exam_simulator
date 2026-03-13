/* ======================================================
   AWS MASTER QUESTION BANK (Batch 1/7)
   Topics: IAM, Global Infrastructure, S3, & VPC
   ====================================================== */

const awsBatch1 = [
  {
    id: 1,
    difficulty: "easy",
    category: "infrastructure",
    question: "Which of the following describes an AWS Availability Zone (AZ)?",
    options: [
      "A geographic area containing multiple Edge Locations",
      "One or more discrete data centers with redundant power, networking, and connectivity in an AWS Region",
      "A single physical server in a data center",
      "A collection of AWS Regions"
    ],
    answer: 1,
    explanation: "An AZ is one or more discrete data centers within a Region. They are designed for fault isolation.",
    hint: "Data centers in a region."
  },
  {
    id: 2,
    difficulty: "medium",
    category: "iam",
    question: "You need to grant an EC2 instance permissions to write data to an S3 bucket. What is the most secure way to achieve this?",
    options: [
      "Store IAM User access keys in a config file on the instance",
      "Create an IAM Role with the necessary permissions and attach it to the EC2 instance profile",
      "Hardcode the credentials into the application code",
      "Make the S3 bucket public"
    ],
    answer: 1,
    explanation: "IAM Roles for EC2 provide temporary credentials that are rotated automatically, following the principle of least privilege.",
    hint: "Avoid static keys."
  },
  {
    id: 3,
    difficulty: "hard",
    category: "vpc",
    question: "What is the difference between a Network Access Control List (NACL) and a Security Group?",
    options: [
      "NACLs are stateful, Security Groups are stateless",
      "Security Groups act at the instance level; NACLs act at the subnet level",
      "NACLs support Allow rules only; Security Groups support Allow and Deny",
      "There is no difference"
    ],
    answer: 1,
    explanation: "Security Groups are stateful and operate at the instance/ENI level. NACLs are stateless and operate at the subnet level.",
    hint: "Instance vs Subnet."
  },
  {
    id: 4,
    difficulty: "medium",
    category: "storage",
    question: "A company needs to store data that is rarely accessed but must be retrievable within minutes in case of an emergency. Which S3 storage class is best?",
    options: [
      "S3 Standard",
      "S3 Glacier Deep Archive",
      "S3 Glacier Instant Retrieval",
      "S3 Intelligent-Tiering"
    ],
    answer: 2,
    explanation: "Glacier Instant Retrieval is designed for rarely accessed data that still requires millisecond retrieval.",
    hint: "Rare access but fast delivery."
  },
  {
    id: 5,
    difficulty: "hard",
    category: "scenarios",
    question: "You are designing a VPC with a public subnet and a private subnet. How should you provide internet access to the instances in the private subnet for software updates?",
    options: [
      "Assign a Public IP to every instance in the private subnet",
      "Deploy a NAT Gateway in the public subnet and update the private subnet's route table",
      "Deploy a NAT Gateway in the private subnet",
      "Use a VPC Peering connection"
    ],
    answer: 1,
    explanation: "A NAT Gateway must reside in a public subnet (with a route to the IGW) to allow private instances to reach the internet without being exposed to inbound connections.",
    hint: "Private out, nothing in."
  },
  {
    id: 6,
    difficulty: "easy",
    category: "cost",
    question: "Which AWS tool provides highly accurate cost forecasts for the next 12 months based on your historical usage?",
    options: [
      "AWS Budgets",
      "AWS Cost Explorer",
      "AWS Pricing Calculator",
      "AWS Trusted Advisor"
    ],
    answer: 1,
    explanation: "Cost Explorer allows you to visualize and forecast your AWS costs and usage over time.",
    hint: "Visualizing trends."
  },
  {
    id: 7,
    difficulty: "medium",
    category: "iam",
    question: "What is the 'Root User' in an AWS account?",
    options: [
      "The first user created in an IAM Group",
      "The single identity with complete access to all AWS services and resources in the account",
      "Any user with AdministratorAccess policy",
      "A user managed by AWS Support"
    ],
    answer: 1,
    explanation: "The Root User is created when the account is opened. It has absolute power and should be secured with MFA and rarely used.",
    hint: "Absolute power."
  },
  {
    id: 8,
    difficulty: "hard",
    category: "networking",
    question: "You want to connect your on-premises data center to AWS with a consistent, dedicated 10 Gbps network connection. Which service do you choose?",
    options: [
      "AWS Site-to-Site VPN",
      "AWS Direct Connect",
      "AWS Client VPN",
      "VPC Peering"
    ],
    answer: 1,
    explanation: "Direct Connect bypasses the public internet to provide a private, high-bandwidth connection to AWS.",
    hint: "Private dedicated line."
  },
  {
    id: 9,
    difficulty: "medium",
    category: "scenarios",
    question: "Which AWS service is used to create a private network connection between two VPCs, even across different AWS accounts?",
    options: [
      "VPC Peering",
      "AWS Transit Gateway",
      "NAT Gateway",
      "Internet Gateway"
    ],
    answer: 0,
    explanation: "VPC Peering allows you to route traffic between VPCs using private IPv4/IPv6 addresses.",
    hint: "1-to-1 VPC connection."
  },
  {
    id: 10,
    difficulty: "easy",
    category: "compute",
    question: "What are 'Spot Instances' best suited for?",
    options: [
      "Critical production databases",
      "Stateless, flexible, or interruptible workloads",
      "Long-running applications with steady state",
      "Websites that cannot tolerate downtime"
    ],
    answer: 1,
    explanation: "Spot instances offer up to 90% discount but can be reclaimed by AWS with a 2-minute notice.",
    hint: "Cheap but evictable."
  },
  {
    id: 11,
    difficulty: "hard",
    category: "iam",
    question: "What is an IAM 'Permission Boundary'?",
    options: [
      "A limit on the number of IAM users",
      "An advanced feature that sets the maximum permissions an identity-based policy can grant to an IAM entity",
      "A physical boundary in a data center",
      "The same as an IAM Group"
    ],
    answer: 1,
    explanation: "Permission boundaries are used to delegate permissions to users (like developers) so they can create roles without exceeding a specific 'ceiling'.",
    hint: "Permission ceiling."
  },
  {
    id: 12,
    difficulty: "medium",
    category: "storage",
    question: "How can you protect S3 objects from accidental deletion?",
    options: [
      "Enable S3 Versioning and MFA Delete",
      "Use a smaller bucket",
      "Only use the Root user",
      "Encrypt the bucket"
    ],
    answer: 0,
    explanation: "Versioning keeps multiple copies, and MFA Delete requires a code from a physical device to permanently remove a version.",
    hint: "Keep history and use MFA."
  },
  {
    id: 13,
    difficulty: "easy",
    category: "infrastructure",
    question: "Which AWS service is a global Content Delivery Network (CDN)?",
    options: [
      "AWS Route 53",
      "AWS CloudFront",
      "AWS Global Accelerator",
      "AWS Direct Connect"
    ],
    answer: 1,
    explanation: "CloudFront uses Edge Locations to cache and deliver content with low latency to users globally.",
    hint: "Caching at the edge."
  },
  {
    id: 14,
    difficulty: "hard",
    category: "vpc",
    question: "You have a VPC with an IPv6 CIDR block. Which component allows instances in a private subnet to initiate outbound IPv6 traffic to the internet while preventing inbound connections?",
    options: [
      "NAT Gateway",
      "Egress-Only Internet Gateway",
      "Internet Gateway",
      "Virtual Private Gateway"
    ],
    answer: 1,
    explanation: "Egress-Only IGWs are specifically for IPv6; NAT Gateways are used for IPv4.",
    hint: "IPv6 version of a NAT."
  },
  {
    id: 15,
    difficulty: "medium",
    category: "scenarios",
    question: "A company wants to implement Single Sign-On (SSO) for their AWS accounts using their existing Microsoft Active Directory. Which service is required?",
    options: [
      "AWS IAM Users",
      "AWS IAM Identity Center (Successor to AWS SSO)",
      "AWS Directory Service",
      "AWS Organizations"
    ],
    answer: 1,
    explanation: "IAM Identity Center allows you to link your AD to AWS and provide a central portal for user login.",
    hint: "SSO + AD."
  },
  {
    id: 16,
    difficulty: "medium",
    category: "compute",
    question: "What is an Amazon Machine Image (AMI)?",
    options: [
      "A physical hardware server",
      "A template that contains a software configuration (OS, application server, and applications) required to launch an instance",
      "A backup of an S3 bucket",
      "A security group rule"
    ],
    answer: 1,
    explanation: "AMIs are used to launch EC2 instances with a pre-configured environment.",
    hint: "The blueprint for an EC2."
  },
  {
    id: 17,
    difficulty: "hard",
    category: "networking",
    question: "What is the function of an AWS Global Accelerator?",
    options: [
      "To speed up the internet globally",
      "A networking service that improves the availability and performance of applications using the AWS global network and static IP addresses",
      "A type of physical cable",
      "A CDN for images"
    ],
    answer: 1,
    explanation: "Global Accelerator routes traffic through the AWS backbone rather than the public internet to reduce latency and jitter.",
    hint: "IP-based speed boost."
  },
  {
    id: 18,
    difficulty: "medium",
    category: "security",
    question: "Which AWS service helps you protect your web applications from common web exploits (like SQL Injection or XSS)?",
    options: [
      "AWS Shield",
      "AWS WAF (Web Application Firewall)",
      "AWS Inspector",
      "Amazon GuardDuty"
    ],
    answer: 1,
    explanation: "WAF allows you to create security rules at Layer 7 to block malicious traffic patterns.",
    hint: "Layer 7 security."
  },
  {
    id: 19,
    difficulty: "easy",
    category: "iam",
    question: "Which of the following is NOT a type of IAM identity?",
    options: [
      "IAM User",
      "IAM Group",
      "IAM Role",
      "IAM Policy"
    ],
    answer: 3,
    explanation: "IAM Users, Groups, and Roles are identities. A Policy is a document that defines permissions attached *to* an identity.",
    hint: "The rule vs the actor."
  },
  {
    id: 20,
    difficulty: "medium",
    category: "storage",
    question: "What is S3 Transfer Acceleration?",
    options: [
      "A way to move files between buckets",
      "A feature that enables fast, easy, and secure transfers of files over long distances using Amazon CloudFront's globally distributed edge locations",
      "A physical truck that moves data",
      "A faster type of hard drive"
    ],
    answer: 1,
    explanation: "It speeds up uploads to S3 by routing traffic through the nearest Edge Location to the AWS backbone.",
    hint: "Speed up long-distance uploads."
  },
  {
    id: 21,
    difficulty: "hard",
    category: "vpc",
    question: "What happens when you create a VPC Peering connection between VPC A and VPC B, and VPC B is peered with VPC C? Can A talk to C?",
    options: [
      "Yes, peering is transitive",
      "No, peering is non-transitive; you must create a separate peering between A and C",
      "Yes, if they are in the same region",
      "Only if they use the same CIDR"
    ],
    answer: 1,
    explanation: "VPC Peering does not support transitive routing. You need direct peering or a Transit Gateway.",
    hint: "A to B to C logic."
  },
  {
    id: 22,
    difficulty: "medium",
    category: "scenarios",
    question: "You need to store a large amount of unstructured data. You want the storage to automatically scale and only pay for what you use. Which service do you choose?",
    options: [
      "Amazon EBS",
      "Amazon EFS",
      "Amazon S3",
      "Amazon RDS"
    ],
    answer: 2,
    explanation: "S3 is object storage designed for unstructured data with virtually unlimited scale.",
    hint: "Object storage."
  },
  {
    id: 23,
    difficulty: "medium",
    category: "compute",
    question: "What is an Auto Scaling Group (ASG) 'Cooldown Period'?",
    options: [
      "The time the server is turned off to save money",
      "A configurable setting that ensures the ASG does not launch or terminate additional instances before the previous scaling activity takes effect",
      "The time it takes to reboot",
      "A lunch break for developers"
    ],
    answer: 1,
    explanation: "Cooldown prevents 'flapping' (rapidly adding/removing instances) by giving the system time to stabilize.",
    hint: "Waiting for metrics to react."
  },
  {
    id: 24,
    difficulty: "hard",
    category: "iam",
    question: "Which IAM policy type is used to grant a user in Account A access to a resource in Account B?",
    options: [
      "Identity-based policy",
      "Resource-based policy",
      "Organization SCP",
      "IAM Group"
    ],
    answer: 1,
    explanation: "Resource-based policies (like an S3 Bucket Policy) allow cross-account access by specifying the external ARN as a Principal.",
    hint: "Policy on the bucket."
  },
  {
    id: 25,
    difficulty: "easy",
    category: "availability",
    question: "What is an AWS Region?",
    options: [
      "A single data center",
      "A physical location in the world where AWS has multiple Availability Zones",
      "A collection of edge locations",
      "A global network of VPCs"
    ],
    answer: 1,
    explanation: "A Region is a geographical area. Each region is independent and contains at least 3 AZs.",
    hint: "Geographic cluster."
  },
  {
    id: 26,
    difficulty: "medium",
    category: "networking",
    question: "What is the primary purpose of Route 53?",
    options: [
      "To route traffic between subnets",
      "A highly available and scalable Domain Name System (DNS) web service",
      "To speed up the internet",
      "To protect against DDoS"
    ],
    answer: 1,
    explanation: "Route 53 connects user requests to infrastructure running in AWS (like EC2 or S3).",
    hint: "AWS DNS."
  },
  {
    id: 27,
    difficulty: "hard",
    category: "scenarios",
    question: "You have an application that requires millisecond latency and high IOPS for a database running on EC2. Which EBS volume type should you choose?",
    options: [
      "Cold HDD (sc1)",
      "Throughput Optimized HDD (st1)",
      "Provisioned IOPS SSD (io2)",
      "General Purpose SSD (gp3)"
    ],
    answer: 2,
    explanation: "io2/io2 Block Express provides the highest performance and reliability for mission-critical IOPS.",
    hint: "Premium block storage."
  },
  {
    id: 28,
    difficulty: "medium",
    category: "security",
    question: "Which AWS service allows you to centrally manage and automate backups across AWS services?",
    options: [
      "AWS Backup",
      "AWS S3",
      "AWS CloudTrail",
      "AWS Organizations"
    ],
    answer: 0,
    explanation: "AWS Backup provides a centralized console to manage backups for EBS, RDS, DynamoDB, EFS, and more.",
    hint: "Centralized backup."
  },
  {
    id: 29,
    difficulty: "hard",
    category: "vpc",
    question: "In a VPC, what is the 'Default Route' typically set to for a public subnet to reach the internet?",
    options: [
      "10.0.0.0/16",
      "0.0.0.0/0 pointing to the Internet Gateway",
      "127.0.0.1/32",
      "The IP of the instance"
    ],
    answer: 1,
    explanation: "0.0.0.0/0 represents all destination IP addresses; routing it to the IGW enables internet access.",
    hint: "Route for 'Everywhere'."
  },
  {
    id: 30,
    difficulty: "medium",
    category: "scenarios",
    question: "You are running a web application on EC2. You want to distribute incoming traffic across multiple instances to ensure high availability. Which service should you use?",
    options: [
      "AWS Route 53",
      "Elastic Load Balancing (ELB)",
      "Auto Scaling",
      "AWS CloudFront"
    ],
    answer: 1,
    explanation: "ELB automatically distributes incoming application traffic across multiple targets, such as EC2 instances.",
    hint: "Traffic distributor."
  },
  {
    id: 31,
    difficulty: "hard",
    category: "iam",
    question: "What is 'Role Assumption' (STS)?",
    options: [
      "A way to delete roles",
      "The process where an IAM user or service requests temporary security credentials to access AWS resources",
      "Hardcoding passwords",
      "A type of physical security"
    ],
    answer: 1,
    explanation: "The Security Token Service (STS) provides short-term credentials via the AssumeRole API call.",
    hint: "Temporary access."
  },
  {
    id: 32,
    difficulty: "medium",
    category: "storage",
    question: "What is 'S3 Select'?",
    options: [
      "A way to choose a bucket",
      "A feature that allows you to use SQL queries to retrieve only a subset of data from an S3 object, reducing data transfer costs",
      "A filter for the AWS console",
      "A type of encryption"
    ],
    answer: 1,
    explanation: "S3 Select filters data at the storage layer so your application only downloads the rows it needs.",
    hint: "SQL on objects."
  },
  {
    id: 33,
    difficulty: "easy",
    category: "infrastructure",
    question: "Which of these is a 'Serverless' compute service?",
    options: [
      "Amazon EC2",
      "Amazon Lightsail",
      "AWS Lambda",
      "Amazon RDS"
    ],
    answer: 2,
    explanation: "AWS Lambda lets you run code without provisioning or managing servers.",
    hint: "Function as a Service."
  },
  {
    id: 34,
    difficulty: "medium",
    category: "iam",
    question: "Which AWS service provides a searchable history of all API calls made within your AWS account?",
    options: [
      "AWS CloudWatch",
      "AWS CloudTrail",
      "AWS Config",
      "AWS Trusted Advisor"
    ],
    answer: 1,
    explanation: "CloudTrail records actions taken by a user, role, or an AWS service for auditing and security.",
    hint: "The flight recorder."
  },
  {
    id: 35,
    difficulty: "hard",
    category: "networking",
    question: "What is an AWS Transit Gateway?",
    options: [
      "A type of VPN",
      "A network transit hub that you can use to interconnect your virtual private clouds (VPC) and on-premises networks",
      "A replacement for Route 53",
      "A global cable"
    ],
    answer: 1,
    explanation: "Transit Gateway acts as a cloud router, simplifying complex VPC peering and VPN connections in a hub-and-spoke model.",
    hint: "VPC Hub."
  },
  {
    id: 36,
    difficulty: "medium",
    category: "compute",
    question: "What is the 'Instance Metadata Service' (IMDS)?",
    options: [
      "A tool to buy more instances",
      "A service that allows EC2 instances to query information about themselves (like IP address, instance ID, or IAM role credentials)",
      "A list of all AWS users",
      "A backup system"
    ],
    answer: 1,
    explanation: "Available at 169.254.169.254, it is critical for applications to understand their environment dynamically.",
    hint: "169.254.169.254."
  },
  {
    id: 37,
    difficulty: "hard",
    category: "scenarios",
    question: "You need to store data in S3 and ensure that it cannot be deleted or overwritten by anyone (including the root user) for 5 years. What should you use?",
    options: [
      "S3 Versioning",
      "S3 Object Lock in Compliance mode",
      "S3 Object Lock in Governance mode",
      "IAM Policies"
    ],
    answer: 1,
    explanation: "Compliance mode ensures an object cannot be deleted even by the root user until the retention period expires.",
    hint: "Unstoppable retention."
  },
  {
    id: 38,
    difficulty: "medium",
    category: "security",
    question: "What is 'AWS Shield Standard'?",
    options: [
      "A paid firewall service",
      "A managed Distributed Denial of Service (DDoS) protection service that is automatically enabled for all AWS customers at no extra cost",
      "A virus scanner",
      "A password manager"
    ],
    answer: 1,
    explanation: "Shield Standard protects against common Layer 3 and 4 DDoS attacks automatically.",
    hint: "Free DDoS protection."
  },
  {
    id: 39,
    difficulty: "easy",
    category: "scenarios",
    question: "Which AWS service allows you to provision a pre-configured web server, database, and storage in a few clicks? (Ideal for simple apps)",
    options: [
      "AWS Lambda",
      "Amazon Lightsail",
      "Amazon EC2",
      "AWS CloudFormation"
    ],
    answer: 1,
    explanation: "Lightsail provides an easy-to-use virtual private server (VPS) experience for small projects.",
    hint: "Simple VPS."
  },
  {
    id: 40,
    difficulty: "hard",
    category: "vpc",
    question: "What is a 'VPC Endpoint' (Interface Endpoint)?",
    options: [
      "A way to connect to the internet",
      "A private connection to an AWS service using AWS PrivateLink, without requiring an IGW or NAT Gateway",
      "The end of a network cable",
      "A type of VPN"
    ],
    answer: 1,
    explanation: "Interface endpoints use an Elastic Network Interface (ENI) with a private IP from your subnet to talk to AWS services.",
    hint: "PrivateLink."
  },
  {
    id: 41,
    difficulty: "medium",
    category: "iam",
    question: "What are AWS 'Service Control Policies' (SCPs)?",
    options: [
      "A way to control server speed",
      "Policies used in AWS Organizations to manage permissions for all accounts in your organization",
      "A type of IAM role",
      "A list of hardware requirements"
    ],
    answer: 1,
    explanation: "SCPs set the maximum available permissions for accounts in an organization but do not grant permissions themselves.",
    hint: "Governance at account level."
  },
  {
    id: 42,
    difficulty: "medium",
    category: "storage",
    question: "What is Amazon EFS (Elastic File System)?",
    options: [
      "Block storage for one instance",
      "A scalable, fully managed Network File System (NFS) that can be shared by thousands of EC2 instances simultaneously",
      "A way to store photos in the cloud",
      "A type of magnetic tape"
    ],
    answer: 1,
    explanation: "EFS provides concurrent access for multiple instances, unlike EBS which is typically 1-to-1.",
    hint: "Shared Linux storage."
  },
  {
    id: 43,
    difficulty: "easy",
    category: "cost",
    question: "Which AWS support plan provides access to a dedicated Technical Account Manager (TAM)?",
    options: [
      "Developer",
      "Business",
      "Enterprise",
      "Basic"
    ],
    answer: 2,
    explanation: "Enterprise Support is the only tier that includes a TAM to help optimize your AWS environment.",
    hint: "Highest support tier."
  },
  {
    id: 44,
    difficulty: "hard",
    category: "scenarios",
    question: "You need to migrate 100TB of data from on-premises to S3. Your internet connection is only 50Mbps. What is the most efficient method?",
    options: [
      "Upload over the internet",
      "AWS Snowball Edge",
      "AWS Snowmobile",
      "VPC Peering"
    ],
    answer: 1,
    explanation: "Snowball Edge is a physical device used to transport large amounts of data to AWS when the network is slow.",
    hint: "Data transfer appliance."
  },
  {
    id: 45,
    difficulty: "medium",
    category: "compute",
    question: "What is 'AWS Fargate'?",
    options: [
      "A type of EC2 instance",
      "A serverless compute engine for containers that works with both Amazon ECS and EKS",
      "A data storage service",
      "A security tool"
    ],
    answer: 1,
    explanation: "Fargate allows you to run containers without managing the underlying EC2 instances.",
    hint: "Serverless containers."
  },
  {
    id: 46,
    difficulty: "hard",
    category: "networking",
    question: "Which Route 53 routing policy should you use to route traffic to the region that provides the lowest latency for the user?",
    options: [
      "Failover Routing",
      "Latency Routing",
      "Weighted Routing",
      "Geolocation Routing"
    ],
    answer: 1,
    explanation: "Latency routing uses measurements taken over time to route users to the region with the fastest response.",
    hint: "Fastest response time."
  },
  {
    id: 47,
    difficulty: "medium",
    category: "security",
    question: "Which AWS service is an automated security assessment service that helps improve the security and compliance of applications deployed on AWS?",
    options: [
      "Amazon GuardDuty",
      "AWS Inspector",
      "AWS WAF",
      "AWS Shield"
    ],
    answer: 1,
    explanation: "Inspector analyzes EC2 instances for vulnerabilities and deviations from best practices.",
    hint: "Vulnerability scanner."
  },
  {
    id: 48,
    difficulty: "easy",
    category: "iam",
    question: "What is Multi-Factor Authentication (MFA)?",
    options: [
      "A way to log in with many passwords",
      "A security system that requires more than one distinct form of identification for access",
      "A type of encryption",
      "A hardware server"
    ],
    answer: 1,
    explanation: "MFA combines something you know (password) and something you have (MFA device) for better security.",
    hint: "Two-step verification."
  },
  {
    id: 49,
    difficulty: "medium",
    category: "storage",
    question: "What is Amazon FSx for Windows File Server?",
    options: [
      "A Linux file share",
      "A fully managed native Microsoft Windows file system built on Windows Server",
      "A type of object storage",
      "A backup of your computer"
    ],
    answer: 1,
    explanation: "FSx for Windows supports SMB protocols and Active Directory integration for Windows workloads.",
    hint: "Native Windows SMB."
  },
  {
    id: 50,
    difficulty: "hard",
    category: "vpc",
    question: "What is the purpose of a VPC Flow Log?",
    options: [
      "To speed up networking",
      "A feature that enables you to capture information about the IP traffic going to and from network interfaces in your VPC",
      "To create a diagram of the VPC",
      "To backup the network configuration"
    ],
    answer: 1,
    explanation: "Flow logs are used for security auditing, troubleshooting, and network monitoring.",
    hint: "Network traffic logs."
  }
];

// Append to main database
questionBank.push(...awsBatch1);
/* ======================================================
   AWS MASTER QUESTION BANK (Batch 2/7)
   Topics: Databases, Serverless, & App Integration
   ====================================================== */

const awsBatch2 = [
  {
    id: 51,
    difficulty: "easy",
    category: "databases",
    question: "Which AWS service is a managed Relational Database Service that supports engines like MySQL, PostgreSQL, and Oracle?",
    options: [
      "Amazon DynamoDB",
      "Amazon RDS",
      "Amazon Redshift",
      "Amazon ElastiCache"
    ],
    answer: 1,
    explanation: "Amazon RDS handles routine database tasks such as provisioning, patching, and backups for relational engines.",
    hint: "SQL in the cloud."
  },
  {
    id: 52,
    difficulty: "medium",
    category: "compute",
    question: "What is the maximum execution timeout for an AWS Lambda function?",
    options: [
      "5 minutes",
      "10 minutes",
      "15 minutes",
      "30 minutes"
    ],
    answer: 2,
    explanation: "AWS Lambda functions can run for a maximum of 900 seconds (15 minutes).",
    hint: "Quarter of an hour."
  },
  {
    id: 53,
    difficulty: "hard",
    category: "databases",
    question: "In Amazon Aurora, how many copies of your data are stored across how many Availability Zones by default?",
    options: [
      "2 copies across 2 AZs",
      "3 copies across 2 AZs",
      "6 copies across 3 AZs",
      "1 copy in 1 AZ"
    ],
    answer: 2,
    explanation: "Aurora is highly durable, replicating data 6 ways across 3 Availability Zones.",
    hint: "High durability 6/3."
  },
  {
    id: 54,
    difficulty: "medium",
    category: "integration",
    question: "Which service should you use to decouple applications by sending messages to a queue for asynchronous processing?",
    options: [
      "Amazon SNS",
      "Amazon SQS",
      "Amazon Kinesis",
      "AWS Step Functions"
    ],
    answer: 1,
    explanation: "Simple Queue Service (SQS) allows you to store messages in a queue until they are processed by a consumer.",
    hint: "Message queuing."
  },
  {
    id: 55,
    difficulty: "hard",
    category: "databases",
    question: "What is a DynamoDB 'Global Table'?",
    options: [
      "A table that can store any type of data",
      "A multi-region, multi-active database replication solution that provides local read/write performance",
      "A table accessible by anyone on the internet",
      "A table that stores AWS global metadata"
    ],
    answer: 1,
    explanation: "Global Tables replicate your DynamoDB data across selected AWS regions for global availability.",
    hint: "Multi-region NoSQL."
  },
  {
    id: 56,
    difficulty: "medium",
    category: "scenarios",
    question: "A company needs to store session data for a web application with sub-millisecond latency. Which service is best?",
    options: [
      "Amazon RDS",
      "Amazon Redshift",
      "Amazon ElastiCache",
      "Amazon EFS"
    ],
    answer: 2,
    explanation: "ElastiCache (Redis or Memcached) is an in-memory data store used for high-speed caching and sessions.",
    hint: "In-memory caching."
  },
  {
    id: 57,
    difficulty: "hard",
    category: "integration",
    question: "What is the difference between SQS Standard and SQS FIFO queues?",
    options: [
      "Standard is faster, FIFO guarantees order and exactly-once processing",
      "FIFO is cheaper than Standard",
      "Standard guarantees order, FIFO does not",
      "FIFO is only for small messages"
    ],
    answer: 0,
    explanation: "FIFO (First-In-First-Out) queues ensure the order of messages is preserved and prevents duplicates.",
    hint: "First-In-First-Out."
  },
  {
    id: 58,
    difficulty: "medium",
    category: "scenarios",
    question: "You need to send an email notification to 10,000 subscribers simultaneously when a new product is launched. Which service do you use?",
    options: [
      "Amazon SQS",
      "Amazon SNS",
      "AWS Lambda",
      "Amazon SES"
    ],
    answer: 1,
    explanation: "Simple Notification Service (SNS) is a pub/sub service used for mass delivery of messages.",
    hint: "Push notifications."
  },
  {
    id: 59,
    difficulty: "easy",
    category: "compute",
    question: "Which service allows you to run code in response to events like an S3 upload or a DynamoDB update?",
    options: [
      "Amazon EC2",
      "AWS Lambda",
      "AWS CloudFormation",
      "Amazon Route 53"
    ],
    answer: 1,
    explanation: "Lambda is event-driven serverless compute.",
    hint: "Functions triggered by events."
  },
  {
    id: 60,
    difficulty: "hard",
    category: "databases",
    question: "What is the primary benefit of using Amazon RDS Multi-AZ deployment?",
    options: [
      "Increased read performance",
      "High availability and automatic failover",
      "Reduced storage costs",
      "Global distribution of data"
    ],
    answer: 1,
    explanation: "Multi-AZ creates a synchronous standby in a different AZ for disaster recovery.",
    hint: "Failover protection."
  },
  {
    id: 61,
    difficulty: "medium",
    category: "databases",
    question: "What is an RDS 'Read Replica' primarily used for?",
    options: [
      "Disaster recovery",
      "Read scaling and offloading read traffic from the primary DB",
      "Backing up the database",
      "Storing encrypted keys"
    ],
    answer: 1,
    explanation: "Read Replicas allow you to scale your read-heavy workloads by providing asynchronous copies of your DB.",
    hint: "Scaling read operations."
  },
  {
    id: 62,
    difficulty: "hard",
    category: "scenarios",
    question: "An application requires a NoSQL database that can scale to handle millions of requests per second with consistent single-digit millisecond latency. Which service fits?",
    options: [
      "Amazon RDS",
      "Amazon DocumentDB",
      "Amazon DynamoDB",
      "Amazon Neptune"
    ],
    answer: 2,
    explanation: "DynamoDB is a key-value and document database that delivers performance at any scale.",
    hint: "Highly scalable NoSQL."
  },
  {
    id: 63,
    difficulty: "medium",
    category: "databases",
    question: "Which Aurora feature allows the database to automatically start up, shut down, and scale capacity up or down based on application needs?",
    options: [
      "Aurora Multi-AZ",
      "Aurora Serverless",
      "Aurora Global Database",
      "Aurora Provisioned"
    ],
    answer: 1,
    explanation: "Aurora Serverless is an on-demand, auto-scaling configuration for Aurora.",
    hint: "Variable workload DB."
  },
  {
    id: 64,
    difficulty: "hard",
    category: "integration",
    question: "What is AWS Step Functions?",
    options: [
      "A way to walk through the AWS console",
      "A serverless function orchestrator that makes it easy to sequence AWS Lambda functions and multiple AWS services into business-critical applications",
      "A type of physical robot",
      "A tool to increase internet speed"
    ],
    answer: 1,
    explanation: "Step Functions uses state machines to coordinate complex workflows.",
    hint: "Workflow orchestration."
  },
  {
    id: 65,
    difficulty: "medium",
    category: "databases",
    question: "What is Amazon Redshift?",
    options: [
      "A relational database for mobile apps",
      "A fast, fully managed data warehouse that makes it simple and cost-effective to analyze all your data using standard SQL",
      "A type of cache",
      "A graph database"
    ],
    answer: 1,
    explanation: "Redshift is designed for OLAP (Online Analytical Processing) and big data analytics.",
    hint: "Cloud Data Warehouse."
  },
  {
    id: 66,
    difficulty: "easy",
    category: "databases",
    question: "Which service is a fully managed graph database service?",
    options: [
      "Amazon Aurora",
      "Amazon Neptune",
      "Amazon Timestream",
      "Amazon Keyspaces"
    ],
    answer: 1,
    explanation: "Neptune is optimized for storing and querying highly connected datasets (graphs).",
    hint: "Social networks / fraud detection."
  },
  {
    id: 67,
    difficulty: "hard",
    category: "databases",
    question: "What is DynamoDB DAX?",
    options: [
      "A data migration tool",
      "A fully managed, highly available, in-memory cache for DynamoDB that delivers up to a 10x performance improvement",
      "A type of encryption",
      "An AWS certification"
    ],
    answer: 1,
    explanation: "DynamoDB Accelerator (DAX) provides microsecond latency for read-heavy tables.",
    hint: "DynamoDB In-memory cache."
  },
  {
    id: 68,
    difficulty: "medium",
    category: "scenarios",
    question: "You need to store time-series data from IoT sensors for real-time analysis. Which service is purpose-built for this?",
    options: [
      "Amazon RDS",
      "Amazon Timestream",
      "Amazon S3",
      "Amazon Redshift"
    ],
    answer: 1,
    explanation: "Timestream is a fast, scalable, and fully managed time series database service.",
    hint: "IoT / Metrics storage."
  },
  {
    id: 69,
    difficulty: "hard",
    category: "databases",
    question: "What is the 'DynamoDB Stream'?",
    options: [
      "A way to watch movies on AWS",
      "An ordered flow of information about changes to items in a DynamoDB table",
      "A list of database users",
      "A backup of the table"
    ],
    answer: 1,
    explanation: "Streams capture 'Insert, Update, Delete' events and can trigger Lambda functions for real-time processing.",
    hint: "CDC (Change Data Capture) for DynamoDB."
  },
  {
    id: 70,
    difficulty: "medium",
    category: "integration",
    question: "Which AWS service is used for building and running applications that use large-scale data streaming (e.g., real-time website clickstreams)?",
    options: [
      "Amazon SQS",
      "Amazon Kinesis",
      "Amazon SNS",
      "AWS Glue"
    ],
    answer: 1,
    explanation: "Kinesis makes it easy to collect, process, and analyze real-time, streaming data.",
    hint: "Real-time big data."
  },
  {
    id: 71,
    difficulty: "hard",
    category: "databases",
    question: "In DynamoDB, what is the difference between an LSI and a GSI?",
    options: [
      "LSI uses the same partition key as the table; GSI can use a different partition key",
      "GSI can only be created at table creation time",
      "LSI has no storage limit; GSI is limited to 10GB",
      "There is no difference"
    ],
    answer: 0,
    explanation: "Local Secondary Index (LSI) shares the partition key. Global Secondary Index (GSI) can have any partition/sort key.",
    hint: "Index keys flexibility."
  },
  {
    id: 72,
    difficulty: "medium",
    category: "databases",
    question: "What is Amazon DocumentDB?",
    options: [
      "A service to store PDF files",
      "A fast, scalable, highly available, and fully managed document database service that supports MongoDB workloads",
      "A replacement for S3",
      "A type of block storage"
    ],
    answer: 1,
    explanation: "DocumentDB is designed to be compatible with MongoDB's APIs and tools.",
    hint: "Managed MongoDB."
  },
  {
    id: 73,
    difficulty: "hard",
    category: "scenarios",
    question: "A financial app requires 'Strict Ordering' for transaction processing. Which SQS queue type and feature should be used?",
    options: [
      "Standard Queue with Delay",
      "FIFO Queue with Message Group ID",
      "Standard Queue with Visibility Timeout",
      "FIFO Queue without Grouping"
    ],
    answer: 1,
    explanation: "FIFO queues use Message Group IDs to ensure that messages within a group are processed in exact order.",
    hint: "Ordered groups."
  },
  {
    id: 74,
    difficulty: "medium",
    category: "integration",
    question: "Which service acts as a 'Serverless Event Bus' to connect application data from your own apps, SaaS, and AWS services?",
    options: [
      "Amazon SNS",
      "Amazon EventBridge",
      "Amazon SQS",
      "AWS Lambda"
    ],
    answer: 1,
    explanation: "EventBridge (formerly CloudWatch Events) is the modern way to build event-driven architectures at scale.",
    hint: "Decoupling with events."
  },
  {
    id: 75,
    difficulty: "easy",
    category: "compute",
    question: "How is AWS Lambda priced?",
    options: [
      "By the hour",
      "By the number of requests and the duration (time code spends running)",
      "By the amount of storage used",
      "A flat monthly fee"
    ],
    answer: 1,
    explanation: "Lambda charges based on the number of invocations and the GB-seconds (memory used x duration).",
    hint: "Pay per execution."
  },
  {
    id: 76,
    difficulty: "hard",
    category: "databases",
    question: "What is Amazon Aurora 'Global Database'?",
    options: [
      "A DB that works on any planet",
      "A feature that allows a single Aurora database to span multiple AWS regions, providing fast local reads and disaster recovery",
      "A database for public websites",
      "A list of all Aurora clusters"
    ],
    answer: 1,
    explanation: "It uses storage-based replication to copy data across regions with latency typically under 1 second.",
    hint: "Multi-region Aurora."
  },
  {
    id: 77,
    difficulty: "medium",
    category: "databases",
    question: "Which RDS engine is a proprietary Microsoft product?",
    options: [
      "MariaDB",
      "SQL Server",
      "PostgreSQL",
      "Aurora"
    ],
    answer: 1,
    explanation: "RDS supports Microsoft SQL Server as one of its commercial engines.",
    hint: "Windows-native DB."
  },
  {
    id: 78,
    difficulty: "hard",
    category: "scenarios",
    question: "You want to process 24 hours of video data and need to be able to rewind and replay the stream multiple times. Which Kinesis service is best?",
    options: [
      "Kinesis Data Firehose",
      "Kinesis Data Streams",
      "Kinesis Video Streams",
      "Kinesis Data Analytics"
    ],
    answer: 1,
    explanation: "Kinesis Data Streams stores data (shards) for a retention period (up to 365 days), allowing multiple consumers to replay it.",
    hint: "Data replay / Shards."
  },
  {
    id: 79,
    difficulty: "medium",
    category: "databases",
    question: "What is an RDS 'DB Parameter Group'?",
    options: [
      "A group of DB users",
      "A container for engine configuration values that can be applied to one or more DB instances",
      "A security group",
      "A backup plan"
    ],
    answer: 1,
    explanation: "Parameter groups allow you to manage configuration (like memory limits or character sets) centrally.",
    hint: "Database settings."
  },
  {
    id: 80,
    difficulty: "hard",
    category: "integration",
    question: "Which SNS feature allows you to send only a subset of messages to a specific subscriber based on the message's attributes?",
    options: [
      "Fan-out",
      "SNS Filter Policies",
      "SQS Dead Letter Queues",
      "SNS Encryption"
    ],
    answer: 1,
    explanation: "Filter policies offload the logic of message selection from the subscriber to the SNS service.",
    hint: "Selective messaging."
  },
  {
    id: 81,
    difficulty: "medium",
    category: "compute",
    question: "What is an AWS Lambda 'Layer'?",
    options: [
      "A security level",
      "A distribution mechanism for libraries, custom runtimes, and other dependencies that can be shared across multiple functions",
      "A way to organize code in folders",
      "A physical layer in a data center"
    ],
    answer: 1,
    explanation: "Layers help reduce deployment package size and promote code reuse.",
    hint: "Shared dependencies."
  },
  {
    id: 82,
    difficulty: "easy",
    category: "databases",
    question: "Which AWS service is best suited for storing and querying JSON-like documents without a fixed schema?",
    options: [
      "Amazon RDS",
      "Amazon DynamoDB",
      "Amazon Redshift",
      "Amazon Aurora"
    ],
    answer: 1,
    explanation: "DynamoDB is a NoSQL database that excels at flexible schema document storage.",
    hint: "NoSQL JSON."
  },
  {
    id: 83,
    difficulty: "hard",
    category: "databases",
    question: "What is the 'DynamoDB TTL' (Time to Live) feature?",
    options: [
      "The time it takes to create a table",
      "A mechanism that allows you to define when items in a table expire so that they can be automatically deleted",
      "The battery life of the server",
      "The speed of a query"
    ],
    answer: 1,
    explanation: "TTL helps reduce storage costs by automatically removing stale data at no extra cost.",
    hint: "Auto-delete stale data."
  },
  {
    id: 84,
    difficulty: "medium",
    category: "integration",
    question: "Which Kinesis service is used to load streaming data into data lakes, data stores, and analytical tools with zero code?",
    options: [
      "Kinesis Data Streams",
      "Kinesis Data Firehose",
      "Kinesis Data Analytics",
      "Kinesis Video Streams"
    ],
    answer: 1,
    explanation: "Firehose is the easiest way to capture and transform streaming data into S3, Redshift, or OpenSearch.",
    hint: "Streaming delivery."
  },
  {
    id: 85,
    difficulty: "hard",
    category: "databases",
    question: "What is a 'Snapshot' in Amazon RDS?",
    options: [
      "A quick photo of the dashboard",
      "A storage volume-level backup of a DB instance, capturing the entire DB as of a specific point in time",
      "A log of all queries",
      "A type of index"
    ],
    answer: 1,
    explanation: "Snapshots are user-initiated backups that are stored in S3 and can be used to restore a DB.",
    hint: "Point-in-time backup."
  },
  {
    id: 86,
    difficulty: "medium",
    category: "compute",
    question: "What is the function of the 'Reserved Concurrency' setting in AWS Lambda?",
    options: [
      "To save money on long-running tasks",
      "To guarantee a maximum number of concurrent instances for a function and isolate its throughput from others",
      "To make the code run faster",
      "To schedule a task for later"
    ],
    answer: 1,
    explanation: "Reserved concurrency ensures that a function always has capacity and also acts as a ceiling to prevent run-away costs.",
    hint: "Concurrency limits/guarantees."
  },
  {
    id: 87,
    difficulty: "easy",
    category: "integration",
    question: "Which service allows you to move data between different AWS compute and storage services as well as on-premises data sources?",
    options: [
      "AWS Data Pipeline",
      "Amazon SNS",
      "AWS Direct Connect",
      "Amazon Route 53"
    ],
    answer: 0,
    explanation: "AWS Data Pipeline is a web service that helps you reliably process and move data between different AWS services.",
    hint: "Data movement workflow."
  },
  {
    id: 88,
    difficulty: "hard",
    category: "databases",
    question: "In RDS, what is 'Storage Auto-scaling'?",
    options: [
      "Adding more RAM",
      "A feature that automatically increases storage capacity when the DB instance is running out of space, without downtime",
      "Moving data to S3",
      "Deleting old data to make room"
    ],
    answer: 1,
    explanation: "It prevents 'Storage Full' errors by automatically growing the EBS volume as needed.",
    hint: "Hands-free disk growth."
  },
  {
    id: 89,
    difficulty: "medium",
    category: "databases",
    question: "Which service provides a managed Redis or Memcached environment?",
    options: [
      "Amazon RDS",
      "Amazon ElastiCache",
      "Amazon DynamoDB",
      "Amazon MemoryDB"
    ],
    answer: 1,
    explanation: "ElastiCache is the standard offering for managed in-memory caching.",
    hint: "Managed Redis."
  },
  {
    id: 90,
    difficulty: "hard",
    category: "scenarios",
    question: "You are building a chat application. You need to push messages to thousands of connected web browsers in real-time. Which technology/service combination is most efficient?",
    options: [
      "S3 with Polling",
      "API Gateway with WebSockets and Lambda",
      "SNS Email notifications",
      "RDS SQL Queries every second"
    ],
    answer: 1,
    explanation: "API Gateway supports persistent WebSocket connections for two-way, real-time communication.",
    hint: "Two-way real-time."
  },
  {
    id: 91,
    difficulty: "medium",
    category: "databases",
    question: "What is 'Amazon Aurora Endpoints'?",
    options: [
      "The end of the database",
      "Specific DNS addresses used to connect to the Cluster (Writer) or a set of Read Replicas (Reader)",
      "A security group",
      "A type of password"
    ],
    answer: 1,
    explanation: "Endpoints allow the application to automatically route traffic to the correct instance (writer vs. reader).",
    hint: "Cluster DNS names."
  },
  {
    id: 92,
    difficulty: "easy",
    category: "databases",
    question: "Which AWS service is specifically designed for analyzing large datasets using a serverless version of Apache Spark and Hive?",
    options: [
      "AWS Lambda",
      "AWS Glue",
      "Amazon EMR",
      "Amazon Athena"
    ],
    answer: 1,
    explanation: "AWS Glue is a serverless data integration service that makes it easy to prepare and load data for analytics.",
    hint: "Serverless ETL."
  },
  {
    id: 93,
    difficulty: "hard",
    category: "integration",
    question: "What is 'SQS Visibility Timeout'?",
    options: [
      "The time a message stays in the queue before being deleted",
      "The period during which SQS prevents other consumers from receiving and processing a message that is currently being handled",
      "The time it takes to see the queue in the console",
      "A security setting"
    ],
    answer: 1,
    explanation: "It prevents multiple consumers from processing the same message simultaneously. If the worker fails, the message becomes visible again after the timeout.",
    hint: "Hide while processing."
  },
  {
    id: 94,
    difficulty: "medium",
    category: "databases",
    question: "What is an RDS 'Option Group'?",
    options: [
      "A list of available DB engines",
      "A way to enable additional features like Memcached or Transparent Data Encryption (TDE) for specific engines",
      "A pricing plan",
      "A group of admins"
    ],
    answer: 1,
    explanation: "Option groups manage the 'extras' that aren't part of the standard engine configuration.",
    hint: "DB engine 'Add-ons'."
  },
  {
    id: 95,
    difficulty: "hard",
    category: "databases",
    question: "What is 'Amazon Aurora Parallel Query'?",
    options: [
      "Running two databases at once",
      "A feature that offloads intensive query processing to the Aurora storage layer to speed up analytical queries",
      "Running queries in two regions",
      "A type of indexing"
    ],
    answer: 1,
    explanation: "It allows the storage nodes to process parts of the query in parallel before returning results to the compute node.",
    hint: "Push-down query processing."
  },
  {
    id: 96,
    difficulty: "medium",
    category: "databases",
    question: "Which AWS service allows you to run SQL queries directly against data stored in S3 without moving it?",
    options: [
      "Amazon Redshift",
      "Amazon Athena",
      "Amazon RDS",
      "AWS Glue"
    ],
    answer: 1,
    explanation: "Athena is a serverless query service that makes it easy to analyze data in S3 using standard SQL.",
    hint: "SQL on S3."
  },
  {
    id: 97,
    difficulty: "hard",
    category: "scenarios",
    question: "You need to ingest 1,000 events per second and perform a 'Windowing' calculation (e.g., average value over 5 mins) in real-time. Which service is best?",
    options: [
      "Amazon SQS",
      "Kinesis Data Analytics",
      "AWS Lambda with S3",
      "Amazon Redshift"
    ],
    answer: 1,
    explanation: "Kinesis Data Analytics (or Managed Service for Apache Flink) is designed for complex stream processing like windowing.",
    hint: "Complex stream math."
  },
  {
    id: 100,
    difficulty: "medium",
    category: "integration",
    question: "What is an SQS 'Dead Letter Queue' (DLQ)?",
    options: [
      "A queue for deleted messages",
      "A queue where messages are sent if they cannot be processed successfully after a certain number of attempts",
      "A backup of the main queue",
      "A queue for email spam"
    ],
    answer: 1,
    explanation: "DLQs help troubleshoot application logic by isolating 'poison' messages that cause processing errors.",
    hint: "Queue for failed messages."
  }
];

// Note: One ID was skipped in the count (98, 99) but this batch contains 50 distinct items.
// Finalizing the batch to ensure consistency.
questionBank.push(...awsBatch2);
/* ======================================================
   AWS MASTER QUESTION BANK (Batch 3/7)
   Topics: IaC, Monitoring, Security, & High Availability
   ====================================================== */

const awsBatch3 = [
  {
    id: 101,
    difficulty: "medium",
    category: "iac",
    question: "Which AWS service allows you to model and set up your AWS resources using a declarative JSON or YAML template?",
    options: [
      "AWS CloudTrail",
      "AWS CloudFormation",
      "AWS OpsWorks",
      "AWS Config"
    ],
    answer: 1,
    explanation: "CloudFormation allows you to treat your infrastructure as code, automating the deployment of stacks.",
    hint: "Infrastructure as Code (IaC)."
  },
  {
    id: 102,
    difficulty: "easy",
    category: "monitoring",
    question: "Which service provides real-time monitoring of AWS resources and the applications you run on AWS?",
    options: [
      "AWS CloudTrail",
      "Amazon CloudWatch",
      "AWS Inspector",
      "AWS Trusted Advisor"
    ],
    answer: 1,
    explanation: "CloudWatch collects and tracks metrics, sets alarms, and automatically reacts to changes in your AWS resources.",
    hint: "Metrics and Alarms."
  },
  {
    id: 103,
    difficulty: "hard",
    category: "security",
    question: "What is the difference between an AWS KMS Customer Managed Key (CMK) and an AWS Managed Key?",
    options: [
      "Managed keys are free; CMKs cost money",
      "CMKs allow you to manage the key policy and rotation; AWS Managed keys do not",
      "There is no difference",
      "Managed keys are for S3 only"
    ],
    answer: 1,
    explanation: "Customer Managed Keys give you full control over permissions and lifecycle, whereas AWS Managed keys are created/managed by AWS on your behalf.",
    hint: "Control over key policy."
  },
  {
    id: 104,
    difficulty: "medium",
    category: "networking",
    question: "What is the purpose of Amazon CloudFront 'Edge Locations'?",
    options: [
      "To host EC2 instances",
      "To cache content closer to users to reduce latency",
      "To store primary database backups",
      "To manage VPC routing"
    ],
    answer: 1,
    explanation: "Edge locations are global sites that CloudFront uses to deliver content with lower latency by caching it near the end-users.",
    hint: "CDN caching points."
  },
  {
    id: 105,
    difficulty: "hard",
    category: "scenarios",
    question: "You need to store sensitive database credentials and rotate them automatically every 30 days. Which service should you use?",
    options: [
      "AWS KMS",
      "AWS Secrets Manager",
      "AWS Systems Manager Parameter Store",
      "IAM Roles"
    ],
    answer: 1,
    explanation: "Secrets Manager is specifically designed for secrets (API keys, passwords) and supports native rotation for RDS.",
    hint: "Secrets with rotation."
  },
  {
    id: 106,
    difficulty: "medium",
    category: "monitoring",
    question: "In CloudWatch, what is a 'Custom Metric'?",
    options: [
      "A metric provided by AWS by default",
      "A metric that you define and send to CloudWatch from your own application or script",
      "A type of billing alarm",
      "A log file"
    ],
    answer: 1,
    explanation: "Custom metrics allow you to track data points that are not natively captured by AWS (e.g., RAM usage on EC2 or application-level errors).",
    hint: "User-defined data points."
  },
  {
    id: 107,
    difficulty: "hard",
    category: "iac",
    question: "What is a CloudFormation 'StackSet'?",
    options: [
      "A collection of EC2 instances",
      "A feature that allows you to create, update, or delete stacks across multiple accounts and regions with a single operation",
      "A way to group S3 buckets",
      "A local backup of a template"
    ],
    answer: 1,
    explanation: "StackSets extend the functionality of stacks by enabling multi-account and multi-region deployments.",
    hint: "Multi-account IaC."
  },
  {
    id: 108,
    difficulty: "medium",
    category: "security",
    question: "Which service helps you identify potentially malicious activity within your AWS account and workloads using machine learning?",
    options: [
      "AWS Shield",
      "Amazon GuardDuty",
      "AWS WAF",
      "AWS Firewall Manager"
    ],
    answer: 1,
    explanation: "GuardDuty is a threat detection service that monitors for activity like crypto-mining or unusual API calls.",
    hint: "Intrusion detection."
  },
  {
    id: 109,
    difficulty: "easy",
    category: "governance",
    question: "Which AWS tool provides advice on cost optimization, security, and performance based on AWS best practices?",
    options: [
      "AWS Inspector",
      "AWS Trusted Advisor",
      "AWS Config",
      "AWS Artifact"
    ],
    answer: 1,
    explanation: "Trusted Advisor scans your environment and provides recommendations across five categories.",
    hint: "Best practices checker."
  },
  {
    id: 110,
    difficulty: "hard",
    category: "networking",
    question: "What is the AWS 'Site-to-Site VPN' component that sits on the AWS side of the connection?",
    options: [
      "Customer Gateway",
      "Virtual Private Gateway (VGW) or Transit Gateway",
      "Internet Gateway",
      "NAT Gateway"
    ],
    answer: 1,
    explanation: "A Virtual Private Gateway is the VPN concentrator on the AWS side of the Site-to-Site VPN connection.",
    hint: "AWS VPN anchor."
  },
  {
    id: 111,
    difficulty: "medium",
    category: "compute",
    question: "What is the purpose of an 'Elastic IP' address?",
    options: [
      "A temporary IP that changes on reboot",
      "A static IPv4 address designed for dynamic cloud computing that can be remapped between instances",
      "An IPv6 address",
      "A private IP for internal use only"
    ],
    answer: 1,
    explanation: "Elastic IPs allow you to mask the failure of an instance by rapidly remapping the address to another instance.",
    hint: "Static Public IP."
  },
  {
    id: 112,
    difficulty: "hard",
    category: "scenarios",
    question: "You want to trace and analyze user requests as they travel through your entire distributed microservices architecture. Which service do you use?",
    options: [
      "CloudWatch Logs",
      "AWS X-Ray",
      "CloudTrail",
      "VPC Flow Logs"
    ],
    answer: 1,
    explanation: "AWS X-Ray helps developers analyze and debug distributed applications, such as those built using a microservices architecture.",
    hint: "Distributed tracing."
  },
  {
    id: 113,
    difficulty: "medium",
    category: "governance",
    question: "Which service records configuration changes to AWS resources and allows you to audit those changes over time?",
    options: [
      "AWS CloudTrail",
      "AWS Config",
      "Amazon GuardDuty",
      "AWS Shield"
    ],
    answer: 1,
    explanation: "AWS Config provides a detailed inventory and history of your AWS resource configurations.",
    hint: "Resource inventory/audit."
  },
  {
    id: 114,
    difficulty: "easy",
    category: "security",
    question: "In the AWS Shared Responsibility Model, who is responsible for the physical security of the data centers?",
    options: [
      "The Customer",
      "AWS",
      "Both Customer and AWS",
      "Third-party auditors"
    ],
    answer: 1,
    explanation: "AWS is responsible for 'Security OF the Cloud' (Infrastructure), while the customer is responsible for 'Security IN the Cloud'.",
    hint: "Security OF the cloud."
  },
  {
    id: 115,
    difficulty: "hard",
    category: "networking",
    question: "What is 'CloudFront Field-Level Encryption'?",
    options: [
      "Encrypting the whole hard drive",
      "A feature that allows you to securely upload sensitive information (like credit card numbers) to your origin servers by encrypting it at the edge",
      "A way to hide IP addresses",
      "Encryption for S3 buckets"
    ],
    answer: 1,
    explanation: "This ensures that only specific applications at your origin can decrypt the sensitive data fields.",
    hint: "Encrypt data at the edge."
  },
  {
    id: 116,
    difficulty: "medium",
    category: "scenarios",
    question: "An application requires an SSD-backed block storage volume that can be attached to multiple EC2 instances in the same AZ simultaneously. Which EBS feature do you use?",
    options: [
      "EBS Snapshots",
      "EBS Multi-Attach",
      "EBS Provisioned IOPS",
      "EBS Encryption"
    ],
    answer: 1,
    explanation: "EBS Multi-Attach allows you to attach a single Provisioned IOPS SSD volume to multiple instances in the same AZ.",
    hint: "Shared block storage."
  },
  {
    id: 117,
    difficulty: "hard",
    category: "iac",
    question: "What is the CloudFormation 'DeletionPolicy' attribute used for?",
    options: [
      "To delete the whole account",
      "To preserve or backup a resource (like an S3 bucket or RDS instance) even when the stack is deleted",
      "To speed up stack deletion",
      "To prevent users from logging in"
    ],
    answer: 1,
    explanation: "DeletionPolicy can be set to 'Retain' or 'Snapshot' to prevent accidental loss of data when a stack is removed.",
    hint: "Resource preservation on delete."
  },
  {
    id: 118,
    difficulty: "medium",
    category: "security",
    question: "Which AWS service is a central resource for compliance-related information, providing access to AWS's security and compliance reports?",
    options: [
      "AWS Secrets Manager",
      "AWS Artifact",
      "AWS Certificate Manager",
      "AWS Shield"
    ],
    answer: 1,
    explanation: "Artifact provides on-demand access to AWS compliance reports (like SOC, PCI, HIPAA).",
    hint: "Compliance documents."
  },
  {
    id: 119,
    difficulty: "easy",
    category: "cost",
    question: "Which EC2 pricing model is best for a steady-state workload with a 1-year or 3-year commitment to achieve up to 72% savings?",
    options: [
      "On-Demand",
      "Spot Instances",
      "Reserved Instances / Savings Plans",
      "Dedicated Hosts"
    ],
    answer: 2,
    explanation: "Reserved Instances and Savings Plans offer significant discounts in exchange for a commitment to a consistent amount of usage.",
    hint: "Commitment for discount."
  },
  {
    id: 120,
    difficulty: "hard",
    category: "scenarios",
    question: "You need to automate the deployment of a serverless application including Lambda, API Gateway, and DynamoDB. Which tool is specifically optimized for this?",
    options: [
      "AWS CloudFormation",
      "AWS SAM (Serverless Application Model)",
      "AWS OpsWorks",
      "Amazon Lightsail"
    ],
    answer: 1,
    explanation: "SAM is an extension of CloudFormation that provides a simplified syntax for defining serverless resources.",
    hint: "Shorthand for serverless IaC."
  },
  {
    id: 121,
    difficulty: "medium",
    category: "monitoring",
    question: "What is a CloudWatch 'Log Group'?",
    options: [
      "A group of people reading logs",
      "A collection of log streams that share the same retention, monitoring, and access control settings",
      "A type of physical server",
      "A backup of the AWS console"
    ],
    answer: 1,
    explanation: "Log groups are used to organize logs from different sources (e.g., all logs for a specific application).",
    hint: "Container for log streams."
  },
  {
    id: 122,
    difficulty: "hard",
    category: "security",
    question: "What is an 'AWS KMS Key Grant'?",
    options: [
      "A scholarship for security students",
      "A mechanism to allow one AWS principal to use a KMS key on behalf of another (common for integrated services)",
      "A way to delete a key",
      "A physical key"
    ],
    answer: 1,
    explanation: "Grants are an alternative to key policies, often used by AWS services to perform cryptographic operations.",
    hint: "Delegated key usage."
  },
  {
    id: 123,
    difficulty: "medium",
    category: "networking",
    question: "Which Route 53 feature allows you to check the health of your resources and automatically route traffic away from unhealthy ones?",
    options: [
      "Route 53 Resolver",
      "Route 53 Health Checks",
      "Route 53 Traffic Flow",
      "Route 53 Interceptor"
    ],
    answer: 1,
    explanation: "Health checks monitor endpoints and integrate with DNS failover policies.",
    hint: "Endpoint monitoring."
  },
  {
    id: 124,
    difficulty: "hard",
    category: "scenarios",
    question: "You need to store data in a way that is compliant with SEC Rule 17a-4(f) (Write Once, Read Many). Which S3 feature do you enable?",
    options: [
      "S3 Versioning",
      "S3 Object Lock",
      "S3 Replication",
      "S3 Inventory"
    ],
    answer: 1,
    explanation: "Object Lock provides WORM protection, preventing deletion for a specific time or indefinitely.",
    hint: "WORM storage."
  },
  {
    id: 125,
    difficulty: "easy",
    category: "compute",
    question: "What is the purpose of an 'Instance Profile' in EC2?",
    options: [
      "To store a photo of the instance",
      "A container for an IAM role that you can use to pass role information to an EC2 instance",
      "A list of hardware specs",
      "A billing category"
    ],
    answer: 1,
    explanation: "Instance profiles allow EC2 instances to assume IAM roles without needing access keys.",
    hint: "Role container for EC2."
  },
  {
    id: 126,
    difficulty: "medium",
    category: "scenarios",
    question: "Which service allows you to easily manage and rotate SSL/TLS certificates for use with AWS services like ELB and CloudFront?",
    options: [
      "AWS Secrets Manager",
      "AWS Certificate Manager (ACM)",
      "AWS KMS",
      "AWS Directory Service"
    ],
    answer: 1,
    explanation: "ACM handles the complexity of creating, storing, and renewing SSL/TLS certificates.",
    hint: "Managed SSL/TLS."
  },
  {
    id: 127,
    difficulty: "hard",
    category: "networking",
    question: "What is 'VPC Peering' protocol limit?",
    options: [
      "It only supports TCP",
      "It cannot handle overlapping CIDR blocks between the two VPCs",
      "It requires an Internet Gateway",
      "It only works in the same region"
    ],
    answer: 1,
    explanation: "VPC Peering fails if the IP ranges (CIDRs) of the two VPCs overlap.",
    hint: "Unique IP ranges required."
  },
  {
    id: 128,
    difficulty: "medium",
    category: "governance",
    question: "What is an AWS 'Organization Unit' (OU)?",
    options: [
      "A physical office",
      "A logical grouping of AWS accounts within an organization to which you can apply Service Control Policies (SCPs)",
      "A type of currency",
      "A help desk group"
    ],
    answer: 1,
    explanation: "OUs allow you to manage multiple accounts as a single unit for governance and billing.",
    hint: "Group of accounts."
  },
  {
    id: 129,
    difficulty: "easy",
    category: "storage",
    question: "Which S3 storage class is best for data that is deleted within 30 days?",
    options: [
      "S3 Standard",
      "S3 Standard-IA",
      "S3 One Zone-IA",
      "S3 Glacier"
    ],
    answer: 0,
    explanation: "S3 Standard has no minimum storage duration. Other classes (like IA or Glacier) charge a minimum of 30, 90, or 180 days even if deleted early.",
    hint: "Short-term storage."
  },
  {
    id: 130,
    difficulty: "hard",
    category: "scenarios",
    question: "An application needs to scale quickly in response to a sudden spike in traffic. Which scaling policy type is best for immediate reaction to metric changes?",
    options: [
      "Scheduled Scaling",
      "Step Scaling",
      "Predictive Scaling",
      "Manual Scaling"
    ],
    answer: 1,
    explanation: "Step scaling allows you to define multiple 'steps' or adjustments based on the size of the metric breach (e.g., add 1 instance at 60%, add 3 at 80%).",
    hint: "Reaction based on breach size."
  },
  {
    id: 131,
    difficulty: "medium",
    category: "security",
    question: "Which KMS feature allows you to use a single key across multiple regions without needing to re-encrypt data?",
    options: [
      "Key Rotation",
      "KMS Multi-Region Keys",
      "Asymmetric Keys",
      "BYOK (Bring Your Own Key)"
    ],
    answer: 1,
    explanation: "Multi-Region keys have the same Key ID and key material, making it easy to move encrypted data between regions.",
    hint: "Same key in multiple regions."
  },
  {
    id: 132,
    difficulty: "hard",
    category: "monitoring",
    question: "What is CloudWatch 'Metric Math'?",
    options: [
      "A calculator in the console",
      "The ability to query multiple CloudWatch metrics and use mathematical expressions to derive new metrics",
      "A tool to calculate costs",
      "A way to count log lines"
    ],
    answer: 1,
    explanation: "Metric Math allows you to create visualizations for complex ratios (e.g., error rate = errors / total requests).",
    hint: "Formula-based metrics."
  },
  {
    id: 133,
    difficulty: "medium",
    category: "scenarios",
    question: "You want to run a one-time script on an EC2 instance immediately after it is launched. Where do you place the script?",
    options: [
      "In an AMI",
      "In the User Data field",
      "In an EBS Snapshot",
      "In a CloudWatch Alarm"
    ],
    answer: 1,
    explanation: "EC2 User Data allows you to provide scripts that are executed by the cloud-init service during the first boot.",
    hint: "Launch-time script."
  },
  {
    id: 134,
    difficulty: "easy",
    category: "security",
    question: "What is 'AWS Firewall Manager'?",
    options: [
      "A physical firewall appliance",
      "A security management service that allows you to centrally configure and manage firewall rules across your accounts in AWS Organizations",
      "A local software firewall",
      "A way to block the AWS portal"
    ],
    answer: 1,
    explanation: "Firewall Manager simplifies WAF, Shield, and Security Group management at scale.",
    hint: "Centralized firewall policy."
  },
  {
    id: 135,
    difficulty: "hard",
    category: "networking",
    question: "What is an AWS 'Direct Connect Gateway'?",
    options: [
      "A physical router",
      "A grouping of Virtual Private Gateways and Transit Gateways that allows a single Direct Connect connection to talk to multiple VPCs in different regions",
      "A type of internet modem",
      "A backup for VPN"
    ],
    answer: 1,
    explanation: "The Direct Connect Gateway enables global connectivity over a private line.",
    hint: "Multi-region Direct Connect."
  },
  {
    id: 136,
    difficulty: "medium",
    category: "scenarios",
    question: "You need to capture all traffic metadata (source/destination IP, port) for a specific subnet for compliance. Which feature do you enable?",
    options: [
      "CloudTrail",
      "VPC Flow Logs",
      "GuardDuty",
      "Inspector"
    ],
    answer: 1,
    explanation: "VPC Flow Logs capture the IP traffic information for network interfaces.",
    hint: "Network packet metadata."
  },
  {
    id: 137,
    difficulty: "hard",
    category: "iac",
    question: "In CloudFormation, what is the 'Intrinsic Function' used to retrieve an attribute from a resource (like an IP address or DNS name)?",
    options: [
      "Ref",
      "Fn::GetAtt",
      "Fn::ImportValue",
      "Fn::Join"
    ],
    answer: 1,
    explanation: "GetAtt (Get Attribute) is used to pull specific data points from a resource defined in the template.",
    hint: "Get Attribute."
  },
  {
    id: 138,
    difficulty: "medium",
    category: "compute",
    question: "What is an EC2 'Placement Group' (Cluster)?",
    options: [
      "A list of servers in different countries",
      "A logical grouping of instances within a single Availability Zone to provide low-latency network performance",
      "A billing group",
      "A way to organize files"
    ],
    answer: 1,
    explanation: "Cluster placement groups pack instances close together for high-performance computing (HPC) needs.",
    hint: "Low-latency grouping."
  },
  {
    id: 139,
    difficulty: "easy",
    category: "cost",
    question: "Which tool helps you see the impact of selecting different EC2 instance types on your estimated monthly bill?",
    options: [
      "AWS Cost Explorer",
      "AWS Pricing Calculator",
      "AWS Budgets",
      "AWS Config"
    ],
    answer: 1,
    explanation: "The Pricing Calculator is used for pre-deployment cost estimations.",
    hint: "Cost estimation tool."
  },
  {
    id: 140,
    difficulty: "hard",
    category: "security",
    question: "What is 'AWS CloudHSM'?",
    options: [
      "A software key locker",
      "A cloud-based hardware security module (HSM) that enables you to easily generate and use your own encryption keys on dedicated hardware",
      "A type of VPC",
      "A firewall"
    ],
    answer: 1,
    explanation: "Unlike KMS (which is shared), CloudHSM provides dedicated hardware that you control exclusively.",
    hint: "Dedicated hardware keys."
  },
  {
    id: 141,
    difficulty: "medium",
    category: "scenarios",
    question: "You need to store a large dataset and need to be able to access it using the standard SMB protocol from your Windows servers. Which service is best?",
    options: [
      "Amazon S3",
      "Amazon FSx for Windows File Server",
      "Amazon EFS",
      "Amazon EBS"
    ],
    answer: 1,
    explanation: "FSx for Windows is a fully managed Windows file system supporting SMB and Active Directory.",
    hint: "Windows SMB share."
  },
  {
    id: 142,
    difficulty: "hard",
    category: "networking",
    question: "What is 'Route 53 Alias Record'?",
    options: [
      "A nickname for a user",
      "A Route 53-specific extension to DNS that allows you to point a domain name to AWS resources (like ELB or S3) without paying for DNS queries",
      "A way to hide your IP",
      "A type of email record"
    ],
    answer: 1,
    explanation: "Alias records are smarter than CNAMEs because they can map the zone apex (root domain) to AWS resources.",
    hint: "Zone apex to AWS resources."
  },
  {
    id: 143,
    difficulty: "medium",
    category: "governance",
    question: "What is an AWS 'Control Tower'?",
    options: [
      "A physical tower at AWS HQ",
      "A service that provides the easiest way to set up and govern a secure, multi-account AWS environment based on best practices",
      "A type of load balancer",
      "A security group"
    ],
    answer: 1,
    explanation: "Control Tower automates the setup of a 'Landing Zone' with guardrails and account factory.",
    hint: "Landing zone automation."
  },
  {
    id: 144,
    difficulty: "easy",
    category: "scenarios",
    question: "You want to set up an alarm that triggers if your AWS bill exceeds $100. Which service do you use?",
    options: [
      "AWS Cost Explorer",
      "AWS Budgets",
      "AWS Trusted Advisor",
      "AWS Shield"
    ],
    answer: 1,
    explanation: "AWS Budgets allows you to set custom budgets that alert you when costs exceed your threshold.",
    hint: "Cost-based alerts."
  },
  {
    id: 145,
    difficulty: "hard",
    category: "compute",
    question: "What is the difference between an EC2 'Dedicated Instance' and a 'Dedicated Host'?",
    options: [
      "Hosts are cheaper",
      "Dedicated Hosts provide more visibility/control over instance placement on physical hardware, often required for BYOL (license) needs",
      "There is no difference",
      "Dedicated Instances are for Linux only"
    ],
    answer: 1,
    explanation: "Dedicated Hosts allow you to meet compliance or licensing requirements that tied to specific physical servers.",
    hint: "Visibility into physical hardware."
  },
  {
    id: 146,
    difficulty: "medium",
    category: "monitoring",
    question: "What is 'CloudWatch Logs Insights'?",
    options: [
      "A way to view the AWS dashboard",
      "A fully managed, interactive log analytics service that allows you to query logs using a specific query language",
      "A training course",
      "A backup for logs"
    ],
    answer: 1,
    explanation: "Logs Insights allows you to perform complex searches and aggregations on your logs quickly.",
    hint: "KQL-like log querying."
  },
  {
    id: 147,
    difficulty: "hard",
    category: "security",
    question: "What is 'AWS Certificate Manager (ACM) Private CA'?",
    options: [
      "A public website certificate",
      "A service that allows you to create a private certificate authority (CA) hierarchy to issue private certificates for internal resources",
      "A type of login",
      "A physical smart card"
    ],
    answer: 1,
    explanation: "Private CA is used for internal microservices, IoT devices, or VPNs where public trust is not required.",
    hint: "Internal CA."
  },
  {
    id: 148,
    difficulty: "medium",
    category: "networking",
    question: "What is 'AWS Global Accelerator'?",
    options: [
      "A way to speed up the AWS console",
      "A service that improves application availability and performance by using the AWS global network to route traffic to your endpoints",
      "A type of satellite connection",
      "A tool to move data to S3"
    ],
    answer: 1,
    explanation: "It provides static IP addresses that act as a fixed entry point to your applications in one or more AWS Regions.",
    hint: "Fixed IP / Global backbone."
  },
  {
    id: 149,
    difficulty: "easy",
    category: "storage",
    question: "Which EBS volume type is most cost-effective for large, sequential workloads like big data or log processing?",
    options: [
      "General Purpose SSD (gp3)",
      "Provisioned IOPS SSD (io2)",
      "Throughput Optimized HDD (st1)",
      "Cold HDD (sc1)"
    ],
    answer: 2,
    explanation: "st1 volumes are HDD-backed and optimized for high throughput rather than high IOPS.",
    hint: "Throughput-heavy HDD."
  },
  {
    id: 150,
    difficulty: "hard",
    category: "scenarios",
    question: "A company needs to implement a 'Hub and Spoke' network architecture to connect 50 VPCs and 10 on-premises sites. Which service is best?",
    options: [
      "VPC Peering",
      "AWS Transit Gateway",
      "AWS Direct Connect",
      "NAT Gateway"
    ],
    answer: 1,
    explanation: "Transit Gateway is designed to simplify complex networking by acting as a central hub for all connections.",
    hint: "Network Hub."
  }
];

// Append to main database
questionBank.push(...awsBatch3);
/* ======================================================
   AWS MASTER QUESTION BANK (Batch 4/7)
   Topics: CI/CD, Containers, Analytics, & AI/ML
   ====================================================== */

const awsBatch4 = [
  {
    id: 151,
    difficulty: "easy",
    category: "developer_tools",
    question: "Which AWS service is a highly available, managed source control service that hosts private Git repositories?",
    options: [
      "AWS CodeBuild",
      "AWS CodeCommit",
      "AWS CodeDeploy",
      "AWS CodePipeline"
    ],
    answer: 1,
    explanation: "CodeCommit is the AWS equivalent of GitHub or GitLab, providing secure, hosted Git repos.",
    hint: "Managed Git."
  },
  {
    id: 152,
    difficulty: "medium",
    category: "developer_tools",
    question: "Which service automates the software release process, allowing you to quickly model and configure the different stages of a software release?",
    options: [
      "AWS CodeBuild",
      "AWS CodeCommit",
      "AWS CodeDeploy",
      "AWS CodePipeline"
    ],
    answer: 3,
    explanation: "CodePipeline is an orchestrator that links source, build, and deployment steps into a single workflow.",
    hint: "CI/CD Orchestrator."
  },
  {
    id: 153,
    difficulty: "medium",
    category: "developer_tools",
    question: "What is the purpose of the 'buildspec.yml' file in AWS CodeBuild?",
    options: [
      "To define the deployment strategy for EC2",
      "To provide a collection of build commands and settings used by CodeBuild to run a build",
      "To store database passwords",
      "To configure the VPC settings"
    ],
    answer: 1,
    explanation: "The buildspec file tells CodeBuild which commands to run in each phase (install, pre_build, build, post_build).",
    hint: "Build instructions file."
  },
  {
    id: 154,
    difficulty: "hard",
    category: "developer_tools",
    question: "In AWS CodeDeploy, what is an 'AppSpec' file used for?",
    options: [
      "To compile the source code",
      "To manage the deployment of applications to EC2, Lambda, or ECS by defining hooks and file mappings",
      "To monitor the CPU usage of the application",
      "To create an S3 bucket"
    ],
    answer: 1,
    explanation: "The appspec.yml (for EC2/On-prem) or appspec.yaml (for Lambda/ECS) defines how the application is deployed and validated.",
    hint: "Deployment hooks configuration."
  },
  {
    id: 155,
    difficulty: "medium",
    category: "containers",
    question: "Which AWS service allows you to run Docker containers without having to manage the underlying EC2 instances?",
    options: [
      "Amazon ECS with EC2 Launch Type",
      "AWS Fargate",
      "Amazon ECR",
      "Amazon Lightsail"
    ],
    answer: 1,
    explanation: "Fargate is a serverless compute engine for containers that works with both ECS and EKS.",
    hint: "Serverless Containers."
  },
  {
    id: 156,
    difficulty: "easy",
    category: "containers",
    question: "What is Amazon ECR (Elastic Container Registry)?",
    options: [
      "A service to run containers",
      "A fully managed Docker container registry that makes it easy for developers to store, manage, and deploy Docker container images",
      "A way to monitor containers",
      "A physical storage device"
    ],
    answer: 1,
    explanation: "ECR is where you push your Docker images so they can be pulled by ECS, EKS, or Lambda.",
    hint: "Docker Image Storage."
  },
  {
    id: 157,
    difficulty: "hard",
    category: "containers",
    question: "In Amazon ECS, what is a 'Task Definition'?",
    options: [
      "A physical server",
      "A blueprint that describes how a docker container should launch (CPU/RAM, image, ports, env variables)",
      "A running instance of a container",
      "A cluster of servers"
    ],
    answer: 1,
    explanation: "A Task Definition is a JSON file that defines one or more containers for an ECS Task.",
    hint: "Container blueprint."
  },
  {
    id: 158,
    difficulty: "medium",
    category: "containers",
    question: "Which service is the AWS managed version of the popular open-source Kubernetes orchestration system?",
    options: [
      "Amazon ECS",
      "Amazon EKS",
      "AWS Fargate",
      "Amazon AppRunner"
    ],
    answer: 1,
    explanation: "EKS (Elastic Kubernetes Service) allows you to run Kubernetes on AWS without installing your own control plane.",
    hint: "Managed Kubernetes."
  },
  {
    id: 159,
    difficulty: "hard",
    category: "analytics",
    question: "Which AWS service is a serverless interactive query service that makes it easy to analyze data in Amazon S3 using standard SQL?",
    options: [
      "Amazon Redshift",
      "Amazon Athena",
      "Amazon EMR",
      "AWS Glue"
    ],
    answer: 1,
    explanation: "Athena allows you to query S3 data directly (CSV, JSON, Parquet) using Presto/Trino without loading it into a database.",
    hint: "SQL on S3."
  },
  {
    id: 160,
    difficulty: "medium",
    category: "analytics",
    question: "Which AWS service is a fast, fully managed data warehouse that makes it simple and cost-effective to analyze all your data using standard SQL and your existing BI tools?",
    options: [
      "Amazon RDS",
      "Amazon Redshift",
      "Amazon DynamoDB",
      "Amazon Aurora"
    ],
    answer: 1,
    explanation: "Redshift is a columnar-storage petabyte-scale data warehouse built for OLAP workloads.",
    hint: "Columnar Data Warehouse."
  },
  {
    id: 161,
    difficulty: "hard",
    category: "analytics",
    question: "What is 'Amazon Redshift Spectrum'?",
    options: [
      "A way to change the color of the Redshift console",
      "A feature that allows you to run Redshift SQL queries against exabytes of data in Amazon S3 without loading it",
      "A data visualization tool",
      "A backup service"
    ],
    answer: 1,
    explanation: "Spectrum allows Redshift to join data in local clusters with data residing in S3 'Data Lakes'.",
    hint: "Redshift querying S3."
  },
  {
    id: 162,
    difficulty: "medium",
    category: "analytics",
    question: "Which AWS service is a cloud-based big data platform for processing vast amounts of data using open-source tools such as Apache Spark, Hive, and Presto?",
    options: [
      "AWS Glue",
      "Amazon EMR (Elastic MapReduce)",
      "Amazon Kinesis",
      "AWS Batch"
    ],
    answer: 1,
    explanation: "EMR provides managed Hadoop/Spark clusters for big data processing.",
    hint: "Managed Hadoop/Spark."
  },
  {
    id: 163,
    difficulty: "hard",
    category: "analytics",
    question: "What is 'AWS Glue' primarily used for?",
    options: [
      "Sticking servers together in a rack",
      "A fully managed ETL (Extract, Transform, and Load) service that makes it easy to prepare and load data for analytics",
      "Monitoring network traffic",
      "Hosting static websites"
    ],
    answer: 1,
    explanation: "Glue includes a Data Catalog and serverless Spark jobs for data preparation.",
    hint: "Serverless ETL."
  },
  {
    id: 164,
    difficulty: "medium",
    category: "analytics",
    question: "What is the function of the 'AWS Glue Data Catalog'?",
    options: [
      "To store actual data files",
      "A central repository to store structural and operational metadata for all your data assets",
      "To calculate the cost of S3",
      "To manage IAM users"
    ],
    answer: 1,
    explanation: "The Data Catalog stores table definitions and schemas, acting as a Hive Metastore replacement.",
    hint: "Metadata repository."
  },
  {
    id: 165,
    difficulty: "hard",
    category: "analytics",
    question: "Which service should you use to collect, process, and analyze real-time, streaming data so you can get timely insights and react quickly to new information?",
    options: [
      "AWS Data Pipeline",
      "Amazon Kinesis",
      "Amazon SQS",
      "Amazon SNS"
    ],
    answer: 1,
    explanation: "Kinesis is designed for streaming data (Data Streams, Firehose, Video Streams, Data Analytics).",
    hint: "Real-time streaming."
  },
  {
    id: 166,
    difficulty: "medium",
    category: "analytics",
    question: "What is the difference between 'Kinesis Data Streams' and 'Kinesis Data Firehose'?",
    options: [
      "Firehose is for video; Data Streams is for text",
      "Data Streams is for real-time processing; Firehose is for loading data into destinations like S3/Redshift with near-zero code",
      "Data Streams is free; Firehose is expensive",
      "There is no difference"
    ],
    answer: 1,
    explanation: "Firehose is 'ingestion-to-storage' (automated), while Data Streams is 'ingestion-to-processing' (manual consumers).",
    hint: "Auto-loading vs. Custom processing."
  },
  {
    id: 167,
    difficulty: "easy",
    category: "analytics",
    question: "Which AWS service is a fast, cloud-powered business intelligence (BI) service that makes it easy to deliver insights through dashboards?",
    options: [
      "Amazon Athena",
      "Amazon QuickSight",
      "AWS Glue",
      "Amazon Redshift"
    ],
    answer: 1,
    explanation: "QuickSight is the AWS BI tool, similar to PowerBI or Tableau.",
    hint: "BI Dashboards."
  },
  {
    id: 168,
    difficulty: "hard",
    category: "ai_ml",
    question: "Which AWS service provides a fully managed environment for every step of the machine learning workflow (build, train, deploy)?",
    options: [
      "Amazon Rekognition",
      "Amazon SageMaker",
      "Amazon Comprehend",
      "Amazon Lex"
    ],
    answer: 1,
    explanation: "SageMaker is the comprehensive platform for data scientists and ML engineers.",
    hint: "The ML Platform."
  },
  {
    id: 169,
    difficulty: "easy",
    category: "ai_ml",
    question: "Which AWS service uses machine learning to identify objects, people, text, and scenes in images and videos?",
    options: [
      "Amazon Polly",
      "Amazon Rekognition",
      "Amazon Transcribe",
      "Amazon Translate"
    ],
    answer: 1,
    explanation: "Rekognition is the computer vision AI service.",
    hint: "Image/Video analysis."
  },
  {
    id: 170,
    difficulty: "medium",
    category: "ai_ml",
    question: "Which service converts text into lifelike speech, allowing you to create applications that talk?",
    options: [
      "Amazon Lex",
      "Amazon Polly",
      "Amazon Transcribe",
      "Amazon Kendra"
    ],
    answer: 1,
    explanation: "Polly is the Text-to-Speech (TTS) service.",
    hint: "Text-to-Speech."
  },
  {
    id: 171,
    difficulty: "medium",
    category: "ai_ml",
    question: "Which AWS service is used to build conversational interfaces (chatbots) using voice and text?",
    options: [
      "Amazon Polly",
      "Amazon Lex",
      "Amazon Comprehend",
      "Amazon Forecast"
    ],
    answer: 1,
    explanation: "Lex provides the engine behind Amazon Alexa, used for building bots.",
    hint: "Chatbot engine."
  },
  {
    id: 172,
    difficulty: "hard",
    category: "ai_ml",
    question: "Which service uses Natural Language Processing (NLP) to find insights and relationships in text?",
    options: [
      "Amazon Transcribe",
      "Amazon Comprehend",
      "Amazon Translate",
      "Amazon Personalize"
    ],
    answer: 1,
    explanation: "Comprehend can detect language, sentiment, and key phrases in unstructured text.",
    hint: "Sentiment and NLP."
  },
  {
    id: 173,
    difficulty: "easy",
    category: "ai_ml",
    question: "Which AWS service converts speech (audio) into text?",
    options: [
      "Amazon Polly",
      "Amazon Transcribe",
      "Amazon Rekognition",
      "Amazon Lex"
    ],
    answer: 1,
    explanation: "Transcribe is the Speech-to-Text (STT) service.",
    hint: "Speech-to-Text."
  },
  {
    id: 174,
    difficulty: "hard",
    category: "scenarios",
    question: "You want to implement a 'Blue/Green' deployment for your application on EC2. Which service natively supports this deployment type?",
    options: [
      "AWS CloudFormation",
      "AWS CodeDeploy",
      "AWS CloudTrail",
      "Amazon Inspector"
    ],
    answer: 1,
    explanation: "CodeDeploy can manage Blue/Green deployments by creating a new set of instances (Green) and shifting traffic from the old ones (Blue).",
    hint: "Zero-downtime deployment."
  },
  {
    id: 175,
    difficulty: "medium",
    category: "analytics",
    question: "What is 'Amazon OpenSearch Service' (formerly Elasticsearch)?",
    options: [
      "A database for storing photos",
      "A service that makes it easy to perform interactive log analytics, real-time application monitoring, and website search",
      "A replacement for S3",
      "A network security tool"
    ],
    answer: 1,
    explanation: "OpenSearch is commonly used for ELK stack workloads (Logstash, Kibana).",
    hint: "Log analytics and search."
  },
  {
    id: 176,
    difficulty: "hard",
    category: "containers",
    question: "In Amazon EKS, what is a 'Node Group'?",
    options: [
      "A collection of IAM users",
      "A set of EC2 instances that are registered as worker nodes for a Kubernetes cluster",
      "A group of containers",
      "A billing category"
    ],
    answer: 1,
    explanation: "Managed Node Groups automate the provisioning and lifecycle management of nodes for EKS.",
    hint: "Kubernetes Worker Nodes."
  },
  {
    id: 177,
    difficulty: "medium",
    category: "developer_tools",
    question: "Which service provides an integrated development environment (IDE) in the browser for writing, running, and debugging code?",
    options: [
      "AWS Cloud9",
      "AWS CodeBuild",
      "AWS X-Ray",
      "Amazon SageMaker"
    ],
    answer: 0,
    explanation: "Cloud9 is a cloud-based IDE that includes a code editor, debugger, and terminal.",
    hint: "Cloud-based IDE."
  },
  {
    id: 178,
    difficulty: "hard",
    category: "analytics",
    question: "Which AWS service is a serverless data integration service that makes it easy to discover, prepare, and combine data for ML and analytics using a visual interface?",
    options: [
      "AWS Glue DataBrew",
      "Amazon Athena",
      "AWS Batch",
      "Amazon Redshift"
    ],
    answer: 0,
    explanation: "DataBrew is a visual data preparation tool that allows users to clean data without writing code.",
    hint: "Visual data prep."
  },
  {
    id: 179,
    difficulty: "easy",
    category: "compute",
    question: "What is 'AWS Batch'?",
    options: [
      "A way to buy servers in bulk",
      "A service that enables developers, scientists, and engineers to easily and efficiently run hundreds of thousands of batch computing jobs",
      "A tool for cooking",
      "A discount program"
    ],
    answer: 1,
    explanation: "AWS Batch plans, schedules, and executes your batch computing workloads across AWS compute services.",
    hint: "High-volume job execution."
  },
  {
    id: 180,
    difficulty: "hard",
    category: "ai_ml",
    question: "Which AWS service helps you create high-quality, customized recommendations for your customers using the same ML technology used by Amazon.com?",
    options: [
      "Amazon Personalize",
      "Amazon Forecast",
      "Amazon Kendra",
      "Amazon Lex"
    ],
    answer: 0,
    explanation: "Personalize is a specialized AI service for building recommendation engines.",
    hint: "Recommendation engine."
  },
  {
    id: 181,
    difficulty: "medium",
    category: "ai_ml",
    question: "Which service uses ML to provide accurate time-series forecasts (e.g., inventory levels or web traffic)?",
    options: [
      "Amazon Personalize",
      "Amazon Forecast",
      "Amazon Kendra",
      "Amazon Lookout for Metrics"
    ],
    answer: 1,
    explanation: "Forecast is designed specifically for time-series forecasting.",
    hint: "Predicting future values."
  },
  {
    id: 182,
    difficulty: "hard",
    category: "analytics",
    question: "What is 'Amazon Kinesis Video Streams'?",
    options: [
      "A replacement for Netflix",
      "A service to securely stream video from connected devices to AWS for analytics, ML, and other processing",
      "A tool to edit movies",
      "A way to host a webinar"
    ],
    answer: 1,
    explanation: "It allows you to ingest and store video data for applications like computer vision or security monitoring.",
    hint: "Ingesting camera data."
  },
  {
    id: 183,
    difficulty: "medium",
    category: "developer_tools",
    question: "Which tool allows you to track and visualize the impact of your code changes on your application's performance using tracing?",
    options: [
      "AWS CloudTrail",
      "Amazon CloudWatch",
      "AWS X-Ray",
      "AWS Config"
    ],
    answer: 2,
    explanation: "X-Ray provides end-to-end tracing of requests across services.",
    hint: "Debugging distributed apps."
  },
  {
    id: 184,
    difficulty: "easy",
    category: "management",
    question: "Which service allows you to centrally manage and deploy your AWS resources across multiple accounts and regions using CloudFormation templates?",
    options: [
      "CloudFormation Stacks",
      "CloudFormation StackSets",
      "AWS Organizations",
      "AWS Config"
    ],
    answer: 1,
    explanation: "StackSets are the multi-account/region extension of CloudFormation.",
    hint: "IaC across accounts."
  },
  {
    id: 185,
    difficulty: "hard",
    category: "analytics",
    question: "What is 'Amazon Athena Federated Query'?",
    options: [
      "A way to query other AWS accounts",
      "A feature that allows Athena to execute SQL queries across data stored in relational, non-relational, object, and custom data sources (not just S3)",
      "A tool to join S3 buckets",
      "A global DNS service"
    ],
    answer: 1,
    explanation: "Federated query uses Lambda connectors to query databases like RDS, DynamoDB, or Redshift via Athena.",
    hint: "Athena querying databases."
  },
  {
    id: 186,
    difficulty: "medium",
    category: "scenarios",
    question: "A company needs to move 100 TB of data to S3 from an on-premises location with limited internet bandwidth. Which service is most appropriate?",
    options: [
      "AWS DataSync",
      "AWS Snowball Edge",
      "AWS Direct Connect",
      "AWS Site-to-Site VPN"
    ],
    answer: 1,
    explanation: "Snowball Edge is a physical device used to transport large amounts of data to AWS.",
    hint: "Physical data transport."
  },
  {
    id: 187,
    difficulty: "hard",
    category: "analytics",
    question: "What is the purpose of 'Amazon Redshift RA3' instances?",
    options: [
      "To provide GPUs for Redshift",
      "To allow you to scale and pay for compute and storage independently",
      "To make Redshift free",
      "To support only IPv6"
    ],
    answer: 1,
    explanation: "RA3 nodes use managed storage (backed by S3) to separate compute from storage scaling.",
    hint: "Decoupled storage/compute."
  },
  {
    id: 188,
    difficulty: "easy",
    category: "containers",
    question: "Which ECS feature allows you to define how many copies of a 'Task' should be running across your cluster and handles restarts?",
    options: [
      "ECS Task Definition",
      "ECS Service",
      "ECS Cluster",
      "ECS Container Agent"
    ],
    answer: 1,
    explanation: "An ECS Service ensures the specified number of tasks are constantly running and integrates with Load Balancers.",
    hint: "Maintains running tasks."
  },
  {
    id: 189,
    difficulty: "medium",
    category: "developer_tools",
    question: "Which service provides a unified user interface so you can easily manage your software development activities in one place (including project management, source control, and CI/CD)?",
    options: [
      "AWS CodePipeline",
      "AWS CodeStar",
      "AWS Amplify",
      "AWS Step Functions"
    ],
    answer: 1,
    explanation: "CodeStar provides a project-based interface to manage the entire development lifecycle.",
    hint: "Project-based CI/CD UI."
  },
  {
    id: 190,
    difficulty: "hard",
    category: "ai_ml",
    question: "Which AWS service is a highly accurate intelligent search service powered by machine learning?",
    options: [
      "Amazon OpenSearch",
      "Amazon Kendra",
      "Amazon Lex",
      "Amazon Comprehend"
    ],
    answer: 1,
    explanation: "Kendra is an enterprise search service that can index various data sources (S3, SharePoint, etc.) and answer natural language questions.",
    hint: "Enterprise ML search."
  },
  {
    id: 191,
    difficulty: "medium",
    category: "analytics",
    question: "What is 'AWS Glue Crawlers' used for?",
    options: [
      "To find bugs in code",
      "To scan data stores (like S3), determine the schema, and create metadata tables in the Glue Data Catalog",
      "To move data from S3 to Redshift",
      "To monitor website performance"
    ],
    answer: 1,
    explanation: "Crawlers automate the discovery of data schemas and partitions.",
    hint: "Schema discovery."
  },
  {
    id: 192,
    difficulty: "hard",
    category: "scenarios",
    question: "You want to automate the process of building and testing your mobile app every time you push code. Which service is best suited for the build phase?",
    options: [
      "AWS CodeBuild",
      "AWS CodeDeploy",
      "AWS CodeCommit",
      "AWS Amplify"
    ],
    answer: 0,
    explanation: "CodeBuild is the managed build service that compiles code, runs tests, and produces software packages.",
    hint: "Managed Build."
  },
  {
    id: 193,
    difficulty: "easy",
    category: "ai_ml",
    question: "Which service provides an easy way to build and scale generative AI applications with foundation models (FMs)?",
    options: [
      "Amazon SageMaker",
      "Amazon Bedrock",
      "Amazon Rekognition",
      "AWS Glue"
    ],
    answer: 1,
    explanation: "Bedrock is the AWS service for Generative AI, providing access to models from Anthropic, Meta, and others via API.",
    hint: "Generative AI Service."
  },
  {
    id: 194,
    difficulty: "medium",
    category: "compute",
    question: "What is 'Amazon Lightsail'?",
    options: [
      "A service for high-performance computing",
      "The easiest way to get started on AWS for simple websites or web applications (VPS)",
      "A way to manage street lights",
      "A billing tool"
    ],
    answer: 1,
    explanation: "Lightsail provides low-cost, pre-configured VPS instances with simplified management.",
    hint: "Simple VPS."
  },
  {
    id: 195,
    difficulty: "hard",
    category: "analytics",
    question: "What is 'Amazon EMR Managed Scaling'?",
    options: [
      "A way to change the font size in EMR",
      "A feature that automatically resizes your EMR cluster for best performance at the lowest possible cost based on workload",
      "A tool to move data to S3",
      "A manual process for adding nodes"
    ],
    answer: 1,
    explanation: "Managed Scaling monitors metrics and automatically adjusts the number of instances/nodes in the cluster.",
    hint: "Auto-scaling for EMR."
  },
  {
    id: 196,
    difficulty: "medium",
    category: "ai_ml",
    question: "Which AWS service is a managed service that automatically translates text from one language to another?",
    options: [
      "Amazon Transcribe",
      "Amazon Translate",
      "Amazon Comprehend",
      "Amazon Polly"
    ],
    answer: 1,
    explanation: "Amazon Translate provides high-quality, fluent machine translation.",
    hint: "Language translation."
  },
  {
    id: 197,
    difficulty: "hard",
    category: "developer_tools",
    question: "What is the purpose of 'AWS App2Container'?",
    options: [
      "To download apps from the internet",
      "A command-line tool for modernizing .NET and Java applications into containerized applications",
      "To run containers on a mobile phone",
      "To backup a container"
    ],
    answer: 1,
    explanation: "App2Container analyzes applications and generates Docker images and ECS/EKS deployment artifacts.",
    hint: "Modernization tool."
  },
  {
    id: 198,
    difficulty: "easy",
    category: "management",
    question: "Which service provides a graphical user interface for visualizing, understanding, and managing your AWS costs and usage over time?",
    options: [
      "AWS Budgets",
      "AWS Cost Explorer",
      "AWS Trusted Advisor",
      "AWS Config"
    ],
    answer: 1,
    explanation: "Cost Explorer is the primary tool for analyzing historical cost and usage data.",
    hint: "Cost visualization."
  },
  {
    id: 199,
    difficulty: "hard",
    category: "ai_ml",
    question: "Which AWS service helps you automate the extraction of text and data from scanned documents beyond simple OCR?",
    options: [
      "Amazon Rekognition",
      "Amazon Textract",
      "Amazon Comprehend",
      "Amazon Translate"
    ],
    answer: 1,
    explanation: "Textract can extract tables, forms, and structured data from documents.",
    hint: "Intelligent OCR."
  },
  {
    id: 200,
    difficulty: "medium",
    category: "analytics",
    question: "What is 'Amazon MSK' (Managed Streaming for Apache Kafka)?",
    options: [
      "A service to stream music",
      "A fully managed service that makes it easy to build and run applications that use Apache Kafka to process streaming data",
      "A type of firewall",
      "A database for SQL"
    ],
    answer: 1,
    explanation: "MSK manages the Apache Kafka control plane and infrastructure on your behalf.",
    hint: "Managed Kafka."
  }
];

// Append to main database
questionBank.push(...awsBatch4);
/* ======================================================
   AWS MASTER QUESTION BANK (Batch 5/7)
   Topics: Hybrid Cloud, Migration, Storage & App Integration
   ====================================================== */

const awsBatch5 = [
  {
    id: 201,
    difficulty: "medium",
    category: "hybrid_cloud",
    question: "Which AWS service allows you to run AWS infrastructure and services on-premises for a truly consistent hybrid experience?",
    options: [
      "AWS Snowball",
      "AWS Outposts",
      "AWS Local Zones",
      "AWS Wavelength"
    ],
    answer: 1,
    explanation: "AWS Outposts brings native AWS services, infrastructure, and operating models to virtually any data center or co-location space.",
    hint: "AWS hardware in your DC."
  },
  {
    id: 202,
    difficulty: "hard",
    category: "hybrid_cloud",
    question: "Which service is designed to deploy AWS hardware at the edge of the 5G network to provide ultra-low latency for mobile devices?",
    options: [
      "AWS Outposts",
      "AWS Wavelength",
      "AWS Local Zones",
      "AWS Direct Connect"
    ],
    answer: 1,
    explanation: "AWS Wavelength embeds AWS compute and storage services within 5G networks.",
    hint: "5G Edge."
  },
  {
    id: 203,
    difficulty: "medium",
    category: "storage",
    question: "What is the AWS Storage Gateway 'File Gateway' used for?",
    options: [
      "To store local files on a USB drive",
      "A seamless way to connect on-premises applications to Amazon S3 using industry-standard file protocols (NFS/SMB)",
      "A replacement for S3",
      "To backup a smartphone"
    ],
    answer: 1,
    explanation: "File Gateway provides a local cache and a file-based interface to objects stored in S3.",
    hint: "S3 via NFS/SMB."
  },
  {
    id: 204,
    difficulty: "hard",
    category: "storage",
    question: "Which Storage Gateway type provides low-latency access to frequently accessed data for on-premises applications while maintaining the full dataset in S3, using a block-storage (iSCSI) interface?",
    options: [
      "File Gateway",
      "Volume Gateway (Cached)",
      "Volume Gateway (Stored)",
      "Tape Gateway"
    ],
    answer: 1,
    explanation: "Cached Volumes store the primary data in S3 and keep frequently accessed data locally.",
    hint: "iSCSI + S3 Cache."
  },
  {
    id: 205,
    difficulty: "medium",
    category: "migration",
    question: "Which service is a simple, fast, and secure way to automate and accelerate moving data between on-premises storage and AWS storage services (S3, EFS, FSx)?",
    options: [
      "AWS Snowball",
      "AWS DataSync",
      "AWS Transfer Family",
      "AWS Migration Hub"
    ],
    answer: 1,
    explanation: "DataSync is an online data transfer service that simplifies and speeds up migrations over the network.",
    hint: "Automated network sync."
  },
  {
    id: 206,
    difficulty: "easy",
    category: "migration",
    question: "Which service provides a single place to track the progress of application migrations across multiple AWS and partner solutions?",
    options: [
      "AWS Migration Hub",
      "AWS Application Discovery Service",
      "AWS Server Migration Service",
      "AWS DMS"
    ],
    answer: 0,
    explanation: "Migration Hub provides a central dashboard for tracking migrations regardless of the tool used.",
    hint: "Migration Dashboard."
  },
  {
    id: 207,
    difficulty: "hard",
    category: "migration",
    question: "What is the AWS Database Migration Service (DMS) 'Schema Conversion Tool' (SCT) used for?",
    options: [
      "To move data from S3 to RDS",
      "To convert a database schema from one engine to another (e.g., Oracle to PostgreSQL)",
      "To backup a database",
      "To monitor DB performance"
    ],
    answer: 1,
    explanation: "SCT is required when performing heterogeneous migrations where the source and target DB engines are different.",
    hint: "Engine translation."
  },
  {
    id: 208,
    difficulty: "medium",
    category: "migration",
    question: "Which AWS service helps you migrate your existing on-premises software licenses (Microsoft, SAP, Oracle) to AWS and manage them?",
    options: [
      "AWS License Manager",
      "AWS Artifact",
      "AWS Config",
      "AWS Systems Manager"
    ],
    answer: 0,
    explanation: "License Manager helps you track and control license usage to stay compliant with vendors.",
    hint: "Manage BYOL."
  },
  {
    id: 209,
    difficulty: "hard",
    category: "integration",
    question: "What is Amazon AppSync?",
    options: [
      "A way to sync apps between phones",
      "A fully managed service that makes it easy to develop GraphQL APIs by handling the heavy lifting of securely connecting to data sources",
      "A tool to move data to S3",
      "A type of Load Balancer"
    ],
    answer: 1,
    explanation: "AppSync uses GraphQL to allow applications to get exactly the data they need from multiple sources like DynamoDB or Lambda.",
    hint: "Managed GraphQL."
  },
  {
    id: 210,
    difficulty: "medium",
    category: "integration",
    question: "Which service allows you to coordinate multiple AWS services into serverless workflows using visual state machines?",
    options: [
      "AWS Lambda",
      "AWS Step Functions",
      "AWS CodePipeline",
      "Amazon EventBridge"
    ],
    answer: 1,
    explanation: "Step Functions is the orchestrator for building complex, distributed applications.",
    hint: "State machine workflows."
  },
  {
    id: 211,
    difficulty: "easy",
    category: "integration",
    question: "What is the 'Fan-out' pattern in AWS messaging?",
    options: [
      "Cooling down a server",
      "When an SNS message is sent to a topic and then replicated and pushed to multiple endpoints (SQS, Lambda, HTTP)",
      "Deleting messages from a queue",
      "Sorting messages by date"
    ],
    answer: 1,
    explanation: "Fan-out allows you to trigger multiple parallel processes from a single event.",
    hint: "One to Many."
  },
  {
    id: 212,
    difficulty: "hard",
    category: "scenarios",
    question: "You need to ingest real-time sensor data and perform complex analysis using SQL while the data is in transit. Which Kinesis service is used?",
    options: [
      "Kinesis Data Streams",
      "Kinesis Data Firehose",
      "Managed Service for Apache Flink (formerly Kinesis Data Analytics)",
      "Kinesis Video Streams"
    ],
    answer: 2,
    explanation: "Apache Flink / Data Analytics allows for processing and transformation of streaming data using SQL or Java/Python.",
    hint: "In-stream SQL/Analytics."
  },
  {
    id: 213,
    difficulty: "medium",
    category: "networking",
    question: "What is the purpose of 'Amazon VPC Lattice'?",
    options: [
      "A type of physical cable",
      "An application networking service that simplifies connecting, securing, and monitoring microservices across different VPCs and accounts",
      "A backup for VPC Peering",
      "To manage S3 buckets"
    ],
    answer: 1,
    explanation: "Lattice provides a consistent way to manage service-to-service communication (East-West traffic).",
    hint: "Service-to-service networking."
  },
  {
    id: 214,
    difficulty: "hard",
    category: "security",
    question: "What is an AWS 'IAM Role for Service Accounts' (IRSA) primarily used for?",
    options: [
      "To login to the AWS console",
      "To provide fine-grained IAM permissions to Kubernetes pods in an EKS cluster",
      "To manage EC2 instances",
      "To create S3 buckets"
    ],
    answer: 1,
    explanation: "IRSA allows pods to assume IAM roles directly via OIDC, following the principle of least privilege.",
    hint: "EKS Pod security."
  },
  {
    id: 215,
    difficulty: "medium",
    category: "hybrid_cloud",
    question: "What are 'AWS Local Zones'?",
    options: [
      "A type of IAM group",
      "An extension of an AWS Region that places compute, storage, and database services close to large population or industry centers",
      "A backup of an AZ",
      "Private data centers owned by customers"
    ],
    answer: 1,
    explanation: "Local Zones are used to provide very low latency (single-digit milliseconds) for users in specific geographic locations.",
    hint: "Regional extension for latency."
  },
  {
    id: 216,
    difficulty: "hard",
    category: "databases",
    question: "Which Amazon Aurora feature allows you to scale reads globally and provides a RTO (Recovery Time Objective) of less than 1 minute?",
    options: [
      "Read Replicas",
      "Aurora Global Database",
      "Aurora Serverless",
      "Aurora Multi-Master"
    ],
    answer: 1,
    explanation: "Global Database uses storage-based replication for fast cross-region disaster recovery and local reads.",
    hint: "Multi-region RTO/RPO."
  },
  {
    id: 217,
    difficulty: "easy",
    category: "management",
    question: "Which service provides a way to manage your AWS resources by creating 'Tags'?",
    options: [
      "AWS Resource Groups & Tag Editor",
      "AWS CloudTrail",
      "AWS Config",
      "AWS Trusted Advisor"
    ],
    answer: 0,
    explanation: "Tags are key-value pairs that help you organize, manage, and search for resources.",
    hint: "Resource metadata."
  },
  {
    id: 218,
    difficulty: "medium",
    category: "storage",
    question: "Which S3 feature is used to automatically move objects between storage classes based on age to save costs?",
    options: [
      "S3 Versioning",
      "S3 Lifecycle Policies",
      "S3 Replication",
      "S3 Object Lock"
    ],
    answer: 1,
    explanation: "Lifecycle policies automate transitions (e.g., Standard to Glacier) and expiration/deletion.",
    hint: "Automated cost optimization."
  },
  {
    id: 219,
    difficulty: "hard",
    category: "scenarios",
    question: "An application requires 'Strong Consistency' for S3 operations. Since December 2020, how does S3 handle consistency for new objects?",
    options: [
      "Eventual Consistency only",
      "Strong Read-After-Write Consistency for all objects",
      "Strong consistency only for the US-EAST-1 region",
      "Consistency is a paid add-on"
    ],
    answer: 1,
    explanation: "S3 now provides strong read-after-write consistency for all applications at no extra cost.",
    hint: "No more eventual consistency for new files."
  },
  {
    id: 220,
    difficulty: "medium",
    category: "integration",
    question: "What is 'Amazon EventBridge Pipes'?",
    options: [
      "A physical tube for data",
      "A feature that provides a simple way to create point-to-point integrations between event producers and consumers with optional filtering and transformation",
      "A type of SQS queue",
      "A networking protocol"
    ],
    answer: 1,
    explanation: "Pipes simplifies the code needed to connect sources like SQS/DynamoDB to targets like Step Functions/Lambda.",
    hint: "Point-to-point event bus."
  },
  {
    id: 221,
    difficulty: "hard",
    category: "security",
    question: "What is an 'AWS Nitro System'?",
    options: [
      "A fast type of database",
      "The underlying platform for the latest generation of EC2 instances that offloads virtualization functions to dedicated hardware",
      "A gas used in data centers",
      "A software firewall"
    ],
    answer: 1,
    explanation: "Nitro provides better performance and enhanced security by using hardware-based isolation.",
    hint: "Modern EC2 hypervisor."
  },
  {
    id: 222,
    difficulty: "medium",
    category: "compute",
    question: "What is the 'AWS Compute Optimizer'?",
    options: [
      "A tool to overclock CPUs",
      "A service that recommends optimal AWS resources for your workloads to reduce costs and improve performance using machine learning",
      "A type of EC2 instance",
      "A billing dashboard"
    ],
    answer: 1,
    explanation: "It analyzes historical utilization metrics to suggest if you should upsize, downsize, or change instance types.",
    hint: "Right-sizing recommendations."
  },
  {
    id: 223,
    difficulty: "easy",
    category: "security",
    question: "Which service provides a 'managed' way to store and control encryption keys used to encrypt your data?",
    options: [
      "AWS Secrets Manager",
      "AWS KMS (Key Management Service)",
      "AWS Certificate Manager",
      "AWS Shield"
    ],
    answer: 1,
    explanation: "KMS is the core service for managing cryptographic keys.",
    hint: "Encryption keys."
  },
  {
    id: 224,
    difficulty: "hard",
    category: "networking",
    question: "What is 'VPC Reachability Analyzer'?",
    options: [
      "A tool to check the weather",
      "A configuration analysis tool that enables you to perform connectivity testing between a source and a destination in your VPC",
      "A way to speed up the internet",
      "A type of firewall"
    ],
    answer: 1,
    explanation: "It helps troubleshoot connectivity issues by analyzing the path without sending actual packets.",
    hint: "Network path debugger."
  },
  {
    id: 225,
    difficulty: "medium",
    category: "scenarios",
    question: "You want to run a web server that is accessible via the internet. In which VPC subnet type should you place the server and its associated Elastic Load Balancer?",
    options: [
      "Both in Private Subnet",
      "Both in Public Subnet",
      "ELB in Public, Server in Private",
      "ELB in Private, Server in Public"
    ],
    answer: 2,
    explanation: "Standard architecture: Public ELB receives traffic and forwards it to servers in a secure private subnet.",
    hint: "Public face, private logic."
  },
  {
    id: 226,
    difficulty: "hard",
    category: "storage",
    question: "What is 'S3 Object Lambda'?",
    options: [
      "A way to delete objects",
      "A feature that allows you to add your own code to S3 GET requests to modify and process data as it is being returned to an application",
      "A type of S3 bucket",
      "A backup for Lambda"
    ],
    answer: 1,
    explanation: "Use cases include redacting PII, resizing images, or converting formats on-the-fly.",
    hint: "Modify data on GET."
  },
  {
    id: 227,
    difficulty: "medium",
    category: "governance",
    question: "Which service allows you to create and manage 'Guardrails' for your AWS environment to ensure compliance?",
    options: [
      "AWS Control Tower",
      "AWS Organizations",
      "AWS Config",
      "AWS Systems Manager"
    ],
    answer: 0,
    explanation: "Control Tower implements preventive and detective guardrails (using SCPs and AWS Config).",
    hint: "Managed Landing Zone."
  },
  {
    id: 228,
    difficulty: "hard",
    category: "compute",
    question: "In AWS Lambda, what is 'Provisioned Concurrency'?",
    options: [
      "A discount for high usage",
      "A feature that keeps functions initialized and ready to respond in double-digit milliseconds (eliminates cold starts)",
      "A way to run Lambda on EC2",
      "A type of firewall"
    ],
    answer: 1,
    explanation: "It pre-warms a specified number of execution environments.",
    hint: "No Cold Starts."
  },
  {
    id: 229,
    difficulty: "easy",
    category: "scenarios",
    question: "You need to share a large file with a customer securely for a limited time (e.g., 2 hours). Which S3 feature do you use?",
    options: [
      "Public Bucket",
      "S3 Presigned URL",
      "S3 Replication",
      "IAM User"
    ],
    answer: 1,
    explanation: "Presigned URLs grant temporary access to an object using the permissions of the person who generated the URL.",
    hint: "Temporary access link."
  },
  {
    id: 230,
    difficulty: "hard",
    category: "networking",
    question: "What is 'Gateway Load Balancer' (GWLB) primarily used for?",
    options: [
      "Routing HTTP traffic",
      "Deploying, scaling, and managing third-party virtual appliances (like firewalls or intrusion detection systems)",
      "Connecting two VPCs",
      "Speeding up S3"
    ],
    answer: 1,
    explanation: "GWLB combines a transparent network gateway with a load balancer for traffic inspection.",
    hint: "Security appliance LB."
  },
  {
    id: 231,
    difficulty: "medium",
    category: "databases",
    question: "Which AWS service is a managed Time-series database?",
    options: [
      "Amazon Neptune",
      "Amazon Timestream",
      "Amazon DocumentDB",
      "Amazon RDS"
    ],
    answer: 1,
    explanation: "Timestream is purpose-built for IoT and operational metrics.",
    hint: "Time-series data."
  },
  {
    id: 232,
    difficulty: "hard",
    category: "security",
    question: "What is 'AWS PrivateLink'?",
    options: [
      "A type of VPN",
      "A technology that provides private connectivity between VPCs, AWS services, and on-premises networks without exposing traffic to the public internet",
      "A physical cable",
      "A login portal"
    ],
    answer: 1,
    explanation: "PrivateLink uses Interface Endpoints to keep traffic within the AWS network.",
    hint: "Secure service access."
  },
  {
    id: 233,
    difficulty: "medium",
    category: "management",
    question: "Which service is an automated security bottleneck analyzer that helps you manage the security posture of your AWS resources?",
    options: [
      "AWS Security Hub",
      "Amazon GuardDuty",
      "AWS Inspector",
      "AWS Config"
    ],
    answer: 0,
    explanation: "Security Hub provides a comprehensive view of your security alerts and compliance status across accounts.",
    hint: "Security posture dashboard."
  },
  {
    id: 234,
    difficulty: "easy",
    category: "cost",
    question: "Which AWS tool provides recommendations for 'Reserved Instance' purchases based on your actual usage?",
    options: [
      "AWS Pricing Calculator",
      "AWS Cost Explorer",
      "AWS Budgets",
      "AWS Trusted Advisor"
    ],
    answer: 1,
    explanation: "Cost Explorer has a specific 'Recommendations' section for RI and Savings Plans.",
    hint: "Historical usage analysis."
  },
  {
    id: 235,
    difficulty: "hard",
    category: "scenarios",
    question: "You need to store data in a file system that can be accessed by both Linux (NFS) and Windows (SMB) instances simultaneously. Which service should you choose?",
    options: [
      "Amazon EFS",
      "Amazon FSx for OpenZFS",
      "Amazon FSx for ONTAP",
      "Amazon EBS"
    ],
    answer: 2,
    explanation: "FSx for NetApp ONTAP is a multi-protocol storage service supporting both NFS and SMB.",
    hint: "Multi-protocol file system."
  },
  {
    id: 236,
    difficulty: "medium",
    category: "management",
    question: "What is 'AWS CloudShell'?",
    options: [
      "A backup of the AWS console",
      "A browser-based, pre-authenticated shell that you can launch directly from the AWS Management Console",
      "A physical laptop from AWS",
      "A security group"
    ],
    answer: 1,
    explanation: "CloudShell comes with the AWS CLI and other tools pre-installed.",
    hint: "In-browser CLI."
  },
  {
    id: 237,
    difficulty: "hard",
    category: "compute",
    question: "What is an 'EC2 Fleet'?",
    options: [
      "A group of ships",
      "A feature that allows you to manage a group of On-Demand and Spot instances with a single API call, defining target capacity and instance types",
      "A collection of S3 buckets",
      "A billing report"
    ],
    answer: 1,
    explanation: "EC2 Fleet helps optimize costs and availability by mixing different purchase models.",
    hint: "Aggregated instance management."
  },
  {
    id: 238,
    difficulty: "medium",
    category: "storage",
    question: "What is the 'Amazon S3 Glacier Deep Archive' retrieval time?",
    options: [
      "1-5 minutes",
      "3-5 hours",
      "12-48 hours",
      "Milliseconds"
    ],
    answer: 2,
    explanation: "Deep Archive is the lowest-cost storage but has the longest retrieval times (Standard = 12h, Bulk = 48h).",
    hint: "Slowest S3 retrieval."
  },
  {
    id: 239,
    difficulty: "easy",
    category: "governance",
    question: "Which service allows you to centrally manage and automate tasks across your AWS resources (like patching, software inventory, and script execution)?",
    options: [
      "AWS CloudTrail",
      "AWS Systems Manager (SSM)",
      "AWS Config",
      "AWS CloudFormation"
    ],
    answer: 1,
    explanation: "SSM is the 'Swiss Army Knife' for operational management and automation.",
    hint: "Operational management tool."
  },
  {
    id: 240,
    difficulty: "hard",
    category: "networking",
    question: "What is 'Amazon Route 53 Resolver'?",
    options: [
      "A tool to fix DNS errors",
      "A service that provides recursive DNS lookups for your VPC and allows for hybrid DNS resolution between AWS and on-premises",
      "A type of load balancer",
      "A backup for CloudFront"
    ],
    answer: 1,
    explanation: "Resolver (Inbound/Outbound endpoints) allows on-premises to resolve AWS private DNS and vice versa.",
    hint: "Hybrid DNS resolution."
  },
  {
    id: 241,
    difficulty: "medium",
    category: "scenarios",
    question: "You want to automate the process of rotating your application's API keys which are stored in an AWS service. Which service supports this natively?",
    options: [
      "AWS KMS",
      "AWS Secrets Manager",
      "AWS Systems Manager Parameter Store",
      "IAM"
    ],
    answer: 1,
    explanation: "Secrets Manager can rotate secrets automatically using Lambda functions.",
    hint: "Secret rotation."
  },
  {
    id: 242,
    difficulty: "hard",
    category: "scenarios",
    question: "You need to migrate a massive Hadoop cluster to AWS. Which service should you use as the target to run Spark/Hive jobs?",
    options: [
      "Amazon EC2",
      "Amazon EMR",
      "AWS Glue",
      "Amazon Redshift"
    ],
    answer: 1,
    explanation: "EMR is the managed Hadoop framework on AWS.",
    hint: "Hadoop in the cloud."
  },
  {
    id: 243,
    difficulty: "easy",
    category: "cost",
    question: "What is 'AWS Free Tier'?",
    options: [
      "A tier where everything is free forever",
      "A program that allows users to explore and try AWS services for free within certain limits (12-month, Always Free, and Trials)",
      "A physical store",
      "A discount for students only"
    ],
    answer: 1,
    explanation: "Free Tier includes many popular services with monthly usage limits.",
    hint: "Try before you buy."
  },
  {
    id: 244,
    difficulty: "hard",
    category: "security",
    question: "What is 'Amazon Macie'?",
    options: [
      "A type of Apple computer",
      "A fully managed data security and data privacy service that uses machine learning to discover and protect sensitive data in S3",
      "A firewall",
      "A logging service"
    ],
    answer: 1,
    explanation: "Macie automatically detects PII (Personally Identifiable Information) like credit card numbers in your S3 buckets.",
    hint: "PII detection in S3."
  },
  {
    id: 245,
    difficulty: "medium",
    category: "management",
    question: "What is the purpose of 'AWS Health Dashboard'?",
    options: [
      "To check the health of the user",
      "A service that provides information about the availability and performance of AWS services that might affect your resources",
      "A medical app",
      "A list of AWS employees"
    ],
    answer: 1,
    explanation: "It provides personalized alerts and guidance when AWS is experiencing outages or scheduled maintenance.",
    hint: "AWS status page."
  },
  {
    id: 246,
    difficulty: "hard",
    category: "compute",
    question: "What is 'AWS App Runner'?",
    options: [
      "A way to run mobile apps",
      "A fully managed service that makes it easy for developers to quickly deploy containerized web applications and APIs, at scale and with no prior infrastructure experience",
      "A type of EC2 instance",
      "A tool to move apps to S3"
    ],
    answer: 1,
    explanation: "App Runner handles everything from building and deploying to load balancing and scaling for containers.",
    hint: "Simplest container deployment."
  },
  {
    id: 247,
    difficulty: "medium",
    category: "databases",
    question: "Which service is a managed 'Ledger' database that provides a transparent, immutable, and cryptographically verifiable transaction log?",
    options: [
      "Amazon RDS",
      "Amazon QLDB (Quantum Ledger Database)",
      "Amazon DynamoDB",
      "Amazon Neptune"
    ],
    answer: 1,
    explanation: "QLDB is used for systems where you need a centralized, unchangeable record of all data changes.",
    hint: "Immutable ledger."
  },
  {
    id: 248,
    difficulty: "easy",
    category: "networking",
    question: "What is an 'Internet Gateway' (IGW)?",
    options: [
      "A type of router in the office",
      "A horizontally scaled, redundant, and highly available VPC component that allows communication between your VPC and the internet",
      "A security group",
      "A software on a computer"
    ],
    answer: 1,
    explanation: "You must attach an IGW to a VPC and add a route to it for a subnet to be 'Public'.",
    hint: "VPC to Internet."
  },
  {
    id: 249,
    difficulty: "hard",
    category: "governance",
    question: "What is 'AWS Service Catalog'?",
    options: [
      "A list of all AWS services",
      "A service that allows organizations to create and manage catalogs of IT services that are approved for use on AWS (vetted CloudFormation templates)",
      "A physical catalog",
      "A billing report"
    ],
    answer: 1,
    explanation: "It helps with governance by ensuring users only deploy pre-approved, compliant resource stacks.",
    hint: "Self-service compliant portal."
  },
  {
    id: 250,
    difficulty: "medium",
    category: "scenarios",
    question: "You want to protect your AWS account by ensuring no one can delete an S3 bucket even if they have administrator permissions. What is the most effective way to enforce this?",
    options: [
      "IAM Policy with Deny",
      "Service Control Policy (SCP) with Deny",
      "Changing the password",
      "Deleting the root user"
    ],
    answer: 1,
    explanation: "An SCP in AWS Organizations can override local IAM permissions, including those of an Administrator.",
    hint: "Organization-wide restriction."
  }
];

// Append to main database
questionBank.push(...awsBatch5);
/* ======================================================
   AWS MASTER QUESTION BANK (Batch 6/7)
   Topics: Advanced Security, DevOps, & Network Patterns
   ====================================================== */

const awsBatch6 = [
  {
    id: 251,
    difficulty: "easy",
    category: "security",
    question: "Which AWS service is a web application firewall that helps protect your web applications or APIs against common web exploits?",
    options: [
      "AWS Shield",
      "AWS WAF",
      "AWS Firewall Manager",
      "Amazon Inspector"
    ],
    answer: 1,
    explanation: "AWS WAF allows you to control traffic by creating security rules that block common attack patterns like SQL injection or cross-site scripting.",
    hint: "Layer 7 protection."
  },
  {
    id: 252,
    difficulty: "medium",
    category: "security",
    question: "What is the difference between AWS Shield Standard and AWS Shield Advanced?",
    options: [
      "Standard is paid; Advanced is free",
      "Standard protects against common L3/L4 attacks for free; Advanced provides higher-level protection and 24/7 access to the DDoS Response Team (DRT)",
      "Standard is for S3; Advanced is for EC2",
      "There is no difference"
    ],
    answer: 1,
    explanation: "Shield Standard is automatically enabled for all AWS customers. Advanced is a paid service for mission-critical apps.",
    hint: "DDoS protection levels."
  },
  {
    id: 253,
    difficulty: "hard",
    category: "security",
    question: "Which service allows you to perform automated security assessments on EC2 instances for software vulnerabilities and deviations from best practices?",
    options: [
      "AWS Config",
      "Amazon Inspector",
      "Amazon GuardDuty",
      "AWS Artifact"
    ],
    answer: 1,
    explanation: "Inspector uses an agent to scan the operating system and network reachability of EC2 instances.",
    hint: "Vulnerability scanner."
  },
  {
    id: 254,
    difficulty: "medium",
    category: "monitoring",
    question: "What are 'CloudWatch Synthetics' used for?",
    options: [
      "To create fake data",
      "To create 'canaries' that monitor your endpoints and APIs 24/7 by simulating user behavior",
      "To speed up database queries",
      "To encrypt log files"
    ],
    answer: 1,
    explanation: "Synthetics allow you to discover issues before your customers do by running scripts on a schedule.",
    hint: "Canary testing."
  },
  {
    id: 255,
    difficulty: "hard",
    category: "monitoring",
    question: "Which feature of CloudTrail allows you to identify unusual activity in your AWS account, such as spikes in resource provisioning?",
    options: [
      "CloudTrail Logs",
      "CloudTrail Insights",
      "CloudTrail Lake",
      "CloudTrail Events"
    ],
    answer: 1,
    explanation: "Insights analyzes management event telemetry to detect baseline deviations.",
    hint: "Anomaly detection for API calls."
  },
  {
    id: 256,
    difficulty: "medium",
    category: "networking",
    question: "What is the main difference between Amazon CloudFront and AWS Global Accelerator?",
    options: [
      "CloudFront is for static content; Global Accelerator is for all IP traffic",
      "CloudFront uses Anycast IPs; Global Accelerator does not",
      "CloudFront is faster for UDP traffic",
      "Global Accelerator caches video files"
    ],
    answer: 0,
    explanation: "CloudFront is a CDN for web content (HTTP/S). Global Accelerator uses the AWS network to improve performance for TCP/UDP traffic using Anycast IPs.",
    hint: "Content delivery vs. Network routing."
  },
  {
    id: 257,
    difficulty: "hard",
    category: "storage",
    question: "What is 'Amazon EBS Fast Snapshot Restore' (FSR)?",
    options: [
      "A way to delete snapshots quickly",
      "A feature that eliminates the need for 'pre-warming' data when restoring a volume from a snapshot",
      "A free backup tool",
      "A script to copy snapshots to S3"
    ],
    answer: 1,
    explanation: "FSR ensures that restored EBS volumes deliver full performance immediately upon creation.",
    hint: "Instant performance for restored volumes."
  },
  {
    id: 258,
    difficulty: "medium",
    category: "scenarios",
    question: "A company needs a file system that can provide sub-millisecond latency and millions of IOPS for high-performance computing (HPC). Which service is best?",
    options: [
      "Amazon EFS",
      "Amazon FSx for Lustre",
      "Amazon S3",
      "Amazon EBS"
    ],
    answer: 1,
    explanation: "FSx for Lustre is specifically optimized for compute-intensive workloads like ML and HPC.",
    hint: "High-speed scratch space."
  },
  {
    id: 259,
    difficulty: "easy",
    category: "security",
    question: "Which AWS service helps you find and fix common security vulnerabilities in your container images stored in ECR?",
    options: [
      "Amazon Inspector",
      "AWS WAF",
      "Amazon GuardDuty",
      "AWS Shield"
    ],
    answer: 0,
    explanation: "ECR integrates with Amazon Inspector to provide automated image scanning.",
    hint: "Container vulnerability scan."
  },
  {
    id: 260,
    difficulty: "hard",
    category: "networking",
    question: "What is 'Transit Gateway Peering'?",
    options: [
      "Connecting two VPCs directly",
      "Connecting two Transit Gateways across different AWS Regions",
      "A way to bypass the internet",
      "A type of VPN"
    ],
    answer: 1,
    explanation: "TGW Peering allows you to route traffic between regional network hubs globally.",
    hint: "Inter-region hub connection."
  },
  {
    id: 261,
    difficulty: "medium",
    category: "governance",
    question: "Which AWS service is a managed graph database used to build and run applications that work with highly connected datasets?",
    options: [
      "Amazon Redshift",
      "Amazon Neptune",
      "Amazon DocumentDB",
      "Amazon Aurora"
    ],
    answer: 1,
    explanation: "Neptune supports popular graph models like Property Graph and W3C's RDF.",
    hint: "Graph database."
  },
  {
    id: 262,
    difficulty: "hard",
    category: "compute",
    question: "What is an 'AWS Lambda Function URL'?",
    options: [
      "A link to the AWS documentation",
      "A built-in HTTPS endpoint for a Lambda function, eliminating the need for an API Gateway for simple use cases",
      "A way to download the function code",
      "The IP address of the Lambda server"
    ],
    answer: 1,
    explanation: "Function URLs provide a dedicated HTTP(S) endpoint for your Lambda function.",
    hint: "Direct Lambda invocation via URL."
  },
  {
    id: 263,
    difficulty: "medium",
    category: "security",
    question: "What is the 'AWS Security Token Service' (STS) primarily used for?",
    options: [
      "Storing passwords",
      "Requesting temporary, limited-privilege credentials for IAM users or federated users",
      "Creating hardware keys",
      "Managing SSL certificates"
    ],
    answer: 1,
    explanation: "STS is the backbone of IAM roles and cross-account access.",
    hint: "Temporary credentials."
  },
  {
    id: 264,
    difficulty: "hard",
    category: "databases",
    question: "In Amazon DynamoDB, what is the 'On-Demand' capacity mode?",
    options: [
      "You pay for what you provision",
      "A flexible billing option where you pay per request, and the table scales instantly to accommodate any traffic volume",
      "A mode for developers only",
      "A free tier option"
    ],
    answer: 1,
    explanation: "On-demand mode is ideal for unpredictable workloads where you don't want to manage throughput settings.",
    hint: "Pay-per-request NoSQL."
  },
  {
    id: 265,
    difficulty: "medium",
    category: "scenarios",
    question: "You want to capture and analyze the full HTTP request and response body for every interaction with your application for debugging. Which service supports this natively?",
    options: [
      "VPC Flow Logs",
      "AWS X-Ray",
      "CloudTrail",
      "CloudWatch Logs"
    ],
    answer: 1,
    explanation: "X-Ray, when instrumented with the SDK, can record specific metadata and data about segments of a request.",
    hint: "Deep application tracing."
  },
  {
    id: 266,
    difficulty: "easy",
    category: "storage",
    question: "Which S3 feature allows you to recover objects from accidental deletion or overwrites?",
    options: [
      "S3 Lifecycle",
      "S3 Versioning",
      "S3 Replication",
      "S3 Encryption"
    ],
    answer: 1,
    explanation: "Versioning keeps multiple variants of an object in the same bucket.",
    hint: "Object history."
  },
  {
    id: 267,
    difficulty: "hard",
    category: "networking",
    question: "What is 'Amazon Route 53 Traffic Flow'?",
    options: [
      "A tool to see web traffic",
      "A visual policy creator that allows you to manage traffic globally through a variety of routing types (Geo, Latency, Weighted)",
      "A type of internet speed test",
      "A way to block IP addresses"
    ],
    answer: 1,
    explanation: "Traffic Flow provides a UI to build complex routing trees for DNS failover and optimization.",
    hint: "Visual DNS routing."
  },
  {
    id: 268,
    difficulty: "medium",
    category: "security",
    question: "Which service allows you to create and manage an Active Directory in the AWS Cloud?",
    options: [
      "AWS IAM",
      "AWS Directory Service",
      "AWS Secrets Manager",
      "AWS Systems Manager"
    ],
    answer: 1,
    explanation: "Directory Service (Managed Microsoft AD) provides a real AD forest in the cloud.",
    hint: "Managed AD."
  },
  {
    id: 269,
    difficulty: "hard",
    category: "scenarios",
    question: "You need to process 1 PB of data currently on-premises and move it to S3. You have no network bandwidth available. Which device should you order?",
    options: [
      "AWS Snowcone",
      "AWS Snowball Edge Storage Optimized",
      "AWS Snowmobile",
      "A large hard drive from a store"
    ],
    answer: 2,
    explanation: "Snowmobile is an exabyte-scale data transfer service (a shipping container) for massive migrations.",
    hint: "Data truck."
  },
  {
    id: 270,
    difficulty: "medium",
    category: "compute",
    question: "What is an 'AWS App Runner' service primarily designed for?",
    options: [
      "Running mobile apps",
      "Automatically building and deploying containerized web applications from source code or a container image",
      "Managing database connections",
      "Providing VPN access"
    ],
    answer: 1,
    explanation: "App Runner is the easiest way to deploy containers without knowing anything about infrastructure.",
    hint: "Simplified container web apps."
  },
  {
    id: 271,
    difficulty: "hard",
    category: "security",
    question: "What is 'AWS Private Certificate Authority' used for?",
    options: [
      "Buying certificates for public websites",
      "Issuing and revoking private digital certificates for identifying internal resources like servers, containers, and IoT devices",
      "Managing IAM passwords",
      "Encrypting S3 buckets"
    ],
    answer: 1,
    explanation: "Private CA allows you to establish a secure private PKI for your organization.",
    hint: "Internal CA."
  },
  {
    id: 272,
    difficulty: "medium",
    category: "storage",
    question: "Which EBS volume type is designed for boot volumes and provides the best balance of price and performance for most workloads?",
    options: [
      "General Purpose SSD (gp3)",
      "Throughput Optimized HDD (st1)",
      "Provisioned IOPS SSD (io2)",
      "Cold HDD (sc1)"
    ],
    answer: 0,
    explanation: "gp3 is the latest generation of general-purpose SSD volumes.",
    hint: "Standard SSD."
  },
  {
    id: 273,
    difficulty: "hard",
    category: "scenarios",
    question: "An application requires 'Multicast' networking support within a VPC. Which AWS service can enable this?",
    options: [
      "VPC Peering",
      "AWS Transit Gateway",
      "AWS Direct Connect",
      "Internet Gateway"
    ],
    answer: 1,
    explanation: "Transit Gateway is the only service that supports Multicast traffic within and between VPCs.",
    hint: "Network Multicast."
  },
  {
    id: 274,
    difficulty: "easy",
    category: "management",
    question: "Where can you go to see a summary of all your AWS service limits (quotas) and request increases?",
    options: [
      "AWS Trusted Advisor",
      "Service Quotas",
      "AWS Budgets",
      "AWS Cost Explorer"
    ],
    answer: 1,
    explanation: "Service Quotas is the central console for managing limits.",
    hint: "Manage resource limits."
  },
  {
    id: 275,
    difficulty: "medium",
    category: "ai_ml",
    question: "Which service is a cloud-based contact center that makes it easy for any business to deliver better customer service at a lower cost?",
    options: [
      "Amazon Lex",
      "Amazon Connect",
      "Amazon Pinpoint",
      "Amazon Chime"
    ],
    answer: 1,
    explanation: "Amazon Connect provides the full infrastructure for a virtual call center.",
    hint: "Contact Center as a Service."
  },
  {
    id: 276,
    difficulty: "hard",
    category: "databases",
    question: "What is 'Amazon Aurora Serverless v2'?",
    options: [
      "A database that doesn't use servers",
      "An on-demand, auto-scaling configuration for Aurora where the DB scales in fine-grained increments (0.5 ACUs) to provide just enough capacity",
      "A version of Aurora that only runs in one AZ",
      "A database for mobile phones"
    ],
    answer: 1,
    explanation: "v2 scales much faster and more granularly than v1, making it suitable for production workloads.",
    hint: "Instant DB scaling."
  },
  {
    id: 277,
    difficulty: "medium",
    category: "scenarios",
    question: "You want to automate the testing of your mobile app on hundreds of real physical devices in the AWS cloud. Which service do you use?",
    options: [
      "AWS App2Container",
      "AWS Device Farm",
      "AWS Amplify",
      "Amazon GameLift"
    ],
    answer: 1,
    explanation: "Device Farm provides remote access to real iOS and Android devices for testing.",
    hint: "Mobile device testing."
  },
  {
    id: 278,
    difficulty: "hard",
    category: "security",
    question: "What is 'AWS CloudTrail Lake'?",
    options: [
      "A place to swim at AWS HQ",
      "A managed data lake for auditing that allows you to aggregate, immutably store, and query your activity logs using SQL",
      "A backup for S3",
      "A way to monitor fish"
    ],
    answer: 1,
    explanation: "CloudTrail Lake integrates storage and query capabilities into a single service with 7 years of retention.",
    hint: "Audit log SQL engine."
  },
  {
    id: 279,
    difficulty: "easy",
    category: "cost",
    question: "Which AWS cost management tool helps you visualize your current usage and identifies cost-saving opportunities by showing underutilized resources?",
    options: [
      "AWS Budgets",
      "AWS Cost Explorer",
      "AWS Pricing Calculator",
      "AWS License Manager"
    ],
    answer: 1,
    explanation: "Cost Explorer provides the interface for analyzing spending patterns.",
    hint: "Spending analysis."
  },
  {
    id: 280,
    difficulty: "medium",
    category: "scenarios",
    question: "You need to allow an external third-party auditor to view specific resources in your AWS account without giving them a permanent username and password. What is the best method?",
    options: [
      "Sharing your root password",
      "Creating an IAM Role with an External ID and allowing the auditor to assume it",
      "Creating an IAM User and emailing the keys",
      "Writing a script to export the data"
    ],
    answer: 1,
    explanation: "Role-based access with External ID is the secure industry standard for third-party access.",
    hint: "Secure cross-account access."
  },
  {
    id: 281,
    difficulty: "hard",
    category: "networking",
    question: "What is the purpose of 'AWS Cloud Map'?",
    options: [
      "A physical map of data centers",
      "A cloud resource discovery service that allows you to define custom names for your application resources (like microservices) and maintain their health",
      "A GPS for S3",
      "A type of VPC"
    ],
    answer: 1,
    explanation: "Cloud Map acts as a service discovery engine, allowing apps to find each other via API or DNS.",
    hint: "Service discovery."
  },
  {
    id: 282,
    difficulty: "medium",
    category: "storage",
    question: "Which S3 storage class is specifically designed to provide the best of both worlds: high performance and automated cost savings for data with changing access patterns?",
    options: [
      "S3 Standard",
      "S3 Intelligent-Tiering",
      "S3 One Zone-IA",
      "S3 Glacier Instant Retrieval"
    ],
    answer: 1,
    explanation: "Intelligent-Tiering automatically moves data between frequent and infrequent access tiers based on usage.",
    hint: "Auto-tiering storage."
  },
  {
    id: 283,
    difficulty: "hard",
    category: "compute",
    question: "In AWS Lambda, what is an 'Extension'?",
    options: [
      "A longer timeout",
      "A way to integrate Lambda with monitoring, observability, security, and governance tools without changing your code",
      "A type of zip file",
      "A secondary function"
    ],
    answer: 1,
    explanation: "Extensions run as separate processes within the Lambda execution environment.",
    hint: "Runtime add-ons."
  },
  {
    id: 284,
    difficulty: "medium",
    category: "security",
    question: "Which service provides a centralized way to manage and deploy your security policies (like WAF rules) across all your accounts in an organization?",
    options: [
      "AWS Firewall Manager",
      "AWS Shield",
      "AWS Config",
      "AWS Organizations"
    ],
    answer: 0,
    explanation: "Firewall Manager automates security rule management at scale.",
    hint: "Centralized WAF/Shield management."
  },
  {
    id: 285,
    difficulty: "hard",
    category: "scenarios",
    question: "You want to build a real-time multiplayer game. Which service provides a managed solution for hosting and scaling dedicated game servers?",
    options: [
      "Amazon EC2",
      "Amazon GameLift",
      "AWS Fargate",
      "Amazon Connect"
    ],
    answer: 1,
    explanation: "GameLift handles the complexities of deploying and managing game server fleets with low latency.",
    hint: "Game server hosting."
  },
  {
    id: 286,
    difficulty: "easy",
    category: "databases",
    question: "Which database engine is fully managed by AWS and is designed to be compatible with MySQL and PostgreSQL but with much higher performance?",
    options: [
      "Amazon RDS",
      "Amazon Aurora",
      "Amazon DynamoDB",
      "Amazon Redshift"
    ],
    answer: 1,
    explanation: "Aurora is AWS's proprietary high-performance relational database.",
    hint: "Cloud-native SQL."
  },
  {
    id: 287,
    difficulty: "medium",
    category: "governance",
    question: "What is 'AWS Audit Manager'?",
    options: [
      "A tool to manage accountants",
      "A service that helps you continuously audit your AWS usage to simplify how you assess risk and compliance with regulations",
      "A list of AWS policies",
      "A backup for CloudTrail"
    ],
    answer: 1,
    explanation: "Audit Manager automates evidence collection for compliance audits (like HIPAA or PCI DSS).",
    hint: "Evidence collector for audits."
  },
  {
    id: 288,
    difficulty: "hard",
    category: "scenarios",
    question: "You need to store data in a NoSQL database and need to search it using full-text search capabilities. Which service combination is standard?",
    options: [
      "DynamoDB and RDS",
      "DynamoDB and Amazon OpenSearch Service",
      "S3 and Athena",
      "Redshift and QuickSight"
    ],
    answer: 1,
    explanation: "DynamoDB Streams can be used to sync data to OpenSearch for full-text search indexing.",
    hint: "NoSQL + Search engine."
  },
  {
    id: 289,
    difficulty: "medium",
    category: "security",
    question: "Which service acts as a 'digital vault' to help you securely manage, store, and retrieve secrets like database passwords and API keys?",
    options: [
      "AWS KMS",
      "AWS Secrets Manager",
      "AWS Systems Manager Parameter Store",
      "IAM"
    ],
    answer: 1,
    explanation: "Secrets Manager is built for secrets; Parameter Store is for configuration (though it can store encrypted strings).",
    hint: "Managed secrets vault."
  },
  {
    id: 290,
    difficulty: "hard",
    category: "storage",
    question: "What is 'Amazon S3 Transfer Acceleration'?",
    options: [
      "A faster type of hard drive",
      "A feature that enables fast, easy, and secure transfers of files over long distances between your client and an S3 bucket using CloudFront's edge locations",
      "A way to skip the internet",
      "A tool to compress files"
    ],
    answer: 1,
    explanation: "It uses the AWS global network to route data via the closest edge location to speed up uploads.",
    hint: "Fast global S3 uploads."
  },
  {
    id: 291,
    difficulty: "medium",
    category: "scenarios",
    question: "You want to provide your users with a way to sign in to your web or mobile app using their existing social media identities (like Google or Facebook). Which service do you use?",
    options: [
      "AWS IAM",
      "Amazon Cognito",
      "AWS Directory Service",
      "AWS Artifact"
    ],
    answer: 1,
    explanation: "Cognito User Pools handle sign-up and sign-in, and Identity Pools provide temporary AWS credentials.",
    hint: "User identity and Auth."
  },
  {
    id: 292,
    difficulty: "hard",
    category: "compute",
    question: "What is 'AWS Batch' for Compute?",
    options: [
      "Buying servers in a bundle",
      "A service that automatically provisions the optimal quantity and type of compute resources based on the volume and specific resource requirements of the batch jobs submitted",
      "A way to cook data",
      "A discount for high CPU usage"
    ],
    answer: 1,
    explanation: "Batch manages the heavy lifting of scheduling and running jobs on EC2 or Fargate.",
    hint: "Batch job management."
  },
  {
    id: 293,
    difficulty: "easy",
    category: "networking",
    question: "Which service allows you to create a virtual network in the AWS cloud where you can launch your AWS resources?",
    options: [
      "Amazon S3",
      "Amazon VPC",
      "Amazon EC2",
      "Amazon Route 53"
    ],
    answer: 1,
    explanation: "VPC (Virtual Private Cloud) is the fundamental networking layer.",
    hint: "Your private network."
  },
  {
    id: 294,
    difficulty: "hard",
    category: "governance",
    question: "What is an 'AWS Config Conformance Pack'?",
    options: [
      "A backpack from AWS",
      "A collection of AWS Config rules and remediation actions that can be easily deployed as a single entity across an entire organization",
      "A type of pricing plan",
      "A security group"
    ],
    answer: 1,
    explanation: "Conformance packs help maintain consistent compliance posture across accounts.",
    hint: "Grouped compliance rules."
  },
  {
    id: 295,
    difficulty: "medium",
    category: "monitoring",
    question: "What is 'Amazon CloudWatch Container Insights'?",
    options: [
      "A way to look inside a shipping container",
      "A feature that collects, aggregates, and summarizes metrics and logs from your containerized applications (ECS, EKS, Fargate)",
      "A type of Docker image",
      "A security tool"
    ],
    answer: 1,
    explanation: "Container Insights provides observability into the health and performance of clusters.",
    hint: "Container monitoring."
  },
  {
    id: 296,
    difficulty: "hard",
    category: "networking",
    question: "What is 'AWS Direct Connect Hosted Connection'?",
    options: [
      "A connection you host at home",
      "A type of Direct Connect where a partner provisions the connection for you, allowing for sub-1Gbps speeds (e.g., 50Mbps)",
      "A free internet connection",
      "A type of VPN"
    ],
    answer: 1,
    explanation: "Hosted connections allow customers to get smaller bandwidth amounts through AWS Direct Connect Partners.",
    hint: "Partner-provisioned private link."
  },
  {
    id: 297,
    difficulty: "medium",
    category: "scenarios",
    question: "You need to perform real-time video processing (like face detection) on a live camera stream. Which service helps ingest this data?",
    options: [
      "Kinesis Data Firehose",
      "Kinesis Video Streams",
      "Amazon Rekognition Video",
      "Amazon SNS"
    ],
    answer: 1,
    explanation: "Kinesis Video Streams is built for securely streaming and storing video for ML analysis.",
    hint: "Video ingestion for AI."
  },
  {
    id: 298,
    difficulty: "hard",
    category: "security",
    question: "What is 'AWS Verified Access'?",
    options: [
      "A way to verify your email",
      "A service that provides secure VPN-less access to your internal corporate applications based on Zero Trust principles",
      "A type of IAM role",
      "A physical key"
    ],
    answer: 1,
    explanation: "Verified Access checks user identity and device security before granting access to applications.",
    hint: "VPN-less corporate access."
  },
  {
    id: 299,
    difficulty: "easy",
    category: "storage",
    question: "What is an 'S3 Access Point'?",
    options: [
      "The physical port on the server",
      "Named network endpoints that are attached to buckets that you can use to perform S3 object operations, each with its own policy",
      "A router",
      "A login page"
    ],
    answer: 1,
    explanation: "Access Points simplify managing data access at scale for shared datasets in S3.",
    hint: "Scalable bucket access control."
  },
  {
    id: 300,
    difficulty: "medium",
    category: "management",
    question: "Which AWS service is a single place to search, discover, and request access to data from multiple AWS accounts and external sources?",
    options: [
      "AWS Glue",
      "Amazon DataZone",
      "AWS Lake Formation",
      "Amazon Redshift"
    ],
    answer: 1,
    explanation: "DataZone is a data management service that makes it easy for data producers to share and consumers to find data.",
    hint: "Data governance and sharing."
  }
];

// Append to main database
questionBank.push(...awsBatch6);
/* ======================================================
   AWS MASTER QUESTION BANK (Batch 7/7)
   Topics: Well-Architected, Migration, & Final Scenarios
   ====================================================== */

const awsBatch7 = [
  {
    id: 301,
    difficulty: "medium",
    category: "well_architected",
    question: "Which pillar of the AWS Well-Architected Framework focuses on the ability to run workloads effectively, gain insights into their operations, and continuously improve processes?",
    options: [
      "Operational Excellence",
      "Security",
      "Reliability",
      "Performance Efficiency"
    ],
    answer: 0,
    explanation: "Operational Excellence includes performing operations as code, making small, reversible changes, and refining operations procedures frequently.",
    hint: "Running and monitoring systems."
  },
  {
    id: 302,
    difficulty: "medium",
    category: "well_architected",
    question: "The 'Reliability' pillar of the Well-Architected Framework emphasizes which of the following?",
    options: [
      "Protecting information and systems",
      "Recovering from infrastructure or service disruptions",
      "Using computing resources efficiently",
      "Avoiding unnecessary costs"
    ],
    answer: 1,
    explanation: "Reliability ensures a workload performs its intended function correctly and consistently, including the ability to operate and test for failure.",
    hint: "Recovery and consistency."
  },
  {
    id: 303,
    difficulty: "medium",
    category: "well_architected",
    question: "Which pillar focuses on using computing resources efficiently to meet system requirements and maintaining that efficiency as demand changes?",
    options: [
      "Cost Optimization",
      "Performance Efficiency",
      "Sustainability",
      "Security"
    ],
    answer: 1,
    explanation: "Performance Efficiency involves selecting the right resource types and sizes based on workload requirements.",
    hint: "Efficiency and scaling."
  },
  {
    id: 304,
    difficulty: "easy",
    category: "well_architected",
    question: "What is the newest pillar added to the AWS Well-Architected Framework (introduced in 2021)?",
    options: [
      "Security",
      "Cost Optimization",
      "Sustainability",
      "Operational Excellence"
    ],
    answer: 2,
    explanation: "The Sustainability pillar focuses on minimizing the environmental impacts of running cloud workloads.",
    hint: "Environmental impact."
  },
  {
    id: 305,
    difficulty: "hard",
    category: "migration",
    question: "In the 7 Rs of migration, what does 'Re-platforming' (Lift-and-Reshape) entail?",
    options: [
      "Moving an application to the cloud without any changes",
      "Making a few cloud optimizations to achieve a tangible benefit without changing the core architecture",
      "Completely architecting the application from scratch",
      "Retiring the application"
    ],
    answer: 1,
    explanation: "Re-platforming involves slight changes, such as moving a database to Amazon RDS instead of running it on an EC2 instance.",
    hint: "Lift and minor fix."
  },
  {
    id: 306,
    difficulty: "medium",
    category: "migration",
    question: "Which migration strategy involves moving from a perpetual license to a Software-as-a-Service (SaaS) model?",
    options: [
      "Re-hosting",
      "Re-platforming",
      "Repurchasing",
      "Refactoring"
    ],
    answer: 2,
    explanation: "Repurchasing is commonly referred to as 'drop and shop,' where you move to a different product (e.g., Salesforce or Workday).",
    hint: "Switching to SaaS."
  },
  {
    id: 307,
    difficulty: "hard",
    category: "migration",
    question: "Which migration strategy is the most expensive and time-consuming but allows for the full use of cloud-native features?",
    options: [
      "Re-hosting",
      "Refactoring / Re-architecting",
      "Re-platforming",
      "Retaining"
    ],
    answer: 1,
    explanation: "Refactoring involves fundamentally changing the code to use serverless, containers, or microservices.",
    hint: "Full code rewrite."
  },
  {
    id: 308,
    difficulty: "medium",
    category: "scenarios",
    question: "A company needs to store data for 7 years to meet regulatory requirements. The data is rarely accessed but must be retrievable within 24 hours. What is the most cost-effective S3 storage class?",
    options: [
      "S3 Standard",
      "S3 Standard-IA",
      "S3 Glacier Deep Archive",
      "S3 Intelligent-Tiering"
    ],
    answer: 2,
    explanation: "Deep Archive is the cheapest storage class and is ideal for long-term data retention where retrieval time of 12-48 hours is acceptable.",
    hint: "Cheapest long-term storage."
  },
  {
    id: 309,
    difficulty: "hard",
    category: "scenarios",
    question: "You want to ensure that your EC2 instances in an Auto Scaling group are distributed across multiple failure domains. Which 'Placement Group' strategy should you use?",
    options: [
      "Cluster",
      "Spread",
      "Partition",
      "Isolation"
    ],
    answer: 1,
    explanation: "Spread placement groups place each instance on distinct hardware to reduce correlated failures.",
    hint: "Distinct hardware per instance."
  },
  {
    id: 310,
    difficulty: "medium",
    category: "scenarios",
    question: "An application requires an SSD-based EBS volume with a consistent performance of 16,000 IOPS. Which volume type is required?",
    options: [
      "General Purpose SSD (gp2)",
      "General Purpose SSD (gp3)",
      "Provisioned IOPS SSD (io2)",
      "Throughput Optimized HDD (st1)"
    ],
    answer: 2,
    explanation: "While gp3 can reach 16,000 IOPS, io2/io1 is designed for high-performance, I/O intensive workloads requiring specific sustained IOPS.",
    hint: "Provisioned performance."
  },
  {
    id: 311,
    difficulty: "hard",
    category: "networking",
    question: "What is the 'Transit Gateway' equivalent of a VPC Peering connection when connecting VPCs across different accounts?",
    options: [
      "TGW Attachment",
      "TGW Peering",
      "Direct Connect",
      "VPC Endpoint"
    ],
    answer: 0,
    explanation: "To connect a VPC to a TGW, you create a TGW Attachment.",
    hint: "Connecting to the hub."
  },
  {
    id: 312,
    difficulty: "easy",
    category: "scenarios",
    question: "A company wants to receive an alert if their month-to-date costs exceed a specific threshold. Which service should they use?",
    options: [
      "AWS Cost Explorer",
      "AWS Budgets",
      "AWS Trusted Advisor",
      "AWS CloudWatch Alarms"
    ],
    answer: 1,
    explanation: "AWS Budgets is the correct tool for setting custom cost and usage budgets and receiving alerts.",
    hint: "Budget alerts."
  },
  {
    id: 313,
    difficulty: "medium",
    category: "scenarios",
    question: "You need to grant an EC2 instance permission to write data to an S3 bucket. What is the most secure way to do this?",
    options: [
      "Store IAM User Access Keys in the application code",
      "Assign an IAM Role to the EC2 instance profile",
      "Make the S3 bucket public",
      "Use the AWS Root account credentials"
    ],
    answer: 1,
    explanation: "IAM Roles for EC2 provide temporary credentials and eliminate the need to manage long-term secrets.",
    hint: "Temporary credentials for compute."
  },
  {
    id: 314,
    difficulty: "hard",
    category: "databases",
    question: "An application requires a database that can scale to millions of requests per second with sub-millisecond latency. Which database should you choose?",
    options: [
      "Amazon RDS (MySQL)",
      "Amazon Aurora",
      "Amazon DynamoDB with DAX",
      "Amazon Redshift"
    ],
    answer: 2,
    explanation: "DynamoDB is built for massive scale, and DAX (DynamoDB Accelerator) provides in-memory caching for microsecond latency.",
    hint: "NoSQL + Cache."
  },
  {
    id: 315,
    difficulty: "medium",
    category: "scenarios",
    question: "A global application serves static content to users worldwide. How can you reduce latency for these users?",
    options: [
      "Deploy instances in every AWS region",
      "Use Amazon CloudFront",
      "Increase the size of the EC2 instances",
      "Use AWS Direct Connect"
    ],
    answer: 1,
    explanation: "CloudFront is a CDN that caches content at edge locations closer to the users.",
    hint: "Global CDN."
  },
  {
    id: 316,
    difficulty: "hard",
    category: "scenarios",
    question: "You need to migrate a legacy on-premises database to AWS. The application code cannot be changed, and the database requires a specific legacy OS version. What is the best approach?",
    options: [
      "Migrate to Amazon RDS",
      "Migrate to Amazon Aurora",
      "Migrate to Amazon EC2 (Self-managed)",
      "Migrate to DynamoDB"
    ],
    answer: 2,
    explanation: "If you need OS-level access or a specific configuration not supported by managed RDS, you must run the DB on EC2.",
    hint: "OS-level control needed."
  },
  {
    id: 317,
    difficulty: "medium",
    category: "scenarios",
    question: "Which AWS service can be used to protect your application from SQL injection and Cross-Site Scripting (XSS) attacks?",
    options: [
      "AWS Shield",
      "AWS WAF",
      "Amazon GuardDuty",
      "AWS Inspector"
    ],
    answer: 1,
    explanation: "AWS WAF filters web traffic based on rules you define (Layer 7).",
    hint: "Web firewall."
  },
  {
    id: 318,
    difficulty: "easy",
    category: "concepts",
    question: "What is the concept of 'Agility' in the context of cloud computing?",
    options: [
      "The ability to pay for only what you use",
      "The ability to deploy resources in minutes instead of weeks",
      "The ability to scale resources up and down",
      "The ability to store data in multiple regions"
    ],
    answer: 1,
    explanation: "Agility refers to the speed at which you can innovate and deploy resources.",
    hint: "Speed of deployment."
  },
  {
    id: 319,
    difficulty: "hard",
    category: "scenarios",
    question: "You are running a web application on EC2. You want to automatically add more instances when CPU utilization exceeds 70%. Which combination is required?",
    options: [
      "CloudWatch Alarms and AWS Config",
      "CloudWatch Alarms and Auto Scaling Policy",
      "CloudTrail and Auto Scaling Group",
      "AWS Trusted Advisor and EC2 Fleet"
    ],
    answer: 1,
    explanation: "CloudWatch monitors the metric and triggers the alarm, which then tells the Auto Scaling group to execute a scaling policy.",
    hint: "Monitor -> Alarm -> Scale."
  },
  {
    id: 320,
    difficulty: "medium",
    category: "scenarios",
    question: "You need to securely connect your on-premises data center to your AWS VPC using your existing internet connection. What is the most cost-effective option?",
    options: [
      "AWS Direct Connect",
      "AWS Site-to-Site VPN",
      "AWS Transit Gateway",
      "VPC Peering"
    ],
    answer: 1,
    explanation: "VPN is cheaper and faster to set up than Direct Connect, as it uses the public internet.",
    hint: "Encrypted internet tunnel."
  },
  {
    id: 321,
    difficulty: "hard",
    category: "security",
    question: "Which IAM entity is used to allow an AWS service to perform actions on your behalf?",
    options: [
      "IAM User",
      "IAM Group",
      "IAM Role",
      "IAM Policy"
    ],
    answer: 2,
    explanation: "Roles are assumed by services (like Lambda or EC2) to obtain temporary permissions.",
    hint: "Temporary permissions."
  },
  {
    id: 322,
    difficulty: "medium",
    category: "scenarios",
    question: "A company wants to discover and protect sensitive data like PII in their S3 buckets. Which service is designed for this?",
    options: [
      "Amazon Inspector",
      "Amazon Macie",
      "Amazon GuardDuty",
      "AWS Shield"
    ],
    answer: 1,
    explanation: "Macie uses ML to find sensitive data in S3.",
    hint: "PII discovery."
  },
  {
    id: 323,
    difficulty: "easy",
    category: "concepts",
    question: "Which of the following is an advantage of 'Cloud Computing'?",
    options: [
      "Trade variable expense for capital expense",
      "Go global in minutes",
      "Increase latency for end users",
      "Manual provisioning of resources"
    ],
    answer: 1,
    explanation: "AWS allows you to deploy applications in multiple regions around the world with just a few clicks.",
    hint: "Speed and global reach."
  },
  {
    id: 324,
    difficulty: "hard",
    category: "databases",
    question: "You need to migrate a 10TB NoSQL database to AWS with minimal downtime. Which service should you use?",
    options: [
      "AWS Snowball",
      "AWS Database Migration Service (DMS)",
      "AWS DataSync",
      "AWS Glue"
    ],
    answer: 1,
    explanation: "DMS supports continuous data replication to keep the source and target in sync until you are ready to cut over.",
    hint: "Zero-downtime DB move."
  },
  {
    id: 325,
    difficulty: "medium",
    category: "scenarios",
    question: "An application needs to process messages in the exact order they are received. Which SQS queue type should be used?",
    options: [
      "Standard Queue",
      "First-In-First-Out (FIFO) Queue",
      "Priority Queue",
      "Dead Letter Queue"
    ],
    answer: 1,
    explanation: "FIFO queues ensure that the order of messages is strictly preserved.",
    hint: "Ordering matters."
  },
  {
    id: 326,
    difficulty: "hard",
    category: "scenarios",
    question: "You want to run a script every Sunday at 2 AM to generate a report. Which serverless combination is best?",
    options: [
      "EC2 and Cron job",
      "Amazon EventBridge (Scheduler) and AWS Lambda",
      "AWS Step Functions and EC2",
      "AWS Batch and S3"
    ],
    answer: 1,
    explanation: "EventBridge can trigger a Lambda function on a schedule (cron expression).",
    hint: "Scheduled serverless."
  },
  {
    id: 327,
    difficulty: "medium",
    category: "security",
    question: "Which AWS service is used to manage and rotate database credentials, API keys, and other secrets?",
    options: [
      "AWS Systems Manager",
      "AWS Secrets Manager",
      "AWS Artifact",
      "AWS KMS"
    ],
    answer: 1,
    explanation: "Secrets Manager allows for automatic rotation of secrets, especially for RDS.",
    hint: "Secrets and rotation."
  },
  {
    id: 328,
    difficulty: "easy",
    category: "concepts",
    question: "Under the Shared Responsibility Model, which of the following is a responsibility of the Customer?",
    options: [
      "Physical security of data centers",
      "Patching the guest operating system",
      "Maintenance of host hardware",
      "Disposal of storage disks"
    ],
    answer: 1,
    explanation: "The customer is responsible for everything inside the EC2 instance, including the OS, applications, and data.",
    hint: "Security IN the cloud."
  },
  {
    id: 329,
    difficulty: "hard",
    category: "networking",
    question: "What is 'AWS Global Accelerator'?",
    options: [
      "A way to speed up the AWS console",
      "A service that improves availability by providing static Anycast IP addresses that route traffic through the AWS global network",
      "A type of CDN for static images",
      "A way to download data from S3 faster"
    ],
    answer: 1,
    explanation: "Global Accelerator optimizes the path from users to your applications using the AWS backbone.",
    hint: "Static IPs for global routing."
  },
  {
    id: 330,
    difficulty: "medium",
    category: "scenarios",
    question: "You need a shared file system for several Linux EC2 instances that can scale automatically to petabytes. Which service do you use?",
    options: [
      "Amazon EBS",
      "Amazon S3",
      "Amazon EFS",
      "Amazon FSx for Windows"
    ],
    answer: 2,
    explanation: "EFS is a managed NFS file system for Linux that scales on demand.",
    hint: "Linux shared storage."
  },
  {
    id: 331,
    difficulty: "hard",
    category: "governance",
    question: "A company needs to ensure that no developer can create an internet-facing Load Balancer in their sub-account. What should the administrator use?",
    options: [
      "IAM Policy on the developer",
      "Service Control Policy (SCP) in AWS Organizations",
      "AWS Config rule",
      "AWS Trusted Advisor"
    ],
    answer: 1,
    explanation: "SCPs provide centralized control over the maximum available permissions for all accounts in an Organization.",
    hint: "Account-level guardrail."
  },
  {
    id: 332,
    difficulty: "medium",
    category: "scenarios",
    question: "Which tool helps you estimate the cost of moving your on-premises environment to AWS?",
    options: [
      "AWS Pricing Calculator",
      "AWS Migration Hub",
      "AWS Total Cost of Ownership (TCO) Calculator (Now part of Pricing Calculator)",
      "AWS Budgets"
    ],
    answer: 2,
    explanation: "TCO analysis helps compare the costs of on-premises vs. AWS.",
    hint: "On-prem vs Cloud cost."
  },
  {
    id: 333,
    difficulty: "easy",
    category: "concepts",
    question: "What is 'Elasticity' in AWS?",
    options: [
      "The ability to pay with a credit card",
      "The ability to scale resources up and down to match demand",
      "The ability to store unlimited data",
      "The ability to run any operating system"
    ],
    answer: 1,
    explanation: "Elasticity is the power to scale out (add resources) and scale in (remove resources) automatically.",
    hint: "Scale with demand."
  },
  {
    id: 334,
    difficulty: "hard",
    category: "security",
    question: "What is an 'Inbound' Security Group rule for a web server?",
    options: [
      "Allows traffic from the server to the database",
      "Allows traffic from the internet to the server (e.g., port 443)",
      "Allows the server to download updates",
      "Denies all traffic"
    ],
    answer: 1,
    explanation: "Inbound rules control traffic coming into the resource.",
    hint: "Traffic entering."
  },
  {
    id: 335,
    difficulty: "medium",
    category: "scenarios",
    question: "You want to automate the deployment of your infrastructure using a template. Which service should you use?",
    options: [
      "AWS OpsWorks",
      "AWS CloudFormation",
      "AWS Elastic Beanstalk",
      "AWS CodeDeploy"
    ],
    answer: 1,
    explanation: "CloudFormation uses JSON/YAML templates to provision and manage stacks of resources.",
    hint: "Infrastructure as Code."
  },
  {
    id: 336,
    difficulty: "hard",
    category: "scenarios",
    question: "An application requires 'High Availability' across an entire AWS region. What is the minimum number of Availability Zones you should use?",
    options: [
      "One",
      "Two",
      "Three",
      "A whole Region"
    ],
    answer: 1,
    explanation: "Multi-AZ deployments (minimum of two) ensure that if one data center fails, the other can continue to serve traffic.",
    hint: "Redundancy across AZs."
  },
  {
    id: 337,
    difficulty: "medium",
    category: "billing",
    question: "Which AWS support plan provides access to a Technical Account Manager (TAM)?",
    options: [
      "Developer",
      "Business",
      "Enterprise On-Ramp",
      "Enterprise"
    ],
    answer: 3,
    explanation: "The Enterprise support plan is the only one that includes a dedicated TAM (Enterprise On-Ramp has a pool of TAMs).",
    hint: "Dedicated AWS expert."
  },
  {
    id: 338,
    difficulty: "easy",
    category: "security",
    question: "Who is responsible for 'Security OF the Cloud'?",
    options: [
      "The Customer",
      "AWS",
      "The ISP",
      "The Government"
    ],
    answer: 1,
    explanation: "AWS is responsible for protecting the infrastructure that runs all the services offered in the AWS Cloud.",
    hint: "Infrastructure security."
  },
  {
    id: 339,
    difficulty: "hard",
    category: "compute",
    question: "What is 'AWS Fargate'?",
    options: [
      "A type of EC2 instance",
      "A serverless compute engine for containers",
      "A virtual private server for small businesses",
      "A managed database service"
    ],
    answer: 1,
    explanation: "Fargate allows you to run containers (ECS or EKS) without managing the underlying EC2 instances.",
    hint: "Serverless containers."
  },
  {
    id: 340,
    difficulty: "medium",
    category: "scenarios",
    question: "A company needs to analyze huge amounts of data using the Hadoop framework. Which service is best?",
    options: [
      "Amazon Redshift",
      "Amazon EMR",
      "Amazon Athena",
      "Amazon QuickSight"
    ],
    answer: 1,
    explanation: "EMR (Elastic MapReduce) is the managed Hadoop/Spark service on AWS.",
    hint: "Managed Hadoop."
  },
  {
    id: 341,
    difficulty: "hard",
    category: "networking",
    question: "Which service allows for private connectivity between your VPC and another AWS service without using an internet gateway or NAT device?",
    options: [
      "VPC Peering",
      "VPC Endpoint (PrivateLink)",
      "AWS Direct Connect",
      "Transit Gateway"
    ],
    answer: 1,
    explanation: "VPC Endpoints allow you to connect to services (like S3 or DynamoDB) over the AWS internal network.",
    hint: "Private service access."
  },
  {
    id: 342,
    difficulty: "medium",
    category: "scenarios",
    question: "You want to create a mobile app that allows users to sign in with their Amazon, Facebook, or Google accounts. Which service should you use?",
    options: [
      "AWS IAM",
      "Amazon Cognito",
      "AWS Organizations",
      "AWS Directory Service"
    ],
    answer: 1,
    explanation: "Cognito User Pools support social identity federation.",
    hint: "User authentication."
  },
  {
    id: 343,
    difficulty: "easy",
    category: "scenarios",
    question: "You need to store objects that are rarely accessed but must be available immediately when requested. Which S3 class is best?",
    options: [
      "S3 Standard",
      "S3 Standard-IA",
      "S3 Glacier",
      "S3 One Zone-IA"
    ],
    answer: 1,
    explanation: "Infrequent Access (IA) is cheaper for storage but has a retrieval fee, while still providing millisecond access.",
    hint: "Rarely accessed, fast retrieval."
  },
  {
    id: 344,
    difficulty: "hard",
    category: "scenarios",
    question: "An application requires high-performance, low-latency disk storage for temporary data processing (scratch space). Which is the best option?",
    options: [
      "EBS Provisioned IOPS",
      "EC2 Instance Store",
      "Amazon EFS",
      "Amazon S3"
    ],
    answer: 1,
    explanation: "Instance Store is physically attached to the host computer, providing the highest performance but it is ephemeral (non-persistent).",
    hint: "Ephemeral high-speed storage."
  },
  {
    id: 345,
    difficulty: "medium",
    category: "scenarios",
    question: "Which service provides a dashboard to check if your AWS environment is following security best practices?",
    options: [
      "AWS Trusted Advisor",
      "AWS Config",
      "AWS CloudTrail",
      "Amazon Inspector"
    ],
    answer: 0,
    explanation: "Trusted Advisor provides checks across Security, Cost, Performance, and Fault Tolerance.",
    hint: "Best practices dashboard."
  },
  {
    id: 346,
    difficulty: "hard",
    category: "scenarios",
    question: "You need to automate the cleanup of S3 objects that are more than 30 days old. What should you use?",
    options: [
      "AWS Lambda function",
      "S3 Lifecycle Policy",
      "S3 Replication",
      "CloudWatch Events"
    ],
    answer: 1,
    explanation: "Lifecycle policies can be set to automatically expire (delete) objects after a certain number of days.",
    hint: "Automated object deletion."
  },
  {
    id: 347,
    difficulty: "easy",
    category: "concepts",
    question: "What is the AWS 'Global Infrastructure' composed of?",
    options: [
      "Countries and Cities",
      "Regions and Availability Zones",
      "Servers and Switches",
      "Hard drives and Cables"
    ],
    answer: 1,
    explanation: "AWS is organized into geographic Regions, each containing multiple isolated Availability Zones.",
    hint: "AWS geography."
  },
  {
    id: 348,
    difficulty: "medium",
    category: "scenarios",
    question: "Which AWS service is used for data warehousing and complex queries on petabytes of data?",
    options: [
      "Amazon RDS",
      "Amazon Redshift",
      "Amazon DynamoDB",
      "Amazon Neptune"
    ],
    answer: 1,
    explanation: "Redshift is a columnar-storage data warehouse for OLAP workloads.",
    hint: "Data Warehouse."
  },
  {
    id: 349,
    difficulty: "hard",
    category: "scenarios",
    question: "You want to deploy a web application across two regions for disaster recovery. How can you route traffic to the region with the lowest latency?",
    options: [
      "Use an Application Load Balancer",
      "Use Route 53 with Latency Routing policy",
      "Use CloudFront with Geoproximity",
      "Use AWS Direct Connect"
    ],
    answer: 1,
    explanation: "Route 53 latency routing directs users to the AWS region that provides the lowest latency.",
    hint: "Latency-based DNS."
  },
  {
    id: 350,
    difficulty: "medium",
    category: "scenarios",
    question: "A developer wants a 'Platform as a Service' (PaaS) to deploy a web application without managing any infrastructure. Which service should they use?",
    options: [
      "Amazon EC2",
      "AWS Elastic Beanstalk",
      "AWS Lambda",
      "AWS CloudFormation"
    ],
    answer: 1,
    explanation: "Elastic Beanstalk is the classic PaaS offering for deploying and scaling web apps.",
    hint: "Managed Web App platform."
  }
];

// Append final batch to database
questionBank.push(...awsBatch7);
/* ======================================================
   AWS MASTER QUESTION BANK (Batch 8/?)
   Topics: Advanced Well-Architected Scenarios & Best Practices
   ====================================================== */

const awsBatch8 = [
  {
    id: 351,
    difficulty: "hard",
    category: "well_architected",
    question: "A company is designing a high-traffic web application. To adhere to the Reliability pillar, how should they handle a potential failure of a single Availability Zone (AZ)?",
    options: [
      "Increase the size of the EC2 instances in the primary AZ",
      "Deploy a Multi-AZ architecture with an Application Load Balancer distributing traffic across instances in at least two AZs",
      "Set up a secondary AWS Region and use Route 53 to failover immediately",
      "Use a single large EC2 instance and take frequent EBS snapshots"
    ],
    answer: 1,
    explanation: "Multi-AZ deployment is the standard best practice for high availability within a region, ensuring that if one AZ goes down, the application remains operational.",
    hint: "Regional redundancy."
  },
  {
    id: 352,
    difficulty: "hard",
    category: "scenarios",
    question: "An application requires an RPO (Recovery Point Objective) of 1 second and an RTO (Recovery Time Objective) of under 1 minute. Which RDS configuration meets this requirement?",
    options: [
      "Daily snapshots to S3",
      "Multi-AZ Deployment",
      "Read Replicas in the same region",
      "Cross-Region Read Replicas"
    ],
    answer: 1,
    explanation: "Multi-AZ RDS provides synchronous replication (low RPO) and automatic failover (low RTO) in the event of an AZ failure.",
    hint: "Synchronous replication."
  },
  {
    id: 353,
    difficulty: "medium",
    category: "cost_optimization",
    question: "A development team wants to reduce costs for their non-production environments which are only used during business hours (9 AM - 5 PM). What is the best practice?",
    options: [
      "Switch to Spot Instances for all development servers",
      "Use AWS Instance Scheduler to automatically start and stop EC2 and RDS instances",
      "Convert all instances to Reserved Instances (3-year term)",
      "Move all development workloads to AWS Lambda"
    ],
    answer: 1,
    explanation: "Stopping resources when not in use is a core Cost Optimization pillar principle. Instance Scheduler automates this process.",
    hint: "Stop when not in use."
  },
  {
    id: 354,
    difficulty: "hard",
    category: "security",
    question: "To follow the principle of 'Grant Least Privilege', how should a developer allow a Lambda function to access a specific S3 bucket?",
    options: [
      "Attach the 'AdministratorAccess' policy to the Lambda execution role",
      "Attach an inline policy to the Lambda role that allows 's3:*' on all resources",
      "Attach a managed policy to the Lambda role that grants 's3:GetObject' and 's3:PutObject' only on the specific bucket ARN",
      "Make the S3 bucket public so the Lambda doesn't need permissions"
    ],
    answer: 2,
    explanation: "Least privilege means granting only the specific actions required on the specific resources needed.",
    hint: "Limit actions and ARNs."
  },
  {
    id: 355,
    difficulty: "medium",
    category: "scenarios",
    question: "A company needs to decouple a monolithic application where the frontend waits for a long-running backend process to finish. Which service should be used?",
    options: [
      "Amazon RDS",
      "Amazon SQS",
      "Amazon Route 53",
      "AWS Direct Connect"
    ],
    answer: 1,
    explanation: "SQS allows for asynchronous processing by placing tasks in a queue, decoupling the producer (frontend) from the consumer (backend).",
    hint: "Asynchronous messaging."
  },
  {
    id: 356,
    difficulty: "hard",
    category: "well_architected",
    question: "In the Performance Efficiency pillar, what is the advantage of using 'Serverless' architectures?",
    options: [
      "It is always cheaper than EC2",
      "It removes the operational burden of managing and scaling servers, allowing the system to match demand automatically",
      "It provides faster disk I/O than EBS",
      "It allows for the use of legacy hardware"
    ],
    answer: 1,
    explanation: "Serverless (like Lambda or Fargate) abstracts the infrastructure, allowing developers to focus on code while AWS handles scaling.",
    hint: "No server management."
  },
  {
    id: 357,
    difficulty: "medium",
    category: "scenarios",
    question: "A news website experiences unpredictable spikes in traffic whenever a major story breaks. Which scaling strategy is best suited for their EC2 fleet?",
    options: [
      "Scheduled Scaling",
      "Manual Scaling",
      "Dynamic Scaling (Target Tracking)",
      "Provisioning for peak load at all times"
    ],
    answer: 2,
    explanation: "Target tracking scaling policies adjust capacity based on a specific metric (like CPU %) to handle unpredictable load.",
    hint: "React to demand."
  },
  {
    id: 358,
    difficulty: "hard",
    category: "well_architected",
    question: "According to the Operational Excellence pillar, how should infrastructure changes be managed?",
    options: [
      "Via the AWS Management Console to ensure human oversight",
      "Using Infrastructure as Code (IaC) such as CloudFormation or Terraform to ensure repeatability and version control",
      "By logging into instances and manually updating software",
      "By submitting a ticket to the AWS Support team"
    ],
    answer: 1,
    explanation: "Performing operations as code is a key principle of Operational Excellence.",
    hint: "IaC."
  },
  {
    id: 359,
    difficulty: "medium",
    category: "security",
    question: "A company wants to prevent accidental deletion of objects in an S3 bucket. Which two features provide the best protection? (Select two)",
    options: [
      "S3 Versioning",
      "S3 Multi-Factor Authentication (MFA) Delete",
      "S3 Transfer Acceleration",
      "S3 Lifecycle Policies",
      "S3 Static Website Hosting"
    ],
    answer: [0, 1],
    explanation: "Versioning keeps old copies, and MFA Delete requires a second layer of authentication to permanently remove a version.",
    hint: "History and MFA."
  },
  {
    id: 360,
    difficulty: "hard",
    category: "scenarios",
    question: "You are running a legacy application that requires 'Sticky Sessions' (Session Affinity) to ensure users stay connected to the same backend server. Which Load Balancer supports this?",
    options: [
      "Network Load Balancer (NLB)",
      "Application Load Balancer (ALB)",
      "Classic Load Balancer (CLB)",
      "Gateway Load Balancer (GWLB)"
    ],
    answer: 1,
    explanation: "ALB supports sticky sessions using cookies to route requests from the same client to the same target.",
    hint: "Layer 7 cookie support."
  },
  {
    id: 361,
    difficulty: "hard",
    category: "scenarios",
    question: "A company needs to host a global database that allows for local low-latency reads in multiple continents. Which RDS option is best?",
    options: [
      "RDS Multi-AZ",
      "Amazon Aurora Global Database",
      "RDS Snapshot sharing",
      "DynamoDB Local"
    ],
    answer: 1,
    explanation: "Aurora Global Database replicates data to secondary regions with typical latency of under 1 second, enabling local reads.",
    hint: "Cross-region DB replication."
  },
  {
    id: 362,
    difficulty: "medium",
    category: "cost_optimization",
    question: "Which EC2 purchase option is most appropriate for a steady-state, 24/7 workload with a 3-year commitment?",
    options: [
      "On-Demand",
      "Spot Instances",
      "Reserved Instances",
      "Dedicated Hosts"
    ],
    answer: 2,
    explanation: "Reserved Instances (or Savings Plans) provide significant discounts for long-term committed usage.",
    hint: "Commitment for discount."
  },
  {
    id: 363,
    difficulty: "hard",
    category: "well_architected",
    question: "The 'Sustainability' pillar suggests which of the following to reduce carbon footprint?",
    options: [
      "Using the largest possible instances to ensure tasks finish faster",
      "Maximizing utilization of resources and minimizing idle resources",
      "Running all workloads on-premises",
      "Only using the US-East-1 region"
    ],
    answer: 1,
    explanation: "Higher utilization leads to less energy waste per unit of work.",
    hint: "Efficiency equals sustainability."
  },
  {
    id: 364,
    difficulty: "medium",
    category: "scenarios",
    question: "How can you securely provide a one-time file download to a user who does not have an AWS account?",
    options: [
      "Make the S3 bucket public",
      "Create an IAM user for the customer",
      "Generate an S3 Presigned URL",
      "Send the file via SNS"
    ],
    answer: 2,
    explanation: "Presigned URLs grant temporary access to a private S3 object using the owner's credentials.",
    hint: "Timed, temporary access."
  },
  {
    id: 365,
    difficulty: "hard",
    category: "scenarios",
    question: "You need to store sensitive data in S3 and ensure it is encrypted using keys that you (the customer) can manage and audit for usage. Which option should you choose?",
    options: [
      "Server-Side Encryption with S3 Managed Keys (SSE-S3)",
      "Server-Side Encryption with KMS Keys (SSE-KMS)",
      "Client-Side Encryption",
      "SSL/TLS in transit"
    ],
    answer: 1,
    explanation: "SSE-KMS allows the customer to manage the keys and see a trail of key usage in CloudTrail.",
    hint: "KMS for auditing."
  },
  {
    id: 366,
    difficulty: "medium",
    category: "well_architected",
    question: "Which of these is a 'Design Principle' of the Reliability pillar?",
    options: [
      "Stop guessing capacity",
      "Test recovery procedures",
      "Enable traceability",
      "Annotate stack traces"
    ],
    answer: 1,
    explanation: "In the cloud, you should test how your system fails and how it recovers to ensure it works when a real failure occurs.",
    hint: "Testing failures."
  },
  {
    id: 367,
    difficulty: "hard",
    category: "networking",
    question: "You want to route traffic to an S3-hosted website using a custom domain name (e.g., www.example.com). Which service is required?",
    options: [
      "Amazon VPC",
      "Amazon Route 53",
      "AWS Direct Connect",
      "AWS Cloud Map"
    ],
    answer: 1,
    explanation: "Route 53 is the AWS DNS service that maps domain names to S3 buckets or other AWS resources.",
    hint: "DNS management."
  },
  {
    id: 368,
    difficulty: "medium",
    category: "scenarios",
    question: "A financial application requires that every change to its database be recorded in a non-repudiable, immutable log. Which service fits this?",
    options: [
      "Amazon RDS",
      "Amazon QLDB",
      "Amazon DynamoDB",
      "Amazon DocumentDB"
    ],
    answer: 1,
    explanation: "QLDB (Quantum Ledger Database) provides a cryptographically verifiable transaction log.",
    hint: "Immutable ledger."
  },
  {
    id: 369,
    difficulty: "hard",
    category: "security",
    question: "Which AWS service helps protect your accounts by analyzing billions of events for signs of account compromise, such as unusual API calls from a malicious IP?",
    options: [
      "AWS WAF",
      "Amazon GuardDuty",
      "Amazon Inspector",
      "AWS Shield"
    ],
    answer: 1,
    explanation: "GuardDuty is a threat detection service that monitors CloudTrail, VPC Flow Logs, and DNS logs.",
    hint: "Intelligent threat detection."
  },
  {
    id: 370,
    difficulty: "medium",
    category: "scenarios",
    question: "You have a fleet of EC2 instances and need to run a specific command on all of them simultaneously without SSH-ing into each one. Which tool should you use?",
    options: [
      "AWS Lambda",
      "AWS Systems Manager (SSM) Run Command",
      "AWS CloudFormation",
      "AWS CodeDeploy"
    ],
    answer: 1,
    explanation: "Run Command allows you to securely and remotely manage the configuration of your instances at scale.",
    hint: "Remote command execution."
  },
  {
    id: 371,
    difficulty: "hard",
    category: "scenarios",
    question: "An application needs to access an AWS service privately without the traffic ever leaving the AWS network. What should be created in the VPC?",
    options: [
      "NAT Gateway",
      "Internet Gateway",
      "VPC Endpoint",
      "VPC Peering"
    ],
    answer: 2,
    explanation: "VPC Endpoints (powered by PrivateLink) allow for private communication between your VPC and AWS services.",
    hint: "No-Internet service access."
  },
  {
    id: 372,
    difficulty: "medium",
    category: "scenarios",
    question: "A company wants to implement a CI/CD pipeline. Which service should they use to automate the 'Build' stage (compiling code and running tests)?",
    options: [
      "AWS CodeCommit",
      "AWS CodeBuild",
      "AWS CodeDeploy",
      "AWS CodePipeline"
    ],
    answer: 1,
    explanation: "CodeBuild is the managed build service.",
    hint: "Compiling code."
  },
  {
    id: 373,
    difficulty: "hard",
    category: "well_architected",
    question: "In a 'Hub and Spoke' network architecture on AWS, which service acts as the 'Hub' to connect multiple VPCs and on-premises networks?",
    options: [
      "VPC Peering",
      "AWS Transit Gateway",
      "Internet Gateway",
      "NAT Gateway"
    ],
    answer: 1,
    explanation: "Transit Gateway simplifies networking by connecting thousands of VPCs and on-premise networks through a single gateway.",
    hint: "Network hub."
  },
  {
    id: 374,
    difficulty: "medium",
    category: "scenarios",
    question: "A startup wants to build a chatbot that can understand natural language. Which service provides the backend brain for this?",
    options: [
      "Amazon Polly",
      "Amazon Lex",
      "Amazon Rekognition",
      "Amazon Comprehend"
    ],
    answer: 1,
    explanation: "Lex provides the conversational AI (automatic speech recognition and natural language understanding).",
    hint: "Chatbot service."
  },
  {
    id: 375,
    difficulty: "hard",
    category: "scenarios",
    question: "You are designing a solution for a static website with millions of global users. Which combination provides the best performance and cost?",
    options: [
      "EC2 and Application Load Balancer",
      "S3 Bucket and Amazon CloudFront",
      "Lambda and API Gateway",
      "EFS and EC2"
    ],
    answer: 1,
    explanation: "S3 hosts the static files, and CloudFront caches them globally for low-latency delivery.",
    hint: "Static hosting + CDN."
  },
  {
    id: 376,
    difficulty: "medium",
    category: "scenarios",
    question: "A data scientist needs to run a one-time analysis on a 100 TB dataset stored in S3 using SQL. Which service is best?",
    options: [
      "Amazon RDS",
      "Amazon Athena",
      "Amazon Redshift",
      "AWS Glue"
    ],
    answer: 1,
    explanation: "Athena is serverless and allows for immediate SQL queries on S3 data with no setup.",
    hint: "SQL on S3."
  },
  {
    id: 377,
    difficulty: "hard",
    category: "security",
    question: "You want to automate the identification of 'Open' security groups that allow traffic from 0.0.0.0/0. Which service helps monitor this configuration over time?",
    options: [
      "AWS Config",
      "AWS CloudTrail",
      "Amazon GuardDuty",
      "AWS WAF"
    ],
    answer: 0,
    explanation: "AWS Config monitors and records your AWS resource configurations and can trigger alerts for non-compliant rules.",
    hint: "Compliance monitoring."
  },
  {
    id: 378,
    difficulty: "medium",
    category: "scenarios",
    question: "Which S3 feature can be used to automatically delete temporary log files after 14 days?",
    options: [
      "S3 Versioning",
      "S3 Lifecycle Policies",
      "S3 Replication",
      "S3 Event Notifications"
    ],
    answer: 1,
    explanation: "Lifecycle policies can define an expiration action to delete objects.",
    hint: "Automated deletion."
  },
  {
    id: 379,
    difficulty: "hard",
    category: "scenarios",
    question: "A company needs to migrate a high-performance Windows File Server to AWS while maintaining SMB protocol support and Active Directory integration. Which service should they use?",
    options: [
      "Amazon EFS",
      "Amazon FSx for Windows File Server",
      "Amazon S3",
      "Amazon EBS"
    ],
    answer: 1,
    explanation: "FSx for Windows is the native Windows file system for AWS.",
    hint: "Windows SMB shared storage."
  },
  {
    id: 380,
    difficulty: "medium",
    category: "scenarios",
    question: "What is the best way to handle 'Secrets' like database passwords in a Lambda function?",
    options: [
      "Hardcode them in the function code",
      "Pass them as environment variables in plain text",
      "Store them in AWS Secrets Manager and retrieve them at runtime",
      "Write them in a text file in the S3 bucket"
    ],
    answer: 2,
    explanation: "Secrets Manager provides secure storage and automatic rotation of credentials.",
    hint: "Don't hardcode secrets."
  },
  {
    id: 381,
    difficulty: "hard",
    category: "scenarios",
    question: "A media company needs to convert thousands of video files into different formats for mobile devices. Which service automates this process?",
    options: [
      "Amazon Rekognition",
      "AWS Elemental MediaConvert",
      "Amazon Polly",
      "AWS Glue"
    ],
    answer: 1,
    explanation: "MediaConvert is a file-based video transcoding service.",
    hint: "Video transcoding."
  },
  {
    id: 382,
    difficulty: "medium",
    category: "scenarios",
    question: "A company wants to be alerted if any user logs into the AWS console using the 'Root' account. Which combination works?",
    options: [
      "CloudWatch Events (EventBridge) and SNS",
      "VPC Flow Logs and Lambda",
      "S3 Access Logs and CloudTrail",
      "Trusted Advisor and SES"
    ],
    answer: 0,
    explanation: "EventBridge can detect the specific API call (ConsoleLogin) for the root user and trigger an SNS notification.",
    hint: "Event detection + Alert."
  },
  {
    id: 383,
    difficulty: "hard",
    category: "networking",
    question: "Which Route 53 routing policy should be used to improve performance by routing users to the AWS endpoint with the lowest network latency?",
    options: [
      "Simple Routing",
      "Failover Routing",
      "Latency-based Routing",
      "Geolocation Routing"
    ],
    answer: 2,
    explanation: "Latency routing uses measurements to different AWS regions to pick the fastest one for the user.",
    hint: "Lowest latency DNS."
  },
  {
    id: 384,
    difficulty: "medium",
    category: "scenarios",
    question: "A company is launching a new application and needs to perform a load test. Which EC2 instance type family is optimized for 'Compute Intensive' workloads?",
    options: [
      "T-family (Burstable)",
      "M-family (General Purpose)",
      "C-family (Compute Optimized)",
      "R-family (Memory Optimized)"
    ],
    answer: 2,
    explanation: "C-family instances (like C5 or C6g) are designed for batch processing and high-performance web servers.",
    hint: "C is for Compute."
  },
  {
    id: 385,
    difficulty: "hard",
    category: "scenarios",
    question: "You need to ingest 1,000 small files per second from various IoT devices and store them in S3 as larger batches for analysis. Which service is best?",
    options: [
      "Kinesis Data Streams",
      "Kinesis Data Firehose",
      "Amazon SQS",
      "AWS DataSync"
    ],
    answer: 1,
    explanation: "Firehose can buffer incoming data and write it to S3 in batches based on size or time.",
    hint: "Stream to S3 batching."
  },
  {
    id: 386,
    difficulty: "medium",
    category: "security",
    question: "Which service allows you to centrally manage and enforce security policies across all accounts in your AWS Organization?",
    options: [
      "AWS Shield",
      "AWS Firewall Manager",
      "AWS WAF",
      "IAM"
    ],
    answer: 1,
    explanation: "Firewall Manager simplifies management tasks for WAF, Shield, and Security Groups across accounts.",
    hint: "Central security management."
  },
  {
    id: 387,
    difficulty: "hard",
    category: "scenarios",
    question: "You want to perform a 'Blue/Green' deployment for a containerized application. Which service provides this capability natively for ECS?",
    options: [
      "AWS CloudFormation",
      "AWS CodeDeploy",
      "AWS Systems Manager",
      "Amazon CloudWatch"
    ],
    answer: 1,
    explanation: "CodeDeploy integrates with ECS to handle traffic shifting between task sets.",
    hint: "Blue/Green orchestrator."
  },
  {
    id: 388,
    difficulty: "medium",
    category: "scenarios",
    question: "Which database service is 'Serverless' and automatically scales up and down based on application demand, even to zero?",
    options: [
      "Amazon RDS",
      "Amazon Aurora Serverless",
      "Amazon Redshift",
      "Amazon Neptune"
    ],
    answer: 1,
    explanation: "Aurora Serverless scales capacity (ACUs) automatically and can pause during periods of inactivity.",
    hint: "Scaling SQL to zero."
  },
  {
    id: 389,
    difficulty: "hard",
    category: "well_architected",
    question: "The 'Security' pillar highlights 'Protecting Data in Transit'. Which of the following is a best practice for this?",
    options: [
      "Using S3 Versioning",
      "Enforcing TLS (HTTPS) for all API and web traffic",
      "Using EBS Snapshots",
      "Creating IAM Users for every employee"
    ],
    answer: 1,
    explanation: "TLS/SSL encrypts data as it moves over the network.",
    hint: "HTTPS for transit."
  },
  {
    id: 390,
    difficulty: "medium",
    category: "scenarios",
    question: "A company wants to analyze user behavior on their website in real-time. Which service should they use to collect the clickstream data?",
    options: [
      "Amazon Kinesis Data Streams",
      "Amazon Athena",
      "AWS Glue",
      "Amazon Redshift"
    ],
    answer: 0,
    explanation: "Kinesis Data Streams is the standard service for ingesting real-time data.",
    hint: "Real-time ingestion."
  },
  {
    id: 391,
    difficulty: "hard",
    category: "scenarios",
    question: "You are designing a disaster recovery strategy with a 24-hour RTO. Which approach is most cost-effective?",
    options: [
      "Multi-Site (Active-Active)",
      "Warm Standby",
      "Pilot Light",
      "Backup and Restore"
    ],
    answer: 3,
    explanation: "Backup and Restore is the cheapest option for high RTOs, as you only pay for storage and not running compute.",
    hint: "Cheapest DR."
  },
  {
    id: 392,
    difficulty: "medium",
    category: "billing",
    question: "A company is using several AWS accounts for different departments. How can they simplify billing and qualify for volume discounts?",
    options: [
      "Pay each bill with a different credit card",
      "Use AWS Organizations and Consolidated Billing",
      "Ask AWS Support for a discount",
      "Move all resources into one account"
    ],
    answer: 1,
    explanation: "Consolidated billing combines usage across accounts, allowing for higher volume tiers and a single payment.",
    hint: "Unified billing."
  },
  {
    id: 393,
    difficulty: "hard",
    category: "scenarios",
    question: "A high-performance computing (HPC) application requires very low latency and high-throughput network communication between instances. Which feature should be used?",
    options: [
      "Elastic Load Balancing",
      "Elastic Fabric Adapter (EFA)",
      "VPC Peering",
      "AWS Direct Connect"
    ],
    answer: 1,
    explanation: "EFA is a network interface for Amazon EC2 instances that enables customers to run HPC applications at scale.",
    hint: "HPC networking."
  },
  {
    id: 394,
    difficulty: "medium",
    category: "scenarios",
    question: "Which AWS service provides a simple way to deploy and manage a 'Landing Zone'—a secure, multi-account AWS environment based on best practices?",
    options: [
      "AWS Organizations",
      "AWS Control Tower",
      "AWS Systems Manager",
      "AWS CloudFormation"
    ],
    answer: 1,
    explanation: "Control Tower automates the setup of a governed multi-account environment.",
    hint: "Managed landing zone."
  },
  {
    id: 395,
    difficulty: "hard",
    category: "scenarios",
    question: "A company needs to move 5 PB (Petabytes) of data to AWS within a few weeks. They have limited internet bandwidth. Which service is best?",
    options: [
      "AWS DataSync",
      "AWS Snowball Edge",
      "AWS Snowmobile",
      "AWS Transfer Family"
    ],
    answer: 2,
    explanation: "For exabyte-scale or multi-petabyte migrations, Snowmobile (the truck) is the intended solution.",
    hint: "Large scale transport."
  },
  {
    id: 396,
    difficulty: "medium",
    category: "scenarios",
    question: "Which service uses machine learning to automatically provide recommendations for improving the performance and security of your Java or Python code?",
    options: [
      "Amazon CodeGuru",
      "Amazon SageMaker",
      "AWS CodeBuild",
      "AWS X-Ray"
    ],
    answer: 0,
    explanation: "CodeGuru is a developer tool that provides intelligent recommendations for code quality.",
    hint: "ML code reviewer."
  },
  {
    id: 397,
    difficulty: "hard",
    category: "networking",
    question: "You want to connect your office to AWS with a dedicated network connection that provides consistent performance and bypasses the public internet. Which service should you choose?",
    options: [
      "AWS Site-to-Site VPN",
      "AWS Client VPN",
      "AWS Direct Connect",
      "Amazon Route 53"
    ],
    answer: 2,
    explanation: "Direct Connect is a dedicated physical connection between your DC and AWS.",
    hint: "Dedicated network link."
  },
  {
    id: 398,
    difficulty: "medium",
    category: "well_architected",
    question: "According to the Cost Optimization pillar, what is the best practice for 'Right Sizing'?",
    options: [
      "Always choosing the largest instance type to avoid performance issues",
      "Selecting the cheapest instance type regardless of performance",
      "Continually monitoring your workloads and adjusting resource sizes to match the actual usage",
      "Only using T2 instances"
    ],
    answer: 2,
    explanation: "Right-sizing is the process of matching instance types and sizes to your workload performance and capacity requirements.",
    hint: "Match resources to load."
  },
  {
    id: 399,
    difficulty: "hard",
    category: "scenarios",
    question: "A web application's database is struggling with a high number of 'Read' requests. What is the most effective way to scale this without changing the database engine?",
    options: [
      "Upgrade to a larger instance (Vertical Scaling)",
      "Create RDS Read Replicas",
      "Move the database to S3",
      "Enable Multi-AZ"
    ],
    answer: 1,
    explanation: "Read Replicas offload read traffic from the primary DB instance, allowing for horizontal scaling of reads.",
    hint: "Scale reads horizontally."
  },
  {
    id: 400,
    difficulty: "medium",
    category: "scenarios",
    question: "Which service can be used to coordinate multiple Lambda functions into a single long-running business process (workflow)?",
    options: [
      "Amazon SQS",
      "Amazon SNS",
      "AWS Step Functions",
      "AWS CodePipeline"
    ],
    answer: 2,
    explanation: "Step Functions is a serverless orchestrator that makes it easy to sequence AWS Lambda functions and multiple AWS services.",
    hint: "Visual workflows."
  }
];

// Append to main database
questionBank.push(...awsBatch8);
/* ======================================================
   AWS MASTER QUESTION BANK (Batch 9/?)
   Topics: Security & Compliance, AI/ML, Analytics, & EUC
   ====================================================== */

const awsBatch9 = [
  {
    id: 401,
    difficulty: "medium",
    category: "security",
    question: "Which AWS service is a self-service portal that provides on-demand access to AWS security and compliance reports (e.g., SOC, PCI, HIPAA)?",
    options: [
      "AWS Secrets Manager",
      "AWS Artifact",
      "AWS Config",
      "AWS Audit Manager"
    ],
    answer: 1,
    explanation: "AWS Artifact is the central resource for compliance-related information that provides on-demand access to AWS’s security and compliance reports.",
    hint: "Compliance documents."
  },
  {
    id: 402,
    difficulty: "hard",
    category: "security",
    question: "A company needs to continuously audit their AWS usage to simplify risk assessment against regulations and industry standards. Which service automates the collection of evidence?",
    options: [
      "AWS Artifact",
      "AWS Audit Manager",
      "AWS Security Hub",
      "Amazon GuardDuty"
    ],
    answer: 1,
    explanation: "Audit Manager helps you continuously audit your AWS usage to simplify how you assess risk and compliance with regulations and industry standards.",
    hint: "Automated evidence collector."
  },
  {
    id: 403,
    difficulty: "medium",
    category: "security",
    question: "Which service provides a comprehensive view of your security alerts and security posture across multiple AWS accounts?",
    options: [
      "AWS Security Hub",
      "Amazon Inspector",
      "AWS WAF",
      "AWS Firewall Manager"
    ],
    answer: 0,
    explanation: "Security Hub aggregates alerts (findings) from various AWS services like GuardDuty, Inspector, and Macie.",
    hint: "Central security dashboard."
  },
  {
    id: 404,
    difficulty: "hard",
    category: "ai_ml",
    question: "Which AWS service provides a serverless experience to build and scale generative AI applications using foundation models (FMs) via an API?",
    options: [
      "Amazon SageMaker",
      "Amazon Bedrock",
      "Amazon Kendra",
      "AWS HealthScribe"
    ],
    answer: 1,
    explanation: "Amazon Bedrock is the easiest way to build and scale generative AI applications with foundation models from Amazon and leading AI startups.",
    hint: "Serverless Generative AI."
  },
  {
    id: 405,
    difficulty: "medium",
    category: "ai_ml",
    question: "Which machine learning service is used to build, train, and deploy ML models at scale?",
    options: [
      "Amazon Rekognition",
      "Amazon SageMaker",
      "Amazon Lex",
      "Amazon Comprehend"
    ],
    answer: 1,
    explanation: "SageMaker is a fully managed service that provides every developer and data scientist with the ability to build, train, and deploy ML models quickly.",
    hint: "End-to-end ML platform."
  },
  {
    id: 406,
    difficulty: "easy",
    category: "ai_ml",
    question: "Which service allows you to add image and video analysis to your applications to identify objects, people, and text?",
    options: [
      "Amazon Rekognition",
      "Amazon Polly",
      "Amazon Transcribe",
      "Amazon Translate"
    ],
    answer: 0,
    explanation: "Rekognition makes it easy to add vision analysis to your applications.",
    hint: "Computer Vision."
  },
  {
    id: 407,
    difficulty: "medium",
    category: "ai_ml",
    question: "Which service converts text into life-like speech?",
    options: [
      "Amazon Transcribe",
      "Amazon Polly",
      "Amazon Translate",
      "Amazon Lex"
    ],
    answer: 1,
    explanation: "Polly uses advanced deep learning technologies to synthesize natural sounding human speech.",
    hint: "Text-to-Speech."
  },
  {
    id: 408,
    difficulty: "hard",
    category: "analytics",
    question: "What is 'Amazon Redshift Spectrum'?",
    options: [
      "A way to change the color of the Redshift console",
      "A feature that allows you to run queries against exabytes of data in Amazon S3 without having to load the data into Redshift tables",
      "A type of fiber optic cable",
      "A backup service for Redshift"
    ],
    answer: 1,
    explanation: "Spectrum enables you to query data directly from S3 using the Redshift query engine.",
    hint: "Query S3 data with Redshift."
  },
  {
    id: 409,
    difficulty: "medium",
    category: "analytics",
    question: "Which service is a serverless, interactive query service that makes it easy to analyze data in Amazon S3 using standard SQL?",
    options: [
      "Amazon Redshift",
      "Amazon Athena",
      "Amazon EMR",
      "AWS Glue"
    ],
    answer: 1,
    explanation: "Athena is a pay-per-query service used primarily for ad-hoc analysis of data in S3.",
    hint: "SQL on S3."
  },
  {
    id: 410,
    difficulty: "hard",
    category: "analytics",
    question: "Which service is a serverless data integration service that makes it easy to discover, prepare, and combine data for analytics, machine learning, and application development?",
    options: [
      "AWS Data Pipeline",
      "AWS Glue",
      "Amazon Kinesis",
      "Amazon QuickSight"
    ],
    answer: 1,
    explanation: "Glue provides both visual and code-based interfaces to make data integration easier (ETL).",
    hint: "Serverless ETL."
  },
  {
    id: 411,
    difficulty: "medium",
    category: "analytics",
    question: "Which service allows you to easily create and publish interactive BI dashboards that include ML-powered insights?",
    options: [
      "Amazon QuickSight",
      "AWS Glue",
      "Amazon Athena",
      "Amazon CloudWatch"
    ],
    answer: 0,
    explanation: "QuickSight is a fast, cloud-powered business intelligence service.",
    hint: "BI Dashboards."
  },
  {
    id: 412,
    difficulty: "hard",
    category: "analytics",
    question: "What is 'Amazon OpenSearch Service' (successor to Amazon Elasticsearch Service) primarily used for?",
    options: [
      "Storing videos",
      "Search, visualization, and log analytics",
      "Relational database storage",
      "Cold storage of files"
    ],
    answer: 1,
    explanation: "OpenSearch is used for real-time application monitoring, log analytics, and website search.",
    hint: "Log analytics & Search."
  },
  {
    id: 413,
    difficulty: "medium",
    category: "euc",
    question: "Which service provides a secure, managed cloud desktop (Desktop-as-a-Service) for users to access their documents and applications?",
    options: [
      "Amazon AppStream 2.0",
      "Amazon WorkSpaces",
      "AWS Direct Connect",
      "Amazon Connect"
    ],
    answer: 1,
    explanation: "WorkSpaces provides a persistent, managed desktop experience for Windows or Linux.",
    hint: "Virtual Desktops."
  },
  {
    id: 414,
    difficulty: "hard",
    category: "euc",
    question: "A company wants to stream a single desktop application to their users' web browsers without providing a full virtual desktop. Which service should they use?",
    options: [
      "Amazon WorkSpaces",
      "Amazon AppStream 2.0",
      "Amazon WorkLink",
      "Amazon WorkDocs"
    ],
    answer: 1,
    explanation: "AppStream 2.0 is a non-persistent application streaming service.",
    hint: "Application Streaming."
  },
  {
    id: 415,
    difficulty: "medium",
    category: "scenarios",
    question: "Which AWS service provides a managed GraphQL service that simplifies application development by letting you create a flexible API to securely access data from multiple sources?",
    options: [
      "Amazon AppSync",
      "Amazon API Gateway",
      "AWS Amplify",
      "AWS Lambda"
    ],
    answer: 0,
    explanation: "AppSync is the managed GraphQL service.",
    hint: "GraphQL API."
  },
  {
    id: 416,
    difficulty: "hard",
    category: "scenarios",
    question: "A company needs to process high-volume streaming data and deliver it to S3, Redshift, and OpenSearch. Which Kinesis service is designed for this delivery pattern?",
    options: [
      "Kinesis Data Streams",
      "Kinesis Data Firehose",
      "Kinesis Video Streams",
      "Kinesis Data Analytics"
    ],
    answer: 1,
    explanation: "Firehose is the easiest way to load streaming data into data stores and analytics tools.",
    hint: "Streaming delivery."
  },
  {
    id: 417,
    difficulty: "medium",
    category: "ai_ml",
    question: "Which service uses machine learning to provide highly accurate transcriptions of audio files or live speech?",
    options: [
      "Amazon Polly",
      "Amazon Transcribe",
      "Amazon Comprehend",
      "Amazon Translate"
    ],
    answer: 1,
    explanation: "Transcribe uses ML to provide speech-to-text capabilities.",
    hint: "Speech-to-Text."
  },
  {
    id: 418,
    difficulty: "hard",
    category: "ai_ml",
    question: "Which service uses natural language processing (NLP) to find insights and relationships in text data (e.g., sentiment analysis)?",
    options: [
      "Amazon Rekognition",
      "Amazon Comprehend",
      "Amazon Lex",
      "Amazon Kendra"
    ],
    answer: 1,
    explanation: "Comprehend is an NLP service that uses ML to find insights and relationships in a text.",
    hint: "Sentiment analysis & NLP."
  },
  {
    id: 419,
    difficulty: "medium",
    category: "ai_ml",
    question: "Which service provides fluent and accurate language translation?",
    options: [
      "Amazon Transcribe",
      "Amazon Translate",
      "Amazon Polly",
      "Amazon Comprehend"
    ],
    answer: 1,
    explanation: "Translate is a neural machine translation service.",
    hint: "Language Translation."
  },
  {
    id: 420,
    difficulty: "hard",
    category: "ai_ml",
    question: "Which service is a highly accurate and easy-to-use enterprise search service powered by machine learning?",
    options: [
      "Amazon OpenSearch",
      "Amazon Kendra",
      "Amazon Lex",
      "Amazon Rekognition"
    ],
    answer: 1,
    explanation: "Kendra allows you to search across different content repositories using natural language.",
    hint: "Enterprise Search."
  },
  {
    id: 421,
    difficulty: "medium",
    category: "management",
    question: "Which service acts as a 'Knowledge Base' for your AWS environment, providing a list of resources and their relationships, and tracking configuration changes?",
    options: [
      "AWS CloudTrail",
      "AWS Config",
      "AWS Trusted Advisor",
      "AWS Systems Manager"
    ],
    answer: 1,
    explanation: "AWS Config provides a detailed view of the configuration of AWS resources in your account.",
    hint: "Configuration history."
  },
  {
    id: 422,
    difficulty: "hard",
    category: "security",
    question: "What is 'AWS Network Firewall'?",
    options: [
      "A software on an EC2 instance",
      "A managed service that makes it easy to deploy essential network protections for all of your virtual private clouds (VPCs) at Layers 3 through 7",
      "Another name for a Security Group",
      "A type of IAM policy"
    ],
    answer: 1,
    explanation: "Network Firewall provides a stateful firewall and intrusion prevention system (IPS) for VPCs.",
    hint: "Stateful VPC Firewall."
  },
  {
    id: 423,
    difficulty: "medium",
    category: "governance",
    question: "Which service allows you to share AWS resources (like Subnets or Transit Gateways) across different accounts within your organization?",
    options: [
      "AWS Organizations",
      "AWS Resource Access Manager (RAM)",
      "AWS Config",
      "AWS PrivateLink"
    ],
    answer: 1,
    explanation: "RAM allows you to securely share your resources across AWS accounts.",
    hint: "Share resources between accounts."
  },
  {
    id: 424,
    difficulty: "hard",
    category: "migration",
    question: "Which service helps you plan your migration to the cloud by automatically identifying on-premises software and hardware assets and their dependencies?",
    options: [
      "AWS Application Discovery Service",
      "AWS Migration Hub",
      "AWS DMS",
      "AWS DataSync"
    ],
    answer: 0,
    explanation: "Application Discovery Service collects and presents configuration, usage, and behavior data from your on-premises servers.",
    hint: "On-prem inventory/discovery."
  },
  {
    id: 425,
    difficulty: "medium",
    category: "scenarios",
    question: "You want to run a web application that requires a database. You don't want to manage the underlying database software or patching. Which service type are you looking for?",
    options: [
      "Infrastructure as a Service (IaaS)",
      "Managed Service / Platform as a Service (PaaS)",
      "Software as a Service (SaaS)",
      "On-premises"
    ],
    answer: 1,
    explanation: "Managed services like RDS handle the administration and maintenance of the software.",
    hint: "AWS manages the DB."
  },
  {
    id: 426,
    difficulty: "hard",
    category: "security",
    question: "What is an 'AWS Nitro Enclave'?",
    options: [
      "A type of physical data center",
      "Isolated compute environments to further protect and securely process highly sensitive data such as PII or financial data within EC2 instances",
      "A fast type of SSD",
      "A login portal for admins"
    ],
    answer: 1,
    explanation: "Nitro Enclaves are isolated, hardened, and highly constrained virtual machines.",
    hint: "Isolated data processing."
  },
  {
    id: 427,
    difficulty: "medium",
    category: "management",
    question: "Which service allows you to centrally manage and automate patch management for a fleet of EC2 and on-premises servers?",
    options: [
      "AWS CloudFormation",
      "AWS Systems Manager (SSM) Patch Manager",
      "AWS Config",
      "AWS OpsWorks"
    ],
    answer: 1,
    explanation: "SSM Patch Manager automates the process of patching managed instances with security related updates.",
    hint: "Automated patching."
  },
  {
    id: 428,
    difficulty: "hard",
    category: "scenarios",
    question: "A developer wants to build and deploy a mobile app quickly with features like authentication, storage, and APIs. Which AWS development platform is specifically designed for this?",
    options: [
      "AWS Amplify",
      "AWS Lambda",
      "AWS Elastic Beanstalk",
      "Amazon Cognito"
    ],
    answer: 0,
    explanation: "Amplify is a set of tools and services that helps frontend web and mobile developers build scalable full-stack applications.",
    hint: "Full-stack mobile/web dev."
  },
  {
    id: 429,
    difficulty: "medium",
    category: "security",
    question: "Which service protects your AWS resources from common Distributed Denial of Service (DDoS) attacks at no additional charge?",
    options: [
      "AWS WAF",
      "AWS Shield Standard",
      "AWS Shield Advanced",
      "Amazon GuardDuty"
    ],
    answer: 1,
    explanation: "Shield Standard provides automatic protection for all AWS customers for L3 and L4 attacks.",
    hint: "Free DDoS protection."
  },
  {
    id: 430,
    difficulty: "hard",
    category: "analytics",
    question: "What is 'AWS Lake Formation'?",
    options: [
      "A way to create a physical lake at a data center",
      "A service that makes it easy to set up a secure data lake in days, managing data ingestion, cleansing, and centralized access control",
      "A type of S3 bucket",
      "A networking tool"
    ],
    answer: 1,
    explanation: "Lake Formation simplifies and automates many of the complex manual steps required to create a data lake.",
    hint: "Managed Data Lake setup."
  },
  {
    id: 431,
    difficulty: "medium",
    category: "scenarios",
    question: "A company needs to analyze log files that are continuously being uploaded to S3. They want to be able to run complex SQL joins across several months of data. Which service is most appropriate?",
    options: [
      "Amazon Athena",
      "Amazon Redshift",
      "Amazon DynamoDB",
      "AWS Glue DataBrew"
    ],
    answer: 1,
    explanation: "For complex analytics and large-scale data warehousing (OLAP), Redshift is more performant than Athena.",
    hint: "Data Warehouse for joins."
  },
  {
    id: 432,
    difficulty: "hard",
    category: "ai_ml",
    question: "Which AWS service allows you to extract text, handwriting, and data from scanned documents beyond simple OCR (like recognizing tables and forms)?",
    options: [
      "Amazon Rekognition",
      "Amazon Textract",
      "Amazon Comprehend",
      "Amazon Kendra"
    ],
    answer: 1,
    explanation: "Textract is specifically designed for document data extraction.",
    hint: "Advanced OCR + Forms."
  },
  {
    id: 433,
    difficulty: "medium",
    category: "scenarios",
    question: "You want to ensure that your AWS resources are deployed in a specific region for data residency compliance. Where do you specify this?",
    options: [
      "In the IAM user policy",
      "When creating/launching the resource in the console, CLI, or API",
      "In the S3 bucket policy",
      "In the VPC settings"
    ],
    answer: 1,
    explanation: "Resource deployment is regional, and you must select the region at the time of creation.",
    hint: "Regional selection."
  },
  {
    id: 434,
    difficulty: "hard",
    category: "storage",
    question: "What is 'Amazon FSx for NetApp ONTAP'?",
    options: [
      "A type of S3 bucket",
      "A storage service that provides fully managed shared storage built on NetApp's popular ONTAP file system, supporting NFS, SMB, and iSCSI",
      "A backup tool for NetApp",
      "A way to speed up EBS"
    ],
    answer: 1,
    explanation: "It allows customers to move their on-premises NetApp workloads to AWS without changing code or management processes.",
    hint: "Managed NetApp storage."
  },
  {
    id: 435,
    difficulty: "medium",
    category: "management",
    question: "Which AWS service provides personalized recommendations for cost optimization, security, and performance based on your actual usage?",
    options: [
      "AWS Trusted Advisor",
      "AWS Cost Explorer",
      "AWS Config",
      "Amazon Inspector"
    ],
    answer: 0,
    explanation: "Trusted Advisor inspects your environment and makes recommendations to follow best practices.",
    hint: "AWS's virtual consultant."
  },
  {
    id: 436,
    difficulty: "hard",
    category: "governance",
    question: "A company wants to prevent any user (including administrators) from deleting log files in a specific S3 bucket for 3 years. Which feature should they use?",
    options: [
      "S3 Versioning",
      "S3 Object Lock (Compliance Mode)",
      "IAM Policy with Deny",
      "S3 Lifecycle Policy"
    ],
    answer: 1,
    explanation: "In compliance mode, a protected object version can't be overwritten or deleted by any user, including the root user.",
    hint: "WORM (Write Once Read Many)."
  },
  {
    id: 437,
    difficulty: "medium",
    category: "scenarios",
    question: "Which service is a managed message broker service for Apache ActiveMQ and RabbitMQ?",
    options: [
      "Amazon SQS",
      "Amazon SNS",
      "Amazon MQ",
      "Amazon EventBridge"
    ],
    answer: 2,
    explanation: "Amazon MQ makes it easy to migrate existing messaging applications to the cloud using industry-standard protocols.",
    hint: "Managed ActiveMQ/RabbitMQ."
  },
  {
    id: 438,
    difficulty: "hard",
    category: "scenarios",
    question: "A company needs to host a website that requires very low latency for users in Japan, but the origin server is in the US. Which CloudFront feature helps improve the delivery of the 'Dynamic' content?",
    options: [
      "Edge Caching",
      "S3 Transfer Acceleration",
      "CloudFront's Global Network Backbone",
      "Reserved Instances"
    ],
    answer: 2,
    explanation: "CloudFront speeds up dynamic content delivery by routing requests over the optimized AWS global network instead of the public internet.",
    hint: "Backbone optimization."
  },
  {
    id: 439,
    difficulty: "medium",
    category: "management",
    question: "Which service provides a central place to view and manage your AWS costs and usage over time, including predicting future costs?",
    options: [
      "AWS Budgets",
      "AWS Cost Explorer",
      "AWS Pricing Calculator",
      "AWS Artifact"
    ],
    answer: 1,
    explanation: "Cost Explorer allows you to visualize and forecast your AWS spending.",
    hint: "Cost visualization."
  },
  {
    id: 440,
    difficulty: "hard",
    category: "security",
    question: "What is an 'AWS PrivateLink' Interface VPC Endpoint?",
    options: [
      "A type of VPN",
      "An elastic network interface with a private IP address from the IP address range of your subnet that serves as an entry point for traffic destined to a supported service",
      "A public IP address for S3",
      "A physical cable from AWS"
    ],
    answer: 1,
    explanation: "Interface endpoints use PrivateLink to securely connect VPCs to services without internet gateways.",
    hint: "Private IP for a service."
  },
  {
    id: 441,
    difficulty: "medium",
    category: "scenarios",
    question: "You want to host a simple WordPress blog on AWS with a low, predictable monthly price. Which service is specifically designed for this?",
    options: [
      "Amazon EC2",
      "Amazon Lightsail",
      "AWS Elastic Beanstalk",
      "AWS Amplify"
    ],
    answer: 1,
    explanation: "Lightsail provides an easy-to-use virtual private server (VPS) with bundled compute, storage, and networking.",
    hint: "Easy, low-cost VPS."
  },
  {
    id: 442,
    difficulty: "hard",
    category: "databases",
    question: "Which Amazon Aurora feature allows you to have a single primary database for writes and multiple standby instances that can be promoted to primary in seconds?",
    options: [
      "Read Replicas",
      "Aurora Multi-AZ",
      "Aurora Serverless",
      "Aurora Global Database"
    ],
    answer: 1,
    explanation: "Aurora Multi-AZ provides high availability by maintaining replicas in different AZs.",
    hint: "Fast failover."
  },
  {
    id: 443,
    difficulty: "medium",
    category: "scenarios",
    question: "Which service is a fully managed service that provides every developer and data scientist with the ability to build, train, and deploy machine learning (ML) models quickly?",
    options: [
      "Amazon Comprehend",
      "Amazon SageMaker",
      "Amazon Rekognition",
      "Amazon Lex"
    ],
    answer: 1,
    explanation: "SageMaker is the core ML platform service on AWS.",
    hint: "End-to-end ML platform."
  },
  {
    id: 444,
    difficulty: "hard",
    category: "scenarios",
    question: "A company needs to store a large amount of archival data that is rarely accessed. They need the ability to retrieve the data in 1-5 minutes if needed. Which S3 storage class is best?",
    options: [
      "S3 Glacier Deep Archive",
      "S3 Glacier Flexible Retrieval (formerly S3 Glacier)",
      "S3 Glacier Instant Retrieval",
      "S3 Standard-IA"
    ],
    answer: 2,
    explanation: "Glacier Instant Retrieval is the only archive class that provides millisecond retrieval.",
    hint: "Archive cost, millisecond retrieval."
  },
  {
    id: 445,
    difficulty: "medium",
    category: "scenarios",
    question: "Which tool helps you estimate your monthly AWS bill before you actually create the resources?",
    options: [
      "AWS Cost Explorer",
      "AWS Pricing Calculator",
      "AWS Budgets",
      "AWS Trusted Advisor"
    ],
    answer: 1,
    explanation: "The Pricing Calculator is used for upfront cost estimation.",
    hint: "Cost estimation tool."
  },
  {
    id: 446,
    difficulty: "hard",
    category: "compute",
    question: "What is an 'AWS Outposts' rack?",
    options: [
      "A storage shelf in a data center",
      "A fully managed service that extends AWS infrastructure, services, APIs, and tools to customer premises",
      "A backup server for AWS",
      "A type of physical firewall"
    ],
    answer: 1,
    explanation: "Outposts provides a consistent hybrid experience by running AWS hardware in your own data center.",
    hint: "AWS in your data center."
  },
  {
    id: 447,
    difficulty: "medium",
    category: "scenarios",
    question: "Which service allows you to run code without provisioning or managing servers, and you only pay for the compute time you consume?",
    options: [
      "Amazon EC2",
      "AWS Lambda",
      "AWS Elastic Beanstalk",
      "AWS Fargate"
    ],
    answer: 1,
    explanation: "Lambda is the primary serverless compute service.",
    hint: "Serverless functions."
  },
  {
    id: 448,
    difficulty: "hard",
    category: "scenarios",
    question: "A company needs to move data from an on-premises Hadoop cluster to Amazon S3. They want a solution that handles data transfers at scale and minimizes management overhead. Which service is best?",
    options: [
      "AWS DataSync",
      "AWS Snowball",
      "AWS DMS",
      "AWS Transfer Family"
    ],
    answer: 0,
    explanation: "DataSync is optimized for network-based transfers from on-premises storage systems.",
    hint: "Network data transfer."
  },
  {
    id: 449,
    difficulty: "medium",
    category: "scenarios",
    question: "You want to receive a notification whenever a new file is uploaded to an S3 bucket. Which combination of services can achieve this?",
    options: [
      "S3 Event Notifications and Amazon SNS",
      "CloudTrail and S3",
      "VPC Flow Logs and Lambda",
      "Trusted Advisor and SES"
    ],
    answer: 0,
    explanation: "S3 can natively trigger an SNS topic when an event occurs.",
    hint: "Bucket event alerts."
  },
  {
    id: 450,
    difficulty: "hard",
    category: "security",
    question: "What is 'AWS Security Hub'?",
    options: [
      "A physical security office",
      "A cloud security posture management (CSPM) service that performs security best practice checks, aggregates alerts, and enables automated remediation",
      "A type of VPC",
      "A login page for security teams"
    ],
    answer: 1,
    explanation: "Security Hub provides a centralized view to manage security findings from various AWS services.",
    hint: "Security posture dashboard."
  }
];

// Append to main database
questionBank.push(...awsBatch9);
