Used technologies && libraries
--------

The solution employs ReactJS + redux. I used the following libraries:

- **redux** - manages the state in the app. I store all notification data in the redux store;
- **bootstrap**, **font awesome** - CSS framework that helped me with quick UI prototyping (the form which adds
    notifications in order to simulate them);
- **NodeJS**, **express** - I wrote a simple NodeJS server that serves index.html with proper links to bundles,
    depending on the environment (dev, prod);
- **lodash** - a library that provides with util functions;
- **redux-saga** - cool library that allows to handle async redux actions better;
- **whatwg-fetch** - polyfill for window.fetch;

- **babel** - a transpiler for a new JavaScript (ES6).
- **chai**, **mocha**, **enzyme**, **sinon** - utils used for unit testing.
- **webpack** - module loader, bundler etc.

Comments
--------

1. Unit tests cover all React components related to the notifications and redux logic.
2. Unfortunately I tested the UI only on latest Chrome, Firefox and Safari. Currently I don't have VMs with old IE
   on my Mac.

Development
--------

`cd challenge/`
`npm install`
`npm run dev-server`
`npm run webpack-server`
`navigate to http://localhost:3000/`

Production, project presentation
--------

`cd challenge/`
`npm install`
`npm run prod-server`
`navigate to http://localhost:9000/`

Preparing production bundle
--------

`cd challenge/`
`npm install`
`npm run build`
and run the `prod-server` and check out the new code version on `http://localhost:9000/`.

Running unit tests
--------

`cd challenge/`
`npm install`
`npm run test`

Deployment
--------

The project has been deployed on [AWS EC2 instance](http://ec2-35-167-218-181.us-west-2.compute.amazonaws.com:9001/).

Documentation
--------

The following components should be reused:

- **Notification** ( _./client/components/Notification.js_ )

- **Notifications** ( _./client/components/Notifications.js_ , I'm referring to the dump component, not wrapped
    by redux _connect_ function)

- styles ( _./client/styles/components/Notifications.scss_ )

The components' API is well-documented thanks to React *propTypes*. That's why I didn't use any tool for documenting
    Reacts components.

These components have the following dependendies:

- React

- ***react-addons-css-transition-group***

- ***font-awesome*** (it's really easy to get rid of)

- ***classnames*** (it's really easy to get rid of)
