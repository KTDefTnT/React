import { useMemo, useState } from "react";

export default function SetStatePage() {
  const [user, setUser] = useState({ name: "焦糖瓜子", age: 18 });
  
  const computedValue = useMemo(() => {
    console.log('useMemo');
    return `还有${55 - user.age}年退休！！！`;
  }, [user.age])

  function handleClick() {
    // setUser(({ age }) => ({ age: age + 1 }));
    setUser(user => ({ ...user, age: user.age + 1}));
  }

  return (
    <div>
      我的名字： {user.name}, 青春正好，年仅{user.age}
      <button onClick={handleClick}>年复一年</button>
      <br />
      <p>{computedValue}</p>
    </div>
  );
}
