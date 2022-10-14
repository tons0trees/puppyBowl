import React, {useEffect, useState} from "react"
import {Navbar, PuppyLineup, PuppySelect, PuppyInputForm} from "./"

const Main = () => {
    const [puppyList, setPuppyList] = useState([]);
    const [chosenPuppy, setChosenPuppy] = useState({});
    const [filteredList, setFilteredList] = useState([]);

    async function getPuppyList() {
        const response = await fetch('https://fsa-puppy-bowl.herokuapp.com/api/2209-FTB-ET-WEB-FT/players');
        const puppies = await response.json();
        setPuppyList(puppies.data.players);
    }

    function choosePuppy(paramId) {
        let chosen = puppyList.filter(elem => elem.id === paramId)[0];
        setChosenPuppy(chosen);
        console.log(chosen);
    }

    async function createPuppy(paramPuppy) {
        const response = await fetch('https://fsa-puppy-bowl.herokuapp.com/api/2209-FTB-ET-WEB-FT/players',
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(paramPuppy),
        })
        const result = await response.json();
        let newPuppyList = [...puppyList, result.data.newPlayer];
        console.log(newPuppyList);
        // setPuppyList(result.data.newPlayer);
    }

    useEffect(() => {getPuppyList()},[]);

    return (
        <div id="main">
            <Navbar puppyList={puppyList} setFilteredList={setFilteredList}/>
            <PuppyInputForm createPuppy={createPuppy}/>
            {chosenPuppy.id ? <PuppySelect puppy={chosenPuppy} setChosenPuppy={setChosenPuppy}/>: null}
            <PuppyLineup puppyList={puppyList} filteredList={filteredList} choosePuppy={choosePuppy} chosenPuppy={chosenPuppy}/>
            <button onClick={createPuppy}>Create Rufus</button>
        </div>
    )
}

export default Main;