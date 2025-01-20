import React from "react";
import "./Table.css";

const Table = ({ headings, children }) => {
  //children = 자식 태그들 <tbody>
  return (
    <table className="common_table">
      <thead>
        <tr>
          {headings.map((item, index) => (
            <th key={index}>{item}</th>
          ))}
        </tr>
      </thead>
      {children}
    </table>
  );
};

export default Table;
