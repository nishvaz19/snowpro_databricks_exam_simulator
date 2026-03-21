/* ======================================================
   NODE.JS CERTIFICATION QUESTION BANK (Batch 1: 1-50)
   Topics: Event Loop, Buffer, Streams, FS, and Async Patterns
   ====================================================== */
const questionBank = [
  {
    id: 1,
    difficulty: "medium",
    category: "event_loop",
    question: "Which phase of the Node.js Event Loop is responsible for executing scripts scheduled by 'setTimeout()' and 'setInterval()'?",
    options: ["Poll", "Check", "Timers", "Close callbacks"],
    answer: 2,
    explanation: "The 'Timers' phase executes callbacks scheduled by setTimeout() and setInterval() once the threshold has passed.",
    hint: "Think of time-based execution."
  },
  {
    id: 2,
    difficulty: "hard",
    category: "async_patterns",
    question: "Given the following code, what is the correct execution order?\n\nsetImmediate(() => console.log('A'));\nprocess.nextTick(() => console.log('B'));\nsetTimeout(() => console.log('C'), 0);",
    options: ["A, B, C", "B, C, A", "C, B, A", "B, A, C"],
    answer: 1,
    explanation: "process.nextTick fires immediately after the current operation. Timers (0ms) usually fire before setImmediate (Check phase) depending on the loop entry point.",
    hint: "NextTick is the most 'immediate' of all."
  },
  {
    id: 3,
    difficulty: "medium",
    category: "buffers",
    question: "When creating a Buffer using 'Buffer.alloc(10)', what is the default content of the buffer?",
    options: ["Random data", "Empty strings", "Zeros (0x0)", "Undefined"],
    answer: 2,
    explanation: "Buffer.alloc(size) creates a zero-filled Buffer, whereas Buffer.allocUnsafe(size) might contain old sensitive data.",
    hint: "Safe allocation vs Unsafe."
  },
  {
    id: 4,
    difficulty: "hard",
    category: "streams",
    question: "You are implementing a custom Readable stream. Which method MUST you override to fetch data for the consumer?",
    options: ["_write()", "_read()", "_transform()", "_flush()"],
    answer: 1,
    explanation: "The _read() method is the internal implementation that every Readable stream must provide to push data into the internal buffer.",
    hint: "The internal underscore method for reading."
  },
  {
    id: 5,
    difficulty: "medium",
    category: "scenarios",
    question: "A company needs to process a 10GB log file without exceeding 512MB of RAM. Which Node.js approach is best?",
    options: ["fs.readFileSync()", "fs.readFile()", "fs.createReadStream()", "Child Processes"],
    answer: 2,
    explanation: "Streams allow you to process data piece-by-piece (chunks), which keeps memory usage low regardless of file size.",
    hint: "Don't load the whole file at once."
  },
  {
    id: 6,
    difficulty: "easy",
    category: "modules",
    question: "In CommonJS, how do you export a specific function from a file named 'math.js'?",
    options: ["export function add() {}", "module.exports = { add };", "exports.default = add;", "export.add = add;"],
    answer: 1,
    explanation: "In Node.js (CommonJS), module.exports is the object that gets returned when another file requires it.",
    hint: "The object used for exports."
  },
  {
    id: 7,
    difficulty: "hard",
    category: "errors",
    question: "In an EventEmitter, what happens if an 'error' event is emitted but there is no listener attached to the 'error' event?",
    options: ["The error is ignored", "Node.js logs a warning", "The process crashes and prints a stack trace", "The event is buffered"],
    answer: 2,
    explanation: "If an EventEmitter does not have at least one listener for 'error', it will throw the error and exit the Node.js process.",
    hint: "Unhandled 'error' events are fatal."
  },
  {
    id: 8,
    difficulty: "medium",
    category: "scenarios",
    question: "You need to execute a heavy CPU-bound calculation (like PBKDF2 hashing) without blocking the main event loop. What is the modern Node.js solution?",
    options: ["Cluster module", "Worker Threads", "setTimeout recursion", "Asynchronous callbacks"],
    answer: 1,
    explanation: "Worker Threads allow execution of JavaScript in parallel threads, making them ideal for CPU-intensive tasks.",
    hint: "Parallel execution in JS."
  },
  {
    id: 9,
    difficulty: "hard",
    category: "event_loop",
    question: "Which of the following describes the 'Poll' phase of the Event Loop?",
    options: ["Executes close callbacks", "Calculates how long to block for I/O and processes items in the poll queue", "Executes setImmediate()", "Executes process.nextTick()"],
    answer: 1,
    explanation: "The Poll phase calculates the I/O timeout and processes I/O related events.",
    hint: "The 'heart' of the loop for I/O."
  },
  {
    id: 10,
    difficulty: "medium",
    category: "fs",
    question: "Which 'fs' method allows you to change the permissions of a file in Node.js?",
    options: ["fs.chown()", "fs.chmod()", "fs.access()", "fs.stat()"],
    answer: 1,
    explanation: "fs.chmod() (change mode) is used to change file permissions.",
    hint: "Unix command name."
  },
  {
    id: 11,
    difficulty: "easy",
    category: "process",
    question: "Which property of the 'process' object returns an array containing the command-line arguments passed when the Node.js process was launched?",
    options: ["process.params", "process.env", "process.argv", "process.args"],
    answer: 2,
    explanation: "process.argv returns an array where the first element is the node path, the second is the script path, and the rest are user arguments.",
    hint: "Argument Vector."
  },
  {
    id: 12,
    difficulty: "hard",
    category: "streams",
    question: "What is 'backpressure' in the context of Node.js streams?",
    options: ["When the readable stream is too slow", "When the writable stream's internal buffer is full and cannot handle more data", "When a stream fails to close", "When the CPU usage hits 100%"],
    answer: 1,
    explanation: "Backpressure occurs when data is being written faster than it can be consumed/written to the destination, causing the buffer to fill up.",
    hint: "Writing faster than reading."
  },
  {
    id: 13,
    difficulty: "medium",
    category: "child_process",
    question: "Which 'child_process' method is specifically designed to spawn a new Node.js process and create an IPC (Inter-Process Communication) channel?",
    options: ["spawn()", "exec()", "fork()", "execFile()"],
    answer: 2,
    explanation: "fork() is a special case of spawn() specifically for spawning new Node.js processes with a built-in communication channel.",
    hint: "Node-to-Node communication."
  },
  {
    id: 14,
    difficulty: "hard",
    category: "async_patterns",
    question: "What is the primary difference between 'Promise.all()' and 'Promise.allSettled()'?",
    options: ["Promise.all() is faster", "Promise.all() rejects immediately if any promise fails; Promise.allSettled() waits for all to finish regardless of outcome", "Promise.all() only works with async/await", "There is no difference"],
    answer: 1,
    explanation: "Promise.allSettled() is useful when you want to know the result of every promise, even if some fail.",
    hint: "Wait for success vs wait for everything."
  },
  {
    id: 15,
    difficulty: "medium",
    category: "scenarios",
    question: "A developer wants to listen for a single occurrence of an event and then automatically remove the listener. Which method should they use?",
    options: ["emitter.on()", "emitter.once()", "emitter.removeListener()", "emitter.addListener()"],
    answer: 1,
    explanation: "The once() method adds a one-time listener for the event.",
    hint: "Happens only one time."
  },
  {
    id: 16,
    difficulty: "easy",
    category: "npm",
    question: "Which command is used to initialize a new 'package.json' file with default values automatically?",
    options: ["npm start", "npm init -y", "npm install --save", "npm config set"],
    answer: 1,
    explanation: "The -y (yes) flag skips the interactive questionnaire and uses defaults.",
    hint: "Auto-initialization."
  },
  {
    id: 17,
    difficulty: "hard",
    category: "buffers",
    question: "Why is 'Buffer.from()' preferred over 'new Buffer()' in modern Node.js versions?",
    options: ["It is faster", "It supports more encodings", "The Buffer constructor is deprecated due to security and usability concerns", "It uses less memory"],
    answer: 2,
    explanation: "The 'new Buffer()' constructor was deprecated because it could lead to security vulnerabilities if used with user-provided integers.",
    hint: "Constructor deprecation."
  },
  {
    id: 18,
    difficulty: "medium",
    category: "http",
    question: "In a standard 'http.createServer' callback, what is the 'res' object?",
    options: ["A Readable Stream", "A Writable Stream", "A Transform Stream", "A Buffer"],
    answer: 1,
    explanation: "The response (res) object is an instance of 'http.ServerResponse', which implements the Writable Stream interface.",
    hint: "You 'write' the data to the client."
  },
  {
    id: 19,
    difficulty: "hard",
    category: "scenarios",
    question: "You need to ensure that a specific piece of code runs after the current Poll phase of the event loop completes. Which function do you use?",
    options: ["process.nextTick()", "setTimeout(..., 0)", "setImmediate()", "Promise.resolve()"],
    answer: 2,
    explanation: "setImmediate() is designed to execute a script once the current poll phase completes.",
    hint: "Check phase execution."
  },
  {
    id: 20,
    difficulty: "medium",
    category: "cryptography",
    question: "Which core Node.js module is used for generating hashes and handling HMAC, ciphers, and deciphers?",
    options: ["crypto", "security", "hash", "ssl"],
    answer: 0,
    explanation: "The 'crypto' module provides cryptographic functionality that includes a set of wrappers for OpenSSL's hash, HMAC, cipher, and more.",
    hint: "Standard module for encryption."
  },
  {
    id: 21,
    difficulty: "hard",
    category: "event_loop",
    question: "What happens when the 'stack' in the V8 engine is empty but the 'callback queue' has tasks?",
    options: ["Node.js exits", "The Event Loop moves a task from the queue to the stack", "The process enters an idle state", "Garbage collection is forced"],
    answer: 1,
    explanation: "The Event Loop continuously checks if the call stack is empty; if so, it pushes the first task from the callback queue onto the stack.",
    hint: "The core mechanism of asynchronous execution."
  },
  {
    id: 22,
    difficulty: "medium",
    category: "util",
    question: "Which 'util' method is used to turn a callback-based function into a Promise-based one?",
    options: ["util.promisify()", "util.asyncify()", "util.callbackify()", "util.toPromise()"],
    answer: 0,
    explanation: "util.promisify() takes a function following the common error-first callback style and returns a version that returns promises.",
    hint: "Modernizing legacy code."
  },
  {
    id: 23,
    difficulty: "hard",
    category: "streams",
    question: "You are piping a Readable stream to a Writable stream using 'readable.pipe(writable)'. What happens to the writable stream if the readable stream emits an 'error'?",
    options: ["The writable stream is automatically destroyed", "The error is swallowed", "The writable stream remains open and you must handle the error manually", "The process exits"],
    answer: 2,
    explanation: "By default, pipe() does not forward errors. You must attach error listeners to both streams manually to prevent memory leaks or crashes.",
    hint: "Errors don't pipe."
  },
  {
    id: 24,
    difficulty: "easy",
    category: "path",
    question: "Which 'path' module method returns the extension of a file path?",
    options: ["path.ext()", "path.extname()", "path.suffix()", "path.getExtension()"],
    answer: 1,
    explanation: "path.extname() returns the extension of the path, from the last occurrence of the . (period) character.",
    hint: "Standard path utility."
  },
  {
    id: 25,
    difficulty: "medium",
    category: "scenarios",
    question: "A high-traffic web server is running out of memory. You suspect a leak in an EventEmitter. How can you find how many listeners are attached to a specific event?",
    options: ["emitter.listenerCount(eventName)", "emitter.getListeners()", "process.memoryUsage()", "emitter.allListeners()"],
    answer: 0,
    explanation: "listenerCount() provides the number of listeners currently listening to the given event.",
    hint: "Counting subscribers."
  },
  {
    id: 26,
    difficulty: "hard",
    category: "child_process",
    question: "What is the primary difference between 'exec' and 'spawn' in Node.js?",
    options: [
      "exec handles strings, spawn handles arrays",
      "exec buffers the entire output in memory; spawn streams it",
      "spawn only works on Windows",
      "exec is more secure than spawn"
    ],
    answer: 1,
    explanation: "exec() is better for small outputs but risky for large ones because of its buffer limit. spawn() is better for long-running processes or large data.",
    hint: "Buffering vs Streaming."
  },
  {
    id: 27,
    difficulty: "medium",
    category: "global",
    question: "Which of the following is NOT a global object in Node.js?",
    options: ["__dirname", "Buffer", "console", "require"],
    answer: 3,
    explanation: "While 'require' looks global, it is actually local to each module (wrapped in a function wrapper).",
    hint: "Module-level scope."
  },
  {
    id: 28,
    difficulty: "hard",
    category: "errors",
    question: "Which event is emitted on the 'process' object when a Promise is rejected and no error handler is attached to it?",
    options: ["uncaughtException", "unhandledRejection", "promiseError", "exit"],
    answer: 1,
    explanation: "unhandledRejection is used to detect promises that were rejected without a .catch() block.",
    hint: "Specific to rejected promises."
  },
  {
    id: 29,
    difficulty: "medium",
    category: "scenarios",
    question: "You want to create a cluster of Node.js processes to utilize all CPU cores of a server. Which module is native to Node.js for this?",
    options: ["pm2", "cluster", "os", "multi-thread"],
    answer: 1,
    explanation: "The 'cluster' module allows easy creation of child processes that all share server ports.",
    hint: "Native load balancing."
  },
  {
    id: 30,
    difficulty: "hard",
    category: "security",
    question: "To prevent 'Regular Expression Denial of Service' (ReDoS) in Node.js, what is the best practice?",
    options: ["Avoid using Regex", "Use the 'safe-regex' library or validate regex complexity", "Increase the thread pool size", "Use Worker Threads for every regex"],
    answer: 1,
    explanation: "Vulnerable regex with exponential time complexity can block the Event Loop. Validating regex or using safer alternatives prevents ReDoS.",
    hint: "Blocking the main thread with complex patterns."
  },
  {
    id: 31,
    difficulty: "medium",
    category: "fs",
    question: "In Node.js, what is the default behavior of 'fs.watch()'?",
    options: [
      "It reads the file every 100ms",
      "It uses native OS notifications to signal file changes",
      "It only works for directories",
      "It is deprecated"
    ],
    answer: 1,
    explanation: "fs.watch() uses the native OS features (like inotify on Linux or FSEvents on macOS) to monitor changes efficiently.",
    hint: "OS-level efficiency."
  },
  {
    id: 32,
    difficulty: "hard",
    category: "event_loop",
    question: "Which of the following operations is handled by the 'libuv' thread pool by default?",
    options: ["Network I/O", "File I/O (fs.readFile)", "setTimeout", "setImmediate"],
    answer: 1,
    explanation: "While network I/O is often handled by the OS kernel (epoll/kqueue), File I/O and some crypto/dns functions use the libuv thread pool.",
    hint: "Blocking operations that need threads."
  },
  {
    id: 33,
    difficulty: "medium",
    category: "http",
    question: "Which header is required for a Node.js server to inform the client that it is sending JSON data?",
    options: ["Content-Type: application/javascript", "Content-Type: application/json", "Type: json", "Accept: json"],
    answer: 1,
    explanation: "application/json is the standard MIME type for JSON.",
    hint: "Standard Web MIME type."
  },
  {
    id: 34,
    difficulty: "hard",
    category: "scenarios",
    question: "A Node.js application is becoming unresponsive under load, but CPU and Memory are low. What is the most likely cause?",
    options: [
      "Garbage collection is running too often",
      "The Event Loop is blocked by a long-running synchronous operation",
      "The network card is failing",
      "There are too many Worker Threads"
    ],
    answer: 1,
    explanation: "Even with low overall resource usage, a single synchronous loop can block the single-threaded Event Loop, preventing any new requests from being handled.",
    hint: "Single-thread bottleneck."
  },
  {
    id: 35,
    difficulty: "easy",
    category: "os",
    question: "Which 'os' module method returns the amount of free system memory in bytes?",
    options: ["os.memory()", "os.freemem()", "os.totalmem()", "os.unused()"],
    answer: 1,
    explanation: "os.freemem() returns the free memory; os.totalmem() returns total memory.",
    hint: "Short for free memory."
  },
  {
    id: 36,
    difficulty: "hard",
    category: "streams",
    question: "What does the 'cork()' method do on a Writable stream?",
    options: [
      "It destroys the stream",
      "It forces data to be buffered in memory until 'uncork()' is called",
      "It compresses the stream data",
      "It stops the reading process"
    ],
    answer: 1,
    explanation: "cork() buffers all written data in memory. This is used to avoid many small writes to the underlying system, improving performance.",
    hint: "Force buffering."
  },
  {
    id: 37,
    difficulty: "medium",
    category: "dns",
    question: "Which 'dns' module method is used to resolve a hostname into an array of IP addresses using the OS's facilities?",
    options: ["dns.lookup()", "dns.resolve()", "dns.get()", "dns.find()"],
    answer: 0,
    explanation: "dns.lookup() uses the underlying OS getaddrinfo call, while dns.resolve() uses the network to perform actual DNS queries.",
    hint: "OS-level lookup."
  },
  {
    id: 38,
    difficulty: "hard",
    category: "v8",
    question: "What is the 'Heap' in Node.js?",
    options: [
      "Where synchronous code is stored",
      "The memory where V8 stores objects and dynamic data",
      "A storage area for file buffers",
      "A queue for the event loop"
    ],
    answer: 1,
    explanation: "The Heap is the portion of memory used by the V8 engine for storing objects, strings, and closures.",
    hint: "Object storage."
  },
  {
    id: 39,
    difficulty: "medium",
    category: "modules",
    question: "In Node.js 14+, what file extension is used to indicate a file should be treated as an ECMAScript Module (ESM) regardless of 'package.json' settings?",
    options: [".js", ".esm", ".mjs", ".cjs"],
    answer: 2,
    explanation: ".mjs explicitly tells Node.js to use the ESM loader (import/export syntax).",
    hint: "Module JS extension."
  },
  {
    id: 40,
    difficulty: "hard",
    category: "scenarios",
    question: "You need to securely compare two passwords or tokens to prevent 'Timing Attacks'. Which 'crypto' method should you use?",
    options: ["crypto.equals()", "crypto.timingSafeEqual()", "crypto.compare()", "== or ==="],
    answer: 1,
    explanation: "timingSafeEqual() ensures the comparison takes the same amount of time regardless of how many characters match, preventing attackers from guessing content based on time.",
    hint: "Safety against side-channel attacks."
  },
  {
    id: 41,
    difficulty: "easy",
    category: "process",
    question: "Which signal is sent to a Node.js process to request a graceful shutdown?",
    options: ["SIGKILL", "SIGTERM", "SIGSTOP", "SIGINT"],
    answer: 1,
    explanation: "SIGTERM is the standard signal for termination; SIGINT is usually from Ctrl+C.",
    hint: "Standard termination signal."
  },
  {
    id: 42,
    difficulty: "hard",
    category: "worker_threads",
    question: "How do Worker Threads communicate with the main thread?",
    options: [
      "Through a shared global variable",
      "Using 'parentPort.postMessage()' and 'worker.on('message')'",
      "Via the local file system",
      "They cannot communicate"
    ],
    answer: 1,
    explanation: "Worker threads use a message-passing system to communicate data across threads.",
    hint: "Message posting."
  },
  {
    id: 43,
    difficulty: "medium",
    category: "fs",
    question: "Which flag in 'fs.writeFile()' should you use if you want to append data to an existing file instead of overwriting it?",
    options: ["'w'", "'r'", "'a'", "'x'"],
    answer: 2,
    explanation: "'a' stands for 'append'. The file is created if it does not exist.",
    hint: "First letter of the action."
  },
  {
    id: 44,
    difficulty: "hard",
    category: "scenarios",
    question: "A developer is using 'async/await' inside a '.forEach()' loop to process a database query for each item. What is the likely result?",
    options: [
      "The items are processed sequentially",
      "The loop finishes before the queries complete because forEach is not promise-aware",
      "It throws a syntax error",
      "The process blocks"
    ],
    answer: 1,
    explanation: "forEach() does not wait for promises. For sequential processing, use a 'for...of' loop or 'Promise.all()' for parallel.",
    hint: "Array methods and async."
  },
  {
    id: 45,
    difficulty: "medium",
    category: "util",
    question: "Which method in the 'util' module allows you to format a string like 'console.log' but returns the string instead of printing it?",
    options: ["util.format()", "util.inspect()", "util.parse()", "util.print()"],
    answer: 0,
    explanation: "util.format() returns a formatted string using the first argument as a printf-like format.",
    hint: "String formatting."
  },
  {
    id: 46,
    difficulty: "hard",
    category: "http",
    question: "What is the purpose of 'agent' in 'http.request()'?",
    options: [
      "To act as a proxy server",
      "To manage connection pooling and reuse (keep-alive)",
      "To encrypt the traffic",
      "To parse JSON automatically"
    ],
    answer: 1,
    explanation: "Agents manage the persistence and reuse of TCP connections for HTTP clients.",
    hint: "Connection management."
  },
  {
    id: 47,
    difficulty: "easy",
    category: "global",
    question: "Which of the following is used to resolve the full path to a module without actually loading it?",
    options: ["require.resolve()", "require.path()", "module.find()", "path.join()"],
    answer: 0,
    explanation: "require.resolve() uses the internal require mechanism to find the file path but does not execute the module.",
    hint: "Resolve the path."
  },
  {
    id: 48,
    difficulty: "hard",
    category: "streams",
    question: "When using a Transform stream, which method must be called within the '_transform' function to signal that the current chunk is processed?",
    options: ["this.push()", "callback()", "done()", "next()"],
    answer: 1,
    explanation: "The callback function must be called to signal that the stream is ready for the next chunk.",
    hint: "The second argument to _transform."
  },
  {
    id: 49,
    difficulty: "medium",
    category: "scenarios",
    question: "To improve security, you want to ensure your Node.js application does not run as a 'root' user. Which process property allows you to check the current user ID (on POSIX)?",
    options: ["process.uid", "process.getuid()", "process.user", "process.env.USER"],
    answer: 1,
    explanation: "process.getuid() returns the numeric user identity of the process.",
    hint: "Numeric user ID."
  },
  {
    id: 50,
    difficulty: "hard",
    category: "performance",
    question: "Which command-line flag can be used to profile a Node.js application and identify performance bottlenecks using V8's internal profiler?",
    options: ["--debug", "--inspect", "--prof", "--trace-sync-io"],
    answer: 2,
    explanation: "--prof generates a v8.log file that can be analyzed to see where the CPU is spending time.",
    hint: "Short for profiler."
  },
  
  /* ======================================================
   NODE.JS CERTIFICATION QUESTION BANK (Batch 2: 51-100)
   Topics: Express, Middleware, Security, Testing, & Clusters
   ====================================================== */
  {
    id: 51,
    difficulty: "medium",
    category: "express",
    question: "In Express.js, what is the correct order of arguments for an error-handling middleware function?",
    options: ["(req, res, next)", "(err, req, res, next)", "(req, res, err, next)", "(err, res, next)"],
    answer: 1,
    explanation: "Error-handling middleware must take four arguments to be recognized by Express as an error handler.",
    hint: "Starts with the error object."
  },
  {
    id: 52,
    difficulty: "hard",
    category: "security",
    question: "Which HTTP header, often set using the 'helmet' library, prevents browsers from performing MIME-type sniffing?",
    options: ["X-Frame-Options", "X-Content-Type-Options", "Content-Security-Policy", "Strict-Transport-Security"],
    answer: 1,
    explanation: "X-Content-Type-Options: nosniff prevents the browser from interpreting files as something other than what is declared in the Content-Type.",
    hint: "Prevents 'sniffing'."
  },
  {
    id: 53,
    difficulty: "medium",
    category: "scenarios",
    question: "You want to share data between different middleware functions in the same request-response cycle in Express. Where should you store it?",
    options: ["process.env", "res.locals", "global", "app.set()"],
    answer: 1,
    explanation: "res.locals is an object scoped to the request and is ideal for passing information to templates or subsequent middleware.",
    hint: "Local to the response."
  },
  {
    id: 54,
    difficulty: "hard",
    category: "testing",
    question: "When unit testing a Node.js function that uses 'fs.readFile', which technique is used to prevent actual disk access and ensure tests are fast?",
    options: ["Integration Testing", "Mocking/Stubbing", "Spanning", "Clustering"],
    answer: 1,
    explanation: "Mocking replaces the real 'fs' module with a fake one to simulate file returns without hitting the hardware.",
    hint: "Replacement for the real thing."
  },
  {
    id: 55,
    difficulty: "medium",
    category: "performance",
    question: "When using the 'cluster' module, which event is emitted by the master process when a worker process terminates?",
    options: ["close", "exit", "disconnect", "death"],
    answer: 1,
    explanation: "The 'exit' event on the cluster object alerts the master that a worker has died, often used to spawn a replacement.",
    hint: "Standard process termination event."
  },
  {
    id: 56,
    difficulty: "easy",
    category: "express",
    question: "Which Express method is used to serve static files such as images, CSS, and JavaScript?",
    options: ["app.serve()", "app.static()", "express.static()", "express.assets()"],
    answer: 2,
    explanation: "express.static is the built-in middleware function in Express to serve static files.",
    hint: "Middleware from the express object."
  },
  {
    id: 57,
    difficulty: "hard",
    category: "security",
    question: "What is the security risk of using 'eval()' or 'new Function()' with user-supplied strings in Node.js?",
    options: ["Memory Leak", "Remote Code Execution (RCE)", "DDoS", "Cross-Site Request Forgery"],
    answer: 1,
    explanation: "eval() executes strings as code; if a user controls the string, they can execute arbitrary commands on your server.",
    hint: "Execution of malicious input."
  },
  {
    id: 58,
    difficulty: "medium",
    category: "scenarios",
    question: "A client sends a request with a large JSON body. Which middleware is required in modern Express to parse this into 'req.body'?",
    options: ["body-parser (external)", "express.json()", "express.urlencoded()", "req.on('data')"],
    answer: 1,
    explanation: "Since Express 4.16.0, the JSON parser is built back into Express via express.json().",
    hint: "Native JSON middleware."
  },
  {
    id: 59,
    difficulty: "hard",
    category: "streams",
    question: "Which method is used to manually signal the end of a Writable stream, ensuring all data is flushed before closing?",
    options: ["stream.stop()", "stream.close()", "stream.end()", "stream.finish()"],
    answer: 2,
    explanation: "The end() method signals that no more data will be written to the stream.",
    hint: "The opposite of starting."
  },
  {
    id: 60,
    difficulty: "medium",
    category: "npm",
    question: "In 'package.json', what does the caret (^) symbol in a version like '^1.2.3' signify?",
    options: [
      "Install exactly 1.2.3",
      "Allow updates to any version",
      "Allow minor and patch updates, but not major versions",
      "Allow only patch updates"
    ],
    answer: 2,
    explanation: "The caret (^) allows compatible updates (minor/patch) but prevents breaking major version changes.",
    hint: "Compatible with version 1.x.x."
  },
  {
    id: 61,
    difficulty: "hard",
    category: "async_patterns",
    question: "What is the result of 'await'ing a non-Promise value in an async function?",
    options: [
      "It throws a TypeError",
      "The value is wrapped in a resolved Promise and returned",
      "The function pauses indefinitely",
      "The value is returned as null"
    ],
    answer: 1,
    explanation: "If the value is not a promise, await converts the value to a resolved Promise and waits for it.",
    hint: "Implicit conversion."
  },
  {
    id: 62,
    difficulty: "medium",
    category: "scenarios",
    question: "You need to ensure your application restarts automatically if the Node.js process crashes. Which tool is commonly used in production?",
    options: ["Nodemon", "PM2", "Npm start", "Supervisor"],
    answer: 1,
    explanation: "PM2 is a production process manager for Node.js that handles restarts, clustering, and monitoring.",
    hint: "Production Process Manager."
  },
  {
    id: 63,
    difficulty: "hard",
    category: "event_loop",
    question: "In which phase of the Event Loop are 'setImmediate()' callbacks executed?",
    options: ["Timers", "Poll", "Check", "Close"],
    answer: 2,
    explanation: "The 'Check' phase is specifically for executing setImmediate() callbacks.",
    hint: "Check phase."
  },
  {
    id: 64,
    difficulty: "easy",
    category: "express",
    question: "Which HTTP method is typically used to update an existing resource by replacing it entirely?",
    options: ["POST", "PATCH", "PUT", "GET"],
    answer: 2,
    explanation: "PUT is used for full replacements; PATCH is for partial updates.",
    hint: "Replace/Overwrite."
  },
  {
    id: 65,
    difficulty: "hard",
    category: "security",
    question: "To prevent Brute Force attacks on a login route, which strategy is most effective in Node.js?",
    options: ["Using HTTPS", "Implementing Rate Limiting", "Hashing passwords with MD5", "Hiding the API URL"],
    answer: 1,
    explanation: "Rate limiting restricts the number of attempts a user can make in a given timeframe.",
    hint: "Limit the frequency of requests."
  },
  {
    id: 66,
    difficulty: "medium",
    category: "modules",
    question: "What is the purpose of the 'main' field in a 'package.json' file?",
    options: [
      "Defines the project name",
      "Defines the entry point of the application when the package is required",
      "Lists the primary dependencies",
      "Runs the main test suite"
    ],
    answer: 1,
    explanation: "When you 'require' a folder/package, Node looks at the 'main' field to know which file to load.",
    hint: "Entry point."
  },
  {
    id: 67,
    difficulty: "hard",
    category: "performance",
    question: "By default, how many threads are available in the libuv thread pool?",
    options: ["1", "2", "4", "8"],
    answer: 2,
    explanation: "Node.js (via libuv) starts with 4 threads by default, though this can be changed with UV_THREADPOOL_SIZE.",
    hint: "Square of two."
  },
  {
    id: 68,
    difficulty: "medium",
    category: "scenarios",
    question: "You want to compress HTTP responses to reduce latency. Which middleware is standard for this in Express?",
    options: ["zipper", "compression", "shrink", "express-gzip"],
    answer: 1,
    explanation: "The 'compression' middleware is the standard way to support Gzip/Deflate in Express.",
    hint: "Opposite of expansion."
  },
  {
    id: 69,
    difficulty: "hard",
    category: "testing",
    question: "In the context of Mocha/Jest, what is the 'done' callback used for?",
    options: [
      "To signal the end of a synchronous test",
      "To signal completion of an asynchronous test that uses callbacks",
      "To stop the test runner",
      "To cleanup the database"
    ],
    answer: 1,
    explanation: "When testing callbacks, the test runner waits until 'done' is called before moving to the next test.",
    hint: "Handling async in legacy tests."
  },
  {
    id: 70,
    difficulty: "medium",
    category: "http",
    question: "Which Node.js core module provides the 'IncomingMessage' and 'ServerResponse' classes?",
    options: ["net", "http", "url", "stream"],
    answer: 1,
    explanation: "The 'http' module defines the standard request and response objects for web servers.",
    hint: "Web protocol name."
  },
  {
    id: 71,
    difficulty: "hard",
    category: "scenarios",
    question: "Your app needs to store session data. Why is the default 'MemoryStore' in Express-Session unsuitable for production?",
    options: [
      "It is too slow",
      "It causes memory leaks and cannot share sessions across multiple processes",
      "It is encrypted",
      "It only works on Windows"
    ],
    answer: 1,
    explanation: "MemoryStore is for development only. In production, use Redis or a database to persist sessions across server restarts and clusters.",
    hint: "Persistence and Scalability."
  },
  {
    id: 72,
    difficulty: "medium",
    category: "child_process",
    question: "What is the output of 'process.pid'?",
    options: ["The Parent ID", "The Process ID of the current Node.js process", "The Packet ID", "The Processor ID"],
    answer: 1,
    explanation: "process.pid returns the unique numerical identifier assigned by the OS to the current process.",
    hint: "Process identifier."
  },
  {
    id: 73,
    difficulty: "hard",
    category: "v8",
    question: "What is 'Memory Leak' in a Node.js application?",
    options: [
      "When the hard drive runs out of space",
      "When objects are no longer needed but are still referenced, preventing Garbage Collection",
      "When the server loses power",
      "When a buffer is too small"
    ],
    answer: 1,
    explanation: "If you store data in a global array forever, V8 cannot free that memory, eventually leading to a crash.",
    hint: "Uncleansed references."
  },
  {
    id: 74,
    difficulty: "easy",
    category: "express",
    question: "How do you access a URL parameter (e.g., /user/:id) in an Express route handler?",
    options: ["req.body.id", "req.query.id", "req.params.id", "req.url.id"],
    answer: 2,
    explanation: "Named route parameters are captured in the 'req.params' object.",
    hint: "Route parameters."
  },
  {
    id: 75,
    difficulty: "hard",
    category: "security",
    question: "What is the purpose of 'Salt' when hashing passwords using libraries like 'bcrypt'?",
    options: [
      "To make the hashing faster",
      "To ensure the same password results in a different hash, preventing Rainbow Table attacks",
      "To encrypt the password",
      "To validate the email address"
    ],
    answer: 1,
    explanation: "Salting adds random data to the input so that two users with the same password have different hashes.",
    hint: "Random uniqueness."
  },
  {
    id: 76,
    difficulty: "medium",
    category: "scenarios",
    question: "You want to detect when a client closes a TCP connection. Which event should you listen for on a Socket object?",
    options: ["close", "end", "terminate", "exit"],
    answer: 0,
    explanation: "The 'close' event is emitted once the socket is fully closed.",
    hint: "Fully shut down."
  },
  {
    id: 77,
    difficulty: "hard",
    category: "performance",
    question: "What does the 'top-level await' feature allow in Node.js (with ESM)?",
    options: [
      "Await in the constructor of a class",
      "Using await at the beginning of an .mjs file without wrapping it in an async function",
      "Waiting for the server to start",
      "Running code before the Event Loop starts"
    ],
    answer: 1,
    explanation: "In ES Modules, you can use await at the top level of the module.",
    hint: "Module-level async."
  },
  {
    id: 78,
    difficulty: "medium",
    category: "scenarios",
    question: "Which environment variable is standard for setting the application environment to 'production' or 'development'?",
    options: ["APP_ENV", "MODE", "NODE_ENV", "STAGE"],
    answer: 2,
    explanation: "NODE_ENV is used by many libraries (like Express) to enable optimizations or different logging levels.",
    hint: "Node environment."
  },
  {
    id: 79,
    difficulty: "hard",
    category: "dns",
    question: "When using 'dns.lookup()', does it perform an asynchronous network request or a synchronous OS call?",
    options: [
      "Synchronous network request",
      "Asynchronous OS call that uses the thread pool",
      "Purely synchronous blocking call",
      "It doesn't involve the OS"
    ],
    answer: 1,
    explanation: "dns.lookup uses getaddrinfo(3) which is synchronous in the OS, so Node.js runs it in the libuv thread pool to keep it async for the JS thread.",
    hint: "Thread pool involvement."
  },
  {
    id: 80,
    difficulty: "easy",
    category: "util",
    question: "Which function is used to output a message to the standard error stream (stderr)?",
    options: ["console.log()", "console.error()", "console.warn()", "console.info()"],
    answer: 1,
    explanation: "console.error and console.warn write to stderr, whereas console.log writes to stdout.",
    hint: "Error logging."
  },
  {
    id: 81,
    difficulty: "hard",
    category: "streams",
    question: "What is the difference between the 'data' event and the 'readable' event in a Readable stream?",
    options: [
      "'data' pushes chunks as they arrive; 'readable' requires you to call .read() manually",
      "They are the same",
      "'readable' is only for files",
      "'data' is faster"
    ],
    answer: 0,
    explanation: "The 'data' event is part of 'flowing mode', while 'readable' is 'paused mode'.",
    hint: "Push vs. Pull."
  },
  {
    id: 82,
    difficulty: "medium",
    category: "security",
    question: "Which of the following helps mitigate Cross-Site Scripting (XSS) by preventing JavaScript from accessing cookies?",
    options: ["Secure flag", "HttpOnly flag", "SameSite flag", "Domain flag"],
    answer: 1,
    explanation: "The HttpOnly flag ensures that a cookie cannot be accessed via 'document.cookie'.",
    hint: "No JS access."
  },
  {
    id: 83,
    difficulty: "hard",
    category: "scenarios",
    question: "You need to perform a task every 24 hours. Using 'setInterval' is risky if the process restarts. What is a better alternative?",
    options: ["A recursive setTimeout", "A Cron job (via OS or node-cron)", "A while loop", "A Worker Thread"],
    answer: 1,
    explanation: "Cron jobs are designed for scheduled tasks and can survive or be re-triggered after restarts.",
    hint: "Scheduled task syntax."
  },
  {
    id: 84,
    difficulty: "medium",
    category: "express",
    question: "How do you apply a middleware to all routes in an Express application?",
    options: ["app.set(middleware)", "app.use(middleware)", "app.all(middleware)", "app.get(middleware)"],
    answer: 1,
    explanation: "app.use() mounts the middleware globally for the app.",
    hint: "Mount middleware."
  },
  {
    id: 85,
    difficulty: "hard",
    category: "performance",
    question: "What is 'Zero-downtime deployment' in a clustered Node.js app?",
    options: [
      "Turning off the server at night",
      "Restarting workers one by one so that some workers are always available to handle requests",
      "Using an SSD",
      "Caching everything in Redis"
    ],
    answer: 1,
    explanation: "By cycling through workers, you can update code without ever stopping the service entirely.",
    hint: "Rolling restart."
  },
  {
    id: 86,
    difficulty: "easy",
    category: "os",
    question: "Which 'os' module method returns an object containing information about each logical CPU core?",
    options: ["os.cpuInfo()", "os.cpus()", "os.cores()", "os.hardware()"],
    answer: 1,
    explanation: "os.cpus() returns an array of objects with details like model, speed, and times.",
    hint: "Plural of CPU."
  },
  {
    id: 87,
    difficulty: "hard",
    category: "async_patterns",
    question: "What happens if you throw an error inside an async function but do not catch it inside that function?",
    options: [
      "The process crashes immediately",
      "It returns a rejected Promise",
      "The error is ignored",
      "It freezes the event loop"
    ],
    answer: 1,
    explanation: "An async function always returns a promise. A thrown error results in a rejected promise.",
    hint: "Promise state."
  },
  {
    id: 88,
    difficulty: "medium",
    category: "http",
    question: "Which status code should a Node.js server send to indicate that a resource was successfully created?",
    options: ["200", "201", "204", "400"],
    answer: 1,
    explanation: "201 Created is the standard RESTful response for a successful POST request creating a resource.",
    hint: "Success + Created."
  },
  {
    id: 89,
    difficulty: "hard",
    category: "v8",
    question: "In V8, what is the 'Scavenge' algorithm used for?",
    options: ["Long-term storage", "Cleaning the Young Generation (New Space) memory", "Optimizing CPU usage", "Disk cleanup"],
    answer: 1,
    explanation: "Scavenge is a fast, frequent garbage collection process for short-lived objects.",
    hint: "Minor GC."
  },
  {
    id: 90,
    difficulty: "medium",
    category: "npm",
    question: "What is the purpose of the 'package-lock.json' file?",
    options: [
      "To lock the file so it cannot be edited",
      "To ensure consistent dependency versions across different installs/environments",
      "To store private API keys",
      "To speed up the network"
    ],
    answer: 1,
    explanation: "It records the exact version of every dependency installed to prevent 'it works on my machine' issues.",
    hint: "Reproducible builds."
  },
  {
    id: 91,
    difficulty: "hard",
    category: "scenarios",
    question: "A stream is 'piped' but the destination is much slower than the source. What will Node.js do to prevent memory exhaustion?",
    options: [
      "It will drop data chunks",
      "It will use the 'pause()' and 'resume()' mechanism automatically (Backpressure)",
      "It will crash with an Out of Memory error",
      "It will compress the data"
    ],
    answer: 1,
    explanation: "The pipe() method automatically handles backpressure by pausing the source when the destination buffer is full.",
    hint: "Automatic flow control."
  },
  {
    id: 92,
    difficulty: "medium",
    category: "security",
    question: "Which common attack involves an attacker tricking a victim's browser into performing an action on a web app where they are authenticated?",
    options: ["XSS", "SQL Injection", "CSRF", "Clickjacking"],
    answer: 2,
    explanation: "Cross-Site Request Forgery (CSRF) leverages the browser's tendency to send cookies automatically.",
    hint: "Request Forgery."
  },
  {
    id: 93,
    difficulty: "hard",
    category: "child_process",
    question: "What is the difference between 'spawn' and 'fork' regarding the communication channel?",
    options: [
      "There is no difference",
      "fork automatically sets up an IPC channel; spawn does not",
      "spawn is only for non-Node processes",
      "fork is slower"
    ],
    answer: 1,
    explanation: "fork() is specialized for Node processes and includes a message-passing channel (IPC).",
    hint: "Built-in IPC."
  },
  {
    id: 94,
    difficulty: "medium",
    category: "express",
    question: "Which Express property contains the parsed cookies if the 'cookie-parser' middleware is used?",
    options: ["req.cookies", "req.data.cookies", "res.cookies", "req.headers.cookies"],
    answer: 0,
    explanation: "The cookie-parser middleware populates the req.cookies object.",
    hint: "Request cookies."
  },
  {
    id: 95,
    difficulty: "hard",
    category: "performance",
    question: "What does the 'worker_threads' module provide that 'cluster' does not?",
    options: ["Shared Memory (ArrayBuffer)", "Separate Process IDs", "Automatic Load Balancing", "File system access"],
    answer: 0,
    explanation: "Worker threads can share memory using SharedArrayBuffer, whereas Cluster processes must use IPC to pass data.",
    hint: "Memory sharing."
  },
  {
    id: 96,
    difficulty: "easy",
    category: "process",
    question: "How do you access an environment variable named 'DB_PASSWORD' in Node.js?",
    options: ["process.env.DB_PASSWORD", "env.DB_PASSWORD", "config.DB_PASSWORD", "process.variables.DB_PASSWORD"],
    answer: 0,
    explanation: "The process.env object contains the user environment.",
    hint: "Standard environment access."
  },
  {
    id: 97,
    difficulty: "hard",
    category: "async_patterns",
    question: "Why should you avoid 'await' inside a loop when the operations can be performed in parallel?",
    options: [
      "It will crash the loop",
      "It processes items sequentially, increasing total time significantly",
      "It uses too much memory",
      "Node.js doesn't allow it"
    ],
    answer: 1,
    explanation: "Await in a loop waits for each promise to finish before starting the next. Use Promise.all() for better performance.",
    hint: "Sequential vs. Parallel."
  },
  {
    id: 98,
    difficulty: "medium",
    category: "scenarios",
    question: "You want to watch a directory for changes. You need a solution that is more robust than 'fs.watch' and handles recursive watching well on all platforms. What is the popular community package?",
    options: ["watcher", "chokidar", "file-watch", "fs-extra"],
    answer: 1,
    explanation: "Chokidar wraps fs.watch and provides a consistent, robust API across all operating systems.",
    hint: "Popular file watcher library."
  },
  {
    id: 99,
    difficulty: "hard",
    category: "streams",
    question: "In a Transform stream, what is the role of the '_flush' method?",
    options: [
      "To delete the stream",
      "To process any remaining data after the input has ended",
      "To clear the console",
      "To reset the internal counter"
    ],
    answer: 1,
    explanation: "_flush is called just before the stream closes to allow for any final data processing.",
    hint: "Final processing."
  },
  {
    id: 100,
    difficulty: "hard",
    category: "v8",
    question: "What is 'Hidden Classes' in the V8 engine?",
    options: [
      "Private classes in JavaScript",
      "Internal structures V8 uses to optimize property access in objects",
      "Classes that cannot be inherited",
      "A security feature"
    ],
    answer: 1,
    explanation: "V8 creates hidden classes to track the shape of objects, allowing it to generate optimized machine code for property access.",
    hint: "V8 optimization technique."
  },

/* ======================================================
   NODE.JS CERTIFICATION QUESTION BANK (Batch 3: 101-150)
   Topics: Networking, Databases, GraphQL, and Debugging
   ====================================================== */
  {
    id: 101,
    difficulty: "medium",
    category: "networking",
    question: "Which core module would you use to create a raw TCP server that does not use the HTTP protocol?",
    options: ["http", "net", "dgram", "crypto"],
    answer: 1,
    explanation: "The 'net' module provides an asynchronous network API for creating stream-based TCP or IPC servers and clients.",
    hint: "Think 'Network' without the 'Web'."
  },
  {
    id: 102,
    difficulty: "hard",
    category: "databases",
    question: "In a MongoDB-Node.js application, what is the primary purpose of 'Mongoose'?",
    options: [
      "To provide a GUI for the database",
      "To act as an Object Data Modeling (ODM) library with schema validation",
      "To speed up raw queries by 100%",
      "To handle multi-threading in Node.js"
    ],
    answer: 1,
    explanation: "Mongoose provides a straight-forward, schema-based solution to model your application data and includes built-in type casting and validation.",
    hint: "Schema-based ODM."
  },
  {
    id: 103,
    difficulty: "medium",
    category: "scenarios",
    question: "You need to debug a memory leak in a production environment. Which tool allows you to take a snapshot of the current heap for analysis?",
    options: ["console.trace()", "v8.getHeapSnapshot()", "process.memoryUsage()", "fs.readSync()"],
    answer: 1,
    explanation: "The 'v8' module's getHeapSnapshot() creates a file that can be loaded into Chrome DevTools to inspect memory allocation.",
    hint: "Capturing the state of the heap."
  },
  {
    id: 104,
    difficulty: "hard",
    category: "graphql",
    question: "In GraphQL, what is a 'Resolver'?",
    options: [
      "A tool that resolves IP addresses",
      "A function responsible for fetching the data for a single field in a schema",
      "A middleware that parses cookies",
      "A method to minify JavaScript"
    ],
    answer: 1,
    explanation: "Resolvers are the implementation of the GraphQL schema. Each field in a query is backed by a resolver function.",
    hint: "The data fetcher for a field."
  },
  {
    id: 105,
    difficulty: "medium",
    category: "security",
    question: "When using 'helmet', which specific middleware protects against Clickjacking attacks by setting the 'X-Frame-Options' header?",
    options: ["helmet.noSniff()", "helmet.frameguard()", "helmet.xssFilter()", "helmet.hidePoweredBy()"],
    answer: 1,
    explanation: "frameguard() prevents the site from being embedded in an iframe on other sites, stopping clickjacking.",
    hint: "Guarding the frame."
  },
  {
    id: 106,
    difficulty: "hard",
    category: "v8",
    question: "Which V8 engine feature is responsible for compiling JavaScript directly into optimized machine code while it is running?",
    options: ["Garbage Collector", "TurboFan", "Ignition", "Orinoco"],
    answer: 1,
    explanation: "TurboFan is the JIT (Just-In-Time) optimizing compiler that generates highly efficient machine code based on profiling data.",
    hint: "Optimizing JIT compiler."
  },
  {
    id: 107,
    difficulty: "easy",
    category: "process",
    question: "What does 'process.uptime()' return?",
    options: [
      "The date the server was installed",
      "The number of seconds the current Node.js process has been running",
      "The amount of CPU usage in percentage",
      "The time until the next scheduled task"
    ],
    answer: 1,
    explanation: "process.uptime() returns a floating point number representing the number of seconds the process has been active.",
    hint: "Running time."
  },
  {
    id: 108,
    difficulty: "medium",
    category: "express",
    question: "How do you access the query string parameters (e.g., ?search=node) in an Express request handler?",
    options: ["req.body.search", "req.params.search", "req.query.search", "req.url.search"],
    answer: 2,
    explanation: "req.query contains an object with a property for each query string parameter in the route.",
    hint: "The 'query' object."
  },
  {
    id: 109,
    difficulty: "hard",
    category: "async_patterns",
    question: "What is the behavior of 'Promise.race()'?",
    options: [
      "It waits for all promises to resolve",
      "It returns a promise that fulfills or rejects as soon as one of the promises in the iterable settles",
      "It returns the last promise to finish",
      "It runs promises in alphabetical order"
    ],
    answer: 1,
    explanation: "Promise.race() is useful for implementing timeouts (e.g., racing a network request against a timer).",
    hint: "The first one to the finish line wins."
  },
  {
    id: 110,
    difficulty: "medium",
    category: "cryptography",
    question: "You need to generate a cryptographically strong random string for a session ID. Which method should you use?",
    options: ["Math.random()", "crypto.randomBytes()", "Date.now()", "crypto.createHash()"],
    answer: 1,
    explanation: "crypto.randomBytes() uses the OS's cryptographically secure pseudo-random number generator (CSPRNG).",
    hint: "Strong randomness for bytes."
  },
  {
    id: 111,
    difficulty: "hard",
    category: "scenarios",
    question: "A developer uses 'fs.readFileSync' inside an Express request handler for every request. What is the impact?",
    options: [
      "No impact, it's safer than async",
      "The server can only handle one request at a time during the file read, blocking all other users",
      "Memory usage will decrease",
      "The file will be cached automatically"
    ],
    answer: 1,
    explanation: "Synchronous 'Sync' methods block the Event Loop. In a web server, this prevents other requests from being processed until the file read is done.",
    hint: "Blocking the main thread."
  },
  {
    id: 112,
    difficulty: "medium",
    category: "npm",
    question: "Which command would you use to check for known security vulnerabilities in your project's dependencies?",
    options: ["npm check", "npm audit", "npm security", "npm update"],
    answer: 1,
    explanation: "npm audit checks the package-lock.json against a database of known vulnerabilities and suggests fixes.",
    hint: "Auditing security."
  },
  {
    id: 113,
    difficulty: "hard",
    category: "streams",
    question: "What happens if you write to a Writable stream after calling 'stream.end()'?",
    options: [
      "The data is appended as usual",
      "The stream ignores the data",
      "It throws an error: 'write after end'",
      "The stream re-opens automatically"
    ],
    answer: 2,
    explanation: "Once end() is called, the stream is closed to further writing and will throw an error if attempted.",
    hint: "Standard error for closed streams."
  },
  {
    id: 114,
    difficulty: "medium",
    category: "testing",
    question: "Which library is most commonly used for making 'assertions' in Node.js testing (e.g., expect(a).to.equal(b))?",
    options: ["Mocha", "Chai", "Jest (built-in)", "Winston"],
    answer: 1,
    explanation: "Chai is a BDD/TDD assertion library often paired with Mocha. Note: Jest has its own built-in assertions.",
    hint: "Goes well with Mocha."
  },
  {
    id: 115,
    difficulty: "hard",
    category: "networking",
    question: "What is the primary difference between TCP and UDP in the 'dgram' and 'net' modules?",
    options: [
      "TCP is faster than UDP",
      "UDP is connectionless and doesn't guarantee packet delivery; TCP is connection-oriented and reliable",
      "TCP doesn't support streaming",
      "UDP requires an SSL certificate"
    ],
    answer: 1,
    explanation: "TCP ensures all data arrives correctly and in order; UDP is used for speed-sensitive tasks like gaming or streaming where some loss is acceptable.",
    hint: "Reliability vs. Speed."
  },
  {
    id: 116,
    difficulty: "easy",
    category: "express",
    question: "Which Express function is used to create a modular, mountable route handler?",
    options: ["express.Module()", "express.Router()", "express.Path()", "express.Route()"],
    answer: 1,
    explanation: "express.Router() allows you to group routes into separate files and mount them in the main app.",
    hint: "The mini-app router."
  },
  {
    id: 117,
    difficulty: "hard",
    category: "performance",
    question: "Which tool can be used to monitor Node.js application metrics like event loop lag and heap usage in real-time?",
    options: ["node-gyp", "clinic.js", "npm-check-updates", "cross-env"],
    answer: 1,
    explanation: "Clinic.js is a suite of tools (Doctor, Bubbleprof, Flame) used to diagnose performance issues in Node.",
    hint: "Diagnosing performance health."
  },
  {
    id: 118,
    difficulty: "medium",
    category: "scenarios",
    question: "You want to run a Node.js script and pass an environment variable 'PORT=3000' directly in the command line on Linux/macOS. How is it done?",
    options: ["node app.js --port 3000", "PORT=3000 node app.js", "set PORT=3000 && node app.js", "node app.js PORT=3000"],
    answer: 1,
    explanation: "Prefixing the command with variables is the standard way to pass environment variables in Unix-like systems.",
    hint: "Prefix syntax."
  },
  {
    id: 119,
    difficulty: "hard",
    category: "event_loop",
    question: "Which of the following describes 'microtasks' (like Promise.then) compared to 'macrotasks' (like setTimeout)?",
    options: [
      "Microtasks run after the next macrotask",
      "Microtasks are executed at the end of the current operation, before the event loop continues to the next phase",
      "Macrotasks are always faster",
      "There is no difference"
    ],
    answer: 1,
    explanation: "Microtasks (including process.nextTick and Promise callbacks) have higher priority and will drain the queue before moving to the next event loop phase.",
    hint: "Immediate execution priority."
  },
  {
    id: 120,
    difficulty: "medium",
    category: "databases",
    question: "What is 'SQL Injection'?",
    options: [
      "Adding more RAM to a database",
      "When untrusted user input is concatenated into a SQL query, allowing attackers to manipulate the database",
      "A fast way to backup data",
      "The process of converting JSON to SQL"
    ],
    answer: 1,
    explanation: "SQL injection occurs when developers don't use parameterized queries or ORMs, allowing malicious users to execute their own SQL commands.",
    hint: "Concatenating user input into queries."
  },
  {
    id: 121,
    difficulty: "hard",
    category: "child_process",
    question: "If you want to capture the 'stdout' of a shell command as a single buffer in Node.js, which method is easiest?",
    options: ["spawn()", "exec()", "fork()", "execSync()"],
    answer: 1,
    explanation: "exec() runs a command in a shell and buffers the output, passing it to a callback once finished.",
    hint: "Shell command with buffering."
  },
  {
    id: 122,
    difficulty: "medium",
    category: "scenarios",
    question: "How do you detect if a script is being run as the main entry point (directly) versus being required as a module?",
    options: [
      "if (process.main === true)",
      "if (require.main === module)",
      "if (module.isMain)",
      "if (process.argv[2] === module.filename)"
    ],
    answer: 1,
    explanation: "require.main is the module that was run by node directly. If it matches 'module', then the current file is the main script.",
    hint: "Comparing main to the current module."
  },
  {
    id: 123,
    difficulty: "hard",
    category: "v8",
    question: "What is 'Code Serilization' in Node.js?",
    options: [
      "Saving a JSON to disk",
      "The process of creating a binary snapshot of a script to speed up startup time in future runs",
      "Turning code into a string",
      "Formatting code with Prettier"
    ],
    answer: 1,
    explanation: "V8 allows caching the result of code compilation (V8 code cache) to skip the parse/compile step on subsequent starts.",
    hint: "Binary snapshots of scripts."
  },
  {
    id: 124,
    difficulty: "easy",
    category: "http",
    question: "Which HTTP header is used by a client to specify the media type it can understand?",
    options: ["Content-Type", "Accept", "User-Agent", "Host"],
    answer: 1,
    explanation: "The 'Accept' header tells the server whether the client wants JSON, HTML, etc.",
    hint: "Client preference."
  },
  {
    id: 125,
    difficulty: "hard",
    category: "scenarios",
    question: "A high-concurrency Node.js server is hitting the 'EMFILE' error. What does this indicate?",
    options: [
      "The file is corrupted",
      "The process has reached the OS limit for open file descriptors (too many open files/sockets)",
      "The hard drive is full",
      "The file name is too long"
    ],
    answer: 1,
    explanation: "EMFILE means 'Every Max File'. In Node, this often happens when you open too many connections or files simultaneously without closing them.",
    hint: "Too many file descriptors."
  },
  {
    id: 126,
    difficulty: "medium",
    category: "modules",
    question: "Which statement is true about 'require' in Node.js?",
    options: [
      "It loads modules asynchronously",
      "Modules are cached after the first time they are loaded",
      "It can only load JSON files",
      "It is part of the ECMAScript 2015 standard"
    ],
    answer: 1,
    explanation: "CommonJS require() is synchronous and uses a caching mechanism so that repeated calls to the same file return the same exported object.",
    hint: "Caching behavior."
  },
  {
    id: 127,
    difficulty: "hard",
    category: "performance",
    question: "What is 'Worker Pool' in the context of Node.js?",
    options: [
      "A pool of human workers",
      "The set of libuv threads used to handle heavy tasks like File I/O and Crypto",
      "The Express middleware queue",
      "A load balancer like Nginx"
    ],
    answer: 1,
    explanation: "The Worker Pool (Thread Pool) is used by Node to perform blocking OS operations that don't have non-blocking equivalents.",
    hint: "Libuv's internal threads."
  },
  {
    id: 128,
    difficulty: "medium",
    category: "security",
    question: "What does the 'SameSite' attribute on a cookie help prevent?",
    options: ["XSS", "CSRF", "Clickjacking", "Man-in-the-middle"],
    answer: 1,
    explanation: "SameSite=Strict or SameSite=Lax prevents the browser from sending cookies on cross-site requests, which is the primary vector for CSRF.",
    hint: "CSRF protection."
  },
  {
    id: 129,
    difficulty: "hard",
    category: "graphql",
    question: "What is 'Schema Stitching' in GraphQL?",
    options: [
      "Combining multiple GraphQL APIs into a single gateway/schema",
      "Validating the schema with a linter",
      "Connecting a schema to a database",
      "Encrypting the schema"
    ],
    answer: 0,
    explanation: "Schema stitching (and its successor, Federation) allows you to aggregate multiple microservice schemas into one graph.",
    hint: "Merging schemas."
  },
  {
    id: 130,
    difficulty: "medium",
    category: "util",
    question: "What is the purpose of 'util.inspect()'?",
    options: [
      "To check for security bugs",
      "To return a string representation of an object, useful for debugging (deeply nested objects)",
      "To measure function performance",
      "To parse URL strings"
    ],
    answer: 1,
    explanation: "util.inspect() is used to stringify complex objects with colors and depths, often used in console.log behind the scenes.",
    hint: "Detailed object inspection."
  },
  {
    id: 131,
    difficulty: "hard",
    category: "streams",
    question: "Which event is emitted on a Readable stream when there is no more data to be consumed?",
    options: ["finish", "end", "close", "drain"],
    answer: 1,
    explanation: "'end' is for Readable streams; 'finish' is for Writable streams.",
    hint: "The end of reading."
  },
  {
    id: 132,
    difficulty: "medium",
    category: "scenarios",
    question: "You want to run a Node.js process with more memory than the default (usually 512MB or 1GB). Which flag do you use?",
    options: ["--max-memory", "--max-old-space-size", "--heap-limit", "--v8-memory"],
    answer: 1,
    explanation: "--max-old-space-size=4096 would set the limit to 4GB.",
    hint: "Old space size flag."
  },
  {
    id: 133,
    difficulty: "hard",
    category: "async_patterns",
    question: "How does 'util.callbackify()' work?",
    options: [
      "It turns a callback into a promise",
      "It turns an async/promise-returning function into one that takes a callback (error-first)",
      "It converts an object into a function",
      "It removes all callbacks"
    ],
    answer: 1,
    explanation: "The inverse of promisify. It's useful for using modern async code in legacy APIs that expect callbacks.",
    hint: "Reverse of promisify."
  },
  {
    id: 134,
    difficulty: "easy",
    category: "npm",
    question: "How do you install a package and add it to the 'devDependencies' section of 'package.json'?",
    options: ["npm install pkg --save", "npm install pkg --save-dev", "npm add pkg", "npm build pkg"],
    answer: 1,
    explanation: "--save-dev (or -D) marks a package as necessary only for development (like testing tools).",
    hint: "Dev flag."
  },
  {
    id: 135,
    difficulty: "hard",
    category: "v8",
    question: "What is 'Heap Profiling' useful for?",
    options: [
      "Measuring disk speed",
      "Identifying memory leaks and seeing which objects are consuming the most memory",
      "Calculating the number of lines of code",
      "Improving network latency"
    ],
    answer: 1,
    explanation: "Heap profiles help track the allocation of objects over time to find where memory is not being released.",
    hint: "Analyzing memory growth."
  },
  {
    id: 136,
    difficulty: "medium",
    category: "express",
    question: "In Express, what is the 'req.xhr' property used for?",
    options: [
      "To check if the request is a POST",
      "A boolean indicating if the request's 'X-Requested-With' header is 'XMLHttpRequest'",
      "To access the database",
      "To check for SSL"
    ],
    answer: 1,
    explanation: "This is a convenient way to detect if a request was made via AJAX (like fetch or axios) in some older patterns.",
    hint: "AJAX detection."
  },
  {
    id: 137,
    difficulty: "hard",
    category: "security",
    question: "What is 'JWT' (JSON Web Token) primarily used for in Node.js applications?",
    options: [
      "Database encryption",
      "Stateless authentication and secure information exchange",
      "Server-side image processing",
      "Load balancing"
    ],
    answer: 1,
    explanation: "JWTs allow the server to verify a user's identity without storing session data in memory or a database (stateless).",
    hint: "Stateless Auth."
  },
  {
    id: 138,
    difficulty: "medium",
    category: "fs",
    question: "Which method would you use to check if a file exists without opening it?",
    options: ["fs.exists() (deprecated)", "fs.access()", "fs.read()", "fs.stat()"],
    answer: 1,
    explanation: "fs.access() is the recommended way to check for file existence and permissions.",
    hint: "Checking accessibility."
  },
  {
    id: 139,
    difficulty: "hard",
    category: "performance",
    question: "What is the 'Event Loop Lag'?",
    options: [
      "The time it takes to download a file",
      "The delay between when a task is scheduled and when it actually executes in the Event Loop",
      "A bug in Node.js",
      "The time it takes to boot Node.js"
    ],
    answer: 1,
    explanation: "High lag indicates the main thread is blocked by heavy synchronous tasks, preventing the loop from processing the next tick timely.",
    hint: "Main thread bottleneck symptom."
  },
  {
    id: 140,
    difficulty: "easy",
    category: "os",
    question: "Which 'os' method returns the operating system's default directory for temporary files?",
    options: ["os.tmpdir()", "os.temp()", "os.folder()", "os.dir()"],
    answer: 0,
    explanation: "os.tmpdir() returns the temp path, e.g., '/tmp' on Linux or 'C:\\Users\\...\\AppData\\Local\\Temp' on Windows.",
    hint: "Temp directory."
  },
  {
    id: 141,
    difficulty: "hard",
    category: "networking",
    question: "What does the 'backlog' parameter in 'server.listen(port, host, backlog)' control?",
    options: [
      "The number of CPU cores to use",
      "The maximum length of the queue of pending connections",
      "The amount of data in bytes to buffer",
      "The number of retries if a port is busy"
    ],
    answer: 1,
    explanation: "The backlog specifies the maximum number of connections the OS can queue while waiting for Node.js to accept them.",
    hint: "Queue for pending connections."
  },
  {
    id: 142,
    difficulty: "medium",
    category: "scenarios",
    question: "You need to read a JSON file once and use it throughout your app. Which is the most common 'Node-way' for a configuration file?",
    options: [
      "fs.readFile() with a callback",
      "const config = require('./config.json');",
      "const config = JSON.parse(fs.readFileSync('./config.json'));",
      "Worker Threads"
    ],
    answer: 1,
    explanation: "require() can natively load and parse JSON files. Because it is cached, it only reads from disk once.",
    hint: "Sync load + Native parsing."
  },
  {
    id: 143,
    difficulty: "hard",
    category: "async_patterns",
    question: "What is the 'Revealing Module Pattern' in Node.js modules?",
    options: [
      "Exposing all private variables",
      "Returning an object that only 'reveals' the functions/properties you want to be public",
      "A way to hide code from the user",
      "Using the 'delete' keyword"
    ],
    answer: 1,
    explanation: "It allows for encapsulation, keeping internal state private within the module while exporting a clean API.",
    hint: "Encapsulation."
  },
  {
    id: 144,
    difficulty: "medium",
    category: "http",
    question: "What does the '101 Switching Protocols' HTTP status code mean in the context of WebSockets?",
    options: [
      "The request failed",
      "The server is upgrading the connection from HTTP to WebSockets",
      "The server is redirecting to another URL",
      "The server is busy"
    ],
    answer: 1,
    explanation: "When a client requests a WebSocket upgrade, the server responds with 101 to confirm it is switching protocols.",
    hint: "Protocol upgrade."
  },
  {
    id: 145,
    difficulty: "hard",
    category: "scenarios",
    question: "How do you handle 'circular dependencies' between two Node.js modules (A requires B, B requires A)?",
    options: [
      "It is impossible, Node.js will crash",
      "Node.js returns an unfinished copy of the module to avoid an infinite loop",
      "You must rename the files",
      "Use 'eval'"
    ],
    answer: 1,
    explanation: "Node.js allows this, but one of the modules may receive an empty or incomplete object depending on the order of execution.",
    hint: "Unfinished copy."
  },
  {
    id: 146,
    difficulty: "easy",
    category: "process",
    question: "How do you kill the current Node.js process with a 'failure' exit code?",
    options: ["process.exit(0)", "process.exit(1)", "process.kill()", "process.stop()"],
    answer: 1,
    explanation: "An exit code of 0 means success; any non-zero code (usually 1) indicates an error.",
    hint: "Non-zero exit."
  },
  {
    id: 147,
    difficulty: "hard",
    category: "security",
    question: "What is 'Path Traversal' vulnerability?",
    options: [
      "A bug in the 'path' module",
      "An attacker using '../' in inputs to access files outside the intended directory",
      "A network routing error",
      "When a file path is too long"
    ],
    answer: 1,
    explanation: "If you join user input directly to a file path without sanitization, an attacker can read system files like /etc/passwd.",
    hint: "Escaping the root directory."
  },
  {
    id: 148,
    difficulty: "medium",
    category: "databases",
    question: "Which of these is a popular 'Query Builder' for SQL in Node.js (not a full ORM)?",
    options: ["Sequelize", "Knex.js", "TypeORM", "Mongoose"],
    answer: 1,
    explanation: "Knex.js is a flexible query builder; Sequelize and TypeORM are full Object-Relational Mappers.",
    hint: "SQL Query Builder."
  },
  {
    id: 149,
    difficulty: "hard",
    category: "v8",
    question: "What is 'Memory Compaction' in V8?",
    options: [
      "Reducing the size of JS files",
      "Moving objects in memory to eliminate gaps (fragmentation) and free up contiguous space",
      "Zipping the heap snapshot",
      "Removing unused functions"
    ],
    answer: 1,
    explanation: "The Garbage Collector moves live objects together to prevent memory fragmentation.",
    hint: "Fragment reduction."
  },
  {
    id: 150,
    difficulty: "medium",
    category: "scenarios",
    question: "Which core module is best suited for providing a consistent way to handle 'asynchronous' events across different parts of an application?",
    options: ["events", "fs", "util", "stream"],
    answer: 0,
    explanation: "The 'events' module (specifically EventEmitter) is the foundation of Node's async architecture.",
    hint: "Event-driven architecture."
  },

/* ======================================================
   NODE.JS CERTIFICATION QUESTION BANK (Batch 4: 151-200)
   Topics: ESM/CommonJS, N-API, WASM, Deployment, & Architecture
   ====================================================== */
  {
    id: 151,
    difficulty: "hard",
    category: "modules",
    question: "What is the key difference between how 'require()' and 'import' handle execution?",
    options: [
      "require() is asynchronous; import is synchronous",
      "require() is synchronous and happens at runtime; import is asynchronous and can be statically analyzed",
      "There is no difference in execution",
      "import only works for JSON files"
    ],
    answer: 1,
    explanation: "CommonJS (require) loads modules synchronously at runtime. ESM (import) is asynchronous and allows for static analysis/tree-shaking before execution.",
    hint: "Static vs. Dynamic loading."
  },
  {
    id: 152,
    difficulty: "medium",
    category: "scenarios",
    question: "A developer wants to use 'await' at the top level of a script without a function. Which file extension or setting is required?",
    options: [".js with CommonJS", ".mjs or 'type': 'module' in package.json", ".cjs", "It is not possible in Node.js"],
    answer: 1,
    explanation: "Top-level await is a feature of ECMAScript Modules (ESM), which requires the .mjs extension or the module type setting.",
    hint: "ESM requirement."
  },
  {
    id: 153,
    difficulty: "hard",
    category: "addons",
    question: "What is 'Node-API' (formerly N-API) used for?",
    options: [
      "Connecting to external REST APIs",
      "Building native C/C++ addons that are independent of the underlying JS engine version",
      "Managing npm permissions",
      "Creating web components"
    ],
    answer: 1,
    explanation: "Node-API provides an ABI-stable layer for C++ addons, meaning they don't need to be recompiled every time a new Node.js version is released.",
    hint: "ABI stability for native code."
  },
  {
    id: 154,
    difficulty: "medium",
    category: "performance",
    question: "Which of the following is a benefit of using 'WebAssembly' (WASM) in a Node.js application?",
    options: [
      "It makes CSS faster",
      "It allows near-native execution speed for computationally heavy tasks (like image processing)",
      "It replaces the need for npm",
      "It is only for browser use"
    ],
    answer: 1,
    explanation: "WASM allows code written in languages like C++ or Rust to run in the Node.js environment at very high speeds.",
    hint: "High-speed binary format."
  },
  {
    id: 155,
    difficulty: "hard",
    category: "security",
    question: "What is 'Dependency Hell' and how does Node.js mitigate it?",
    options: [
      "A bug in the OS",
      "Conflicting versions of the same library; mitigated by nested 'node_modules'",
      "When a server has too many files",
      "Using too many async functions"
    ],
    answer: 1,
    explanation: "Node.js allows multiple versions of the same package to exist in the dependency tree, avoiding the version conflicts common in other languages.",
    hint: "Nested dependencies."
  },
  {
    id: 156,
    difficulty: "medium",
    category: "scenarios",
    question: "You want to run a script every time a file changes during development. Which package is the most standard choice?",
    options: ["pm2", "nodemon", "forever", "v8"],
    answer: 1,
    explanation: "Nodemon monitors your files and automatically restarts the node application when changes are detected.",
    hint: "Node Monitor."
  },
  {
    id: 157,
    difficulty: "hard",
    category: "v8",
    question: "What does 'Inlining' mean in the context of V8 optimization?",
    options: [
      "Writing all code in one line",
      "Replacing a function call with the actual body of the function to reduce overhead",
      "Loading scripts from a CDN",
      "Using internal CSS"
    ],
    answer: 1,
    explanation: "Inlining is a common JIT optimization where the compiler replaces a call to a small function with the function's code itself.",
    hint: "Eliminating call overhead."
  },
  {
    id: 158,
    difficulty: "medium",
    category: "express",
    question: "In Express, what does the 'app.disable('x-powered-by')' command do?",
    options: [
      "Increases CPU speed",
      "Removes the header that identifies the server as being powered by Express (Security hardening)",
      "Disables all middleware",
      "Stops the server"
    ],
    answer: 1,
    explanation: "Removing this header makes it slightly harder for attackers to fingerprint your technology stack.",
    hint: "Technology fingerprinting."
  },
  {
    id: 159,
    difficulty: "hard",
    category: "streams",
    question: "What is a 'Duplex' stream?",
    options: [
      "A stream that is only Writable",
      "A stream that is both Readable and Writable (like a TCP socket)",
      "A stream that converts data to uppercase",
      "Two streams running in parallel"
    ],
    answer: 1,
    explanation: "Duplex streams implement both the Readable and Writable interfaces simultaneously.",
    hint: "Two-way communication."
  },
  {
    id: 160,
    difficulty: "easy",
    category: "npm",
    question: "What does 'npm prune' do?",
    options: [
      "Updates all packages",
      "Removes packages in 'node_modules' that are not listed in 'package.json'",
      "Deletes the entire project",
      "Minifies the code"
    ],
    answer: 1,
    explanation: "Prune helps keep the node_modules folder clean by removing extraneous packages.",
    hint: "Trimming the tree."
  },
  {
    id: 161,
    difficulty: "hard",
    category: "event_loop",
    question: "What is the purpose of the 'unref()' method on a Timer or Socket?",
    options: [
      "To delete the timer",
      "To allow the Node.js process to exit even if the timer/socket is still active",
      "To pause the execution",
      "To increase the priority"
    ],
    answer: 1,
    explanation: "unref() tells the event loop that the process doesn't need to stay active just for this specific handle.",
    hint: "Allowing exit."
  },
  {
    id: 162,
    difficulty: "medium",
    category: "scenarios",
    question: "Which core module provides a way to interact with the system's terminal/shell and handle user input interactively?",
    options: ["tty", "readline", "fs", "process"],
    answer: 1,
    explanation: "The 'readline' module provides an interface for reading data from a Readable stream (like process.stdin) one line at a time.",
    hint: "Line-by-line input."
  },
  {
    id: 163,
    difficulty: "hard",
    category: "performance",
    question: "What is 'Memory Fragmentation' in Node.js?",
    options: [
      "When the hard drive is broken",
      "When free memory is split into small, non-contiguous blocks, making it hard to allocate large objects",
      "When a buffer is too large",
      "When code is split into many files"
    ],
    answer: 1,
    explanation: "Fragmentation can cause 'Out of Memory' errors even if the total free memory seems sufficient.",
    hint: "Non-contiguous free space."
  },
  {
    id: 164,
    difficulty: "medium",
    category: "security",
    question: "What is the primary danger of 'Prototype Pollution'?",
    options: [
      "It makes the app slower",
      "Attackers can inject properties into global object prototypes, potentially leading to RCE or logic bypass",
      "It deletes the database",
      "It changes the file extension"
    ],
    answer: 1,
    explanation: "By polluting Object.prototype, an attacker can alter the behavior of every object in the application.",
    hint: "Modifying the base Object."
  },
  {
    id: 165,
    difficulty: "hard",
    category: "child_process",
    question: "In 'child_process.spawn()', what does the 'stdio: inherit' option do?",
    options: [
      "The child process gets its own separate console",
      "The child process shares the stdin, stdout, and stderr of the parent process",
      "The child process cannot output anything",
      "The child process is hidden"
    ],
    answer: 1,
    explanation: "Inherit makes the child's output appear directly in the main terminal window of the parent.",
    hint: "Sharing the terminal."
  },
  {
    id: 166,
    difficulty: "medium",
    category: "http",
    question: "Which HTTP status code is used for 'Permanent Redirect'?",
    options: ["301", "302", "307", "308"],
    answer: 0,
    explanation: "301 is the standard for permanent redirection. (Note: 308 is also permanent but preserves the method).",
    hint: "Classic permanent move."
  },
  {
    id: 167,
    difficulty: "hard",
    category: "v8",
    question: "What is 'Deoptimization' in V8?",
    options: [
      "When the computer slows down",
      "When V8 discards optimized machine code because the 'shape' of an object changed",
      "Deleting the cache",
      "Running code in the browser"
    ],
    answer: 1,
    explanation: "V8 makes assumptions to optimize code. If those assumptions (like variable types) change, it must bail out back to slower bytecode.",
    hint: "Bailing out of optimized code."
  },
  {
    id: 168,
    difficulty: "medium",
    category: "scenarios",
    question: "How do you specify the 'engines' field in 'package.json'?",
    options: [
      "To list the hardware requirements",
      "To specify which versions of Node.js and npm the project is compatible with",
      "To list the database engines",
      "To define the search engine"
    ],
    answer: 1,
    explanation: "This helps prevent developers from running the code on unsupported Node.js versions.",
    hint: "Version compatibility."
  },
  {
    id: 169,
    difficulty: "hard",
    category: "async_patterns",
    question: "What is a 'Deferred' object in older Promise implementations?",
    options: [
      "A promise that never finishes",
      "An object that contains a promise and methods to resolve/reject it externally",
      "A delayed timer",
      "A failed request"
    ],
    answer: 1,
    explanation: "Deferreds were common in jQuery/Q before the native Promise constructor made them largely unnecessary.",
    hint: "External control of a promise."
  },
  {
    id: 170,
    difficulty: "easy",
    category: "global",
    question: "What is the name of the global object in Node.js that is equivalent to 'window' in a browser?",
    options: ["window", "global", "root", "process"],
    answer: 1,
    explanation: "In Node.js, the global namespace is 'global'. (In modern JS, 'globalThis' works in both).",
    hint: "Universal global name."
  },
  {
    id: 171,
    difficulty: "hard",
    category: "networking",
    question: "In the 'tls' module, what is 'ALPN' used for?",
    options: [
      "Encryption of passwords",
      "Negotiating the protocol (like HTTP/2) during the TLS handshake",
      "Generating certificates",
      "Load balancing"
    ],
    answer: 1,
    explanation: "Application-Layer Protocol Negotiation allows the server to support multiple protocols on the same port.",
    hint: "Handshake negotiation."
  },
  {
    id: 172,
    difficulty: "medium",
    category: "scenarios",
    question: "You need to store a very small amount of sensitive information (like a key) in the process environment. Which is the best object?",
    options: ["process.env", "process.argv", "global", "require.cache"],
    answer: 0,
    explanation: "Environment variables are the standard way to pass secrets to a process without hardcoding them.",
    hint: "Standard for secrets."
  },
  {
    id: 173,
    difficulty: "hard",
    category: "v8",
    question: "What is the 'Maximum Call Stack Size Exceeded' error usually caused by?",
    options: [
      "Too many files open",
      "Infinite or very deep recursion",
      "Out of memory",
      "Too many users"
    ],
    answer: 1,
    explanation: "Every function call adds a frame to the stack. If you call functions indefinitely, you run out of stack space.",
    hint: "Recursion limit."
  },
  {
    id: 174,
    difficulty: "medium",
    category: "express",
    question: "What is 'Route Chaining' in Express?",
    options: [
      "Connecting multiple servers",
      "Using 'app.route()' to define GET, POST, etc., for a single path in one block",
      "Running middleware one after another",
      "Calling one API from another"
    ],
    answer: 1,
    explanation: "Chainable route handlers for a route path can be created using app.route(path).",
    hint: "Single path, multiple methods."
  },
  {
    id: 175,
    difficulty: "hard",
    category: "security",
    question: "Which of the following is a way to protect against 'NoSQL Injection' in a MongoDB/Node app?",
    options: [
      "Using 'eval()'",
      "Sanitizing input to remove '$' and '.' or using a library like 'mongo-sanitize'",
      "Using SQL instead",
      "Encrypting the whole database"
    ],
    answer: 1,
    explanation: "NoSQL injection often involves passing objects with operators like {$gt: ''} to bypass authentication.",
    hint: "Blocking dollar signs."
  },
  {
    id: 176,
    difficulty: "medium",
    category: "fs",
    question: "What does 'fs.link()' create?",
    options: ["A URL", "A hard link to a file", "A symbolic link", "A copy of a file"],
    answer: 1,
    explanation: "fs.link() creates a hard link; fs.symlink() creates a symbolic (soft) link.",
    hint: "Hard file pointer."
  },
  {
    id: 177,
    difficulty: "hard",
    category: "performance",
    question: "What is the purpose of 'Keep-Alive' in HTTP/1.1?",
    options: [
      "To keep the server from sleeping",
      "To allow the same TCP connection to be reused for multiple requests/responses",
      "To refresh the browser automatically",
      "To monitor server health"
    ],
    answer: 1,
    explanation: "Reusing connections significantly reduces the latency caused by repeated TCP handshakes.",
    hint: "Connection reuse."
  },
  {
    id: 178,
    difficulty: "medium",
    category: "scenarios",
    question: "You want to find out the absolute path of the current script's directory. Which variable should you use?",
    options: ["process.cwd()", "__dirname", "__filename", "path.resolve()"],
    answer: 1,
    explanation: "__dirname is the directory of the current module; process.cwd() is where the node command was run from.",
    hint: "Directory of the module."
  },
  {
    id: 179,
    difficulty: "hard",
    category: "v8",
    question: "In V8, what is 'Generational Garbage Collection' based on?",
    options: [
      "The size of the objects",
      "The 'Weak Generational Hypothesis' (most objects die young)",
      "The number of variables",
      "The alphabetical order of objects"
    ],
    answer: 1,
    explanation: "V8 splits memory into New Space (Young) and Old Space based on how long objects have survived collection.",
    hint: "Young vs. Old objects."
  },
  {
    id: 180,
    difficulty: "easy",
    category: "npm",
    question: "What is 'npx'?",
    options: [
      "A new version of npm",
      "A tool to execute npm package binaries without installing them globally",
      "A package for encryption",
      "A CSS preprocessor"
    ],
    answer: 1,
    explanation: "npx allows you to run tools like 'create-react-app' or 'mocha' once without cluttering your global space.",
    hint: "Execute package binaries."
  },
  {
    id: 181,
    difficulty: "hard",
    category: "streams",
    question: "What is the 'objectMode' flag in Node.js streams?",
    options: [
      "A mode where the stream only accepts JSON",
      "A mode that allows the stream to handle JavaScript objects instead of just Chunks/Buffers",
      "A way to debug objects",
      "A security setting"
    ],
    answer: 1,
    explanation: "By default, streams handle Strings or Buffers. objectMode allows them to push any JS value.",
    hint: "Pushing raw objects."
  },
  {
    id: 182,
    difficulty: "medium",
    category: "scenarios",
    question: "Which event is emitted on 'process' when the Node.js event loop has no more work to do and is about to exit?",
    options: ["exit", "beforeExit", "close", "done"],
    answer: 1,
    explanation: "beforeExit is emitted when the loop is empty. If you schedule more work here, Node will continue running.",
    hint: "Last chance to schedule work."
  },
  {
    id: 183,
    difficulty: "hard",
    category: "security",
    question: "What is 'SSRF' (Server-Side Request Forgery)?",
    options: [
      "When a client fakes a request",
      "When an attacker tricks the server into making requests to internal or unintended resources",
      "A database error",
      "A type of CSS injection"
    ],
    answer: 1,
    explanation: "SSRF can be used to scan internal networks or access metadata services (like AWS metadata) from the server.",
    hint: "Server as a proxy for the attacker."
  },
  {
    id: 184,
    difficulty: "medium",
    category: "express",
    question: "What does the 'res.end()' method do in Express?",
    options: [
      "Restarts the server",
      "Ends the response process without sending any data",
      "Sends a JSON response",
      "Closes the browser window"
    ],
    answer: 1,
    explanation: "It is used to quickly end the response without any body. Use res.send() or res.json() for actual data.",
    hint: "Quick finish."
  },
  {
    id: 185,
    difficulty: "hard",
    category: "performance",
    question: "What is 'Cluster.schedulingPolicy'?",
    options: [
      "The order in which code is written",
      "The strategy the master process uses to distribute incoming connections to workers (e.g., Round Robin)",
      "A calendar for tasks",
      "A security rule"
    ],
    answer: 1,
    explanation: "On most systems except Windows, the default is round-robin, where the master distributes load evenly.",
    hint: "Load distribution strategy."
  },
  {
    id: 186,
    difficulty: "easy",
    category: "os",
    question: "Which 'os' method returns the system's 'load average' (only on POSIX)?",
    options: ["os.loadavg()", "os.cpuLoad()", "os.usage()", "os.average()"],
    answer: 0,
    explanation: "os.loadavg() returns an array with the 1, 5, and 15 minute load averages.",
    hint: "Load average."
  },
  {
    id: 187,
    difficulty: "hard",
    category: "v8",
    question: "What is 'Memory Leak' in the context of 'Closures'?",
    options: [
      "Closures always leak memory",
      "When a closure retains a reference to a large outer scope variable that is no longer needed",
      "When a closure is too small",
      "A closure that returns null"
    ],
    answer: 1,
    explanation: "Because closures keep their environment alive, they can prevent large objects from being garbage collected if not managed properly.",
    hint: "Retaining outer scope."
  },
  {
    id: 188,
    difficulty: "medium",
    category: "scenarios",
    question: "Which core module would you use to compress or decompress files using Gzip?",
    options: ["crypto", "zlib", "fs", "stream"],
    answer: 1,
    explanation: "The 'zlib' module provides compression functionality using Gzip, Deflate/Inflate, and Brotli.",
    hint: "Compression module."
  },
  {
    id: 189,
    difficulty: "hard",
    category: "async_patterns",
    question: "What is the 'Event Loop's starvation'?",
    options: [
      "When the server has no internet",
      "When the microtask queue (nextTick/Promises) is so full it prevents the loop from moving to the next phase",
      "When there are no events to process",
      "When the CPU is too slow"
    ],
    answer: 1,
    explanation: "Node will drain the microtask queue completely before moving on. An infinite nextTick loop will starve the rest of the loop (I/O, Timers).",
    hint: "Microtask queue blockage."
  },
  {
    id: 190,
    difficulty: "medium",
    category: "npm",
    question: "In Semantic Versioning (SemVer), what does the second number (Y) in 'X.Y.Z' represent?",
    options: ["Major version", "Minor version", "Patch version", "Build number"],
    answer: 1,
    explanation: "X is Major (breaking), Y is Minor (new features, non-breaking), and Z is Patch (bug fixes).",
    hint: "Middle number."
  },
  {
    id: 191,
    difficulty: "hard",
    category: "scenarios",
    question: "You want to run your Node.js app as a background daemon on Linux without external tools. Which 'child_process' option is useful?",
    options: ["detached: true", "background: true", "daemon: true", "shell: true"],
    answer: 0,
    explanation: "The 'detached' option allows the child process to keep running after the parent exits.",
    hint: "Detaching from parent."
  },
  {
    id: 192,
    difficulty: "medium",
    category: "security",
    question: "What is the purpose of 'Subresource Integrity' (SRI)?",
    options: [
      "To check database integrity",
      "To ensure that files fetched from a CDN have not been tampered with",
      "To validate user passwords",
      "To encrypt local files"
    ],
    answer: 1,
    explanation: "SRI uses a hash to verify that the file content matches what the developer expected.",
    hint: "Hash verification for CDNs."
  },
  {
    id: 193,
    difficulty: "hard",
    category: "v8",
    question: "What is 'Code Cache'?",
    options: [
      "A place where source code is stored",
      "A V8 feature that stores compiled bytecode to speed up subsequent loads of the same script",
      "An npm cache",
      "A debugging tool"
    ],
    answer: 1,
    explanation: "Code cache saves the 'effort' of parsing and compiling JS into bytecode.",
    hint: "Saving compiled state."
  },
  {
    id: 194,
    difficulty: "medium",
    category: "http",
    question: "What is the 'User-Agent' header used for?",
    options: [
      "To identify the user's name",
      "To identify the client software (browser/os) making the request",
      "To store login tokens",
      "To set the language"
    ],
    answer: 1,
    explanation: "Servers use this to tailor content or for analytics regarding which browsers are used.",
    hint: "Client identity."
  },
  {
    id: 195,
    difficulty: "hard",
    category: "performance",
    question: "What is 'CPU Profiling'?",
    options: [
      "Checking the CPU model",
      "Recording the call stack at regular intervals to see which functions consume the most CPU time",
      "Measuring the temperature of the CPU",
      "Increasing the CPU speed"
    ],
    answer: 1,
    explanation: "Profiling identifies 'hot' functions that are causing performance bottlenecks.",
    hint: "Function execution time analysis."
  },
  {
    id: 196,
    difficulty: "easy",
    category: "process",
    question: "How can you check the current platform (e.g., 'linux', 'darwin', 'win32') in Node.js?",
    options: ["process.os", "process.platform", "os.type", "process.env.PLATFORM"],
    answer: 1,
    explanation: "process.platform returns the string identifying the operating system platform.",
    hint: "Platform property."
  },
  {
    id: 197,
    difficulty: "hard",
    category: "async_patterns",
    question: "What is 'Promisification'?",
    options: [
      "Making a promise you can't keep",
      "Converting a function that uses callbacks into one that returns a Promise",
      "Using 'async' everywhere",
      "Deleting callbacks"
    ],
    answer: 1,
    explanation: "This allows legacy code to be used with modern async/await syntax.",
    hint: "Callback to Promise conversion."
  },
  {
    id: 198,
    difficulty: "medium",
    category: "scenarios",
    question: "Which event is emitted on a Writable stream when it is again safe to write data after a 'false' return from '.write()'?",
    options: ["drain", "ready", "open", "continue"],
    answer: 0,
    explanation: "The 'drain' event is the signal that backpressure has been relieved and the buffer is empty.",
    hint: "Emptying the sink."
  },
  {
    id: 199,
    difficulty: "hard",
    category: "addons",
    question: "Why would a developer use 'node-gyp'?",
    options: [
      "To install npm packages",
      "To compile native C++ addons for Node.js",
      "To minify JavaScript",
      "To manage CSS"
    ],
    answer: 1,
    explanation: "node-gyp is the cross-platform command-line tool used for compiling native addon modules.",
    hint: "C++ compiler tool."
  },
  {
    id: 200,
    difficulty: "hard",
    category: "architecture",
    question: "What is 'libuv' primarily written in?",
    options: ["JavaScript", "C", "C++", "Rust"],
    answer: 1,
    explanation: "While Node.js uses C++, the underlying libuv library is a high-performance asynchronous I/O library written in C.",
    hint: "Low-level language."
  }
];

