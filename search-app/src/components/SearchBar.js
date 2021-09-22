import React, { useState } from "react";
import "../App.css";
export default function SearchBar(props) {
  const [filderedData, setFileteredData] = useState([]);

  const handleFilter = (event) => {
    let searchTerm = event.target.value;

    let newFilter = props.data.filter((value) => {
      return value.make.toLowerCase().includes(searchTerm.toLowerCase());
    });
    if (searchTerm === "") {
      setFileteredData([]);
    } else {
      setFileteredData(newFilter);
    }
  };
  return (
    <div>
      <input type="text" placeholder="Enter Car Name" onChange={handleFilter} />

      {filderedData.length != 0 && (
        <div className="list">
          <table className="table table-striped">
            <thead>
              <tr>
                <th className="text-center">Sr.No</th>
                <th className="text-center">Make</th>
                <th className="text-center">Model</th>
              </tr>
            </thead>

            {filderedData.map((value, key) => {
              return (
                <tbody>
                  <tr>
                    <td className="text-center">{key + 1}</td>
                    <td className="text-center">{value.make}</td>
                    <td className="text-center">{value.model}</td>
                  </tr>
                </tbody>
              );
            })}
          </table>
          <h3>No of available cars {filderedData.length} </h3>
        </div>
      )}
    </div>
  );
}
