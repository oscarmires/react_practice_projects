import { useReducer } from "react";

export default function UseReducerPage() {
    interface State {
        count: number;
        error: string | null;
    }

    interface Action {
        type: "increment" | "decrement";
    }

    function reducer(state: State, action: Action) {
        const { type } = action;
        switch (type) {
            default:
                return state;
        }
    }

    const [state, dispatch] = useReducer(reducer, {
        count: 0,
        error: null,
    });
}
