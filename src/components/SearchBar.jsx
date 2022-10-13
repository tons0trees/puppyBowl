import React from "react"

const SearchBar = ({puppyList, setFilteredList}) => {
    function findPuppy(paramString) {
        const newPuppyList = puppyList.filter(elem => elem.name === paramString);
        setFilteredList(newPuppyList);
    }

    return (
        <form> 
            <input type="text" id="searchInput" placeholder="Search"></input>       
        </form>
    )

}

export default SearchBar