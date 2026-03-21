const questionBank = [

/* ======================================================
PYTHON FOR DATA ENGINEERING (IDs 1 - 100)
====================================================== */
{
  id: 1,
  difficulty: "easy",
  question: "Which Python data structure is most efficient for checking if an item exists in a collection of 1 million unique IDs?",
  options: ["List", "Tuple", "Set", "Linked List"],
  answer: 2,
  explanation: "Sets use hash tables, providing O(1) average time complexity for lookups, whereas Lists require O(n) linear scans."
},
{
  id: 2,
  difficulty: "medium",
  question: "In Python, what is the primary advantage of using a 'Generator' over a 'List' for processing a 10GB log file?",
  options: [
    "Generators are faster at mathematical operations",
    "Generators load the entire file into RAM for speed",
    "Generators yield items one at a time (lazy evaluation), preventing memory overflow",
    "Generators automatically encrypt the data"
  ],
  answer: 2,
  explanation: "Generators use 'lazy evaluation' to process data stream-style, requiring very little memory regardless of the total file size."
},
{
  id: 3,
  difficulty: "hard",
  question: "What does the Python 'Global Interpreter Lock' (GIL) imply for multi-threaded Data Engineering tasks?",
  options: [
    "It allows true parallel execution of Python code on multiple CPU cores",
    "It prevents multiple native threads from executing Python bytecodes at once, limiting CPU-bound parallelism",
    "It makes Python code run 10x faster on GPUs",
    "It is a security feature that prevents SQL injection"
  ],
  answer: 1,
  explanation: "The GIL ensures only one thread executes Python code at a time. For CPU-bound tasks, multiprocessing or Spark is preferred over threading."
},
{
  id: 4,
  difficulty: "medium",
  question: "When using the 'pandas' library, which function is used to convert a column of strings into datetime objects?",
  options: ["pd.to_date()", "pd.cast_datetime()", "pd.to_datetime()", "pd.format_time()"],
  answer: 2,
  explanation: "pd.to_datetime() is the standard Pandas function for parsing diverse string formats into standardized datetime64 objects."
},
{
  id: 5,
  difficulty: "medium",
  question: "What is the result of '1' + 1 in Python?",
  options: ["2", "11", "TypeError", "None"],
  answer: 2,
  explanation: "Python is strongly typed and does not perform implicit type coercion between strings and integers."
},
/* ... IDs 6 - 99 involve advanced Python: Decorators, Context Managers, Subprocessing, etc. ... */
/* ======================================================
PYTHON FOR DATA ENGINEERING (IDs 6 - 99)
====================================================== */

{
id: 6,
difficulty: "medium",
question: "Which Python decorator is typically used to cache the results of a function based on its arguments to improve performance?",
options: [
"@functools.lru_cache",
"@functools.wraps",
"@cache.method",
"@performance.memoize"
],
answer: 0,
explanation: "lru_cache (Least Recently Used cache) is a built-in decorator that saves function results, avoiding redundant computations."
},

{
id: 7,
difficulty: "hard",
question: "When creating a custom Context Manager using a class, which two methods must be implemented?",
options: [
"__init__ and __del__",
"__enter__ and __exit__",
"__start__ and __stop__",
"__open__ and __close__"
],
answer: 1,
explanation: "The 'with' statement calls __enter__ at the start and ensures __exit__ is called at the end, even if an exception occurs."
},

{
id: 8,
difficulty: "medium",
question: "In a Python data pipeline, what is the 'subprocess' module primarily used for?",
options: [
"Running SQL queries inside Spark",
"Executing external shell commands or system binaries",
"Creating light-weight threads",
"Managing memory allocation"
],
answer: 1,
explanation: "The subprocess module allows you to spawn new processes, connect to their input/output/error pipes, and obtain their return codes."
},

{
id: 9,
difficulty: "hard",
question: "What is the purpose of 'slots' (__slots__) in a Python class definition?",
options: [
"To allow the class to be used as a dictionary",
"To speed up attribute access and significantly reduce memory footprint by preventing the creation of __dict__",
"To define private variables",
"To enable multi-threading"
],
answer: 1,
explanation: "By defining __slots__, you tell Python not to use a dynamic dictionary for attributes, which saves a large amount of RAM when instantiating millions of objects."
},

{
id: 10,
difficulty: "medium",
question: "Which library is the industry standard for performing vectorized numerical operations in Python?",
options: [
"Math",
"NumPy",
"Statistics",
"Requests"
],
answer: 1,
explanation: "NumPy provides ndarray objects which perform computations in C-extensions, making them significantly faster than standard Python loops."
},

{
id: 11,
difficulty: "hard",
question: "What is a 'Closure' in Python?",
options: [
"The process of closing a file after reading",
"A nested function that remembers the values from its enclosing lexical scope even after the outer function has finished executing",
"A method to terminate a multi-threaded process",
"A type of data encryption"
],
answer: 1,
explanation: "Closures allow functions to maintain state without using global variables or classes."
},

{
id: 12,
difficulty: "medium",
question: "How does the 'zip()' function behave when the input iterables are of different lengths?",
options: [
"It raises a ValueError",
"It pads the shorter iterable with None",
"It stops at the length of the shortest iterable",
"It repeats the shorter iterable"
],
answer: 2,
explanation: "zip() yields tuples until the shortest input is exhausted. To handle different lengths, itertools.zip_longest() should be used."
},

{
id: 13,
difficulty: "hard",
question: "What is the primary difference between 'multiprocessing' and 'threading' in Python?",
options: [
"Threading bypasses the GIL; Multiprocessing does not",
"Multiprocessing uses separate memory spaces and bypasses the GIL; Threading shares memory and is limited by the GIL",
"Threading is for CPU-bound tasks; Multiprocessing is for I/O-bound tasks",
"There is no difference in modern Python 3.x"
],
answer: 1,
explanation: "Because of the Global Interpreter Lock (GIL), threads cannot run Python code in parallel on multiple cores, whereas processes can."
},

{
id: 14,
difficulty: "medium",
question: "Which keyword is used to handle exceptions that must run regardless of whether an error occurred in a try-except block?",
options: [
"else",
"catch",
"finally",
"stop"
],
answer: 2,
explanation: "The 'finally' block is used for cleanup actions (like closing database connections) that must execute no matter what."
},

{
id: 15,
difficulty: "hard",
question: "In the context of the 'collections' module, what is a 'deque' (Double Ended Queue) best suited for?",
options: [
"Fast lookups by key",
"Fast appends and pops from both the beginning and the end",
"Storing unique values only",
"Sorting data in place"
],
answer: 1,
explanation: "A deque provides O(1) performance for appends and pops at either end, compared to O(n) for the start of a standard list."
},

{
id: 16,
difficulty: "easy",
question: "What is the correct way to merge two dictionaries in Python 3.9+?",
options: [
"dict1.merge(dict2)",
"dict1 + dict2",
"dict1 | dict2",
"dict1.append(dict2)"
],
answer: 2,
explanation: "Python 3.9 introduced the union operator (|) for dictionaries."
},

{
id: 17,
difficulty: "hard",
question: "What does the @property decorator do?",
options: [
"It makes a method private",
"It allows a method to be accessed like an attribute (getter functionality)",
"It protects the class from being inherited",
"It turns a class into a singleton"
],
answer: 1,
explanation: "The @property decorator allows you to define methods that can be accessed as if they were simple data attributes."
},

{
id: 18,
difficulty: "medium",
question: "Which of the following creates a 'Shallow Copy' of a list in Python?",
options: [
"new_list = old_list",
"new_list = list(old_list)",
"new_list = copy.deepcopy(old_list)",
"new_list = old_list.move()"
],
answer: 1,
explanation: "list(old_list) or old_list.copy() creates a new list object, but the elements inside still refer to the same objects as the original list."
},

{
id: 19,
difficulty: "hard",
question: "What is the output of 'bool([])' in Python?",
options: [
"True",
"False",
"None",
"Error"
],
answer: 1,
explanation: "In Python, empty collections (lists, tuples, sets, strings) and the number zero evaluate to False in a boolean context."
},

{
id: 20,
difficulty: "medium",
question: "Which built-in function is used to iterate over a list while keeping track of the index?",
options: [
"index()",
"counter()",
"enumerate()",
"track()"
],
answer: 2,
explanation: "enumerate() returns pairs of (index, element), making it cleaner than using range(len(list))."
},

/* IDs 21-99 follow this pattern covering:
   - typing module (List, Optional, Union)
   - itertools (chain, cycle, permutations)
   - logging (critical, error, warning, info, debug levels)
   - asyncio (await, async def)
   - json vs pickle (serialization)
   - map/filter/reduce functions
   - list/set/dict comprehensions
   - lambda functions
   - __name__ == '__main__' pattern
   - Virtual environments and Pip
*/
/* ======================================================
ADVANCED PYTHON FOR DATA ENGINEERING (IDs 21 - 98)
====================================================== */

{
id: 21,
difficulty: "medium",
question: "When using the 'typing' module, what is the correct way to indicate a function argument can be either an Integer or None?",
options: [
"Optional[int]",
"Nullable[int]",
"int | None",
"Both A and C are correct"
],
answer: 3,
explanation: "In modern Python, Optional[int] and the pipe syntax (int | None) are both valid ways to denote a type that can be an integer or None."
},

{
id: 22,
difficulty: "hard",
question: "Which type hint from the 'typing' module should be used for a variable that represents a list of strings?",
options: [
"list[str]",
"List[str]",
"Array[string]",
"Both A and B are correct"
],
answer: 3,
explanation: "Prior to Python 3.9, 'List[str]' was required. From 3.9+, the built-in 'list[str]' is supported for type hinting."
},

{
id: 23,
difficulty: "medium",
question: "In the 'itertools' module, which function is used to flatten a list of lists into a single iterable?",
options: [
"itertools.flatten()",
"itertools.chain()",
"itertools.combine()",
"itertools.merge()"
],
answer: 1,
explanation: "itertools.chain(*list_of_lists) allows you to treat multiple sequences as a single continuous sequence without creating a large intermediate list."
},

{
id: 24,
difficulty: "hard",
question: "What is the primary use case for 'itertools.cycle' in a data generation script?",
options: [
"To stop an iteration after 10 loops",
"To repeat a finite sequence indefinitely",
"To sort a sequence randomly",
"To find the sum of a list"
],
answer: 1,
explanation: "itertools.cycle takes an iterable and repeats its elements forever, which is useful for round-robin data distribution."
},

{
id: 25,
difficulty: "medium",
question: "When using 'itertools.permutations([1, 2, 3], 2)', how many items will the resulting iterator contain?",
options: [
"3",
"6",
"9",
"4"
],
answer: 1,
explanation: "Permutations are ordered. For 3 items picked 2 at a time: (1,2), (1,3), (2,1), (2,3), (3,1), (3,2) = 6."
},

{
id: 26,
difficulty: "easy",
question: "In the Python 'logging' module, which log level has the highest numeric value (priority)?",
options: [
"DEBUG",
"INFO",
"ERROR",
"CRITICAL"
],
answer: 3,
explanation: "The hierarchy is DEBUG(10), INFO(20), WARNING(30), ERROR(40), CRITICAL(50)."
},

{
id: 27,
difficulty: "medium",
question: "Why is it better to use logging.getLogger(__name__) instead of the root logger?",
options: [
"It is faster",
"It automatically encrypts logs",
"It allows you to identify which module the log message originated from",
"It prevents the program from crashing"
],
answer: 2,
explanation: "Using __name__ creates a hierarchy of loggers that matches your module structure, making debugging much easier."
},

{
id: 28,
difficulty: "hard",
question: "In an 'asyncio' environment, what happens if you call an 'async def' function without using the 'await' keyword?",
options: [
"The function runs in the background",
"The function executes normally",
"It returns a coroutine object but does not execute the function body",
"It raises a SyntaxError"
],
answer: 2,
explanation: "Async functions return a coroutine object. They must be awaited or scheduled on an event loop to actually run."
},

{
id: 29,
difficulty: "medium",
question: "Which keyword is used to pause the execution of a coroutine until a result is returned?",
options: [
"pause",
"wait",
"await",
"stop"
],
answer: 2,
explanation: "The 'await' keyword yields control back to the event loop while waiting for the operation to complete."
},

{
id: 30,
difficulty: "medium",
question: "What is the primary security risk of using the 'pickle' module for deserializing data from an untrusted source?",
options: [
"It can leak memory",
"It can execute arbitrary code during unpickling",
"It only works with integers",
"It is slower than JSON"
],
answer: 1,
explanation: "Pickle is not secure. Loading a malicious pickle file can execute dangerous system commands."
},

{
id: 31,
difficulty: "easy",
question: "Between JSON and Pickle, which format is cross-language compatible (e.g., readable by Java or Go)?",
options: [
"Pickle",
"JSON",
"Both",
"Neither"
],
answer: 1,
explanation: "JSON is a text-based standard supported by almost every language. Pickle is Python-specific."
},

{
id: 32,
difficulty: "medium",
question: "Which functional programming tool applies a specific function to every item in an iterable?",
options: [
"filter()",
"reduce()",
"map()",
"apply()"
],
answer: 2,
explanation: "map(function, iterable) returns an iterator that applies the function to every item."
},

{
id: 33,
difficulty: "hard",
question: "To use the 'reduce()' function in Python 3, from which module must you import it?",
options: [
"itertools",
"functools",
"collections",
"operator"
],
answer: 1,
explanation: "Unlike map and filter, reduce was moved to the 'functools' module in Python 3."
},

{
id: 34,
difficulty: "medium",
question: "What does 'filter(None, [0, 1, False, 2, '', 3])' return when converted to a list?",
options: [
"[0, 1, False, 2, '', 3]",
"[1, 2, 3]",
"[0, False, '']",
"[]"
],
answer: 1,
explanation: "If the first argument to filter is None, it removes all items that evaluate to False in a boolean context."
},

{
id: 35,
difficulty: "easy",
question: "What is the output of the list comprehension: [x*2 for x in range(3)]?",
options: [
"[2, 4, 6]",
"[0, 2, 4]",
"[0, 1, 2]",
"[1, 2, 3]"
],
answer: 1,
explanation: "range(3) is [0, 1, 2]. Multiplying each by 2 results in [0, 2, 4]."
},

{
id: 36,
difficulty: "medium",
question: "Which syntax is used for a dictionary comprehension that squares the value of each key?",
options: [
"{x: x**2 for x in my_list}",
"(x: x**2 for x in my_list)",
"[x: x**2 for x in my_list]",
"{x**2 for x in my_list}"
],
answer: 0,
explanation: "Dictionary comprehensions use curly braces and the key:value syntax."
},

{
id: 37,
difficulty: "medium",
question: "What is a 'lambda' function in Python?",
options: [
"A function that can only be called once",
"An anonymous, one-line function",
"A function used for multi-threading",
"A built-in data type for high precision"
],
answer: 1,
explanation: "Lambda functions are small, unnamed functions defined with the 'lambda' keyword."
},

{
id: 38,
difficulty: "hard",
question: "In the context of 'lambda' functions, which of the following is true?",
options: [
"They can contain multiple lines of logic",
"They cannot contain any expressions",
"They are limited to a single expression",
"They must always be assigned to a variable"
],
answer: 2,
explanation: "Lambdas are syntactically restricted to a single expression; they cannot contain statements like 'return' or 'yield'."
},

{
id: 39,
difficulty: "medium",
question: "What is the purpose of the 'if __name__ == \"__main__\":' block?",
options: [
"To define the main class of a file",
"To ensure code only runs when the script is executed directly, not when imported as a module",
"To initialize the Global Interpreter Lock",
"To check if the user has admin privileges"
],
answer: 1,
explanation: "When a script is imported, __name__ is set to the module's name. When run directly, it is set to '__main__'."
},

{
id: 40,
difficulty: "easy",
question: "Which command is used to create a new virtual environment using the built-in 'venv' module?",
options: [
"python -m venv myenv",
"pip create venv myenv",
"virtualenv start myenv",
"python create env"
],
answer: 0,
explanation: "The standard way to create a virtual environment in Python 3 is 'python -m venv [directory]'."
},

{
id: 41,
difficulty: "medium",
question: "How do you generate a text file containing all the current dependencies and their versions for a project?",
options: [
"pip list > requirements.txt",
"pip freeze > requirements.txt",
"pip save requirements.txt",
"python export dependencies"
],
answer: 1,
explanation: "'pip freeze' outputs the installed packages in a format suitable for a requirements.txt file."
},

{
id: 42,
difficulty: "hard",
question: "What is the result of using a 'Set' comprehension on a list with duplicate values?",
options: [
"An error is raised",
"A list with duplicates",
"A set containing only unique values",
"A dictionary where values are counts"
],
answer: 2,
explanation: "Sets inherently only store unique values, so a set comprehension automatically removes duplicates."
},

/* IDs 43-98 proceed with more specific combinations and edge cases of these topics */

{
id: 43,
difficulty: "medium",
question: "Which itertools function would you use to find all possible 3-item combinations from a list where order DOES NOT matter?",
options: [
"itertools.permutations()",
"itertools.combinations()",
"itertools.product()",
"itertools.repeat()"
],
answer: 1,
explanation: "Combinations are for when order doesn't matter; Permutations are for when it does."
},

{
id: 44,
difficulty: "hard",
question: "What is the output of: list(map(lambda x: x.upper(), 'spark'))?",
options: [
"['S', 'P', 'A', 'R', 'K']",
"['SPARK']",
"['spark']",
"Error"
],
answer: 0,
explanation: "Map applies the lambda to each character in the string 'spark' individually."
},

{
id: 45,
difficulty: "medium",
question: "In the logging module, if the level is set to 'WARNING', which logs will be visible?",
options: [
"DEBUG, INFO, WARNING",
"WARNING, ERROR, CRITICAL",
"Only WARNING",
"All levels"
],
answer: 1,
explanation: "Setting a log level includes that level and all levels above it in priority."
},

/* ... Following the pattern through ID 97 ... */
/* ======================================================
ADVANCED PYTHON FOR DATA ENGINEERING (IDs 46 - 97)
====================================================== */

{
  id: 46,
  difficulty: "medium",
  question: "Which itertools function is used to create an iterator that returns evenly spaced values starting from a specific number?",
  options: ["itertools.count()", "itertools.accumulate()", "itertools.step()", "itertools.repeat()"],
  answer: 0,
  explanation: "itertools.count(start, step) is useful for generating unique IDs or sequence numbers in a data stream."
},
{
  id: 47,
  difficulty: "hard",
  question: "How does 'itertools.groupby()' behave differently than a SQL 'GROUP BY' clause?",
  options: [
    "It only groups consecutive items with the same key",
    "It automatically sorts the data before grouping",
    "It can only be used on strings",
    "It returns a dictionary instead of an iterator"
  ],
  answer: 0,
  explanation: "In Python, groupby() only groups adjacent identical elements. You must sort the iterable by the key first to get a result similar to SQL."
},
{
  id: 48,
  difficulty: "medium",
  question: "Which function would you use to find the running total (prefix sum) of a numerical list?",
  options: ["itertools.sum()", "itertools.accumulate()", "itertools.chain()", "itertools.compress()"],
  answer: 1,
  explanation: "itertools.accumulate() by default calculates the running sum of an iterable."
},
{
  id: 49,
  difficulty: "hard",
  question: "What is the purpose of 'itertools.tee()' in a data pipeline?",
  options: [
    "To merge two streams into one",
    "To split a single iterator into multiple independent iterators",
    "To terminate a process if it runs too long",
    "To convert an iterator into a list"
  ],
  answer: 1,
  explanation: "tee(iterable, n) creates 'n' independent iterators from a single source, allowing you to consume the same data stream multiple times."
},
{
  id: 50,
  difficulty: "medium",
  question: "When using 'itertools.product()', what is the result of product([1, 2], ['A', 'B'])?",
  options: ["[(1, 'A'), (2, 'B')]", "[(1, 'A'), (1, 'B'), (2, 'A'), (2, 'B')]", "[(1, 2, 'A', 'B')]", "[1, A, 2, B]"],
  answer: 1,
  explanation: "itertools.product() computes the Cartesian product of the input iterables."
},
{
  id: 51,
  difficulty: "hard",
  question: "What does 'itertools.islice(iterable, 5)' do?",
  options: [
    "It skips the first 5 elements",
    "It returns the first 5 elements of the iterator without consuming the whole thing",
    "It divides the iterator into 5 equal parts",
    "It raises an error if the list has fewer than 5 items"
  ],
  answer: 1,
  explanation: "islice allows you to slice an iterator (which doesn't support standard indexing) by start, stop, and step."
},
{
  id: 52,
  difficulty: "medium",
  question: "In asyncio, what is the 'Event Loop'?",
  options: [
    "A loop that iterates over a list of numbers",
    "The core of every asyncio application that schedules and runs asynchronous tasks",
    "A way to handle SQL joins in memory",
    "A recursive function call"
  ],
  answer: 1,
  explanation: "The event loop manages the execution of different tasks and handles the transitions between them during I/O waits."
},
{
  id: 53,
  difficulty: "hard",
  question: "What is the difference between 'asyncio.gather()' and 'asyncio.wait()'?",
  options: [
    "gather() is for threads, wait() is for processes",
    "gather() waits for all results and returns them as a list; wait() provides more fine-grained control over when to return (e.g., FIRST_COMPLETED)",
    "gather() is deprecated",
    "There is no difference"
  ],
  answer: 1,
  explanation: "gather() is a high-level function for getting all results at once, while wait() returns sets of done and pending tasks."
},
{
  id: 54,
  difficulty: "medium",
  question: "How do you run a synchronous function in an asynchronous way to prevent blocking the event loop?",
  options: [
    "Use 'await func()'",
    "Use 'loop.run_in_executor()'",
    "Wrap it in a lambda",
    "It is not possible"
  ],
  answer: 1,
  explanation: "run_in_executor() offloads blocking calls (like file I/O or heavy CPU tasks) to a thread or process pool."
},
{
  id: 55,
  difficulty: "hard",
  question: "In Python 3.11+, what is an 'asyncio.TaskGroup' used for?",
  options: [
    "A modern way to manage multiple tasks with improved error handling (if one fails, others are cancelled)",
    "To group users in a database",
    "To sort tasks by priority",
    "To encrypt network traffic"
  ],
  answer: 0,
  explanation: "TaskGroups provide a more robust context-manager-based approach to running multiple tasks compared to asyncio.gather()."
},
{
  id: 56,
  difficulty: "medium",
  question: "What is the result of the comprehension: {x: x % 2 == 0 for x in range(3)}?",
  options: ["{0, 2}", "[True, False, True]", "{0: True, 1: False, 2: True}", "{True, False}"],
  answer: 2,
  explanation: "This is a dictionary comprehension that maps an integer to a boolean indicating if it is even."
},
{
  id: 57,
  difficulty: "hard",
  question: "How do you write a nested list comprehension to flatten [[1, 2], [3, 4]]?",
  options: [
    "[y for x in list for y in x]",
    "[x for x in y for y in list]",
    "[[y for y in x] for x in list]",
    "[x.flatten() for x in list]"
  ],
  answer: 0,
  explanation: "The order of 'for' clauses in a comprehension follows the same order as nested for-loops."
},
{
  id: 58,
  difficulty: "medium",
  question: "In typing, what does 'Union[int, str]' represent?",
  options: [
    "A tuple containing an int and a str",
    "A variable that must be both an int and a str",
    "A variable that can be either an int or a str",
    "A string that looks like an integer"
  ],
  answer: 2,
  explanation: "Union (or the | operator in 3.10+) specifies that a value can be any one of the listed types."
},
{
  id: 59,
  difficulty: "hard",
  question: "What is 'typing.Callable' used for?",
  options: [
    "To type hint a function that returns a value",
    "To type hint a variable that is expected to be a function or a callable object",
    "To mark a function for deletion",
    "To allow a class to be called like a list"
  ],
  answer: 1,
  explanation: "Callable[[ArgTypes], ReturnType] is used when passing functions as arguments to other functions."
},
{
  id: 60,
  difficulty: "medium",
  question: "In the logging module, how do you capture the stack trace of an exception automatically?",
  options: [
    "logging.error('msg', trace=True)",
    "logging.error('msg', exc_info=True)",
    "logging.exception('msg')",
    "Both B and C are correct"
  ],
  answer: 3,
  explanation: "logging.exception() is a shortcut for logging.error(..., exc_info=True) and is usually used inside an 'except' block."
},
{
  id: 61,
  difficulty: "hard",
  question: "Which logging handler would you use to send log messages to a remote server via UDP or TCP?",
  options: ["FileHandler", "StreamHandler", "SocketHandler", "SMTPHandler"],
  answer: 2,
  explanation: "SocketHandler allows sending logging information across a network to a receiving socket."
},
{
  id: 62,
  difficulty: "medium",
  question: "Which keyword allows an 'async' function to be used as a context manager?",
  options: ["async with", "with await", "async for", "await with"],
  answer: 0,
  explanation: "'async with' is used for context managers that have asynchronous __aenter__ and __aexit__ methods."
},
{
  id: 63,
  difficulty: "hard",
  question: "What is the purpose of 'typing.Protocol'?",
  options: [
    "To define network protocols like HTTP",
    "To implement structural subtyping (Static Duck Typing)",
    "To define private class methods",
    "To speed up function calls"
  ],
  answer: 1,
  explanation: "Protocol allows you to define an interface; any class that implements the required methods is considered a subtype of that Protocol."
},
{
  id: 64,
  difficulty: "medium",
  question: "In a list comprehension, where does the 'if' condition go if it is a filter (no else clause)?",
  options: ["At the beginning", "After the 'for' clause", "In the middle", "Inside the square brackets"],
  answer: 1,
  explanation: "[expr for item in iterable if condition] filters the input list."
},
{
  id: 65,
  difficulty: "hard",
  question: "What is the value of x after: x = [i for i in range(5) if i > 2 else 0]?",
  options: ["[0, 0, 0, 3, 4]", "[3, 4]", "SyntaxError", "[0, 1, 2, 3, 4]"],
  answer: 2,
  explanation: "SyntaxError. If you use 'else', the conditional logic must come at the beginning as a ternary expression: [i if i > 2 else 0 for i in range(5)]."
},
{
  id: 66,
  difficulty: "medium",
  question: "Which itertools function is the equivalent of a 'nested loop'?",
  options: ["itertools.combinations", "itertools.product", "itertools.permutations", "itertools.zip_longest"],
  answer: 1,
  explanation: "itertools.product(A, B) is equivalent to 'for a in A: for b in B:'."
},
{
  id: 67,
  difficulty: "hard",
  question: "How do you create a 'Default Dictionary' that returns a list for missing keys?",
  options: [
    "dict(default=list)",
    "collections.defaultdict(list)",
    "collections.dict(list)",
    "{} .setdefault(list)"
  ],
  answer: 1,
  explanation: "defaultdict(list) creates an empty list whenever a non-existent key is accessed."
},
{
  id: 68,
  difficulty: "medium",
  question: "What does 'itertools.dropwhile(lambda x: x < 5, [1, 4, 6, 2, 8])' return?",
  options: ["[6, 2, 8]", "[1, 4]", "[6, 8]", "[1, 4, 2]"],
  answer: 0,
  explanation: "It drops elements as long as the condition is true; as soon as it hits '6' (which is >= 5), it returns the rest of the list regardless of the values."
},
{
  id: 69,
  difficulty: "hard",
  question: "In typing, what is 'Literal' used for?",
  options: [
    "To ensure a variable is a string",
    "To restrict a variable to specific, exact values (e.g., Literal['r', 'w', 'a'])",
    "To allow any value",
    "To define a variable in a config file"
  ],
  answer: 1,
  explanation: "Literal allows you to define a type that must be one of a few specific values, often used for function modes or status codes."
},
{
  id: 70,
  difficulty: "medium",
  question: "What is the purpose of 'logging.Formatter'?",
  options: [
    "To change the data type of the logs",
    "To define the layout and content of the log messages (e.g., timestamp, level, message)",
    "To compress the log files",
    "To filter logs by keyword"
  ],
  answer: 1,
  explanation: "Formatters allow you to specify the string representation of the LogRecord."
},
{
  id: 71,
  difficulty: "hard",
  question: "When using 'asyncio.run(main())', what is the main restriction?",
  options: [
    "It must be run from a thread",
    "It cannot be called when another asyncio event loop is running in the same thread",
    "It can only run once per hour",
    "It only works with Python 2.7"
  ],
  answer: 1,
  explanation: "asyncio.run() creates a new loop and closes it; calling it from within an existing loop (like in a Jupyter notebook) causes an error."
},
{
  id: 72,
  difficulty: "medium",
  question: "Which comprehension produces a generator object rather than a list?",
  options: [
    "[x for x in range(10)]",
    "{x for x in range(10)}",
    "(x for x in range(10))",
    "{x: x for x in range(10)}"
  ],
  answer: 2,
  explanation: "Parentheses indicate a generator expression, which uses lazy evaluation."
},
{
  id: 73,
  difficulty: "hard",
  question: "What is the purpose of 'typing.TypeVar'?",
  options: [
    "To define a variable that can change types",
    "To create generic types for classes and functions",
    "To define a global variable",
    "To force a variable to be a specific class"
  ],
  answer: 1,
  explanation: "TypeVar is used to define generic placeholders (like 'T') so a function can accept and return the same, though unspecified, type."
},
{
  id: 74,
  difficulty: "medium",
  question: "How do you check if a logging logger is currently capturing 'DEBUG' level logs?",
  options: [
    "if logger.debug == True:",
    "if logger.isEnabledFor(logging.DEBUG):",
    "if logging.DEBUG:",
    "if logger.check('DEBUG'):"
  ],
  answer: 1,
  explanation: "isEnabledFor() is a standard way to check if a log level is currently active before performing expensive log message construction."
},
{
  id: 75,
  difficulty: "hard",
  question: "What does 'itertools.starmap(pow, [(2, 5), (3, 2)])' return?",
  options: ["[32, 9]", "[10, 6]", "[(2, 5), (3, 2)]", "Error"],
  answer: 0,
  explanation: "starmap() is like map(), but it unpacks the tuple arguments into the function (e.g., pow(2, 5))."
},
{
  id: 76,
  difficulty: "medium",
  question: "In Python, what is the 'Walrus Operator' (:=) commonly used for in comprehensions?",
  options: [
    "To delete items",
    "To assign a value to a variable within an expression (e.g., to reuse a result in a filter and the output)",
    "To perform division",
    "To compare two lists"
  ],
  answer: 1,
  explanation: "Introduced in Python 3.8, it allows assignment within an expression, reducing redundant function calls in comprehensions."
},
{
  id: 77,
  difficulty: "hard",
  question: "What is the output of: [i for i in range(10) if (sq := i*i) > 20]?",
  options: ["[25, 36, 49, 64, 81]", "[5, 6, 7, 8, 9]", "[36, 49, 64, 81]", "[6, 7, 8, 9]"],
  answer: 1,
  explanation: "The filter checks the square, but the output is 'i'. Since 5*5=25 (>20), 5 is the first element."
},
{
  id: 78,
  difficulty: "medium",
  question: "Which typing hint is used for a variable that could be any object at all?",
  options: ["Any", "Object", "None", "Universal"],
  answer: 0,
  explanation: "Any is the least restrictive type hint."
},
{
  id: 79,
  difficulty: "hard",
  question: "In the logging module, what does 'propagate = False' do on a child logger?",
  options: [
    "It stops the logger from writing to a file",
    "It prevents the log message from being passed up to the parent logger's handlers",
    "It disables all logging for that module",
    "It hides error messages"
  ],
  answer: 1,
  explanation: "By default, logs 'bubble up' to parent loggers. Setting propagate to False stops this behavior."
},
{
  id: 80,
  difficulty: "medium",
  question: "What does 'itertools.filterfalse(lambda x: x % 2 == 0, range(5))' return?",
  options: ["[0, 2, 4]", "[1, 3]", "[0, 1, 2, 3, 4]", "[]"],
  answer: 1,
  explanation: "filterfalse() returns only those items for which the function returns False."
},
{
  id: 81,
  difficulty: "hard",
  question: "What is 'typing.Final' used for?",
  options: [
    "To close a function",
    "To indicate that a variable should not be re-assigned or a method should not be overridden",
    "To mark the end of a script",
    "To define a constant in C++"
  ],
  answer: 1,
  explanation: "Final is used by type checkers to enforce that a variable acts as a constant."
},
{
  id: 82,
  difficulty: "medium",
  question: "In asyncio, what does 'await asyncio.sleep(0)' do?",
  options: [
    "Nothing",
    "Pauses for 1 second",
    "Yields control to the event loop, allowing other tasks to run before returning",
    "Restarts the script"
  ],
  answer: 2,
  explanation: "A sleep of 0 is a common pattern to 'give up the floor' to other pending tasks without actually delaying."
},
{
  id: 83,
  difficulty: "hard",
  question: "How do you handle a scenario where multiple asyncio tasks are running and you want to stop if any of them raises an error?",
  options: [
    "Use a try-except around asyncio.gather()",
    "Use an asyncio.TaskGroup (Python 3.11+)",
    "Manually loop and check task status",
    "Both A and B are correct"
  ],
  answer: 3,
  explanation: "Gather raises the first exception it encounters; TaskGroups are designed to cancel siblings when one fails."
},
{
  id: 84,
  difficulty: "medium",
  question: "What is the output of: {x for x in 'abracadabra' if x not in 'abc'}?",
  options: ["{'r', 'd'}", "{'a', 'b', 'r', 'a', 'c', 'a', 'd', 'a', 'b', 'r', 'a'}", "['r', 'd']", "Error"],
  answer: 0,
  explanation: "This is a set comprehension. It extracts unique characters from the string that are not 'a', 'b', or 'c'."
},
{
  id: 85,
  difficulty: "hard",
  question: "In the logging module, which method is used to programmatically add a new handler to a logger?",
  options: ["logger.setHandler()", "logger.addHandler()", "logger.pushHandler()", "logger.attach()"],
  answer: 1,
  explanation: "addHandler() allows you to attach objects like FileHandler or StreamHandler to a specific logger."
},
{
  id: 86,
  difficulty: "medium",
  question: "What is 'typing.NamedTuple'?",
  options: [
    "A way to create a tuple where elements have names and can be accessed via dot notation",
    "A dictionary that cannot be changed",
    "A list of strings",
    "A type of SQL table"
  ],
  answer: 0,
  explanation: "NamedTuple provides a more readable and self-documenting way to use tuples."
},
{
  id: 87,
  difficulty: "hard",
  question: "What is the primary difference between 'typing.List' and 'typing.Sequence'?",
  options: [
    "List is mutable; Sequence is usually treated as immutable/read-only",
    "Sequence only allows integers",
    "List is faster",
    "There is no difference"
  ],
  answer: 0,
  explanation: "Sequence is a covariant type that covers lists, tuples, and strings. It is preferred for function arguments when you only need to iterate/index but not modify."
},
{
  id: 88,
  difficulty: "medium",
  question: "How do you install a Python package from a specific git repository using pip?",
  options: [
    "pip install [url]",
    "pip install git+[url]",
    "pip download [url]",
    "git clone [url] > pip"
  ],
  answer: 1,
  explanation: "pip supports various VCS (Version Control Systems) prefixes like git+, hg+, or svn+."
},
{
  id: 89,
  difficulty: "hard",
  question: "In pip, what does 'pip install -e .' do?",
  options: [
    "Installs everything in the current directory",
    "Installs the current project in 'editable' or 'development' mode",
    "Deletes all packages",
    "Installs only encrypted files"
  ],
  answer: 1,
  explanation: "Editable mode allows you to make changes to the source code and have them immediately reflected without re-installing the package."
},
{
  id: 90,
  difficulty: "medium",
  question: "What is the purpose of the 'itertools.zip_longest()' function?",
  options: [
    "To zip two lists and repeat the longer one",
    "To zip iterables and pad the missing values of shorter ones with a fill value (default None)",
    "To sort the list by length",
    "To find the longest string in a list"
  ],
  answer: 1,
  explanation: "Standard zip() stops at the shortest list; zip_longest() continues until the longest one is exhausted."
},
{
  id: 91,
  difficulty: "hard",
  question: "What is 'typing.Annotated' used for?",
  options: [
    "To add metadata to type hints (e.g., Annotated[int, ValueRange(0, 10)])",
    "To write comments in code",
    "To mark a function as slow",
    "To define a new class"
  ],
  answer: 0,
  explanation: "Annotated allows you to attach extra information to types which can be used by libraries like Pydantic or FastAPI."
},
{
  id: 92,
  difficulty: "medium",
  question: "In asyncio, what does 'asyncio.create_task()' do?",
  options: [
    "It creates a new thread",
    "It schedules the coroutine to run on the event loop as a concurrent Task",
    "It saves the function to disk",
    "It pauses the current function"
  ],
  answer: 1,
  explanation: "create_task() is the standard way to start a coroutine 'in the background' while continuing execution of the current function."
},
{
  id: 93,
  difficulty: "hard",
  question: "How can you prevent a long-running asyncio task from running forever?",
  options: [
    "Use a while loop with a counter",
    "Use 'asyncio.wait_for(task, timeout=seconds)'",
    "Disconnect the internet",
    "Use a try-finally block"
  ],
  answer: 1,
  explanation: "wait_for() raises an asyncio.TimeoutError if the task does not complete within the specified time."
},
{
  id: 94,
  difficulty: "medium",
  question: "What is the result of [x for x in range(5) if x % 2 == 0 if x > 0]?",
  options: ["[0, 2, 4]", "[2, 4]", "[0, 1, 2, 3, 4]", "Error"],
  answer: 1,
  explanation: "Multiple 'if' clauses in a comprehension act like an 'AND' condition."
},
{
  id: 95,
  difficulty: "hard",
  question: "In the logging module, what is a 'NullHandler' used for?",
  options: [
    "To delete logs",
    "To provide a default 'do-nothing' handler for library developers so users don't see 'No handlers found' warnings",
    "To catch NullPointerExceptions",
    "To log only empty strings"
  ],
  answer: 1,
  explanation: "Library authors should use NullHandler to avoid cluttering the console if the library user hasn't configured their own logging."
},
{
  id: 96,
  difficulty: "medium",
  question: "Which typing hint is used for a function that never returns (e.g., it always raises an error or contains an infinite loop)?",
  options: ["None", "NoReturn", "Any", "Void"],
  answer: 1,
  explanation: "NoReturn informs type checkers and developers that the function will never successfully exit."
},
{
  id: 97,
  difficulty: "hard",
  question: "In pip, which file is typically used to ensure that a project can be built reliably across different environments with consistent build tools?",
  options: ["requirements.txt", "setup.py", "pyproject.toml", "pip.ini"],
  answer: 2,
  explanation: "pyproject.toml is the modern standard for defining build system requirements and project metadata (PEP 518/621)."
},

{
id: 98,
difficulty: "hard",
question: "When using pip, what is the purpose of the '--no-cache-dir' flag?",
options: [
"To prevent pip from installing packages",
"To force pip to download packages fresh instead of using local cached copies",
"To install packages into the system directory",
"To speed up the installation process"
],
answer: 1,
explanation: "Using --no-cache-dir ensures that pip doesn't use old, potentially corrupted cached files, though it makes the install slower."
}, 
{
id: 99,
difficulty: "hard",
question: "In Python's 'typing' module, what is the purpose of 'Any'?",
options: [
"It requires the variable to be an integer",
"It indicates that the variable is a constant",
"It is a static type indicating the variable can be of any type, effectively bypassing type checking",
"It is used for multi-threading"
],
answer: 2,
explanation: "Any is used when a variable's type is unknown or can vary, essentially telling type checkers to ignore that variable."
},
{
  id: 100,
  difficulty: "hard",
  question: "Which dunder method in Python is responsible for turning a class instance into a context manager used with the 'with' statement?",
  options: ["__init__", "__enter__", "__call__", "__str__"],
  answer: 1,
  explanation: "The __enter__ and __exit__ methods define the setup and teardown logic for context managers."
},

/* ======================================================
PYSPARK FOUNDATIONS (IDs 101 - 200)
====================================================== */
{
  id: 101,
  difficulty: "easy",
  question: "What is the primary entry point for programming Spark with the DataFrame API since Spark 2.0?",
  options: ["SparkContext", "SqlContext", "SparkSession", "StreamingContext"],
  answer: 2,
  explanation: "SparkSession is the unified entry point that replaced the older SparkContext and SqlContext."
},
{
  id: 102,
  difficulty: "medium",
  question: "Which of the following is considered a 'Narrow Transformation' in PySpark?",
  options: ["groupBy()", "join()", "filter()", "repartition()"],
  answer: 2,
  explanation: "Narrow transformations (like filter or map) do not require data to be moved across the network (no shuffle)."
},
{
  id: 103,
  difficulty: "hard",
  question: "In PySpark, why is a 'Wide Transformation' generally slower than a 'Narrow Transformation'?",
  options: [
    "It requires a 'Shuffle', which involves writing data to disk and moving it across the network",
    "It uses more Python code",
    "It only runs on the Driver node",
    "It deletes the checkpoint files"
  ],
  answer: 0,
  explanation: "Wide transformations require data from multiple partitions to be combined, triggering a shuffle which is the most expensive operation in Spark."
},
{
  id: 104,
  difficulty: "medium",
  question: "Which PySpark method should be used to combine two DataFrames with the same schema vertically?",
  options: ["df1.join(df2)", "df1.union(df2)", "df1.merge(df2)", "df1.collect(df2)"],
  answer: 1,
  explanation: "union() (or unionByName()) appends rows from one DataFrame to another."
},
/* ... IDs 105 - 199 involve DataFrame transformations, Window functions, and SQL API ... */
/* ======================================================
PYSPARK TRANSFORMATIONS & SQL API (IDs 105 - 199)
====================================================== */
{
  id: 105,
  difficulty: "medium",
  question: "Which Spark storage level is used by default when calling df.cache()?",
  options: ["MEMORY_ONLY", "MEMORY_AND_DISK", "DISK_ONLY", "OFF_HEAP"],
  answer: 1,
  explanation: "For DataFrames, .cache() uses MEMORY_AND_DISK by default to ensure data is persisted even if it exceeds available RAM."
},
{
  id: 106,
  difficulty: "easy",
  question: "Which method is used to remove duplicate rows from a PySpark DataFrame?",
  options: ["df.removeDuplicates()", "df.dropDuplicates()", "df.distinctRows()", "df.unique()"],
  answer: 1,
  explanation: "dropDuplicates() allows you to drop duplicates based on all or specific columns; distinct() is an alias for dropping based on all columns."
},
{
  id: 107,
  difficulty: "medium",
  question: "How do you rename an existing column 'old_col' to 'new_col' in a PySpark DataFrame?",
  options: ["df.renameColumn('old_col', 'new_col')", "df.withColumnRenamed('old_col', 'new_col')", "df.select('new_col' = 'old_col')", "df.alias('old_col', 'new_col')"],
  answer: 1,
  explanation: "withColumnRenamed(existingName, newName) is the standard transformation for renaming columns."
},
{
  id: 108,
  difficulty: "hard",
  question: "What is the result of applying df.repartition(10) followed by df.coalesce(5)?",
  options: ["5 partitions with a full shuffle", "10 partitions with no shuffle", "5 partitions with minimized shuffling", "An error occurs"],
  answer: 2,
  explanation: "repartition(10) triggers a full shuffle to create 10 partitions; coalesce(5) then reduces them to 5 by merging existing partitions without another full shuffle."
},
{
  id: 109,
  difficulty: "medium",
  question: "Which PySpark function is used to convert a JSON string column into a Struct type?",
  options: ["from_json()", "to_json()", "parse_json()", "struct_json()"],
  answer: 0,
  explanation: "from_json() takes a string column and a schema, converting the JSON text into a Spark Struct or Map."
},
{
  id: 110,
  difficulty: "hard",
  question: "To perform a calculation across a group of rows without collapsing them into a single row, which tool should be used?",
  options: ["groupBy", "Window functions", "pivot", "agg"],
  answer: 1,
  explanation: "Window functions allow you to perform calculations (like ranking or running totals) over a range of rows while keeping the original row-level detail."
},
{
  id: 111,
  difficulty: "medium",
  question: "In a Window specification, which method defines the grouping of data?",
  options: ["orderBy()", "partitionBy()", "rowsBetween()", "groupBy()"],
  answer: 1,
  explanation: "partitionBy() defines how the rows are grouped into buckets (windows) for the calculation."
},
{
  id: 112,
  difficulty: "hard",
  question: "What is the difference between rank() and dense_rank() in a Window function?",
  options: ["There is no difference", "rank() leaves gaps in the numbering after ties; dense_rank() does not", "dense_rank() leaves gaps; rank() does not", "rank() only works on integers"],
  answer: 1,
  explanation: "If two items are tied for 1st, rank() makes the next item 3rd. dense_rank() makes the next item 2nd."
},
{
  id: 113,
  difficulty: "medium",
  question: "How do you access the first 3 rows of a DataFrame and return them to the Driver as a List?",
  options: ["df.head(3)", "df.take(3)", "df.limit(3).collect()", "All of the above"],
  answer: 3,
  explanation: "head(), take(), and limit().collect() all retrieve a specific number of rows from the executors to the Driver."
},
{
  id: 114,
  difficulty: "hard",
  question: "Which function allows you to execute raw SQL queries against a Spark temporary view?",
  options: ["spark.sql()", "df.sql()", "spark.execute()", "spark.query()"],
  answer: 0,
  explanation: "The spark.sql() method allows you to pass a string containing a SQL query and returns the result as a DataFrame."
},
{
  id: 115,
  difficulty: "medium",
  question: "Which operator is used for 'Column-wise AND' in a PySpark filter condition?",
  options: ["and", "&&", "&", "AND"],
  answer: 2,
  explanation: "In PySpark DataFrame filters, bitwise operators (&, |, ~) must be used for logical conditions instead of 'and' or 'or'."
},
{
  id: 116,
  difficulty: "hard",
  question: "What is the purpose of the 'explode()' function?",
  options: ["To delete a DataFrame", "To flatten a nested structure", "To create a new row for each element in an array or map column", "To increase the number of partitions"],
  answer: 2,
  explanation: "explode() takes a column containing a collection (like a list) and turns each element into its own row."
},
{
  id: 117,
  difficulty: "medium",
  question: "How do you create a temporary view that is available across all SparkSessions in a cluster?",
  options: ["createOrReplaceTempView()", "createGlobalTempView()", "saveAsTable()", "createPersistentView()"],
  answer: 1,
  explanation: "A Global Temporary View is tied to the system-reserved database 'global_temp' and persists until the Spark application terminates."
},
{
  id: 118,
  difficulty: "hard",
  question: "Which function is used to calculate the time difference between two timestamp columns in days?",
  options: ["datediff()", "date_sub()", "time_between()", "diff_date()"],
  answer: 0,
  explanation: "datediff(end, start) returns the number of days between two dates."
},
{
  id: 119,
  difficulty: "medium",
  question: "What does the 'when()' and 'otherwise()' pattern represent in PySpark?",
  options: ["A loop", "A switch/case or if/else logic for column transformations", "An exception handler", "A window frame"],
  answer: 1,
  explanation: "F.when() is the Spark equivalent of a SQL CASE statement."
},
{
  id: 120,
  difficulty: "hard",
  question: "Which PySpark transformation allows you to turn a 'long' DataFrame into a 'wide' one by rotating column values?",
  options: ["rotate()", "transpose()", "pivot()", "melt()"],
  answer: 2,
  explanation: "pivot() is used to summarize data and transform row values into separate columns."
},
{
  id: 121,
  difficulty: "medium",
  question: "What is the result of 'df.count()' in Spark?",
  options: ["It returns the number of columns", "It returns the number of rows as an integer", "It is a transformation that returns a DataFrame", "It counts the number of nulls"],
  answer: 1,
  explanation: "count() is an action that triggers a job to count the total number of rows in the DataFrame."
},
{
  id: 122,
  difficulty: "hard",
  question: "In Spark SQL, what does the 'LATERAL VIEW' syntax (or 'outer explode') achieve?",
  options: ["It joins two tables on a non-key column", "It allows you to apply a UDTF (like explode) to a column and join the result back to the original row", "It views data from a side-car container", "It is used for encryption"],
  answer: 1,
  explanation: "Lateral views are used in conjunction with generator functions to expand nested data while preserving the rest of the row's columns."
},
{
  id: 123,
  difficulty: "medium",
  question: "How do you cast a column 'price' from string to double?",
  options: ["df.cast('price', 'double')", "df.select(df.price.cast('double'))", "df.withColumn('price', df.price.double())", "df.convertTo('double', 'price')"],
  answer: 1,
  explanation: "The .cast() method on a Column object is the standard way to change data types."
},
{
  id: 124,
  difficulty: "hard",
  question: "Which function allows you to get the current timestamp in a Spark transformation?",
  options: ["now()", "current_timestamp()", "get_date()", "sys_date()"],
  answer: 1,
  explanation: "current_timestamp() returns the current time as a TimestampType column."
},
{
  id: 125,
  difficulty: "medium",
  question: "What is the purpose of 'df.printSchema()'?",
  options: ["To print the data to the console", "To display the structure (column names and types) of the DataFrame", "To save the schema to a file", "To validate the data against a schema"],
  answer: 1,
  explanation: "printSchema() is a helpful debugging tool that shows the tree structure of the DataFrame schema."
},
/* IDs 126 - 198 follow a pattern of Spark SQL and Transformation deep dives... */
/* ======================================================
PYSPARK TRANSFORMATIONS & SQL API (IDs 126 - 198)
====================================================== */

{
  id: 126,
  difficulty: "medium",
  question: "Which function is used to check if a specific value exists within an Array-type column?",
  options: ["exists()", "array_contains()", "is_in_array()", "contain_value()"],
  answer: 1,
  explanation: "array_contains(column, value) returns true if the value is present in the collection."
},
{
  id: 127,
  difficulty: "hard",
  question: "What does the 'struct()' function do in PySpark?",
  options: [
    "It creates a new database table",
    "It bundles multiple columns into a single nested 'StructType' column",
    "It defines the schema for a CSV file",
    "It is an alias for the groupBy operation"
  ],
  answer: 1,
  explanation: "struct() is used to create nested data structures within a single row."
},
{
  id: 128,
  difficulty: "medium",
  question: "Which function is used to extract the year from a Timestamp or Date column?",
  options: ["get_year()", "extract(year from col)", "year()", "date_format(col, 'yyyy')"],
  answer: 2,
  explanation: "The year() function specifically extracts the year integer from a date/timestamp."
},
{
  id: 129,
  difficulty: "hard",
  question: "What is the purpose of 'f.expr()' in PySpark?",
  options: [
    "To execute Python logic on executors",
    "To write SQL-like expressions as strings within the DataFrame API",
    "To evaluate the performance of a job",
    "To convert a DataFrame to an RDD"
  ],
  answer: 1,
  explanation: "expr() allows you to use SQL syntax for complex logic that might be verbose in the standard Column API."
},
{
  id: 130,
  difficulty: "medium",
  question: "How do you calculate the average of a column named 'salary' grouped by 'department'?",
  options: [
    "df.groupBy('department').avg('salary')",
    "df.avg('salary').partitionBy('department')",
    "df.select(avg('salary')).where('department')",
    "df.department.avg('salary')"
  ],
  answer: 0,
  explanation: "The standard aggregation pattern is groupBy followed by an aggregate function like avg, sum, or count."
},
{
  id: 131,
  difficulty: "hard",
  question: "Which function returns a new column containing the first non-null value among several input columns?",
  options: ["nvl()", "ifnull()", "coalesce()", "first_value()"],
  answer: 2,
  explanation: "In Spark SQL/PySpark, coalesce(col1, col2, ...) returns the first column that isn't null."
},
{
  id: 132,
  difficulty: "medium",
  question: "How do you sort a DataFrame by 'date' in descending order?",
  options: [
    "df.sort('date'.desc())",
    "df.orderBy(f.desc('date'))",
    "df.sortBy('date', reverse=True)",
    "df.arrange('date', descending=True)"
  ],
  answer: 1,
  explanation: "orderBy() or sort() combined with the desc() function from spark.sql.functions is the correct syntax."
},
{
  id: 133,
  difficulty: "hard",
  question: "What does 'regexp_replace(col, pattern, replacement)' do?",
  options: [
    "It renames a column using regex",
    "It replaces substrings that match a Regular Expression with a new string",
    "It validates if a column matches a regex",
    "It splits a string into an array"
  ],
  answer: 1,
  explanation: "It is a powerful string manipulation tool for cleaning data using pattern matching."
},
{
  id: 134,
  difficulty: "medium",
  question: "Which function converts a string column like '2023-01-01' into a DateType?",
  options: ["to_date()", "as_date()", "cast_date()", "format_date()"],
  answer: 0,
  explanation: "to_date(column, format) parses strings into actual date objects."
},
{
  id: 135,
  difficulty: "hard",
  question: "How does 'f.collect_set()' differ from 'f.collect_list()' during aggregation?",
  options: [
    "collect_set returns unique values; collect_list returns all values including duplicates",
    "collect_set is faster",
    "collect_list is only for integers",
    "There is no difference"
  ],
  answer: 0,
  explanation: "Set aggregation removes duplicates within the group; list aggregation preserves all items."
},
{
  id: 136,
  difficulty: "medium",
  question: "What is the result of 'lit(10)' in a PySpark transformation?",
  options: [
    "It creates a list of 10 items",
    "It creates a literal Column constant with the value 10",
    "It limits the DataFrame to 10 rows",
    "It creates 10 new partitions"
  ],
  answer: 1,
  explanation: "The lit() function is required when you want to use a constant value in a column operation."
},
{
  id: 137,
  difficulty: "hard",
  question: "Which join type returns only the rows from the left table that have NO match in the right table?",
  options: ["left_outer", "left_semi", "left_anti", "inner"],
  answer: 2,
  explanation: "Left-anti joins are highly efficient for finding 'missing' records or performing 'NOT IN' logic."
},
{
  id: 138,
  difficulty: "medium",
  question: "What does 'df.na.drop()' do?",
  options: [
    "Deletes the DataFrame",
    "Removes rows that contain any null values",
    "Drops a column named 'na'",
    "Removes duplicate rows"
  ],
  answer: 1,
  explanation: "It is the standard method for filtering out rows with null/missing data."
},
{
  id: 139,
  difficulty: "hard",
  question: "What is the purpose of 'f.lag(col, 1)' in a Window function?",
  options: [
    "To delay the job execution",
    "To access the value of the column from the previous row",
    "To calculate the total sum",
    "To find the last value in a partition"
  ],
  answer: 1,
  explanation: "Lag is used to compare a current row's value to a previous row's value within a sorted window."
},
{
  id: 140,
  difficulty: "medium",
  question: "Which function returns the number of months between two dates?",
  options: ["month_diff()", "months_between()", "diff_months()", "date_diff_months()"],
  answer: 1,
  explanation: "months_between(end, start) returns a double representing the months elapsed."
},
{
  id: 141,
  difficulty: "hard",
  question: "When using 'df.withColumn()', if the column name already exists, what happens?",
  options: [
    "An error is raised",
    "A new column with a suffix is created",
    "The existing column is overwritten",
    "Nothing happens"
  ],
  answer: 2,
  explanation: "withColumn() acts as both an 'add' and an 'update' operation depending on if the name exists."
},
{
  id: 142,
  difficulty: "medium",
  question: "Which function counts the number of non-null items in a group during aggregation?",
  options: ["sum()", "count()", "len()", "size()"],
  answer: 1,
  explanation: "In Spark, count(col) ignores nulls, whereas count(*) counts every row."
},
{
  id: 143,
  difficulty: "hard",
  question: "What is 'f.broadcast(df)' used for?",
  options: [
    "To send a message to all users",
    "To hint to Spark that a small DataFrame should be cached in memory on every worker to avoid a shuffle join",
    "To stream data to a dashboard",
    "To increase the logging level"
  ],
  answer: 1,
  explanation: "Broadcasting is the most effective optimization for joining a large table with a small lookup table."
},
{
  id: 144,
  difficulty: "medium",
  question: "How do you select only the first 100 rows of a DataFrame?",
  options: ["df.first(100)", "df.take(100)", "df.limit(100)", "df.top(100)"],
  answer: 2,
  explanation: "limit() is a transformation that creates a new DataFrame containing only the specified number of rows."
},
{
  id: 145,
  difficulty: "hard",
  question: "Which function is used to convert an Array of Strings into a single String separated by commas?",
  options: ["concat()", "array_join()", "flatten()", "toString()"],
  answer: 1,
  explanation: "array_join(col, ',') takes an array and merges its elements into a string using the provided delimiter."
},
{
  id: 146,
  difficulty: "medium",
  question: "What is the difference between 'df.select()' and 'df.withColumn()'?",
  options: [
    "select() creates a new schema; withColumn() modifies existing schema",
    "select() is for picking columns; withColumn() is specifically for adding or updating a single column",
    "There is no difference",
    "withColumn() is faster"
  ],
  answer: 1,
  explanation: "While both can add columns, select() is usually used for projection, while withColumn() is cleaner for step-by-step transformations."
},
{
  id: 147,
  difficulty: "hard",
  question: "What does 'f.monotonically_increasing_id()' provide?",
  options: [
    "A random number",
    "A unique, non-consecutive ID for each row across all partitions",
    "A sequence starting from 1 with no gaps",
    "A timestamp"
  ],
  answer: 1,
  explanation: "It generates IDs that are unique and increasing, but not necessarily consecutive (due to partition-based generation)."
},
{
  id: 148,
  difficulty: "medium",
  question: "Which function removes whitespace from both ends of a string column?",
  options: ["strip()", "clean()", "trim()", "clear()"],
  answer: 2,
  explanation: "The trim() function handles leading and trailing spaces."
},
{
  id: 149,
  difficulty: "hard",
  question: "What is the purpose of 'f.get_json_object(col, '$.path')'?",
  options: [
    "To convert a struct to JSON",
    "To extract a specific field from a JSON string using a path expression",
    "To validate a JSON schema",
    "To create a JSON file"
  ],
  answer: 1,
  explanation: "It is a fast way to extract single values from JSON strings without defining a full schema."
},
{
  id: 150,
  difficulty: "medium",
  question: "Which function would you use to find the maximum value in a column?",
  options: ["high()", "max()", "top()", "greatest()"],
  answer: 1,
  explanation: "max() is the standard aggregate function for finding the maximum value."
},

/* IDs 151 - 197 follow this pattern... skipping for brevity but maintaining the count logic */
/* ======================================================
PYSPARK TRANSFORMATIONS & SQL API (IDs 151 - 197)
====================================================== */
{
  id: 151,
  difficulty: "hard",
  question: "In a Window function, what is the difference between 'rowsBetween' and 'rangeBetween'?",
  options: [
    "They are identical",
    "rowsBetween uses physical row offsets; rangeBetween uses logical values of the orderBy column",
    "rowsBetween is for strings; rangeBetween is for numbers",
    "rangeBetween only works on the Driver node"
  ],
  answer: 1,
  explanation: "rowsBetween(1, 5) looks at the literal next 5 rows. rangeBetween(1, 5) looks at rows where the values in the order-by column are between current_value+1 and current_value+5."
},
{
  id: 152,
  difficulty: "medium",
  question: "Which function is used to convert a column of strings into an array by splitting on a delimiter?",
  options: ["f.divide()", "f.split()", "f.break()", "f.tokenize()"],
  answer: 1,
  explanation: "f.split(col, ',') splits a string into an ArrayType based on the provided regex pattern."
},
{
  id: 153,
  difficulty: "hard",
  question: "What does 'f.array_union(col1, col2)' return?",
  options: [
    "A list of all elements including duplicates",
    "An array of elements in col1 or col2, with duplicates removed",
    "The sum of the two arrays",
    "A string concatenation of the arrays"
  ],
  answer: 1,
  explanation: "array_union returns an array of the elements in the union of the two given arrays, without duplicates."
},
{
  id: 154,
  difficulty: "medium",
  question: "Which function returns the number of elements in an Array or Map column?",
  options: ["f.count()", "f.length()", "f.size()", "f.volume()"],
  answer: 2,
  explanation: "f.size() is used to find the length of collection types (Array/Map) in Spark."
},
{
  id: 155,
  difficulty: "hard",
  question: "What is the purpose of the 'f.lead(col, 1)' Window function?",
  options: [
    "To find the highest value in a group",
    "To access the value of the next row relative to the current row",
    "To skip the first row",
    "To find the first value in the partition"
  ],
  answer: 1,
  explanation: "Lead allows you to look ahead to subsequent rows within a window partition."
},
{
  id: 156,
  difficulty: "medium",
  question: "How do you round a decimal column 'price' to 2 decimal places?",
  options: ["f.ceil(df.price, 2)", "f.round(df.price, 2)", "f.floor(df.price, 2)", "f.truncate(df.price, 2)"],
  answer: 1,
  explanation: "f.round(col, scale) is the standard function for decimal rounding."
},
{
  id: 157,
  difficulty: "hard",
  question: "What does 'f.map_keys(col)' return for a Map-type column?",
  options: [
    "A list of all values",
    "An array containing all the keys of the map",
    "The first key in the map",
    "A boolean indicating if keys exist"
  ],
  answer: 1,
  explanation: "map_keys extracts all keys from a MapType column into an ArrayType column."
},
{
  id: 158,
  difficulty: "medium",
  question: "Which function converts a timestamp to a specific string format (e.g., 'MM/dd/yyyy')?",
  options: ["f.to_date()", "f.date_format()", "f.str_time()", "f.cast_string()"],
  answer: 1,
  explanation: "date_format(col, pattern) converts a date/timestamp to a string based on the Java SimpleDateFormat."
},
{
  id: 159,
  difficulty: "hard",
  question: "What is the result of 'f.substring(f.lit('SparkSQL'), 1, 5)'?",
  options: ["'Spark'", "'SparkS'", "'parkS'", "'arkSQ'"],
  answer: 1,
  explanation: "Spark SQL substring indices are 1-based. Starting at 1 for length 5 gives 'SparkS'."
},
{
  id: 160,
  difficulty: "medium",
  question: "How do you remove only the leading spaces from a string column?",
  options: ["f.trim()", "f.rtrim()", "f.ltrim()", "f.strip()"],
  answer: 2,
  explanation: "ltrim() removes leading spaces; rtrim() removes trailing; trim() removes both."
},
{
  id: 161,
  difficulty: "hard",
  question: "Which function provides the soundex code of a string for phonetic matching?",
  options: ["f.phonetic()", "f.soundex()", "f.match()", "f.translate()"],
  answer: 1,
  explanation: "soundex() is used to find strings that sound similar despite different spellings."
},
{
  id: 162,
  difficulty: "medium",
  question: "How do you find the last day of the month for a given date column?",
  options: ["f.month_end()", "f.last_day()", "f.end_date()", "f.date_trunc('month')"],
  answer: 1,
  explanation: "last_day(col) returns the last date of the month that the given date falls in."
},
{
  id: 163,
  difficulty: "hard",
  question: "What is the output of 'f.greatest(col1, col2, col3)'?",
  options: [
    "The sum of all columns",
    "The maximum value across the specified columns for each row",
    "The largest value in the entire table",
    "An error"
  ],
  answer: 1,
  explanation: "greatest() performs a horizontal comparison across multiple columns in a single row."
},
{
  id: 164,
  difficulty: "medium",
  question: "Which function allows you to get the current date (without time)?",
  options: ["f.now()", "f.today()", "f.current_date()", "f.get_date()"],
  answer: 2,
  explanation: "current_date() returns the date at the start of query evaluation."
},
{
  id: 165,
  difficulty: "hard",
  question: "What does 'f.percent_rank()' calculate in a Window function?",
  options: [
    "The percentage of total sum",
    "The relative rank of a row (rank - 1) / (total_rows - 1)",
    "A random percentage",
    "The percentage of null values"
  ],
  answer: 1,
  explanation: "percent_rank() is used to determine the percentile standing of a value within a partition."
},
{
  id: 166,
  difficulty: "medium",
  question: "How do you check if a column value is NaN (Not a Number)?",
  options: ["f.isnull()", "f.isnan()", "f.is_none()", "f.check_nan()"],
  answer: 1,
  explanation: "isnan() is specifically for floating point NaN values; isnull() is for database NULLs."
},
{
  id: 167,
  difficulty: "hard",
  question: "Which function is used to reverse the order of elements in an array column?",
  options: ["f.flip()", "f.reverse()", "f.array_back()", "f.invert()"],
  answer: 1,
  explanation: "f.reverse() works on both strings and arrays in PySpark."
},
{
  id: 168,
  difficulty: "medium",
  question: "What does 'f.concat_ws('-', col1, col2)' do?",
  options: [
    "Subtracts col2 from col1",
    "Concatenates col1 and col2 with a dash separator",
    "Filters rows containing dashes",
    "Creates a range between the two columns"
  ],
  answer: 1,
  explanation: "concat_ws (Concatenate With Separator) is safer than concat because it handles nulls by skipping them."
},
{
  id: 169,
  difficulty: "hard",
  question: "What is the purpose of 'f.overlay()'?",
  options: [
    "To join two tables",
    "To replace a part of a string with another string starting at a specific position",
    "To cache a DataFrame",
    "To create a UI overlay"
  ],
  answer: 1,
  explanation: "overlay(src, replace, pos, len) is used for precise string positioning/replacement."
},
{
  id: 170,
  difficulty: "medium",
  question: "Which function is used to find the absolute value of a number?",
  options: ["f.abs()", "f.positive()", "f.mag()", "f.neutral()"],
  answer: 0,
  explanation: "f.abs() returns the absolute value of the numeric column."
},
{
  id: 171,
  difficulty: "hard",
  question: "How do you generate an array of integers from 1 to 10 for each row?",
  options: ["f.range(1, 10)", "f.sequence(f.lit(1), f.lit(10))", "f.array(1, 10)", "f.generate(1, 10)"],
  answer: 1,
  explanation: "f.sequence(start, stop, step) generates an array of values from start to stop."
},
{
  id: 172,
  difficulty: "medium",
  question: "What does 'f.instr(col, 'abc')' return?",
  options: [
    "The string 'abc'",
    "The 1-based position of the first occurrence of 'abc' in the column",
    "A boolean",
    "The length of 'abc'"
  ],
  answer: 1,
  explanation: "instr returns the position of a substring; it returns 0 if the substring is not found."
},
{
  id: 173,
  difficulty: "hard",
  question: "Which function replaces all occurrences of a string with another string (without regex)?",
  options: ["f.replace()", "f.regexp_replace()", "f.translate()", "f.substitute()"],
  answer: 1,
  explanation: "While regexp_replace is common, for simple fixed-string replacement, it is the standard tool in Spark SQL."
},
{
  id: 174,
  difficulty: "medium",
  question: "How do you convert a column of strings to all uppercase?",
  options: ["f.upper()", "f.to_upper()", "f.capital()", "f.caps()"],
  answer: 0,
  explanation: "f.upper(col) is the standard transformation for case conversion."
},
{
  id: 175,
  difficulty: "hard",
  question: "What does 'f.flatten(col)' do to an array of arrays?",
  options: [
    "It removes nulls",
    "It converts it into a single array containing all elements of the sub-arrays",
    "It turns it into a string",
    "It sorts the array"
  ],
  answer: 1,
  explanation: "flatten() reduces the nesting level of an array of arrays by one level."
},
{
  id: 176,
  difficulty: "medium",
  question: "Which function returns the first value in a Window partition?",
  options: ["f.first_value()", "f.first()", "f.top()", "f.head()"],
  answer: 1,
  explanation: "In a window context, f.first(col) returns the first value encountered in the partition."
},
{
  id: 177,
  difficulty: "hard",
  question: "What is the purpose of 'f.ntile(n)' in a Window function?",
  options: [
    "To calculate a rolling average",
    "To divide the rows in a partition into 'n' groups (buckets) as evenly as possible",
    "To find the n-th value",
    "To count unique items"
  ],
  answer: 1,
  explanation: "ntile(4), for example, allows you to easily calculate quartiles for your data."
},
{
  id: 178,
  difficulty: "medium",
  question: "Which function converts a timestamp to a Unix timestamp (seconds from 1970)?",
  options: ["f.to_unix()", "f.unix_timestamp()", "f.seconds()", "f.get_epoch()"],
  answer: 1,
  explanation: "unix_timestamp() is commonly used for date math or interacting with systems that use epoch time."
},
{
  id: 179,
  difficulty: "hard",
  question: "What does 'f.slice(col, start, length)' do for an array column?",
  options: [
    "It removes elements",
    "It returns a subarray starting from 'start' index with the specified 'length'",
    "It cuts a string",
    "It splits the array in half"
  ],
  answer: 1,
  explanation: "slice() allows you to extract a portion of an array based on 1-based indexing."
},
{
  id: 180,
  difficulty: "medium",
  question: "Which function returns the current database being used in Spark?",
  options: ["f.db()", "f.current_database()", "f.show_db()", "f.namespace()"],
  answer: 1,
  explanation: "current_database() returns the name of the database/schema context."
},
{
  id: 181,
  difficulty: "hard",
  question: "What is the result of 'f.element_at(col, 1)' for an array?",
  options: [
    "The last element",
    "The first element (1-based indexing)",
    "An array with one element",
    "The length of the array"
  ],
  answer: 1,
  explanation: "element_at() uses 1-based indexing for positive values and can use negative values to count from the end."
},
{
  id: 182,
  difficulty: "medium",
  question: "How do you calculate the square root of a column?",
  options: ["f.sqrt()", "f.sqr()", "f.root(2)", "f.pow(0.5)"],
  answer: 0,
  explanation: "f.sqrt(col) is the optimized built-in for square roots."
},
{
  id: 183,
  difficulty: "hard",
  question: "What does 'f.array_except(col1, col2)' return?",
  options: [
    "An array of elements in col1 but NOT in col2",
    "An array of all elements except nulls",
    "A boolean",
    "An error if arrays are different"
  ],
  answer: 0,
  explanation: "array_except() performs a set difference between two arrays."
},
{
  id: 184,
  difficulty: "medium",
  question: "Which function returns the index of the first occurrence of a value in an array?",
  options: ["f.index_of()", "f.array_position()", "f.find()", "f.locate()"],
  answer: 1,
  explanation: "array_position(col, value) returns the 1-based index or 0 if not found."
},
{
  id: 185,
  difficulty: "hard",
  question: "What is 'f.aggregate()' (or 'reduce') used for in higher-order array functions?",
  options: [
    "To sum a list",
    "To apply a lambda function to reduce array elements to a single value",
    "To group data",
    "To join two arrays"
  ],
  answer: 1,
  explanation: "It is a higher-order function that allows complex stateful reduction of array elements (Spark 2.4+)."
},
{
  id: 186,
  difficulty: "medium",
  question: "How do you convert a date to its string representation of the day of the week?",
  options: ["f.day()", "f.date_format(col, 'EEEE')", "f.weekday()", "f.dayofweek()"],
  answer: 1,
  explanation: "Using date_format with 'EEEE' returns the full name (e.g., 'Monday')."
},
{
  id: 187,
  difficulty: "hard",
  question: "What is the purpose of 'f.map_from_arrays(keys, values)'?",
  options: [
    "To join two tables",
    "To create a MapType column from two ArrayType columns",
    "To convert a map to a list",
    "To search a map"
  ],
  answer: 1,
  explanation: "It creates a map by pairing elements from two arrays of equal length."
},
{
  id: 188,
  difficulty: "medium",
  question: "Which function returns the smallest value across multiple columns in a row?",
  options: ["f.least()", "f.min()", "f.small()", "f.bottom()"],
  answer: 0,
  explanation: "least() is the horizontal counterpart to the vertical min() aggregation."
},
{
  id: 189,
  difficulty: "hard",
  question: "What does 'f.transform(col, lambda)' do in Spark 2.4+?",
  options: [
    "Changes the DataFrame schema",
    "Applies a transformation to every element in an array column",
    "Converts a DataFrame to a RDD",
    "Renames all columns"
  ],
  answer: 1,
  explanation: "transform() is a higher-order function for manipulating array elements without exploding them."
},
{
  id: 190,
  difficulty: "medium",
  question: "Which function extracts the hour from a timestamp?",
  options: ["f.get_hour()", "f.hour()", "f.time_part('hour')", "f.date_part('h')"],
  answer: 1,
  explanation: "f.hour(col) extracts the hour (0-23) from a timestamp."
},
{
  id: 191,
  difficulty: "hard",
  question: "What is the result of 'f.nullif(col1, col2)'?",
  options: [
    "Returns null if col1 equals col2; otherwise returns col1",
    "Returns true if both are null",
    "Replaces nulls with zeros",
    "Joins the columns"
  ],
  answer: 0,
  explanation: "nullif() is a standard SQL logic helper for avoiding divide-by-zero or hiding specific values."
},
{
  id: 192,
  difficulty: "medium",
  question: "How do you add 5 days to a date column?",
  options: ["f.date_add(col, 5)", "f.add_days(col, 5)", "f.date_sum(col, 5)", "col + 5"],
  answer: 0,
  explanation: "date_add() is the standard function for date arithmetic in days."
},
{
  id: 193,
  difficulty: "hard",
  question: "What is the difference between 'f.size()' and 'f.count()'?",
  options: [
    "size() is for collections (Arrays/Maps); count() is for rows in a group",
    "They are the same",
    "size() is for bytes",
    "count() is for strings"
  ],
  answer: 0,
  explanation: "size() measures the contents of a single row's cell; count() measures the number of rows."
},
{
  id: 194,
  difficulty: "medium",
  question: "Which function returns a random number between 0 and 1?",
  options: ["f.random()", "f.rand()", "f.any()", "f.chance()"],
  answer: 1,
  explanation: "f.rand() (optionally with a seed) generates a random double column."
},
{
  id: 195,
  difficulty: "hard",
  question: "What is 'f.assert_true(col)' used for?",
  options: [
    "To filter data",
    "To throw an error if a condition is not met for any row during processing",
    "To validate a schema",
    "To check if a table exists"
  ],
  answer: 1,
  explanation: "assert_true() is a debugging/validation function that stops the job if it encounters invalid data."
},
{
  id: 196,
  difficulty: "medium",
  question: "How do you find the first day of the week for a date column?",
  options: ["f.week_start()", "f.date_trunc('week', col)", "f.monday()", "f.first_day()"],
  answer: 1,
  explanation: "date_trunc('week', col) resets the date to the most recent Monday (Spark's default)."
},
{
  id: 197,
  difficulty: "hard",
  question: "What does 'f.zip_with(col1, col2, lambda)' do?",
  options: [
    "Compresses two arrays",
    "Merges two arrays element-wise using a custom lambda function",
    "Joins two tables",
    "Concatenates strings"
  ],
  answer: 1,
  explanation: "zip_with() is a higher-order function that combines two arrays into one based on logic you define (e.g., adding pairs)."
},
{
  id: 198,
  difficulty: "hard",
  question: "When joining two DataFrames that both have a column named 'id', how do you avoid an 'ambiguous column' error in later transformations?",
  options: [
    "Spark automatically renames them",
    "By aliasing the DataFrames and referencing columns as 'df_alias.id'",
    "By dropping the column from one table after the join",
    "Both B and C are valid strategies"
  ],
  answer: 3,
  explanation: "Using aliases during the join (df1.alias('a').join(df2.alias('b'), 'id')) or dropping the redundant column immediately is essential for clean code."
},
{
  id: 199,
  difficulty: "hard",
  question: "What happens when you call 'df.persist(StorageLevel.DISK_ONLY)'?",
  options: [
    "Spark ignores it if there is enough RAM",
    "Spark writes the DataFrame partitions to the local disk of the executors and removes them from RAM",
    "The data is saved to S3 permanently",
    "The job fails immediately"
  ],
  answer: 1,
  explanation: "DISK_ONLY storage level forces the data to be serialized and stored on the executor's local disk, freeing up memory for other computations."
}, 
{
  id: 200,
  difficulty: "hard",
  question: "What is the default number of shuffle partitions in Spark SQL?",
  options: ["10", "100", "200", "500"],
  answer: 2,
  explanation: "By default, spark.sql.shuffle.partitions is set to 200, which often needs tuning based on data size."
},

/* ======================================================
PYSPARK PERFORMANCE & SCENARIOS (IDs 201 - 310)
====================================================== */
{
  id: 201,
  difficulty: "hard",
  question: "You are joining a large 1TB fact table with a small 20MB lookup table. How can you optimize this join?",
  options: [
    "Use a Shuffle Hash Join",
    "Increase the number of executors",
    "Broadcast the small table using the broadcast() hint",
    "Convert both to CSV files first"
  ],
  answer: 2,
  explanation: "Broadcasting sends the small table to every executor, allowing for a 'Broadcast Hash Join' that avoids a full shuffle of the 1TB table."
},
{
  id: 202,
  difficulty: "medium",
  question: "What does the PySpark 'coalesce(n)' method do compared to 'repartition(n)'?",
  options: [
    "It increases the number of partitions without a shuffle",
    "It decreases the number of partitions by minimizing data movement (no full shuffle)",
    "It sorts the data within partitions",
    "It saves the data to S3"
  ],
  answer: 1,
  explanation: "coalesce() is more efficient for reducing partitions because it avoids a full shuffle; repartition() always triggers a shuffle."
},
{
  id: 203,
  difficulty: "hard",
  question: "Scenario: A PySpark job is failing with an 'OutOfMemory (OOM)' error on the DRIVER node. What is the most likely cause?",
  options: [
    "The worker nodes are too small",
    "The code called .collect() on a massive distributed DataFrame",
    "The code used too many filters",
    "The data is stored in Parquet format"
  ],
  answer: 1,
  explanation: ".collect() pulls all distributed data into the single Driver node. If the data is larger than the Driver's RAM, it crashes."
},
{
  id: 204,
  difficulty: "hard",
  question: "How does 'Salting' help resolve 'Data Skew' in a PySpark join?",
  options: [
    "It encrypts the join keys for security",
    "It adds a random suffix to the join keys to redistribute skewed data more evenly across partitions",
    "It removes NULL values from the join",
    "It automatically increases the cluster size"
  ],
  answer: 1,
  explanation: "Salting breaks up a massive partition (caused by a frequent key) into smaller pieces so they can be processed in parallel."
},
{
  id: 205,
  difficulty: "medium",
  question: "In Spark 3.0+, which feature allows the engine to optimize query plans based on runtime statistics?",
  options: ["Lazy Evaluation", "Adaptive Query Execution (AQE)", "Catalyst Optimizer", "Tungsten Engine"],
  answer: 1,
  explanation: "AQE can re-optimize joins and coalesce shuffle partitions dynamically while the job is running."
},
/* ... IDs 206 - 304 ... */
/* ======================================================
PYSPARK PERFORMANCE & SCENARIOS (IDs 206 - 310)
====================================================== */

{
  id: 206,
  difficulty: "hard",
  question: "Which Spark UI tab is most useful for identifying 'Data Skew' by looking at task durations across executors?",
  options: ["Storage", "Executors", "Stages", "Environment"],
  answer: 2,
  explanation: "The Stages tab shows the distribution of task times. If a few tasks take much longer than others (max >> median), it indicates data skew."
},
{
  id: 207,
  difficulty: "medium",
  question: "What is the purpose of 'Caching' a DataFrame in PySpark?",
  options: [
    "To save data permanently to the Lakehouse",
    "To store an intermediate DataFrame in memory to avoid re-computing it in subsequent actions",
    "To encrypt the data",
    "To remove null values"
  ],
  answer: 1,
  explanation: "Caching is an optimization technique that saves the result of a lazy transformation in memory for reuse."
},
{
  id: 208,
  difficulty: "hard",
  question: "In the context of Spark Memory Management, what is 'Storage Memory' primarily used for?",
  options: [
    "Executing joins and aggregations",
    "Caching DataFrames and broadcasting variables",
    "Storing Python libraries",
    "Managing the Driver's logs"
  ],
  answer: 1,
  explanation: "Storage Memory is reserved for cached data and broadcast variables, while Execution Memory is for shuffles and joins."
},
{
  id: 209,
  difficulty: "medium",
  question: "Which configuration property controls the number of partitions created during a shuffle (e.g., after a join)?",
  options: [
    "spark.sql.shuffle.partitions",
    "spark.driver.maxResultSize",
    "spark.executor.instances",
    "spark.default.parallelism"
  ],
  answer: 0,
  explanation: "spark.sql.shuffle.partitions defaults to 200, but should be tuned based on the size of the data."
},
{
  id: 210,
  difficulty: "hard",
  question: "What does 'Lazy Evaluation' mean in PySpark?",
  options: [
    "The code runs slowly",
    "Transformations are not executed until an Action (like collect or count) is called",
    "Spark ignores errors in the code",
    "The cluster sleeps when not in use"
  ],
  answer: 1,
  explanation: "Lazy evaluation allows Spark to build a Logical Plan and optimize the entire query before actually processing data."
},
{
  id: 211,
  difficulty: "hard",
  question: "What is the 'Communication Wall' in distributed computing?",
  options: [
    "A firewall setting",
    "The point where adding more workers decreases performance due to network overhead and task orchestration",
    "A failure in the Driver-Executor connection",
    "The limit of S3 throughput"
  ],
  answer: 1,
  explanation: "As you add more nodes, the cost of moving data (shuffling) and coordinating tasks eventually outweighs the computation gains."
},
{
  id: 212,
  difficulty: "medium",
  question: "Which Spark component is responsible for converting the Logical Plan into a Physical Plan?",
  options: ["Catalyst Optimizer", "Tungsten Engine", "Cluster Manager", "Block Manager"],
  answer: 0,
  explanation: "The Catalyst Optimizer performs rule-based and cost-based optimizations to determine the most efficient Physical Plan."
},
{
  id: 213,
  difficulty: "hard",
  question: "Scenario: A job fails with 'Executor Lost' or 'YARN Node Manager Container killed'. What is the most likely cause?",
  options: [
    "The Driver ran out of memory",
    "The Executor exceeded its memory limit (often due to memory-intensive joins or UDFs)",
    "The S3 bucket is full",
    "The code has a syntax error"
  ],
  answer: 1,
  explanation: "Executor Lost usually happens when a worker node runs out of RAM (OOM) and is terminated by the cluster manager."
},
{
  id: 214,
  difficulty: "medium",
  question: "What is 'Predicate Pushdown' in Spark?",
  options: [
    "Deleting data before reading it",
    "Moving filters (WHERE clauses) as close to the data source as possible to reduce the amount of data read",
    "Sorting data after it is loaded",
    "Converting Python to SQL"
  ],
  answer: 1,
  explanation: "By 'pushing down' filters to the storage layer (like Parquet), Spark avoids reading unnecessary rows into memory."
},
{
  id: 215,
  difficulty: "hard",
  question: "Which type of join is triggered when Spark cannot broadcast either table and no join keys are specified?",
  options: ["Sort Merge Join", "Broadcast Hash Join", "Cartesian Product (Cross Join)", "Shuffle Hash Join"],
  answer: 2,
  explanation: "Without join keys or broadcast hints, Spark defaults to a Cartesian product, which is extremely expensive and should be avoided."
},
{
  id: 216,
  difficulty: "medium",
  question: "How does the 'Tungsten' engine improve Spark performance?",
  options: [
    "By adding more CPUs to the cluster",
    "By optimizing memory management using off-heap memory and binary processing to bypass Java GC overhead",
    "By compressing data into ZIP files",
    "By automatically writing SQL code"
  ],
  answer: 1,
  explanation: "Tungsten uses binary data formats and whole-stage code generation to make Spark execution closer to 'bare metal' performance."
},
{
  id: 217,
  difficulty: "hard",
  question: "What is the 'DagScheduler' responsible for?",
  options: [
    "Breaking a job into stages based on shuffle boundaries",
    "Managing the cluster hardware",
    "Connecting to the database",
    "Writing Parquet files"
  ],
  answer: 0,
  explanation: "The DAGScheduler determines the stages of a job; stages are split wherever data needs to be redistributed across the network (shuffles)."
},
{
  id: 218,
  difficulty: "medium",
  question: "What is a 'Narrow Transformation'?",
  options: [
    "A transformation that requires data from all partitions",
    "A transformation where each input partition contributes to only one output partition (e.g., filter, map)",
    "A transformation that deletes data",
    "A transformation only used for small tables"
  ],
  answer: 1,
  explanation: "Narrow transformations (filter, union, map) are efficient because they don't require data to be moved across the network."
},
{
  id: 219,
  difficulty: "hard",
  question: "What happens during a 'Wide Transformation'?",
  options: [
    "Nothing changes",
    "A Shuffle occurs, moving data across the network to group related data into new partitions",
    "The job is cancelled",
    "Data is converted to local variables"
  ],
  answer: 1,
  explanation: "Wide transformations (groupBy, join, sort) trigger shuffles, which are the most expensive operations in Spark."
},
{
  id: 220,
  difficulty: "medium",
  question: "In PySpark, what is a 'UDF' (User Defined Function)?",
  options: [
    "A built-in Spark function",
    "A custom Python function applied to a DataFrame that Spark cannot natively optimize as easily",
    "A function used to delete files",
    "A way to rename columns"
  ],
  answer: 1,
  explanation: "UDFs allow custom logic but can be slower than native Spark functions because data must be serialized between the JVM and Python."
},
{
  id: 221,
  difficulty: "hard",
  question: "Why are 'Pandas UDFs' (Vectorized UDFs) faster than standard Python UDFs?",
  options: [
    "They use Apache Arrow to transfer data in batches and process it using vectorized operations in Pandas",
    "They don't use Python",
    "They only work on small datasets",
    "They are written in SQL"
  ],
  answer: 0,
  explanation: "Apache Arrow minimizes the serialization overhead between Spark and Python, and Pandas processes the data in batches rather than row-by-row."
},
{
  id: 222,
  difficulty: "hard",
  question: "What is the 'Shuffle Service'?",
  options: [
    "A way to randomize data",
    "An external service that manages shuffle files so they persist even if an executor is removed",
    "A tool for moving data to S3",
    "A part of the SQL optimizer"
  ],
  answer: 1,
  explanation: "The External Shuffle Service allows for dynamic allocation, as executors can be removed without losing the shuffle data they produced."
},
{
  id: 223,
  difficulty: "medium",
  question: "What is 'Dynamic Allocation' in Spark?",
  options: [
    "Changing the data types of columns",
    "The ability of a Spark application to request or release executors based on the workload",
    "Writing data to different databases",
    "A type of memory storage"
  ],
  answer: 1,
  explanation: "Dynamic allocation helps save costs by scaling the cluster up during heavy tasks and down during idle periods."
},
{
  id: 224,
  difficulty: "hard",
  question: "Which optimization technique involves re-arranging the order of joins in a multi-table query based on table sizes?",
  options: ["Predicate Pushdown", "Cost-Based Optimizer (CBO)", "Broadcast Join", "Coalesce"],
  answer: 1,
  explanation: "The CBO uses table statistics (like row counts) to decide the most efficient join order to minimize intermediate data."
},
{
  id: 225,
  difficulty: "medium",
  question: "What does 'Explaining' a DataFrame (df.explain()) show?",
  options: [
    "The first 20 rows of data",
    "The execution plans (Parses, Analyzed, Optimized, and Physical)",
    "A summary of column statistics",
    "The time it took to run the job"
  ],
  answer: 1,
  explanation: "df.explain() is essential for debugging to see how Spark intends to execute your transformations."
},
{
  id: 226,
  difficulty: "hard",
  question: "How does 'Adaptive Query Execution (AQE)' handle skewed joins at runtime?",
  options: [
    "It crashes the job",
    "It automatically splits skewed partitions into smaller sub-partitions and joins them separately",
    "It deletes the skewed data",
    "It moves the data to the Driver"
  ],
  answer: 1,
  explanation: "AQE can detect skew during the shuffle stage and optimize the join plan on-the-fly to balance the workload."
},
{
  id: 227,
  difficulty: "medium",
  question: "What is 'Whole-Stage Code Generation'?",
  options: [
    "Writing code by hand",
    "Spark collapsing multiple transformations into a single optimized function to reduce function call overhead",
    "Generating Python code from SQL",
    "Writing files to disk"
  ],
  answer: 1,
  explanation: "This is a Tungsten feature that treats multiple operations as a single unit, significantly improving CPU efficiency."
},
{
  id: 228,
  difficulty: "hard",
  question: "What is 'Object Serialization' overhead in PySpark?",
  options: [
    "The time spent converting data between Python objects and Spark's internal JVM format",
    "The time spent writing to S3",
    "The time spent encrypting data",
    "The size of the Parquet files"
  ],
  answer: 0,
  explanation: "Serialization is a major bottleneck in PySpark, especially when using Python UDFs or moving data between nodes."
},
{
  id: 229,
  difficulty: "medium",
  question: "Which configuration property is used to set the memory available for the Driver?",
  options: ["spark.driver.memory", "spark.executor.memory", "spark.memory.fraction", "spark.sql.autoBroadcastJoinThreshold"],
  answer: 0,
  explanation: "spark.driver.memory must be increased if you are collecting large amounts of data or managing complex metadata."
},
{
  id: 230,
  difficulty: "hard",
  question: "What is 'Spilling' in Spark?",
  options: [
    "Writing logs to a file",
    "When execution memory is full, Spark moves data to the local disk to prevent an OOM error, which slows down the job",
    "Deleting data from memory",
    "Broadcasting data to all nodes"
  ],
  answer: 1,
  explanation: "Spilling to disk is a safety mechanism. It prevents crashes but significantly increases I/O wait times."
},

/* IDs 231-304 continue with similar technical depth across:
   - Partitioning strategies (Hash vs Range)
   - Serialization (Kryo vs Java)
   - Cluster Managers (YARN, K8s, Standalone)
   - File format efficiencies (Parquet vs ORC vs Avro)
   - Streaming vs Batch performance
   - Cloud specific tuning (S3 Select, Data Skipping)
*/
/* ======================================================
ADVANCED SPARK TUNING & ARCHITECTURE (IDs 231 - 280)
====================================================== */

{
  id: 231,
  difficulty: "hard",
  question: "In Spark's memory configuration, what is the 'Reserved Memory' used for?",
  options: ["User Dataframes", "Internal Spark objects and preventing OOM during execution", "Python UDFs", "Storing SQL strings"],
  answer: 1,
  explanation: "Spark reserves approximately 300MB of RAM to safeguard against OOM errors caused by its own internal processes."
},
{
  id: 232,
  difficulty: "medium",
  question: "Which serializer is recommended for better performance in Spark over the default Java Serializer?",
  options: ["JSON", "Kryo Serializer", "Pickle", "Protobuf"],
  answer: 1,
  explanation: "Kryo is significantly more compact and faster than Java serialization, though it may require custom class registration."
},
{
  id: 233,
  difficulty: "hard",
  question: "How does 'Shuffle Hash Join' differ from 'Sort Merge Join'?",
  options: [
    "Shuffle Hash Join builds a hash table in memory for one partition; Sort Merge Join sorts both datasets before joining",
    "Sort Merge Join is only for small data",
    "Shuffle Hash Join is the default in Spark 3.x",
    "There is no difference"
  ],
  answer: 0,
  explanation: "Sort Merge Join is more robust for large datasets as it doesn't require a large hash table to fit in memory."
},
{
  id: 234,
  difficulty: "medium",
  question: "Which configuration allows Spark to automatically choose between Broadcast and SortMerge joins based on table size?",
  options: ["spark.sql.autoBroadcastJoinThreshold", "spark.join.type", "spark.sql.adaptive.enabled", "Both A and C"],
  answer: 3,
  explanation: "Threshold sets the size limit for broadcasting, and AQE (enabled via C) allows the plan to change at runtime."
},
{
  id: 235,
  difficulty: "hard",
  question: "What is the primary benefit of 'Local Checkpointing'?",
  options: [
    "It saves data to S3",
    "It truncates the RDD/Dataframe lineage and saves data to the executor's local storage for faster recovery",
    "It encrypts the data",
    "It speeds up the initial read"
  ],
  answer: 1,
  explanation: "Unlike regular checkpointing to HDFS/S3, local checkpointing is faster but loses data if an executor fails."
},
/* ======================================================
ADVANCED SPARK TUNING & ARCHITECTURE (IDs 236 - 280)
====================================================== */

{
  id: 236,
  difficulty: "hard",
  question: "In the Unified Memory Management model, what happens when Execution memory is full but Storage memory has free space?",
  options: [
    "The job fails with an OOM error",
    "Execution memory can 'borrow' space from Storage memory",
    "Spark automatically spills to disk without checking Storage",
    "The Driver node takes over the execution"
  ],
  answer: 1,
  explanation: "Spark allows Execution and Storage to share a unified region. Execution can evict Storage if needed, but Storage cannot evict Execution."
},
{
  id: 237,
  difficulty: "hard",
  question: "What is the specific purpose of 'Off-Heap Memory' (spark.memory.offHeap.enabled) in Spark?",
  options: [
    "To store Python libraries",
    "To store data outside the JVM garbage collector's management, reducing GC overhead and pauses",
    "To increase the speed of S3 reads",
    "To allow the Driver to communicate with the Master"
  ],
  answer: 1,
  explanation: "Off-heap memory is managed by Tungsten and exists outside the Java Heap, preventing long Garbage Collection cycles for large data objects."
},
{
  id: 238,
  difficulty: "medium",
  question: "Which memory fraction (spark.memory.fraction) represents the portion of the JVM heap dedicated to both Storage and Execution?",
  options: ["0.1", "0.6 (Default)", "1.0", "0.5"],
  answer: 1,
  explanation: "By default, 60% of the usable heap is allocated to the Unified Memory region; the rest is for user data structures and internal metadata."
},
{
  id: 239,
  difficulty: "hard",
  question: "What is 'Memory Overdrive' (or Memory Overhead) in a Spark Executor?",
  options: [
    "Memory used for caching only",
    "Non-heap memory required for the JVM process itself, thread stacks, and OS-level overhead",
    "The memory used by the Catalyst Optimizer",
    "A setting to make CPUs run faster"
  ],
  answer: 1,
  explanation: "Executor memory overhead is typically 10% of the executor memory or 384MB (whichever is larger) and is crucial for stability in containerized environments like YARN or K8s."
},
{
  id: 240,
  difficulty: "medium",
  question: "When using PySpark, why is 'spark.executor.memoryOverhead' particularly important?",
  options: [
    "It stores the Python interpreter and PySpark's memory-intensive serialization objects",
    "It speeds up SQL queries",
    "It is required for Parquet files",
    "It defines the number of cores"
  ],
  answer: 0,
  explanation: "Python processes run as sidecars to the JVM executor; they consume memory from the 'Overhead' segment, not the JVM Heap."
},
{
  id: 241,
  difficulty: "hard",
  question: "In the context of 'Tungsten', what is 'Whole-Stage Code Generation'?",
  options: [
    "Writing code in Java instead of Python",
    "A technique where Spark collapses a physical plan into a single Java function at runtime to reduce virtual function calls",
    "Generating SQL scripts from DataFrames",
    "Automatic documentation of code"
  ],
  answer: 1,
  explanation: "This optimization removes the overhead of the 'iterator model' by fusing multiple operators into a single tight loop of machine-friendly code."
},
{
  id: 242,
  difficulty: "medium",
  question: "Which component of the Catalyst Optimizer is responsible for resolving column names and table references against the Catalog?",
  options: ["The Analyzer", "The Physical Planner", "The Logical Optimizer", "The Code Generator"],
  answer: 0,
  explanation: "The Analyzer takes an 'Unresolved Logical Plan' and uses the Catalog to produce a 'Resolved Logical Plan'."
},
{
  id: 243,
  difficulty: "hard",
  question: "What is a 'Broadcasting Hash Join's' main limitation?",
  options: [
    "It is too slow",
    "One side of the join must fit entirely within the memory of the Driver and every Executor",
    "It only works on CSV files",
    "It requires the data to be sorted"
  ],
  answer: 1,
  explanation: "If the table exceeds the memory limit (set by autoBroadcastJoinThreshold), it will cause an OOM error."
},
{
  id: 244,
  difficulty: "hard",
  question: "In a 'Sort Merge Join', why is the 'Sort' phase necessary?",
  options: [
    "To make the data look pretty",
    "To allow Spark to join rows by simply iterating through two sorted streams (O(n) complexity) without keeping them in memory",
    "To remove null values",
    "To compress the data"
  ],
  answer: 1,
  explanation: "Once data is sorted by the join key and partitioned, the engine can find matches efficiently without the high memory cost of a hash table."
},
{
  id: 245,
  difficulty: "medium",
  question: "Which partitioning strategy is most effective for joining two large tables on a range of values (e.g., between dates)?",
  options: ["Hash Partitioning", "Range Partitioning", "Round Robin Partitioning", "Single Partitioning"],
  answer: 1,
  explanation: "Range partitioning ensures that values within a certain range are co-located on the same executor, which is ideal for range-based joins or filters."
},
{
  id: 246,
  difficulty: "hard",
  question: "What is 'Data Skipping' in the context of Cloud Object Storage (like S3)?",
  options: [
    "Deleting corrupted files",
    "Using file metadata (min/max values) to avoid reading Parquet row groups that cannot contain relevant data",
    "Skipping the header of a CSV",
    "A way to ignore errors"
  ],
  answer: 1,
  explanation: "Data skipping significantly reduces I/O by only fetching data blocks that match the query's filter predicates."
},
{
  id: 247,
  difficulty: "medium",
  question: "In Spark SQL, what is the role of the 'Physical Plan'?",
  options: [
    "It describes 'what' to do",
    "It describes the specific 'how' to do it, including join algorithms and internal RDD transformations",
    "It stores the data on disk",
    "It checks the syntax of the query"
  ],
  answer: 1,
  explanation: "The physical plan is the final stage before execution, selecting the most cost-effective algorithm (e.g., Broadcast vs SortMerge)."
},
{
  id: 248,
  difficulty: "hard",
  question: "What does the 'spark.default.parallelism' setting control?",
  options: [
    "The number of partitions for shuffles",
    "The default number of partitions for RDDs created from parallelize() when not specified",
    "The number of CPU cores used by the Driver",
    "The speed of the network"
  ],
  answer: 1,
  explanation: "Note: This is specifically for RDDs. For DataFrames, use 'spark.sql.shuffle.partitions' to control parallelism after shuffles."
},
{
  id: 249,
  difficulty: "hard",
  question: "Why does Spark 3.x's 'Dynamic Partition Pruning (DPP)' improve performance in Star Schema joins?",
  options: [
    "It caches the entire fact table",
    "It uses filter results from the Dimension table to skip reading irrelevant partitions in the Fact table at runtime",
    "It converts all tables to JSON",
    "It removes the need for joins"
  ],
  answer: 1,
  explanation: "DPP avoids the 'Big Data Tax' of scanning a whole fact table when only a tiny slice is needed based on a dimension filter."
},
{
  id: 250,
  difficulty: "medium",
  question: "Which Cluster Manager is natively supported by Spark for containerized deployment?",
  options: ["YARN", "Kubernetes (K8s)", "Mesos", "All of the above"],
  answer: 3,
  explanation: "Spark can be deployed on various resource managers; K8s is increasingly popular for cloud-native workflows."
},
{
  id: 251,
  difficulty: "hard",
  question: "What is 'External Shuffle Service' used for?",
  options: [
    "To join data from external databases",
    "To preserve shuffle files so that executors can be de-allocated (Dynamic Allocation) without losing data",
    "To move data to S3",
    "To manage the Spark UI"
  ],
  answer: 1,
  explanation: "It decouples the storage of shuffle data from the executor lifecycle, enabling more aggressive cluster scaling."
},
{
  id: 252,
  difficulty: "hard",
  question: "In the Catalyst Optimizer, what is a 'Rule-Based' optimization?",
  options: [
    "Asking the user for help",
    "Applying fixed heuristics like 'Constant Folding' or 'Predicate Pushdown' to simplify the query plan",
    "Calculating the cost of every possible plan",
    "Checking if the user has permissions"
  ],
  answer: 1,
  explanation: "Rule-based optimizations apply known patterns to improve code regardless of the actual data statistics."
},
{
  id: 253,
  difficulty: "medium",
  question: "What is 'Constant Folding'?",
  options: [
    "Deleting variables that don't change",
    "Pre-calculating expressions with constant values at compile time (e.g., 24 * 60 becomes 1440)",
    "Compressing data",
    "A type of loop"
  ],
  answer: 1,
  explanation: "It simplifies the execution plan by resolving static expressions before the job starts."
},
{
  id: 254,
  difficulty: "hard",
  question: "What is the primary difference between a 'Stage' and a 'Task' in Spark?",
  options: [
    "Tasks are larger than Stages",
    "A Stage is a set of parallel tasks; a Task is the smallest unit of work sent to an executor",
    "Stages run on the Driver; Tasks run on the Executor",
    "There is no difference"
  ],
  answer: 1,
  explanation: "A Job is divided into Stages (separated by shuffles), and each Stage consists of multiple Tasks (one per partition)."
},
{
  id: 255,
  difficulty: "medium",
  question: "In YARN mode, what is the role of the 'Application Master'?",
  options: [
    "To store the data",
    "To negotiate resources from the NodeManager and coordinate the Spark Driver and Executors",
    "To provide the web UI",
    "To write logs to disk"
  ],
  answer: 1,
  explanation: "The Application Master is the YARN-specific process that manages the lifecycle of the Spark application."
},
{
  id: 256,
  difficulty: "hard",
  question: "Why is 'Java Serialization' discouraged for shuffling in Spark?",
  options: [
    "It is insecure",
    "It is slow and produces large serialized objects that increase network I/O and pressure the GC",
    "It only works with Java 8",
    "It can't handle strings"
  ],
  answer: 1,
  explanation: "Java serialization is flexible but inefficient. Kryo or specialized Tungsten binary formats are preferred."
},
{
  id: 257,
  difficulty: "medium",
  question: "What is 'Speculative Execution' in Spark?",
  options: [
    "Running a job before the data arrives",
    "Re-launching a slow-running task (straggler) on a different executor to see if it finishes faster",
    "Predicting the outcome of a join",
    "Deleting old log files"
  ],
  answer: 1,
  explanation: "Speculative execution helps mitigate 'straggler' tasks caused by faulty hardware or network congestion."
},
{
  id: 258,
  difficulty: "hard",
  question: "What is the 'Py4J' gateway used for in PySpark?",
  options: [
    "To connect to a 4G network",
    "To allow the Python interpreter to communicate with the Spark JVM (Java Virtual Machine)",
    "To encrypt data",
    "To speed up S3 reads"
  ],
  answer: 1,
  explanation: "Py4J is the bridge that allows Python code to call methods on Java objects in the Spark context."
},
{
  id: 259,
  difficulty: "hard",
  question: "What happens during 'Whole-Stage Code Generation' for a complex filter/map operation?",
  options: [
    "Spark writes a new Python file",
    "Spark compiles the logic into highly optimized Java bytecode that runs as a single loop",
    "The data is sent to the Driver",
    "The job is split into more stages"
  ],
  answer: 1,
  explanation: "By generating bytecode specific to the query, Spark eliminates the overhead of generic code paths and virtual function dispatch."
},
{
  id: 260,
  difficulty: "medium",
  question: "In Spark's memory configuration, which parameter defines the safety buffer to prevent OOM during data spikes?",
  options: ["spark.memory.offHeap.size", "spark.memory.storageFraction", "The 'User Memory' region (not explicitly a single parameter)", "spark.driver.maxResultSize"],
  answer: 2,
  explanation: "User Memory (the region outside the unified memory fraction) is where Spark stores user-defined data structures and handles metadata, acting as a buffer."
},
{
  id: 261,
  difficulty: "hard",
  question: "What is the 'Logical Plan' in the Catalyst Optimizer?",
  options: [
    "The physical code that runs on executors",
    "An abstract representation of the computation steps, independent of the storage or execution engine",
    "A list of files on disk",
    "The memory layout of the cluster"
  ],
  answer: 1,
  explanation: "The Logical Plan defines the operations (Select, Filter, Join) without specifying how they will be physically executed."
},
{
  id: 262,
  difficulty: "medium",
  question: "Which command would you use to see the 'Optimized Logical Plan' and 'Physical Plan' for a DataFrame?",
  options: ["df.show()", "df.explain(True)", "df.printSchema()", "df.describe()"],
  answer: 1,
  explanation: "Passing 'True' or 'extended' to explain() displays all levels of plan generation for debugging."
},
{
  id: 263,
  difficulty: "hard",
  question: "What is the 'Catalyst Expression' system?",
  options: [
    "A way to write SQL",
    "A tree-based structure used to represent and optimize individual column calculations (like a + b)",
    "A type of logging",
    "A cluster management tool"
  ],
  answer: 1,
  explanation: "Catalyst treats queries and expressions as trees, allowing it to apply recursive transformation rules to optimize them."
},
{
  id: 264,
  difficulty: "hard",
  question: "How does 'Predicate Pushdown' work with Parquet files?",
  options: [
    "It deletes rows that don't match the filter",
    "It passes the filter to the Parquet reader, which uses statistics to skip reading whole blocks of data",
    "It converts Parquet to CSV",
    "It only works on strings"
  ],
  answer: 1,
  explanation: "By pushing the filter down to the file reader, Spark minimizes the data transferred from storage to memory."
},
{
  id: 265,
  difficulty: "medium",
  question: "What is 'Schema Inference'?",
  options: [
    "Manually defining the column names",
    "The process where Spark reads a sample of the data to automatically determine the column names and data types",
    "A way to encrypt data",
    "A bug in Spark"
  ],
  answer: 1,
  explanation: "Schema inference is convenient for formats like JSON or CSV but can be slow for very large datasets; providing an explicit schema is faster."
},
{
  id: 266,
  difficulty: "hard",
  question: "What is the purpose of the 'Broadcast Variable' in Spark?",
  options: [
    "To send a large dataset to the Driver",
    "To efficiently distribute a read-only lookup table to all worker nodes once, rather than sending it with every task",
    "To change the log level",
    "To restart the executors"
  ],
  answer: 1,
  explanation: "Broadcast variables are cached on executors using peer-to-peer protocols, saving network bandwidth."
},
{
  id: 267,
  difficulty: "medium",
  question: "Which Spark UI tab shows the DAG (Directed Acyclic Graph) visualization for a job?",
  options: ["SQL", "Jobs", "Stages", "Both B and C"],
  answer: 3,
  explanation: "DAG visualizations are available at both the Job and Stage level to show the flow of transformations."
},
{
  id: 268,
  difficulty: "hard",
  question: "What is 'Whole-Stage Code Generation's' main enemy (what causes it to fail or be disabled)?",
  options: [
    "Too much data",
    "Extremely long or complex plans that exceed the JVM's method size limit (64KB)",
    "Using Python instead of Scala",
    "Not enough executors"
  ],
  answer: 1,
  explanation: "If a query plan is too massive, the generated Java code might be too large for the JVM to compile, causing Spark to fall back to a slower execution mode."
},
{
  id: 269,
  difficulty: "hard",
  question: "What does 'Tungsten' use instead of Java Objects to store data in memory?",
  options: [
    "Python Lists",
    "Compact binary row formats using 'unsafe' memory pointers",
    "JSON strings",
    "CSV files"
  ],
  answer: 1,
  explanation: "By using binary memory layouts, Tungsten avoids the overhead of Java object headers and enables high-density data storage."
},
{
  id: 270,
  difficulty: "medium",
  question: "What is 'Columnar Batch Processing'?",
  options: [
    "Processing one row at a time",
    "An optimization where Spark processes data in batches of columns rather than rows to improve CPU cache hits",
    "Deleting columns from a table",
    "Merging two tables"
  ],
  answer: 1,
  explanation: "Processing columns in batches allows the CPU to use SIMD (Single Instruction, Multiple Data) instructions for faster math."
},
{
  id: 271,
  difficulty: "hard",
  question: "What is 'Join Reordering' in the Catalyst Optimizer?",
  options: [
    "Changing the names of the tables",
    "Using statistics to change the sequence in which multiple tables are joined to minimize intermediate results",
    "Deleting the join",
    "Moving the join to the end of the script"
  ],
  answer: 1,
  explanation: "Join reordering is part of the Cost-Based Optimizer (CBO) and can drastically reduce the amount of data shuffled."
},
{
  id: 272,
  difficulty: "hard",
  question: "In Spark 3.0, what does 'AQE' stand for?",
  options: [
    "Automatic Query Encryption",
    "Adaptive Query Execution",
    "Advanced Queue Engine",
    "Always Quiet Environment"
  ],
  answer: 1,
  explanation: "AQE allows Spark to re-optimize query plans mid-execution based on the size of the data it actually finds."
},
{
  id: 273,
  difficulty: "medium",
  question: "What is 'Coalescing Shuffle Partitions' in AQE?",
  options: [
    "Merging small shuffle partitions into larger ones at runtime to reduce the number of tasks",
    "Deleting partitions",
    "Increasing the number of partitions to 1000",
    "Moving data to the Driver"
  ],
  answer: 0,
  explanation: "This prevents the 'too many small tasks' problem that often slows down jobs with small datasets."
},
{
  id: 274,
  difficulty: "hard",
  question: "What is 'Bucketing' in Spark SQL?",
  options: [
    "A way to delete data",
    "Pre-partitioning and pre-sorting data on disk to avoid shuffles during joins or aggregations",
    "A type of memory storage",
    "A logging technique"
  ],
  answer: 1,
  explanation: "If two tables are bucketed on the same column, Spark can perform a join without any network shuffle."
},
{
  id: 275,
  difficulty: "medium",
  question: "When should you use 'df.repartition()' over 'df.coalesce()'?",
  options: [
    "When you want to decrease partitions without a shuffle",
    "When you want to increase the number of partitions or ensure data is evenly distributed across the cluster",
    "Never",
    "Only for small tables"
  ],
  answer: 1,
  explanation: "Repartition always shuffles; coalesce is an optimization for decreasing partitions without a full shuffle."
},
{
  id: 276,
  difficulty: "hard",
  question: "What is 'Skew Join' optimization in AQE?",
  options: [
    "Automatically detecting a heavy key and splitting the task into multiple sub-tasks to balance the workload",
    "Deleting the skewed data",
    "Ignoring the skewed keys",
    "A way to sort the data"
  ],
  answer: 0,
  explanation: "AQE detects if one partition is significantly larger than others and handles it concurrently."
},
{
  id: 277,
  difficulty: "hard",
  question: "What is the 'Execution Memory' specifically used for?",
  options: [
    "Caching DataFrames",
    "Internal data structures needed for shuffles, joins, sorts, and aggregations",
    "Storing the Driver's variables",
    "Managing the web UI"
  ],
  answer: 1,
  explanation: "Execution memory is short-lived; it is used for the actual computation and cleared once the operation finishes."
},
{
  id: 278,
  difficulty: "medium",
  question: "What is 'Storage Memory' specifically used for?",
  options: [
    "Performing shuffles",
    "Storing cached DataFrames (using .cache() or .persist()) and Broadcast variables",
    "Writing Parquet files",
    "The executor's internal logs"
  ],
  answer: 1,
  explanation: "Storage memory is used for data you want to reuse across multiple actions."
},
{
  id: 279,
  difficulty: "hard",
  question: "What happens if a Spark job needs more Execution memory than is available in the unified region?",
  options: [
    "It crashes",
    "It spills the intermediate data to the executor's local disk",
    "It waits for other jobs to finish",
    "It deletes the cache"
  ],
  answer: 1,
  explanation: "Spilling to disk allows the job to complete but makes it significantly slower due to disk I/O."
},
{
  id: 280,
  difficulty: "hard",
  question: "In Spark's Tungsten memory layout, what is an 'UnsafeRow'?",
  options: [
    "A row that might contain viruses",
    "A specific binary format that represents a row as a raw byte array, avoiding Java object overhead",
    "A row with null values",
    "A row that hasn't been saved to disk"
  ],
  answer: 1,
  explanation: "UnsafeRow is the internal format used by Tungsten to process data with high speed and low memory footprint."
},  

/* ======================================================
FILE FORMATS & DATA LAKE STORAGE (IDs 281 - 320)
====================================================== */

{
  id: 281,
  difficulty: "medium",
  question: "Why is Parquet considered a 'Columnar' storage format?",
  options: [
    "It stores data row-by-row",
    "It groups data by columns, allowing Spark to read only the specific columns needed for a query",
    "It only allows one column per file",
    "It is a type of SQL database"
  ],
  answer: 1,
  explanation: "Columnar storage enables efficient data compression and 'projection pushdown' (skipping irrelevant columns)."
},
{
  id: 282,
  difficulty: "hard",
  question: "What is the role of 'Metadata' in a Parquet file footer?",
  options: [
    "It contains the actual data values",
    "It stores min/max values for each column chunk to enable 'Data Skipping'",
    "It is used for user comments",
    "It deletes old versions of the data"
  ],
  answer: 1,
  explanation: "Spark uses the footer metadata to skip entire chunks of data that don't satisfy the query's filter conditions."
},
{
  id: 283,
  difficulty: "medium",
  question: "Which file format is 'Row-based' and better suited for heavy write-intensive logging?",
  options: ["Parquet", "Avro", "ORC", "JSON"],
  answer: 1,
  explanation: "Avro is a row-based format with a compact binary encoding, making it ideal for streaming and write-heavy workloads."
},
{
  id: 284,
  difficulty: "hard",
  question: "In Delta Lake, what is the 'Transaction Log' (Delta Log)?",
  options: [
    "A file that tracks every change made to the table to ensure ACID compliance",
    "A list of users who accessed the data",
    "A backup of the entire table",
    "A Python script"
  ],
  answer: 0,
  explanation: "The Delta Log is a directory of JSON files that act as a single source of truth for the table's state."
},
/* ======================================================
FILE FORMATS, DATA LAKE STORAGE & SCENARIOS (IDs 285 - 303)
====================================================== */

{
  id: 285,
  difficulty: "hard",
  question: "How does 'Liquid Clustering' in Delta Lake improve upon traditional Hive-style partitioning?",
  options: [
    "It requires users to define a static partition hierarchy",
    "It provides a flexible, worker-managed data layout that adapts as data grows, avoiding 'over-partitioning' issues",
    "It converts all data to JSON for better indexing",
    "It only works with CSV files"
  ],
  answer: 1,
  explanation: "Liquid Clustering eliminates the need for fixed partitions (like /year/month/day), allowing the engine to cluster data dynamically based on the columns specified, which solves the 'small file' problem caused by high-cardinality partitions."
},
{
  id: 286,
  difficulty: "hard",
  question: "Scenario: A Delta table has high write volume but slow read performance. You decide to implement Liquid Clustering. Which command do you use?",
  options: [
    "ALTER TABLE ... PARTITIONED BY (col)",
    "ALTER TABLE ... CLUSTER BY (col_a, col_b)",
    "OPTIMIZE table_name ZORDER BY (col)",
    "REORG TABLE table_name"
  ],
  answer: 1,
  explanation: "The 'CLUSTER BY' syntax is the specific command to enable Liquid Clustering on a Delta table."
},
{
  id: 287,
  difficulty: "medium",
  question: "In Python Data Engineering, what is the primary advantage of using a 'Generator' (yield) over a 'List' for reading large files?",
  options: [
    "Generators are faster at sorting data",
    "Generators are memory-efficient because they yield one item at a time instead of loading the entire file into RAM",
    "Generators automatically encrypt data",
    "Generators can only be used with Spark"
  ],
  answer: 1,
  explanation: "Generators allow you to process data streams that are larger than the available physical memory (O(1) vs O(n) space complexity)."
},
{
  id: 288,
  difficulty: "hard",
  question: "What is 'Schema Evolution' in Delta Lake?",
  options: [
    "Manually deleting and recreating a table with new columns",
    "The ability to automatically add new columns to a table during an append operation without rewriting the history",
    "A way to change the data types of all columns to strings",
    "An error that occurs when data types don't match"
  ],
  answer: 1,
  explanation: "By setting 'mergeSchema' to true, Delta allows the table's schema to adapt to incoming data gracefully."
},
{
  id: 289,
  difficulty: "hard",
  question: "Scenario: You accidentally deleted a production Delta table's files from S3 using a manual script. Can you recover the data using 'RESTORE'?",
  options: [
    "Yes, Delta keeps a hidden backup",
    "No, 'RESTORE' only works if the underlying Parquet files still exist; it cannot recover physically deleted files from storage",
    "Yes, but only if VACUUM was run recently",
    "Only if you are using CSV format"
  ],
  answer: 1,
  explanation: "RESTORE reverts the metadata (the Delta Log), but if the physical .parquet files are deleted from the cloud storage (S3/ADLS), the data is lost unless you have cloud-level backups (like S3 Versioning)."
},
{
  id: 290,
  difficulty: "medium",
  question: "Which Python 'dunder' method is used to define the behavior of an object when it is used in a 'with' statement (Context Manager)?",
  options: ["__init__", "__enter__", "__call__", "__str__"],
  answer: 1,
  explanation: "__enter__ and __exit__ define how resources (like database connections) are opened and safely closed."
},
{
  id: 291,
  difficulty: "hard",
  question: "What is the 'Log Segmentation' feature in Delta Lake?",
  options: [
    "Splitting a table into multiple databases",
    "Periodically creating Checkpoint files (Parquet) that summarize the JSON transaction log to speed up table state reconstruction",
    "A way to hide logs from users",
    "Deleting logs every 5 minutes"
  ],
  answer: 1,
  explanation: "Checkpoint files allow Spark to avoid reading thousands of tiny JSON log files when opening a table."
},
{
  id: 292,
  difficulty: "medium",
  question: "In the 'Medallion Architecture', which layer is the best place to apply complex business logic and 'Gold-standard' aggregations?",
  options: ["Bronze", "Silver", "Gold", "Landing"],
  answer: 2,
  explanation: "The Gold layer is designed for consumption-ready data that has been fully cleaned and aggregated for BI tools."
},
{
  id: 293,
  difficulty: "hard",
  question: "What does 'Z-Ordering' do that a standard 'Sort' does not?",
  options: [
    "It only sorts by the first column",
    "It maps multi-dimensional data into a 1D space while preserving locality, enabling efficient data skipping on multiple columns simultaneously",
    "It compresses the data twice",
    "It removes duplicates"
  ],
  answer: 1,
  explanation: "Z-Order curves ensure that if you filter by any of the Z-Ordered columns, the engine can skip large amounts of irrelevant data."
},
{
  id: 294,
  difficulty: "medium",
  question: "What is the primary purpose of 'VACUUM' in Delta Lake?",
  options: [
    "To compress files",
    "To physically delete files that are no longer in the latest state of the table and are older than the retention period",
    "To update the schema",
    "To add new rows"
  ],
  answer: 1,
  explanation: "VACUUM is necessary to clean up stale data files and reduce storage costs, but it limits the ability to 'Time Travel' to older versions."
},
{
  id: 295,
  difficulty: "hard",
  question: "Scenario: You have a Python script that processes 10GB of data. It works on your laptop but fails in a container with 'SIGKILL'. What is the most likely cause?",
  options: [
    "A syntax error",
    "The container hit its 'Memory Limit' and was killed by the OS (OOM Killer)",
    "The network was disconnected",
    "The CPU was too hot"
  ],
  answer: 1,
  explanation: "SIGKILL (Exit Code 137) is the standard signal the OS sends to a container that exceeds its allocated RAM."
},
{
  id: 296,
  difficulty: "hard",
  question: "Which Delta Lake feature allows you to see exactly which rows were inserted, updated, or deleted between two versions of a table?",
  options: ["Time Travel", "Change Data Feed (CDF)", "History", "Describe Detail"],
  answer: 1,
  explanation: "CDF provides a stream of changes, making it ideal for downstream ETL processes that only want to process 'deltas'."
},
{
  id: 297,
  difficulty: "medium",
  question: "How do you 'Time Travel' to version 5 of a Delta table in PySpark?",
  options: [
    "df.read.version(5)",
    "spark.read.format('delta').option('versionAsOf', 5).load(path)",
    "spark.read.delta(path).at(5)",
    "df.undo(5)"
  ],
  answer: 1,
  explanation: "The 'versionAsOf' option allows you to query the table exactly as it appeared at a specific transaction ID."
},
{
  id: 298,
  difficulty: "hard",
  question: "In Python, what is the 'GIL' (Global Interpreter Lock)?",
  options: [
    "A security feature for passwords",
    "A mutex that protects access to Python objects, preventing multiple native threads from executing Python bytecodes at once",
    "A type of database lock",
    "A way to speed up Spark"
  ],
  answer: 1,
  explanation: "The GIL can be a bottleneck for CPU-bound multi-threaded Python code, which is why Spark uses separate processes (executors) to scale."
},
{
  id: 299,
  difficulty: "medium",
  question: "What is 'Idempotency' in a Data Pipeline?",
  options: [
    "The ability to run the same job multiple times and always get the same result without duplicating data",
    "The speed of the pipeline",
    "The number of columns in a table",
    "A type of data encryption"
  ],
  answer: 0,
  explanation: "Idempotency is critical for fault tolerance; if a job fails halfway, you should be able to restart it without corrupting the data."
},
{
  id: 300,
  difficulty: "hard",
  question: "Scenario: A PySpark job is taking 2 hours. You notice that 99% of tasks finish in 1 minute, but 1 task takes 1 hour. How do you fix this?",
  options: [
    "Add more executors",
    "Address the 'Data Skew' by salting the join key or using AQE skew-join optimization",
    "Restart the cluster",
    "Convert the data to CSV"
  ],
  answer: 1,
  explanation: "The 'Straggler' task is caused by one partition having much more data than others, usually due to a lopsided join key."
},
{
  id: 301,
  difficulty: "medium",
  question: "Which file format is 'Schema-on-Read'?",
  options: ["CSV", "Parquet", "Delta", "AVRO"],
  answer: 0,
  explanation: "CSV files do not store their own schema; the reader must define or infer the schema when the file is opened."
},
{
  id: 302,
  difficulty: "hard",
  question: "What is 'Predicate Pushdown' in the context of S3 Select?",
  options: [
    "Filtering data on the Spark Executor",
    "The ability to offload the filtering logic to the S3 storage layer itself, so only the relevant rows are sent over the network",
    "A way to sort data in S3",
    "A security protocol"
  ],
  answer: 1,
  explanation: "S3 Select reduces network traffic by having the storage service filter the bytes before they even reach the Spark cluster."
},
{
  id: 303,
  difficulty: "hard",
  question: "When using 'Liquid Clustering', how many columns can you typically cluster by?",
  options: [
    "Only 1",
    "Up to 4",
    "As many as you want, but performance degrades after 4-5",
    "It depends on the number of executors"
  ],
  answer: 2,
  explanation: "While technically flexible, clustering by more than 4 columns usually dilutes the effectiveness of the data skipping."
},  
{
  id: 304,
  difficulty: "hard",
  question: "In a scenario with 1000 small files, why is the 'read' phase slow even if the data volume is small?",
  options: [
    "S3 is broken",
    "High metadata overhead; the Driver spends too much time listing files and orchestrating many tiny tasks",
    "Parquet is inefficient",
    "The files are encrypted"
  ],
  answer: 1,
  explanation: "The 'Small File Problem' causes the Driver to become a bottleneck due to the management of thousands of individual file opens and tasks."
},
{
  id: 305,
  difficulty: "hard",
  question: "Why can increasing the number of worker nodes sometimes make a PySpark job SLOWER?",
  options: [
    "Spark cannot handle more than 10 nodes",
    "Increased network 'Shuffle' traffic and coordination overhead for very small datasets",
    "The Driver gets disconnected",
    "Python is limited to 2 cores"
  ],
  answer: 1,
  explanation: "For small data, the time spent orchestrating many nodes and moving data over the network exceeds the time saved by parallel processing."
},
{
  id: 306,
  difficulty: "easy",
  question: "In Python, which data structure is most efficient for looking up a value based on a unique key?",
  options: ["List", "Tuple", "Dictionary", "Set"],
  answer: 2,
  explanation: "Dictionaries use hashing to provide O(1) average time complexity for lookups."
},
{
  id: 307,
  difficulty: "medium",
  question: "Which of the following is a key difference between a 'List' and a 'Generator' in Python?",
  options: [
    "Lists are immutable; Generators are mutable",
    "Generators load all items into memory immediately; Lists do not",
    "Lists store all elements in memory; Generators yield items one at a time",
    "Generators can only store integers"
  ],
  answer: 2,
  explanation: "Generators are memory-efficient because they produce items on-the-fly using the 'yield' keyword."
},
{
  id: 308,
  difficulty: "hard",
  question: "When handling large CSV files that do not fit in memory, which Python approach is recommended?",
  options: [
    "Using 'open().read()' to load the whole file",
    "Using 'pandas.read_csv()' with the 'chunksize' parameter",
    "Converting the CSV to a JSON string first",
    "Using a standard 'for' loop on the 'read()' output"
  ],
  answer: 1,
  explanation: "The 'chunksize' parameter in Pandas allows you to iterate over a file in smaller segments to prevent OOM errors."
},
{
  id: 309,
  difficulty: "easy",
  question: "What is the primary entry point for programming Spark with the Dataset and DataFrame API?",
  options: ["SparkContext", "SparkSession", "SQLContext", "StreamingContext"],
  answer: 1,
  explanation: "SparkSession is the unified entry point for Spark applications since version 2.0."
},
{
  id: 310,
  difficulty: "medium",
  question: "In PySpark, what is the difference between a 'Transformation' and an 'Action'?",
  options: [
    "Transformations return a value; Actions return a new DataFrame",
    "Transformations are executed immediately; Actions are lazy",
    "Transformations define a new DataFrame (lazy); Actions trigger the actual computation",
    "There is no difference"
  ],
  answer: 2,
  explanation: "Transformations build a logical plan (lazy), while Actions trigger execution (e.g., collect, count)."
},
/* ======================================================
STRUCTURED STREAMING & AUTO LOADER (IDs 311 - 320)
====================================================== */
{
  id: 311,
  difficulty: "medium",
  question: "Which Databricks feature is specifically designed to incrementally and efficiently process new data files as they arrive in cloud storage?",
  options: ["COPY INTO", "Auto Loader (cloudFiles)", "Structured Streaming", "Delta Live Tables"],
  answer: 1,
  explanation: "Auto Loader uses a 'cloudFiles' source to automatically detect and process new files in S3/ADLS/GCS without manual folder scanning."
},
{
  id: 312,
  difficulty: "hard",
  question: "What is the primary difference between 'Trigger.Once' and 'Trigger.AvailableNow' in Structured Streaming?",
  options: [
    "Trigger.Once is faster",
    "Trigger.AvailableNow processes data in multiple micro-batches if needed to handle backlogs, whereas Trigger.Once processes everything in one single batch",
    "Trigger.Once is only for Kafka",
    "There is no difference"
  ],
  answer: 1,
  explanation: "Trigger.AvailableNow is the more scalable 'batch-style' streaming trigger, as it respects rate limits (maxFilesPerTrigger) to avoid OOM errors when processing large backlogs."
},
{
  id: 313,
  difficulty: "hard",
  question: "In a streaming aggregation, what is the consequence of not defining a 'Watermark'?",
  options: [
    "The job will fail immediately",
    "Spark will keep the state for every group in memory indefinitely, eventually leading to an OutOfMemory (OOM) error",
    "Data will be deleted automatically",
    "The output will always be empty"
  ],
  answer: 1,
  explanation: "Watermarking is essential for state cleanup; it tells Spark when it can safely drop old windowed data from memory."
},
{
  id: 314,
  difficulty: "medium",
  question: "Which 'Output Mode' is required when performing a streaming aggregation without a watermark?",
  options: ["Append", "Update", "Complete", "Overwrite"],
  answer: 2,
  explanation: "Complete mode outputs the entire result table every time, which is the only way Spark can handle aggregations without knowing when data is 'finished' (no watermark)."
},
{
  id: 315,
  difficulty: "hard",
  question: "Scenario: A streaming job crashes. Upon restarting, it begins processing from the very beginning of the source instead of where it left off. What is missing?",
  options: [
    "A watermark",
    "A defined 'checkpointLocation' in the .writeStream options",
    "The 'cloudFiles' format",
    "The Delta Lake format"
  ],
  answer: 1,
  explanation: "The checkpoint location stores the offset information; without it, Spark has no record of progress and must restart from the earliest available data."
},
{
  id: 316,
  difficulty: "medium",
  question: "What does 'Schema Inference' in Auto Loader do when a new file arrives with an extra column?",
  options: [
    "It stops the stream",
    "It ignores the new column",
    "It can automatically evolve the schema to include the new column (if schemaEvolutionMode is set)",
    "It deletes the new file"
  ],
  answer: 2,
  explanation: "Auto Loader is highly valued for its ability to detect and adapt to schema changes in raw data files without manual intervention."
},
{
  id: 317,
  difficulty: "hard",
  question: "When joining a 'Streaming' DataFrame with a 'Static' DataFrame, what happens when the Static data is updated on disk?",
  options: [
    "The stream immediately sees the new data",
    "The stream continues to use the version of the static data that was loaded when the stream started",
    "The job crashes",
    "The stream pauses until the static data is refreshed"
  ],
  answer: 1,
  explanation: "By default, the static DataFrame is 'captured' at the start of the query. To pick up changes, the streaming query usually needs to be restarted."
},
{
  id: 318,
  difficulty: "medium",
  question: "Which method is used to write streaming output to multiple sinks or perform custom logic (like Upserts) for each micro-batch?",
  options: ["writeStream.save()", "writeStream.foreachBatch()", "writeStream.output()", "writeStream.trigger()"],
  answer: 1,
  explanation: "foreachBatch allows you to treat each micro-batch as a standard DataFrame and apply any batch-oriented logic to it."
},
{
  id: 319,
  difficulty: "hard",
  question: "In Structured Streaming, what does the 'withWatermark('timestamp', '10 minutes')' function specifically define?",
  options: [
    "The latency of the stream",
    "The threshold for how late data can arrive (event time) before it is ignored by the engine",
    "How often the trigger runs",
    "The duration of the batch"
  ],
  answer: 1,
  explanation: "It defines the boundary (CurrentMaxEventTime - 10 mins) below which incoming data is considered too late to participate in windowed aggregations."
},
{
  id: 320,
  difficulty: "hard",
  question: "Scenario: Your streaming state is becoming too large for the Executor's RAM. Which configuration allows Spark to use a disk-based state store?",
  options: [
    "spark.sql.streaming.stateStore.providerClass set to RocksDBStateStoreProvider",
    "spark.memory.offHeap.enabled",
    "spark.sql.shuffle.partitions",
    "spark.streaming.unlimitedMemory"
  ],
  answer: 0,
  explanation: "RocksDB is the standard provider for 'large-state' streaming jobs in Databricks, as it spills state to local SSDs instead of keeping everything in the JVM Heap."
},  
/* ======================================================
STRUCTURED STREAMING & REAL-TIME (IDs 321 - 360)
====================================================== */
{
  id: 321,
  difficulty: "hard",
  question: "What does 'Watermarking' handle in Spark Structured Streaming?",
  options: [
    "Data encryption",
    "Late-arriving data by defining how long the engine should wait for delayed events",
    "Counting the number of rows",
    "Connecting to Kafka"
  ],
  answer: 1,
  explanation: "Watermarks allow Spark to gracefully handle events that arrive later than expected and eventually clear old state from memory."
},
{
  id: 322,
  difficulty: "medium",
  question: "Which 'Output Mode' is used to write only the new rows since the last trigger?",
  options: ["Complete", "Update", "Append", "Overwrite"],
  answer: 2,
  explanation: "Append mode is the most common for streaming, ensuring only new data is written to the sink."
},
{
  id: 323,
  difficulty: "hard",
  question: "What is 'Exactly-Once' semantics in streaming?",
  options: [
    "Data is processed once every hour",
    "Ensuring that even in the event of a failure, the final results reflect each input record being processed exactly once",
    "Deleting data after it is read",
    "Limiting a stream to one source"
  ],
  answer: 1,
  explanation: "Spark achieves this through checkpointing and idempotent sinks."
},
/* ======================================================
STRUCTURED STREAMING & REAL-TIME (IDs 324 - 360)
====================================================== */

{
  id: 324,
  difficulty: "medium",
  question: "Which Kafka parameter is used in Spark to ensure the stream starts reading from the earliest available data?",
  options: ["startingOffsets: earliest", "begin: 0", "offset.reset: true", "kafka.start: start"],
  answer: 0,
  explanation: "In the Kafka source, 'startingOffsets' defines the starting position; 'earliest' ensures no historical data is missed."
},
{
  id: 325,
  difficulty: "hard",
  question: "What is 'Stateful Processing' in Structured Streaming?",
  options: [
    "Processing data based on the US State it originated from",
    "Maintaining information across micro-batches (e.g., for running totals or session windows)",
    "Storing data in a database",
    "A process that never stops"
  ],
  answer: 1,
  explanation: "Stateful operations require Spark to store intermediate data (state) in a provider like HDFS or RocksDB to calculate values across time."
},
{
  id: 326,
  difficulty: "medium",
  question: "How do you stop a streaming query programmatically in PySpark?",
  options: ["query.stop()", "query.terminate()", "query.exit()", "spark.stopStreaming()"],
  answer: 0,
  explanation: "The StreamingQuery object returned by start() has a stop() method to gracefully shut down the stream."
},
{
  id: 327,
  difficulty: "hard",
  question: "In streaming, what is 'Event Time' vs 'Processing Time'?",
  options: [
    "Event Time is when the data was generated; Processing Time is when Spark receives it",
    "They are the same",
    "Event Time is for batch; Processing Time is for streaming",
    "Processing Time is always more accurate"
  ],
  answer: 0,
  explanation: "Watermarking and windowing usually rely on Event Time to handle delays in data arrival accurately."
},
{
  id: 328,
  difficulty: "medium",
  question: "Which trigger type provides the lowest possible latency by processing data as soon as it arrives without micro-batches?",
  options: ["Trigger.ProcessingTime", "Trigger.Continuous", "Trigger.Once", "Trigger.Now"],
  answer: 1,
  explanation: "Continuous processing (experimental in some versions) aims for millisecond-level latency by not using the micro-batch engine."
},
{
  id: 329,
  difficulty: "hard",
  question: "What is the role of the 'checkpointLocation' during a stream-to-stream join?",
  options: [
    "It stores the final output",
    "It tracks the state of both streams to allow for recovery and ensure matches aren't missed",
    "It speeds up the join",
    "It encrypts the join keys"
  ],
  answer: 1,
  explanation: "Checkpoints are mandatory for stateful joins to preserve the state of unmatched rows between batches."
},
{
  id: 330,
  difficulty: "medium",
  question: "How can you view the active streaming queries in a SparkSession?",
  options: ["spark.streams.active", "spark.getStreams()", "spark.showStreams()", "spark.list_queries()"],
  answer: 0,
  explanation: "spark.streams.active returns a list of all currently running StreamingQuery objects."
},

/* IDs 331 - 360 continue covering:
   - Kafka SSL/TLS configuration
   - window() vs session_window()
   - mapGroupsWithState logic
   - Trigger.ProcessingTime intervals
*/
/* ======================================================
STRUCTURED STREAMING & KAFKA DEEP DIVE (IDs 331 - 361)
====================================================== */

{
  id: 331,
  difficulty: "hard",
  question: "Which Kafka option must be set in Spark to connect to a cluster requiring SSL encryption?",
  options: [
    "kafka.security.protocol: 'SSL'",
    "kafka.encrypt: 'true'",
    "kafka.protocol: 'HTTPS'",
    "kafka.ssl.enabled: 'true'"
  ],
  answer: 0,
  explanation: "The 'kafka.security.protocol' option (usually set to SSL or SASL_SSL) is required for encrypted communication."
},
{
  id: 332,
  difficulty: "hard",
  question: "What is the primary difference between 'window()' and 'session_window()' in Spark?",
  options: [
    "window() is for batch; session_window() is for streaming",
    "window() uses fixed time intervals; session_window() uses gaps of inactivity to group events",
    "session_window() is only available in Scala",
    "window() requires a watermark, but session_window() does not"
  ],
  answer: 1,
  explanation: "Session windows are dynamic; they stay open as long as data arrives within the 'gap duration' and close when a period of silence occurs."
},
{
  id: 333,
  difficulty: "hard",
  question: "What is the purpose of 'mapGroupsWithState' in Structured Streaming?",
  options: [
    "To rename groups",
    "To apply custom, complex stateful logic to a group of events (e.g., tracking user sessions)",
    "To map data to a different database",
    "To count the number of groups"
  ],
  answer: 1,
  explanation: "It is used for Arbitrary Stateful Processing, allowing developers to define exactly how state is updated and when it should be timed out."
},
{
  id: 334,
  difficulty: "medium",
  question: "What happens if you set 'Trigger.ProcessingTime' to '0 seconds'?",
  options: [
    "The stream stops",
    "The engine will start the next micro-batch as soon as the previous one finishes (effectively as fast as possible)",
    "It causes a system error",
    "It defaults to 1 minute"
  ],
  answer: 1,
  explanation: "This is the default behavior, minimizing latency by running micro-batches back-to-back."
},
{
  id: 335,
  difficulty: "hard",
  question: "How does Spark handle 'Late Data' that arrives after the Watermark boundary?",
  options: [
    "It is kept in memory forever",
    "It is dropped and not included in the windowed aggregation",
    "It triggers a recalculation of all previous batches",
    "It is moved to a 'dead letter' table automatically"
  ],
  answer: 1,
  explanation: "Once the watermark passes a window's end time, Spark assumes no more data will arrive for that window and evicts the state."
},
{
  id: 336,
  difficulty: "medium",
  question: "Which Kafka consumer property controls how many records are fetched per micro-batch trigger?",
  options: ["maxOffsetsPerTrigger", "maxFilesPerTrigger", "batchSize", "recordsPerSecond"],
  answer: 0,
  explanation: "maxOffsetsPerTrigger is used to rate-limit the stream to prevent overwhelming executors during a data spike."
},
{
  id: 337,
  difficulty: "hard",
  question: "In a stream-to-stream join, why is it necessary to have watermarks on BOTH sides of the join?",
  options: [
    "To encrypt the data",
    "To allow Spark to limit how long it buffers unmatched rows from either side in the state store",
    "Because Spark only supports symmetric joins",
    "To speed up the network"
  ],
  answer: 1,
  explanation: "Without watermarks on both sides, Spark wouldn't know when a row will never find a match, causing the state to grow until it crashes."
},
{
  id: 338,
  difficulty: "medium",
  question: "What is the result of using 'display()' on a streaming DataFrame in a Databricks Notebook?",
  options: [
    "It shows a static snapshot",
    "It launches an interactive dashboard that updates in real-time as the stream processes",
    "It saves the data to S3",
    "It converts the data to a PDF"
  ],
  answer: 1,
  explanation: "In Databricks, display() is a special action that creates a live-updating visualization for streaming data."
},
{
  id: 339,
  difficulty: "hard",
  question: "What does 'flatMapGroupsWithState' allow that 'mapGroupsWithState' does not?",
  options: [
    "It runs faster",
    "It can return an arbitrary number of rows (including zero) for each group in a single micro-batch",
    "It only works with strings",
    "It doesn't require a timeout"
  ],
  answer: 1,
  explanation: "flatMapGroupsWithState is more flexible, allowing you to output multiple results or skip outputting for a group based on logic."
},
{
  id: 340,
  difficulty: "medium",
  question: "When reading from Kafka, which column contains the actual data payload in binary format?",
  options: ["key", "value", "topic", "partition"],
  answer: 1,
  explanation: "The 'value' column contains the message content, which typically needs to be cast to a string or parsed (e.g., from JSON)."
},
{
  id: 341,
  difficulty: "hard",
  question: "Scenario: You need to join a high-volume stream with a 10GB Delta table that changes occasionally. What is the most performant join type?",
  options: [
    "Stream-Stream join",
    "Stream-Static join",
    "Join both in a batch job",
    "Convert the stream to a list first"
  ],
  answer: 1,
  explanation: "Stream-Static joins are highly efficient, though they typically 'pin' the version of the static table at the time the stream starts."
},
{
  id: 342,
  difficulty: "medium",
  question: "Which 'Trigger' ensures that a job processes all available data and then shuts itself down?",
  options: ["Trigger.Continuous", "Trigger.AvailableNow", "Trigger.ProcessingTime", "Trigger.Infinite"],
  answer: 1,
  explanation: "AvailableNow (and the older Trigger.Once) is used for 'incremental batch' processing."
},
{
  id: 343,
  difficulty: "hard",
  question: "What is 'State Expiry' in the context of mapGroupsWithState?",
  options: [
    "When the data is deleted from disk",
    "A mechanism to remove keys from the state store that haven't received data within a specified timeout (Processing or Event time)",
    "A type of data encryption",
    "When a user session ends in the UI"
  ],
  answer: 1,
  explanation: "State expiry is critical to prevent the state store from growing indefinitely in long-running streams."
},
{
  id: 344,
  difficulty: "hard",
  question: "Which Kafka option is used to authenticate using a username and password (JAAS configuration)?",
  options: ["kafka.sasl.jaas.config", "kafka.auth.user", "kafka.password", "kafka.login"],
  answer: 0,
  explanation: "The JAAS config option is used to pass the login module and credentials to the Kafka client."
},
{
  id: 345,
  difficulty: "medium",
  question: "In Structured Streaming, what happens during a 'Micro-batch'?",
  options: [
    "One row is processed at a time",
    "The engine collects all available data, runs it as a standard Spark SQL job, and updates the checkpoint",
    "The data is sent to a separate cluster",
    "The cluster restarts"
  ],
  answer: 1,
  explanation: "Structured Streaming's micro-batch model leverages the high-throughput capabilities of the core Spark engine."
},
{
  id: 346,
  difficulty: "hard",
  question: "Why would you use 'dropDuplicates' with a watermark in a stream?",
  options: [
    "To make the data smaller",
    "To remove duplicate records within a specific time window, allowing Spark to clean up the 'seen' keys state",
    "To sort the data",
    "To rename the columns"
  ],
  answer: 1,
  explanation: "Without a watermark, dropDuplicates would have to store every key ever seen, which is not sustainable in a stream."
},
{
  id: 347,
  difficulty: "medium",
  question: "Which function converts a binary Kafka 'value' column into a readable JSON schema?",
  options: ["from_json()", "parse_json()", "cast_json()", "json_tuple()"],
  answer: 0,
  explanation: "from_json(col, schema) is the standard function for parsing JSON strings or binaries in Spark."
},
{
  id: 348,
  difficulty: "hard",
  question: "What is the 'State Store' in Spark Structured Streaming?",
  options: [
    "A database like Postgres",
    "A versioned, key-value store used to maintain stateful information during aggregations or joins",
    "The physical RAM of the Driver",
    "The S3 bucket where results are stored"
  ],
  answer: 1,
  explanation: "The state store is local to executors but backed up to the checkpoint location for fault tolerance."
},
{
  id: 349,
  difficulty: "medium",
  question: "How do you identify if a streaming query is falling behind (backlog)?",
  options: [
    "Check query.lastProgress for 'numInputRows' vs 'processedRowsPerSecond'",
    "The job crashes",
    "The web browser slows down",
    "Check the system logs for 'Slow'"
  ],
  answer: 0,
  explanation: "The 'lastProgress' dictionary provides detailed metrics on the throughput and latency of the stream."
},
{
  id: 350,
  difficulty: "hard",
  question: "What is 'Idempotent Sink' in the context of Structured Streaming?",
  options: [
    "A sink that only allows one row",
    "A sink (like Delta Lake) that can handle re-processed data without creating duplicates during failures",
    "A sink that is always empty",
    "A sink that encrypts data"
  ],
  answer: 1,
  explanation: "Idempotency ensures that if a micro-batch is retried, the end result in the storage remains consistent."
},
{
  id: 351,
  difficulty: "hard",
  question: "In Kafka streaming, what does the 'failOnDataLoss' option do (default: true)?",
  options: [
    "Stops the query if offsets are deleted from Kafka or data is unavailable",
    "Deletes the table if data is missing",
    "Ignores all errors",
    "Restarts the Kafka cluster"
  ],
  answer: 0,
  explanation: "Setting this to false allows the stream to continue even if Kafka retains only newer data than what Spark last processed."
},
{
  id: 352,
  difficulty: "medium",
  question: "Which windowing type is best for calculating 'Average temperature over the last 5 minutes, updated every 1 minute'?",
  options: ["Tumbling Window", "Sliding Window", "Session Window", "Static Window"],
  answer: 1,
  explanation: "Sliding windows (window(col, '5 mins', '1 min')) are used when the time intervals overlap."
},
{
  id: 353,
  difficulty: "hard",
  question: "What happens if multiple streaming queries use the same 'checkpointLocation'?",
  options: [
    "They share data",
    "They will likely crash or corrupt each other's progress as they attempt to read/write conflicting offsets",
    "It makes the job faster",
    "Spark automatically merges them"
  ],
  answer: 1,
  explanation: "Each streaming query must have a unique, dedicated checkpoint directory."
},
{
  id: 354,
  difficulty: "medium",
  question: "Which command lists the topics available in a Kafka cluster from a Spark notebook?",
  options: [
    "df = spark.read.format('kafka').option('subscribePattern', '.*').load()",
    "spark.kafka.listTopics()",
    "SHOW TOPICS IN KAFKA",
    "kafka.list()"
  ],
  answer: 0,
  explanation: "Using subscribePattern is one way to discover and read from all topics matching a regex in Spark."
},
{
  id: 355,
  difficulty: "hard",
  question: "What is 'Processing Time Timeout' in mapGroupsWithState?",
  options: [
    "A timeout based on the clock of the system/cluster rather than the timestamps in the data",
    "The time it takes to process one row",
    "The time until the job ends",
    "A way to slow down the stream"
  ],
  answer: 0,
  explanation: "Processing time timeouts are useful when you want to expire state even if no new events are arriving in the stream."
},
{
  id: 356,
  difficulty: "medium",
  question: "Which method is used to retrieve the schema of a JSON payload when using 'from_json'?",
  options: ["spark.read.json(df.select('value').as(String)).schema", "df.getJsonSchema()", "schema_of_json()", "Both A and C"],
  answer: 3,
  explanation: "You can either use a sample file to infer the schema or the built-in 'schema_of_json' function."
},
{
  id: 357,
  difficulty: "hard",
  question: "In a 'Tumbling Window' aggregation, when is the final result for a window typically emitted in 'Append' mode?",
  options: [
    "As soon as the first row arrives",
    "Only after the watermark has passed the end of the window",
    "At the end of the script",
    "Every 10 seconds"
  ],
  answer: 1,
  explanation: "In Append mode, Spark must wait for the watermark to guarantee no more data will arrive for that window before 'finalizing' it."
},
{
  id: 358,
  difficulty: "medium",
  question: "How do you cast a binary Kafka column to a string?",
  options: ["col('value').cast('string')", "string(col('value'))", "to_str(col('value'))", "df.convert('string')"],
  answer: 0,
  explanation: "Standard Spark SQL casting is used to convert binary payloads into readable strings."
},
{
  id: 359,
  difficulty: "hard",
  question: "What is the consequence of having a high 'spark.sql.shuffle.partitions' value in a small streaming job?",
  options: [
    "The job runs faster",
    "High overhead due to many small tasks, leading to long micro-batch processing times",
    "The data is more accurate",
    "It consumes less RAM"
  ],
  answer: 1,
  explanation: "For streaming, shuffle partitions should usually be set lower (e.g., 8 or 16) to keep task scheduling overhead minimal."
},
{
  id: 360,
  difficulty: "medium",
  question: "Which UI provides real-time metrics for Structured Streaming queries in Spark 3.0+?",
  options: ["The 'Structured Streaming' tab in the Spark UI", "The 'Storage' tab", "The 'Environment' tab", "A separate website"],
  answer: 0,
  explanation: "Spark 3.0 introduced a dedicated tab for monitoring stream throughput, latency, and state health."
},
{
  id: 361,
  difficulty: "medium",
  question: "Scenario: You need to merge thousands of small CSV files into a single Parquet table. What is the most efficient first step?",
  options: [
    "Read them one by one in a for-loop",
    "Read the entire directory using spark.read.csv('path/*.csv')",
    "Use a shell script to merge them first",
    "Rename them to .txt"
  ],
  answer: 1,
  explanation: "Spark is designed to parallelize the reading of many files in a directory across all executors."
},
/* ======================================================
PYTHON & GENERAL DE SCENARIOS (IDs 362 - 403)
====================================================== */

{
  id: 362,
  difficulty: "hard",
  question: "Scenario: You are writing a PySpark script for a production pipeline. How should you handle the SparkSession?",
  options: [
    "Hardcode the master URL as 'local[*]'",
    "Use SparkSession.builder.getOrCreate() to ensure it works in both local and cluster environments",
    "Define a new session for every function",
    "Let Spark decide automatically"
  ],
  answer: 1,
  explanation: "getOrCreate() is the standard for production code to prevent multiple session conflicts and ensure portability."
},
{
  id: 363,
  difficulty: "medium",
  question: "Which Python module is used to interact with the underlying OS (e.g., to check if a file path exists before running Spark)?",
  options: ["sys", "os", "math", "platform"],
  answer: 1,
  explanation: "The 'os' or 'pathlib' modules are standard for filesystem checks in Python scripts."
},
{
  id: 364,
  difficulty: "hard",
  question: "What is 'Serialization' in the context of sending a Python function to Spark workers?",
  options: [
    "Converting the data to a string",
    "Packaging the code and its dependencies (using Pickle/CloudPickle) to be sent over the network to executors",
    "Alphabetizing the columns",
    "Adding IDs to every row"
  ],
  answer: 1,
  explanation: "Spark must 'pickle' Python UDFs to send the logic from the Driver to the remote Worker nodes."
},
{
  id: 365,
  difficulty: "medium",
  question: "In Python, what does the 'try...except...finally' block ensure?",
  options: [
    "The code runs faster",
    "The 'finally' block executes regardless of whether an exception occurred (useful for closing DB connections)",
    "Errors are ignored",
    "The code is encrypted"
  ],
  answer: 1,
  explanation: "Finally blocks are crucial in DE for resource cleanup (e.g., closing a SparkSession or a file handle)."
},
/* ======================================================
PYTHON & GENERAL DE SCENARIOS (IDs 366 - 403)
====================================================== */

{
  id: 366,
  difficulty: "medium",
  question: "What is the purpose of a requirements.txt file in a Python-based Data Engineering project?",
  options: [
    "To store the database passwords",
    "To list all Python dependencies and their versions for consistent environment setup",
    "To write the SQL queries",
    "To document the data lineage"
  ],
  answer: 1,
  explanation: "requirements.txt ensures that all environments (Dev, Test, Prod) use the same library versions."
},
{
  id: 367,
  difficulty: "hard",
  question: "In Python, what is the difference between a shallow copy and a deep copy of a list of objects?",
  options: [
    "A shallow copy is faster but only copies references; a deep copy creates new instances of all nested objects",
    "Deep copy only works for integers",
    "Shallow copy is used for Spark; deep copy is for Pandas",
    "There is no difference in Python 3"
  ],
  answer: 0,
  explanation: "Deep copies are essential in DE pipelines when you need to modify a dataset without affecting the original source object."
},
{
  id: 368,
  difficulty: "medium",
  question: "Which Python data type is 'immutable'?",
  options: ["List", "Dictionary", "Tuple", "Set"],
  answer: 2,
  explanation: "Tuples cannot be changed after creation, making them useful for fixed data structures like record schemas."
},
{
  id: 369,
  difficulty: "hard",
  question: "What does the 'yield' keyword do in a Python function?",
  options: [
    "It stops the program",
    "It turns the function into a generator, allowing it to return values one at a time to save memory",
    "It speeds up the CPU",
    "It waits for a database response"
  ],
  answer: 1,
  explanation: "Generators are vital for processing billion-row files that would otherwise cause an OutOfMemory error."
},
{
  id: 371,
  difficulty: "medium",
  question: "Which of the following is a 'Best Practice' for handling credentials in a Spark script?",
  options: [
    "Hardcode them in the script",
    "Pass them as command-line arguments",
    "Use a secrets manager (like Databricks Secrets or Azure Key Vault)",
    "Store them in a public GitHub repo"
  ],
  answer: 2,
  explanation: "Secrets managers provide secure, encrypted access to passwords and tokens without exposing them in code."
},
{
  id: 372,
  difficulty: "hard",
  question: "What is the primary purpose of 'Unit Testing' a PySpark transformation function?",
  options: [
    "To check the speed of the cluster",
    "To verify that the logic produces expected output given a small, controlled sample of input data",
    "To count the number of rows in production",
    "To check if the database is online"
  ],
  answer: 1,
  explanation: "Unit tests allow DEs to refactor code with confidence that the core business logic remains correct."
},
{
  id: 373,
  difficulty: "medium",
  question: "In Python, which built-in function is used to iterate over both the index and the value of a list?",
  options: ["zip()", "enumerate()", "map()", "filter()"],
  answer: 1,
  explanation: "enumerate() returns a tuple containing the count and the values obtained from iterating over an iterable."
},
{
  id: 374,
  difficulty: "hard",
  question: "What is the 'Decorator' pattern used for in Python?",
  options: [
    "To make the code look better",
    "To wrap another function to extend its behavior without permanently modifying it (e.g., for logging or timing)",
    "To delete old files",
    "To connect to Spark"
  ],
  answer: 1,
  explanation: "Decorators are often used in DE to add retry logic or execution timers to pipeline tasks."
},
{
  id: 375,
  difficulty: "medium",
  question: "Which library would you use in Python to perform high-performance numerical operations on large arrays before passing them to Spark?",
  options: ["BeautifulSoup", "NumPy", "Pytest", "Django"],
  answer: 1,
  explanation: "NumPy is the foundational library for scientific computing and array processing in Python."
},
{
  id: 376,
  difficulty: "hard",
  question: "Scenario: Your Spark job is failing because a Python library is missing on the workers. How do you distribute a .py file to all executors?",
  options: [
    "Manually install it on every node",
    "Use the --py-files flag in spark-submit",
    "Email the file to the IT department",
    "It is not possible to send files to workers"
  ],
  answer: 1,
  explanation: "The --py-files flag or sc.addPyFile() allows Spark to ship code dependencies to the executors' environment."
},
{
  id: 377,
  difficulty: "medium",
  question: "What is 'PEP 8'?",
  options: [
    "A version of Python",
    "The official style guide for Python code",
    "A Spark configuration",
    "A type of database"
  ],
  answer: 1,
  explanation: "Following PEP 8 ensures that data engineering codebases remain readable and maintainable by large teams."
},
{
  id: 378,
  difficulty: "hard",
  question: "What is the difference between 'args' and 'kwargs' in a Python function definition?",
  options: [
    "args is for numbers; kwargs is for strings",
    "args handles variable positional arguments; kwargs handles variable keyword (named) arguments",
    "There is no difference",
    "kwargs is only for Spark"
  ],
  answer: 1,
  explanation: "These allow functions to be flexible, which is common in generic data processing utilities."
},
{
  id: 379,
  difficulty: "medium",
  question: "Which Python function is used to combine two lists into a list of tuples?",
  options: ["combine()", "merge()", "zip()", "join()"],
  answer: 2,
  explanation: "zip() is frequently used to align headers with row data in manual file parsing."
},
{
  id: 381,
  difficulty: "medium",
  question: "In Airflow, what does 'Idempotency' mean for a Task?",
  options: [
    "The task runs every hour",
    "Running the same task multiple times with the same input produces the same result and no side effects",
    "The task is written in Python",
    "The task can only run once"
  ],
  answer: 1,
  explanation: "Idempotency allows you to safely retry failed tasks without duplicating data or creating errors."
},
{
  id: 382,
  difficulty: "hard",
  question: "What is an Airflow 'XCom'?",
  options: [
    "A type of sensor",
    "A mechanism that allows tasks to exchange small amounts of metadata or messages",
    "An external database",
    "A command line tool"
  ],
  answer: 1,
  explanation: "XComs (Cross-Communications) are used for light data passing; large data should be passed via storage (S3/DB)."
},
{
  id: 383,
  difficulty: "medium",
  question: "Which Airflow operator would you use to run a Spark job on a remote cluster?",
  options: ["PythonOperator", "SparkSubmitOperator", "BashOperator", "EmailOperator"],
  answer: 1,
  explanation: "The SparkSubmitOperator is a specialized wrapper for the spark-submit command."
},
{
  id: 384,
  difficulty: "hard",
  question: "In a DAG, what is a 'Backfill'?",
  options: [
    "Deleting old data",
    "Running a pipeline for a set of historical dates in the past",
    "A type of database backup",
    "Reinstalling Airflow"
  ],
  answer: 1,
  explanation: "Backfilling is used to populate a new table with historical data or re-run logic after a bug fix."
},
{
  id: 385,
  difficulty: "medium",
  question: "Which tool is commonly used to manage Python environments and dependencies for Spark clusters?",
  options: ["Conda / Virtualenv", "NPM", "Maven", "Git"],
  answer: 0,
  explanation: "Managing environments ensures that all workers have the same versions of libraries (like pandas or scikit-learn)."
},
{
  id: 386,
  difficulty: "hard",
  question: "What is a 'SLA' (Service Level Agreement) in Airflow?",
  options: [
    "A security setting",
    "A time limit by which a task or DAG should have completed",
    "The number of workers",
    "A type of logging"
  ],
  answer: 1,
  explanation: "SLAs help monitor data pipelines to ensure that data is delivered to stakeholders on time."
},
{
  id: 387,
  difficulty: "medium",
  question: "What is 'Logging' used for in a production Spark job?",
  options: [
    "To store the actual data",
    "To record the execution steps and errors for troubleshooting and auditing",
    "To speed up the job",
    "To encrypt the data"
  ],
  answer: 1,
  explanation: "Good logging is essential for diagnosing why a job failed in the middle of the night."
},
{
  id: 388,
  difficulty: "hard",
  question: "In Python, what is the difference between 'is' and '=='?",
  options: [
    "They are identical",
    "'==' checks for equality of value; 'is' checks for identity (if they are the exact same object in memory)",
    "'is' is for strings only",
    "'==' is only for Spark DataFrames"
  ],
  answer: 1,
  explanation: "Using 'is' when you mean '==' is a common source of bugs in data logic."
},
{
  id: 389,
  difficulty: "medium",
  question: "What does the 'json' module's 'dumps()' function do?",
  options: [
    "Deletes a JSON file",
    "Converts a Python object (like a dict) into a JSON-formatted string",
    "Reads a JSON file from disk",
    "Sorts a JSON file"
  ],
  answer: 1,
  explanation: "Dumping to string is often the first step before sending data to an API or Kafka topic."
},
{
  id: 390,
  difficulty: "hard",
  question: "In a CI/CD pipeline for Spark, what is 'Unit Testing' typically performed on?",
  options: [
    "The entire 10TB dataset",
    "Small, mocked DataFrames with known inputs and expected outputs",
    "The production database",
    "The hardware of the cluster"
  ],
  answer: 1,
  explanation: "Unit tests should be fast and deterministic, using small samples to verify transformation logic."
},
{
  id: 391,
  difficulty: "medium",
  question: "Which Git command is used to bring changes from a remote repository to your local machine?",
  options: ["git push", "git pull", "git commit", "git add"],
  answer: 1,
  explanation: "Pulling ensures your local development environment is synced with the team's latest code."
},
{
  id: 392,
  difficulty: "hard",
  question: "What is 'Linting' in a Data Engineering workflow?",
  options: [
    "Cleaning the computer hardware",
    "Automated checking of source code for programmatic and stylistic errors",
    "Deleting duplicate data",
    "Checking the database for nulls"
  ],
  answer: 1,
  explanation: "Linters (like Flake8 or Pylint) enforce coding standards automatically during CI/CD."
},
{
  id: 393,
  difficulty: "medium",
  question: "What is the primary purpose of a 'Dockerfile' in DE?",
  options: [
    "To store documentation",
    "To define the environment, libraries, and code needed to run an application in a portable container",
    "To write SQL",
    "To manage the cluster"
  ],
  answer: 1,
  explanation: "Docker ensures that 'it works on my machine' also means it will work in production."
},
{
  id: 394,
  difficulty: "hard",
  question: "In SQL, what is the difference between 'WHERE' and 'HAVING'?",
  options: [
    "There is no difference",
    "WHERE filters rows before aggregation; HAVING filters groups after aggregation",
    "HAVING is for Spark only",
    "WHERE is for strings only"
  ],
  answer: 1,
  explanation: "In Spark SQL, using HAVING is common when filtering based on aggregate counts or sums."
},
{
  id: 395,
  difficulty: "medium",
  question: "In a production environment, why should you avoid using 'df.show()'?",
  options: [
    "It is too slow",
    "It is an action that triggers a job and potentially collects data to the driver, which is unnecessary in automated pipelines",
    "It deletes the DataFrame",
    "It only works in Jupyter notebooks"
  ],
  answer: 1,
  explanation: "show() is for human inspection; in production scripts, it adds unnecessary overhead."
},
{
  id: 396,
  difficulty: "hard",
  question: "What is 'Data Lineage'?",
  options: [
    "The size of the data",
    "The tracking of data's origins, transformations, and movements over time",
    "The password for the database",
    "The names of the columns"
  ],
  answer: 1,
  explanation: "Lineage is crucial for auditing, debugging, and understanding the impact of changes in a pipeline."
},
{
  id: 397,
  difficulty: "medium",
  question: "What is a 'Schema'?",
  options: [
    "A type of data encryption",
    "The formal definition of a table's structure, including column names and data types",
    "A way to delete data",
    "A Spark configuration"
  ],
  answer: 1,
  explanation: "Enforcing schemas ensures data quality and prevents downstream processing errors."
},
{
  id: 398,
  difficulty: "hard",
  question: "What is 'Data Governance'?",
  options: [
    "The government's data",
    "The management of data availability, usability, integrity, and security in an organization",
    "A type of software",
    "The speed of the network"
  ],
  answer: 1,
  explanation: "Governance ensures that data is used responsibly and stays compliant with regulations like GDPR."
},
{
  id: 399,
  difficulty: "medium",
  question: "Which SQL join returns all rows from the left table and the matched rows from the right table?",
  options: ["INNER JOIN", "LEFT JOIN", "RIGHT JOIN", "FULL JOIN"],
  answer: 1,
  explanation: "Left joins are the most common join type in DE to preserve a primary dataset while adding lookup information."
},
{
  id: 400,
  difficulty: "medium",
  question: "What is the 'Driver's' primary role in a Spark Cluster?",
  options: [
    "Storing the raw data",
    "Analyzing the query, maintaining the SparkContext, and scheduling tasks on executors",
    "Providing the physical RAM for joins",
    "Connecting to the internet"
  ],
  answer: 1,
  explanation: "The Driver is the brain; it orchestrates the job but should not do the heavy lifting of data processing."
},
{
  id: 401,
  difficulty: "hard",
  question: "Scenario: Your job is failing with 'Connection reset by peer' errors frequently. What should you investigate first?",
  options: [
    "The code's logic",
    "Network stability and potential Executor OOMs causing nodes to drop off the cluster",
    "The column names",
    "The Python version"
  ],
  answer: 1,
  explanation: "Network errors are often symptoms of resource exhaustion (OOMs) where the cluster manager kills an executor."
},
{
  id: 402,
  difficulty: "medium",
  question: "What is the 'Master' URL for a Spark cluster running in standalone mode?",
  options: ["spark://host:port", "http://spark.com", "local[*]", "yarn"],
  answer: 0,
  explanation: "The 'spark://' prefix denotes the Spark Standalone cluster manager."
},
{
  id: 403,
  difficulty: "hard",
  question: "When deploying a Spark job, what does the '--deploy-mode cluster' do?",
  options: [
    "Runs the Driver on your local machine",
    "Runs the Driver inside the cluster (e.g., on a worker node managed by YARN/K8s)",
    "Deletes the cluster after the job",
    "Runs the job in a web browser"
  ],
  answer: 1,
  explanation: "Cluster mode is preferred for production as it ensures the Driver has high availability and doesn't rely on your local machine's connectivity."
},
/* ======================================================
     PYTHON CORE & ADVANCED IDIOMS (contd.)
     Topics: Comprehensions, Walrus Operator, OOP, Scoping
     ====================================================== */
  {
    id: 404,
    difficulty: "medium",
    category: "python_core",
    question: "What is the primary difference between the 'is' operator and the '==' operator?",
    options: [
      "They are identical and can be used interchangeably",
      "'is' checks for identity (same memory address), while '==' checks for equality (same value)",
      "'==' checks for identity, while 'is' checks for value",
      "'is' is used for strings and '==' is used for numbers"
    ],
    answer: 1,
    explanation: "The 'is' operator checks if two variables point to the same object in memory (id()), whereas '==' checks if the values held by the variables are equal.",
    hint: "Identity vs. Equality."
  },
  {
    id: 405,
    difficulty: "hard",
    category: "comprehensions",
    question: "Which of the following is the correct 'Pythonic' one-liner to flatten a nested list like [[1, 2], [3, 4]]?",
    options: [
      "[x for x in sublist for sublist in nested_list]",
      "[x for sublist in nested_list for x in sublist]",
      "nested_list.flatten()",
      "[sublist[x] for x in nested_list]"
    ],
    answer: 1,
    explanation: "In a nested list comprehension, the outer loop comes first. The syntax follows: [item for sublist in main_list for item in sublist].",
    hint: "Outer loop first, then inner loop."
  },
  {
    id: 406,
    difficulty: "medium",
    category: "python_core",
    question: "What does the Walrus operator (:=) introduced in Python 3.8 allow you to do?",
    options: [
      "Assign a value to a variable as part of an expression",
      "Perform floor division and assignment simultaneously",
      "Create a new class instance in one line",
      "Compare two values and return the larger one"
    ],
    answer: 0,
    explanation: "The Walrus operator (Assignment Expression) allows you to assign a value to a variable within an expression, such as in a 'while' loop condition or a list comprehension.",
    hint: "Assignment within an expression."
  },
  {
    id: 407,
    difficulty: "hard",
    category: "oop",
    question: "In Python OOP, what is the main difference between @classmethod and @staticmethod?",
    options: [
      "There is no functional difference",
      "@classmethod takes 'cls' as the first argument to access class state; @staticmethod takes no implicit first argument",
      "@staticmethod can modify class state, while @classmethod cannot",
      "@classmethod is only for private methods"
    ],
    answer: 1,
    explanation: "@classmethod is bound to the class and receives the class as an implicit first argument (cls), making it useful for factory methods. @staticmethod is not bound to the class or instance.",
    hint: "Does it need 'cls' or not?"
  },
  {
    id: 408,
    difficulty: "medium",
    category: "python_core",
    question: "What is the 'LEGB' rule in Python?",
    options: [
      "A list manipulation technique",
      "The order in which Python searches for variable names: Local, Enclosing, Global, Built-in",
      "A rule for naming classes and functions",
      "A library for data encryption"
    ],
    answer: 1,
    explanation: "LEGB defines the scope resolution order. Python first looks locally, then in any enclosing functions, then in the global scope, and finally in built-ins.",
    hint: "Scope resolution order."
  },
  {
    id: 409,
    difficulty: "easy",
    category: "pythonic",
    question: "What is the most 'Pythonic' way to swap the values of two variables 'a' and 'b'?",
    options: [
      "temp = a; a = b; b = temp",
      "a, b = b, a",
      "a = a + b; b = a - b; a = a - b",
      "swap(a, b)"
    ],
    answer: 1,
    explanation: "Python allows tuple unpacking, which makes variable swapping a clean one-liner without the need for a temporary variable.",
    hint: "No temp variable needed."
  },
  {
    id: 410,
    difficulty: "medium",
    category: "python_core",
    question: "Which function would you use to find the key associated with the maximum value in a dictionary 'd'?",
    options: [
      "max(d)",
      "max(d.values())",
      "max(d, key=d.get)",
      "d.max_key()"
    ],
    answer: 2,
    explanation: "Using max(d) alone only compares the keys. Passing 'key=d.get' tells the max function to evaluate the dictionary keys based on their corresponding values.",
    hint: "Use the 'key' argument."
  },
  {
    id: 411,
    difficulty: "hard",
    category: "oop",
    question: "What is the difference between __init__ and __new__ in a Python class?",
    options: [
      "__init__ creates the instance; __new__ initializes it",
      "__new__ is the actual constructor that creates the instance; __init__ is the initializer that sets attributes",
      "They are two names for the same function",
      "__new__ is only used in Python 2"
    ],
    answer: 1,
    explanation: "__new__ is a static method that creates a new instance of a class. __init__ is called after the instance is created to initialize its state.",
    hint: "Creator vs. Initializer."
  },
  {
    id: 412,
    difficulty: "medium",
    category: "pythonic",
    question: "How can you reverse a string 's' using slicing?",
    options: [
      "s[0:-1]",
      "s[::-1]",
      "s.reverse()",
      "s[-1:0]"
    ],
    answer: 1,
    explanation: "The slice syntax [start:stop:step] with a step of -1 effectively reverses the sequence.",
    hint: "Use the step parameter."
  },
  {
    id: 413,
    difficulty: "hard",
    category: "python_core",
    question: "How does Python's memory management primarily handle object deletion?",
    options: [
      "Manual deletion by the programmer",
      "Reference counting and a cyclic garbage collector",
      "It never deletes objects during execution",
      "Using a 'First-In-First-Out' stack"
    ],
    answer: 1,
    explanation: "Python primarily uses reference counting to track objects. When an object's reference count drops to zero, it is deallocated. It also uses a cyclic garbage collector to find groups of objects that reference each other but are unreachable.",
    hint: "Counting references."
  },
  {
    id: 414,
    difficulty: "medium",
    category: "python_core",
    question: "What is the purpose of the 'with' statement when opening a file?",
    options: [
      "To improve the speed of reading the file",
      "To automatically close the file even if an exception occurs",
      "To encrypt the file content",
      "To allow multiple threads to read the file"
    ],
    answer: 1,
    explanation: "The 'with' statement utilizes context managers to ensure resources like file streams are properly closed after the block is executed, preventing memory leaks.",
    hint: "Context management."
  },
  {
    id: 415,
    difficulty: "hard",
    category: "oop",
    question: "What is the main advantage of using a '@dataclass' (introduced in Python 3.7)?",
    options: [
      "It makes the class run faster",
      "It automatically generates special methods like __init__, __repr__, and __eq__ based on type hints",
      "It prevents the class from being inherited",
      "It allows the class to be used as a function"
    ],
    answer: 1,
    explanation: "Dataclasses reduce boilerplate code by automatically creating common methods that deal with object state and representation.",
    hint: "Boilerplate reduction."
  },
  {
    id: 416,
    difficulty: "medium",
    category: "pythonic",
    question: "Which one-liner correctly merges two dictionaries 'd1' and 'd2' in Python 3.5+?",
    options: [
      "d3 = d1 + d2",
      "d3 = {**d1, **d2}",
      "d3 = d1.join(d2)",
      "d3 = [d1, d2]"
    ],
    answer: 1,
    explanation: "Using the double-asterisk 'unpacking' operator inside a dictionary literal is a common way to merge dictionaries, with d2's keys overwriting d1's in case of duplicates.",
    hint: "Dictionary unpacking."
  },
  {
    id: 417,
    difficulty: "medium",
    category: "python_core",
    question: "When should you use 'isinstance(obj, ClassName)' instead of 'type(obj) == ClassName'?",
    options: [
      "Always, as they are identical",
      "When you want to support inheritance (isinstance returns True for subclasses)",
      "When performance is more important than accuracy",
      "Only when working with built-in types"
    ],
    answer: 1,
    explanation: "isinstance() accounts for inheritance, whereas checking the type directly only returns True if the object is exactly that class.",
    hint: "Think about subclasses."
  },
  {
    id: 418,
    difficulty: "medium",
    category: "python_core",
    question: "What is the difference between __str__ and __repr__?",
    options: [
      "__str__ is for developers; __repr__ is for users",
      "__str__ is intended for an informal, readable string for users; __repr__ is for a formal, unambiguous representation for debugging",
      "__str__ is required; __repr__ is optional",
      "There is no difference"
    ],
    answer: 1,
    explanation: "__str__ is what the print() function uses, while __repr__ is what you see when you inspect the object in a console (aiming for string that could recreate the object).",
    hint: "User-friendly vs. Developer-friendly."
  },
  /* ======================================================
ALGORITHM COMPLEXITY & SOLUTIONS DELTA (PHASES 1-4)
====================================================== */

{
  id: 419, // Continuing from last ID
  difficulty: "medium",
  category: "algorithms",
  question: "In the 'FizzBuzz Extreme' implementation, what is the time complexity of checking if a number 'm' is prime?",
  options: ["O(m)", "O(log m)", "O(√m)", "O(1)"],
  answer: 2,
  explanation: "Checking up to the square root of m is sufficient to find any factors, resulting in O(√m) complexity.",
  hint: "Think about the upper limit of the loop."
},
{
  id: 420,
  difficulty: "easy",
  category: "algorithms",
  question: "When reversing a string manually (without slicing), what is the Space Complexity of the resulting string?",
  options: ["O(1)", "O(log n)", "O(n)", "O(n²)" ],
  answer: 2,
  explanation: "A new string of length 'n' is created to store the reversed result, occupying linear space.",
  hint: "The output size grows with the input size."
},
{
  id: 421,
  difficulty: "medium",
  category: "algorithms",
  question: "What is the Time Complexity of an iterative Fibonacci function compared to a naive recursive one?",
  options: [
    "Iterative: O(n), Recursive: O(2ⁿ)",
    "Iterative: O(n²), Recursive: O(n)",
    "Iterative: O(1), Recursive: O(n log n)",
    "Both are O(n)"
  ],
  answer: 0,
  explanation: "Iteration visits each number once (linear), while naive recursion branches twice at each level (exponential).",
  hint: "Recall the 'tree' structure of recursive calls."
},
{
  id: 422,
  difficulty: "medium",
  category: "algorithms",
  question: "Which approach allows the 'Two Sum' problem to be solved in O(n) time?",
  options: [
    "Nested for-loops",
    "Sorting the array first",
    "Using a Hash Map (Dictionary) for O(1) lookups of the complement",
    "Binary search"
  ],
  answer: 2,
  explanation: "By storing seen numbers in a hash map, we can check for (target - current) in a single pass.",
  hint: "Trading space for time."
},
{
  id: 423,
  difficulty: "hard",
  category: "algorithms",
  question: "When merging overlapping intervals, why is the Time Complexity O(n log n)?",
  options: [
    "Because of the merging loop",
    "Because the intervals must be sorted by start time first",
    "Because it uses a binary tree",
    "Because it is a nested operation"
  ],
  answer: 1,
  explanation: "The bottleneck is sorting the intervals; the subsequent merging pass is only O(n).",
  hint: "What is the most expensive step?"
},
{
  id: 424,
  difficulty: "medium",
  category: "algorithms",
  question: "In the 'Best Time to Buy/Sell Stock' algorithm, what is the optimal Time Complexity?",
  options: ["O(1)", "O(n)", "O(n log n)", "O(n²)" ],
  answer: 1,
  explanation: "You can find the max profit in a single pass by tracking the minimum price seen so far.",
  hint: "One-pass solution."
},
{
  id: 425,
  difficulty: "hard",
  category: "python_core",
  question: "What two data structures are combined to create an LRU Cache with O(1) 'get' and 'put' operations?",
  options: [
    "List and Set",
    "Dictionary and Doubly Linked List",
    "Stack and Queue",
    "Two Heaps"
  ],
  answer: 1,
  explanation: "The Dictionary provides O(1) lookup, and the Doubly Linked List allows O(1) reordering/eviction.",
  hint: "Pointers and Hash Maps."
},
{
  id: 426,
  difficulty: "medium",
  category: "python_core",
  question: "What is the primary purpose of the '__new__' method in a Singleton pattern implementation?",
  options: [
    "To initialize attributes",
    "To control the creation of the instance and ensure only one exists",
    "To delete the instance",
    "To convert the class to a string"
  ],
  answer: 1,
  explanation: "__new__ is the static method that creates the object; overriding it allows us to return an existing instance.",
  hint: "Instance creation control."
},
];

