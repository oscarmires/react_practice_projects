import { useState } from "react";
import "./App.css";
import products from "./data/products.json";

function App() {
    return (
        <div className="App">
            <SearchArea></SearchArea>
        </div>
    );
}

function SearchArea() {
    const results = products;
    const [searchTerm, setSearchTerm] = useState("");

    return (
        <div className="SearchArea">
            <h1>React Searchbar</h1>
            <SearchBar typingHandler={setSearchTerm} />
            <ResultsArea
                results={results.filter((result) =>
                    result.name.toLowerCase().includes(searchTerm.toLowerCase())
                )}
            />
        </div>
    );
}

function SearchBar({ typingHandler }) {
    return (
        <input
            className="SearchBar"
            type="text"
            placeholder="Search..."
            onChange={(event) => {
                typingHandler(event.target.value);
            }}
        ></input>
    );
}

function ResultsArea({ results }) {
    return (
        <div className="ResultsArea">
            {results.map((product, key) => (
                <Card key={key} {...product} />
            ))}
        </div>
    );
}

function Card({ name, sku, price }) {
    return (
        <div className="Card">
            <h2>{name}</h2>
            <p>
                SKU: {sku} | Price: {price}
            </p>
        </div>
    );
}

export default App;
