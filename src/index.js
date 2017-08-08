import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
//External Modules/components
import store from './store';
import App from './components/app';
import './style.css';

// Rendering the component to HTML..
ReactDOM.render(
	<Provider store = {store}>
		<App />
	</Provider>, document.getElementById("app")
);
