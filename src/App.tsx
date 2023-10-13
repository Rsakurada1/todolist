import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <div>
        <h2>Todoリスト with TypeScript</h2>
        <form onSubmit={() => {}}>
          <input className='inpuText' onChange={() => {}} type="text" />
          <input type="submit" value="作成" className='submitButtom' />
        </form>
      </div>
    </div>
  );
}

export default App;
