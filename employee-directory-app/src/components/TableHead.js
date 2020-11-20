import React from "react";


function TableHead(props) {
  

  return (
  <thead className= "heading">
      <tr>
      <th>Image</th>
      <th>
      <div onClick= {() => {props.sortFunc()}}>Name</div>
      </th>
      <th>Phone</th>
      <th>Email</th>
      <th>DOB</th>
    </tr>
   </thead>);
}

export default TableHead;

