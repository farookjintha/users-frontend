import { useReducer } from "react"

const ComponentC = () => {
    // const [counter, setCounter] = useState(0);
    const initialState = {
        counter: 0,
        name: ''
    }

    const reducer = (state, action) => {
            switch(action.type){
                case 'INCREMENT': {
                    return {...state, counter: state.counter + 1}
                }
                case 'DECREMENT': {
                    return {...state, counter: state.counter - 1}
                }
                case 'RESET': {
                    return {...state, counter: 0}
                }
                case 'UPDATE_NAME': {
                    return {...state, name: action.data}
                }
                default:
                    return state;
            }
    }

    const [state, dispatch] = useReducer(reducer, initialState);




    return (
        <div>
            <h1>Component C - useReducer()</h1>
            <button onClick={() => dispatch({type: 'INCREMENT'})}>Increment</button> 
            <button onClick={() => dispatch({type: 'DECREMENT'})}>Decrement</button> 
            <button onClick={() => dispatch({type: 'RESET'})}>Reset</button> 

            <h2>Counter: {state.counter}</h2>
            <input type='text' onChange={(e) => dispatch({type: 'UPDATE_NAME', data: e.target.value})} placeholder='Enter name' />

            <h2>Name: {state.name}</h2>

        </div>
    )
}


export default ComponentC;