import React from 'react'

const PuppySelect = ({puppy, setChosenPuppy}) =>{
    async function deleteThisPuppy() {
        const response = await fetch(`https://fsa-puppy-bowl.herokuapp.com/api/COHORT-NAME/players/${puppy.id}`,{method: 'DELETE'});
        const result = await response.json();
        setChosenPuppy({});
        //need to update the puppylist
    }
    return(
        <div className="puppySelect">
            <h3>{puppy.name}</h3>
            <img className="profilePic" src={puppy.imageUrl} />
            <div className="puppyDetails">
                <p><b>Breed:</b> {puppy.breed}</p>
                <p><b>Id:</b> {puppy.id}</p>
                <p><b>Team:</b> {puppy.teamId === 442 ? 'Ruff' : "Fluff"}</p>
                <p><b>Status:</b> {puppy.status}</p>
            </div>
        <button onClick={() => {setChosenPuppy({})}}>Close</button>
        {/* <button onClick={() => deleteThisPuppy()}>Delete</button> */}
        </div>
    )
}

export default PuppySelect