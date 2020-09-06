export const dummyReducer = (state, action) => {
	switch (action.type) {
		case "DETAIL_DUMMY":
			return state.filter((bebas) => bebas.id === action.id);
		default:
			return state;
	}
};
