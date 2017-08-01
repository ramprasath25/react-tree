import React from 'react';
import {connect} from 'react-redux';
import * as tree from '../actions/Treeaction';
//Child component
import ReactTree from './tree';
//App component
class App extends React.Component {
	constructor() {
		super()
		this.state = {
			query: ''
		}
	}
	doSearch(e) {
		// Calling search action, reducer
		this.props.searchTree(e.target.value)
		this.setState({
			query: e.target.value
		});
	}	
	render() {		
		return (
			<div className="container">
				<h1>React-Redux Tree</h1>				
					<input type="text" placeholder="Search a node.." value={this.state.query}
						onChange={this.doSearch.bind(this)} className="css-input"/>
				<ReactTree node={this.props.tree}/>
			</div>
		)
	}
}
// Getting state from store
const mapStateToProps = (state) => {
	return {
		tree : state.tree
	}
}
const mapDispatchToProps = (dispatch) => {	
	return {
		searchTree: (value) => dispatch(tree.searchNode(value))
	}
}
// Connecting app component with props
export default connect(mapStateToProps, mapDispatchToProps)(App);