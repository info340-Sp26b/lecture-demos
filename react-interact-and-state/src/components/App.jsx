
import { PizzaCounter, PizzaList } from './EventsAndStateExamples.jsx';
// import PizzaList from './EventsAndStateExamples.jsx';

function App(props) {
  
 return (
    <div className="container-fluid d-flex flex-column">
      <PizzaCounter />
      <PizzaList />
    </div>
  );
}

export default App
