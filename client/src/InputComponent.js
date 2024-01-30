import React, { useState } from 'react';
import axios from 'axios';

export const InputComponent = () => {
    const [inputValue, setInputValue] = useState('');
    const [response, setResponse] = useState('');
    const url = 'http://localhost:3000/api/generate-mockup'
    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post(url, { body: inputValue });
            setResponse(res.data);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" value={inputValue} onChange={handleInputChange}/>
                <br></br>
                <button type="submit">Submit</button>
            </form>
            <div>{response}</div>
        </div>
    );
};