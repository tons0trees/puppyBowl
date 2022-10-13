import React from "react"
import {PuppyCard} from "./"

const PuppyLineup = ({puppyList, choosePuppy}) => {
    return (
        <span id="puppyLineup">
            {
                puppyList.map((elem) => {
                    return <PuppyCard key={`puppy-${elem.id}`} puppy={elem} choosePuppy={choosePuppy}/>
                })
            }
        </span>
    )
}

export default PuppyLineup