// Intializing the default state..
import treeStructure  from '../treestructure';

export default (state = treeStructure, action) => {		
	switch (action.type) {		
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
	return state;
}