import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
//External Modules/components
import ReactTree from './tree';
import reducer from './reducers';
import './style.css';

// Intializing Store...
const store = createStore(reducer);
//Onload Function
store.dispatch({type: "onLoad"});
//Main Component
class App extends React.Component {
	constructor() {
		super()
		this.state = {
			query: '',
			treeValue: store.getState()
		}
	}
	doSearch(e) {
		//Search Reducer
		store.dispatch({type: "search_node", payload: e.target.value});		
		this.setState({
			query: e.target.value,
			treeValue: store.getState()
		});
	}	
	render() {		
		return (
			<div className="container">
				<h1>React-Redux Tree</h1>				
					<input type="text" placeholder="Search a node.." value={this.state.query}
						onChange={this.doSearch.bind(this)} className="css-input"/>
				<ReactTree node={this.state.treeValue}/>
			</div>
		)
	}
}

// Rendering the component to HTML..
ReactDOM.render(
	<Provider store = {store}>
		<App />
	</Provider>, document.getElementById("app")
);
