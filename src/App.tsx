import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

export default function App() {
  const onClickFetchData = () => {
    // acxiosを使ってjsonplaceholderから仮のデータを取得
    axios.get("https://jsonplaceholder.typicode.com/todos").then((res)=>{
      console.log(res);
    });
  };
  
  return (
    <div className="App">
      <button onClick={onClickFetchData}>データ取得</button>
    </div>
  );
    
}