// --- TOP 100 INTERVIEW INDICES ---
// These indices point to unique, high-value questions from the bank for rapid interview prep.
// Focus: Event Loop Internals, Streams/Backpressure, Security, and Scaling.
const hotsQuestions = [
    // 1. Event Loop & Asynchronous Patterns (nextTick, setImmediate, Timers) - 20 indices
    0, 1, 4, 10, 15, 20, 25, 45, 50, 55, 
    60, 65, 70, 75, 80, 85, 150, 151, 152, 196,

    // 2. Streams & Buffers (Backpressure, Pipe, Transform, Allocation) - 20 indices
    2, 3, 5, 8, 9, 12, 13, 14, 110, 115, 
    120, 125, 130, 135, 140, 145, 197, 198, 155, 156,

    // 3. System & File System (fs.promises, Watchers, Error Handling) - 15 indices
    21, 22, 23, 24, 26, 27, 28, 29, 31, 32, 
    170, 175, 180, 185, 190,

    // 4. Scaling & Performance (Worker Threads, Cluster, PM2, libuv) - 15 indices
    33, 34, 36, 37, 38, 39, 41, 42, 199, 200, 
    160, 161, 162, 163, 164,

    // 5. Security & Web API (JWT, Helmet, Rate Limiting, XSS) - 15 indices
    43, 44, 46, 47, 48, 49, 100, 101, 102, 103, 
    104, 105, 106, 107, 108,

    // 6. Practical Scenarios & Debugging (Memory Leaks, N-API, node-gyp) - 15 indices
    90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 
    165, 166, 167, 168, 169
];
