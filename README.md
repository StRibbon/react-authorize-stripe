# thredUP Navigation Bar Exercise

The thredUP navigation bar currently is built with dynamic data from our custom CMS service.

## Setup & Pre-Requisites
1.  You should have [Node.js](https://nodejs.org/) v4 or above installed
2.  Run `npm install` to install all packages

## Exercise
1.  Given the JSON data in `navigation.json`, build a Node.js server endpoint to serve up this data that will be used by your front-end code.
2.  Build the HTML, CSS, and JavaScript code to request the navigation JSON data through an AJAX call and build a thredUP navigation bar that looks like:

![thredUP Navigation](http://i.imgur.com/Lyrd1L6.png)

## Requirements
1.  This project structure is a sample. If you need to add, modify, or remove packages or modify configuration files, feel free to do so.
1.  Please build a functional solution and ZIP up the repo for submission.

### Server Endpoint
1.  Create a Node server endpoint that returns JSON in the format used by `navigation.json`. This file is a sample - if you need to modify the data for your answer, feel free to do so
1.  You can use any Node.js libraries like Express or vanilla Node.js API's to complete this part of the exercise.

### Client
1.  You can use helper libraries (MVC, etc) to complete the exercise. React has been setup in this repo but you are free to use Angular, Ember, jQuery, or vanilla JavaScript. Please do not use Bootstrap/react-bootstrap to complete the exercise.
1.  The current navigation bar on our site is responsive to various screen sizes, so consider this in your answer.
1.  The custom font Proxima Nova has been loaded into the index.html file. You can access this with: `font-family: proxima-nova-1, proxima-nova-2`

## Commands in this repo
* `npm run build`: Run Webpack to build the bundle
* `npm run dev`: Run the Webpack Dev Server with hot reloading. You should be able to view the page at [http://localhost:3000](http://localhost:3000)
* `npm test`: Run Karma against PhantomJS for Mocha/Chai unit tests
* `npm run test-watch`: Run Karma in watch mode to pick up changes to tests

## Development Packages in this repo
* React
* Babel for ES2015 and React transpilation
* ESLint (Airbnb preset - feel free to turn off some rules to suit your coding style)
* Sass for CSS

## Testing packages in this repo
* Karma test runner
* Mocha
* Chai
* Enzyme for React testing
