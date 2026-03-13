/* ======================================================
   REACT CERTIFICATION QUESTION BANK (Batch 1: 1-50)
   Topics: JSX, Components, Props, & State
   ====================================================== */

const reactBatch1 = [
  {
    id: 1,
    difficulty: "easy",
    category: "basics",
    question: "What is the primary purpose of the Virtual DOM in React?",
    options: [
      "To directly manipulate the browser's DOM for speed",
      "To provide a blueprint that React uses to update the real DOM efficiently",
      "To store data in the browser's local storage",
      "To handle server-side routing"
    ],
    answer: 1,
    explanation: "React creates a lightweight copy of the DOM. When state changes, it compares the Virtual DOM with a snapshot taken before the update (diffing) and updates only the changed parts in the real DOM.",
    hint: "Think of it as a 'draft' before the final version."
  },
  {
    id: 2,
    difficulty: "medium",
    category: "jsx",
    question: "In JSX, how must you express JavaScript expressions?",
    options: ["Inside double quotes", "Inside curly braces {}", "Inside square brackets []", "Inside parenthetical tags ()"],
    answer: 1,
    explanation: "Curly braces are used in JSX to evaluate JavaScript expressions, including variables, functions, and inline math.",
    hint: "The same syntax used for objects in JS."
  },
  {
    id: 3,
    difficulty: "easy",
    category: "components",
    question: "Which of the following is a requirement for a React component name?",
    options: [
      "It must be camelCase",
      "It must start with an uppercase letter",
      "It must be wrapped in a string",
      "It must contain at least one number"
    ],
    answer: 1,
    explanation: "React treats components starting with lowercase letters as DOM tags (like <div>). Custom components must be PascalCase (e.g., <MyComponent />).",
    hint: "PascalCase is key."
  },
  {
    id: 4,
    difficulty: "medium",
    category: "props",
    question: "How are 'props' passed to a component?",
    options: [
      "Through the state object",
      "As arguments to the component function or class",
      "Using the 'setProps' method",
      "By defining them in the CSS file"
    ],
    answer: 1,
    explanation: "Props are read-only inputs passed from a parent component to a child component, similar to function arguments.",
    hint: "Inbound data."
  },
  {
    id: 5,
    difficulty: "hard",
    category: "state",
    question: "What happens when you call 'setState' in a class component?",
    options: [
      "The component's props are updated",
      "The component and its children are scheduled for re-rendering",
      "The browser window reloads",
      "The Virtual DOM is deleted"
    ],
    answer: 1,
    explanation: "Updating state triggers React's reconciliation process, which eventually updates the UI to reflect the new state.",
    hint: "Triggers a UI refresh."
  },
  {
    id: 6,
    difficulty: "medium",
    category: "hooks",
    question: "Which hook is used to add state to a functional component?",
    options: ["useEffect", "useState", "useContext", "useReducer"],
    answer: 1,
    explanation: "useState returns a stateful value and a function to update it.",
    hint: "The most basic state hook."
  },
  {
    id: 7,
    difficulty: "hard",
    category: "scenarios",
    question: "A component is rendering a list of items using '.map()'. Why is the 'key' prop necessary?",
    options: [
      "To style each item individually",
      "To help React identify which items have changed, been added, or removed",
      "To set the index of the item in the array",
      "To enable event listeners on the list"
    ],
    answer: 1,
    explanation: "Keys provide a stable identity for elements in a list, allowing React to optimize re-renders by not recreating the entire list.",
    hint: "Performance and identity."
  },
  {
    id: 8,
    difficulty: "medium",
    category: "jsx",
    question: "Which attribute is used in JSX instead of the standard HTML 'class' attribute?",
    options: ["class", "className", "styleClass", "elementClass"],
    answer: 1,
    explanation: "Because 'class' is a reserved keyword in JavaScript, React uses 'className' for DOM elements.",
    hint: "CamelCase version of class."
  },
  {
    id: 9,
    difficulty: "easy",
    category: "basics",
    question: "What is the name of the tool used to compile JSX into standard JavaScript?",
    options: ["Webpack", "Babel", "Redux", "NPM"],
    answer: 1,
    explanation: "Babel is the transpiler that converts modern JS and JSX into a version of JavaScript that all browsers can understand.",
    hint: "Transpilation."
  },
  {
    id: 10,
    difficulty: "hard",
    category: "hooks",
    question: "When using 'useEffect', how do you ensure the effect only runs once after the initial render?",
    options: [
      "Omit the dependency array",
      "Pass an empty array [] as the second argument",
      "Return a cleanup function",
      "Use the 'useOnce' hook instead"
    ],
    answer: 1,
    explanation: "An empty dependency array tells React that the effect doesn't depend on any values from props or state, so it never needs to re-run.",
    hint: "Empty dependency."
  },
  {
    id: 11,
    difficulty: "medium",
    category: "events",
    question: "How do you prevent the default behavior of a form submission in a React event handler?",
    options: [
      "return false",
      "e.preventDefault()",
      "e.stopPropagation()",
      "form.stop()"
    ],
    answer: 1,
    explanation: "In React, you cannot return false to prevent default behavior; you must explicitly call preventDefault() on the event object.",
    hint: "Standard JS event method."
  },
  {
    id: 12,
    difficulty: "hard",
    category: "state",
    question: "In functional components, is 'useState' update synchronous or asynchronous?",
    options: ["Synchronous", "Asynchronous", "It depends on the browser", "Synchronous only in strict mode"],
    answer: 1,
    explanation: "State updates are asynchronous. React batches multiple updates together for performance reasons.",
    hint: "It doesn't happen instantly in the next line of code."
  },
  {
    id: 13,
    difficulty: "medium",
    category: "components",
    question: "What are 'Higher-Order Components' (HOC)?",
    options: [
      "Components that render at the top of the DOM tree",
      "A function that takes a component and returns a new component",
      "Components with more than 100 lines of code",
      "The parent component of all elements"
    ],
    answer: 1,
    explanation: "HOCs are a pattern used for reusing component logic. They are not part of the React API, but a pattern that emerges from React's compositional nature.",
    hint: "Component transformation."
  },
  {
    id: 14,
    difficulty: "easy",
    category: "basics",
    question: "Which of the following describes 'Props' correctly?",
    options: [
      "They are mutable within the component",
      "They are immutable (read-only) to the receiving component",
      "They are used to store private data",
      "They are defined using the 'useState' hook"
    ],
    answer: 1,
    explanation: "Props should never be modified by the child component. They are passed down by the parent.",
    hint: "Data flow is one-way."
  },
  {
    id: 15,
    difficulty: "hard",
    category: "hooks",
    question: "What is the purpose of the cleanup function in 'useEffect'?",
    options: [
      "To delete the component's state",
      "To perform tasks like unsubscribing from services or clearing timers before the component unmounts",
      "To reset the CSS styles",
      "To force a garbage collection in the browser"
    ],
    answer: 1,
    explanation: "The function returned by useEffect is the 'cleanup' phase, preventing memory leaks.",
    hint: "Unsubscribe or clear."
  },
  {
    id: 16,
    difficulty: "medium",
    category: "scenarios",
    question: "You need to update a state variable based on its previous value. What is the recommended way to do this?",
    options: [
      "setCount(count + 1)",
      "setCount(prevCount => prevCount + 1)",
      "this.state.count++",
      "count = count + 1"
    ],
    answer: 1,
    explanation: "Using the functional update form ensures you are working with the most current state, especially when updates are batched.",
    hint: "Use a callback function."
  },
  {
    id: 17,
    difficulty: "easy",
    category: "jsx",
    question: "How do you write a comment in JSX?",
    options: ["// comment", "/* comment */", "{/* comment */}", ""],
    answer: 2,
    explanation: "Inside the return statement of a component, you must wrap a block comment in curly braces.",
    hint: "JS comment inside an expression."
  },
  {
    id: 18,
    difficulty: "hard",
    category: "components",
    question: "What is a 'PureComponent' in React class components?",
    options: [
      "A component that has no state",
      "A component that implements 'shouldComponentUpdate' with a shallow prop and state comparison",
      "A component that only renders HTML",
      "A component used for data fetching only"
    ],
    answer: 1,
    explanation: "PureComponent optimizes performance by preventing unnecessary re-renders if props and state haven't changed.",
    hint: "Shallow comparison."
  },
  {
    id: 19,
    difficulty: "medium",
    category: "state",
    question: "Can you use Hooks inside a class component?",
    options: ["Yes", "No", "Only in the constructor", "Only if the class is exported"],
    answer: 1,
    explanation: "Hooks are designed specifically for functional components. Class components use lifecycle methods instead.",
    hint: "Functional components only."
  },
  {
    id: 20,
    difficulty: "easy",
    category: "basics",
    question: "React follows which type of data flow?",
    options: ["Bi-directional", "Unidirectional (Top-down)", "Bottom-up", "Random"],
    answer: 1,
    explanation: "Data in React flows from parent to child via props.",
    hint: "One-way street."
  },
  {
    id: 21,
    difficulty: "medium",
    category: "scenarios",
    question: "Which hook would you use to store a mutable value that does NOT trigger a re-render when it changes?",
    options: ["useState", "useMemo", "useRef", "useCallback"],
    answer: 2,
    explanation: "useRef returns a mutable ref object whose .current property can hold any value, and changing it won't cause a render.",
    hint: "Think of a 'box' for variables."
  },
  {
    id: 22,
    difficulty: "hard",
    category: "lifecycle",
    question: "In class components, which lifecycle method is called immediately after a component is inserted into the DOM?",
    options: ["componentWillMount", "componentDidMount", "componentDidUpdate", "render"],
    answer: 1,
    explanation: "componentDidMount is the ideal place for network requests or DOM manipulations.",
    hint: "After the first mount."
  },
  {
    id: 23,
    difficulty: "medium",
    category: "jsx",
    question: "What is a React Fragment used for?",
    options: [
      "To break the code into smaller files",
      "To group a list of children without adding extra nodes to the DOM",
      "To create a portal to another DOM node",
      "To manage global state"
    ],
    answer: 1,
    explanation: "Fragments (<> or <React.Fragment>) let you return multiple elements without wrapping them in a <div>.",
    hint: "Avoid unnecessary wrappers."
  },
  {
    id: 24,
    difficulty: "hard",
    category: "hooks",
    question: "What does 'useMemo' do?",
    options: [
      "It memoizes a function to prevent it from being recreated",
      "It memoizes the result of a calculation to prevent expensive re-computations on every render",
      "It saves the component to the browser cache",
      "It executes a function only on the first render"
    ],
    answer: 1,
    explanation: "useMemo caches a value based on dependencies, improving performance for heavy calculations.",
    hint: "Memoize a 'value'."
  },
  {
    id: 25,
    difficulty: "easy",
    category: "props",
    question: "What is 'props.children'?",
    options: [
      "A list of all child components in the app",
      "A special prop that displays whatever is included between the opening and closing tags of a component",
      "An array of the component's state variables",
      "The internal CSS of a component"
    ],
    answer: 1,
    explanation: "props.children allow components to be used as containers for other elements or components.",
    hint: "Content between tags."
  },
  {
    id: 26,
    difficulty: "medium",
    category: "basics",
    question: "What is the 'Reconciliation' process in React?",
    options: [
      "The process of converting JSX to JS",
      "The algorithm React uses to diff one tree with another to determine which parts need to be changed",
      "Connecting React to a database",
      "The process of compiling CSS"
    ],
    answer: 1,
    explanation: "Reconciliation is the heart of React's efficiency, updating only the necessary parts of the DOM.",
    hint: "The diffing algorithm."
  },
  {
    id: 27,
    difficulty: "hard",
    category: "scenarios",
    question: "You want to pass data through the component tree without having to pass props down manually at every level. What should you use?",
    options: ["Redux", "Context API", "React Router", "Higher-Order Components"],
    answer: 1,
    explanation: "Context provides a way to share values between components without 'prop drilling'.",
    hint: "Broadcasting data."
  },
  {
    id: 28,
    difficulty: "medium",
    category: "hooks",
    question: "What is the first argument passed to the 'useState' hook?",
    options: ["The update function", "The initial state value", "The component name", "An array of dependencies"],
    answer: 1,
    explanation: "useState(initialValue) sets the starting value for that piece of state.",
    hint: "The beginning value."
  },
  {
    id: 29,
    difficulty: "easy",
    category: "components",
    question: "Which of these is a valid way to create a functional component?",
    options: [
      "function Welcome() { return <h1>Hello</h1>; }",
      "const Welcome = () => { <h1>Hello</h1>; }",
      "class Welcome extends Component { ... }",
      "Welcome() => <h1>Hello</h1>"
    ],
    answer: 0,
    explanation: "Option 0 is a standard JS function returning JSX. Option 1 is missing the 'return' keyword or implicit return parens.",
    hint: "Standard function syntax."
  },
  {
    id: 30,
    difficulty: "hard",
    category: "events",
    question: "In class components, why is it often necessary to 'bind' event handlers in the constructor?",
    options: [
      "To make the code look cleaner",
      "To ensure the 'this' keyword refers to the component instance in the handler",
      "To register the event with the browser",
      "To speed up the execution"
    ],
    answer: 1,
    explanation: "JavaScript's 'this' binding is tricky; without binding, 'this' is undefined when the handler is called by the event system.",
    hint: "Binding 'this'."
  },
  {
    id: 31,
    difficulty: "medium",
    category: "lifecycle",
    question: "Which lifecycle method is equivalent to the cleanup function in 'useEffect'?",
    options: ["componentDidMount", "componentWillUnmount", "componentDidUpdate", "render"],
    answer: 1,
    explanation: "componentWillUnmount is called just before the component is removed from the DOM.",
    hint: "Before destruction."
  },
  {
    id: 32,
    difficulty: "easy",
    category: "basics",
    question: "Who developed and maintains React?",
    options: ["Google", "Microsoft", "Meta (Facebook)", "Twitter"],
    answer: 2,
    explanation: "React was created by Jordan Walke at Facebook and is now maintained by Meta and a community of contributors.",
    hint: "Social media giant."
  },
  {
    id: 33,
    difficulty: "hard",
    category: "hooks",
    question: "Which hook is used to handle complex state logic that involves multiple sub-values?",
    options: ["useState", "useReducer", "useRef", "useMemo"],
    answer: 1,
    explanation: "useReducer is usually preferable to useState when you have complex state logic that involves multiple sub-values or when the next state depends on the previous one.",
    hint: "Redux-like hook."
  },
  {
    id: 34,
    difficulty: "medium",
    category: "props",
    question: "How do you define default values for props in a component?",
    options: [
      "Inside the useState hook",
      "Using ComponentName.defaultProps = { ... }",
      "By setting them in the constructor",
      "Using the 'default' keyword in JSX"
    ],
    answer: 1,
    explanation: "defaultProps is a property on the component class/function to set default values.",
    hint: "Prop defaults."
  },
  {
    id: 35,
    difficulty: "hard",
    category: "scenarios",
    question: "Why should you avoid using the array 'index' as a key when the list can change?",
    options: [
      "It causes a syntax error",
      "It can lead to UI bugs and performance issues because the key doesn't uniquely identify the data if items move",
      "React doesn't allow numbers as keys",
      "It makes the array read-only"
    ],
    answer: 1,
    explanation: "If the list reorders, React might reuse the state of the component at index 0 for a different data item that moved to index 0.",
    hint: "Unstable identities."
  },
  {
    id: 36,
    difficulty: "easy",
    category: "jsx",
    question: "Can JSX return multiple root elements?",
    options: ["Yes", "No", "Only if they are strings", "Only in class components"],
    answer: 1,
    explanation: "JSX must have one single root element. You must wrap multiple elements in a Fragment or a div.",
    hint: "Single parent rule."
  },
  {
    id: 37,
    difficulty: "medium",
    category: "components",
    question: "What is the difference between a controlled and uncontrolled component in React forms?",
    options: [
      "Controlled uses props; Uncontrolled uses state",
      "Controlled is managed by React state; Uncontrolled is managed by the DOM (refs)",
      "Controlled is faster",
      "Uncontrolled is only for class components"
    ],
    answer: 1,
    explanation: "Controlled components have their value driven by state, making them the 'single source of truth'.",
    hint: "Who controls the value?"
  },
  {
    id: 38,
    difficulty: "hard",
    category: "hooks",
    question: "When does 'useLayoutEffect' fire?",
    options: [
      "Before the DOM is updated",
      "Synchronously after all DOM mutations but before the browser paints",
      "Asynchronously after the paint",
      "Only on server-side rendering"
    ],
    answer: 1,
    explanation: "useLayoutEffect is useful for measuring layout before the user sees the changes, avoiding flickers.",
    hint: "Before paint."
  },
  {
    id: 39,
    difficulty: "medium",
    category: "basics",
    question: "What are 'Keys' in React primarily used for?",
    options: [
      "Handling keyboard events",
      "Uniquely identifying elements in a collection to help React optimize updates",
      "Encrypting data",
      "Managing API keys"
    ],
    answer: 1,
    explanation: "Keys help React identify which items have changed, been added, or been removed.",
    hint: "Identifier in lists."
  },
  {
    id: 40,
    difficulty: "easy",
    category: "props",
    question: "Which prop is automatically passed to all components by React Router?",
    options: ["state", "history/location/match", "route", "navigator"],
    answer: 1,
    explanation: "Components rendered by a <Route> receive these three props (in older versions) or via hooks in v6.",
    hint: "Navigation context."
  },
  {
    id: 41,
    difficulty: "hard",
    category: "hooks",
    question: "What is 'useCallback' used for?",
    options: [
      "To fetch data from an API",
      "To memoize a function instance to prevent unnecessary re-renders of child components that depend on it",
      "To call a function after render",
      "To handle form submissions"
    ],
    answer: 1,
    explanation: "useCallback caches the function definition itself between renders.",
    hint: "Memoize a 'function'."
  },
  {
    id: 42,
    difficulty: "medium",
    category: "scenarios",
    question: "You want to conditionally render a component only if 'isLoggedIn' is true. What is the most concise way?",
    options: [
      "{isLoggedIn ? <Component /> : null}",
      "{isLoggedIn && <Component />}",
      "if (isLoggedIn) { <Component /> }",
      "Both 0 and 1 are commonly used"
    ],
    answer: 3,
    explanation: "Both the ternary operator and the short-circuit && are valid and common in JSX.",
    hint: "Short-circuiting."
  },
  {
    id: 43,
    difficulty: "hard",
    category: "state",
    question: "In React, what is 'Lifting State Up'?",
    options: [
      "Moving state to a global Redux store",
      "Moving state to the closest common ancestor of components that need it",
      "Passing state from child to parent via props",
      "Creating a state variable in a child component"
    ],
    answer: 1,
    explanation: "When two children need to share the same data, you move that data into their common parent.",
    hint: "Common ancestor."
  },
  {
    id: 44,
    difficulty: "medium",
    category: "basics",
    question: "What is 'Strict Mode' in React?",
    options: [
      "A mode that makes the app run faster",
      "A tool for highlighting potential problems in an application (renders components twice in dev)",
      "A security feature to prevent XSS",
      "A way to enforce TypeScript usage"
    ],
    answer: 1,
    explanation: "StrictMode checks for unsafe lifecycles, legacy API usage, and other warnings during development.",
    hint: "Development check."
  },
  {
    id: 45,
    difficulty: "easy",
    category: "components",
    question: "What is the entry point for a React application's DOM rendering?",
    options: ["ReactDOM.render()", "React.start()", "Browser.render()", "App.init()"],
    answer: 0,
    explanation: "In React 17 and below, ReactDOM.render is the main entry. In React 18, it is createRoot.",
    hint: "DOM rendering method."
  },
  {
    id: 46,
    difficulty: "hard",
    category: "hooks",
    question: "What are the two rules of Hooks?",
    options: [
      "Don't call hooks in loops/conditions; Only call hooks from React functions",
      "Always use 'use' prefix; Hooks must be async",
      "Hooks must be inside classes; Use only one hook per component",
      "No rules apply to hooks"
    ],
    answer: 0,
    explanation: "Hooks must be called at the top level and only in functional components/custom hooks.",
    hint: "Top-level and Functional only."
  },
  {
    id: 47,
    difficulty: "medium",
    category: "lifecycle",
    question: "Which lifecycle method is called just before the component's output is 'flushed' to the DOM?",
    options: ["componentDidUpdate", "getSnapshotBeforeUpdate", "shouldComponentUpdate", "render"],
    answer: 1,
    explanation: "It enables your component to capture some information from the DOM (e.g. scroll position) before it is potentially changed.",
    hint: "Capture DOM info before change."
  },
  {
    id: 48,
    difficulty: "easy",
    category: "jsx",
    question: "Is JSX a valid JavaScript extension?",
    options: ["Yes", "No, it's a syntax extension for JS", "Only in Chrome", "It is a CSS extension"],
    answer: 1,
    explanation: "JSX is a syntax extension that looks like HTML but is actually transformed into React.createElement calls.",
    hint: "Syntax extension."
  },
  {
    id: 49,
    difficulty: "hard",
    category: "performance",
    question: "What does 'React.memo' do?",
    options: [
      "Memoizes the entire application",
      "It is a higher-order component that prevents re-rendering a functional component if its props haven't changed",
      "It creates a new state variable",
      "It clears the browser memory"
    ],
    answer: 1,
    explanation: "React.memo is to functional components what PureComponent is to class components.",
    hint: "Shallow prop check for functions."
  },
  {
    id: 50,
    difficulty: "medium",
    category: "scenarios",
    question: "How do you render a list of numbers from an array [1, 2, 3] as list items?",
    options: [
      "numbers.forEach(n => <li>{n}</li>)",
      "{numbers.map(n => <li key={n}>{n}</li>)}",
      "<ul>numbers</ul>",
      "<List data={numbers} />"
    ],
    answer: 1,
    explanation: "The .map() method is the standard way to transform arrays into JSX elements.",
    hint: "Map the array."
  }
];
/* ======================================================
   REACT CERTIFICATION QUESTION BANK (Batch 2: 51-100)
   Topics: Router, Advanced Hooks, Context, & Portals
   ====================================================== */

