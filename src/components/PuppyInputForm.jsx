import React, {useState} from 'react'

const PuppyInputForm = ({createPuppy}) => {
    const [newName, setNewName] = useState("")
    const [newBreed, setNewBreed] = useState("")
    const [newTeam, setNewTeam] = useState(null)
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
    }

    return(
        <form id="inputForm" onSubmit={makePuppy}>
            <label for='name'>
                Enter your puppy's name:
                <input type="text" name="name" value={newName} onChange={(elem) => setNewName(elem.target.value)}/>
            </label>

            <label for='breed'>
                Enter your puppy's breed:
                <input type='text' name='breed' value={newBreed} onChange={(elem) => setNewBreed(elem.target.value)}/>
            </label>

            <label for='team'>
                Enter your puppy's team:  
                <select onChange={(elem) => setNewTeam(elem.target.value)}>
                    <option value={442}>Ruff</option>
                    <option value={443}>Fluff</option>
                </select>
            </label>

            <label for='status'>
                Enter your puppy's status: 
                <select onChange={(elem) => setNewStatus(elem.target.value)}>
                    <option value='field'>Field</option>
                    <option value='bench'>Bench</option>
                </select>
            </label>

            <input type="submit" value="submit"/>
        </form>
    )
}

export default PuppyInputForm;