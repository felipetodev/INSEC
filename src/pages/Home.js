import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loadGames } from '../actions/gamesAction'
import { motion } from 'framer-motion'
import styled from 'styled-components'
import Game from '../components/Game'
import GameDetail from '../components/GameDetail'
import { useLocation } from 'react-router-dom'

const Home = () => {
    const location = useLocation()
    const pathId = location.pathname.split('/')[2]

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(loadGames())
    }, [dispatch])

    //obtener data de vuelta
    const { popular, newGames, upcoming, searched } = useSelector((state) => state.games)

    return (
        <GameList>
            {pathId && <GameDetail />}
            {searched && (
                <div>
                    <h2>Searched Games</h2>
                    <Games>
                        {
                            searched.map(game => (
                                <Game
                                    key={game.id}
                                    id={game.id}
                                    name={game.name}
                                    released={game.released}
                                    image={game.background_image}
                                />
                            ))
                        }
                    </Games>
                </div>
            )}
            <h2>Upcoming Games</h2>
                <Games>
                    {
                        upcoming.map(game => (
                            <Game
                                key={game.id}
                                id={game.id}
                                name={game.name}
                                released={game.released}
                                image={game.background_image}
                            />
                        ))
                    }
                </Games>
                <h2>Popular Games</h2>
                <Games>
                    {
                        popular.map(game => (
                            <Game
                                key={game.id}
                                id={game.id}
                                name={game.name}
                                released={game.released}
                                image={game.background_image}
                            />
                        ))
                    }
                </Games>
                <h2>New Games</h2>
                <Games>
                    {
                        newGames.map(game => (
                            <Game
                                key={game.id}
                                id={game.id}
                                name={game.name}
                                released={game.released}
                                image={game.background_image}
                            />
                        ))
                    }
                </Games>
        </GameList>
    )
}

const GameList = styled(motion.div)`
    padding: 0rem 5rem;

    h2 {
        padding: 5rem 0rem;
    }
`

const Games = styled(motion.div)`
    min-height: 80vh;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    gap: 3rem;
`

export default Home