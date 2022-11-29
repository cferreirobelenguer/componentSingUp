import React,{useState} from 'react'
import {useForm} from 'react-hook-form'

//FORMULARIO CON USEFORM
export const Formulario=()=>{
    const { register,
            handleSubmit,
            watch,
            formState:{errors}
            }=useForm({
                //Valores por defecto
                defaultValues:{
                    name:"",
                    lastname:"",
                    email:"",
                    password:""
                }
            });
    const [user, setUser]=useState({
        name:"",
        lastname:"",
        email:"",
        password:""
    })
    //desfragmentamos el objeto state
    const {name, lastname, email, password}=user
    return(
        <div className="form_container">
            <div className="form_text">
                <div className="form_title">
                    <h1>Learn o code by watching others</h1>
                </div>
                <div className="form_subtitle">
                    <p>See how esperienced developers solve problems in real-time.</p>
                    <p>Watching scripted tutorials is great, by understanding how developers think is invaluable.</p>
                </div>
            </div>
            <div className="form_content">
                <div className="form_trial">
                    <p><b>Try free 7 days</b> then $20/mo.thereafter</p>
                </div>
                <div className="form_formulary">
                    <form onSubmit={handleSubmit(data=>{
                        //Creamos contantes de los datos y los pasamos a un objeto en un state llamado user
                        const nameInput=watch("name")
                        const lastnameInput=watch("lastname")
                        const emailInput=watch("email")
                        const passwordInput=watch("password")
                        //Metemos los datos en un state para que se muestren cuando pulsemos en el botón
                        setUser({
                            name:nameInput,
                            lastname:lastnameInput,
                            email:emailInput,
                            password:passwordInput
                        })
                        //Se valida en name y lastname que los datos que entren sean caracteres de letras en mayúscula o miúscula
                        //Se valida en password que la contraseña mínima sea de 8 caracteres
                        //Se valida que ningún input esté vacío
                        
                    })}>
                        <div>
                            <input {...register("name", {required:"First Name cannot be empty",pattern:
                                    /^[A-Za-z]+$/i})} placeholder="name" className="name"/>
                            <p className="error">{errors.name?.message} </p>
                            {errors?.lastname?.type==="pattern" && (<p className="error">Alphabetical characters only</p>)}
                            <p className="info">{name}</p>
                        </div>
                        <div>
                            <input {...register("lastname", {required:"Last Name cannot be empty",pattern:
                                    /^[A-Za-z]+$/i})} placeholder="last-name" className="lastname"/>
                            <p className="error">{errors.lastname?.message}</p>
                            {errors?.lastname?.type==="pattern" && (<p className="error">Alphabetical characters only</p>)}
                            <p className="info">{lastname}</p>
                        </div>
                        <div>
                            <input {...register("email", {required:"Email cannot be empty"})} placeholder="Email Address" className="email"/>
                            <p className="error">{errors.email?.message}</p>
                            <p className="info">{email}</p>
                            
                        </div>
                        <div>
                            <input {...register("password", 
                                {required:"Password cannot be empty",
                                minLength:{
                                    value:8,
                                    message:"Min length is 8"
                                    
                                }
                            })}
                                
                            placeholder="Password" className="password"/>
                            <p className="error">{errors.password?.message}</p>
                            <p className="info">{password}</p>
                        </div>
                        <input type="submit" value="CLAIM YOUR FREE TRIAL" className="btn"/>
                    </form>
                    <div className="form_terms">
                        <small className='info'>By clicking the button you are agreeng to our <span className="error">Terms and Services</span></small>
                    </div>
                </div>
                
                
            </div>
        </div>
    )
}