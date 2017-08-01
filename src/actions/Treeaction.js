//Onload function..
export function onLoad() {
	return {
		type: "onLoad",
		payload: null
	}
}
//Search function
export function searchNode(value) {
	return {
		type: "search_node",
		payload: value
	}
	// return function(dispatch){
	// 	dispatch({
	// 		type: "search_node",
	// 		payload: value
	// 	})		
	// }
}