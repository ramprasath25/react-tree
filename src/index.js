import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from './store';
//External Modules/components
import App from './components/index';
import './style.css';

// Rendering the component to HTML..
ReactDOM.render(
	<Provider store = {store}>
		<App />
	</Provider>, document.getElementById("app")
);
