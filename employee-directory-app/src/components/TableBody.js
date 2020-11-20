import React from "react";


function TableBody(props) {
    function formatDate(date){
        const dateArray = date.split("-");
        const year = dateArray[0];
        const month = dateArray[1];
        const dayArray = dateArray[2].split("T");
        const day = dayArray[0];
        const formattedDate =[month, day, year].join("-");
        return formattedDate;
    }
    



return (
  
    <tbody>
        {
        props.Employees.map(({ name, picture, phone, email, dob }) => {
            return (
              <tr>
                <td data-th="Image" className="align-middle">
                  <img
                    src={picture.thumbnail}
                    alt={"profile image for " + name.first + " " + name.last}
                    className="img-responsive"
                  />
                </td>
                <td data-th="Name" className="name-cell align-middle">
                  {name.first} {name.last}
                </td>
                <td data-th="Phone" className="align-middle">
                  {phone}
                </td>
                <td data-th="Email" className="align-middle">
                    {email}
                </td>
                <td data-th="DOB" className="align-middle">
                  {formatDate(dob.date)}
                </td>
              </tr>
            );
            }) 
        }
    </tbody>
    );
        }
  
export default TableBody;