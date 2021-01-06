

const initState = {
    popular: [],
    upcoming: [],
    newGames: [],
    searched: null
}

const gameReducer = (state=initState, action) => {
    switch(action.type) {
        case "FETCH_GAMES":
            return { ...state, 
                popular: action.payload.popular,
                upcoming: action.payload.upcoming,
                newGames: action.payload.newGames,
            }
        case "FETCH_SEARCHED":
            return {
                ...state,
                searched: action.payload.searched
            }
        case "CLEAR_SEARCHED":
            return {
                ...state,
                searched: null,
            }
        default:
            return { ...state }
    }
}

export default gameReducer