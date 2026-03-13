/* ======================================================
   AZURE MASTER QUESTION BANK (Batch 1/7)
   Topics: Governance, Entra ID (Identity), Core Compute, Networking
   ====================================================== */

var batch1 = [
  {
    id: 1,
    difficulty: "easy",
    category: "governance",
    question: "Which Azure service allows you to create, assign, and manage policies that enforce different rules over your resources?",
    options: [
      "Azure Advisor",
      "Azure Policy",
      "Azure Blueprints",
      "Management Groups"
    ],
    answer: 1,
    explanation: "Azure Policy helps to enforce organizational standards and to assess compliance at-scale.",
    hint: "Think 'Enforcement'."
  },
  {
    id: 2,
    difficulty: "medium",
    category: "identity",
    question: "What is the new name for Azure Active Directory (Azure AD)?",
    options: [
      "Azure Identity Manager",
      "Microsoft Entra ID",
      "Microsoft ID Protection",
      "Azure Active Directory v2"
    ],
    answer: 1,
    explanation: "Microsoft rebranded Azure Active Directory to Microsoft Entra ID in late 2023 to unify identity products.",
    hint: "Starts with 'E'."
  },
  {
    id: 3,
    difficulty: "hard",
    category: "networking",
    question: "You need to connect an on-premises datacenter to Azure with a dedicated, private connection that does not go over the public internet. Which service should you use?",
    options: [
      "Site-to-Site VPN",
      "Azure ExpressRoute",
      "Point-to-Site VPN",
      "Azure Virtual WAN"
    ],
    answer: 1,
    explanation: "ExpressRoute provides a private connection to Microsoft services with higher security, reliability, and speeds than typical internet-based connections.",
    hint: "Dedicated private connection."
  },
  {
    id: 4,
    difficulty: "medium",
    category: "cost",
    question: "Which tool provides recommendations to reduce your Azure spend by identifying idle or underutilized resources?",
    options: [
      "Azure Cost Management",
      "Azure Advisor",
      "Azure Pricing Calculator",
      "Azure Monitor"
    ],
    answer: 1,
    explanation: "Azure Advisor analyzes your configurations and usage telemetry to recommend ways to optimize for cost, security, and performance.",
    hint: "A personalized consultant."
  },
  {
    id: 5,
    difficulty: "easy",
    category: "compute",
    question: "Which Azure compute service is considered 'Serverless' and allows you to run code triggered by events?",
    options: [
      "Azure Virtual Machines",
      "Azure Functions",
      "Azure App Service",
      "Azure Batch"
    ],
    answer: 1,
    explanation: "Azure Functions is an event-driven, serverless compute platform that helps you develop more efficiently with a compute-on-demand model.",
    hint: "FaaS (Function as a Service)."
  },
  {
    id: 6,
    difficulty: "hard",
    category: "identity",
    question: "In Microsoft Entra ID, which feature allows you to define specific criteria (like location or device compliance) before granting a user access to an application?",
    options: [
      "Role-Based Access Control (RBAC)",
      "Conditional Access",
      "Privileged Identity Management (PIM)",
      "Access Reviews"
    ],
    answer: 1,
    explanation: "Conditional Access is the tool used by Microsoft Entra ID to bring signals together, to make decisions, and enforce organizational policies.",
    hint: "The 'If-Then' of Azure Security."
  },
  {
    id: 7,
    difficulty: "medium",
    category: "networking",
    question: "What is the primary function of an Azure Network Security Group (NSG)?",
    options: [
      "To route traffic between different VNets",
      "To filter network traffic to and from Azure resources in an Azure virtual network",
      "To encrypt all traffic automatically",
      "To provide DNS resolution for Azure VMs"
    ],
    answer: 1,
    explanation: "An NSG contains security rules that allow or deny inbound or outbound network traffic based on IP, port, and protocol.",
    hint: "Layer 4 firewalling."
  },
  {
    id: 8,
    difficulty: "hard",
    category: "governance",
    question: "Which Azure resource defines a set of standard resources, policies, and role assignments to ensure a repeatable environment for new subscriptions?",
    options: [
      "Azure Policy",
      "Azure Blueprints",
      "Resource Groups",
      "ARM Templates"
    ],
    answer: 1,
    explanation: "Azure Blueprints allows architects to define a repeatable set of Azure resources that implements and adheres to an organization's standards.",
    hint: "A 'package' of governance."
  },
  {
    id: 9,
    difficulty: "medium",
    category: "storage",
    question: "Which storage tier is best suited for data that is rarely accessed and must be stored for at least 180 days?",
    options: [
      "Hot Tier",
      "Cool Tier",
      "Archive Tier",
      "Premium Tier"
    ],
    answer: 2,
    explanation: "The Archive tier has the lowest storage cost but higher data retrieval costs and latency compared to Hot and Cool tiers.",
    hint: "Coldest possible storage."
  },
  {
    id: 10,
    difficulty: "medium",
    category: "compute",
    question: "What is the SLA for a single instance Virtual Machine in Azure, provided it uses Premium SSD for all disks?",
    options: [
      "99.0%",
      "99.9%",
      "99.95%",
      "99.99%"
    ],
    answer: 1,
    explanation: "For any Single Instance Virtual Machine using premium SSD for all operating system disks and data disks, Microsoft guarantees connectivity of at least 99.9%.",
    hint: "Three nines."
  },
  {
    id: 11,
    difficulty: "medium",
    category: "identity",
    question: "Which service enables you to manage, control, and monitor access to important resources in your organization, including 'just-in-time' access?",
    options: [
      "Entra ID Protection",
      "Privileged Identity Management (PIM)",
      "Entra ID Governance",
      "Security Center"
    ],
    answer: 1,
    explanation: "PIM allows you to manage 'just-in-time' (JIT) access to Azure and Entra resources, reducing the risk of excessive permissions.",
    hint: "Think 'Elevated Access'."
  },
  {
    id: 12,
    difficulty: "easy",
    category: "architecture",
    question: "Azure regions are organized into pairs. What is the minimum distance between region pairs recommended by Microsoft?",
    options: [
      "50 miles",
      "100 miles",
      "300 miles",
      "1000 miles"
    ],
    answer: 2,
    explanation: "Azure maintains a minimum of 300 miles (480 km) of separation between region pairs to ensure business continuity during large-scale disasters.",
    hint: "Three hundred."
  },
  {
    id: 13,
    difficulty: "medium",
    category: "cost",
    question: "You want to receive an alert when your monthly Azure spend reaches 80% of your budget. Where would you configure this?",
    options: [
      "Azure Monitor",
      "Azure Cost Management + Billing",
      "Azure Advisor",
      "Azure Service Health"
    ],
    answer: 1,
    explanation: "Cost Management allows you to create budgets and set up automated alerts based on actual or forecasted costs.",
    hint: "Where you see the 'money'."
  },
  {
    id: 14,
    difficulty: "hard",
    category: "scenarios",
    question: "A company needs to deploy a legacy web application that requires custom OS modifications. Which Azure service is the best fit?",
    options: [
      "Azure App Service",
      "Azure Container Instances",
      "Azure Virtual Machines (IaaS)",
      "Azure Static Web Apps"
    ],
    answer: 2,
    explanation: "IaaS (Virtual Machines) provides full control over the OS, allowing for custom configurations that PaaS services like App Service do not support.",
    hint: "Full OS access needed."
  },
  {
    id: 15,
    difficulty: "easy",
    category: "networking",
    question: "What is the purpose of a Virtual Network (VNet) Peering?",
    options: [
      "To connect a VNet to an on-premises network",
      "To connect two Azure virtual networks together over the Microsoft backbone",
      "To create a subnet within a VNet",
      "To provide internet access to VMs"
    ],
    answer: 1,
    explanation: "VNet peering allows you to seamlessly connect two Azure VNets so they appear as one for connectivity purposes.",
    hint: "Connecting two networks."
  },
  {
    id: 16,
    difficulty: "hard",
    category: "identity",
    question: "What is the function of a 'Service Principal' in Azure?",
    options: [
      "It is a user account for IT administrators",
      "It is an identity created for use with applications, hosted services, and automated tools to access Azure resources",
      "It is a role given to users in the subscription",
      "It is a guest account for external vendors"
    ],
    answer: 1,
    explanation: "A service principal is essentially a 'machine identity' for an application to interact with Azure APIs.",
    hint: "Identity for an app."
  },
  {
    id: 17,
    difficulty: "medium",
    category: "storage",
    question: "Which Azure Storage replication strategy provides the highest availability by copying data across three separate availability zones in the primary region?",
    options: [
      "LRS (Locally Redundant Storage)",
      "GRS (Geo-Redundant Storage)",
      "ZRS (Zone-Redundant Storage)",
      "RA-GRS"
    ],
    answer: 2,
    explanation: "ZRS synchronously replicates data across three Azure availability zones in the primary region.",
    hint: "Z for Zone."
  },
  {
    id: 18,
    difficulty: "medium",
    category: "networking",
    question: "Which Azure service acts as a global load balancer, routing traffic based on the lowest latency to the nearest application endpoint?",
    options: [
      "Azure Application Gateway",
      "Azure Front Door",
      "Azure Load Balancer",
      "Azure Traffic Manager"
    ],
    answer: 1,
    explanation: "Azure Front Door is a global, scalable entry point that uses the Microsoft global edge network to create fast, secure, and widely scalable web apps.",
    hint: "Global L7 entry point."
  },
  {
    id: 19,
    difficulty: "easy",
    category: "governance",
    question: "True or False: Deleting a Resource Group will also delete all resources contained within it.",
    options: [
      "True",
      "False"
    ],
    answer: 0,
    explanation: "Resource Groups act as a container; deleting the container deletes all metadata and the resources inside it.",
    hint: "The container logic."
  },
  {
    id: 20,
    difficulty: "hard",
    category: "scenarios",
    question: "You need to store secrets such as API keys and database connection strings securely. Which Azure service should you use?",
    options: [
      "Azure Storage Accounts",
      "Azure Key Vault",
      "Azure App Configuration",
      "Entra ID Managed Identities"
    ],
    answer: 1,
    explanation: "Azure Key Vault is designed for securely storing and accessing secrets, keys, and certificates.",
    hint: "The 'Safe' of Azure."
  },
  {
    id: 21,
    difficulty: "medium",
    category: "identity",
    question: "What is the primary difference between RBAC and ABAC in Azure?",
    options: [
      "RBAC is for users; ABAC is for machines",
      "RBAC is based on roles; ABAC uses attributes (tags) for fine-grained access control",
      "RBAC is free; ABAC requires a license",
      "There is no difference"
    ],
    answer: 1,
    explanation: "Azure RBAC focuses on 'Who can do what', while Azure ABAC (Attribute-Based Access Control) adds conditions based on resource attributes like tags.",
    hint: "Attribute-based."
  },
  {
    id: 22,
    difficulty: "easy",
    category: "compute",
    question: "Which Azure service provides a platform to run Docker containers without managing the underlying virtual machines?",
    options: [
      "Azure Virtual Machines",
      "Azure Container Instances (ACI)",
      "Azure Kubernetes Service (AKS)",
      "Azure App Service for Containers"
    ],
    answer: 1,
    explanation: "ACI is the fastest and simplest way to run a container in Azure, without having to manage any virtual machines.",
    hint: "Fast, serverless containers."
  },
  {
    id: 23,
    difficulty: "hard",
    category: "networking",
    question: "What is the purpose of an Azure Application Security Group (ASG)?",
    options: [
      "To provide malware protection for web apps",
      "To group VMs and define network security policies based on those groups, instead of IP addresses",
      "To encrypt data in transit",
      "To manage SSL certificates for VNets"
    ],
    answer: 1,
    explanation: "ASGs let you configure network security as a natural extension of an application's structure, grouping VMs together for NSG rule application.",
    hint: "Logical grouping for NSGs."
  },
  {
    id: 24,
    difficulty: "medium",
    category: "identity",
    question: "Which feature of Entra ID enables users to access both cloud and on-premises applications with a single set of credentials?",
    options: [
      "Multifactor Authentication",
      "Single Sign-On (SSO)",
      "Self-Service Password Reset",
      "Identity Protection"
    ],
    answer: 1,
    explanation: "SSO allows users to sign in once and gain access to all their applications without re-entering credentials.",
    hint: "Sign in once."
  },
  {
    id: 25,
    difficulty: "medium",
    category: "architecture",
    question: "Which Azure tool provides a 'blueprint' for high-availability by ensuring resources are physically separated across different datacenters within a single region?",
    options: [
      "Resource Groups",
      "Availability Sets",
      "Availability Zones",
      "Region Pairs"
    ],
    answer: 2,
    explanation: "Availability Zones are physically separate datacenters within an Azure region, providing redundancy against datacenter-level failures.",
    hint: "Individual datacenters."
  },
  {
    id: 26,
    difficulty: "hard",
    category: "governance",
    question: "You want to prevent accidental deletion of a production database. Which feature should you apply?",
    options: [
      "RBAC Deny Assignment",
      "Azure Policy",
      "Resource Lock (CanNotDelete)",
      "Management Group Lock"
    ],
    answer: 2,
    explanation: "Resource locks can be applied to subscriptions, resource groups, or resources to prevent accidental deletion or modification.",
    hint: "Locks the resource."
  },
  {
    id: 27,
    difficulty: "medium",
    category: "networking",
    question: "Which load balancer should you use for non-HTTP(S) traffic at the transport layer (Layer 4)?",
    options: [
      "Azure Application Gateway",
      "Azure Load Balancer",
      "Azure Front Door",
      "Traffic Manager"
    ],
    answer: 1,
    explanation: "Azure Load Balancer is a Layer 4 (TCP, UDP) load balancer that distributes incoming traffic among healthy service instances.",
    hint: "L4 vs L7."
  },
  {
    id: 28,
    difficulty: "easy",
    category: "compute",
    question: "What is the primary benefit of using Azure Virtual Machine Scale Sets?",
    options: [
      "It makes VMs run faster",
      "It allows you to deploy and manage a group of identical, auto-scaling VMs",
      "It provides free backup for VMs",
      "It allows you to run Linux on Windows"
    ],
    answer: 1,
    explanation: "Scale sets allow you to automatically increase or decrease the number of VM instances in response to demand.",
    hint: "Auto-scaling VMs."
  },
  {
    id: 29,
    difficulty: "hard",
    category: "identity",
    question: "In Azure RBAC, what happens if a user is granted 'Contributor' role at the Resource Group level and 'Reader' role at the Subscription level?",
    options: [
      "The user will only have Reader access everywhere",
      "The user will have Contributor access to the specific Resource Group and Reader access to everything else in the subscription",
      "Access will be denied due to conflict",
      "The user will be promoted to Owner"
    ],
    answer: 1,
    explanation: "Azure RBAC permissions are additive. The user gets the highest permission assigned for a specific scope.",
    hint: "Highest permission wins at scope."
  },
  {
    id: 30,
    difficulty: "medium",
    category: "storage",
    question: "Which storage type is best for storing massive amounts of unstructured data like videos, images, and logs?",
    options: [
      "Azure Files",
      "Azure Tables",
      "Azure Blob Storage",
      "Azure Queues"
    ],
    answer: 2,
    explanation: "Blob (Binary Large Object) storage is optimized for storing massive amounts of unstructured data.",
    hint: "Unstructured data."
  },
  {
    id: 31,
    difficulty: "easy",
    category: "scenarios",
    question: "A startup wants to host a simple website without managing servers or paying for idle time. Which is the most cost-effective solution?",
    options: [
      "Azure Virtual Machines",
      "Azure Static Web Apps",
      "Azure Dedicated Host",
      "Azure App Service (Premium Tier)"
    ],
    answer: 1,
    explanation: "Azure Static Web Apps is highly cost-effective for static content and includes integrated serverless functions.",
    hint: "Static content."
  },
  {
    id: 32,
    difficulty: "medium",
    category: "networking",
    question: "Which Azure service provides a managed Firewall as a Service with built-in high availability and unrestricted cloud scalability?",
    options: [
      "Network Security Group",
      "Azure Firewall",
      "Azure WAF",
      "Azure Bastion"
    ],
    answer: 1,
    explanation: "Azure Firewall is a managed, cloud-based network security service that protects your Azure Virtual Network resources.",
    hint: "L3-L7 managed firewall."
  },
  {
    id: 33,
    difficulty: "hard",
    category: "architecture",
    question: "What is the function of Azure 'Management Groups'?",
    options: [
      "To group users for billing",
      "To provide a level of scope above subscriptions to manage policy and compliance across multiple subscriptions",
      "To manage on-premises servers",
      "To group Virtual Machines for scaling"
    ],
    answer: 1,
    explanation: "Management groups help you manage access, policy, and compliance for multiple subscriptions by grouping them into a hierarchy.",
    hint: "Above the subscription."
  },
  {
    id: 34,
    difficulty: "medium",
    category: "compute",
    question: "Which Azure service allows you to host web applications, RESTful APIs, and mobile backends without managing infrastructure?",
    options: [
      "Azure Functions",
      "Azure App Service",
      "Azure Virtual Machines",
      "Azure Container Instances"
    ],
    answer: 1,
    explanation: "Azure App Service is an HTTP-based service for hosting web applications, REST APIs, and mobile backends (PaaS).",
    hint: "Web App PaaS."
  },
  {
    id: 35,
    difficulty: "hard",
    category: "networking",
    question: "What is the difference between Azure Public IP 'Basic' SKU and 'Standard' SKU?",
    options: [
      "Standard is free; Basic is paid",
      "Standard supports Availability Zones and is secure by default (requires NSG); Basic is open by default",
      "Basic is faster than Standard",
      "Standard only works with Windows"
    ],
    answer: 1,
    explanation: "Standard SKU Public IPs are zone-redundant and require a Network Security Group to allow traffic. Basic SKUs are open to the internet by default.",
    hint: "Zones and Security."
  },
  {
    id: 36,
    difficulty: "medium",
    category: "identity",
    question: "Which Entra ID feature helps identify and protect against identity-based risks like leaked credentials or 'impossible travel'?",
    options: [
      "Privileged Identity Management",
      "Entra ID Identity Protection",
      "Entra ID Governance",
      "Conditional Access"
    ],
    answer: 1,
    explanation: "Identity Protection uses machine learning to detect and remediate identity-based risks.",
    hint: "Risk detection."
  },
  {
    id: 37,
    difficulty: "easy",
    category: "governance",
    question: "What is the primary purpose of 'Tags' in Azure?",
    options: [
      "To increase resource performance",
      "To provide metadata to logically organize resources into a taxonomy (e.g., Dept: Finance)",
      "To encrypt resources",
      "To bypass Azure Policy"
    ],
    answer: 1,
    explanation: "Tags are name-value pairs that help you categorize resources and view consolidated billing.",
    hint: "Metadata for billing."
  },
  {
    id: 38,
    difficulty: "hard",
    category: "networking",
    question: "What is 'Azure Bastion'?",
    options: [
      "A type of firewall",
      "A service that provides secure and seamless RDP/SSH access to VMs directly via the Azure Portal over SSL",
      "A storage encryption tool",
      "A database proxy"
    ],
    answer: 1,
    explanation: "Azure Bastion allows you to access VMs without exposing them via public IP addresses.",
    hint: "RDP over HTTPS."
  },
  {
    id: 39,
    difficulty: "medium",
    category: "storage",
    question: "Which storage service provides fully managed file shares in the cloud that are accessible via the SMB or NFS protocols?",
    options: [
      "Azure Blob Storage",
      "Azure Files",
      "Azure Data Lake Storage",
      "Azure Disk Storage"
    ],
    answer: 1,
    explanation: "Azure Files offers fully managed file shares in the cloud that can be mounted by on-premises or cloud machines.",
    hint: "Cloud SMB shares."
  },
  {
    id: 40,
    difficulty: "hard",
    category: "compute",
    question: "When using Azure Kubernetes Service (AKS), who is responsible for managing the Control Plane?",
    options: [
      "The Customer",
      "Microsoft",
      "A Third-party vendor",
      "The Docker engine"
    ],
    answer: 1,
    explanation: "In AKS, Microsoft manages the Kubernetes Control Plane (API server, etcd) for free; you only pay for the worker nodes.",
    hint: "Managed K8s."
  },
  {
    id: 41,
    difficulty: "medium",
    category: "identity",
    question: "What is a 'Managed Identity' in Azure?",
    options: [
      "A user account managed by Microsoft support",
      "An identity for Azure resources that eliminates the need for developers to manage credentials in code",
      "A premium user license",
      "A password policy"
    ],
    answer: 1,
    explanation: "Managed identities provide an identity for applications to use when connecting to resources that support Entra authentication.",
    hint: "Passwordless for resources."
  },
  {
    id: 42,
    difficulty: "easy",
    category: "cost",
    question: "Which Azure cost tool is used to estimate the cost of a solution before you deploy it?",
    options: [
      "Azure Cost Management",
      "Azure Pricing Calculator",
      "TCO Calculator",
      "Azure Advisor"
    ],
    answer: 1,
    explanation: "The Pricing Calculator is used to estimate monthly costs based on your expected resource usage.",
    hint: "Estimator tool."
  },
  {
    id: 43,
    difficulty: "hard",
    category: "networking",
    question: "What is an Azure Private Link?",
    options: [
      "A faster internet connection",
      "A service that enables you to access Azure PaaS Services (like SQL or Storage) privately over a private IP address in your VNet",
      "A VPN between two regions",
      "A public DNS service"
    ],
    answer: 1,
    explanation: "Private Link ensures that traffic stays within the Microsoft network and never traverses the public internet.",
    hint: "Private IP for PaaS."
  },
  {
    id: 44,
    difficulty: "medium",
    category: "scenarios",
    question: "You need to process millions of messages per second in real-time. Which Azure service is designed for big data streaming?",
    options: [
      "Azure Service Bus",
      "Azure Event Hubs",
      "Azure Queue Storage",
      "Azure Logic Apps"
    ],
    answer: 1,
    explanation: "Azure Event Hubs is a big data streaming platform and event ingestion service.",
    hint: "Big data ingestion."
  },
  {
    id: 45,
    difficulty: "hard",
    category: "governance",
    question: "What is the purpose of 'Azure Resource Graph'?",
    options: [
      "To create visual diagrams of resources",
      "To provide efficient and performant resource exploration by allowing you to query at scale across a set of subscriptions",
      "To monitor CPU usage",
      "To build web apps"
    ],
    answer: 1,
    explanation: "Resource Graph allows you to run complex KQL (Kusto Query Language) queries to find specific resources across your entire Azure tenant.",
    hint: "Query resources at scale."
  },
  {
    id: 46,
    difficulty: "easy",
    category: "architecture",
    question: "Which Azure region type is designed to meet specific government security and compliance requirements (e.g., US Gov Virginia)?",
    options: [
      "Public Regions",
      "Specialized Regions (Sovereign)",
      "Availability Zones",
      "Edge Zones"
    ],
    answer: 1,
    explanation: "Specialized/Sovereign regions (like Azure Government) are physically isolated instances of Azure for government entities.",
    hint: "Government isolation."
  },
  {
    id: 47,
    difficulty: "medium",
    category: "storage",
    question: "What is 'Blob Versioning' in Azure Storage?",
    options: [
      "Updating the software version of the storage account",
      "Automatically maintaining previous versions of an object when it is modified or deleted",
      "Changing the storage account from GPv1 to GPv2",
      "Converting blobs to files"
    ],
    answer: 1,
    explanation: "Blob versioning allows you to restore an earlier version of a blob to recover from accidental deletion or modification.",
    hint: "Point-in-time recovery for blobs."
  },
  {
    id: 48,
    difficulty: "hard",
    category: "compute",
    question: "What is an 'Azure Dedicated Host'?",
    options: [
      "A server you keep in your office",
      "A service that provides physical servers—dedicated to your Azure subscription—hosting your VMs only",
      "A high-speed internet line",
      "A support plan level"
    ],
    answer: 1,
    explanation: "Dedicated hosts provide hardware isolation at the physical server level, helpful for compliance or specific licensing requirements.",
    hint: "Single-tenant hardware."
  },
  {
    id: 49,
    difficulty: "medium",
    category: "networking",
    question: "Which Azure service provides a centralized way to manage and protect all your VNets from DDoS attacks?",
    options: [
      "Azure Firewall",
      "Azure DDoS Protection (Standard/Network Protection)",
      "Network Security Group",
      "Azure Bastion"
    ],
    answer: 1,
    explanation: "DDoS Protection Network Protection provides enhanced DDoS mitigation capabilities for your applications and resources.",
    hint: "Anti-DDoS."
  },
  {
    id: 50,
    difficulty: "hard",
    category: "identity",
    question: "What is 'Entra ID Connect'?",
    options: [
      "A mobile app for logging in",
      "A tool that integrates on-premises Active Directory with Microsoft Entra ID by synchronizing identities",
      "A hardware firewall",
      "A browser extension"
    ],
    answer: 1,
    explanation: "Entra ID Connect (formerly Azure AD Connect) provides the bridge between on-premise AD and Entra ID.",
    hint: "Hybrid identity bridge."
  }
];
/* ======================================================
   AZURE MASTER QUESTION BANK (Batch 2/7)
   Topics: Databases, Advanced Security, Hybrid, Automation
   ====================================================== */

