import React from 'react';
// Child Tree Structure..
class Tree extends React.Component {
	render() {		
		let childTree;
		if (this.props.node.children != null) {
		      childTree = this.props.node.children.map(function(node, index) {
		        return <li key={index}><Tree node={node} /></li>
	      	});
	  	} 
		return (
			<div>				
				<h4>{this.props.node.description}</h4>
				<ul>{childTree}</ul>			
			</div>
		)
	}
};
// Exporting the Component
module.exports = Tree;
