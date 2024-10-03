import Counter from "../components/Counter";

export default function Home() {
    return (
        <>
            <h1>Home</h1>
            <h2>
                <code>useReducer()</code>
            </h2>
            <div className="row mt-3">
                <div className="col-sm-6">
                    <Counter />
                </div>
                <div className="col-sm-6">
                    <p>
                        This counter works using a reducer. Instead of the value
                        of the input element being a state from the{" "}
                        <code>useState()</code> hook, it was defined using{" "}
                        <code>useReducer()</code>.
                    </p>
                </div>
            </div>
        </>
    );
}