const batch2 = [
  {
    id: 51,
    difficulty: "medium",
    category: "databases",
    question: "Which Azure Cosmos DB consistency level offers the lowest latency but does not guarantee that data will be read in the order it was written?",
    options: [
      "Strong",
      "Bounded Staleness",
      "Session",
      "Eventual"
    ],
    answer: 3,
    explanation: "Eventual consistency is the weakest form of consistency but offers the lowest latency and highest availability.",
    hint: "Think 'Asynchronous'."
  },
  {
    id: 52,
    difficulty: "hard",
    category: "security",
    question: "Which Microsoft service provides a cloud-native SIEM and SOAR solution for intelligent security analytics across the entire enterprise?",
    options: [
      "Microsoft Defender for Cloud",
      "Microsoft Sentinel",
      "Azure Bastion",
      "Azure Firewall"
    ],
    answer: 1,
    explanation: "Microsoft Sentinel is a scalable, cloud-native security information and event management (SIEM) and security orchestration, automation, and response (SOAR) solution.",
    hint: "SIEM/SOAR."
  },
  {
    id: 53,
    difficulty: "medium",
    category: "networking",
    question: "What is the primary difference between a VPN Gateway and ExpressRoute?",
    options: [
      "VPN is faster than ExpressRoute",
      "VPN travels over the public internet (encrypted); ExpressRoute uses a private, dedicated connection",
      "ExpressRoute is cheaper for small data transfers",
      "VPN doesn't require a gateway"
    ],
    answer: 1,
    explanation: "VPN uses the public internet as a transport with IPsec encryption. ExpressRoute bypasses the public internet entirely.",
    hint: "Public vs Private path."
  },
  {
    id: 54,
    difficulty: "hard",
    category: "automation",
    question: "Which domain-specific language (DSL) is used for deploying Azure resources using a declarative syntax, serving as a more readable alternative to JSON-based ARM templates?",
    options: [
      "Terraform",
      "Bicep",
      "Ansible",
      "PowerShell"
    ],
    answer: 1,
    explanation: "Bicep is a transparent abstraction over ARM templates, offering a cleaner syntax and better modularity.",
    hint: "Starts with 'B'."
  },
  {
    id: 55,
    difficulty: "medium",
    category: "databases",
    question: "What is the maximum size of a single database in the Azure SQL Database Business Critical tier?",
    options: [
      "1 TB",
      "4 TB",
      "100 TB",
      "Unlimited"
    ],
    answer: 1,
    explanation: "The Business Critical and General Purpose tiers typically support up to 4 TB, while Hyperscale supports up to 100 TB.",
    hint: "Not Hyperscale."
  },
  {
    id: 56,
    difficulty: "easy",
    category: "security",
    question: "Which Azure service provides a central dashboard for security posture management and threat protection for hybrid and multi-cloud workloads?",
    options: [
      "Azure Monitor",
      "Microsoft Defender for Cloud",
      "Azure Policy",
      "Entra ID"
    ],
    answer: 1,
    explanation: "Microsoft Defender for Cloud (formerly Azure Security Center) provides Cloud Security Posture Management (CSPM).",
    hint: "Protects your 'Cloud'."
  },
  {
    id: 57,
    difficulty: "hard",
    category: "networking",
    question: "What is the purpose of 'Forced Tunneling' in an Azure Virtual Network?",
    options: [
      "To speed up internet access for VMs",
      "To redirect all internet-bound traffic from Azure back to an on-premises location for inspection/auditing",
      "To bypass the Azure Firewall",
      "To encrypt data at rest"
    ],
    answer: 1,
    explanation: "Forced tunneling allows you to ensure that all traffic from your VNet to the internet goes through your on-premises VPN or ExpressRoute circuit.",
    hint: "Routing to on-prem."
  },
  {
    id: 58,
    difficulty: "medium",
    category: "compute",
    question: "What are 'Azure App Service Deployment Slots' used for?",
    options: [
      "To increase the RAM of an app",
      "To host different versions of an app (e.g., Staging) and perform zero-downtime swaps to Production",
      "To store database files",
      "To provide physical isolation for apps"
    ],
    answer: 1,
    explanation: "Slots allow you to validate app changes in a staging environment before swapping them into production.",
    hint: "Zero-downtime deployment."
  },
  {
    id: 59,
    difficulty: "hard",
    category: "scenarios",
    question: "You need to implement a highly available SQL environment that supports automatic failover between two Azure regions. Which solution should you use?",
    options: [
      "SQL Data Sync",
      "Auto-Failover Groups",
      "Geo-Replication",
      "Backup and Restore"
    ],
    answer: 1,
    explanation: "Auto-failover groups allow you to manage the replication and failover of a group of databases on a server to another region.",
    hint: "Groups for failover."
  },
  {
    id: 60,
    difficulty: "medium",
    category: "identity",
    question: "What is 'Azure AD Application Proxy' used for?",
    options: [
      "To secure the Azure Portal",
      "To provide remote access to on-premises web applications using Entra ID credentials",
      "To cache static content",
      "To block traffic from specific countries"
    ],
    answer: 1,
    explanation: "It allows users to access on-premises web apps without a VPN, using SSO through Entra ID.",
    hint: "Remote on-prem access."
  },
  {
    id: 61,
    difficulty: "medium",
    category: "cost",
    question: "How do 'Azure Reserved Instances' help reduce costs?",
    options: [
      "By deleting unused VMs",
      "By committing to a 1 or 3-year term for specific resources in exchange for a significant discount",
      "By moving data to a cheaper region",
      "By using only Linux VMs"
    ],
    answer: 1,
    explanation: "Reservations provide a discount of up to 72% compared to pay-as-you-go prices on various resources.",
    hint: "Commitment for discount."
  },
  {
    id: 62,
    difficulty: "hard",
    category: "networking",
    question: "Which Azure service is a globally distributed DNS load balancing solution that uses CNAME records to redirect traffic?",
    options: [
      "Azure Front Door",
      "Azure Application Gateway",
      "Azure Traffic Manager",
      "Azure Load Balancer"
    ],
    answer: 2,
    explanation: "Traffic Manager is DNS-based; it doesn't 'see' the traffic, it just directs the client to the right IP.",
    hint: "DNS-based routing."
  },
  {
    id: 63,
    difficulty: "medium",
    category: "storage",
    question: "What is the 'Immutable Storage' feature in Azure Blob Storage used for?",
    options: [
      "To make data transfer faster",
      "To store data in a write-once, read-many (WORM) state that cannot be deleted or modified for a specific interval",
      "To compress large files",
      "To automatically encrypt files"
    ],
    answer: 1,
    explanation: "Immutable storage is essential for compliance (like SEC rules) where records must be preserved without change.",
    hint: "WORM (Write Once Read Many)."
  },
  {
    id: 64,
    difficulty: "easy",
    category: "automation",
    question: "Which Azure tool allows you to visually orchestrate workflows by connecting different services (e.g., if an email arrives, save attachment to Blob)?",
    options: [
      "Azure Functions",
      "Azure Logic Apps",
      "Azure Batch",
      "Azure Automation"
    ],
    answer: 1,
    explanation: "Logic Apps is a low-code/no-code service for automating business processes and workflows.",
    hint: "Workflow designer."
  },
  {
    id: 65,
    difficulty: "hard",
    category: "governance",
    question: "What is an 'Azure Policy Initiative'?",
    options: [
      "A new rule created by Microsoft",
      "A collection of multiple policy definitions grouped together to track compliance for a larger goal",
      "A way to buy policies",
      "A specialized support ticket"
    ],
    answer: 1,
    explanation: "Initiatives simplify managing policies by grouping them (e.g., an initiative for PCI-DSS compliance).",
    hint: "Group of policies."
  },
  {
    id: 66,
    difficulty: "medium",
    category: "compute",
    question: "In Azure App Service, what does 'Scale Out' mean?",
    options: [
      "Increasing the CPU and RAM of the existing instance",
      "Adding more VM instances to handle increased load",
      "Moving the app to a different region",
      "Changing the pricing tier"
    ],
    answer: 1,
    explanation: "Scaling out is horizontal scaling (adding instances), while scaling up is vertical scaling (more power).",
    hint: "Horizontal scaling."
  },
  {
    id: 67,
    difficulty: "hard",
    category: "identity",
    question: "What is the difference between Entra ID 'Guest' users and 'Member' users in B2B collaboration?",
    options: [
      "Guests are always free",
      "Members have full permissions by default; Guests have restricted permissions (cannot browse directory)",
      "Guests cannot use MFA",
      "There is no difference"
    ],
    answer: 1,
    explanation: "Guest users have a restricted set of default permissions in the directory compared to Member users.",
    hint: "Directory visibility."
  },
  {
    id: 68,
    difficulty: "medium",
    category: "databases",
    question: "Which Azure database service is a fully managed version of the MariaDB, MySQL, and PostgreSQL engines?",
    options: [
      "SQL Managed Instance",
      "Azure Database for [Engine Name] (e.g., Azure Database for PostgreSQL)",
      "Azure Cosmos DB",
      "SQL Server on VM"
    ],
    answer: 1,
    explanation: "Azure provides community-based OSS database engines as a fully managed PaaS offering.",
    hint: "PaaS for OSS DBs."
  },
  {
    id: 69,
    difficulty: "easy",
    category: "networking",
    question: "Which Azure service provides a private, dedicated IP address for your VM to communicate with other resources inside the VNet?",
    options: [
      "Public IP",
      "Private IP",
      "Dynamic DNS",
      "Load Balancer IP"
    ],
    answer: 1,
    explanation: "Private IP addresses allow communication between resources in Azure without using the internet.",
    hint: "Internal only."
  },
  {
    id: 70,
    difficulty: "hard",
    category: "security",
    question: "What is 'Azure Key Vault Managed HSM'?",
    options: [
      "A software-based vault",
      "A fully managed, single-tenant, high-availability, cloud service that allows you to safeguard cryptographic keys using FIPS 140-2 Level 3 validated HSMs",
      "A backup for Key Vault",
      "A tool to manage passwords only"
    ],
    answer: 1,
    explanation: "Managed HSM is for high-compliance scenarios requiring hardware-level isolation and FIPS validation.",
    hint: "Hardware Security Module."
  },
  {
    id: 71,
    difficulty: "medium",
    category: "storage",
    question: "You need to map a drive letter from an on-premises Windows Server to Azure Storage. Which service do you use?",
    options: [
      "Azure Blob Storage",
      "Azure Files (SMB)",
      "Azure Table Storage",
      "Azure Disk Storage"
    ],
    answer: 1,
    explanation: "Azure Files supports the SMB protocol, allowing it to be mounted as a network drive.",
    hint: "SMB/NFS file shares."
  },
  {
    id: 72,
    difficulty: "hard",
    category: "compute",
    question: "What is the 'Azure Compute Gallery' used for?",
    options: [
      "To browse available VMs",
      "To manage and share custom VM images and application versions across subscriptions and regions",
      "To see screenshots of running apps",
      "To download Linux ISOs"
    ],
    answer: 1,
    explanation: "It provides a way to structure and version your custom images for global deployment.",
    hint: "Global image management."
  },
  {
    id: 73,
    difficulty: "medium",
    category: "monitoring",
    question: "Which Azure service collects, analyzes, and acts on telemetry from your cloud and on-premises environments?",
    options: [
      "Azure Advisor",
      "Azure Monitor",
      "Azure Service Health",
      "Azure Log Analytics"
    ],
    answer: 1,
    explanation: "Azure Monitor is the comprehensive solution for gathering and analyzing logs and metrics.",
    hint: "The 'Eye' of Azure."
  },
  {
    id: 74,
    difficulty: "hard",
    category: "networking",
    question: "In an Azure Load Balancer, what is 'Session Persistence' (also known as Source IP Affinity)?",
    options: [
      "Keeping the VM running forever",
      "Ensuring that all requests from a specific client IP are handled by the same backend VM instance",
      "Backing up the session data",
      "Encrypting the session"
    ],
    answer: 1,
    explanation: "This is useful for 'sticky sessions' where the app requires the user to stay on the same server.",
    hint: "Sticky sessions."
  },
  {
    id: 75,
    difficulty: "medium",
    category: "identity",
    question: "What does the 'User Administrator' role in Entra ID allow a person to do?",
    options: [
      "Delete the whole tenant",
      "Manage all aspects of users and groups, including resetting passwords for non-admins",
      "Buy new licenses",
      "Change the subscription billing"
    ],
    answer: 1,
    explanation: "The User Administrator role is focused on identity management tasks for standard users.",
    hint: "Identity management role."
  },
  {
    id: 76,
    difficulty: "easy",
    category: "scenarios",
    question: "You want to run a short-lived batch job that can be interrupted. Which VM pricing model is the cheapest?",
    options: [
      "Pay-as-you-go",
      "Reserved Instances",
      "Azure Spot Instances",
      "Dedicated Hosts"
    ],
    answer: 2,
    explanation: "Spot instances offer deep discounts but can be evicted by Azure when capacity is needed elsewhere.",
    hint: "Interruptible but cheap."
  },
  {
    id: 77,
    difficulty: "hard",
    category: "networking",
    question: "What is an 'Azure User Defined Route' (UDR)?",
    options: [
      "A path for a user to walk in the data center",
      "A custom route created to override Azure's default system routes, often to send traffic through a Network Virtual Appliance (NVA)",
      "A way to rename a VNet",
      "A security rule for users"
    ],
    answer: 1,
    explanation: "UDRs give you control over the next hop for traffic leaving a subnet.",
    hint: "Custom routing table."
  },
  {
    id: 78,
    difficulty: "medium",
    category: "databases",
    question: "Which Azure Cosmos DB API should you use if you are migrating a workload currently running on Apache Cassandra?",
    options: [
      "NoSQL API",
      "MongoDB API",
      "Cassandra API",
      "Gremlin API"
    ],
    answer: 2,
    explanation: "Cosmos DB provides wire-protocol compatible APIs for several popular NoSQL databases.",
    hint: "Protocol compatibility."
  },
  {
    id: 79,
    difficulty: "hard",
    category: "security",
    question: "What is 'Microsoft Purview' (formerly Azure Purview)?",
    options: [
      "A firewall for databases",
      "A unified data governance service that helps you manage and govern your on-premises, multi-cloud, and SaaS data",
      "A tool to view code",
      "A storage encryption key"
    ],
    answer: 1,
    explanation: "Purview creates a holistic map of your data landscape with automated data discovery and sensitive data classification.",
    hint: "Data governance and catalog."
  },
  {
    id: 80,
    difficulty: "medium",
    category: "automation",
    question: "What is an 'ARM Template'?",
    options: [
      "A physical mold for servers",
      "A JSON file that defines the infrastructure and configuration for your Azure project",
      "A security certificate",
      "A list of users"
    ],
    answer: 1,
    explanation: "ARM templates use declarative syntax to allow you to treat 'Infrastructure as Code'.",
    hint: "Infrastructure as Code (JSON)."
  },
  {
    id: 81,
    difficulty: "easy",
    category: "governance",
    question: "What happens when a 'ReadOnly' Resource Lock is applied to a Resource Group?",
    options: [
      "Users cannot see the resources",
      "Authorized users can read a resource, but they can't delete or update it",
      "The resource becomes invisible",
      "Only the owner can delete it"
    ],
    answer: 1,
    explanation: "A ReadOnly lock prevents any changes (updates or deletes) even if the user has Contributor permissions.",
    hint: "No changes allowed."
  },
  {
    id: 82,
    difficulty: "hard",
    category: "identity",
    question: "What is 'Entra ID Governance'?",
    options: [
      "A list of laws for Azure",
      "A set of features for identity lifecycle management, access reviews, and entitlement management",
      "A way to vote for features",
      "The team that manages Microsoft servers"
    ],
    answer: 1,
    explanation: "ID Governance ensures that the right people have the right access to the right resources for the right amount of time.",
    hint: "Identity lifecycle."
  },
  {
    id: 83,
    difficulty: "medium",
    category: "networking",
    question: "Which Azure load balancing service is best suited for regional, Layer 7 (HTTP/S) traffic and includes Web Application Firewall (WAF) support?",
    options: [
      "Azure Load Balancer",
      "Azure Application Gateway",
      "Azure Front Door",
      "Traffic Manager"
    ],
    answer: 1,
    explanation: "Application Gateway provides L7 features like URL path-based routing and SSL termination for a single region.",
    hint: "Regional L7."
  },
  {
    id: 84,
    difficulty: "hard",
    category: "compute",
    question: "What is an 'Azure App Service Environment' (ASE)?",
    options: [
      "A folder in the app",
      "A fully isolated and dedicated environment for securely running App Service apps at high scale",
      "A simulator for apps",
      "The region the app runs in"
    ],
    answer: 1,
    explanation: "ASE provides the highest level of isolation by running in your own VNet on dedicated hardware.",
    hint: "Isolated PaaS."
  },
  {
    id: 85,
    difficulty: "medium",
    category: "storage",
    question: "What is the 'Soft Delete' feature in Azure Storage?",
    options: [
      "A way to delete data faster",
      "A feature that allows you to recover blob or file data that was previously deleted during a retention period",
      "Deleting data using a specific script",
      "Deleting data only from the cache"
    ],
    answer: 1,
    explanation: "Soft delete protects you from accidental deletions by acting as a 'Recycle Bin'.",
    hint: "Recycle bin for blobs."
  },
  {
    id: 6,
    difficulty: "easy",
    category: "cost",
    question: "True or False: Inbound data transfer (data going into Azure) is generally free.",
    options: [
      "True",
      "False"
    ],
    answer: 0,
    explanation: "Microsoft typically only charges for 'egress' (data leaving Azure datacenters).",
    hint: "Egress costs, ingress doesn't."
  },
  {
    id: 87,
    difficulty: "hard",
    category: "scenarios",
    question: "You need to store 10 Petabytes of data for long-term compliance. Which storage account type should you use?",
    options: [
      "Premium Block Blobs",
      "Standard General Purpose v2 (GPv2)",
      "Legacy Blob Storage account",
      "Azure SQL Database"
    ],
    answer: 1,
    explanation: "GPv2 is the recommended account type for most scenarios, supporting the Archive tier for massive, low-cost storage.",
    hint: "Modern standard account."
  },
  {
    id: 88,
    difficulty: "medium",
    category: "monitoring",
    question: "What is 'Azure Application Insights'?",
    options: [
      "A way to read news about apps",
      "An extensible Application Performance Management (APM) service for developers to monitor live applications",
      "A search engine for Azure",
      "A tool to write code"
    ],
    answer: 1,
    explanation: "App Insights helps detect performance anomalies and understand user behavior in your app.",
    hint: "APM for devs."
  },
  {
    id: 89,
    difficulty: "hard",
    category: "networking",
    question: "What is 'Global VNet Peering'?",
    options: [
      "Connecting a VNet to the whole world",
      "Connecting two VNets located in different Azure regions",
      "A public internet connection",
      "A way to browse the web"
    ],
    answer: 1,
    explanation: "Global peering allows VNets in different regions to communicate over the Microsoft backbone without gateways.",
    hint: "Cross-region peering."
  },
  {
    id: 90,
    difficulty: "medium",
    category: "identity",
    question: "What is 'Azure AD Business-to-Consumer' (B2C)?",
    options: [
      "A way to sell Azure to users",
      "A customer identity access management (CIAM) solution that allows users to sign in with social IDs like Google or Facebook",
      "A discount for businesses",
      "A support plan"
    ],
    answer: 1,
    explanation: "B2C is used for consumer-facing apps where you want users to manage their own profiles and use external IDs.",
    hint: "Consumer identities."
  },
  {
    id: 91,
    difficulty: "easy",
    category: "governance",
    question: "Which Azure role has full access to all resources in the subscription, including the ability to delegate access to others?",
    options: [
      "Contributor",
      "Owner",
      "Reader",
      "User Access Administrator"
    ],
    answer: 1,
    explanation: "The Owner role has full control, while the Contributor cannot grant access to other users.",
    hint: "Highest RBAC role."
  },
  {
    id: 92,
    difficulty: "hard",
    category: "compute",
    question: "What is 'Azure Batch'?",
    options: [
      "A group of VMs in one rack",
      "A service to run large-scale parallel and high-performance computing (HPC) batch jobs efficiently in Azure",
      "A way to update apps",
      "A database feature"
    ],
    answer: 1,
    explanation: "Batch creates and manages a pool of compute nodes (VMs), installs the apps, and schedules the jobs.",
    hint: "HPC/Parallel processing."
  },
  {
    id: 93,
    difficulty: "medium",
    category: "networking",
    question: "What is an 'Azure Public IP Prefix'?",
    options: [
      "The name of the IP",
      "A reserved range of static public IP addresses for your Azure subscription",
      "The first part of an email",
      "A type of firewall"
    ],
    answer: 1,
    explanation: "Prefixes allow you to simplify firewall rules by having a predictable range of IPs for your Azure resources.",
    hint: "Range of IPs."
  },
  {
    id: 94,
    difficulty: "hard",
    category: "databases",
    question: "Which feature of Azure SQL Database allows you to automatically scale compute and bill for the amount of compute used per second?",
    options: [
      "Provisioned Compute",
      "Serverless Compute",
      "Hyperscale",
      "Elastic Pools"
    ],
    answer: 1,
    explanation: "Serverless SQL database automatically scales compute based on workload demand and pauses during inactive periods.",
    hint: "Auto-scale and auto-pause."
  },
  {
    id: 95,
    difficulty: "medium",
    category: "security",
    question: "What is the purpose of 'Azure Information Protection' (AIP)?",
    options: [
      "To protect the Azure Portal",
      "To classify and protect documents and emails by applying labels",
      "To encrypt the hard drive",
      "To stop DDoS attacks"
    ],
    answer: 1,
    explanation: "AIP (now part of Purview) allows you to tag documents based on sensitivity (e.g., 'Confidential').",
    hint: "Labeling and classification."
  },
  {
    id: 96,
    difficulty: "easy",
    category: "monitoring",
    question: "Where can you go to see if there is an ongoing outage affecting an Azure region globally?",
    options: [
      "Azure Portal Help",
      "Azure Service Health",
      "Azure Advisor",
      "The News"
    ],
    answer: 1,
    explanation: "Azure Service Health notifies you about Azure service incidents and planned maintenance.",
    hint: "Status of services."
  },
  {
    id: 97,
    difficulty: "hard",
    category: "automation",
    question: "What is the 'Azure Desired State Configuration' (DSC)?",
    options: [
      "The best way to run Azure",
      "A management platform that allows you to manage IT and development infrastructure with configuration as code for Windows and Linux",
      "A setting in the portal",
      "A support level"
    ],
    answer: 1,
    explanation: "DSC ensures that your VM configurations (like installed software) don't 'drift' over time.",
    hint: "Prevention of config drift."
  },
  {
    id: 98,
    difficulty: "medium",
    category: "identity",
    question: "What is an 'Access Review' in Entra ID?",
    options: [
      "A test for users",
      "A process to periodically review users' access to ensure only the right people have continued access",
      "A security log",
      "A way to change passwords"
    ],
    answer: 1,
    explanation: "Access reviews help organizations manage group memberships and application access efficiently.",
    hint: "Recertification of access."
  },
  {
    id: 99,
    difficulty: "hard",
    category: "networking",
    question: "What is 'Azure Virtual WAN'?",
    options: [
      "A wide-area network for your home",
      "A networking service that brings many networking, security, and routing functionalities together to provide a single operational interface",
      "A faster internet connection",
      "A way to bypass VNets"
    ],
    answer: 1,
    explanation: "It unifies Site-to-Site, Point-to-Site, ExpressRoute, and VNet connectivity into a managed hub-and-spoke architecture.",
    hint: "Unified networking hub."
  },
  {
    id: 100,
    difficulty: "medium",
    category: "compute",
    question: "In Azure Kubernetes Service (AKS), what is a 'Node Pool'?",
    options: [
      "A pool of water for servers",
      "A group of nodes (VMs) with the same configuration that run your containerized applications",
      "A group of developers",
      "A backup system"
    ],
    answer: 1,
    explanation: "You can have multiple node pools (e.g., one with GPUs, one with high memory) within a single AKS cluster.",
    hint: "Group of worker VMs."
  }
];

// Append to main database
//questionBank.push(...batch2);
/* ======================================================
   AZURE MASTER QUESTION BANK (Batch 3/7)
   Topics: Containers, Big Data, Messaging, & Advanced Storage
   ====================================================== */

