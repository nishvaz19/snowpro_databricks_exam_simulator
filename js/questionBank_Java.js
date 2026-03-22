/* ======================================================
   JAVA & SPRING BOOT MASTER QUESTION BANK (Batch 1/6)
   Topics: Classes, Interfaces, Sealed Classes, Spring Boot
   ====================================================== */

const questionBank = [
  {
    id: 1,
    difficulty: "easy",
    category: "Java Core",
    question: "Which keyword is used to prevent a class from being inherited in Java?",
    options: ["static", "final", "abstract", "sealed"],
    answer: 1,
    explanation: "The 'final' keyword when applied to a class prevents any other class from extending it."
  },
  {
    id: 2,
    difficulty: "medium",
    category: "Java Core",
    question: "In Java 17, which modifier allows a class to restrict which other classes may extend it?",
    options: ["restricted", "final", "sealed", "locked"],
    answer: 2,
    explanation: "Sealed classes and interfaces restrict which other classes or interfaces may extend or implement them using the 'permits' clause."
  },
  {
    id: 3,
    difficulty: "easy",
    category: "Spring Boot",
    question: "Which annotation is used to mark a class as a Spring Boot application entry point?",
    options: ["@SpringApplication", "@SpringBootConfiguration", "@SpringBootApplication", "@EnableAutoConfiguration"],
    answer: 2,
    explanation: "@SpringBootApplication is a convenience annotation that adds @Configuration, @EnableAutoConfiguration, and @ComponentScan."
  },
  {
    id: 4,
    difficulty: "medium",
    category: "Microservices",
    question: "What is the primary purpose of a 'Service Discovery' component like Netflix Eureka?",
    options: [
      "To store user credentials",
      "To allow services to find and communicate with each other without hardcoding hostnames",
      "To perform load balancing only",
      "To act as a persistent database for microservices"
    ],
    answer: 1,
    explanation: "Service Discovery allows microservices to register themselves and discover the locations of other services dynamically."
  },
  {
    id: 5,
    difficulty: "easy",
    category: "REST API",
    question: "Which HTTP method is typically used to update an existing resource by replacing it entirely?",
    options: ["POST", "PATCH", "GET", "PUT"],
    answer: 3,
    explanation: "PUT is used for full updates/replacements, while PATCH is used for partial updates."
  },
  {
    id: 6,
    difficulty: "medium",
    category: "Security",
    question: "What are the three parts of a JSON Web Token (JWT)?",
    options: [
      "Username, Password, Role",
      "Header, Payload, Signature",
      "Key, Value, Hash",
      "Issuer, Subject, Expiry"
    ],
    answer: 1,
    explanation: "A JWT consists of three parts separated by dots: the Header (algorithm), the Payload (claims), and the Signature (verification)."
  },
  {
    id: 7,
    difficulty: "medium",
    category: "Java Core",
    question: "What is the difference between a 'sealed' class and a 'final' class?",
    options: [
      "There is no difference",
      "Final allows no subclasses; Sealed allows specific, named subclasses",
      "Sealed allows no subclasses; Final allows specific subclasses",
      "Sealed is only for interfaces"
    ],
    answer: 1,
    explanation: "A final class cannot be extended at all. A sealed class can be extended, but only by classes listed in its 'permits' clause."
  },
  {
    id: 8,
    difficulty: "easy",
    category: "Spring Boot",
    question: "In Spring Boot, where is the default location for the 'application.properties' file?",
    options: ["src/main/java", "src/test/resources", "src/main/resources", "target/classes"],
    answer: 2,
    explanation: "Spring Boot automatically searches for application.properties or application.yml in the src/main/resources folder."
  },
  {
    id: 9,
    difficulty: "medium",
    category: "Microservices",
    question: "Which design pattern is used to handle service failures gracefully by preventing cascading failures?",
    options: ["Singleton Pattern", "Circuit Breaker Pattern", "Proxy Pattern", "Observer Pattern"],
    answer: 1,
    explanation: "The Circuit Breaker pattern (e.g., Resilience4j) stops requests to a failing service to allow it to recover and protect the rest of the system."
  },
  {
    id: 10,
    difficulty: "easy",
    category: "REST API",
    question: "Which annotation in Spring MVC is used to map a web request to a specific handler method?",
    options: ["@Service", "@RequestMapping", "@Controller", "@Autowired"],
    answer: 1,
    explanation: "@RequestMapping (and specialized versions like @GetMapping) maps HTTP requests to Java methods."
  },
  // ... Questions 11-40 would follow here with same structure ...
  {
    id: 41,
    difficulty: "hard",
    category: "Java Core",
    question: "Which of the following must a subclass of a 'sealed' class be declared as?",
    options: [
      "Only 'final'",
      "Only 'non-sealed'",
      "Only 'sealed'",
      "Either 'final', 'sealed', or 'non-sealed'"
    ],
    answer: 3,
    explanation: "To maintain the hierarchy rules, any class extending a sealed class must explicitly be declared final, sealed, or non-sealed (opening it back up)."
  },
  {
    id: 42,
    difficulty: "medium",
    category: "Spring Boot",
    question: "What does @RestController combine?",
    options: [
      "@Controller and @Service",
      "@Controller and @ResponseBody",
      "@Component and @Repository",
      "@Service and @Bean"
    ],
    answer: 1,
    explanation: "@RestController is a convenience annotation that combines @Controller and @ResponseBody, ensuring all methods return data directly to the body."
  },
  {
    id: 43,
    difficulty: "easy",
    category: "JSON",
    question: "In Spring Boot, which library is used by default for JSON serialization and deserialization?",
    options: ["Gson", "Jackson", "FastJSON", "JSON-B"],
    answer: 1,
    explanation: "Jackson is the default JSON processor included in the Spring Boot starter web dependency."
  },
  {
    id: 44,
    difficulty: "medium",
    category: "Java Core",
    question: "What is a 'Functional Interface' in Java?",
    options: [
      "An interface with no methods",
      "An interface with exactly one abstract method",
      "An interface with only default methods",
      "An interface that cannot be implemented"
    ],
    answer: 1,
    explanation: "A functional interface (like Runnable or Comparator) has exactly one abstract method and can be used with Lambda expressions."
  },
  {
    id: 45,
    difficulty: "medium",
    category: "Spring Boot",
    question: "Which annotation is used to inject a dependency automatically in Spring?",
    options: ["@Inject", "@Resource", "@Autowired", "All of the above"],
    answer: 3,
    explanation: "While @Autowired is the Spring-specific annotation, @Inject (JSR-330) and @Resource (JSR-250) are also supported for dependency injection."
  },
  {
    id: 46,
    difficulty: "hard",
    category: "Security",
    question: "In a JWT-based authentication flow, where is the token typically stored on the client side for maximum security against XSS?",
    options: [
      "LocalStorage",
      "SessionStorage",
      "HttpOnly, Secure Cookie",
      "JavaScript Variable"
    ],
    answer: 2,
    explanation: "Storing JWTs in HttpOnly cookies prevents JavaScript from accessing the token, significantly reducing the risk of XSS-based theft."
  },
  {
    id: 47,
    difficulty: "easy",
    category: "Microservices",
    question: "Which component acts as the single entry point for all client requests in a microservices architecture?",
    options: ["Config Server", "API Gateway", "Service Registry", "Message Broker"],
    answer: 1,
    explanation: "The API Gateway (e.g., Spring Cloud Gateway) routes requests, handles authentication, and performs rate limiting for all clients."
  },
  {
    id: 48,
    difficulty: "medium",
    category: "Java Core",
    question: "Can an interface be 'sealed' in Java 17?",
    options: ["No, only classes", "Yes, and it permits specific classes or interfaces", "Yes, but only if it's functional", "Only if it has default methods"],
    answer: 1,
    explanation: "Interfaces can be sealed, allowing them to restrict which classes can implement them or which interfaces can extend them."
  },
  {
    id: 49,
    difficulty: "easy",
    category: "REST API",
    question: "What does the 401 Unauthorized HTTP status code signify?",
    options: [
      "Server error",
      "Authentication is required and has failed or has not yet been provided",
      "The resource was not found",
      "The user is authenticated but does not have permission (Forbidden)"
    ],
    answer: 1,
    explanation: "401 specifically means 'Unauthenticated'. 403 means 'Authenticated but Unauthorized/Forbidden'."
  },
  {
    id: 50,
    difficulty: "hard",
    category: "Spring Boot",
    question: "How can you externalize Spring Boot configuration to different environments (Dev, Prod)?",
    options: [
      "By using multiple main methods",
      "By using Spring Profiles (@Profile or spring.profiles.active)",
      "By recompiling the code for each environment",
      "Spring Boot does not support external configuration"
    ],
    answer: 1,
    explanation: "Spring Profiles allow you to segregate parts of your application configuration and make it only available in certain environments."
  },
  /* ======================================================
   JAVA & SPRING BOOT MASTER QUESTION BANK (Batch 2/6)
   Topics: Dependency Injection, JPA, Hibernate, Advanced Microservices
   ====================================================== */
  {
    id: 51,
    difficulty: "medium",
    category: "Spring Boot",
    question: "Which annotation is used to handle exceptions globally across all controllers in Spring Boot?",
    options: ["@ExceptionHandler", "@ControllerAdvice", "@ResponseStatus", "@HandleError"],
    answer: 1,
    explanation: "@ControllerAdvice combined with @ExceptionHandler allows for a centralized global error handling mechanism."
  },
  {
    id: 52,
    difficulty: "medium",
    category: "Java Core",
    question: "Which statement is true about 'Static' methods in a Java Interface?",
    options: [
      "They cannot have a body",
      "They are inherited by the implementing class",
      "They must be called using the Interface name and cannot be overridden",
      "They make the interface a functional interface"
    ],
    answer: 2,
    explanation: "Static methods in interfaces must have a body and are called using InterfaceName.methodName(). They are not inherited by implementing classes."
  },
  {
    id: 53,
    difficulty: "hard",
    category: "Microservices",
    question: "What is 'Distributed Tracing' and which tool is commonly used with Spring Boot for it?",
    options: [
      "Monitoring CPU usage; Prometheus",
      "Tracking a request as it travels through multiple services; Sleuth/Zipkin",
      "Logging errors to a file; Logback",
      "Managing database migrations; Liquibase"
    ],
    answer: 1,
    explanation: "Distributed tracing tracks the path of a request across service boundaries. Spring Cloud Sleuth (now Micrometer Tracing) and Zipkin are standard tools."
  },
  {
    id: 54,
    difficulty: "easy",
    category: "JPA/Hibernate",
    question: "Which annotation is used to define a primary key in a JPA Entity?",
    options: ["@PrimaryKey", "@Column", "@Id", "@Key"],
    answer: 2,
    explanation: "The @Id annotation specifies the primary key of an entity."
  },
  {
    id: 55,
    difficulty: "medium",
    category: "Spring Boot",
    question: "What is the purpose of the 'Spring Boot Actuator' dependency?",
    options: [
      "To speed up database queries",
      "To provide production-ready features like health checks and metrics",
      "To generate API documentation",
      "To handle security authentication"
    ],
    answer: 1,
    explanation: "Actuator provides built-in endpoints to monitor and manage your application (e.g., /health, /metrics, /env)."
  },
  {
    id: 56,
    difficulty: "medium",
    category: "Java Core",
    question: "In a 'Sealed Class' hierarchy, if a subclass is declared as 'non-sealed', what happens?",
    options: [
      "It cannot have any further subclasses",
      "It must be an interface",
      "It opens the hierarchy so any class can extend it",
      "It results in a compilation error"
    ],
    answer: 2,
    explanation: "The 'non-sealed' modifier allows a subclass of a sealed class to be extended by any other class, breaking the restriction for that specific branch."
  },
  {
    id: 57,
    difficulty: "easy",
    category: "REST API",
    question: "Which HTTP status code is returned when a client sends a valid request but the server refuses to perform it due to permissions?",
    options: ["401 Unauthorized", "404 Not Found", "403 Forbidden", "400 Bad Request"],
    answer: 2,
    explanation: "403 Forbidden means the server understands the request but refuses to authorize it (authenticated but lacking roles)."
  },
  {
    id: 58,
    difficulty: "medium",
    category: "Microservices",
    question: "What is the 'Saga Pattern' used for in Microservices?",
    options: [
      "To secure the API Gateway",
      "To manage data consistency across multiple services in distributed transactions",
      "To load balance traffic",
      "To compress JSON payloads"
    ],
    answer: 1,
    explanation: "The Saga pattern manages distributed transactions through a sequence of local transactions and compensating transactions to maintain consistency."
  },
  {
    id: 59,
    difficulty: "medium",
    category: "Spring Boot",
    question: "Which annotation allows Spring Boot to automatically find and register beans in the current and sub-packages?",
    options: ["@Bean", "@Component", "@ComponentScan", "@AutoConfiguration"],
    answer: 2,
    explanation: "@ComponentScan tells Spring where to look for classes annotated with @Component, @Service, @Repository, etc."
  },
  {
    id: 60,
    difficulty: "hard",
    category: "JPA/Hibernate",
    question: "What is the 'N+1 Select Problem' in Hibernate?",
    options: [
      "When one query returns N+1 rows instead of N",
      "When a query for N entities triggers N additional queries to fetch a related collection",
      "When the database runs out of connections",
      "When an entity has more than one ID"
    ],
    answer: 1,
    explanation: "The N+1 problem occurs when the application executes one query to fetch parent records and then N individual queries to fetch children for each parent."
  },
  {
    id: 61,
    difficulty: "easy",
    category: "Java Core",
    question: "Which interface is the root of the Java Collection Framework?",
    options: ["List", "Map", "Collection", "Set"],
    answer: 2,
    explanation: "The Collection interface is the root of the hierarchy, though Map is part of the framework, it does not extend Collection."
  },
  {
    id: 62,
    difficulty: "medium",
    category: "Security",
    question: "In Spring Security, what is the 'SecurityContextHolder' used for?",
    options: [
      "To store database connection strings",
      "To store details of the currently authenticated user",
      "To manage JWT expiration",
      "To encrypt passwords"
    ],
    answer: 1,
    explanation: "SecurityContextHolder is where Spring Security stores details of who is currently using the application."
  },
  {
    id: 63,
    difficulty: "medium",
    category: "Microservices",
    question: "What is the role of a 'Config Server' (like Spring Cloud Config)?",
    options: [
      "To route traffic",
      "To centralize application configuration for all microservices in one place",
      "To act as a firewall",
      "To generate documentation"
    ],
    answer: 1,
    explanation: "A Config Server allows you to manage configuration properties for all services across all environments in a central Git repository."
  },
  {
    id: 64,
    difficulty: "easy",
    category: "JSON",
    question: "Which annotation is used in Jackson to ignore a specific field during JSON serialization?",
    options: ["@JsonIgnore", "@Exclude", "@NoField", "@Transient"],
    answer: 0,
    explanation: "@JsonIgnore prevents a field from being included in the produced JSON string."
  },
  {
    id: 65,
    difficulty: "medium",
    category: "Spring Boot",
    question: "How do you specify a custom port for a Spring Boot application?",
    options: [
      "In the main method using System.setPort()",
      "In application.properties using 'server.port'",
      "By renaming the JAR file",
      "It is always fixed to 8080"
    ],
    answer: 1,
    explanation: "Using 'server.port=9090' in application.properties changes the default port."
  },
  {
    id: 66,
    difficulty: "hard",
    category: "Java Core",
    question: "What is a 'Virtual Thread' in Java 21 (Project Loom)?",
    options: [
      "A thread that runs only on the GPU",
      "A lightweight thread managed by the Java runtime rather than the OS",
      "A thread that cannot access the internet",
      "Another name for a Daemon thread"
    ],
    answer: 1,
    explanation: "Virtual threads are lightweight threads that reduce the effort of writing, maintaining, and observing high-throughput concurrent applications."
  },
  {
    id: 67,
    difficulty: "medium",
    category: "REST API",
    question: "What does Idempotency mean in the context of REST?",
    options: [
      "The request always returns an error",
      "Making multiple identical requests has the same effect as making a single request",
      "The request changes every time it is called",
      "The request only works once"
    ],
    answer: 1,
    explanation: "Methods like GET, PUT, and DELETE are idempotent; calling them multiple times doesn't change the state beyond the first call."
  },
  {
    id: 68,
    difficulty: "easy",
    category: "JPA/Hibernate",
    question: "Which annotation is used to map a Java class to a Database table?",
    options: ["@Table", "@Entity", "@Database", "@Mapping"],
    answer: 1,
    explanation: "While @Table is used for naming, @Entity is the required JPA annotation that designates a class as a persistent entity."
  },
  {
    id: 69,
    difficulty: "medium",
    category: "Security",
    question: "What is 'BCrypt' used for in Spring Boot applications?",
    options: ["Session management", "Password hashing", "Data compression", "JWT signing"],
    answer: 1,
    explanation: "BCryptPasswordEncoder is a standard way to securely hash passwords before storing them in the database."
  },
  {
    id: 70,
    difficulty: "hard",
    category: "Spring Boot",
    question: "What is 'Constructor Injection' and why is it preferred over 'Field Injection'?",
    options: [
      "It is faster at runtime",
      "It allows for final fields and easier unit testing without mocks",
      "It is the only way to inject beans",
      "It uses less memory"
    ],
    answer: 1,
    explanation: "Constructor injection ensures required dependencies are provided at creation time and makes the class easier to test."
  },
  {
    id: 71,
    difficulty: "easy",
    category: "Java Core",
    question: "What is the default value of a local variable in Java?",
    options: ["0", "null", "false", "None (it must be initialized before use)"],
    answer: 3,
    explanation: "Local variables do not have default values; using an uninitialized local variable results in a compilation error."
  },
  {
    id: 72,
    difficulty: "medium",
    category: "Microservices",
    question: "What is 'Externalized Configuration'?",
    options: [
      "Storing config in the source code",
      "Storing config outside the application (e.g., Environment variables, YAML files)",
      "Using a separate hard drive for logs",
      "Using public static final variables"
    ],
    answer: 1,
    explanation: "Externalizing config allows the same application code to run in different environments without modification."
  },
  {
    id: 73,
    difficulty: "medium",
    category: "JPA/Hibernate",
    question: "What is the difference between @OneToMany and @ManyToMany?",
    options: [
      "@OneToMany requires a join table; @ManyToMany does not",
      "@OneToMany is for lists; @ManyToMany is for sets",
      "@OneToMany links one parent to many children; @ManyToMany links multiple parents to multiple children",
      "They are the same"
    ],
    answer: 2,
    explanation: "@OneToMany is a 1:N relationship, while @ManyToMany is an M:N relationship (which usually requires a join table)."
  },
  {
    id: 74,
    difficulty: "easy",
    category: "Spring Boot",
    question: "What is the purpose of the 'spring-boot-starter-parent' in a Maven pom.xml?",
    options: [
      "To connect to a parent database",
      "To provide default configurations and dependency versions",
      "To install Java automatically",
      "To manage CSS and JS files"
    ],
    answer: 1,
    explanation: "The parent POM provides dependency management, allowing you to omit version tags for many standard Spring dependencies."
  },
  {
    id: 75,
    difficulty: "medium",
    category: "Java Core",
    question: "Which interface should you implement to define a 'default' sorting order for a class?",
    options: ["Comparator", "Sortable", "Comparable", "Iterable"],
    answer: 2,
    explanation: "Comparable (compareTo method) defines the natural ordering of objects; Comparator is for external/custom ordering."
  },
  {
    id: 76,
    difficulty: "hard",
    category: "Security",
    question: "In OAuth2, what is an 'Access Token'?",
    options: [
      "The user's password",
      "A credential used by the client to access protected resources on behalf of the user",
      "A code used to unlock the computer",
      "A temporary username"
    ],
    answer: 1,
    explanation: "The Access Token is issued by the Authorization Server and allows a client to access an API."
  },
  {
    id: 77,
    difficulty: "easy",
    category: "REST API",
    question: "What does the 201 Created status code indicate?",
    options: [
      "The request was successful and a new resource was created",
      "The server is still processing the request",
      "The request was empty",
      "The server has rebooted"
    ],
    answer: 0,
    explanation: "201 is the standard response for a successful POST request that creates a resource."
  },
  {
    id: 78,
    difficulty: "medium",
    category: "Microservices",
    question: "Which tool is commonly used as a 'Sidecar' or 'Service Mesh' in Microservices?",
    options: ["Kubernetes", "Istio/Envoy", "Docker", "Jenkins"],
    answer: 1,
    explanation: "Istio is a service mesh that uses Envoy proxies as sidecars to manage service-to-service communication."
  },
  {
    id: 79,
    difficulty: "medium",
    category: "Spring Boot",
    question: "What is '@Value' annotation used for?",
    options: [
      "To calculate mathematical values",
      "To inject values from properties files into Java fields",
      "To define a new bean",
      "To validate input"
    ],
    answer: 1,
    explanation: "@Value(\"${property.name}\") is used to pull specific property values into variables."
  },
  {
    id: 80,
    difficulty: "hard",
    category: "JPA/Hibernate",
    question: "What is the 'Persistence Context' in JPA?",
    options: [
      "The database itself",
      "A set of managed entity instances where changes are tracked",
      "The log file for SQL queries",
      "The configuration file for the database"
    ],
    answer: 1,
    explanation: "The Persistence Context is an environment where entities are managed by the EntityManager, ensuring synchronized state with the database."
  },
  {
    id: 81,
    difficulty: "easy",
    category: "Java Core",
    question: "Which keyword is used to call the constructor of a parent class?",
    options: ["this", "parent", "super", "base"],
    answer: 2,
    explanation: "super() is used to invoke a parent class's constructor or methods."
  },
  {
    id: 82,
    difficulty: "medium",
    category: "Spring Boot",
    question: "How do you enable 'Hot Swapping' in Spring Boot without restarting the server manually?",
    options: [
      "Using @EnableRestart",
      "Using Spring Boot DevTools",
      "It is enabled by default",
      "It is not possible"
    ],
    answer: 1,
    explanation: "Spring Boot DevTools triggers a fast restart whenever files on the classpath change."
  },
  {
    id: 83,
    difficulty: "medium",
    category: "Microservices",
    question: "What is 'Database per Service' pattern?",
    options: [
      "Every developer has their own database",
      "Each microservice has its own private data store that other services cannot access directly",
      "All services share a single schema",
      "One database for the whole company"
    ],
    answer: 1,
    explanation: "This pattern ensures services are loosely coupled and can scale their storage independently."
  },
  {
    id: 84,
    difficulty: "easy",
    category: "REST API",
    question: "Which HTTP method is used to retrieve data from a server?",
    options: ["POST", "PUT", "GET", "DELETE"],
    answer: 2,
    explanation: "GET is the standard method for fetching resources without modifying them."
  },
  {
    id: 85,
    difficulty: "medium",
    category: "Java Core",
    question: "What is the output of 'Hello' == new String('Hello') in Java?",
    options: ["true", "false", "Compilation Error", "NullPointerException"],
    answer: 1,
    explanation: "The == operator compares object references. A literal string and a 'new String' object are different objects in memory."
  },
  {
    id: 86,
    difficulty: "hard",
    category: "Security",
    question: "What is 'CSRF' and how does Spring Security protect against it?",
    options: [
      "Cross-Site Request Forgery; using unique tokens in state-changing requests",
      "Computer System Resource Failure; using backup servers",
      "Client-Side Remote Fetching; using firewalls",
      "Code Syntax Runtime Filter; using linters"
    ],
    answer: 0,
    explanation: "CSRF forces a user to execute unwanted actions on a web application where they're authenticated. Spring Security uses CSRF tokens to validate requests."
  },
  {
    id: 87,
    difficulty: "medium",
    category: "Spring Boot",
    question: "Which annotation is used to schedule a task to run at fixed intervals?",
    options: ["@Timer", "@Scheduled", "@Interval", "@Cron"],
    answer: 1,
    explanation: "@Scheduled (along with @EnableScheduling) allows methods to run based on cron expressions or fixed rates."
  },
  {
    id: 88,
    difficulty: "medium",
    category: "JPA/Hibernate",
    question: "What does '@Modifying' annotation do in Spring Data JPA?",
    options: [
      "It changes the database schema",
      "It indicates that a query method performs an UPDATE or DELETE operation",
      "It allows the entity to be edited",
      "It creates a new table"
    ],
    answer: 1,
    explanation: "@Modifying is required for any query method that goes beyond simple SELECT statements."
  },
  {
    id: 89,
    difficulty: "easy",
    category: "Microservices",
    question: "What is 'Horizontal Scaling'?",
    options: [
      "Adding more RAM to a single server",
      "Adding more instances of a service",
      "Writing more lines of code",
      "Rotating the server"
    ],
    answer: 1,
    explanation: "Horizontal scaling involves adding more nodes/machines to a cluster, whereas Vertical scaling involves upgrading hardware on one node."
  },
  {
    id: 90,
    difficulty: "hard",
    category: "Java Core",
    question: "What is the difference between 'fail-fast' and 'fail-safe' iterators?",
    options: [
      "Fail-fast iterators throw ConcurrentModificationException if the collection is modified; Fail-safe work on a copy",
      "Fail-safe iterators are faster",
      "Fail-fast only works on Sets",
      "There is no difference"
    ],
    answer: 0,
    explanation: "Fail-fast (like ArrayList) fails immediately on concurrent modification. Fail-safe (like CopyOnWriteArrayList) iterates over a clone."
  },
  {
    id: 91,
    difficulty: "easy",
    category: "Spring Boot",
    question: "Which starter dependency is required for creating a Web REST API?",
    options: ["spring-boot-starter-api", "spring-boot-starter-web", "spring-boot-starter-rest", "spring-boot-starter-json"],
    answer: 1,
    explanation: "spring-boot-starter-web includes Tomcat and Spring MVC, which are necessary for REST services."
  },
  {
    id: 92,
    difficulty: "medium",
    category: "Security",
    question: "What is the 'refresh token' used for in JWT authentication?",
    options: [
      "To change the user's password",
      "To obtain a new access token once the current one expires",
      "To clear the cache",
      "To log out of all devices"
    ],
    answer: 1,
    explanation: "Access tokens are usually short-lived. Refresh tokens are long-lived and used to get new access tokens without re-entering credentials."
  },
  {
    id: 93,
    difficulty: "medium",
    category: "Java Core",
    question: "What are 'Default Methods' in interfaces used for?",
    options: [
      "To make all methods public by default",
      "To provide an implementation for a method within an interface without breaking implementing classes",
      "To define private variables",
      "To speed up compilation"
    ],
    answer: 1,
    explanation: "Introduced in Java 8, they allow interfaces to evolve by adding new methods with a default body."
  },
  {
    id: 94,
    difficulty: "easy",
    category: "Microservices",
    question: "Which HTTP method is most appropriate for deleting a resource?",
    options: ["REMOVE", "DROP", "DELETE", "POST"],
    answer: 2,
    explanation: "The DELETE method is specifically designed for resource removal."
  },
  {
    id: 95,
    difficulty: "medium",
    category: "Spring Boot",
    question: "What does '@Profile' annotation achieve?",
    options: [
      "It measures method execution time",
      "It limits bean registration to specific environments (e.g., dev, test, prod)",
      "It secures the user's profile",
      "It generates a report"
    ],
    answer: 1,
    explanation: "@Profile enables conditional bean loading based on the active application profile."
  },
  {
    id: 96,
    difficulty: "hard",
    category: "REST API",
    question: "What is 'HATEOAS' in REST?",
    options: [
      "A security protocol",
      "Hypermedia as the Engine of Application State; including links to other related actions in the response",
      "A JSON compression algorithm",
      "A database indexing technique"
    ],
    answer: 1,
    explanation: "HATEOAS allows clients to dynamically navigate a REST API through links provided in the response bodies."
  },
  {
    id: 97,
    difficulty: "medium",
    category: "JPA/Hibernate",
    question: "What is the purpose of '@Transient' in an Entity class?",
    options: [
      "To make a field permanent",
      "To indicate that a field should not be persisted in the database",
      "To encrypt a field",
      "To mark a field as the primary key"
    ],
    answer: 1,
    explanation: "@Transient fields are ignored by the JPA provider during database operations."
  },
  {
    id: 98,
    difficulty: "easy",
    category: "Java Core",
    question: "Which keyword is used to inherit a class in Java?",
    options: ["extends", "implements", "inherits", "using"],
    answer: 0,
    explanation: "Classes use 'extends' for inheritance; interfaces use 'implements'."
  },
  {
    id: 99,
    difficulty: "medium",
    category: "Microservices",
    question: "What is 'Auto-scaling' in a cloud environment?",
    options: [
      "The code automatically updates itself",
      "The system automatically adds/removes service instances based on traffic/load",
      "The computer screen gets bigger",
      "The database deletes old data automatically"
    ],
    answer: 1,
    explanation: "Auto-scaling ensures the application has enough capacity to handle the current load efficiently."
  },
  {
    id: 100,
    difficulty: "hard",
    category: "Security",
    question: "In JWT, what does the 'exp' claim represent?",
    options: ["Experience", "Exception", "Expiration Time", "Export"],
    answer: 2,
    explanation: "The 'exp' claim identifies the expiration time on or after which the JWT must not be accepted for processing."
  },
  /* ======================================================
   JAVA & SPRING BOOT MASTER QUESTION BANK (Batch 3/6)
   Topics: ORM/Hibernate, Kafka/RabbitMQ, Spring Batch, Serialization
   ====================================================== */
  {
    id: 101,
    difficulty: "medium",
    category: "ORM/Hibernate",
    question: "In JPA, what is the difference between FetchType.LAZY and FetchType.EAGER?",
    options: [
      "LAZY fetches data immediately; EAGER fetches on demand",
      "LAZY fetches data only when accessed; EAGER fetches data along with the parent",
      "LAZY is for collections; EAGER is for simple fields",
      "There is no performance difference"
    ],
    answer: 1,
    explanation: "LAZY loading defers the initialization of a relationship until it is actually accessed, helping prevent unnecessary database load."
  },
  {
    id: 102,
    difficulty: "hard",
    category: "Message Queues",
    question: "In Apache Kafka, what is the purpose of a 'Consumer Group'?",
    options: [
      "To encrypt messages",
      "To allow a set of consumers to divide the work of consuming data from a set of partitions",
      "To delete old messages",
      "To act as a backup for the broker"
    ],
    answer: 1,
    explanation: "Consumer groups allow multiple consumers to parallelize the processing of a topic's partitions, ensuring each message is processed by only one consumer in the group."
  },
  {
    id: 103,
    difficulty: "medium",
    category: "Spring Batch",
    question: "What are the three main components of a 'Step' in Spring Batch?",
    options: [
      "Input, Output, Error",
      "ItemReader, ItemProcessor, ItemWriter",
      "Start, Run, Stop",
      "Load, Transform, Save"
    ],
    answer: 1,
    explanation: "A chunk-oriented step consists of an ItemReader (reads data), an ItemProcessor (transforms data), and an ItemWriter (saves data)."
  },
  {
    id: 104,
    difficulty: "medium",
    category: "Serialization",
    question: "What is the purpose of the 'serialVersionUID' in Java Serialization?",
    options: [
      "To identify the user who created the file",
      "To ensure that the sender and receiver of a serialized object have loaded classes that are compatible",
      "To compress the object size",
      "To encrypt the byte stream"
    ],
    answer: 1,
    explanation: "The serialVersionUID is used during deserialization to verify that the loaded class corresponds exactly to the serialized object."
  },
  {
    id: 105,
    difficulty: "hard",
    category: "ORM/Hibernate",
    question: "What does the @Version annotation achieve in JPA?",
    options: [
      "It tracks the software version",
      "It enables Optimistic Locking to prevent lost updates in concurrent transactions",
      "It creates a history table",
      "It makes the entity read-only"
    ],
    answer: 1,
    explanation: "The @Version column is checked by JPA during updates; if the version in the DB is higher than the version in memory, an OptimisticLockException is thrown."
  },
  {
    id: 106,
    difficulty: "medium",
    category: "Message Queues",
    question: "In RabbitMQ, what is an 'Exchange'?",
    options: [
      "A database table",
      "A component that receives messages from producers and routes them to queues based on rules",
      "A way to swap servers",
      "The connection between two microservices"
    ],
    answer: 1,
    explanation: "Exchanges take messages from producers and push them to queues based on bindings and routing keys (Direct, Topic, Fanout)."
  },
  {
    id: 107,
    difficulty: "easy",
    category: "Java Core",
    question: "Which Java Stream terminal operation is used to transform elements into a List?",
    options: ["map()", "filter()", "collect(Collectors.toList())", "toListStream()"],
    answer: 2,
    explanation: "The collect() operation is a terminal operation used to accumulate the elements of a stream into a summary container like a List."
  },
  {
    id: 108,
    difficulty: "hard",
    category: "Spring Batch",
    question: "What is a 'JobRepository' in Spring Batch?",
    options: [
      "A place to store source code",
      "A persistence mechanism for storing metadata about Job executions, Step executions, and statuses",
      "A database for application data",
      "A UI for monitoring jobs"
    ],
    answer: 1,
    explanation: "The JobRepository manages the CRUD operations for Spring Batch's metadata tables (e.g., BATCH_JOB_EXECUTION)."
  },
  {
    id: 109,
    difficulty: "medium",
    category: "Serialization",
    question: "Which keyword prevents a specific field from being serialized in Java?",
    options: ["volatile", "transient", "non-serializable", "static"],
    answer: 1,
    explanation: "The transient keyword tells the Java serialization engine not to include that field in the byte stream."
  },
  {
    id: 110,
    difficulty: "hard",
    category: "ORM/Hibernate",
    question: "What is 'First-level Cache' in Hibernate?",
    options: [
      "Redis cache",
      "The Session-level cache that is mandatory and associated with the current transaction",
      "The query result cache",
      "The cache shared across all sessions"
    ],
    answer: 1,
    explanation: "First-level cache is the Session object's internal cache. It ensures that within one transaction, the same entity is only loaded from the DB once."
  },
  {
    id: 111,
    difficulty: "medium",
    category: "Message Queues",
    question: "What is a 'Dead Letter Queue' (DLQ)?",
    options: [
      "A queue for deleted users",
      "A service that sends emails",
      "A queue where messages are sent if they cannot be delivered or processed successfully",
      "The main database queue"
    ],
    answer: 2,
    explanation: "DLQs are used to isolate problematic messages for debugging without stopping the main message flow."
  },
  {
    id: 112,
    difficulty: "easy",
    category: "Spring Boot",
    question: "Which annotation is used to create a bean that is only loaded if a specific property exists?",
    options: ["@ConditionalOnProperty", "@PropertySource", "@Value", "@RequiredProperty"],
    answer: 0,
    explanation: "@ConditionalOnProperty allows for conditional configuration based on the presence or value of a Spring Environment property."
  },
  {
    id: 113,
    difficulty: "medium",
    category: "Java Core",
    question: "What is the result of using 'Optional.orElse()' vs 'Optional.orElseGet()'?",
    options: [
      "They are identical",
      "orElse() executes the default logic even if the value is present; orElseGet() is lazy",
      "orElseGet() is for exceptions only",
      "orElse() is faster"
    ],
    answer: 1,
    explanation: "orElseGet() takes a Supplier and is only executed if the Optional is empty. orElse() evaluates the parameter even if the value exists."
  },
  {
    id: 114,
    difficulty: "hard",
    category: "ORM/Hibernate",
    question: "What is the difference between 'save()' and 'persist()' in Hibernate?",
    options: [
      "persist() returns the ID immediately; save() does not",
      "save() returns the generated ID immediately; persist() does not guarantee immediate ID assignment",
      "save() is JPA standard; persist() is Hibernate only",
      "There is no difference"
    ],
    answer: 1,
    explanation: "In Hibernate, save() returns the identifier immediately (triggering an INSERT if using identity), while persist() is designed for JPA compliance and may delay the INSERT."
  },
  {
    id: 115,
    difficulty: "medium",
    category: "Message Queues",
    question: "In Kafka, what does 'At-least-once' delivery mean?",
    options: [
      "Messages are never lost, but may be duplicated",
      "Messages are never duplicated, but may be lost",
      "Exactly one copy is delivered",
      "Messages are only delivered once a day"
    ],
    answer: 0,
    explanation: "At-least-once ensures the consumer receives the message, but if an ACK fails, the producer might retry, causing a duplicate."
  },
  {
    id: 116,
    difficulty: "medium",
    category: "Spring Batch",
    question: "What is 'Chunk-oriented processing' in Spring Batch?",
    options: [
      "Processing one record at a time",
      "Reading and writing data in small, configurable groups (chunks) within a transaction",
      "Processing the entire file at once",
      "Dividing the job into different servers"
    ],
    answer: 1,
    explanation: "Chunk processing reads N items, processes them, and then writes the whole 'chunk' in a single transaction for efficiency."
  },
  {
    id: 117,
    difficulty: "easy",
    category: "JSON",
    question: "Which Jackson annotation is used to rename a property in the resulting JSON?",
    options: ["@JsonRename", "@JsonProperty", "@JsonValue", "@Alias"],
    answer: 1,
    explanation: "@JsonProperty('new_name') maps a Java field name to a specific JSON key."
  },
  {
    id: 118,
    difficulty: "hard",
    category: "ORM/Hibernate",
    question: "In JPA, what is 'Detached' state of an entity?",
    options: [
      "The entity is deleted",
      "The entity instance is no longer associated with a persistence context (Session)",
      "The entity is not yet saved",
      "The entity is in the cache"
    ],
    answer: 1,
    explanation: "A detached entity is a Java object that was previously managed but the session was closed or it was manually detached."
  },
  {
    id: 119,
    difficulty: "medium",
    category: "Security",
    question: "What is the purpose of the 'AuditorAware' interface in Spring Data JPA?",
    options: [
      "To listen to database changes",
      "To automatically provide the current user's identity for @CreatedBy or @LastModifiedBy fields",
      "To encrypt logs",
      "To audit network traffic"
    ],
    answer: 1,
    explanation: "Implementing AuditorAware allows JPA to automatically populate auditing fields with the currently logged-in user."
  },
  {
    id: 120,
    difficulty: "medium",
    category: "Java Core",
    question: "What is the 'Diamond Problem' in Java and how is it resolved?",
    options: [
      "Multiple inheritance of classes; Java doesn't allow it",
      "Ambiguity from multiple interface default methods; resolved by overriding in the implementation",
      "Memory leak in Sets",
      "Slow sorting in arrays"
    ],
    answer: 1,
    explanation: "If a class implements two interfaces with the same default method, it must override the method to resolve the ambiguity."
  },
  {
    id: 121,
    difficulty: "hard",
    category: "Message Queues",
    question: "What is the difference between a 'Topic' and a 'Queue' in traditional JMS?",
    options: [
      "Queue is 1-to-1; Topic is 1-to-Many (Publish/Subscribe)",
      "Topic is for XML; Queue is for JSON",
      "Queue is faster",
      "There is no difference"
    ],
    answer: 0,
    explanation: "A Queue delivers a message to only one consumer. A Topic delivers a message to all active subscribers."
  },
  {
    id: 122,
    difficulty: "medium",
    category: "Spring Boot",
    question: "What is '@LocalServerPort' used for in Spring Boot tests?",
    options: [
      "To set the port of the production server",
      "To inject the random port assigned to the test server during @SpringBootTest",
      "To open a firewall port",
      "To find the IP address"
    ],
    answer: 1,
    explanation: "When tests use a random port, this annotation allows you to retrieve that port number for use in RestTemplate calls."
  },
  {
    id: 123,
    difficulty: "medium",
    category: "JPA/Hibernate",
    question: "What does @JoinColumn annotation do?",
    options: [
      "Joins two databases",
      "Specifies the name of the foreign key column in the owner table",
      "Merge two rows",
      "Creates a join table"
    ],
    answer: 1,
    explanation: "@JoinColumn defines the physical mapping of a relationship, usually specifying the foreign key column name."
  },
  {
    id: 124,
    difficulty: "hard",
    category: "Spring Batch",
    question: "How do you handle a restartable Job in Spring Batch if it fails?",
    options: [
      "Delete the database and start over",
      "Spring Batch uses the JobRepository metadata to resume from the last successful chunk",
      "Manual coding is required to skip lines",
      "Jobs cannot be restarted"
    ],
    answer: 1,
    explanation: "Spring Batch stores the 'execution context'. On restart with same parameters, it identifies where it left off and continues."
  },
  {
    id: 125,
    difficulty: "easy",
    category: "Java Core",
    question: "In Java Streams, what does the 'peek()' method do?",
    options: [
      "It terminates the stream",
      "It allows performing an action (like logging) without modifying the stream elements",
      "It finds the first element",
      "It sorts the stream"
    ],
    answer: 1,
    explanation: "peek() is an intermediate operation mainly used for debugging to see the elements as they flow through the pipeline."
  },
  {
    id: 126,
    difficulty: "medium",
    category: "Serialization",
    question: "Which interface must a class implement to be serializable by Jackson?",
    options: ["java.io.Serializable", "JsonSerializable", "None (Jackson uses reflection/getters)", "Externalizable"],
    answer: 2,
    explanation: "Unlike Java native serialization, Jackson does not require an interface; it primarily relies on getters, setters, or annotations."
  },
  {
    id: 127,
    difficulty: "hard",
    category: "ORM/Hibernate",
    question: "What is 'Dirty Checking' in Hibernate?",
    options: [
      "Verifying input for SQL injection",
      "Automatically detecting changes to managed entities and syncing them with the DB at flush time",
      "Cleaning the cache",
      "Validating the database schema"
    ],
    answer: 1,
    explanation: "Dirty checking allows developers to simply modify an object's state; Hibernate tracks the change and generates the UPDATE SQL automatically."
  },
  {
    id: 128,
    difficulty: "medium",
    category: "Message Queues",
    question: "What is 'Compacted Topic' in Kafka?",
    options: [
      "A zipped topic",
      "A topic that only retains the last known value for each message key",
      "A topic that deletes messages after 1 hour",
      "A topic with no partitions"
    ],
    answer: 1,
    explanation: "Log compaction ensures that Kafka always retains at least the last message for a specific key within a partition."
  },
  {
    id: 129,
    difficulty: "medium",
    category: "Spring Boot",
    question: "What is the difference between @Bean and @Component?",
    options: [
      "@Component is for class-level auto-scanning; @Bean is used inside @Configuration classes for manual registration",
      "@Bean is for singletons only",
      "@Component is for interfaces",
      "There is no difference"
    ],
    answer: 0,
    explanation: "@Component is picked up by classpath scanning. @Bean is used when you want to manually wrap an object (like a 3rd party library class) as a Spring bean."
  },
  {
    id: 130,
    difficulty: "hard",
    category: "JPA/Hibernate",
    question: "What is the 'Second-level Cache' in Hibernate?",
    options: [
      "The browser cache",
      "A cache shared across all sessions/EntityManagerFactories, often provided by Ehcache or Redis",
      "The OS disk cache",
      "The database buffer pool"
    ],
    answer: 1,
    explanation: "Second-level cache survives beyond the scope of a single session and is used to improve performance for frequently read, rarely changed data."
  },
  {
    id: 131,
    difficulty: "easy",
    category: "REST API",
    question: "Which HTTP Method is considered 'Safe' (doesn't modify resource state)?",
    options: ["POST", "GET", "PUT", "DELETE"],
    answer: 1,
    explanation: "GET and HEAD are considered safe methods as they are only used for retrieval."
  },
  {
    id: 132,
    difficulty: "medium",
    category: "Microservices",
    question: "What is 'Backpressure' in Reactive systems (Spring WebFlux)?",
    options: [
      "A database error",
      "The ability of a consumer to signal to the producer that it is being overwhelmed with data",
      "The reverse flow of data",
      "The stress on a developer"
    ],
    answer: 1,
    explanation: "Backpressure ensures that a fast producer doesn't overwhelm a slow consumer by allowing the consumer to request only as much data as it can handle."
  },
  {
    id: 133,
    difficulty: "medium",
    category: "Java Core",
    question: "What is a 'Method Reference' in Java?",
    options: [
      "A way to rename a method",
      "A shorthand notation for a lambda expression that calls a specific method (e.g., System.out::println)",
      "A pointer to a memory address",
      "A documentation tool"
    ],
    answer: 1,
    explanation: "Method references provide a more readable way to pass existing methods as lambda arguments."
  },
  {
    id: 134,
    difficulty: "hard",
    category: "Spring Batch",
    question: "What is a 'Tasklet' in Spring Batch?",
    options: [
      "A small database",
      "A step component used for simple, single-task processing (e.g., cleaning up a directory)",
      "A way to run JavaScript",
      "An alternative to ItemReader"
    ],
    answer: 1,
    explanation: "Unlike chunk processing, a Tasklet implements a single method 'execute' which is called once per step."
  },
  {
    id: 135,
    difficulty: "medium",
    category: "Serialization",
    question: "In Java Serialization, what is the 'Externalizable' interface used for?",
    options: [
      "To allow the object to be sent to outer space",
      "To give the developer full control over the serialization/deserialization logic",
      "To make serialization automatic",
      "To convert an object to XML"
    ],
    answer: 1,
    explanation: "Implementing Externalizable requires overriding writeExternal and readExternal, allowing custom, more efficient serialization."
  },
  {
    id: 136,
    difficulty: "easy",
    category: "JPA/Hibernate",
    question: "What is the default naming strategy for tables in Spring Boot JPA?",
    options: [
      "ALL_CAPS",
      "snake_case (camelCase fields become underscore_separated)",
      "Exactly as the class name",
      "Random strings"
    ],
    answer: 1,
    explanation: "Spring Boot defaults to the PhysicalNamingStrategyStandardImpl which converts CamelCase to snake_case."
  },
  {
    id: 137,
    difficulty: "medium",
    category: "Security",
    question: "What is 'Method Level Security' in Spring?",
    options: [
      "Encryption of the source code",
      "Using @PreAuthorize or @Secured to restrict method access based on user roles",
      "Restricting the number of methods in a class",
      "Hiding methods from the debugger"
    ],
    answer: 1,
    explanation: "@PreAuthorize allows for expression-based (SpEL) access control at the service layer."
  },
  {
    id: 138,
    difficulty: "hard",
    category: "Message Queues",
    question: "What is 'Idempotent Producer' in Kafka?",
    options: [
      "A producer that only sends one message",
      "A configuration that ensures retries do not result in duplicate messages in the log",
      "A producer that doesn't need a broker",
      "A producer that works with any database"
    ],
    answer: 1,
    explanation: "Setting 'enable.idempotence=true' ensures exactly-once semantics for a single producer session."
  },
  {
    id: 139,
    difficulty: "medium",
    category: "Java Core",
    question: "What is the difference between 'flatMap' and 'map' in Java Streams?",
    options: [
      "flatMap is for numbers only",
      "map transforms each element; flatMap transforms each element into a stream and flattens them",
      "flatMap is faster than map",
      "There is no difference"
    ],
    answer: 1,
    explanation: "Use flatMap when you have a Stream of Collections (Stream<List<T>>) and you want a single Stream of elements (Stream<T>)."
  },
  {
    id: 140,
    difficulty: "hard",
    category: "ORM/Hibernate",
    question: "What is 'Soft Delete' and how is it implemented in Hibernate?",
    options: [
      "Deleting only small files",
      "Using a flag (e.g., is_deleted) instead of physically removing rows; often using @SQLDelete and @Where",
      "Deleting data after 1 year",
      "The standard DELETE command"
    ],
    answer: 1,
    explanation: "Soft delete keeps data for audit purposes while making it invisible to the application logic via the @Where('is_deleted=false') annotation."
  },
  {
    id: 141,
    difficulty: "medium",
    category: "Spring Boot",
    question: "What is '@ConfigurationProperties' used for?",
    options: [
      "To configure the database",
      "To bind an entire group of related properties to a strongly typed Java object",
      "To set the Java version",
      "To write properties to a file"
    ],
    answer: 1,
    explanation: "This is a type-safe alternative to @Value for managing hierarchical application properties."
  },
  {
    id: 142,
    difficulty: "medium",
    category: "Microservices",
    question: "What is the 'Sidecar Pattern'?",
    options: [
      "Riding a motorcycle to work",
      "Deploying a helper container alongside the main application container to provide extra features (logging, security)",
      "Using two databases at once",
      "Connecting two servers with a cable"
    ],
    answer: 1,
    explanation: "Common in Kubernetes, sidecars handle cross-cutting concerns like service mesh proxies (Envoy)."
  },
  {
    id: 143,
    difficulty: "easy",
    category: "JPA/Hibernate",
    question: "Which annotation specifies the relationship on the 'child' side in a Bidirectional OneToMany?",
    options: ["@ManyToOne", "@OneToMany", "@ChildOf", "@BelongsTo"],
    answer: 0,
    explanation: "In a bidirectional relationship, the @ManyToOne side is usually the owning side of the relationship."
  },
  {
    id: 144,
    difficulty: "hard",
    category: "Spring Batch",
    question: "What is a 'JobExecutionDecider' used for?",
    options: [
      "To decide which developer runs the job",
      "To implement complex conditional flow logic between steps in a Job",
      "To choose the database",
      "To decide when to delete logs"
    ],
    answer: 1,
    explanation: "Deciders allow a Job to branch off to different steps based on the status or result of a previous step."
  },
  {
    id: 145,
    difficulty: "medium",
    category: "Java Core",
    question: "What is a 'Spliterator' in Java?",
    options: [
      "A tool to split strings",
      "A special type of iterator used for traversing and partitioning elements of a source for parallel processing",
      "A way to divide numbers",
      "A garbage collector"
    ],
    answer: 1,
    explanation: "Spliterators are the backbone of Parallel Streams, allowing the stream to be partitioned into multiple chunks."
  },
  {
    id: 146,
    difficulty: "medium",
    category: "Serialization",
    question: "What is the role of 'ObjectMapper' in Jackson?",
    options: [
      "To map database rows to Java",
      "The main class used to read and write JSON (parsing and generating)",
      "To create images",
      "To manage memory"
    ],
    answer: 1,
    explanation: "ObjectMapper is the entry point for most Jackson operations, providing functionality to convert Java objects to/from JSON."
  },
  {
    id: 147,
    difficulty: "hard",
    category: "Message Queues",
    question: "In RabbitMQ, what is the 'Fanout Exchange'?",
    options: [
      "It routes messages to queues based on a routing key",
      "It broadcasts all messages it receives to all the queues it knows",
      "It routes based on headers",
      "It deletes messages after 1 minute"
    ],
    answer: 1,
    explanation: "Fanout is a publish-subscribe exchange where routing keys are ignored and every bound queue gets a copy of the message."
  },
  {
    id: 148,
    difficulty: "easy",
    category: "REST API",
    question: "What does the 503 Service Unavailable status code usually mean?",
    options: [
      "The server is shut down permanently",
      "The server is currently unable to handle the request (overloaded or down for maintenance)",
      "The URL is wrong",
      "The user is not logged in"
    ],
    answer: 1,
    explanation: "503 is a temporary server-side error often used during maintenance or when a circuit breaker is open."
  },
  {
    id: 149,
    difficulty: "medium",
    category: "Spring Boot",
    question: "What is '@AliasFor' used for in Spring?",
    options: [
      "To give a user a nickname",
      "To indicate that an attribute in an annotation is an alias for another attribute",
      "To rename a bean",
      "To hide a method"
    ],
    answer: 1,
    explanation: "It is often used in custom annotations to pass values to meta-annotations (like passing 'value' to @RequestMapping)."
  },
  {
    id: 150,
    difficulty: "hard",
    category: "ORM/Hibernate",
    question: "What is 'Batch Size' fetching in Hibernate?",
    options: [
      "Fetching all rows at once",
      "Optimization that loads several lazy collections or entities in a single query by specifying an ID batch",
      "The size of the Java application",
      "The number of users in the system"
    ],
    answer: 1,
    explanation: "@BatchSize helps solve the N+1 problem by telling Hibernate to load up to 'N' proxy objects at once when one is accessed."
  },
  /* ======================================================
   JAVA & SPRING BOOT MASTER QUESTION BANK (Batch 4/6)
   Topics: Security (OAuth2), Spring Cloud, Multithreading, Testing
   ====================================================== */
  {
    id: 151,
    difficulty: "hard",
    category: "Security",
    question: "In OAuth2, what is the 'Authorization Code Grant' flow primarily used for?",
    options: [
      "Mobile apps only",
      "Server-side applications where the client secret can be kept secure",
      "Single Page Applications (SPA) with no backend",
      "Internal services only"
    ],
    answer: 1,
    explanation: "Authorization Code Grant is the most secure flow, as it exchanges a temporary code for a token on the backend, keeping the secret hidden from the browser."
  },
  {
    id: 152,
    difficulty: "medium",
    category: "Spring Cloud",
    question: "What is the purpose of 'Spring Cloud OpenFeign'?",
    options: [
      "To connect to a database",
      "To create a declarative REST client, making it easier to call other microservices",
      "To manage CSS files",
      "To perform unit testing"
    ],
    answer: 1,
    explanation: "Feign allows you to write an interface and annotate it; Spring then provides the implementation to call external APIs."
  },
  {
    id: 153,
    difficulty: "medium",
    category: "Java Core",
    question: "What is the difference between 'Runnable' and 'Callable' in Java?",
    options: [
      "Runnable can return a result; Callable cannot",
      "Callable can return a result and throw checked exceptions; Runnable cannot",
      "Runnable is faster",
      "There is no difference"
    ],
    answer: 1,
    explanation: "Callable's call() method returns a Future and can throw checked exceptions, whereas Runnable's run() method returns void and cannot throw checked exceptions."
  },
  {
    id: 154,
    difficulty: "hard",
    category: "Testing",
    question: "In Mockito, what is the difference between '@Mock' and '@Spy'?",
    options: [
      "@Mock creates a partial mock; @Spy creates a full mock",
      "@Mock creates a complete dummy; @Spy wraps a real instance and allows tracking/overriding specific methods",
      "They are the same",
      "@Spy is only for static methods"
    ],
    answer: 1,
    explanation: "A Spy calls real methods unless they are explicitly stubbed. A Mock returns default values (null, 0) for all methods."
  },
  {
    id: 155,
    difficulty: "medium",
    category: "Spring Boot",
    question: "Which annotation is used to enable the circuit breaker pattern in Spring Cloud?",
    options: ["@EnableCircuitBreaker", "@EnableResilience", "@CircuitBreaker", "@EnableHystrix"],
    answer: 0,
    explanation: "While @EnableCircuitBreaker is the classic annotation, modern apps often use @CircuitBreaker from Resilience4j."
  },
  {
    id: 156,
    difficulty: "hard",
    category: "Java Core",
    question: "What is the purpose of 'CompletableFuture' in Java 8+?",
    options: [
      "To replace the 'final' keyword",
      "To perform asynchronous programming by chaining multiple tasks and handling their results",
      "To speed up for-loops",
      "To manage memory leaks"
    ],
    answer: 1,
    explanation: "CompletableFuture implements Future and CompletionStage, allowing for non-blocking task orchestration using thenApply, thenAccept, etc."
  },
  {
    id: 157,
    difficulty: "medium",
    category: "Microservices",
    question: "What is 'Distributed Session Management'?",
    options: [
      "Storing session data in the user's browser only",
      "Storing session data in a central store like Redis so any service instance can access it",
      "Deleting sessions every 5 minutes",
      "Using a single server for all sessions"
    ],
    answer: 1,
    explanation: "In microservices, since services are stateless, a shared store (Spring Session with Redis) is used to maintain user state across multiple instances."
  },
  {
    id: 158,
    difficulty: "easy",
    category: "Testing",
    question: "Which annotation is used in JUnit 5 to run a method before each test case?",
    options: ["@Before", "@BeforeEach", "@Initialize", "@Setup"],
    answer: 1,
    explanation: "JUnit 5 replaced @Before with @BeforeEach to improve clarity."
  },
  {
    id: 159,
    difficulty: "hard",
    category: "Security",
    question: "What is the 'PKCE' extension in OAuth2?",
    options: [
      "A way to encrypt passwords",
      "Proof Key for Code Exchange; used to protect the auth code flow in public clients (like SPAs/Mobile)",
      "A type of digital signature",
      "A database security tool"
    ],
    answer: 1,
    explanation: "PKCE prevents authorization code injection attacks by requiring a dynamically generated verifier."
  },
  {
    id: 160,
    difficulty: "medium",
    category: "Spring Boot",
    question: "What does the '@Data' annotation from Lombok achieve?",
    options: [
      "It marks a class as a database entity",
      "It generates Getters, Setters, toString, equals, and hashCode methods automatically",
      "It encrypts the data",
      "It validates the data"
    ],
    answer: 1,
    explanation: "Lombok's @Data is a shortcut that bundles several annotations to reduce boilerplate code."
  },
  {
    id: 161,
    difficulty: "medium",
    category: "Java Core",
    question: "What is 'ThreadLocal' used for in Java?",
    options: [
      "To share data between all threads",
      "To store data that is local to a specific thread, ensuring thread safety without synchronization",
      "To stop a thread",
      "To increase the priority of a thread"
    ],
    answer: 1,
    explanation: "ThreadLocal variables are unique to each thread. Other threads cannot see or modify them."
  },
  {
    id: 162,
    difficulty: "hard",
    category: "Spring Cloud",
    question: "What is the 'Spring Cloud Gateway' and how is it different from Zuul?",
    options: [
      "Gateway is built on Netty and supports non-blocking (Reactive) programming; Zuul 1 is blocking",
      "Zuul is newer than Gateway",
      "Gateway only works with XML",
      "There is no difference"
    ],
    answer: 0,
    explanation: "Spring Cloud Gateway is the modern replacement for Zuul, providing better performance and native support for WebFlux."
  },
  {
    id: 163,
    difficulty: "medium",
    category: "REST API",
    question: "Which header is used to send a JWT token in a REST request?",
    options: ["Token", "Authorization", "Security", "X-Auth"],
    answer: 1,
    explanation: "The standard format is 'Authorization: Bearer <token>'."
  },
  {
    id: 164,
    difficulty: "hard",
    category: "Java Core",
    question: "What is the difference between 'synchronized block' and 'ReentrantLock'?",
    options: [
      "Synchronized is faster",
      "ReentrantLock offers more features like fairness, interruptible lock waits, and timed locks",
      "ReentrantLock is automatic",
      "Synchronized only works on methods"
    ],
    answer: 1,
    explanation: "ReentrantLock (from java.util.concurrent) provides much more granular control over locking than the 'synchronized' keyword."
  },
  {
    id: 165,
    difficulty: "medium",
    category: "Testing",
    question: "What is '@MockBean' in Spring Boot tests?",
    options: [
      "A way to create a mock database",
      "It adds a mock object to the Spring ApplicationContext, replacing any existing bean of the same type",
      "A tool to test HTML",
      "A way to test static methods"
    ],
    answer: 1,
    explanation: "@MockBean is used for integration tests where you want to mock one specific service while keeping the rest of the Spring context real."
  },
  {
    id: 166,
    difficulty: "easy",
    category: "Spring Boot",
    question: "What is the purpose of '@RestControllerAdvice'?",
    options: [
      "To give advice to developers",
      "A specialized @ControllerAdvice that automatically adds @ResponseBody to all exception handlers",
      "To manage security",
      "To route requests"
    ],
    answer: 1,
    explanation: "It simplifies global exception handling for REST APIs by ensuring response bodies are serialized to JSON."
  },
  {
    id: 167,
    difficulty: "medium",
    category: "Microservices",
    question: "What is 'Log Aggregation'?",
    options: [
      "Deleting logs to save space",
      "Collecting logs from all microservice instances into a single central location (e.g., ELK Stack)",
      "Printing logs in alphabetical order",
      "Translating logs to another language"
    ],
    answer: 1,
    explanation: "In a distributed system, you cannot check individual server files. Tools like ElasticSearch, Logstash, and Kibana (ELK) provide a central view."
  },
  {
    id: 168,
    difficulty: "hard",
    category: "Java Core",
    question: "What is the 'Fork/Join Pool'?",
    options: [
      "A database connection pool",
      "An ExecutorService designed for work-stealing, specifically used for recursive tasks and Parallel Streams",
      "A way to join two strings",
      "A security feature"
    ],
    answer: 1,
    explanation: "ForkJoinPool is the foundation for parallel processing in Java 7+, where large tasks are split into subtasks that 'steal' work from each other."
  },
  {
    id: 169,
    difficulty: "medium",
    category: "Security",
    question: "In Spring Security, what is an 'AuthenticationProvider'?",
    options: [
      "The database itself",
      "A component that performs the actual logic of validating a user's credentials",
      "A UI login page",
      "A tool that generates passwords"
    ],
    answer: 1,
    explanation: "The AuthenticationManager delegates the authentication process to one or more AuthenticationProviders (e.g., DaoAuthenticationProvider)."
  },
  {
    id: 170,
    difficulty: "hard",
    category: "Spring Boot",
    question: "What is '@ConditionalOnMissingBean' used for in auto-configuration?",
    options: [
      "To delete a bean",
      "To provide a default bean only if the user hasn't already defined their own version of that bean",
      "To check if the database is missing",
      "To stop the application"
    ],
    answer: 1,
    explanation: "This is the key to Spring Boot's 'opinionated' nature. It allows you to override default behavior simply by defining your own bean."
  },
  {
    id: 171,
    difficulty: "easy",
    category: "Java Core",
    question: "Which class is the parent of all Exception and Error classes in Java?",
    options: ["RuntimeException", "Throwable", "Object", "Exception"],
    answer: 1,
    explanation: "Throwable is the superclass of all errors and exceptions in the Java language."
  },
  {
    id: 172,
    difficulty: "medium",
    category: "Microservices",
    question: "What is the 'Strangler Fig Pattern'?",
    options: [
      "A security attack",
      "A strategy for migrating a monolithic application to microservices by gradually replacing functionality",
      "A way to compress data",
      "A database indexing technique"
    ],
    answer: 1,
    explanation: "The pattern involves building new features in microservices while slowly 'strangling' the old monolith until it can be retired."
  },
  {
    id: 173,
    difficulty: "medium",
    category: "Testing",
    question: "What is the purpose of '@Tag' in JUnit 5?",
    options: [
      "To name a test",
      "To filter and group tests (e.g., 'Unit' vs 'Integration') for selective execution",
      "To mark a test as failed",
      "To add documentation"
    ],
    answer: 1,
    explanation: "Tags (similar to Categories in JUnit 4) allow build tools like Maven/Gradle to run specific subsets of tests."
  },
  {
    id: 174,
    difficulty: "hard",
    category: "REST API",
    question: "What is 'Idempotency Key' in API design?",
    options: [
      "A password",
      "A unique value sent by the client to ensure that a retried request is only processed once by the server",
      "A primary key in the DB",
      "A random string"
    ],
    answer: 1,
    explanation: "Crucial for financial transactions. If a POST request fails due to network, the client retries with the same key so the server doesn't charge twice."
  },
  {
    id: 175,
    difficulty: "medium",
    category: "Java Core",
    question: "What is the difference between 'CountDownLatch' and 'CyclicBarrier'?",
    options: [
      "CountDownLatch is for one-time events; CyclicBarrier can be reset and reused",
      "CyclicBarrier is for one thread only",
      "CountDownLatch is faster",
      "There is no difference"
    ],
    answer: 0,
    explanation: "CountDownLatch is used to wait for N events to complete. CyclicBarrier is used for N threads to wait for each other at a common point."
  },
  {
    id: 176,
    difficulty: "hard",
    category: "Security",
    question: "What is 'Scope' in the context of OAuth2?",
    options: [
      "The duration of the token",
      "A mechanism to limit a client's access to a user's account (e.g., 'read', 'write')",
      "The geographical region of the server",
      "The level of encryption"
    ],
    answer: 1,
    explanation: "Scopes are permissions requested by the client and granted by the user (e.g., accessing 'profile' vs 'contacts')."
  },
  {
    id: 177,
    difficulty: "medium",
    category: "Spring Boot",
    question: "What is '@Scheduled(cron = ...)'?",
    options: [
      "A way to schedule a meeting",
      "A way to run a method at specific times using a Unix-like cron expression",
      "A way to delay application startup",
      "A tool to measure performance"
    ],
    answer: 1,
    explanation: "Cron expressions allow highly flexible scheduling (e.g., 'every Monday at 3 AM')."
  },
  {
    id: 178,
    difficulty: "easy",
    category: "JSON",
    question: "In Jackson, what does '@JsonInclude(JsonInclude.Include.NON_NULL)' do?",
    options: [
      "It throws an error if a value is null",
      "It excludes fields from the JSON output if their value is null",
      "It makes all fields null",
      "It converts null to empty strings"
    ],
    answer: 1,
    explanation: "This is commonly used to keep JSON responses clean by removing optional fields that have no value."
  },
  {
    id: 179,
    difficulty: "hard",
    category: "Microservices",
    question: "What is 'Client-side Load Balancing' (e.g., Spring Cloud LoadBalancer)?",
    options: [
      "The user chooses the server",
      "The client service gets a list of available instances and decides which one to call",
      "A hardware device routes the traffic",
      "The database distributes the load"
    ],
    answer: 1,
    explanation: "Instead of a central load balancer (like F5), the service itself uses a library to pick a healthy instance from the registry."
  },
  {
    id: 180,
    difficulty: "medium",
    category: "Java Core",
    question: "What is 'AtomicInteger' used for?",
    options: [
      "To store very small numbers",
      "To perform thread-safe increments/decrements without using 'synchronized'",
      "To store values in a database",
      "To represent an atom"
    ],
    answer: 1,
    explanation: "It uses low-level 'Compare-and-Swap' (CAS) operations for high-performance thread-safe counters."
  },
  {
    id: 181,
    difficulty: "medium",
    category: "Testing",
    question: "What is 'Testcontainers'?",
    options: [
      "A way to pack tests in a ZIP file",
      "A Java library that supports JUnit tests by providing lightweight, throwaway instances of databases/browsers in Docker",
      "A type of List in Java",
      "A cloud hosting service"
    ],
    answer: 1,
    explanation: "Testcontainers ensures your integration tests run against a real database (like Postgres) rather than an in-memory mock like H2."
  },
  {
    id: 182,
    difficulty: "hard",
    category: "Security",
    question: "What is the difference between JWS and JWE?",
    options: [
      "JWS is for JSON; JWE is for XML",
      "JWS is a signed token (visible payload); JWE is an encrypted token (hidden payload)",
      "JWS is faster",
      "There is no difference"
    ],
    answer: 1,
    explanation: "Most JWTs used in the industry are JWS (JSON Web Signature). JWE (JSON Web Encryption) is used when the data inside the token must remain secret."
  },
  {
    id: 183,
    difficulty: "medium",
    category: "Spring Boot",
    question: "What is '@Primary' annotation used for?",
    options: [
      "To mark a primary key",
      "To give precedence to a specific bean when multiple beans of the same type exist",
      "To indicate the main class",
      "To set the highest priority level"
    ],
    answer: 1,
    explanation: "If you have two 'MessageService' beans, the one marked @Primary will be injected by default."
  },
  {
    id: 184,
    difficulty: "hard",
    category: "Java Core",
    question: "What is 'Lock Striping'?",
    options: [
      "Painting a lock with stripes",
      "Dividing a data structure into multiple segments, each with its own lock to reduce contention (e.g., ConcurrentHashMap)",
      "Locking the entire application",
      "A type of encryption"
    ],
    answer: 1,
    explanation: "By having multiple locks for different parts of a map, multiple threads can write to the map at the same time if they are in different segments."
  },
  {
    id: 185,
    difficulty: "easy",
    category: "REST API",
    question: "What does the 405 Method Not Allowed status code mean?",
    options: [
      "The URL doesn't exist",
      "The HTTP method (e.g., POST) is not supported by the endpoint",
      "The user is not logged in",
      "The server is down"
    ],
    answer: 1,
    explanation: "For example, trying to POST to a URL that only accepts GET requests."
  },
  {
    id: 186,
    difficulty: "medium",
    category: "Spring Boot",
    question: "What is the purpose of 'spring-boot-configuration-processor'?",
    options: [
      "To speed up the application",
      "To generate metadata that allows IDEs to provide autocomplete for custom @ConfigurationProperties",
      "To process database queries",
      "To compile the code"
    ],
    answer: 1,
    explanation: "It creates a JSON file that tools like IntelliJ use to help you write properties in application.properties."
  },
  {
    id: 187,
    difficulty: "hard",
    category: "Microservices",
    question: "What is 'ShedLock'?",
    options: [
      "A lock on a shed",
      "A library used to ensure that a scheduled task is executed at most once at the same time in a distributed environment",
      "A type of firewall",
      "A way to lock the database"
    ],
    answer: 1,
    explanation: "If you have 3 instances of a service, @Scheduled would run 3 times. ShedLock uses a shared database table to ensure only one instance runs the task."
  },
  {
    id: 188,
    difficulty: "medium",
    category: "Java Core",
    question: "What is a 'Daemon Thread'?",
    options: [
      "A thread that never stops",
      "A low-priority thread that performs background tasks and doesn't prevent the JVM from exiting",
      "A thread that causes errors",
      "The main thread"
    ],
    answer: 1,
    explanation: "When all non-daemon threads (like 'main') finish, the JVM will shut down even if daemon threads (like Garbage Collection) are still running."
  },
  {
    id: 189,
    difficulty: "hard",
    category: "Security",
    question: "In Spring Security, what does '.anyRequest().authenticated()' do in the filter chain?",
    options: [
      "It allows all requests",
      "It requires a valid login for every single URL that hasn't been specifically exempted",
      "It only allows admin users",
      "It turns off security"
    ],
    answer: 1,
    explanation: "It is a 'catch-all' rule that ensures everything is secured by default."
  },
  {
    id: 190,
    difficulty: "medium",
    category: "Testing",
    question: "What is 'Parameterized Testing' in JUnit 5?",
    options: [
      "Testing with many computers",
      "Running the same test method multiple times with different input values",
      "A test that takes a long time",
      "Testing the parameters of a method only"
    ],
    answer: 1,
    explanation: "Using @ParameterizedTest and @ValueSource/ @CsvSource, you can run one test logic against multiple datasets."
  },
  {
    id: 191,
    difficulty: "easy",
    category: "Spring Boot",
    question: "What is '@Value(\"${...:default}\")'?",
    options: [
      "A syntax error",
      "A way to provide a default value if the property is not found in application.properties",
      "A way to rename a variable",
      "A mathematical formula"
    ],
    answer: 1,
    explanation: "The colon followed by a string provides a fallback value to prevent application startup failure."
  },
  {
    id: 192,
    difficulty: "hard",
    category: "Java Core",
    question: "What is the 'Volatile' keyword used for in multithreading?",
    options: [
      "To lock a variable",
      "To ensure that a variable's value is always read from and written to main memory, ensuring visibility across threads",
      "To make a variable constant",
      "To increase memory size"
    ],
    answer: 1,
    explanation: "It prevents threads from caching the variable locally, which might lead to one thread seeing an 'old' value."
  },
  {
    id: 193,
    difficulty: "medium",
    category: "Microservices",
    question: "What is 'Spring Cloud Bus'?",
    options: [
      "A transportation service",
      "A way to propagate configuration changes or other management instructions across a distributed system using a message broker",
      "A fast database",
      "A monitoring tool"
    ],
    answer: 1,
    explanation: "Commonly used to refresh @RefreshScope beans across all microservice instances at once without restarting them."
  },
  {
    id: 194,
    difficulty: "hard",
    category: "REST API",
    question: "What are 'Content Negotiation' and 'Accept' headers?",
    options: [
      "Negotiating the price of an API",
      "The process where the client tells the server which media type (JSON, XML) it prefers to receive",
      "A security handshake",
      "A way to compress files"
    ],
    answer: 1,
    explanation: "By sending 'Accept: application/xml', a client can request that a Spring Boot app return XML instead of the default JSON."
  },
  {
    id: 195,
    difficulty: "medium",
    category: "Java Core",
    question: "What is the difference between 'sleep()' and 'wait()'?",
    options: [
      "sleep() is for animals",
      "sleep() keeps the lock; wait() releases the lock so other threads can enter the synchronized block",
      "wait() is only for the main thread",
      "There is no difference"
    ],
    answer: 1,
    explanation: "wait() is a method of Object and must be called from a synchronized context. sleep() is a static method of Thread and just pauses execution."
  },
  {
    id: 196,
    difficulty: "hard",
    category: "Security",
    question: "What is 'RBAC' and 'ABAC'?",
    options: [
      "Types of databases",
      "Role-Based Access Control and Attribute-Based Access Control",
      "Encryption algorithms",
      "Network protocols"
    ],
    answer: 1,
    explanation: "RBAC limits access by user roles (e.g., ADMIN). ABAC is more complex, limiting access by attributes (e.g., 'User can edit if they are the owner AND it is during business hours')."
  },
  {
    id: 197,
    difficulty: "medium",
    category: "Spring Boot",
    question: "What is '@Lazy' annotation used for on a Bean?",
    options: [
      "To make the code run slower",
      "To prevent the bean from being created until it is actually needed/requested",
      "To mark a bean for deletion",
      "To use less CPU"
    ],
    answer: 1,
    explanation: "By default, Spring creates all singleton beans on startup. @Lazy delays this until the first usage."
  },
  {
    id: 198,
    difficulty: "easy",
    category: "Java Core",
    question: "What is the 'finally' block used for in try-catch?",
    options: [
      "To catch errors",
      "To execute code (like closing resources) regardless of whether an exception was thrown or not",
      "To stop the program",
      "To ignore errors"
    ],
    answer: 1,
    explanation: "Finally blocks are guaranteed to run, making them ideal for cleanup logic."
  },
  {
    id: 199,
    difficulty: "hard",
    category: "Testing",
    question: "What is '@Sql' annotation in Spring Boot tests?",
    options: [
      "To write Java in SQL",
      "To execute specific SQL scripts (like schema creation or data insertion) before or after a test method",
      "To encrypt the database",
      "To connect to a remote SQL server"
    ],
    answer: 1,
    explanation: "It is a very effective way to set up a specific database state for a single integration test."
  },
  {
    id: 200,
    difficulty: "medium",
    category: "Microservices",
    question: "What is 'Canary Deployment'?",
    options: [
      "A deployment in a coal mine",
      "Rolling out a new version to a small subset of users before deploying it to everyone",
      "Deleting the old version first",
      "Deploying only the database"
    ],
    answer: 1,
    explanation: "This allows for testing in production with minimal risk. If the 'canary' version has errors, you can roll back before most users see it."
  },
/* ======================================================
   JAVA & SPRING BOOT MASTER QUESTION BANK (Batch 5/6)
   Topics: Performance, Advanced JPA, WebFlux, Docker/K8s
   ====================================================== */
  {
    id: 201,
    difficulty: "hard",
    category: "Performance",
    question: "What is the 'G1 Garbage Collector' designed for in Java?",
    options: [
      "Small heaps with very low latency",
      "Large heaps with predictable pause times",
      "Applications that don't use much memory",
      "Single-core processors only"
    ],
    answer: 1,
    explanation: "G1 (Garbage First) divides the heap into regions and prioritizes collecting regions with the most garbage to meet user-defined pause time goals."
  },
  {
    id: 202,
    difficulty: "medium",
    category: "ORM/Hibernate",
    question: "What is an 'Entity Graph' in JPA 2.1 used for?",
    options: [
      "To draw a diagram of the database",
      "To dynamically define which associations (Lazy/Eager) should be fetched in a specific query",
      "To count the number of entities",
      "To manage database permissions"
    ],
    answer: 1,
    explanation: "Entity Graphs allow you to override default LAZY fetching on a per-query basis, solving N+1 problems without changing the global mapping."
  },
  {
    id: 203,
    difficulty: "hard",
    category: "WebFlux",
    question: "In Project Reactor, what is the main difference between 'Mono' and 'Flux'?",
    options: [
      "Mono is for JSON; Flux is for XML",
      "Mono represents 0 or 1 element; Flux represents 0 to N elements",
      "Flux is blocking; Mono is non-blocking",
      "Mono is only for errors"
    ],
    answer: 1,
    explanation: "Mono is used for single asynchronous results (like a single database record), while Flux is used for streams of data."
  },
  {
    id: 204,
    difficulty: "medium",
    category: "Docker",
    question: "What is the purpose of a 'Multi-stage build' in a Dockerfile for a Java application?",
    options: [
      "To run the app on multiple OS at once",
      "To use one image for building (with Maven/JDK) and a smaller, leaner image (with JRE) for the final runtime",
      "To speed up the internet connection",
      "To encrypt the container"
    ],
    answer: 1,
    explanation: "Multi-stage builds significantly reduce final image size by excluding build-time dependencies like the full JDK and Maven source code."
  },
  {
    id: 205,
    difficulty: "hard",
    category: "Performance",
    question: "What does the JVM flag '-Xmx' specify?",
    options: [
      "The initial heap size",
      "The maximum heap size",
      "The stack size for each thread",
      "The version of Java to use"
    ],
    answer: 1,
    explanation: "-Xmx sets the upper limit for the Java Heap memory. If exceeded, the JVM throws OutOfMemoryError."
  },
  {
    id: 206,
    difficulty: "medium",
    category: "ORM/Hibernate",
    question: "What is the 'Spring Data JPA Specification' interface used for?",
    options: [
      "To document the database",
      "To build complex, reusable, and dynamic 'where' clauses using the Criteria API",
      "To set the database password",
      "To generate ID cards"
    ],
    answer: 1,
    explanation: "Specifications allow you to build dynamic queries based on user-provided search filters programmatically."
  },
  {
    id: 207,
    difficulty: "hard",
    category: "WebFlux",
    question: "What is 'Netty' in the context of Spring WebFlux?",
    options: [
      "A database",
      "The default non-blocking, event-driven network framework/server used for WebFlux",
      "A testing tool",
      "A logging library"
    ],
    answer: 1,
    explanation: "Unlike Spring MVC which usually uses Tomcat (Servlet-based), WebFlux typically runs on Netty to handle high concurrency with few threads."
  },
  {
    id: 208,
    difficulty: "medium",
    category: "Docker",
    question: "What is an 'Image Layer' in Docker?",
    options: [
      "A physical slice of a hard drive",
      "A read-only file system change that makes up a Docker image; layers are cached to speed up builds",
      "A security level",
      "A type of network cable"
    ],
    answer: 1,
    explanation: "Each command in a Dockerfile (like COPY or RUN) creates a layer. Reusing cached layers makes subsequent builds much faster."
  },
  {
    id: 209,
    difficulty: "easy",
    category: "Performance",
    question: "What is a 'Memory Leak' in Java?",
    options: [
      "When the RAM is physically broken",
      "When objects are no longer needed but are still referenced, preventing the Garbage Collector from freeing them",
      "When the computer runs out of disk space",
      "When the CPU gets too hot"
    ],
    answer: 1,
    explanation: "Even with a GC, if you keep adding objects to a static List without removing them, you will eventually run out of memory."
  },
  {
    id: 210,
    difficulty: "hard",
    category: "ORM/Hibernate",
    question: "What is the 'CGLIB proxy' in Spring?",
    options: [
      "A database driver",
      "A library used to create proxy objects for classes (via inheritance) when an interface is not available",
      "A way to speed up JSON",
      "A security protocol"
    ],
    answer: 1,
    explanation: "Spring uses JDK Dynamic Proxies for interfaces and CGLIB for classes to implement AOP (like @Transactional)."
  },
  {
    id: 211,
    difficulty: "medium",
    category: "WebFlux",
    question: "What happens when you call a blocking method inside a Reactive stream?",
    options: [
      "It speeds up the process",
      "It 'blocks' the event loop thread, potentially starving the whole application of resources",
      "It is automatically converted to non-blocking",
      "Nothing happens"
    ],
    answer: 1,
    explanation: "The golden rule of Reactive: Never block the event loop. Use Schedulers.boundedElastic() if you must call a blocking API."
  },
  {
    id: 212,
    difficulty: "medium",
    category: "Spring Boot",
    question: "What is the purpose of '@SpringJUnitConfig'?",
    options: [
      "To configure JUnit only",
      "A composed annotation that combines @ExtendWith(SpringExtension.class) and @ContextConfiguration",
      "To run tests in parallel",
      "To generate test data"
    ],
    answer: 1,
    explanation: "It is a modern way to integrate the Spring TestContext Framework with JUnit 5."
  },
  {
    id: 213,
    difficulty: "hard",
    category: "Performance",
    question: "What is 'Metaspace' in Java 8+?",
    options: [
      "A place for space travelers",
      "The memory area used to store class metadata, replacing the old PermGen",
      "A type of cloud storage",
      "The memory used for local variables"
    ],
    answer: 1,
    explanation: "Metaspace is allocated out of native memory (off-heap) and can grow automatically by default, unlike the old fixed-size PermGen."
  },
  {
    id: 214,
    difficulty: "medium",
    category: "ORM/Hibernate",
    question: "What is '@DynamicUpdate' in Hibernate?",
    options: [
      "It updates the code while running",
      "An optimization that ensures the generated UPDATE SQL only includes columns that have actually changed",
      "It makes the database faster",
      "It creates new columns automatically"
    ],
    answer: 1,
    explanation: "By default, Hibernate includes all columns in the UPDATE statement. @DynamicUpdate can improve performance for tables with many columns."
  },
  {
    id: 215,
    difficulty: "easy",
    category: "Docker",
    question: "Which Docker command is used to list all running containers?",
    options: ["docker list", "docker ps", "docker images", "docker show"],
    answer: 1,
    explanation: "'docker ps' shows running containers; 'docker ps -a' shows all containers (including stopped ones)."
  },
  {
    id: 216,
    difficulty: "hard",
    category: "WebFlux",
    question: "What is the role of 'Schedulers' in Project Reactor?",
    options: [
      "To set a calendar",
      "To manage which thread or thread pool executes the tasks (e.g., parallel, elastic, single)",
      "To delete old data",
      "To route requests"
    ],
    answer: 1,
    explanation: "Schedulers allow you to switch the execution context, for example moving blocking I/O to a dedicated thread pool."
  },
  {
    id: 217,
    difficulty: "medium",
    category: "Performance",
    question: "What is 'Connection Pooling' and why is it important?",
    options: [
      "Connecting many computers together",
      "Maintaining a cache of database connections to be reused, avoiding the high cost of creating new connections",
      "Sharing a single internet line",
      "A way to secure the database"
    ],
    answer: 1,
    explanation: "Creating a DB connection is slow. HikariCP (the Spring Boot default) keeps a 'pool' ready for immediate use."
  },
  {
    id: 218,
    difficulty: "hard",
    category: "Java Core",
    question: "What is the 'Diamond Syntax' in Java?",
    options: [
      "A security vulnerability",
      "The empty type parameters `<>` which allow the compiler to infer generics (e.g., List<String> list = new ArrayList<>())",
      "A type of interface",
      "A new way to write loops"
    ],
    answer: 1,
    explanation: "Introduced in Java 7, it reduces verbosity by not requiring the type to be repeated on the right-hand side."
  },
  {
    id: 219,
    difficulty: "medium",
    category: "Spring Boot",
    question: "What does '@EnableCaching' do?",
    options: [
      "It speeds up the hard drive",
      "It enables Spring's annotation-driven cache management capability (e.g., @Cacheable)",
      "It clears the browser history",
      "It saves all logs to memory"
    ],
    answer: 1,
    explanation: "With caching enabled, you can use @Cacheable on methods to store results in providers like Redis or Caffeine."
  },
  {
    id: 220,
    difficulty: "hard",
    category: "Microservices",
    question: "What is the 'Logstash' component in the ELK stack?",
    options: [
      "A database for logs",
      "A data processing pipeline that ingests, transforms, and sends logs to Elasticsearch",
      "A visualization tool",
      "A tool to delete logs"
    ],
    answer: 1,
    explanation: "Logstash acts as the 'middleman' that parses raw log lines into structured JSON before they are indexed."
  },
  {
    id: 221,
    difficulty: "easy",
    category: "Java Core",
    question: "Which collection type does not allow duplicate elements?",
    options: ["List", "Map", "Set", "Queue"],
    answer: 2,
    explanation: "A Set is a collection that contains no duplicate elements, modeled after the mathematical set abstraction."
  },
  {
    id: 222,
    difficulty: "medium",
    category: "Docker",
    question: "What is 'Docker Compose'?",
    options: [
      "A way to write music in Docker",
      "A tool for defining and running multi-container Docker applications using a YAML file",
      "A command to build an image",
      "A server hosting service"
    ],
    answer: 1,
    explanation: "Compose allows you to start your App, Database, and Cache all at once with a single 'docker-compose up' command."
  },
  {
    id: 223,
    difficulty: "hard",
    category: "ORM/Hibernate",
    question: "What is 'Optimistic Locking'?",
    options: [
      "Locking the database for everyone",
      "A strategy where you assume no conflicts will occur and check for a version change just before updating",
      "A lock that never expires",
      "Locking based on the user's name"
    ],
    answer: 1,
    explanation: "It doesn't use physical DB locks. It uses a @Version column. If two people edit, the second one to save gets an error."
  },
  {
    id: 224,
    difficulty: "medium",
    category: "WebFlux",
    question: "What is the difference between 'map' and 'flatMap' in Project Reactor?",
    options: [
      "map is for synchronous 1-to-1; flatMap is for asynchronous 1-to-N or returning another Mono/Flux",
      "map is faster",
      "flatMap is only for lists",
      "There is no difference"
    ],
    answer: 0,
    explanation: "Use flatMap when the transformation returns another asynchronous type (Mono/Flux), ensuring it is 'flattened' into the main stream."
  },
  {
    id: 225,
    difficulty: "hard",
    category: "Performance",
    question: "What is a 'Thread Dump'?",
    options: [
      "Deleting all threads",
      "A snapshot of the state of all threads in a JVM at a specific moment, used for debugging deadlocks",
      "A way to speed up threads",
      "A log of all calculations"
    ],
    answer: 1,
    explanation: "Thread dumps show what every thread is doing (waiting, running, blocked) and are essential for diagnosing performance bottlenecks."
  },
  {
    id: 226,
    difficulty: "easy",
    category: "Spring Boot",
    question: "What is the purpose of '@SpringBootTest'?",
    options: [
      "To test the internet connection",
      "To bootstrap the full Spring ApplicationContext for integration testing",
      "To create a new project",
      "To run the application in production"
    ],
    answer: 1,
    explanation: "It provides a way to test your app's components while they are fully wired together by Spring."
  },
  {
    id: 227,
    difficulty: "medium",
    category: "ORM/Hibernate",
    question: "What is a 'Proxy' in Hibernate?",
    options: [
      "A network server",
      "A placeholder object created by Hibernate to support Lazy Loading",
      "A security layer",
      "A database backup"
    ],
    answer: 1,
    explanation: "When you load a lazy association, Hibernate gives you a Proxy. The actual data is only fetched when you call a getter on that Proxy."
  },
  {
    id: 228,
    difficulty: "hard",
    category: "Java Core",
    question: "What is 'Escape Analysis' in the JVM JIT compiler?",
    options: [
      "Escaping from a virus",
      "An optimization that determines if an object's scope is limited to a method, allowing it to be allocated on the stack instead of the heap",
      "A way to exit a loop",
      "A security check for strings"
    ],
    answer: 1,
    explanation: "Stack allocation is much faster than heap allocation and doesn't require garbage collection."
  },
  {
    id: 229,
    difficulty: "medium",
    category: "REST API",
    question: "What is 'CORS' (Cross-Origin Resource Sharing)?",
    options: [
      "A type of database",
      "A security feature that allows/restricts web pages from making requests to a different domain than the one that served the page",
      "A data format",
      "A routing protocol"
    ],
    answer: 1,
    explanation: "Browsers block requests to different domains unless the server specifically allows it via CORS headers."
  },
  {
    id: 230,
    difficulty: "hard",
    category: "Docker",
    question: "What is the difference between an 'ENTRYPOINT' and 'CMD' in a Dockerfile?",
    options: [
      "There is no difference",
      "ENTRYPOINT is the main command that is always executed; CMD provides default arguments that can be overridden",
      "CMD is for environment variables",
      "ENTRYPOINT is for documentation"
    ],
    answer: 1,
    explanation: "ENTRYPOINT defines the 'executable' of the container. CMD is often used to pass default flags to that executable."
  },
  {
    id: 231,
    difficulty: "easy",
    category: "Performance",
    question: "What is 'JIT' (Just-In-Time) Compilation?",
    options: [
      "Compiling everything before running",
      "Compiling bytecode into native machine code at runtime for frequently executed code paths",
      "A way to write code faster",
      "A type of error"
    ],
    answer: 1,
    explanation: "JIT is the reason modern Java is fast. It identifies 'hot' code and optimizes it into machine language."
  },
  {
    id: 232,
    difficulty: "medium",
    category: "ORM/Hibernate",
    question: "What does '@SQLRestriction' (formerly @Where) do in Hibernate 6?",
    options: [
      "It restricts the user from writing SQL",
      "It adds a default clause to all queries for a specific entity (e.g., deleted = false)",
      "It encrypts the SQL",
      "It limits the number of rows"
    ],
    answer: 1,
    explanation: "It is the standard way to implement soft-deletes or multi-tenancy filtering at the entity level."
  },
  {
    id: 233,
    difficulty: "hard",
    category: "WebFlux",
    question: "What is 'WebClient' in Spring?",
    options: [
      "A browser",
      "A non-blocking, reactive client for performing HTTP requests, replacing the older RestTemplate",
      "A way to create websites",
      "A security tool"
    ],
    answer: 1,
    explanation: "WebClient is the recommended tool for making API calls in both Spring MVC and WebFlux applications."
  },
  {
    id: 234,
    difficulty: "medium",
    category: "Spring Boot",
    question: "What is '@Mock' vs '@MockBean'?",
    options: [
      "@Mock is for pure unit tests (Mockito); @MockBean is for Spring integration tests to replace a bean in the context",
      "They are identical",
      "@Mock is faster",
      "@MockBean is for databases only"
    ],
    answer: 0,
    explanation: "Use @Mock for fast tests with no Spring. Use @MockBean when you need the Spring context to run but want to fake one part of it."
  },
  {
    id: 235,
    difficulty: "hard",
    category: "Performance",
    question: "What is 'Stop-the-world' in Garbage Collection?",
    options: [
      "A movie title",
      "A phase where the JVM pauses all application threads to safely perform garbage collection",
      "A way to stop a virus",
      "A system crash"
    ],
    answer: 1,
    explanation: "While modern GCs try to minimize this, almost all GCs have at least some brief phase where everything must stop for consistency."
  },
  {
    id: 236,
    difficulty: "easy",
    category: "Microservices",
    question: "What is 'Health Check' in Spring Boot Actuator?",
    options: [
      "A check-up for the developer",
      "An endpoint (/actuator/health) that returns the status of the app and its dependencies (DB, Disk, etc.)",
      "A virus scanner",
      "A way to restart the computer"
    ],
    answer: 1,
    explanation: "Load balancers and Kubernetes use this endpoint to know if a container should receive traffic or be restarted."
  },
  {
    id: 237,
    difficulty: "medium",
    category: "ORM/Hibernate",
    question: "What is the difference between 'LazyInitializationException' and 'NullPointerException'?",
    options: [
      "LazyInitException happens when you access a lazy association outside of an active Hibernate Session",
      "They are the same",
      "LazyInitException only happens in XML",
      "One is for strings, one is for numbers"
    ],
    answer: 0,
    explanation: "This usually happens if you try to access a child collection in a Controller after the Service (and transaction) has ended."
  },
  {
    id: 238,
    difficulty: "hard",
    category: "Java Core",
    question: "What is 'Double-Checked Locking'?",
    options: [
      "Locking your door twice",
      "A design pattern used to reduce overhead by checking a condition before and after acquiring a lock (often used for Singletons)",
      "A security flaw",
      "A way to speed up the CPU"
    ],
    answer: 1,
    explanation: "Requires the use of the 'volatile' keyword to be thread-safe in Java."
  },
  {
    id: 239,
    difficulty: "medium",
    category: "Docker",
    question: "What is a 'Docker Volume'?",
    options: [
      "The loudness of the container",
      "A mechanism for persisting data generated by and used by Docker containers outside the container's lifecycle",
      "A type of hard drive",
      "A list of containers"
    ],
    answer: 1,
    explanation: "If you stop a container, its data is lost. Volumes store data (like database files) on the host machine so it survives restarts."
  },
  {
    id: 240,
    difficulty: "hard",
    category: "WebFlux",
    question: "What is the 'Observer Pattern' in Reactive programming?",
    options: [
      "Watching the code run",
      "The core principle where 'Subscribers' listen to and react to data emitted by 'Publishers'",
      "A way to log errors",
      "A security protocol"
    ],
    answer: 1,
    explanation: "In Reactive, nothing happens until you subscribe. The publisher 'emits' data, and the observer (subscriber) 'consumes' it."
  },
  {
    id: 241,
    difficulty: "easy",
    category: "Performance",
    question: "What is 'Object Pooling'?",
    options: [
      "Throwing objects in a pool",
      "Reusing expensive-to-create objects (like DB connections or Threads) instead of creating new ones",
      "A way to delete objects",
      "A type of memory"
    ],
    answer: 1,
    explanation: "Pooling reduces the pressure on the Garbage Collector and improves response times."
  },
  {
    id: 242,
    difficulty: "medium",
    category: "Spring Boot",
    question: "What is '@ConditionalOnClass'?",
    options: [
      "A bean is only created if a certain class is present on the classpath",
      "It limits classes to certain users",
      "It checks if a class is empty",
      "It renames a class"
    ],
    answer: 0,
    explanation: "Used extensively in Spring Boot starters to auto-configure beans only if the required library (e.g., MongoDB driver) is present."
  },
  {
    id: 243,
    difficulty: "hard",
    category: "Java Core",
    question: "What is 'Type Erasure' in Java Generics?",
    options: [
      "Deleting your code",
      "The process where the compiler removes all generic type information at runtime for backward compatibility",
      "A way to change types",
      "A security feature"
    ],
    answer: 1,
    explanation: "At runtime, a List<String> and a List<Integer> are both just 'List'. This is why you can't use 'instanceof List<String>'."
  },
  {
    id: 244,
    difficulty: "medium",
    category: "ORM/Hibernate",
    question: "What is 'Table Per Class' inheritance strategy in JPA?",
    options: [
      "One table for all classes",
      "Each class (including subclasses) has its own independent table containing all its fields",
      "No tables are used",
      "One table for the whole database"
    ],
    answer: 1,
    explanation: "Unlike 'Joined' or 'Single Table', this strategy doesn't use a discriminator but can make polymorphic queries slower."
  },
  {
    id: 245,
    difficulty: "hard",
    category: "Performance",
    question: "What is the 'Young Generation' (Eden + Survivor spaces)?",
    options: [
      "Where new developers work",
      "The part of the heap where new objects are allocated and most GC activity occurs",
      "A backup memory area",
      "The memory used for static variables"
    ],
    answer: 1,
    explanation: "Most objects die young. Minor GCs clean the Young Gen frequently and are much faster than Major GCs."
  },
  {
    id: 246,
    difficulty: "easy",
    category: "Microservices",
    question: "What is 'Fault Tolerance'?",
    options: [
      "Ignoring all errors",
      "The ability of a system to continue operating properly in the event of the failure of some of its components",
      "The maximum number of errors allowed",
      "A way to fix bugs automatically"
    ],
    answer: 1,
    explanation: "Implemented via patterns like Circuit Breakers, Retries, and Fallbacks."
  },
  {
    id: 247,
    difficulty: "medium",
    category: "Docker",
    question: "What is the 'Docker Host'?",
    options: [
      "The person who owns the computer",
      "The machine (physical or virtual) that runs the Docker daemon and containers",
      "The main container",
      "The Docker website"
    ],
    answer: 1,
    explanation: "Containers share the kernel of the Docker Host, which is why they are lighter than Virtual Machines."
  },
  {
    id: 248,
    difficulty: "hard",
    category: "WebFlux",
    question: "What is 'Backpressure' in the Reactive Streams specification?",
    options: [
      "A plumbing problem",
      "A way for a subscriber to tell a publisher how much data it can handle to avoid being overwhelmed",
      "Speeding up the data flow",
      "Deleting data that is too slow"
    ],
    answer: 1,
    explanation: "Without backpressure, a fast producer could exhaust the memory of a slow consumer."
  },
  {
    id: 249,
    difficulty: "medium",
    category: "Spring Boot",
    question: "What does '@EnableAutoConfiguration' do?",
    options: [
      "It writes code for you",
      "It tells Spring to start looking for beans based on the libraries found on the classpath",
      "It configures the computer hardware",
      "It auto-updates the application"
    ],
    answer: 1,
    explanation: "This is the 'magic' of Spring Boot that automatically sets up things like data sources or web servers."
  },
  {
    id: 250,
    difficulty: "hard",
    category: "Performance",
    question: "What is the 'Resident Set Size' (RSS)?",
    options: [
      "The size of the residential area",
      "The amount of physical memory (RAM) actually occupied by a process",
      "The size of the Java source code",
      "The number of users on the site"
    ],
    answer: 1,
    explanation: "In Docker/Kubernetes, the RSS is the value used to determine if a container has hit its memory limit."
  },
/* ======================================================
   JAVA & SPRING BOOT MASTER QUESTION BANK (Batch 6/6)
   Topics: Kubernetes, Advanced Java 21, Spring Customization, Scenarios
   ====================================================== */
  {
    id: 251,
    difficulty: "hard",
    category: "Infrastructure",
    question: "In Kubernetes, what is a 'Liveness Probe' used for in a Spring Boot pod?",
    options: [
      "To check if the app is ready to receive traffic",
      "To determine if the container is still running; if it fails, K8s restarts the container",
      "To measure the speed of the CPU",
      "To update the application code"
    ],
    answer: 1,
    explanation: "A liveness probe tells K8s if the app has crashed or is in a deadlocked state, triggering a restart to recover."
  },
  {
    id: 252,
    difficulty: "medium",
    category: "Java Core",
    question: "What is a 'Record' in Java 16+?",
    options: [
      "A type of database table",
      "A special type of class intended to be an immutable data carrier, automatically generating getters, constructor, and equals/hashCode",
      "A way to log data to a file",
      "A legacy class format"
    ],
    answer: 1,
    explanation: "Records provide a compact syntax for declaring classes which are transparent holders for shallowly immutable data."
  },
  {
    id: 253,
    difficulty: "hard",
    category: "Spring Boot",
    question: "How do you create a 'Custom Starter' in Spring Boot?",
    options: [
      "By creating a ZIP file",
      "By creating a project with an autoconfigure module and a 'spring.factories' or 'org.springframework.boot.autoconfigure.AutoConfiguration.imports' file",
      "By renaming the main class",
      "Starters cannot be custom-made"
    ],
    answer: 1,
    explanation: "Starters consist of two parts: the autoconfigure code and the library itself, linked via the AutoConfiguration discovery mechanism."
  },
  {
    id: 254,
    difficulty: "medium",
    category: "Microservices",
    question: "What is 'Distributed Tracing' in a Microservices context?",
    options: [
      "Tracing the physical location of servers",
      "Propagating a unique ID (Trace ID) across multiple service calls to monitor the flow of a single request",
      "Drawing a map of the network",
      "Counting the number of requests"
    ],
    answer: 1,
    explanation: "It allows developers to see exactly how much time a request spends in each microservice (e.g., using Brave or OpenTelemetry)."
  },
  {
    id: 255,
    difficulty: "hard",
    category: "Security",
    question: "What is 'mTLS' (Mutual TLS)?",
    options: [
      "A faster version of TLS",
      "A protocol where both the client and the server provide certificates to verify each other's identity",
      "A way to encrypt passwords",
      "A type of firewall"
    ],
    answer: 1,
    explanation: "In zero-trust microservice architectures, mTLS ensures that only authorized services can talk to one another."
  },
  {
    id: 256,
    difficulty: "medium",
    category: "Java Core",
    question: "What is the 'Permits' clause used for in a Sealed Class?",
    options: [
      "To grant security permissions",
      "To explicitly list the subclasses that are allowed to extend the sealed class",
      "To allow access to private variables",
      "To enable network access"
    ],
    answer: 1,
    explanation: "The 'permits' keyword restricts inheritance to the specific classes named in the declaration."
  },
  {
    id: 257,
    difficulty: "hard",
    category: "Infrastructure",
    question: "What is a 'ConfigMap' in Kubernetes?",
    options: [
      "A map of the data center",
      "A K8s object used to store non-confidential data in key-value pairs, often injected into pods as environment variables",
      "A database configuration tool",
      "A list of IP addresses"
    ],
    answer: 1,
    explanation: "ConfigMaps allow you to decouple environment-specific configuration from the container image."
  },
  {
    id: 258,
    difficulty: "medium",
    category: "Spring Boot",
    question: "What is the purpose of 'FailureAnalyzers' in Spring Boot?",
    options: [
      "To analyze why a user's login failed",
      "To intercept exceptions on startup and turn them into readable diagnostic messages (e.g., 'Port already in use')",
      "To predict future failures",
      "To delete failed logs"
    ],
    answer: 1,
    explanation: "When an app fails to start, FailureAnalyzers provide a 'Description' and an 'Action' to help the developer fix the issue."
  },
  {
    id: 259,
    difficulty: "hard",
    category: "Java Core",
    question: "What is 'Pattern Matching for switch' (Java 21)?",
    options: [
      "Searching for text in a file",
      "Allowing the switch selector to be any type and testing it against patterns (e.g., case String s, case Integer i)",
      "A new way to write Regex",
      "A sorting algorithm"
    ],
    answer: 1,
    explanation: "It allows switch to be used as an expression that extracts components of objects directly if they match a certain type."
  },
  {
    id: 260,
    difficulty: "medium",
    category: "REST API",
    question: "What is 'API Versioning' and why is it used?",
    options: [
      "Changing the name of the API",
      "Managing changes to an API (via URL, Header, or Query Param) to avoid breaking existing clients",
      "Updating the Java version",
      "Making the API faster"
    ],
    answer: 1,
    explanation: "Versioning (e.g., /api/v1/users) ensures that updates don't crash mobile apps or older integrations."
  },
  {
    id: 261,
    difficulty: "hard",
    category: "Microservices",
    question: "What is the 'Transactional Outbox Pattern'?",
    options: [
      "Sending emails from a database",
      "Saving a message in a local DB table as part of a business transaction, then a separate process sends it to a Message Broker",
      "A way to delete old transactions",
      "A type of cache"
    ],
    answer: 1,
    explanation: "This pattern ensures 'At-least-once' delivery to a message broker even if the broker is down when the transaction occurs."
  },
  {
    id: 262,
    difficulty: "medium",
    category: "Java Core",
    question: "What is 'Text Blocks' (introduced in Java 15)?",
    options: [
      "Large blocks of wood",
      "A multi-line string literal that avoids the need for escape sequences and '+' operators",
      "A tool to edit text files",
      "A security feature for strings"
    ],
    answer: 1,
    explanation: "Text blocks use triple quotes (\"\"\") and preserve formatting, making SQL or JSON strings much more readable."
  },
  {
    id: 263,
    difficulty: "hard",
    category: "Infrastructure",
    question: "What is the difference between a 'Deployment' and a 'StatefulSet' in Kubernetes?",
    options: [
      "Deployment is for stateless apps (like REST APIs); StatefulSet is for apps requiring stable identities (like Databases)",
      "StatefulSet is faster",
      "Deployment only works with Java",
      "There is no difference"
    ],
    answer: 0,
    explanation: "StatefulSets provide stable network IDs and persistent storage that stays with a specific pod even if it is moved."
  },
  {
    id: 264,
    difficulty: "medium",
    category: "Spring Boot",
    question: "What is '@Import' used for in Spring?",
    options: [
      "To import a CSV file",
      "To manually include additional @Configuration classes or beans that are not covered by component scanning",
      "To import a library from Maven",
      "To copy code from another project"
    ],
    answer: 1,
    explanation: "It allows you to explicitly wire configurations from other packages or modules."
  },
  {
    id: 265,
    difficulty: "hard",
    category: "Scenarios",
    question: "Your microservice is running slow due to heavy JSON parsing. Which optimization is most effective?",
    options: [
      "Switching to a larger database",
      "Using a binary format like Protobuf or Avro instead of JSON for internal service-to-service communication",
      "Adding more comments to the code",
      "Changing the variable names"
    ],
    answer: 1,
    explanation: "Binary formats are much faster to serialize/deserialize and result in smaller payloads than text-based JSON."
  },
  {
    id: 266,
    difficulty: "medium",
    category: "Java Core",
    question: "What is the 'Var' keyword (Local Variable Type Inference) used for?",
    options: [
      "To create a global variable",
      "To let the compiler infer the type of a local variable (e.g., var list = new ArrayList<String>())",
      "To make variables mutable",
      "To bypass type safety"
    ],
    answer: 1,
    explanation: "Introduced in Java 10, it reduces boilerplate while maintaining strong typing at compile time."
  },
  {
    id: 267,
    difficulty: "hard",
    category: "Security",
    question: "What is 'OAuth2 Scopes' vs 'OIDC Claims'?",
    options: [
      "They are the same",
      "Scopes define what a client can do; Claims are pieces of information about the user (e.g., email, name)",
      "Claims are only for passwords",
      "Scopes are only for XML"
    ],
    answer: 1,
    explanation: "Scopes are for authorization; Claims are for identity/profile information (OpenID Connect)."
  },
  {
    id: 268,
    difficulty: "medium",
    category: "ORM/Hibernate",
    question: "What is the 'Join Table' strategy in Many-to-Many relationships?",
    options: [
      "Using one table for everything",
      "A separate table that contains foreign keys from both related tables to link them",
      "Merging two databases",
      "A table that doesn't use primary keys"
    ],
    answer: 1,
    explanation: "In a Many-to-Many, a middle table (join table) is required to manage the associations."
  },
  {
    id: 269,
    difficulty: "hard",
    category: "Spring Boot",
    question: "What is the purpose of 'Spring Native'?",
    options: [
      "To run Spring on a specific OS",
      "To compile Spring applications into native executables using GraalVM for instant startup and low memory footprint",
      "To translate code to C++",
      "To use native hardware drivers"
    ],
    answer: 1,
    explanation: "Native images are ideal for Serverless (AWS Lambda) where startup time (cold starts) is critical."
  },
  {
    id: 270,
    difficulty: "medium",
    category: "Microservices",
    question: "What is 'Externalized Secrets Management'?",
    options: [
      "Storing passwords in application.properties",
      "Using tools like HashiCorp Vault or AWS Secrets Manager to store and rotate sensitive data securely",
      "Telling the secrets to the external team",
      "Encrypting the hard drive"
    ],
    answer: 1,
    explanation: "It prevents secrets from being committed to Git and allows for dynamic secret rotation."
  },
  {
    id: 271,
    difficulty: "easy",
    category: "Java Core",
    question: "What is the difference between 'Error' and 'Exception' in Java?",
    options: [
      "There is no difference",
      "Exceptions are conditions an app should try to catch; Errors are serious problems that an app should not try to catch",
      "Errors are for the user, Exceptions are for the dev",
      "Exceptions are faster"
    ],
    answer: 1,
    explanation: "Errors (like OutOfMemoryError) usually indicate JVM-level failure, while Exceptions (like IOException) are part of normal app logic."
  },
  {
    id: 272,
    difficulty: "hard",
    category: "Infrastructure",
    question: "In Kubernetes, what is an 'Ingress Controller'?",
    options: [
      "A database administrator",
      "A load balancer that manages external access to the services in a cluster, typically providing HTTP routing and SSL termination",
      "A tool to write code",
      "A monitoring dashboard"
    ],
    answer: 1,
    explanation: "Ingress (like NGINX Ingress) acts as the entry point for traffic from the internet into your K8s cluster."
  },
  {
    id: 273,
    difficulty: "medium",
    category: "Testing",
    question: "What is 'Mutation Testing'?",
    options: [
      "Testing if the code can change itself",
      "A technique where the test tool modifies code logic (mutations) to see if existing tests fail; if tests pass, the tests are weak",
      "Testing the computer for viruses",
      "Changing the hardware during a test"
    ],
    answer: 1,
    explanation: "It measures the quality of your test suite by ensuring it actually catches logic bugs, not just achieving code coverage."
  },
  {
    id: 274,
    difficulty: "hard",
    category: "Java Core",
    question: "What is the 'Reflection API' used for in Java?",
    options: [
      "To see the developer's reflection",
      "To inspect and modify the behavior of classes, methods, and fields at runtime (often used by frameworks like Spring)",
      "To mirror a database",
      "To create backups"
    ],
    answer: 1,
    explanation: "Reflection allows Spring to find annotations like @Service and instantiate classes without the 'new' keyword."
  },
  {
    id: 275,
    difficulty: "medium",
    category: "REST API",
    question: "What is 'JSON Patch' (RFC 6902)?",
    options: [
      "A way to fix a broken JSON file",
      "A format for describing changes to a JSON document (using ops like 'add', 'remove', 'replace')",
      "A security update for JSON",
      "A type of JSON database"
    ],
    answer: 1,
    explanation: "It is used with the HTTP PATCH method for very precise, partial updates to resources."
  },
  {
    id: 276,
    difficulty: "hard",
    category: "Microservices",
    question: "What is 'Consumer-Driven Contract Testing' (CDC)?",
    options: [
      "Testing if the user is happy",
      "A pattern where consumers define the 'contract' (expectations) for an API, and the provider must satisfy it",
      "A type of legal document",
      "Testing the database"
    ],
    answer: 1,
    explanation: "Tools like Pact help ensure that changes to a producer service don't break the microservices that consume it."
  },
  {
    id: 277,
    difficulty: "medium",
    category: "Spring Boot",
    question: "What is '@AliasFor' used for when creating custom annotations?",
    options: [
      "To rename the annotation",
      "To link an attribute in your custom annotation to an attribute in a meta-annotation (like @RequestMapping)",
      "To create a shortcut for a class",
      "To hide the annotation"
    ],
    answer: 1,
    explanation: "It allows you to 'pass through' values from your own annotation to the underlying Spring annotations."
  },
  {
    id: 278,
    difficulty: "hard",
    category: "Infrastructure",
    question: "What is 'Helm' in the Kubernetes ecosystem?",
    options: [
      "A steering wheel for a ship",
      "A package manager for K8s that uses 'Charts' to define, install, and upgrade complex applications",
      "A security tool",
      "A way to write Java code"
    ],
    answer: 1,
    explanation: "Helm simplifies K8s by templating YAML files and managing versions of your infrastructure deployments."
  },
  {
    id: 279,
    difficulty: "medium",
    category: "Java Core",
    question: "What is the 'Stream.ofNullable()' method used for?",
    options: [
      "To create a stream of null values",
      "To create a stream containing a single element if non-null, or an empty stream if null",
      "To delete nulls from a database",
      "To stop a stream"
    ],
    answer: 1,
    explanation: "It is a convenient way to avoid null checks when initiating a stream from a potentially null object."
  },
  {
    id: 280,
    difficulty: "hard",
    category: "Scenarios",
    question: "A service has high memory usage and frequent Full GCs. You suspect a 'Large Object' issue. What is the first step?",
    options: [
      "Buy more RAM",
      "Capture a Heap Dump and analyze it using a tool like Eclipse MAT or VisualVM",
      "Restart the server every hour",
      "Rewrite the app in Python"
    ],
    answer: 1,
    explanation: "Heap dump analysis identifies exactly which objects are consuming memory and where they are referenced."
  },
  {
    id: 281,
    difficulty: "medium",
    category: "Spring Boot",
    question: "What is '@Primary' vs '@Qualifier'?",
    options: [
      "@Primary sets the default; @Qualifier is used at the injection point to specify a specific bean name",
      "They are the same",
      "@Qualifier is only for strings",
      "@Primary is only for numbers"
    ],
    answer: 0,
    explanation: "Use @Primary for the most common case, and @Qualifier when you need fine-grained control over which bean is injected."
  },
  {
    id: 282,
    difficulty: "hard",
    category: "Security",
    question: "What is 'JWT Revocation' and why is it difficult?",
    options: [
      "Revoking a user's password",
      "Stateless tokens are valid until they expire; revoking them requires a blacklist (like Redis) which re-introduces state",
      "JWTs cannot be revoked",
      "It is only difficult in Java"
    ],
    answer: 1,
    explanation: "Because the server doesn't 'store' JWTs, it can't easily 'delete' them. A blacklist or short expiration with refresh tokens is the standard fix."
  },
  {
    id: 283,
    difficulty: "medium",
    category: "Microservices",
    question: "What is the 'Bulkhead Pattern'?",
    options: [
      "A type of wall in a ship",
      "Isolating elements of an application into pools so that if one fails, the others continue to function (e.g., separate thread pools per service)",
      "Using a large database",
      "Combining all services into one"
    ],
    answer: 1,
    explanation: "It prevents one failing service (or slow endpoint) from consuming all available threads and crashing the entire system."
  },
  {
    id: 284,
    difficulty: "hard",
    category: "Java Core",
    question: "What is 'JLink' in Java?",
    options: [
      "A way to link websites",
      "A tool that assembles a set of modules and their dependencies into a custom runtime image (JRE)",
      "A networking library",
      "A security tool"
    ],
    answer: 1,
    explanation: "JLink allows you to create a minimal Java runtime containing only the modules your app actually needs, reducing size and security surface."
  },
  {
    id: 285,
    difficulty: "medium",
    category: "Testing",
    question: "What is '@WebMvcTest' used for?",
    options: [
      "To test the whole application",
      "A specialized test annotation that only bootstraps the Spring MVC infrastructure (Controllers, Filters), not the full context",
      "To test a database",
      "To test the internet speed"
    ],
    answer: 1,
    explanation: "It is much faster than @SpringBootTest because it ignores Services, Repositories, and other components."
  },
  {
    id: 286,
    difficulty: "hard",
    category: "Infrastructure",
    question: "What is a 'Sidecar Container' in Kubernetes?",
    options: [
      "A backup container",
      "A second container in the same pod that enhances or extends the primary container (e.g., log forwarding or proxying)",
      "A container that runs only on weekends",
      "A container for the developer"
    ],
    answer: 1,
    explanation: "Sidecars share the same network (localhost) and storage volumes as the main application container."
  },
  {
    id: 287,
    difficulty: "medium",
    category: "Spring Boot",
    question: "What is '@EventListener' used for?",
    options: [
      "To listen to music",
      "To handle internal Spring ApplicationEvents (like ContextRefreshedEvent) or custom events in a decoupled way",
      "To listen to user mouse clicks",
      "To monitor network traffic"
    ],
    answer: 1,
    explanation: "It implements the Observer pattern within the Spring framework to allow components to communicate without direct dependencies."
  },
  {
    id: 288,
    difficulty: "hard",
    category: "ORM/Hibernate",
    question: "What is 'StatelessSession' in Hibernate?",
    options: [
      "A session with no user",
      "A command-oriented API that does not use a first-level cache or perform dirty checking; used for bulk operations",
      "A session that doesn't use a database",
      "A session for web browsers only"
    ],
    answer: 1,
    explanation: "It is much faster for inserting or updating thousands of rows because it avoids the overhead of managing objects in memory."
  },
  {
    id: 289,
    difficulty: "medium",
    category: "Java Core",
    question: "What is 'Record Patterns' (Java 21)?",
    options: [
      "A way to record music",
      "Deconstructing record values in pattern matching (e.g., if (obj instanceof Point(int x, int y)))",
      "A new way to write loops",
      "A type of data structure"
    ],
    answer: 1,
    explanation: "It allows you to extract fields from a record directly in the 'instanceof' or 'switch' check, avoiding manual getter calls."
  },
  {
    id: 290,
    difficulty: "hard",
    category: "Microservices",
    question: "What is 'Event Sourcing'?",
    options: [
      "Looking for events on a website",
      "A pattern where state changes are stored as a sequence of immutable events rather than just storing the current state in a DB",
      "Deleting events after they happen",
      "A type of logging"
    ],
    answer: 1,
    explanation: "This allows you to reconstruct the state of an application at any point in time by 'replaying' the events."
  },
  {
    id: 291,
    difficulty: "easy",
    category: "REST API",
    question: "What is 'Swagger/OpenAPI'?",
    options: [
      "A type of clothing",
      "A specification and set of tools for documenting and testing RESTful APIs",
      "A new programming language",
      "A database management system"
    ],
    answer: 1,
    explanation: "SpringDoc is the standard library used to generate Swagger UI from Spring Boot code."
  },
  {
    id: 292,
    difficulty: "hard",
    category: "Spring Boot",
    question: "What is the purpose of 'spring-boot-starter-aop'?",
    options: [
      "To add security",
      "To enable Aspect-Oriented Programming (AOP) for things like custom logging, profiling, or transaction management",
      "To speed up the app",
      "To create desktop apps"
    ],
    answer: 1,
    explanation: "AOP allows you to 'intercept' method calls and execute code before, after, or around the method without modifying its logic."
  },
  {
    id: 293,
    difficulty: "medium",
    category: "Security",
    question: "What is 'CSRF' and why is it not usually a problem for REST APIs using JWT?",
    options: [
      "CSRF is only for Java",
      "REST APIs are often stateless and don't use session cookies; CSRF relies on the browser automatically sending cookies",
      "JWTs are naturally immune to all attacks",
      "REST APIs don't have users"
    ],
    answer: 1,
    explanation: "CSRF targets cookie-based authentication. If your JWT is sent in a Header (Authorization: Bearer), the browser won't attach it automatically to a forged request."
  },
  {
    id: 294,
    difficulty: "hard",
    category: "Infrastructure",
    question: "What is 'Horizontal Pod Autoscaler' (HPA) in Kubernetes?",
    options: [
      "A tool to make pods taller",
      "A controller that automatically scales the number of pods in a deployment based on CPU/Memory usage",
      "A way to restart the cluster",
      "A load balancer"
    ],
    answer: 1,
    explanation: "HPA ensures that your Spring Boot service can handle traffic spikes by spinning up more instances dynamically."
  },
  {
    id: 295,
    difficulty: "medium",
    category: "Java Core",
    question: "What is the 'Optional.ifPresentOrElse()' method?",
    options: [
      "A syntax error",
      "A method that takes an action if the value is present, and a different action (Runnable) if it is not",
      "A way to delete an Optional",
      "A sorting method"
    ],
    answer: 1,
    explanation: "Introduced in Java 9, it allows for a clean functional way to handle both the 'value exists' and 'value missing' cases."
  },
  {
    id: 296,
    difficulty: "hard",
    category: "Scenarios",
    question: "Your microservice is experiencing 'Cascading Failures'. What is the best immediate solution?",
    options: [
      "Add more logs",
      "Implement a Circuit Breaker (like Resilience4j) to fail fast and stop the spread of errors",
      "Restart all services at once",
      "Hire more developers"
    ],
    answer: 1,
    explanation: "A circuit breaker 'trips' and stops requests to a failing downstream service, protecting the caller from hanging/crashing."
  },
  {
    id: 297,
    difficulty: "medium",
    category: "Spring Boot",
    question: "What is the purpose of the 'META-INF/spring.factories' file?",
    options: [
      "To store user data",
      "To register auto-configurations and listeners in older versions of Spring Boot (or for backward compatibility)",
      "To encrypt the JAR",
      "To list the project dependencies"
    ],
    answer: 1,
    explanation: "It is the mechanism Spring Boot uses to find and load configuration classes in external JAR libraries."
  },
  {
    id: 298,
    difficulty: "hard",
    category: "ORM/Hibernate",
    question: "What is the '@Inheritance(strategy = InheritanceType.JOINED)' strategy?",
    options: [
      "All classes share one table",
      "Subclasses have their own tables containing only their specific fields; parent fields are in a separate table",
      "There are no tables",
      "A table for each user"
    ],
    answer: 1,
    explanation: "This is the most normalized strategy but requires JOIN operations to fetch a complete subclass entity."
  },
  {
    id: 299,
    difficulty: "medium",
    category: "Microservices",
    question: "What is the 'Ambassador Pattern'?",
    options: [
      "A political strategy",
      "A helper service that handles common tasks like logging, monitoring, and security for the main service",
      "A way to rename a service",
      "A type of database"
    ],
    answer: 1,
    explanation: "The Ambassador acts as a proxy that represents the service to the outside world, often handling retries and circuit breaking."
  },
  {
    id: 300,
    difficulty: "hard",
    category: "Java Core",
    question: "What is the 'Java Service Loader' mechanism?",
    options: [
      "A way to load a car",
      "A facility to find and load implementations of an interface at runtime using 'META-INF/services'",
      "A tool to download Java",
      "A memory management system"
    ],
    answer: 1,
    explanation: "It is the basis for modularity in Java, allowing libraries to provide plugins or drivers (like JDBC drivers) without hardcoding."
  },
/* ====================================================== 
     Topics: JDBC, Bean Lifecycle, Indexing, Async Microservices
     ====================================================== */
  {
    id: 301,
    difficulty: "medium",
    category: "JDBC",
    question: "Why is 'PreparedStatement' preferred over a standard 'Statement' in JDBC?",
    options: [
      "It is easier to write manually",
      "It prevents SQL Injection by pre-compiling the query and using placeholders (?)",
      "It only works with SELECT statements and is therefore safer",
      "It doesn't require an active database connection"
    ],
    answer: 1,
    explanation: "PreparedStatement pre-compiles the SQL query on the database side, which improves performance for repeated execution and ensures that user input is treated as data rather than executable code."
  },
  {
    id: 302,
    difficulty: "medium",
    category: "JDBC",
    question: "What is the difference between executeQuery(), executeUpdate(), and execute() in JDBC?",
    options: [
      "They are identical and can be used interchangeably",
      "executeQuery returns a ResultSet; executeUpdate returns an int (rows affected); execute returns a boolean indicating the result type",
      "execute is for stored procedures only; the others are for standard SQL",
      "executeUpdate is used to upgrade the JDBC driver version"
    ],
    answer: 1,
    explanation: "executeQuery is for SELECT statements. executeUpdate is for DML (INSERT/UPDATE/DELETE). execute is a general-purpose method that can handle both, returning true if the first result is a ResultSet."
  },
  {
    id: 303,
    difficulty: "hard",
    category: "Spring Core",
    question: "What happens by default when a 'Prototype' scoped bean is injected into a 'Singleton' scoped bean?",
    options: [
      "A new instance of the Prototype bean is created every time it is used",
      "The Prototype bean behaves like a Singleton because it is only injected once during the Singleton's initialization",
      "Spring throws a BeanCreationException due to scope mismatch",
      "The Singleton bean is automatically converted to Prototype scope"
    ],
    answer: 1,
    explanation: "Because the Singleton bean is instantiated only once, the injection occurs only once. To get a fresh Prototype instance every time, you must use @Lookup or ObjectProvider."
  },
  {
    id: 304,
    difficulty: "medium",
    category: "Spring Core",
    question: "In the Spring Bean Lifecycle, which methods are called immediately before '@PostConstruct'?",
    options: [
      "The destroy() method",
      "The Aware interfaces (e.g., BeanNameAware, BeanFactoryAware)",
      "The custom init-method defined in XML",
      "The Garbage Collector"
    ],
    answer: 1,
    explanation: "Aware interfaces are used to 'inform' the bean about its environment and are executed after dependency injection but before any initialization methods like @PostConstruct."
  },
  {
    id: 305,
    difficulty: "hard",
    category: "ORM/Hibernate",
    question: "What is the primary difference between Hibernate's First Level Cache (L1) and Second Level Cache (L2)?",
    options: [
      "L1 is for primitive types; L2 is for Object types",
      "L1 is session-scoped and mandatory; L2 is session-factory scoped and shared across sessions",
      "L2 is faster because it is stored in the database",
      "L1 is managed by the developer; L2 is managed by the OS"
    ],
    answer: 1,
    explanation: "L1 cache is local to a specific Session. L2 cache is a global cache for the application (e.g., Ehcache/Redis) and reduces database hits for frequently read data across different sessions."
  },
  {
    id: 306,
    difficulty: "medium",
    category: "Spring Boot",
    question: "What is the requirement for the @Async annotation to work in a Spring Boot application?",
    options: [
      "You must add @EnableAsync to a configuration class",
      "It works automatically with no configuration",
      "It only works with private methods",
      "The method must return a String"
    ],
    answer: 0,
    explanation: "@EnableAsync is required to detect the @Async annotation and trigger the creation of a proxy to run the method in a separate thread."
  },
  {
    id: 307,
    difficulty: "hard",
    category: "Microservices",
    question: "When using '@Async' in Spring Boot, what is a common pitfall regarding 'Self-Invocation'?",
    options: [
      "It causes a stack overflow",
      "Calling an @Async method from within the same class bypasses the proxy, meaning the method runs synchronously",
      "It requires the method to be static",
      "It only works with private methods"
    ],
    answer: 1,
    explanation: "Spring uses AOP proxies for @Async. If you call the method from within the same class (this.method()), you bypass the proxy, and the task will not be executed in a separate thread."
  },
  {
    id: 308,
    difficulty: "medium",
    category: "Spring Boot",
    question: "What happens to the SecurityContext (authenticated user) when a method is called with @Async?",
    options: [
      "It is automatically copied to the new thread",
      "It is lost because the new thread has its own context, unless specifically configured to propagate",
      "The application crashes",
      "The user is automatically logged out"
    ],
    answer: 1,
    explanation: "Threads do not share ThreadLocal variables by default. To propagate security or tracing contexts, you must configure a specific TaskDecorator."
  },
  {
    id: 309,
    difficulty: "hard",
    category: "Database",
    question: "What is the 'Leftmost Prefix' rule for a composite index on (Column_A, Column_B, Column_C)?",
    options: [
      "The index can only be used if all three columns are in the WHERE clause",
      "The index can optimize queries for (A), (A, B), or (A, B, C), but NOT for queries filtering only on (B) or (C)",
      "The index only works if the columns are sorted alphabetically in the table",
      "The index is used for the column with the longest name first"
    ],
    answer: 1,
    explanation: "Composite indexes are ordered. A query must filter by the first column in the index for the database to use the index efficiently to find subsequent columns."
  },
  {
    id: 310,
    difficulty: "medium",
    category: "Database",
    question: "What is a 'Covering Index' and how does it improve performance?",
    options: [
      "It is an index that covers the primary key only",
      "It is an index that contains all columns requested by a query, allowing the database to skip reading the actual table rows",
      "It is an index that encrypts the data",
      "It is an index that automatically updates all other indexes"
    ],
    answer: 1,
    explanation: "If an index contains all fields needed for the SELECT and WHERE clauses, the database performs an 'Index-Only Scan,' which avoids expensive row fetches from the disk."
  },
  {
    id: 311,
    difficulty: "hard",
    category: "Database",
    question: "Why should you generally avoid creating an index on a column with 'Low Cardinality' (e.g., a boolean)?",
    options: [
      "It consumes too much RAM",
      "The database engine often determines that a full table scan is more efficient than using a non-selective index",
      "Low cardinality columns cannot be indexed in SQL",
      "It causes the database to crash during high traffic"
    ],
    answer: 1,
    explanation: "If a value appears in a large percentage of rows (like 50%), searching the index and then jumping to table pages is usually slower than just reading the whole table."
  },
  {
    id: 312,
    difficulty: "medium",
    category: "JDBC",
    question: "In JDBC, what is the purpose of 'Batch Processing'?",
    options: [
      "To run queries at a scheduled time at night",
      "To group multiple SQL statements together and send them to the database in one network call",
      "To backup the database automatically",
      "To convert SQL queries into JSON"
    ],
    answer: 1,
    explanation: "Batch processing (addBatch/executeBatch) allows sending multiple operations in one network round-trip, drastically increasing performance for bulk inserts/updates."
  },
  {
    id: 313,
    difficulty: "hard",
    category: "ORM/Hibernate",
    question: "Which Transaction Propagation type ensures a method always runs in a new transaction, suspending the existing one?",
    options: [
      "PROPAGATION_REQUIRED",
      "PROPAGATION_REQUIRES_NEW",
      "PROPAGATION_MANDATORY",
      "PROPAGATION_NESTED"
    ],
    answer: 1,
    explanation: "REQUIRES_NEW starts a new, independent transaction. If the inner transaction fails, it can be handled without necessarily rolling back the outer transaction."
  },
  {
    id: 314,
    difficulty: "medium",
    category: "Microservices",
    question: "What is 'Eventual Consistency' in the context of asynchronous microservices?",
    options: [
      "The system will never be consistent",
      "Data across services will eventually become consistent after some time, rather than being updated instantly",
      "All databases are updated at the exact same microsecond",
      "It is a bug in the system"
    ],
    answer: 1,
    explanation: "In distributed systems, we trade immediate consistency (ACID) for availability. Services sync up via events, leading to a small delay where data might be briefly inconsistent."
  },
  {
    id: 315,
    difficulty: "hard",
    category: "Microservices",
    question: "In asynchronous communication, how does the 'Transactional Outbox' pattern ensure reliability?",
    options: [
      "By sending the message to Kafka before saving to the database",
      "By saving the event in a local database table as part of the same transaction as the business logic",
      "By using only synchronous REST calls",
      "By encrypting the message broker"
    ],
    answer: 1,
    explanation: "It ensures atomicity: either both business data and the event are saved, or neither is. A separate relayer then publishes messages from the outbox table to the broker."
  },
  /* ======================================================
     JAVA & SPRING BOOT MASTER QUESTION BANK (Batch 8/6)
     Topics: Concurrency, Collections Internals, SOLID, Design Patterns
     ====================================================== */
  {
    id: 316,
    difficulty: "hard",
    category: "Java Core",
    question: "What is the primary purpose of the 'volatile' keyword in Java multithreading?",
    options: [
      "To make a variable thread-safe and atomic",
      "To ensure visibility of variable changes across threads by preventing local caching",
      "To lock a block of code so only one thread can enter",
      "To prevent a variable from being garbage collected"
    ],
    answer: 1,
    explanation: "Volatile ensures that every read of a variable comes from main memory and every write goes directly to main memory, preventing threads from seeing stale cached values. It does NOT ensure atomicity."
  },
  {
    id: 317,
    difficulty: "hard",
    category: "Java Core",
    question: "How does 'ReentrantLock' provide more flexibility than the 'synchronized' keyword?",
    options: [
      "It is faster in all scenarios",
      "It is automatically released by the JVM",
      "It offers features like tryLock() with timeouts, fair locking, and multiple Condition variables",
      "It can only be used on classes, not methods"
    ],
    answer: 2,
    explanation: "Unlike synchronized, ReentrantLock allows for non-blocking lock attempts (tryLock), the ability to interrupt a thread waiting for a lock, and fairness policies to prevent thread starvation."
  },
  {
    id: 318,
    difficulty: "hard",
    category: "Java Core",
    question: "In Java 8+, what happens to a HashMap bucket (Node) when the number of items exceeds the 'TREEIFY_THRESHOLD'?",
    options: [
      "The map size is doubled immediately",
      "The bucket is converted from a linked list to a balanced Red-Black Tree to improve search time from O(n) to O(log n)",
      "The extra items are moved to a new bucket",
      "An Exception is thrown"
    ],
    answer: 1,
    explanation: "To prevent performance degradation during high collision scenarios, Java 8 converts lists to trees once a bucket reaches 8 entries (provided the total map capacity is at least 64)."
  },
  {
    id: 319,
    difficulty: "medium",
    category: "Java Core",
    question: "What is the difference between ConcurrentHashMap and Collections.synchronizedMap()?",
    options: [
      "ConcurrentHashMap locks the entire map; synchronizedMap locks segments",
      "ConcurrentHashMap uses fine-grained locking (segments or CAS) allowing concurrent reads/writes; synchronizedMap locks the whole object",
      "synchronizedMap is faster for multithreaded apps",
      "ConcurrentHashMap allows null keys and values"
    ],
    answer: 1,
    explanation: "ConcurrentHashMap allows multiple threads to access different parts of the map simultaneously without blocking each other, whereas synchronizedMap requires every thread to wait for a single global lock."
  },
  {
    id: 320,
    difficulty: "hard",
    category: "Java Core",
    question: "Which of the following describes a 'Fail-Safe' iterator?",
    options: [
      "It throws a ConcurrentModificationException if the collection is modified during iteration",
      "It works on a clone/snapshot of the collection (e.g., CopyOnWriteArrayList) and does not throw exceptions if the original is modified",
      "It prevents any other thread from modifying the collection",
      "It only works with primitive types"
    ],
    answer: 1,
    explanation: "Fail-safe iterators operate on a copy of the data. This allows iteration to continue safely even if the original collection is modified by another thread."
  },
  {
    id: 321,
    difficulty: "hard",
    category: "Java Core",
    question: "According to the 'Liskov Substitution Principle' (L in SOLID), what must be true for a subclass?",
    options: [
      "A subclass must always override every method of the parent",
      "A subclass should be able to replace its parent class without breaking the application's correctness",
      "A subclass should have more methods than the parent",
      "Private methods in the parent must be protected in the child"
    ],
    answer: 1,
    explanation: "LSP states that objects of a superclass should be replaceable with objects of its subclasses without affecting the functionality from the client's perspective."
  },
  {
    id: 322,
    difficulty: "medium",
    category: "Design Patterns",
    question: "Which pattern would you use to define a family of algorithms, encapsulate each one, and make them interchangeable at runtime?",
    options: [
      "Singleton Pattern",
      "Strategy Pattern",
      "Observer Pattern",
      "Factory Pattern"
    ],
    answer: 1,
    explanation: "The Strategy pattern allows a client to choose an algorithm implementation (like different payment methods) at runtime via composition."
  },
  {
    id: 323,
    difficulty: "hard",
    category: "Design Patterns",
    question: "What is the primary difference between the 'Adapter' and 'Decorator' patterns?",
    options: [
      "Adapter adds new behavior; Decorator changes the interface",
      "Adapter converts one interface to another; Decorator adds new responsibilities to an object without changing its interface",
      "They are identical",
      "Decorator is only used for UI components"
    ],
    answer: 1,
    explanation: "Adapter is about 'matching' two incompatible interfaces. Decorator is about 'enhancing' or adding features to an existing object dynamically."
  },
  {
    id: 324,
    difficulty: "medium",
    category: "Java Core",
    question: "What is the role of 'ThreadLocal' in Java?",
    options: [
      "To share a variable globally across all threads",
      "To provide thread-local variables where each thread has its own independently initialized copy",
      "To lock a thread during execution",
      "To increase the priority of a specific thread"
    ],
    answer: 1,
    explanation: "ThreadLocal is commonly used to store thread-specific data like Transaction IDs or User Sessions, ensuring they are not shared or corrupted by other threads."
  },
  {
    id: 325,
    difficulty: "hard",
    category: "Java Core",
    question: "What are common signs of a 'Memory Leak' in a Java application?",
    options: [
      "The application runs out of disk space",
      "The 'Old Gen' memory usage steadily increases over time and does not drop after a Full GC",
      "The CPU usage drops to 0%",
      "The application restarts every 5 minutes"
    ],
    answer: 1,
    explanation: "Memory leaks occur when objects are no longer needed but remain reachable (e.g., in a static List), preventing the Garbage Collector from reclaiming them."
  },
  {
    id: 326,
    difficulty: "medium",
    category: "Microservices",
    question: "In Microservices, what is the role of an 'API Gateway' compared to a 'Service Mesh'?",
    options: [
      "They are the same thing",
      "API Gateway handles North-South traffic (client to server); Service Mesh handles East-West traffic (service to service)",
      "Service Mesh is for UI only",
      "API Gateway is used to store database passwords"
    ],
    answer: 1,
    explanation: "The Gateway is the entry point for external clients. A Service Mesh (like Istio) manages internal communication, security, and observability between the microservices themselves."
  },
  {
    id: 327,
    difficulty: "hard",
    category: "Database",
    question: "What is the main difference between a 'Clustered' and 'Non-Clustered' index?",
    options: [
      "Clustered indexes are slower",
      "A Clustered index determines the physical order of data in the table; a Non-Clustered index is a separate structure with pointers to the data",
      "You can have many Clustered indexes but only one Non-Clustered index",
      "Non-Clustered indexes cannot be used for strings"
    ],
    answer: 1,
    explanation: "Because a Clustered index physically sorts the table rows, there can only be one per table (usually the Primary Key). Non-Clustered indexes are like a book's index at the back."
  },
  {
    id: 328,
    difficulty: "hard",
    category: "Database",
    question: "Which SQL Isolation Level prevents 'Non-Repeatable Reads' but might still allow 'Phantom Reads'?",
    options: [
      "Read Uncommitted",
      "Read Committed",
      "Repeatable Read",
      "Serializable"
    ],
    answer: 2,
    explanation: "Repeatable Read ensures that if you read a row twice, the data won't change. However, it doesn't prevent new rows (phantoms) from being added to the range by another transaction."
  },
  {
    id: 329,
    difficulty: "medium",
    category: "Database",
    question: "What is the requirement for a table to be in Third Normal Form (3NF)?",
    options: [
      "It must have a Primary Key",
      "It must be in 2NF and have no transitive functional dependencies (non-key columns must depend only on the primary key)",
      "It must not have any NULL values",
      "It must be split into at least 10 tables"
    ],
    answer: 1,
    explanation: "3NF ensures that data is non-redundant. Non-key attributes must not depend on other non-key attributes; they must depend 'on the key, the whole key, and nothing but the key'."
  },
  {
    id: 330,
    difficulty: "medium",
    category: "Algorithms",
    question: "Which data structure is most efficient for implementing an LRU (Least Recently Used) Cache?",
    options: [
      "A simple Array",
      "A HashMap combined with a Doubly Linked List (or a LinkedHashMap in Java)",
      "A Binary Search Tree",
      "A Stack"
    ],
    answer: 1,
    explanation: "A HashMap provides O(1) lookup, and a Doubly Linked List allows O(1) removal and addition of elements to track the order of access."
  }, 
];

