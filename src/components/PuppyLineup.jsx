import React from "react"
import {PuppyCard} from "./"

const PuppyLineup = ({puppyList, filteredList, choosePuppy, chosenPuppy}) => {
    return (
        <div id="puppyLineup" className={chosenPuppy.id ? "transparent": null}>
            {filteredList.length ?
                filteredList.map(elem => {
                    return <PuppyCard key={`puppy-${elem.id}`} puppy={elem} choosePuppy={choosePuppy}/>
                })
            :
                puppyList.map((elem) => {
                    return <PuppyCard key={`puppy-${elem.id}`} puppy={elem} choosePuppy={choosePuppy}/>
                })
            }
        </div>
    )
}

export default PuppyLineup