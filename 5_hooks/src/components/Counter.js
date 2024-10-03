import { useReducer } from "react";

export default function Counter() {
    function reducer(state, action) {
        const LIMIT = 5;
        const { type } = action;
        switch (type) {
            case "increment": {
                const newVal = state.count + 1;
                const hasError = newVal > LIMIT;
                return {
                    ...state,
                    count: hasError ? state.count : state.count + 1,
                    error: hasError ? "Limit exceeded" : null,
                };
            }
            case "decrement": {
                const newVal = state.count - 1;
                const hasError = newVal < LIMIT * -1;
                return {
                    ...state,
                    count: hasError ? state.count : state.count - 1,
                    error: hasError ? "Limit exceeded" : null,
                };
            }
            default:
                return state;
        }
    }

    const [state, dispatch] = useReducer(reducer, {
        count: 0,
        error: null,
    });

    return (
        <>
            <div className="input-group mb-2">
                <input
                    type="text"
                    className="form-control"
                    placeholder="0"
                    value={state.count}
                    disabled
                    id="number"
                />
                <button
                    className="btn btn-secondary"
                    type="button"
                    onClick={() => dispatch({ type: "increment" })}
                >
                    +
                </button>
                <button
                    className="btn btn-secondary"
                    type="button"
                    onClick={() => dispatch({ type: "decrement" })}
                >
                    -
                </button>
            </div>
            <p className="text-danger">{state.error}</p>
        </>
    );
}