const reactBatch2 = [
  {
    id: 51,
    difficulty: "medium",
    category: "routing",
    question: "Which component in React Router v6 is used to define the area where child routes should be rendered?",
    options: ["<Child />", "<Route />", "<Outlet />", "<Switch />"],
    answer: 2,
    explanation: "The <Outlet> component is used in parent route elements to render their child route elements.",
    hint: "Think of an 'exit' or 'opening' for nested content."
  },
  {
    id: 52,
    difficulty: "hard",
    category: "hooks",
    question: "What is the correct way to initialize a useReducer hook?",
    options: [
      "const [state, dispatch] = useReducer(reducer, initialState)",
      "const [state, setState] = useReducer(initialState, reducer)",
      "const state = useReducer(reducer)",
      "const {state, dispatch} = useReducer(reducer, initialState)"
    ],
    answer: 0,
    explanation: "useReducer takes the reducer function and the initial state as arguments, returning the current state and a dispatch function.",
    hint: "Reducer first, state second."
  },
  {
    id: 53,
    difficulty: "medium",
    category: "context",
    question: "What are the two main parts of the Context API?",
    options: [
      "Input and Output",
      "Provider and Consumer",
      "Sender and Receiver",
      "Parent and Child"
    ],
    answer: 1,
    explanation: "The Provider wraps the component tree and holds the value, while the Consumer (or useContext hook) retrieves the value.",
    hint: "One gives, one takes."
  },
  {
    id: 54,
    difficulty: "hard",
    category: "error_boundaries",
    question: "Which lifecycle method must a class component implement to become an Error Boundary?",
    options: [
      "componentDidCatch",
      "static getDerivedStateFromError",
      "Both 0 and 1",
      "componentWillUnmount"
    ],
    answer: 2,
    explanation: "Error boundaries are class components that use either or both of these methods to catch JavaScript errors in their child component tree.",
    hint: "Catching errors at the boundary."
  },
  {
    id: 55,
    difficulty: "medium",
    category: "portals",
    question: "What is 'ReactDOM.createPortal' used for?",
    options: [
      "To speed up the Virtual DOM",
      "To render a child component into a DOM node that exists outside the hierarchy of the parent component",
      "To create a secure login gate",
      "To migrate React to a different browser tab"
    ],
    answer: 1,
    explanation: "Portals are commonly used for modals, tooltips, and floating menus that need to break out of a container's 'overflow: hidden' or z-index.",
    hint: "Rendering outside the parent."
  },
  {
    id: 56,
    difficulty: "hard",
    category: "hooks",
    question: "What is the difference between 'useMemo' and 'useCallback'?",
    options: [
      "useMemo returns a memoized value; useCallback returns a memoized function",
      "useMemo is for classes; useCallback is for functions",
      "There is no difference",
      "useMemo triggers a re-render; useCallback does not"
    ],
    answer: 0,
    explanation: "useCallback(fn, deps) is equivalent to useMemo(() => fn, deps).",
    hint: "Value vs Function."
  },
  {
    id: 57,
    difficulty: "medium",
    category: "routing",
    question: "In React Router v6, which hook is used to programmatically navigate the user?",
    options: ["useHistory", "useNavigate", "useRouting", "useLocation"],
    answer: 1,
    explanation: "useNavigate replaced useHistory in version 6 for a more streamlined API.",
    hint: "The verb for 'moving' the user."
  },
  {
    id: 58,
    difficulty: "hard",
    category: "scenarios",
    question: "A component is re-rendering too often because a context value changes, but this component only needs a small part of that value. How can you optimize this?",
    options: [
      "Split the context into smaller, more specific contexts",
      "Use React.memo on the component",
      "Use useMemo to memoize the component's return value",
      "All of the above"
    ],
    answer: 3,
    explanation: "Context optimizations often require splitting state or using memoization techniques to prevent unnecessary downstream renders.",
    hint: "Granular context or memoization."
  },
  {
    id: 59,
    difficulty: "medium",
    category: "hooks",
    question: "Which hook provides access to the current location object, representing the URL?",
    options: ["useParams", "useLocation", "useUrl", "useHistory"],
    answer: 1,
    explanation: "useLocation returns the location object that represents the current URL, useful for tracking page views.",
    hint: "Where are we now?"
  },
  {
    id: 60,
    difficulty: "hard",
    category: "performance",
    question: "What is 'Code Splitting' in React?",
    options: [
      "Writing CSS in a separate file",
      "Breaking a component into multiple functions",
      "The process of lazy loading parts of the application to reduce the initial bundle size",
      "Splitting the database into shards"
    ],
    answer: 2,
    explanation: "React.lazy and dynamic imports allow you to load components only when they are needed.",
    hint: "Lazy loading."
  },
  {
    id: 61,
    difficulty: "medium",
    category: "components",
    question: "What are 'Render Props'?",
    options: [
      "Props used to style the component",
      "A technique for sharing code between components using a prop whose value is a function",
      "Props that are rendered as HTML attributes",
      "The default props of a component"
    ],
    answer: 1,
    explanation: "A component with a render prop takes a function that returns a React element and calls it instead of implementing its own render logic.",
    hint: "Passing a function as a prop."
  },
  {
    id: 62,
    difficulty: "hard",
    category: "hooks",
    question: "What does 'useImperativeHandle' do?",
    options: [
      "It makes the component faster",
      "It customizes the instance value that is exposed to parent components when using 'ref'",
      "It forces the component to render",
      "It handles API errors"
    ],
    answer: 1,
    explanation: "It is used with forwardRef to limit what a parent can do with a child's ref.",
    hint: "Customizing ref exposure."
  },
  {
    id: 63,
    difficulty: "easy",
    category: "routing",
    question: "Which component is used to create links that allow users to navigate to different routes?",
    options: ["<a>", "<Link>", "<Navigate>", "<Route>"],
    answer: 1,
    explanation: "<Link> prevents a full page reload, unlike a standard <a> tag.",
    hint: "The React Router alternative to <a>."
  },
  {
    id: 64,
    difficulty: "hard",
    category: "lifecycle",
    question: "Which method is called if 'shouldComponentUpdate' returns false?",
    options: ["render()", "componentDidUpdate()", "None of these", "componentWillUpdate()"],
    answer: 2,
    explanation: "If shouldComponentUpdate returns false, the render and subsequent lifecycle methods are skipped.",
    hint: "Nothing happens."
  },
  {
    id: 65,
    difficulty: "medium",
    category: "context",
    question: "What is the value of a Context if no Provider is found in the parent tree?",
    options: [
      "null",
      "undefined",
      "The default value passed to 'createContext()'",
      "An error is thrown"
    ],
    answer: 2,
    explanation: "createContext(defaultValue) establishes the fallback value.",
    hint: "The initial fallback."
  },
  {
    id: 66,
    difficulty: "hard",
    category: "hooks",
    question: "Can 'useEffect' return a Promise (i.e., be an async function)?",
    options: [
      "Yes",
      "No, it must return a cleanup function or nothing",
      "Only if it's the only hook in the component",
      "Only in React 18+"
    ],
    answer: 1,
    explanation: "useEffect cannot be async because the return value is reserved for the cleanup function. You should define the async function inside the effect.",
    hint: "Return value is for cleanup."
  },
  {
    id: 67,
    difficulty: "medium",
    category: "scenarios",
    question: "How do you capture URL parameters like ':id' in a route?",
    options: ["useLocation", "useParams", "useRoute", "useId"],
    answer: 1,
    explanation: "useParams returns an object of key/value pairs of URL parameters.",
    hint: "Parameters hook."
  },
  {
    id: 68,
    difficulty: "hard",
    category: "performance",
    question: "What is the benefit of 'React.Suspense'?",
    options: [
      "It pauses the application when an error occurs",
      "It allows you to display a fallback UI (like a loader) while waiting for lazy-loaded components",
      "It improves the speed of CSS",
      "It manages global state"
    ],
    answer: 1,
    explanation: "Suspense coordinates the 'loading' states of components further down the tree.",
    hint: "Fallback while waiting."
  },
  {
    id: 69,
    difficulty: "medium",
    category: "forms",
    question: "What is a 'Ref' in React?",
    options: [
      "A way to refer to other components",
      "A way to directly access a DOM element or an instance of a component",
      "The reference manual for React",
      "A type of state"
    ],
    answer: 1,
    explanation: "Refs are used when you need to trigger an animation, focus an input, or integrate with third-party DOM libraries.",
    hint: "Direct DOM access."
  },
  {
    id: 70,
    difficulty: "hard",
    category: "scenarios",
    question: "You want to render a component at the end of the <body> tag regardless of where it is called. What do you use?",
    options: ["React.lazy", "React.Fragment", "ReactDOM.createPortal", "useContext"],
    answer: 2,
    explanation: "Portals allow you to render children into a different part of the DOM tree.",
    hint: "The 'teleport' tool."
  },
  {
    id: 71,
    difficulty: "medium",
    category: "routing",
    question: "Which component acts as a container for all <Route> definitions in v6?",
    options: ["<Router>", "<Routes>", "<Switch>", "<Map>"],
    answer: 1,
    explanation: "<Routes> replaced <Switch> in React Router v6.",
    hint: "Plural of Route."
  },
  {
    id: 72,
    difficulty: "hard",
    category: "hooks",
    question: "What happens if you omit the dependency array in 'useEffect'? ",
    options: [
      "The effect runs only once",
      "The effect runs on every single render",
      "The effect never runs",
      "It causes a syntax error"
    ],
    answer: 1,
    explanation: "Without an array, React has no way to know when to skip the effect, so it runs it after every render.",
    hint: "No filter."
  },
  {
    id: 73,
    difficulty: "medium",
    category: "basics",
    question: "What is the 'Prop Drilling' problem?",
    options: [
      "Passing props to a child component",
      "The process of passing data through many levels of components that don't need it",
      "A method to optimize props",
      "An error caused by too many props"
    ],
    answer: 1,
    explanation: "Prop drilling makes code harder to maintain and refactor; Context or State Management solves this.",
    hint: "Passing through middlemen."
  },
  {
    id: 74,
    difficulty: "hard",
    category: "performance",
    question: "When using 'React.lazy', what is the requirement for the component being imported?",
    options: [
      "It must be a class component",
      "It must be exported as a default export",
      "It must have a 'lazy' prefix",
      "It must be inside the 'src' folder"
    ],
    answer: 1,
    explanation: "React.lazy currently only supports default exports.",
    hint: "Default export."
  },
  {
    id: 75,
    difficulty: "medium",
    category: "hooks",
    question: "How can you access the context value in a functional component?",
    options: ["context.value", "this.context", "useContext(MyContext)", "Consumer(MyContext)"],
    answer: 2,
    explanation: "useContext is the standard hook for consuming context values.",
    hint: "Context hook."
  },
  {
    id: 76,
    difficulty: "hard",
    category: "scenarios",
    question: "How do you pass a ref to a child functional component?",
    options: [
      "As a standard prop named 'ref'",
      "Using the 'forwardRef' higher-order component",
      "Using 'useContext'",
      "It is not possible"
    ],
    answer: 1,
    explanation: "Functional components don't have instances, so they need forwardRef to pass the ref through to a DOM element.",
    hint: "Moving the ref forward."
  },
  {
    id: 77,
    difficulty: "medium",
    category: "routing",
    question: "In v6, how do you specify a catch-all route (404 page)?",
    options: [
      "<Route path='*' element={<NotFound />} />",
      "<Route path='404' element={<NotFound />} />",
      "<Route default element={<NotFound />} />",
      "<Route path='/' element={<NotFound />} />"
    ],
    answer: 0,
    explanation: "The '*' wildcard matches any URL that hasn't been matched by previous routes.",
    hint: "Wildcard path."
  },
  {
    id: 78,
    difficulty: "hard",
    category: "hooks",
    question: "In 'useReducer', what is the purpose of the 'dispatch' function?",
    options: [
      "To update the state directly",
      "To send an action object to the reducer to trigger a state update",
      "To delete the state",
      "To log errors"
    ],
    answer: 1,
    explanation: "Dispatch 'dispatches' an action (e.g., { type: 'increment' }) which the reducer then processes.",
    hint: "Sending the action."
  },
  {
    id: 79,
    difficulty: "medium",
    category: "error_boundaries",
    question: "Do Error Boundaries catch errors inside event handlers?",
    options: ["Yes", "No", "Only in development", "Only if specifically configured"],
    answer: 1,
    explanation: "Error boundaries do not catch errors in event handlers, asynchronous code, or server-side rendering.",
    hint: "Rendering phase only."
  },
  {
    id: 80,
    difficulty: "hard",
    category: "scenarios",
    question: "You need to perform a side effect that depends on a value from props. Where should you put it in a functional component?",
    options: ["Inside the render body", "In a 'useEffect' hook with the prop in the dependency array", "In a 'useMemo' hook", "In the constructor"],
    answer: 1,
    explanation: "Putting the prop in the dependency array ensures the effect re-runs whenever that specific prop changes.",
    hint: "Reactive effect."
  },
  {
    id: 81,
    difficulty: "medium",
    category: "performance",
    question: "Which React 18 feature allows you to mark certain updates as non-urgent?",
    options: ["useDeferredValue", "useTransition", "useNonUrgent", "Suspense"],
    answer: 1,
    explanation: "useTransition allows you to keep the UI responsive during heavy updates by prioritizing urgent tasks (like typing).",
    hint: "Transitioning state."
  },
  {
    id: 82,
    difficulty: "hard",
    category: "routing",
    question: "How do you protect a route (Private Route) in React Router v6?",
    options: [
      "Using a 'private' attribute on <Route>",
      "By creating a wrapper component that checks authentication and returns the <Outlet /> or <Navigate />",
      "Using a password on the route",
      "React Router does not support this"
    ],
    answer: 1,
    explanation: "You wrap protected routes in a component that performs a conditional check on the user's auth status.",
    hint: "Wrapper component check."
  },
  {
    id: 83,
    difficulty: "medium",
    category: "hooks",
    question: "What is 'useDebugValue' used for?",
    options: [
      "To print logs to the console",
      "To display a label for custom hooks in React DevTools",
      "To debug performance issues",
      "To check for memory leaks"
    ],
    answer: 1,
    explanation: "It is strictly for a better debugging experience in the DevTools browser extension.",
    hint: "DevTools label."
  },
  {
    id: 84,
    difficulty: "hard",
    category: "scenarios",
    question: "You have a list that updates frequently. You want to delay the update of a non-critical UI element to keep the main input snappy. Which React 18 hook helps?",
    options: ["useMemo", "useDeferredValue", "useCallback", "useId"],
    answer: 1,
    explanation: "useDeferredValue allows you to 'defer' re-rendering a part of the tree until the main thread is less busy.",
    hint: "Deferred update."
  },
  {
    id: 85,
    difficulty: "medium",
    category: "components",
    question: "What is 'Forwarding Refs'?",
    options: [
      "Automatically sending refs to all children",
      "An opt-in feature that lets some components take a ref they receive, and pass it further down to a child",
      "A way to speed up the app",
      "Sending refs to an API"
    ],
    answer: 1,
    explanation: "It uses React.forwardRef to allow a component to expose a DOM node of a child to the parent.",
    hint: "Passing the ref down."
  },
  {
    id: 6,
    difficulty: "hard",
    category: "hooks",
    question: "When using 'useReducer', what is the 'init' function (the 3rd argument)?",
    options: [
      "A function to call after every update",
      "A function to calculate the initial state lazily",
      "A function to log errors",
      "A function to fetch data"
    ],
    answer: 1,
    explanation: "If you provide a 3rd argument, the initial state is set to init(initialArg).",
    hint: "Lazy initialization."
  },
  {
    id: 87,
    difficulty: "medium",
    category: "routing",
    question: "Which component is used to navigate the user to a different route on mount (redirect)?",
    options: ["<Redirect>", "<Link>", "<Navigate>", "<GoTo>"],
    answer: 2,
    explanation: "In React Router v6, <Navigate> is used for declarative redirects.",
    hint: "Replacement for <Redirect>."
  },
  {
    id: 88,
    difficulty: "hard",
    category: "scenarios",
    question: "In a class component, if you need to perform a side effect after the state is updated and the component re-rendered, where should you do it?",
    options: [
      "Inside the render method",
      "In the second argument (callback) of this.setState()",
      "In componentWillUpdate",
      "In the constructor"
    ],
    answer: 1,
    explanation: "setState takes an optional callback that runs after the update is committed.",
    hint: "setState callback."
  },
  {
    id: 89,
    difficulty: "medium",
    category: "hooks",
    question: "What does 'useId' (React 18) provide?",
    options: [
      "A unique database ID",
      "A unique ID for accessibility attributes, stable across server and client",
      "A random number",
      "The ID of the component instance"
    ],
    answer: 1,
    explanation: "It generates unique IDs that are safe for use in aria-attributes, avoiding collisions.",
    hint: "Unique accessibility IDs."
  },
  {
    id: 90,
    difficulty: "hard",
    category: "performance",
    question: "What is 'Hydration' in React?",
    options: [
      "Cleaning the memory",
      "The process of attaching event listeners to the HTML rendered by the server",
      "Loading images",
      "Updating the state from a database"
    ],
    answer: 1,
    explanation: "In SSR, the browser receives the HTML and 'hydrates' it to make it interactive with React.",
    hint: "Making HTML interactive."
  },
  {
    id: 91,
    difficulty: "medium",
    category: "routing",
    question: "How do you create a nested route in React Router v6?",
    options: [
      "By placing <Route> components inside other <Route> components",
      "By using a comma-separated list in 'path'",
      "Nested routes are not supported",
      "Using the <Nested> tag"
    ],
    answer: 0,
    explanation: "Routes can be nested to match segments of the URL and share layouts.",
    hint: "Routes within Routes."
  },
  {
    id: 92,
    difficulty: "hard",
    category: "hooks",
    question: "What happens if a custom hook doesn't start with 'use'?",
    options: [
      "It won't work",
      "React will not be able to automatically check for violations of rules of hooks",
      "It will be faster",
      "It will only work in classes"
    ],
    answer: 1,
    explanation: "The 'use' prefix is a convention that allows linting tools to identify and enforce hook rules.",
    hint: "Linter requirement."
  },
  {
    id: 93,
    difficulty: "medium",
    category: "scenarios",
    question: "A user submits a form and you want to redirect them to a 'success' page. Which is the best approach?",
    options: [
      "Use <Link> inside the submit handler",
      "Call navigate('/success') from 'useNavigate' inside the submit handler",
      "Manually change window.location.href",
      "Refresh the page"
    ],
    answer: 1,
    explanation: "Programmatic navigation using useNavigate is the standard way to redirect after an action.",
    hint: "Programmatic navigate."
  },
  {
    id: 94,
    difficulty: "hard",
    category: "performance",
    question: "How does 'Concurrent Rendering' (React 18) improve user experience?",
    options: [
      "By rendering everything at once",
      "By allowing React to interrupt a long-running render to handle a high-priority event (like a click)",
      "By removing the Virtual DOM",
      "By making the app run on multiple threads"
    ],
    answer: 1,
    explanation: "React can now prepare multiple versions of the UI in the background without blocking the main thread.",
    hint: "Interruptible rendering."
  },
  {
    id: 95,
    difficulty: "medium",
    category: "forms",
    question: "What is the recommended way to handle multiple input fields in a controlled form?",
    options: [
      "Create a separate useState for every input",
      "Use a single state object and the 'name' attribute of the inputs to update the correct key",
      "Use only refs",
      "Forms should always be uncontrolled"
    ],
    answer: 1,
    explanation: "By using [event.target.name]: event.target.value, you can handle any number of inputs with one function.",
    hint: "Computed property names."
  },
  {
    id: 96,
    difficulty: "hard",
    category: "hooks",
    question: "When should you use 'useSyncExternalStore'?",
    options: [
      "To fetch data from a REST API",
      "To subscribe to an external data store (like Redux or a browser API) while maintaining concurrency safety",
      "To sync data between two components",
      "To save data to local storage"
    ],
    answer: 1,
    explanation: "It is a specialized hook for library authors to ensure state consistency during concurrent rendering.",
    hint: "External store synchronization."
  },
  {
    id: 97,
    difficulty: "medium",
    category: "context",
    question: "Can a component subscribe to multiple contexts?",
    options: ["Yes", "No", "Only in class components", "Only using Redux"],
    answer: 0,
    explanation: "You can call useContext multiple times or nest multiple Consumers.",
    hint: "Multiple useContext calls."
  },
  {
    id: 98,
    difficulty: "hard",
    category: "performance",
    question: "What is 'Tree Shaking'?",
    options: [
      "Removing old components from the DOM",
      "A build-step optimization that removes unused code from the final bundle",
      "The reconciliation algorithm",
      "Refreshing the dev server"
    ],
    answer: 1,
    explanation: "Modern bundlers like Webpack/Vite use tree shaking to keep the bundle size small.",
    hint: "Dead code elimination."
  },
  {
    id: 99,
    difficulty: "medium",
    category: "routing",
    question: "How do you define a route that matches '/user/settings' using nesting?",
    options: [
      "<Route path='user'><Route path='settings' /></Route>",
      "<Route path='user/settings' />",
      "Both are valid, but the first allows for shared layouts",
      "Neither is valid"
    ],
    answer: 2,
    explanation: "Nesting is preferred when the 'user' segment has a layout (like a sidebar) shared by 'settings' and other sub-pages.",
    hint: "Nested vs flat paths."
  },
  {
    id: 100,
    difficulty: "hard",
    category: "basics",
    question: "What is 'Shadow DOM' and is it the same as 'Virtual DOM'?",
    options: [
      "Yes, they are the same",
      "No; Shadow DOM is a browser technology for scoping styles/markup; Virtual DOM is a React concept for performance",
      "Shadow DOM is React's version of Virtual DOM",
      "Virtual DOM is obsolete"
    ],
    answer: 1,
    explanation: "Virtual DOM is a pattern; Shadow DOM is a specific Web Component standard.",
    hint: "Browser tech vs React pattern."
  }
];
/* ======================================================
   REACT CERTIFICATION QUESTION BANK (Batch 3: 101-150)
   Topics: Testing, Redux, & Styling
   ====================================================== */

