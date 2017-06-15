# OAuth2 Google with React Sample

Simple use case of how to integrate Google Oauth2 with simple React app.

What the solution does:
+ authenticates user against Google (if user is not authenticated, he is redirected to login page)
+ authorizes user based on his domain and email (if user is not authorized, he gets 403)
+ demonstrates viewing Web pages and making calls against Express API
+ demonstrates that after user is logged in he is redirected to the page he originally requested

Note: This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app) and reused some parts of code from [OAuth2 for Apps Script](https://github.com/googlesamples/apps-script-oauth2).

## Table of Contents

- [Available Scripts](#available-scripts)
  - [npm server](#npm-server)
  - [npm start](#npm-start)
  - [npm test](#npm-test)
  - [npm run build](#npm-run-build)
  - [npm run eject](#npm-run-eject)

## Available Scripts

In the project directory, you can run:

### `node server`
Runs node server

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](#running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](#deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

