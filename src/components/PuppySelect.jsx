import React from 'react'

const PuppySelect = ({puppy, setChosenPuppy}) =>{
    return(
        <div className="modal">
            <div className="modalContent">
            <h3>{puppy.name}</h3>
            <img className="profilePic" src={puppy.imageUrl} />
            <div className="puppyDetails">
                <p><b>Breed:</b> {puppy.breed}</p>
                <p><b>Id:</b> {puppy.id}</p>
                <p><b>Team:</b> {puppy.teamId}</p>
            </div>
            <button onClick={() => setChosenPuppy({})}>Close</button>
            </div>
        </div>
    )
}

export default PuppySelect