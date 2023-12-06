import { useForm } from "../hooks/useForm";


export const FormWidthCustomeHook = () => {

    const { formState ,onInputChange, onResetForm } = useForm({
        username:'',
        email:'',
        password:''
    });



    const {username, email, password} = formState;

    // {
    //     username:'',
    //     email:'',
    //     password:''
    // }

    //useEffect se utiliza para disparar efectos secundarios

    // useEffect( () => {
    //     // console.log('UseEffect called');
    //     //cuando ponemos como dependencia el corchete vacío hace que solo se dispare una vez, cuando se carga el componente
    // },[]);
    // //cada que cambia el estado se manda a llamar el useEffect eso pasa si no tiene ninguna dependencia

    // useEffect( () => {
    //     // console.log('formStated changed');
    //     //cuando ponemos como dependencia el corchete vacío hace que solo se dispare una vez, cuando se carga el componente
    // },[formState]);

    // useEffect( () => {
    //     // console.log('email changed');
    //     //cuando ponemos como dependencia el corchete vacío hace que solo se dispare una vez, cuando se carga el componente
    // },[email]);



  return (
    <>
        <h1>Form Width Custome Hook</h1>

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

        <input type="password" 
            className="form-control mt-2"
            placeholder="Contraeña "
            name="password"
            value={password}
            onChange={onInputChange}
        />

        <button onClick={onResetForm} className="btn btn-primary mt-2">Reset</button>
    </>
  )
}
