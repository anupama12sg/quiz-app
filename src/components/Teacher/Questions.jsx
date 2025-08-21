import React from 'react'

const Questions = () => {
    return (
        <>
            <div className='container'>
                <input type="text" placeholder='Add Topic Name' />
                <button>Add Topic</button>
            </div>

            <div className='container2'>
                <input type="text" placeholder='Add your question' />
                <input type="text" placeholder='Add 1st Option' />
                <input type="text" placeholder='Add 2nd Option' />
                <input type="text" placeholder='Add 3rd Option' />
                <input type="text" placeholder='Add 4th Option' />
                <button>Save the Question</button>
            </div>
        </>

    )
}

export default Questions
