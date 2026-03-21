const questionBank = [
  // --- TYPESCRIPT QUESTIONS (1-25) ---
  {
    id: 1,
    difficulty: "easy",
    category: "typescript_basics",
    question: "In TypeScript, what is the main difference between 'interface' and 'type' aliases?",
    options: [
      "Interfaces can only describe objects, while types can describe anything",
      "Types can be merged (declaration merging), but interfaces cannot",
      "Interfaces can be merged via declaration merging, but types cannot be changed once created",
      "There is no difference at all"
    ],
    answer: 2,
    explanation: "Interfaces support declaration merging (defining the same interface name multiple times results in a single merged interface). Type aliases do not support this.",
    hint: "Think about what happens when you declare the same name twice."
  },
  {
    id: 2,
    difficulty: "medium",
    category: "typescript_types",
    question: "Scenario: You are receiving data from an external API where the structure is unknown. Which type is safer to use for the response variable?",
    options: ["any", "unknown", "object", "never"],
    answer: 1,
    explanation: "'unknown' is the type-safe counterpart of 'any'. You cannot perform operations on an 'unknown' variable without first narrowing its type.",
    hint: "Safe version of 'any'."
  },
  {
    id: 3,
    difficulty: "medium",
    category: "typescript_generics",
    question: "What does the following snippet represent?\n\nfunction identity<T>(arg: T): T {\n  return arg;\n}",
    options: [
      "A function that only accepts strings",
      "A generic function that captures the type of the argument to ensure the return type is the same",
      "A type assertion",
      "An error because T is not defined"
    ],
    answer: 1,
    explanation: "Generics allow components to work over a variety of types rather than a single one, while maintaining type information.",
    hint: "Variable types."
  },
  {
    id: 4,
    difficulty: "hard",
    category: "typescript_advanced",
    question: "What is the purpose of the 'infer' keyword in TypeScript?",
    options: [
      "To cast a variable to a specific type",
      "To declare a variable inside a conditional type to be used in the 'true' branch",
      "To ignore type checking for a specific line",
      "To import types from another module"
    ],
    answer: 1,
    explanation: "'infer' is used within conditional types to extract or 'infer' a type from another type (e.g., getting the return type of a function).",
    hint: "Used with 'extends' in conditional types."
  },
  {
    id: 5,
    difficulty: "medium",
    category: "typescript_utility",
    question: "Scenario: You have an interface 'User' with 5 required properties. You want to create a 'UpdateUserDto' where all these properties are optional. Which utility type is best?",
    options: ["Pick<User>", "Omit<User>", "Partial<User>", "Readonly<User>"],
    answer: 2,
    explanation: "Partial<T> constructs a type with all properties of T set to optional.",
    hint: "Part of the whole."
  },
  {
    id: 6,
    difficulty: "easy",
    category: "typescript_basics",
    question: "Which operator is used for 'Non-null assertion' in TypeScript?",
    options: ["?", "!", "??", "||"],
    answer: 1,
    explanation: "The '!' operator tells the compiler that you are certain a value is not null or undefined, even if the type checker thinks it could be.",
    hint: "Asserting existence."
  },
  {
    id: 7,
    difficulty: "medium",
    category: "typescript_enums",
    question: "What is the value of 'Direction.Down' in this enum?\n\nenum Direction {\n  Up = 1,\n  Down,\n  Left,\n  Right\n}",
    options: ["0", "1", "2", "undefined"],
    answer: 2,
    explanation: "Numeric enums auto-increment from the previous value. Since Up is 1, Down is 2.",
    hint: "Incremental values."
  },
  {
    id: 8,
    difficulty: "hard",
    category: "typescript_types",
    question: "What is a 'Discriminated Union' in TypeScript?",
    options: [
      "A union type where every member has a common literal property used to narrow the type",
      "A union of only strings",
      "A way to hide private properties in a union",
      "A method for joining two arrays"
    ],
    answer: 0,
    explanation: "By including a common literal property (like 'kind' or 'type'), TypeScript can narrow down which specific member of the union you are working with in a switch/if block.",
    hint: "Common literal property."
  },
  {
    id: 9,
    difficulty: "medium",
    category: "typescript_operators",
    question: "What does 'keyof T' return?",
    options: [
      "The values of the object T",
      "A union of the keys (property names) of type T",
      "The length of the object T",
      "A boolean indicating if the key exists"
    ],
    answer: 1,
    explanation: "The keyof operator takes an object type and produces a string or numeric literal union of its keys.",
    hint: "Literal union of property names."
  },
  {
    id: 10,
    difficulty: "hard",
    category: "typescript_advanced",
    question: "What is the result of 'ReturnType<() => string>'?",
    options: ["Function", "any", "string", "Promise<string>"],
    answer: 2,
    explanation: "The ReturnType utility extracts the return type of a function type.",
    hint: "What the function gives back."
  },
  {
    id: 11,
    difficulty: "medium",
    category: "typescript_classes",
    question: "Scenario: You want a class property to be accessible within the class and its subclasses, but not from outside instances. Which modifier do you use?",
    options: ["private", "public", "protected", "readonly"],
    answer: 2,
    explanation: "'protected' allows access within the class and any classes that extend it.",
    hint: "Inheritance-friendly restriction."
  },
  {
    id: 12,
    difficulty: "easy",
    category: "typescript_basics",
    question: "How do you define an array of strings in TypeScript?",
    options: ["string[]", "Array<string>", "Both are correct", "list<string>"],
    answer: 2,
    explanation: "Both 'string[]' and 'Array<string>' are valid syntax for defining an array of a specific type.",
    hint: "Two ways to write it."
  },
  {
    id: 13,
    difficulty: "hard",
    category: "typescript_advanced",
    question: "What is a 'Mapped Type'?",
    options: [
      "A type that converts an array to a Map object",
      "A type that creates new types based on the properties of an existing type",
      "A type for geographic data",
      "A way to map over a list in a template"
    ],
    answer: 1,
    explanation: "Mapped types allow you to create a new type by iterating over the keys of an existing one (e.g., making all keys readonly).",
    hint: "Transforming keys into new types."
  },
  {
    id: 14,
    difficulty: "medium",
    category: "typescript_utility",
    question: "Which utility type would you use to create a type from 'User' but only including the 'id' and 'email' properties?",
    options: ["Omit<User, 'id' | 'email'>", "Pick<User, 'id' | 'email'>", "Partial<User>", "Exclude<User, 'name'>"],
    answer: 1,
    explanation: "Pick<T, K> creates a type by picking a set of properties K from T.",
    hint: "Selecting specific fields."
  },
  {
    id: 15,
    difficulty: "medium",
    category: "typescript_guards",
    question: "Scenario: You have a variable 'val' of type 'string | number'. How do you safely call '.toUpperCase()' on it?",
    options: [
      "val.toUpperCase()",
      "if (typeof val === 'string') { val.toUpperCase() }",
      "(val as string).toUpperCase()",
      "val!"
    ],
    answer: 1,
    explanation: "Using 'typeof' is a built-in type guard that narrows the type within the block.",
    hint: "Narrowing the union."
  },
  {
    id: 16,
    difficulty: "hard",
    category: "typescript_advanced",
    question: "What is the 'never' type used for?",
    options: [
      "For variables that are null",
      "For functions that never return (e.g., they always throw an error or have an infinite loop)",
      "As a replacement for 'any'",
      "To declare a variable that cannot be changed"
    ],
    answer: 1,
    explanation: "The 'never' type represents the type of values that never occur.",
    hint: "Impossible state."
  },
  {
    id: 17,
    difficulty: "medium",
    category: "typescript_decorators",
    question: "In TypeScript, what must be enabled in 'tsconfig.json' to use decorators?",
    options: ["allowJs", "experimentalDecorators", "strict", "esModuleInterop"],
    answer: 1,
    explanation: "Decorators are still an experimental feature and require 'experimentalDecorators' to be set to true.",
    hint: "Experimental flag."
  },
  {
    id: 18,
    difficulty: "easy",
    category: "typescript_basics",
    question: "What is a Tuple in TypeScript?",
    options: [
      "A special kind of object",
      "An array with a fixed number of elements whose types are known",
      "A way to iterate over objects",
      "Another name for a Class"
    ],
    answer: 1,
    explanation: "Tuples allow you to express an array where the type of a fixed number of elements is known, such as [string, number].",
    hint: "Fixed-length, fixed-type array."
  },
  {
    id: 19,
    difficulty: "medium",
    category: "typescript_advanced",
    question: "What does the 'readonly' modifier do on an interface property?",
    options: [
      "Makes the property invisible",
      "Prevents the property from being reassigned after initialization",
      "Encrypts the property",
      "Only allows numbers"
    ],
    answer: 1,
    explanation: "Readonly properties can only be modified when an object is first created.",
    hint: "Immutable property."
  },
  {
    id: 20,
    difficulty: "hard",
    category: "typescript_generics",
    question: "How do you constrain a generic type T to ensure it has a '.length' property?",
    options: [
      "T extends { length: number }",
      "T = { length: number }",
      "T instanceof Array",
      "T requires length"
    ],
    answer: 0,
    explanation: "Using 'extends' in a generic declaration allows you to restrict the types that can be passed to it.",
    hint: "Generic constraints."
  },
  {
    id: 21,
    difficulty: "medium",
    category: "typescript_utility",
    question: "What is the result of 'Exclude<'a' | 'b' | 'c', 'a'>'?",
    options: ["'a'", "'b' | 'c'", "undefined", "string"],
    answer: 1,
    explanation: "Exclude constructs a type by excluding from UnionType all union members that are assignable to ExcludedMembers.",
    hint: "Removing from union."
  },
  {
    id: 22,
    difficulty: "medium",
    category: "typescript_scenarios",
    question: "You want to create a type for an object where the keys are unknown strings but the values must all be numbers. What is the best way?",
    options: [
      "{ [key: string]: number }",
      "Record<string, number>",
      "Both are correct",
      "Map<string, number>"
    ],
    answer: 2,
    explanation: "Both index signatures and the Record utility type can achieve this. Record is often preferred for readability.",
    hint: "Mapping keys to values."
  },
  {
    id: 23,
    difficulty: "hard",
    category: "typescript_advanced",
    question: "What is the difference between 'module' and 'namespace' in TypeScript?",
    options: [
      "Namespaces are the modern standard (ES6)",
      "Modules are the modern standard (ES6); Namespaces are a legacy TS-specific way to organize code",
      "They are identical",
      "Modules only work on the server"
    ],
    answer: 1,
    explanation: "Namespaces (formerly 'Internal Modules') are generally discouraged in favor of ES Modules.",
    hint: "Internal vs External modules."
  },
  {
    id: 24,
    difficulty: "medium",
    category: "typescript_classes",
    question: "Can an abstract class be instantiated in TypeScript?",
    options: ["Yes, always", "No, it must be extended by another class", "Only if it has no methods", "Only in strict mode"],
    answer: 1,
    explanation: "Abstract classes are base classes from which other classes may be derived. They cannot be instantiated directly.",
    hint: "Base for derivation only."
  },
  {
    id: 25,
    difficulty: "hard",
    category: "typescript_advanced",
    question: "What happens during 'Type Erasure' in TypeScript?",
    options: [
      "All type information is removed during compilation to JavaScript",
      "The code is deleted",
      "Types are converted to strings",
      "Memory is cleared"
    ],
    answer: 0,
    explanation: "JavaScript does not have a type system, so TS types only exist during development and build time; they don't exist in the browser/Node.js.",
    hint: "Compile-time vs Run-time."
  },

  // --- NESTJS QUESTIONS (26-50) ---
  {
    id: 26,
    difficulty: "easy",
    category: "nestjs_basics",
    question: "What is the primary architectural pattern used by NestJS?",
    options: ["Monolithic", "Modular", "Peer-to-Peer", "Functional only"],
    answer: 1,
    explanation: "NestJS uses a modular architecture where related components (controllers, services, etc.) are grouped into modules.",
    hint: "The @Module decorator."
  },
  {
    id: 27,
    difficulty: "medium",
    category: "nestjs_controllers",
    question: "Which decorator is used to define a class that handles incoming HTTP requests?",
    options: ["@Injectable()", "@Controller()", "@Module()", "@Service()"],
    answer: 1,
    explanation: "Controllers are responsible for handling incoming requests and returning responses to the client.",
    hint: "Handles routes."
  },
  {
    id: 28,
    difficulty: "medium",
    category: "nestjs_providers",
    question: "In NestJS, how is Dependency Injection typically performed?",
    options: [
      "Using the 'new' keyword",
      "Through the class constructor",
      "In the 'main.ts' file only",
      "By manually importing files"
    ],
    answer: 1,
    explanation: "NestJS resolves dependencies by looking at the constructor parameters and finding the corresponding provider in the module.",
    hint: "Constructor-based injection."
  },
  {
    id: 29,
    difficulty: "easy",
    category: "nestjs_providers",
    question: "What does the '@Injectable()' decorator do?",
    options: [
      "It marks a class as a controller",
      "It marks a class as a provider that can be managed by the Nest IoC container",
      "It makes the class a database model",
      "It allows the class to be exported to other projects"
    ],
    answer: 1,
    explanation: "Providers (like Services) must be decorated with @Injectable() so Nest can inject them into other classes.",
    hint: "Required for services."
  },
  {
    id: 30,
    difficulty: "medium",
    category: "nestjs_pipes",
    question: "Scenario: You need to ensure a URL parameter 'id' is converted from a string to a number. Which NestJS component should you use?",
    options: ["Guard", "Interceptor", "Pipe", "Middleware"],
    answer: 2,
    explanation: "Pipes are used for transformation (converting input data) and validation.",
    hint: "Transformation and Validation."
  },
  {
    id: 31,
    difficulty: "hard",
    category: "nestjs_guards",
    question: "What is the main purpose of a 'Guard' in NestJS?",
    options: [
      "To transform data",
      "To log every request",
      "To determine whether a request will be handled by the route handler (Authorization)",
      "To connect to the database"
    ],
    answer: 2,
    explanation: "Guards have a single responsibility: they determine whether a given request meets certain conditions (like authentication).",
    hint: "Permission checker."
  },
  {
    id: 32,
    difficulty: "medium",
    category: "nestjs_interceptors",
    question: "You want to wrap every response from your API in a '{ data: ... }' object. What is the best tool for this?",
    options: ["Pipes", "Exception Filters", "Interceptors", "Guards"],
    answer: 2,
    explanation: "Interceptors can transform the result returned from a function and evolve the response.",
    hint: "Post-processing the response."
  },
  {
    id: 33,
    difficulty: "hard",
    category: "nestjs_exception_filters",
    question: "Scenario: You want to catch all 'HttpException' errors and format them into a custom JSON structure. What should you create?",
    options: ["A Custom Pipe", "A Custom Guard", "An Exception Filter", "A Middleware"],
    answer: 2,
    explanation: "Exception filters are specifically designed to catch and process exceptions thrown across the application.",
    hint: "Error catching layer."
  },
  {
    id: 34,
    difficulty: "medium",
    category: "nestjs_modules",
    question: "How do you make a provider available to other modules that import your module?",
    options: [
      "Add it to the 'imports' array",
      "Add it to the 'providers' array AND the 'exports' array",
      "Add it to the 'controllers' array",
      "Providers are automatically exported"
    ],
    answer: 1,
    explanation: "Only providers listed in the 'exports' array are visible to modules that import the owner module.",
    hint: "The 'exports' property."
  },
  {
    id: 35,
    difficulty: "hard",
    category: "nestjs_advanced",
    question: "What is 'Circular Dependency' in NestJS and how is it solved?",
    options: [
      "When two classes depend on each other; solved with 'forwardRef()'",
      "When a loop never ends; solved with 'break'",
      "When the database crashes; solved with 'retry'",
      "When two modules have the same name; solved by renaming"
    ],
    answer: 0,
    explanation: "Circular dependencies occur when A depends on B and B depends on A. 'forwardRef()' allows Nest to resolve this.",
    hint: "A -> B and B -> A."
  },
  {
    id: 36,
    difficulty: "medium",
    category: "nestjs_dto",
    question: "What is a DTO (Data Transfer Object) typically used for in NestJS?",
    options: [
      "To define the database schema",
      "To define the shape of data sent over the network and apply validation rules",
      "To write SQL queries",
      "To manage CSS styles"
    ],
    answer: 1,
    explanation: "DTOs (often used with class-validator) define the input contract for your API endpoints.",
    hint: "Input validation and shape."
  },
  {
    id: 37,
    difficulty: "hard",
    category: "nestjs_modules",
    question: "What is a 'Dynamic Module' in NestJS?",
    options: [
      "A module that changes its code at runtime",
      "A module that provides a 'forRoot' or 'register' method to be configured by the importing module",
      "A module that doesn't use decorators",
      "A module used for animations"
    ],
    answer: 1,
    explanation: "Dynamic modules allow you to pass parameters into the module to configure it (e.g., ConfigModule.forRoot()).",
    hint: "Configurable modules."
  },
  {
    id: 38,
    difficulty: "medium",
    category: "nestjs_middleware",
    question: "Where is NestJS Middleware executed in the request lifecycle?",
    options: [
      "After the controller",
      "Before the route handler and after guards",
      "Before guards, interceptors, and pipes",
      "Only when an error occurs"
    ],
    answer: 2,
    explanation: "Middleware is called before the route handler and before guards/interceptors/pipes.",
    hint: "The very first layer."
  },
  {
    id: 39,
    difficulty: "easy",
    category: "nestjs_cli",
    question: "Which CLI command generates a new service named 'users'?",
    options: ["nest g controller users", "nest g service users", "nest new users", "nest build users"],
    answer: 1,
    explanation: "'g' or 'generate' is the command to create various Nest components.",
    hint: "nest g <type> <name>"
  },
  {
    id: 40,
    difficulty: "hard",
    category: "nestjs_lifecycle",
    question: "Which lifecycle hook is called after the module's dependencies have been resolved?",
    options: ["onModuleInit()", "onApplicationBootstrap()", "constructor()", "beforeApplicationShutdown()"],
    answer: 0,
    explanation: "onModuleInit() is called once the host module's dependencies are resolved.",
    hint: "First module hook."
  },
  {
    id: 41,
    difficulty: "medium",
    category: "nestjs_providers",
    question: "What is a 'Request-scoped' provider?",
    options: [
      "A provider that lives forever",
      "A provider that is created for each incoming request and garbage collected after",
      "A provider only accessible via GET requests",
      "A provider that only works for one user"
    ],
    answer: 1,
    explanation: "By default, providers are singletons. Request-scoped providers are instantiated for every individual request.",
    hint: "New instance per request."
  },
  {
    id: 42,
    difficulty: "hard",
    category: "nestjs_advanced",
    question: "What is the difference between 'ArgumentsHost' and 'ExecutionContext'?",
    options: [
      "They are the same",
      "ArgumentsHost provides methods for retrieving arguments; ExecutionContext extends it to provide info about the current class/handler",
      "ExecutionContext is only for WebSockets",
      "ArgumentsHost is only for HTTP"
    ],
    answer: 1,
    explanation: "ExecutionContext provides more metadata about the current execution process (like which controller/method is being called).",
    hint: "Context metadata."
  },
  {
    id: 43,
    difficulty: "medium",
    category: "nestjs_testing",
    question: "Which utility is commonly used to create a mock module for unit testing in NestJS?",
    options: ["NestFactory", "Test.createTestingModule()", "MockModule", "AppModule"],
    answer: 1,
    explanation: "The '@nestjs/testing' package provides the 'Test' class to compile a module for testing purposes.",
    hint: "Standard testing utility."
  },
  {
    id: 44,
    difficulty: "hard",
    category: "nestjs_microservices",
    question: "Which decorator is used in a NestJS Microservice to handle incoming messages/events?",
    options: ["@Get()", "@MessagePattern()", "@Post()", "@Subscribe()"],
    answer: 1,
    explanation: "@MessagePattern() is used for request-response communication in microservices.",
    hint: "Pattern-based routing."
  },
  {
    id: 45,
    difficulty: "medium",
    category: "nestjs_database",
    question: "When using TypeORM with NestJS, where do you typically define the 'entities' to be used in a specific module?",
    options: [
      "In the @Module decorator's 'imports' using 'TypeOrmModule.forFeature()'",
      "In the 'main.ts' file",
      "In the controller",
      "In the 'exports' array"
    ],
    answer: 0,
    explanation: "'forFeature()' registers specific entities in the current scope.",
    hint: "Module-level entity registration."
  },
  {
    id: 46,
    difficulty: "easy",
    category: "nestjs_basics",
    question: "NestJS is heavily inspired by which Frontend framework?",
    options: ["React", "Vue", "Angular", "Svelte"],
    answer: 2,
    explanation: "NestJS borrows many concepts from Angular, such as modules, decorators, and dependency injection.",
    hint: "Module-based frontend framework."
  },
  {
    id: 47,
    difficulty: "hard",
    category: "nestjs_advanced",
    question: "What does the '@Global()' decorator do when applied to a Module?",
    options: [
      "It makes the module available across the entire application without needing to import it in other modules",
      "It uploads the module to GitHub",
      "It makes the module accessible via the 'window' object",
      "It makes the module read-only"
    ],
    answer: 0,
    explanation: "Global modules should be used sparingly. They make their exported providers available everywhere.",
    hint: "Import once, use everywhere."
  },
  {
    id: 48,
    difficulty: "medium",
    category: "nestjs_scenarios",
    question: "You want to create a custom decorator '@User()' to extract the user object from 'request.user'. Which NestJS function do you use?",
    options: ["createDecorator()", "createParamDecorator()", "new Decorator()", "@InjectUser()"],
    answer: 1,
    explanation: "createParamDecorator() is used to create decorators that can extract data from the execution context.",
    hint: "Custom parameter extractor."
  },
  {
    id: 49,
    difficulty: "hard",
    category: "nestjs_advanced",
    question: "What is the purpose of the 'Reflector' class in NestJS?",
    options: [
      "To create mirrors of the database",
      "To retrieve metadata set via decorators (e.g., @SetMetadata)",
      "To handle UI reflections",
      "To debug code performance"
    ],
    answer: 1,
    explanation: "The Reflector is often used inside Guards or Interceptors to read custom metadata attached to routes.",
    hint: "Accessing metadata."
  },
  {
    id: 50,
    difficulty: "medium",
    category: "nestjs_basics",
    question: "Which file is the entry point of a NestJS application where 'NestFactory.create()' is called?",
    options: ["app.module.ts", "app.controller.ts", "main.ts", "index.js"],
    answer: 2,
    explanation: "main.ts is the file responsible for bootstrapping the application.",
    hint: "The bootstrapping file."
  },
  // --- TYPESCRIPT QUESTIONS (51-75) ---
  {
    id: 51,
    difficulty: "medium",
    category: "typescript_utility",
    question: "Scenario: You have a type 'User' where all properties are optional. You want to create a new type where all those properties are strictly required. Which utility type do you use?",
    options: ["Required<User>", "Partial<User>", "Readonly<User>", "NonNullable<User>"],
    answer: 0,
    explanation: "Required<T> constructs a type consisting of all properties of T set to required. It is the opposite of Partial<T>.",
    hint: "Makes everything mandatory."
  },
  {
    id: 52,
    difficulty: "medium",
    category: "typescript_advanced",
    question: "What does the 'satisfies' operator (introduced in TS 4.9) do?",
    options: [
      "It casts a variable to a new type",
      "It validates that an expression matches a type without changing the resulting type of that expression",
      "It checks if a value is null at runtime",
      "It is a replacement for the 'implements' keyword in classes"
    ],
    answer: 1,
    explanation: "The 'satisfies' operator allows us to validate that the shape of an expression matches some type, but keeps the most specific type for the expression itself.",
    hint: "Type validation without losing specificity."
  },
  {
    id: 53,
    difficulty: "hard",
    category: "typescript_guards",
    question: "What is a 'Type Predicate' in TypeScript?",
    options: [
      "A boolean variable",
      "A function return type in the form 'parameterName is Type'",
      "An 'if' statement",
      "A way to predict the future value of a variable"
    ],
    answer: 1,
    explanation: "A type predicate is a special return type for a function that tells the TypeScript compiler to narrow down the type if the function returns true.",
    hint: "arg is T"
  },
  {
    id: 54,
    difficulty: "medium",
    category: "typescript_advanced",
    question: "What is the effect of using 'as const' on an object literal?",
    options: [
      "It makes the object properties readonly and prevents literal types from being widened (e.g., 'hello' becomes 'hello' not 'string')",
      "It prevents the object from being deleted",
      "It converts the object to a string",
      "It allows the object to be used in CSS"
    ],
    answer: 0,
    explanation: "Const assertions indicate to the compiler that the expression should be treated as a literal value rather than a widened type, and its properties should be readonly.",
    hint: "Deep immutability and literal types."
  },
  {
    id: 55,
    difficulty: "hard",
    category: "typescript_types",
    question: "What are 'Template Literal Types' in TypeScript?",
    options: [
      "Types used in HTML templates",
      "Types that allow building new string literal types based on string interpolation syntax",
      "A way to write multi-line strings",
      "A feature for translating code"
    ],
    answer: 1,
    explanation: "Template literal types have the same syntax as template literal strings in JavaScript, but are used in type positions to create unique string unions.",
    hint: "Type-level string interpolation."
  },
  {
    id: 56,
    difficulty: "medium",
    category: "typescript_utility",
    question: "Which utility type would you use to create a type consisting of the return types of a class constructor?",
    options: ["ReturnType<T>", "InstanceType<T>", "ThisType<T>", "ConstructorParameters<T>"],
    answer: 1,
    explanation: "InstanceType<T> extracts the instance type of a constructor function type.",
    hint: "The result of 'new Class()'."
  },
  {
    id: 57,
    difficulty: "easy",
    category: "typescript_basics",
    question: "What is the difference between 'private' (TS keyword) and '#' (ECMAScript private fields)?",
    options: [
      "There is no difference",
      "'private' is enforced only at compile-time, while '#' is enforced at runtime by JavaScript",
      "'#' only works for numbers",
      "'private' makes properties faster"
    ],
    answer: 1,
    explanation: "TypeScript's 'private' is a compile-time check that is removed after transpilation. '#' is a native JavaScript feature that provides hard runtime privacy.",
    hint: "Compile-time vs Runtime enforcement."
  },
  {
    id: 58,
    difficulty: "medium",
    category: "typescript_advanced",
    question: "What does the 'Extract<T, U>' utility type do?",
    options: [
      "Removes properties from T",
      "Constructs a type by extracting from T all union members that are assignable to U",
      "Extracts the values of an object",
      "Converts a class to an interface"
    ],
    answer: 1,
    explanation: "Extract finds the commonality between two types in a union. It is the opposite of Exclude.",
    hint: "Intersection of union members."
  },
  {
    id: 59,
    difficulty: "hard",
    category: "typescript_advanced",
    question: "Scenario: You have two interfaces 'A' and 'B'. You want a variable that contains all properties of both. Which operator do you use?",
    options: ["| (Union)", "& (Intersection)", "^ (XOR)", "+ (Addition)"],
    answer: 1,
    explanation: "An intersection type (&) combines multiple types into one, requiring the result to satisfy all members.",
    hint: "Must be both A and B."
  },
  {
    id: 60,
    difficulty: "medium",
    category: "typescript_operators",
    question: "What is the difference between '??' (Nullish Coalescing) and '||' (Logical OR)?",
    options: [
      "They are identical",
      "'??' only checks for null/undefined; '||' checks for any falsy value (0, '', false, etc.)",
      "'||' is faster than '??'",
      "'??' is only for strings"
    ],
    answer: 1,
    explanation: "Nullish coalescing only defaults the value if the left side is null or undefined, preserving other falsy values like 0 or empty strings.",
    hint: "Falsy vs Nullish."
  },
  {
    id: 61,
    difficulty: "hard",
    category: "typescript_advanced",
    question: "How do you define a function type that allows for 'Method Overloading' in TypeScript?",
    options: [
      "By using the 'overload' keyword",
      "By writing multiple function signatures followed by a single implementation",
      "By using a union type for the whole function",
      "TypeScript does not support overloading"
    ],
    answer: 1,
    explanation: "You provide multiple signatures (the overloads) and then the implementation signature. The implementation must be compatible with all overloads.",
    hint: "Multiple headers, one body."
  },
  {
    id: 62,
    difficulty: "medium",
    category: "typescript_advanced",
    question: "What is an 'Ambient Declaration' in TypeScript?",
    options: [
      "A declaration that changes based on the environment",
      "A way to tell TS about the existence of source code that doesn't exist in the current file (usually via .d.ts files)",
      "A variable that is always null",
      "A function that runs in the background"
    ],
    answer: 1,
    explanation: "Ambient declarations (using the 'declare' keyword) describe the 'shape' of existing variables or libraries that are available at runtime but not defined in the current TS context.",
    hint: "Used for external libraries."
  },
  {
    id: 63,
    difficulty: "hard",
    category: "typescript_advanced",
    question: "What is 'Covariance' in the context of TypeScript types?",
    options: [
      "When a complex type is compatible if its component types are compatible in the same direction",
      "When a type can be both a string and a number",
      "A method for compressing types",
      "A bug in the compiler"
    ],
    answer: 0,
    explanation: "Covariance refers to how the subtyping of complex types (like arrays or objects) relates to the subtyping of their components.",
    hint: "Relationship between subtypes."
  },
  {
    id: 64,
    difficulty: "medium",
    category: "typescript_types",
    question: "Which keyword is used to refer to the type of the current class inside that class, especially for fluent APIs?",
    options: ["self", "this", "super", "Class"],
    answer: 1,
    explanation: "The 'this' type can be used as a return type to allow for method chaining (fluent interface) that works correctly with inheritance.",
    hint: "Polymorphic 'this'."
  },
  {
    id: 65,
    difficulty: "hard",
    category: "typescript_advanced",
    question: "What is the purpose of 'Triple-Slash Directives' (e.g., /// <reference path='...' />)?",
    options: [
      "They are comments used for documentation",
      "They are single-line XML tags containing instructions for the compiler",
      "They are used to divide the code into sections",
      "They are for math operations"
    ],
    answer: 1,
    explanation: "Triple-slash directives are used to declare dependencies between files or to include specific types in the compilation process.",
    hint: "Compiler instructions in comments."
  },
  {
    id: 66,
    difficulty: "medium",
    category: "typescript_utility",
    question: "What is 'ReadonlyArray<T>'?",
    options: [
      "An array that can only contain strings",
      "A special array type where methods like push(), pop(), and splice() are removed",
      "An array that is stored in read-only memory",
      "A way to hide an array from the user"
    ],
    answer: 1,
    explanation: "ReadonlyArray describes an array that should not be changed. It lacks all mutating methods.",
    hint: "Immutable list."
  },
  {
    id: 67,
    difficulty: "easy",
    category: "typescript_basics",
    question: "What happens if you don't provide a type for a variable and don't initialize it?",
    options: [
      "It defaults to 'string'",
      "It defaults to 'any'",
      "It throws a syntax error immediately",
      "It becomes 'undefined' type"
    ],
    answer: 1,
    explanation: "If TypeScript cannot infer a type from an assignment, it defaults to 'any' (unless 'noImplicitAny' is enabled).",
    hint: "The catch-all type."
  },
  {
    id: 68,
    difficulty: "hard",
    category: "typescript_advanced",
    question: "How do you achieve 'Exhaustiveness Checking' in a switch statement with TypeScript?",
    options: [
      "By using a 'default' case that assigns the variable to 'never'",
      "By using the 'exhaust' keyword",
      "By checking the length of the switch",
      "TypeScript does this automatically without extra code"
    ],
    answer: 0,
    explanation: "By assigning the switched variable to a 'never' type in the 'default' case, the compiler will error if any case in a union was missed.",
    hint: "Using 'never' for safety."
  },
  {
    id: 69,
    difficulty: "medium",
    category: "typescript_classes",
    question: "Scenario: You want a class member to be visible to the class and its subclasses, but not outside. Which modifier do you use?",
    options: ["private", "public", "protected", "internal"],
    answer: 2,
    explanation: "The 'protected' modifier allows access within the class and its subclasses.",
    hint: "Middle ground between public and private."
  },
  {
    id: 70,
    difficulty: "hard",
    category: "typescript_advanced",
    question: "What are 'Recursive Type Aliases'?",
    options: [
      "Types that repeat themselves",
      "A type alias that references itself (e.g., for JSON structures or Trees)",
      "A type that causes a loop in the compiler",
      "A type that is deleted and recreated"
    ],
    answer: 1,
    explanation: "Type aliases can reference themselves, allowing for the definition of nested structures like linked lists or JSON trees.",
    hint: "Nested data structures."
  },
  {
    id: 71,
    difficulty: "medium",
    category: "typescript_utility",
    question: "What is the 'Omit<T, K>' utility type?",
    options: [
      "Constructs a type by picking all properties from T and then removing K",
      "Constructs a type by picking only properties K from T",
      "Makes properties in T optional",
      "Converts T to a string"
    ],
    answer: 0,
    explanation: "Omit<T, K> creates a new type by removing specific keys from an existing type.",
    hint: "Opposite of Pick."
  },
  {
    id: 72,
    difficulty: "medium",
    category: "typescript_basics",
    question: "What is an 'Index Signature' in an interface?",
    options: [
      "A way to sign a document",
      "A way to describe the types of properties when you don't know the exact names beforehand",
      "The first line of the interface",
      "A unique ID for the interface"
    ],
    answer: 1,
    explanation: "Index signatures (e.g., [key: string]: any) allow an object to have an arbitrary number of properties.",
    hint: "Dynamic property names."
  },
  {
    id: 73,
    difficulty: "hard",
    category: "typescript_advanced",
    question: "What does the 'readonly' modifier do when applied to a class constructor parameter?",
    options: [
      "It makes the parameter required",
      "It is a shorthand that automatically creates a readonly property on the class and initializes it",
      "It prevents the constructor from running",
      "It makes the constructor faster"
    ],
    answer: 1,
    explanation: "This is a 'Parameter Property' shorthand in TypeScript that combines declaration and initialization.",
    hint: "Constructor shorthand."
  },
  {
    id: 74,
    difficulty: "medium",
    category: "typescript_advanced",
    question: "What is the 'unknown' type primarily used for?",
    options: [
      "For variables that have no value",
      "As a type-safe alternative to 'any' for values whose type is not yet known",
      "To represent an error",
      "To represent a private variable"
    ],
    answer: 1,
    explanation: "Unlike 'any', you cannot perform operations on an 'unknown' value until you narrow its type (using typeof, instanceof, etc.).",
    hint: "Must be narrowed before use."
  },
  {
    id: 75,
    difficulty: "hard",
    category: "typescript_advanced",
    question: "What is the difference between 'type' and 'interface' regarding 'Intersection'?",
    options: [
      "Interfaces use 'extends'; types use '&'",
      "Only interfaces can be intersected",
      "Only types can be intersected",
      "There is no difference"
    ],
    answer: 0,
    explanation: "While both can achieve similar results, interfaces typically use the 'extends' keyword for composition, while type aliases use the '&' operator.",
    hint: "Extends vs Ampersand."
  },

  // --- NESTJS QUESTIONS (76-100) ---
  {
    id: 76,
    difficulty: "medium",
    category: "nestjs_providers",
    question: "In NestJS, what is a 'Value Provider' (useValue)?",
    options: [
      "A provider that only handles numbers",
      "A way to associate a fixed value (like a configuration object or mock) with a provider token",
      "A provider that calculates values",
      "A replacement for a controller"
    ],
    answer: 1,
    explanation: "The 'useValue' syntax is useful for injecting constant values, putting an external library into the Nest container, or replacing a real implementation with a mock object.",
    hint: "Constant injection."
  },
  {
    id: 77,
    difficulty: "hard",
    category: "nestjs_providers",
    question: "What is a 'Factory Provider' (useFactory) used for?",
    options: [
      "To manufacture HTML",
      "To create providers dynamically, often involving logic or depending on other providers",
      "To generate code automatically",
      "To build database tables"
    ],
    answer: 1,
    explanation: "Factory providers allow for dynamic provider creation. The factory function can accept arguments, which Nest will resolve as dependencies.",
    hint: "Dynamic dependency resolution."
  },
  {
    id: 78,
    difficulty: "medium",
    category: "nestjs_pipes",
    question: "Scenario: You want to automatically strip properties from an input object that are not defined in the DTO. Which 'ValidationPipe' option do you use?",
    options: ["disableErrorMessages: true", "whitelist: true", "transform: true", "forbidNonWhitelisted: true"],
    answer: 1,
    explanation: "The 'whitelist' option, when set to true, will automatically remove any property of the input object that does not have any decorators in the DTO.",
    hint: "Removing unknown fields."
  },
  {
    id: 79,
    difficulty: "medium",
    category: "nestjs_controllers",
    question: "Which decorator is used to set the HTTP status code for a specific route handler?",
    options: ["@Status()", "@HttpCode()", "@ResponseCode()", "@StatusCode()"],
    answer: 1,
    explanation: "The @HttpCode() decorator allows you to define a custom status code for a successful response.",
    hint: "Custom HTTP response code."
  },
  {
    id: 80,
    difficulty: "hard",
    category: "nestjs_lifecycle",
    question: "Which lifecycle hook is called just before the application is shut down?",
    options: ["onModuleDestroy()", "beforeApplicationShutdown()", "onApplicationShutdown()", "All of the above"],
    answer: 3,
    explanation: "Nest provides multiple hooks: onModuleDestroy, beforeApplicationShutdown, and onApplicationShutdown, called in that order.",
    hint: "Shutdown sequence."
  },
  {
    id: 81,
    difficulty: "medium",
    category: "nestjs_middleware",
    question: "How do you apply middleware to specific routes in a Module?",
    options: [
      "By adding it to the 'providers' array",
      "By implementing the 'NestModule' interface and using the 'configure()' method",
      "By using the @Middleware() decorator on the controller",
      "Middleware is global by default"
    ],
    answer: 1,
    explanation: "Modules that include middleware must implement the NestModule interface, which requires a configure() method to set up the MiddlewareConsumer.",
    hint: "The configure() method."
  },
  {
    id: 82,
    difficulty: "hard",
    category: "nestjs_advanced",
    question: "What is 'Scope.TRANSIENT' in NestJS?",
    options: [
      "A provider that is shared by everyone",
      "A provider that is created once per request",
      "A provider that is created every time it is injected into a class",
      "A provider that only lasts for 1 second"
    ],
    answer: 2,
    explanation: "Transient providers are not shared. Every consumer that injects a transient provider will receive a new, dedicated instance.",
    hint: "Unique instance per injection."
  },
  {
    id: 83,
    difficulty: "medium",
    category: "nestjs_advanced",
    question: "What is the 'ModuleRef' class used for?",
    options: [
      "To navigate between modules in the UI",
      "To retrieve a provider from the internal list of providers using its injection token",
      "To refresh the module",
      "To delete a module"
    ],
    answer: 1,
    explanation: "ModuleRef allows you to dynamically resolve providers within the same module scope.",
    hint: "Manual provider lookup."
  },
  {
    id: 84,
    difficulty: "medium",
    category: "nestjs_testing",
    question: "When unit testing a service, why do we use 'Test.createTestingModule' instead of just 'new Service()'?",
    options: [
      "It is faster",
      "It allows Nest to handle dependency injection and mocking within a simulated IoC container",
      "It is the only way to test private methods",
      "It compiles the code to JavaScript"
    ],
    answer: 1,
    explanation: "Using the testing module allows you to mock dependencies (using .overrideProvider()) and test the class in a realistic environment.",
    hint: "Simulating the Nest environment."
  },
  {
    id: 85,
    difficulty: "easy",
    category: "nestjs_cli",
    question: "What does the command 'nest start --watch' do?",
    options: [
      "Starts the app and opens a clock",
      "Starts the app in development mode and reloads automatically when files change",
      "Starts a timer for the build process",
      "Checks the code for errors but doesn't start it"
    ],
    answer: 1,
    explanation: "The watch flag enables 'Hot Reload' style functionality during development.",
    hint: "Development auto-reload."
  },
  {
    id: 86,
    difficulty: "hard",
    category: "nestjs_advanced",
    question: "What is the purpose of 'SetMetadata()' decorator?",
    options: [
      "To add custom data to a route or class that can be read later by a Guard or Interceptor",
      "To set the database table name",
      "To define the version of the API",
      "To add comments to the swagger documentation"
    ],
    answer: 0,
    explanation: "SetMetadata allows you to attach custom 'metadata' (key-value pairs) to handlers, which the Reflector can later extract.",
    hint: "Attaching custom info to routes."
  },
  {
    id: 87,
    difficulty: "medium",
    category: "nestjs_controllers",
    question: "How do you access the raw Request object from Express/Fastify in a NestJS controller?",
    options: ["@Req()", "@Request()", "Both are correct", "@Incoming()"],
    answer: 2,
    explanation: "Both @Req() and @Request() are decorators that inject the underlying platform-specific request object.",
    hint: "Platform-specific object."
  },
  {
    id: 88,
    difficulty: "hard",
    category: "nestjs_microservices",
    question: "Which method is used in a Microservice to send an event (fire-and-forget) instead of a request-response message?",
    options: ["send()", "emit()", "publish()", "broadcast()"],
    answer: 1,
    explanation: "In Nest microservices, 'send()' is for request-response (expects an answer), while 'emit()' is for events (no response expected).",
    hint: "Fire and forget."
  },
  {
    id: 89,
    difficulty: "medium",
    category: "nestjs_basics",
    question: "What is the default underlying HTTP platform for NestJS?",
    options: ["Express", "Fastify", "Koa", "Hapi"],
    answer: 0,
    explanation: "NestJS uses Express by default, but it is platform-agnostic and can be switched to Fastify easily.",
    hint: "The most popular Node framework."
  },
  {
    id: 90,
    difficulty: "hard",
    category: "nestjs_interceptors",
    question: "In an Interceptor, what does the 'next.handle()' method return?",
    options: ["A Promise", "An Observable", "The response object", "A string"],
    answer: 1,
    explanation: "NestJS uses RxJS Observables to handle the stream of the request/response cycle in interceptors.",
    hint: "RxJS stream."
  },
  {
    id: 91,
    difficulty: "medium",
    category: "nestjs_controllers",
    question: "How do you handle 'File Uploads' in NestJS?",
    options: [
      "By using the @Upload() decorator",
      "By using the FileInterceptor() and the @UploadedFile() decorator",
      "By reading the raw buffer from @Req()",
      "NestJS doesn't support file uploads"
    ],
    answer: 1,
    explanation: "Nest provides a built-in Interceptor based on the 'Multer' library for handling multipart/form-data.",
    hint: "Uses Multer internally."
  },
  {
    id: 92,
    difficulty: "hard",
    category: "nestjs_advanced",
    question: "What is 'CQRS' in the context of NestJS?",
    options: [
      "A way to handle CSS",
      "Command Query Responsibility Segregation - a pattern to separate read and write operations",
      "A type of database",
      "A security protocol"
    ],
    answer: 1,
    explanation: "The @nestjs/cqrs package provides a way to implement the CQRS pattern to make complex applications more manageable.",
    hint: "Commands vs Queries."
  },
  {
    id: 93,
    difficulty: "medium",
    category: "nestjs_pipes",
    question: "Which built-in pipe is used to ensure a parameter is a valid UUID?",
    options: ["ParseUuidPipe", "ValidationPipe", "UuidPipe", "ParseIntPipe"],
    answer: 0,
    explanation: "ParseUUIDPipe validates that an incoming string matches the UUID format.",
    hint: "Unique ID validator."
  },
  {
    id: 94,
    difficulty: "hard",
    category: "nestjs_advanced",
    question: "How do you enable 'Versioning' for your API in NestJS?",
    options: [
      "By renaming the files",
      "Using the 'app.enableVersioning()' method in main.ts",
      "By adding a version property to the module",
      "It is enabled by default"
    ],
    answer: 1,
    explanation: "Nest supports URI, Header, and Media Type versioning, configured via the enableVersioning method.",
    hint: "Configuration in main.ts."
  },
  {
    id: 95,
    difficulty: "medium",
    category: "nestjs_advanced",
    question: "What is the purpose of the 'ConfigService' in NestJS?",
    options: [
      "To change the computer's settings",
      "To access environment variables and configuration files in a type-safe way",
      "To configure the database schema",
      "To manage user roles"
    ],
    answer: 1,
    explanation: "ConfigService (from @nestjs/config) is the standard way to handle environment variables (like .env files).",
    hint: "Environment variable manager."
  },
  {
    id: 96,
    difficulty: "hard",
    category: "nestjs_websockets",
    question: "In NestJS WebSockets, which decorator is used to listen for an incoming message?",
    options: ["@OnMessage()", "@SubscribeMessage()", "@Listen()", "@Get()"],
    answer: 1,
    explanation: "Gateways use the @SubscribeMessage() decorator to map incoming messages to specific handlers.",
    hint: "Socket message subscription."
  },
  {
    id: 97,
    difficulty: "medium",
    category: "nestjs_advanced",
    question: "What is the 'Logger' class in NestJS used for?",
    options: [
      "To track user movements",
      "A built-in service for printing formatted messages to the console with timestamps and context",
      "To store logs in a database",
      "To debug the network"
    ],
    answer: 1,
    explanation: "Nest includes a built-in text-based logger used during bootstrapping and available for use within the app.",
    hint: "Console output with context."
  },
  {
    id: 98,
    difficulty: "hard",
    category: "nestjs_advanced",
    question: "What is the difference between 'app.use()' and 'app.connectMicroservice()'?",
    options: [
      "use() is for HTTP middleware; connectMicroservice() is for adding a non-HTTP transport layer",
      "They are the same",
      "use() is only for Express",
      "connectMicroservice() is for connecting to the internet"
    ],
    answer: 0,
    explanation: "app.use() is for standard HTTP middleware, while connectMicroservice() sets up a 'Hybrid' application that handles both HTTP and Microservice protocols.",
    hint: "Hybrid application setup."
  },
  {
    id: 99,
    difficulty: "easy",
    category: "nestjs_basics",
    question: "What is the purpose of the 'dist' folder in a NestJS project?",
    options: [
      "It contains the source code",
      "It contains the compiled JavaScript code ready for production",
      "It contains the documentation",
      "It is for distribution to users"
    ],
    answer: 1,
    explanation: "Since Nest is written in TypeScript, it must be compiled (transpiled) into JavaScript. The 'dist' folder is the default output for this.",
    hint: "Compiled output."
  },
  {
    id: 100,
    difficulty: "medium",
    category: "nestjs_controllers",
    question: "Which decorator is used to extract a specific property from the request body?",
    options: ["@Body()", "@Param()", "@Query()", "@Payload()"],
    answer: 0,
    explanation: "The @Body() decorator allows you to inject the entire request body or a specific property (e.g., @Body('email')).",
    hint: "POST/PUT data."
  },
  // --- TYPESCRIPT QUESTIONS (101-125) ---
  {
    id: 101,
    difficulty: "medium",
    category: "typescript_guards",
    question: "Scenario: You have an object that could be 'Fish' or 'Bird'. 'Fish' has a 'swim' method, and 'Bird' has a 'fly' method. Which operator is a built-in way to check for the existence of 'swim' to narrow the type?",
    options: ["typeof", "instanceof", "in", "has"],
    answer: 2,
    explanation: "The 'in' operator checks if a property exists on an object and serves as a type guard for narrowing unions.",
    hint: "Property existence check."
  },
  {
    id: 102,
    difficulty: "hard",
    category: "typescript_utility",
    question: "What does the 'Awaited<T>' utility type do?",
    options: [
      "Wait for a function to finish",
      "Recursively unwrap Promises to get the underlying type",
      "Convert a type to a Promise",
      "Handle errors in async functions"
    ],
    answer: 1,
    explanation: "Awaited<T> is used to model operations like 'await' in async functions, or the '.then()' method on Promises, specifically recursively unwrapping them.",
    hint: "Extracting the value from a Promise."
  },
  {
    id: 103,
    difficulty: "medium",
    category: "typescript_utility",
    question: "Which utility type would you use to remove 'null' and 'undefined' from a union type like 'string | number | null'?",
    options: ["Exclude<T, null | undefined>", "NonNullable<T>", "Omit<T, null>", "Extract<T, string | number>"],
    answer: 1,
    explanation: "NonNullable<T> constructs a type by excluding null and undefined from T.",
    hint: "Ensuring a value is present."
  },
  {
    id: 104,
    difficulty: "hard",
    category: "typescript_utility",
    question: "What is the purpose of the 'Parameters<T>' utility type?",
    options: [
      "To set the parameters of a function",
      "To obtain the types of the arguments of a function type in a tuple",
      "To check if a function has parameters",
      "To list all properties of a class"
    ],
    answer: 1,
    explanation: "Parameters<T> takes a function type T and produces a tuple type containing all the types of its parameters.",
    hint: "Function argument types as a tuple."
  },
  {
    id: 105,
    difficulty: "hard",
    category: "typescript_advanced",
    question: "How do you achieve 'Key Remapping' in Mapped Types?",
    options: [
      "By using the 'as' keyword within the mapped type syntax",
      "By using the 'rename' keyword",
      "By using the 'keyof' operator twice",
      "TypeScript does not support key remapping"
    ],
    answer: 0,
    explanation: "Key remapping allows you to transform keys using template literal types (e.g., [K in keyof T as `get${Capitalize<string & K>}`]).",
    hint: "The 'as' keyword in mapping."
  },
  {
    id: 106,
    difficulty: "medium",
    category: "typescript_types",
    question: "What is an 'Indexed Access Type' (e.g., T[K])?",
    options: [
      "A way to access an array element",
      "A way to look up a specific property's type from another type",
      "A type for database indexes",
      "A way to loop through an interface"
    ],
    answer: 1,
    explanation: "Indexed access types allow you to use a property name to look up the type of that property in another type.",
    hint: "Type-level property lookup."
  },
  {
    id: 107,
    difficulty: "easy",
    category: "typescript_basics",
    question: "In TypeScript, what is the default visibility of class members if no modifier is specified?",
    options: ["private", "protected", "public", "internal"],
    answer: 2,
    explanation: "By default, all members of a class in TypeScript are 'public'.",
    hint: "Accessible everywhere."
  },
  {
    id: 108,
    difficulty: "hard",
    category: "typescript_advanced",
    question: "Scenario: You want to define a type that is a string, but only strings that start with 'user_'. How can you do this?",
    options: [
      "type UserStr = `user_${string}`",
      "type UserStr = string & 'user_'",
      "type UserStr = startsWith<'user_'>",
      "It is impossible in TypeScript"
    ],
    answer: 0,
    explanation: "Template literal types allow you to define patterns for strings.",
    hint: "Template literal pattern."
  },
  {
    id: 109,
    difficulty: "medium",
    category: "typescript_classes",
    question: "What is the difference between an 'Abstract Method' and a 'Method' in an abstract class?",
    options: [
      "Abstract methods must have an implementation",
      "Abstract methods have no implementation and MUST be implemented by subclasses",
      "There is no difference",
      "Abstract methods can only be called from static methods"
    ],
    answer: 1,
    explanation: "Abstract methods define the signature but not the body; the implementation is deferred to derived classes.",
    hint: "Signature without implementation."
  },
  {
    id: 110,
    difficulty: "hard",
    category: "typescript_compiler",
    question: "What does the 'strictPropertyInitialization' flag do in tsconfig.json?",
    options: [
      "Requires all variables to be initialized",
      "Ensures that class properties are initialized in the constructor",
      "Prevents null values in properties",
      "Makes all properties readonly"
    ],
    answer: 1,
    explanation: "When true, TypeScript will raise an error if a class property is declared but not set in the constructor or via a property initializer.",
    hint: "Constructor initialization check."
  },
  {
    id: 111,
    difficulty: "medium",
    category: "typescript_advanced",
    question: "What is the 'void' type used for in a function return?",
    options: [
      "To indicate the function returns null",
      "To indicate the function returns no value",
      "To indicate the function never finishes",
      "To indicate the function returns any type"
    ],
    answer: 1,
    explanation: "Void is used when a function completes its execution but does not return a value.",
    hint: "Completes without result."
  },
  {
    id: 112,
    difficulty: "hard",
    category: "typescript_advanced",
    question: "What is 'Branded Typing' (or Nominal Typing) used for in TypeScript?",
    options: [
      "To add logos to types",
      "To distinguish between two types with the same structure (e.g., UserId vs PostId)",
      "To make types faster",
      "To export types to other languages"
    ],
    answer: 1,
    explanation: "Since TS is structural, 'branding' involves adding a unique property to a type to ensure the compiler treats it as unique even if the base structure is the same.",
    hint: "Unique identity for identical shapes."
  },
  {
    id: 113,
    difficulty: "medium",
    category: "typescript_types",
    question: "What does the 'readonly' keyword do when applied to a Tuple?",
    options: [
      "Makes the tuple elements invisible",
      "Prevents elements from being reassigned and prevents the tuple from being resized",
      "Allows only numbers in the tuple",
      "Makes the tuple an object"
    ],
    answer: 1,
    explanation: "A readonly tuple cannot be modified after creation; methods like push() or pop() are not available.",
    hint: "Immutable fixed-length array."
  },
  {
    id: 114,
    difficulty: "easy",
    category: "typescript_basics",
    question: "How do you cast a variable to a specific type in TypeScript (two ways)?",
    options: [
      "Using 'as' or the '<Type>' syntax",
      "Using 'toType()' or 'cast()'",
      "Using 'convert' or 'type'",
      "You cannot cast in TypeScript"
    ],
    answer: 0,
    explanation: "Type assertions can be done via the 'as' syntax or the angle-bracket syntax (though angle-brackets cannot be used in .tsx files).",
    hint: "as vs brackets."
  },
  {
    id: 115,
    difficulty: "hard",
    category: "typescript_advanced",
    question: "What is 'Module Augmentation'?",
    options: [
      "Adding more RAM to the server",
      "The ability to add new declarations to a module that is defined in another file or library",
      "A way to delete modules",
      "A method for merging two arrays"
    ],
    answer: 1,
    explanation: "Module augmentation allows you to extend existing objects/interfaces from external libraries with your own properties.",
    hint: "Extending external declarations."
  },
  {
    id: 116,
    difficulty: "medium",
    category: "typescript_compiler",
    question: "What is the purpose of 'skipLibCheck' in tsconfig.json?",
    options: [
      "To skip checking the project's source code",
      "To skip type checking of declaration files (.d.ts), which can speed up compilation",
      "To ignore library errors in the browser",
      "To skip the build process"
    ],
    answer: 1,
    explanation: "This flag tells the compiler not to type check the .d.ts files in node_modules, reducing build times.",
    hint: "Ignore node_modules types."
  },
  {
    id: 117,
    difficulty: "hard",
    category: "typescript_advanced",
    question: "What is the difference between 'Contravariance' and 'Covariance' in function types?",
    options: [
      "Covariance is for return types; Contravariance is for parameter types",
      "They are the same thing",
      "Contravariance is only for numbers",
      "Covariance is for private methods"
    ],
    answer: 0,
    explanation: "Function return types are covariant (must be a subtype), while function parameters are contravariant (must be a supertype) in strict mode.",
    hint: "In vs Out types."
  },
  {
    id: 118,
    difficulty: "medium",
    category: "typescript_advanced",
    question: "What happens when you use 'satisfies' with an object literal?",
    options: [
      "It converts the object to a Map",
      "It validates the object against a type but preserves the most specific inference (e.g., literal values)",
      "It makes the object immutable",
      "It creates a copy of the object"
    ],
    answer: 1,
    explanation: "Satisfies ensures the object matches the interface but doesn't 'widen' the properties to the general interface types.",
    hint: "Validation without narrowing."
  },
  {
    id: 119,
    difficulty: "hard",
    category: "typescript_advanced",
    question: "What is a 'Global Augmentation'?",
    options: [
      "Adding a variable to the 'window' or 'global' object using 'declare global'",
      "Increasing the size of the project",
      "Importing every library at once",
      "A type of CSS variable"
    ],
    answer: 0,
    explanation: "Using 'declare global' inside a module allows you to add types to the global namespace.",
    hint: "Extending the global scope."
  },
  {
    id: 120,
    difficulty: "medium",
    category: "typescript_advanced",
    question: "What is the 'Object.entries()' return type typically inferred as in TS?",
    options: ["string[][]", "[string, any][]", "A tuple of keys and values", "any[]"],
    answer: 1,
    explanation: "By default, TypeScript infers the keys as 'string' (not keyof T) because objects can have additional runtime properties.",
    hint: "String keys and any values."
  },
  {
    id: 121,
    difficulty: "hard",
    category: "typescript_advanced",
    question: "How do you define a type that excludes properties of type 'Function' from an interface T?",
    options: [
      "Using a mapped type that checks 'T[K] extends Function ? never : K'",
      "Omit<T, Function>",
      "Exclude<T, Function>",
      "T - Function"
    ],
    answer: 0,
    explanation: "You can use a mapped type with key remapping to filter out keys based on the value type.",
    hint: "Filtering keys by value type."
  },
  {
    id: 122,
    difficulty: "medium",
    category: "typescript_advanced",
    question: "What does the 'typeof' operator do when used in a type position (not in code)?",
    options: [
      "It returns a string like 'object'",
      "It extracts the type of a value or variable",
      "It converts a string to a type",
      "It checks for null"
    ],
    answer: 1,
    explanation: "In a type context, 'typeof' allows you to refer to the type of a variable or property.",
    hint: "Value to Type conversion."
  },
  {
    id: 123,
    difficulty: "easy",
    category: "typescript_basics",
    question: "Which file contains the configuration for the TypeScript compiler?",
    options: ["package.json", "tsconfig.json", "ts.config.js", ".tsrc"],
    answer: 1,
    explanation: "tsconfig.json is the standard file for TS configuration.",
    hint: "Standard TS config file."
  },
  {
    id: 124,
    difficulty: "medium",
    category: "typescript_advanced",
    question: "Can an interface extend a class in TypeScript?",
    options: [
      "No, interfaces can only extend interfaces",
      "Yes, it inherits the members of the class but not their implementation",
      "Only if the class is abstract",
      "Only if the class has no constructor"
    ],
    answer: 1,
    explanation: "In TS, interfaces can extend classes, inheriting the member signatures (including private and protected members).",
    hint: "Inheriting structure from a class."
  },
  {
    id: 125,
    difficulty: "hard",
    category: "typescript_advanced",
    question: "What is 'Excess Property Checking'?",
    options: [
      "A check that runs when assigning an object literal to a type, ensuring it doesn't have extra properties",
      "A check for too many files",
      "A check for large strings",
      "A check for infinite loops"
    ],
    answer: 0,
    explanation: "TS checks object literals more strictly to prevent typos in optional properties or providing data that will never be used.",
    hint: "Strict literal assignment."
  },

  // --- NESTJS QUESTIONS (126-150) ---
  {
    id: 126,
    difficulty: "hard",
    category: "nestjs_providers",
    question: "What is the 'useExisting' provider strategy?",
    options: [
      "It creates a new instance of an existing provider",
      "It creates an alias for an existing provider token",
      "It uses a provider from a different project",
      "It prevents a provider from being deleted"
    ],
    answer: 1,
    explanation: "useExisting allows you to have multiple tokens point to the same provider instance.",
    hint: "Aliasing a provider."
  },
  {
    id: 127,
    difficulty: "hard",
    category: "nestjs_providers",
    question: "Scenario: You need a provider that requires a value from an asynchronous database connection before the app starts. Which provider should you use?",
    options: ["Value Provider", "Async Factory Provider", "Class Provider", "Middleware"],
    answer: 1,
    explanation: "A Factory provider can return a Promise, and Nest will await that Promise before finishing the injection.",
    hint: "useFactory with async/await."
  },
  {
    id: 128,
    difficulty: "medium",
    category: "nestjs_advanced",
    question: "In an Interceptor or Guard, what does 'host.switchToHttp()' do?",
    options: [
      "Changes the protocol to HTTPS",
      "Returns an object that provides methods to access the Request and Response for HTTP contexts",
      "Restarts the server",
      "Converts the request to JSON"
    ],
    answer: 1,
    explanation: "ArgumentsHost is a wrapper that can represent HTTP, WebSockets, or RPC contexts. switchToHttp() specifically accesses the HTTP context.",
    hint: "Accessing Request/Response."
  },
  {
    id: 129,
    difficulty: "hard",
    category: "nestjs_advanced",
    question: "What is the purpose of 'ArgumentsHost.getType()'?",
    options: [
      "Returns the type of the user",
      "Returns the current application context type (e.g., 'http', 'rpc', or 'ws')",
      "Returns 'string' or 'number'",
      "Returns the NestJS version"
    ],
    answer: 1,
    explanation: "This is useful for creating universal Guards/Interceptors that behave differently depending on the protocol.",
    hint: "Checking the protocol type."
  },
  {
    id: 130,
    difficulty: "medium",
    category: "nestjs_pipes",
    question: "How do you apply a pipe to the entire application globally?",
    options: [
      "In the @Module decorator",
      "Using 'app.useGlobalPipes()' in main.ts",
      "In every controller",
      "You can only apply pipes to routes"
    ],
    answer: 1,
    explanation: "The INestApplication instance provides a method to register global pipes.",
    hint: "Configuration in main.ts."
  },
  {
    id: 131,
    difficulty: "medium",
    category: "nestjs_interceptors",
    question: "Can an Interceptor be applied to a single method in a controller?",
    options: [
      "No, only to the whole controller",
      "Yes, using the @UseInterceptors() decorator on that specific method",
      "Yes, but only for GET requests",
      "No, interceptors are always global"
    ],
    answer: 1,
    explanation: "Nest decorators can be applied at the controller level (all routes) or the handler level (specific route).",
    hint: "Method-level decoration."
  },
  {
    id: 132,
    difficulty: "easy",
    category: "nestjs_controllers",
    question: "Which decorator is used to set a custom HTTP header in the response?",
    options: ["@SetHeader()", "@Header()", "@ResponseHeader()", "@HttpHeader()"],
    answer: 1,
    explanation: "@Header() allows you to specify a key-value pair for the response header.",
    hint: "Response metadata."
  },
  {
    id: 133,
    difficulty: "medium",
    category: "nestjs_controllers",
    question: "What does the '@Redirect()' decorator do?",
    options: [
      "Redirects the user to a different page in the UI",
      "Instructs the browser to perform an HTTP redirect to a specified URL and status code",
      "Moves the code to a different file",
      "Reloads the current page"
    ],
    answer: 1,
    explanation: "Redirect takes a URL and an optional status code (default 302).",
    hint: "HTTP 301/302 responses."
  },
  {
    id: 134,
    difficulty: "hard",
    category: "nestjs_advanced",
    question: "What is 'SSE' (Server-Sent Events) in NestJS used for?",
    options: [
      "Sending emails",
      "Streaming real-time updates from the server to the client over HTTP",
      "Connecting to a database",
      "Processing images"
    ],
    answer: 1,
    explanation: "The @Sse() decorator allows creating endpoints that stream events to the client using the EventSource API.",
    hint: "One-way real-time streaming."
  },
  {
    id: 135,
    difficulty: "hard",
    category: "nestjs_advanced",
    question: "Scenario: You want to version your API using the 'Accept' header. Which 'VersioningType' do you choose?",
    options: ["URI", "HEADER", "MEDIA_TYPE", "CUSTOM"],
    answer: 2,
    explanation: "MEDIA_TYPE versioning looks for the version inside the 'Accept' header (e.g., application/json;v=2).",
    hint: "Accept header versioning."
  },
  {
    id: 136,
    difficulty: "medium",
    category: "nestjs_lifecycle",
    question: "What is the difference between 'OnModuleInit' and 'OnApplicationBootstrap'?",
    options: [
      "OnModuleInit is called after all modules have initialized; OnApplicationBootstrap is called before",
      "OnModuleInit is called once for each module; OnApplicationBootstrap is called after everything is connected and ready to listen for connections",
      "They are identical",
      "One is for controllers, one is for services"
    ],
    answer: 1,
    explanation: "OnModuleInit happens earlier. OnApplicationBootstrap occurs once the whole application (including all modules) is ready.",
    hint: "Execution order."
  },
  {
    id: 137,
    difficulty: "hard",
    category: "nestjs_advanced",
    question: "What is the 'HttpAdapterHost' used for?",
    options: [
      "To change the computer's network adapter",
      "To access the underlying HTTP server instance (Express or Fastify) in a platform-agnostic way",
      "To host the application on the cloud",
      "To manage HTTP cookies"
    ],
    answer: 1,
    explanation: "This is often used in global filters to interact with the underlying response object directly.",
    hint: "Underlying platform access."
  },
  {
    id: 138,
    difficulty: "medium",
    category: "nestjs_pipes",
    question: "If you set 'transform: true' in 'ValidationPipe', what happens to your DTOs?",
    options: [
      "They are converted to JSON",
      "The input plain JavaScript object is automatically instantiated into the actual DTO class",
      "The DTO is deleted after validation",
      "The properties are renamed"
    ],
    answer: 1,
    explanation: "Enabling transform allows Nest to convert incoming network data (plain objects) into class instances, enabling class methods and logic.",
    hint: "Plain-to-Class conversion."
  },
  {
    id: 139,
    difficulty: "hard",
    category: "nestjs_exception_filters",
    question: "How do you apply an Exception Filter to a specific controller?",
    options: ["@Catch()", "@UseFilters()", "@Filter()", "@ErrorHandler()"],
    answer: 1,
    explanation: "The @UseFilters() decorator is used to bind exception filters to controllers or methods.",
    hint: "Binding filters."
  },
  {
    id: 140,
    difficulty: "hard",
    category: "nestjs_microservices",
    question: "In a Microservice, what is the 'ClientProxy'?",
    options: [
      "A security firewall",
      "An object that allows you to send messages or events to another microservice",
      "A way to hide your IP",
      "A database connection"
    ],
    answer: 1,
    explanation: "ClientProxy is the interface used to communicate with remote Nest microservices.",
    hint: "The communication client."
  },
  {
    id: 141,
    difficulty: "medium",
    category: "nestjs_microservices",
    question: "What is the difference between @MessagePattern() and @EventPattern()?",
    options: [
      "@MessagePattern is for Request-Response; @EventPattern is for Event-based (no response)",
      "One is for HTTP, one is for WebSockets",
      "They are the same",
      "@MessagePattern is only for internal messages"
    ],
    answer: 0,
    explanation: "MessagePattern expects a return value (observable/promise), whereas EventPattern is fire-and-forget.",
    hint: "Request-Response vs Pub-Sub."
  },
  {
    id: 142,
    difficulty: "hard",
    category: "nestjs_modules",
    question: "What is the conventional name for a dynamic module method that creates a provider for the whole app (like a database connection)?",
    options: ["register()", "forRoot()", "init()", "configure()"],
    answer: 1,
    explanation: "By convention, forRoot() is used for global configuration, and register() or forFeature() is used for local configuration.",
    hint: "Global config method."
  },
  {
    id: 143,
    difficulty: "hard",
    category: "nestjs_modules",
    question: "How do you handle circular dependencies between two Modules?",
    options: [
      "You cannot have circular dependencies between modules",
      "Use 'forwardRef()' in both 'imports' arrays",
      "Move all providers to one module",
      "Use the @Global() decorator"
    ],
    answer: 1,
    explanation: "If Module A imports Module B and vice versa, both must use forwardRef().",
    hint: "Module-level forward reference."
  },
  {
    id: 144,
    difficulty: "medium",
    category: "nestjs_testing",
    question: "How do you mock a Guard during an E2E test in NestJS?",
    options: [
      "By editing the guard file",
      "Using '.overrideGuard(GuardName).useValue(MockGuard)' on the testing module",
      "It is impossible to mock guards",
      "By using a middleware instead"
    ],
    answer: 1,
    explanation: "The testing module provides 'override' methods to swap real providers/guards with mocks.",
    hint: "Override method."
  },
  {
    id: 145,
    difficulty: "hard",
    category: "nestjs_websockets",
    question: "What is a 'Gateway' in NestJS?",
    options: [
      "A network router",
      "A class decorated with @WebSocketGateway() that handles WebSocket connections",
      "A way to connect to a database",
      "The entry point of the app"
    ],
    answer: 1,
    explanation: "Gateways are essentially 'Controllers' for WebSocket applications.",
    hint: "Socket route handler."
  },
  {
    id: 146,
    difficulty: "medium",
    category: "nestjs_websockets",
    question: "Which decorator gives you access to the underlying Socket.io or ws server instance inside a Gateway?",
    options: ["@Server()", "@WebSocketServer()", "@Socket()", "@GatewayServer()"],
    answer: 1,
    explanation: "@WebSocketServer() injects the native server instance.",
    hint: "Native server access."
  },
  {
    id: 147,
    difficulty: "hard",
    category: "nestjs_websockets",
    question: "How do you send a message back to the client from a WebSocket handler?",
    options: [
      "Return an object with 'event' and 'data' properties, or return an Observable",
      "Use 'response.send()'",
      "Use 'socket.emit()'",
      "Both 1 and 3 are common"
    ],
    answer: 3,
    explanation: "Nest allows returning a WsResponse object or using the native socket instance injected via @ConnectedSocket().",
    hint: "Returning WsResponse."
  },
  {
    id: 148,
    difficulty: "hard",
    category: "nestjs_advanced",
    question: "What is 'Code First' approach in NestJS GraphQL?",
    options: [
      "Writing SQL first",
      "Defining GraphQL schemas using TypeScript decorators and classes, and letting Nest generate the SDL file",
      "Writing the .graphql file manually first",
      "Writing the frontend code first"
    ],
    answer: 1,
    explanation: "Code First generates the GraphQL schema from TypeScript classes, ensuring type safety between code and schema.",
    hint: "TypeScript-to-Schema."
  },
  {
    id: 149,
    difficulty: "medium",
    category: "nestjs_advanced",
    question: "Which decorator is used in GraphQL to resolve a specific field of an object?",
    options: ["@Query()", "@ResolveField()", "@Mutation()", "@Field()"],
    answer: 1,
    explanation: "ResolveField allows you to provide custom logic for a single property of a GraphQL type.",
    hint: "Property-level resolver."
  },
  {
    id: 150,
    difficulty: "medium",
    category: "nestjs_testing",
    question: "What is 'app.getHttpServer()' used for in E2E tests?",
    options: [
      "To start the server",
      "To provide the underlying server instance to a testing library like Supertest",
      "To check the server temperature",
      "To get the IP address"
    ],
    answer: 1,
    explanation: "Supertest needs the internal HTTP listener to perform requests against the app without binding to a real network port.",
    hint: "Integration with Supertest."
  },
  // --- TYPESCRIPT QUESTIONS (151-175) ---
  {
    id: 151,
    difficulty: "hard",
    category: "typescript_advanced",
    question: "How do you prevent 'Distribution' in a conditional type (e.g., stopping T[] from being checked individually)?",
    options: [
      "By using the 'no-distribute' keyword",
      "By wrapping the type in square brackets: [T] extends [any]",
      "By using an interface instead of a type",
      "By setting 'distribute: false' in tsconfig"
    ],
    answer: 1,
    explanation: "Conditional types distribute over union types unless they are 'clamped' by wrapping the type parameter in a tuple/square brackets.",
    hint: "Tuple wrapping."
  },
  {
    id: 152,
    difficulty: "medium",
    category: "typescript_advanced",
    question: "What is the purpose of the 'override' keyword in a class method?",
    options: [
      "To change the name of the method",
      "To ensure the method exists in the base class being extended",
      "To make the method private",
      "To prevent the method from being called"
    ],
    answer: 1,
    explanation: "Introduced in TS 4.3, 'override' ensures that if the base class method is renamed or removed, the compiler will flag an error in the subclass.",
    hint: "Explicit inheritance safety."
  },
  {
    id: 153,
    difficulty: "hard",
    category: "typescript_advanced",
    question: "What does the 'NoInfer<T>' utility (introduced in TS 5.4) do?",
    options: [
      "It prevents TypeScript from inferring a type from a specific function argument",
      "It disables type checking for a variable",
      "It treats the type as 'never'",
      "It forces the type to be 'any'"
    ],
    answer: 0,
    explanation: "NoInfer prevents a generic type parameter from being a candidate for inference in the position where it's used, forcing it to be determined by other arguments.",
    hint: "Block inference source."
  },
  {
    id: 154,
    difficulty: "medium",
    category: "typescript_advanced",
    question: "Scenario: You have a function that returns a value only if a condition is met. What is the best return type: 'T | undefined' or 'T | void'?",
    options: [
      "T | void is better for functional programming",
      "T | undefined is better because 'void' is specifically for functions that don't return anything",
      "They are exactly the same",
      "T | null is the only valid way"
    ],
    answer: 1,
    explanation: "'void' is a signal that the return value should be ignored. 'undefined' is an actual value representing the absence of data.",
    hint: "Ignored vs Missing value."
  },
  {
    id: 155,
    difficulty: "hard",
    category: "typescript_advanced",
    question: "What is a 'Unique Symbol' in TypeScript?",
    options: [
      "A symbol that can only be used once in the code",
      "A subtype of 'symbol' used to define nominally unique keys (often for branding)",
      "A symbol that is shared across all threads",
      "A bug-fixing symbol"
    ],
    answer: 1,
    explanation: "unique symbol allows you to treat a symbol as a unique type that cannot be assigned to other symbols, even if they have the same description.",
    hint: "Nominal symbol types."
  },
  {
    id: 156,
    difficulty: "medium",
    category: "typescript_utility",
    question: "What is the result of 'Uppercase<'hello world'>'?",
    options: ["'HELLO WORLD'", "string", "'Hello World'", "Error"],
    answer: 0,
    explanation: "TypeScript provides intrinsic string manipulation types like Uppercase, Lowercase, Capitalize, and Uncapitalize.",
    hint: "String type transformation."
  },
  {
    id: 157,
    difficulty: "hard",
    category: "typescript_compiler",
    question: "What does 'moduleResolution: \"bundler\"' (TS 5.0+) do?",
    options: [
      "It compiles code directly to a .exe file",
      "It mimics the resolution strategies used by modern bundlers like Vite, Esbuild, or Webpack",
      "It prevents the use of node_modules",
      "It only works for CSS modules"
    ],
    answer: 1,
    explanation: "It allows for modern features like package 'exports' without enforcing the strict file extension rules required by Node's ESM resolution.",
    hint: "Vite/Webpack friendly resolution."
  },
  {
    id: 158,
    difficulty: "medium",
    category: "typescript_advanced",
    question: "What is the difference between 'Object.freeze(obj)' and 'obj as const'?",
    options: [
      "freeze() is JS runtime immutability; 'as const' is TS compile-time type-level immutability",
      "They are identical",
      "as const works at runtime",
      "freeze() makes the type 'any'"
    ],
    answer: 0,
    explanation: "Object.freeze prevents modification at runtime, but the type might still be wide (e.g., string). 'as const' ensures the type is as narrow as possible (literal) and readonly.",
    hint: "Runtime vs Compile-time."
  },
  {
    id: 159,
    difficulty: "hard",
    category: "typescript_advanced",
    question: "How do you define a type that represents only the keys of an object T whose values are strings?",
    options: [
      "KeysOf<T, string>",
      "{ [K in keyof T]: T[K] extends string ? K : never }[keyof T]",
      "Omit<T, number>",
      "Extract<keyof T, string>"
    ],
    answer: 1,
    explanation: "This pattern uses a mapped type to filter keys, turning non-matching values into 'never', and then indexing by 'keyof T' to extract the remaining keys.",
    hint: "Filter keys via value check."
  },
  {
    id: 160,
    difficulty: "medium",
    category: "typescript_advanced",
    question: "What is the 'PropertyKey' type in TypeScript?",
    options: [
      "A type for CSS properties",
      "A built-in alias for 'string | number | symbol'",
      "A special ID for object properties",
      "A function that returns a key"
    ],
    answer: 1,
    explanation: "PropertyKey represents all valid types that can be used as an index for a JavaScript object.",
    hint: "Valid object index types."
  },
  {
    id: 161,
    difficulty: "hard",
    category: "typescript_advanced",
    question: "What happens in the 'catch (e)' block if 'useUnknownInCatchVariables' is enabled in tsconfig?",
    options: [
      "e is 'any'",
      "e is 'Error'",
      "e is 'unknown'",
      "e is 'never'"
    ],
    answer: 2,
    explanation: "In modern TS, errors are 'unknown' because JavaScript allows throwing anything (strings, numbers, objects), not just Error instances.",
    hint: "Safest error type."
  },
  {
    id: 162,
    difficulty: "medium",
    category: "typescript_classes",
    question: "What is a 'Static Block' in a TypeScript class?",
    options: [
      "A block of code that runs only when the class is instantiated",
      "A block that allows complex initialization logic for static fields, scoped to the class",
      "A way to lock the class from being changed",
      "A method for printing the class name"
    ],
    answer: 1,
    explanation: "Static blocks (static { ... }) allow for initialization of static properties that require multiple steps or try/catch logic.",
    hint: "Class-level initialization logic."
  },
  {
    id: 163,
    difficulty: "hard",
    category: "typescript_advanced",
    question: "What is 'Invariance' in TypeScript?",
    options: [
      "When a type cannot be changed",
      "When a generic type T must match exactly (neither subtype nor supertype is allowed)",
      "When a variable is constant",
      "When a type is 'any'"
    ],
    answer: 1,
    explanation: "Invariance often occurs in types like 'Record<T, T>', where TypeScript requires the type to be an exact match to ensure safety in both read and write operations.",
    hint: "Strict exact matching."
  },
  {
    id: 164,
    difficulty: "medium",
    category: "typescript_advanced",
    question: "Scenario: You want to use 'this' inside a function that isn't a class method. How do you type it?",
    options: [
      "You can't use 'this' in functions",
      "By adding 'this' as the first parameter with its type (e.g., function(this: User) {})",
      "By using 'bind(User)'",
      "By using the @This() decorator"
    ],
    answer: 1,
    explanation: "TypeScript allows a fake 'this' parameter as the first argument to define what 'this' will be at runtime.",
    hint: "First parameter trick."
  },
  {
    id: 165,
    difficulty: "hard",
    category: "typescript_advanced",
    question: "What is the 'Intrinsic' keyword used for in TypeScript type definitions?",
    options: [
      "To mark internal compiler-provided types (like Uppercase)",
      "To import private types",
      "To create a new class",
      "To optimize memory"
    ],
    answer: 0,
    explanation: "Intrinsic is used in the standard library to tell the compiler that the logic for this type is built into the compiler itself.",
    hint: "Built-in compiler logic."
  },
  {
    id: 166,
    difficulty: "medium",
    category: "typescript_advanced",
    question: "What is 'Partial<Required<T>>'?",
    options: [
      "Identical to T",
      "Identical to Partial<T>",
      "Identical to Required<T>",
      "A type where all properties exist but can be undefined"
    ],
    answer: 1,
    explanation: "Required removes all optionality, then Partial adds it back to every property. The end result is that every property of T is now optional.",
    hint: "Double transformation."
  },
  {
    id: 167,
    difficulty: "hard",
    category: "typescript_advanced",
    question: "What is the difference between 'External Modules' and 'Ambient Modules'?",
    options: [
      "External modules use import/export; Ambient modules use 'declare module' to describe existing JS files",
      "They are the same",
      "External modules only work in the browser",
      "Ambient modules are for CSS"
    ],
    answer: 0,
    explanation: "Ambient modules are usually found in .d.ts files and describe the shape of libraries that don't have their own types.",
    hint: ".d.ts vs .ts."
  },
  {
    id: 168,
    difficulty: "medium",
    category: "typescript_advanced",
    question: "What does the 'infer' keyword do when used in template literal types?",
    options: [
      "It makes the string uppercase",
      "It allows capturing a part of a string pattern into a type variable",
      "It checks if a string is a number",
      "It parses JSON"
    ],
    answer: 1,
    explanation: "You can use 'type GetId<S> = S extends `user_${infer Id}` ? Id : never' to extract the 'Id' part of a string.",
    hint: "Capturing string segments."
  },
  {
    id: 169,
    difficulty: "hard",
    category: "typescript_advanced",
    question: "What is 'Structural Subtyping'?",
    options: [
      "A type system that cares about the name of the class",
      "A type system that cares about the members/shape of the object, not its explicit name",
      "A way to build buildings with code",
      "A way to organize files"
    ],
    answer: 1,
    explanation: "TypeScript is structurally typed. If two objects have the same properties, they are considered the same type, regardless of their class name.",
    hint: "Shape-based compatibility."
  },
  {
    id: 170,
    difficulty: "medium",
    category: "typescript_advanced",
    question: "What is the purpose of the 'declare' keyword before a function or variable?",
    options: [
      "To create a new global variable",
      "To tell the compiler that a variable exists at runtime even if it is not defined in the current file",
      "To make a variable constant",
      "To delete a variable"
    ],
    answer: 1,
    explanation: "Declare is used for ambient declarations where you promise the compiler that the environment (like a browser global) provides the value.",
    hint: "Supplying missing info to TS."
  },
  {
    id: 171,
    difficulty: "hard",
    category: "typescript_advanced",
    question: "What is a 'Discriminated Union' in TypeScript?",
    options: [
      "A union where members are filtered out",
      "A union of types that all share a common literal property used for narrowing",
      "A union that only accepts strings",
      "A type of array"
    ],
    answer: 1,
    explanation: "By checking a common property (like 'kind: \"circle\"' vs 'kind: \"square\"'), TS can narrow the object to the specific type in that union.",
    hint: "Narrowing by literal tags."
  },
  {
    id: 172,
    difficulty: "medium",
    category: "typescript_advanced",
    question: "What is the 'NonNullable<T>' utility type?",
    options: [
      "It makes all properties required",
      "It removes 'null' and 'undefined' from a union type",
      "It prevents a value from being zero",
      "It forces a value to be an object"
    ],
    answer: 1,
    explanation: "It essentially filters the union type to exclude the nullish values.",
    hint: "Opposite of optional."
  },
  {
    id: 173,
    difficulty: "hard",
    category: "typescript_advanced",
    question: "What happens if you use 'implements' with an interface that has private properties?",
    options: [
      "It works perfectly",
      "It throws an error because interfaces cannot have private properties",
      "It only works if the class also defines them as private",
      "Interfaces cannot describe private state"
    ],
    answer: 1,
    explanation: "Interfaces only describe the public shape of an object. They cannot enforce or describe private/protected members.",
    hint: "Public API only."
  },
  {
    id: 174,
    difficulty: "medium",
    category: "typescript_advanced",
    question: "What is the purpose of 'ConstructorParameters<T>'?",
    options: [
      "To list all variables in a class",
      "To get the types of the arguments of a class constructor in a tuple",
      "To create a new class instance",
      "To change the constructor"
    ],
    answer: 1,
    explanation: "It extracts the parameter types of a constructor function type.",
    hint: "Extraction of 'new' arguments."
  },
  {
    id: 175,
    difficulty: "hard",
    category: "typescript_advanced",
    question: "What is the difference between 'any' and 'unknown' when accessing properties?",
    options: [
      "You can access any property on 'any'; you must narrow 'unknown' before accessing any property",
      "They are identical",
      "unknown is only for numbers",
      "any is only for objects"
    ],
    answer: 0,
    explanation: "unknown is the 'safe' version of any because it forces you to check the type before use.",
    hint: "Checking before accessing."
  },

  // --- NESTJS QUESTIONS (176-200) ---
  {
    id: 176,
    difficulty: "medium",
    category: "nestjs_pipes",
    question: "Scenario: You want to customize the error message when a 'ParseIntPipe' fails. How do you do it?",
    options: [
      "By editing the NestJS source code",
      "By passing an options object to the pipe: new ParseIntPipe({ errorHttpStatusCode: ... })",
      "By using a try/catch in the controller",
      "It is not possible to customize built-in pipes"
    ],
    answer: 1,
    explanation: "Most built-in Nest pipes accept a configuration object in their constructor to modify behavior and status codes.",
    hint: "Pipe constructor options."
  },
  {
    id: 177,
    difficulty: "hard",
    category: "nestjs_advanced",
    question: "What is the 'DiscoveryService' in NestJS?",
    options: [
      "A service to find other servers on the network",
      "A utility to scan modules, controllers, and providers at runtime (often used by custom decorators)",
      "A tool for documentation",
      "A way to find database tables"
    ],
    answer: 1,
    explanation: "It allows developers to 'discover' all registered components in the Nest container, often used to find methods decorated with custom metadata.",
    hint: "Scanning the IoC container."
  },
  {
    id: 178,
    difficulty: "medium",
    category: "nestjs_middleware",
    question: "How do you exclude certain routes from a Middleware applied via 'configure()'?",
    options: [
      "By using the '.exclude()' method on the MiddlewareConsumer",
      "By adding an 'if' statement in the middleware",
      "By using the @NoMiddleware() decorator",
      "Middleware cannot be excluded"
    ],
    answer: 0,
    explanation: "The consumer allows chaining an .exclude() call that takes route strings or objects.",
    hint: "Consumer chaining."
  },
  {
    id: 179,
    difficulty: "hard",
    category: "nestjs_advanced",
    question: "What is a 'Hybrid Application' in NestJS?",
    options: [
      "An app that runs on both mobile and web",
      "An app that listens for both HTTP requests and microservice messages simultaneously",
      "An app written in both JS and Python",
      "An app that uses two different databases"
    ],
    answer: 1,
    explanation: "You create a hybrid app by calling 'app.connectMicroservice()' on a standard NestApplication instance.",
    hint: "HTTP + Microservice."
  },
  {
    id: 180,
    difficulty: "medium",
    category: "nestjs_advanced",
    question: "What is the 'StreamableFile' class used for?",
    options: [
      "To upload files to a server",
      "To return a file stream as a response in a platform-agnostic way (Express or Fastify)",
      "To read a file from the hard drive",
      "To stream movies"
    ],
    answer: 1,
    explanation: "It wraps a stream and tells Nest to handle the piping to the response automatically.",
    hint: "Safe file responses."
  },
  {
    id: 181,
    difficulty: "hard",
    category: "nestjs_advanced",
    question: "In the 'OnApplicationShutdown' hook, what argument is passed to the function?",
    options: [
      "The error message",
      "The system signal that triggered the shutdown (e.g., 'SIGTERM')",
      "The current user list",
      "Nothing"
    ],
    answer: 1,
    explanation: "Nest passes the shutdown signal string so you can perform specific cleanup logic based on the signal.",
    hint: "Shutdown signal."
  },
  {
    id: 182,
    difficulty: "medium",
    category: "nestjs_advanced",
    question: "What is the 'ThrottlerModule' used for?",
    options: [
      "To make the app run faster",
      "To implement rate limiting (limiting the number of requests a user can make)",
      "To compress images",
      "To limit the size of the database"
    ],
    answer: 1,
    explanation: "It provides a configurable way to prevent brute-force attacks and API abuse.",
    hint: "Rate limiting."
  },
  {
    id: 183,
    difficulty: "hard",
    category: "nestjs_advanced",
    question: "What is the difference between 'app.listen()' and 'app.startAllMicroservices()'?",
    options: [
      "listen() is for HTTP; startAllMicroservices() starts the connected microservice transports",
      "They are identical",
      "listen() is for development; startAllMicroservices() is for production",
      "startAllMicroservices() starts the database"
    ],
    answer: 0,
    explanation: "In a hybrid app, you must call both to start both types of listeners.",
    hint: "Starting transport layers."
  },
  {
    id: 184,
    difficulty: "medium",
    category: "nestjs_advanced",
    question: "Which package is commonly used in NestJS for scheduling Cron jobs?",
    options: ["@nestjs/cron", "@nestjs/schedule", "@nestjs/task", "@nestjs/bull"],
    answer: 1,
    explanation: "The @nestjs/schedule package (based on 'cron') allows for task scheduling using decorators like @Cron().",
    hint: "Task scheduling."
  },
  {
    id: 185,
    difficulty: "hard",
    category: "nestjs_advanced",
    question: "What is 'Bull' in the NestJS ecosystem?",
    options: [
      "A database engine",
      "A Redis-based queue system for handling background jobs",
      "A security testing tool",
      "A type of module"
    ],
    answer: 1,
    explanation: "@nestjs/bull provides an abstraction over Bull, the most popular Redis queue library for Node.js.",
    hint: "Message queues."
  },
  {
    id: 186,
    difficulty: "medium",
    category: "nestjs_advanced",
    question: "What is the purpose of the 'Terminus' module in NestJS?",
    options: [
      "To end the application",
      "To provide health check endpoints (liveness/readiness probes)",
      "To manage CSS",
      "To encrypt data"
    ],
    answer: 1,
    explanation: "@nestjs/terminus helps integrate with tools like Kubernetes by providing health indicators for DB, disk, memory, etc.",
    hint: "Health checks."
  },
  {
    id: 187,
    difficulty: "hard",
    category: "nestjs_advanced",
    question: "In which order are NestJS 'Guards' executed?",
    options: [
      "Route -> Controller -> Global",
      "Global -> Controller -> Route",
      "Controller -> Route -> Global",
      "They run in parallel"
    ],
    answer: 1,
    explanation: "Nest executes guards from the most general scope (global) to the most specific (route handler).",
    hint: "Outside-in execution."
  },
  {
    id: 188,
    difficulty: "hard",
    category: "nestjs_advanced",
    question: "In which order are NestJS 'Interceptors' executed for the *response* phase?",
    options: [
      "Global -> Controller -> Route",
      "Route -> Controller -> Global",
      "Controller -> Route -> Global",
      "They run in parallel"
    ],
    answer: 1,
    explanation: "While request interceptors run Global -> Route, the response logic (after next.handle()) runs in reverse order (Route -> Global).",
    hint: "Reverse order for responses."
  },
  {
    id: 189,
    difficulty: "medium",
    category: "nestjs_advanced",
    question: "What is the 'EventEmitterModule' used for?",
    options: [
      "To handle HTTP events",
      "To implement an internal Pub/Sub system within the application",
      "To connect to a database",
      "To log events to the console"
    ],
    answer: 1,
    explanation: "It allows different parts of your application to communicate asynchronously without direct dependencies.",
    hint: "Internal Pub/Sub."
  },
  {
    id: 190,
    difficulty: "hard",
    category: "nestjs_advanced",
    question: "What is the 'Reflector' used for when calling 'getAllAndOverride'?",
    options: [
      "To get all metadata from both the class and the handler, and prefer the handler's value if both exist",
      "To delete all metadata",
      "To merge two metadata arrays",
      "To refresh the application"
    ],
    answer: 0,
    explanation: "This is the common way to handle 'Public' vs 'Private' route metadata where a specific route can override a class-level setting.",
    hint: "Overriding class metadata."
  },
  {
    id: 191,
    difficulty: "medium",
    category: "nestjs_advanced",
    question: "Which decorator is used to inject the 'Reflector' service?",
    options: ["@InjectReflector()", "@Inject(Reflector)", "Standard constructor injection: constructor(private reflector: Reflector)", "@Reflect()"],
    answer: 2,
    explanation: "Reflector is a standard provider that can be injected into any Guard or Interceptor via the constructor.",
    hint: "Standard constructor injection."
  },
  {
    id: 192,
    difficulty: "hard",
    category: "nestjs_advanced",
    question: "What is 'Lazy Loading' modules in NestJS?",
    options: [
      "Loading modules only when they are needed (e.g., to reduce cold start times in serverless)",
      "A module that takes a long time to load",
      "A module that doesn't have any code",
      "A way to slow down the app"
    ],
    answer: 0,
    explanation: "The LazyModuleLoader service allows you to load modules on-demand rather than at bootstrap.",
    hint: "On-demand loading."
  },
  {
    id: 193,
    difficulty: "medium",
    category: "nestjs_advanced",
    question: "What is the purpose of 'app.setGlobalPrefix('api')'?",
    options: [
      "To name the application",
      "To prepend a string (like 'api') to all route paths in the application",
      "To restrict the app to only one folder",
      "To change the domain name"
    ],
    answer: 1,
    explanation: "It ensures all routes start with the same prefix (e.g., /api/users, /api/auth).",
    hint: "Common route prefix."
  },
  {
    id: 194,
    difficulty: "hard",
    category: "nestjs_advanced",
    question: "How do you handle a scenario where you need to inject a provider by a string token instead of a class?",
    options: [
      "You cannot use strings as tokens",
      "Use '@Inject(\"TOKEN_STRING\")' in the constructor",
      "Put the string in the providers array as a class",
      "Use a middleware"
    ],
    answer: 1,
    explanation: "Non-class providers (like values or factories) require the @Inject() decorator with the token name.",
    hint: "The @Inject decorator."
  },
  {
    id: 195,
    difficulty: "medium",
    category: "nestjs_advanced",
    question: "What is 'CacheInterceptor'?",
    options: [
      "An interceptor that clears the browser cache",
      "A built-in interceptor that automatically caches GET responses based on the route path",
      "An interceptor for the database",
      "An interceptor for images"
    ],
    answer: 1,
    explanation: "Part of the CacheModule, it provides a zero-config way to cache API responses.",
    hint: "Automatic GET caching."
  },
  {
    id: 196,
    difficulty: "hard",
    category: "nestjs_advanced",
    question: "How can you manually instantiate a class that is NOT a provider but needs Nest dependencies?",
    options: [
      "Using 'new ClassName()'",
      "Using 'moduleRef.create(ClassName)'",
      "Using 'NestFactory.create()'",
      "It is impossible"
    ],
    answer: 1,
    explanation: "ModuleRef.create() allows you to create an instance of a class and have Nest resolve its constructor dependencies.",
    hint: "On-the-fly DI instantiation."
  },
  {
    id: 197,
    difficulty: "medium",
    category: "nestjs_advanced",
    question: "What is the purpose of '@Sse()'?",
    options: [
      "To send an email",
      "To define a Server-Sent Events route for real-time one-way streaming",
      "To handle CSS",
      "To secure the server"
    ],
    answer: 1,
    explanation: "It allows the server to push updates to the client over a long-lived HTTP connection.",
    hint: "One-way real-time updates."
  },
  {
    id: 198,
    difficulty: "hard",
    category: "nestjs_advanced",
    question: "What is the difference between 'forwardRef' in a Module and 'forwardRef' in a Service constructor?",
    options: [
      "One is for resolving circular module imports; the other is for resolving circular service dependencies",
      "They are identical",
      "One is for strings, one is for classes",
      "One is only for testing"
    ],
    answer: 0,
    explanation: "You must use it in both places if two services in two different modules depend on each other.",
    hint: "Circular fix for both layers."
  },
  {
    id: 199,
    difficulty: "medium",
    category: "nestjs_advanced",
    question: "What is the 'ValidationPipe' option 'forbidNonWhitelisted'?",
    options: [
      "It allows all properties",
      "It throws an error if the input object contains properties not defined in the DTO",
      "It removes unknown properties silently",
      "It renames unknown properties"
    ],
    answer: 1,
    explanation: "While 'whitelist: true' strips properties, 'forbidNonWhitelisted: true' actually rejects the request with an error.",
    hint: "Strict DTO validation."
  },
  {
    id: 200,
    difficulty: "easy",
    category: "nestjs_advanced",
    question: "What is the purpose of 'npm run build' in a NestJS project?",
    options: [
      "To run the tests",
      "To transpile the TypeScript source code into JavaScript in the 'dist' folder",
      "To start the server",
      "To install dependencies"
    ],
    answer: 1,
    explanation: "It triggers the Nest CLI to compile the project for production deployment.",
    hint: "TypeScript to JavaScript compilation."
  },
  // --- TYPESCRIPT QUESTIONS (201-225) ---
  {
    id: 201,
    difficulty: "hard",
    category: "typescript_advanced",
    question: "What are 'Assertion Functions' in TypeScript (using the 'asserts' keyword)?",
    options: [
      "Functions that throw an error if a condition is not met and narrow the type of a variable for the remainder of the scope",
      "Functions that only run in test environments",
      "A way to skip type checking for a specific block",
      "Functions that return a boolean to indicate type safety"
    ],
    answer: 0,
    explanation: "Assertion functions (e.g., function assert(val: any): asserts val is string) inform the compiler that if the function returns without throwing, the variable is of the specified type.",
    hint: "Narrowing by throwing errors."
  },
  {
    id: 202,
    difficulty: "medium",
    category: "typescript_5_0",
    question: "What is the 'accessor' keyword used for in TypeScript 5.0+ classes?",
    options: [
      "To make a property private",
      "To define 'Auto-Accessors', which automatically create a private backing field with get/set methods",
      "To allow external access to private properties",
      "It is an alias for 'readonly'"
    ],
    answer: 1,
    explanation: "Auto-accessors simplify the definition of properties that look like fields but behave like getters/setters, which is useful for decorators.",
    hint: "Simplified getter/setter pairs."
  },
  {
    id: 203,
    difficulty: "hard",
    category: "typescript_5_0",
    question: "What are 'const type parameters' in TypeScript 5.0?",
    options: [
      "Variables that cannot be changed",
      "A feature that allows generic type parameters to be inferred as 'const' (literal/readonly) without the user needing to add 'as const' to the argument",
      "Constants used in type definitions",
      "A way to make all parameters in a function readonly"
    ],
    answer: 1,
    explanation: "By using <const T>, the compiler treats object and array literals passed to the function as if they had 'as const' applied.",
    hint: "Auto 'as const' for generics."
  },
  {
    id: 204,
    difficulty: "medium",
    category: "typescript_advanced",
    question: "What is the difference between 'ES Modules' (ESM) and 'CommonJS' (CJS) output in TypeScript?",
    options: [
      "ESM uses 'import/export'; CJS uses 'require/module.exports'",
      "ESM is for the browser; CJS is for Node.js (though this is changing)",
      "Both 1 and 2 are generally correct in context of TS output",
      "There is no difference in the generated code"
    ],
    answer: 2,
    explanation: "The 'module' setting in tsconfig determines which system TS targets. Modern Node.js supports both, but they have different resolution rules.",
    hint: "Import vs Require."
  },
  {
    id: 205,
    difficulty: "hard",
    category: "typescript_advanced",
    question: "How do you define an 'F-Bounded Polymorphism' (Recursive Generic) in TypeScript?",
    options: [
      "interface Base<T extends Base<T>> { ... }",
      "type Base = T & Base",
      "interface Base<T> extends T { ... }",
      "It is not supported"
    ],
    answer: 0,
    explanation: "This pattern allows a base class or interface to refer to the type of its subclasses, common in fluent APIs or comparison logic.",
    hint: "T extends Base of T."
  },
  {
    id: 206,
    difficulty: "medium",
    category: "typescript_advanced",
    question: "What does the 'import type' syntax do?",
    options: [
      "Imports a file and converts it to a type",
      "Ensures that the imported items are only used for type annotations and are completely removed during transpilation",
      "Imports a specific type of file (like .json)",
      "It is a faster way to import classes"
    ],
    answer: 1,
    explanation: "'import type' prevents side-effects and ensures no runtime code is emitted for that specific import.",
    hint: "Zero-runtime imports."
  },
  {
    id: 207,
    difficulty: "hard",
    category: "typescript_advanced",
    question: "What is the purpose of 'Symlinks' support in 'moduleResolution: node16/nodenext'?",
    options: [
      "To speed up the compiler",
      "To correctly resolve packages that are linked via 'npm link' or monorepo tools while respecting 'exports' in package.json",
      "To create shortcuts to files",
      "To prevent duplicate files"
    ],
    answer: 1,
    explanation: "Modern resolution modes are stricter about how links and exports behave to match Node's native behavior.",
    hint: "Monorepo resolution logic."
  },
  {
    id: 208,
    difficulty: "medium",
    category: "typescript_advanced",
    question: "What is the result of applying 'Extract<string | number, string>'?",
    options: ["string", "number", "never", "any"],
    answer: 0,
    explanation: "Extract filters the first union to include only those types that are assignable to the second type.",
    hint: "Picking matching types."
  },
  {
    id: 209,
    difficulty: "hard",
    category: "typescript_advanced",
    question: "In TypeScript 4.7+, what are 'Optional Variance Annotations' (in/out)?",
    options: [
      "Keywords to move variables in and out of memory",
      "Explicit markers on generic type parameters to indicate if they are Contravariant (in) or Covariant (out)",
      "Markers for API endpoints",
      "A way to import and export types"
    ],
    answer: 1,
    explanation: "By adding 'in' or 'out' to a generic (e.g., interface Producer<out T>), you help the compiler calculate variance faster and more accurately.",
    hint: "Manual variance control."
  },
  {
    id: 210,
    difficulty: "medium",
    category: "typescript_advanced",
    question: "What is a 'Global Script' file in TypeScript vs a 'Module' file?",
    options: [
      "A script has no top-level 'import' or 'export'; its variables are globally visible",
      "A module is faster",
      "A script only runs on the server",
      "They are the same"
    ],
    answer: 0,
    explanation: "If a file contains an import or export, TS treats it as a module with its own scope. Otherwise, it is a global script.",
    hint: "Absence of import/export."
  },
  {
    id: 211,
    difficulty: "hard",
    category: "typescript_advanced",
    question: "How do you define a type that is 'DeepReadonly<T>'?",
    options: [
      "Readonly<T>",
      "Using a recursive mapped type that applies 'readonly' to every level of an object",
      "By using 'as const' on every property",
      "TypeScript has a built-in DeepReadonly utility"
    ],
    answer: 1,
    explanation: "While Readonly<T> is shallow, you can write a custom recursive type to make all nested properties readonly.",
    hint: "Recursive mapped types."
  },
  {
    id: 212,
    difficulty: "easy",
    category: "typescript_basics",
    question: "Which keyword is used to merge multiple interfaces with the same name?",
    options: ["merge", "combine", "None (it happens automatically via Declaration Merging)", "extend"],
    answer: 2,
    explanation: "TypeScript automatically merges interface declarations with the same name in the same namespace.",
    hint: "Automatic merging."
  },
  {
    id: 213,
    difficulty: "hard",
    category: "typescript_advanced",
    question: "What is 'String Enums' major advantage over 'Numeric Enums'?",
    options: [
      "They are faster",
      "They provide more readable values during debugging and in JSON output",
      "They don't allow duplicate values",
      "They can be used as numbers"
    ],
    answer: 1,
    explanation: "Numeric enums default to 0, 1, 2... which can be obscure. String enums preserve the string value at runtime.",
    hint: "Runtime readability."
  },
  {
    id: 214,
    difficulty: "medium",
    category: "typescript_advanced",
    question: "What is the 'NoImplicitThis' compiler option?",
    options: [
      "Prevents using 'this' at all",
      "Raises an error when 'this' is used in a way that its type cannot be inferred (is 'any')",
      "Makes 'this' private",
      "Forces 'this' to be a string"
    ],
    answer: 1,
    explanation: "It ensures you are aware of what 'this' refers to, often solved by using arrow functions or explicit 'this' parameters.",
    hint: "Catching 'any' this."
  },
  {
    id: 215,
    difficulty: "hard",
    category: "typescript_advanced",
    question: "What does 'ReturnType<typeof someFunction>' produce?",
    options: [
      "A string with the return value",
      "The type of the value returned by 'someFunction'",
      "A boolean",
      "Nothing, it is an error"
    ],
    answer: 1,
    explanation: "ReturnType extracts the return type of a function type. 'typeof' is needed to get the function type from the actual value.",
    hint: "Output type extraction."
  },
  {
    id: 216,
    difficulty: "medium",
    category: "typescript_advanced",
    question: "What is 'Double Asserting' in TypeScript?",
    options: [
      "Casting a variable twice: 'x as any as T'",
      "Using two 'if' statements",
      "Asserting to both string and number",
      "Checking for null twice"
    ],
    answer: 0,
    explanation: "Used when the compiler thinks two types are too different to cast directly. You cast to 'any' or 'unknown' first.",
    hint: "Breaking type safety via 'any'."
  },
  {
    id: 217,
    difficulty: "hard",
    category: "typescript_advanced",
    question: "What is the 'moduleSuffixes' option in tsconfig?",
    options: [
      "To add suffixes to file names",
      "To help the compiler find files with specific platform extensions (e.g., .ios.ts, .native.ts)",
      "To change '.ts' to '.js'",
      "To limit file length"
    ],
    answer: 1,
    explanation: "Commonly used in React Native or multi-platform projects to prioritize platform-specific files during resolution.",
    hint: "Platform-specific resolution."
  },
  {
    id: 218,
    difficulty: "medium",
    category: "typescript_advanced",
    question: "What is 'Type Intersection' of two functions?",
    options: [
      "A function that returns both values",
      "A function that acts as an overload (can be called with signatures of either function)",
      "An error",
      "A function that takes twice as many parameters"
    ],
    answer: 1,
    explanation: "Intersecting two function types results in a type that behaves like an overloaded function.",
    hint: "Function overloads via types."
  },
  {
    id: 219,
    difficulty: "hard",
    category: "typescript_advanced",
    question: "What is 'Narrowing by Truthiness'?",
    options: [
      "Checking if a variable is true",
      "Using code like 'if (val)' to remove 'null', 'undefined', '0', and '\"\"' from a union type",
      "A way to check for errors",
      "Using the '!' operator"
    ],
    answer: 1,
    explanation: "TS understands JavaScript's truthy/falsy logic and narrows types accordingly.",
    hint: "Falsy value exclusion."
  },
  {
    id: 220,
    difficulty: "medium",
    category: "typescript_advanced",
    question: "What is the 'unknown' type equivalent to in terms of sets?",
    options: ["The Empty Set", "The Universal Set", "The Subset of any", "The Set of strings"],
    answer: 1,
    explanation: "unknown is the top type (Universal Set) because every value is assignable to it. never is the bottom type (Empty Set).",
    hint: "The Top Type."
  },
  {
    id: 221,
    difficulty: "hard",
    category: "typescript_advanced",
    question: "What is 'Ambient Namespace'?",
    options: [
      "A namespace that only exists at night",
      "A namespace declared using 'declare namespace' to describe legacy global libraries (like jQuery's '$')",
      "A namespace for CSS",
      "A private namespace"
    ],
    answer: 1,
    explanation: "It provides a way to type-check global objects that are attached to the 'window' but organized into hierarchies.",
    hint: "Typing legacy globals."
  },
  {
    id: 222,
    difficulty: "medium",
    category: "typescript_advanced",
    question: "What is the result of 'Exclude<\"a\" | \"b\" | \"c\", \"a\">'?",
    options: ["\"b\" | \"c\"", "\"a\"", "never", "string"],
    answer: 0,
    explanation: "Exclude removes types from a union that match the second parameter.",
    hint: "Removing from a union."
  },
  {
    id: 223,
    difficulty: "hard",
    category: "typescript_advanced",
    question: "What is the 'Exact Types' problem in TypeScript?",
    options: [
      "TypeScript currently has no built-in way to ensure an object has ONLY the specified properties and no extras",
      "Types are too exact",
      "Types are not exact enough for math",
      "It refers to floating point errors"
    ],
    answer: 0,
    explanation: "Structural typing allows extra properties. To solve this, developers use clever generic hacks or helper types to enforce 'exactness'.",
    hint: "Excess property allowance."
  },
  {
    id: 224,
    difficulty: "medium",
    category: "typescript_advanced",
    question: "What is the difference between 'Array<T>' and '[T]'?",
    options: [
      "Array<T> is a list of any length; [T] is a tuple with exactly one element of type T",
      "They are identical",
      "Array<T> is faster",
      "One is for numbers, one is for strings"
    ],
    answer: 0,
    explanation: "A tuple has a fixed length (in this case 1) and specific types at each position.",
    hint: "Fixed length vs dynamic length."
  },
  {
    id: 225,
    difficulty: "hard",
    category: "typescript_advanced",
    question: "What does the 'target' option in tsconfig do?",
    options: [
      "Sets the destination folder",
      "Sets the version of JavaScript to which the TypeScript code is compiled (e.g., ES5, ES2020)",
      "Sets the operating system",
      "Sets the speed of compilation"
    ],
    answer: 1,
    explanation: "This determines which syntax features (like arrow functions or async/await) are kept or transpiled down to older JS.",
    hint: "JS version output."
  },

  // --- NESTJS QUESTIONS (226-250) ---
  {
    id: 226,
    difficulty: "hard",
    category: "nestjs_advanced",
    question: "How do you implement a 'Saga' in NestJS CQRS?",
    options: [
      "By using the @Saga() decorator on a method that returns an Observable and maps events to new commands",
      "By using a controller",
      "Sagas are not supported in NestJS",
      "By writing a middleware"
    ],
    answer: 0,
    explanation: "Sagas allow you to orchestrate complex, long-running processes by reacting to events and issuing new commands.",
    hint: "Event-to-Command mapping."
  },
  {
    id: 227,
    difficulty: "medium",
    category: "nestjs_security",
    question: "Which NestJS module is the official wrapper for 'Passport.js'?",
    options: ["@nestjs/auth", "@nestjs/passport", "@nestjs/security", "@nestjs/jwt"],
    answer: 1,
    explanation: "@nestjs/passport integrates the most popular Node.js authentication library into the Nest ecosystem.",
    hint: "Passport integration."
  },
  {
    id: 228,
    difficulty: "hard",
    category: "nestjs_microservices",
    question: "In NestJS Microservices, what is the 'Kafka' transport used for?",
    options: [
      "Connecting to a SQL database",
      "Handling high-throughput event streaming between services",
      "Sending emails",
      "Building a website"
    ],
    answer: 1,
    explanation: "Kafka is a distributed streaming platform, and Nest provides a dedicated transport to use it as a communication layer.",
    hint: "Event streaming transport."
  },
  {
    id: 229,
    difficulty: "medium",
    category: "nestjs_advanced",
    question: "What does the '@Exclude()' decorator from 'class-transformer' do in a NestJS response?",
    options: [
      "Deletes the whole object",
      "Prevents a specific property from being sent in the JSON response (when used with ClassSerializerInterceptor)",
      "Hides the property from the database",
      "Makes the property private"
    ],
    answer: 1,
    explanation: "This is the standard way to hide sensitive data like passwords from the API response.",
    hint: "Property serialization filter."
  },
  {
    id: 230,
    difficulty: "hard",
    category: "nestjs_advanced",
    question: "What is a 'Standalone Application' in NestJS?",
    options: [
      "An app with no modules",
      "An application instance created using 'NestFactory.createApplicationContext()' that doesn't listen for HTTP requests (used for CRON or CLI tools)",
      "An app that runs on a single computer",
      "A frontend app"
    ],
    answer: 1,
    explanation: "Standalone applications are useful for tasks that need the dependency injection container but don't need a web server.",
    hint: "Non-HTTP application context."
  },
  {
    id: 231,
    difficulty: "medium",
    category: "nestjs_advanced",
    question: "How do you create a custom 'Param Decorator' (e.g., @User())?",
    options: [
      "Using the 'createParamDecorator' function",
      "Using @Decorator()",
      "By writing a class",
      "Using @Inject()"
    ],
    answer: 0,
    explanation: "Custom param decorators allow you to extract data from the request object and inject it directly into handler arguments.",
    hint: "createParamDecorator helper."
  },
  {
    id: 232,
    difficulty: "hard",
    category: "nestjs_advanced",
    question: "What is the 'ConfigurableModuleBuilder' (introduced in NestJS 9)?",
    options: [
      "A way to build modules in the CLI",
      "A utility to boilerplate the creation of Dynamic Modules with strongly-typed options",
      "A tool to edit tsconfig",
      "A tool to configure the database"
    ],
    answer: 1,
    explanation: "It simplifies the creation of modules that take options (like 'forRoot(options)'), reducing manual boilerplate code.",
    hint: "Dynamic module boilerplate helper."
  },
  {
    id: 233,
    difficulty: "medium",
    category: "nestjs_advanced",
    question: "What is the 'version' property in the '@Controller()' decorator used for?",
    options: [
      "To set the app version",
      "To enable URI or Header versioning for all routes within that specific controller",
      "To track code changes",
      "To set the database version"
    ],
    answer: 1,
    explanation: "It allows you to specify that a controller belongs to a specific API version (e.g., 'v1').",
    hint: "Scoped API versioning."
  },
  {
    id: 234,
    difficulty: "hard",
    category: "nestjs_advanced",
    question: "In a custom Pipe, what is the 'ArgumentMetadata' object?",
    options: [
      "A list of all users",
      "An object containing the type, metatype, and data (parameter name) of the argument currently being processed",
      "The raw request body",
      "A database schema"
    ],
    answer: 1,
    explanation: "Metadata allows pipes to act differently based on whether they are processing a @Body, @Query, or @Param.",
    hint: "Context for the pipe."
  },
  {
    id: 235,
    difficulty: "medium",
    category: "nestjs_advanced",
    question: "What is the purpose of 'app.useWebSocketAdapter()'?",
    options: [
      "To enable internet access",
      "To switch between WebSocket libraries (e.g., switching from Socket.io to ws)",
      "To make the app faster",
      "To connect to a database"
    ],
    answer: 1,
    explanation: "Nest is agnostic; you can use the adapter pattern to use different underlying WS implementations.",
    hint: "Swapping WS engines."
  },
  {
    id: 236,
    difficulty: "hard",
    category: "nestjs_advanced",
    question: "How do you perform 'Schema Validation' for environment variables in '@nestjs/config'?",
    options: [
      "By passing a 'validationSchema' (usually built with Joi) to the 'ConfigModule.forRoot()' options",
      "By manually checking each variable in main.ts",
      "Nest does this automatically",
      "Using a middleware"
    ],
    answer: 0,
    explanation: "Using Joi for validation ensures the application won't start if critical .env variables are missing or of the wrong type.",
    hint: "Joi + ConfigModule."
  },
  {
    id: 237,
    difficulty: "medium",
    category: "nestjs_advanced",
    question: "What is the '@InjectConnection()' decorator used for?",
    options: [
      "To connect to the internet",
      "To inject the raw Database Connection object (e.g., in TypeORM or Mongoose modules)",
      "To inject a microservice",
      "To inject a socket"
    ],
    answer: 1,
    explanation: "Sometimes you need access to the underlying connection for transactions or complex queries that the repository doesn't support.",
    hint: "Raw DB connection access."
  },
  {
    id: 238,
    difficulty: "hard",
    category: "nestjs_advanced",
    question: "In NestJS, what is an 'Event Store' in the context of CQRS?",
    options: [
      "A place to buy events",
      "A database that stores the history of all state changes as a sequence of events rather than just the current state",
      "A log file",
      "The computer's memory"
    ],
    answer: 1,
    explanation: "Event sourcing ensures that you can reconstruct the state of the application at any point in time.",
    hint: "Sequence of state changes."
  },
  {
    id: 239,
    difficulty: "medium",
    category: "nestjs_advanced",
    question: "What is the purpose of the '@Public()' custom decorator often seen in NestJS auth tutorials?",
    options: [
      "To make the code open source",
      "To mark a route as accessible without a JWT/Auth guard, using the Reflector to check metadata",
      "To show the route in documentation",
      "To allow access to everyone on the network"
    ],
    answer: 1,
    explanation: "It is a common pattern to apply a global AuthGuard and then 'whitelist' specific routes using a @Public() metadata tag.",
    hint: "AuthGuard whitelisting."
  },
  {
    id: 240,
    difficulty: "hard",
    category: "nestjs_advanced",
    question: "What is the difference between 'ExternalContextCreator' and standard DI?",
    options: [
      "Standard DI is for classes; ExternalContextCreator allows manually creating an execution context for functions (like for microservice handlers)",
      "They are the same",
      "ExternalContextCreator is only for testing",
      "One is faster than the other"
    ],
    answer: 0,
    explanation: "This is a low-level utility used by library authors to apply guards, interceptors, and pipes to custom handlers.",
    hint: "Manual context creation."
  },
  {
    id: 241,
    difficulty: "medium",
    category: "nestjs_advanced",
    question: "What is the 'CacheKey' decorator used for?",
    options: [
      "To unlock a door",
      "To manually set the key used for caching a specific route's response",
      "To set the database key",
      "To encrypt the cache"
    ],
    answer: 1,
    explanation: "By default, Nest caches by path, but @CacheKey() allows you to override this for custom logic.",
    hint: "Overriding cache index."
  },
  {
    id: 242,
    difficulty: "hard",
    category: "nestjs_advanced",
    question: "In a NestJS Microservice, what is the 'NATS' transport?",
    options: [
      "A lightweight, high-performance messaging system",
      "A type of database",
      "A file system",
      "A way to send SMS"
    ],
    answer: 0,
    explanation: "NATS is often used in cloud-native applications for efficient service-to-service communication.",
    hint: "Pub/Sub messaging transport."
  },
  {
    id: 243,
    difficulty: "medium",
    category: "nestjs_advanced",
    question: "Which decorator is used to handle 'Mutations' in a GraphQL Resolver?",
    options: ["@Mutation()", "@Update()", "@Post()", "@GqlMutation()"],
    answer: 0,
    explanation: "In GraphQL, Mutations are used for any operation that changes data (Write/Update/Delete).",
    hint: "GQL Write operations."
  },
  {
    id: 244,
    difficulty: "hard",
    category: "nestjs_advanced",
    question: "What is the '@Module({ global: true })' property used for?",
    options: [
      "To make the module available in all other modules without needing to import it multiple times",
      "To make the app run on the web",
      "To share the module with other apps",
      "To set global variables"
    ],
    answer: 0,
    explanation: "Global modules (like a Database or Config module) should be used sparingly to avoid cluttering the dependency tree.",
    hint: "Import once, use everywhere."
  },
  {
    id: 245,
    difficulty: "medium",
    category: "nestjs_advanced",
    question: "What is the 'LazyModuleLoader'?",
    options: [
      "A module that is slow to load",
      "A service that allows you to load modules on demand (at runtime) rather than at startup",
      "A way to speed up the app",
      "A tool for debugging"
    ],
    answer: 1,
    explanation: "Useful for serverless functions to reduce initial cold-start times by only loading code when a specific route is hit.",
    hint: "On-demand loading."
  },
  {
    id: 246,
    difficulty: "hard",
    category: "nestjs_advanced",
    question: "What is the purpose of '@Optional()' decorator in a constructor?",
    options: [
      "To make the parameter optional",
      "To tell Nest NOT to throw an error if it cannot find a provider for that specific dependency",
      "To hide the dependency",
      "To use a default value"
    ],
    answer: 1,
    explanation: "If the dependency isn't registered, Nest will simply pass 'undefined' instead of crashing.",
    hint: "Soft dependency resolution."
  },
  {
    id: 247,
    difficulty: "medium",
    category: "nestjs_advanced",
    question: "Which method in 'main.ts' allows you to handle 'CORS' (Cross-Origin Resource Sharing)?",
    options: ["app.enableCors()", "app.setCors()", "app.allowOrigins()", "app.useCors()"],
    answer: 0,
    explanation: "enableCors() is a built-in method to configure which domains can access your API.",
    hint: "Security for cross-domain requests."
  },
  {
    id: 248,
    difficulty: "hard",
    category: "nestjs_advanced",
    question: "What is the '@Injectable({ scope: Scope.REQUEST })' used for?",
    options: [
      "To make the provider shared",
      "To create a new instance of the provider for every incoming HTTP request",
      "To limit the provider to one request",
      "To make the provider faster"
    ],
    answer: 1,
    explanation: "Request-scoped providers are useful when you need to store data specific to a single user's request (like a tenant ID).",
    hint: "Instance per request."
  },
  {
    id: 249,
    difficulty: "medium",
    category: "nestjs_advanced",
    question: "What is the purpose of 'app.useGlobalFilters()'?",
    options: [
      "To filter search results",
      "To apply an Exception Filter to every route in the entire application",
      "To filter database queries",
      "To clean the code"
    ],
    answer: 1,
    explanation: "Global filters ensure that all errors across the app are returned in a consistent format.",
    hint: "Application-wide error handling."
  },
  {
    id: 250,
    difficulty: "easy",
    category: "nestjs_cli",
    question: "Which Nest CLI command generates a new controller, service, and module in one folder?",
    options: ["nest generate resource [name]", "nest generate all [name]", "nest generate scaffold [name]", "nest new [name]"],
    answer: 0,
    explanation: "The 'resource' command is a powerful generator that creates a full CRUD boilerplate including DTOs.",
    hint: "Full CRUD generation."
  },
  // --- TYPESCRIPT ADVANCED (251-265) ---
  {
    id: 251,
    difficulty: "hard",
    category: "typescript_advanced",
    question: "What are 'Variadic Tuple Types' in TypeScript?",
    options: [
      "Tuples that can only contain strings",
      "The ability for tuple types to use the spread operator (...) to represent an indefinite number of elements at any position",
      "Tuples that change size at runtime",
      "A way to convert an array to a string"
    ],
    answer: 1,
    explanation: "Variadic tuples allow patterns like [string, ...T[], number], which is essential for typing functions like 'concat' or 'zip'.",
    hint: "Spreads within tuples."
  },
  {
    id: 252,
    difficulty: "medium",
    category: "typescript_advanced",
    question: "What does the 'BigInt' type represent in TypeScript?",
    options: [
      "A very long string",
      "A numeric primitive that can represent integers with arbitrary precision (larger than 2^53 - 1)",
      "A float with 64-bit precision",
      "An array of numbers"
    ],
    answer: 1,
    explanation: "BigInt is used for totals or IDs that exceed the safe integer limit of standard JavaScript Numbers.",
    hint: "Arbitrary precision integers."
  },
  {
    id: 253,
    difficulty: "hard",
    category: "typescript_advanced",
    question: "How do you define a 'Recursive Type Alias' for a JSON-like structure?",
    options: [
      "type JSON = string | number | boolean | null | JSON[] | { [key: string]: JSON }",
      "interface JSON extends Array<JSON> {}",
      "type JSON = any",
      "Recursive types are not allowed in TypeScript"
    ],
    answer: 0,
    explanation: "TypeScript allows type aliases to reference themselves, which is perfect for tree-like structures like JSON.",
    hint: "Self-referencing type."
  },
  {
    id: 254,
    difficulty: "medium",
    category: "typescript_advanced",
    question: "What is the 'Template Literal Type' syntax introduced in TS 4.1?",
    options: [
      "type T = `color-${'red' | 'blue'}`",
      "type T = 'color-' + string",
      "type T = string.template()",
      "It is only for console.log"
    ],
    answer: 0,
    explanation: "Template literal types allow you to build new string literal types by concatenating existing ones.",
    hint: "Backticks in types."
  },
  {
    id: 255,
    difficulty: "hard",
    category: "typescript_advanced",
    question: "What is 'Lowerbound' vs 'Upperbound' in generic constraints?",
    options: [
      "Upperbound (T extends K) limits the type to a subtype; TypeScript does not natively support Lowerbound constraints (T super K)",
      "They are two different ways to write 'any'",
      "Lowerbound is for numbers, Upperbound for strings",
      "Upperbound is only for classes"
    ],
    answer: 0,
    explanation: "You can constrain a type to be 'at least' something (extends), but you cannot currently constrain it to be a 'parent' of something (super) in generics.",
    hint: "extends keyword limit."
  },
  {
    id: 256,
    difficulty: "medium",
    category: "typescript_advanced",
    question: "What is the difference between 'type' and 'interface' regarding 'Utility Types'?",
    options: [
      "Interfaces cannot be used with Pick or Omit",
      "Interfaces can use utility types, but the result is always a 'type' alias, not an 'interface'",
      "Utility types only work with classes",
      "There is no difference"
    ],
    answer: 1,
    explanation: "Utility types like Partial<T> return a type literal. You cannot 'interface X extends Partial<Y>' directly without it becoming a type.",
    hint: "Result of type mapping."
  },
  {
    id: 257,
    difficulty: "hard",
    category: "typescript_advanced",
    question: "What does the 'satisfies' operator do when used with a 'Record'?",
    options: [
      "It makes the Record empty",
      "It validates that an object matches a Record type while keeping the most specific inferred types for the keys/values",
      "It converts the Record to an Array",
      "It forces all values to be strings"
    ],
    answer: 1,
    explanation: "Satisfies is safer than 'as' because it doesn't 'widen' the type. It ensures the object matches the shape without losing literal information.",
    hint: "Validation without widening."
  },
  {
    id: 258,
    difficulty: "medium",
    category: "typescript_advanced",
    question: "What is the 'InstanceType<T>' utility type used for?",
    options: [
      "To check if an object is an instance of a class",
      "To obtain the instance type of a constructor function (usually a class)",
      "To create a new class instance",
      "To list all methods of a class"
    ],
    answer: 1,
    explanation: "If you have a class 'User', InstanceType<typeof User> is the same as the type 'User'.",
    hint: "Constructor to Instance mapping."
  },
  {
    id: 259,
    difficulty: "hard",
    category: "typescript_advanced",
    question: "What is 'Nominal Typing' simulation in TypeScript?",
    options: [
      "Naming every variable 'nominal'",
      "Using 'Branding' (adding a unique property) to prevent two structurally identical types from being treated as the same",
      "A way to make the compiler ignore errors",
      "A type of module import"
    ],
    answer: 1,
    explanation: "Since TS is structural, you 'brand' a type (e.g., __brand: 'UserId') to ensure you don't accidentally pass a PostId where a UserId is expected.",
    hint: "Opaque/Branded types."
  },
  {
    id: 260,
    difficulty: "medium",
    category: "typescript_advanced",
    question: "What is 'Partial<T>' implementation conceptually?",
    options: [
      "It deletes all properties",
      "It maps over 'keyof T' and adds the '?' modifier to each key",
      "It makes every property a string",
      "It turns the object into an array"
    ],
    answer: 1,
    explanation: "It is a mapped type: { [P in keyof T]?: T[P]; }",
    hint: "The '?' modifier."
  },
  {
    id: 261,
    difficulty: "hard",
    category: "typescript_advanced",
    question: "What is the 'NoUncheckedIndexedAccess' compiler flag?",
    options: [
      "It prevents accessing arrays",
      "It forces types to include 'undefined' when accessing an object/array by an index/key that might not exist",
      "It speeds up object lookups",
      "It makes all array indexes start at 1"
    ],
    answer: 1,
    explanation: "When enabled, 'myArray[0]' becomes 'T | undefined' instead of just 'T', forcing you to check if the element exists.",
    hint: "Safe index lookups."
  },
  {
    id: 262,
    difficulty: "medium",
    category: "typescript_advanced",
    question: "Which keyword allows you to access the type of a specific property in an interface?",
    options: ["typeof", "keyof", "Indexed Access (Interface['property'])", "Extract"],
    answer: 2,
    explanation: "Indexed Access types let you look up the type of a property, similar to how you access an object value in JS.",
    hint: "Lookup by key name."
  },
  {
    id: 263,
    difficulty: "hard",
    category: "typescript_advanced",
    question: "What is 'Type Guarding with the 'is' keyword' vs a boolean return?",
    options: [
      "They are the same",
      "A boolean return only tells the caller true/false; an 'is' return tells the TypeScript compiler to narrow the type within the 'if' block",
      "The 'is' keyword makes the function run faster",
      "The 'is' keyword is for numbers only"
    ],
    answer: 1,
    explanation: "Functions returning 'val is Type' are User-Defined Type Guards.",
    hint: "Narrowing for the caller."
  },
  {
    id: 264,
    difficulty: "medium",
    category: "typescript_advanced",
    question: "What is the result of 'ReturnType<() => string>'?",
    options: ["() => string", "string", "any", "Function"],
    answer: 1,
    explanation: "ReturnType extracts the output type of a function signature.",
    hint: "Extracting the 'out' part."
  },
  {
    id: 265,
    difficulty: "hard",
    category: "typescript_advanced",
    question: "How do you define a type that is a 'Union of string literals' from an array of strings?",
    options: [
      "Using 'typeof arr[number]' where 'arr' is defined with 'as const'",
      "Using 'keyof arr'",
      "Using 'Array.toUnion()'",
      "It is impossible"
    ],
    answer: 0,
    explanation: "'as const' makes the array a tuple of literals, and indexing with [number] extracts the union of those literals.",
    hint: "Const assertion + index access."
  },

  // --- BACKEND INTEGRATION SCENARIOS (266-285) ---
  {
    id: 266,
    difficulty: "hard",
    category: "integration_scenarios",
    question: "Scenario: Your NestJS app needs to perform a transaction across two different databases (e.g., MySQL and MongoDB). What is this pattern called?",
    options: ["Single Transaction", "Two-Phase Commit (2PC) or Saga Pattern", "Dual Write", "Atomic Sync"],
    answer: 1,
    explanation: "Since distributed transactions are hard, you typically use a Saga to manage consistency across different data sources.",
    hint: "Distributed consistency."
  },
  {
    id: 267,
    difficulty: "medium",
    category: "integration_scenarios",
    question: "Scenario: A 3rd party API is slow and occasionally fails. Which NestJS pattern helps prevent your app from hanging?",
    options: ["Interceptor", "Circuit Breaker (often with a library like 'opossum')", "Pipe", "Middleware"],
    answer: 1,
    explanation: "The Circuit Breaker stops making requests to a failing service for a timeout period to allow it to recover.",
    hint: "Stopping the cascade of failures."
  },
  {
    id: 268,
    difficulty: "hard",
    category: "integration_scenarios",
    question: "Scenario: You need to log the time taken for every database query globally. Where is the best place to implement this in NestJS?",
    options: ["In every Service", "A custom TypeORM/Prisma Interceptor or a LoggerMiddleware", "In main.ts", "In the database config"],
    answer: 1,
    explanation: "Interceptors can wrap the execution of a handler (or DB call) and measure start/end times.",
    hint: "Wrapping the execution."
  },
  {
    id: 269,
    difficulty: "medium",
    category: "integration_scenarios",
    question: "Scenario: You are integrating with a Legacy SOAP API. Which NestJS built-in module is best for the HTTP transport?",
    options: ["@nestjs/soap", "@nestjs/axios", "@nestjs/http", "@nestjs/legacy"],
    answer: 1,
    explanation: "The HttpModule (wrapping Axios) is the standard way to handle any external HTTP requests (REST or SOAP envelopes).",
    hint: "The HTTP wrapper."
  },
  {
    id: 270,
    difficulty: "hard",
    category: "integration_scenarios",
    question: "Scenario: You need to process 1 million CSV rows without crashing the server. How should you do this in a NestJS Service?",
    options: [
      "Load the whole file into an array",
      "Use Node.js Streams and process row-by-row",
      "Use a 'for' loop on the file buffer",
      "Ask the user to upload smaller files"
    ],
    answer: 1,
    explanation: "Streams allow you to process data chunk-by-chunk without loading the entire file into RAM.",
    hint: "Chunk-based processing."
  },
  {
    id: 271,
    difficulty: "medium",
    category: "integration_scenarios",
    question: "Scenario: You want to ensure that a 'User' can only delete their own 'Posts'. What is the best NestJS tool for this?",
    options: ["Pipes", "Guards (combining Auth and Ownership logic)", "Interceptors", "Controllers"],
    answer: 1,
    explanation: "Guards are the primary place to handle authorization logic (Who can do what?).",
    hint: "Authorization layer."
  },
  {
    id: 272,
    difficulty: "hard",
    category: "integration_scenarios",
    question: "Scenario: You are building a multi-tenant app where each request must use a different database schema based on a Header. What 'Scope' should your DatabaseProvider have?",
    options: ["Scope.DEFAULT (Singleton)", "Scope.REQUEST", "Scope.TRANSIENT", "Scope.GLOBAL"],
    answer: 1,
    explanation: "Request scope allows you to inject the specific schema/connection context for that unique HTTP request.",
    hint: "Instance per request."
  },
  {
    id: 273,
    difficulty: "medium",
    category: "integration_scenarios",
    question: "Scenario: You need to send a 'Welcome Email' whenever a user signs up, but you don't want to slow down the signup response. What is the best approach?",
    options: ["Send the email inside the controller and await it", "Use a Message Queue (like BullMQ) to process the email in the background", "Ask the user to wait", "Don't send emails"],
    answer: 1,
    explanation: "Background jobs/queues ensure the user gets a fast response while the work is done later.",
    hint: "Background task."
  },
  {
    id: 274,
    difficulty: "hard",
    category: "integration_scenarios",
    question: "Scenario: Two microservices need to communicate in a request-response fashion. Which NestJS transport is NOT suitable?",
    options: ["TCP", "Redis (Pub/Sub)", "NATS", "MQTT"],
    answer: 1,
    explanation: "Standard Redis Pub/Sub is fire-and-forget. While Nest can simulate request-response, dedicated brokers like NATS or RabbitMQ are usually preferred for reliable request-response.",
    hint: "Fire-and-forget vs Request-Response."
  },
  {
    id: 275,
    difficulty: "medium",
    category: "integration_scenarios",
    question: "Scenario: You need to validate that an incoming request body contains an 'email' and a 'strong password'. What do you use?",
    options: ["If statements in the controller", "ValidationPipe with class-validator decorators in a DTO", "A database constraint", "A middleware"],
    answer: 1,
    explanation: "This is the 'NestJS way' of handling input validation before it ever reaches your business logic.",
    hint: "DTO-based validation."
  },
  {
    id: 276,
    difficulty: "hard",
    category: "integration_scenarios",
    question: "Scenario: You want to cache the results of a heavy calculation for 5 minutes. Where do you configure this?",
    options: ["In the database", "Using CacheModule and CacheInterceptor (or the Cache manager directly)", "In the browser", "In a local variable"],
    answer: 1,
    explanation: "CacheModule provides an abstraction for in-memory or Redis-based caching.",
    hint: "Result persistence (short term)."
  },
  {
    id: 277,
    difficulty: "medium",
    category: "integration_scenarios",
    question: "Scenario: Your API needs to support file uploads. Which NestJS decorator helps you extract the file from the request?",
    options: ["@File()", "@UploadedFile()", "@Body()", "@Multer()"],
    answer: 1,
    explanation: "Used alongside FileInterceptor, @UploadedFile() extracts the file object handled by Multer.",
    hint: "The companion to FileInterceptor."
  },
  {
    id: 278,
    difficulty: "hard",
    category: "integration_scenarios",
    question: "Scenario: You need to implement 'Soft Deletes' (setting a deletedAt timestamp instead of removing rows). How is this typically handled in TypeORM/NestJS?",
    options: ["Deleting the row manually", "Using the @DeleteDateColumn() decorator and .softDelete() method", "It is not possible", "Using a special database"],
    answer: 1,
    explanation: "TypeORM provides built-in support for soft deletes which keeps data for auditing but hides it from standard queries.",
    hint: "Timestamp-based deletion."
  },
  {
    id: 279,
    difficulty: "medium",
    category: "integration_scenarios",
    question: "Scenario: You need to pass data from a Middleware to a Controller. Where should you store it?",
    options: ["In a global variable", "Attach it to the 'request' object (e.g., req['user_info'])", "In the service", "In the database"],
    answer: 1,
    explanation: "Since the request object is passed through the entire chain, it is the safest place to attach metadata.",
    hint: "Request attachment."
  },
  {
    id: 280,
    difficulty: "hard",
    category: "integration_scenarios",
    question: "Scenario: You are using microservices and one service is down. How does the 'ClientProxy' handle the 'send()' method by default?",
    options: ["It waits forever", "It returns an Observable that will emit an error/timeout", "It crashes the whole app", "It skips the request"],
    answer: 1,
    explanation: "Nest microservice clients use Observables, allowing you to handle timeouts and retries using RxJS operators.",
    hint: "Observable error handling."
  },
  {
    id: 281,
    difficulty: "medium",
    category: "integration_scenarios",
    question: "Scenario: You want to hide the 'password' field from all User objects returned by your API. What is the most efficient NestJS way?",
    options: [
      "Manual 'delete user.password' in every service",
      "Use @Exclude() decorator in the DTO and apply the ClassSerializerInterceptor",
      "Don't select the field in the SQL query",
      "Both 2 and 3 are correct and recommended"
    ],
    answer: 3,
    explanation: "Excluding at the DB level is best for performance; the Interceptor is best for a 'fail-safe' global rule.",
    hint: "Layered security."
  },
  {
    id: 282,
    difficulty: "hard",
    category: "integration_scenarios",
    question: "Scenario: You need to run a task every day at midnight. Which package do you install?",
    options: ["@nestjs/cron", "@nestjs/schedule", "@nestjs/tasks", "@nestjs/time"],
    answer: 1,
    explanation: "@nestjs/schedule is the official wrapper for the cron library.",
    hint: "Standard task scheduling."
  },
  {
    id: 283,
    difficulty: "medium",
    category: "integration_scenarios",
    question: "Scenario: You want to protect your API from 'Cross-Site Scripting' (XSS). Which middleware is commonly used in NestJS?",
    options: ["Cors", "Helmet", "Passport", "Session"],
    answer: 1,
    explanation: "Helmet sets various HTTP headers to help protect against common web vulnerabilities.",
    hint: "The 'security headers' library."
  },
  {
    id: 284,
    difficulty: "hard",
    category: "integration_scenarios",
    question: "Scenario: Your app has reached 50 modules and startup is slow. Which NestJS feature could help?",
    options: ["Lazy Loading Modules", "Deleting modules", "Using only one file", "Turning off TypeScript"],
    answer: 0,
    explanation: "Lazy loading allows you to load parts of the app only when they are actually called.",
    hint: "On-demand loading."
  },
  {
    id: 285,
    difficulty: "medium",
    category: "integration_scenarios",
    question: "Scenario: You need to expose your NestJS app as a 'GraphQL' API. Which architectural style should you choose if you want the schema to be generated from your TS classes?",
    options: ["Schema First", "Code First", "Direct SQL", "REST First"],
    answer: 1,
    explanation: "Code First uses decorators on classes to define the GQL types, keeping everything in TypeScript.",
    hint: "Decorators define the schema."
  },

  // --- ANGULAR VS TYPESCRIPT VS NESTJS (286-300) ---
  {
    id: 286,
    difficulty: "medium",
    category: "comparison",
    question: "What is the relationship between TypeScript and NestJS/Angular?",
    options: [
      "They are competitors",
      "TypeScript is the language; NestJS and Angular are frameworks built using TypeScript",
      "NestJS is a version of TypeScript",
      "Angular is the compiler for TypeScript"
    ],
    answer: 1,
    explanation: "TypeScript provides the syntax and typing; the frameworks provide the structure (DI, Routing, etc.).",
    hint: "Language vs Framework."
  },
  {
    id: 287,
    difficulty: "hard",
    category: "comparison",
    question: "How does 'Dependency Injection' (DI) differ between Angular and NestJS?",
    options: [
      "Angular uses DI for UI components; NestJS uses it for backend services",
      "Angular DI is primarily client-side (hierarchical); NestJS DI is server-side (module-based)",
      "Both use the same underlying engine",
      "1 and 2 are correct"
    ],
    answer: 3,
    explanation: "While inspired by Angular, NestJS DI is optimized for the Node.js singleton/request lifecycle.",
    hint: "Context of the application."
  },
  {
    id: 288,
    difficulty: "medium",
    category: "comparison",
    question: "In which framework would you find a '@Component()' decorator?",
    options: ["NestJS", "Angular", "TypeScript (it's built-in)", "Both NestJS and Angular"],
    answer: 1,
    explanation: "Angular uses @Component for UI elements. NestJS uses @Controller for endpoints.",
    hint: "Frontend UI decorator."
  },
  {
    id: 289,
    difficulty: "hard",
    category: "comparison",
    question: "Which library is used for 'Reactive Programming' (Observables) in both Angular and NestJS?",
    options: ["Axios", "RxJS", "Redux", "Lodash"],
    answer: 1,
    explanation: "RxJS is a core dependency of Angular and is heavily used in NestJS for Interceptors and Microservices.",
    hint: "Reactive Extensions for JS."
  },
  {
    id: 290,
    difficulty: "medium",
    category: "comparison",
    question: "What is the backend equivalent of an Angular 'Service' in NestJS?",
    options: ["Controller", "Provider/Service", "Module", "Guard"],
    answer: 1,
    explanation: "Both use 'Services' to handle business logic separate from the 'View' (Angular) or 'Entry Point' (NestJS).",
    hint: "Logic container."
  },
  {
    id: 291,
    difficulty: "hard",
    category: "comparison",
    question: "True or False: NestJS can be used to build a frontend application.",
    options: ["True", "False"],
    answer: 1,
    explanation: "NestJS is strictly a server-side framework for Node.js, although it can 'serve' static frontend files.",
    hint: "Server-side focus."
  },
  {
    id: 292,
    difficulty: "medium",
    category: "comparison",
    question: "Which of the following is a 'Structural' difference between Angular and NestJS modules?",
    options: [
      "Angular modules use '@NgModule'; NestJS modules use '@Module'",
      "Angular modules are for the browser; NestJS modules are for the server",
      "Both are used to organize code into cohesive blocks",
      "All of the above"
    ],
    answer: 3,
    explanation: "Both share the 'Modular' architecture philosophy but target different environments.",
    hint: "Environment and Decorators."
  },
  {
    id: 293,
    difficulty: "hard",
    category: "comparison",
    question: "Which tool is used to compile TypeScript code in a typical NestJS or Angular project?",
    options: ["tsc (TypeScript Compiler)", "WebPack / Vite / Esbuild (via CLI)", "Node.js", "Babel"],
    answer: 1,
    explanation: "While 'tsc' is the base, modern frameworks use bundlers to optimize the output for the browser or server.",
    hint: "The build tool."
  },
  {
    id: 294,
    difficulty: "medium",
    category: "comparison",
    question: "What does 'Full-stack TypeScript' mean?",
    options: [
      "Using TypeScript for both the Frontend (e.g., Angular/React) and the Backend (e.g., NestJS)",
      "Writing CSS in TypeScript",
      "Using a TypeScript-based database",
      "Having a very long TypeScript file"
    ],
    answer: 0,
    explanation: "This allows sharing DTOs and types between the client and server.",
    hint: "Shared language across layers."
  },
  {
    id: 295,
    difficulty: "hard",
    category: "comparison",
    question: "In Angular, you use 'Interceptors' to modify outgoing HTTP requests. What are 'Interceptors' used for in NestJS?",
    options: [
      "To modify incoming HTTP requests",
      "To transform the response mapping or add extra logic before/after a method execution",
      "To validate forms",
      "To connect to a database"
    ],
    answer: 1,
    explanation: "Angular interceptors focus on the 'client' side of a request; NestJS interceptors focus on the 'server' handling of a request.",
    hint: "Server-side request/response wrap."
  },
  {
    id: 296,
    difficulty: "medium",
    category: "comparison",
    question: "Which concept exists in Angular but NOT natively in NestJS?",
    options: ["Services", "Templates/HTML Views", "Dependency Injection", "Modules"],
    answer: 1,
    explanation: "Angular is a UI framework; NestJS is an API framework. Nest uses 'Controllers' instead of 'Templates'.",
    hint: "The 'View' layer."
  },
  {
    id: 297,
    difficulty: "hard",
    category: "comparison",
    question: "What is the purpose of 'zone.js' in Angular, and does NestJS use it?",
    options: [
      "It handles change detection in Angular; NestJS does NOT use it because it doesn't have a UI to sync",
      "It is a database for Angular",
      "NestJS uses it for routing",
      "They both use it for memory management"
    ],
    answer: 0,
    explanation: "Zone.js tracks async tasks for the UI. NestJS doesn't need this overhead.",
    hint: "Change detection tracking."
  },
  {
    id: 298,
    difficulty: "medium",
    category: "comparison",
    question: "Which of these is a TypeScript feature that both NestJS and Angular rely on heavily for metadata?",
    options: ["Enums", "Decorators", "Interfaces", "Tuples"],
    answer: 1,
    explanation: "Both frameworks use decorators (@Injectable, @Module, etc.) to store metadata used by the DI system.",
    hint: "The '@' symbol."
  },
  {
    id: 299,
    difficulty: "hard",
    category: "comparison",
    question: "How do you share a 'User' interface between an Angular app and a NestJS app in a monorepo?",
    options: [
      "Copy-paste the file",
      "Put the interface in a shared library/package that both apps import",
      "It's not possible to share types",
      "Use a global string"
    ],
    answer: 1,
    explanation: "Monorepos (like Nx) allow sharing a 'libs/models' folder to ensure the frontend and backend are perfectly synced.",
    hint: "Shared libraries."
  },
  {
    id: 300,
    difficulty: "easy",
    category: "comparison",
    question: "Which of these is the CLI command for Angular?",
    options: ["nest", "ng", "ts", "npm"],
    answer: 1,
    explanation: "'ng' stands for Angular; 'nest' is for NestJS.",
    hint: "The command prefix."
  },
  // --- ANGULAR VERSIONS & EVOLUTION (301-315) ---
  {
    id: 301,
    difficulty: "medium",
    category: "angular_evolution",
    question: "What was the most significant architectural change between 'AngularJS' (1.x) and 'Angular 2'?",
    options: [
      "A shift from a Scope-based architecture to a Component-based architecture using TypeScript",
      "The introduction of jQuery as a dependency",
      "Removing the ability to use services",
      "Angular 2 only works on mobile phones"
    ],
    answer: 0,
    explanation: "Angular 2 was a complete rewrite, moving away from $scope and controllers toward a hierarchical component tree and strict typing.",
    hint: "Scope vs Components."
  },
  {
    id: 302,
    difficulty: "medium",
    category: "angular_evolution",
    question: "In Angular 8, what major internal change was introduced as an 'opt-in' preview?",
    options: [
      "The Ivy rendering engine",
      "The use of 'any' for all variables",
      "The removal of HTML templates",
      "Direct SQL queries from the browser"
    ],
    answer: 0,
    explanation: "Angular 8 introduced the Ivy compiler/renderer as an opt-in feature, which later became the default in version 9.",
    hint: "New compiler name."
  },
  {
    id: 303,
    difficulty: "hard",
    category: "angular_evolution",
    question: "Angular 14 introduced 'Standalone Components'. What does this allow developers to do?",
    options: [
      "Write components without any CSS",
      "Create components, directives, and pipes without declaring them in an '@NgModule'",
      "Run Angular without Node.js",
      "Build apps that only have one file"
    ],
    answer: 1,
    explanation: "Standalone components simplify the mental model by reducing the 'NgModule' boilerplate, making the app easier to tree-shake.",
    hint: "No more NgModules required."
  },
  {
    id: 304,
    difficulty: "medium",
    category: "angular_evolution",
    question: "What happened to the 'ViewEngine' in Angular 13?",
    options: [
      "It was upgraded to version 2",
      "It was completely removed, making Angular 'Ivy-only'",
      "It was renamed to 'AngularEngine'",
      "It was moved to a separate library"
    ],
    answer: 1,
    explanation: "Angular 13 removed support for the legacy ViewEngine to improve build speeds and reduce package size.",
    hint: "End of legacy rendering."
  },
  {
    id: 305,
    difficulty: "hard",
    category: "angular_evolution",
    question: "How did Angular 14 improve 'Typed Forms'?",
    options: [
      "It removed the need for forms entirely",
      "It introduced strictly typed Reactive Forms, ensuring values in 'FormGroup' and 'FormControl' are type-safe",
      "It made forms work with CSS only",
      "It automatically submits forms to the database"
    ],
    answer: 1,
    explanation: "Before v14, form values were 'any'. V14 allows schemas like 'FormGroup<{email: FormControl<string>}>'.",
    hint: "Strictly typed FormControls."
  },
  {
    id: 306,
    difficulty: "medium",
    category: "angular_evolution",
    question: "Which Angular version introduced the 'Differential Loading' strategy to reduce bundle sizes for modern browsers?",
    options: ["Angular 2", "Angular 8", "Angular 14", "Angular 4"],
    answer: 1,
    explanation: "Angular 8 introduced the ability to build two sets of bundles: one for modern (ES2015+) and one for legacy browsers.",
    hint: "ES2015 vs ES5 bundles."
  },
  {
    id: 307,
    difficulty: "hard",
    category: "angular_evolution",
    question: "In Angular 14, what is the 'inject()' function used for as an alternative to constructor injection?",
    options: [
      "To inject CSS into HTML",
      "To resolve dependencies inside a function context (like in a 'Functional Guard' or 'initializer')",
      "To inject SQL data",
      "To inject a new version of Angular"
    ],
    answer: 1,
    explanation: "The 'inject()' function allows dependency injection without a class constructor, enabling 'Functional Guards'.",
    hint: "Dependency injection in functions."
  },
  {
    id: 308,
    difficulty: "easy",
    category: "angular_basics",
    question: "Which file in an Angular 8 project defines the build configuration and workspace settings?",
    options: ["package.json", "angular.json", "tsconfig.json", "main.ts"],
    answer: 1,
    explanation: "angular.json contains project-specific configurations for building, testing, and serving.",
    hint: "Workspace configuration."
  },
  {
    id: 309,
    difficulty: "medium",
    category: "angular_basics",
    question: "What is the purpose of the 'Zone.js' library in Angular versions prior to 18?",
    options: [
      "To secure the application",
      "To provide change detection by intercepting asynchronous tasks",
      "To manage CSS modules",
      "To connect to the backend"
    ],
    answer: 1,
    explanation: "Zone.js 'patches' async APIs (like setTimeout) so Angular knows when to check the UI for updates.",
    hint: "Change detection triggers."
  },
  {
    id: 310,
    difficulty: "hard",
    category: "angular_evolution",
    question: "What is the 'Default' change detection strategy in Angular, and how does it differ from 'OnPush'?",
    options: [
      "Default checks everything on every event; OnPush only checks if @Input references change or events fire in the component",
      "They are exactly the same",
      "OnPush is for mobile, Default is for desktop",
      "Default is only for services"
    ],
    answer: 0,
    explanation: "OnPush is a performance optimization that reduces the number of checks the framework performs.",
    hint: "Optimization via input checking."
  },

  // --- AUTH & RBAC INTEGRATION SCENARIOS (311-330) ---
  {
    id: 311,
    difficulty: "hard",
    category: "auth_rbac",
    question: "Scenario: You need to implement RBAC (Role-Based Access Control) in NestJS. What is the standard way to attach roles to a route?",
    options: [
      "Hardcode the check in the controller",
      "Use a custom '@Roles()' decorator to set metadata and a 'RolesGuard' to read it",
      "Use a middleware",
      "Use an interceptor"
    ],
    answer: 1,
    explanation: "You use SetMetadata via a decorator and then use the Reflector inside a Guard to compare user roles.",
    hint: "Metadata + Guard."
  },
  {
    id: 312,
    difficulty: "medium",
    category: "auth_rbac",
    question: "Scenario: A user logs in and receives a JWT. Where should the NestJS backend look for this token in subsequent requests?",
    options: ["In the URL query", "In the 'Authorization' header as a 'Bearer' token", "In the body of every POST request", "In the footer"],
    answer: 1,
    explanation: "Standard practice is 'Authorization: Bearer <token>' for RESTful APIs.",
    hint: "Standard Auth Header."
  },
  {
    id: 313,
    difficulty: "hard",
    category: "auth_rbac",
    question: "Scenario: You want to implement 'Refresh Tokens'. Where should the refresh token be stored for maximum security against XSS?",
    options: [
      "In LocalStorage",
      "In an 'httpOnly' and 'Secure' cookie",
      "In a global JavaScript variable",
      "In the Redux store"
    ],
    answer: 1,
    explanation: "httpOnly cookies cannot be accessed by JavaScript, protecting them from XSS attacks.",
    hint: "Javascript-inaccessible storage."
  },
  {
    id: 314,
    difficulty: "medium",
    category: "auth_rbac",
    question: "Scenario: In an Angular app, how do you prevent a user from navigating to an 'Admin' page if they aren't logged in?",
    options: ["Using a Pipe", "Using a 'CanActivate' Route Guard", "Using an Interceptor", "Using a Directive"],
    answer: 1,
    explanation: "Route Guards are specifically designed to handle navigation logic based on permissions.",
    hint: "Navigation security."
  },
  {
    id: 315,
    difficulty: "hard",
    category: "auth_rbac",
    question: "Scenario: You have 'Fine-grained Access Control' (Attribute-Based). A user can only edit a 'Post' if they are the 'Owner'. Where should this check happen?",
    options: [
      "Only in the Frontend",
      "In a NestJS Guard (accessing the DB to check ownership) or inside the Service logic",
      "In a Pipe",
      "In the main.ts file"
    ],
    answer: 1,
    explanation: "Ownership checks often require database access, which is handled in a Guard or the Service layer to ensure data integrity.",
    hint: "Resource-level validation."
  },
  {
    id: 316,
    difficulty: "medium",
    category: "auth_rbac",
    question: "In NestJS, what does the 'passport-jwt' strategy validate automatically?",
    options: [
      "The user's password",
      "The signature and expiration of the token",
      "The user's email format",
      "The database connection"
    ],
    answer: 1,
    explanation: "The strategy ensures the token hasn't been tampered with and is still within its 'exp' time.",
    hint: "Signature and Time check."
  },
  {
    id: 317,
    difficulty: "hard",
    category: "auth_rbac",
    question: "Scenario: You need to implement 'Multi-Factor Authentication' (MFA). At which point does the NestJS server issue the 'Final' Access Token?",
    options: [
      "Immediately after the password check",
      "Only after both the password and the MFA code (TOTP) are successfully verified",
      "Before the password check",
      "The user creates it themselves"
    ],
    answer: 1,
    explanation: "MFA requires a multi-step verification process before the final trusted session/token is created.",
    hint: "Post-verification issuance."
  },
  {
    id: 318,
    difficulty: "medium",
    category: "auth_rbac",
    question: "What is 'Scope' in the context of an OAuth2 token?",
    options: [
      "The size of the token",
      "The specific permissions or resources the token is allowed to access (e.g., 'read:profile')",
      "The time the token lasts",
      "The name of the user"
    ],
    answer: 1,
    explanation: "Scopes limit what an application can do on behalf of a user.",
    hint: "Permission boundaries."
  },
  {
    id: 319,
    difficulty: "hard",
    category: "auth_rbac",
    question: "Scenario: You want to logout a user globally by invalidating their JWT. How is this typically achieved since JWTs are stateless?",
    options: [
      "You cannot invalidate a JWT",
      "By maintaining a 'Blacklist' (in Redis) of revoked tokens and checking it in a Guard",
      "By deleting the token from the user's computer",
      "By changing the server's secret key"
    ],
    answer: 1,
    explanation: "Because JWTs are self-contained, the server must explicitly track 'logged out' tokens until they expire.",
    hint: "Redis-based revocation."
  },
  {
    id: 320,
    difficulty: "medium",
    category: "auth_rbac",
    question: "Which Angular feature is used to automatically add an 'Authorization' header to every outgoing HTTP request?",
    options: ["Guard", "HttpInterceptor", "Resolver", "Pipe"],
    answer: 1,
    explanation: "Interceptors can intercept and clone requests to inject headers globally.",
    hint: "Outgoing request modifier."
  },

  // --- ANGULAR VS TYPESCRIPT (321-335) ---
  {
    id: 321,
    difficulty: "medium",
    category: "angular_vs_ts",
    question: "Which of these is a TypeScript feature that Angular uses to define a class as a 'Component'?",
    options: ["Interface", "Decorator", "Namespace", "Enum"],
    answer: 1,
    explanation: "The '@Component({...})' syntax is a TypeScript Decorator.",
    hint: "Metadata annotation."
  },
  {
    id: 322,
    difficulty: "hard",
    category: "angular_vs_ts",
    question: "If you define an 'interface User' in TypeScript, will it exist in the 'main.js' bundle after Angular compiles it?",
    options: ["Yes", "No", "Only if it has methods", "Only in debug mode"],
    answer: 1,
    explanation: "Interfaces are purely compile-time constructs and are 'erased' during transpilation to JavaScript.",
    hint: "Type erasure."
  },
  {
    id: 323,
    difficulty: "medium",
    category: "angular_vs_ts",
    question: "What is the difference between 'Angular' and 'Angular Material'?",
    options: [
      "Angular is the framework; Angular Material is a library of pre-built UI components following Google's design system",
      "They are two different versions of the framework",
      "Material is for mobile, Angular is for web",
      "One uses TypeScript, the other uses CSS"
    ],
    answer: 0,
    explanation: "Material is an optional UI kit built specifically for the Angular framework.",
    hint: "Framework vs UI Library."
  },
  {
    id: 324,
    difficulty: "hard",
    category: "angular_vs_ts",
    question: "How does Angular use TypeScript's 'Constructor Injection' for DI?",
    options: [
      "It reads the parameter types at runtime using 'reflect-metadata' to know which service to provide",
      "It uses string matching on variable names",
      "It doesn't use TypeScript for DI",
      "It requires a special 'inject' keyword in the constructor"
    ],
    answer: 0,
    explanation: "Angular's DI system uses the type metadata emitted by the TypeScript compiler to identify dependencies.",
    hint: "Metadata-driven DI."
  },
  {
    id: 325,
    difficulty: "medium",
    category: "angular_vs_ts",
    question: "In an Angular template, what does '{{ title }}' represent?",
    options: ["A TypeScript comment", "Interpolation (displaying a component property in the HTML)", "A CSS selector", "A database query"],
    answer: 1,
    explanation: "Double curly braces are the syntax for one-way data binding from the component class to the view.",
    hint: "One-way data binding."
  },

  // --- ADDITIONAL ANGULAR BASICS & SCENARIOS (326-350) ---
  {
    id: 326,
    difficulty: "easy",
    category: "angular_basics",
    question: "What is 'ng-container' used for?",
    options: [
      "To create a visible box in the UI",
      "As a logical wrapper that doesn't render an actual DOM element (useful for structural directives like *ngIf)",
      "To store database data",
      "To include external scripts"
    ],
    answer: 1,
    explanation: "It allows you to group elements or apply directives without adding extra <div> tags to the DOM.",
    hint: "The invisible wrapper."
  },
  {
    id: 327,
    difficulty: "medium",
    category: "angular_basics",
    question: "What is the difference between 'Reactive Forms' and 'Template-driven Forms'?",
    options: [
      "Reactive forms are defined in the component class (more scalable); Template-driven are defined in the HTML (simpler)",
      "Reactive forms are for React; Template-driven are for Angular",
      "One is for mobile, one is for web",
      "There is no difference"
    ],
    answer: 0,
    explanation: "Reactive forms offer more control and easier unit testing, while Template-driven forms are faster for simple use cases.",
    hint: "Class-based vs HTML-based."
  },
  {
    id: 328,
    difficulty: "hard",
    category: "angular_basics",
    question: "What is an 'Angular Resolver' used for?",
    options: [
      "To fix bugs automatically",
      "To fetch data *before* a route is activated, ensuring the component has data ready when it loads",
      "To change the browser resolution",
      "To resolve conflicts between modules"
    ],
    answer: 1,
    explanation: "Resolvers prevent the 'empty page' flickering by waiting for data before navigation completes.",
    hint: "Pre-fetching route data."
  },
  {
    id: 329,
    difficulty: "medium",
    category: "angular_basics",
    question: "What does the 'AsyncPipe' do in an Angular template?",
    options: [
      "Makes the code run faster",
      "Automatically subscribes to an Observable or Promise and returns the latest value, then unsubscribes when the component is destroyed",
      "Converts strings to numbers",
      "Clears the cache"
    ],
    answer: 1,
    explanation: "It handles the boilerplate of subscribing and prevents memory leaks by auto-unsubscribing.",
    hint: "Observable subscription helper."
  },
  {
    id: 330,
    difficulty: "hard",
    category: "angular_basics",
    question: "What is 'Content Projection' in Angular?",
    options: [
      "Projecting the screen onto a wall",
      "Using <ng-content> to pass HTML/Components from a parent into a specific spot in a child component",
      "A way to calculate math",
      "Saving data to a file"
    ],
    answer: 1,
    explanation: "It's similar to 'slots' in other frameworks, allowing for reusable 'wrapper' components.",
    hint: "The <ng-content> tag."
  },
  {
    id: 331,
    difficulty: "medium",
    category: "angular_basics",
    question: "What is the purpose of '@Input()' and '@Output()'?",
    options: [
      "Input is for reading files; Output is for writing files",
      "Input allows data to flow from parent to child; Output allows data/events to flow from child to parent",
      "They are for database connections",
      "They define the component's name"
    ],
    answer: 1,
    explanation: "They define the public API of a component for inter-component communication.",
    hint: "Parent-Child communication."
  },
  {
    id: 332,
    difficulty: "hard",
    category: "angular_basics",
    question: "What is the 'ModuleID' or 'Barrel' pattern in TypeScript/Angular?",
    options: [
      "A way to store barrels of data",
      "Using an 'index.ts' file to re-export multiple files from a folder for cleaner imports",
      "A type of security encryption",
      "A way to name components"
    ],
    answer: 1,
    explanation: "It simplifies import statements: 'import { A, B } from \"./my-folder\"' instead of importing each file.",
    hint: "index.ts re-exports."
  },
  {
    id: 333,
    difficulty: "medium",
    category: "angular_basics",
    question: "What is the lifecycle hook 'ngOnChanges' used for?",
    options: [
      "To detect any change in the browser",
      "To respond when Angular sets or resets data-bound input properties (@Input)",
      "To check when the user clicks a button",
      "To start the application"
    ],
    answer: 1,
    explanation: "It receives a SimpleChanges object containing current and previous values.",
    hint: "Responding to @Input changes."
  },
  {
    id: 334,
    difficulty: "hard",
    category: "angular_basics",
    question: "What is the difference between 'ElementRef' and 'Renderer2' when manipulating the DOM?",
    options: [
      "ElementRef is safer; Renderer2 is faster",
      "Renderer2 is a platform-agnostic way to manipulate the DOM (safer for SSR); ElementRef provides direct access (can be risky)",
      "ElementRef is only for CSS",
      "There is no difference"
    ],
    answer: 1,
    explanation: "Renderer2 is preferred because it works correctly in environments like Server-Side Rendering (Universal) where the DOM doesn't exist.",
    hint: "Safe DOM abstraction."
  },
  {
    id: 335,
    difficulty: "medium",
    category: "angular_basics",
    question: "How do you define a 'Child Route' in the Angular Router?",
    options: [
      "By creating a second Router module",
      "By using the 'children' array inside a route definition",
      "By naming the route 'child'",
      "It is not possible"
    ],
    answer: 1,
    explanation: "Child routes allow for nested navigation and layouts (e.g., /dashboard/settings).",
    hint: "The 'children' property."
  },
  {
    id: 336,
    difficulty: "hard",
    category: "angular_basics",
    question: "What is 'Lazy Loading' in the Angular Router?",
    options: [
      "Loading the page slowly to save power",
      "Loading an entire NgModule (or Standalone Component) only when the user navigates to its route",
      "A bug in the router",
      "Loading the app without images"
    ],
    answer: 1,
    explanation: "This reduces the initial bundle size of the application significantly.",
    hint: "loadChildren or loadComponent."
  },
  {
    id: 337,
    difficulty: "medium",
    category: "angular_basics",
    question: "What is the purpose of 'EventEmitter' in Angular?",
    options: [
      "To count events",
      "To emit custom events from a child component to its parent (used with @Output)",
      "To handle HTTP errors",
      "To start a timer"
    ],
    answer: 1,
    explanation: "It allows a child component to notify its parent that something happened (like a button click).",
    hint: "Child-to-parent signaling."
  },
  {
    id: 338,
    difficulty: "hard",
    category: "angular_basics",
    question: "What is 'Tree Shaking' in the context of Angular builds?",
    options: [
      "A way to organize files in a tree structure",
      "The process of removing unused code from the final bundle during the build process",
      "Cleaning the server's cache",
      "Formatting the code"
    ],
    answer: 1,
    explanation: "Tools like Webpack or Esbuild 'shake' the dependency tree to drop code that is never imported/used.",
    hint: "Unused code removal."
  },
  {
    id: 339,
    difficulty: "medium",
    category: "angular_basics",
    question: "What is the 'HostListener' decorator used for?",
    options: [
      "To listen to the server",
      "To listen to events on the host element of a component or directive (like 'window:scroll' or 'click')",
      "To listen to database changes",
      "To manage CSS hover states"
    ],
    answer: 1,
    explanation: "It provides an easy way to react to events occurring on the component's own DOM element or the global window/document.",
    hint: "DOM event binding on host."
  },
  {
    id: 340,
    difficulty: "hard",
    category: "angular_basics",
    question: "What is 'Angular Universal'?",
    options: [
      "A version of Angular that works on every computer",
      "A technology that allows Angular to be rendered on the Server (SSR) instead of just the browser",
      "A database for Angular",
      "A CSS library"
    ],
    answer: 1,
    explanation: "SSR improves SEO and initial load performance by sending a pre-rendered HTML page to the client.",
    hint: "Server-Side Rendering."
  },
  {
    id: 341,
    difficulty: "medium",
    category: "angular_basics",
    question: "What is the difference between 'constructor' and 'ngOnInit'?",
    options: [
      "Constructor is for DI; ngOnInit is for initialization logic (after @Inputs are set)",
      "They are identical",
      "Constructor is faster",
      "ngOnInit is only for mobile"
    ],
    answer: 0,
    explanation: "Inputs are not available in the constructor. You must wait for ngOnInit to access them.",
    hint: "DI vs Initial Logic."
  },
  {
    id: 342,
    difficulty: "hard",
    category: "angular_basics",
    question: "What is the 'providedIn: \"root\"' property in an @Injectable decorator?",
    options: [
      "It makes the service global and allows it to be tree-shaken if not used",
      "It forces the service to be used in the root folder",
      "It makes the service private",
      "It prevents the service from working"
    ],
    answer: 0,
    explanation: "This is the modern way to provide singletons without needing to list them in a module's 'providers' array.",
    hint: "Tree-shakable singleton."
  },
  {
    id: 343,
    difficulty: "medium",
    category: "angular_basics",
    question: "What is the 'CommonModule' in Angular?",
    options: [
      "A module that contains common components",
      "A module that provides core directives like *ngIf and *ngFor",
      "A module for CSS",
      "A module for database logic"
    ],
    answer: 1,
    explanation: "If you want to use standard structural directives in a feature module, you must import CommonModule.",
    hint: "Directives like *ngIf."
  },
  {
    id: 344,
    difficulty: "hard",
    category: "angular_basics",
    question: "What is 'Zone-less' Angular (Experimental in recent versions)?",
    options: [
      "Angular without security",
      "An approach to build Angular apps without Zone.js, relying on Signals or manual change detection for better performance",
      "Angular without the router",
      "A way to run Angular without internet"
    ],
    answer: 1,
    explanation: "Zone-less Angular reduces overhead and simplifies debugging by removing the magic of Zone.js.",
    hint: "Removing Zone.js."
  },
  {
    id: 345,
    difficulty: "medium",
    category: "angular_basics",
    question: "Which decorator is used to access a child component or DOM element from the parent class?",
    options: ["@Inject", "@ViewChild", "@Child", "@Element"],
    answer: 1,
    explanation: "ViewChild allows you to get a reference to an element or component defined in the template.",
    hint: "Template reference variable."
  },
  {
    id: 346,
    difficulty: "hard",
    category: "angular_basics",
    question: "What is the difference between 'ViewChild' and 'ContentChild'?",
    options: [
      "ViewChild looks at the component's own template; ContentChild looks at projected content (ng-content)",
      "They are the same",
      "One is for CSS, one is for HTML",
      "ViewChild is only for buttons"
    ],
    answer: 0,
    explanation: "ContentChild is used to access components passed into your component via content projection.",
    hint: "Template vs Projected content."
  },
  {
    id: 347,
    difficulty: "medium",
    category: "angular_basics",
    question: "What is 'Transpilation' in an Angular project?",
    options: [
      "Converting CSS to HTML",
      "Converting TypeScript code into JavaScript that the browser can understand",
      "Moving files to the server",
      "Compressing images"
    ],
    answer: 1,
    explanation: "Browsers cannot run TypeScript directly, so it must be transpiled to JS.",
    hint: "TS to JS conversion."
  },
  {
    id: 348,
    difficulty: "hard",
    category: "angular_basics",
    question: "What is the 'RouterModule.forRoot()' vs 'RouterModule.forChild()'?",
    options: [
      "forRoot is for the main app; forChild is for lazy-loaded feature modules",
      "One is for mobile, one is for web",
      "forRoot is faster",
      "They are identical"
    ],
    answer: 0,
    explanation: "forRoot registers the global router service; forChild only registers the routes for that specific module.",
    hint: "Root vs Feature routing."
  },
  {
    id: 349,
    difficulty: "medium",
    category: "angular_basics",
    question: "Which Angular command generates a new service?",
    options: ["ng add service", "ng generate service", "ng new service", "ng create service"],
    answer: 1,
    explanation: "The CLI command 'ng generate service [name]' (or 'ng g s') is the standard way.",
    hint: "The 'g' command."
  },
  {
    id: 350,
    difficulty: "easy",
    category: "angular_basics",
    question: "What does the 'ng serve' command do?",
    options: [
      "Compiles the app and starts a local development server with live reload",
      "Builds the app for production",
      "Deletes the 'dist' folder",
      "Uploads the app to the cloud"
    ],
    answer: 0,
    explanation: "It's the primary tool for local development in Angular.",
    hint: "Development server."
  },
  // --- ANGULAR ADVANCED & SIGNALS (351-365) ---
  {
    id: 351,
    difficulty: "hard",
    category: "angular_advanced",
    question: "What are 'Angular Signals' (introduced in v16)?",
    options: [
      "A new way to send emails",
      "A reactive primitive that provides fine-grained reactivity, allowing Angular to know exactly which parts of the UI need to change without checking the whole tree",
      "A replacement for the Router",
      "A way to connect to WebSockets"
    ],
    answer: 1,
    explanation: "Signals track dependencies automatically. When a signal value changes, only the components or effects reading that signal are notified.",
    hint: "Fine-grained reactivity."
  },
  {
    id: 352,
    difficulty: "medium",
    category: "angular_advanced",
    question: "What is the difference between a Signal and an Observable?",
    options: [
      "Signals always have a synchronous value; Observables are streams of values over time",
      "Signals are faster than Observables",
      "Observables are only for HTTP",
      "They are the same thing"
    ],
    answer: 0,
    explanation: "You can always get the current value of a Signal calling it like a function signal(). Observables require a subscription to receive values.",
    hint: "Synchronous vs Stream."
  },
  {
    id: 353,
    difficulty: "hard",
    category: "angular_advanced",
    question: "In Angular Signals, what does the 'effect()' function do?",
    options: [
      "It creates a side effect that runs whenever the signals it reads change",
      "It deletes a signal",
      "It transforms a signal into a string",
      "It is used for database transactions"
    ],
    answer: 0,
    explanation: "Effects are useful for logging, syncing with local storage, or manual DOM manipulations that need to react to state changes.",
    hint: "Reactive side effects."
  },
  {
    id: 354,
    difficulty: "medium",
    category: "angular_advanced",
    question: "What is 'Hydration' in the context of Angular 16+ SSR?",
    options: [
      "Adding water to the server",
      "The process where the client-side JavaScript 'attaches' to the server-rendered HTML without flickering or re-rendering the whole page",
      "Cleaning the cache",
      "A type of CSS animation"
    ],
    answer: 1,
    explanation: "Non-destructive hydration improves performance by reusing the DOM structure sent by the server.",
    hint: "Seamless SSR transition."
  },
  {
    id: 355,
    difficulty: "hard",
    category: "angular_advanced",
    question: "What is the 'DestroyRef' provider used for in Angular 16+?",
    options: [
      "To destroy the application",
      "To register cleanup logic (like unsubscribing) that runs when a component or service is destroyed, without needing ngOnDestroy",
      "To delete files",
      "To clear the browser history"
    ],
    answer: 1,
    explanation: "DestroyRef allows you to handle cleanup in a more functional way, especially useful in standalone components or helper functions.",
    hint: "Functional cleanup."
  },

  // --- TYPESCRIPT DEEP DIVE (366-380) ---
  {
    id: 366,
    difficulty: "hard",
    category: "typescript_advanced",
    question: "What is 'Type Instantiation' in TypeScript?",
    options: [
      "Creating a new object",
      "The process by which the compiler replaces generic type parameters with concrete types during a function call",
      "Naming a type",
      "Importing a type"
    ],
    answer: 1,
    explanation: "When you call func<string>(), the compiler 'instantiates' func with T = string.",
    hint: "Generics becoming concrete."
  },
  {
    id: 367,
    difficulty: "medium",
    category: "typescript_advanced",
    question: "What is the difference between 'unknown' and 'any' regarding property access?",
    options: [
      "You can access any property on 'any', but you must narrow/type-check 'unknown' before accessing properties",
      "They are identical",
      "You can't use 'any' in a loop",
      "Unknown is only for numbers"
    ],
    answer: 0,
    explanation: "unknown is the 'type-safe' version of any. It forces the developer to verify the type before performing operations.",
    hint: "Safety vs Flexibility."
  },
  {
    id: 368,
    difficulty: "hard",
    category: "typescript_advanced",
    question: "How do you implement 'Discriminated Unions'?",
    options: [
      "By using a shared literal property (like 'kind' or 'type') in every object of the union",
      "By using a random ID",
      "By making all properties optional",
      "By using the 'any' keyword"
    ],
    answer: 0,
    explanation: "A common 'tag' allows TypeScript to narrow the union to a specific type within a switch or if block.",
    hint: "The 'type' tag pattern."
  },
  {
    id: 369,
    difficulty: "medium",
    category: "typescript_advanced",
    question: "What does 'keyof any' represent in TypeScript?",
    options: [
      "string | number | symbol",
      "string",
      "never",
      "any"
    ],
    answer: 0,
    explanation: "Since property keys in JS can be strings, numbers, or symbols, 'keyof any' covers all valid index types.",
    hint: "All possible object keys."
  },
  {
    id: 370,
    difficulty: "hard",
    category: "typescript_advanced",
    question: "What are 'Mapped Type Modifiers'?",
    options: [
      "CSS styles for types",
      "The '+' or '-' signs used to add or remove 'readonly' or '?' during type mapping",
      "Methods to change type names",
      "Tools to move types between files"
    ],
    answer: 1,
    explanation: "For example, '-readonly' removes the readonly status, and '-?' makes optional properties required.",
    hint: "Add/Remove ? or readonly."
  },

  // --- NESTJS INTEGRATION & ARCHITECTURE (371-385) ---
  {
    id: 371,
    difficulty: "hard",
    category: "nestjs_advanced",
    question: "What is 'Circular Dependency' in NestJS and how is it resolved?",
    options: [
      "A bug that crashes the CPU; resolved by 'forwardRef()'",
      "When two services depend on each other; resolved using 'forwardRef()'",
      "When a file is too large; resolved by splitting it",
      "When the server restarts constantly; resolved by upgrading Node"
    ],
    answer: 1,
    explanation: "forwardRef() allows Nest to instantiate a class before it is fully defined by the other class.",
    hint: "Service A <-> Service B."
  },
  {
    id: 372,
    difficulty: "medium",
    category: "nestjs_advanced",
    question: "What is the 'Reflector' class used for in NestJS?",
    options: [
      "To show the developer's face in the console",
      "To retrieve custom metadata attached to classes or handlers (often in Guards or Interceptors)",
      "To reflect the database schema",
      "To reverse a string"
    ],
    answer: 1,
    explanation: "Reflector is the tool used to read data set via SetMetadata or custom decorators.",
    hint: "Metadata reader."
  },
  {
    id: 373,
    difficulty: "hard",
    category: "nestjs_advanced",
    question: "What is the 'DiscoveryService' in NestJS?",
    options: [
      "A way to find new libraries",
      "A utility to scan all registered providers and controllers at runtime (useful for building custom framework features)",
      "A GPS module",
      "A way to discover databases"
    ],
    answer: 1,
    explanation: "It is often used by library authors to find all methods decorated with a specific custom decorator across the whole app.",
    hint: "Scanning the DI container."
  },
  {
    id: 374,
    difficulty: "medium",
    category: "nestjs_advanced",
    question: "How do you handle 'Global Prefixes' (like /api) in NestJS?",
    options: [
      "In every controller",
      "Using 'app.setGlobalPrefix('api')' in main.ts",
      "In the tsconfig.json",
      "By naming the folder 'api'"
    ],
    answer: 1,
    explanation: "This automatically prepends the prefix to all routes in the application.",
    hint: "main.ts configuration."
  },
  {
    id: 375,
    difficulty: "hard",
    category: "nestjs_advanced",
    question: "What is the difference between 'useClass', 'useValue', and 'useFactory' in a Provider?",
    options: [
      "useClass instantiates a class; useValue uses a constant; useFactory uses a function to dynamically create the value",
      "They are all the same",
      "useValue is only for strings",
      "useFactory is for CSS"
    ],
    answer: 0,
    explanation: "These are 'Custom Providers' that give you flexibility over how a dependency is created.",
    hint: "The 'provide' object keys."
  },

  // --- BACKEND INTEGRATION & SECURITY (386-400) ---
  {
    id: 386,
    difficulty: "hard",
    category: "security",
    question: "Scenario: You need to prevent 'Brute Force' attacks on your NestJS login endpoint. What is the best strategy?",
    options: [
      "Limit password length",
      "Implement Rate Limiting (Throttling) using '@nestjs/throttler'",
      "Change the port of the server",
      "Encrypt the database"
    ],
    answer: 1,
    explanation: "Throttling limits the number of requests a specific IP can make in a given timeframe.",
    hint: "Request frequency limit."
  },
  {
    id: 387,
    difficulty: "medium",
    category: "integration",
    question: "Which NestJS module is used to work with 'Prisma'?",
    options: ["@nestjs/prisma (community) or manual integration by extending PrismaClient", "@nestjs/sql", "@nestjs/orm", "@nestjs/db"],
    answer: 0,
    explanation: "Prisma is often integrated by creating a Service that extends PrismaClient and handles the 'onModuleInit' hook.",
    hint: "The modern ORM alternative."
  },
  {
    id: 388,
    difficulty: "hard",
    category: "integration",
    question: "Scenario: You need to sync data from NestJS to an 'Elasticsearch' cluster. How should you handle failures?",
    options: [
      "Ignore them",
      "Use a queue (like BullMQ) to retry the indexing operation if Elasticsearch is temporarily down",
      "Restart the server",
      "Log out the user"
    ],
    answer: 1,
    explanation: "Message queues allow for reliable background processing with retry logic.",
    hint: "Retry via BullMQ."
  },
  {
    id: 389,
    difficulty: "medium",
    category: "security",
    question: "What does 'CSRF' stand for, and how do you protect a NestJS API?",
    options: [
      "Cross-Site Request Forgery; use csurf middleware or double-submit cookies",
      "Cloud Security Response File",
      "Custom Server Route Filter",
      "It is a type of database"
    ],
    answer: 0,
    explanation: "CSRF protection is vital for stateful apps (using cookies) to ensure requests originate from your site.",
    hint: "Cross-site protection."
  },
  {
    id: 390,
    difficulty: "hard",
    category: "architecture",
    question: "What is 'Hexagonal Architecture' (Ports and Adapters) in a NestJS context?",
    options: [
      "Having 6 modules",
      "Decoupling core business logic from external technologies (DB, APIs) using Interfaces (Ports) and Implementations (Adapters)",
      "Building a hexagon-shaped UI",
      "A way to name variables"
    ],
    answer: 1,
    explanation: "This allows you to swap a database or email provider without changing your core business logic.",
    hint: "Decoupling business logic."
  },
  {
    id: 391,
    difficulty: "medium",
    category: "testing",
    question: "What is the purpose of the 'TestingModule' in NestJS unit tests?",
    options: [
      "To run the app in production",
      "To create a mock NestJS DI container for testing without starting the whole server",
      "To test the internet connection",
      "To check for spelling errors"
    ],
    answer: 1,
    explanation: "TestingModule allows you to override providers with mocks easily.",
    hint: "Mock DI container."
  },
  {
    id: 392,
    difficulty: "hard",
    category: "testing",
    question: "What is the difference between 'Unit Testing' and 'E2E Testing' in NestJS?",
    options: [
      "Unit tests check individual classes; E2E tests check the whole request/response flow including the database",
      "Unit tests are for CSS; E2E are for HTML",
      "They are the same",
      "E2E is only for mobile"
    ],
    answer: 0,
    explanation: "E2E (End-to-End) tests usually use 'supertest' to simulate HTTP calls to the app.",
    hint: "Isolation vs Integration."
  },
  {
    id: 393,
    difficulty: "medium",
    category: "angular_basics",
    question: "What is the 'RouterLinkActive' directive used for?",
    options: [
      "To make a link clickable",
      "To apply a CSS class to a link only when its route is currently active (e.g., highlighting a menu item)",
      "To delete a route",
      "To speed up navigation"
    ],
    answer: 1,
    explanation: "It provides visual feedback to the user about which page they are on.",
    hint: "Menu highlighting."
  },
  {
    id: 394,
    difficulty: "hard",
    category: "angular_advanced",
    question: "How do you handle 'Global State' in Angular without a library like NgRx?",
    options: [
      "Using a shared '@Injectable({ providedIn: 'root' })' service with a BehaviorSubject or Signal",
      "Using global variables",
      "By passing data through 100 components",
      "It is not possible"
    ],
    answer: 0,
    explanation: "Singleton services are the most common way to share state across an entire Angular application.",
    hint: "Shared singleton service."
  },
  {
    id: 395,
    difficulty: "medium",
    category: "typescript_basics",
    question: "What does the 'readonly' modifier do on a class property?",
    options: [
      "Makes the property invisible",
      "Prevents the property from being reassigned after initialization (constructor)",
      "Makes the property a string",
      "Deletes the property"
    ],
    answer: 1,
    explanation: "Readonly properties can only be set at the point of declaration or in the constructor.",
    hint: "Immutable assignment."
  },
  {
    id: 396,
    difficulty: "hard",
    category: "integration",
    question: "Scenario: You are building a 'Real-time Dashboard'. Which technology should you use in NestJS?",
    options: ["REST", "WebSockets (Socket.io or ws)", "SQL", "CSV files"],
    answer: 1,
    explanation: "WebSockets allow for full-duplex communication, enabling the server to 'push' updates to the client.",
    hint: "Bi-directional push."
  },
  {
    id: 397,
    difficulty: "medium",
    category: "angular_basics",
    question: "What is the purpose of 'ng-template'?",
    options: [
      "To define a block of HTML that is NOT rendered by default, but can be used with structural directives",
      "To write CSS",
      "To import a module",
      "To name the app"
    ],
    answer: 0,
    explanation: "It acts as a blueprint that can be instantiated dynamically (e.g., in an *ngIf else block).",
    hint: "The blueprint tag."
  },
  {
    id: 398,
    difficulty: "hard",
    category: "typescript_advanced",
    question: "What is 'Conditional Types' syntax?",
    options: [
      "T extends U ? X : Y",
      "if (T == U) { X }",
      "type T = U | X",
      "switch(T)"
    ],
    answer: 0,
    explanation: "Conditional types allow you to choose a type based on whether a type relationship exists.",
    hint: "Ternary operator for types."
  },
  {
    id: 399,
    difficulty: "medium",
    category: "nestjs_basics",
    question: "What is the '@Headers()' decorator used for in a Controller?",
    options: [
      "To set the title of the page",
      "To extract a specific header or all headers from the incoming request",
      "To hide the header",
      "To connect to the database"
    ],
    answer: 1,
    explanation: "Useful for reading custom tracking IDs or authentication tokens directly in the handler.",
    hint: "HTTP Request headers."
  },
  {
    id: 400,
    difficulty: "easy",
    category: "general",
    question: "Which company originally created and maintains TypeScript?",
    options: ["Google", "Facebook", "Microsoft", "Amazon"],
    answer: 2,
    explanation: "Microsoft released TypeScript in 2012, led by Anders Hejlsberg.",
    hint: "The makers of VS Code."
  },
  // --- JS vs TS vs NESTJS: ARCHITECTURAL COMPARISONS (401-415) ---
  {
    id: 401,
    difficulty: "medium",
    category: "comparison",
    question: "Which of these best describes the 'Layering' of the three technologies?",
    options: [
      "JavaScript is the foundation; TypeScript adds types to JS; NestJS is a framework built with TS to provide structure",
      "NestJS is a language; TypeScript is a database; JS is a server",
      "They are three unrelated ways to build websites",
      "TypeScript replaced JavaScript entirely"
    ],
    answer: 0,
    explanation: "It's a stack: TS is a superset of JS, and NestJS uses TS features (like decorators) to build a structured backend.",
    hint: "Foundation -> Language -> Framework."
  },
  {
    id: 402,
    difficulty: "hard",
    category: "comparison",
    question: "In terms of 'Error Catching', how do JS and TS differ?",
    options: [
      "JS catches errors at runtime; TS catches many potential errors at compile-time (before the code runs)",
      "TS catches errors during the database query",
      "JS is safer than TS",
      "There is no difference in when errors are found"
    ],
    answer: 0,
    explanation: "TypeScript's static analysis identifies type mismatches and null pointers while you are writing the code.",
    hint: "Compile-time vs Runtime."
  },
  {
    id: 403,
    difficulty: "medium",
    category: "comparison",
    question: "What does NestJS provide that 'Vanilla TypeScript' does not?",
    options: [
      "The ability to use variables",
      "An out-of-the-box architecture (Modules, Controllers, Services) and Dependency Injection container",
      "The 'string' data type",
      "Looping structures like 'for' and 'while'"
    ],
    answer: 1,
    explanation: "TypeScript is a language; NestJS is an opinionated framework that tells you *where* and *how* to organize that language.",
    hint: "Architecture and DI."
  },
  {
    id: 404,
    difficulty: "hard",
    category: "comparison",
    question: "How is 'Dependency Injection' handled in JavaScript vs NestJS?",
    options: [
      "JS requires manual passing of dependencies (or third-party libs); NestJS has a built-in IoC container that handles it automatically",
      "JS does it better than NestJS",
      "NestJS doesn't use DI",
      "They both use the '@Injectable' keyword natively"
    ],
    answer: 0,
    explanation: "NestJS automates dependency management, whereas in standard JS you usually have to 'new' up classes or pass objects manually.",
    hint: "Inversion of Control (IoC)."
  },
  {
    id: 405,
    difficulty: "medium",
    category: "comparison",
    question: "Can you run a '.ts' file directly in a standard browser or Node.js without any tools?",
    options: [
      "Yes, always",
      "No, it must be transpiled to JavaScript first (or used with a runner like ts-node/tsx)",
      "Only if it doesn't use interfaces",
      "Only in Chrome"
    ],
    answer: 1,
    explanation: "Browsers and Node.js engines (V8) execute JavaScript. TypeScript syntax must be stripped away first.",
    hint: "Transpilation requirement."
  },

  // --- ENVIRONMENT & DEPLOYMENT (416-430) ---
  {
    id: 416,
    difficulty: "hard",
    category: "deployment",
    question: "When deploying a NestJS app to production, what should you do with 'devDependencies'?",
    options: [
      "Include them all",
      "Exclude them; only 'dependencies' are needed to run the compiled JS code",
      "Delete the package.json",
      "DevDependencies are moved to the database"
    ],
    answer: 1,
    explanation: "The 'dist' folder contains JS. You only need the runtime dependencies (like @nestjs/common) to execute it.",
    hint: "npm install --production."
  },
  {
    id: 417,
    difficulty: "medium",
    category: "environment",
    question: "What is the purpose of the 'cross-env' package in a TS/NestJS project?",
    options: [
      "To translate the code to other languages",
      "To set environment variables (like NODE_ENV) in a way that works across Windows, Mac, and Linux",
      "To protect the app from viruses",
      "To cross-reference files"
    ],
    answer: 1,
    explanation: "Windows uses 'set', while Mac/Linux use 'export'. cross-env makes scripts like 'cross-env NODE_ENV=production' universal.",
    hint: "Platform-agnostic env vars."
  },
  {
    id: 418,
    difficulty: "hard",
    category: "deployment",
    question: "In a Dockerfile for NestJS, why should you use a 'Multi-stage build'?",
    options: [
      "To make the container more colorful",
      "To compile the TS code in one stage and copy only the 'dist' and 'node_modules' to a smaller final image",
      "To run the database inside the same container",
      "To make the build slower"
    ],
    answer: 1,
    explanation: "Multi-stage builds significantly reduce the final image size and improve security by excluding source code.",
    hint: "Build stage vs Run stage."
  },
  {
    id: 419,
    difficulty: "medium",
    category: "deployment",
    question: "Which command is used to build a NestJS production-ready bundle?",
    options: ["nest start", "nest build", "npm run dev", "tsc --init"],
    answer: 1,
    explanation: "nest build invokes the compiler and outputs the results (usually) into a 'dist' folder.",
    hint: "The build command."
  },
  {
    id: 420,
    difficulty: "hard",
    category: "performance",
    question: "What is 'Pruning' in the context of monorepo deployment (e.g., Nx or Turbo)?",
    options: [
      "Cutting down trees",
      "Generating a partial lockfile or workspace that contains only the dependencies needed for one specific app in the repo",
      "Deleting old git commits",
      "Minifying CSS"
    ],
    answer: 1,
    explanation: "Pruning prevents one small microservice from inheriting the thousands of dependencies used by the rest of the monorepo.",
    hint: "Isolated dependency trees."
  },

  // --- ADVANCED TS/NESTJS "MISSING LINKS" (431-450) ---
  {
    id: 431,
    difficulty: "hard",
    category: "typescript_advanced",
    question: "What is a 'Const Context' in TypeScript?",
    options: [
      "A variable that never changes",
      "The effect of using 'as const' which makes all properties of an object 'readonly' and prevents literal widening",
      "A section of code that only uses constants",
      "A way to speed up the CPU"
    ],
    answer: 1,
    explanation: "Without 'as const', ['red', 'blue'] is inferred as string[]. With it, it is inferred as the specific tuple ['red', 'blue'].",
    hint: "Literal type preservation."
  },
  {
    id: 432,
    difficulty: "medium",
    category: "nestjs_advanced",
    question: "What is the 'OnApplicationBootstrap' lifecycle hook?",
    options: [
      "It runs before the app starts",
      "It runs once all modules have been initialized, but before the app starts listening for connections",
      "It runs when the user logs in",
      "It runs every time a request is made"
    ],
    answer: 1,
    explanation: "Useful for logic that needs to run once the whole DI container is ready but before the server is 'live'.",
    hint: "Post-init, Pre-listen."
  },
  {
    id: 433,
    difficulty: "hard",
    category: "nestjs_advanced",
    question: "How do you handle 'Global Filters' for errors that occur *outside* the NestJS context (like in a Middleware)?",
    options: [
      "Global filters don't catch these; you must handle them in the middleware or use a specialized error-handling middleware",
      "The @Catch() decorator handles them automatically",
      "By restarting the server",
      "By using a Pipe"
    ],
    answer: 0,
    explanation: "Exception filters only catch exceptions that occur within the Nest 'layer' (Guards, Interceptors, Pipes, Controllers).",
    hint: "Layers outside the filter scope."
  },
  {
    id: 434,
    difficulty: "medium",
    category: "typescript_advanced",
    question: "What does the 'Extract' utility type do?",
    options: [
      "Extracts a file",
      "Constructs a type by extracting from Type all union members that are assignable to Union",
      "Extracts a string from a number",
      "Deletes a property"
    ],
    answer: 1,
    explanation: "Extract<'a' | 'b' | 'c', 'a' | 'f'> results in 'a'.",
    hint: "Intersection of union types."
  },
  {
    id: 435,
    difficulty: "hard",
    category: "nestjs_advanced",
    question: "What is the purpose of 'app.flushLogs()' when using a custom Logger?",
    options: [
      "To delete the logs",
      "To ensure that all buffered logs are written to the destination (like a file or cloud) during a shutdown",
      "To change the color of logs",
      "To hide logs from the console"
    ],
    answer: 1,
    explanation: "Essential for preventing log loss when an application crashes or is terminated.",
    hint: "Emergency log writing."
  },
  {
    id: 436,
    difficulty: "medium",
    category: "general",
    question: "Which of these is NOT a valid NestJS transport for Microservices?",
    options: ["GRPC", "RabbitMQ", "HTML", "Redis"],
    answer: 2,
    explanation: "HTML is a markup language, not a message broker or transport protocol for microservice communication.",
    hint: "One of these is for UI."
  },
  {
    id: 437,
    difficulty: "hard",
    category: "typescript_advanced",
    question: "What is 'Type Merging' in the context of Enums?",
    options: [
      "Merging two different enums into one",
      "TypeScript allows you to spread enum declarations across multiple files using the same name (similar to interfaces)",
      "Combining strings and numbers in an enum",
      "Enum merging is not possible"
    ],
    answer: 1,
    explanation: "This allows extending enums, though it is generally considered less safe than using Union types.",
    hint: "Declaration merging for enums."
  },
  {
    id: 438,
    difficulty: "medium",
    category: "nestjs_basics",
    question: "What is the '@Body(new ValidationPipe())' syntax used for?",
    options: [
      "To validate only that specific parameter rather than the whole application",
      "To change the body color",
      "To delete the body",
      "To make the request faster"
    ],
    answer: 0,
    explanation: "You can apply pipes at the method level, controller level, or parameter level for fine-grained control.",
    hint: "Scoped validation."
  },
  {
    id: 439,
    difficulty: "hard",
    category: "architecture",
    question: "In NestJS, what is the 'CQRS' pattern primarily used for?",
    options: [
      "Scaling databases",
      "Separating 'Read' operations (Queries) from 'Write' operations (Commands) for cleaner architecture",
      "Handling CSS in JS",
      "Connecting to a printer"
    ],
    answer: 1,
    explanation: "CQRS (Command Query Responsibility Segregation) is great for complex domains where read and write logic vary significantly.",
    hint: "Read vs Write segregation."
  },
  {
    id: 440,
    difficulty: "medium",
    category: "typescript_advanced",
    question: "What does the 'Omit<T, K>' utility type do?",
    options: [
      "Keeps only properties in K",
      "Constructs a type by picking all properties from T and then removing K",
      "Makes all properties optional",
      "Makes all properties required"
    ],
    answer: 1,
    explanation: "It is the opposite of Pick<T, K>.",
    hint: "Property removal."
  },
  {
    id: 441,
    difficulty: "hard",
    category: "nestjs_advanced",
    question: "How do you implement a 'Dynamic Module' that can be configured with 'useFactory'?",
    options: [
      "By using the '@Global()' decorator",
      "By returning an object with 'module', 'providers', and 'exports' from a static method (usually called 'register' or 'forRoot')",
      "By writing a script",
      "It is not possible"
    ],
    answer: 1,
    explanation: "Dynamic modules allow modules to be customized at the point they are imported.",
    hint: "The 'forRoot' pattern."
  },
  {
    id: 442,
    difficulty: "medium",
    category: "general",
    question: "What is 'Semantic Versioning' (SemVer) in the context of TS/NestJS packages?",
    options: [
      "Naming versions after colors",
      "Major.Minor.Patch (e.g., 2.1.0) where each number indicates the level of change",
      "Using only random numbers",
      "Version names based on the date"
    ],
    answer: 1,
    explanation: "Major = breaking changes; Minor = new features; Patch = bug fixes.",
    hint: "Three-part versioning."
  },
  {
    id: 443,
    difficulty: "hard",
    category: "typescript_advanced",
    question: "What is the 'NoImplicitAny' flag in tsconfig.json?",
    options: [
      "It forces you to use 'any' everywhere",
      "It raises an error on expressions and declarations with an implied 'any' type",
      "It makes the code run faster",
      "It allows you to skip type definitions"
    ],
    answer: 1,
    explanation: "This is a key 'Strict Mode' setting that ensures you don't accidentally lose type safety.",
    hint: "Banishing invisible 'any'."
  },
  {
    id: 444,
    difficulty: "medium",
    category: "nestjs_basics",
    question: "What is the purpose of '@Res()' decorator?",
    options: [
      "To restart the server",
      "To get direct access to the underlying Library-specific Response object (Express or Fastify)",
      "To reset the database",
      "To resolve a promise"
    ],
    answer: 1,
    explanation: "Using @Res() puts the controller into 'Manual Response Mode', meaning you are responsible for sending the response (e.g., res.send()).",
    hint: "Manual response handling."
  },
  {
    id: 445,
    difficulty: "hard",
    category: "performance",
    question: "What is 'AOT' (Ahead-of-Time) compilation in Angular?",
    options: [
      "Compiling the app while it's running",
      "Compiling the app during the build process, before the browser downloads it",
      "Compiling only the CSS",
      "Compiling the code on the user's phone"
    ],
    answer: 1,
    explanation: "AOT results in faster rendering and smaller bundles because the compiler itself doesn't need to be shipped to the user.",
    hint: "Build-time compilation."
  },
  {
    id: 446,
    difficulty: "medium",
    category: "typescript_basics",
    question: "What is the difference between '==' and '===' in TypeScript (and JS)?",
    options: [
      "They are the same",
      "== compares values with type coercion; === compares both value and type",
      "=== is only for strings",
      "== is faster"
    ],
    answer: 1,
    explanation: "Always use === to avoid unexpected bugs caused by JavaScript's truthy/falsy conversion rules.",
    hint: "Strict equality."
  },
  {
    id: 447,
    difficulty: "hard",
    category: "nestjs_advanced",
    question: "What is the '@Sse()' decorator used for in NestJS?",
    options: [
      "To secure the app",
      "Server-Sent Events: a way for the server to push real-time updates over HTTP without WebSockets",
      "To set style elements",
      "To save energy"
    ],
    answer: 1,
    explanation: "SSE is a lightweight alternative to WebSockets for one-way (Server-to-Client) communication.",
    hint: "One-way real-time push."
  },
  {
    id: 448,
    difficulty: "medium",
    category: "general",
    question: "What is 'NPM' vs 'Yarn' vs 'PNPM'?",
    options: [
      "Package managers for JavaScript/TypeScript",
      "Three different programming languages",
      "Three types of databases",
      "Operating systems"
    ],
    answer: 0,
    explanation: "They all handle library installations but differ in speed, disk space usage, and lockfile formats.",
    hint: "The library installers."
  },
  {
    id: 449,
    difficulty: "hard",
    category: "architecture",
    question: "What is 'Inversion of Control' (IoC)?",
    options: [
      "When the user controls the server",
      "A design principle where the control of object creation is transferred to a container or framework (like NestJS)",
      "Turning the computer upside down",
      "Deleting the main function"
    ],
    answer: 1,
    explanation: "Instead of you creating 'new Service()', you ask the framework to provide it for you.",
    hint: "Framework-managed instances."
  },
  {
    id: 450,
    difficulty: "easy",
    category: "general",
    question: "Is this the last question in the 450-question bank?",
    options: ["No", "Yes", "Maybe", "I don't know"],
    answer: 1,
    explanation: "Congratulations! You have reached the end of the question bank.",
    hint: "The final answer."
  },
  // --- UNIT & E2E TESTING: JEST & CYPRESS/PLAYWRIGHT (451-470) ---
  {
    id: 451,
    difficulty: "medium",
    category: "testing",
    question: "In Jest, what is the difference between 'jest.spyOn()' and 'jest.fn()'?",
    options: [
      "spyOn tracks calls to an existing method while keeping original implementation; fn() creates a brand new mock function",
      "fn() is only for numbers; spyOn is for objects",
      "spyOn is faster than fn()",
      "There is no difference"
    ],
    answer: 0,
    explanation: "spyOn is useful when you want to verify a method was called but still let it execute its real logic (unless you chain .mockImplementation).",
    hint: "Existing vs New function."
  },
  {
    id: 452,
    difficulty: "hard",
    category: "testing",
    question: "What is 'Snapshot Testing' in Jest primarily used for?",
    options: [
      "Taking a literal photo of the screen",
      "Ensuring that the rendered output (HTML or JSON) does not change unexpectedly between test runs",
      "Checking the speed of the database",
      "Testing the camera API"
    ],
    answer: 1,
    explanation: "Jest saves the output to a file and compares it against future test runs. If they differ, the test fails.",
    hint: "Regression testing for UI/JSON."
  },
  {
    id: 453,
    difficulty: "hard",
    category: "testing",
    question: "In Cypress, why is it discouraged to use 'async/await' directly in test commands?",
    options: [
      "Cypress doesn't support JavaScript",
      "Cypress commands are already enqueued and handled by its own internal command runner; mixing them with async/await can cause race conditions",
      "It makes the tests too fast",
      "It is a security risk"
    ],
    answer: 1,
    explanation: "Cypress commands return 'Chains', not standard Promises. Using .then() is the correct way to handle results.",
    hint: "Command queueing."
  },
  {
    id: 454,
    difficulty: "medium",
    category: "testing",
    question: "What is the 'AAA' pattern in unit testing?",
    options: [
      "Always Ask Anyone",
      "Arrange, Act, Assert",
      "Analyze, Apply, Archive",
      "Authenticate, Authorize, Audit"
    ],
    answer: 1,
    explanation: "Arrange (setup), Act (run the code), Assert (check results). This keeps tests clean and readable.",
    hint: "Three steps of a test."
  },
  {
    id: 455,
    difficulty: "hard",
    category: "testing",
    question: "What is 'Code Coverage' and which tool does Jest use to generate it?",
    options: [
      "Measuring how much of your code is executed during tests; uses Istanbul (nyc)",
      "Checking the size of the files; uses Webpack",
      "Counting the number of lines of code; uses Git",
      "A type of insurance for developers"
    ],
    answer: 0,
    explanation: "Coverage reports show which lines, functions, and branches were missed by your test suite.",
    hint: "Execution metrics."
  },

  // --- CLOUD & DEVOPS: NESTJS + AWS/AZURE (471-485) ---
  {
    id: 471,
    difficulty: "hard",
    category: "cloud_devops",
    question: "When deploying NestJS to AWS Lambda, what is the main challenge regarding the application lifecycle?",
    options: [
      "Lambda doesn't support Node.js",
      "The 'Cold Start' issue and the fact that NestJS must bootstrap the entire DI container on every fresh execution",
      "NestJS is too big for AWS",
      "Lambda doesn't have a hard drive"
    ],
    answer: 1,
    explanation: "Heavy NestJS apps can have slow cold starts. Optimization involves using 'serverless-express' and minimizing module imports.",
    hint: "Initialization delay."
  },
  {
    id: 472,
    difficulty: "medium",
    category: "cloud_devops",
    question: "How do you securely manage Secrets (like DB passwords) in a production NestJS app on Azure?",
    options: [
      "Hardcode them in main.ts",
      "Use Azure Key Vault and inject them into Environment Variables via the App Service configuration",
      "Put them in a public GitHub repo",
      "Store them in the browser's LocalStorage"
    ],
    answer: 1,
    explanation: "Key Vault provides centralized, encrypted storage for sensitive application settings.",
    hint: "Cloud secret manager."
  },
  {
    id: 473,
    difficulty: "hard",
    category: "cloud_devops",
    question: "What is 'Blue-Green Deployment'?",
    options: [
      "Two environments (Blue and Green) where one is live and the other is receiving the new version for testing before switching traffic",
      "A way to color the UI",
      "Using two different databases",
      "Deploying only on weekends"
    ],
    answer: 0,
    explanation: "This minimizes downtime and allows for instant rollback if the 'Green' deployment fails.",
    hint: "Zero-downtime strategy."
  },
  {
    id: 474,
    difficulty: "medium",
    category: "cloud_devops",
    question: "Which AWS service is best suited for running a Dockerized NestJS app with auto-scaling?",
    options: ["S3", "ECS (Elastic Container Service) with Fargate", "Route53", "IAM"],
    answer: 1,
    explanation: "ECS/Fargate manages the infrastructure while scaling your containers based on CPU/RAM usage.",
    hint: "Container orchestration."
  },
  {
    id: 475,
    difficulty: "hard",
    category: "cloud_devops",
    question: "What is an 'Infrastructure as Code' (IaC) tool commonly used with TypeScript and NestJS?",
    options: ["AWS CDK (Cloud Development Kit)", "Photoshop", "Excel", "Postman"],
    answer: 0,
    explanation: "AWS CDK allows you to define cloud resources (S3, RDS) using actual TypeScript code.",
    hint: "Cloud resources via TS."
  },

  // --- FRONTEND STATE MANAGEMENT: SIGNALS VS NGRX (486-500) ---
  {
    id: 486,
    difficulty: "medium",
    category: "state_management",
    question: "In NgRx, what is the role of a 'Selector'?",
    options: [
      "To select which user logs in",
      "A pure function used to slice and transform specific parts of the global state for a component to consume",
      "A CSS selector for styling",
      "A way to select a database"
    ],
    answer: 1,
    explanation: "Selectors provide memoized access to the store, improving performance by avoiding unnecessary re-renders.",
    hint: "Slicing the global store."
  },
  {
    id: 487,
    difficulty: "hard",
    category: "state_management",
    question: "What is the 'Signal-based' alternative to 'BehaviorSubject' in Angular 17+?",
    options: ["computed()", "signal()", "effect()", "toSignal()"],
    answer: 1,
    explanation: "signal() creates a reactive value that doesn't require manual subscription management, unlike BehaviorSubject.",
    hint: "The reactive primitive."
  },
  {
    id: 488,
    difficulty: "hard",
    category: "state_management",
    question: "Why might you choose 'Signals' over 'NgRx' for a small to medium application?",
    options: [
      "Signals are more complex",
      "Signals reduce boilerplate (no actions, reducers, effects) and provide better performance through fine-grained updates",
      "Signals only work in the browser",
      "NgRx is deprecated"
    ],
    answer: 1,
    explanation: "NgRx is powerful for massive, complex state, but Signals are much lighter and easier to implement for most use cases.",
    hint: "Boilerplate reduction."
  },
  {
    id: 489,
    difficulty: "medium",
    category: "state_management",
    question: "What is an 'Effect' in NgRx used for?",
    options: [
      "Adding CSS animations",
      "Handling side effects like HTTP calls or logging in response to an Action",
      "Updating the HTML directly",
      "Deleting the state"
    ],
    answer: 1,
    explanation: "Effects listen for actions, perform an async task, and usually dispatch a new action with the result.",
    hint: "Async side-effect handler."
  },
  {
    id: 490,
    difficulty: "hard",
    category: "state_management",
    question: "What is 'Immutability' and why is it required in NgRx Reducers?",
    options: [
      "The state can never be changed; a new state object must be returned every time to trigger change detection",
      "The state can be changed anywhere",
      "Immutability is optional",
      "It makes the app slower"
    ],
    answer: 0,
    explanation: "Returning a new object reference allows Angular to use fast 'reference checks' for change detection.",
    hint: "New object vs Modified object."
  },
  {
    id: 491,
    difficulty: "medium",
    category: "state_management",
    question: "How do you combine multiple signals into one derived value?",
    options: ["Using computed()", "Using combined()", "Using sync()", "Using zip()"],
    answer: 0,
    explanation: "computed() creates a read-only signal that automatically re-calculates when its dependencies change.",
    hint: "Derived state."
  },
  {
    id: 492,
    difficulty: "hard",
    category: "state_management",
    question: "In NgRx, what does 'Redux DevTools' allow you to do?",
    options: [
      "Time-travel debugging (replaying actions to see how state changed over time)",
      "Write code faster",
      "Deploy to the cloud",
      "Edit CSS in real-time"
    ],
    answer: 0,
    explanation: "DevTools track every action and state change, allowing you to 'rewind' the app state.",
    hint: "Time-traveling."
  },
  {
    id: 493,
    difficulty: "medium",
    category: "testing",
    question: "What is a 'Mock' in the context of unit testing?",
    options: [
      "A person who laughs at code",
      "A fake implementation of a dependency (like a Service or Database) to isolate the code being tested",
      "A type of error",
      "A CSS framework"
    ],
    answer: 1,
    explanation: "Mocks simulate behavior and allow you to verify interactions (e.g., 'was the save method called?').",
    hint: "Isolation tool."
  },
  {
    id: 494,
    difficulty: "hard",
    category: "testing",
    question: "What is the difference between 'Shallow' and 'Deep' rendering in Angular component tests?",
    options: [
      "Shallow tests only the component itself (ignoring children); Deep tests the component and all nested children",
      "Shallow is for mobile; Deep is for web",
      "One uses CSS, the other uses HTML",
      "There is no difference"
    ],
    answer: 0,
    explanation: "Shallow testing is faster and ensures you are truly unit-testing the specific component logic.",
    hint: "Component isolation depth."
  },
  {
    id: 495,
    difficulty: "medium",
    category: "cloud_devops",
    question: "What is 'CI/CD'?",
    options: [
      "Continuous Integration and Continuous Deployment",
      "Code Inspection and Cloud Delivery",
      "Computer Intelligence and Cyber Defense",
      "Call Interface and Change Directory"
    ],
    answer: 0,
    explanation: "The automated process of building, testing, and deploying code changes.",
    hint: "The automated pipeline."
  },
  {
    id: 496,
    difficulty: "hard",
    category: "cloud_devops",
    question: "Which NestJS module is typically used to integrate with 'AWS S3' for file storage?",
    options: [
      "There is no official module; developers use the '@aws-sdk/client-s3' library directly in a Service",
      "@nestjs/s3",
      "@nestjs/files",
      "@nestjs/aws"
    ],
    answer: 0,
    explanation: "While community modules exist, most developers wrap the official AWS SDK in a custom Nest provider.",
    hint: "Official SDK wrapping."
  },
  {
    id: 497,
    difficulty: "medium",
    category: "typescript_advanced",
    question: "What is a 'Type Predicate' function?",
    options: [
      "A function that returns a boolean to narrow a type (e.g., 'arg is User')",
      "A function that predicts the future",
      "A function that only works on strings",
      "A math function"
    ],
    answer: 0,
    explanation: "It tells TypeScript: 'If this function returns true, the variable is definitely of this Type'.",
    hint: "The 'is' keyword."
  },
  {
    id: 498,
    difficulty: "hard",
    category: "testing",
    question: "What is 'TDD' (Test Driven Development)?",
    options: [
      "Writing tests after the code is finished",
      "Writing the test *before* the actual code, then writing code to make the test pass",
      "A type of database",
      "Total Developer Destruction"
    ],
    answer: 1,
    explanation: "Red -> Green -> Refactor cycle.",
    hint: "Test first approach."
  },
  {
    id: 499,
    difficulty: "medium",
    category: "nestjs_advanced",
    question: "What is the 'LoggerService' interface in NestJS used for?",
    options: [
      "To log in users",
      "To create a custom logging implementation (e.g., sending logs to Winston or Datadog) that replaces the built-in logger",
      "To read log files",
      "To hide errors"
    ],
    answer: 1,
    explanation: "By implementing this interface, you can control how every log in your app is formatted and stored.",
    hint: "Custom logging logic."
  },
  {
    id: 500,
    difficulty: "easy",
    category: "general",
    question: "What is the most important rule for writing clean TypeScript code?",
    options: [
      "Use 'any' everywhere",
      "Write code that is easy for others to read and maintain, using clear names and consistent types",
      "Make the files as long as possible",
      "Don't use comments"
    ],
    answer: 1,
    explanation: "Type safety and readability are the cornerstones of high-quality software development.",
    hint: "Readability and maintenance."
  },
  // --- ANGULAR COMPONENT LIFECYCLE (501-505) ---
  {
    id: 501,
    difficulty: "medium",
    category: "angular_lifecycle",
    question: "Which Angular lifecycle hook is called only once, immediately after the first 'ngOnChanges()'?",
    options: ["ngAfterViewInit()", "ngOnInit()", "ngDoCheck()", "ngAfterContentInit()"],
    answer: 1,
    explanation: "ngOnInit() is used to perform complex initializations and is called only once after the first change detection cycle.",
    hint: "The most common initialization hook."
  },
  {
    id: 502,
    difficulty: "hard",
    category: "angular_lifecycle",
    question: "Scenario: You need to access a child component using '@ViewChild'. In which lifecycle hook is the child component guaranteed to be initialized?",
    options: ["ngOnInit()", "ngAfterContentInit()", "ngAfterViewInit()", "ngOnChanges()"],
    answer: 2,
    explanation: "ngAfterViewInit() is called after the component's view and its children's views are fully initialized.",
    hint: "Post-view rendering."
  },
  {
    id: 503,
    difficulty: "medium",
    category: "angular_lifecycle",
    question: "Which hook should you use to clean up resources, such as unsubscribing from Observables, to prevent memory leaks?",
    options: ["ngOnDestroy()", "ngOnChanges()", "ngAfterViewChecked()", "ngDoCheck()"],
    answer: 0,
    explanation: "ngOnDestroy() is called just before Angular destroys the component, making it the ideal place for cleanup logic.",
    hint: "The final hook."
  },
  {
    id: 504,
    difficulty: "hard",
    category: "angular_lifecycle",
    question: "Which lifecycle hook is called immediately after Angular has checked the content projected into the component via 'ng-content'?",
    options: ["ngAfterViewChecked()", "ngAfterContentChecked()", "ngDoCheck()", "ngOnChanges()"],
    answer: 1,
    explanation: "ngAfterContentChecked() is called after every check of the projected content.",
    hint: "Follows ngAfterContentInit."
  },
  {
    id: 505,
    difficulty: "medium",
    category: "angular_lifecycle",
    question: "In Angular, what is the primary purpose of the 'ngDoCheck()' lifecycle hook?",
    options: [
      "To detect and act upon changes that Angular can't or won't detect on its own",
      "To initialize the component for the first time",
      "To handle input changes exclusively",
      "To perform DOM manipulation after rendering"
    ],
    answer: 0,
    explanation: "ngDoCheck() is a custom change detection hook used when the default change detection algorithm is insufficient.",
    hint: "Custom change detection."
  },

  // --- NESTJS & TYPESCRIPT PITFALLS (506-510) ---
  {
    id: 506,
    difficulty: "hard",
    category: "nestjs_pitfalls",
    question: "Pitfall: You defined a 'Request-scoped' provider, but noticed its dependencies are also being recreated for every request. Why does this happen?",
    options: [
      "It is a bug in NestJS",
      "Scope is 'bubbled up'; any provider depending on a request-scoped provider also becomes request-scoped",
      "Because the database is slow",
      "Request scope only works for controllers"
    ],
    answer: 1,
    explanation: "Injection of a request-scoped provider into a singleton provider changes the singleton's scope to request-scoped (Scope Bubbling).",
    hint: "Dependency chain impact."
  },
  {
    id: 507,
    difficulty: "medium",
    category: "typescript_pitfalls",
    question: "Pitfall: In TypeScript, why does 'myArray.map(async x => ...)' not wait for all promises to resolve before continuing?",
    options: [
      "map() is deprecated",
      "map() is synchronous and does not await the inner async function; it returns an array of Promises immediately",
      "Async functions cannot be used in map",
      "The browser is too old"
    ],
    answer: 1,
    explanation: "To wait for all results, you must wrap the map result in 'Promise.all(myArray.map(...))'.",
    hint: "Array methods vs Async/Await."
  },
  {
    id: 508,
    difficulty: "hard",
    category: "nestjs_pitfalls",
    question: "Pitfall: When two services in NestJS depend on each other (Circular Dependency), the application fails to start. What is the standard NestJS fix?",
    options: [
      "Moving both services into the same file",
      "Using the 'forwardRef()' utility in both the '@Inject()' decorator and the module providers",
      "Removing the '@Injectable()' decorator",
      "Converting one service into a global variable"
    ],
    answer: 1,
    explanation: "forwardRef() allows Nest to resolve dependencies that are not yet defined due to circularity.",
    hint: "Resolving 'Chicken and Egg' imports."
  },
  {
    id: 509,
    difficulty: "medium",
    category: "typescript_pitfalls",
    question: "Pitfall: You pass a class method as a callback (e.g., 'this.service.getData') to a third-party library and 'this' becomes undefined. How do you fix this in TypeScript?",
    options: [
      "Declare the method as an arrow function or use '.bind(this)'",
      "Change the class to an interface",
      "Use the 'static' keyword on the method",
      "Rename the method to 'constructor'"
    ],
    answer: 0,
    explanation: "In JavaScript/TypeScript, passing a method as a reference loses its 'this' context unless it is bound or defined as an arrow function.",
    hint: "Lexical scoping of 'this'."
  },
  {
    id: 510,
    difficulty: "hard",
    category: "nestjs_pitfalls",
    question: "Pitfall: In a NestJS application using TypeScript, you find that a dependency is 'undefined' despite being in the providers array. What is a common cause?",
    options: [
      "The provider was not exported from its module",
      "Circular dependency without 'forwardRef()'",
      "A missing '@Injectable()' decorator on the service class",
      "All of the above"
    ],
    answer: 3,
    explanation: "Missing decorators, missing exports, or circular dependencies are the primary reasons DI fails in NestJS.",
    hint: "Standard DI requirements."
  },

  // --- GUARDS, FILTERS & DEBUGGING (511-515) ---
  {
    id: 511,
    difficulty: "hard",
    category: "nestjs_debugging",
    question: "Best Practice: When debugging a Global Exception Filter, why might 'ArgumentsHost.switchToHttp()' fail in a hybrid application?",
    options: [
      "Because the filter only works for Express",
      "The same filter might be catching an error from a Microservice (RPC) or WebSocket, which does not have HTTP context",
      "The computer ran out of memory",
      "Global filters do not support host switching"
    ],
    answer: 1,
    explanation: "Global filters catch errors from all contexts; you must check 'host.getType()' before calling context-specific methods.",
    hint: "Multi-protocol context safety."
  },
  {
    id: 512,
    difficulty: "medium",
    category: "nestjs_guards",
    question: "Where do NestJS Guards sit in the request lifecycle relative to Interceptors?",
    options: [
      "After Interceptors",
      "Before Interceptors",
      "At the same time",
      "Guards only run after the controller"
    ],
    answer: 1,
    explanation: "Guards execute before Interceptors, Pipes, and the route handler itself.",
    hint: "Gatekeeper vs Transformer order."
  },
  {
    id: 513,
    difficulty: "hard",
    category: "remote_api_debugging",
    question: "Scenario: Your NestJS server is failing to call a remote REST API over HTTPS in a local dev environment due to 'self-signed certificate' errors. What is the safest best practice fix?",
    options: [
      "Set process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'",
      "Disable HTTPS on the remote server",
      "Add the remote server's CA certificate to your local trusted store or use an 'httpsAgent' with the CA in the Axios request",
      "Switch to plain text HTTP"
    ],
    answer: 2,
    explanation: "Turning off TLS validation (option 0) is a major security risk; using a proper CA configuration is the correct architectural approach.",
    hint: "Secure certificate handling."
  },
  {
    id: 514,
    difficulty: "medium",
    category: "browser_debugging",
    question: "Best Practice: When debugging Angular performance, which Chrome DevTools tool should you use to visualize change detection cycles and frame drops?",
    options: [
      "Network Tab",
      "Performance Monitor / Profiler",
      "Application Tab",
      "Console log sampling"
    ],
    answer: 1,
    explanation: "The Performance tab allows you to record 'Profile' sessions to see exactly where Angular change detection is taking too long.",
    hint: "Measuring execution time."
  },
  {
    id: 515,
    difficulty: "hard",
    category: "angular_guards",
    question: "In Angular, which guard should you use to prevent a user from leaving a route with unsaved changes?",
    options: ["CanActivate", "CanLoad", "CanDeactivate", "CanActivateChild"],
    answer: 2,
    explanation: "CanDeactivate is specifically designed to check if a user can navigate away from the current route.",
    hint: "Preventing exit."
  },
];

// --- TOP 100 INTERVIEW INDICES ---
// These indices point to unique, high-value questions from the bank for rapid interview prep.
const hotsQuestions = [
  0, 1, 2, 3, 365, 366, 367,
  25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 39, 40, 41, 42, 43, 44, 
  46, 47, 48, 49, 75, 76, 77, 79, 80, 81, 82, 83, 84, 95, 96, 97, 147, 148, 149,
  197, 198, 199, 247, 248, 249, 282, 283, 284, 369, 370, 371, 4, 7, 8, 9, 12, 13, 14, 15, 16, 18, 19, 21, 22, 24, // TypeScript Basics/Advanced
  50, 51, 52, 53, 54, 57, 58, 59, 60, 62, 63, 65, 66, 67, 68, 70, 71, 72, 74,
  120, 121, 170, 171, 172, 222, 223, 261, 262, 263, 
];
