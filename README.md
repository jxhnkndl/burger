# Burger.js

![html](https://img.shields.io/github/languages/top/jxhnkndl/burger?style=plastic)
![commit](https://img.shields.io/github/last-commit/jxhnkndl/burger?style=plastic)
![license](https://img.shields.io/static/v1?label=license&message=MIT&color=orange&style=plastic)


## Table of Contents
* [Description](#description)
* [Technologies](#technologies)
* [Installation](#installation)
* [Local Database Setup](#local-database-setup)
* [Usage](#usage)
* [Application Demo](#application-demo)
* [License](#license)
* [Contact](#contact)


## Description
The vanilla todo app just got a whole lot tastier. Burger.js is small full-stack application for keeping track of the burgers you want to eat and the burgers you've successfully eaten. Users can add burgers they want to try to the `On Deck` list using the user interface's single input field, move those burgers to the `Devoured` list using the `Devour` button, and delete previously devoured burgers from the `Devoured` list using the `Delete` button. With a web experience this delicious, you'll never miss another burger again.


## Technologies
**Core Technologies:**  
Node.js, Express, MySQL, JavaScript, Handlebars.js, Bootstrap 5  


## Installation
While the application can be visited and interacted with at it's deployment link, the project can be installed to run locally using the steps below.  

This application requires Node.js and npm to run locally. To check whether Node.js and npm are installed locally, run:
```
node -v
```
```
npm -v
```
If Node and npm are already installed, the commands above should return version numbers. Visit [Node.js](http://www.nodejs.org/) and [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) for full installation details and documentation.  

Burger.js also requires the installation of `express`, `express-handlerbars`, `mysql`, and `nodemon` to function locally. To install the project and its npm dependencies, navigate to the project's root directory and run:
```
npm install
```
Once all third-party packages have been successfully installed, the application is ready to use. For more details, reference the application's `package.json` file.


## Local Database Setup

This application uses a **MySQL** database. To use the program, you must have **SQL Server** installed and configured.

The application's `db` folder contains the database schema (`schema.sql`) and a seeds file (`seeds.sql`) containing fictional initialization data for working with the application. These files can be used to quickly get the application's database up and running using either SQL Workbench or the command line.

The following represents the application's table schema:

id     | burger_name | devoured   | createdAt |
-------|-------------|------------|-----------|
Number | String      | True/False | Timestamp |  


## Usage
Once npm packages have been installed and the database has been initialized, the application can be run in regular mode:
```
npm start
```
Or in continuous mode (server refreshes automatically if code changes):
```
npm run watch
```
**Note:** For testing purposes, the MySQL password included in the connection module is set to the public key of 'password'. To run the application locally, some settings inside `connection.js` may need to be changed.


## Application Demo
The following video documents the core functionality of Burger.js:

![Application Preview](assets/demo-gifs/burger-js-demo.gif)


## License
Copyright (c) 2021 J.K. Royston  
Licensed under the [MIT License](https://opensource.org/licenses/MIT).


## Contact
J.K. Royston  
<jkroyston@gmail.com>  
[GitHub](https://www.github.com/jxhnkndl)