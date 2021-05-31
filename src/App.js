import './App.css';
import ResultItem from "./components/ResultItem"
import SearchBar from "./components/SearchBar"
import axios from 'axios'
import React, { useState } from "react";

function App() {

  const [results, setResults] = useState([]);

  const resultItems = results
  .map(result => (
    <ResultItem 
      key={result.id} 
      name={result.business} 
      address={result.address} 
      rating={result.rating} />
  ));

  function search(query, location) {
    console.log(location)
    axios.get("https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search", {
      headers: {
        Authorization: "Bearer " + process.env.REACT_APP_API_KEY
    },
      params: {
        "location": location,
        "term": query
      }
    })
    .then((res) => {
      let topTen = res.data["businesses"].slice(0, 10)
      let converted = topTen.map(r => ({ 
          id: r['id'], 
          business: r['name'], 
          address: r['location']['address1'], rating: r['rating']
        }))
      setResults(converted)
    })
    // .catch((err) => {
    //   console.log ('error')
    // })
  }


  return (
    <div className="App">
      <header className="App-header">

        <h1>Nearby</h1>
        <SearchBar search={search} />

        <ul>
          {resultItems}
        </ul>

      </header>
    </div>
  );
}



export default App;
