import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ParentComponent from './components/parentComponent/ParentComponent';
import FunctionalComponent from './components/fucntionalComponent/Functional Component';
import DataFetcher from './components/dataFetcher/DataFetcher';
import Mainlayout from './components/mainlayout/Mainlayout';
import Counter from './components/counter/Counter';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Mainlayout />} />
            <Route path="/task1" element={<ParentComponent />} />
            <Route path="/task2" element={<ParentComponent RenderProp={FunctionalComponent} />} />
            <Route path="/task3" element={<Counter />} />
            <Route path="/task4" element={<DataFetcher />} />
            <Route path="/task5" element={<Counter />} />
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
