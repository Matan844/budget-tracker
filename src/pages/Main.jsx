import { useContext } from "react";
import { Detail } from "./context";
import { NavLink } from "react-router-dom";

export default function Main() {
  const { list } = useContext(Detail);
  const { income } = useContext(Detail);
  const { expenses } = useContext(Detail);
  let lastValue = list[list.length - 1];
  return (
    <div className="maindiv">
      <div className="navbar">
        {" "}
        <NavLink to="/main">main</NavLink>
        <NavLink to="/add">add</NavLink>
        <NavLink to="/graph">graph</NavLink>
      </div>
      <div className="headrs">
      <h1>Hello Matan</h1>
      
       <h2>total income:{income}</h2>
      <h2>total expenses:{expenses}</h2>
      <h2>current balance:{lastValue.valueafter}$</h2>
      <br />
      <h2>last movment:</h2>
      <br /></div>
      <table className="osh">
        <tr>
          <th>action</th>
          <th>date</th>
          <th>amount</th>
          <th>catagory</th>
          <th>value after</th>
        </tr>

        {list.map((single, index) => {
          if (index > 0) {
            return (
              <tr key={index}>
                <td>{single.action}</td>
                <td>{single.date}</td>
                <td> {single.price}$</td>
                <td> {single.catagory}</td>
                <td>{single.valueafter}$</td>
              </tr>
            );
          }
        })}
      </table>
    </div>
  );
}
