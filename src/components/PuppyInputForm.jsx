import React, {useState} from 'react'

const PuppyInputForm = ({createPuppy, setReadyToCreatePuppy}) => {
    const [newName, setNewName] = useState("")
    const [newBreed, setNewBreed] = useState("")
    const [newTeam, setNewTeam] = useState(442)
    const [newStatus, setNewStatus] = useState('bench')

    function makePuppy(event) {
        event.preventDefault();
        const newPuppy = {
            name: newName,
            breed: newBreed,
            team: newTeam,
            status: newStatus
        }
        createPuppy(newPuppy);
        setReadyToCreatePuppy(false);
    }

    return(
        <form id="inputForm" onSubmit={makePuppy}>
            <label htmlFor='name'>
                Enter your puppy's name:
                <input type="text" name="name" value={newName} onChange={(elem) => setNewName(elem.target.value)}/>
            </label>

            <label htmlFor='breed'>
                Enter your puppy's breed:
                <input type='text' name='breed' value={newBreed} onChange={(elem) => setNewBreed(elem.target.value)}/>
            </label>

            <label htmlFor='team'>
                Enter your puppy's team:  
                <select onChange={(elem) => setNewTeam(elem.target.value)}>
                    <option defaultValue={442}>Ruff</option>
                    <option value={443}>Fluff</option>
                </select>
            </label>

            <label htmlFor='status'>
                Enter your puppy's status: 
                <select onChange={(elem) => setNewStatus(elem.target.value)}>
                    <option defaultValue='bench'>Bench</option>
                    <option value='field'>Field</option>
                </select>
            </label>

            <input type="submit" value="submit"/>
        </form>
    )
}

export default PuppyInputForm;