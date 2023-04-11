import { useState } from "react";
import ChildComponent from "./ChildComponent";

const ComponentA = () => {
    const [counter, setCounter] = useState(0);
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [value1, setValue1] = useState(null);
    const [value2, setValue2] = useState(null)

    const [userDetails, setUserDetails] = useState({
        name: '',
        age: '',
        address: '',
        gender: '',
        profession: ''
    });

    // setUserDetails({...userDetails, address: 'Trichy'});


    const handleCounter = () => {
        setCounter(counter + 1);
    }

    const handleInput = (e) => {
        setName(e.target.value);
    }

    const handleAddress = (e) => {
        setAddress(e.target.value);
    }

    console.log('Name: ', name);




    return (
        <div>
            <h1>Hello World</h1>
            <div>
                <button onClick={handleCounter}>Click!</button>
                <input type='text' placeholder="Enter name" onChange={handleInput} />
                <input type='text' placeholder="Enter address" onChange={handleAddress} />

            
            <div>
                <input type='number' placeholder="Enter the value" onChange={e => setValue1(e.target.value)}/> +
                <input type='number' placeholder="Enter the value" onChange={e => setValue2(e.target.value)}/> = <span>{parseInt(value1) + parseInt(value2)}</span>
            </div>
                <div>
                    <p><span>Name: </span><b>{name}</b></p>;
                    <p><span>Address: </span><b>{address}</b></p>;
                </div>
            </div>
            

            {counter <= 10 && <ChildComponent />}
        </div>
    )
}

export default ComponentA;