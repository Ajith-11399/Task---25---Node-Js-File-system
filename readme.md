# Node.js Filesystem - Current Timestamp Task

This project is a simple Node.js application that creates and retrieves text files with timestamps. The application uses Express for the server framework and the `date-fns` library to format dates.

## Project Description

This Node.js application provides endpoints to create text files containing the current timestamp and to retrieve all text files from a specific directory. The main purpose is to demonstrate the use of the filesystem module in Node.js and to handle file operations via RESTful APIs.

## Tools and Libraries Used

- **Node.js**: JavaScript runtime built on Chrome's V8 JavaScript engine.
- **Express**: Fast, unopinionated, minimalist web framework for Node.js.
- **fs**: File system module to interact with the file system.
- **date-fns**: Library for date formatting.
- **path**: Node.js module for handling and transforming file paths.

## Operations

1. **Home Route**: Displays a welcome message.
2. **Create Timestamp File**: Creates a text file with the current timestamp.
3. **Retrieve Timestamp Files**: Lists all the timestamp text files in the directory.

## Routes

| **Routes**                                                              | **Method** | **Endpoint** | **Description**                                        |
| ----------------------------------------------------------------------- | ---------- | ------------ | ------------------------------------------------------ |
| <a href="https://nodejs-filesystem-fdcr.onrender.com/">Home</a>         | GET        | `/`          | Displays a welcome message                             |
| <a href="https://nodejs-filesystem-fdcr.onrender.com/create">Create</a> | GET        | `/create`    | Creates a text file with the current timestamp         |
| <a href="https://nodejs-filesystem-fdcr.onrender.com/files">Files</a>   | GET        | `/files`     | Retrieves all text files from the TimeStamps directory |

## License

> This repository is owned by <a href="https://github.com/Ajith-11399/nodejs-filesystem/tree/main">AJ</a>.

## Backend Source Link

> Nodejs Filesystem - <a href="https://nodejs-filesystem-fdcr.onrender.com/">Current Timestamp Task</a>

## API DOcumentation - POSTMAN API

> Here is the API documentation of Nodejs Filesystem - Current Timestamps Task
> <a href="https://documenter.getpostman.com/view/35036950/2sA3XLE4Hu">View Documentation</a>
