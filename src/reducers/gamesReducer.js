

const initState = {
    popular: [],
    newGames: [],
    upcoming: [],
    searched: []
}

const gameReducer = (state=initState, action) => {
    switch(action.type) {
        case "FETCH_GAMES":
            return { ...state, ...action.payload }
        default:
            return { ...state }
    }
}

const fetchGames = (userData) => {
    return {
        type: "FETCH_GAMES",
        payload: userData,
    }
}

fetchGames()

export default gameReducer