import ReactDOM from 'react-dom';
import React from 'react';
import FormHelperText from '@material-ui/core/FormHelperText';
import {validateEmail} from '../services/regex'
import axios from 'axios'
import { URL_Host1,URL_Host2 } from '../../Settings/Server'

//On email change
export const handleChangeLoginValue = (e)=>{
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
                            <FormHelperText style={{color: "#00F800"}} id="errorEmail">
                                Login Incorrect
                            </FormHelperText>,
                        document.getElementById("errorEmail"))
            }
     else{ ReactDOM.render(
                                <FormHelperText id="errorEmail">
                                    Login Correct
                                </FormHelperText>,
                        document.getElementById("errorEmail"))}
                        }
                    }

//On Button Click
export const handleClick = (e)=>{
    var formData = new FormData();
    console.log(document.getElementById('standard-name'))
    formData.append('email', document.getElementById('standard-name').value)
    const url =`${URL_Host1}/api/show/` +document.getElementById('standard-name').value;
    let h = new Headers();
    h.append('Accept', 'application/json'); 
    axios({
        method: 'get',
        url: url,
        data: formData,
        config: { headers: {'Content-Type': 'multipart/form-data' }}
        })
        .then(response => {
                console.log(response)
                const email=document.getElementById('standard-name').value
                const password='Password  :'+response.data[0].password
                console.log(password+' '+email)

                sendEmail(email,password)
                window.open("#/notification","_self");
            })
        .catch(function (response) {
            //handle error
            console.log(response.data);
        });
  
        function sendEmail(email,text){
            fetch(`http://localhost:5000/send-email?recipient=${email}&sender=hamza.abdessadki@gmail.com.intelcap&topic=Recuperation&text=${text}`) //query string url
              .catch(err => console.error(err))
          }

    
                    }