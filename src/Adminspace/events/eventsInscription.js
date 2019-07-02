import ReactDOM from 'react-dom';
import React from 'react';
import {validateNom,validatePrenom,validateFonction,validatePasswd,validateEmail, validateTel} from '../services/regex'
import FormHelperText from '@material-ui/core/FormHelperText';
import {reducer} from '../services/redfux1';
import {createStore} from 'redux'

//Password change
const store = createStore(reducer,1);


export const handleChangeNom = (e)=>{
    if(e.target.value.length === 0){
                                    ReactDOM.render(
                                        <FormHelperText  id="errorFirstName">
                                        </FormHelperText>,
                                    document.getElementById("errorFirstName")
                                                    )
    }else if(e.target.value.length<2){
                                    ReactDOM.render(
                                        <FormHelperText style={{color: "#FF0000"}} id="errorFirstName">
                                            Inadéquat (Inferieur a 2 Caracteres)
                                        </FormHelperText>,
                                    document.getElementById("errorFirstName")
                                                    )
    }
    else if(e.target.value.length>30){
        

                                    ReactDOM.render(
                                        <FormHelperText style={{color: "#FF0000"}} id="errorFirstName">
                                            Inadéquat (Superieur a 30 Caracteres)
                                        </FormHelperText>,
                                    document.getElementById("errorFirstName")
                                    )
    }
    else{
                                    var test=validateNom(e.target.value );
                                    if(!test){  
                                        ReactDOM.render(
                                                        <FormHelperText style={{color: "#FF0000"}} id="errorFirstName">
                                                        Non Autorisés (#&\>\"~;$^%{}?0->9)
                                                        </FormHelperText>,
                                                        document.getElementById("errorFirstName")
                                                        )
                                            }
                                    else{ 
                                        store.dispatch({type:'Nom',nom:e.target.value})
                                        
                                        //console.log(store.getState().nom)
                                        ReactDOM.render(
                                                        <FormHelperText id="errorFirstName">
                                                            Nom Ok
                                                        </FormHelperText>,
                                                        document.getElementById("errorFirstName")
                                                        )
                                        }
        }                    
                        }

//Prenom change
export const handleChangePrenom = (e)=>{
    if(e.target.value.length === 0){
        ReactDOM.render(
            <FormHelperText  id="errorLastName">
            </FormHelperText>,
        document.getElementById("errorLastName")
                        )
    }else if(e.target.value.length<2){
            ReactDOM.render(
                <FormHelperText style={{color: "#FF0000"}} id="errorLastName">
                    Inadéquat (Inferieur a 2 Caracteres)
                </FormHelperText>,
            document.getElementById("errorLastName")
                            )
    }
    else if(e.target.value.length>30){
            ReactDOM.render(
                <FormHelperText style={{color: "#FF0000"}} id="errorLastName">
                    Inadéquat (Superieur a 30 Caracteres)
                </FormHelperText>,
            document.getElementById("errorLastName")
            )
    }
    else{
            var test=validatePrenom(e.target.value );
            if(!test){  
                ReactDOM.render(
                                <FormHelperText style={{color: "#FF0000"}} id="errorLastName">
                                Non Autorisés (#&\>\"~;$^%{}?0->9)
                                </FormHelperText>,
                                document.getElementById("errorLastName")
                                )
                    }
            else{
                store.dispatch({type:'Prenom',prenom:e.target.value})
                ReactDOM.render(
                                <FormHelperText id="errorLastName">
                                    Prénom Ok
                                </FormHelperText>,
                                document.getElementById("errorLastName")
                                )
                }
}                    




}

//Fonction change
export const handleChangeFonction = (e)=>{
    if(e.target.value.length === 0){
        ReactDOM.render(
            <FormHelperText  id="errorJob">
            </FormHelperText>,
        document.getElementById("errorJob")
                        )
    }else if(e.target.value.length<2){
            ReactDOM.render(
                <FormHelperText style={{color: "#FF0000"}} id="errorJob">
                    Inadéquat (Inferieur a 2 Caracteres)
                </FormHelperText>,
            document.getElementById("errorJob")
                            )
    }
    else if(e.target.value.length>30){
            ReactDOM.render(
                <FormHelperText style={{color: "#FF0000"}} id="errorJob">
                    Inadéquat (Superieur a 30 Caracteres)
                </FormHelperText>,
            document.getElementById("errorJob")
            )
    }
    else{
            var test=validateFonction(e.target.value );
            if(!test){  
                ReactDOM.render(
                                <FormHelperText style={{color: "#FF0000"}} id="errorJob">
                                Non Autorisés (#&\>\"~;$^%{}?0->9)
                                </FormHelperText>,
                                document.getElementById("errorJob")
                                )
                    }
            else{
                store.dispatch({type:'Fonction',fonction:e.target.value})
                ReactDOM.render(
                                <FormHelperText id="errorJob">
                                    Fonction Ok
                                </FormHelperText>,
                                document.getElementById("errorJob")
                                )
                }
}
            
}

//Fonction change
export const handleChangeTel = e => {

    try{
        if(e.target.value==='undefined'){
                                ReactDOM.render(
                                    <FormHelperText component={'span'}  id="errorPhone">
                                    </FormHelperText>,
                                document.getElementById("errorPhone")
            )
        }else{
        var test=validateTel(e.target.value);
            if(!test){  
                ReactDOM.render(
                                    <FormHelperText component={'span'}  style={{color: "#FF0000"}} id="errorPhone">
                                        Court
                                    </FormHelperText>,
                                    document.getElementById("errorPhone")
                                )
                    }
            else{ 
                store.dispatch({type:'Phone',phone:e.target.value})
                ReactDOM.render(
                                    <FormHelperText component={'span'}  id="errorPhone">
                                        Telephone ok
                                    </FormHelperText>,
                                document.getElementById("errorPhone"))
                            }
                        }             }catch(error) {
        console.error(error);}
              
}
                   
//Password change
export const handleChangePassword = (e)=>{
    if(e.target.value.length === 0){
        ReactDOM.render(
            <FormHelperText  id="errorPassword">
            </FormHelperText>,
        document.getElementById("errorPassword")
        )
    }else{
    var test=validatePasswd(e.target.value );
        if(!test){  
            ReactDOM.render(
                                <FormHelperText style={{color: "#FF0000"}} id="errorPassword">
                                    Court
                                </FormHelperText>,
                            document.getElementById("errorPassword")
                            )
                }
        else{ 
            store.dispatch({type:'Password',password:e.target.value})
            ReactDOM.render(
                                <FormHelperText id="errorPassword">
                                    Passwd ok
                                </FormHelperText>,
                            document.getElementById("errorPassword"))
                        }
                    }              
                        }

//On email change
export const handleChangeLogin = (e)=>{
    if(e.target.value.length === 0){
        ReactDOM.render(
            <FormHelperText  id="errorEmail">
            </FormHelperText>,
        document.getElementById("errorEmail")
        )
    }else{
    var test=validateEmail(e.target.value );
    if(!test){ 
         ReactDOM.render(
                            <FormHelperText style={{color: "#FF0000"}} id="errorEmail">
                                Veuillez saisir un email valide
                            </FormHelperText>,
                        document.getElementById("errorEmail"))
            }
     else{ 
         store.dispatch({type:'Login',login:e.target.value})
         ReactDOM.render(
                                <FormHelperText id="errorEmail">
                                    Email ok 
                                </FormHelperText>,
                        document.getElementById("errorEmail"))}
                        }
                    }


//Sauvegarde Image 
export const handleClick = ()=>{
    const fd =new FormData();
    fd.append('image',store.getState().selectedFile,store.getState().selectedFile.name);
    console.log(store.getState().selectedFile)

    const url = 'http://localhost:8080/ReactProjects/ceedisplay/src/Adminspace/core_php.php';
    let h = new Headers();
    h.append('Accept', 'application/text'); 
    let req = new Request(url, {
        method: 'POST',
        headers: h,
        mode: 'no-cors',
        body: fd
    });
    fetch(req)
        .then( (response)=>{
         console.log("Response received from server");
        })
        .catch( (err) =>{
            console.log('ERROR:', err.message);
        });

                    }
export const handleFilechange = (file)=>{

    store.dispatch({type:"Upload",selectedFile:file});

    //console.log(store.getState());
    // console.log(e.target.files[0])
}
export default store;
