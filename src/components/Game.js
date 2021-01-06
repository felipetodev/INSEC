import styled from 'styled-components'
import { motion } from 'framer-motion'
import { useDispatch } from 'react-redux'
import { loadDetail } from '../actions/detailAction'
import { Link } from 'react-router-dom'
import { smallImage } from '../util'

const Game = ({ name, released, image, id }) => {

    const dispatch = useDispatch()

    const loadDetailHandler = () => {
        document.body.style.overflow = 'hidden'
        dispatch(loadDetail(id))
    }

    return (
        <StyledGame onClick={loadDetailHandler}>
            <Link to={`/game/${id}`}>
                <h3>{name}</h3>
                <p>{released}</p>
                <img src={image ? smallImage(image, 640) : image} alt={name}/>
            </Link>
        </StyledGame>
    )
}

const StyledGame = styled(motion.div)`
    min-height: 30vh;
    box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
    text-align: center;
    border-radius: 1rem;
    overflow: hidden;
    cursor: pointer;
    transition: all 300ms ease-in;

    &:hover {
        box-shadow: 0px 5px 20px rgba(255, 118, 118, 0.8);
    }
    
    img {
        width: 100%;
        height: 32vh;
        object-fit: cover;
        display: block;
    }
`

export default Game