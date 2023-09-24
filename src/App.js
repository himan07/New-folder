import React, { useState } from "react";
import Row from "./Row";

const App = () => {
  const data = [
    {
      id: 1,
      name: "himanshu",
      age: 23,
      hasChild: true,
    },
    { id: 2, name: "rahul", age: 33, hasChild: false },
    {
      id: 3,
      name: "aman",
      age: 56,
      hasChild: true,
    },
  ];
  const [rowData, setRowData] = useState(data);
  return (
    <div>
      <table>
        <thead>
          <tr>
            <td></td>
            <td>id</td>
            <td>name</td>
            <td>age</td>
          </tr>
        </thead>
        <tbody>
          {rowData.map((item) => (
            <Row item={item} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;
