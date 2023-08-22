Angular Star-food Application
This project is an enhanced Star Food application built using Angular, incorporating additional features. It also integrates server-side data management through Firebase. With this project, you can conveniently monitor your orders and easily generate order receipts for printing purposes.


Prerequisites
Node.js must be installed on your system.
Npm must be installed on your system.
Installation
Clone this repository to your computer or download it as a ZIP file.
Upon server startup, Firebase account credentials are required to establish a connection with the Firebase database. You can store your Firebase account credentials in the .env file path.
Navigate to the project folder and run the following command to install the required dependencies:
npm install

Used Packages
This application utilizes the following packages:

"@angular-devkit/build-angular": "^16.2.0",
"@angular/cli": "~16.2.0",
"@angular/compiler-cli": "^16.2.0",
"@angular/fire": "^7.6.1",
"@angular/forms": "^16.2.0",
"@angular/material": "^16.2.1",
"@angular/platform-browser": "^16.2.0",
"@angular/platform-browser-dynamic": "^16.2.0",
"@angular/router": "^16.2.0",
"@ngrx/store": "^16.2.0",
"bootstrap": "^5.3.1",
"firebase": "^9.23.0",
"ngx-print": "^1.3.1",

Starting the Application
npm start
You can then view the application by navigating to http://localhost:4200 in your web browser.

Usage
Upon launching the application, you will be able to view incoming orders and create new orders.

Contributing
If you'd like to contribute to this project, please submit your suggestions, bug reports, or fixes via GitHub. Contributions are welcome!