const batch3 = [
  {
    id: 101,
    difficulty: "medium",
    category: "containers",
    question: "In Docker, what is the difference between an Image and a Container?",
    options: [
      "They are the same thing",
      "An image is a read-only blueprint; a container is a running instance of an image",
      "A container is the code; an image is the server",
      "Images are for Linux; containers are for Windows"
    ],
    answer: 1,
    explanation: "Images are the static templates containing the application and its dependencies. Containers are the active, isolated processes based on those images.",
    hint: "Blueprint vs. Building."
  },
  {
    id: 102,
    difficulty: "hard",
    category: "containers",
    question: "What is the role of the 'Control Plane' in Azure Kubernetes Service (AKS)?",
    options: [
      "To run the user's web applications",
      "To provide core Kubernetes services and orchestration of the application workloads (managed by Microsoft)",
      "To store the persistent data of the containers",
      "To provide the physical electricity to the data center"
    ],
    answer: 1,
    explanation: "The Control Plane manages the cluster (API server, scheduler, etc.). In AKS, Microsoft manages this at no cost to the user; you only pay for worker nodes.",
    hint: "The 'brain' of the cluster."
  },
  {
    id: 103,
    difficulty: "medium",
    category: "databases",
    question: "Which Azure Cosmos DB consistency level ensures that the reader always sees the most recent write, but at the cost of higher latency and lower availability?",
    options: [
      "Session",
      "Strong",
      "Eventual",
      "Consistent Prefix"
    ],
    answer: 1,
    explanation: "Strong consistency ensures 'linearizability,' meaning reads are guaranteed to return the most recent committed version of an item.",
    hint: "Opposite of Eventual."
  },
  {
    id: 104,
    difficulty: "hard",
    category: "databases",
    question: "What is a 'Change Feed' in Azure Cosmos DB?",
    options: [
      "A way to change the price of the database",
      "A persistent record of changes to a container in the order they occur, used to trigger functions or move data",
      "A news feed about Cosmos DB updates",
      "A tool to rename the database"
    ],
    answer: 1,
    explanation: "The change feed listens to a Cosmos DB container for any changes and outputs a sorted list of documents that were changed.",
    hint: "Event sourcing/triggers."
  },
  {
    id: 105,
    difficulty: "medium",
    category: "analytics",
    question: "Which Azure service is a unified analytics service that brings together data integration, enterprise data warehousing, and big data analytics?",
    options: [
      "Azure Data Factory",
      "Azure Synapse Analytics",
      "Azure SQL Database",
      "Azure Analysis Services"
    ],
    answer: 1,
    explanation: "Synapse is the evolution of Azure SQL Data Warehouse, combining it with Spark and Data Integration (ADF).",
    hint: "Limitless analytics."
  },
  {
    id: 106,
    difficulty: "hard",
    category: "analytics",
    question: "In Azure Synapse, what is the difference between a 'Dedicated SQL Pool' and a 'Serverless SQL Pool'?",
    options: [
      "Dedicated is for small files; Serverless is for big files",
      "Dedicated uses provisioned resources; Serverless is an on-demand service for querying data in the data lake (pay-per-TB-processed)",
      "Serverless cannot use SQL syntax",
      "Dedicated is always cheaper"
    ],
    answer: 1,
    explanation: "Dedicated pools provide high performance for data warehousing. Serverless is ideal for data exploration and 'Logical Data Warehousing' without provisioning servers.",
    hint: "Pay-per-query."
  },
  {
    id: 107,
    difficulty: "medium",
    category: "messaging",
    question: "Which service should you use for high-value enterprise messaging that requires 'At-Least-Once' delivery, transactions, and duplicate detection?",
    options: [
      "Azure Event Grid",
      "Azure Service Bus",
      "Azure Event Hubs",
      "Azure Storage Queues"
    ],
    answer: 1,
    explanation: "Service Bus is a reliable message broker with advanced features like dead-lettering and FIFO.",
    hint: "Enterprise messaging."
  },
  {
    id: 108,
    difficulty: "hard",
    category: "messaging",
    question: "What is the primary use case for Azure Event Grid?",
    options: [
      "Moving Terabytes of log data",
      "Reactive, event-driven architectures (e.g., triggering a function when a blob is created)",
      "Sending emails to customers",
      "Storing SQL backups"
    ],
    answer: 1,
    explanation: "Event Grid is a highly scalable, fully managed intelligent event routing service that uses a publish-subscribe model.",
    hint: "Reactive programming."
  },
  {
    id: 109,
    difficulty: "easy",
    category: "analytics",
    question: "Which component of Azure Data Factory is used to define the actual work to be performed (e.g., Copy Data, Execute Notebook)?",
    options: [
      "Dataset",
      "Pipeline",
      "Activity",
      "Linked Service"
    ],
    answer: 2,
    explanation: "An Activity represents a single processing step in a pipeline.",
    hint: "Unit of work."
  },
  {
    id: 110,
    difficulty: "hard",
    category: "storage",
    question: "What makes Azure Data Lake Storage (ADLS) Gen2 different from standard Blob Storage?",
    options: [
      "It is more expensive",
      "It features a Hierarchical Namespace (HNS), which allows for directory-level operations and better performance for big data analytics",
      "It can only store text files",
      "It doesn't support encryption"
    ],
    answer: 1,
    explanation: "HNS allows ADLS Gen2 to act like a real file system, which is critical for Spark and Hadoop performance.",
    hint: "Hierarchical Namespace."
  },
  {
    id: 111,
    difficulty: "medium",
    category: "containers",
    question: "What is an 'Azure Container Instance' (ACI) best used for?",
    options: [
      "Complex microservice orchestration",
      "Quick, isolated container runs without having to manage servers or Kubernetes",
      "Running a database for 5 years",
      "Storing Docker images"
    ],
    answer: 1,
    explanation: "ACI is the fastest and simplest way to run a container in Azure, ideal for bursting or simple tasks.",
    hint: "Serverless containers."
  },
  {
    id: 112,
    difficulty: "hard",
    category: "networking",
    question: "Which feature of Azure App Service allows it to securely access resources (like a Database) inside a Virtual Network without exposing them to the internet?",
    options: [
      "VNet Peering",
      "Regional VNet Integration",
      "Public IP Address",
      "Custom Domains"
    ],
    answer: 1,
    explanation: "VNet Integration gives your web app access to resources in your VNet, but doesn't grant the VNet access to your app.",
    hint: "Outbound VNet access."
  },
  {
    id: 113,
    difficulty: "medium",
    category: "security",
    question: "What is a 'Private Endpoint' in Azure?",
    options: [
      "A secret password",
      "A network interface that uses a private IP address from your VNet, bringing a specific Azure service (like SQL) into your VNet",
      "A hidden VM",
      "A way to hide your subscription"
    ],
    answer: 1,
    explanation: "Private Link/Endpoints ensure traffic between your VNet and the service travels over the Microsoft network, not the public internet.",
    hint: "Inbound private access."
  },
  {
    id: 114,
    difficulty: "hard",
    category: "analytics",
    question: "In Azure Databricks, what is a 'Cluster'?",
    options: [
      "A group of users",
      "A set of VM resources (worker nodes and a driver) that process data using Apache Spark",
      "A folder for files",
      "A security group"
    ],
    answer: 1,
    explanation: "Clusters provide the compute power to run Spark jobs, SQL queries, and Python notebooks.",
    hint: "Compute for Spark."
  },
  {
    id: 115,
    difficulty: "easy",
    category: "messaging",
    question: "Which Azure service is optimized for streaming millions of events per second from devices and applications for real-time analytics?",
    options: [
      "Azure Service Bus",
      "Azure Event Hubs",
      "Azure Logic Apps",
      "Azure Relay"
    ],
    answer: 1,
    explanation: "Event Hubs is a big data streaming platform and event ingestion service.",
    hint: "Big data ingestion."
  },
  {
    id: 116,
    difficulty: "medium",
    category: "governance",
    question: "What is an 'Azure Blueprint' (now migrating to Template Specs)?",
    options: [
      "A drawing of a data center",
      "A way to orchestrate the deployment of various resource templates and other artifacts (Roles, Policies) to ensure compliance",
      "A list of Azure prices",
      "A support ticket"
    ],
    answer: 1,
    explanation: "Blueprints allow architects to define a repeatable set of Azure resources that implement an organization's standards.",
    hint: "Repeatable environments."
  },
  {
    id: 117,
    difficulty: "hard",
    category: "storage",
    question: "What is 'Object Replication' in Azure Blob Storage?",
    options: [
      "Creating a copy of the whole storage account",
      "Asynchronously copying block blobs between a source storage account and a destination account",
      "Backing up data to a tape drive",
      "Using RAID 1 on Azure disks"
    ],
    answer: 1,
    explanation: "This allows you to replicate specific blobs based on prefixes or tags to another region/account for low-latency access or compliance.",
    hint: "Blob-to-blob copy."
  },
  {
    id: 118,
    difficulty: "medium",
    category: "compute",
    question: "Which service provides a managed Docker registry for storing and managing private Docker container images?",
    options: [
      "Azure Container Registry (ACR)",
      "Docker Hub",
      "Azure App Service",
      "Azure Blob Storage"
    ],
    answer: 0,
    explanation: "ACR is a private registry for Docker and OCI images in Azure.",
    hint: "Private Docker images."
  },
  {
    id: 119,
    difficulty: "hard",
    category: "scenarios",
    question: "You need to process data in a 'Gold' layer for business-ready dashboards using Databricks. Which tool is most cost-effective for end-users to query that data using standard BI tools like Power BI?",
    options: [
      "Running a Spark Cluster 24/7",
      "Databricks SQL (SQL Warehouses)",
      "Exporting to Excel",
      "Azure Functions"
    ],
    answer: 1,
    explanation: "Databricks SQL provides an optimized warehouse for BI tools with better price/performance for SQL workloads.",
    hint: "SQL-optimized Databricks."
  },
  {
    id: 120,
    difficulty: "medium",
    category: "identity",
    question: "What is 'Azure AD Connect'?",
    options: [
      "A cable for servers",
      "A tool to synchronize on-premises Active Directory objects (users, groups) to Entra ID (Azure AD)",
      "A way to sign in to Windows 10",
      "A social network for employees"
    ],
    answer: 1,
    explanation: "It bridges the gap between on-prem and cloud identity, enabling features like Password Hash Sync or Pass-through Authentication.",
    hint: "Hybrid identity sync."
  },
  {
    id: 121,
    difficulty: "easy",
    category: "databases",
    question: "Which Azure Cosmos DB API is specifically designed for graph data and relationships?",
    options: [
      "NoSQL API",
      "Gremlin API",
      "Table API",
      "MongoDB API"
    ],
    answer: 1,
    explanation: "Gremlin is the industry standard for graph traversal and queries.",
    hint: "Think 'Graph'."
  },
  {
    id: 122,
    difficulty: "hard",
    category: "networking",
    question: "What is an 'Azure Private Link Service'?",
    options: [
      "A way to share files",
      "A service that allows you to provide your own service (running behind a Standard Load Balancer) to other users privately via Private Endpoints",
      "A private chat app",
      "A type of ExpressRoute"
    ],
    answer: 1,
    explanation: "This allows service providers to offer their applications to customers in different tenants without going over the internet.",
    hint: "Provider-side Private Link."
  },
  {
    id: 123,
    difficulty: "medium",
    category: "security",
    question: "Which Azure service analyzes 'Sign-in Risk' and 'User Risk' to automatically block or require MFA for suspicious logins?",
    options: [
      "Azure Firewall",
      "Entra ID Identity Protection",
      "Azure Bastion",
      "Microsoft Defender for Endpoint"
    ],
    answer: 1,
    explanation: "Identity Protection uses machine learning to detect anomalies in login patterns (e.g., 'impossible travel').",
    hint: "Risk-based access."
  },
  {
    id: 124,
    difficulty: "hard",
    category: "containers",
    question: "In Kubernetes, what is a 'Service' of type 'LoadBalancer'?",
    options: [
      "A way to balance the weight of the servers",
      "A configuration that automatically provisions an Azure Load Balancer to route external traffic to your container pods",
      "A backup of the pods",
      "A tool to install Docker"
    ],
    answer: 1,
    explanation: "This integrates K8s with Azure's infrastructure to expose an application to the internet automatically.",
    hint: "External access for K8s."
  },
  {
    id: 125,
    difficulty: "medium",
    category: "storage",
    question: "What is the 'Lifecycle Management' policy in Azure Storage used for?",
    options: [
      "To see how long a server lasts",
      "To automatically move blobs to cooler tiers (Cool/Archive) or delete them based on age or last access time",
      "To renew subscriptions",
      "To update the storage software"
    ],
    answer: 1,
    explanation: "This helps optimize costs by ensuring data sits in the cheapest appropriate tier based on usage patterns.",
    hint: "Automatic tiering."
  },
  {
    id: 126,
    difficulty: "easy",
    category: "compute",
    question: "Which Azure service provides a way to run small pieces of code (functions) in the cloud without worrying about the underlying server infrastructure?",
    options: [
      "Azure Functions",
      "Azure Virtual Machines",
      "Azure App Service",
      "Azure Container Instances"
    ],
    answer: 0,
    explanation: "Azure Functions is the primary serverless compute offering in Azure.",
    hint: "Serverless code."
  },
  {
    id: 127,
    difficulty: "hard",
    category: "databases",
    question: "What are 'Request Units' (RUs) in Azure Cosmos DB?",
    options: [
      "The number of users allowed",
      "The currency used to pay Microsoft",
      "A performance metric that abstracts CPU, IOPS, and memory required to perform a database operation",
      "The number of files stored"
    ],
    answer: 2,
    explanation: "RUs are the unit of throughput in Cosmos DB. A 1KB read is typically 1 RU.",
    hint: "Performance currency."
  },
  {
    id: 128,
    difficulty: "medium",
    category: "analytics",
    question: "Which Azure service is a serverless, distributed query engine that allows you to analyze large volumes of data using U-SQL?",
    options: [
      "Azure Databricks",
      "Azure Data Lake Analytics (Legacy)",
      "Azure Synapse Analytics",
      "Azure Stream Analytics"
    ],
    answer: 1,
    explanation: "Azure Data Lake Analytics was the original U-SQL service, now largely superseded by Synapse.",
    hint: "U-SQL service."
  },
  {
    id: 129,
    difficulty: "hard",
    category: "networking",
    question: "What is 'Azure Front Door'?",
    options: [
      "A security guard at the building",
      "A global, scalable entry-point that uses the Microsoft global edge network to create fast, secure, and widely scalable web applications",
      "A VPN client",
      "A way to open the portal"
    ],
    answer: 1,
    explanation: "Front Door is a global Layer 7 load balancer with acceleration, WAF, and SSL offloading.",
    hint: "Global L7 + CDN."
  },
  {
    id: 130,
    difficulty: "medium",
    category: "security",
    question: "What is the 'Principle of Least Privilege'?",
    options: [
      "Giving everyone Admin access to save time",
      "Giving users only the minimum level of access they need to perform their job tasks",
      "Removing all access from everyone",
      "Charging less for certain users"
    ],
    answer: 1,
    explanation: "It is a fundamental security concept to reduce the attack surface and risk of accidental data loss.",
    hint: "Minimal access."
  },
  {
    id: 131,
    difficulty: "easy",
    category: "scenarios",
    question: "You want to automate the process of moving data from an on-premises FTP server to Azure Blob Storage every night. Which service is best?",
    options: [
      "Azure Event Grid",
      "Azure Data Factory",
      "Azure Cosmos DB",
      "Azure Front Door"
    ],
    answer: 1,
    explanation: "Data Factory is designed specifically for data movement (ETL/ELT) and orchestration.",
    hint: "ETL service."
  },
  {
    id: 132,
    difficulty: "hard",
    category: "containers",
    question: "What is a 'Horizontal Pod Autoscaler' (HPA) in Kubernetes?",
    options: [
      "A tool to make pods wider",
      "A feature that automatically scales the number of pod replicas based on CPU utilization or other metrics",
      "A way to restart pods",
      "A power-saving mode"
    ],
    answer: 1,
    explanation: "HPA allows your application to handle load spikes by automatically adding more containers.",
    hint: "Auto-scale pods."
  },
  {
    id: 133,
    difficulty: "medium",
    category: "identity",
    question: "What is 'Conditional Access' in Entra ID?",
    options: [
      "Access that depends on how much you pay",
      "A tool that uses 'If-Then' statements to allow or block access based on signals like user location, device, or application",
      "A way to reset passwords",
      "A list of terms and conditions"
    ],
    answer: 1,
    explanation: "Conditional Access is the 'engine' of Zero Trust, verifying every access request.",
    hint: "Zero Trust engine."
  },
  {
    id: 134,
    difficulty: "hard",
    category: "messaging",
    question: "In Azure Service Bus, what is a 'Subscription'?",
    options: [
      "A monthly payment plan",
      "A mechanism to receive a copy of messages sent to a Topic, often with specific filters",
      "An email list",
      "A way to buy more storage"
    ],
    answer: 1,
    explanation: "Topics and Subscriptions provide a 1-to-many communication pattern. Each subscription can have different rules.",
    hint: "Topic receivers."
  },
  {
    id: 135,
    difficulty: "medium",
    category: "storage",
    question: "Which redundancy option replicates your data across three separate physical locations (Availability Zones) within a single region?",
    options: [
      "LRS",
      "ZRS",
      "GRS",
      "RA-GRS"
    ],
    answer: 1,
    explanation: "ZRS (Zone Redundant Storage) protects against data center outages but stays within one geographic region.",
    hint: "Zone redundancy."
  },
  {
    id: 136,
    difficulty: "easy",
    category: "monitoring",
    question: "Which Azure tool provides personalized recommendations to help you follow best practices for cost, security, reliability, and performance?",
    options: [
      "Azure Monitor",
      "Azure Advisor",
      "Azure Service Health",
      "Azure Policy"
    ],
    answer: 1,
    explanation: "Advisor analyzes your resource configuration and usage telemetry to suggest improvements.",
    hint: "Best practices guide."
  },
  {
    id: 137,
    difficulty: "hard",
    category: "analytics",
    question: "What is 'PolyBase' in the context of Azure Synapse?",
    options: [
      "A type of plastic used in servers",
      "A technology that allows SQL Server/Synapse to query data from external sources like Hadoop or Azure Blob Storage using standard T-SQL",
      "A way to build websites",
      "A security protocol"
    ],
    answer: 1,
    explanation: "PolyBase is essential for querying the Data Lake without having to 'load' the data into the SQL engine first.",
    hint: "Query data lake via SQL."
  },
  {
    id: 138,
    difficulty: "medium",
    category: "compute",
    question: "What is the difference between 'Scale Up' and 'Scale Out' for an App Service?",
    options: [
      "Up means moving to a higher shelf; Out means moving to a different room",
      "Up increases hardware specs (CPU/RAM); Out increases the number of VM instances",
      "Up is for Linux; Out is for Windows",
      "There is no difference"
    ],
    answer: 1,
    explanation: "Scaling Up is vertical (bigger VM); Scaling Out is horizontal (more VMs).",
    hint: "Vertical vs Horizontal."
  },
  {
    id: 139,
    difficulty: "hard",
    category: "networking",
    question: "What is 'Azure Bastion'?",
    options: [
      "A military base",
      "A fully managed PaaS service that provides secure and seamless RDP/SSH access to VMs directly through the Azure Portal via SSL",
      "A type of firewall",
      "A storage backup"
    ],
    answer: 1,
    explanation: "Bastion eliminates the need to expose VMs to the internet via Public IPs to perform management tasks.",
    hint: "No-Public-IP management."
  },
  {
    id: 140,
    difficulty: "medium",
    category: "databases",
    question: "Which Azure SQL deployment option offers the highest compatibility with SQL Server on-premises, including features like SQL Agent and cross-database queries, while remaining a managed service?",
    options: [
      "Azure SQL Database (Single)",
      "Azure SQL Managed Instance",
      "SQL Server on VM",
      "Azure SQL Database (Elastic Pool)"
    ],
    answer: 1,
    explanation: "Managed Instance (MI) is the 'best of both worlds' for migrations, offering PaaS benefits with near-total feature parity.",
    hint: "PaaS with SQL Agent."
  },
  {
    id: 141,
    difficulty: "easy",
    category: "governance",
    question: "What is a 'Management Group'?",
    options: [
      "A team of managers",
      "A container for multiple subscriptions to manage access, policy, and compliance across them",
      "A way to buy software",
      "A backup server"
    ],
    answer: 1,
    explanation: "Management groups allow you to organize your subscriptions into a hierarchy for unified governance.",
    hint: "Container for subscriptions."
  },
  {
    id: 142,
    difficulty: "hard",
    category: "containers",
    question: "In AKS, what is a 'Namespace'?",
    options: [
      "The name of the cluster",
      "A virtual cluster within a physical K8s cluster that allows for resource isolation and quota management between teams",
      "A list of user names",
      "A type of database"
    ],
    answer: 1,
    explanation: "Namespaces allow you to divide cluster resources between multiple users or projects.",
    hint: "Virtual K8s isolation."
  },
  {
    id: 143,
    difficulty: "medium",
    category: "analytics",
    question: "What is 'Stream Analytics' best used for?",
    options: [
      "Storing old videos",
      "Real-time processing of high-velocity streaming data from IoT devices with SQL-like syntax",
      "Writing documents",
      "Managing VM backups"
    ],
    answer: 1,
    explanation: "Stream Analytics allows you to perform calculations (like averages) on data as it arrives, before it is stored.",
    hint: "Real-time SQL processing."
  },
  {
    id: 144,
    difficulty: "hard",
    category: "networking",
    question: "What is the 'Hub-and-Spoke' network topology in Azure?",
    options: [
      "A type of bicycle wheel",
      "A model where a central VNet (Hub) acts as a connectivity point to on-prem, and other VNets (Spokes) peer with it to share services like firewalls",
      "A way to connect to the internet",
      "A storage configuration"
    ],
    answer: 1,
    explanation: "This is a standard architecture for enterprise environments to centralize security and external connectivity.",
    hint: "Centralized networking."
  },
  {
    id: 145,
    difficulty: "medium",
    category: "storage",
    question: "What is 'Shared Access Signature' (SAS)?",
    options: [
      "An electronic signature for contracts",
      "A URI that grants limited-time, delegated access to Azure Storage resources without sharing your account keys",
      "A password for the portal",
      "A way to share disks between VMs"
    ],
    answer: 1,
    explanation: "SAS tokens provide granular control (Read/Write/List) and an expiration time for secure access.",
    hint: "Delegated access token."
  },
  {
    id: 146,
    difficulty: "easy",
    category: "scenarios",
    question: "You need to store a large amount of semi-structured JSON data for a web application that requires global scale and low latency. Which service do you use?",
    options: [
      "Azure SQL Database",
      "Azure Cosmos DB",
      "Azure File Sync",
      "Azure Archive Storage"
    ],
    answer: 1,
    explanation: "Cosmos DB is a globally distributed, multi-model NoSQL database perfect for high-scale JSON storage.",
    hint: "Global NoSQL."
  },
  {
    id: 147,
    difficulty: "hard",
    category: "automation",
    question: "What is 'Azure DevOps Boards' used for?",
    options: [
      "Building code",
      "Planning, tracking, and discussing work across your teams using Agile tools like Kanban and Scrum",
      "Hosting Git repositories",
      "Testing software"
    ],
    answer: 1,
    explanation: "Boards provide the project management and task tracking component of the Azure DevOps suite.",
    hint: "Agile/Kanban tracking."
  },
  {
    id: 148,
    difficulty: "medium",
    category: "monitoring",
    question: "Which Azure Monitor feature allows you to query and analyze log data from multiple sources using the Kusto Query Language (KQL)?",
    options: [
      "Metrics Explorer",
      "Log Analytics",
      "Application Insights",
      "Alerts"
    ],
    answer: 1,
    explanation: "Log Analytics is the workspace where KQL is used to find patterns and troubleshoot issues.",
    hint: "KQL query engine."
  },
  {
    id: 149,
    difficulty: "hard",
    category: "security",
    question: "What is 'Microsoft Defender for Cloud - Just-in-Time (JIT) VM Access'?",
    options: [
      "A way to buy VMs quickly",
      "A feature that blocks inbound traffic to VM management ports by default, only opening them for a specific time when requested and authorized",
      "A faster way to sign in",
      "A tool to fix broken VMs"
    ],
    answer: 1,
    explanation: "JIT access reduces the attack surface by ensuring RDP/SSH ports are only open when a legitimate user needs them.",
    hint: "Temporal port security."
  },
  {
    id: 150,
    difficulty: "medium",
    category: "compute",
    question: "In an Azure App Service, what is the 'Always On' setting?",
    options: [
      "Ensures the server never explodes",
      "A setting that keeps the app loaded in memory even when there is no traffic, preventing 'cold starts'",
      "A way to keep the light on in the data center",
      "Forces users to stay logged in"
    ],
    answer: 1,
    explanation: "By default, apps are unloaded if idle. Always On keeps them ready for instant response.",
    hint: "Prevent cold starts."
  }
];

// Append to main database
//questionBank.push(...batch3);
/* ======================================================
   AZURE MASTER QUESTION BANK (Batch 4/7)
   Topics: DR, Advanced Networking, Hybrid Identity, Security
   ====================================================== */

const batch4 = [
  {
    id: 151,
    difficulty: "medium",
    category: "disaster-recovery",
    question: "Which Azure service provides business continuity by orchestrating the replication of physical and virtual machines from a primary site to a secondary location?",
    options: [
      "Azure Backup",
      "Azure Site Recovery (ASR)",
      "Azure Migrate",
      "Azure Archive"
    ],
    answer: 1,
    explanation: "ASR is a Disaster Recovery as a Service (DRaaS) that keeps your applications running during outages by failing over to a secondary region.",
    hint: "Orchestration for failover."
  },
  {
    id: 152,
    difficulty: "hard",
    category: "networking",
    question: "What is 'ExpressRoute Global Reach' used for?",
    options: [
      "To connect two Azure regions together",
      "To connect two on-premises datacenters together through their existing ExpressRoute circuits",
      "To increase the speed of the internet",
      "To provide public peering only"
    ],
    answer: 1,
    explanation: "Global Reach allows you to link ExpressRoute circuits together to pass traffic between on-premises sites via the Microsoft backbone.",
    hint: "On-prem to On-prem via Azure."
  },
  {
    id: 153,
    difficulty: "medium",
    category: "identity",
    question: "In a hybrid environment, which authentication method allows users to sign in using the same password on-premises and in the cloud, but the password hash is stored in Entra ID?",
    options: [
      "Password Hash Synchronization (PHS)",
      "Pass-through Authentication (PTA)",
      "Federation (ADFS)",
      "Single Sign-On (SSO)"
    ],
    answer: 0,
    explanation: "PHS synchronizes a hash of the hash of a user's password from on-premises AD to Entra ID, allowing for sign-in if on-prem is down.",
    hint: "Simplest hybrid auth."
  },
  {
    id: 154,
    difficulty: "hard",
    category: "security",
    question: "In Microsoft Sentinel, what is a 'Workbook'?",
    options: [
      "A place to write code",
      "An interactive dashboard that provides data visualization and analysis of Sentinel logs",
      "A manual for security guards",
      "A collection of firewall rules"
    ],
    answer: 1,
    explanation: "Workbooks are built on Azure Monitor Workbooks and allow you to create custom visual reports for security data.",
    hint: "Sentinel Dashboards."
  },
  {
    id: 155,
    difficulty: "medium",
    category: "storage",
    question: "Which Azure Storage feature allows you to store data for a specific period during which it cannot be modified or deleted, even by an administrator?",
    options: [
      "Soft Delete",
      "Blob Versioning",
      "Immutable Storage (Time-based retention)",
      "Storage Locks"
    ],
    answer: 2,
    explanation: "Immutable storage with a time-based retention policy prevents any user from deleting the data until the time expires.",
    hint: "WORM compliance."
  },
  {
    id: 156,
    difficulty: "easy",
    category: "scenarios",
    question: "A company needs to host a Docker-based web application but doesn't want to manage a Kubernetes cluster. Which service is the most suitable PaaS option?",
    options: [
      "Azure Kubernetes Service (AKS)",
      "Azure App Service for Containers",
      "Azure Virtual Machines",
      "Azure Batch"
    ],
    answer: 1,
    explanation: "App Service for Containers provides a managed PaaS environment for containerized apps without the complexity of K8s.",
    hint: "Managed PaaS Containers."
  },
  {
    id: 157,
    difficulty: "hard",
    category: "networking",
    question: "What is the function of the 'Default Site' in Azure Virtual WAN?",
    options: [
      "The main website for the company",
      "A configuration that allows branch-to-branch traffic to flow through the Virtual Hub",
      "The first VNet created",
      "The Azure Portal login page"
    ],
    answer: 1,
    explanation: "Virtual WAN hubs act as the central point for branch-to-branch, branch-to-VNet, and VNet-to-VNet connectivity.",
    hint: "Connectivity Hub."
  },
  {
    id: 158,
    difficulty: "medium",
    category: "identity",
    question: "Which role-based access control (RBAC) role should you assign to a user who needs to manage all aspects of Virtual Machines but cannot change the Network or Storage settings they are connected to?",
    options: [
      "Owner",
      "Contributor",
      "Virtual Machine Contributor",
      "User Access Administrator"
    ],
    answer: 2,
    explanation: "Virtual Machine Contributor allows management of VMs but not the virtual networks or storage accounts they use.",
    hint: "Scoped VM access."
  },
  {
    id: 159,
    difficulty: "hard",
    category: "compute",
    question: "What is the difference between an 'Availability Set' and an 'Availability Zone'?",
    options: [
      "Availability Sets protect against region failure; Zones protect against rack failure",
      "Availability Sets protect against hardware/rack failure within a datacenter; Zones protect against entire datacenter failures",
      "They are identical",
      "Availability Sets are only for Linux"
    ],
    answer: 1,
    explanation: "Availability Sets distribute VMs across Fault Domains (racks) and Update Domains. Zones are physically separate datacenters.",
    hint: "Rack vs. Datacenter."
  },
  {
    id: 160,
    difficulty: "medium",
    category: "databases",
    question: "In Azure SQL, what is an 'Elastic Pool'?",
    options: [
      "A database that grows in physical size",
      "A collection of databases that share a set of resources (CPU/Memory) for a fixed price",
      "A backup storage area",
      "A way to connect SQL to NoSQL"
    ],
    answer: 1,
    explanation: "Elastic Pools are cost-effective for managing multiple databases with varying and unpredictable usage demands.",
    hint: "Shared resource pool."
  },
  {
    id: 161,
    difficulty: "easy",
    category: "security",
    question: "Which Azure service provides automated DDOS protection for all Azure resources at no additional cost?",
    options: [
      "Azure DDoS Protection Infrastructure (Basic)",
      "Azure DDoS Protection Network (Standard)",
      "Azure Firewall",
      "Azure WAF"
    ],
    answer: 0,
    explanation: "Basic DDoS protection is integrated into the Azure platform by default to protect the infrastructure.",
    hint: "Built-in protection."
  },
  {
    id: 162,
    difficulty: "hard",
    category: "governance",
    question: "How does 'Azure Policy' differ from 'RBAC'?",
    options: [
      "RBAC focuses on 'Who can do what'; Policy focuses on 'What can be done' (resource properties)",
      "RBAC is for users; Policy is for machines",
      "Policy is only for cost management",
      "They are the same"
    ],
    answer: 0,
    explanation: "RBAC controls user actions. Policy ensures that resources being created meet specific standards (e.g., must be in West US).",
    hint: "Action vs. State."
  },
  {
    id: 163,
    difficulty: "medium",
    category: "monitoring",
    question: "What is 'Log Analytics Workspace'?",
    options: [
      "A notepad for developers",
      "The storage and query environment for all logs collected by Azure Monitor",
      "A tool to fix coding errors",
      "A backup for the portal"
    ],
    answer: 1,
    explanation: "It is the central repository where log data is stored, indexed, and queried using KQL.",
    hint: "The log bucket."
  },
  {
    id: 164,
    difficulty: "hard",
    category: "scenarios",
    question: "A company needs to migrate a high-performance application that requires sub-millisecond network latency between VMs. Which feature should they enable?",
    options: [
      "VNet Peering",
      "Proximity Placement Groups",
      "Availability Zones",
      "ExpressRoute"
    ],
    answer: 1,
    explanation: "Proximity Placement Groups logically group resources to ensure they are physically located close to each other in the same datacenter.",
    hint: "Physically close VMs."
  },
  {
    id: 165,
    difficulty: "medium",
    category: "security",
    question: "What is the purpose of 'Azure Key Vault Certificates'?",
    options: [
      "To give users awards",
      "To simplify the management, deployment, and renewal of SSL/TLS certificates for Azure services",
      "To prove you passed an exam",
      "To encrypt hard drives"
    ],
    answer: 1,
    explanation: "Key Vault allows you to centrally manage the lifecycle of your digital certificates.",
    hint: "SSL management."
  },
  {
    id: 166,
    difficulty: "hard",
    category: "networking",
    question: "What is an 'Azure Local Network Gateway'?",
    options: [
      "A physical router from Microsoft",
      "An Azure object that represents the configuration of your on-premises VPN device (IP and Address Space)",
      "A way to connect to local coffee shop Wi-Fi",
      "A type of subnet"
    ],
    answer: 1,
    explanation: "It defines the 'other side' of a Site-to-Site VPN tunnel so Azure knows where to send traffic.",
    hint: "On-prem representation."
  },
  {
    id: 167,
    difficulty: "medium",
    category: "identity",
    question: "What is 'Self-Service Password Reset' (SSPR)?",
    options: [
      "Microsoft support resets your password",
      "A feature that allows users to reset their own passwords without IT intervention if they meet security requirements",
      "A way to delete your account",
      "A tool for administrators only"
    ],
    answer: 1,
    explanation: "SSPR reduces helpdesk tickets by allowing users to prove their identity via MFA and change their password.",
    hint: "User resets own pass."
  },
  {
    id: 168,
    difficulty: "easy",
    category: "cost",
    question: "Which Azure tool allows you to see 'Actual' vs 'Forecasted' costs for your subscription?",
    options: [
      "Pricing Calculator",
      "TCO Calculator",
      "Azure Cost Management",
      "Azure Advisor"
    ],
    answer: 2,
    explanation: "Cost Management provides detailed analysis of your spending and predicts future costs based on trends.",
    hint: "Spending analysis."
  },
  {
    id: 169,
    difficulty: "hard",
    category: "containers",
    question: "In Kubernetes, what is a 'Deployment'?",
    options: [
      "Moving a server to a data center",
      "An object that defines a desired state for your pods (e.g., run 3 copies of this container) and handles updates",
      "A way to delete code",
      "A type of network switch"
    ],
    answer: 1,
    explanation: "Deployments allow you to describe your application's lifecycle, such as which images to use and the number of replicas.",
    hint: "Desired pod state."
  },
  {
    id: 170,
    difficulty: "medium",
    category: "storage",
    question: "What is 'Azure Disk Encryption' (ADE)?",
    options: [
      "A way to lock the server room",
      "A feature that uses BitLocker (Windows) or DM-Crypt (Linux) to provide volume encryption for the OS and data disks of VMs",
      "Encryption for files in a storage account",
      "A way to hide files"
    ],
    answer: 1,
    explanation: "ADE helps protect and safeguard your data to meet organizational security and compliance commitments.",
    hint: "OS-level disk encryption."
  },
  {
    id: 171,
    difficulty: "hard",
    category: "databases",
    question: "Which Azure SQL Database service tier is designed for most business workloads, offering balanced compute and storage based on premium storage (SSD)?",
    options: [
      "General Purpose",
      "Business Critical",
      "Hyperscale",
      "Basic"
    ],
    answer: 1,
    explanation: "Business Critical is best for OLTP applications with high transaction rates and low IO latency.",
    hint: "High IOPS tier."
  },
  {
    id: 172,
    difficulty: "medium",
    category: "networking",
    question: "What is 'VPN Point-to-Site' (P2S)?",
    options: [
      "Connecting two data centers",
      "Connecting an individual client computer to an Azure VNet over an encrypted tunnel",
      "A public internet connection",
      "A way to speed up the portal"
    ],
    answer: 1,
    explanation: "P2S is useful for remote workers who need to connect to Azure from home or a hotel.",
    hint: "Single user VPN."
  },
  {
    id: 173,
    difficulty: "hard",
    category: "security",
    question: "What is an 'Azure Security Benchmark'?",
    options: [
      "A speed test for servers",
      "A set of Microsoft-authored security best practices and recommendations based on industry standards like CIS and NIST",
      "A certificate for security",
      "A list of hacked accounts"
    ],
    answer: 1,
    explanation: "It provides a starting point for securing your Azure environment based on proven security frameworks.",
    hint: "Best practice baseline."
  },
  {
    id: 174,
    difficulty: "easy",
    category: "governance",
    question: "True or False: An Azure Subscription can be associated with multiple Entra ID tenants.",
    options: [
      "True",
      "False"
    ],
    answer: 1,
    explanation: "A subscription can only trust one Entra ID directory at a time.",
    hint: "1-to-1 trust relationship."
  },
  {
    id: 175,
    difficulty: "medium",
    category: "compute",
    question: "What is 'Azure Autoscale'?",
    options: [
      "A tool to weigh servers",
      "A service that automatically adjusts the number of resources running to handle the load on your application",
      "Moving a VM to a bigger size automatically",
      "A way to turn off VMs at night"
    ],
    answer: 1,
    explanation: "Autoscale is typically horizontal (adding/removing instances) based on metrics like CPU usage or queue length.",
    hint: "Load-based scaling."
  },
  {
    id: 176,
    difficulty: "hard",
    category: "networking",
    question: "In an Azure Load Balancer, what is a 'Health Probe'?",
    options: [
      "A physical inspection of the server",
      "A mechanism used to determine the health status of the instances in the backend pool",
      "A virus scanner",
      "A way to check the temperature of the data center"
    ],
    answer: 1,
    explanation: "If a probe fails, the load balancer stops sending new connections to that unhealthy instance.",
    hint: "Backend health check."
  },
  {
    id: 177,
    difficulty: "medium",
    category: "identity",
    question: "What is 'Entra ID B2B'?",
    options: [
      "A way for Microsoft to sell to other companies",
      "A feature that lets you share your company's applications and services with guest users from any other organization",
      "A chat app",
      "A type of firewall"
    ],
    answer: 1,
    explanation: "B2B allows you to collaborate with external partners by letting them use their own identities to sign in.",
    hint: "Guest collaboration."
  },
  {
    id: 178,
    difficulty: "hard",
    category: "scenarios",
    question: "You need to store data in Azure that must be accessible to multiple VMs via the standard NFS protocol. Which service should you use?",
    options: [
      "Azure Blob Storage",
      "Azure Files (Premium Tier)",
      "Azure Disk Storage",
      "Azure SQL"
    ],
    answer: 1,
    explanation: "Azure Files Premium tier supports the NFS 4.1 protocol for Linux workloads.",
    hint: "NFS in Azure."
  },
  {
    id: 179,
    difficulty: "medium",
    category: "storage",
    question: "What is 'Storage Account Failover'?",
    options: [
      "When the storage account crashes",
      "The process of switching a geo-redundant storage account from the primary region to the secondary region during a disaster",
      "Copying files to a USB drive",
      "Deleting a storage account"
    ],
    answer: 1,
    explanation: "Customer-managed failover allows you to initiate the switch if the primary region becomes unavailable.",
    hint: "Region switch for GRS."
  },
  {
    id: 180,
    difficulty: "hard",
    category: "security",
    question: "What is 'Microsoft Sentinel Playbooks'?",
    options: [
      "A book of sports strategies",
      "Automated response workflows based on Azure Logic Apps that trigger when an alert is generated in Sentinel",
      "A list of users to delete",
      "A training manual for IT"
    ],
    answer: 1,
    explanation: "Playbooks allow you to automate common security responses, like blocking an IP in the firewall when a threat is detected.",
    hint: "Automated SOC response."
  },
  {
    id: 181,
    difficulty: "easy",
    category: "monitoring",
    question: "Which Azure service provides a central view of the health of all Azure services, including service issues and planned maintenance?",
    options: [
      "Azure Monitor",
      "Azure Service Health",
      "Azure Advisor",
      "Azure News"
    ],
    answer: 1,
    explanation: "Service Health provides personalized alerts and guidance when Azure service issues affect you.",
    hint: "Azure status page."
  },
  {
    id: 182,
    difficulty: "hard",
    category: "networking",
    question: "What is 'Azure Private Link'?",
    options: [
      "A private chat for admins",
      "A technology that provides private connectivity from a VNet to Azure PaaS services, keeping traffic on the Microsoft network",
      "A secret website",
      "A type of VPN"
    ],
    answer: 1,
    explanation: "Private Link maps a private IP address to a service instance, effectively 'plugging' the service into your VNet.",
    hint: "PaaS via Private IP."
  },
  {
    id: 183,
    difficulty: "medium",
    category: "identity",
    question: "What is 'Privileged Identity Management' (PIM) Eligibility?",
    options: [
      "Being old enough to use Azure",
      "The state where a user is not always an admin, but can 'activate' their role when needed for a limited time",
      "Winning a contest",
      "Having a paid license"
    ],
    answer: 1,
    explanation: "Eligibility ensures users don't have permanent high-level access, following the 'Just-in-Time' principle.",
    hint: "Inactive until needed."
  },
  {
    id: 184,
    difficulty: "hard",
    category: "compute",
    question: "In Azure App Service, what is 'VNet Integration' used for?",
    options: [
      "To allow the internet to reach the app",
      "To allow the app to access resources (like a database) that are secured inside a Virtual Network",
      "To combine two apps",
      "To speed up the app"
    ],
    answer: 1,
    explanation: "It enables outbound traffic from the app to flow into your private network.",
    hint: "App-to-VNet outbound."
  },
  {
    id: 185,
    difficulty: "medium",
    category: "databases",
    question: "Which Cosmos DB feature allows you to automatically expire items from a container after a certain time period?",
    options: [
      "Auto-Delete",
      "Time to Live (TTL)",
      "Expiration Date",
      "Soft Delete"
n    ],
    answer: 1,
    explanation: "TTL allows Cosmos DB to automatically delete items from a container after a specified number of seconds since they were last modified.",
    hint: "Self-destructing data."
  },
  {
    id: 186,
    difficulty: "easy",
    category: "scenarios",
    question: "You need to share a large folder of documents with several employees so they can all access it as a network drive. Which service should you use?",
    options: [
      "Azure Blob Storage",
      "Azure Files",
      "Azure Cosmos DB",
      "Azure SQL"
    ],
    answer: 1,
    explanation: "Azure Files is designed for cloud-based file shares that support SMB and NFS protocols.",
    hint: "Cloud file share."
  },
  {
    id: 187,
    difficulty: "hard",
    category: "automation",
    question: "What is an 'Azure Automation Runbook'?",
    options: [
      "A guide on how to use Azure",
      "A compilation of scripts (PowerShell or Python) used to automate repetitive cloud management tasks",
      "A physical book in the data center",
      "A list of VM names"
    ],
    answer: 1,
    explanation: "Runbooks help you automate processes like starting/stopping VMs on a schedule or managing resources.",
    hint: "Cloud automation scripts."
  },
  {
    id: 188,
    difficulty: "medium",
    category: "governance",
    question: "What is 'Azure Resource Graph'?",
    options: [
      "A chart showing CPU usage",
      "A service that allows you to query your Azure resources at scale using KQL across multiple subscriptions",
      "A map of the data center",
      "A way to draw diagrams"
    ],
    answer: 1,
    explanation: "Resource Graph provides efficient resource exploration and inventory across your entire Azure environment.",
    hint: "Querying resources."
  },
  {
    id: 189,
    difficulty: "hard",
    category: "networking",
    question: "What is a 'Network Virtual Appliance' (NVA)?",
    options: [
      "A physical server in your office",
      "A VM that performs a dedicated network function, such as a firewall, WAN optimizer, or ADC",
      "A type of cable",
      "A virtual computer"
    ],
    answer: 1,
    explanation: "Common NVAs include third-party firewalls like Palo Alto or Checkpoint running as VMs in Azure.",
    hint: "VM-based firewall/router."
  },
  {
    id: 190,
    difficulty: "medium",
    category: "security",
    question: "What is 'Microsoft Purview'?",
    options: [
      "A way to see the clouds",
      "A unified data governance service that helps you manage and govern your on-premises, multi-cloud, and SaaS data",
      "A virus scanner",
      "A tool for billing"
    ],
    answer: 1,
    explanation: "Purview creates a map of your data and helps you understand where sensitive data resides.",
    hint: "Data catalog and governance."
  },
  {
    id: 191,
    difficulty: "easy",
    category: "identity",
    question: "What is 'Multifactor Authentication' (MFA)?",
    options: [
      "Having two passwords",
      "A process where a user is prompted during sign-in for an additional form of identification, such as a code on their phone",
      "A way to share accounts",
      "Logging in from two computers"
    ],
    answer: 1,
    explanation: "MFA adds a layer of security by requiring something you know (password) and something you have (phone).",
    hint: "Two-step verification."
  },
  {
    id: 192,
    difficulty: "hard",
    category: "compute",
    question: "In AKS, what is a 'Taint'?",
    options: [
      "A virus in the cluster",
      "A property applied to a node that allows it to repel a set of pods unless the pods have a matching 'toleration'",
      "A way to delete a node",
      "A label for users"
    ],
    answer: 1,
    explanation: "Taints and tolerations work together to ensure that pods are not scheduled onto inappropriate nodes.",
    hint: "Node-pod affinity/repulsion."
  },
  {
    id: 193,
    difficulty: "medium",
    category: "monitoring",
    question: "What is an 'Azure Monitor Alert Rule'?",
    options: [
      "A law for Azure",
      "A condition that, when met, triggers an action (like sending an email or starting a runbook)",
      "A way to block users",
      "A setting in the dashboard"
    ],
    answer: 1,
    explanation: "Alert rules monitor metrics or logs and notify you when something goes wrong.",
    hint: "Trigger on condition."
  },
  {
    id: 194,
    difficulty: "hard",
    category: "networking",
    question: "What is 'VNet Peering' transitivity?",
    options: [
      "A way to speed up connections",
      "The concept that if VNet A is peered with VNet B, and B is peered with C, A and C are NOT automatically peered",
      "A type of network cable",
      "Connecting to the internet"
    ],
    answer: 1,
    explanation: "VNet peering is non-transitive. To connect A and C, you must peer them directly or use a hub.",
    hint: "Peering is NOT transitive."
  },
  {
    id: 195,
    difficulty: "medium",
    category: "storage",
    question: "Which Azure redundancy option provides the highest level of protection by replicating data to a secondary region AND across availability zones?",
    options: [
      "LRS",
      "GRS",
      "GZRS",
      "ZRS"
    ],
    answer: 2,
    explanation: "Geo-zone-redundant storage (GZRS) combines the high availability of ZRS with the disaster recovery of GRS.",
    hint: "Best of both worlds."
  },
  {
    id: 196,
    difficulty: "easy",
    category: "scenarios",
    question: "You want to run a web application that automatically scales up during the day and down at night to save money. Which service is best?",
    options: [
      "Azure Virtual Machines",
      "Azure App Service",
      "Azure SQL",
      "Azure Backup"
    ],
    answer: 1,
    explanation: "App Service has built-in autoscale capabilities that are easy to configure based on schedules or metrics.",
    hint: "Managed scaling."
  },
  {
    id: 197,
    difficulty: "hard",
    category: "security",
    question: "What is the 'Microsoft Defender for Cloud' Secure Score?",
    options: [
      "A game score",
      "A measurement of an organization's security posture, where a higher score indicates lower identified risk",
      "The number of viruses found",
      "A rating for Microsoft employees"
    ],
    answer: 1,
    explanation: "Secure score provides recommendations to improve your security and shows you how well you are doing.",
    hint: "Posture measurement."
  },
  {
    id: 198,
    difficulty: "medium",
    category: "identity",
    question: "What is 'Azure Role-Based Access Control' (RBAC) Scope?",
    options: [
      "A tool to see far away",
      "The level at which access is applied (e.g., Management Group, Subscription, Resource Group, or Resource)",
      "A way to name roles",
      "A type of user"
    ],
    answer: 1,
    explanation: "Permissions are inherited from higher levels to lower levels (e.g., Subscription to Resource Group).",
    hint: "Level of access."
  },
  {
    id: 199,
    difficulty: "hard",
    category: "networking",
    question: "What is 'Azure Front Door' WAF Policy?",
    options: [
      "A rule for the office door",
      "A set of security rules that protect your web applications from common web-based attacks (like SQL injection) at the edge",
      "A way to sign in",
      "A storage setting"
    ],
    answer: 1,
    explanation: "WAF on Front Door provides global protection for your web apps before traffic even reaches your region.",
    hint: "Edge web security."
  },
  {
    id: 200,
    difficulty: "medium",
    category: "compute",
    question: "In Azure, what is a 'Snapshot' of a managed disk?",
    options: [
      "A photograph of the server",
      "A full, read-only copy of a managed disk that can be used to create a new disk or restore a VM",
      "A quick backup that only lasts an hour",
      "A way to see the VM screen"
    ],
    answer: 1,
    explanation: "Snapshots are point-in-time copies of your disks, useful for backups or making clones.",
    hint: "Point-in-time disk copy."
  }
];

