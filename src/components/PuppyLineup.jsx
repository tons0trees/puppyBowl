import React from "react"
import {PuppyCard} from "./"

const PuppyLineup = ({puppyList}) => {
    return (
        <div id="puppyLineup">
            {
                puppyList.map((elem) => {
                    return <PuppyCard key={`puppy-${elem.id}`} puppy={elem}/>
                })
            }
        </div>
    )
}

export default PuppyLineup