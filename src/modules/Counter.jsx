import { useState } from "react";

const Counter = () => {

    const [count, setCount] = useState(0);
    
    const handleCount = (type) => {
        setCount(type === 'add' ? count + 1 : count - 1);
    };

    return (
        <div>
            Counter From Counter.jsx
            <h1>{count}</h1>
            <div>
                <button style={{marginRight: 5}} onClick={() => handleCount("add")}>Add</button>
                <button onClick={() => handleCount("sub")}>Sub</button>
            </div>
        </div>
    )
}

export default Counter;