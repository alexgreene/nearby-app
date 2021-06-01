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
      index={result.index}
      key={result.id} 
      name={result.business} 
      address={result.address} 
      rating={result.rating}
      price={result.price}
      categories={result.categories} />
  ));

  function search(query, location) {
    
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
      let converted = res.data["businesses"].map((r, index) => ({ 
          index: index+1,
          id: r['id'], 
          business: r['name'], 
          address: r['location']['address1'], 
          rating: r['rating'],
          price: r['price'],
          categories: r['categories'].map(c => (c['title']))
        }))
      setResults(converted)
      console.log(converted)
    })
    // .catch((err) => {
    //   console.log ('error')
    // })
  }


  return (
    <div className="App">
      <header className="App-header">

        <SearchBar search={search} />

        <div>
          {resultItems}
        </div>

      </header>
    </div>
  );
}



export default App;
