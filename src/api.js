const { REACT_APP_KEY = '' } = process.env
const base_url = `https://api.rawg.io/api/games?key=${REACT_APP_KEY}`
const new_base_url = `https://api.rawg.io/api/games`

//Fecha
const getCurrentMonth = () => {
    const month = new Date().getMonth() + 1
    if(month < 10) {
        return `0${month}`
    } else {
        return month
    }
}

const getCurrentDay = () => {
    const day = new Date().getDate() + 1
    if(day < 10) {
        return `0${day}`
    } else {
        return day
    }
}

const currentYear = new Date().getFullYear()
const currentMonth = getCurrentMonth()
const currentDay = getCurrentDay()

const currentDate = `${currentYear}-${currentMonth}-${currentDay}`
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`


//sections
const popular_games = `&dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`
const upcoming_games = `&dates=${currentDate},${nextYear}&ordering=-added&page_size=10`
const new_games = `&dates=${lastYear},${currentDate}&ordering=-released&page_size=10`

export const popularGamesURL = () => `${base_url}${popular_games}`
export const upcomingGamesURL = () => `${base_url}${upcoming_games}`
export const newGamesURL = () => `${base_url}${new_games}`

//game-details
export const gameDetailsURL = (game_id) => `${new_base_url}/${game_id}?key=${REACT_APP_KEY}`

//game-screenshots
export const gameScreenshotURL = (game_id) => `${new_base_url}/${game_id}/screenshots?key=${REACT_APP_KEY}`

//searched-game
export const searchGameURL = (game_name) => `${base_url}&search=${game_name}&page_size=9`
