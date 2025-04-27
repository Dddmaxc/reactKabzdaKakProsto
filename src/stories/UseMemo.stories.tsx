import React from "react";
import { useMemo, useState } from "react";

export default {
  title: "useMemo",
};

export const DifficultCountExample = () => {
  const [a, setA] = useState<number>(5);
  const [b, setB] = useState<number>(5);

  let resultA = 1;
  let resultB = 1;

  resultA = useMemo(() => {
    let tempResultA = 1
    for (let i = 1; i <= a; i++) {
      let fake = 0;
      while (fake < 100000) {
        fake++;
        const fakseValue = Math.random();
      }
      tempResultA = tempResultA * i;
    }
    return tempResultA
  }, [a]);

  for (let i = 1; i <= b; i++) {
    resultB = resultB * i;
  }

  return (
    <div>
      <input value={a} onChange={(e) => setA(+e.currentTarget.value)} />
      <input value={b} onChange={(e) => setB(+e.currentTarget.value)} />
      <hr />
      <div>Result for a: {resultA}</div>
      <div>Result for b: {resultB}</div>
    </div>
  );
};


const UserSecret = (props: { users: Array<string> }) => {
  console.log("users secret");
  return (
    <div>
      {props.users.map((t, i) => (
        <div key={i}>{t}</div>
      ))}
    </div>
  );
};

const Users = React.memo(UserSecret);

export const HelpstoReactMemo = () => {
  console.log("HelpstoReactMemo");
  const [count, setCount] = useState(0);
  const [users, setUsers] = useState<Array<string>>([
    "lol",
    "kek",
    "chebureck",
  ]);

  const addUser = () =>{
    const newUser = [
        ...users, 
        "waw" + new Date().getTime()
    ]
    setUsers(newUser)
  }

  const newArray = useMemo(() => {
   const newArray = users.filter(u => u.toLowerCase().indexOf("e") > -1)
   return newArray
},[users])
  return (
    <>
      <button onClick={addUser}>add user</button>
      <button onClick={() => setCount(count+1)}>+</button>
      {count}
      <Users users={newArray} />
    </>
  );
};




export const LikeUseCallback = () => {
  console.log("LikeUseCallback");
  const [count, setCount] = useState(0);
  const [users, setUsers] = useState<Array<string>>([
    "lol",
    "kek",
    "chebureck",
  ]);

  const addUser = () =>{
    const newUser = [
        ...users, 
        "waw" + new Date().getTime()
    ]
    setUsers(newUser)
  }

  const newArray = useMemo(() => {
   const newArray = users.filter(u => u.toLowerCase().indexOf("e") > -1)
   return newArray
},[users])
  return (
    <>
      <button onClick={addUser}>add user</button>
      <button onClick={() => setCount(count+1)}>+</button>
      {count}
      <Users users={newArray} />
    </>
  );
};


