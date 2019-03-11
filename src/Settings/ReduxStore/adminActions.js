
export const mapDispatchToProps = (dispatch) => {
    return {
        AdminON: () => dispatch({ type: 'AdminON' }),
        AdminOFF: () => dispatch({ type: 'AdminOFF' }),
    }
}
