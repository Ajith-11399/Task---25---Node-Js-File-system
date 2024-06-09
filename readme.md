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

### Home Route

- **Method**: GET
- **Endpoint**: `/`
- **Description**: Displays a welcome message.

### Create Timestamp File

- **Method**: GET
- **Endpoint**: `/create`
- **Description**: Creates a text file with the current timestamp.

### Retrieve All The Timestamp Files

- **Method**: GET
- **Endpoint**: `/files`
- **Description**: Retrieves all text files from the TimeStamps directory.

## License
> This repository is owned by AJ.
`https://github.com/Ajith-11399/nodejs-filesystem/tree/main`


## API DOcumentation 

> Here is the API documentation of Nodejs Filesystem - Current Timestamps Task 
<button class="btn btn-primary" href="https://documenter.getpostman.com/view/35036950/2sA3XLE4Hu">View Documentation<button>