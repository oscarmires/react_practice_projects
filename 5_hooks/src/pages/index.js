import Carousel from "../components/Carousel";
import Counter from "../components/Counter";
import CountrySearch from "../components/CountrySearch";
import ThemedCard from "../components/ThemedCard";

export default function Home() {
    return (
        <>
            <h1 className="mb-4">React Hooks</h1>
            <h2 id="useReducer">
                <code>useReducer()</code>
            </h2>
            <div className="row mt-3">
                <div className="col-sm-6">
                    <Counter />
                </div>
                <div className="col-sm-6">
                    <p>
                        This counter works using a reducer. Instead of the state
                        of the input element coming from the{" "}
                        <code>useState()</code> hook, it was defined with{" "}
                        <code>useReducer()</code>.
                    </p>
                </div>
            </div>
            <h2 id="useContext">
                <code>useContext()</code>
            </h2>
            <div className="row mt-3">
                <div className="col-sm-6">
                    <ThemedCard />
                </div>
                <div className="col-sm-6">
                    <p>
                        This card uses a context provider to toggle between
                        themes.
                    </p>
                </div>
            </div>
            <h2 id="useRef">
                <code>useRef()</code>
            </h2>
            <div className="row mt-3">
                <div className="col-sm-6">
                    <Carousel />
                </div>
                <div className="col-sm-6">
                    <p>
                        This component uses refs to DOM nodes generated with{" "}
                        <code>useRef()</code> to scroll between images.
                    </p>
                </div>
            </div>
            <h2 id="useEffect">
                <code>useEffect()</code>
            </h2>
            <div className="row mt-3 mb-4">
                <div className="col-sm-6">
                    <CountrySearch />
                </div>
                <div className="col-sm-6">
                    <p>
                        This component uses <code>useEffect()</code> to download
                        data from the REST Countries API.
                    </p>
                </div>
            </div>
        </>
    );
}
