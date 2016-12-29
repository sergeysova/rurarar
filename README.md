# RURARAR

## Readme

React Universal Recomposed Application with Redux And Redial

## Features

- [React](https://github.com/facebook/react), [ReactRouter](https://github.com/ReactTraining/react-router)
- [Redux](https://github.com/reactjs/redux), [Thunk](https://github.com/gaearon/redux-thunk)
- [Redial](https://github.com/markdalgleish/redial)
- [Recompose](https://github.com/acdlite/recompose)
- [Server Side Rendering](src/server/render.js)
- Based on [Atomic Design](http://bradfrost.com/blog/post/atomic-web-design/) methodology
- Styles: [JSS](https://github.com/cssinjs/jss) with [ReactJSS](https://github.com/cssinjs/react-jss) ([preset default](https://github.com/cssinjs/jss-preset-default))
- Also: [normalize](src/styles/normalize.js) and [Google Material Colors](https://github.com/danlevan/google-material-color)
- Dependencies lock with [npm-shrinkwrap](npm-shrinkwrap.json) and [yarn.lock](yarn.lock)


## Requirements

- node `>=6`

## Installing

```bash
git clone https://github.com/LestaD/rurarar.git projectname
cd projectname
npm install
```

## Scripts

#### Run in development mode with SS-reloading

```bash
npm run dev
```

#### Build client bundle

```bash
# Builds in production mode
npm run build

# after
ls dist/
```

#### Run only server-side

Bundle should be built before run

```bash
# in production mode
npm start
```
