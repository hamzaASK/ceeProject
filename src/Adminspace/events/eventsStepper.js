import store from './eventsInscription';
import axios from 'axios'
import React from 'react';
import AddressForm from '../login/DataFields';
import Uploadimage from '../login/UploadImage';
import {handleClick} from './eventsInscription'

export const steps = ['Données Personnelles', 'Upload Image Profil'];



export const getStepContent=(step)=> {
  switch (step) {
    case 0:
      return <AddressForm />;
    case 1:
      return <Uploadimage />;
    
    default:
      throw new Error('Unknown step');
  }
}


export const handleChangeError=()=>{
  var er_nom=document.getElementById('errorFirstName').innerText
  var er_prenom=document.getElementById('errorLastName').innerText
  var er_tel=document.getElementById('errorPhone').innerText
  var er_mail=document.getElementById('errorEmail').innerText
  var er_re_mail=document.getElementById('errorReEmail').innerText
  var er_passwd=document.getElementById('errorPassword').innerText
  var er_re_passwd=document.getElementById('errorRePassword').innerText
  var er_fonction=document.getElementById('errorJob').innerText
  if(er_nom==='Nom Ok'
     && er_prenom==='Prénom Ok'
     && er_tel==='Telephone ok'
     && er_mail==='Email ok'
     && er_re_mail==='les Emails Sont Identiques' 
     && er_passwd==='Passwd ok' 
     && er_re_passwd==='Les Mots de Passe Sont Identiques' 
     && er_fonction==='Fonction Ok' ){return true}
     else{return false}
}

function sendEmail(text){
  fetch(`http://localhost:5000/send-email?recipient=hamza.abdessadki@gmail.com&sender=hamza.abdessadki@gmail.com.intelcap&topic=Nouveau-Utilisateur&text=${text}`) //query string url
    .catch(err => console.error(err))
}

export const handleInsert = () => {
  var formData = new FormData();
  formData.append('email', store.getState().login)
  formData.append('password', store.getState().password)
  formData.append('nom', store.getState().nom)
  formData.append('prenom', store.getState().prenom)
  formData.append('telephonne', store.getState().phone)
  formData.append('image', store.getState().selectedFile.name)
  formData.append('fonction', store.getState().fonction)
  let parameters = [...formData.entries()] // expand the elements from the .entries() iterator into an actual array
                     .map(e => encodeURIComponent(e[0]) + "=" + encodeURIComponent(e[1]))  // transform the elements into encoded key-value-pairs
  sendEmail(parameters)
  handleClick();
  const url = 'http://localhost:8000/api/register';
  let h = new Headers();
  h.append('Accept', 'application/json'); 
  axios({
      method: 'post',
      url: url,
      data: formData,
      config: { headers: {'Content-Type': 'multipart/form-data' }}
      })
      .then(response => {
         
              
              console.log(response)
              window.open("#/thanksmessage","_self");

          
      })
      .catch(function (response) {
          //handle error
          console.log(response.data);
      });

};