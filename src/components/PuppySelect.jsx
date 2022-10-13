import React from 'react'

const PuppySelect = ({puppy, setChosenPuppy}) =>{
    function closeModal(event) {
        if (event.target.matches(".modal")) {
            setChosenPuppy({});
        }
    }

    return(
        <div className="modal" onClick={closeModal}>
            <div className="modalContent">
            <h3>{puppy.name}</h3>
            <img className="profilePic" src={puppy.imageUrl} />
            <div className="puppyDetails">
                <p><b>Breed:</b> {puppy.breed}</p>
                <p><b>Id:</b> {puppy.id}</p>
                <p><b>Team:</b> {puppy.teamId === 442 ? 'Ruff' : "Fluff"}</p>
                <p><b>Status:</b> {puppy.status}</p>
            </div>
            </div>
        </div>
    )
}

export default PuppySelect