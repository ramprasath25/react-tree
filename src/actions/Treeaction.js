//Search function
export function searchNode(value) {
	return {
		type: "search_node",
		payload: value
	}
}