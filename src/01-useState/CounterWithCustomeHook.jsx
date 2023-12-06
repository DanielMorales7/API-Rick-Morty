import { useCounter } from "../hooks/useCounter"


export const CounterWithCustomeHook = () => {

    // Cuando traigo funciones de un hook se desectructuran
    const { counter, increment, decrement, reset } = useCounter();

  return (
    <>
        <h1>CounterWithCustomeHook: {counter}</h1>

        <hr />
        {/* lo que original mente manda es (e) => increment (e) pero no mandaremos el evento y mandamos la variable */}
        <button onClick={ () => increment(2) } className="btn btn-primary" >+1</button>
        <button onClick={ reset} className="btn btn-primary" >Reset</button>
        <button onClick={() => decrement(2)} className="btn btn-primary" >-1</button>
    </>
    
  )
}
