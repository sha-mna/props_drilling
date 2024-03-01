import React, {useEffect, useState} from 'react';           

function CountTwo ({countP}) {                
    
    const [count, setCount] = useState(0);

    const increment = () => {

        const newCount = count + 1;

        setCount(newCount);
    }


    useEffect(() => {

        const countOne = countP;
        console.log(countOne);

        setCount(countP);

    }, [countP]);

    return (
        <div>
            <h1>CountTwo:{count}</h1>

            <button onClick={increment}>Increment</button>
        </div>
    )
}

export default CountTwo;