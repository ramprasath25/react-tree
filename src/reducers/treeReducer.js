import treeStructure  from '../treestructure';

export default (state = treeStructure, action) => {		
	switch (action.type) {
		case "onLoad":
			return state;
		case "search_node":
			alert("Came here")
			var newState = treeStructure;
			newState.children.filter(function(searchNode) {				
				if(action.payload.toLowerCase() == searchNode.description.toLowerCase()){					
					newState = searchNode;
				} 
			});			
			return newState;
	}
	return state;
}