// Append to main database
//questionBank.push(...batch4);
/* ======================================================
   AZURE MASTER QUESTION BANK (Batch 5/7)
   Topics: Migration, IoT, AI, Serverless, & Governance
   ====================================================== */

const batch5 = [
  {
    id: 201,
    difficulty: "medium",
    category: "migration",
    question: "Which tool provides a centralized hub to assess and migrate on-premises servers, databases, and applications to Azure?",
    options: [
      "Azure Site Recovery",
      "Azure Migrate",
      "Azure Data Box",
      "Azure Advisor"
    ],
    answer: 1,
    explanation: "Azure Migrate acts as a central warehouse for discovery, assessment, and migration tools for your move to the cloud.",
    hint: "The 'Starting Point' for migration."
  },
  {
    id: 202,
    difficulty: "hard",
    category: "iot",
    question: "What is 'Azure IoT Edge'?",
    options: [
      "A way to connect to the edge of the screen",
      "A service that allows you to deploy cloud workloads (AI, Azure services) to run directly on your IoT devices locally",
      "A type of internet cable",
      "A security camera"
    ],
    answer: 1,
    explanation: "IoT Edge moves cloud analytics and custom business logic to devices so that they can spend less time communicating with the cloud.",
    hint: "Cloud compute on local devices."
  },
  {
    id: 203,
    difficulty: "medium",
    category: "ai",
    question: "Which Azure Cognitive Service should you use to build a custom model that can identify specific items (like logos or products) within an image?",
    options: [
      "Computer Vision",
      "Custom Vision",
      "Face API",
      "Form Recognizer"
    ],
    answer: 1,
    explanation: "Custom Vision allows you to train your own specialized image identifiers using your own labels and images.",
    hint: "Customized image recognition."
  },
  {
    id: 204,
    difficulty: "hard",
    category: "networking",
    question: "What is an 'Azure Firewall Policy'?",
    options: [
      "A document explaining security",
      "A global resource that contains the network, application, and NAT rule collections and threat intelligence settings for firewalls",
      "A list of blocked websites",
      "A type of storage"
    ],
    answer: 1,
    explanation: "Firewall Policies make it easier to manage security rules across multiple firewall instances across different regions/subscriptions.",
    hint: "Reusable firewall rules."
  },
  {
    id: 205,
    difficulty: "medium",
    category: "compute",
    question: "In the context of 'Serverless', what does 'Stateless' mean for an Azure Function?",
    options: [
      "The function does not cost money",
      "The function does not store any data in memory from one execution to the next",
      "The function can only run once",
      "The function is not connected to a state in the US"
    ],
    answer: 1,
    explanation: "Stateless functions are easier to scale because every instance is identical. Data must be saved to an external database or storage.",
    hint: "No memory between runs."
  },
  {
    id: 206,
    difficulty: "easy",
    category: "regions",
    question: "What is an 'Azure Region'?",
    options: [
      "A single server",
      "A set of datacenters deployed within a latency-defined perimeter and connected through a dedicated regional low-latency network",
      "A country",
      "The whole world"
    ],
    answer: 1,
    explanation: "Azure is organized into regions worldwide, allowing users to deploy resources close to their customers.",
    hint: "Geographic area of datacenters."
  },
  {
    id: 207,
    difficulty: "hard",
    category: "databases",
    question: "What is 'Liquid Clustering' in the context of Databricks/Delta Lake?",
    options: [
      "A way to cool down servers",
      "A flexible data layout technique that replaces fixed partitioning and Z-Ordering to improve query performance",
      "A type of network connection",
      "A tool to clean databases"
    ],
    answer: 1,
    explanation: "Liquid clustering makes it easier to manage data as it grows, as you don't need to choose a static partition key.",
    hint: "Next-gen data layout."
  },
  {
    id: 208,
    difficulty: "medium",
    category: "iot",
    question: "Which Azure service is a fully managed SaaS (Software as a Service) solution that makes it easy to connect, monitor, and manage your IoT assets at scale?",
    options: [
      "IoT Hub",
      "Azure IoT Central",
      "Azure Sphere",
      "Azure Time Series Insights"
    ],
    answer: 1,
    explanation: "IoT Central is a high-level SaaS that reduces the burden of managing IoT infrastructure compared to the PaaS IoT Hub.",
    hint: "IoT SaaS solution."
  },
  {
    id: 209,
    difficulty: "hard",
    category: "security",
    question: "What is 'Azure Bastion's' primary security benefit?",
    options: [
      "It encrypts the hard drive",
      "It allows RDP/SSH access to VMs without exposing those VMs to the public internet via public IP addresses",
      "It makes the internet faster",
      "It provides a free antivirus"
    ],
    answer: 1,
    explanation: "By using Bastion, you close the management ports (3389/22) to the outside world, significantly reducing attack surface.",
    hint: "No Public IP for RDP."
  },
  {
    id: 210,
    difficulty: "medium",
    category: "governance",
    question: "What are 'Azure Tags'?",
    options: [
      "Stickers on the server",
      "Name-value pairs applied to resources to help organize them for billing, management, and security",
      "A type of programming language",
      "The name of the resource"
    ],
    answer: 1,
    explanation: "Tags allow you to categorize resources, such as 'Environment: Production' or 'Department: HR'.",
    hint: "Metadata for resources."
  },
  {
    id: 211,
    difficulty: "easy",
    category: "compute",
    question: "Which Azure service allows you to run containers without managing any virtual machines or clusters?",
    options: [
      "Azure Kubernetes Service (AKS)",
      "Azure Container Instances (ACI)",
      "Azure Virtual Machines",
      "Azure Batch"
    ],
    answer: 1,
    explanation: "ACI is the fastest way to run a container in Azure, providing a serverless container environment.",
    hint: "Serverless containers."
  },
  {
    id: 212,
    difficulty: "hard",
    category: "networking",
    question: "What is an 'Application Security Group' (ASG)?",
    options: [
      "A team of security experts",
      "An object that allows you to group VMs based on their application function and define security rules based on those groups (rather than IP addresses)",
      "A way to lock the portal",
      "A type of password"
    ],
    answer: 1,
    explanation: "ASGs allow you to create readable security rules (e.g., allow traffic from 'WebServers' to 'DBServers').",
    hint: "Label-based network security."
  },
  {
    id: 213,
    difficulty: "medium",
    category: "ai",
    question: "Which Azure AI service provides a pre-trained model for extracting text and structure (like tables) from scanned documents and receipts?",
    options: [
      "Text Analytics",
      "Form Recognizer (Azure AI Document Intelligence)",
      "Translator",
      "Personalizer"
    ],
    answer: 1,
    explanation: "Form Recognizer uses machine learning to identify and extract text and key-value pairs from documents.",
    hint: "Extracting data from forms."
  },
  {
    id: 214,
    difficulty: "hard",
    category: "databases",
    question: "What is 'Azure SQL Database Serverless'?",
    options: [
      "A database that doesn't use a server",
      "A compute tier for single databases that automatically scales compute based on workload demand and bills for compute used per second",
      "A free database",
      "A way to run SQL in a browser"
    ],
    answer: 1,
    explanation: "Serverless SQL also pauses the database during inactive periods so you only pay for storage, not compute.",
    hint: "Auto-scale and auto-pause."
  },
  {
    id: 215,
    difficulty: "medium",
    category: "governance",
    question: "What is an 'Azure Policy Assignment'?",
    options: [
      "Creating a new policy",
      "Applying a policy definition to a specific scope (Management Group, Subscription, or Resource Group)",
      "Deleting a policy",
      "Sending a policy via email"
    ],
    answer: 1,
    explanation: "The 'Definition' is the rule; the 'Assignment' is the act of enforcing it on specific resources.",
    hint: "Applying the rule."
  },
  {
    id: 216,
    difficulty: "easy",
    category: "availability",
    question: "How many Availability Zones are typically available in an Azure region that supports them?",
    options: [
      "1",
      "2",
      "At least 3",
      "10"
    ],
    answer: 2,
    explanation: "To ensure high availability, Azure regions with zones have a minimum of three separate zones.",
    hint: "The standard number for HA."
  },
  {
    id: 217,
    difficulty: "hard",
    category: "iot",
    question: "What is a 'Device Twin' in Azure IoT Hub?",
    options: [
      "A physical backup of a device",
      "A JSON document that stores device state information (metadata, configurations, and conditions) in the cloud",
      "Two devices with the same ID",
      "A charging station"
    ],
    answer: 1,
    explanation: "The cloud uses the Device Twin to synchronize state with the physical device even if it is currently offline.",
    hint: "Virtual state of a device."
  },
  {
    id: 218,
    difficulty: "medium",
    category: "migration",
    question: "Which Azure service is best for migrating large amounts of data (Terabytes to Petabytes) to Azure using a physical shipping device?",
    options: [
      "Azure Data Factory",
      "Azure Data Box",
      "Azure Storage Explorer",
      "AzCopy"
    ],
    answer: 1,
    explanation: "Data Box is a rugged device provided by Microsoft that you fill with data and ship back to their datacenter.",
    hint: "Offline physical transfer."
  },
  {
    id: 219,
    difficulty: "hard",
    category: "identity",
    question: "What is 'Azure AD Identity Governance' Entitlement Management?",
    options: [
      "Giving users free gifts",
      "An automated way to manage the access lifecycle for groups, applications, and SharePoint sites via 'Access Packages'",
      "A way to buy licenses",
      "A support ticket system"
    ],
    answer: 1,
    explanation: "Entitlement management helps you manage access to resources for users inside and outside your organization.",
    hint: "Access packages."
  },
  {
    id: 220,
    difficulty: "medium",
    category: "compute",
    question: "What is an 'Azure Function Trigger'?",
    options: [
      "A weapon in a video game",
      "An event that causes a function to run (e.g., an HTTP request or a message in a queue)",
      "A way to delete a function",
      "The name of the function"
    ],
    answer: 1,
    explanation: "Every function must have exactly one trigger that defines how it is invoked.",
    hint: "The event that starts it."
  },
  {
    id: 221,
    difficulty: "easy",
    category: "security",
    question: "Which Azure service acts as a specialized firewall for web applications, protecting them from common exploits like Cross-Site Scripting (XSS)?",
    options: [
      "Azure Firewall",
      "Web Application Firewall (WAF)",
      "Azure Bastion",
      "Azure Sentinel"
    ],
    answer: 1,
    explanation: "WAF is specifically designed to protect web applications (Layer 7) from OWASP Top 10 threats.",
    hint: "OWASP protection."
  },
  {
    id: 222,
    difficulty: "hard",
    category: "storage",
    question: "What is 'Blob Index Tags'?",
    options: [
      "Labels on the hard drive",
      "Key-value attributes that allow you to categorize and find data within your storage account using SQL-like syntax",
      "A way to name files",
      "A type of encryption"
    ],
    answer: 1,
    explanation: "Index tags allow you to find specific blobs without having to scan the entire container, improving efficiency.",
    hint: "Searchable blob metadata."
  },
  {
    id: 223,
    difficulty: "medium",
    category: "scenarios",
    question: "You want to create a solution that translates customer reviews from 10 different languages into English in real-time. Which service do you use?",
    options: [
      "Azure Speech",
      "Azure Translator",
      "Azure Form Recognizer",
      "Azure Personalizer"
    ],
    answer: 1,
    explanation: "Translator is a cloud-based machine translation service that supports text translation between dozens of languages.",
    hint: "Language translation."
  },
  {
    id: 224,
    difficulty: "hard",
    category: "networking",
    question: "What is 'Service Chaining' in an Azure Virtual Network?",
    options: [
      "Connecting many servers with a chain",
      "The practice of routing traffic from one subnet through a Network Virtual Appliance (NVA) before it reaches its destination",
      "A type of network cable",
      "A way to group VNets"
    ],
    answer: 1,
    explanation: "This is commonly used to ensure all traffic is inspected by a firewall NVA before going to the database subnet.",
    hint: "Routing via NVA."
  },
  {
    id: 225,
    difficulty: "medium",
    category: "cost",
    question: "What is the 'Azure Hybrid Benefit'?",
    options: [
      "A way to use Azure for free",
      "A pricing benefit that allows you to use your existing on-premises Windows Server or SQL Server licenses in Azure to save money",
      "A discount for working from home",
      "A special support plan"
    ],
    answer: 1,
    explanation: "It can save up to 40% on Azure VMs by avoiding the cost of the OS license if you already own it.",
    hint: "Reuse on-prem licenses."
  },
  {
    id: 226,
    difficulty: "easy",
    category: "monitoring",
    question: "Which feature of Azure Monitor allows you to visualize the health and performance of your virtual machines and their dependencies?",
    options: [
      "Log Analytics",
      "VM Insights",
      "Metrics Explorer",
      "Activity Log"
    ],
    answer: 1,
    explanation: "VM Insights provides a map of processes and dependencies to see how your VMs interact.",
    hint: "Visualization for VMs."
  },
  {
    id: 227,
    difficulty: "hard",
    category: "governance",
    question: "What is the purpose of 'Azure Resource Locks'?",
    options: [
      "To lock the server room door",
      "To prevent accidental deletion or modification of critical Azure resources",
      "To encrypt data",
      "To block users from the portal"
    ],
    answer: 1,
    explanation: "CanNotDelete and ReadOnly locks override any user permissions, protecting resources from mistakes.",
    hint: "Guardrails against deletion."
  },
  {
    id: 228,
    difficulty: "medium",
    category: "databases",
    question: "Which Azure SQL Database feature provides an automated way to optimize the performance of your database based on its actual usage patterns?",
    options: [
      "Manual Tuning",
      "Automatic Tuning",
      "Query Store",
      "Elastic Pools"
    ],
    answer: 1,
    explanation: "Automatic Tuning can automatically apply performance fixes, like adding missing indexes or dropping unused ones.",
    hint: "Self-optimizing SQL."
  },
  {
    id: 229,
    difficulty: "hard",
    category: "security",
    question: "What is 'Microsoft Defender for Key Vault'?",
    options: [
      "A physical lock for the key vault",
      "An advanced threat protection layer that detects unusual and potentially harmful attempts to access or exploit your key vaults",
      "A way to share keys",
      "A backup for keys"
n    ],
    answer: 1,
    explanation: "It alerts you to suspicious activities, such as access from an unusual location or a high volume of secret requests.",
    hint: "Threat detection for keys."
  },
  {
    id: 230,
    difficulty: "medium",
    category: "scenarios",
    question: "You need to store sensitive company passwords so that they can be accessed programmatically by an application. Which service is best?",
    options: [
      "Azure Storage",
      "Azure Key Vault",
      "Azure SQL",
      "Azure Cosmos DB"
    ],
    answer: 1,
    explanation: "Key Vault is specifically designed for securely storing secrets, keys, and certificates.",
    hint: "The cloud 'safe'."
  },
  {
    id: 231,
    difficulty: "easy",
    category: "identity",
    question: "What is 'Azure Role-Based Access Control' (RBAC)?",
    options: [
      "A way to name users",
      "A system that provides fine-grained access management of Azure resources based on user roles",
      "A list of all users",
      "A type of password"
    ],
    answer: 1,
    explanation: "RBAC helps you manage who has access to Azure resources and what they can do with them.",
    hint: "Who does what."
  },
  {
    id: 232,
    difficulty: "hard",
    category: "iot",
    question: "What is 'Azure IoT Hub Message Routing'?",
    options: [
      "A map for devices",
      "The ability to send telemetry messages from devices to different endpoints (like Storage, Service Bus, or Event Hubs) based on rules",
      "Connecting devices via GPS",
      "A way to send emails to devices"
    ],
    answer: 1,
    explanation: "Routing allows you to filter and direct data to the appropriate processing service automatically.",
    hint: "Directing device data."
  },
  {
    id: 233,
    difficulty: "medium",
    category: "compute",
    question: "What is an 'Azure VM Scale Set' (VMSS)?",
    options: [
      "A collection of different VMs",
      "A group of identical, load-balanced VMs that can automatically increase or decrease in number based on demand",
      "A way to measure the size of a VM",
      "A backup of a VM"
    ],
    answer: 1,
    explanation: "VMSS provides high availability and allows you to manage and scale large numbers of VMs as a single unit.",
    hint: "Identical group of VMs."
  },
  {
    id: 234,
    difficulty: "hard",
    category: "migration",
    question: "What is the 'Azure Database Migration Service' (DMS)?",
    options: [
      "A tool to delete databases",
      "A fully managed service designed to enable seamless migrations from multiple database sources to Azure data platforms with minimal downtime",
      "A manual on how to move data",
      "A type of SQL server"
    ],
    answer: 1,
    explanation: "DMS handles the heavy lifting of moving data and schema from on-prem engines like Oracle or SQL Server to Azure.",
    hint: "Minimal downtime DB move."
  },
  {
    id: 235,
    difficulty: "medium",
    category: "governance",
    question: "What is the 'Azure Cloud Shell'?",
    options: [
      "A physical case for a server",
      "An interactive, authenticated, browser-accessible terminal for managing Azure resources using Bash or PowerShell",
      "A way to browse the internet",
      "A help menu"
    ],
    answer: 1,
    explanation: "Cloud Shell comes with pre-installed tools like Azure CLI, Terraform, and kubectl.",
    hint: "In-browser terminal."
  },
  {
    id: 236,
    difficulty: "easy",
    category: "availability",
    question: "Which feature protects your application from the failure of a single datacenter within a region?",
    options: [
      "Availability Sets",
      "Availability Zones",
      "Resource Groups",
      "Virtual Networks"
    ],
    answer: 1,
    explanation: "Zones provide physical separation and independent power/cooling/networking.",
    hint: "Datacenter-level protection."
  },
  {
    id: 237,
    difficulty: "hard",
    category: "ai",
    question: "What is 'Azure Machine Learning Designer'?",
    options: [
      "A tool to draw logos",
      "A drag-and-drop interface used to build, test, and deploy machine learning models visually",
      "A way to write Python code",
      "A support service"
    ],
    answer: 1,
    explanation: "The Designer allows data scientists to create ML pipelines without writing extensive code.",
    hint: "Visual ML building."
  },
  {
    id: 238,
    difficulty: "medium",
    category: "security",
    question: "What is 'Azure Sentinel' (Microsoft Sentinel) Data Connector?",
    options: [
      "A cable for servers",
      "A built-in mechanism to ingest data from different sources (like Entra ID, Office 365, or AWS) into Sentinel",
      "A way to connect to Wi-Fi",
      "A storage account"
    ],
    answer: 1,
    explanation: "Connectors are the first step in getting security data into the SIEM for analysis.",
    hint: "Ingesting security logs."
  },
  {
    id: 239,
    difficulty: "hard",
    category: "networking",
    question: "What is the purpose of 'Azure Virtual Network Peering'?",
    options: [
      "To connect a VNet to the internet",
      "To seamlessly connect two Azure virtual networks so that they appear as one for connectivity purposes",
      "To see the name of the VNet",
      "To encrypt a VNet"
    ],
    answer: 1,
    explanation: "Peering uses the Microsoft backbone network and provides low-latency, high-bandwidth connectivity.",
    hint: "VNet-to-VNet connection."
  },
  {
    id: 240,
    difficulty: "medium",
    category: "databases",
    question: "Which service should you use for a globally distributed, multi-model NoSQL database that provides single-digit millisecond latency?",
    options: [
      "Azure SQL Database",
      "Azure Cosmos DB",
      "Azure Table Storage",
      "Azure Cache for Redis"
    ],
    answer: 1,
    explanation: "Cosmos DB is designed for high-scale, low-latency applications with global reach.",
    hint: "Global NoSQL."
  },
  {
    id: 241,
    difficulty: "easy",
    category: "governance",
    question: "What is the 'Azure Portal'?",
    options: [
      "A physical door to the datacenter",
      "A web-based, unified console that provides an alternative to command-line tools for managing Azure resources",
      "A way to buy Microsoft 365",
      "A help website"
    ],
    answer: 1,
    explanation: "The Portal is the primary GUI for interacting with Azure.",
    hint: "The Azure GUI."
  },
  {
    id: 242,
    difficulty: "hard",
    category: "scenarios",
    question: "You need to process 1 billion events daily from IoT sensors and store them for long-term cold storage. Which architecture is best?",
    options: [
      "IoT Hub -> Event Hubs -> SQL Database",
      "IoT Hub -> Message Routing -> Azure Blob Storage (Archive Tier)",
      "IoT Hub -> Azure Functions -> Cosmos DB",
      "IoT Hub -> Virtual Machines -> Hard Drives"
    ],
    answer: 1,
    explanation: "Message routing directly to Blob storage is the most cost-effective way to ingest and store large volumes of telemetry.",
    hint: "Direct routing to storage."
  },
  {
    id: 243,
    difficulty: "medium",
    category: "monitoring",
    question: "What is 'Azure Service Health'?",
    options: [
      "A gym for employees",
      "A service that provides personalized alerts and guidance when Azure service issues affect your resources",
      "A tool to check your local PC health",
      "A backup service"
    ],
    answer: 1,
    explanation: "Service Health keeps you informed about outages, maintenance, and advisories relevant to your specific services.",
    hint: "Outage alerts."
  },
  {
    id: 244,
    difficulty: "hard",
    category: "identity",
    question: "What is an 'Azure Managed Identity'?",
    options: [
      "A user account managed by a person",
      "An automatically managed identity in Entra ID that allows an Azure resource (like a VM) to authenticate to other services without storing credentials in code",
      "A type of driver's license",
      "A security group"
    ],
    answer: 1,
    explanation: "Managed identities eliminate the risk of leaking secrets in your source code.",
    hint: "Passwordless resource auth."
  },
  {
    id: 245,
    difficulty: "medium",
    category: "scenarios",
    question: "You need to scale an application to 1,000 VM instances in seconds. Which Azure compute service is designed for this?",
    options: [
      "Azure App Service",
      "Azure VM Scale Sets",
      "Azure Batch",
      "Azure Functions"
    ],
    answer: 1,
    explanation: "VM Scale Sets allow you to deploy and manage a huge number of identical VMs very quickly.",
    hint: "Massive scale VMs."
  },
  {
    id: 246,
    difficulty: "easy",
    category: "cost",
    question: "What is the 'Total Cost of Ownership' (TCO) Calculator used for?",
    options: [
      "To see your current Azure bill",
      "To estimate the cost savings you can realize by migrating your on-premises workloads to Azure",
      "To pay your bill",
      "To buy new servers"
    ],
    answer: 1,
    explanation: "The TCO calculator compares the costs of running on-prem (power, hardware, labor) versus Azure over time.",
    hint: "Pre-migration cost comparison."
  },
  {
    id: 247,
    difficulty: "hard",
    category: "security",
    question: "What is 'Azure Disk Encryption' vs 'Storage Service Encryption' (SSE)?",
    options: [
      "They are the same",
      "ADE encrypts at the OS level using BitLocker/DM-Crypt; SSE encrypts at the storage platform level automatically",
      "ADE is only for storage accounts",
      "SSE requires a password"
    ],
    answer: 1,
    explanation: "SSE is on by default for all storage. ADE is an additional layer you enable on specific VM disks.",
    hint: "OS-level vs Platform-level."
  },
  {
    id: 248,
    difficulty: "medium",
    category: "networking",
    question: "What is an 'Azure Public IP'?",
    options: [
      "A secret IP address",
      "An IP address that can be reached from the internet, used to expose services like web servers or VPN gateways",
      "A type of Wi-Fi",
      "A way to hide your identity"
    ],
    answer: 1,
    explanation: "Public IPs allow resources to communicate with the internet and other public-facing services.",
    hint: "Internet-facing IP."
  },
  {
    id: 249,
    difficulty: "hard",
    category: "governance",
    question: "What is an 'Azure Management Group' hierarchy limit?",
    options: [
      "1 level",
      "6 levels",
      "Up to 10,000 groups",
      "No limit"
    ],
    answer: 1,
    explanation: "Management groups can be nested up to six levels deep, not including the Root level.",
    hint: "Depth of hierarchy."
  },
  {
    id: 250,
    difficulty: "medium",
    category: "availability",
    question: "In Azure, what is 'High Availability' (HA)?",
    options: [
      "Making the server faster",
      "Ensuring that a system is operational and accessible for a high percentage of the time by minimizing downtime",
      "Charging more for a service",
      "Buying more storage"
    ],
    answer: 1,
    explanation: "HA is achieved through redundancy (Zones, Sets, etc.) so that if one part fails, the system keeps running.",
    hint: "Minimize downtime."
  }
];

