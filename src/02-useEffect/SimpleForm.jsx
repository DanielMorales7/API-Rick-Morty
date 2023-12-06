import { useEffect, useState } from "react"
import { Message } from "./Message";

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username:'Daniel',
        email:'daniel@daniel.com'
    });

    const {username, email} = formState;

    //desestructuramos el target del evento
    const onInputChange = ({target}) => {
        const {name, value} = target;
        
        setFormState({
            ...formState,
            [name]:value
        })
        
    }

    //useEffect se utiliza para disparar efectos secundarios

    useEffect( () => {
        // console.log('UseEffect called');
        //cuando ponemos como dependencia el corchete vacío hace que solo se dispare una vez, cuando se carga el componente
    },[]);
    //cada que cambia el estado se manda a llamar el useEffect eso pasa si no tiene ninguna dependencia

    useEffect( () => {
        // console.log('formStated changed');
        //cuando ponemos como dependencia el corchete vacío hace que solo se dispare una vez, cuando se carga el componente
    },[formState]);

    useEffect( () => {
        // console.log('email changed');
        //cuando ponemos como dependencia el corchete vacío hace que solo se dispare una vez, cuando se carga el componente
    },[email]);



  return (
    <>
        <h1>SimpleForm</h1>

        <hr />

        <input type="text" 
            className="form-control"
            placeholder="Username"
            name="username"
            value={username}
            onChange={onInputChange}
        />

        <input type="email" 
            className="form-control mt-2"
            placeholder="daniel@daniel.com  "
            name="email"
            value={email}
            onChange={onInputChange}
        />

        {
        (username === 'Daniel2') && <Message/>  
        } 
    </>
  )
}
