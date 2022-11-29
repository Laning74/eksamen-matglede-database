import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

function BasicButtonExample() {
  return (
    <DropdownButton id="dropdown-basic-button" title="Dropdown button">
      <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
      <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
      <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
    </DropdownButton>
  );
}

export default BasicButtonExample;

// function DropdownButton() {
//   return <div>DropdownButton</div>;
// }

// export default DropdownButton;

// function DropdownButton() {
//   return (
//     <Dropdown>
//       <Dropdown.Toggle variant="success" id="dropdown-basic">
//         Dropdown Button
//       </Dropdown.Toggle>

//       <Dropdown.Menu>
//         <Dropdown.Item href="#/action-1">Mandag</Dropdown.Item>
//         <Dropdown.Item href="#/action-2">Tirsdag</Dropdown.Item>
//         <Dropdown.Item href="#/action-3">Onsdag</Dropdown.Item>
//         <Dropdown.Item href="#/action-4">Torsdag</Dropdown.Item>
//         <Dropdown.Item href="#/action-5">Fredag</Dropdown.Item>
//         <Dropdown.Item href="#/action-6">Lørdag</Dropdown.Item>
//         <Dropdown.Item href="#/action-7">Søndag</Dropdown.Item>
//       </Dropdown.Menu>
//     </Dropdown>
//   );
// }

// export default DropdownButton;