const reactBatch3 = [
  {
    id: 101,
    difficulty: "medium",
    category: "testing",
    question: "Which library is the most commonly recommended by the React team for testing component behavior?",
    options: ["Enzyme", "React Testing Library", "Jasmine", "Mocha"],
    answer: 1,
    explanation: "React Testing Library (RTL) encourages testing components based on how a user interacts with them rather than internal implementation details.",
    hint: "RTL."
  },
  {
    id: 102,
    difficulty: "easy",
    category: "redux",
    question: "What is the 'Store' in Redux?",
    options: [
      "The place where you buy React components",
      "A single source of truth that holds the entire state tree of your application",
      "A database in the cloud",
      "A local storage file"
    ],
    answer: 1,
    explanation: "Redux uses a single store to manage the state for the entire application, making it easier to track changes.",
    hint: "Single source of truth."
  },
  {
    id: 103,
    difficulty: "hard",
    category: "styling",
    question: "What is a primary advantage of using Styled Components (CSS-in-JS)?",
    options: [
      "It makes CSS run faster in the browser",
      "It allows you to scope styles to specific components, avoiding global namespace collisions",
      "It removes the need for a web server",
      "It automatically generates responsive design without media queries"
    ],
    answer: 1,
    explanation: "Styled Components generate unique class names for your styles, ensuring no style leakage between components.",
    hint: "Scoped styling."
  },
  {
    id: 104,
    difficulty: "medium",
    category: "testing",
    question: "What does the 'render' function from React Testing Library return?",
    options: [
      "The HTML string of the component",
      "An object containing utility functions like 'getByText' and 'queryByRole'",
      "A boolean indicating if the test passed",
      "The Virtual DOM tree"
    ],
    answer: 1,
    explanation: "The render result provides queries to find elements in the rendered output for assertions.",
    hint: "Query utilities."
  },
  {
    id: 105,
    difficulty: "hard",
    category: "redux",
    question: "In Redux Toolkit, what is a 'Slice'?",
    options: [
      "A piece of the Virtual DOM",
      "A collection of Redux reducer logic and actions for a single feature",
      "A way to divide the CSS files",
      "A specific type of React Hook"
    ],
    answer: 1,
    explanation: "createSlice simplifies Redux by auto-generating action creators and action types based on the reducers you provide.",
    hint: "Feature-based logic bundle."
  },
  {
    id: 106,
    difficulty: "medium",
    category: "styling",
    question: "How do you apply inline styles in React?",
    options: [
      "style='color: red'",
      "style={{ color: 'red' }}",
      "className='red-text'",
      "css={color: red}"
    ],
    answer: 1,
    explanation: "Inline styles are passed as a JavaScript object. The outer braces indicate a JS expression, the inner ones define the object.",
    hint: "Object inside braces."
  },
  {
    id: 107,
    difficulty: "hard",
    category: "scenarios",
    question: "You want to test if a button click calls a specific function. Which tool should you use to create a 'fake' function?",
    options: ["jest.mock()", "jest.fn()", "jest.spy()", "jest.fake()"],
    answer: 1,
    explanation: "jest.fn() creates a mock function that tracks calls, arguments, and return values.",
    hint: "Mock function creator."
  },
  {
    id: 108,
    difficulty: "medium",
    category: "redux",
    question: "Which hook is used to extract data from the Redux store state?",
    options: ["useDispatch", "useSelector", "useStore", "useState"],
    answer: 1,
    explanation: "useSelector takes a selector function to grab specific slices of state from the store.",
    hint: "Selecting state."
  },
  {
    id: 109,
    difficulty: "hard",
    category: "testing",
    question: "What is the difference between 'getBy...' and 'queryBy...' in React Testing Library?",
    options: [
      "There is no difference",
      "getBy throws an error if the element is not found; queryBy returns null",
      "queryBy is faster",
      "getBy is for classes only"
    ],
    answer: 1,
    explanation: "Use queryBy when you want to assert that an element is NOT in the document.",
    hint: "Error vs Null."
  },
  {
    id: 110,
    difficulty: "medium",
    category: "styling",
    question: "What are CSS Modules in React?",
    options: [
      "A way to write CSS in JS files",
      "CSS files where class names are scoped locally to the component by default",
      "A plugin for Chrome",
      "A type of React Component"
    ],
    answer: 1,
    explanation: "CSS Modules allow you to use the same class names in different files without conflicts.",
    hint: "Locally scoped CSS files."
  },
  {
    id: 111,
    difficulty: "hard",
    category: "redux",
    question: "How does Redux Toolkit's 'createAsyncThunk' handle lifecycle actions?",
    options: [
      "It doesn't handle them",
      "It automatically dispatches 'pending', 'fulfilled', and 'rejected' actions",
      "It deletes the state on error",
      "It only works with fetch()"
    ],
    answer: 1,
    explanation: "AsyncThunk simplifies side-effect logic by providing standard action types for the start, success, and failure of promises.",
    hint: "Promise lifecycle actions."
  },
  {
    id: 112,
    difficulty: "medium",
    category: "testing",
    question: "What is 'Snapshot Testing' in Jest?",
    options: [
      "Taking a screenshot of the app",
      "Comparing the rendered component output to a previously saved 'snapshot' file",
      "Testing the speed of the app",
      "Testing the database"
    ],
    answer: 1,
    explanation: "Snapshots help detect unexpected UI changes by alerting you when the rendered markup shifts.",
    hint: "Comparing UI 'photos'."
  },
  {
    id: 113,
    difficulty: "hard",
    category: "scenarios",
    question: "In Redux, what is the 'Reducer's' primary rule?",
    options: [
      "It must be an asynchronous function",
      "It must be a pure function (no side effects, returns new state instead of mutating)",
      "It must be inside a React component",
      "It must use 'this.setState'"
    ],
    answer: 1,
    explanation: "Reducers must not mutate the existing state. They should return a copy with the updates applied.",
    hint: "Pure function."
  },
  {
    id: 114,
    difficulty: "medium",
    category: "styling",
    question: "In Tailwind CSS, how do you apply styles to a React component?",
    options: [
      "Using the 'style' prop",
      "Using standard CSS utility classes in the 'className' prop",
      "Using a 'tailwind' attribute",
      "Writing CSS in the JS file"
    ],
    answer: 1,
    explanation: "Tailwind uses utility classes like 'flex', 'pt-4', and 'text-center' directly in the JSX markup.",
    hint: "Utility classes."
  },
  {
    id: 115,
    difficulty: "hard",
    category: "testing",
    question: "Which query should you prefer in React Testing Library to follow accessibility best practices?",
    options: ["getByTestId", "getByClassName", "getByRole", "getById"],
    answer: 2,
    explanation: "getByRole mimics how assistive technology (like screen readers) perceives the page.",
    hint: "Accessibility-first query."
  },
  {
    id: 116,
    difficulty: "easy",
    category: "redux",
    question: "What is an 'Action' in Redux?",
    options: [
      "A function that changes the DOM",
      "A plain JavaScript object that describes 'what happened'",
      "A mouse click",
      "A type of CSS animation"
    ],
    answer: 1,
    explanation: "Actions must have a 'type' property and can optionally carry a 'payload'.",
    hint: "Event description object."
  },
  {
    id: 117,
    difficulty: "hard",
    category: "scenarios",
    question: "Your Redux state is updating, but the UI is not re-rendering. What is the most likely cause?",
    options: [
      "The store is too large",
      "You are mutating the state directly in the reducer instead of returning a new object",
      "The browser is outdated",
      "You forgot to use 'useMemo'"
    ],
    answer: 1,
    explanation: "React-Redux checks for reference changes. If you mutate state, the reference remains the same, and React thinks nothing changed.",
    hint: "Reference equality check."
  },
  {
    id: 118,
    difficulty: "medium",
    category: "testing",
    question: "What is the purpose of 'fireEvent' or 'userEvent' in tests?",
    options: [
      "To style the test report",
      "To simulate user interactions like clicking, typing, or hovering",
      "To restart the test runner",
      "To clear the cache"
    ],
    answer: 1,
    explanation: "These utilities allow you to trigger DOM events to see how the component reacts.",
    hint: "Simulating interaction."
  },
  {
    id: 119,
    difficulty: "hard",
    category: "redux",
    question: "What does 'Middleware' (like Redux Thunk) allow you to do in Redux?",
    options: [
      "Connect Redux to CSS",
      "Write action creators that return a function instead of an action object (for async logic)",
      "Speed up the Reducer",
      "Encrypt the store"
    ],
    answer: 1,
    explanation: "Thunk middleware allows you to perform asynchronous tasks (like API calls) before dispatching a real action.",
    hint: "Async actions support."
  },
  {
    id: 120,
    difficulty: "medium",
    category: "styling",
    question: "How do you pass a prop to a Styled Component to change its color dynamically?",
    options: [
      "It is not possible",
      "Using a template literal function: ${props => props.color}",
      "By using the 'style' prop on the Styled Component",
      "By rewriting the CSS file"
    ],
    answer: 1,
    explanation: "Styled Components can access props within their template literals to apply conditional logic.",
    hint: "Template literal interpolation."
  },
  {
    id: 121,
    difficulty: "hard",
    category: "testing",
    question: "What is 'Mocking' an API call in testing?",
    options: [
      "Calling the real API every time",
      "Replacing the real API call with a controlled 'fake' response to ensure test stability and speed",
      "Ignoring the API entirely",
      "Deleting the network tab"
    ],
    answer: 1,
    explanation: "Mocking prevents tests from failing due to external network issues and allows you to test edge cases (like 500 errors).",
    hint: "Fake network response."
  },
  {
    id: 122,
    difficulty: "medium",
    category: "redux",
    question: "Which Redux Toolkit function is used to create the store?",
    options: ["createStore", "configureStore", "initStore", "setupStore"],
    answer: 1,
    explanation: "configureStore is the modern replacement for createStore; it automatically sets up DevTools and Thunk.",
    hint: "RTK store setup."
  },
  {
    id: 123,
    difficulty: "hard",
    category: "scenarios",
    question: "You need to test a component that uses 'useContext'. How do you provide the context value in a test?",
    options: [
      "You cannot test it",
      "Wrap the component in the Context Provider within the 'render' function of your test",
      "Modify the component's source code",
      "Use 'jest.mockContext()'"
    ],
    answer: 1,
    explanation: "Just like in the app, the component needs to be a child of a Provider to access context values.",
    hint: "Wrap in Provider."
  },
  {
    id: 124,
    difficulty: "medium",
    category: "styling",
    question: "What is 'SASS' or 'SCSS' and can it be used with React?",
    options: [
      "A database; no",
      "A CSS preprocessor; yes, via loaders or built-in support in tools like Vite/CRA",
      "A type of React hook; yes",
      "An alternative to JavaScript; no"
    ],
    answer: 1,
    explanation: "SASS adds features like variables and nesting to CSS, which are compiled into standard CSS for React.",
    hint: "CSS Preprocessor."
  },
  {
    id: 125,
    difficulty: "hard",
    category: "redux",
    question: "What is 'Immer' and how does Redux Toolkit use it?",
    options: [
      "A testing library; it doesn't",
      "A library that allows you to write 'mutative' code that is actually turned into immutable updates; used internally by createSlice",
      "A styling tool; used for themes",
      "A routing tool; handles URLs"
    ],
    answer: 1,
    explanation: "Immer lets you write 'state.value = 1' instead of '{...state, value: 1}', making code cleaner without breaking Redux rules.",
    hint: "Writing 'mutable' logic safely."
  },
  {
    id: 126,
    difficulty: "easy",
    category: "testing",
    question: "What does the 'expect()' function do in Jest?",
    options: ["It starts the test", "It defines an assertion (the expected outcome)", "It logs a message", "It closes the browser"],
    answer: 1,
    explanation: "Expect is the starting point for testing if a value meets certain conditions (matchers).",
    hint: "Assertions."
  },
  {
    id: 127,
    difficulty: "medium",
    category: "scenarios",
    question: "How do you handle a Redux action that needs to update state in multiple slices?",
    options: [
      "You can't; actions are slice-specific",
      "Using 'extraReducers' in each slice to listen for that specific action type",
      "By creating a global reducer",
      "By calling dispatch twice"
    ],
    answer: 1,
    explanation: "ExtraReducers allow a slice to respond to actions defined in other slices or elsewhere in the app.",
    hint: "Listen to external actions."
  },
  {
    id: 128,
    difficulty: "hard",
    category: "testing",
    question: "In React Testing Library, what is 'waitFor' used for?",
    options: [
      "To pause the test indefinitely",
      "To wait for an asynchronous change in the DOM before proceeding with assertions",
      "To wait for the user to click",
      "To slow down the test execution"
    ],
    answer: 1,
    explanation: "waitFor retries the assertion until it passes or times out, perfect for testing API data loads.",
    hint: "Async polling utility."
  },
  {
    id: 129,
    difficulty: "medium",
    category: "redux",
    question: "What are 'Redux DevTools' used for?",
    options: [
      "To write code faster",
      "To inspect state changes, 'time-travel' through actions, and debug store logic in the browser",
      "To host the app",
      "To compress images"
    ],
    answer: 1,
    explanation: "It provides a visual timeline of every action dispatched and how it affected the state.",
    hint: "Time-travel debugging."
  },
  {
    id: 130,
    difficulty: "hard",
    category: "styling",
    question: "What is the 'CSS-in-JS' approach?",
    options: [
      "Putting CSS files in a 'js' folder",
      "Writing CSS styles using JavaScript, often within the component files themselves",
      "Using inline styles for everything",
      "A way to convert JS to CSS"
    ],
    answer: 1,
    explanation: "Libraries like Styled Components and Emotion fall under this category.",
    hint: "Styles inside JS."
  },
  {
    id: 131,
    difficulty: "medium",
    category: "testing",
    question: "Which Jest matcher is used to check if an array contains a specific item?",
    options: ["toBe()", "toEqual()", "toContain()", "toHaveProperty()"],
    answer: 2,
    explanation: "toContain checks for the presence of an item in a collection.",
    hint: "Contains."
  },
  {
    id: 132,
    difficulty: "hard",
    category: "redux",
    question: "What is a 'Selector' in Redux?",
    options: [
      "A dropdown menu in the UI",
      "A function that accepts the state and returns a specific piece or derived version of it",
      "A CSS selector",
      "An action creator"
    ],
    answer: 1,
    explanation: "Selectors help keep the component decoupled from the exact structure of the state tree.",
    hint: "State extraction function."
  },
  {
    id: 133,
    difficulty: "medium",
    category: "scenarios",
    question: "How do you test a component that uses React Router hooks like 'useNavigate'?",
    options: [
      "You cannot test it",
      "Wrap the component in a 'MemoryRouter' in your test",
      "Mock the entire 'react-router-dom' library",
      "Use window.location"
    ],
    answer: 1,
    explanation: "MemoryRouter is a wrapper that simulates routing history in memory for testing environments.",
    hint: "In-memory router."
  },
  {
    id: 134,
    difficulty: "hard",
    category: "redux",
    question: "What is 'Serialization' in Redux and why is it important?",
    options: [
      "Making actions happen in order",
      "Converting state to a string-like format; it's important for DevTools and persistence",
      "A security feature",
      "A type of routing"
    ],
    answer: 1,
    explanation: "Redux recommends only putting serializable data (no functions, promises, or class instances) in the store.",
    hint: "Plain data only."
  },
  {
    id: 135,
    difficulty: "medium",
    category: "testing",
    question: "What does 'cleanup' do in React Testing Library?",
    options: [
      "Deletes the code",
      "Unmounts React trees that were mounted with render to prevent memory leaks and test cross-talk",
      "Clears the console",
      "Resets the state"
    ],
    answer: 1,
    explanation: "RTL usually does this automatically after each test.",
    hint: "Post-test unmounting."
  },
  {
    id: 136,
    difficulty: "hard",
    category: "styling",
    question: "How do you create a global style with Styled Components?",
    options: [
      "Write it in index.css",
      "Use the 'createGlobalStyle' utility",
      "Apply styles to the 'body' tag in a component",
      "It's not possible"
    ],
    answer: 1,
    explanation: "createGlobalStyle creates a special component that, when rendered, injects global styles into the document.",
    hint: "Global style utility."
  },
  {
    id: 137,
    difficulty: "medium",
    category: "redux",
    question: "What is the 'Payload' in a Redux action?",
    options: [
      "The name of the action",
      "The additional data sent along with the action type to update the state",
      "The weight of the application",
      "The return value of the reducer"
    ],
    answer: 1,
    explanation: "If you want to 'Add User', the payload would be the actual user object.",
    hint: "Data packet."
  },
  {
    id: 138,
    difficulty: "hard",
    category: "testing",
    question: "What is the purpose of 'act()' in React tests?",
    options: [
      "To make the test run faster",
      "To ensure that all updates (state, effects) have been processed and applied to the DOM before making assertions",
      "To simulate a user action",
      "To define the test name"
    ],
    answer: 1,
    explanation: "RTL wraps most calls in act() automatically, but you may need it for custom async logic.",
    hint: "Update processing wrapper."
  },
  {
    id: 139,
    difficulty: "medium",
    category: "scenarios",
    question: "In Redux Toolkit, how do you handle multiple async thunks in a single slice?",
    options: [
      "You can only have one thunk per slice",
      "Add them all as entries in the 'extraReducers' object",
      "Combine them into one big function",
      "Use the 'combineThunks' utility"
    ],
    answer: 1,
    explanation: "extraReducers can handle as many thunks and action types as needed.",
    hint: "Multi-entry extraReducers."
  },
  {
    id: 140,
    difficulty: "hard",
    category: "scenarios",
    question: "How can you debug a failing test in a visual way?",
    options: [
      "console.log('here')",
      "Use the 'screen.debug()' method to print the current DOM state to the console",
      "Wait for the error message",
      "Check the browser"
    ],
    answer: 1,
    explanation: "screen.debug() prints a formatted version of the current DOM, helping you see what RTL 'sees'.",
    hint: "Print DOM to terminal."
  },
  {
    id: 141,
    difficulty: "medium",
    category: "styling",
    question: "What is 'Object-Oriented CSS' (OOCSS) and is it relevant to React?",
    options: [
      "No",
      "Yes, it's a methodology of separating structure from skin, which aligns well with component-based design",
      "It's a type of JS object",
      "It's an outdated database"
    ],
    answer: 1,
    explanation: "Components naturally encourage the OOCSS approach of reusable styles.",
    hint: "Structure vs Skin separation."
  },
  {
    id: 142,
    difficulty: "hard",
    category: "testing",
    question: "What is 'User-Event' library vs 'FireEvent'?",
    options: [
      "They are the same",
      "user-event is built on top of fireEvent but provides a more realistic simulation of browser interactions",
      "fireEvent is for mobile only",
      "user-event is for servers only"
    ],
    answer: 1,
    explanation: "user-event simulates things like focus and keydown events that happen when a user actually types, whereas fireEvent just triggers the change event.",
    hint: "More realistic simulation."
  },
  {
    id: 143,
    difficulty: "medium",
    category: "redux",
    question: "Can you dispatch an action from inside a Reducer?",
    options: ["Yes", "No, reducers must be pure and only calculate the next state", "Only if it's an async action", "Only in development"],
    answer: 1,
    explanation: "A reducer should only be a calculation. Side effects like dispatching further actions belong in middleware or components.",
    hint: "Reducers are passive calculations."
  },
  {
    id: 144,
    difficulty: "hard",
    category: "styling",
    question: "What is the 'styled-system' library used for?",
    options: [
      "To manage Redux state",
      "To build design systems by providing style props (like 'color', 'space') that map to a theme object",
      "To speed up CSS loading",
      "To create animations"
    ],
    answer: 1,
    explanation: "It allows you to write <Box m={2} color='primary' /> directly in your JSX.",
    hint: "Theme-based style props."
  },
  {
    id: 145,
    difficulty: "medium",
    category: "testing",
    question: "What does 'toBeInTheDocument()' assert?",
    options: [
      "That the test is running",
      "That a specific element exists in the DOM at that moment",
      "That the app is hosted online",
      "That the file is saved"
    ],
    answer: 1,
    explanation: "This is a custom matcher from jest-dom used to check for element presence.",
    hint: "Presence assertion."
  },
  {
    id: 146,
    difficulty: "hard",
    category: "scenarios",
    question: "How do you 'reset' the Redux store to its initial state (e.g., on logout)?",
    options: [
      "Delete the store variable",
      "Dispatch a special 'RESET' action and handle it in a root reducer that returns undefined",
      "Reload the page",
      "Use the 'resetStore()' function"
    ],
    answer: 1,
    explanation: "Returning undefined from a root reducer causes all child reducers to return their initial state.",
    hint: "Root reducer reset pattern."
  },
  {
    id: 147,
    difficulty: "medium",
    category: "testing",
    question: "How do you test a component that uses a timer (like setTimeout)?",
    options: [
      "Wait for the timer to finish naturally",
      "Use 'jest.useFakeTimers()' and 'jest.runAllTimers()'",
      "Timers cannot be tested",
      "Mock the Date object"
    ],
    answer: 1,
    explanation: "Fake timers allow you to 'fast-forward' time instantly in your tests.",
    hint: "Time travel in tests."
  },
  {
    id: 148,
    difficulty: "hard",
    category: "styling",
    question: "Which hook does the 'framer-motion' library provide for animating components based on their lifecycle?",
    options: ["useAnimate", "AnimatePresence", "useMotion", "useLifecycle"],
    answer: 1,
    explanation: "AnimatePresence allows components to animate out when they are removed from the React tree.",
    hint: "Exit animations."
  },
  {
    id: 149,
    difficulty: "medium",
    category: "redux",
    question: "What is 'State Normalization' in Redux?",
    options: [
      "Making sure the state is a string",
      "Organizing state like a database (using IDs) to avoid deeply nested objects and data duplication",
      "Deleting empty keys",
      "Formatting the code"
    ],
    answer: 1,
    explanation: "Normalized state makes it easier to update single items without traversing deep trees.",
    hint: "Database-like structure."
  },
  {
    id: 150,
    difficulty: "hard",
    category: "testing",
    question: "What is the 'MSW' (Mock Service Worker) library used for?",
    options: [
      "To style the UI",
      "To mock network requests at the network level, providing a more robust alternative to mocking 'fetch' or 'axios' globally",
      "To run tests in multiple threads",
      "To manage worker threads"
    ],
    answer: 1,
    explanation: "MSW intercepts requests in the browser or Node, allowing you to use real-looking API logic in your tests.",
    hint: "Network-level mocking."
  }
];

