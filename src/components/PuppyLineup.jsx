import React from "react"
import {PuppyCard} from "./"

const PuppyLineup = ({puppyList, filteredList, choosePuppy}) => {
    return (
        <span id="puppyLineup">
            {filteredList.length ?
                filteredList.map(elem => {
                    return <PuppyCard key={`puppy-${elem.id}`} puppy={elem} choosePuppy={choosePuppy}/>
                })
            :
                puppyList.map((elem) => {
                    return <PuppyCard key={`puppy-${elem.id}`} puppy={elem} choosePuppy={choosePuppy}/>
                })
            }
        </span>
    )
}

export default PuppyLineup