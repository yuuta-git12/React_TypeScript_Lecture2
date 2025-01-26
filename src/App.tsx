import { useState } from 'react'
import './App.css'
import axios from 'axios'
import { Todo } from './Todo';

// jsonplaceholderから取ってくるデータの型定義
type TodoType = {
    "userId": number;
    "id": number;
    "title": string;
    "completed": boolean;
};

export default function App() {
  // 画面にデータを表示するためのStateの宣言(型定義はTodoTypeを定義)
  const [todos, setTodos] = useState<Array<TodoType>>([]);
  const onClickFetchData = () => {
    // axiosを使ってjsonplaceholderから仮のデータを取得(型定義はTodoTypeを定義)
    axios.get<Array<TodoType>>("https://jsonplaceholder.typicode.com/todos")
    .then((res)=>{
      setTodos(res.data);
    });
  };
  
  return (
    <div className="App">
      <button onClick={onClickFetchData}>データ取得</button>
      {todos.map((todo) => (
        <Todo title={todo.title} userid={todo.userId}/>
      ))}
    </div>
  );
    
}
