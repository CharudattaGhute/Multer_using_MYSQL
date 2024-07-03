# File Upload and Download Application

- This is a simple Node.js application for uploading and downloading files using Express, Multer, and MySQL.

# Features

- Upload files and store metadata in a MySQL database
- Download files by filename
- Uses Express for handling HTTP requests
- Uses Multer for handling file uploads
- Uses MySQL for storing file metadata
  
# Prerequisites

- Node.js
- MySQL
- Installation

# Clone the repository to your local machine.
1. Clone the repository:
    ```bash
    git clone https://github.com/CharudattaGhute/Text-converter.git
    ```

## Install the necessary dependencies using npm install.
- npm install express
- npm install body-parser
- npm install express-session
- npm innstall nodemon
  
# Set up your MySQL database:

1. Create a database named multer.
2. Create a table named file with columns for id, filename, path, originalname, mimetype, and size.
3. Update your MySQL credentials in the db.js file.

# Usage

1. Start the server using node app.js.

2. To upload a file, send a POST request to http://localhost:4001/upload with the file in the form-data.

3. To download a file, send a GET request to http://localhost:4001/download/:filename where :filename is the name of the file you want to download.

# Code Structure

- app.js: Main application file
- db.js: Database connection setup
- uploads/: Directory where uploaded files are stored
- Dependencies

# License
This project is licensed under the MIT License.

