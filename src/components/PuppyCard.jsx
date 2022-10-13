import React from "react"

const PuppyCard = ({puppy, choosePuppy}) => {
    return (
        <div className="puppyCard" onClick={() =>choosePuppy(puppy.id)}>
            <h3>{puppy.name}</h3>
            <img className="profilePic" src={puppy.imageUrl} />
            <div className="puppyDetails">
            </div>
        </div>
    )
}

export default PuppyCard