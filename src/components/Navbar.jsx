import React from 'react'
import {SearchBar} from './'

const Navbar = ({puppyList, setFilteredList}) => {
    return (
        <div id='navbar'>
            <h2>Puppy Bowl</h2>
            <button>Create Puppy</button>
            <SearchBar puppyList={puppyList} setFilteredList={setFilteredList}/>
        </div>
    );
};

export default Navbar