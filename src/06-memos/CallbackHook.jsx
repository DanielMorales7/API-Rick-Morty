import { useCallback, useState } from "react"
import { ShowIncrement } from "./ShowIncrement"

export const CallbackHook = () => {

    const [counter, setCounter] = useState(10);

    //Memorizamos una función para que no se reedibuje
    const increment = useCallback(
        //esta es la función que está dentro del button 
      (value) => {
        //también se memoriza el valor
        setCounter( (c) => c + value);
      },
      [],
    )
    

    // const increment = () =>{
    //     setCounter(counter + 1);
    // }

    return (
        <>
            <h1>Callback Hook: {counter}</h1>
            <hr />

            <ShowIncrement increment={increment}/> 
        </>
    )
}
