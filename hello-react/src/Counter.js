import React, { useState } from 'react'; 

function Counter( {start = 0 }) {
    const [count, setCount] = useState(start);

    const resetCount = () => setCount(start);

return (
    <div>
        <h1>Count: {count}</h1> 
        {count === 10 && <p>Great job! You reached 10!</p>}
        {/* reset remains unchanged  */}
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
        <button onClick={resetCount}>Reset</button>
    </div>
);
}

export default Counter;