// --- TOP 100 INTERVIEW INDICES ---
// These indices point to unique, high-value questions from the bank for rapid interview prep.
// Covering: Python Internals, PySpark Optimization, Streaming, Delta Lake, and Algorithms.
const hotsQuestions = [
    // Python Core & Advanced (20 indices)
    0, 1, 2, 5, 6, 8, 10, 12, 14, 20, 
    27, 29, 32, 38, 41, 46, 48, 52, 96, 99, 

    // PySpark Foundations & Architecture (20 indices)
    100, 101, 102, 104, 109, 114, 119, 124, 129, 134, 
    139, 144, 149, 154, 159, 164, 169, 174, 179, 184,

    // PySpark Optimization & Internals (20 indices)
    200, 201, 204, 209, 214, 219, 223, 224, 229, 234, 
    239, 244, 249, 255, 259, 264, 269, 275, 276, 279,

    // Structured Streaming & Delta Lake (20 indices)
    289, 295, 296, 298, 304, 309, 314, 319, 324, 329, 
    334, 339, 342, 344, 349, 354, 356, 358, 359, 361,

    // DE Scenarios & Algorithms (20 indices)
    363, 367, 369, 374, 379, 384, 389, 394, 399, 404, 
    409, 414, 416, 419, 420, 421, 422, 423, 424, 425
];

