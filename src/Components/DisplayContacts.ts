import {useState} from 'react';

export default DisplayContacts({entries}) {
  return (
    <table style={{ marginTop: "1em", width: 300 }}>
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Phone Number</th>
        </tr>
      </thead>
      <tbody style={{ marginTop: ".5em" }}>
        {entries.map((entry) => (
          <tr key={`${entry.firstName} ${entry.lastName}`}>
            <td>{entry.firstName}</td>
            <td>{entry.lastName}</td>
            <td>{entry.phoneNumber}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
//Update this copied/pasted from another git repo example. This example outputs the form contents into a Table.

//add sorting logic to allow sorting alphabetically by name or email
//add logic to search for contact by name, email, or phone