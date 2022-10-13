import React, {useEffect, useState} from "react"
import {Navbar, PuppyLineup, PuppySelect} from "./"

const Main = () => {
    const [puppyList, setPuppyList] = useState([]);
    const [chosenPuppy, setChosenPuppy] = useState({});

    async function getPuppyList() {
        const response = await fetch('https://fsa-puppy-bowl.herokuapp.com/api/2209-FTB-ET-WEB-FT/players');
        const puppies = await response.json();
        setPuppyList(puppies.data.players);
    }

    function choosePuppy(id) {
        let chosen = puppyList.filter(elem => elem.id === id)[0];
        setChosenPuppy(chosen);
        console.log(chosen);
    }

    useEffect(() => {getPuppyList()},[]);

    return (
        <div id="main">
            <Navbar />
            {chosenPuppy.id ? <PuppySelect />: null}
            <PuppyLineup puppyList={puppyList} choosePuppy={choosePuppy}/>
        </div>
    )
}

export default Main;