import { useReducer } from "react";

function countReducer(state, action) {
    switch (action.type) {
        case "increment":
            return state + action.payload;
        case "decrement":
            return state - action.payload;
        default:
            return state;
    }
}

export default function Counter() {
    const [count, dispatch] = useReducer(countReducer, 0);

    return (
        <>
            <div>
                <p>{count}</p>
                <button
                    type="button"
                    onClick={() => dispatch({ type: "increment", payload: 1 })}
                >
                    Increment
                </button>

                <button
                    type="button"
                    onClick={() => dispatch({ type: "decrement", payload: 1 })}
                >
                    Decrement
                </button>
            </div>
        </>
    );
}