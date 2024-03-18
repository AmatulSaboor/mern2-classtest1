import './App.css';
import Username from './components/user/Username';
import Counter from './components/counter/Counter';
import Mainlayout from './components/mainlayout/Mainlayout';
import DataFetcher from './components/dataFetcher/DataFetcher';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ParentComponent from './components/parent_component/ParentComponent';
import FunctionalComponent from './components/fucntional_component/Functional Component';

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
            <Route path="/task5" element={<Username />} />
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
