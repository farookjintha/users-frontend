import { useEffect, useState } from "react";
import ChildComponent from "./ChildComponent";

const ComponentB = () => {
    const [counter, setCounter] = useState(0);
    const [name, setName] = useState('')

    useEffect(() => {
        console.log('Type 1 is called')
    }); // Mounting and Updating Phase

    useEffect(() => {
        console.log('Type 2 is called')

    }, []); //Mounting Phase

    useEffect(() => {
        console.log('Type 3 is called')
    }, [name]); // Mounting Phase and only when the variable changes

    useEffect(() => {
        return () => {
            console.log('Type 4 is called')
        }
    }, []); // Unmounting Phase

    return(
        <div>
            <h1>Component B - useEffect</h1>

            <button onClick={() => setCounter(counter + 1)}>Click</button>
            <input type='text' onChange={(e) => setName(e.target.value)} />

            <h1>Counter: {counter} / Name: {name}</h1>


            {counter <= 10 && <ChildComponent />}
        </div>
    )
}

// Initialization
// Mounting
// Updating
// Unmounting

// useEffect()

export default ComponentB;