import './App.css';
import ResultItem from "./components/ResultItem"
import SearchBar from "./components/SearchBar"

function App() {

  const results = [
    { id: "0", business: "Pineapple King", address: "Irving St", rating: 4.5 },
    { id: "1", business: "Lucca Deli", address: "20th Ave", rating: 4.15 },
    { id: "2", business: "Arizmendi", address: "9th Ave", rating: 4.6 }
  ];

  const resultItems = results
  .map(result => (
    <ResultItem 
      key={result.id} 
      name={result.business} 
      address={result.address} 
      rating={result.rating} />
  ));

  function search(query) {
    //performSearch(query);
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
