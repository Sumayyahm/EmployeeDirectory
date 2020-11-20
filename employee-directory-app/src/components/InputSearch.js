import React from 'react';



function InputSearch(props) {
    

    return (
    <form>
        <br />
    <div className="form-row align-items-center searchbar">
        <div className="col-sm-3 my-1">
        <input 
        type="search" 
        className="form-control" 
        id="inlineFormInputName" 
        placeholder="Search"
        onChange= {e => props.filterByName(e)}
        />
        </div>
    </div>
    <br />
    </form>
    );
}

export default InputSearch;

