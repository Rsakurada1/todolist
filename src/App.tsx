import { useState } from 'react';
import './App.css';

function App() {
  const [ inputValue, setinputValue ] = useState("")
  const [ todos, setTodos] = useState<Todo[]>([]);

  type Todo = {
    inputValue: string;
    id: number;
    checked: boolean;
  }

  const handleChange = (e) => {
    console.log(e.target.value);
  }


  return (
    <div className="App">
      <div>
        <h2>Todoリスト with TypeScript</h2>
        <form onSubmit={() => {}}>
          <input className='inpuText' onChange={(e) => handleChange(e)} type="text" />
          <input type="submit" value="作成" className='submitButtom' />
        </form>
      </div>
    </div>
  );
}

export default App;
