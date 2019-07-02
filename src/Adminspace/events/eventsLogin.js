import ReactDOM from 'react-dom';
import React from 'react';
import FormHelperText from '@material-ui/core/FormHelperText';
import {validatePasswd,validateEmail} from '../services/regex'
import {reducer} from '../services/redfux1';
import {createStore} from 'redux'

const store = createStore(reducer,1);

//OnPassword change
export const handleChangePasswdValue = (e)=>{
    if(e.target.value.length === 0){
                                    ReactDOM.render(
                                                    <FormHelperText  id="errorPassword">
                                                    </FormHelperText>,
                                                    document.getElementById("errorPassword")
                                                    )
    }
    else{
            var validatePasswdVar=validatePasswd(e.target.value );
            if(!validatePasswdVar){  
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
                                document.getElementById("errorPassword")
                                )
                }
        }              
}
//On email change
export const handleChangeLoginValue = (e)=>{
    if(e.target.value.length === 0){ 
        ReactDOM.render(
                        <FormHelperText  id="errorEmail">
                        </FormHelperText>,
                        document.getElementById("errorEmail")
                        )
    }else{
            var validateEmaill=validateEmail(e.target.value );
            if(!validateEmaill){
                                ReactDOM.render(
                                                    <FormHelperText style={{color: "#FF0000"}} id="errorEmail">
                                                        Login Incorrect
                                                    </FormHelperText>,
                                                    document.getElementById("errorEmail")
                                                )
            }
            else{      
                store.dispatch({type:'Login',login:e.target.value})
                ReactDOM.render(
                                <FormHelperText id="errorEmail">
                                    Login Correct
                                </FormHelperText>,
                                document.getElementById("errorEmail"))}
                                }
                    }
//Verify Data                    
export const handleChangeError=()=>{
    var errorEmail=document.getElementById('errorEmail').innerText
    var errorPassword=document.getElementById('errorPassword').innerText
    if(errorEmail==='Login Correct' && errorPassword==='Passwd ok'){return true}
    else{return false}
}
//On Button click
export const handleClick = (props,e)=>{
    //Correct Data
    if(handleChangeError()  ){
        e.target.style.background='linear-gradient(to right bottom, #00FF00,#000000,#000000)'
        var getLogin=store.getState().login
        var getPasswd=store.getState().password
        props.AdminON(getLogin, getPasswd)
    }
    //InCorrect Data
      else{
        e.target.style.background = 'linear-gradient(to right bottom,	#FF0000,#000000,#000000)';
        e.target.textContent="Problème de Saisie"
      }
   
    
                    }

export const handleButtonInscriptionClick=()=> {
    window.open("#/inscription","_self");// eslint-disable-line no-alert
    
    }
