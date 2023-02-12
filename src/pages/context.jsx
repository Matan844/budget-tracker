import { createContext, useState } from "react";

export const Detail = createContext();

export default function Context({ children }) {
  const [action, setaction] = useState("no transaction");
  const [price, setprice] = useState(0);
  const [valueafter, setvalueafter] = useState(price);
  const [list, setlist] = useState([{}]);
  const [select, setselect] = useState("no transaction");
  const [income, setincome] = useState(0);
  const [expenses, setexpenses] = useState(0);
  const [inex, setinex] = useState();
  const [date, setdate] = useState();
  const [food, setfood] = useState(0);
  const [supermarket, setsupermarket] = useState(0);
  const [bills, setbills] = useState(0);
  const [clothes, setclothes] = useState(0);
  const [finance, setfinance] = useState(0);
  const [eduction, seteduction] = useState(0);
  const [health, sethealth] = useState(0);
  const [communication, setcommunication] = useState(0);

  localStorage.setItem("action", action);
  localStorage.setItem("price", price);
  localStorage.setItem("catagory", select);

  return (
    <Detail.Provider
      value={{
        action,
        setaction,
        price,
        setprice,
        valueafter,
        setvalueafter,
        list,
        setlist,
        select,
        setselect,
        income,
        setincome,
        expenses,
        setexpenses,
        inex,
        setinex,
        date,
        setdate,
        food,
        setfood,
        supermarket,
        setsupermarket,
        bills,
        setbills,
        clothes,
        setclothes,
        finance,
        setfinance,
        eduction,
        seteduction,
        health,
        sethealth,
        communication,
        setcommunication,
      }}
    >
      {children}
    </Detail.Provider>
  );
}