/* ======================================================
   REACT CERTIFICATION QUESTION BANK (Batch 4: 151-200)
   Topics: Performance, Memoization, Advanced Effects & TS
   ====================================================== */

const reactBatch4 = [
  {
    id: 151,
    difficulty: "hard",
    category: "optimization",
    question: "What is 'Windowing' or 'List Virtualization' in React?",
    options: [
      "Opening multiple browser windows",
      "A technique that renders only the items currently visible in the viewport to improve performance of large lists",
      "Using the 'window' object for global state",
      "A way to animate transitions between pages"
    ],
    answer: 1,
    explanation: "Libraries like 'react-window' or 'react-virtualized' help render lists with thousands of rows by only keeping a small subset of DOM nodes active.",
    hint: "Only render what you see."
  },
  {
    id: 152,
    difficulty: "hard",
    category: "memoization",
    question: "When should you NOT use 'useMemo' or 'useCallback'?",
    options: [
      "When the calculation is extremely complex",
      "For every single variable or function, as the overhead of the hook itself can outweigh the benefits for simple values",
      "When passing functions to optimized child components",
      "When the dependency array is empty"
    ],
    answer: 1,
    explanation: "Over-memoization can actually hurt performance due to the memory cost of storing dependencies and the CPU cost of constant comparison.",
    hint: "Premature optimization."
  },
  {
    id: 153,
    difficulty: "medium",
    category: "typescript",
    question: "What is the correct way to type a functional component in TypeScript?",
    options: [
      "const MyComponent: React.FC<Props> = (props) => { ... }",
      "const MyComponent = (props: Props): JSX.Element => { ... }",
      "Both 0 and 1 are valid",
      "function MyComponent(props: any) { ... }"
    ],
    answer: 2,
    explanation: "React.FC provides built-in typing for children (in older versions) and the return type, but explicitly typing parameters and return values is also standard.",
    hint: "Functional Component types."
  },
  {
    id: 154,
    difficulty: "hard",
    category: "effect",
    question: "What is a 'Race Condition' in 'useEffect' and how is it solved?",
    options: [
      "Two effects running at once; solved by merging them",
      "When an async request finishes after a component has unmounted or state has changed; solved using a cleanup boolean/AbortController",
      "When the CPU is too slow; solved by useMemo",
      "A bug in the React core"
    ],
    answer: 1,
    explanation: "If a user clicks 'User A' then 'User B' quickly, User A's data might arrive last and overwrite User B. A cleanup variable can ignore the stale result.",
    hint: "Stale async results."
  },
  {
    id: 155,
    difficulty: "medium",
    category: "state",
    question: "What is 'Batching' in React 18?",
    options: [
      "Processing data in chunks of 10",
      "Grouping multiple state updates into a single re-render for better performance",
      "A way to download multiple components at once",
      "Storing state in a batch file"
    ],
    answer: 1,
    explanation: "In React 18, automatic batching occurs even inside promises, setTimeouts, and native event handlers.",
    hint: "Multiple sets, one render."
  },
  {
    id: 156,
    difficulty: "hard",
    category: "scenarios",
    question: "A component uses 'useSelector' to get a large object. The component re-renders when ANY property of that object changes. How do you fix this?",
    options: [
      "Use 'useMemo' inside the component",
      "Use multiple 'useSelector' calls for specific properties or provide a custom equality function (like 'shallowEqual')",
      "Move the state to a local variable",
      "Convert the component to a class"
    ],
    answer: 1,
    explanation: "Redux's useSelector uses strict '===' equality by default. If the object reference changes, it triggers a render unless told otherwise.",
    hint: "Shallow comparison in selectors."
  },
  {
    id: 157,
    difficulty: "medium",
    category: "optimization",
    question: "What does the 'Profiler' API do?",
    options: [
      "It tracks user login data",
      "It measures how often a React application renders and the 'cost' of rendering",
      "It creates user avatars",
      "It checks for security vulnerabilities"
    ],
    answer: 1,
    explanation: "The Profiler measures the 'actual duration' of a render to find bottlenecks.",
    hint: "Performance measurement tool."
  },
  {
    id: 158,
    difficulty: "hard",
    category: "typescript",
    question: "How do you type a 'ref' to an HTML input element in TypeScript?",
    options: [
      "useRef<HTMLInputElement>(null)",
      "useRef<Element>(null)",
      "useRef<Input>(null)",
      "useRef(input)"
    ],
    answer: 0,
    explanation: "Generic types are used with useRef to tell TypeScript which DOM element it will point to.",
    hint: "Generic HTML types."
  },
  {
    id: 159,
    difficulty: "medium",
    category: "scenarios",
    question: "You have a search input that triggers an API call. How do you prevent calling the API on every single keystroke?",
    options: [
      "Using 'useMemo'",
      "Implementing a 'debounce' function inside a 'useEffect' or event handler",
      "Using 'useReducer'",
      "It's not possible to prevent this"
    ],
    answer: 1,
    explanation: "Debouncing ensures the function only runs after the user has stopped typing for a specified duration.",
    hint: "Waiting for a pause in typing."
  },
  {
    id: 160,
    difficulty: "hard",
    category: "effect",
    question: "What is the danger of using an object or array directly in a 'useEffect' dependency array?",
    options: [
      "It will cause a syntax error",
      "It may cause an infinite loop because objects/arrays are compared by reference, and a new reference might be created on every render",
      "It makes the effect run slower",
      "It prevents the cleanup function from running"
    ],
    answer: 1,
    explanation: "Since {} !== {}, if you define an object in the render body, the effect sees a 'new' dependency every time.",
    hint: "Referential stability."
  },
  {
    id: 161,
    difficulty: "medium",
    category: "memoization",
    question: "What is the second argument of 'React.memo'?",
    options: [
      "A dependency array",
      "An optional comparison function to manually determine if props are equal",
      "The initial state",
      "A callback for when the component unmounts"
    ],
    answer: 1,
    explanation: "You can pass (prevProps, nextProps) => boolean to customize the re-render logic.",
    hint: "Manual prop comparison."
  },
  {
    id: 162,
    difficulty: "hard",
    category: "optimization",
    question: "Which hook is used to 'read' the layout from the DOM and synchronously re-render?",
    options: ["useEffect", "useLayoutEffect", "useInsertionEffect", "useMemo"],
    answer: 1,
    explanation: "useLayoutEffect fires synchronously after all DOM mutations. Use it to prevent visual flickers when measuring elements.",
    hint: "Synchronous DOM measurement."
  },
  {
    id: 163,
    difficulty: "medium",
    category: "state",
    question: "When using 'useReducer', where should the business logic ideally reside?",
    options: [
      "Inside the component",
      "Inside the reducer function",
      "In the 'useEffect' hook",
      "In the CSS"
    ],
    answer: 1,
    explanation: "Reducers are meant to centralize state transition logic, keeping components lean and focused on UI.",
    hint: "Logic in the reducer."
  },
  {
    id: 164,
    difficulty: "hard",
    category: "scenarios",
    question: "You want to synchronize a state variable with LocalStorage. What is the best pattern?",
    options: [
      "Update LocalStorage directly in the event handler",
      "Use a 'useEffect' that listens to the state variable and updates LocalStorage when it changes",
      "Storage is not compatible with React",
      "Use a 'useMemo' hook"
    ],
    answer: 1,
    explanation: "The 'side effect' of updating external storage should be handled in useEffect to keep the render function pure.",
    hint: "Side effect synchronization."
  },
  {
    id: 165,
    difficulty: "medium",
    category: "typescript",
    question: "How do you type an event handler for a button click in React/TS?",
    options: [
      "(e: ClickEvent) => void",
      "(e: React.MouseEvent<HTMLButtonElement>) => void",
      "(e: any) => any",
      "(e: MouseEvent)"
    ],
    answer: 1,
    explanation: "React provides synthetic event types that are generic to the element they are attached to.",
    hint: "React MouseEvent."
  },
  {
    id: 166,
    difficulty: "hard",
    category: "optimization",
    question: "What is 'Partial Hydration'?",
    options: [
      "Only hydrating the top half of the page",
      "A technique where only specific, interactive parts of a server-rendered page are hydrated with JS",
      "Drinking water while coding",
      "Loading CSS before JS"
    ],
    answer: 1,
    explanation: "Common in frameworks like Astro or Next.js, it reduces the amount of JavaScript the browser needs to execute.",
    hint: "Interactive islands."
  },
  {
    id: 167,
    difficulty: "medium",
    category: "effect",
    question: "What happens if you return a value that is NOT a function from 'useEffect'?",
    options: [
      "Nothing, it is ignored",
      "React will throw a warning/error because it expects a cleanup function or nothing",
      "It becomes the new state",
      "The component re-renders"
    ],
    answer: 1,
    explanation: "The return type must be a function (the cleanup) or undefined. Returning a string or object is a common mistake.",
    hint: "Cleanup function only."
  },
  {
    id: 168,
    difficulty: "hard",
    category: "scenarios",
    question: "A child component is wrapped in 'React.memo', but it still re-renders every time the parent re-renders. The parent passes an inline arrow function as a prop. What is the cause?",
    options: [
      "React.memo is broken",
      "Inline functions create a new reference on every render, failing the shallow prop check",
      "The child has too many props",
      "The parent is not a PureComponent"
    ],
    answer: 1,
    explanation: "To fix this, the parent must wrap the function in 'useCallback' to preserve the reference.",
    hint: "Stable function references."
  },
  {
    id: 169,
    difficulty: "medium",
    category: "state",
    question: "Can multiple 'useEffect' hooks be used in a single component?",
    options: [
      "No, only one",
      "Yes, and they will run in the order they are defined",
      "Yes, but they run in random order",
      "Only if they have different dependencies"
    ],
    answer: 1,
    explanation: "Splitting logic into multiple effects based on concerns is a best practice.",
    hint: "Separation of concerns."
  },
  {
    id: 170,
    difficulty: "hard",
    category: "optimization",
    question: "What is the 'Double Render' in React 18 Strict Mode development?",
    options: [
      "A bug in the browser",
      "An intentional feature to help developers find impure components and side-effect bugs",
      "A way to make the app look smoother",
      "Only happens on mobile"
    ],
    answer: 1,
    explanation: "React mounts, unmounts, and re-mounts your component to ensure your effects handle cleanup correctly.",
    hint: "Dev-only stress test."
  },
  {
    id: 171,
    difficulty: "medium",
    category: "scenarios",
    question: "How do you access the previous value of a prop or state variable?",
    options: [
      "Using the 'usePrevious' hook (built-in)",
      "Using a 'useRef' to store the value and updating it in a 'useEffect' after each render",
      "It is stored in 'this.previous'",
      "React doesn't allow this"
    ],
    answer: 1,
    explanation: "React doesn't provide a built-in hook, but storing it in a ref is the standard pattern to 'remember' the past.",
    hint: "Ref as memory."
  },
  {
    id: 172,
    difficulty: "hard",
    category: "typescript",
    question: "What is the type for children in a React component in modern TypeScript?",
    options: [
      "string",
      "React.ReactNode",
      "JSX.Element",
      "HTMLElement"
    ],
    answer: 1,
    explanation: "ReactNode is the most permissive type, covering strings, numbers, elements, and arrays of elements.",
    hint: "The most inclusive React type."
  },
  {
    id: 173,
    difficulty: "medium",
    category: "memoization",
    question: "What is the result of 'useMemo(() => () => console.log('Hi'), [])'?",
    options: [
      "It prints 'Hi' to the console",
      "It returns a memoized function (equivalent to useCallback)",
      "It returns undefined",
      "It causes an error"
    ],
    answer: 1,
    explanation: "Since useMemo returns the result of the function, and the result is another function, it behaves like useCallback.",
    hint: "Returning a function."
  },
  {
    id: 174,
    difficulty: "hard",
    category: "optimization",
    question: "What is 'Asset Optimization' in a React build?",
    options: [
      "Buying more RAM",
      "Minification, compression, and image optimization performed by the bundler",
      "Using more CSS files",
      "Writing shorter variable names"
    ],
    answer: 1,
    explanation: "Tools like Vite or Webpack handle this to ensure the smallest possible production bundle.",
    hint: "Build-time shrinking."
  },
  {
    id: 175,
    difficulty: "medium",
    category: "state",
    question: "Does 'useState' merge objects automatically like 'this.setState' did in classes?",
    options: [
      "Yes",
      "No, you must manually spread the old state: setState(prev => ({...prev, newProp: 1}))",
      "Only in strict mode",
      "Only if the object is shallow"
    ],
    answer: 1,
    explanation: "Functional state updates replace the value entirely, so manual merging is required.",
    hint: "Manual merging."
  },
  {
    id: 176,
    difficulty: "hard",
    category: "effect",
    question: "What happens if you use 'window.addEventListener' in an effect without a cleanup?",
    options: [
      "It works fine",
      "It leads to memory leaks and multiple listeners being attached every time the component re-renders",
      "The browser will crash immediately",
      "The event won't fire"
    ],
    answer: 1,
    explanation: "Always remove global listeners in the cleanup function to keep the application stable.",
    hint: "Clean up your listeners."
  },
  {
    id: 177,
    difficulty: "medium",
    category: "scenarios",
    question: "You want to render a large list but search through it. Which hook is best for the search calculation?",
    options: ["useEffect", "useMemo", "useCallback", "useRef"],
    answer: 1,
    explanation: "useMemo ensures the filtering logic only runs when the list or the search query changes, not on every render.",
    hint: "Memoized filtering."
  },
  {
    id: 178,
    difficulty: "hard",
    category: "typescript",
    question: "Which utility type is used to extract the props type from a React component?",
    options: [
      "React.ComponentProps<typeof MyComponent>",
      "MyComponent['props']",
      "PropsOf<MyComponent>",
      "ExtractProps<MyComponent>"
    ],
    answer: 0,
    explanation: "ComponentProps is a powerful helper for wrapping or extending existing components.",
    hint: "Prop extraction utility."
  },
  {
    id: 179,
    difficulty: "medium",
    category: "optimization",
    question: "What is 'Lazy Initialization' in 'useState'?",
    options: [
      "Updating state later",
      "Passing a function to 'useState' to only calculate the initial value on the first render",
      "Using a slow database",
      "Setting state to null"
    ],
    answer: 1,
    explanation: "useState(() => someExpensiveCalculation()) prevents the calculation from running on every re-render.",
    hint: "Functional initial state."
  },
  {
    id: 180,
    difficulty: "hard",
    category: "scenarios",
    question: "A component re-renders because its parent re-renders. It has no props. How do you prevent this re-render?",
    options: [
      "You can't",
      "Wrap it in 'React.memo'",
      "Move it outside the parent",
      "Use 'useMemo' on the component call"
    ],
    answer: 1,
    explanation: "React.memo prevents re-renders if the props (or lack thereof) remain the same.",
    hint: "The 'memo' wrapper."
  },
  {
    id: 181,
    difficulty: "medium",
    category: "effect",
    question: "What is the 'Exhaustive Deps' lint rule?",
    options: [
      "A rule that forces you to use more effects",
      "A rule that ensures all variables used inside an effect are included in the dependency array",
      "A rule for naming variables",
      "A rule that deletes unused code"
    ],
    answer: 1,
    explanation: "This rule prevents stale closures by making sure the effect has access to the latest values.",
    hint: "Include all dependencies."
  },
  {
    id: 182,
    difficulty: "hard",
    category: "optimization",
    question: "How does 'Transitions' (startTransition) differ from 'Debouncing'?",
    options: [
      "They are the same",
      "Debouncing delays the action; Transitions let React work on the update in the background without blocking the UI",
      "Transitions are slower",
      "Debouncing is only for inputs"
    ],
    answer: 1,
    explanation: "Transitions are built into React's rendering engine, allowing for a smoother UI than simple timers.",
    hint: "Engine-level prioritization."
  },
  {
    id: 183,
    difficulty: "medium",
    category: "typescript",
    question: "What is 'React.CSSProperties' used for?",
    options: [
      "To write CSS in a .css file",
      "To type the 'style' prop in a React component",
      "To manage CSS modules",
      "To check if a browser supports a style"
    ],
    answer: 1,
    explanation: "It provides autocomplete and type checking for inline styles.",
    hint: "Style prop typing."
  },
  {
    id: 184,
    difficulty: "hard",
    category: "state",
    question: "When should you use 'useSyncExternalStore' instead of 'useEffect' to sync with an external store?",
    options: [
      "Always",
      "When the external store is outside of React and you need to avoid 'tearing' in concurrent rendering",
      "Only when using Redux",
      "When the store is in LocalStorage"
    ],
    answer: 1,
    explanation: "Tearing happens when different components see different values for the same state during a single render.",
    hint: "Avoiding 'tearing'."
  },
  {
    id: 185,
    difficulty: "medium",
    category: "scenarios",
    question: "How do you focus an input field as soon as a component mounts?",
    options: [
      "input.focus()",
      "Use 'useRef' to target the input and 'useEffect' with an empty array to call '.focus()'",
      "Set 'autofocus' in HTML",
      "Use 'useLayoutEffect' only"
    ],
    answer: 1,
    explanation: "While HTML 'autofocus' exists, the React ref/effect pattern is more reliable for dynamic components.",
    hint: "Ref + Effect."
  },
  {
    id: 186,
    difficulty: "hard",
    category: "optimization",
    question: "What is 'Server Components' (RSC) primary goal?",
    options: [
      "To replace the server",
      "To reduce the amount of JavaScript sent to the client by rendering components on the server",
      "To make the app run in the cloud only",
      "To speed up CSS"
    ],
    answer: 1,
    explanation: "Server components never hydrate on the client, saving significant bundle size.",
    hint: "Zero-bundle size components."
  },
  {
    id: 187,
    difficulty: "medium",
    category: "memoization",
    question: "If a component is wrapped in 'React.memo', but it uses 'useContext', will it re-render when the context changes?",
    options: [
      "No, memo prevents it",
      "Yes, context changes bypass 'React.memo'",
      "Only if the props also change",
      "Only in development"
    ],
    answer: 1,
    explanation: "React.memo only checks props. Changes to state or context will still trigger a re-render.",
    hint: "Context bypasses memo."
  },
  {
    id: 188,
    difficulty: "hard",
    category: "scenarios",
    question: "What is the 'Ref Forwarding' pattern used for in component libraries?",
    options: [
      "To pass data back to the parent",
      "To allow users of the library to access the underlying DOM node of a highly encapsulated component",
      "To hide the DOM",
      "To speed up the library"
    ],
    answer: 1,
    explanation: "Library authors use forwardRef so that consumers can focus or measure elements inside the library's components.",
    hint: "Library DOM access."
  },
  {
    id: 189,
    difficulty: "medium",
    category: "effect",
    question: "Is 'useEffect' triggered during Server Side Rendering (SSR)?",
    options: ["Yes", "No, it only runs on the client", "Only if specifically configured", "Only in Next.js"],
    answer: 1,
    explanation: "SSR only runs the render logic; side effects are deferred until the JS loads in the browser.",
    hint: "Client-only hook."
  },
  {
    id: 190,
    difficulty: "hard",
    category: "optimization",
    question: "What is the 'Three-Dot' (...) spread operator actually doing when passing props?",
    options: [
      "Iterating through an array",
      "Shallow copying the properties of an object into the component's props",
      "Merging CSS files",
      "Deleting extra props"
    ],
    answer: 1,
    explanation: "<Comp {...props} /> is shorthand for mapping every key in the object to a prop.",
    hint: "Shallow copy."
  },
  {
    id: 191,
    difficulty: "medium",
    category: "state",
    question: "What happens if you call a state setter with the exact same value as the current state?",
    options: [
      "The component re-renders anyway",
      "React will bail out and not re-render the component or fire effects",
      "It throws an error",
      "It deletes the state"
    ],
    answer: 1,
    explanation: "React uses 'Object.is' to compare state; if identical, it skips the update for performance.",
    hint: "State bailout."
  },
  {
    id: 192,
    difficulty: "hard",
    category: "scenarios",
    question: "How do you handle 'stale closures' in 'useCallback'?",
    options: [
      "You can't",
      "By ensuring all variables used in the function are listed in the dependency array",
      "By using 'useRef' for everything",
      "By using 'useReducer'"
    ],
    answer: 1,
    explanation: "If you omit a dependency, the memoized function will 'remember' the value from the render when it was created.",
    hint: "Update your deps."
  },
  {
    id: 193,
    difficulty: "medium",
    category: "typescript",
    question: "How do you type a component that accepts a generic type (e.g., a List component)?",
    options: [
      "const List = <T>(props: ListProps<T>) => { ... }",
      "const List: React.FC<any>",
      "const List = (props: T)",
      "Generic components aren't possible"
    ],
    answer: 0,
    explanation: "TypeScript allows components to be generic, which is perfect for reusable UI components.",
    hint: "Generic component syntax."
  },
  {
    id: 194,
    difficulty: "hard",
    category: "optimization",
    question: "What is 'Pre-rendering' vs 'SSR'?",
    options: [
      "They are the same",
      "Pre-rendering is done at build time (Static Generation); SSR is done at request time",
      "SSR is faster",
      "Pre-rendering is only for images"
    ],
    answer: 1,
    explanation: "Static Generation (SSG) is generally faster as the page is served as a static file from a CDN.",
    hint: "Build-time vs Request-time."
  },
  {
    id: 195,
    difficulty: "medium",
    category: "effect",
    question: "Can you use 'useEffect' to set state?",
    options: [
      "No, never",
      "Yes, but it should be done carefully to avoid infinite loops",
      "Only in class components",
      "Only for logging"
    ],
    answer: 1,
    explanation: "Setting state in an effect is common (e.g., after an API call), but if the state you set is also a dependency, you'll loop.",
    hint: "Safe state setting."
  },
  {
    id: 196,
    difficulty: "hard",
    category: "scenarios",
    question: "You want to implement a 'Global Modal' system without Redux. What is the best React-only approach?",
    options: [
      "Create a Modal component in every file",
      "Use Context API to manage the 'isModalOpen' state and the modal content at the top level",
      "Use 'window.alert'",
      "Portals are not useful here"
    ],
    answer: 1,
    explanation: "Context + Portals provide a powerful way to manage UI overlays globally.",
    hint: "Context + Portal."
  },
  {
    id: 197,
    difficulty: "medium",
    category: "memoization",
    question: "Is 'useMemo' guaranteed to keep the value in memory forever?",
    options: [
      "Yes",
      "No, React may choose to discard the memoized value to free up memory",
      "Only if the dependency array is empty",
      "Only in production"
    ],
    answer: 1,
    explanation: "React treats useMemo as a performance hint, not a semantic guarantee.",
    hint: "Memory-based eviction."
  },
  {
    id: 198,
    difficulty: "hard",
    category: "optimization",
    question: "What is 'Code Splitting' at the Route level?",
    options: [
      "Using different CSS files for each route",
      "Wrapping route components in 'React.lazy' and 'Suspense' so the browser only loads the code for the current page",
      "Splitting the URL with slashes",
      "A way to share state between routes"
    ],
    answer: 1,
    explanation: "This is one of the most effective ways to reduce initial load time in a SPA.",
    hint: "Lazy-loading routes."
  },
  {
    id: 199,
    difficulty: "medium",
    category: "state",
    question: "What is 'Derived State'?",
    options: [
      "State that is copied from props",
      "State that is calculated from existing props or state during render (and doesn't need its own useState)",
      "State that comes from a child",
      "State that is stored in a database"
    ],
    answer: 1,
    explanation: "If you can calculate it during render, don't put it in state—this prevents 'out-of-sync' bugs.",
    hint: "Calculated values."
  },
  {
    id: 200,
    difficulty: "hard",
    category: "basics",
    question: "What is 'Imperative' vs 'Declarative' programming in the context of React?",
    options: [
      "React is imperative (how to do it); Vanilla JS is declarative (what to do)",
      "React is declarative (what the UI should look like for a given state); Vanilla DOM is imperative (step-by-step instructions)",
      "They are the same",
      "Declarative is only for styles"
    ],
    answer: 1,
    explanation: "In React, you describe the end state, and React handles the 'how' of updating the DOM.",
    hint: "What vs How."
  }
];

