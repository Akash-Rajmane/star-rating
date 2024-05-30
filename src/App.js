import './App.css';
import StarRating from './StarRating';

function App() {
 

  return (
    <div className="App">
      <h1>Star Rating Component</h1>
      <StarRating maxStars={5} initialRating={3} />
    </div>
  );
}

export default App;
