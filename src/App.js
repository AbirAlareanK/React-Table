import './App.css';
import Table from './Components/data-table/Table';

function App() {

  const data = [
    {
        id: 3,
        title: 'sometalk',
        year: '1990',
    },
    {
        id: 4,
        title: 'Ghostbuste',
        year: '1984',
    },
    {
        id: 5,
        title: 'gdtfs',
        year: '1984',
    },
    {
        id: 6,
        title: 'Ghost',
        year: '1984',
    }
]

  return (
    <div className="App">
      <Table data={data}/>
    </div>
  );
}

export default App;
