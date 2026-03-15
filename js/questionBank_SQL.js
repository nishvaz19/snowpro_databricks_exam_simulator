/* ======================================================
   SQL CERTIFICATION QUESTION BANK (Batch 1: 1-50)
   Topics: Basic CRUD, Joins, Union, Intersection
   ====================================================== */

const questionBank = [
  {
    id: 1,
    difficulty: "easy",
    category: "basics",
    question: "Which SQL statement is used to extract data from a database?",
    options: ["OPEN", "GET", "EXTRACT", "SELECT"],
    answer: 3,
    explanation: "The SELECT statement is the primary way to query data from one or more tables.",
    hint: "Choose the keyword used in almost every query."
  },
  {
    id: 2,
    difficulty: "medium",
    category: "joins",
    question: "Which JOIN returns all records when there is a match in either left or right table records?",
    options: ["INNER JOIN", "LEFT JOIN", "RIGHT JOIN", "FULL OUTER JOIN"],
    answer: 3,
    explanation: "A FULL OUTER JOIN combines the results of both LEFT and RIGHT joins, returning all rows from both tables with NULLs where matches are missing.",
    hint: "Think 'complete' or 'both sides'."
  },
  {
    id: 3,
    difficulty: "easy",
    category: "basics",
    question: "How do you select all columns from a table named 'Employees'?",
    options: ["SELECT all FROM Employees", "SELECT * FROM Employees", "SELECT Employees", "SELECT [all] FROM Employees"],
    answer: 1,
    explanation: "The asterisk (*) is the wildcard character used to represent all columns in a table.",
    hint: "The star symbol."
  },
  {
    id: 4,
    difficulty: "hard",
    category: "set_operations",
    question: "What is the primary difference between UNION and UNION ALL?",
    options: [
      "UNION is faster than UNION ALL",
      "UNION removes duplicate rows, while UNION ALL includes them",
      "UNION ALL removes duplicate rows, while UNION includes them",
      "There is no difference"
    ],
    answer: 1,
    explanation: "UNION performs a distinct operation to remove duplicates, making it slightly slower than UNION ALL, which simply appends results.",
    hint: "One 'cleans' the data, the other just 'adds' it."
  },
  {
    id: 5,
    difficulty: "medium",
    category: "filtering",
    question: "Which operator is used to search for a specified pattern in a column?",
    options: ["GET", "MATCH", "LIKE", "CONTAINS"],
    answer: 2,
    explanation: "The LIKE operator is used in a WHERE clause to search for patterns using wildcards like % and _.",
    hint: "Similar to 'resembles'."
  },
  {
    id: 6,
    difficulty: "hard",
    category: "joins",
    question: "In a scenario where you want to find all employees and any projects they might be assigned to, even if they aren't assigned to any, which join should you use?",
    options: ["INNER JOIN", "LEFT JOIN", "RIGHT JOIN", "CROSS JOIN"],
    answer: 1,
    explanation: "A LEFT JOIN ensures all records from the 'left' table (Employees) are kept, with matching data from the 'right' table (Projects) added if it exists.",
    hint: "Preserve the left side."
  },
  {
    id: 7,
    difficulty: "medium",
    category: "set_operations",
    question: "Which clause returns only the rows that are present in both the first and second SELECT statements?",
    options: ["UNION", "EXCEPT", "INTERSECT", "MINUS"],
    answer: 2,
    explanation: "INTERSECT returns only the common rows between two result sets.",
    hint: "Where two circles overlap."
  },
  {
    id: 8,
    difficulty: "easy",
    category: "basics",
    question: "Which SQL keyword is used to sort the result-set?",
    options: ["SORT BY", "ORDER BY", "GROUP BY", "ALIGN BY"],
    answer: 1,
    explanation: "ORDER BY is used to sort results in ascending (ASC) or descending (DESC) order.",
    hint: "Putting things in order."
  },
  {
    id: 9,
    difficulty: "medium",
    category: "basics",
    question: "What is the purpose of the DISTINCT keyword?",
    options: [
      "To select only unique values",
      "To count the number of rows",
      "To sort values alphabetically",
      "To join two tables"
    ],
    answer: 0,
    explanation: "DISTINCT filters out duplicate values from the output.",
    hint: "Unique."
  },
  {
    id: 10,
    difficulty: "hard",
    category: "set_operations",
    question: "In Oracle and PostgreSQL, which keyword is equivalent to 'EXCEPT' in SQL Server?",
    options: ["MINUS", "SUBTRACT", "INTERSECT", "DIFFERENCE"],
    answer: 0,
    explanation: "MINUS and EXCEPT both return rows from the first query that are not present in the second query.",
    hint: "Mathematical subtraction."
  },
  {
    id: 11,
    difficulty: "easy",
    category: "basics",
    question: "How can you return the number of records in the 'Sales' table?",
    options: ["SELECT COUNT(*) FROM Sales", "SELECT SUM(*) FROM Sales", "SELECT NUMBER(*) FROM Sales", "SELECT LEN(*) FROM Sales"],
    answer: 0,
    explanation: "COUNT(*) returns the total number of rows in a table.",
    hint: "Total count."
  },
  {
    id: 12,
    difficulty: "medium",
    category: "joins",
    question: "A 'Self Join' is most commonly used for what type of data structure?",
    options: ["Hierarchical data (e.g., Employee and Manager)", "Flat files", "External databases", "Log files"],
    answer: 0,
    explanation: "A Self Join allows a table to be joined with itself, which is useful for parent-child relationships within one table.",
    hint: "Employee/Manager in the same table."
  },
  {
    id: 13,
    difficulty: "medium",
    category: "filtering",
    question: "Which wildcard represents zero, one, or multiple characters in SQL?",
    options: ["_", "?", "*", "%"],
    answer: 3,
    explanation: "The percent sign (%) matches any string of any length (including length zero).",
    hint: "Used with LIKE."
  },
  {
    id: 14,
    difficulty: "hard",
    category: "joins",
    question: "What is a CROSS JOIN?",
    options: [
      "A join that requires a common column",
      "A join that returns a Cartesian product of the two tables",
      "A join between two different databases",
      "A join used only for primary keys"
    ],
    answer: 1,
    explanation: "A CROSS JOIN produces every possible combination of rows from the two tables.",
    hint: "Multiply table A by table B."
  },
  {
    id: 15,
    difficulty: "medium",
    category: "basics",
    question: "Which SQL clause is used to filter the results of a GROUP BY?",
    options: ["WHERE", "HAVING", "LIMIT", "FILTER"],
    answer: 1,
    explanation: "WHERE filters rows before grouping; HAVING filters the groups themselves after aggregation.",
    hint: "The 'Where' for groups."
  },
  {
    id: 16,
    difficulty: "easy",
    category: "basics",
    question: "How do you insert a new record into the 'Users' table?",
    options: ["ADD NEW Users", "INSERT INTO Users", "UPDATE Users", "CREATE Users"],
    answer: 1,
    explanation: "INSERT INTO is the DML command for adding new rows.",
    hint: "Adding into."
  },
  {
    id: 17,
    difficulty: "medium",
    category: "basics",
    question: "What does the 'IS NULL' operator do?",
    options: [
      "Checks if a value is zero",
      "Checks for empty strings",
      "Checks for missing or undefined values",
      "Sets a value to zero"
    ],
    answer: 2,
    explanation: "NULL represents a missing or unknown value, and 'IS NULL' is the only way to test for it.",
    hint: "Testing for empty/unknown."
  },
  {
    id: 18,
    difficulty: "hard",
    category: "scenarios",
    question: "You need to update the price of all products in the 'Electronics' category by 10%. Which query is correct?",
    options: [
      "UPDATE Products SET Price = Price * 1.1 WHERE Category = 'Electronics'",
      "MODIFY Products SET Price = Price * 1.1",
      "UPDATE Price = Price * 1.1 FROM Products",
      "SET Price = Price * 1.1 WHERE Category = 'Electronics'"
    ],
    answer: 0,
    explanation: "The UPDATE statement uses SET to change values and WHERE to target specific rows.",
    hint: "Update, then set."
  },
  {
    id: 19,
    difficulty: "medium",
    category: "filtering",
    question: "Which operator is used to select values within a range?",
    options: ["WITHIN", "BETWEEN", "RANGE", "IN"],
    answer: 1,
    explanation: "BETWEEN is used to select values within a given range (inclusive).",
    hint: "In the middle of."
  },
  {
    id: 20,
    difficulty: "medium",
    category: "basics",
    question: "What is the result of 'SELECT 5 + NULL'?",
    options: ["5", "0", "NULL", "Error"],
    answer: 2,
    explanation: "In SQL, any arithmetic operation involving a NULL results in NULL.",
    hint: "Unknown + number = unknown."
  },
  {
    id: 21,
    difficulty: "hard",
    category: "joins",
    question: "If Table A has 10 rows and Table B has 5 rows, how many rows will a CROSS JOIN produce?",
    options: ["15", "10", "5", "50"],
    answer: 3,
    explanation: "10 * 5 = 50. A Cartesian product multiplies the row counts.",
    hint: "10 times 5."
  },
  {
    id: 22,
    difficulty: "medium",
    category: "basics",
    question: "Which command is used to remove all records from a table without deleting the table structure?",
    options: ["REMOVE", "DROP", "TRUNCATE", "DELETE TABLE"],
    answer: 2,
    explanation: "TRUNCATE removes all rows quickly and usually cannot be rolled back in some DBs, whereas DROP deletes the table itself.",
    hint: "Fast empty."
  },
  {
    id: 23,
    difficulty: "easy",
    category: "basics",
    question: "What is the purpose of the 'AS' keyword?",
    options: ["To sort data", "To give a table or a column a temporary name (alias)", "To join tables", "To define a primary key"],
    answer: 1,
    explanation: "AS is used to create an alias to make column names more readable or to name calculated fields.",
    hint: "Alias."
  },
  {
    id: 24,
    difficulty: "medium",
    category: "filtering",
    question: "The 'IN' operator allows you to:",
    options: [
      "Specify multiple values in a WHERE clause",
      "Insert data into a table",
      "Join two tables",
      "Calculate the average"
    ],
    answer: 0,
    explanation: "IN is shorthand for multiple OR conditions.",
    hint: "Check against a list."
  },
  {
    id: 25,
    difficulty: "hard",
    category: "scenarios",
    question: "You want to delete a specific row where 'ID' is 5. Which statement is correct?",
    options: [
      "DELETE FROM Users WHERE ID = 5",
      "REMOVE FROM Users WHERE ID = 5",
      "TRUNCATE Users WHERE ID = 5",
      "DELETE ID = 5 FROM Users"
    ],
    answer: 0,
    explanation: "DELETE is used with a WHERE clause to remove specific rows.",
    hint: "Delete from... where."
  },
  {
    id: 26,
    difficulty: "medium",
    category: "basics",
    question: "What is a Foreign Key?",
    options: [
      "A key used to encrypt data",
      "A field in one table that refers to the Primary Key in another table",
      "The main key of a table",
      "A key used for indexing only"
    ],
    answer: 1,
    explanation: "Foreign keys establish relationships between tables by pointing to unique identifiers in other tables.",
    hint: "Linking tables."
  },
  {
    id: 27,
    difficulty: "easy",
    category: "basics",
    question: "Which SQL constraint ensures that a column cannot have a NULL value?",
    options: ["UNIQUE", "PRIMARY KEY", "NOT NULL", "CHECK"],
    answer: 2,
    explanation: "The NOT NULL constraint enforces a column to always contain a value.",
    hint: "No nulls allowed."
  },
  {
    id: 28,
    difficulty: "medium",
    category: "filtering",
    question: "How do you select all users whose name starts with 'A'?",
    options: ["SELECT * FROM Users WHERE Name = 'A*'", "SELECT * FROM Users WHERE Name LIKE 'A%'", "SELECT * FROM Users WHERE Name LIKE '%A'", "SELECT * FROM Users WHERE Name = 'A'"],
    answer: 1,
    explanation: "The % at the end means any characters can follow the 'A'.",
    hint: "Starts with A."
  },
  {
    id: 29,
    difficulty: "hard",
    category: "joins",
    question: "Which join returns only rows where there is at least one match in both tables?",
    options: ["LEFT JOIN", "RIGHT JOIN", "INNER JOIN", "FULL JOIN"],
    answer: 2,
    explanation: "INNER JOIN is the most restrictive join, excluding any rows that don't have a match in both sets.",
    hint: "Perfect matches only."
  },
  {
    id: 30,
    difficulty: "medium",
    category: "basics",
    question: "What does the 'AVG()' function calculate?",
    options: ["The total sum", "The average value of a numeric column", "The middle value", "The most frequent value"],
    answer: 1,
    explanation: "AVG() computes the arithmetic mean of a set of numbers.",
    hint: "Mean."
  },
  {
    id: 31,
    difficulty: "hard",
    category: "scenarios",
    question: "When using UNION, the columns in both SELECT statements must:",
    options: [
      "Have the same name",
      "Be in the same order and have similar data types",
      "Be primary keys",
      "Be from the same table"
    ],
    answer: 1,
    explanation: "Union requires structural compatibility: same number of columns, in the same order, with compatible types.",
    hint: "Structure must match."
  },
  {
    id: 32,
    difficulty: "medium",
    category: "filtering",
    question: "What is the difference between '=' and 'LIKE'?",
    options: [
      "There is no difference",
      "'=' is for exact matches; 'LIKE' is for pattern matching with wildcards",
      "'LIKE' is faster",
      "'=' can use % wildcards"
    ],
    answer: 1,
    explanation: "Use '=' for precision and 'LIKE' for partial or fuzzy searches.",
    hint: "Exact vs Pattern."
  },
  {
    id: 33,
    difficulty: "easy",
    category: "basics",
    question: "Which keyword is used to add a column to an existing table?",
    options: ["INSERT COLUMN", "ALTER TABLE", "UPDATE TABLE", "ADD COLUMN"],
    answer: 1,
    explanation: "ALTER TABLE is the DDL command used to change the schema of a table.",
    hint: "Modify the table."
  },
  {
    id: 34,
    difficulty: "hard",
    category: "scenarios",
    question: "Which SQL statement is used to create a view?",
    options: ["CREATE VIEW view_name AS SELECT...", "NEW VIEW view_name AS...", "CREATE VIRTUAL TABLE...", "SAVE SELECT AS VIEW..."],
    answer: 0,
    explanation: "A view is a virtual table based on the result-set of an SQL statement.",
    hint: "Create view as."
  },
  {
    id: 35,
    difficulty: "medium",
    category: "basics",
    question: "What is a 'Primary Key'?",
    options: [
      "Any column in a table",
      "A column that uniquely identifies each row in a table",
      "A column that can be NULL",
      "A column used to store passwords"
    ],
    answer: 1,
    explanation: "A Primary Key must contain unique values and cannot be NULL.",
    hint: "Unique ID."
  },
  {
    id: 36,
    difficulty: "hard",
    category: "filtering",
    question: "How do you select rows where 'Score' is between 50 and 100 (inclusive)?",
    options: ["WHERE Score > 50 AND Score < 100", "WHERE Score BETWEEN 50 AND 100", "WHERE Score IN (50, 100)", "WHERE Score >= 50 OR Score <= 100"],
    answer: 1,
    explanation: "BETWEEN is inclusive of both the start and end values.",
    hint: "Standard range operator."
  },
  {
    id: 37,
    difficulty: "medium",
    category: "basics",
    question: "Which function is used to find the highest value in a column?",
    options: ["HIGHEST()", "TOP()", "MAX()", "UPPER()"],
    answer: 2,
    explanation: "MAX() returns the maximum value in the specified column.",
    hint: "Maximum."
  },
  {
    id: 38,
    difficulty: "easy",
    category: "basics",
    question: "How do you change 'USA' to 'United States' in the 'Country' column of the 'Clients' table?",
    options: [
      "UPDATE Clients SET Country = 'United States' WHERE Country = 'USA'",
      "CHANGE Clients SET Country = 'United States' WHERE Country = 'USA'",
      "MODIFY Clients SET Country = 'United States'",
      "UPDATE Country = 'United States' FROM Clients"
    ],
    answer: 0,
    explanation: "The UPDATE statement modifies existing records.",
    hint: "Update, then set."
  },
  {
    id: 39,
    difficulty: "medium",
    category: "basics",
    question: "What is the default sort order for 'ORDER BY'?",
    options: ["Descending", "Ascending", "Random", "Numerical"],
    answer: 1,
    explanation: "If you don't specify ASC or DESC, SQL defaults to Ascending order.",
    hint: "A to Z."
  },
  {
    id: 40,
    difficulty: "hard",
    category: "set_operations",
    question: "What happens if you use INTERSECT on two tables with different column counts?",
    options: ["It works normally", "It returns only the first column", "It throws an error", "It performs a CROSS JOIN instead"],
    answer: 2,
    explanation: "Like UNION, INTERSECT requires the same number of columns in both queries.",
    hint: "Columns must match."
  },
  {
    id: 41,
    difficulty: "medium",
    category: "basics",
    question: "Which function is used to combine the text from multiple columns into one?",
    options: ["COMBINE()", "CONCAT()", "MERGE()", "JOIN()"],
    answer: 1,
    explanation: "CONCAT (or the || operator in some dialects) is used for string concatenation.",
    hint: "Concatenate."
  },
  {
    id: 42,
    difficulty: "hard",
    category: "joins",
    question: "A 'Natural Join' is based on:",
    options: [
      "Primary keys only",
      "Columns with the same name in both tables",
      "The first column of each table",
      "Random matching"
    ],
    answer: 1,
    explanation: "A NATURAL JOIN implicitly joins tables based on all columns that have the same name in both tables.",
    hint: "Implicit column matching."
  },
  {
    id: 43,
    difficulty: "easy",
    category: "basics",
    question: "How do you delete a table named 'Orders'?",
    options: ["DELETE Orders", "TRUNCATE Orders", "DROP TABLE Orders", "REMOVE TABLE Orders"],
    answer: 2,
    explanation: "DROP TABLE removes the entire table structure and all data permanently.",
    hint: "Destroy the table."
  },
  {
    id: 44,
    difficulty: "medium",
    category: "filtering",
    question: "What does 'WHERE Name LIKE '_r%' mean?",
    options: [
      "Name starts with 'r'",
      "Name has 'r' as the second character",
      "Name ends with 'r'",
      "Name is exactly 2 characters"
    ],
    answer: 1,
    explanation: "The underscore (_) is a wildcard for exactly one character.",
    hint: "One char, then r, then anything."
  },
  {
    id: 45,
    difficulty: "hard",
    category: "scenarios",
    question: "You want to find the total revenue for each month. Which clause must you use with SUM(Revenue)?",
    options: ["ORDER BY Month", "GROUP BY Month", "HAVING Month", "SORT BY Month"],
    answer: 1,
    explanation: "Aggregates like SUM() require a GROUP BY clause to define the buckets for calculation.",
    hint: "Aggregate grouping."
  },
  {
    id: 46,
    difficulty: "medium",
    category: "basics",
    question: "Which command is used to change the name of an existing table?",
    options: ["RENAME TABLE", "ALTER TABLE... RENAME TO", "UPDATE TABLE NAME", "Both 0 and 1 (depending on DB)"],
    answer: 3,
    explanation: "Different SQL dialects use either RENAME TABLE (MySQL) or ALTER TABLE (PostgreSQL/Oracle/SQL Server) to rename tables.",
    hint: "Rename or Alter."
  },
  {
    id: 47,
    difficulty: "hard",
    category: "set_operations",
    question: "Query A returns {1, 2, 3}. Query B returns {2, 3, 4}. What does 'A EXCEPT B' return?",
    options: ["{1}", "{4}", "{1, 4}", "{2, 3}"],
    answer: 0,
    explanation: "EXCEPT returns rows from the first set that do not exist in the second set.",
    hint: "In A but not in B."
  },
  {
    id: 48,
    difficulty: "medium",
    category: "basics",
    question: "The 'CHECK' constraint is used to:",
    options: [
      "Ensure a column has a unique value",
      "Limit the value range that can be placed in a column",
      "Check if a table exists",
      "Verify the user's password"
    ],
    answer: 1,
    explanation: "A CHECK constraint ensures that all values in a column satisfy a specific condition (e.g., Age >= 18).",
    hint: "Validation."
  },
  {
    id: 49,
    difficulty: "easy",
    category: "basics",
    question: "What is the standard port for Microsoft SQL Server?",
    options: ["3306", "5432", "1433", "8080"],
    answer: 2,
    explanation: "1433 is the default port for SQL Server. (3306 is MySQL, 5432 is PostgreSQL).",
    hint: "Fourteen thirty-three."
  },
  {
    id: 50,
    difficulty: "hard",
    category: "scenarios",
    question: "Which of the following joins is likely to result in the most rows?",
    options: ["INNER JOIN", "LEFT JOIN", "CROSS JOIN", "NATURAL JOIN"],
    answer: 2,
    explanation: "A CROSS JOIN (Cartesian Product) results in M * N rows, which is usually significantly larger than the others.",
    hint: "The multiplier."
  },

/* ======================================================
   SQL CERTIFICATION QUESTION BANK (Batch 2: 51-100)
   Topics: Subqueries, CTEs, and Aggregations
   ====================================================== */
  {
    id: 51,
    difficulty: "medium",
    category: "subqueries",
    question: "What is a 'Correlated Subquery'?",
    options: [
      "A subquery that runs independently of the outer query",
      "A subquery that uses values from the outer query and executes once for each row processed by the outer query",
      "A subquery that is joined using a UNION operator",
      "A subquery that only returns one constant value"
    ],
    answer: 1,
    explanation: "Correlated subqueries are evaluated row-by-row for the outer query, making them powerful but potentially slower than standard subqueries.",
    hint: "Row-by-row dependency."
  },
  {
    id: 52,
    difficulty: "hard",
    category: "cte",
    question: "Which keyword is used to define a Common Table Expression (CTE)?",
    options: ["DEFINE", "WITH", "AS", "USING"],
    answer: 1,
    explanation: "A CTE is defined using the WITH keyword followed by the expression name and the AS (query) block.",
    hint: "Starts with 'W'."
  },
  {
    id: 53,
    difficulty: "medium",
    category: "aggregation",
    question: "What is the difference between COUNT(*) and COUNT(column_name)?",
    options: [
      "There is no difference",
      "COUNT(*) counts all rows including NULLs; COUNT(column_name) counts only non-NULL values in that column",
      "COUNT(*) is only for numbers",
      "COUNT(column_name) is faster"
    ],
    answer: 1,
    explanation: "When you specify a column, SQL ignores rows where that specific column's value is NULL.",
    hint: "Handling of NULLs."
  },
  {
    id: 54,
    difficulty: "hard",
    category: "cte",
    question: "What is a 'Recursive CTE'?",
    options: [
      "A CTE that deletes itself after execution",
      "A CTE that references itself to handle hierarchical or tree-structured data",
      "A CTE that runs in a loop 100 times exactly",
      "A CTE used only for mathematical calculations"
    ],
    answer: 1,
    explanation: "Recursive CTEs are essential for querying organizational charts, bill of materials, or any parent-child relationship depth.",
    hint: "Self-referencing query."
  },
  {
    id: 55,
    difficulty: "medium",
    category: "scenarios",
    question: "You want to find the second highest salary in an 'Employees' table. Which approach is valid?",
    options: [
      "SELECT MAX(Salary) FROM Employees WHERE Salary < (SELECT MAX(Salary) FROM Employees)",
      "SELECT Salary FROM Employees ORDER BY Salary DESC LIMIT 1,1",
      "Both 0 and 1 are valid depending on the SQL dialect",
      "SELECT Salary FROM Employees WHERE Rank = 2"
    ],
    answer: 2,
    explanation: "Subqueries or LIMIT/OFFSET (or TOP) are common ways to find N-th highest values.",
    hint: "Filter out the max to find the next max."
  },
  {
    id: 56,
    difficulty: "hard",
    category: "subqueries",
    question: "Where can a subquery NOT be used?",
    options: ["The SELECT clause", "The FROM clause", "The WHERE clause", "The GROUP BY clause (in most dialects)"],
    answer: 3,
    explanation: "While most clauses accept subqueries, using a subquery within a GROUP BY is generally not supported or considered valid syntax.",
    hint: "Grouping requires concrete columns."
  },
  {
    id: 57,
    difficulty: "medium",
    category: "aggregation",
    question: "What happens if you use an aggregate function in a SELECT without a GROUP BY, but also include a non-aggregated column?",
    options: [
      "It returns the first row's value for the non-aggregated column",
      "It throws an error (in standard SQL)",
      "It repeats the aggregate value for every row",
      "It returns NULL"
    ],
    answer: 1,
    explanation: "Standard SQL requires every non-aggregated column in the SELECT list to be present in the GROUP BY clause.",
    hint: "Rule of grouping."
  },
  {
    id: 58,
    difficulty: "easy",
    category: "basics",
    question: "Which operator is used to check if a subquery returns any rows?",
    options: ["ANY", "ALL", "EXISTS", "IN"],
    answer: 2,
    explanation: "EXISTS returns true if the subquery returns at least one record.",
    hint: "Checking existence."
  },
  {
    id: 59,
    difficulty: "medium",
    category: "subqueries",
    question: "What is a 'Scalar Subquery'?",
    options: [
      "A subquery that returns a whole table",
      "A subquery that returns exactly one value (one row and one column)",
      "A subquery used only for scaling numbers",
      "A subquery with more than 10 rows"
    ],
    answer: 1,
    explanation: "Scalar subqueries can be used almost anywhere an expression is used (e.g., in a SELECT list).",
    hint: "Single value."
  },
  {
    id: 60,
    difficulty: "hard",
    category: "scenarios",
    question: "How do you delete duplicate rows from a table while keeping the one with the lowest ID?",
    options: [
      "DELETE FROM Table WHERE ID NOT IN (SELECT MIN(ID) FROM Table GROUP BY DuplicateCol)",
      "DELETE DUPLICATES FROM Table",
      "TRUNCATE TABLE Table",
      "REMOVE ROW WHERE ID > 1"
    ],
    answer: 0,
    explanation: "By grouping by the columns that define a duplicate and selecting the MIN(ID), you identify the 'keepers'.",
    hint: "Delete what is NOT the minimum."
  },
  {
    id: 61,
    difficulty: "medium",
    category: "cte",
    question: "What is a primary benefit of using a CTE over a subquery?",
    options: [
      "CTEs are always faster",
      "CTEs improve readability and allow the result to be referenced multiple times in the same query",
      "CTEs can be indexed",
      "CTEs are stored permanently in the database"
    ],
    answer: 1,
    explanation: "CTEs make complex queries easier to follow by breaking them into named logical blocks.",
    hint: "Clean code/readability."
  },
  {
    id: 62,
    difficulty: "medium",
    category: "aggregation",
    question: "The 'HAVING' clause is typically used with which other clause?",
    options: ["ORDER BY", "WHERE", "GROUP BY", "LIMIT"],
    answer: 2,
    explanation: "HAVING is used to filter aggregated data generated by a GROUP BY clause.",
    hint: "Filtering groups."
  },
  {
    id: 63,
    difficulty: "hard",
    category: "subqueries",
    question: "What does the 'ALL' operator do when used with a subquery?",
    options: [
      "Returns true if the condition is met for ALL values in the subquery result",
      "Returns all columns from the subquery",
      "Joins all rows",
      "Clears all data"
    ],
    answer: 0,
    explanation: "Example: 'WHERE Price > ALL (SELECT Price FROM...)' means the price must be higher than every value returned by the subquery.",
    hint: "Universal condition."
  },
  {
    id: 64,
    difficulty: "medium",
    category: "scenarios",
    question: "Which query correctly finds employees whose salary is above the average salary of the company?",
    options: [
      "SELECT * FROM Employees WHERE Salary > AVG(Salary)",
      "SELECT * FROM Employees WHERE Salary > (SELECT AVG(Salary) FROM Employees)",
      "SELECT * FROM Employees HAVING Salary > AVG(Salary)",
      "SELECT AVG(Salary) FROM Employees WHERE Salary > AVG"
    ],
    answer: 1,
    explanation: "You cannot use an aggregate function like AVG directly in a WHERE clause; you must use a subquery.",
    hint: "Calculate average in a sub-step."
  },
  {
    id: 65,
    difficulty: "hard",
    category: "cte",
    question: "Can you use multiple CTEs in a single query?",
    options: [
      "No, only one WITH per query",
      "Yes, separated by commas after the single WITH keyword",
      "Yes, by using the WITH keyword before every CTE name",
      "Only if they are not related"
    ],
    answer: 1,
    explanation: "Syntax: WITH cte1 AS (...), cte2 AS (...) SELECT ...",
    hint: "Comma-separated definitions."
  },
  {
    id: 66,
    difficulty: "medium",
    category: "aggregation",
    question: "Which function ignores NULL values by default?",
    options: ["COUNT(*)", "SUM()", "MAX()", "Both 1 and 2"],
    answer: 3,
    explanation: "Most aggregate functions (SUM, AVG, MIN, MAX, COUNT(col)) ignore NULLs; only COUNT(*) includes them.",
    hint: "Math on NULL is ignored."
  },
  {
    id: 67,
    difficulty: "easy",
    category: "basics",
    question: "What does 'SELECT 1' usually indicate when used in an EXISTS subquery?",
    options: [
      "It returns the number 1 for every row",
      "It is a convention to minimize overhead since EXISTS only cares if a row is returned, not what is in it",
      "It selects only the first column",
      "It checks if the ID is 1"
    ],
    answer: 1,
    explanation: "Since EXISTS only checks for the presence of rows, the actual columns selected don't matter.",
    hint: "Efficient existence check."
  },
  {
    id: 68,
    difficulty: "hard",
    category: "subqueries",
    question: "What is a 'Derived Table'?",
    options: [
      "A table created on the hard drive",
      "A subquery used in the FROM clause of a SELECT statement",
      "A table that has a foreign key",
      "A view"
    ],
    answer: 1,
    explanation: "Derived tables (also called inline views) must be given an alias in most SQL dialects.",
    hint: "Subquery in the FROM clause."
  },
  {
    id: 69,
    difficulty: "medium",
    category: "scenarios",
    question: "You want to find departments that have more than 10 employees. What is the correct query?",
    options: [
      "SELECT DeptID FROM Employees WHERE COUNT(ID) > 10",
      "SELECT DeptID FROM Employees GROUP BY DeptID HAVING COUNT(ID) > 10",
      "SELECT DeptID FROM Employees GROUP BY DeptID WHERE COUNT(ID) > 10",
      "SELECT DeptID FROM Employees HAVING COUNT(ID) > 10"
    ],
    answer: 1,
    explanation: "Aggregated conditions (COUNT > 10) must be placed in the HAVING clause after grouping.",
    hint: "Group then Have."
  },
  {
    id: 70,
    difficulty: "hard",
    category: "cte",
    question: "What happens to a CTE after the query finishes executing?",
    options: [
      "It is saved as a View",
      "It is stored in the TempDB",
      "It is discarded (it only exists during the scope of that single query)",
      "It is cached for 24 hours"
    ],
    answer: 2,
    explanation: "Unlike views or temporary tables, CTEs are not persistent objects.",
    hint: "Temporary scope."
  },
  {
    id: 71,
    difficulty: "medium",
    category: "subqueries",
    question: "In the query 'SELECT * FROM T1 WHERE col IN (SELECT col FROM T2)', what happens if the subquery returns a NULL?",
    options: [
      "The query crashes",
      "The IN operator ignores the NULL and continues matching other values",
      "The query returns no rows at all",
      "NULL is treated as an empty string"
    ],
    answer: 1,
    explanation: "The IN operator works with NULLs in the list, but note that NOT IN with a NULL in the subquery result will return no rows.",
    hint: "IN is safe with NULLs."
  },
  {
    id: 72,
    difficulty: "hard",
    category: "aggregation",
    question: "How do you calculate the 'Median' in standard SQL?",
    options: [
      "Using the MEDIAN() function",
      "There is no standard MEDIAN() function; it often requires sorting and picking the middle value or using PERCENTILE_CONT",
      "SUM(val) / 2",
      "AVG(DISTINCT val)"
    ],
    answer: 1,
    explanation: "Median calculation varies greatly by dialect (Oracle has MEDIAN, but SQL Server and PostgreSQL often use window functions).",
    hint: "Not a standard function."
  },
  {
    id: 73,
    difficulty: "medium",
    category: "basics",
    question: "What is 'Unnesting' or 'Flattening' a subquery?",
    options: [
      "Deleting the subquery",
      "The optimizer converting a subquery into a JOIN for better performance",
      "Converting a table to a CSV",
      "Combining two WHERE clauses"
    ],
    answer: 1,
    explanation: "Modern database optimizers try to rewrite subqueries as joins because joins are often more efficient to execute.",
    hint: "Optimizer magic."
  },
  {
    id: 74,
    difficulty: "hard",
    category: "cte",
    question: "Which part of a Recursive CTE is executed only once?",
    options: ["The recursive member", "The anchor member", "The termination condition", "The final SELECT"],
    answer: 1,
    explanation: "The anchor member provides the starting result set; the recursive member then runs repeatedly on those results.",
    hint: "The starting point."
  },
  {
    id: 75,
    difficulty: "medium",
    category: "scenarios",
    question: "Which clause is used to return only the first 10 rows in PostgreSQL?",
    options: ["TOP 10", "LIMIT 10", "FETCH FIRST 10 ROWS ONLY", "Both 1 and 2"],
    answer: 3,
    explanation: "PostgreSQL supports both the LIMIT syntax and the SQL-standard FETCH FIRST syntax.",
    hint: "LIMIT or FETCH."
  },
  {
    id: 76,
    difficulty: "medium",
    category: "subqueries",
    question: "Can a subquery return more than one column?",
    options: [
      "No, only scalar subqueries exist",
      "Yes, if used with the EXISTS operator or in the FROM clause",
      "Only if columns are of the same type",
      "Only in MySQL"
    ],
    answer: 1,
    explanation: "Subqueries in the FROM clause (Derived Tables) or used with EXISTS can return multiple columns.",
    hint: "Depends on where it's used."
  },
  {
    id: 77,
    difficulty: "hard",
    category: "aggregation",
    question: "What is the result of 'SUM()' on a column where all values are NULL?",
    options: ["0", "NULL", "Error", "1"],
    answer: 1,
    explanation: "Unlike COUNT(*), which would return 0, the SUM of only NULL values is NULL.",
    hint: "NULL sum."
  },
  {
    id: 78,
    difficulty: "easy",
    category: "basics",
    question: "Which keyword can be used instead of 'IN' to check a single value returned by a subquery?",
    options: ["=", "LIKE", "MATCH", "SAME"],
    answer: 0,
    explanation: "If a subquery is guaranteed to return one row and one column, the '=' operator is appropriate.",
    hint: "Equal to."
  },
  {
    id: 79,
    difficulty: "hard",
    category: "cte",
    question: "In a Recursive CTE, what happens if the recursive member keeps returning data indefinitely?",
    options: [
      "The database crashes",
      "An error occurs once the maximum recursion limit (e.g., MAXRECURSION in SQL Server) is reached",
      "The query result is truncated",
      "The server restarts"
    ],
    answer: 1,
    explanation: "Most systems have a safety limit (default 100 in SQL Server) to prevent infinite loops.",
    hint: "Recursion limit."
  },
  {
    id: 80,
    difficulty: "medium",
    category: "scenarios",
    question: "How do you select the top 5% of records in SQL Server?",
    options: ["SELECT TOP 5 PERCENT * FROM ...", "SELECT * FROM ... LIMIT 5%", "SELECT * FROM ... FETCH 5 PERCENT", "SELECT * FROM ... WHERE RANK < 5%"],
    answer: 0,
    explanation: "SQL Server's TOP clause allows for a PERCENT keyword.",
    hint: "Top Percent."
  },
  {
    id: 81,
    difficulty: "medium",
    category: "aggregation",
    question: "What is the purpose of the 'GROUPING SETS' clause?",
    options: [
      "To group data by a single column",
      "To define multiple groupings in the same query (a generalization of GROUP BY)",
      "To sort groups",
      "To delete groups"
    ],
    answer: 1,
    explanation: "GROUPING SETS allows you to produce a result set equivalent to UNION ALL-ing several GROUP BY queries.",
    hint: "Multiple grouping levels."
  },
  {
    id: 82,
    difficulty: "hard",
    category: "subqueries",
    question: "What is the performance implication of using 'NOT IN' with a subquery that could return a NULL?",
    options: [
      "It is much faster",
      "The entire query will return zero results because 'val != NULL' is never true",
      "It only affects the NULL row",
      "It makes no difference"
    ],
    answer: 1,
    explanation: "In SQL, 'NOT IN (1, 2, NULL)' is evaluated as 'val != 1 AND val != 2 AND val != NULL'. Since 'val != NULL' is UNKNOWN, the whole expression is never TRUE.",
    hint: "The NOT IN NULL trap."
  },
  {
    id: 83,
    difficulty: "medium",
    category: "cte",
    question: "Can a CTE be used inside a View definition?",
    options: ["Yes", "No", "Only in SQL Server", "Only if it is recursive"],
    answer: 0,
    explanation: "Views can contain CTEs to organize the logic that the view encapsulates.",
    hint: "Views + WITH."
  },
  {
    id: 84,
    difficulty: "hard",
    category: "aggregation",
    question: "What is 'CUBE' in the context of GROUP BY?",
    options: [
      "A 3D visualization of data",
      "An extension that generates subtotals for all combinations of grouping columns",
      "A way to square the results",
      "A specialized join"
    ],
    answer: 1,
    explanation: "If you CUBE(a, b), you get groupings for (a,b), (a), (b), and an overall grand total.",
    hint: "All possible combinations."
  },
  {
    id: 85,
    difficulty: "medium",
    category: "scenarios",
    question: "How do you combine results from two queries and keep only the records unique to each query?",
    options: ["UNION", "UNION ALL", "INTERSECT", "EXCEPT (or MINUS)"],
    answer: 3,
    explanation: "EXCEPT returns rows from the first query that are not in the second.",
    hint: "Difference operation."
  },
  {
    id: 86,
    difficulty: "hard",
    category: "subqueries",
    question: "Which keyword is a synonym for 'SOME' in subqueries?",
    options: ["ANY", "ALL", "EXISTS", "UNIQUE"],
    answer: 0,
    explanation: "ANY and SOME are interchangeable in SQL and check if any value in the result set meets the condition.",
    hint: "Interchangeable with ANY."
  },
  {
    id: 87,
    difficulty: "medium",
    category: "basics",
    question: "Which clause executes before 'HAVING'?",
    options: ["ORDER BY", "SELECT", "WHERE", "Both 1 and 2"],
    answer: 2,
    explanation: "The execution order is FROM -> WHERE -> GROUP BY -> HAVING -> SELECT -> ORDER BY.",
    hint: "Rows are filtered before groups."
  },
  {
    id: 88,
    difficulty: "hard",
    category: "aggregation",
    question: "What does the 'ROLLUP' extension do in a GROUP BY?",
    options: [
      "It generates hierarchical subtotals (moving from right to left)",
      "It deletes the rows after summing",
      "It sorts the results",
      "It limits the rows"
    ],
    answer: 0,
    explanation: "ROLLUP(a, b) creates totals for (a, b), (a), and a grand total.",
    hint: "Hierarchy-based subtotals."
  },
  {
    id: 89,
    difficulty: "medium",
    category: "scenarios",
    question: "You need to update data in Table A based on values in Table B. What is the most common tool?",
    options: ["A subquery in the SET or WHERE clause", "A JOIN within the UPDATE statement", "Both 0 and 1", "UNION"],
    answer: 2,
    explanation: "Depending on the database (SQL Server uses JOIN, others use subqueries), both methods are used to perform multi-table updates.",
    hint: "Cross-table updates."
  },
  {
    id: 90,
    difficulty: "hard",
    category: "cte",
    question: "When using a CTE, where must the primary query (the one using the CTE) be placed?",
    options: [
      "Anywhere in the script",
      "Immediately following the CTE definition",
      "Before the WITH keyword",
      "In a separate file"
    ],
    answer: 1,
    explanation: "The query consuming the CTE must follow the 'AS (...)' block directly.",
    hint: "Immediate consumption."
  },
  {
    id: 91,
    difficulty: "medium",
    category: "aggregation",
    question: "Can you use an alias created in the SELECT clause within the WHERE clause of the same query?",
    options: [
      "Yes, always",
      "No, because the WHERE clause is evaluated before the SELECT clause",
      "Only in MySQL",
      "Only if the alias is a number"
    ],
    answer: 1,
    explanation: "Because of the logical processing order, the WHERE clause doesn't know about aliases created in the SELECT.",
    hint: "Processing order."
  },
  {
    id: 92,
    difficulty: "hard",
    category: "subqueries",
    question: "What is an 'Independent Subquery'?",
    options: [
      "A subquery that can be executed on its own without the outer query",
      "A subquery that has no SELECT",
      "A subquery that is not correlated",
      "Both 0 and 2"
    ],
    answer: 3,
    explanation: "Independent (non-correlated) subqueries are evaluated once, and their results are used by the outer query.",
    hint: "Runs once."
  },
  {
    id: 93,
    difficulty: "medium",
    category: "cte",
    question: "What happens if you define a CTE but don't use it in the following query?",
    options: ["The query fails", "It runs normally, but the CTE logic is ignored", "The database creates a table anyway", "It slows down the server significantly"],
    answer: 1,
    explanation: "The database will generally optimize it out, but it won't cause an error.",
    hint: "Defined but not used."
  },
  {
    id: 94,
    difficulty: "hard",
    category: "aggregation",
    question: "What is the 'GROUPING()' function used for?",
    options: [
      "To group rows",
      "To distinguish between actual NULL values and NULLs created by ROLLUP/CUBE for subtotals",
      "To count the number of groups",
      "To sort groups"
    ],
    answer: 1,
    explanation: "GROUPING() returns 1 if the row is a subtotal and 0 if it is a regular data row.",
    hint: "Subtotal detection."
  },
  {
    id: 95,
    difficulty: "medium",
    category: "scenarios",
    question: "Which SQL command is used to move data from one table to a new, non-existing table?",
    options: ["INSERT INTO", "SELECT INTO", "UPDATE", "CREATE AS"],
    answer: 1,
    explanation: "SELECT INTO (SQL Server) creates a new table and fills it with the results of the query.",
    hint: "Select and create."
  },
  {
    id: 96,
    difficulty: "hard",
    category: "subqueries",
    question: "What is the maximum number of subqueries you can nest?",
    options: ["10", "32 (commonly, but varies by database)", "No limit", "Unlimited by hardware"],
    answer: 1,
    explanation: "While technically very high, many RDBMS (like SQL Server) have a limit around 32 levels for practical execution.",
    hint: "Nesting depth."
  },
  {
    id: 97,
    difficulty: "medium",
    category: "basics",
    question: "What is the result of 'SELECT COUNT(NULL)'?",
    options: ["1", "0", "NULL", "Error"],
    answer: 1,
    explanation: "COUNT(expression) only counts non-NULL values. Since the expression is NULL, the count is 0.",
    hint: "Counting emptiness."
  },
  {
    id: 98,
    difficulty: "hard",
    category: "scenarios",
    question: "How do you use a CTE to update the same table it selects from?",
    options: [
      "It is impossible",
      "Define the CTE, then immediately use an UPDATE statement that joins the table to the CTE",
      "Use the WITH keyword inside the UPDATE",
      "Update the CTE name directly"
    ],
    answer: 1,
    explanation: "This is a common pattern for updating rows based on calculated or aggregated values from the same table.",
    hint: "Join update to CTE."
  },
  {
    id: 99,
    difficulty: "medium",
    category: "basics",
    question: "Does a CTE have a schema?",
    options: ["Yes, defined by its column names and data types in the query", "No, it is just text", "Only if it is recursive", "Only in Oracle"],
    answer: 0,
    explanation: "Like any result set, a CTE has a temporary schema (columns and types) inferred from its query.",
    hint: "Structure."
  },
  {
    id: 100,
    difficulty: "hard",
    category: "aggregation",
    question: "What is the logical difference between WHERE and HAVING?",
    options: [
      "WHERE filters individual rows; HAVING filters grouped rows (aggregates)",
      "WHERE is for text; HAVING is for numbers",
      "HAVING is faster",
      "There is no difference"
    ],
    answer: 0,
    explanation: "WHERE happens before data is grouped; HAVING happens after.",
    hint: "Pre-group vs Post-group."
  },
/* ======================================================
   SQL CERTIFICATION QUESTION BANK (Batch 3: 101-150)
   Topics: Window Functions, Partitions, and Optimization
   ====================================================== */
  {
    id: 101,
    difficulty: "hard",
    category: "window_functions",
    question: "What is the purpose of the 'OVER' clause in SQL?",
    options: [
      "To end a query",
      "To define a window or set of rows the window function will operate on",
      "To join more than two tables",
      "To bypass the WHERE clause"
    ],
    answer: 1,
    explanation: "The OVER clause is required for window functions and determines how rows are grouped and ordered for the calculation.",
    hint: "Defines the scope of a function."
  },
  {
    id: 102,
    difficulty: "medium",
    category: "window_functions",
    question: "What is the difference between RANK() and DENSE_RANK()?",
    options: [
      "There is no difference",
      "RANK() skips numbers in case of a tie; DENSE_RANK() does not",
      "DENSE_RANK() skips numbers; RANK() does not",
      "RANK() only works with numbers"
    ],
    answer: 1,
    explanation: "If two rows are tied for 1st, RANK() gives 1, 1, 3. DENSE_RANK() gives 1, 1, 2.",
    hint: "Gaps vs No Gaps."
  },
  {
    id: 103,
    difficulty: "hard",
    category: "performance",
    question: "What does an 'EXPLAIN' or 'EXPLAIN ANALYZE' statement do?",
    options: [
      "It provides a text description of the table columns",
      "It displays the execution plan chosen by the database optimizer to run a query",
      "It formats the code for better readability",
      "It explains the error messages"
    ],
    answer: 1,
    explanation: "Profiling tools like EXPLAIN help identify if a query is using indexes or performing slow full-table scans.",
    hint: "Execution plan."
  },
  {
    id: 104,
    difficulty: "medium",
    category: "partitioning",
    question: "What does 'PARTITION BY' do inside a window function?",
    options: [
      "It deletes rows based on a condition",
      "It divides the result set into partitions to which the function is applied independently",
      "It physicaly splits the table on the disk",
      "It sorts the entire table"
    ],
    answer: 1,
    explanation: "Unlike GROUP BY, PARTITION BY allows you to perform calculations across groups without collapsing the individual rows.",
    hint: "Groups for calculations, but keeps rows."
  },
  {
    id: 105,
    difficulty: "hard",
    category: "performance",
    question: "What is a 'Full Table Scan'?",
    options: [
      "A fast way to read data",
      "When the database must read every single row in a table because no suitable index was found",
      "A process to back up the database",
      "Cleaning the database memory"
    ],
    answer: 1,
    explanation: "Full scans are usually slow on large tables; performance tuning aims to replace these with index seeks.",
    hint: "Reading every page."
  },
  {
    id: 106,
    difficulty: "medium",
    category: "window_functions",
    question: "Which function would you use to find the value of a row immediately preceding the current row?",
    options: ["LEAD()", "LAG()", "PREV()", "FIRST_VALUE()"],
    answer: 1,
    explanation: "LAG() accesses data from a previous row in the same result set without a self-join.",
    hint: "Falling behind."
  },
  {
    id: 107,
    difficulty: "hard",
    category: "optimization",
    question: "What is a 'Covering Index'?",
    options: [
      "An index that covers all tables in a DB",
      "An index that includes all columns required by a query, allowing the DB to avoid reading the actual table",
      "A primary key index",
      "A hidden index"
    ],
    answer: 1,
    explanation: "A covering index allows the optimizer to fulfill the SELECT and WHERE requirements solely from the index leaf nodes.",
    hint: "All-inclusive index."
  },
  {
    id: 108,
    difficulty: "medium",
    category: "window_functions",
    question: "What does 'ROW_NUMBER()' return?",
    options: [
      "The ID of the row",
      "A unique sequential integer assigned to rows within a partition",
      "The total count of rows",
      "The row's memory address"
    ],
    answer: 1,
    explanation: "ROW_NUMBER() provides a simple incrementing counter (1, 2, 3...) regardless of ties.",
    hint: "Sequential counting."
  },
  {
    id: 109,
    difficulty: "hard",
    category: "performance",
    question: "What is 'SARGability' in SQL performance tuning?",
    options: [
      "The ability to run queries on a server",
      "Search ARGument-ability: Writing queries in a way that allows the optimizer to use indexes efficiently",
      "Sorting all rows by grouping",
      "A security feature"
    ],
    answer: 1,
    explanation: "Functions on columns (e.g., WHERE YEAR(date) = 2021) usually break SARGability and prevent index usage.",
    hint: "Index-friendly queries."
  },
  {
    id: 110,
    difficulty: "medium",
    category: "optimization",
    question: "Why is 'SELECT *' generally discouraged for performance?",
    options: [
      "It causes a syntax error",
      "It increases I/O overhead and network traffic by fetching unnecessary columns",
      "It disables all indexes",
      "It locks the table for too long"
    ],
    answer: 1,
    explanation: "Fetching only the columns you need reduces data transfer and memory usage.",
    hint: "Fetching too much data."
  },
  {
    id: 111,
    difficulty: "hard",
    category: "window_functions",
    question: "How do you calculate a 'Running Total' in SQL?",
    options: [
      "SUM(Sales) OVER (ORDER BY Date)",
      "SUM(Sales) GROUP BY Date",
      "SELECT SUM(Sales) FROM Table",
      "RUNNING_SUM(Sales)"
    ],
    answer: 0,
    explanation: "Using SUM() with an ORDER BY clause in the OVER window creates a cumulative sum.",
    hint: "Sum over ordered rows."
  },
  {
    id: 112,
    difficulty: "medium",
    category: "partitioning",
    question: "What is 'Horizontal Partitioning'?",
    options: [
      "Splitting columns into separate tables",
      "Splitting rows into separate tables (or physical files) based on a key like Date or Region",
      "Sorting data horizontally",
      "Using a wider monitor for SQL"
    ],
    answer: 1,
    explanation: "Large tables are often partitioned horizontally (Sharding) to improve manageability and performance.",
    hint: "Row-based splitting."
  },
  {
    id: 113,
    difficulty: "hard",
    category: "performance",
    question: "What is an 'Index Seek' vs an 'Index Scan'?",
    options: [
      "They are the same",
      "A Seek navigates the B-Tree to find specific rows; a Scan reads the entire index",
      "A Scan is always faster",
      "A Seek reads the whole table"
    ],
    answer: 1,
    explanation: "Index Seeks are highly efficient because they target only the necessary data points.",
    hint: "Targeted vs Broad search."
  },
  {
    id: 114,
    difficulty: "medium",
    category: "optimization",
    question: "Which operator is usually faster for checking existence: IN or EXISTS?",
    options: [
      "IN is always faster",
      "EXISTS is often faster because it stops searching as soon as it finds a match",
      "They are exactly the same in all DBs",
      "Both are slow"
    ],
    answer: 1,
    explanation: "While modern optimizers treat them similarly, EXISTS is traditionally better at 'short-circuiting' logic.",
    hint: "Stop at first match."
  },
  {
    id: 115,
    difficulty: "hard",
    category: "window_functions",
    question: "What does 'LEAD(Salary, 2)' do?",
    options: [
      "Multiplies salary by 2",
      "Returns the salary value from the row 2 positions ahead of the current row",
      "Returns the top 2 salaries",
      "Compares the salary to the manager's"
    ],
    answer: 1,
    explanation: "The second argument in LEAD/LAG specifies the offset (number of rows to look forward/backward).",
    hint: "Looking forward."
  },
  {
    id: 116,
    difficulty: "medium",
    category: "performance",
    question: "What is the purpose of 'Database Statistics'?",
    options: [
      "To count how many people use the DB",
      "To provide the optimizer with metadata about data distribution so it can choose the best plan",
      "To prevent data corruption",
      "To calculate the average row size"
    ],
    answer: 1,
    explanation: "If statistics are outdated, the optimizer might choose a slow execution plan based on incorrect assumptions.",
    hint: "Metadata for the optimizer."
  },
  {
    id: 117,
    difficulty: "hard",
    category: "optimization",
    question: "What is 'Predicate Pushdown'?",
    options: [
      "Pushing a button to run a query",
      "An optimization where filtering (WHERE) is performed as early as possible, often before joining or data transfer",
      "Deleting filters",
      "A type of join"
    ],
    answer: 1,
    explanation: "Filtering early reduces the volume of data that needs to be processed in subsequent steps (like joins).",
    hint: "Filter early."
  },
  {
    id: 118,
    difficulty: "medium",
    category: "window_functions",
    question: "What is 'NTILE(4)' used for?",
    options: [
      "To select 4 rows",
      "To divide a result set into four roughly equal groups (Quartiles)",
      "To multiply values by 4",
      "To join 4 tables"
    ],
    answer: 1,
    explanation: "NTILE distributes rows into a specified number of buckets.",
    hint: "Grouping into buckets."
  },
  {
    id: 119,
    difficulty: "hard",
    category: "performance",
    question: "Which type of index is physically stored in the same order as the table data?",
    options: ["Non-Clustered Index", "Clustered Index", "Bitmap Index", "Unique Index"],
    answer: 1,
    explanation: "A table can have only one Clustered Index because the data rows themselves can only be sorted in one order.",
    hint: "Physical order."
  },
  {
    id: 120,
    difficulty: "medium",
    category: "optimization",
    question: "What is 'Query Refactoring'?",
    options: [
      "Deleting the query",
      "Rewriting a query to improve performance or readability without changing the result set",
      "Moving the query to a new server",
      "Changing the database password"
    ],
    answer: 1,
    explanation: "Common refactors include replacing subqueries with joins or avoiding unnecessary distinct operations.",
    hint: "Rewrite for speed."
  },
  {
    id: 121,
    difficulty: "hard",
    category: "window_functions",
    question: "What is the default 'Frame Clause' in a window function when ORDER BY is used but no frame is specified?",
    options: [
      "ROWS BETWEEN UNBOUNDED PRECEDING AND UNBOUNDED FOLLOWING",
      "RANGE BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW",
      "ROWS BETWEEN 1 PRECEDING AND 1 FOLLOWING",
      "There is no default"
    ],
    answer: 1,
    explanation: "This is why SUM() with ORDER BY creates a running total—it defaults to including all rows up to the current one.",
    hint: "Start to Current."
  },
  {
    id: 122,
    difficulty: "medium",
    category: "performance",
    question: "What is a 'Deadlock' in a database?",
    options: [
      "When the database is deleted",
      "When two or more transactions are waiting for each other to release locks, causing a permanent freeze",
      "A very fast transaction",
      "A failed login attempt"
    ],
    answer: 1,
    explanation: "Databases usually have a deadlock detector that kills one transaction to let the others proceed.",
    hint: "Mutual waiting."
  },
  {
    id: 123,
    difficulty: "hard",
    category: "optimization",
    question: "What is the benefit of 'Parameter Sniffing'?",
    options: [
      "It helps find bugs in code",
      "The optimizer creates an execution plan tailored to the specific parameter values provided",
      "It allows users to see passwords",
      "It speeds up network traffic"
    ],
    answer: 1,
    explanation: "While usually helpful, it can cause 'Parameter Sniffing issues' if a plan for a 'rare' value is used for a 'common' value.",
    hint: "Tailored plans."
  },
  {
    id: 124,
    difficulty: "medium",
    category: "partitioning",
    question: "What is 'Vertical Partitioning'?",
    options: [
      "Splitting rows",
      "Splitting a table into multiple tables with fewer columns (e.g., moving large Blobs to a separate table)",
      "Deleting columns",
      "Sorting by column name"
    ],
    answer: 1,
    explanation: "Vertical partitioning is often used to put frequently accessed columns in one table and rarely accessed large data in another.",
    hint: "Column-based splitting."
  },
  {
    id: 125,
    difficulty: "hard",
    category: "window_functions",
    question: "Which function returns the relative rank of a row as a percentage (0 to 1)?",
    options: ["CUME_DIST()", "PERCENT_RANK()", "PERCENTILE_CONT()", "RANK_PCT()"],
    answer: 1,
    explanation: "PERCENT_RANK() calculates the percentile rank of a row within a partition.",
    hint: "Rank as percentage."
  },
  {
    id: 126,
    difficulty: "medium",
    category: "performance",
    question: "What is a 'Heap' table?",
    options: [
      "A table with too much data",
      "A table without a clustered index where data is stored in no particular order",
      "A table used only for numbers",
      "A very fast table"
    ],
    answer: 1,
    explanation: "Finding data in a heap usually requires a full scan unless non-clustered indexes are present.",
    hint: "Unordered storage."
  },
  {
    id: 127,
    difficulty: "hard",
    category: "optimization",
    question: "What is 'Cardinality' in the context of SQL optimization?",
    options: [
      "The number of tables in a query",
      "The number of unique values in a column relative to the total number of rows",
      "The size of the database",
      "The speed of the processor"
    ],
    answer: 1,
    explanation: "High cardinality (like an ID) makes for great indexes; low cardinality (like Gender) often makes for poor indexes.",
    hint: "Uniqueness ratio."
  },
  {
    id: 128,
    difficulty: "medium",
    category: "window_functions",
    question: "Can you use window functions in a WHERE clause?",
    options: [
      "Yes",
      "No, you must wrap the query in a CTE or subquery to filter by window results",
      "Only in MySQL",
      "Only if they are simple"
    ],
    answer: 1,
    explanation: "Window functions are calculated after the WHERE clause, so they aren't available for filtering directly.",
    hint: "Order of operations."
  },
  {
    id: 129,
    difficulty: "hard",
    category: "performance",
    question: "What is 'I/O Bound' vs 'CPU Bound'?",
    options: [
      "Types of databases",
      "I/O Bound means waiting for disk/network; CPU Bound means waiting for processing/calculation",
      "I/O is always faster",
      "CPU is always faster"
    ],
    answer: 1,
    explanation: "Slow queries are often I/O bound due to reading large amounts of data from disk.",
    hint: "Hardware bottlenecks."
  },
  {
    id: 130,
    difficulty: "medium",
    category: "optimization",
    question: "What does the 'TOP' (or LIMIT) clause do for performance?",
    options: [
      "It slows down the query",
      "It allows the optimizer to 'short-circuit' and stop processing once the threshold is met",
      "It deletes the remaining rows",
      "It has no effect"
    ],
    answer: 1,
    explanation: "Limiting the result set can significantly reduce the amount of data the engine needs to sort or process.",
    hint: "Early exit."
  },
  {
    id: 131,
    difficulty: "hard",
    category: "window_functions",
    question: "What is the result of 'FIRST_VALUE(col) OVER (PARTITION BY group ORDER BY val)'?",
    options: [
      "The maximum value in the group",
      "The value of 'col' from the first row in the sorted partition",
      "The first column of the table",
      "The average value"
    ],
    answer: 1,
    explanation: "It extracts a specific value from the beginning of a window frame.",
    hint: "Start of the window."
  },
  {
    id: 132,
    difficulty: "medium",
    category: "performance",
    question: "What is a 'Fragmented Index'?",
    options: [
      "An index that is broken and unusable",
      "An index where the logical order of pages does not match the physical order on disk, slowing down scans",
      "A very small index",
      "A deleted index"
    ],
    answer: 1,
    explanation: "Frequent inserts and deletes cause fragmentation; indexes should be rebuilt or reorganized regularly.",
    hint: "Disorganized pages."
  },
  {
    id: 133,
    difficulty: "hard",
    category: "optimization",
    question: "What is a 'Hash Join'?",
    options: [
      "A join using the # symbol",
      "An algorithm where the DB creates a hash table of the smaller input to quickly find matches in the larger input",
      "A very slow join",
      "A join used for security"
    ],
    answer: 1,
    explanation: "Hash joins are effective for large, unsorted data sets.",
    hint: "In-memory join table."
  },
  {
    id: 134,
    difficulty: "medium",
    category: "partitioning",
    question: "What is 'Partition Pruning'?",
    options: [
      "Deleting old partitions",
      "An optimization where the engine skips reading partitions that cannot possibly contain the requested data",
      "Sorting partitions",
      "Merging partitions"
    ],
    answer: 1,
    explanation: "If you query by Date and the table is partitioned by Date, the engine only reads relevant files.",
    hint: "Skipping irrelevant data."
  },
  {
    id: 135,
    difficulty: "hard",
    category: "window_functions",
    question: "Which window function calculates the cumulative distribution of a value?",
    options: ["CUME_DIST()", "RANK_DIST()", "TOTAL_PCT()", "PERCENT_DIST()"],
    answer: 0,
    explanation: "CUME_DIST() returns the number of rows with values less than or equal to the current row divided by the total count.",
    hint: "Cumulative Distribution."
  },
  {
    id: 136,
    difficulty: "medium",
    category: "performance",
    question: "What is 'Lock Escalation'?",
    options: [
      "Moving a lock to a different table",
      "When the database converts many fine-grained locks (like row locks) into a single coarse-grained lock (like a table lock)",
      "Unlocking a table",
      "Increasing the user's priority"
    ],
    answer: 1,
    explanation: "Escalation reduces memory pressure from millions of locks but increases the chance of blocking other users.",
    hint: "Small locks to big lock."
  },
  {
    id: 137,
    difficulty: "hard",
    category: "optimization",
    question: "What is the difference between a 'B-Tree' index and a 'Bitmap' index?",
    options: [
      "No difference",
      "B-Trees are for high cardinality; Bitmaps are for low cardinality (like 'Yes/No' columns)",
      "Bitmaps are only for images",
      "B-Trees are only for text"
    ],
    answer: 1,
    explanation: "Bitmaps use bit arrays and are extremely fast for queries combining multiple low-cardinality criteria.",
    hint: "Trees vs Bits."
  },
  {
    id: 138,
    difficulty: "medium",
    category: "window_functions",
    question: "In 'ROWS BETWEEN 2 PRECEDING AND CURRENT ROW', how many rows are in the frame?",
    options: ["2", "3", "1", "Variable"],
    answer: 1,
    explanation: "The frame includes the two rows before plus the current row (Total: 3).",
    hint: "Count them: -2, -1, 0."
  },
  {
    id: 139,
    difficulty: "hard",
    category: "performance",
    question: "What is 'Wait Statistics'?",
    options: [
      "Counting how many users are waiting",
      "Information about what the database engine is waiting for (e.g., Disk I/O, CPU, Network)",
      "The time it takes to log in",
      "The average query time"
    ],
    answer: 1,
    explanation: "Wait stats are the 'gold standard' for finding the root cause of slow performance.",
    hint: "Identifying bottlenecks."
  },
  {
    id: 140,
    difficulty: "medium",
    category: "optimization",
    question: "What is a 'Filtered Index'?",
    options: [
      "An index used to filter data",
      "An index that only includes rows that meet a specific predicate (e.g., WHERE Status = 'Active')",
      "A temporary index",
      "An index on a view"
    ],
    answer: 1,
    explanation: "Filtered indexes are smaller and faster to maintain because they only track a subset of the data.",
    hint: "Index on a subset."
  },
  {
    id: 141,
    difficulty: "hard",
    category: "window_functions",
    question: "What is 'Window Spooling' in an execution plan?",
    options: [
      "A fast window calculation",
      "An operator that buffers rows into memory or disk to perform window calculations",
      "Deleting window data",
      "A type of join"
    ],
    answer: 1,
    explanation: "Excessive spooling can indicate that the window frame is too large for memory.",
    hint: "Buffering for windows."
  },
  {
    id: 142,
    difficulty: "medium",
    category: "performance",
    question: "How does a 'Unique Index' help performance?",
    options: [
      "It doesn't; it's only for data integrity",
      "It allows the optimizer to stop searching as soon as a single match is found",
      "It makes the data smaller",
      "It allows for faster math"
    ],
    answer: 1,
    explanation: "Knowledge of uniqueness allows for optimized search algorithms.",
    hint: "Stop at 1 match."
  },
  {
    id: 143,
    difficulty: "hard",
    category: "optimization",
    question: "What is 'Denormalization' and when is it used for performance?",
    options: [
      "Deleting tables",
      "Intentionally adding redundant data to reduce the number of joins needed for queries",
      "Splitting tables into many small pieces",
      "Organizing data by ID"
    ],
    answer: 1,
    explanation: "Denormalization speeds up reads at the cost of slower writes and increased storage space.",
    hint: "Sacrificing purity for speed."
  },
  {
    id: 144,
    difficulty: "medium",
    category: "window_functions",
    question: "What is 'LAST_VALUE(col)' often used with to ensure it works correctly?",
    options: [
      "A frame clause (e.g., RANGE BETWEEN UNBOUNDED PRECEDING AND UNBOUNDED FOLLOWING)",
      "A WHERE clause",
      "A GROUP BY clause",
      "An index"
    ],
    answer: 0,
    explanation: "Because the default frame ends at the current row, LAST_VALUE will just return the current row unless the frame is expanded.",
    hint: "Expanding the frame."
  },
  {
    id: 145,
    difficulty: "hard",
    category: "performance",
    question: "What is 'Parallelism' in SQL execution?",
    options: [
      "Running two different queries at once",
      "Using multiple CPU cores to execute a single query faster",
      "Copying the database",
      "Using two servers"
    ],
    answer: 1,
    explanation: "Queries with high 'cost' are often split into threads across multiple processors.",
    hint: "Multi-core execution."
  },
  {
    id: 146,
    difficulty: "medium",
    category: "optimization",
    question: "What is 'Deferred Loading' or 'Lazy Loading'?",
    options: [
      "Not loading data at all",
      "Delaying the retrieval of large data (like Blobs) until they are actually needed",
      "Loading data slowly",
      "Loading data only at night"
    ],
    answer: 1,
    explanation: "This keeps the main query result sets small and fast.",
    hint: "Load later."
  },
  {
    id: 147,
    difficulty: "hard",
    category: "window_functions",
    question: "What does 'RANGE' (vs ROWS) do in a frame clause?",
    options: [
      "It counts rows",
      "It treats rows with the same ORDER BY values as a single peer group",
      "It is faster than ROWS",
      "It is for dates only"
    ],
    answer: 1,
    explanation: "RANGE is based on logical values, whereas ROWS is based on physical row counts.",
    hint: "Value-based vs Count-based."
  },
  {
    id: 148,
    difficulty: "medium",
    category: "performance",
    question: "What is 'Buffer Cache Hit Ratio'?",
    options: [
      "The percentage of data requests satisfied from memory rather than disk",
      "The number of users logged in",
      "The size of the hard drive",
      "The speed of the network"
    ],
    answer: 0,
    explanation: "A high ratio (e.g., 99%) indicates that the database has enough RAM for its active data set.",
    hint: "Memory efficiency."
  },
  {
    id: 149,
    difficulty: "hard",
    category: "optimization",
    question: "What is a 'Nested Loop Join'?",
    options: [
      "A join that never ends",
      "For each row in the outer table, the engine searches for matching rows in the inner table",
      "A join between 3 tables",
      "A fast join for large tables"
    ],
    answer: 1,
    explanation: "Nested loops are very fast for small data sets or when the inner table is indexed on the join key.",
    hint: "Loop within a loop."
  },
  {
    id: 150,
    difficulty: "medium",
    category: "basics",
    question: "Which profiling tool is commonly used in MySQL?",
    options: ["SQL Profiler", "SHOW PROFILE / EXPLAIN", "Query Store", "Performance Monitor"],
    answer: 1,
    explanation: "MySQL uses EXPLAIN for plan analysis and SHOW PROFILE for execution timing.",
    hint: "MySQL profiling."
  },

/* ======================================================
   SQL CERTIFICATION QUESTION BANK (Batch 4: 151-200)
   Topics: Materialized Views, Architecture, and Advanced Joins
   ====================================================== */
  {
    id: 151,
    difficulty: "hard",
    category: "views",
    question: "What is the primary difference between a Standard View and a Materialized View?",
    options: [
      "Standard Views are faster for all queries",
      "Materialized Views physically store the result set on disk; Standard Views are virtual and run the query every time",
      "Standard Views can only be used once",
      "Materialized Views do not support joins"
    ],
    answer: 1,
    explanation: "Because Materialized Views store data, they provide much faster read performance for complex aggregations at the cost of storage and refresh maintenance.",
    hint: "Virtual vs Physical storage."
  },
  {
    id: 152,
    difficulty: "medium",
    category: "joins",
    question: "In a 'Self Join', how do you distinguish between the two instances of the same table?",
    options: [
      "By using the table name twice",
      "By using table aliases (e.g., T1 and T2)",
      "The database does it automatically",
      "You cannot join a table to itself"
    ],
    answer: 1,
    explanation: "Aliases are mandatory in a self-join to clarify which instance of the table a column belongs to.",
    hint: "Giving a table a nickname."
  },
  {
    id: 153,
    difficulty: "hard",
    category: "architecture",
    question: "What is 'ACID' compliance in database transactions?",
    options: [
      "A type of data encryption",
      "Atomicity, Consistency, Isolation, Durability",
      "Access, Control, Integration, Delivery",
      "A database cleaning process"
    ],
    answer: 1,
    explanation: "ACID properties ensure that database transactions are processed reliably and maintain data integrity even in the event of errors or crashes.",
    hint: "The gold standard for transactions."
  },
  {
    id: 154,
    difficulty: "medium",
    category: "indexes",
    question: "What is a 'Composite Index'?",
    options: [
      "An index made of multiple tables",
      "An index that includes two or more columns from the same table",
      "An index that is both clustered and non-clustered",
      "An index that automatically deletes itself"
    ],
    answer: 1,
    explanation: "Composite indexes are useful for queries that filter or sort by multiple specific columns together.",
    hint: "Multi-column index."
  },
  {
    id: 155,
    difficulty: "hard",
    category: "views",
    question: "When should you use a 'Materialized View Refresh'?",
    options: [
      "Every time a user logs in",
      "When the underlying base table data changes and you need the view to reflect the latest state",
      "Only when the database restarts",
      "Never; they update automatically in all DBs"
    ],
    answer: 1,
    explanation: "Unlike standard views, materialized views must be refreshed (manually or on a schedule) to stay synchronized with source data.",
    hint: "Syncing physical data."
  },
  {
    id: 156,
    difficulty: "medium",
    category: "joins",
    question: "What is the result of a 'FULL OUTER JOIN' if there are no matches between the tables?",
    options: [
      "An empty result set",
      "All rows from both tables, with NULLs in the columns where no match exists",
      "An error",
      "Only the rows from the left table"
    ],
    answer: 1,
    explanation: "A Full Outer Join is the union of a Left and Right join, preserving all data from both sides.",
    hint: "Total inclusion."
  },
  {
    id: 157,
    difficulty: "hard",
    category: "architecture",
    question: "What does the 'Isolation' level 'Read Committed' prevent?",
    options: [
      "Dirty Reads",
      "Non-repeatable Reads",
      "Phantom Reads",
      "Deadlocks"
    ],
    answer: 0,
    explanation: "Read Committed ensures that a transaction only sees data that has already been committed by other transactions.",
    hint: "Prevents reading uncommitted changes."
  },
  {
    id: 158,
    difficulty: "medium",
    category: "performance",
    question: "Which index type is best for a column with a very low number of unique values (e.g., 'Gender')?",
    options: ["B-Tree Index", "Bitmap Index", "Clustered Index", "Unique Index"],
    answer: 1,
    explanation: "Bitmap indexes are highly efficient for low-cardinality columns and allow for fast boolean operations.",
    hint: "Low cardinality specialist."
  },
  {
    id: 159,
    difficulty: "hard",
    category: "scenarios",
    question: "What is the risk of having too many indexes on a single table?",
    options: [
      "The database will crash",
      "SELECT queries become slower",
      "INSERT, UPDATE, and DELETE operations become slower because every index must be updated",
      "The table becomes read-only"
    ],
    answer: 2,
    explanation: "While indexes speed up reads, they impose a 'write tax' because the engine must maintain every index during modifications.",
    hint: "The cost of writing."
  },
  {
    id: 160,
    difficulty: "medium",
    category: "joins",
    question: "Which join is equivalent to a comma in the FROM clause: 'SELECT * FROM TableA, TableB'?",
    options: ["INNER JOIN", "CROSS JOIN", "LEFT JOIN", "NATURAL JOIN"],
    answer: 1,
    explanation: "Listing tables separated by commas without a JOIN condition creates a Cartesian Product, which is a CROSS JOIN.",
    hint: "The 'old school' cross join."
  },
  {
    id: 161,
    difficulty: "hard",
    category: "architecture",
    question: "What is 'Database Normalization'?",
    options: [
      "The process of making all data types the same",
      "The process of organizing data to reduce redundancy and improve data integrity",
      "The process of backing up the database",
      "A way to speed up SELECT * queries"
    ],
    answer: 1,
    explanation: "Normalization involves dividing large tables into smaller ones and defining relationships between them.",
    hint: "Eliminating redundancy."
  },
  {
    id: 162,
    difficulty: "medium",
    category: "views",
    question: "Can you perform an UPDATE on a Standard View?",
    options: [
      "No, views are read-only",
      "Yes, if the view is 'Updatable' (usually references only one table and contains no aggregations)",
      "Only if it is a Materialized View",
      "Only in SQL Server"
    ],
    answer: 1,
    explanation: "Simple views that map directly to table rows can often be used to update the underlying table data.",
    hint: "Updatable views."
  },
  {
    id: 163,
    difficulty: "hard",
    category: "performance",
    question: "What is 'Index Fragmentation'?",
    options: [
      "When an index is deleted",
      "When the physical order of index pages no longer matches the logical order, leading to poor I/O performance",
      "When an index has too many columns",
      "When an index is spread across multiple servers"
    ],
    answer: 1,
    explanation: "Fragmentation occurs as a result of data modifications (INSERT/DELETE) and can be fixed by rebuilding the index.",
    hint: "Scattered data pages."
  },
  {
    id: 164,
    difficulty: "medium",
    category: "scenarios",
    question: "How do you check for rows in Table A that do not have a corresponding match in Table B?",
    options: [
      "INNER JOIN",
      "LEFT JOIN where the Table B key IS NULL",
      "FULL OUTER JOIN",
      "CROSS JOIN"
    ],
    answer: 1,
    explanation: "A LEFT JOIN combined with a NULL check effectively finds the 'orphans' or missing records in the second table.",
    hint: "The 'anti-join' pattern."
  },
  {
    id: 165,
    difficulty: "hard",
    category: "architecture",
    question: "What is the 'Durability' aspect of ACID?",
    options: [
      "The database is fast",
      "Once a transaction is committed, it remains committed even in the case of a system failure (e.g., power outage)",
      "The data cannot be deleted",
      "Only one user can access the data at a time"
    ],
    answer: 1,
    explanation: "Durability is usually achieved through transaction logs that are written to non-volatile storage before the commit completes.",
    hint: "Permanent survival."
  },
  {
    id: 166,
    difficulty: "medium",
    category: "indexes",
    question: "What is a 'Non-Clustered Index'?",
    options: [
      "An index that doesn't work",
      "A separate structure from the data rows that contains pointers to the actual data",
      "An index on a temporary table",
      "An index that is created automatically"
    ],
    answer: 1,
    explanation: "Unlike clustered indexes, non-clustered indexes do not change the physical order of the table data.",
    hint: "Like an index at the back of a book."
  },
  {
    id: 167,
    difficulty: "hard",
    category: "views",
    question: "What is 'Query Rewrite' in the context of Materialized Views?",
    options: [
      "Manually editing a query",
      "The optimizer automatically changing a user's query to use a Materialized View instead of the base tables for speed",
      "Deleting a query and starting over",
      "Changing SQL into Java code"
    ],
    answer: 1,
    explanation: "Query Rewrite is a powerful feature where the database 'knows' a view already has the answer and uses it transparently.",
    hint: "Automatic optimization to a view."
  },
  {
    id: 168,
    difficulty: "medium",
    category: "joins",
    question: "What is a 'Natural Join'?",
    options: [
      "A join using the '+' symbol",
      "A join that automatically matches columns with the same name across tables",
      "A join on the Primary Key only",
      "A join that doesn't use a WHERE clause"
    ],
    answer: 1,
    explanation: "Natural joins are convenient but dangerous if tables are later modified with new columns sharing the same names.",
    hint: "Implicit matching."
  },
  {
    id: 169,
    difficulty: "hard",
    category: "performance",
    question: "What is 'Fill Factor' in index tuning?",
    options: [
      "The amount of data in a table",
      "The percentage of space on each leaf-level page to be filled with data, leaving room for future growth",
      "The speed of the index",
      "The number of indexes on a table"
    ],
    answer: 1,
    explanation: "Setting a lower fill factor can reduce 'page splits' by leaving empty space for new rows.",
    hint: "Room for expansion."
  },
  {
    id: 170,
    difficulty: "medium",
    category: "architecture",
    question: "What is 'First Normal Form' (1NF)?",
    options: [
      "Data is stored in a single table",
      "Table has no duplicate rows and every column contains atomic (indivisible) values",
      "Table has a foreign key",
      "All data is capitalized"
    ],
    answer: 1,
    explanation: "1NF prohibits 'repeating groups' or arrays within a single column.",
    hint: "Atomic values."
  },
  {
    id: 171,
    difficulty: "hard",
    category: "scenarios",
    question: "How do you resolve a 'Non-SARGable' query like: WHERE YEAR(OrderDate) = 2023?",
    options: [
      "Use an index on OrderDate",
      "Rewrite it to: WHERE OrderDate >= '2023-01-01' AND OrderDate < '2024-01-01'",
      "Use a subquery",
      "There is no way to optimize it"
    ],
    answer: 1,
    explanation: "Applying a function to a column prevents the engine from using an index on that column. Range checks are index-friendly.",
    hint: "Avoid functions on columns."
  },
  {
    id: 172,
    difficulty: "medium",
    category: "indexes",
    question: "Which constraint automatically creates a Unique Index?",
    options: ["NOT NULL", "PRIMARY KEY", "CHECK", "DEFAULT"],
    answer: 1,
    explanation: "Because Primary Keys must be unique, the database engine creates a unique index to enforce this requirement.",
    hint: "Identifier constraint."
  },
  {
    id: 173,
    difficulty: "hard",
    category: "architecture",
    question: "What is 'Third Normal Form' (3NF)?",
    options: [
      "It is in 2NF and has no transitive functional dependencies (non-key columns don't depend on other non-key columns)",
      "It has three tables",
      "It has no primary keys",
      "It is fully denormalized"
    ],
    answer: 0,
    explanation: "3NF ensures that every non-key column depends only on the primary key, and nothing else.",
    hint: "The key, the whole key, and nothing but the key."
  },
  {
    id: 174,
    difficulty: "medium",
    category: "views",
    question: "What is the 'WITH CHECK OPTION' in a view?",
    options: [
      "It checks for syntax errors",
      "It prevents updates to the view that would make the row disappear from the view's criteria",
      "It makes the view read-only",
      "It encrypts the view"
    ],
    answer: 1,
    explanation: "It ensures that any data inserted or updated through the view stays within the scope defined by the view's WHERE clause.",
    hint: "Constraint on view edits."
  },
  {
    id: 175,
    difficulty: "hard",
    category: "performance",
    question: "What is the 'Cardinality' of a column containing Social Security Numbers?",
    options: ["Low", "High", "Medium", "Zero"],
    answer: 1,
    explanation: "High cardinality means most values are unique, which is ideal for indexing.",
    hint: "Uniqueness level."
  },
  {
    id: 176,
    difficulty: "medium",
    category: "joins",
    question: "What is a 'Theta Join'?",
    options: [
      "A join using the Greek letter Theta",
      "A join that uses comparison operators other than equality (e.g., <, >, <=, >=)",
      "A join between two different databases",
      "A join that ignores NULLs"
    ],
    answer: 1,
    explanation: "While most joins are 'Equi-joins' (=), a Theta join uses any arbitrary logical relationship.",
    hint: "Non-equal joins."
  },
  {
    id: 177,
    difficulty: "hard",
    category: "architecture",
    question: "What is a 'Database Deadlock'?",
    options: [
      "A database that is no longer used",
      "A situation where two transactions wait for each other to release locks, preventing either from continuing",
      "A deleted primary key",
      "A slow network connection"
    ],
    answer: 1,
    explanation: "The database management system must intervene and roll back one of the transactions to break the loop.",
    hint: "Mutual blockage."
  },
  {
    id: 178,
    difficulty: "medium",
    category: "indexes",
    question: "What is an 'Index Include' (Included Columns)?",
    options: [
      "Adding more rows to an index",
      "Adding non-key columns to the leaf level of a non-clustered index to make it a covering index",
      "A way to join tables",
      "A primary key feature"
    ],
    answer: 1,
    explanation: "Included columns are not part of the search criteria but are stored with the index to avoid extra table lookups (Key Lookups).",
    hint: "Covering queries without extra keys."
  },
  {
    id: 179,
    difficulty: "hard",
    category: "performance",
    question: "What does 'Statistics Update' do for a database?",
    options: [
      "Counts the number of users",
      "Recalculates the data distribution to help the optimizer choose the most efficient execution plan",
      "Updates the records in a table",
      "Clears the cache"
    ],
    answer: 1,
    explanation: "Outdated statistics lead to poor query plans and slow performance.",
    hint: "Optimizer intelligence."
  },
  {
    id: 180,
    difficulty: "medium",
    category: "scenarios",
    question: "Which operator would you use to find customers who are in 'London' OR 'Paris'?",
    options: ["BETWEEN", "IN", "LIKE", "EXISTS"],
    answer: 1,
    explanation: "IN is the most efficient way to check a value against a set of discrete possibilities.",
    hint: "Check against a list."
  },
  {
    id: 181,
    difficulty: "hard",
    category: "architecture",
    question: "What is 'Referential Integrity'?",
    options: [
      "The speed of the database",
      "A property ensuring that relationships between tables remain consistent, usually via Foreign Keys",
      "The ability to refer to columns by name",
      "A security protocol"
    ],
    answer: 1,
    explanation: "It prevents 'orphaned' records, such as an Order referring to a Customer ID that does not exist.",
    hint: "Consistency between tables."
  },
  {
    id: 182,
    difficulty: "medium",
    category: "views",
    question: "What is an 'Indexed View' (SQL Server term)?",
    options: [
      "A view with an index, making it effectively a Materialized View",
      "A view that only selects indexes",
      "A view that is hidden",
      "A view that is faster to create"
    ],
    answer: 0,
    explanation: "In SQL Server, creating a unique clustered index on a view materializes it.",
    hint: "Persistent view data."
  },
  {
    id: 183,
    difficulty: "hard",
    category: "performance",
    question: "What is 'Parameter Sniffing'?",
    options: [
      "A security breach",
      "When the engine creates an execution plan based on the parameters passed during the first compilation",
      "Searching for text in a database",
      "A type of data compression"
    ],
    answer: 1,
    explanation: "It can be good, but it becomes a problem if the first set of parameters isn't representative of typical usage.",
    hint: "Plan cached for first value."
  },
  {
    id: 184,
    difficulty: "medium",
    category: "joins",
    question: "What happens in a 'Left Join' if the right table has multiple matches for one row in the left table?",
    options: [
      "It returns only the first match",
      "The left row is duplicated for every match in the right table",
      "It throws an error",
      "It returns NULL"
    ],
    answer: 1,
    explanation: "Joins can increase the row count of your result set if there is a one-to-many relationship.",
    hint: "Row multiplication."
  },
  {
    id: 185,
    difficulty: "hard",
    category: "architecture",
    question: "What is 'Vertical Scaling' (Scaling Up)?",
    options: [
      "Adding more servers",
      "Adding more resources (CPU, RAM, SSD) to a single existing server",
      "Splitting a table into columns",
      "Writing longer queries"
    ],
    answer: 1,
    explanation: "Vertical scaling is limited by the maximum capacity of a single machine.",
    hint: "Bigger hardware."
  },
  {
    id: 186,
    difficulty: "medium",
    category: "indexes",
    question: "What is a 'Filtered Index'?",
    options: [
      "An index used to filter data",
      "An index that only includes a subset of rows based on a WHERE clause",
      "A temporary index",
      "An index on a calculated column"
    ],
    answer: 1,
    explanation: "Filtered indexes save space and reduce maintenance costs by only indexing 'relevant' rows (e.g., only unpaid invoices).",
    hint: "Index on a subset."
  },
  {
    id: 187,
    difficulty: "hard",
    category: "performance",
    question: "What is 'Execution Plan Recompilation'?",
    options: [
      "Restarting the server",
      "When the engine decides to throw away a cached plan and create a new one due to data changes",
      "A syntax error",
      "Deleting the history"
    ],
    answer: 1,
    explanation: "Recompilation ensures the plan is optimal for the current data distribution, but frequent recompiles can waste CPU.",
    hint: "Refreshing the strategy."
  },
  {
    id: 188,
    difficulty: "medium",
    category: "scenarios",
    question: "How do you select the top 10 rows in Oracle?",
    options: ["SELECT TOP 10 *", "SELECT * FROM ... FETCH FIRST 10 ROWS ONLY", "LIMIT 10", "FIRST 10"],
    answer: 1,
    explanation: "Modern Oracle versions use the FETCH FIRST syntax, though older versions used ROWNUM.",
    hint: "ANSI Standard fetch."
  },
  {
    id: 189,
    difficulty: "hard",
    category: "architecture",
    question: "What is 'Horizontal Scaling' (Scaling Out)?",
    options: [
      "Adding more RAM",
      "Adding more machines to a system (e.g., using a distributed database cluster)",
      "Making tables wider",
      "Adding more indexes"
    ],
    answer: 1,
    explanation: "Horizontal scaling allows for nearly infinite growth by spreading data across many servers.",
    hint: "More machines."
  },
  {
    id: 190,
    difficulty: "medium",
    category: "indexes",
    question: "What is 'Index Intersection'?",
    options: [
      "When two indexes share a column",
      "When the optimizer uses multiple indexes to satisfy a query by combining their results",
      "A join between indexes",
      "A broken index"
    ],
    answer: 1,
    explanation: "The database can scan two different indexes and 'intersect' the resulting pointers to find the rows.",
    hint: "Combining two indexes."
  },
  {
    id: 191,
    difficulty: "hard",
    category: "performance",
    question: "What is a 'Key Lookup' (or Bookmark Lookup)?",
    options: [
      "Finding a key in a table",
      "When a non-clustered index doesn't have all the columns, the engine must go to the main table to get them",
      "Using a primary key",
      "A fast search"
    ],
    answer: 1,
    explanation: "Key lookups can be expensive in large loops; they are resolved by creating a 'covering index'.",
    hint: "Going back to the table."
  },
  {
    id: 192,
    difficulty: "medium",
    category: "joins",
    question: "Which join returns all rows from the right table and matching rows from the left?",
    options: ["INNER JOIN", "LEFT JOIN", "RIGHT JOIN", "FULL JOIN"],
    answer: 2,
    explanation: "A Right Join is the mirror image of a Left Join.",
    hint: "Preserve the right side."
  },
  {
    id: 193,
    difficulty: "hard",
    category: "architecture",
    question: "What is 'Database Sharding'?",
    options: [
      "Deleting data",
      "A type of horizontal partitioning where data is spread across multiple physical database instances",
      "Backing up data",
      "Indexing a table"
    ],
    answer: 1,
    explanation: "Sharding is used to scale extremely large applications by ensuring no single server holds the entire dataset.",
    hint: "Breaking the database into pieces."
  },
  {
    id: 194,
    difficulty: "medium",
    category: "views",
    question: "Why would you use a View for security?",
    options: [
      "Views are encrypted",
      "To grant users access to a subset of columns without giving them access to the entire base table",
      "Views don't require passwords",
      "Views are hidden from hackers"
    ],
    answer: 1,
    explanation: "Views can hide sensitive information (like salary or SSN) from unauthorized users.",
    hint: "Filtering columns for users."
  },
  {
    id: 195,
    difficulty: "hard",
    category: "performance",
    question: "What is a 'Wait Type' in SQL Server?",
    options: [
      "The time a user waits for a query",
      "A specific category indicating why a thread is waiting (e.g., PAGEIOLATCH for disk, SOS_SCHEDULER_YIELD for CPU)",
      "A type of database error",
      "A slow login"
    ],
    answer: 1,
    explanation: "Analyzing wait types is crucial for identifying hardware or configuration bottlenecks.",
    hint: "The reason for the delay."
  },
  {
    id: 196,
    difficulty: "medium",
    category: "scenarios",
    question: "How do you find the number of unique cities in a 'Customers' table?",
    options: ["COUNT(City)", "COUNT(DISTINCT City)", "DISTINCT COUNT(City)", "SUM(City)"],
    answer: 1,
    explanation: "COUNT(DISTINCT ...) filters the values to unique ones before counting.",
    hint: "Unique count."
  },
  {
    id: 177,
    difficulty: "hard",
    category: "architecture",
    question: "What is the 'Isolation' property of ACID?",
    options: [
      "Running the database on its own server",
      "Ensuring that concurrent transactions do not interfere with each other",
      "Keeping the data away from the public",
      "Using only one table at a time"
    ],
    answer: 1,
    explanation: "Isolation determines how and when changes made by one operation become visible to others.",
    hint: "Transaction privacy."
  },
  {
    id: 198,
    difficulty: "medium",
    category: "indexes",
    question: "What is 'Index Selectivity'?",
    options: [
      "The ability to select which index to use",
      "A measure of how effectively an index filters data (Unique values / Total rows)",
      "The number of indexes on a table",
      "A fast index"
    ],
    answer: 1,
    explanation: "High selectivity means the index narrows down the search to very few rows, making it efficient.",
    hint: "Filtering efficiency."
  },
  {
    id: 199,
    difficulty: "hard",
    category: "performance",
    question: "What is 'Database Profiling'?",
    options: [
      "Creating a user profile",
      "The process of recording and analyzing query performance to identify bottlenecks",
      "Designing a database",
      "Deleting old data"
    ],
    answer: 1,
    explanation: "Tools like SQL Profiler or Extended Events are used to monitor real-time database activity.",
    hint: "Performance monitoring."
  },
  {
    id: 200,
    difficulty: "medium",
    category: "basics",
    question: "Which clause is used to delete a table and all its data?",
    options: ["DELETE TABLE", "TRUNCATE TABLE", "DROP TABLE", "REMOVE TABLE"],
    answer: 2,
    explanation: "DROP TABLE is a DDL command that removes the entire object from the database.",
    hint: "Goodbye table."
  },

/* ======================================================
   SQL CERTIFICATION QUESTION BANK (Batch 5: 201-250)
   Topics: Stored Procedures, Triggers, and Transactions
   ====================================================== */

  {
    id: 201,
    difficulty: "medium",
    category: "programmability",
    question: "What is a Stored Procedure?",
    options: [
      "A table that stores data permanently",
      "A prepared SQL code that you can save and reuse over and over again",
      "A type of index",
      "A database backup file"
    ],
    answer: 1,
    explanation: "Stored procedures allow for modular programming, better security, and reduced network traffic.",
    hint: "Reusable SQL code blocks."
  },
  {
    id: 202,
    difficulty: "hard",
    category: "triggers",
    question: "What is a 'Trigger' in SQL?",
    options: [
      "A command that deletes the database",
      "A special type of stored procedure that automatically runs when an event occurs in the database server",
      "A button in the UI",
      "A way to speed up SELECT queries"
    ],
    answer: 1,
    explanation: "Triggers are used to enforce business rules or maintain audit trails automatically during INSERT, UPDATE, or DELETE actions.",
    hint: "Automatic reaction to data changes."
  },
  {
    id: 203,
    difficulty: "medium",
    category: "transactions",
    question: "Which command is used to permanently save the changes made in a transaction?",
    options: ["SAVE", "COMMIT", "ROLLBACK", "FINISH"],
    answer: 1,
    explanation: "COMMIT makes all pending data changes permanent in the database.",
    hint: "The opposite of Rollback."
  },
  {
    id: 204,
    difficulty: "hard",
    category: "transactions",
    question: "What does the 'ROLLBACK' command do?",
    options: [
      "Deletes the entire table",
      "Undo the changes made in the current transaction",
      "Restarts the server",
      "Backs up the database"
    ],
    answer: 1,
    explanation: "If an error occurs, ROLLBACK restores the data to its state at the beginning of the transaction.",
    hint: "Undo."
  },
  {
    id: 205,
    difficulty: "medium",
    category: "programmability",
    question: "What is the difference between a Stored Procedure and a User-Defined Function (UDF)?",
    options: [
      "Functions must return a value; Procedures do not have to",
      "Procedures can have side effects (like updating tables); Functions generally should not",
      "Functions can be used in a SELECT statement; Procedures cannot",
      "All of the above"
    ],
    answer: 3,
    explanation: "Functions are designed for computation and return values, while procedures are designed for executing business logic.",
    hint: "Think about return values and usage in SELECT."
  },
  {
    id: 206,
    difficulty: "hard",
    category: "scenarios",
    question: "How do you prevent a 'SQL Injection' attack?",
    options: [
      "By using only SELECT statements",
      "By using Parameterized Queries or Prepared Statements",
      "By encrypting the database",
      "By using shorter table names"
    ],
    answer: 1,
    explanation: "Parameterized queries ensure that user input is treated as data, not as executable code.",
    hint: "Don't concatenate strings with user input."
  },
  {
    id: 207,
    difficulty: "medium",
    category: "transactions",
    question: "What is a 'SAVEPOINT'?",
    options: [
      "The point where the database is backed up",
      "A way to roll back a transaction to a specific point rather than the entire beginning",
      "A primary key",
      "The end of a query"
    ],
    answer: 1,
    explanation: "SAVEPOINTs allow for granular control over complex multi-step transactions.",
    hint: "Partial rollback marker."
  },
  {
    id: 208,
    difficulty: "hard",
    category: "triggers",
    question: "What is an 'INSTEAD OF' trigger?",
    options: [
      "A trigger that runs after an update",
      "A trigger that replaces the standard action of the triggering statement",
      "A trigger used only for SELECT",
      "A trigger that never runs"
    ],
    answer: 1,
    explanation: "These are often used on views to make them updatable when they otherwise wouldn't be.",
    hint: "Replacement logic."
  },
  {
    id: 209,
    difficulty: "medium",
    category: "performance",
    question: "What is the purpose of 'SET NOCOUNT ON' in SQL Server stored procedures?",
    options: [
      "To stop counting users",
      "To prevent the 'n rows affected' message from being sent to the client, reducing network traffic",
      "To disable all triggers",
      "To speed up math calculations"
    ],
    answer: 1,
    explanation: "This is a simple performance optimization for procedures that perform many small operations.",
    hint: "Silence the row count message."
  },
  {
    id: 210,
    difficulty: "hard",
    category: "architecture",
    question: "What is a 'Log File' (Transaction Log) used for?",
    options: [
      "To store user passwords",
      "To record all changes made to the database to ensure ACID durability and support recovery",
      "To store the database schema",
      "To store images"
    ],
    answer: 1,
    explanation: "The log allows the database to 'replay' or 'undo' actions during a recovery process.",
    hint: "A history of all changes."
  },
  {
    id: 211,
    difficulty: "medium",
    category: "programmability",
    question: "What are 'Output Parameters' in stored procedures?",
    options: [
      "The text printed to the console",
      "Variables that allow a procedure to return values back to the calling program",
      "The final result set of a query",
      "Error messages"
    ],
    answer: 1,
    explanation: "Output parameters allow you to return individual pieces of data without returning a full result set.",
    hint: "Returning data via variables."
  },
  {
    id: 212,
    difficulty: "hard",
    category: "transactions",
    question: "What is a 'Phantom Read'?",
    options: [
      "Reading data that doesn't exist",
      "When a transaction re-runs a query and finds new 'phantom' rows added by another committed transaction",
      "A deleted record",
      "A failed read"
    ],
    answer: 1,
    explanation: "Phantom reads are prevented by the 'Serializable' isolation level.",
    hint: "Appearance of new rows."
  },
  {
    id: 213,
    difficulty: "medium",
    category: "scenarios",
    question: "Which keyword is used to handle errors in a SQL Server stored procedure?",
    options: ["TRY...CATCH", "ERROR...HANDLE", "ON ERROR GOTO", "IF ERROR"],
    answer: 0,
    explanation: "Structured error handling allows developers to manage exceptions gracefully.",
    hint: "Common programming error pattern."
  },
  {
    id: 214,
    difficulty: "hard",
    category: "architecture",
    question: "What is 'Database Replication'?",
    options: [
      "Making a backup once a year",
      "The process of copying data from one database to another to keep them in sync",
      "Deleting duplicate data",
      "Comparing two databases"
    ],
    answer: 1,
    explanation: "Replication is used for high availability, load balancing, and data distribution.",
    hint: "Keeping multiple copies in sync."
  },
  {
    id: 215,
    difficulty: "medium",
    category: "basics",
    question: "What is 'Dynamic SQL'?",
    options: [
      "SQL that runs very fast",
      "SQL code that is generated and executed at runtime as a string",
      "SQL used for animations",
      "A type of join"
    ],
    answer: 1,
    explanation: "Dynamic SQL is flexible but should be used carefully to avoid SQL injection risks.",
    hint: "Building queries on the fly."
  },
  {
    id: 216,
    difficulty: "hard",
    category: "performance",
    question: "What is a 'Table Variable' vs a 'Temporary Table'?",
    options: [
      "No difference",
      "Table variables exist only in memory (mostly) and have limited scope; Temp tables are stored in TempDB",
      "Temp tables are always faster",
      "Table variables can have indexes"
    ],
    answer: 1,
    explanation: "Table variables (@table) are generally for small datasets; Temporary tables (#table) are for larger sets and support more features.",
    hint: "Memory scope vs TempDB."
  },
  {
    id: 217,
    difficulty: "medium",
    category: "scenarios",
    question: "How do you call a stored procedure named 'GetRevenue'?",
    options: ["CALL GetRevenue", "EXEC GetRevenue", "RUN GetRevenue", "Both 0 and 1 (depending on DB)"],
    answer: 3,
    explanation: "SQL Server uses EXEC, while MySQL and PostgreSQL typically use CALL.",
    hint: "Execute or Call."
  },
  {
    id: 218,
    difficulty: "hard",
    category: "triggers",
    question: "What are the 'Inserted' and 'Deleted' logical tables in triggers?",
    options: [
      "Tables that store history",
      "Special memory-resident tables that show the state of rows before and after the data modification",
      "Tables used to store recycle bin data",
      "The main database tables"
    ],
    answer: 1,
    explanation: "Triggers use these to compare old values with new values for audit or validation logic.",
    hint: "Before and After snapshots."
  },
  {
    id: 219,
    difficulty: "medium",
    category: "transactions",
    question: "What does 'Atomicity' mean in ACID?",
    options: [
      "The data is tiny",
      "The transaction is 'all or nothing'—it either succeeds completely or fails completely",
      "The database is fast",
      "Only one user can connect"
    ],
    answer: 1,
    explanation: "Atomicity prevents partial updates that could leave the data in an inconsistent state.",
    hint: "Indivisible."
  },
  {
    id: 220,
    difficulty: "hard",
    category: "architecture",
    question: "What is a 'Candidate Key'?",
    options: [
      "A primary key that is running for election",
      "Any column or set of columns that could uniquely identify a row",
      "A foreign key",
      "A non-unique index"
    ],
    answer: 1,
    explanation: "One candidate key is usually chosen as the Primary Key; the others are 'Alternate Keys'.",
    hint: "Potential primary keys."
  },
  {
    id: 221,
    difficulty: "medium",
    category: "programmability",
    question: "What is the 'Scope' of a local variable in a stored procedure?",
    options: [
      "The entire database",
      "Only within the BEGIN...END block where it is defined",
      "All procedures in the system",
      "Only for the user who created it"
    ],
    answer: 1,
    explanation: "Local variables are destroyed once the procedure finishes execution.",
    hint: "Limited duration."
  },
  {
    id: 222,
    difficulty: "hard",
    category: "performance",
    question: "What is 'Database Hinting'?",
    options: [
      "Giving a user a clue about the password",
      "Instructions provided to the optimizer to force a specific execution plan (e.g., forcing an index)",
      "A help menu",
      "An error message"
    ],
    answer: 1,
    explanation: "Hints should be used sparingly, as they override the optimizer's ability to adapt to data changes.",
    hint: "Overriding the optimizer."
  },
  {
    id: 223,
    difficulty: "medium",
    category: "transactions",
    question: "What is a 'Dirty Read'?",
    options: [
      "Reading data from a corrupted table",
      "Reading data that has been modified by another transaction but not yet committed",
      "Reading data slowly",
      "Reading data from a backup"
    ],
    answer: 1,
    explanation: "If the other transaction rolls back, the 'dirty' data becomes invalid.",
    hint: "Uncommitted data."
  },
  {
    id: 224,
    difficulty: "hard",
    category: "scenarios",
    question: "How can you find the last inserted identity/auto-increment value in SQL Server?",
    options: ["SELECT MAX(ID)", "SELECT @@IDENTITY or SCOPE_IDENTITY()", "SELECT LAST(ID)", "SELECT * FROM inserted"],
    answer: 1,
    explanation: "SCOPE_IDENTITY() is preferred because it is limited to the current scope.",
    hint: "Identity function."
  },
  {
    id: 225,
    difficulty: "medium",
    category: "basics",
    question: "What is 'ETL' in database management?",
    options: [
      "Easy Table Loading",
      "Extract, Transform, Load",
      "Every Table Linked",
      "Effective Trace Log"
    ],
    answer: 1,
    explanation: "ETL is the process of moving data from source systems into a data warehouse.",
    hint: "Data movement process."
  },
  {
    id: 226,
    difficulty: "hard",
    category: "architecture",
    question: "What is a 'Non-Repeatable Read'?",
    options: [
      "When you can't read a row twice",
      "When a transaction reads the same row twice and gets different data because another transaction updated it in between",
      "A locked row",
      "A row with NULL values"
    ],
    answer: 1,
    explanation: "This occurs in isolation levels lower than 'Repeatable Read'.",
    hint: "Value changes during transaction."
  },
  {
    id: 227,
    difficulty: "medium",
    category: "programmability",
    question: "Which of the following can a trigger NOT do?",
    options: [
      "Update another table",
      "Return a result set to the user",
      "Roll back a transaction",
      "Call a stored procedure"
    ],
    answer: 1,
    explanation: "Triggers should not return result sets as they are background processes and it can cause unexpected behavior in applications.",
    hint: "Output restrictions."
  },
  {
    id: 228,
    difficulty: "hard",
    category: "performance",
    question: "What is 'Query Plan Caching'?",
    options: [
      "Storing query results in memory",
      "Storing the execution plan of a query so it can be reused, saving the cost of recompilation",
      "Storing the database on a thumb drive",
      "Deleting old plans"
    ],
    answer: 1,
    explanation: "Caching plans speeds up the execution of frequently run queries.",
    hint: "Reusing the strategy."
  },
  {
    id: 229,
    difficulty: "medium",
    category: "transactions",
    question: "What is 'Consistency' in ACID?",
    options: [
      "The database is always the same size",
      "Ensuring that a transaction brings the database from one valid state to another, following all rules and constraints",
      "Making sure all rows have data",
      "Fast data access"
    ],
    answer: 1,
    explanation: "Consistency ensures that constraints (like foreign keys or check constraints) are never violated.",
    hint: "Rules must be followed."
  },
  {
    id: 230,
    difficulty: "hard",
    category: "architecture",
    question: "What is a 'Surrogate Key'?",
    options: [
      "A key that represents a real-world value (like SSN)",
      "An artificial, system-generated primary key (like an Identity or UUID) with no business meaning",
      "A backup key",
      "A key used for encryption"
    ],
    answer: 1,
    explanation: "Surrogate keys are stable and don't change even if business requirements do.",
    hint: "Artificial ID."
  },
  {
    id: 231,
    difficulty: "medium",
    category: "basics",
    question: "What does 'DML' stand for?",
    options: [
      "Data Metadata Language",
      "Data Manipulation Language (SELECT, INSERT, UPDATE, DELETE)",
      "Database Management Level",
      "Distributed Master Logic"
    ],
    answer: 1,
    explanation: "DML commands are used to manage the data within objects.",
    hint: "Manipulating data."
  },
  {
    id: 232,
    difficulty: "hard",
    category: "scenarios",
    question: "How do you find the third character of a string in SQL?",
    options: ["SUBSTRING(str, 3, 1)", "LEFT(str, 3)", "CHAR(str, 3)", "INDEX(str, 3)"],
    answer: 0,
    explanation: "SUBSTRING (or SUBSTR) extracts a specific portion of a string based on a start position and length.",
    hint: "Position 3, length 1."
  },
  {
    id: 233,
    difficulty: "medium",
    category: "basics",
    question: "What does 'DDL' stand for?",
    options: [
      "Data Definition Language (CREATE, ALTER, DROP)",
      "Detailed Data List",
      "Database Design Logic",
      "Direct Data Link"
    ],
    answer: 0,
    explanation: "DDL commands are used to define or modify the structure of the database.",
    hint: "Defining objects."
  },
  {
    id: 234,
    difficulty: "hard",
    category: "performance",
    question: "What is an 'Implicit Transaction'?",
    options: [
      "A transaction you write manually",
      "When the database automatically starts a transaction for every DML statement",
      "A hidden database",
      "A failed transaction"
    ],
    answer: 1,
    explanation: "In many databases, if you don't explicitly start a transaction, each statement is its own transaction (Auto-commit).",
    hint: "Automatic transactions."
  },
  {
    id: 235,
    difficulty: "medium",
    category: "architecture",
    question: "What is a 'Natural Key'?",
    options: [
      "A key that occurs in nature",
      "A primary key that has a real-world meaning (e.g., Email or VIN)",
      "A key that is not indexed",
      "A primary key made of numbers only"
    ],
    answer: 1,
    explanation: "Natural keys already exist in the data, as opposed to surrogate keys which are generated.",
    hint: "Real-world identifier."
  },
  {
    id: 236,
    difficulty: "hard",
    category: "scenarios",
    question: "What is the difference between 'CHAR' and 'VARCHAR'?",
    options: [
      "CHAR is for numbers; VARCHAR is for text",
      "CHAR is fixed-length (padded with spaces); VARCHAR is variable-length",
      "VARCHAR is faster for all operations",
      "There is no difference"
    ],
    answer: 1,
    explanation: "CHAR uses the same amount of storage regardless of the string length, whereas VARCHAR uses only what is needed.",
    hint: "Fixed vs Variable."
  },
  {
    id: 237,
    difficulty: "medium",
    category: "basics",
    question: "What does 'DCL' stand for?",
    options: [
      "Data Control Language (GRANT, REVOKE)",
      "Data Collection Level",
      "Database Connection List",
      "Direct Control Logic"
    ],
    answer: 0,
    explanation: "DCL commands are used to control access and permissions to the data.",
    hint: "Controlling access."
  },
  {
    id: 238,
    difficulty: "hard",
    category: "performance",
    question: "What is a 'Covering Index'?",
    options: [
      "An index that covers the entire table",
      "An index that contains all columns needed for a query, so the table doesn't need to be accessed",
      "A primary key index",
      "A hidden index"
    ],
    answer: 1,
    explanation: "This is a key performance tuning technique to eliminate expensive 'Key Lookups'.",
    hint: "All query data in the index."
  },
  {
    id: 239,
    difficulty: "medium",
    category: "architecture",
    question: "What is a 'One-to-Many' relationship?",
    options: [
      "One row in Table A can relate to many rows in Table B",
      "One table has many columns",
      "Many users can access one table",
      "One column has many values"
    ],
    answer: 0,
    explanation: "Example: One Department can have many Employees.",
    hint: "The most common relationship."
  },
  {
    id: 240,
    difficulty: "hard",
    category: "scenarios",
    question: "What is 'COALESCE' used for?",
    options: [
      "To join two strings",
      "To return the first non-null value in a list of arguments",
      "To delete rows",
      "To count records"
    ],
    answer: 1,
    explanation: "COALESCE is useful for providing default values when data might be missing.",
    hint: "Handling NULLs."
  },
  {
    id: 241,
    difficulty: "medium",
    category: "basics",
    question: "Which of the following is a 'Set Operator'?",
    options: ["JOIN", "UNION", "GROUP BY", "WHERE"],
    answer: 1,
    explanation: "Set operators (UNION, INTERSECT, EXCEPT) combine the results of two queries.",
    hint: "Combines result sets."
  },
  {
    id: 242,
    difficulty: "hard",
    category: "performance",
    question: "What is 'Cardinality' in SQL?",
    options: [
      "The number of rows in a table",
      "The uniqueness of data values in a column",
      "The size of the database",
      "The number of indexes"
    ],
    answer: 1,
    explanation: "High cardinality columns (like IDs) make better index candidates than low cardinality columns (like Gender).",
    hint: "Uniqueness ratio."
  },
  {
    id: 243,
    difficulty: "medium",
    category: "architecture",
    question: "What is a 'Many-to-Many' relationship?",
    options: [
      "Many tables relating to many databases",
      "Rows in Table A can relate to many in Table B, and vice-versa",
      "A table with many primary keys",
      "A database with many users"
    ],
    answer: 1,
    explanation: "This usually requires a 'Junction Table' (or Link Table) to resolve into two one-to-many relationships.",
    hint: "Requires a third table."
  },
  {
    id: 244,
    difficulty: "hard",
    category: "scenarios",
    question: "What is the difference between 'UNION' and 'UNION ALL'?",
    options: [
      "UNION is faster",
      "UNION removes duplicates; UNION ALL does not",
      "UNION ALL removes duplicates; UNION does not",
      "There is no difference"
    ],
    answer: 1,
    explanation: "UNION ALL is faster because it doesn't perform a distinct check to remove duplicates.",
    hint: "Cleaning vs Just adding."
  },
  {
    id: 245,
    difficulty: "medium",
    category: "basics",
    question: "What is an 'Alias'?",
    options: [
      "A hidden table",
      "A temporary name given to a table or column",
      "A primary key",
      "A database user"
    ],
    answer: 1,
    explanation: "Aliases (using AS) make queries more readable, especially in joins.",
    hint: "A nickname."
  },
  {
    id: 246,
    difficulty: "hard",
    category: "performance",
    question: "What is a 'Full Table Scan'?",
    options: [
      "A fast way to find data",
      "When the database must read every single row in a table to find the requested data",
      "A backup process",
      "Cleaning the database"
    ],
    answer: 1,
    explanation: "Scans are expensive; proper indexing aims to replace them with 'Index Seeks'.",
    hint: "Reading everything."
  },
  {
    id: 247,
    difficulty: "medium",
    category: "architecture",
    question: "What is 'Referential Integrity'?",
    options: [
      "The speed of a query",
      "Ensuring that foreign key values always point to a valid primary key",
      "Checking for spelling errors",
      "Backing up the data"
    ],
    answer: 1,
    explanation: "This prevents orphaned records and maintains the consistency of relationships.",
    hint: "Valid links between tables."
  },
  {
    id: 248,
    difficulty: "hard",
    category: "scenarios",
    question: "What does the 'LEAD' window function do?",
    options: [
      "Identifies the leader of a group",
      "Provides access to a row at a given physical offset that follows the current row",
      "Sorts the data",
      "Updates the top row"
    ],
    answer: 1,
    explanation: "LEAD allows you to compare the current row's value with a subsequent row's value.",
    hint: "Looking forward."
  },
  {
    id: 249,
    difficulty: "medium",
    category: "basics",
    question: "What is 'Null' in SQL?",
    options: [
      "Zero",
      "An empty string",
      "A marker indicating that a data value does not exist in the database (Unknown)",
      "A space character"
    ],
    answer: 2,
    explanation: "NULL is not a value; it is a state representing missing or unknown data.",
    hint: "Missing data."
  },
  {
    id: 250,
    difficulty: "hard",
    category: "transactions",
    question: "What is the 'Serializable' isolation level?",
    options: [
      "The fastest isolation level",
      "The highest isolation level, which ensures that transactions occur as if they were running one after another",
      "A level that allows dirty reads",
      "A level used only for backups"
    ],
    answer: 1,
    explanation: "Serializable prevents all concurrency phenomena (Dirty reads, Non-repeatable reads, Phantoms) but has the highest performance cost.",
    hint: "Strict isolation."
  },
   /* ======================================================
     SQL CERTIFICATION QUESTION BANK (Batch 6: 251-265)
     Topics: Performance, Locking, ACID, and Best Practices
     ====================================================== */
  {
    id: 251,
    difficulty: "medium",
    category: "basics",
    question: "Which component of SQL includes commands like GRANT and REVOKE to manage database permissions?",
    options: ["DDL (Data Definition Language)", "DML (Data Manipulation Language)", "DCL (Data Control Language)", "TCL (Transaction Control Language)"],
    answer: 2,
    explanation: "DCL (Data Control Language) is used to control access to data in the database, primarily through granting and revoking permissions.",
    hint: "Think 'Control'."
  },
  {
    id: 252,
    difficulty: "hard",
    category: "scenarios",
    question: "What is the key difference between DELETE and TRUNCATE?",
    options: [
      "DELETE is DDL; TRUNCATE is DML",
      "DELETE allows a WHERE clause and is logged row-by-row; TRUNCATE is a bulk operation that removes all rows and is minimally logged",
      "TRUNCATE can be used to delete specific records",
      "There is no difference in performance"
    ],
    answer: 1,
    explanation: "DELETE is a DML command that can target specific rows and is fully logged. TRUNCATE is a DDL command that resets the table (and identity seeds) much faster because it doesn't log individual row deletions.",
    hint: "Row-by-row vs Bulk."
  },
  {
    id: 253,
    difficulty: "medium",
    category: "basics",
    question: "Which function is best used to return the first non-null value in a list of arguments?",
    options: ["ISNULL()", "NULLIF()", "COALESCE()", "NVL()"],
    answer: 2,
    explanation: "COALESCE() is the ANSI standard function that evaluates arguments in order and returns the first one that is not NULL.",
    hint: "Commonly used for providing default values."
  },
  {
    id: 254,
    difficulty: "hard",
    category: "scenarios",
    question: "What query structure would you use to find duplicate emails in a 'Users' table?",
    options: [
      "SELECT email FROM Users WHERE email = email",
      "SELECT email, COUNT(*) FROM Users GROUP BY email HAVING COUNT(*) > 1",
      "SELECT DISTINCT email FROM Users",
      "SELECT email FROM Users ORDER BY email"
    ],
    answer: 1,
    explanation: "To find duplicates, you must group by the column in question and filter the groups that have a count greater than one.",
    hint: "Group and count."
  },
  {
    id: 255,
    difficulty: "hard",
    category: "performance",
    question: "When comparing IN and EXISTS for a large subquery, why is EXISTS often faster?",
    options: [
      "EXISTS ignores NULL values",
      "EXISTS stops scanning as soon as a single match is found (Short-circuiting), whereas IN might evaluate the entire subquery result set",
      "IN is a deprecated operator",
      "EXISTS uses more memory"
    ],
    answer: 1,
    explanation: "EXISTS performs a 'semi-join' and returns TRUE immediately upon finding a match, whereas IN typically requires the subquery to be fully materialized first.",
    hint: "Stopping early vs finishing the list."
  },
  {
    id: 256,
    difficulty: "medium",
    category: "indexes",
    question: "What is the primary trade-off of adding multiple indexes to a table?",
    options: [
      "It makes the database files smaller",
      "It speeds up SELECT queries but slows down INSERT, UPDATE, and DELETE operations",
      "It makes the data more secure",
      "It allows for more NULL values"
    ],
    answer: 1,
    explanation: "Every time data is modified (DML), the database must also update the indexes, which adds overhead to write operations.",
    hint: "Read speed vs Write speed."
  },
  {
    id: 257,
    difficulty: "hard",
    category: "indexes",
    question: "Which statement correctly describes a 'Clustered Index'?",
    options: [
      "It is a separate structure from the data rows",
      "It physically sorts and stores the data rows in the table based on the key values",
      "A table can have up to 249 clustered indexes",
      "It is only used for non-numeric columns"
    ],
    answer: 1,
    explanation: "Because a Clustered Index dictates the physical order of data on the disk, there can only be one per table.",
    hint: "Physical sorting."
  },
  {
    id: 258,
    difficulty: "medium",
    category: "transactions",
    question: "In the context of ACID properties, what does 'Durability' ensure?",
    options: [
      "That transactions are processed in a timely manner",
      "That once a transaction is committed, it will remain so even in the event of a power failure or system crash",
      "That only one user can access the table at a time",
      "That data is encrypted at rest"
    ],
    answer: 1,
    explanation: "Durability guarantees that committed data is saved to non-volatile memory (permanent storage).",
    hint: "Permanence."
  },
  {
    id: 259,
    difficulty: "hard",
    category: "performance",
    question: "What is the 'NOLOCK' hint (or READ UNCOMMITTED isolation level) used for?",
    options: [
      "To prevent other users from reading the data",
      "To allow a query to read data that is currently being modified by another transaction, avoiding wait times",
      "To encrypt the result set",
      "To force the query to use a specific index"
    ],
    answer: 1,
    explanation: "NOLOCK improves performance by not requesting shared locks, but it carries the risk of 'Dirty Reads' (reading uncommitted data).",
    hint: "Reading without waiting for locks."
  },
  {
    id: 260,
    difficulty: "hard",
    category: "performance",
    question: "How do RANK() and DENSE_RANK() differ when handling ties?",
    options: [
      "RANK() leaves gaps in the numbering sequence after a tie; DENSE_RANK() does not",
      "DENSE_RANK() is only for integers",
      "RANK() is faster than DENSE_RANK()",
      "DENSE_RANK() ignores NULLs"
    ],
    answer: 0,
    explanation: "If two rows are tied for 1st, RANK() will list them as 1, 1 and then skip to 3. DENSE_RANK() will list them as 1, 1 and then go to 2.",
    hint: "Gaps vs No gaps."
  },
  {
    id: 261,
    difficulty: "medium",
    category: "performance",
    question: "What is the purpose of an 'EXPLAIN' or 'EXPLAIN PLAN' statement?",
    options: [
      "To provide a description of each column in the table",
      "To show the execution path the query optimizer will take to retrieve data",
      "To explain the SQL syntax to a beginner",
      "To generate a report for the manager"
    ],
    answer: 1,
    explanation: "The execution plan reveals if a query is performing full table scans or index seeks, which is critical for performance tuning.",
    hint: "The optimizer's roadmap."
  }
];
