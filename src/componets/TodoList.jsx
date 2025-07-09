import React, { useState } from "react";

const TodoList = () => {
  const initiaList = [
    {
      id: 1,
      text: "React 이론",
    },
    {
      id: 2,
      text: "React 실습",
    },
    {
      id: 3,
      text: "React 컴포넌트 학습",
    },
    {
      id: 4,
      text: "React JSX구칙 학습",
    },
    {
      id: 5,
      text: "React state와 props 학습",
    },
    {
      id: 6,
      text: "React Pouter 학습",
    },
  ];

  const [list, setList] = useState(initiaList);
  const add = () => {
    const newItem = {
      id: list.length + 1,
      text: "리스트 렌더링",
    };
    const resultList = [...list, newItem];
    setList(resultList);
  };
  return (
    <div>
      <ul>
        {list.map((item) => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
      <button type="button" onClick={add}>
        {" "}
        아이템 추가
      </button>
    </div>
  );
};

export default TodoList;
