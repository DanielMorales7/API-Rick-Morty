import { useRef } from "react"


// Use Ref sirve para mantener una referencia
export const FocusScreen = () => {

    const inputRef = useRef();
    // console.log(ref)

    const onClick = () =>{
        console.log(inputRef.current)
        inputRef.current.select();
    }

  return (
    <>
        <h1>FocusScreen</h1>
        <hr />
        <input 
            ref = {inputRef}
            type="text"
            placeholder="Ingrese su nombre"
            className="form-control"
         
        />

        <button className="btn btn-primary mt-2" onClick={onClick} >
            Set Focus
        </button>
    </>
  )
}
