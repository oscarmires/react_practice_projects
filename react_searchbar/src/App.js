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
    return (
        <div className="SearchArea">
            <h1>React Searchbar</h1>
            <SearchBar />
            <ResultsArea />
        </div>
    );
}

function SearchBar() {
    return (
        <input
            className="SearchBar"
            type="text"
            placeholder="Search..."
        ></input>
    );
}

function ResultsArea() {
    return (
        <div className="ResultsArea">
            <Card />
        </div>
    );
}

function Card() {
    return (
        <div className="Card">
            <h2>This is a product</h2>
            <p>SKU: ###### | Price: $#####</p>
        </div>
    );
}

export default App;
