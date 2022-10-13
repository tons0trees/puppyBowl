import React, {useEffect, useState} from "react"
import {Navbar, PuppyLineup, PuppySelect} from "./"

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

    useEffect(() => {getPuppyList()},[]);

    return (
        <div id="main">
            <Navbar puppyList={puppyList} setFilteredList={setFilteredList}/>
            {chosenPuppy.id ? <PuppySelect puppy={chosenPuppy} setChosenPuppy={setChosenPuppy}/>: null}
            <PuppyLineup puppyList={puppyList} filteredList={filteredList} choosePuppy={choosePuppy}/>
        </div>
    )
}

export default Main;