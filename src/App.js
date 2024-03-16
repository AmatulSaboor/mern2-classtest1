import './App.css';
import ParentComponent from './components/parentComponent/ParentComponent';
import FunctionalComponent from './components/fucntionalComponent/Functional Component';
import DataFetcher from './components/dataFetcher/DataFetcher';
import Mainlayout from './components/mainlayout/Mainlayout';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <ParentComponent RenderProp={FunctionalComponent} /> */}
        {/* <DataFetcher /> */}
        <Mainlayout />
      </header>
    </div>
  );
}

export default App;
