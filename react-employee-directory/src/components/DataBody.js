import React from "react";

function DataBody({users}) {
    function FormatDate(date) {
        const dateArray = date.split("-");
        const year = dateArray[0];
        const month = dateArray[1];
        const dayArray = dateArray[2].split("T");
        const day = dayArray[0];
        const formattedDate = [month, day, year].join("-");
        return formattedDate;        
    }

    return (
        <tbody>
            {users.map(({name, picture, phone, email, dob}) => {
                return (
                    <tr>
                        <td className="image">
                            <img src={picture.medium} alt="user image"/>
                        </td>
                        <td className="name align-middle">
                            {name.first} {name.last}
                        </td>
                        <td className="phone align-middle">
                            {phone}
                        </td>
                        <td className="email align-middle">
                            <a href={"mailto:"+ email} target="__blank">{email}</a>
                        </td>                        
                        <td className="DOB align-middle">
                            {FormatDate(dob.date)}
                        </td>
                    </tr>
                )
            })}
        </tbody>
    )
}

export default DataBody;
