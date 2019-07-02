import ReactDOM from 'react-dom';
import React from 'react';
import FormHelperText from '@material-ui/core/FormHelperText';

export const  checkEmail= ()=>{

var champA = document.getElementById("email").value;
var champB = document.getElementById("reEmail").value;
 
if(champA === champB)
{
ReactDOM.render(
                                <FormHelperText id="errorReEmail">
                                    les Emails Sont Identiques
                                </FormHelperText>,
                        document.getElementById("errorReEmail"))}
else
{
    ReactDOM.render(
        <FormHelperText style={{color: "#FF0000"}} id="errorReEmail">
            les Emails Non Identiques
        </FormHelperText>,
    document.getElementById("errorReEmail"))}
}

export const  checkPass=()=>{

    var champA = document.getElementById("password").value;
    var champB = document.getElementById("rePassword").value;
     
    if(champA === champB)
    {
    ReactDOM.render(
                                    <FormHelperText id="errorRePassword">
                                        Les Mots de Passe Sont Identiques
                                    </FormHelperText>,
                            document.getElementById("errorRePassword"))}
    else
    {
        ReactDOM.render(
            <FormHelperText style={{color: "#FF0000"}} id="errorRePassword">
                                        Les Mots De Passe Ne Sont Pas Identiques
            </FormHelperText>,
        document.getElementById("errorRePassword"))}
    }
    
    