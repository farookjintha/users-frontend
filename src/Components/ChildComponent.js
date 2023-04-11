import { useEffect } from "react";


const ChildComponent = () => {

    //Unmounting
    useEffect(() => {
        console.log('Child Component useEffect is called...')
        return () => {
            console.log('Child Component Unmounted....')
        }
    }, []);


    return (
        <div>
            <h2>Child Component</h2>
            <h4>showing child component</h4>
        </div>
    )
}

export default ChildComponent;