// --- TOP 100 INTERVIEW INDICES ---
// These indices point to unique, high-value questions from the bank for rapid interview prep.
// Covering: Java Core (17/21), Spring Boot, Microservices, Security, and JPA/Hibernate.
const hotsQuestions = [
    // 1. Java Core & Modern Features (Sealed, Records, Loom, Memory) - 15 indices
    0, 1, 6, 40, 43, 47, 51, 55, 60, 65, 152, 155, 217, 220, 329,

    // 2. Spring Boot Core & Dependency Injection - 15 indices
    2, 7, 9, 41, 44, 49, 50, 54, 58, 64, 151, 154, 190, 218, 225,

    // 3. Microservices & Resiliency Patterns (Saga, Circuit Breaker) - 15 indices
    3, 8, 46, 52, 57, 62, 156, 219, 282, 295, 313, 314, 215, 216, 223,

    // 4. Security, JWT & OAuth2 - 10 indices
    4, 5, 45, 61, 150, 188, 281, 189, 99, 48,

    // 5. JPA, Hibernate & Transaction Management - 15 indices
    53, 59, 67, 100, 104, 222, 297, 312, 327, 328, 56, 63, 66, 101, 105,

    // 6. Breadth Coverage (Collections, Web, Docker, Testing, Algorithms) - 30 indices
    10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 
    20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 
    30, 31, 32, 33, 34, 35, 36, 37, 330, 325
];
