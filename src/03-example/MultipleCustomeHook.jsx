// import { useFetch } from "../hooks/useFetch"
// import { useCounter } from "../hooks/useCounter";
import { useFetch, useCounter } from "../hooks";
import { Isloading, Quote } from "./components/";



export const MultipleCustomeHook = () => {

    const {increment, counter} = useCounter(1);

    const {data, isLoading, hasError} = useFetch(`https://rickandmortyapi.com/api/character/${counter}`);

    console.log({data, isLoading, hasError})

    //!!data esto es doble negación si al consultar la API la data tiene valor 
    // si !!data es true ejecuta la siguiente línea && data y regresa el valor de data
    const {name,image} = !!data && data;

    // if ( isLoading ){
    //   return(
    //     <h1>Cargando...</h1>
    //   )
    // }

    

  return (
    <>
        <h1>Rick and Morty</h1>
        <hr />

        {

          // isLoading
          //   ? (
          //       <div className="alert alert-info text-center">
          //         Loading...
          //       </div>
          //   )
          //   : ( 
          //       <div>
          //         <img src={image} alt="" />
          //         <blockquote className="blockquote text-end">
          //           <p className="mb-1">{name}</p>
          //           <footer className="blockquote-footer">Daniel</footer>
          //         </blockquote>
          //       </div>
          //   )
          isLoading
            ? <Isloading />
            : <Quote image = {image} name = {name} /> 

        }
        
        
         

        <button className="btn btn-primary" 
          onClick={ () => increment(1) }
          //el isLoading tiene valores de true o false por eso se habilta o no
          disabled = {isLoading}
          >
          Next character
        </button>

    </>
  )
}