// Append to main database
//questionBank.push(...batch5);
/* ======================================================
   AZURE MASTER QUESTION BANK (Batch 6/7)
   Topics: Hybrid Cloud, Advanced Serverless, Firewall, & Clustering
   ====================================================== */

const batch6 = [
  {
    id: 251,
    difficulty: "hard",
    category: "serverless",
    question: "Which Azure Functions extension allows you to write stateful workflows by managing state, checkpoints, and restarts for you?",
    options: [
      "Azure Logic Apps",
      "Durable Functions",
      "Function Proxies",
      "Event Grid Triggers"
    ],
    answer: 1,
    explanation: "Durable Functions is an extension of Azure Functions that lets you write stateful functions in a serverless environment.",
    hint: "Stateful serverless workflows."
  },
  {
    id: 252,
    difficulty: "medium",
    category: "hybrid",
    question: "Which Azure service allows you to manage and govern your on-premises and multi-cloud servers (AWS, GCP) as if they were running in Azure?",
    options: [
      "Azure Stack Hub",
      "Azure Arc",
      "Azure ExpressRoute",
      "Azure Site Recovery"
    ],
    answer: 1,
    explanation: "Azure Arc extends Azure management and services to any infrastructure, including on-prem servers and Kubernetes clusters.",
    hint: "Bridge to other clouds/on-prem."
  },
  {
    id: 253,
    difficulty: "hard",
    category: "networking",
    question: "In Azure Firewall, what is 'Threat Intelligence-based filtering'?",
    options: [
      "A way to scan for viruses on VMs",
      "A feature that alerts or denies traffic to/from known malicious IP addresses and domains based on Microsoft security data",
      "A list of blocked websites written by the admin",
      "A type of physical firewall"
    ],
    answer: 1,
    explanation: "Microsoft's Threat Intelligence feed is updated in real-time to protect against known bad actors automatically.",
    hint: "Microsoft's 'known bad' list."
  },
  {
    id: 254,
    difficulty: "medium",
    category: "availability",
    question: "What is the primary difference between a 'Hot' and 'Cool' storage tier?",
    options: [
      "Hot is for old data; Cool is for new data",
      "Hot has higher storage costs but lower access costs; Cool has lower storage costs but higher access costs",
      "Hot is for Linux; Cool is for Windows",
      "Cool storage is physically cold in the data center"
    ],
    answer: 1,
    explanation: "Hot tier is optimized for data accessed frequently. Cool tier is for data stored for at least 30 days and accessed infrequently.",
    hint: "Storage cost vs Access cost."
  },
  {
    id: 255,
    difficulty: "hard",
    category: "compute",
    question: "What is an 'Azure Dedicated Host'?",
    options: [
      "A VM that only runs one app",
      "A physical server dedicated to a single Azure subscription that provides hardware-level isolation",
      "A support engineer assigned to your account",
      "A website that doesn't share IPs"
    ],
    answer: 1,
    explanation: "Dedicated hosts give you visibility and control over the placement of VMs on a specific physical server.",
    hint: "Hardware isolation."
  },
  {
    id: 256,
    difficulty: "medium",
    category: "iot",
    question: "Which Azure service is used for processing and analyzing massive amounts of time-series data from IoT devices in real-time?",
    options: [
      "Azure SQL Database",
      "Azure Data Explorer (Kusto)",
      "Azure Blob Storage",
      "Azure App Service"
    ],
    answer: 1,
    explanation: "Azure Data Explorer is highly optimized for log and telemetry analytics with extremely fast query performance.",
    hint: "Big data telemetry queries."
  },
  {
    id: 257,
    difficulty: "hard",
    category: "networking",
    question: "What is 'Forced Tunneling' in an Azure VNet?",
    options: [
      "A way to speed up the internet",
      "A configuration that redirects all internet-bound traffic back to your on-premises location for inspection via a VPN or ExpressRoute",
      "A type of network error",
      "Connecting two VNets in different countries"
    ],
    answer: 1,
    explanation: "Forced tunneling allows organizations to maintain security compliance by routing all traffic through their on-prem firewalls.",
    hint: "Send all traffic on-prem."
  },
  {
    id: 258,
    difficulty: "medium",
    category: "serverless",
    question: "Which Logic Apps 'Trigger' occurs at specific intervals (e.g., every Monday at 9 AM)?",
    options: [
      "HTTP Trigger",
      "Recurrence Trigger",
      "Event Grid Trigger",
      "Webhook Trigger"
    ],
    answer: 1,
    explanation: "The Recurrence trigger allows you to schedule workflows based on a specific time frequency.",
    hint: "Scheduled start."
  },
  {
    id: 259,
    difficulty: "easy",
    category: "regions",
    question: "What is an 'Azure Sovereign Region'?",
    options: [
      "A region for kings",
      "Specially built regions for government or specific compliance needs (e.g., Azure Government, Azure China)",
      "A region that doesn't use the internet",
      "A region with only one server"
    ],
    answer: 1,
    explanation: "Sovereign regions are physically and logically isolated from the global Azure infrastructure for extreme compliance.",
    hint: "Isolated for government/legal."
  },
  {
    id: 260,
    difficulty: "hard",
    category: "availability",
    question: "What is 'Proximity Placement Group' (PPG) primarily used for?",
    options: [
      "To group users by their location",
      "To ensure that Azure compute resources are physically located as close as possible to each other to reduce latency",
      "To find the nearest datacenter",
      "To organize Resource Groups"
    ],
    answer: 1,
    explanation: "PPG is critical for high-performance applications where microsecond latency between VMs is required.",
    hint: "Lowest possible latency."
  },
  {
    id: 261,
    difficulty: "medium",
    category: "security",
    question: "What is 'Azure Key Vault Managed HSM'?",
    options: [
      "A manual for security",
      "A fully managed, highly available, single-tenant, standards-compliant cloud service for storing cryptographic keys (FIPS 140-2 Level 3)",
      "A way to share passwords",
      "A virus scanner for keys"
    ],
    answer: 1,
    explanation: "Managed HSM offers higher security levels and isolation than the standard multi-tenant Key Vault.",
    hint: "Single-tenant high security."
  },
  {
    id: 262,
    difficulty: "hard",
    category: "networking",
    question: "What is an 'Azure Application Gateway' Ingress Controller (AGIC)?",
    options: [
      "A way to log into the portal",
      "An application that allows AKS to use an Application Gateway as the entry point for internet traffic to the cluster",
      "A type of firewall for VMs",
      "A load balancer for SQL"
    ],
    answer: 1,
    explanation: "AGIC eliminates the need for an in-cluster load balancer by using the App Gateway's L7 capabilities directly with AKS.",
    hint: "App Gateway + AKS."
  },
  {
    id: 263,
    difficulty: "medium",
    category: "databases",
    question: "Which Azure service provides a fully managed Redis cache to improve application performance by caching frequently used data?",
    options: [
      "Azure Cosmos DB",
      "Azure Cache for Redis",
      "Azure SQL Database",
      "Azure Table Storage"
    ],
    answer: 1,
    explanation: "Redis is an in-memory data store used to speed up web applications by reducing database load.",
    hint: "In-memory caching."
  },
  {
    id: 264,
    difficulty: "hard",
    category: "hybrid",
    question: "What is 'Azure Stack HCI'?",
    options: [
      "A website for developers",
      "A hyperconverged infrastructure host operating system that runs as an Azure service to provide hybrid compute and storage on-prem",
      "A way to backup on-prem servers",
      "A type of network switch"
    ],
    answer: 1,
    explanation: "HCI (Hyper-Converged Infrastructure) uses standard hardware to run virtualized workloads on-premises while connecting to Azure.",
    hint: "Modern on-prem virtualization."
  },
  {
    id: 265,
    difficulty: "medium",
    category: "monitoring",
    question: "What is an 'Azure Monitor Action Group'?",
    options: [
      "A group of employees who fix servers",
      "A collection of notification preferences (email, SMS, push) and automation actions triggered by an alert",
      "A list of blocked IP addresses",
      "A type of dashboard"
    ],
    answer: 1,
    explanation: "Action Groups define *who* to notify and *what* to do (like run a Logic App) when an alert fires.",
    hint: "What happens after an alert."
  },
  {
    id: 266,
    difficulty: "easy",
    category: "scenarios",
    question: "You want to create a workflow that automatically posts a message to Microsoft Teams whenever a specific file is uploaded to a SharePoint folder. Which service is easiest?",
    options: [
      "Azure Functions",
      "Azure Logic Apps",
      "Azure VM",
      "Azure Batch"
    ],
    answer: 1,
    explanation: "Logic Apps is a no-code/low-code platform with hundreds of pre-built connectors for services like Teams and SharePoint.",
    hint: "Visual workflow/connectors."
  },
  {
    id: 267,
    difficulty: "hard",
    category: "governance",
    question: "What is 'Azure Lighthouse'?",
    options: [
      "A physical light in a data center",
      "A service that enables multi-tenant management, allowing service providers to manage Azure resources for multiple customers from a single portal",
      "A way to see global traffic",
      "A security tool for passwords"
    ],
    answer: 1,
    explanation: "Lighthouse is essential for Managed Service Providers (MSPs) to securely oversee multiple client environments.",
    hint: "Multi-tenant management."
  },
  {
    id: 268,
    difficulty: "medium",
    category: "compute",
    question: "What is the 'Consumption Plan' in Azure Functions?",
    options: [
      "A plan where you pay for the number of hours the server is on",
      "A serverless plan where you only pay for the number of executions and the resources used during execution",
      "A plan for large corporations",
      "A free trial"
    ],
    answer: 1,
    explanation: "The Consumption plan scales automatically and you are billed only when your functions are running.",
    hint: "True serverless billing."
  },
  {
    id: 269,
    difficulty: "hard",
    category: "networking",
    question: "What is 'Azure Private Resolver'?",
    options: [
      "A person who fixes network issues",
      "A cloud-native service that allows you to query Azure DNS private zones from an on-premises environment and vice versa without custom DNS servers",
      "A type of firewall",
      "A way to reset passwords"
    ],
    answer: 1,
    explanation: "It simplifies hybrid DNS by bridging the gap between on-prem DNS and Azure Private DNS zones.",
    hint: "Hybrid DNS bridge."
  },
  {
    id: 270,
    difficulty: "medium",
    category: "storage",
    question: "What is 'Azure File Sync'?",
    options: [
      "A way to copy files to a phone",
      "A service that centralizes your organization's file shares in Azure Files, while keeping the flexibility, performance, and compatibility of an on-premises file server",
      "A backup for the portal",
      "A way to sync SQL data"
    ],
    answer: 1,
    explanation: "It allows you to cache frequently used files on your local Windows Server while the full dataset is in the cloud.",
    hint: "Cloud tiering for file servers."
  },
  {
    id: 271,
    difficulty: "hard",
    category: "security",
    question: "In Microsoft Sentinel, what is 'UEBA' (User and Entity Behavior Analytics)?",
    options: [
      "A list of company rules",
      "A feature that uses machine learning to identify anomalous behavior by users or devices that might indicate a security threat",
      "A way to delete users",
      "A training course"
    ],
    answer: 1,
    explanation: "UEBA helps detect 'insider threats' or compromised accounts by learning what is 'normal' for each entity.",
    hint: "Behavior-based detection."
  },
  {
    id: 272,
    difficulty: "medium",
    category: "availability",
    question: "What is an 'Azure Availability Set' Update Domain?",
    options: [
      "A group of VMs that get updated at the same time",
      "A group of VMs and underlying physical hardware that can be rebooted at the same time during planned maintenance",
      "A way to update the portal",
      "A type of storage"
    ],
    answer: 1,
    explanation: "By spreading VMs across multiple update domains, Azure ensures that at least one VM instance stays running during platform updates.",
    hint: "Protection from maintenance."
  },
  {
    id: 273,
    difficulty: "hard",
    category: "databases",
    question: "Which Cosmos DB consistency level provides a 'middle ground' where reads are guaranteed to follow the sequence of writes but may lag behind slightly?",
    options: [
      "Strong",
      "Bounded Staleness",
      "Session",
      "Eventual"
    ],
    answer: 1,
    explanation: "Bounded Staleness ensures the lag (staleness) is within a certain time window or a certain number of versions.",
    hint: "Controlled staleness."
  },
  {
    id: 274,
    difficulty: "easy",
    category: "iot",
    question: "What is 'Azure Sphere'?",
    options: [
      "A physical ball in the office",
      "A high-security, end-to-end solution for creating secured, connected microcontroller (MCU) devices",
      "A VR headset",
      "A 360-degree camera"
    ],
    answer: 1,
    explanation: "Sphere includes a custom Linux-based OS, a secure hardware chip, and a cloud security service.",
    hint: "Secure IoT hardware/software."
  },
  {
    id: 275,
    difficulty: "medium",
    category: "networking",
    question: "What is 'Azure Virtual Network NAT' (Network Address Translation)?",
    options: [
      "A way to translate languages",
      "A service that provides outbound internet connectivity for one or more subnets of a virtual network using a static public IP",
      "A tool to hide the VNet",
      "A type of VPN"
    ],
    answer: 1,
    explanation: "NAT Gateway simplifies outbound connectivity and provides a more scalable solution than using a Standard Load Balancer.",
    hint: "Static Outbound IP."
  },
  {
    id: 276,
    difficulty: "hard",
    category: "compute",
    question: "What is an 'Azure Spot Virtual Machine'?",
    options: [
      "A VM with a spotted pattern",
      "A VM that allows you to take advantage of unused Azure capacity at a significant discount, but can be evicted if Azure needs the capacity back",
      "A VM that only runs in one spot",
      "A premium VM"
    ],
    answer: 1,
    explanation: "Spot VMs are ideal for workloads that can handle interruptions, like batch processing or testing.",
    hint: "Cheap but evictable."
  },
  {
    id: 277,
    difficulty: "medium",
    category: "governance",
    question: "What is 'Azure Resource Manager' (ARM)?",
    options: [
      "A person who builds servers",
      "The deployment and management service for Azure that provides a consistent management layer for all resources",
      "A type of hard drive",
      "A list of resources"
    ],
    answer: 1,
    explanation: "Every action you take in the Portal, CLI, or PowerShell goes through the ARM API.",
    hint: "The central Azure API."
  },
  {
    id: 278,
    difficulty: "hard",
    category: "monitoring",
    question: "What is 'Application Insights' Profiler?",
    options: [
      "A tool to see user photos",
      "A feature that captures detailed performance traces of your application's code to help identify bottlenecks in production",
      "A list of developer profiles",
      "A way to speed up the portal"
    ],
    answer: 1,
    explanation: "Profiler helps you see exactly which line of code is taking the longest to execute.",
    hint: "Code-level performance trace."
  },
  {
    id: 279,
    difficulty: "medium",
    category: "security",
    question: "What is 'Azure Information Protection' (AIP)?",
    options: [
      "A type of firewall",
      "A cloud-based solution that helps an organization to classify and optionally, protect its documents and emails by applying labels",
      "A way to hide IP addresses",
      "A secure browser"
    ],
    answer: 1,
    explanation: "AIP allows you to tag documents as 'Confidential' and automatically encrypt them so only specific people can open them.",
    hint: "Data classification/labeling."
  },
  {
    id: 280,
    difficulty: "easy",
    category: "scenarios",
    question: "You want to deploy a set of resources (VNet, SQL, Web App) multiple times with the exact same configuration. What should you use?",
    options: [
      "The Azure Portal",
      "ARM Templates (or Bicep)",
      "A PDF guide",
      "Manual installation"
    ],
    answer: 1,
    explanation: "Infrastructure as Code (IaC) via ARM templates or Bicep ensures repeatable and consistent deployments.",
    hint: "Infrastructure as Code."
  },
  {
    id: 281,
    difficulty: "hard",
    category: "networking",
    question: "What is 'Azure Web Application Firewall' (WAF) Bot Protection?",
    options: [
      "A way to chat with bots",
      "A feature that uses a managed rule set to block or challenge traffic from known malicious bots while allowing good bots (like Googlebot)",
      "A type of antivirus",
      "A tool to build bots"
    ],
    answer: 1,
    explanation: "Bot protection prevents scrapers and automated attacks from overwhelming your site.",
    hint: "Blocking malicious crawlers."
  },
  {
    id: 282,
    difficulty: "medium",
    category: "identity",
    question: "What is 'Entra ID Managed Identities' (User-assigned)?",
    options: [
      "An identity you create and manage as a standalone Azure resource, which can be shared by multiple Azure resources",
      "A username and password you give a user",
      "A way to login to Windows",
      "A type of security group"
    ],
    answer: 0,
    explanation: "User-assigned identities have their own lifecycle and can be attached to multiple VMs or Functions.",
    hint: "Shared managed identity."
  },
  {
    id: 283,
    difficulty: "hard",
    category: "storage",
    question: "What is 'Azure NetApp Files'?",
    options: [
      "A way to download files faster",
      "An enterprise-grade, high-performance file storage service powered by NetApp technology, delivered as a native Azure service",
      "A type of backup",
      "A free file share"
    ],
    answer: 1,
    explanation: "NetApp Files is ideal for high-performance SAP or HPC workloads that require extreme IOPS and low latency.",
    hint: "Enterprise high-perf NFS/SMB."
  },
  {
    id: 284,
    difficulty: "medium",
    category: "scenarios",
    question: "You need to run a high-performance database that requires the fastest possible disk IOPS. Which disk type should you choose?",
    options: [
      "Standard HDD",
      "Standard SSD",
      "Premium SSD v2 (or Ultra Disk)",
      "Azure Blob Storage"
    ],
    answer: 2,
    explanation: "Ultra Disks and Premium v2 provide the highest IOPS and throughput with sub-millisecond latency.",
    hint: "Top-tier disk performance."
  },
  {
    id: 285,
    difficulty: "hard",
    category: "serverless",
    question: "In Azure Logic Apps, what is a 'Custom Connector'?",
    options: [
      "A physical plug",
      "A way to interact with an API that doesn't have a pre-built connector by providing a Swagger (OpenAPI) definition",
      "A person who connects servers",
      "A special type of VM"
    ],
    answer: 1,
    explanation: "Custom connectors allow you to extend Logic Apps to talk to your own proprietary internal systems.",
    hint: "Logic App to custom API."
  },
  {
    id: 286,
    difficulty: "easy",
    category: "availability",
    question: "What is the Service Level Agreement (SLA) for a single-instance VM using Premium SSD storage in Azure?",
    options: [
      "90%",
      "99.9%",
      "99.99%",
      "100%"
    ],
    answer: 1,
    explanation: "Azure offers a 99.9% SLA for single VMs if they use Premium SSD for all disks.",
    hint: "Standard VM SLA."
  },
  {
    id: 287,
    difficulty: "hard",
    category: "networking",
    question: "What is 'VNet Flow Logs' in Azure Network Watcher?",
    options: [
      "A record of water usage",
      "A feature that records information about IP traffic flowing through a Network Security Group (NSG)",
      "A way to speed up the network",
      "A list of VM names"
    ],
    answer: 1,
    explanation: "Flow logs are essential for auditing and troubleshooting network security rules.",
    hint: "Logging NSG traffic."
  },
  {
    id: 288,
    difficulty: "medium",
    category: "identity",
    question: "What is 'Entra ID Connect Health'?",
    options: [
      "A gym for IT staff",
      "A service that monitors your on-premises identity infrastructure (like ADFS or Sync servers) and provides alerts",
      "A way to reset passwords",
      "A type of antivirus"
    ],
    answer: 1,
    explanation: "It ensures the bridge between your on-prem AD and Azure is working correctly.",
    hint: "Monitoring the sync bridge."
  },
  {
    id: 289,
    difficulty: "hard",
    category: "security",
    question: "What is 'Azure Confidential Computing'?",
    options: [
      "Computing in a secret room",
      "A technology that protects data in use by performing computation in a hardware-based Trusted Execution Environment (TEE)",
      "Encrypted hard drives",
      "A hidden Azure region"
    ],
    answer: 1,
    explanation: "It ensures that even the cloud provider (Microsoft) cannot see the data while it is being processed in memory.",
    hint: "Encryption of data in-use."
  },
  {
    id: 290,
    difficulty: "medium",
    category: "scenarios",
    question: "You want to automate the deployment of Azure resources using a language that is more readable and concise than JSON. Which should you choose?",
    options: [
      "ARM Templates",
      "Bicep",
      "Excel",
      "Notepad"
    ],
    answer: 1,
    explanation: "Bicep is a Domain Specific Language (DSL) that compiles into ARM templates but is much easier for humans to write.",
    hint: "Cleaner ARM alternative."
  },
  {
    id: 291,
    difficulty: "easy",
    category: "cost",
    question: "What are 'Azure Reservations'?",
    options: [
      "Booking a hotel via Azure",
      "A way to save money by committing to a one-year or three-year plan for certain resources (like VMs or SQL)",
      "Saving a name for a resource",
      "A discount for students"
    ],
    answer: 1,
    explanation: "Reservations can provide up to 72% savings compared to pay-as-you-go prices.",
    hint: "Commitment for discount."
  },
  {
    id: 292,
    difficulty: "hard",
    category: "governance",
    question: "What is an 'Azure Policy Initiative'?",
    options: [
      "A new project",
      "A collection of multiple policy definitions grouped together to track compliance for a larger goal (e.g., 'PCI Compliance')",
      "A way to delete resources",
      "A training program"
    ],
    answer: 1,
    explanation: "Initiatives make it easier to manage and assign large sets of policies as a single object.",
    hint: "Group of policies."
  },
  {
    id: 293,
    difficulty: "medium",
    category: "monitoring",
    question: "Which KQL (Kusto Query Language) command is used to filter results in a Log Analytics query?",
    options: [
      "filter",
      "where",
      "search",
      "find"
    ],
    answer: 1,
    explanation: "The 'where' operator filters a table to the subset of rows that satisfy a predicate.",
    hint: "Standard KQL filter."
  },
  {
    id: 294,
    difficulty: "hard",
    category: "networking",
    question: "What is 'Azure Global VNet Peering'?",
    options: [
      "Peering within the same building",
      "Connecting two virtual networks in different Azure regions",
      "Connecting to the internet",
      "A type of VPN"
    ],
    answer: 1,
    explanation: "Global peering allows resources in different regions to communicate over the Microsoft backbone without the public internet.",
    hint: "Cross-region peering."
  },
  {
    id: 295,
    difficulty: "medium",
    category: "scenarios",
    question: "You need to store data in a database that automatically increases its storage capacity up to 100TB as needed. Which Azure SQL tier is best?",
    options: [
      "General Purpose",
      "Business Critical",
      "Hyperscale",
      "Basic"
    ],
    answer: 2,
    explanation: "Hyperscale is a cloud-native service tier that scales storage and compute independently and supports massive databases.",
    hint: "Scalable up to 100TB."
  },
  {
    id: 296,
    difficulty: "easy",
    category: "identity",
    question: "What is 'Azure Active Directory' (now Microsoft Entra ID)?",
    options: [
      "A phone book",
      "A cloud-based identity and access management service",
      "A way to install Windows",
      "A social media platform"
    ],
    answer: 1,
    explanation: "Entra ID is the core identity provider for Azure, Office 365, and thousands of other SaaS apps.",
    hint: "Cloud Identity."
  },
  {
    id: 297,
    difficulty: "hard",
    category: "availability",
    question: "What is 'Azure Site Recovery' (ASR) Mobility Service?",
    options: [
      "An app for your phone",
      "A component installed on a VM to be replicated, which captures data changes and sends them to the replication target",
      "A way to move VMs between regions",
      "A type of network connection"
    ],
    answer: 1,
    explanation: "The mobility service is required for replicating physical servers and VMware VMs to Azure.",
    hint: "Replication agent."
  },
  {
    id: 298,
    difficulty: "medium",
    category: "scenarios",
    question: "You need to perform a batch processing job that runs once a week and requires 100 VMs for 2 hours. Which service is most efficient?",
    options: [
      "Azure App Service",
      "Azure Batch",
      "Azure SQL",
      "Azure Firewall"
    ],
    answer: 1,
    explanation: "Azure Batch is designed for large-scale parallel and high-performance computing (HPC) batch jobs.",
    hint: "Parallel batch compute."
  },
  {
    id: 299,
    difficulty: "hard",
    category: "security",
    question: "What is 'Microsoft Sentinel Watchlists'?",
    options: [
      "A list of movies to watch",
      "A feature that allows you to import external data (like a list of high-value assets or terminated employees) to correlate against security logs",
      "A list of blocked IP addresses",
      "A type of dashboard"
    ],
    answer: 1,
    explanation: "Watchlists help reduce alert noise by highlighting events involving specific entities of interest.",
    hint: "External reference data in SIEM."
  },
  {
    id: 300,
    difficulty: "medium",
    category: "governance",
    question: "What is 'Azure Blueprints' (Legacy/Moving to Template Specs)?",
    options: [
      "A way to draw maps",
      "A tool to define a repeatable set of Azure resources that implement an organization's standards, patterns, and requirements",
      "A list of prices",
      "A support ticket"
    ],
    answer: 1,
    explanation: "Blueprints group ARM templates, RBAC, and Policies into a single package for environment deployment.",
    hint: "Package of governance tools."
  }
];

// Append to main database
//questionBank.push(...batch6);
/* ======================================================
   AZURE MASTER QUESTION BANK (Batch 7/7)
   Topics: Cost-Optimization, AI, Quantum, & Advanced Security
   ====================================================== */

