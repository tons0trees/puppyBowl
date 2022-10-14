import React from "react"

const SearchBar = ({puppyList, setFilteredList}) => {
    function findPuppy(event) {
        event.preventDefault()
        let searchString = event.target[0].value.toLowerCase()
        const newPuppyList = puppyList.filter(elem => elem.name.toLowerCase().includes(searchString));
        setFilteredList(newPuppyList);
    }

    return (
        <form onSubmit={findPuppy}> 
            <input type="text" id="searchInput" placeholder="Search"></input>      
        </form>
    )

}

export default SearchBar