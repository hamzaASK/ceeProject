export const mapStateToProps = (state) => {
    return {
        id:state.id,
        password:state.password,
        nom:state.nom,
        image:state.image,
        fonction:state.fonction,
        phone:state.phone,
        istrue:state.istrue,
        selectedFile:state.selectedFile,
        imgSrc:state.imgSrc,
        login:state.login,
        email:state.email,
        prenom:state.prenom,
        crop: state.crop
    }
  }