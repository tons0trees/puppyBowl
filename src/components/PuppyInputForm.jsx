import React, {useState} from 'react'

const PuppyInputForm = () => {
    const [newName, setNewName] = useState("")
    const [newBreed, setNewBreed] = useState("")
    const [newId, setNewId] = useState("")
    const [newTeam, setNewTeam] = useState("")
    const [newStatus, setNewStatus] = useState("")

    function makePuppy(event) {
        event.preventDefault();
        const newPuppy = {
            name: newName,
            breed: newBreed,
            id: newId,
            team: newTeam,
            status: newStatus
        }
        console.log(newPuppy)
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
            <label for='idNum'>
                Enter your puppy's ID number: 
                <input type='text' name='idNum' value={newId} onChange={(elem) => setNewId(elem.target.value)}/>
            </label>
            <label for='team'>
                Enter your puppy's team: 
                <input type='text' name='team' value={newTeam} onChange={(elem) => setNewTeam(elem.target.value)}/>
            </label>
            <label for='status'>
                Enter your puppy's status: 
                <input type='text' name='status' value={newStatus} onChange={(elem) => setNewStatus(elem.target.value)}/>
            </label>
            <input type="submit" value="submit"/>
        </form>
    )
}

export default PuppyInputForm;