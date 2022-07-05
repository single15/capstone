const UPDATE_COLOR_FILTER = 'UPDATE_COLOR_FILTER';


const initialState = {
    selectedColors: [],
};

const filterReducer = (state = initialState, action) => {
    switch(action.type) {
        case UPDATE_COLOR_FILTER:
            let selectedColors = [...state.selectedColors];
            const colorIndex = selectedColors.indexOf(action.payload);
            if(colorIndex < 0) selectedColors = [...selectedColors, action.payload];
            else selectedColors = selectedColors.filter(c => c !== action.payload);
            return {...state, selectedColors};
            
        default: 
        return state;
    }
}


export default filterReducer;

export const selectColor = color => ({
    type: UPDATE_COLOR_FILTER,
    payload: color
})