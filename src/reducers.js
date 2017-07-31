// Reducers ..
import treeStructure  from './treestructure';
const reducer = (state = treeStructure, action) => {
	switch(action.type){
		case "onLoad":
			return state;
		case "search_node":			
			var newState = treeStructure;
			newState.children.filter(function(searchNode) {				
				if(action.payload.toLowerCase() == searchNode.description.toLowerCase()){					
					newState = searchNode;
				} 
			});			
			return newState;			
		default:
			return state;
	}
}

module.exports = reducer;
