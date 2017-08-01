import React from 'react';
import ReactTree from './tree';
import {connect} from 'react-redux';
import * as tree from '../actions/Treeaction';

class App extends React.Component {
	constructor() {
		super()
		this.state = {
			query: ''
		}
	}
	componentWillMount() {
		
	}
	doSearch(e) {	
		//tree.searchNode(e.target.value)
		alert(JSON.stringify(this.props));
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

const mapStateToProps = (state) => {
	return {
		tree : state.tree
	}
}
const mapDispatchToProps = (dispatch) => {
	
	return {
		searchTree: () => dispatch(tree.searchNode(value))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);