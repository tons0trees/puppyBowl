import React, {useEffect, useState} from "react"
import {Navbar, PuppyLineup, PuppySelect, PuppyInputForm} from "./"

const Main = () => {
    const [puppyList, setPuppyList] = useState([]);
    const [chosenPuppy, setChosenPuppy] = useState({});
    const [filteredList, setFilteredList] = useState([]);
    const [readyToCreatePuppy, setReadyToCreatePuppy] = useState(false);

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
        setPuppyList(newPuppyList);
    }

    useEffect(() => {getPuppyList()},[]);

    return (
        <div id="main">
            <Navbar puppyList={puppyList} setFilteredList={setFilteredList} setReadyToCreatePuppy={setReadyToCreatePuppy}/>
            {readyToCreatePuppy ? <PuppyInputForm createPuppy={createPuppy} setReadyToCreatePuppy={setReadyToCreatePuppy}/> : null}
            {chosenPuppy.id ? <PuppySelect puppy={chosenPuppy} setChosenPuppy={setChosenPuppy}/>: null}
            <PuppyLineup puppyList={puppyList} filteredList={filteredList} choosePuppy={choosePuppy} chosenPuppy={chosenPuppy}/>
        </div>
    )
}

export default Main;