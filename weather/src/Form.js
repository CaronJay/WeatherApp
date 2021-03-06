import React from 'react';
//once the user clicks on button , the props will get passed through.
const Form = (props) => {
    return (
        <form onSubmit={props.getWeather}>
            <input
                type='text'
                placeholder='city'
                name='city'
            />

            <input
                 type='text'
                placeholder='country'
                name='country'
            />
            <button>Submit</button>
        </form>
    )
}

export default Form