const batch7 = [
  {
    id: 301,
    difficulty: "hard",
    category: "ai",
    question: "Which Azure service allows you to deploy large language models like GPT-4 within your own Azure subscription, ensuring data stays within the Azure ecosystem?",
    options: [
      "Azure Cognitive Search",
      "Azure OpenAI Service",
      "Azure Bot Service",
      "Azure Machine Learning Studio"
    ],
    answer: 1,
    explanation: "Azure OpenAI provides REST API access to OpenAI's powerful language models with the security and enterprise capabilities of Azure.",
    hint: "Enterprise GPT."
  },
  {
    id: 302,
    difficulty: "medium",
    category: "cost",
    question: "A company has a development environment that is only used Monday-Friday, 9 AM to 5 PM. What is the most cost-effective way to manage these VMs?",
    options: [
      "Keep them running 24/7",
      "Use Azure Reservations",
      "Use Start/Stop VMs during off-hours automation",
      "Move them to the Archive tier"
    ],
    answer: 2,
    explanation: "Automating the shutdown of non-production VMs when not in use can save up to 70% of compute costs.",
    hint: "Pay only for uptime."
  },
  {
    id: 303,
    difficulty: "hard",
    category: "security",
    question: "What is 'Azure Customer Lockbox'?",
    options: [
      "A physical safe in the datacenter",
      "A service that ensures Microsoft cannot access your data to resolve a support issue without your explicit approval",
      "An encryption key manager",
      "A way to lock the Azure Portal"
    ],
    answer: 1,
    explanation: "Customer Lockbox gives you full control over when Microsoft engineers can access your data during support operations.",
    hint: "Approval for Microsoft access."
  },
  {
    id: 304,
    difficulty: "medium",
    category: "scenarios",
    question: "You are designing a globally scalable web app. You need to route users to the closest healthy endpoint and also require SSL offloading and WAF. Which service is best?",
    options: [
      "Azure Load Balancer",
      "Azure Traffic Manager",
      "Azure Front Door",
      "Azure Bastion"
    ],
    answer: 2,
    explanation: "Front Door is a global Layer 7 load balancer that includes WAF, SSL offloading, and site acceleration via the edge.",
    hint: "Global Layer 7."
  },
  {
    id: 305,
    difficulty: "hard",
    category: "compute",
    question: "What is an 'Azure Container App'?",
    options: [
      "A small VM for containers",
      "A fully managed serverless container service built on Kubernetes (KEDA, Dapr, Envoy) for microservices",
      "A Docker desktop in the cloud",
      "A type of Azure Function"
    ],
    answer: 1,
    explanation: "Container Apps allows you to run microservices and containerized apps without managing Kubernetes infrastructure directly.",
    hint: "Serverless microservices."
  },
  {
    id: 306,
    difficulty: "medium",
    category: "governance",
    question: "Which service helps you discover, classify, and protect sensitive data across your entire data estate (SQL, Blobs, S3, etc.)?",
    options: [
      "Azure Sentinel",
      "Microsoft Purview",
      "Azure Advisor",
      "Azure Monitor"
    ],
    answer: 1,
    explanation: "Microsoft Purview provides a unified data governance solution for hybrid and multi-cloud environments.",
    hint: "Data catalog and privacy."
  },
  {
    id: 307,
    difficulty: "hard",
    category: "networking",
    question: "What is 'Azure Virtual WAN' with Hub-to-Hub communication?",
    options: [
      "A way to connect two offices",
      "A networking service that allows different regional hubs to communicate with each other automatically using the Microsoft backbone",
      "A type of satellite internet",
      "A mesh of VPNs"
    ],
    answer: 1,
    explanation: "Virtual WAN simplifies large-scale branch-to-branch connectivity by automating the routing between regional hubs.",
    hint: "Backbone transit between hubs."
  },
  {
    id: 308,
    difficulty: "easy",
    category: "scenarios",
    question: "Which Azure service is best for hosting a simple static website (HTML/CSS/JS) with the lowest possible cost?",
    options: [
      "Azure Virtual Machines",
      "Azure App Service",
      "Azure Storage (Static Website feature)",
      "Azure SQL"
    ],
    answer: 2,
    explanation: "Azure Storage can host static content directly from a container ($web) at a fraction of the cost of a full server.",
    hint: "Serverless static hosting."
  },
  {
    id: 309,
    difficulty: "hard",
    category: "databases",
    question: "What is 'Azure Cosmos DB Analytical Store'?",
    options: [
      "A backup of the database",
      "A column-oriented store for performing near real-time analytics using Azure Synapse Link without affecting transactional performance",
      "A tool for SQL developers",
      "A way to compress data"
    ],
    answer: 1,
    explanation: "It enables HTAP (Hybrid Transactional/Analytical Processing) by separating the row-based transactional data from column-based analytical data.",
    hint: "HTAP / Synapse Link."
  },
  {
    id: 310,
    difficulty: "medium",
    category: "security",
    question: "What is 'Azure AD Conditional Access'?",
    options: [
      "A way to reset passwords",
      "A policy-based approach to grant access to resources based on conditions like user location, device state, and risk level",
      "A type of firewall",
      "A list of users"
    ],
    answer: 1,
    explanation: "It is the 'If-Then' of security (e.g., IF user is outside the office, THEN require MFA).",
    hint: "Zero Trust gatekeeper."
  },
  {
    id: 311,
    difficulty: "hard",
    category: "scenarios",
    question: "A financial institution needs to process 100,000 transactions per second with strict ordering. Which service should they use for messaging?",
    options: [
      "Azure Storage Queues",
      "Azure Event Grid",
      "Azure Service Bus (Premium)",
      "Azure IoT Hub"
    ],
    answer: 2,
    explanation: "Service Bus supports 'Sessions' which guarantee First-In-First-Out (FIFO) ordering and enterprise-grade reliability.",
    hint: "FIFO and Sessions."
  },
  {
    id: 312,
    difficulty: "medium",
    category: "monitoring",
    question: "What is 'Azure Managed Grafana'?",
    options: [
      "A tool to draw pictures",
      "A fully managed service for running Grafana to visualize metrics, logs, and traces from Azure Monitor and other sources",
      "A type of database",
      "A security dashboard"
    ],
    answer: 1,
    explanation: "It allows you to use the popular open-source visualization tool without managing the underlying server infrastructure.",
    hint: "Managed visualization dashboards."
  },
  {
    id: 313,
    difficulty: "hard",
    category: "compute",
    question: "What is 'Azure Dev Box'?",
    options: [
      "A physical computer from Microsoft",
      "A service that provides developers with high-performance, cloud-based workstations pre-configured with their project-specific tools",
      "A type of virtual network",
      "A deployment tool"
    ],
    answer: 1,
    explanation: "Dev Box allows dev teams to spin up standardized environments quickly, improving productivity and security.",
    hint: "Cloud-based developer PC."
  },
  {
    id: 314,
    difficulty: "medium",
    category: "storage",
    question: "Which storage redundancy option replicates data to three Availability Zones within the primary region?",
    options: [
      "LRS",
      "ZRS",
      "GRS",
      "RA-GRS"
    ],
    answer: 1,
    explanation: "Zone-Redundant Storage (ZRS) ensures data remains available even if a whole datacenter (zone) fails.",
    hint: "Intra-region HA."
  },
  {
    id: 315,
    difficulty: "hard",
    category: "identity",
    question: "What is 'Entra ID Verified ID'?",
    options: [
      "A passport scanner",
      "A decentralized identity service that allows users to share verifiable digital credentials (like education or employment status)",
      "A way to check ID cards",
      "A new type of MFA"
    ],
    answer: 1,
    explanation: "Verified ID is based on open standards (W3C) and gives users control over their own identity data.",
    hint: "Decentralized identity."
  },
  {
    id: 316,
    difficulty: "medium",
    category: "cost",
    question: "What does 'Right-sizing' refer to in Azure cost optimization?",
    options: [
      "Making the server look better",
      "The process of adjusting the size of a resource (like a VM) to match its actual usage to avoid paying for idle capacity",
      "Buying more storage than you need",
      "Changing the name of a resource"
    ],
    answer: 1,
    explanation: "Azure Advisor often provides recommendations to downsize underutilized VMs to save money.",
    hint: "Matching size to load."
  },
  {
    id: 317,
    difficulty: "hard",
    category: "scenarios",
    question: "You need to run a high-performance compute (HPC) workload that requires InfiniBand networking for low-latency communication between nodes. Which VM series should you use?",
    options: [
      "A-Series",
      "B-Series",
      "H-Series (or N-Series)",
      "D-Series"
    ],
    answer: 2,
    explanation: "H-series (High Performance) and N-series (GPU) VMs support InfiniBand and are designed for complex calculations.",
    hint: "InfiniBand compute."
  },
  {
    id: 318,
    difficulty: "medium",
    category: "security",
    question: "What is 'Microsoft Defender for DevOps'?",
    options: [
      "A way to hire security experts",
      "A service that provides visibility into security posture across multi-pipeline environments like GitHub and ADO",
      "A tool to write code",
      "A virus scanner for PCs"
    ],
    answer: 1,
    explanation: "It identifies security risks in your infrastructure-as-code (IaC) templates and container images early in the lifecycle.",
    hint: "Shift-left security."
  },
  {
    id: 319,
    difficulty: "hard",
    category: "quantum",
    question: "What is 'Azure Quantum'?",
    options: [
      "A very fast CPU",
      "A cloud service that provides access to quantum hardware from different providers and quantum simulation tools",
      "A type of encrypted storage",
      "A new Azure region"
    ],
    answer: 1,
    explanation: "Azure Quantum allows researchers and developers to run quantum circuits on actual quantum computers.",
    hint: "Cloud quantum computing."
  },
  {
    id: 320,
    difficulty: "medium",
    category: "networking",
    question: "What is 'Azure DDoS IP Protection'?",
    options: [
      "A way to hide your IP",
      "A pay-per-IP DDoS protection plan designed for SMBs, providing the same capabilities as the Network-wide plan but for individual IPs",
      "A free firewall",
      "A tool to change IPs"
    ],
    answer: 1,
    explanation: "IP Protection is a cost-effective alternative to the Network protection tier for smaller environments.",
    hint: "Per-IP DDoS protection."
  },
  {
    id: 321,
    difficulty: "hard",
    category: "governance",
    question: "What is the 'Azure EU Data Boundary'?",
    options: [
      "A wall around Europe",
      "A commitment by Microsoft to allow customers to process and store their data exclusively within the European Union",
      "A type of network filter",
      "A tax on data"
    ],
    answer: 1,
    explanation: "It helps European customers meet strict GDPR and sovereignty requirements regarding data residency.",
    hint: "EU residency commitment."
  },
  {
    id: 322,
    difficulty: "medium",
    category: "scenarios",
    question: "You need to store 500TB of backup data that is rarely accessed but must be kept for 7 years for compliance. Which storage tier is most cost-effective?",
    options: [
      "Hot",
      "Cool",
      "Archive",
      "Premium"
    ],
    answer: 2,
    explanation: "Archive tier has the lowest storage cost but the highest latency and access cost, perfect for long-term compliance data.",
    hint: "Deep cold storage."
  },
  {
    id: 323,
    difficulty: "hard",
    category: "compute",
    question: "What is 'Azure Batch' task dependencies?",
    options: [
      "When two people work on a task",
      "A feature that allows you to specify that a task should only run after one or more other tasks have successfully completed",
      "A way to share code",
      "A type of login"
    ],
    answer: 1,
    explanation: "Task dependencies are essential for creating complex multi-stage batch processing workflows.",
    hint: "Directed Acyclic Graph (DAG) for Batch."
  },
  {
    id: 324,
    difficulty: "medium",
    category: "databases",
    question: "Which Azure SQL tier should you use if you need a database that can scale up to 128 vCores and supports up to 100TB with nearly instantaneous backups?",
    options: [
      "General Purpose",
      "Business Critical",
      "Hyperscale",
      "Standard"
    ],
    answer: 2,
    explanation: "Hyperscale uses a multi-tier cache and log service architecture to handle massive data volumes effortlessly.",
    hint: "Modern scalable SQL."
  },
  {
    id: 325,
    difficulty: "hard",
    category: "networking",
    question: "What is 'Azure Private Link Service' (as opposed to Private Endpoint)?",
    options: [
      "A way to use the internet",
      "The resource that allows you to expose your own service (behind a Standard Load Balancer) to other consumers via Private Link",
      "A type of VPN",
      "A secret VNet"
    ],
    answer: 1,
    explanation: "Private Link Service allows providers to offer their services privately to customers in other VNets or tenants.",
    hint: "The 'Provider' side of Private Link."
  },
  {
    id: 326,
    difficulty: "medium",
    category: "security",
    question: "What is 'Microsoft Defender for Servers' Plan 2?",
    options: [
      "A plan for only two servers",
      "An advanced protection tier that includes Vulnerability Assessment, 500MB of free log ingestion, and adaptive application controls",
      "A type of firewall",
      "A basic antivirus"
    ],
    answer: 1,
    explanation: "Plan 2 provides full EDR (Endpoint Detection and Response) capabilities for your Azure and hybrid servers.",
    hint: "Advanced Server EDR."
  },
  {
    id: 327,
    difficulty: "hard",
    category: "scenarios",
    question: "A company needs to move 2PB of data into Azure. They have a 100Mbps internet connection. What is the fastest method?",
    options: [
      "Upload over the internet",
      "Azure Data Box Heavy",
      "ExpressRoute",
      "Emailing files"
    ],
    answer: 1,
    explanation: "With a 100Mbps connection, 2PB would take years. Data Box Heavy (1PB capacity per device) is the only viable option.",
    hint: "Petabyte-scale physical transfer."
  },
  {
    id: 328,
    difficulty: "medium",
    category: "governance",
    question: "What is 'Azure Advisor' Score?",
    options: [
      "A grade for the cloud",
      "A metric that quantifies how well you are following Microsoft's best practices across cost, security, reliability, and performance",
      "The amount of money you spent",
      "A list of users"
    ],
    answer: 1,
    explanation: "The score helps you prioritize which recommendations to implement first to improve your environment.",
    hint: "Best-practice health check."
  },
  {
    id: 329,
    difficulty: "hard",
    category: "identity",
    question: "What is 'Entra ID Workload Identities'?",
    options: [
      "Identities for hard workers",
      "A feature used to secure and manage identities for non-human entities like software, applications, and containers",
      "A way to track employee time",
      "A type of login screen"
    ],
    answer: 1,
    explanation: "It provides advanced security features like Conditional Access specifically for Service Principals.",
    hint: "Identity for Apps/Services."
  },
  {
    id: 330,
    difficulty: "medium",
    category: "scenarios",
    question: "You want to run a web app where you only pay when someone visits the site. Which compute option is most suitable?",
    options: [
      "Azure Virtual Machine",
      "Azure App Service (Free/Shared)",
      "Azure Functions (Consumption Plan)",
      "Azure Dedicated Host"
    ],
    answer: 2,
    explanation: "Functions in a Consumption plan are only billed based on execution. No visits = $0 cost.",
    hint: "Event-driven billing."
  },
  {
    id: 331,
    difficulty: "hard",
    category: "monitoring",
    question: "What is 'Azure Monitor Log Analytics' Data Export?",
    options: [
      "Printing logs",
      "A feature that allows you to continuously export log data from specific tables to an Azure Storage account or Event Hub",
      "Deleting logs",
      "Searching logs"
    ],
    answer: 1,
    explanation: "This is useful for long-term data retention beyond the standard Log Analytics limits or for external SIEM integration.",
    hint: "Continuous log offloading."
  },
  {
    id: 332,
    difficulty: "medium",
    category: "storage",
    question: "What is 'Azure Disk Storage' Bursting?",
    options: [
      "When the disk breaks",
      "A feature that allows certain disk sizes to exceed their provisioned IOPS and throughput for short periods to handle peaks",
      "A way to format disks",
      "A type of backup"
    ],
    answer: 1,
    explanation: "Bursting is ideal for OS boot times or batch jobs that have unpredictable IO spikes.",
    hint: "Temporary IO boost."
  },
  {
    id: 333,
    difficulty: "hard",
    category: "security",
    question: "What is an 'Azure Security Center' (Defender) Regulatory Compliance dashboard?",
    options: [
      "A list of company rules",
      "A tool that tracks your status against specific standards like PCI-DSS, ISO 27001, or SOC TSP",
      "A way to pay for certificates",
      "A training portal"
    ],
    answer: 1,
    explanation: "It helps you identify gaps in your environment that prevent you from meeting legal or industry compliance standards.",
    hint: "Audit readiness view."
  },
  {
    id: 334,
    difficulty: "medium",
    category: "scenarios",
    question: "You need a load balancer that can handle millions of requests per second with ultra-low latency at Layer 4. Which do you choose?",
    options: [
      "Azure Application Gateway",
      "Azure Front Door",
      "Azure Standard Load Balancer",
      "Azure Traffic Manager"
    ],
    answer: 2,
    explanation: "The Standard Load Balancer is a high-performance, low-latency Layer 4 balancer (TCP/UDP).",
    hint: "High-perf Layer 4."
  },
  {
    id: 335,
    difficulty: "hard",
    category: "compute",
    question: "What is 'AKS Fleet Manager'?",
    options: [
      "A person who manages servers",
      "A service that allows you to manage multiple AKS clusters at scale, including cross-cluster load balancing and orchestration",
      "A way to name clusters",
      "A training course for K8s"
    ],
    answer: 1,
    explanation: "Fleet Manager is designed for enterprises managing hundreds or thousands of Kubernetes clusters.",
    hint: "Multi-cluster management."
  },
  {
    id: 336,
    difficulty: "medium",
    category: "identity",
    question: "What is 'Azure AD External ID'?",
    options: [
      "A login for the internet",
      "A unified platform for all your external identity needs, including B2B and B2C (Customer) scenarios",
      "A way to login to AWS",
      "A type of firewall"
    ],
    answer: 1,
    explanation: "External ID allows you to customize the sign-in experience for customers and partners.",
    hint: "CIAM and B2B."
  },
  {
    id: 337,
    difficulty: "hard",
    category: "networking",
    question: "What is 'Azure ExpressRoute Direct'?",
    options: [
      "A fast internet cable",
      "A service that allows you to connect directly to Microsoft's global network at 100Gbps without a service provider in between",
      "A way to use Wi-Fi in Azure",
      "A type of VNet"
    ],
    answer: 1,
    explanation: "It is designed for massive data ingestion or scenarios requiring dedicated high-bandwidth fiber connections.",
    hint: "100Gbps direct connection."
  },
  {
    id: 338,
    difficulty: "medium",
    category: "cost",
    question: "What is the 'Azure Price Sheet'?",
    options: [
      "A bill",
      "A downloadable list of the current prices for all Azure services based on your specific subscription/agreement",
      "A list of sales",
      "A manual"
    ],
    answer: 1,
    explanation: "The price sheet helps organizations estimate costs and verify billing based on their specific rates (e.g., Enterprise Agreement).",
    hint: "Personalized rate list."
  },
  {
    id: 339,
    difficulty: "hard",
    category: "scenarios",
    question: "You are building a globally distributed app. You need a database with 99.999% availability for both reads and writes. Which configuration of Cosmos DB do you need?",
    options: [
      "Single-region",
      "Multi-region with Service Managed Failover",
      "Multi-region with Multi-region Writes enabled",
      "LRS storage"
    ],
    answer: 2,
    explanation: "Multi-region writes are required to reach the 'five-nines' (99.999%) SLA for both read and write operations.",
    hint: "Five-nines SLA requirement."
  },
  {
    id: 340,
    difficulty: "medium",
    category: "governance",
    question: "What is 'Azure Resource Graph' Explorer?",
    options: [
      "A way to draw charts",
      "A tool in the Azure Portal that allows you to run KQL queries to explore and analyze your resources at scale",
      "A list of servers",
      "A help page"
    ],
    answer: 1,
    explanation: "It allows you to quickly find resources (e.g., 'Find all VMs with a public IP') across all your subscriptions.",
    hint: "Resource search engine."
  },
  {
    id: 341,
    difficulty: "hard",
    category: "security",
    question: "What is 'Azure Bastion' Shareable Link?",
    options: [
      "A link to a website",
      "A feature that allows users to connect to a VM via Bastion without needing access to the Azure Portal",
      "A way to share passwords",
      "A type of VPN"
    ],
    answer: 1,
    explanation: "Shareable links simplify access for external vendors or developers who don't have full Azure RBAC permissions.",
    hint: "Portal-less VM access."
  },
  {
    id: 342,
    difficulty: "medium",
    category: "monitoring",
    question: "Which Azure Monitor feature allows you to record and replay user interactions with your website to troubleshoot issues?",
    options: [
      "Metrics Explorer",
      "Application Insights Snapshot Debugger",
      "Application Insights Session Replay",
      "Log Analytics"
    ],
    answer: 2,
    explanation: "Session Replay provides a video-like reconstruction of what the user did and saw before an error occurred.",
    hint: "Visual user troubleshooting."
  },
  {
    id: 343,
    difficulty: "hard",
    category: "compute",
    question: "In Azure App Service, what is a 'Deployment Slot'?",
    options: [
      "A hole in the server",
      "A live app instance with its own hostname that allows you to test code changes before swapping them into production with zero downtime",
      "A way to backup the app",
      "A type of storage"
    ],
    answer: 1,
    explanation: "Slots allow for 'Blue-Green' deployment patterns, ensuring that if a bug is found, you can swap back instantly.",
    hint: "Staging environments."
  },
  {
    id: 344,
    difficulty: "medium",
    category: "scenarios",
    question: "You need to process high-volume streams of data (e.g., social media feeds) and perform complex windowing and filtering. Which service is best?",
    options: [
      "Azure Data Factory",
      "Azure Stream Analytics",
      "Azure SQL Database",
      "Azure Batch"
    ],
    answer: 1,
    explanation: "Stream Analytics is a real-time analytics engine designed for analyzing and processing high-volume data streams.",
    hint: "Real-time streaming SQL."
  },
  {
    id: 345,
    difficulty: "hard",
    category: "networking",
    question: "What is 'Azure Virtual Network Encryption'?",
    options: [
      "Encrypting the hard drive",
      "A feature that encrypts traffic between two virtual machines in the same virtual network at the host level",
      "A type of password",
      "Encrypting the portal"
    ],
    answer: 1,
    explanation: "It provides an additional layer of security for data-in-transit within your private network.",
    hint: "Host-to-host encryption."
  },
  {
    id: 346,
    difficulty: "medium",
    category: "identity",
    question: "What is 'Entra ID Protection'?",
    options: [
      "A firewall for identity",
      "A service that uses AI to detect and remediate identity-based risks like leaked credentials or impossible travel",
      "A way to reset passwords",
      "A list of users"
    ],
    answer: 1,
    explanation: "It provides automated responses to suspicious sign-ins, such as forcing a password change or MFA.",
    hint: "Risk-based identity security."
  },
  {
    id: 347,
    difficulty: "hard",
    category: "storage",
    question: "What is 'Azure Elastic SAN'?",
    options: [
      "A beach in the cloud",
      "A cloud-native Storage Area Network (SAN) service that offers a scalable, cost-effective, and high-performance block storage solution",
      "A way to backup disks",
      "A type of file share"
    ],
    answer: 1,
    explanation: "It is designed to make it easier to migrate on-premises SAN workloads to Azure by providing consolidated storage capacity.",
    hint: "Cloud-native SAN."
  },
  {
    id: 348,
    difficulty: "medium",
    category: "scenarios",
    question: "You need to protect your website from Layer 7 attacks like SQL injection and also provide global content caching. Which service do you use?",
    options: [
      "Azure Firewall",
      "Azure Front Door (with WAF)",
      "Azure Application Gateway",
      "Azure Traffic Manager"
    ],
    answer: 1,
    explanation: "Front Door provides both the CDN (caching) and the WAF (security) for global applications.",
    hint: "CDN + WAF."
  },
  {
    id: 349,
    difficulty: "hard",
    category: "governance",
    question: "What is 'Azure Policy' Guest Configuration?",
    options: [
      "Inviting guests to Azure",
      "A feature that allows you to audit or configure settings inside a virtual machine (like OS version or security settings) using Azure Policy",
      "A list of visitors",
      "A type of password"
    ],
    answer: 1,
    explanation: "It extends Azure Policy's reach from the resource level down into the operating system itself.",
    hint: "Policy inside the VM."
  },
  {
    id: 350,
    difficulty: "medium",
    category: "scenarios",
    question: "You have 10 separate Azure subscriptions and want to apply the same security rules to all of them. What is the most efficient way?",
    options: [
      "Manually configure each one",
      "Place them under a Management Group and assign the policy/RBAC at that level",
      "Email the admins",
      "Create a new account"
    ],
    answer: 1,
    explanation: "Management Groups allow for centralized governance and policy enforcement across multiple subscriptions.",
    hint: "Hierarchical governance."
  }
];

//  update to main database
//questionBank.push(...batch7);
/* ======================================================
   AZURE MASTER QUESTION BANK (Batch 8/8)
   Topics: SRE, Enterprise Integration, & Global Networking
   ====================================================== */

