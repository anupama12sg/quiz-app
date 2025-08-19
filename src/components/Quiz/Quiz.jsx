import React, { useState } from 'react'
import './Quiz.css'
import { data } from '../../assets/data';

const Quiz = () => {

    let [index, setIndex] = useState(0);
    let [question, setQuestion] = useState(data[index]);

    return (
        <div className='container'>
            <h1>Quiz App</h1>
            <hr />
            <h2>1. Which is a NOT a cryptocurrency?</h2>
            <ul>
                <li>Bitcoin</li>
                <li>Blockchain</li>
                <li>Ethereum</li>
                <li>cUSD</li>
            </ul>
            <button>Next</button>
            <div className='index'>1 of 5 questions</div>
        </div>
    )
}

export default Quiz