/* ======================================================
   REACT CERTIFICATION QUESTION BANK (Batch 5: 201-250)
   Topics: Patterns, Ecosystem, Accessibility & Architecture
   ====================================================== */

const reactBatch5 = [
  {
    id: 201,
    difficulty: "hard",
    category: "patterns",
    question: "What is the 'Compound Components' pattern?",
    options: [
      "Combining two different libraries together",
      "A pattern where components work together to form a unit, sharing implicit state (e.g., <Select> and <Option>)",
      "A way to write CSS and JS in the same file",
      "Using multiple Redux stores"
    ],
    answer: 1,
    explanation: "Compound components allow for a more expressive API where the parent manages the state and children consume it, often using Context.",
    hint: "Think of HTML <select> and <option> tags."
  },
  {
    id: 202,
    difficulty: "medium",
    category: "ecosystem",
    question: "Which library is commonly used for managing server-state, caching, and synchronization in React?",
    options: ["Redux", "TanStack Query (React Query)", "Axios", "Zustand"],
    answer: 1,
    explanation: "React Query excels at handling asynchronous server data, providing built-in caching and background updates.",
    hint: "Fetching and caching specialist."
  },
  {
    id: 203,
    difficulty: "hard",
    category: "accessibility",
    question: "How can you ensure a React application is accessible to screen readers?",
    options: [
      "By using only <div> tags",
      "By using semantic HTML and providing 'aria-' attributes where necessary",
      "By making the text larger",
      "By disabling JavaScript"
    ],
    answer: 1,
    explanation: "Semantic HTML (like <button>, <nav>, <main>) provides the foundation for accessibility that screen readers rely on.",
    hint: "Use the right tags for the job."
  },
  {
    id: 204,
    difficulty: "medium",
    category: "scenarios",
    question: "You want to perform a deep equality check in 'useEffect' dependencies. What is the best way?",
    options: [
      "React does this automatically",
      "Stringify the object: JSON.stringify(obj)",
      "Use a custom hook like 'useDeepCompareEffect' or manually compare values",
      "It is not possible"
    ],
    answer: 2,
    explanation: "React uses shallow comparison. For deep comparison, you often need to memoize the object or use a specialized hook.",
    hint: "Custom comparison logic."
  },
  {
    id: 205,
    difficulty: "hard",
    category: "patterns",
    question: "What is a 'Controlled Component' in the context of a form?",
    options: [
      "A component that cannot be edited",
      "A component where the form data is handled by the React component state",
      "A component managed by the browser's DOM",
      "A component that requires a password"
    ],
    answer: 1,
    explanation: "The value of the input is set by state, and changes are handled by an onChange function.",
    hint: "State is the source of truth."
  },
  {
    id: 206,
    difficulty: "medium",
    category: "ecosystem",
    question: "What is 'Zustand'?",
    options: [
      "A routing library",
      "A small, fast, and scalable bear-themed state management library",
      "A CSS framework",
      "A testing tool"
    ],
    answer: 1,
    explanation: "Zustand is a popular alternative to Redux for global state management due to its simplicity and low boilerplate.",
    hint: "Simple state management."
  },
  {
    id: 207,
    difficulty: "hard",
    category: "architecture",
    question: "What is the benefit of 'Atomic Design' in a React project?",
    options: [
      "It makes the app run faster",
      "It organizes components into hierarchical levels: atoms, molecules, organisms, templates, and pages",
      "It uses nuclear energy",
      "It reduces the number of files"
    ],
    answer: 1,
    explanation: "Atomic Design helps create a clear structure for reusable UI components.",
    hint: "Smallest to largest parts."
  },
  {
    id: 208,
    difficulty: "medium",
    category: "scenarios",
    question: "You need to measure the width of a div after it renders to position a tooltip. Which hook is safest to avoid flickering?",
    options: ["useEffect", "useLayoutEffect", "useMemo", "useRef"],
    answer: 1,
    explanation: "useLayoutEffect runs synchronously before the browser paints, preventing the user from seeing the 'jump' during positioning.",
    hint: "Synchronous measurement."
  },
  {
    id: 209,
    difficulty: "hard",
    category: "optimization",
    question: "How do you implement 'infinite scrolling' in a performant way?",
    options: [
      "Load the entire database at once",
      "Use the 'Intersection Observer API' to detect when the user reaches the bottom and fetch more data",
      "Use a very long scrollbar",
      "Refresh the page every 10 seconds"
    ],
    answer: 1,
    explanation: "Intersection Observer allows you to efficiently watch for elements entering the viewport without heavy scroll event listeners.",
    hint: "Detecting element visibility."
  },
  {
    id: 210,
    difficulty: "medium",
    category: "accessibility",
    question: "In React, what is the 'alt' attribute used for on <img> tags?",
    options: [
      "To provide a tooltip",
      "To provide a text description for users with visual impairments and for SEO",
      "To change the image size",
      "To link to another page"
    ],
    answer: 1,
    explanation: "The alt attribute is essential for accessibility; screen readers read it when the image is encountered.",
    hint: "Alternative text."
  },
  {
    id: 211,
    difficulty: "hard",
    category: "patterns",
    question: "What are 'HOCs' (Higher Order Components) mainly replaced by in modern React?",
    options: ["Redux", "Custom Hooks", "Context API", "Class components"],
    answer: 1,
    explanation: "Hooks provide a cleaner and more composable way to share logic compared to the wrapper-hell often caused by HOCs.",
    hint: "Logic reuse in functions."
  },
  {
    id: 212,
    difficulty: "medium",
    category: "ecosystem",
    question: "Which tool is the modern successor to Create React App (CRA) for fast development and building?",
    options: ["Webpack", "Vite", "Gulp", "Grunt"],
    answer: 1,
    explanation: "Vite uses native ES modules in development for lightning-fast start times and hot module replacement (HMR).",
    hint: "French for 'Quick'."
  },
  {
    id: 213,
    difficulty: "hard",
    category: "state",
    question: "What is 'State Snapshotting' in the context of React's render cycle?",
    options: [
      "Taking a picture of the screen",
      "The concept that 'state' is a constant value during a specific render and does not change until the next render",
      "A way to save state to a file",
      "Using Redux DevTools only"
    ],
    answer: 1,
    explanation: "When state updates, React re-renders with a new 'snapshot' of state. Existing code inside the old render still sees the old value.",
    hint: "State is constant for one render."
  },
  {
    id: 214,
    difficulty: "medium",
    category: "scenarios",
    question: "How do you handle a scenario where a child needs to update a parent's state?",
    options: [
      "The child cannot update parent state",
      "Pass a callback function from the parent to the child as a prop",
      "Use a global variable",
      "Use 'this.parent.setState'"
    ],
    answer: 1,
    explanation: "This is the standard pattern for data flowing back 'up' the tree.",
    hint: "Pass a function down."
  },
  {
    id: 215,
    difficulty: "hard",
    category: "architecture",
    question: "What is 'Container vs Presentational' component pattern?",
    options: [
      "Styling vs Logic separation",
      "Logic/Data fetching (Container) vs UI/Markup (Presentational)",
      "Mobile vs Desktop components",
      "Frontend vs Backend components"
    ],
    answer: 1,
    explanation: "Though less common since Hooks, it’s a pattern for separating how things work from how they look.",
    hint: "Logic vs View."
  },
  {
    id: 216,
    difficulty: "medium",
    category: "memoization",
    question: "What is the primary risk of using 'index' as a key in a list that can be filtered or sorted?",
    options: [
      "It makes the app crash",
      "It can cause the wrong state to be associated with the wrong item after sorting",
      "It is too slow",
      "It is not allowed by React"
    ],
    answer: 1,
    explanation: "If the order changes, the index 0 might represent a different data item, but React will reuse the state from the previous index 0.",
    hint: "State mismatch in lists."
  },
  {
    id: 217,
    difficulty: "hard",
    category: "optimization",
    question: "What is 'Priority Crashing' in React 18?",
    options: [
      "A bug where the app freezes",
      "Not a real term; the correct term is 'Tearing' or 'Interruption'",
      "When a low priority update is interrupted by a high priority one",
      "A feature for gaming"
    ],
    answer: 1,
    explanation: "Concurrent React allows interruptions, but 'Tearing' is the actual risk where UI shows inconsistent data.",
    hint: "Concurrent consistency."
  },
  {
    id: 218,
    difficulty: "medium",
    category: "accessibility",
    question: "How do you implement a 'Skip Link' in React?",
    options: [
      "A link that closes the app",
      "An invisible link at the top of the page that allows keyboard users to jump straight to the main content",
      "A link that skips an ad",
      "It is not possible in React"
    ],
    answer: 1,
    explanation: "Skip links are vital for keyboard and screen reader users to bypass repetitive navigation.",
    hint: "Bypass navigation."
  },
  {
    id: 219,
    difficulty: "hard",
    category: "scenarios",
    question: "You have an effect that sets up a WebSocket connection. What must you do in the cleanup function?",
    options: [
      "Nothing",
      "Close the WebSocket connection to prevent memory leaks and multiple connections",
      "Delete the data",
      "Alert the user"
    ],
    answer: 1,
    explanation: "Cleanup ensures that when the component unmounts or re-renders, the old socket is properly closed.",
    hint: "Closing connections."
  },
  {
    id: 220,
    difficulty: "medium",
    category: "ecosystem",
    question: "What is 'React Native'?",
    options: [
      "A React library for CSS",
      "A framework for building native mobile apps using React",
      "A way to run React in the terminal",
      "A database for React"
    ],
    answer: 1,
    explanation: "React Native uses native UI components instead of web components, allowing for 'real' mobile apps.",
    hint: "Mobile React."
  },
  {
    id: 221,
    difficulty: "hard",
    category: "patterns",
    question: "What is the 'Render Props' pattern?",
    options: [
      "A prop that is a string",
      "A technique where a component's prop is a function used to determine what to render",
      "Rendering props in a list",
      "Using props to style a component"
    ],
    answer: 1,
    explanation: "It allows for sharing stateful logic (like mouse position) while letting the consumer decide the UI.",
    hint: "Prop as a function."
  },
  {
    id: 222,
    difficulty: "medium",
    category: "state",
    question: "Why should you use an initializer function in 'useReducer' for heavy objects?",
    options: [
      "To make the code shorter",
      "To avoid re-creating the initial state object on every single render",
      "To speed up the browser",
      "Because React requires it"
    ],
    answer: 1,
    explanation: "Like useState's lazy initialization, the 3rd argument to useReducer only runs once.",
    hint: "Lazy init."
  },
  {
    id: 223,
    difficulty: "hard",
    category: "scenarios",
    question: "You have a component that needs to update state based on a prop change. What is the recommended modern approach?",
    options: [
      "Use 'getDerivedStateFromProps'",
      "Update state during render (if necessary) or better, derive the value directly without state",
      "Use 'componentWillReceiveProps'",
      "Use 'useEffect' for everything"
    ],
    answer: 1,
    explanation: "If you can calculate it from props, don't put it in state. If you must, update it during render to avoid extra renders.",
    hint: "Prefer derivation over state."
  },
  {
    id: 224,
    difficulty: "medium",
    category: "architecture",
    question: "What is 'Feature-Sliced Design' (FSD)?",
    options: [
      "A way to cut images",
      "An architectural methodology for frontend projects based on separation of concerns and business logic",
      "A Redux middleware",
      "A type of CSS grid"
    ],
    answer: 1,
    explanation: "FSD divides the app into layers (features, entities, shared) to make it more maintainable.",
    hint: "Architectural layers."
  },
  {
    id: 225,
    difficulty: "hard",
    category: "optimization",
    question: "What is the difference between 'React.memo' and 'useMemo'?",
    options: [
      "React.memo is for components; useMemo is for values inside a component",
      "There is no difference",
      "useMemo is faster",
      "React.memo is only for class components"
    ],
    answer: 0,
    explanation: "React.memo is a HOC that wraps a component; useMemo is a hook that caches a calculated value.",
    hint: "HOC vs Hook."
  },
  {
    id: 226,
    difficulty: "medium",
    category: "accessibility",
    question: "What does the 'aria-live' attribute do?",
    options: [
      "It makes the text blink",
      "It tells screen readers to announce dynamic content updates automatically",
      "It starts a video",
      "It speeds up the app"
    ],
    answer: 1,
    explanation: "Useful for error messages or status updates that happen without a page reload.",
    hint: "Announcing updates."
  },
  {
    id: 227,
    difficulty: "hard",
    category: "state",
    question: "In Redux, what is the 'Root Reducer'?",
    options: [
      "The first reducer ever written",
      "The combination of all individual slice reducers into one single function for the store",
      "The reducer that handles errors",
      "A reducer in the root folder"
    ],
    answer: 1,
    explanation: "Using 'combineReducers', you merge different parts of state into one tree.",
    hint: "Combined reducers."
  },
  {
    id: 228,
    difficulty: "medium",
    category: "scenarios",
    question: "You want to 'throttle' a resize event. What does this mean compared to 'debouncing'?",
    options: [
      "Throttling waits for a pause; debouncing runs at intervals",
      "Throttling ensures the function runs at most once every X milliseconds during the event",
      "They are identical",
      "Throttling is only for mobile"
    ],
    answer: 1,
    explanation: "Throttling is better for continuous events like scrolling or resizing where you still want updates while it happens.",
    hint: "Constant interval execution."
  },
  {
    id: 229,
    difficulty: "hard",
    category: "ecosystem",
    question: "What is 'Next.js'?",
    options: [
      "A CSS library",
      "A React framework that provides SSR, Static Site Generation, and Routing out of the box",
      "The next version of React",
      "A testing framework"
    ],
    answer: 1,
    explanation: "Next.js is the most popular framework for building production-ready React applications.",
    hint: "The 'Fullstack' React framework."
  },
  {
    id: 230,
    difficulty: "medium",
    category: "effect",
    question: "What is the default behavior of 'useEffect' if you return nothing?",
    options: [
      "It throws an error",
      "It simply finishes and does no cleanup",
      "It re-renders the component",
      "It clears the state"
    ],
    answer: 1,
    explanation: "Cleanup functions are optional. If you don't return one, React assumes no cleanup is needed.",
    hint: "Optional cleanup."
  },
  {
    id: 231,
    difficulty: "hard",
    category: "patterns",
    question: "What is 'Props Proxy' in the context of HOCs?",
    options: [
      "A security feature",
      "The HOC receives props, modifies them, and passes them down to the wrapped component",
      "A way to hide props",
      "A Redux tool"
    ],
    answer: 1,
    explanation: "It allows a HOC to 'inject' additional data or functionality into a component.",
    hint: "Intercepting props."
  },
  {
    id: 232,
    difficulty: "medium",
    category: "architecture",
    question: "What is 'Monolith' vs 'Micro-frontend' architecture?",
    options: [
      "One big codebase vs multiple independent frontend apps combined into one",
      "Mobile vs Web",
      "React vs Angular",
      "Using one vs many CSS files"
    ],
    answer: 0,
    explanation: "Micro-frontends allow different teams to work on different parts of a large app using different technologies if needed.",
    hint: "Single vs Distributed apps."
  },
  {
    id: 233,
    difficulty: "hard",
    category: "scenarios",
    question: "How do you handle 'Error: Too many re-renders' in React?",
    options: [
      "Buy a faster computer",
      "Check if you are calling a state-setting function directly in the render body instead of an event handler or effect",
      "Use more state",
      "Delete the component"
    ],
    answer: 1,
    explanation: "Calling setState in render triggers a re-render, which calls setState, creating an infinite loop.",
    hint: "Infinite loop detection."
  },
  {
    id: 234,
    difficulty: "medium",
    category: "optimization",
    question: "What is 'Tree Shaking' primarily dependent on?",
    options: [
      "Using 'require()' instead of 'import'",
      "Using ES Modules (import/export) syntax",
      "Using class components",
      "Writing long functions"
    ],
    answer: 1,
    explanation: "Static 'import' statements allow bundlers to analyze which parts of the code are actually used.",
    hint: "Static analysis."
  },
  {
    id: 235,
    difficulty: "hard",
    category: "state",
    question: "What is the 'Flux' architecture?",
    options: [
      "A CSS library",
      "The pattern of unidirectional data flow (Action -> Dispatcher -> Store -> View) that inspired Redux",
      "A type of React hook",
      "A database"
    ],
    answer: 1,
    explanation: "Flux was the original architectural pattern proposed by Facebook for React apps.",
    hint: "One-way data flow pattern."
  },
  {
    id: 236,
    difficulty: "medium",
    category: "accessibility",
    question: "What is the purpose of 'aria-hidden=\"true\"'?",
    options: [
      "To hide an element from the screen visually",
      "To hide an element from screen readers while keeping it visible on the screen",
      "To delete an element",
      "To make an element non-clickable"
    ],
    answer: 1,
    explanation: "Useful for decorative icons or redundant text that doesn't add value for screen reader users.",
    hint: "Hide from assistive tech."
  },
  {
    id: 237,
    difficulty: "hard",
    category: "scenarios",
    question: "You want to persist Redux state after a page refresh. What is the standard tool?",
    options: ["Redux Logger", "Redux Persist", "Redux Thunk", "Redux Saga"],
    answer: 1,
    explanation: "Redux Persist saves the store to LocalStorage or SessionStorage and 'rehydrates' it on load.",
    hint: "Saving state to disk."
  },
  {
    id: 238,
    difficulty: "medium",
    category: "ecosystem",
    question: "What is 'Storybook' used for?",
    options: [
      "Writing documentation",
      "Developing UI components in isolation, making it easier to document and test different states",
      "Hosting the app",
      "Managing databases"
    ],
    answer: 1,
    explanation: "Storybook is a 'workshop' for components, helping designers and devs collaborate.",
    hint: "Isolated component development."
  },
  {
    id: 239,
    difficulty: "hard",
    category: "optimization",
    question: "What is 'Critical CSS'?",
    options: [
      "CSS that is very important for the look",
      "The minimum amount of CSS needed to render the 'Above the Fold' content, inlined for speed",
      "CSS that has bugs",
      "CSS used in every file"
    ],
    answer: 1,
    explanation: "By inlining critical CSS, you can show the user a styled page before the full CSS file finishes downloading.",
    hint: "Above the fold speed."
  },
  {
    id: 240,
    difficulty: "medium",
    category: "effect",
    question: "Can 'useEffect' be used to replace 'componentDidUpdate'?",
    options: [
      "No",
      "Yes, by using it without the empty array, it runs after every render",
      "Only if you use a ref",
      "Only for state changes"
    ],
    answer: 1,
    explanation: "By default, effects run after every completed render, but you can target specific updates with the dependency array.",
    hint: "Runs after render."
  },
  {
    id: 241,
    difficulty: "hard",
    category: "patterns",
    question: "What is 'Inversion of Control' in React components?",
    options: [
      "The child controls the parent",
      "Allowing the consumer of a component to control the rendering of its internal parts (e.g., via render props or children)",
      "An error in state management",
      "Using only global state"
    ],
    answer: 1,
    explanation: "Instead of a component having 20 props for different styles, it provides a 'slot' for the user to pass their own component.",
    hint: "Giving control to the user."
  },
  {
    id: 242,
    difficulty: "medium",
    category: "scenarios",
    question: "How do you detect if a component is still 'mounted' before updating state in an async callback?",
    options: [
      "Use 'this.isMounted()'",
      "Use a 'useRef' to track mount status and check it before calling setState",
      "React handles this automatically",
      "It is not necessary"
    ],
    answer: 1,
    explanation: "While React 18 has improved this, checking mount status prevents 'can't perform a React state update on an unmounted component' warnings.",
    hint: "Manual mount tracking."
  },
  {
    id: 243,
    difficulty: "hard",
    category: "architecture",
    question: "What is 'Hydration Mismatch'?",
    options: [
      "The app runs out of memory",
      "When the server-rendered HTML differs from the first client-side render, causing UI jumps or errors",
      "A CSS error",
      "A database connection issue"
    ],
    answer: 1,
    explanation: "This often happens if you use 'window' or 'new Date()' directly in the render, as they differ between server and client.",
    hint: "Server/Client UI difference."
  },
  {
    id: 244,
    difficulty: "medium",
    category: "optimization",
    question: "What does 'React.startTransition' do?",
    options: [
      "Starts a CSS animation",
      "Marks a state update as a 'transition', allowing React to keep the UI responsive by prioritizing more urgent updates",
      "Starts the application",
      "Moves to a new route"
    ],
    answer: 1,
    explanation: "Non-urgent updates (like filtering a long list) are marked as transitions so they don't block typing or clicking.",
    hint: "Low-priority updates."
  },
  {
    id: 245,
    difficulty: "hard",
    category: "state",
    question: "What is 'Lifting State Up'?",
    options: [
      "Moving state to Redux",
      "Moving state to the closest common parent of components that need it",
      "Passing state to a child",
      "Deleting state"
    ],
    answer: 1,
    explanation: "Sharing state is achieved by moving it to the parent and passing it back down as props.",
    hint: "Common ancestor."
  },
  {
    id: 246,
    difficulty: "medium",
    category: "accessibility",
    question: "Which hook should you use for generating unique IDs for aria-attributes?",
    options: ["useRef", "useId", "useState", "useMemo"],
    answer: 1,
    explanation: "useId generates stable, unique IDs that work correctly with Server Side Rendering.",
    hint: "Unique ID hook."
  },
  {
    id: 247,
    difficulty: "hard",
    category: "scenarios",
    question: "How do you test a component that depends on 'Redux'?",
    options: [
      "You can't test it",
      "Wrap the component in a '<Provider>' with a real or mocked store in the test render",
      "Mock the 'useSelector' hook",
      "Test only the reducer"
    ],
    answer: 1,
    explanation: "Providing a store ensures the component has the data and dispatch capability it needs to function.",
    hint: "Wrap in Provider."
  },
  {
    id: 248,
    difficulty: "medium",
    category: "ecosystem",
    question: "What is 'Emotion'?",
    options: [
      "A state management library",
      "A popular CSS-in-JS library, similar to Styled Components",
      "A way to handle user feedback",
      "A testing tool"
    ],
    answer: 1,
    explanation: "Emotion provides flexible styling via the 'css' prop or styled components.",
    hint: "CSS-in-JS library."
  },
  {
    id: 249,
    difficulty: "hard",
    category: "optimization",
    question: "What is 'Memoization' in JavaScript?",
    options: [
      "Writing code from memory",
      "Caching the result of an expensive function call and returning the cached result when the same inputs occur again",
      "Deleting variables",
      "Using more memory"
    ],
    answer: 1,
    explanation: "Memoization is the core principle behind useMemo and React.memo.",
    hint: "Caching results."
  },
  {
    id: 250,
    difficulty: "medium",
    category: "basics",
    question: "What is the 'Single Source of Truth' principle?",
    options: [
      "Only having one JS file",
      "The practice of having one place where data lives (like state or a store), ensuring consistency across the app",
      "Using only one database",
      "The lead developer's opinion"
    ],
    answer: 1,
    explanation: "By centralizing state, you avoid bugs where different parts of the UI show different data for the same item.",
    hint: "Centralized data."
  }
];

// Combine all 250 questions
const questionBank = [
  ...reactBatch1, 
  ...reactBatch2, 
  ...reactBatch3, 
  ...reactBatch4, 
  ...reactBatch5
];
