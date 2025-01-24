# Unhandled Promise Rejection in Node.js

This repository demonstrates a common yet cryptic error in Node.js applications: "Unhandled Promise Rejection".  The error message, by itself, often lacks the necessary context for debugging.

The example showcases a simple HTTP server.  The error is intentionally *not* present in this minimal example, highlighting the challenge of pinpointing the source without more information.

## Reproducing the Issue (Illustrative)

While the provided `server.js` doesn't trigger the error, a real-world scenario might involve asynchronous operations (like database queries, file I/O, or external API calls) where a promise is rejected without proper error handling.

This could be due to:

* **Missing `.catch()` blocks:**  Forgetting to handle promise rejections.
* **Incorrect error handling:** Improperly catching and handling errors.
* **Unhandled exceptions within promises:**  Errors thrown inside `async` functions or promise handlers.

## Solution

The `serverSolution.js` (though not needed for this specific example) would typically showcase best practices for handling promises and preventing unhandled rejections.  This generally involves using `.catch()` blocks to handle potential errors elegantly.