import styled from 'styled-components'
import { motion } from 'framer-motion'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { smallImage } from '../util'
import playstation from '../img/playstation.svg'
import steam from '../img/steam.svg'
import xbox from '../img/xbox.svg'
import nintendo from '../img/nintendo.svg'
import apple from '../img/apple.svg'
import gamepad from '../img/gamepad.svg'
import starEmpty from '../img/star-empty.png'
import starFull from '../img/star-full.png'

const GameDetail = () => {
    const history = useHistory()
    const dispatch = useDispatch()

    const exitDetailHandler = (e) => {
        const element = e.target

        if(element.classList.contains('shadow')) {
            document.body.style.overflow = 'auto'
            history.push('/')
            dispatch({ type: 'CLEAR_SEARCHED' })
        }
    }

    const getStars = () => {
        const stars = []
        const rating = Math.floor(game.rating)
        for(let i = 1; i <= 5; i++) {
            if(i <= rating) {
                stars.push(<img key={i} src={starFull} alt={game.rating}/>)
            } else {
                stars.push(<img key={i} src={starEmpty} alt={game.rating}/>)
            }
        }
        return stars
    }

    const getPlatform = (platform) => {
        switch(platform) {
            case "PlayStation 5" || "PlayStation 4":
                return playstation
            case "Xbox One":
                return xbox
            case "PC":
                return steam
            case "Nintendo Switch":
                return nintendo
            case "iOS":
                return apple
            default:
                return gamepad
        }
    }

    const { screen, game, isLoading } = useSelector((state) => state.detail)
    
    return (
        <>
        {!isLoading && (
            <CardShadow className="shadow" onClick={exitDetailHandler}>
                <Detail>
                    <Stats>
                        <div className="rating">
                            <h3>{game.name}</h3>
                            <p>Rating: {game.rating}</p>
                            {getStars()}
                        </div>
                        <Info>
                            <h3>Platforms</h3>
                            <Platforms>
                                {game.platforms.map(data => (
                                    <img key={data.platform.id} src={getPlatform(data.platform.name)} alt={data.platform.name} title={data.platform.name} />
                                ))}
                            </Platforms>
                        </Info>
                    </Stats>
                    <Media>
                        <img src={smallImage(game.background_image, 1280)} alt={game.name_original} />
                    </Media>
                    <Description>
                        <p>{game.description_raw}</p>
                    </Description>
                    <div className="gallery">
                        {screen.results.map(screen => (
                            <img key={screen.id} src={smallImage(screen.image, 1280)} alt="game" />
                        ))}
                    </div>
                </Detail>
            </CardShadow>
            )}
        </>
    )
}

const CardShadow = styled(motion.div)`
    width: 100%;
    min-height: 100vh;
    overflow-y: scroll;
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    left: 0;

    &::-webkit-scrollbar {
        width: 0.5rem;
    }

    &::-webkit-scrollbar-thumb {
        background-color: #ff7676;
    }

    &::-webkit-scrollbar-track {
        background: white;
    }
`

const Detail = styled(motion.div)`
    width: 80%;
    border-radius: 1rem;
    padding: 2rem 5rem;
    background: white;
    position: absolute;
    left: 10%;
    color: black;

    img {
        width: 100%;
    }
`

const Stats = styled(motion.div)`
    display: flex;
    align-items: center;
    justify-content: space-between;

    .rating img {
        width: 1.5rem;
        height: 1.5rem;
    }
`

const Info = styled(motion.div)`
    text-align: center;
`
const Platforms = styled(motion.div)`
    display: flex;
    justify-content: space-evenly;

    img {
        margin-left: 3rem;
    }
`

const Media = styled(motion.div)`
    margin-top: 5rem;

    img {
        width: 100%;
    }
`

const Description = styled(motion.div)`
    margin: 5rem 0;
`


export default GameDetail