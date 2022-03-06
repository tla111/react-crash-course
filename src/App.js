import { useEffect } from 'react';
import './App.css'

// const API_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=9b9f494f";
const API_URL = "http://www.omdbapi.com?apikey=b6003d8a";

const App = () => {

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    console.log(data);
  }

  useEffect(() => {
    searchMovies("Spiderman");
  }, []);

  return (
    <div className="App">
      <h1>App</h1>
    </div>
  );
}

export default App;
