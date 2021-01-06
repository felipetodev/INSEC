import { useState } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import logo from '../img/logo.svg'
import { fetchSearch } from '../actions/gamesAction'
import { useDispatch } from 'react-redux'


const Nav = () => {
    const dispatch = useDispatch()

    const [ textInput, setTextInput ] = useState('')

    const inputHandler = (e) => {
        setTextInput(e.target.value)
    }
    
    const submitSearch = (e) => {
        e.preventDefault()
        dispatch(fetchSearch(textInput))
        setTextInput('')
    }
    
    const clearSearch = () => {
        dispatch({ type: 'CLEAR_SEARCHED' })
    }

    return (
        <StyledNav>
            <Logo onClick={clearSearch}>
                <img src={logo} alt="insec-logo" />
                <h1>INSEC</h1>
            </Logo>
            <form onSubmit={submitSearch}>
                <input type="text" value={textInput} onChange={inputHandler} placeholder='Search a game' />
                <button>Search</button>
            </form>
        </StyledNav>
    )
}

const StyledNav = styled(motion.nav)`
    padding: 3rem 5rem;
    text-align: center;

    input {
        width: 350px;
        font-size: 1.5rem;
        padding: 0.5rem;
        border: none;
        margin-top: 1rem;
        box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.2);
    }

    button {
        font-size: 1.5rem;
        border: none;
        padding: 0.5rem 2rem;
        cursor: pointer;
        background: #ff7676;
        color: white;
    }
`

const Logo = styled(motion.div)`
    display: flex;
    justify-content: center;
    align-items: baseline;
    padding: 1rem;
    cursor: pointer;

    img {
        height: 2rem;
        width: 2rem;
    }

    h1 {
        margin-left: 0.5rem;
        letter-spacing: 8px;
    }
`

export default Nav