const batch8 = [
  {
    id: 351,
    difficulty: "hard",
    category: "networking",
    question: "Which Azure service provides a Private IP address to a service (like SQL or Web App), effectively making it part of your VNet and removing it from the public internet?",
    options: [
      "Azure Private Link (Private Endpoint)",
      "Azure Service Endpoint",
      "Azure Front Door",
      "Azure Bastion"
    ],
    answer: 0,
    explanation: "Private Endpoint uses a private IP from your VNet to connect you to a service privately, ensuring traffic never leaves the Microsoft network.",
    hint: "Private IP for PaaS services."
  },
  {
    id: 352,
    difficulty: "medium",
    category: "scenarios",
    question: "You need to migrate a legacy application to the cloud but cannot change the code. The application requires a file share that supports the SMB protocol. Which service is best?",
    options: [
      "Azure Blob Storage",
      "Azure Files",
      "Azure Table Storage",
      "Azure Disk Storage"
    ],
    answer: 1,
    explanation: "Azure Files offers fully managed file shares in the cloud that are accessible via the industry-standard SMB or NFS protocols.",
    hint: "Cloud SMB share."
  },
  {
    id: 353,
    difficulty: "hard",
    category: "security",
    question: "What is 'Azure Dedicated HSM'?",
    options: [
      "A software-based key locker",
      "A physical device that provides hardware-level security for cryptographic keys, where you have full administrative control over the appliance",
      "A type of firewall",
      "A backup service"
    ],
    answer: 1,
    explanation: "Unlike Key Vault, Dedicated HSM gives you a physical appliance in the datacenter that is not shared with other customers.",
    hint: "Physical hardware key control."
  },
  {
    id: 354,
    difficulty: "medium",
    category: "compute",
    question: "In an Azure Kubernetes Service (AKS) cluster, what is the 'Control Plane'?",
    options: [
      "The part where your apps run",
      "The managed Microsoft component that provides core Kubernetes services and orchestration of application workloads",
      "The user interface",
      "A type of physical server"
    ],
    answer: 1,
    explanation: "The Control Plane is managed by Microsoft for free; you only pay for the 'Node' VMs where your applications run.",
    hint: "The K8s 'Brain'."
  },
  {
    id: 355,
    difficulty: "hard",
    category: "scenarios",
    question: "A company requires a globally distributed database with 'Strong Consistency' across two continents. What is the impact on latency?",
    options: [
      "No impact",
      "Latency will increase because the write must be acknowledged across great distances before being committed",
      "Latency will decrease",
      "The database will become free"
    ],
    answer: 1,
    explanation: "Strong consistency requires synchronous communication across regions, which is limited by the speed of light.",
    hint: "Consistency vs Speed tradeoff."
  },
  {
    id: 356,
    difficulty: "medium",
    category: "governance",
    question: "What is 'Azure Blueprints' Resource Locking?",
    options: [
      "A physical lock",
      "A mechanism to protect resources created by a blueprint from being deleted or modified, even by a subscription owner",
      "A way to hide resources",
      "A type of password"
    ],
    answer: 1,
    explanation: "Blueprint locks (using Managed Identities) are more powerful than standard resource locks because they are persistent and state-aware.",
    hint: "Strict governance locks."
  },
  {
    id: 357,
    difficulty: "hard",
    category: "networking",
    question: "What is 'Azure ExpressRoute Global Reach'?",
    options: [
      "Connecting to the internet",
      "A feature that allows you to link ExpressRoute circuits together to pass traffic between on-premises locations via the Microsoft backbone",
      "A satellite connection",
      "A way to speed up the portal"
    ],
    answer: 1,
    explanation: "Global Reach makes the Microsoft network act as your own private global WAN (on-prem to on-prem).",
    hint: "On-prem to On-prem via Microsoft."
  },
  {
    id: 358,
    difficulty: "easy",
    category: "cost",
    question: "Which tool allows you to set up alerts when your Azure spending reaches a certain percentage of your budget?",
    options: [
      "Azure Advisor",
      "Azure Cost Management",
      "Azure Policy",
      "Azure Monitor"
    ],
    answer: 1,
    explanation: "Cost Management allows you to create budgets and automated alerts to prevent overspending.",
    hint: "Budget alerts."
  },
  {
    id: 359,
    difficulty: "hard",
    category: "ai",
    question: "What is 'Azure AI Search' (formerly Cognitive Search) Skillset?",
    options: [
      "A list of human skills",
      "A collection of AI enrichment steps (like OCR or Key Phrase Extraction) that run during the data ingestion/indexing process",
      "A training course",
      "A type of database"
    ],
    answer: 1,
    explanation: "Skillsets allow you to transform raw data into searchable content using AI models during indexing.",
    hint: "Enrichment pipeline."
  },
  {
    id: 360,
    difficulty: "medium",
    category: "scenarios",
    question: "You want to run a containerized application that needs to scale to zero when not in use. Which service is best?",
    options: [
      "Azure VM",
      "Azure Kubernetes Service (AKS)",
      "Azure Container Apps",
      "Azure App Service (Basic tier)"
    ],
    answer: 2,
    explanation: "Azure Container Apps is built on KEDA, allowing it to scale down to zero instances and stop billing when there is no traffic.",
    hint: "Scale to zero containers."
  },
  {
    id: 361,
    difficulty: "hard",
    category: "databases",
    question: "What is the 'Change Feed' in Azure Cosmos DB?",
    options: [
      "A news feed about Azure",
      "A persistent record of changes (inserts and updates) to a container in the order they occurred",
      "A way to delete data",
      "A list of database users"
    ],
    answer: 1,
    explanation: "The Change Feed is used to trigger functions (like Azure Functions) whenever data is modified in the database.",
    hint: "Event-driven DB updates."
  },
  {
    id: 362,
    difficulty: "medium",
    category: "security",
    question: "What is 'Azure Web Application Firewall' (WAF) Detection Mode?",
    options: [
      "A mode that blocks all traffic",
      "A mode that monitors and logs traffic for threats without actually blocking it",
      "A way to speed up the firewall",
      "A help menu"
    ],
    answer: 1,
    explanation: "Detection mode is used for testing rules to ensure they don't block legitimate traffic (False Positives) before moving to Prevention mode.",
    hint: "Log but don't block."
  },
  {
    id: 363,
    difficulty: "hard",
    category: "monitoring",
    question: "What is 'Azure Monitor Log Analytics' Cluster?",
    options: [
      "A group of servers",
      "A dedicated deployment of Azure Monitor Logs for large customers that provides features like Customer Managed Keys and Capacity Reservation",
      "A way to group VMs",
      "A type of storage"
    ],
    answer: 1,
    explanation: "Log Analytics clusters are designed for high-volume scenarios (typically 100GB/day or more).",
    hint: "Dedicated high-scale logging."
  },
  {
    id: 364,
    difficulty: "medium",
    category: "compute",
    question: "Which Azure service allows you to run Batch jobs on a schedule without managing any infrastructure?",
    options: [
      "Azure Batch",
      "Azure Logic Apps",
      "Azure Automation",
      "Azure Scheduler"
    ],
    answer: 0,
    explanation: "Azure Batch is a platform service for running large-scale parallel and high-performance computing applications.",
    hint: "HPC in the cloud."
  },
  {
    id: 365,
    difficulty: "hard",
    category: "identity",
    question: "What is 'Azure AD B2C' (Business to Consumer)?",
    options: [
      "A way to buy Microsoft products",
      "A customer identity access management (CIAM) solution that allows users to sign in with social accounts (Google, Facebook) or local accounts",
      "A list of company employees",
      "A type of firewall"
    ],
    answer: 1,
    explanation: "B2C is a separate identity service designed specifically for consumer-facing applications.",
    hint: "Social login for apps."
  },
  {
    id: 366,
    difficulty: "easy",
    category: "availability",
    question: "What is the 'RTO' (Recovery Time Objective) in disaster recovery?",
    options: [
      "How much data you can afford to lose",
      "The maximum duration of time within which a service must be restored after a disaster",
      "The cost of the recovery",
      "The speed of the internet"
    ],
    answer: 1,
    explanation: "RTO is the target 'downtime' an organization is willing to accept.",
    hint: "Time to recover."
  },
  {
    id: 367,
    difficulty: "hard",
    category: "scenarios",
    question: "You need to store and analyze logs from 10,000 servers. You need to keep the data for 2 years. What is the most cost-effective storage strategy in Log Analytics?",
    options: [
      "Store everything in the active workspace for 2 years",
      "Use 30-90 days of active retention and set up 'Data Archive' (long-term retention) for the remaining period",
      "Delete logs after 30 days",
      "Save logs to Excel"
    ],
    answer: 1,
    explanation: "Data Archive in Log Analytics is much cheaper than standard 'Active' retention for data that isn't queried frequently.",
    hint: "Active vs Archive logs."
  },
  {
    id: 368,
    difficulty: "medium",
    category: "networking",
    question: "What is 'Azure DNS Private Zones'?",
    options: [
      "A way to browse the internet privately",
      "A DNS service that allows you to use your own custom domain names in a virtual network without needing to add custom DNS solutions",
      "A secret IP address",
      "A list of blocked websites"
    ],
    answer: 1,
    explanation: "Private Zones provide name resolution within a VNet or between VNets (e.g., 'mywebapp.internal').",
    hint: "Internal VNet DNS."
  },
  {
    id: 369,
    difficulty: "hard",
    category: "compute",
    question: "What is 'Azure App Service Environment' (ASE)?",
    options: [
      "A training room for developers",
      "A fully isolated and dedicated environment for running App Service apps at high scale and with high security",
      "A backup of the portal",
      "A type of VNet"
    ],
    answer: 1,
    explanation: "ASE runs inside your VNet on dedicated hardware, providing network isolation and huge scaling capabilities.",
    hint: "Isolated App Service."
  },
  {
    id: 370,
    difficulty: "medium",
    category: "storage",
    question: "What is 'Object Replication' for Azure Blobs?",
    options: [
      "Making a copy of a file",
      "A feature that asynchronously copies block blobs between a source storage account and a destination account",
      "A way to name files",
      "A type of encryption"
    ],
    answer: 1,
    explanation: "It is used to minimize latency for read requests or to keep data in sync across regions for compliance.",
    hint: "Blob-to-Blob sync."
  },
  {
    id: 371,
    difficulty: "hard",
    category: "security",
    question: "What is 'Microsoft Defender for Cloud' Secure Score?",
    options: [
      "A credit score",
      "A measurement of an organization's security posture, where a higher percentage indicates a lower identified risk level",
      "The cost of the security plan",
      "A list of hackers"
    ],
    answer: 1,
    explanation: "Secure Score provides recommendations and points for each security task completed.",
    hint: "Security health metric."
  },
  {
    id: 372,
    difficulty: "medium",
    category: "governance",
    question: "What is an 'Azure Policy Effect'?",
    options: [
      "What happens when the policy is not followed",
      "The action taken when a resource matches the policy rule (e.g., Deny, Audit, Append, Modify)",
      "The color of the policy",
      "A type of user"
    ],
    answer: 1,
    explanation: "The effect determines if the resource creation is blocked or just logged as non-compliant.",
    hint: "Deny vs Audit."
  },
  {
    id: 373,
    difficulty: "hard",
    category: "scenarios",
    question: "You need to migrate a 10TB SQL Server database to Azure with zero downtime. Which combination is best?",
    options: [
      "Backup and Restore",
      "Azure Database Migration Service (DMS) with Online Migration",
      "Emailing the SQL file",
      "Azure Data Box"
    ],
    answer: 1,
    explanation: "Online migration keeps the source and target in sync until you are ready to cut over.",
    hint: "Continuous sync migration."
  },
  {
    id: 374,
    difficulty: "medium",
    category: "monitoring",
    question: "What is 'Azure Activity Log'?",
    options: [
      "A list of what users are doing in their apps",
      "A platform log that provides insight into subscription-level events (like resource creation or modification)",
      "A log of internet speed",
      "A backup of the portal"
    ],
    answer: 1,
    explanation: "Activity logs tell you 'Who did What and When' to your Azure infrastructure.",
    hint: "Infrastructure audit log."
  },
  {
    id: 375,
    difficulty: "hard",
    category: "networking",
    question: "What is 'Azure Front Door' Web Application Firewall (WAF) Custom Rules?",
    options: [
      "Rules written by Microsoft",
      "User-defined rules that allow you to block or allow traffic based on IP, geolocation, or HTTP parameters",
      "A list of blocked websites",
      "A way to change the logo"
    ],
    answer: 1,
    explanation: "Custom rules allow you to tailor security for your specific application requirements.",
    hint: "User-defined WAF rules."
  },
  {
    id: 376,
    difficulty: "medium",
    category: "scenarios",
    question: "You are experiencing performance issues in your Web App and want to see which specific lines of code are taking the longest. What should you use?",
    options: [
      "Log Analytics",
      "Application Insights Profiler",
      "Azure Advisor",
      "Resource Graph"
    ],
    answer: 1,
    explanation: "The Profiler provides performance traces for applications running in App Service.",
    hint: "Code-level trace."
  },
  {
    id: 377,
    difficulty: "hard",
    category: "compute",
    question: "What is 'Azure Kubernetes Service' (AKS) Pod Sandboxing?",
    options: [
      "A playground for pods",
      "A feature that provides an extra layer of hardware-backed isolation for container workloads using Kata Containers",
      "A way to name pods",
      "A type of storage"
    ],
    answer: 1,
    explanation: "Sandboxing protects the host kernel from malicious code running inside a container.",
    hint: "Hardware-isolated containers."
  },
  {
    id: 378,
    difficulty: "medium",
    category: "identity",
    question: "What is 'Entra ID' (Azure AD) Privileged Identity Management (PIM)?",
    options: [
      "A way to make everyone an admin",
      "A service that enables you to manage, control, and monitor access to important resources (Just-In-Time access)",
      "A list of passwords",
      "A type of login screen"
    ],
    answer: 1,
    explanation: "PIM allows users to 'activate' admin roles only when they need them and for a limited time.",
    hint: "Just-In-Time (JIT) Admin."
  },
  {
    id: 379,
    difficulty: "hard",
    category: "storage",
    question: "What is 'Azure Blob Storage' Immutable Storage?",
    options: [
      "Storage that never fills up",
      "A feature that stores data in a Write-Once-Read-Many (WORM) state, preventing deletion or modification for a specified interval",
      "A way to name files",
      "A type of backup"
    ],
    answer: 1,
    explanation: "Immutable storage is essential for meeting strict legal and regulatory compliance requirements.",
    hint: "WORM (Write Once Read Many)."
  },
  {
    id: 380,
    difficulty: "medium",
    category: "scenarios",
    question: "You need to send an alert email whenever a new Resource Group is created in your subscription. What is the most 'serverless' way to do this?",
    options: [
      "Run a script on a VM 24/7",
      "Use Azure Event Grid to trigger an Azure Function or Logic App",
      "Check the portal every hour",
      "Ask Microsoft support"
    ],
    answer: 1,
    explanation: "Event Grid reacts to platform events (like resource creation) and triggers automation instantly.",
    hint: "Event-driven automation."
  },
  {
    id: 381,
    difficulty: "hard",
    category: "networking",
    question: "What is 'Azure Virtual Network' (VNet) Flow Logs with Traffic Analytics?",
    options: [
      "A map of the world",
      "A cloud-based solution that provides visibility into user and application activity on your network using flow logs",
      "A way to speed up the internet",
      "A list of IP addresses"
    ],
    answer: 1,
    explanation: "Traffic Analytics visualizes flow logs to show you hotspots, security threats, and traffic patterns.",
    hint: "Visualizing network flows."
  },
  {
    id: 382,
    difficulty: "medium",
    category: "cost",
    question: "What is the 'Azure Pricing Calculator'?",
    options: [
      "Your monthly bill",
      "A web tool used to estimate the monthly costs of Azure services before you deploy them",
      "A way to pay your bill",
      "A list of sales"
    ],
    answer: 1,
    explanation: "The calculator helps you plan and architect for cost before spending any money.",
    hint: "Pre-deployment cost tool."
  },
  {
    id: 383,
    difficulty: "hard",
    category: "security",
    question: "What is 'Azure Confidential Ledger'?",
    options: [
      "A notebook for secrets",
      "A managed service for storing sensitive data records that are immutable and tamper-proof using blockchain technology",
      "A type of database",
      "A way to share keys"
    ],
    answer: 1,
    explanation: "Confidential Ledger uses a hardware-based trusted execution environment (TEE) to ensure data integrity.",
    hint: "Immutable secure logs."
  },
  {
    id: 384,
    difficulty: "medium",
    category: "scenarios",
    question: "You want to automate the deployment of 50 Virtual Machines. Which tool is most appropriate?",
    options: [
      "The Azure Portal",
      "Azure CLI or ARM/Bicep Templates",
      "A manual guide",
      "A phone call to support"
    ],
    answer: 1,
    explanation: "Infrastructure as Code (IaC) is the only efficient and repeatable way to deploy large numbers of resources.",
    hint: "Automation / IaC."
  },
  {
    id: 385,
    difficulty: "hard",
    category: "compute",
    question: "What is 'Azure Container Registry' (ACR) Geo-replication?",
    options: [
      "Making the registry faster",
      "A feature that allows a single registry to serve multiple regions, providing local access to container images",
      "A way to name containers",
      "A type of storage"
    ],
    answer: 1,
    explanation: "Geo-replication ensures fast, local image pulls for global deployments of AKS or App Service.",
    hint: "Global container images."
  },
  {
    id: 386,
    difficulty: "easy",
    category: "identity",
    question: "What is 'Multi-Factor Authentication' (MFA)?",
    options: [
      "A type of password",
      "A security process that requires more than one method of authentication to verify a user's identity",
      "A way to share accounts",
      "A training program"
    ],
    answer: 1,
    explanation: "MFA adds a layer of security by requiring something you know (password) and something you have (phone).",
    hint: "Two-step verification."
  },
  {
    id: 387,
    difficulty: "hard",
    category: "governance",
    question: "What is 'Azure Resource Manager' (ARM) Template Spec?",
    options: [
      "A document about servers",
      "A resource type that allows you to store an ARM template in your Azure resource group for sharing and versioning",
      "A type of hard drive",
      "A list of prices"
    ],
    answer: 1,
    explanation: "Template Specs make it easy to share 'Gold Standard' templates across an organization.",
    hint: "Versioned cloud templates."
  },
  {
    id: 388,
    difficulty: "medium",
    category: "networking",
    question: "What is the purpose of an 'Azure VPN Gateway'?",
    options: [
      "To browse the internet",
      "To send encrypted traffic between an Azure virtual network and an on-premises location over the public internet",
      "To speed up the network",
      "To hide the VNet"
    ],
    answer: 1,
    explanation: "VPN Gateway is used for Site-to-Site or Point-to-Site connections.",
    hint: "Hybrid VNet tunnel."
  },
  {
    id: 389,
    difficulty: "hard",
    category: "scenarios",
    question: "A company needs to analyze 1PB of data using SQL. They need to scale compute and storage independently. Which service is best?",
    options: [
      "Azure SQL Database",
      "Azure Synapse Analytics (Dedicated SQL Pools)",
      "Azure Cosmos DB",
      "Azure Table Storage"
    ],
    answer: 1,
    explanation: "Synapse Dedicated SQL Pools (formerly SQL DW) are designed for massive data warehousing and separate compute from storage.",
    hint: "Petabyte-scale SQL."
  },
  {
    id: 390,
    difficulty: "medium",
    category: "monitoring",
    question: "What is 'Azure Monitor' Insights?",
    options: [
      "A way to see the future",
      "Curated monitoring experiences for specific services (like VMs, Storage, or Networks) that provide pre-built dashboards",
      "A list of tips",
      "A help menu"
    ],
    answer: 1,
    explanation: "Insights give you an 'out of the box' overview of complex service health without manual configuration.",
    hint: "Curated service dashboards."
  },
  {
    id: 391,
    difficulty: "hard",
    category: "security",
    question: "What is 'Azure Key Vault' Private Link integration?",
    options: [
      "A secret password",
      "Connecting to Key Vault via a Private Endpoint so that it is not accessible from the public internet",
      "A way to share keys",
      "A type of firewall"
    ],
    answer: 1,
    explanation: "This ensures that your cryptographic keys and secrets are only accessible from within your trusted network.",
    hint: "Private Key Vault access."
  },
  {
    id: 392,
    difficulty: "medium",
    category: "scenarios",
    question: "You want to host a WordPress site with a managed database. Which Azure service is the easiest to set up?",
    options: [
      "Azure VM",
      "Azure App Service (with MySQL)",
      "Azure Batch",
      "Azure Firewall"
    ],
    answer: 1,
    explanation: "App Service for Containers or Web App for PHP allows for a quick and managed WordPress deployment.",
    hint: "Managed Web + DB."
  },
  {
    id: 393,
    difficulty: "hard",
    category: "compute",
    question: "What is 'Azure Functions' Premium Plan?",
    options: [
      "A plan for rich people",
      "A plan that provides pre-warmed instances to avoid 'cold starts' and allows VNet integration",
      "A way to buy more storage",
      "A type of login"
    ],
    answer: 1,
    explanation: "The Premium plan is for enterprise serverless apps that need high performance and network security.",
    hint: "No cold-start serverless."
  },
  {
    id: 394,
    difficulty: "medium",
    category: "identity",
    question: "What is 'Entra ID' (Azure AD) Self-Service Password Reset (SSPR)?",
    options: [
      "A way to forget your password",
      "A feature that allows users to reset their own passwords without contacting the help desk",
      "A training program",
      "A security group"
    ],
    answer: 1,
    explanation: "SSPR reduces administrative overhead and increases user productivity.",
    hint: "User-led password reset."
  },
  {
    id: 395,
    difficulty: "hard",
    category: "storage",
    question: "What is 'Azure Storage' Client-side Encryption?",
    options: [
      "Encrypting the portal",
      "Encrypting data inside the application before it is sent to Azure storage",
      "A type of password",
      "A manual process"
    ],
    answer: 1,
    explanation: "With client-side encryption, Microsoft never sees the unencrypted data or the keys.",
    hint: "Encryption before upload."
  },
  {
    id: 396,
    difficulty: "easy",
    category: "governance",
    question: "What is an 'Azure Subscription'?",
    options: [
      "A magazine",
      "A logical unit of Azure services that is linked to an Azure account and used for billing and resource grouping",
      "A way to login to the portal",
      "A help website"
    ],
    answer: 1,
    explanation: "Subscriptions provide the boundary for costs and permissions.",
    hint: "Billing boundary."
  },
  {
    id: 397,
    difficulty: "hard",
    category: "networking",
    question: "What is 'Azure Traffic Manager' Weighted Routing?",
    options: [
      "Measuring the weight of the server",
      "A method that allows you to distribute traffic to endpoints based on assigned weights (e.g., 50/50 or 80/20)",
      "A way to speed up the network",
      "A type of DNS"
    ],
    answer: 1,
    explanation: "Weighted routing is often used for gradual application rollouts or A/B testing.",
    hint: "Percentage-based routing."
  },
  {
    id: 398,
    difficulty: "medium",
    category: "scenarios",
    question: "You need to store 10 million small files (KB size) and access them randomly. Which storage type is best?",
    options: [
      "Azure Files",
      "Azure Blob Storage",
      "Azure Disk Storage",
      "Azure Archive"
    ],
    answer: 1,
    explanation: "Blob storage is highly optimized for storing large numbers of unstructured files at scale.",
    hint: "Unstructured file scale."
  },
  {
    id: 399,
    difficulty: "hard",
    category: "monitoring",
    question: "What is 'Azure Monitor' Workbook?",
    options: [
      "A book for students",
      "A flexible canvas for data analysis and the creation of rich visual reports within the Azure portal",
      "A type of storage",
      "A security tool"
    ],
    answer: 1,
    explanation: "Workbooks allow you to combine text, KQL queries, and metrics into a single interactive document.",
    hint: "Interactive reporting canvas."
  },
  {
    id: 400,
    difficulty: "medium",
    category: "scenarios",
    question: "You want to ensure that any developer creating a storage account is forced to enable 'HTTPS only' traffic. What should you use?",
    options: [
      "Azure Policy",
      "Azure RBAC",
      "Azure Advisor",
      "Azure Activity Log"
    ],
    answer: 0,
    explanation: "Azure Policy can enforce specific settings and block the creation of resources that don't comply.",
    hint: "Enforce security settings."
  }
];

// Final database update
//questionBank.push(...batch8);

/* ======================================================
   AZURE MASTER QUESTION BANK (Batch 1 - Renumbered)
   Topics: Architecture, Security, AI/ML, Analytics, & EUC
   ====================================================== */

const azureBatch9 = [
  {
    id: 401,
    difficulty: "easy",
    category: "architecture",
    question: "Which Azure resource acts as a logical container for resources deployed within an Azure subscription?",
    options: ["Management Group", "Resource Group", "Availability Set", "Azure Policy"],
    answer: 1,
    explanation: "A Resource Group is a container that holds related resources for an Azure solution.",
    hint: "Logical grouping."
  },
  {
    id: 402,
    difficulty: "medium",
    category: "security",
    question: "Which Azure service provides a central place to manage and store secrets, encryption keys, and certificates?",
    options: ["Azure Sentinel", "Azure Key Vault", "Azure Dedicated Host", "Azure Information Protection"],
    answer: 1,
    explanation: "Azure Key Vault is used to securely store and tightly control access to tokens, passwords, certificates, and API keys.",
    hint: "Vault for secrets."
  },
  {
    id: 403,
    difficulty: "hard",
    category: "ai_ml",
    question: "Which Azure service allows you to deploy Large Language Models (LLMs) like GPT-4 and integrate them into your applications via an API?",
    options: ["Azure Machine Learning", "Azure OpenAI Service", "Azure Cognitive Search", "Azure Bot Service"],
    answer: 1,
    explanation: "Azure OpenAI Service provides REST API access to OpenAI's powerful language models including the GPT-4 and GPT-35-Turbo series.",
    hint: "Generative AI on Azure."
  },
  {
    id: 404,
    difficulty: "medium",
    category: "analytics",
    question: "Which service is a limitlessly scalable analytics service that brings together enterprise data warehousing and Big Data analytics?",
    options: ["Azure SQL Database", "Azure Synapse Analytics", "Azure Data Lake Storage", "Azure Analysis Services"],
    answer: 1,
    explanation: "Azure Synapse Analytics is the evolution of Azure SQL Data Warehouse, combining SQL technologies with Spark and Data Integration.",
    hint: "Enterprise data warehouse."
  },
  {
    id: 405,
    difficulty: "hard",
    category: "euc",
    question: "A company needs to provide a full, cloud-based Windows 10/11 desktop experience to its remote employees. Which service should they use?",
    options: ["Azure Bastion", "Azure Virtual Desktop (AVD)", "Azure App Service", "Windows 365"],
    answer: 1,
    explanation: "Azure Virtual Desktop is a desktop and app virtualization service that runs on the cloud.",
    hint: "DaaS (Desktop as a Service)."
  },
  {
    id: 406,
    difficulty: "medium",
    category: "security",
    question: "Which Azure identity service is used for managing user access and providing Single Sign-On (SSO) for cloud and on-premises applications?",
    options: ["Azure Active Directory (now Microsoft Entra ID)", "Azure Bastion", "Azure Security Center", "Azure Policy"],
    answer: 0,
    explanation: "Microsoft Entra ID (formerly Azure AD) is the multi-tenant, cloud-based identity and access management service.",
    hint: "Identity provider."
  },
  {
    id: 407,
    difficulty: "hard",
    category: "scenarios",
    question: "You need to ensure that specific compliance requirements (like HIPAA) are enforced across all resources in your subscription. Which tool should you use?",
    options: ["Azure Advisor", "Azure Policy", "Azure Blueprints", "Azure Monitor"],
    answer: 1,
    explanation: "Azure Policy helps to enforce organizational standards and to assess compliance at-scale.",
    hint: "Enforcement and compliance."
  },
  {
    id: 408,
    difficulty: "medium",
    category: "storage",
    question: "Which storage tier in Azure Blob Storage is most cost-effective for data that is rarely accessed and can tolerate a retrieval latency of several hours?",
    options: ["Hot Tier", "Cool Tier", "Archive Tier", "Premium Tier"],
    answer: 2,
    explanation: "The Archive tier has the lowest storage costs but higher access costs and retrieval latency.",
    hint: "Long-term cold storage."
  },
  {
    id: 409,
    difficulty: "hard",
    category: "ai_ml",
    question: "Which Azure Machine Learning feature allows you to build models using a drag-and-drop interface without writing code?",
    options: ["Azure ML SDK", "Azure ML Designer", "Azure ML Notebooks", "Automated ML (AutoML)"],
    answer: 1,
    explanation: "Azure ML Designer provides a visual canvas for building, testing, and deploying machine learning models.",
    hint: "Visual ML building."
  },
  {
    id: 410,
    difficulty: "medium",
    category: "networking",
    question: "Which service allows you to connect your on-premises network to Azure over a private, dedicated connection that does not go over the public internet?",
    options: ["Azure VPN Gateway", "Azure ExpressRoute", "Azure Front Door", "Azure Traffic Manager"],
    answer: 1,
    explanation: "ExpressRoute provides a private connection between your on-premises infrastructure and Azure datacenters.",
    hint: "Private dedicated link."
  },
  {
    id: 411,
    difficulty: "easy",
    category: "management",
    question: "Which Azure tool provides recommendations on high availability, security, performance, and cost?",
    options: ["Azure Monitor", "Azure Advisor", "Azure Service Health", "Azure Cost Management"],
    answer: 1,
    explanation: "Azure Advisor analyzes your configurations and usage telemetry to provide personalized best practice recommendations.",
    hint: "Best practice consultant."
  },
  {
    id: 412,
    difficulty: "hard",
    category: "analytics",
    question: "You need to process real-time streaming data from millions of IoT devices. Which Azure service is designed for high-scale event ingestion?",
    options: ["Azure Event Hubs", "Azure SQL Database", "Azure Data Factory", "Azure Logic Apps"],
    answer: 0,
    explanation: "Event Hubs is a big data streaming platform and event ingestion service capable of receiving millions of events per second.",
    hint: "Streaming ingestion."
  },
  {
    id: 413,
    difficulty: "medium",
    category: "security",
    question: "Which Azure service is a cloud-native SIEM (Security Information and Event Management) and SOAR (Security Orchestration, Automation, and Response) solution?",
    options: ["Microsoft Defender for Cloud", "Microsoft Sentinel", "Azure Dedicated HSM", "Azure Firewall"],
    answer: 1,
    explanation: "Microsoft Sentinel provides intelligent security analytics and threat intelligence across the enterprise.",
    hint: "Security Operations Center tool."
  },
  {
    id: 414,
    difficulty: "hard",
    category: "databases",
    question: "Which Azure database service is globally distributed, multi-model, and provides single-digit millisecond latency?",
    options: ["Azure SQL Database", "Azure Cosmos DB", "Azure Database for PostgreSQL", "Azure Cache for Redis"],
    answer: 1,
    explanation: "Cosmos DB is Azure's globally distributed NoSQL database service.",
    hint: "Global NoSQL."
  },
  {
    id: 415,
    difficulty: "medium",
    category: "scenarios",
    question: "You want to automate the deployment of Azure resources using templates. Which technology is native to Azure for this purpose?",
    options: ["Terraform", "Ansible", "Azure Resource Manager (ARM) templates", "Azure PowerShell"],
    answer: 2,
    explanation: "ARM templates are JSON files that define the infrastructure and configuration for your Azure solution.",
    hint: "Infrastructure as Code."
  },
  {
    id: 416,
    difficulty: "easy",
    category: "compute",
    question: "Which Azure service allows you to run applications in containers without managing the underlying virtual machines?",
    options: ["Azure Virtual Machines", "Azure Container Instances (ACI)", "Azure Batch", "Azure App Service"],
    answer: 1,
    explanation: "ACI is the fastest and simplest way to run a container in Azure, without having to manage any virtual machines.",
    hint: "Serverless containers."
  },
  {
    id: 417,
    difficulty: "hard",
    category: "security",
    question: "What is 'Azure Confidential Computing'?",
    options: ["Encrypting data at rest", "Protecting data while in use by performing computations in a hardware-based Trusted Execution Environment (TEE)", "Using a private VPN", "Keeping your subscription name hidden"],
    answer: 1,
    explanation: "Confidential computing protects data in memory from unauthorized access by isolating it during processing.",
    hint: "Encryption in-use."
  },
  {
    id: 18,
    difficulty: "medium",
    category: "governance",
    question: "Which feature allows you to group multiple Azure subscriptions for unified management, policy, and compliance?",
    options: ["Resource Groups", "Management Groups", "Subscription Sets", "Azure Organizations"],
    answer: 1,
    explanation: "Management groups provide a level of scope above subscriptions to manage them efficiently.",
    hint: "Hierarchy above subscriptions."
  },
  {
    id: 419,
    difficulty: "hard",
    category: "analytics",
    question: "Which service is a cloud-based ETL and data integration service that allows you to create data-driven workflows (pipelines)?",
    options: ["Azure Data Lake", "Azure Data Factory (ADF)", "Azure Synapse", "Azure Databricks"],
    answer: 1,
    explanation: "ADF is used to orchestrate data movement and transform data at scale.",
    hint: "Cloud ETL."
  },
  {
    id: 420,
    difficulty: "medium",
    category: "euc",
    question: "What is 'Windows 365' compared to 'Azure Virtual Desktop'?",
    options: ["Windows 365 is a fixed-price 'Cloud PC' service; AVD is a consumption-based flexible VDI solution", "They are the same service with different names", "Windows 365 is only for Linux", "AVD is for mobile phones only"],
    answer: 0,
    explanation: "Windows 365 provides a simple, per-user monthly price for a Cloud PC, whereas AVD offers deep customization and consumption pricing.",
    hint: "Fixed-price Cloud PC."
  },
  {
    id: 421,
    difficulty: "hard",
    category: "ai_ml",
    question: "Which Azure AI service would you use to extract key-value pairs and table data from documents like invoices and receipts automatically?",
    options: ["Azure AI Language", "Azure AI Document Intelligence (formerly Form Recognizer)", "Azure AI Vision", "Azure AI Search"],
    answer: 1,
    explanation: "Document Intelligence uses machine learning to extract text, key-value pairs, and structures from documents.",
    hint: "Intelligent OCR."
  },
  {
    id: 422,
    difficulty: "medium",
    category: "networking",
    question: "Which Azure service provides a distributed network of servers that can efficiently deliver web content to users based on their geographic location?",
    options: ["Azure Front Door", "Azure Content Delivery Network (CDN)", "Azure Traffic Manager", "Azure Application Gateway"],
    answer: 1,
    explanation: "Azure CDN stores cached content on edge servers in point-of-presence (POP) locations to minimize latency.",
    hint: "Edge caching."
  },
  {
    id: 423,
    difficulty: "hard",
    category: "security",
    question: "In the Zero Trust model, which Azure feature allows you to require Multi-Factor Authentication (MFA) based on specific signals like user location or device state?",
    options: ["Azure Role-Based Access Control (RBAC)", "Microsoft Entra Conditional Access", "Azure Firewall", "Azure Policy"],
    answer: 1,
    explanation: "Conditional Access policies are 'if-then' statements: if a user wants to access a resource, then they must complete an action.",
    hint: "Signals and Enforcements."
  },
  {
    id: 424,
    difficulty: "easy",
    category: "billing",
    question: "Which Azure tool helps you estimate the costs of services before you deploy them?",
    options: ["Azure Cost Management", "Azure Pricing Calculator", "Azure TCO Calculator", "Azure Advisor"],
    answer: 1,
    explanation: "The Pricing Calculator is used for upfront estimation of Azure services.",
    hint: "Pre-deployment estimation."
  },
  {
    id: 425,
    difficulty: "medium",
    category: "scenarios",
    question: "You need to host a simple web application with automatic scaling and no server management. Which service is most appropriate?",
    options: ["Azure Virtual Machines", "Azure App Service", "Azure Functions", "Azure Static Web Apps"],
    answer: 1,
    explanation: "App Service is a PaaS offering for hosting web applications, REST APIs, and mobile backends.",
    hint: "Managed web hosting."
  },
  {
    id: 426,
    difficulty: "hard",
    category: "scenarios",
    question: "A company wants to run a large-scale, parallel, and high-performance computing (HPC) batch job in Azure. Which service is best?",
    options: ["Azure Functions", "Azure Batch", "Azure Logic Apps", "Azure App Service"],
    answer: 1,
    explanation: "Azure Batch is designed to run large-scale parallel and high-performance computing applications efficiently.",
    hint: "Large-scale batch jobs."
  },
  {
    id: 427,
    difficulty: "medium",
    category: "management",
    question: "Which Azure service provides an 'Inventory' and 'Change Tracking' view of your resources, helping you understand which resources exist and how they have changed?",
    options: ["Azure Monitor", "Azure Resource Graph", "Azure Advisor", "Azure Blueprints"],
    answer: 1,
    explanation: "Resource Graph allows you to explore your Azure resources across subscriptions using complex queries.",
    hint: "Querying resources."
  },
  {
    id: 428,
    difficulty: "hard",
    category: "governance",
    question: "What is an 'Azure Blueprint'?",
    options: ["A drawing of a data center", "A way to orchestrate the deployment of various resource templates and other artifacts (like RBAC and Policies) into a repeatable set", "A type of virtual machine", "A billing report"],
    answer: 1,
    explanation: "Blueprints help architects define a repeatable set of Azure resources that implements and adheres to an organization's standards.",
    hint: "Repeatable environment setup."
  },
  {
    id: 429,
    difficulty: "medium",
    category: "compute",
    question: "Which service is 'Serverless' and allows you to run small pieces of code (functions) in response to events without worrying about infrastructure?",
    options: ["Azure App Service", "Azure Functions", "Azure Virtual Machines", "Azure Container Instances"],
    answer: 1,
    explanation: "Azure Functions is the event-driven serverless compute platform.",
    hint: "Code triggered by events."
  },
  {
    id: 430,
    difficulty: "hard",
    category: "scenarios",
    question: "You need to migrate a legacy SQL Server to Azure. You want to keep full control over the Operating System. Which option should you choose?",
    options: ["Azure SQL Database", "Azure SQL Managed Instance", "SQL Server on Azure Virtual Machines (IaaS)", "Azure Cosmos DB"],
    answer: 2,
    explanation: "SQL Server on VM (IaaS) gives you full administrative control over the SQL Server instance and the underlying OS.",
    hint: "Full OS control."
  },
  {
    id: 431,
    difficulty: "medium",
    category: "security",
    question: "Which service provides a managed Layer 7 load balancer that includes Web Application Firewall (WAF) capabilities to protect web apps?",
    options: ["Azure Load Balancer", "Azure Application Gateway", "Azure Traffic Manager", "Azure Front Door"],
    answer: 1,
    explanation: "Application Gateway is a web traffic load balancer that can include a WAF for protection.",
    hint: "Layer 7 LB + WAF."
  },
  {
    id: 432,
    difficulty: "hard",
    category: "ai_ml",
    question: "Which Azure service acts as an AI-powered search engine that can crawl your data and provide a searchable index for your custom applications?",
    options: ["Azure AI Search (formerly Cognitive Search)", "Azure AI Language", "Azure Data Lake", "Azure Synapse"],
    answer: 0,
    explanation: "Azure AI Search is a search-as-a-service cloud solution that gives developers APIs and tools for adding a rich search experience.",
    hint: "Search-as-a-Service."
  },
  {
    id: 433,
    difficulty: "medium",
    category: "scenarios",
    question: "Which Azure service is used to connect, monitor, and manage billions of IoT assets?",
    options: ["Azure Event Hubs", "Azure IoT Hub", "Azure Stream Analytics", "Azure Logic Apps"],
    answer: 1,
    explanation: "IoT Hub is a managed service that acts as a central message hub for bi-directional communication between an IoT application and the devices it manages.",
    hint: "IoT connectivity."
  },
  {
    id: 434,
    difficulty: "hard",
    category: "analytics",
    question: "A company needs to perform collaborative data science and data engineering using Apache Spark. Which Azure service is the best fit?",
    options: ["Azure HDInsight", "Azure Databricks", "Azure Synapse Spark Pools", "Azure Data Factory"],
    answer: 1,
    explanation: "Azure Databricks is an Apache Spark-based analytics platform optimized for the Microsoft Azure cloud.",
    hint: "Optimized Spark platform."
  },
  {
    id: 435,
    difficulty: "easy",
    category: "networking",
    question: "What is the basic unit of networking in Azure, where you can launch resources like Virtual Machines?",
    options: ["Subnet", "Virtual Network (VNet)", "Network Security Group", "Private Link"],
    answer: 1,
    explanation: "An Azure Virtual Network (VNet) is a representation of your own network in the cloud.",
    hint: "Azure private network."
  },
  {
    id: 436,
    difficulty: "hard",
    category: "storage",
    question: "What is 'Azure Data Lake Storage Gen2'?",
    options: ["A type of SQL database", "A set of capabilities dedicated to big data analytics, built on Azure Blob Storage and providing a hierarchical namespace", "A faster hard drive for VMs", "A backup service"],
    answer: 1,
    explanation: "Gen2 combines the power of a hierarchical file system with the scale and cost of Blob storage.",
    hint: "Hierarchical Big Data storage."
  },
  {
    id: 437,
    difficulty: "medium",
    category: "security",
    question: "Which Azure tool provides a 'Security Score' and gives recommendations to improve your cloud security posture across subscriptions?",
    options: ["Microsoft Sentinel", "Microsoft Defender for Cloud", "Azure Bastion", "Azure Key Vault"],
    answer: 1,
    explanation: "Defender for Cloud (formerly Security Center) provides Cloud Security Posture Management (CSPM).",
    hint: "Secure Score."
  },
  {
    id: 438,
    difficulty: "hard",
    category: "networking",
    question: "Which service provides a managed RDP/SSH solution that allows you to connect to VMs through your browser and the Azure portal, without exposing public IPs?",
    options: ["Azure VPN Gateway", "Azure Bastion", "Azure ExpressRoute", "Azure Firewall"],
    answer: 1,
    explanation: "Azure Bastion is a service you deploy that lets you connect to a virtual machine using your browser and the Azure portal.",
    hint: "No-Public-IP RDP."
  },
  {
    id: 439,
    difficulty: "medium",
    category: "scenarios",
    question: "A developer wants to host a static website (HTML, CSS, JS) with integrated serverless APIs (Azure Functions) and built-in CI/CD. Which service is designed for this?",
    options: ["Azure App Service", "Azure Static Web Apps", "Azure Blob Storage", "Azure Container Instances"],
    answer: 1,
    explanation: "Azure Static Web Apps is a service that automatically builds and deploys full stack web apps to Azure from a code repository.",
    hint: "Frontend + Serverless API."
  },
  {
    id: 440,
    difficulty: "hard",
    category: "scenarios",
    question: "You need to migrate 500 TB of data to Azure, but your internet connection is too slow. Which hardware-based migration tool should you use?",
    options: ["Azure Data Box", "Azure Data Factory", "Azure Storage Explorer", "Azure Import/Export Service"],
    answer: 0,
    explanation: "Azure Data Box is a ruggedized device that you fill with data and ship back to Azure.",
    hint: "Offline data transfer."
  },
  {
    id: 441,
    difficulty: "medium",
    category: "scenarios",
    question: "Which Azure service is used to create automated workflows that integrate apps, data, and systems across organizations (a low-code iPaaS)?",
    options: ["Azure Functions", "Azure Logic Apps", "Azure Service Bus", "Azure Event Grid"],
    answer: 1,
    explanation: "Logic Apps is a cloud service that helps you schedule, automate, and orchestrate tasks and business processes.",
    hint: "Workflow orchestration."
  },
  {
    id: 442,
    difficulty: "hard",
    category: "security",
    question: "What is 'Azure Private Link'?",
    options: ["A type of VPN", "A service that allows you to access Azure PaaS Services (like SQL or Storage) over a private endpoint in your VNet", "A way to link two private subscriptions", "A physical cable from Azure"],
    answer: 1,
    explanation: "Private Link enables you to access services privately; the traffic stays on the Microsoft network.",
    hint: "Private IP for PaaS."
  },
  {
    id: 443,
    difficulty: "medium",
    category: "scenarios",
    question: "A company wants to run its SAP workloads on Azure. Which VM series is specifically certified and optimized for memory-intensive applications like SAP HANA?",
    options: ["F-series", "D-series", "M-series", "A-series"],
    answer: 2,
    explanation: "M-series VMs offer high memory capacity and are ideal for heavy in-memory workloads like SAP HANA.",
    hint: "High-memory VMs."
  },
  {
    id: 444,
    difficulty: "hard",
    category: "management",
    question: "What is 'Azure Arc'?",
    options: ["A type of virtual network", "A service that allows you to manage and govern your servers, Kubernetes clusters, and applications across on-premises, edge, and multi-cloud environments", "A backup service for VMs", "A gaming platform"],
    answer: 1,
    explanation: "Azure Arc extends Azure management and services to any infrastructure.",
    hint: "Multi-cloud/Hybrid management."
  },
  {
    id: 445,
    difficulty: "medium",
    category: "scenarios",
    question: "You need a high-performance, enterprise-grade file share that supports both NFS and SMB protocols. Which service is best?",
    options: ["Azure Files", "Azure NetApp Files", "Azure Blob Storage", "Azure Data Lake"],
    answer: 1,
    explanation: "Azure NetApp Files is a first-party Azure service for high-performance file storage.",
    hint: "Enterprise NetApp on Azure."
  },
  {
    id: 446,
    difficulty: "hard",
    category: "networking",
    question: "Which Azure service acts as a global, Layer 7 load balancer that provides fast, reliable, and secure access between your users and your applications' static and dynamic web content?",
    options: ["Azure Application Gateway", "Azure Front Door", "Azure Traffic Manager", "Azure Load Balancer"],
    answer: 1,
    explanation: "Front Door is a global entry point that uses the Microsoft global edge network to create fast, secure, and scalable web apps.",
    hint: "Global Layer 7 Entry Point."
  },
  {
    id: 447,
    difficulty: "medium",
    category: "ai_ml",
    question: "Which Azure AI service provides pre-built models for language detection, sentiment analysis, and key phrase extraction?",
    options: ["Azure AI Language", "Azure AI Speech", "Azure AI Vision", "Azure AI Search"],
    answer: 0,
    explanation: "Azure AI Language (part of Cognitive Services) handles text-based AI tasks.",
    hint: "Natural Language Processing."
  },
  {
    id: 448,
    difficulty: "hard",
    category: "scenarios",
    question: "You are designing a web application and want to distribute traffic to different regions based on the lowest latency for the user. Which service do you use?",
    options: ["Azure Load Balancer", "Azure Traffic Manager", "Azure Application Gateway", "Azure Front Door"],
    answer: 1,
    explanation: "Traffic Manager is a DNS-based traffic load balancer that allows you to distribute traffic optimally to services across global Azure regions.",
    hint: "DNS-based global routing."
  },
  {
    id: 449,
    difficulty: "medium",
    category: "security",
    question: "Which service provides managed DDoS protection for your Virtual Networks to protect against volumetric and protocol attacks?",
    options: ["Azure Firewall", "Azure DDoS Protection", "Azure Front Door", "Microsoft Defender for Cloud"],
    answer: 1,
    explanation: "Azure DDoS Protection (IP Protection or Network Protection) provides enhanced DDoS mitigation capabilities.",
    hint: "VNet DDoS shield."
  },
  {
    id: 450,
    difficulty: "hard",
    category: "scenarios",
    question: "A developer wants to run a serverless workflow that waits for an approval email before continuing a process. Which service is most appropriate?",
    options: ["Azure Functions", "Azure Logic Apps", "Azure Event Grid", "Azure Service Bus"],
    answer: 1,
    explanation: "Logic Apps is excellent for workflows that involve human interaction and external connectors like Office 365 email.",
    hint: "Workflow with connectors."
  }
];

