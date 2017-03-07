import 'babel-polyfill';
import { jsdom } from 'jsdom';

global.document = jsdom(`
    <!doctype html>
    <html>
        <head></head>
        <body></body>
    </html>
`);

global.window = document.defaultView;
global.navigator = document.defaultView.navigator;
