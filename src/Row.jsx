import React, { useState } from "react";

const Row = ({ item }) => {
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
  const [open, setOpen] = useState(false);
  const [childrent, setChildrent] = useState([]);

  const handleClick = () => {
    setOpen(!open);
    // call an api and get data as response
    setChildrent(data);
  };

  return (
    <>
      <tr key={item.id}>
        <td>{item.hasChild ? <span onClick={handleClick}>{">"}</span> : ""}</td>
        <td>{item.id}</td>
        <td>{item.name}</td>
        <td>{item.age}</td>
      </tr>
      <div style={{ marginLeft: "1rem", borderLeft: "1px solid #ccc" }}>
        {open && (
          <>
            {childrent.map((item) => (
              <Row item={item} />
            ))}
          </>
        )}
      </div>
    </>
  );
};

export default Row;
