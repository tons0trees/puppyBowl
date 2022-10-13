import React, {useEffect, useState} from "react"
import {Navbar, PuppyLineup} from "./"

const Main = () => {
    const [puppyList, setPuppyList] = useState([]);

    async function getPuppyList() {
        const response = await fetch('https://fsa-puppy-bowl.herokuapp.com/api/2209-FTB-ET-WEB-FT/players');
        const puppies = await response.json();
        setPuppyList(puppies.data.players);
    }

    useEffect(() => {getPuppyList()},[]);

    return (
        <div id="main">
            <Navbar />
            <PuppyLineup puppyList={puppyList} />
        </div>
    )
}

export default Main;