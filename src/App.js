import React, { useState } from 'react';
import './App.css';
import Todo from './components/Todo';
import CustomBtn from './components/CustomBtn';
 
function App() {
  const [todo, setTodo] = useState([
    {
      id: Date.now(),
      title: '오늘 할일',
      contents: '리액트기초를 공부해봅시다.',
    },
    {
      id: Date.now() + 1,
      title: '오늘의 할일',
      contents: 'Todo list 구현하기',
    },
  ]);
 
  const [doneTodo, setDoneTodo] = useState([]);
  const [title, setTitle] = useState('');
  const [contents, setContents] = useState('');
  const addTodoHandler = () => {
    const newTodo = {
      id: Date.now(),
      title: title,
      contents: contents,
    };
    if (title === '' && contents === '') alert('내용을 추가하세요');
    else setTodo([...todo, newTodo]);
    setTitle('');
    setContents('');
  };
 
  // 할일삭제기능
  const deleteTodoHandler = (id) => {
    setTodo(todo.filter((t) => t.id !== id));
  };
 
  // 완료삭제기능
  const deleteDoneTodoHandler = (id) => {
    setDoneTodo(doneTodo.filter((dt) => dt.id !== id));
  };
 
  // 할일완료기능
  const doneTodoHandler = (dt) => {
    const newDoneTodo = {
      id: dt.id,
      title: dt.title,
      contents: dt.contents,
    };
    setDoneTodo([...doneTodo, newDoneTodo]);
    setTodo(todo.filter((t) => t.id !== dt.id));

  };
 
  // 완료취소기능
  const doneCancelHandler = (t) => {
    const newTodo = {
      id: t.id,
      title: t.title,
      contents: t.contents,
    };
    setTodo([...todo, newTodo]);
    setDoneTodo(doneTodo.filter((dt) => dt.id !== t.id));
  };
 
  return (
    <div className='Outer'>
      <div>My todo list</div>
      <div className='InputArea'>
        제목
        <input
          className='Input'
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        ></input>
        할일내용
        <input
          className='Input'
          value={contents}
          onChange={(event) => setContents(event.target.value)}
        ></input>
        <CustomBtn buttonColor='whitesmoke' onClick={addTodoHandler}>
          추가하기
        </CustomBtn>
      </div>
      <div className='Outer'>
        <div className = 'cheerup'>오늘의 할일을 내일로 미루지 맙시다.🧡</div>
        <h2 className='title'>Working.. 🚀</h2>
        <div className='Scroll'>
          {todo.map((todo) => {
            return (
              <Todo
                todo={todo}
                title={todo.title}
                key={todo.id}
                contents={todo.contents}
                firstHandler={deleteTodoHandler}
                secondHandler={doneTodoHandler}
                firstButton='삭제하기'
                secondButton='완료!!'
                color='tanblue'
              />
            );
          })}
        </div>
        <h2 className='title'>Done..! 🎉</h2>
        <div className='Scroll'>
          {doneTodo.map((doneTodo) => {
            return (
              <Todo
                todo={doneTodo}
                title={doneTodo.title}
                key={doneTodo.id}
                contents={doneTodo.contents}
                firstHandler={deleteDoneTodoHandler}
                secondHandler={doneCancelHandler}
                firstButton='삭제하기'
                secondButton='취소!!'
                color='orange'
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
 
export default App;