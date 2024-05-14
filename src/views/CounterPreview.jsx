import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../features/counter/counterSlice";

const CounterPreview = () => {
    const count = useSelector(state => state.counter.value)
	const dispatch = useDispatch()

    return (
        <>
            <div className="flex items-center justify-center h-screen gap-x-8">
                <button
                    aria-label="Increment value"
                    onClick={() => dispatch(increment())}
                    className="px-3 py-2 text-white bg-green-500"
                >
                    Increment
                </button>
                <span>{count}</span>
                <button
                    aria-label="Decrement value"
                    onClick={() => dispatch(decrement())}
                    className="px-3 py-2 text-white bg-red-500"
                >
                    Decrement
                </button>
            </div>
        </>
    )
}

export default CounterPreview