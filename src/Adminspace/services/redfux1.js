const initialState = { 
        id:0,
        password:'',
        nom:'',
        image:'',
        fonction:'',
        phone:'',
        istrue:0,
        selectedFile:null,
        imgSrc:null,
        login:'',
        email:'',
        prenom:'',
        crop: {
                x: 0,
                y: 0,
                width: 50,
                height: 50
        }
        }
    //Reducer 1 :Définir la langue
    export const  reducer= (state=initialState,action)=>{
    let nextState;
    switch(action.type){
        case 'id':
                nextState = {
                        ...state,
                        id: action.id
                }
                return nextState;
        case 'Upload':
                nextState = {
                        ...state,
                        selectedFile: action.selectedFile
                    }
                    return nextState;
        case 'Istrue':
                nextState = {
                        ...state,
                        istrue: action.isTrue
                }
                return nextState;
        case 'Crop':
                    nextState = {
                            ...state,
                            crop: action.crop
                        }
                        return nextState;
        case 'ImgSrc':
                nextState = {
                        ...state,
                        imgSrc: action.imgSrc
                    }
                    return nextState;
        case 'Nom':
                nextState = {
                        ...state,
                        nom: action.nom
                    }
                    return nextState;
        case 'Prenom':
                nextState = {
                        ...state,
                        prenom: action.prenom
                    }
                    return nextState;
        case 'Login':
                nextState = {
                        ...state,
                        login: action.login
                    }
                    return nextState;
        case 'Password':
                nextState = {
                        ...state,
                        password: action.password
                    }
                    return nextState;
        case 'Email':
                    nextState = {
                            ...state,
                            email: action.email
                        }
                        return nextState;
        case 'Phone':
                    nextState = {
                                ...state,
                                phone: action.phone
                            }
                    return nextState;
        case 'Fonction':
                            nextState = {
                                    ...state,
                                    fonction: action.fonction
                                }
                    return nextState;
        case 'image':
                        nextState = {
                                ...state,
                                image: action.image
                        }
                        return nextState;
        default : 
            return state;
    }
    }