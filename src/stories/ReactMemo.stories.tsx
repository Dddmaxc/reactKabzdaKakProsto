import React from "react";
import { useState } from "react";

export default {
  title: "React.memo demo",
};

const NewConter = (props: { count: number }) => {
  console.log("NewMessagesConter");
  return <div>{props.count}</div>;
};

const NewMessagesConter = React.memo(NewConter)

const UserSecret = (props: { users: Array<string> }) => {
  console.log("user");
  return (
    <div>
      {props.users.map((t, i) => (
        <div key={i}>{t}</div>
      ))}
    </div>
  );
};

const Users = React.memo(UserSecret);

export const Example = () => {
  console.log("Example");
  const [count, setCount] = useState(0);
  const [users, setUsers] = useState<Array<string>>([
    "lol",
    "kek",
    "chebureck",
  ]);

  const addUses = () => {
    const newUsers = [...users, "cola " + new Date().getTime()];
    setUsers(newUsers);
  };

  return (
    <>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        +
      </button>
      <button onClick={addUses}>add user</button>
      <NewMessagesConter count={count} />
      <Users users={users} />
    </>
  );
};
