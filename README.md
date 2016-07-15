# thredUP Navigation Bar Exercise

The thredUP navigation bar currently is built with dynamic data from our custom CMS service.

## Setup & Pre-Requisites
1.  You should have [Node.js](https://nodejs.org/) v4 or above installed
2.  Run `npm install` to install all packages

## Exercise
1.  Given the JSON data in `navigation.json`, build a Node.js server endpoint to serve up this data that will be used by your front-end code.
2.  Build the HTML, CSS, and JavaScript code to request the navigation JSON data and build a thredUP navigation bar, like:

![thredUP Navigation](http://i.imgur.com/Lyrd1L6.png)

## Requirements
1.  **Server Endpoint** The given JSON is a sample - if you need to modify it for your answer, feel free to do so
2.  **Server Endpoint** You can use any Node.js libraries like Express or vanilla Node.js API's to complete this part of the exercise.
2.  **Client** You can use any set of libraries to complete the exercise. React has been setup in this repo but you are free to use Angular, Ember, jQuery, etc or vanilla JavaScript.
3.  **Client** The current navigation bar on our site is responsive to various screen sizes, so consider this in your answer.
4.  **Client** The custom font Proxima Nova has been loaded into the index.html file. You can access this with: `font-family: proxima-nova-1, proxima-nova-2`
5.  This project structure is a sample. If you need to add, modify, or remove packages or modify configuration files, feel free to do so.
6.  Please build a functional solution and ZIP up the repo for submission.

## Commands in this repo
* `npm run build`: Run Webpack to build the bundle
* `npm run dev`: Run the Webpack Dev Server with hot reloading. You should be able to view the page at [http://localhost:3000](http://localhost:3000)
* `npm test`: Run Karma against PhantomJS for Mocha/Chai unit tests
* `npm run test-watch`: Run Karma in watch mode to pick up changes to tests

## Development Packages in this repo
* React
* Babel for ES2015 and React transpilation
* ESLint
* Sass for CSS

## Testing packages in this repo
* Karma test runner
* Mocha
* Chai
* Enzyme for React testing