// Append to master database
//questionBank.push(...azureBatch9);
/* ======================================================
   AZURE MASTER QUESTION BANK (Batch 2: 451-500)
   Topics: Governance, DevOps, Advanced Security, & Well-Architected
   ====================================================== */

const azureBatch10 = [
  {
    id: 451,
    difficulty: "medium",
    category: "governance",
    question: "Which Azure tool allows you to prevent the accidental deletion or modification of critical resources, regardless of a user's permissions?",
    options: ["Azure Policy", "Resource Locks", "Azure RBAC", "Management Groups"],
    answer: 1,
    explanation: "Resource Locks (CanNotDelete or ReadOnly) provide a way for administrators to lock a subscription, resource group, or resource.",
    hint: "Prevent accidental deletion."
  },
  {
    id: 452,
    difficulty: "hard",
    category: "devops",
    question: "In Azure DevOps, which component is used to manage and host private Docker images and Maven/NuGet packages?",
    options: ["Azure Repos", "Azure Artifacts", "Azure Pipelines", "Azure Container Registry"],
    answer: 1,
    explanation: "Azure Artifacts enables developers to share and consume packages from different feeds and public registries.",
    hint: "Package management."
  },
  {
    id: 453,
    difficulty: "medium",
    category: "security",
    question: "Which service provides a managed 'jumpbox' to access Azure Virtual Machines over SSL without requiring a public IP address on the VM?",
    options: ["Azure VPN Gateway", "Azure Front Door", "Azure Bastion", "Azure ExpressRoute"],
    answer: 2,
    explanation: "Azure Bastion provides secure RDP/SSH connectivity to your VMs directly in the portal over SSL.",
    hint: "Browser-based RDP."
  },
  {
    id: 454,
    difficulty: "hard",
    category: "scenarios",
    question: "You need to store data for a globally distributed app. You require the ability to choose between five well-defined consistency levels. Which service fits?",
    options: ["Azure SQL Database", "Azure Table Storage", "Azure Cosmos DB", "Azure Synapse"],
    answer: 2,
    explanation: "Cosmos DB offers five consistency levels: Strong, Bounded Staleness, Session, Consistent Prefix, and Eventual.",
    hint: "Multi-model global NoSQL."
  },
  {
    id: 455,
    difficulty: "medium",
    category: "architecture",
    question: "In the Azure Well-Architected Framework, which pillar focuses on the ability of a system to recover from failures and continue to function?",
    options: ["Operational Excellence", "Reliability", "Performance Efficiency", "Security"],
    answer: 1,
    explanation: "The Reliability pillar ensures that your application can meet the commitments you make to your customers regarding uptime.",
    hint: "Uptime and recovery."
  },
  {
    id: 456,
    difficulty: "easy",
    category: "management",
    question: "Which Azure service provides information about planned maintenance and service advisories that may affect your resources?",
    options: ["Azure Monitor", "Azure Service Health", "Azure Advisor", "Azure Policy"],
    answer: 1,
    explanation: "Azure Service Health provides a personalized dashboard for the health of the Azure services and regions you use.",
    hint: "Platform health status."
  },
  {
    id: 457,
    difficulty: "hard",
    category: "security",
    question: "Which Microsoft Entra ID feature allows you to provide 'Just-In-Time' (JIT) administrative access to Azure resources?",
    options: ["Conditional Access", "Privileged Identity Management (PIM)", "Access Reviews", "Managed Identities"],
    answer: 1,
    explanation: "PIM allows you to manage, control, and monitor access to important resources, providing access only when needed.",
    hint: "JIT Admin access."
  },
  {
    id: 458,
    difficulty: "medium",
    category: "ai_ml",
    question: "You want to build a custom chatbot that uses your own PDF documents to answer questions (RAG pattern). Which Azure service is used to index and retrieve that data?",
    options: ["Azure OpenAI", "Azure AI Search", "Azure Machine Learning", "Azure Bot Service"],
    answer: 1,
    explanation: "Azure AI Search provides the retrieval capability in Retrieval-Augmented Generation (RAG) patterns.",
    hint: "Vector and keyword search."
  },
  {
    id: 459,
    difficulty: "hard",
    category: "analytics",
    question: "Which Azure Synapse Analytics feature allows you to query data sitting in a Data Lake using T-SQL without having to provision a dedicated SQL pool?",
    options: ["Serverless SQL pool", "Spark pool", "Data Integration", "Synapse Link"],
    answer: 0,
    explanation: "Serverless SQL pools allow you to use T-SQL to query data in your data lake on-demand with no infrastructure setup.",
    hint: "Query CSV/Parquet in-place."
  },
  {
    id: 460,
    difficulty: "medium",
    category: "scenarios",
    question: "You are hosting a web app on Azure App Service. You want to test a new version of the app with 10% of your traffic before a full rollout. What feature do you use?",
    options: ["Deployment Slots", "App Service Plans", "Traffic Manager", "Azure Front Door"],
    answer: 0,
    explanation: "Deployment slots are live apps with their own host names; you can swap slots or route a percentage of traffic to them.",
    hint: "Staging environments."
  },
  {
    id: 461,
    difficulty: "hard",
    category: "security",
    question: "What is the difference between a 'System-assigned' and 'User-assigned' Managed Identity?",
    options: [
      "System-assigned is shared across resources; User-assigned is tied to one resource",
      "System-assigned is tied to the lifecycle of a single resource; User-assigned is a standalone resource that can be assigned to multiple resources",
      "They are identical in function",
      "User-assigned only works for on-premises servers"
    ],
    answer: 1,
    explanation: "System-assigned identities are deleted when the resource is deleted. User-assigned identities exist independently.",
    hint: "Lifecycle vs. Shared."
  },
  {
    id: 462,
    difficulty: "medium",
    category: "networking",
    question: "Which service would you use to connect two Azure Virtual Networks (VNets) together so that resources can communicate as if they were in the same network?",
    options: ["VNet Peering", "VPN Gateway", "ExpressRoute", "Azure Bastion"],
    answer: 0,
    explanation: "VNet Peering connects two VNets over the Azure backbone network with low latency and high bandwidth.",
    hint: "Direct VNet connection."
  },
  {
    id: 463,
    difficulty: "hard",
    category: "scenarios",
    question: "A financial firm requires dedicated physical servers in an Azure datacenter to meet strict compliance and isolation requirements. Which service should they use?",
    options: ["Azure Virtual Machines", "Azure Dedicated Host", "Azure App Service Environment", "Azure Confidential Computing"],
    answer: 1,
    explanation: "Azure Dedicated Host provides physical servers that are dedicated to one Azure subscription.",
    hint: "Hardware isolation."
  },
  {
    id: 464,
    difficulty: "medium",
    category: "governance",
    question: "Which Azure tool is used to assign metadata to resources for the purpose of organizing billing and management?",
    options: ["Azure Policy", "Tags", "Resource Groups", "Management Groups"],
    answer: 1,
    explanation: "Tags are name-value pairs that help you categorize resources and view consolidated billing.",
    hint: "Key-value metadata."
  },
  {
    id: 465,
    difficulty: "hard",
    category: "analytics",
    question: "You are using Azure Databricks. You want to ensure that all data changes (inserts/updates/deletes) are recorded so you can travel back in time to earlier versions. What feature is this?",
    options: ["Delta Lake Time Travel", "Databricks Snapshot", "Azure Backup", "SQL Audit Logs"],
    answer: 0,
    explanation: "Delta Lake stores a transaction log that allows you to query previous versions of data.",
    hint: "Version history for data."
  },
  {
    id: 466,
    difficulty: "medium",
    category: "euc",
    question: "In Azure Virtual Desktop, what is a 'Host Pool'?",
    options: [
      "A collection of users",
      "A collection of identical virtual machines for user sessions",
      "A storage account for profiles",
      "A network of virtual desktops"
    ],
    answer: 1,
    explanation: "A host pool is a collection of one or more identical virtual machines within Azure Virtual Desktop environments.",
    hint: "Group of session hosts."
  },
  {
    id: 467,
    difficulty: "easy",
    category: "compute",
    question: "What is the primary benefit of 'Azure Spot Virtual Machines'?",
    options: ["Highest availability", "Significant cost savings for interruptible workloads", "Unlimited CPU performance", "Dedicated hardware"],
    answer: 1,
    explanation: "Spot VMs allow you to take advantage of unused Azure capacity at a deep discount, but they can be evicted at any time.",
    hint: "Unused capacity pricing."
  },
  {
    id: 468,
    difficulty: "hard",
    category: "networking",
    question: "Which Azure service provides a central, private IP address for multiple PaaS services, ensuring that data never traverses the public internet?",
    options: ["Azure Private Link", "Azure Service Endpoints", "Azure Firewall", "Azure Front Door"],
    answer: 0,
    explanation: "Private Link uses a private endpoint (private IP) in your VNet to connect to services.",
    hint: "Private IP for PaaS."
  },
  {
    id: 469,
    difficulty: "medium",
    category: "security",
    question: "Which Azure service provides cloud-native, intelligent network security to protect your Azure Virtual Network resources (acting as a Statefull Firewall)?",
    options: ["Azure Firewall", "Network Security Group (NSG)", "Azure Bastion", "Azure DDoS Protection"],
    answer: 0,
    explanation: "Azure Firewall is a managed, cloud-based network security service that protects your VNet resources with built-in high availability.",
    hint: "Fully managed VNet firewall."
  },
  {
    id: 470,
    difficulty: "hard",
    category: "devops",
    question: "What is 'Azure Bicep'?",
    options: [
      "A new monitoring tool",
      "A Domain-Specific Language (DSL) that uses declarative syntax to deploy Azure resources, simplifying ARM templates",
      "A testing framework for C#",
      "A security scanner"
    ],
    answer: 1,
    explanation: "Bicep is a transparent abstraction over ARM templates that makes the authoring experience easier.",
    hint: "Cleaner Infrastructure as Code."
  },
  {
    id: 471,
    difficulty: "medium",
    category: "scenarios",
    question: "A company wants to move its local file server to the cloud but keep local caching for fast access. Which service should they use?",
    options: ["Azure Files", "Azure File Sync", "Azure Blob Storage", "Azure NetApp Files"],
    answer: 1,
    explanation: "Azure File Sync centralizes your organization's file shares in Azure Files, while keeping the flexibility, performance, and compatibility of an on-premises file server.",
    hint: "Cloud shares + Local cache."
  },
  {
    id: 472,
    difficulty: "hard",
    category: "ai_ml",
    question: "Which Azure OpenAI model is best suited for generating code from natural language prompts?",
    options: ["GPT-4", "Codex (integrated into GPT-3.5/4)", "DALL-E", "Whisper"],
    answer: 1,
    explanation: "Codex is the model series specifically trained on code, though GPT-4 now encompasses these capabilities.",
    hint: "Programming assistant model."
  },
  {
    id: 473,
    difficulty: "medium",
    category: "architecture",
    question: "What is an Azure 'Availability Zone'?",
    options: [
      "A grouping of multiple subscriptions",
      "Physically separate datacenters within an Azure region",
      "A backup of a database",
      "A logical group of resources"
    ],
    answer: 1,
    explanation: "Availability Zones are unique physical locations within a region, each made up of one or more datacenters with independent power/cooling.",
    hint: "Datacenter level redundancy."
  },
  {
    id: 474,
    difficulty: "hard",
    category: "databases",
    question: "You need an Azure SQL database that automatically scales compute based on workload demand and bills for the amount of compute used per second. Which compute tier do you choose?",
    options: ["Provisioned", "Serverless", "Hyperscale", "Business Critical"],
    answer: 1,
    explanation: "The Serverless compute tier for Azure SQL Database automatically scales and pauses during inactive periods.",
    hint: "Auto-scale and Auto-pause."
  },
  {
    id: 475,
    difficulty: "medium",
    category: "governance",
    question: "In Azure RBAC, what is a 'Role Definition'?",
    options: [
      "A list of users",
      "A collection of permissions, such as read, write, and delete",
      "A security group",
      "A management group"
    ],
    answer: 1,
    explanation: "A role definition is the set of permissions that can be performed, such as 'Contributor' or 'Owner'.",
    hint: "The 'What' of RBAC."
  },
  {
    id: 476,
    difficulty: "hard",
    category: "scenarios",
    question: "A company needs to analyze petabytes of data using Spark and Python within an integrated workspace that includes notebooks and automated clusters. Which service is best?",
    options: ["Azure Synapse Analytics", "Azure Databricks", "Azure HDInsight", "Azure Batch"],
    answer: 1,
    explanation: "Azure Databricks is the premier managed Apache Spark platform for high-scale data science and engineering.",
    hint: "Managed Spark Notebooks."
  },
  {
    id: 477,
    difficulty: "medium",
    category: "security",
    question: "Which service protects Azure SQL databases from threats like SQL injection and unusual access patterns?",
    options: ["Microsoft Defender for SQL", "Azure Firewall", "Azure WAF", "Azure Key Vault"],
    answer: 0,
    explanation: "Defender for SQL identifies potential database vulnerabilities and detects anomalous activities.",
    hint: "Database threat detection."
  },
  {
    id: 478,
    difficulty: "hard",
    category: "networking",
    question: "What is 'Global VNet Peering'?",
    options: [
      "Peering within the same region",
      "Connecting VNets across different Azure regions",
      "Connecting a VNet to an on-premises network",
      "Connecting a VNet to the internet"
    ],
    answer: 1,
    explanation: "Global VNet Peering allows you to connect virtual networks in different Azure regions.",
    hint: "Inter-region private connection."
  },
  {
    id: 479,
    difficulty: "medium",
    category: "management",
    question: "Which tool allows you to visually track the costs of your Azure resources and set budgets/alerts?",
    options: ["Azure Pricing Calculator", "Azure Cost Management + Billing", "Azure Advisor", "Azure Monitor"],
    answer: 1,
    explanation: "Cost Management allows you to analyze costs, create budgets, and set alerts when spending reaches certain thresholds.",
    hint: "Post-deployment cost tracking."
  },
  {
    id: 480,
    difficulty: "hard",
    category: "governance",
    question: "Which Azure service allows you to create and manage 'Compliant Environments' by packaging ARM templates, RBAC, and Policies together?",
    options: ["Azure Policy", "Azure Blueprints", "Azure Resource Graph", "Azure Arc"],
    answer: 1,
    explanation: "Blueprints enable cloud architects to define a repeatable set of Azure resources that implement an organization's standards.",
    hint: "Environment orchestration."
  },
  {
    id: 481,
    difficulty: "medium",
    category: "ai_ml",
    question: "What is the primary purpose of 'Azure AI Language' (formerly LUIS/Text Analytics)?",
    options: [
      "Translating audio to text",
      "Building models that understand intent and extract information from text",
      "Generating images from text",
      "Hosting custom Python models"
    ],
    answer: 1,
    explanation: "Azure AI Language is a cloud-based service that provides Natural Language Processing (NLP) features.",
    hint: "Text understanding."
  },
  {
    id: 482,
    difficulty: "hard",
    category: "scenarios",
    question: "You need to store non-relational data that requires sub-millisecond response times. Which Azure service should you use?",
    options: ["Azure Cosmos DB", "Azure Cache for Redis", "Azure SQL Database", "Azure Table Storage"],
    answer: 1,
    explanation: "Azure Cache for Redis provides an in-memory data store for extremely low-latency performance.",
    hint: "In-memory NoSQL."
  },
  {
    id: 483,
    difficulty: "medium",
    category: "storage",
    question: "What is 'Object Replication' in Azure Blob Storage?",
    options: [
      "Backing up data to a tape drive",
      "Asynchronously copying block blobs between a source storage account and a destination account",
      "The same as RAID-1",
      "Moving data to the Archive tier"
    ],
    answer: 1,
    explanation: "Object replication helps you minimize latency and increase availability by syncing blobs between accounts.",
    hint: "Account-to-account blob sync."
  },
  {
    id: 484,
    difficulty: "hard",
    category: "security",
    question: "In Azure, what is the 'Shared Responsibility Model' for a PaaS service?",
    options: [
      "Microsoft is responsible for everything",
      "The customer is responsible for everything",
      "Microsoft manages the infrastructure and OS; the customer manages applications and data",
      "Responsibilities are chosen by a contract"
    ],
    answer: 2,
    explanation: "In PaaS, the cloud provider handles the underlying platform, while you manage the code and data.",
    hint: "Platform vs. Data responsibility."
  },
  {
    id: 485,
    difficulty: "medium",
    category: "compute",
    question: "Which service is a managed Kubernetes service in Azure that simplifies deploying and managing containerized applications?",
    options: ["Azure Container Instances", "Azure Kubernetes Service (AKS)", "Azure App Service", "Azure Functions"],
    answer: 1,
    explanation: "AKS reduces the complexity and operational overhead of managing a Kubernetes cluster.",
    hint: "Managed K8s."
  },
  {
    id: 486,
    difficulty: "hard",
    category: "scenarios",
    question: "You want to automate the remediation of a security finding (e.g., automatically closing a port when it's opened). Which combination is best?",
    options: [
      "Azure Policy + Azure Functions/Logic Apps",
      "Azure Monitor + Azure Advisor",
      "Azure Bastion + NSG",
      "Microsoft Sentinel + Power BI"
    ],
    answer: 0,
    explanation: "Azure Policy can trigger a remediation task via Logic Apps or Functions when a resource is found non-compliant.",
    hint: "Policy + Automation."
  },
  {
    id: 487,
    difficulty: "medium",
    category: "networking",
    question: "What is an Azure 'Service Endpoint'?",
    options: [
      "A public IP for a VM",
      "A way to secure Azure service resources to your virtual network by extending VNet identity to the service",
      "A VPN connection",
      "A load balancer front-end"
    ],
    answer: 1,
    explanation: "Service endpoints provide secure and direct connectivity to Azure services over an optimized route over the Azure backbone network.",
    hint: "Secure PaaS to VNet."
  },
  {
    id: 488,
    difficulty: "hard",
    category: "analytics",
    question: "Which Azure service is best suited for doing large-scale data exploration and telemetry analysis using the Kusto Query Language (KQL)?",
    options: ["Azure Data Explorer", "Azure Synapse SQL", "Azure SQL Database", "Azure Databricks"],
    answer: 0,
    explanation: "Azure Data Explorer (ADX) is a fast and highly scalable data exploration service for log and telemetry data.",
    hint: "Home of KQL."
  },
  {
    id: 489,
    difficulty: "medium",
    category: "management",
    question: "What does the 'Azure Resource Graph' allow you to do?",
    options: [
      "Draw a diagram of your network",
      "Run complex queries across all your subscriptions to explore and inventory resources",
      "Monitor the performance of your CPU",
      "Check the weather in the datacenter"
    ],
    answer: 1,
    explanation: "Resource Graph provides an efficient way to query resource properties across the entire Azure environment.",
    hint: "SQL-like query for resources."
  },
  {
    id: 490,
    difficulty: "hard",
    category: "devops",
    question: "In an Azure Pipeline, what is a 'Self-hosted Agent'?",
    options: [
      "A robot in the datacenter",
      "An agent you drop on your own machine (on-prem or VM) to run build and deployment jobs",
      "A software for tracking bugs",
      "A type of GitHub Action"
    ],
    answer: 1,
    explanation: "Self-hosted agents give you more control to install dependent software needed for your builds and deployments.",
    hint: "Your hardware, Azure's pipeline."
  },
  {
    id: 491,
    difficulty: "medium",
    category: "euc",
    question: "Which FSLogix feature is commonly used in Azure Virtual Desktop to handle user profiles?",
    options: ["Profile Containers", "App Masking", "Java Redirection", "Cloud Cache"],
    answer: 0,
    explanation: "Profile Containers redirect user profiles to a network location, allowing them to roam across virtual machines seamlessly.",
    hint: "Roaming VDI profiles."
  },
  {
    id: 492,
    difficulty: "hard",
    category: "architecture",
    question: "Which Azure region type is designed for high-security workloads and is physically isolated from other Azure regions (e.g., for US Government)?",
    options: ["Global Regions", "Sovereign Regions", "Availability Zones", "Regional Pairs"],
    answer: 1,
    explanation: "Sovereign regions like Azure Government are physically isolated instances of Azure.",
    hint: "Isolation for government/legal."
  },
  {
    id: 493,
    difficulty: "medium",
    category: "scenarios",
    question: "You want to run a web application that consists of several containers. You want to manage them together as a group. Which service is best?",
    options: ["Azure Container Instances (ACI) with Container Groups", "Azure Virtual Machines", "Azure Functions", "Azure Storage"],
    answer: 0,
    explanation: "A container group in ACI is a collection of containers that are scheduled on the same host machine.",
    hint: "Multi-container serverless."
  },
  {
    id: 494,
    difficulty: "hard",
    category: "security",
    question: "What is 'Microsoft Entra ID Protection'?",
    options: [
      "A firewall for identity",
      "A feature that allows organizations to automate the detection and remediation of identity-based risks",
      "A way to password protect files",
      "An antivirus for servers"
    ],
    answer: 1,
    explanation: "It uses machine learning to identify risks like 'leaked credentials' or 'impossible travel'.",
    hint: "Risk-based identity security."
  },
  {
    id: 495,
    difficulty: "medium",
    category: "scenarios",
    question: "Which Azure service is a fully managed, open-source-compatible NoSQL database for MongoDB, Cassandra, and Gremlin?",
    options: ["Azure Cosmos DB", "Azure SQL Database", "Azure Cache for Redis", "Azure Table Storage"],
    answer: 0,
    explanation: "Cosmos DB provides multiple APIs for compatibility with various open-source NoSQL engines.",
    hint: "Multi-API NoSQL."
  },
  {
    id: 496,
    difficulty: "hard",
    category: "analytics",
    question: "You need to ingest data from an on-premises SQL Server into Azure Data Lake Gen2. Which component of Azure Data Factory do you install on-premises?",
    options: ["Self-hosted Integration Runtime (IR)", "Azure Integration Runtime", "Data Factory Agent", "SQL Gateway"],
    answer: 0,
    explanation: "The Self-hosted IR is the compute infrastructure used by ADF to perform data integration across network environments.",
    hint: "Bridge for on-prem data."
  },
  {
    id: 497,
    difficulty: "medium",
    category: "security",
    question: "Which Azure service allows you to manage and govern your Azure resources using 'Assignments' and 'Definitions' to ensure compliance?",
    options: ["Azure Policy", "Azure RBAC", "Azure Blueprints", "Azure Advisor"],
    answer: 0,
    explanation: "Azure Policy evaluates resources by comparing them to business rules defined in policy definitions.",
    hint: "Compliance definitions."
  },
  {
    id: 498,
    difficulty: "hard",
    category: "scenarios",
    question: "A company needs to host a global API. They want to ensure that traffic is routed to the nearest healthy endpoint and want to protect the API from OWASP top 10 threats. What should they use?",
    options: ["Azure Front Door with WAF", "Azure Load Balancer", "Azure Traffic Manager", "Azure VPN Gateway"],
    answer: 0,
    explanation: "Azure Front Door provides global routing (Layer 7) and includes WAF for security.",
    hint: "Global L7 + Security."
  },
  {
    id: 499,
    difficulty: "medium",
    category: "compute",
    question: "In Azure App Service, what determines the compute resources (CPU, Memory) available to your web app?",
    options: ["App Service Plan", "Resource Group", "Subscription tier", "The App Code"],
    answer: 0,
    explanation: "An App Service plan defines a set of compute resources for a web app to run.",
    hint: "The 'Server' behind the PaaS."
  },
  {
    id: 500,
    difficulty: "hard",
    category: "scenarios",
    question: "You want to implement a 'Hub and Spoke' network topology in Azure. The 'Hub' should contain shared services like a firewall. What is the most common way to connect the 'Spokes' to the 'Hub'?",
    options: ["VNet Peering", "VPN Tunnels", "ExpressRoute", "Physical cables"],
    answer: 0,
    explanation: "VNet Peering is the standard way to connect spoke VNets to a central hub VNet for shared service access.",
    hint: "Network topology connection."
  }
];

// Combine into main db
//questionBank.push(...azureBatch10);
const questionBank = [...batch1, ...batch2,...batch3, ...batch4,...batch5, ...batch6,...batch7, ...batch8, ...azureBatch9, ...azureBatch10];
