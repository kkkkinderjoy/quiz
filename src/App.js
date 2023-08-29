import logo from './logo.svg';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Main from './pages/Main';
import Detail from './pages/Detail';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p className='text-[20px] text-red-300 text-center'>0829quiz 폴더 내 프로젝트 생성함</p>
      </header>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/detail" element={<Detail />}/>
      </Routes>
    </div>
  );
}

export default App;
