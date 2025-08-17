import React from 'react'
import './Quiz.css'

const Quiz = () => {
    return (
        <div className='container'>
            <h1>Quiz App</h1>
            <hr />
            <h2>Which is a NOT a cryptocurrency?</h2>
            <ul>
                <li>Bitcoin</li>
                <li>Blockchain</li>
                <li>Ethereum</li>
                <li>cUSD</li>
            </ul>
        </div>
    )
}

export default Quiz
