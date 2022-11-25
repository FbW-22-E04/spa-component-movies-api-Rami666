
import './App.css';
import FetchData from './components/FetchData';
import { MovieContext } from './components/Context';
import { useContext } from 'react';

function App() {
const {state, dispatch} = useContext(MovieContext)

console.log(state);

  return (
  <div>
    <FetchData />
  </div>
  );
}

export default App;
