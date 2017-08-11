# Chrome Extension in Typescript w/ Webpack

A boilerplate project for developing a Chrome extensions with:
* TypeScript
* Webpack
* React for UI Components
* Karma for testing

## Dev Steps
1. npm install
2. npm start
3. chrome://extensions
4. Check Developer Mode
5. Load Unpacked Extension (browse to repo/dist)

## React
Using React for popup, options or other views is optional, but included

## Tests
Tests are provided with Karma, Mocha, Chai & Sinon
* single run `npm test`
* watch `npm run test:watch`

## Package for Deployment
To create a zip file ready for upload the the Chrome store run `npm run package` which will create an extension.zip file
