import React from "react";
import DataBody from "./DataBody";

// function Row(props) {
//   return <div className={`row${props.fluid ? "-fluid" : ""}`}>{props.children}</div>;
// }
function DataTables({users, headings}) {
  return (
    <div>
    <table>
      <thead>
        <tr>
          {headings.map(({width}) => 
          {
            return(
              <td style={{width}}>

              </td>
            )
          }
          )} 
        </tr>
      </thead>
      <DataBody users={users}/>
    </table>
    </div>
  )
}

export default DataTables;