import React, { useState, useEffect }  from "react";
import Navbar from "./Navbar";
import InputSearch from "./InputSearch";
import Container from "./Container";
import Table from "./Table";
import TableHead from "./TableHead";
import TableBody from "./TableBody";
import API from "../utils/API";






    function EmployeeDirectory() {

    const [Employees, setEmployeeState] = useState([]);
    const [order, setOrder] = useState("ascend");
    const [toSort, setSortedEmployees] = useState([]);

// function that filters or sorts employees and pass down as props
// when name is click sorts/filters and sets a new state value 

    const sortFunc = () => {
        if(order === "ascend") {
            setOrder("descend");
        } else {
            setOrder("ascend");
        }
    
        const sortByName = (toSort) => {
        if(order ===  "ascend"){
           return (toSort.sort((a,b) => ( a.name.first > b.name.first) ? 1 : -1 ));
        }
        else 
        {if (order === "descend") {
         return(toSort.sort((a,b)=> (b.name.first > a.name.first) ? 1 : -1));
        } }
      }
      const sortedEmployees = setSortedEmployees(sortByName)
    }

    const filterByName = event => {
        console.log(event.target.value)
     const nameToTarget = event.target.value;
     const filteredNames = Employees.filter(item => {
         let lowerCaseLetters = item.name.first.toLowerCase();
         return lowerCaseLetters.indexOf(nameToTarget.toLowerCase()) !== -1;
     });
       setSortedEmployees(filteredNames);
    };

    
  
    useEffect(() => {
        API.search()
        .then(res => {
        setEmployeeState(res.data.results);
        setSortedEmployees(res.data.results);
        });  
    },[]);




     return (
        <div>
        <Navbar />
        <Container>
        <InputSearch filterByName={filterByName}/>
        <Table>
            <TableHead sortFunc={sortFunc} />
            <TableBody Employees = {Employees}  />
        </Table>
        </Container>
        </div>
    )

    }

export default EmployeeDirectory;