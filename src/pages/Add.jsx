import { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Detail } from "./context";


export default function Add() {
  const { action, setaction } = useContext(Detail);
  const { price, setprice } = useContext(Detail);
  const { valueafter, setvalueafter } = useContext(Detail);
  const { list, setlist } = useContext(Detail);
  const { select, setselect } = useContext(Detail);
  const { income, setincome } = useContext(Detail);
  const { expenses, setexpenses } = useContext(Detail);
  const { inex, setinex } = useContext(Detail);
  const { date, setdate } = useContext(Detail);
  const {food,setfood} = useContext(Detail)
  const {supermarket,setsupermarket} = useContext(Detail)
  const {bills,setbills} = useContext(Detail)
  const {clothes,setclothes} = useContext(Detail)
  const {finance,setfinance} = useContext(Detail)
  const {eduction,seteduction} = useContext(Detail)
  const {health,sethealth} = useContext(Detail)
  const {communication,setcommunication} = useContext(Detail)

  if (inex === "income" && price > 0) {
    setprice(price);
  } else if (inex === "income" && price < 0) {
    setprice(-1 * price);
  } else if (inex === "expens" && price > 0) {
    setprice(-1 * price);
  } else if (inex === "expens" && price < 0) {
    setprice(price);
  }
  const HandleSubmit = (e) => {
    e.preventDefault();
    if (inex=="expens") {
      if(select=="food"){setfood(food+1)}
      else if (select=="supermarket") {setsupermarket(supermarket+1) }
      else if (select=="bills") {setbills(bills+1) }
      else if (select=="clothes") {setclothes(clothes+1) }
      else if (select=="finance") {setfinance(finance+1) }
      else if (select=="eduction") {seteduction(eduction+1) }
      else if (select=="health") {sethealth(health+1) }
      else if (select=="communication") {setcommunication(communication+1) }
    }
    if (Number(price) > 0) {
      setincome(income + Number(price));
    } else {
      setexpenses(expenses + Number(price));
    }
    setvalueafter(valueafter + Number(price));

    setlist([
      ...list,
      {
        action: action,
        date : date,
        price: price,
        catagory: select,
        valueafter: valueafter + Number(price),
      },
    ]);
  };
  return (
    <div>
      <div className="navbar">
        {" "}
        <NavLink to="/main">main</NavLink>
        <NavLink to="/graph">graph</NavLink>
        <NavLink to="/add">add</NavLink>
      </div>
      <form onSubmit={HandleSubmit}>
        <select className="select" name="income" onChange={(e) => setinex(e.target.value)}>
          <option value="select">income/expense</option>
          <option value="income">income</option>
          <option value="expens">expens</option>
        </select>
        <input
          type="text"
          placeholder="action"
          onChange={(e) => setaction(e.target.value)}
        />
        <input
          type="date"
          placeholder="date"
          onChange={(e) => setdate(e.target.value)}
        />
        <input
          type="number"
          placeholder="price"
          onChange={(e) => setprice(e.target.value)}
        />
        <select
          name="catagory"
          id="catgory"
          onChange={(e) => setselect(e.target.value)}
        >
          <option value="select" >select</option>
          <option value="food">food</option>
          <option value="supermarket">supermarket</option>
          <option value="bills" >bills</option>
          <option value="clothes">clothes</option>
          <option value="finance">finance</option>
          <option value="eduction">eduction</option>
          <option value="health">health</option>
          <option value="communication">communication</option>
        </select>
        <input type="submit" />
      </form>
      {list.map((single, index) => {
        return (
          <div>
            <p key={index} className="event">
              {single.action}
              {single.price}
              {single.catagory}
              {single.valueafter}
              {single.date}
              {inex}
            </p>
            <p></p>
          </div>
        );
      })}
    </div>
  );
}
