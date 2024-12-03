import { useState } from "react";
function WelcomeForm(){
    let [name, setName] = useState('');

    let welcomeHandler = (e)=>{
        setName(e.target.value)
        if(name === "Miro"){
            return (
                <h2>Welcome {name}!</h2>
                
            );
        }
    }    
    return(
        <>
        <h2>{welcomeHandler}</h2>
        <input onChange={welcomeHandler} type="text" placeholder="name:" />
        </>
    )
   

}
export default WelcomeForm;


