import { useMemo, useState } from "react";
import { useCounter } from "../hooks"

// Se ponen funciones afuera para que no se reeprocese el hook

const heavyStuff = (iterationNumber = 1000) => {
    for(let i=0 ; i<iterationNumber; i++){
        console.log('Ahí vamos');
        return `${iterationNumber} iteraciones realizadas`;
    }
}

export const MemorizeHook = () => {

    const {increment, counter} = useCounter(4000);
    const [show, setShow] = useState(true);

    //Se va a memorizar el valor del resultado 
    // soolo se memoriza si el valor de counter cambia
    const memorizedValue = useMemo( () => heavyStuff(counter) ,[counter]);

  return (
    <>
        <h1>Counter: <small>{counter}</small> </h1>
        <hr />

        <h4>{memorizedValue}</h4>

        <button className="btn btn-primary"
        onClick={() => increment()}
        >
            +1
        </button>
        <button
            className="btn btn-outline-primary"
            onClick={() => setShow(!show)}
        >
            {/* se hace Stringify porque un valor bouleano no se puede dibujar y esto lo hace */}
            Show/Hide {JSON.stringify(show)}
        </button>
    </>
  )
}
