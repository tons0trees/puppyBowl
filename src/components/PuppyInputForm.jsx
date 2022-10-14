import React from 'react'

const PuppyInputForm = () => {
    return(
        <form id="inputForm">
            <label for='name'>
                Enter your puppy's name:
                <input type="text" name="name" />
            </label>
            <label>
                Enter your puppy's breed:
                <input type='text' name='breed' />
            </label>
        </form>
    )
}

export default PuppyInputForm;