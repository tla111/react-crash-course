import { useState } from 'react'

const Counter = () => {
    const [counter, setCounter] = useState(0);

    return (
        <>
            <button onClick={() => setCounter((prevCount) => prevCount - 1)}>Decrement</button>
            <p style={{ fontSize: "36px" }}>{counter}</p>
            <button onClick={() => setCounter((prevCount) => prevCount + 1)}>Increment</button>
        </>
    )
}

export default Counter;