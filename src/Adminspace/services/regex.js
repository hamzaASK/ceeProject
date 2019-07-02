export const validateEmail = (email)=>{
    var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
                        }

export const validatePasswd = (passwd)=>{
    var re = /^.{8,35}$/;
    return re.test(String(passwd).toLowerCase());
                        }

export const validateNom = (Nom)=>{
    var re = /^[a-zA-Z][^#&<>"~;$,0@123456789^%{}?]{1,30}$/;
    return re.test(String(Nom).toLowerCase());
                        }

export const validatePrenom = (Prenom)=>{
    var re = /^[a-zA-Z][^#&<>"~;$,01234@56789^%{}?]{1,30}$/;
    return re.test(String(Prenom).toLowerCase());
                        }

export const validateTel = (Tel)=>{
    var re = /^.{10,10}$/;
    return re.test(String(Tel).toLowerCase());
                        } 
                        
export const validateFonction = (Fonction)=>{
    var re = /^[a-zA-Z][^#&<>"~;$,012345@6789^%{}?]{1,30}$/;
    return re.test(String(Fonction).toLowerCase());
                        }
