import React, { useState } from 'react';

const Form = () => {
    const [input,setInput]= useState("")
    const keyPress=(event) => {
        const key = event.key.toLowerCase()
        const isVocal = "aeiou".includes(key)
        isVocal ? event.preventDefault() : "" // If vocal cant execute text
    }
    return (
        <div>
            <h1> Input of text witouth vocals</h1>
            <input className='text-green-500 border-cyan-700 border-2 px-2'
            type="text"
            value={input}
            onChange={
                (event) => {
                    setInput(event.target.value)
                }
            }
            onKeyDown={
                keyPress
            }
            />
            <p className='text-gray-500'>Texto ingresado: {input}</p>
        </div>
    );
};

export default Form;