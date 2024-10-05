import Counter from "../components/Counter";
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
        </>
    );
}
