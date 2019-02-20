import React, { Component } from 'react'
import styled from 'styled-components'

import { connect } from 'react-redux'
// import lang from '../Settings/Lang'
import { mapStateToProps, mapDispatchToProps } from '../Settings/ReduxStore/actions'

class Header extends Component {

    render() {
        // let x = this.props.lang === 'fr' ? 0 : 1
        return (
            <Container>

                {/* <LangButton
                    // Fix: Activated lang should have full opacity
                    // style={{ opacity: x === 1 ? .7 : 1 }}
                    onClick={() => { this.props.AR() }}
                >
                    <Icon src="/images/btn_lang_ar.png" />
                </LangButton>
                <LangButton
                    // style={{ opacity: x === 0 ? .7 : 1 }}
                    onClick={() => { this.props.FR() }}
                >
                    <Icon src="/images/btn_lang_fr.png" />
                </LangButton>
                <LangButton
                    onClick={() => { }}
                >
                    <Icon src="/images/btn_lang_en.png" />
                </LangButton> */}

                <Gap />

                <Message className="just">
                    {this.props.text}
                </Message>

                <Logo />

            </Container>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)

const Container = styled.div`
@media (max-width: 767px) {
    height: 50px;
}
@media (min-width: 768px) {
    height: 80px;
}
width: '100%';
display: flex;
flex-direction: row;
background: linear-gradient(to left bottom, darkblue, dodgerblue);
padding: 5px;
`;
// background-color: darkblue;

// const LangButton = styled.button`
// height: 30px;
// width: 30px;
// display: flex;
// opacity: 0.7;
// margin: 10px;
// background: none;
// border: none;
// cursor: pointer;
// &:hover {
//     box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
//     opacity: 1;
// }
// `;

// const Icon = styled.img`
//     max-width: 30px;
//     max-height: 30px;
//     border-raduis: 50px;
// `;

const Message = styled.div`
@media (max-width: 767px) {
    font-size: 10px;
}
@media (min-width: 768px) {
    font-size: 18px;
}
flex: 1;
display: flex;
color: white;
margin: 5px;
text-align: center;
`;

const Logo = styled.div`
@media (max-width: 767px) {
    height: 40px;
    width: 120px;
    margin: 5px;
}
@media (min-width: 768px) {
    height: 60px;
    width: 180px;
    margin: 5px;
}
background-image: url(/images/fm6e.png);
background-position: 0 0;
background-size: 100% 100%;
`;

const Gap = styled.div`
@media (max-width: 767px) {
    height: 40px;
    width: 80px;
    margin: 5px;
}
@media (min-width: 768px) {
    height: 60px;
    width: 120px;
    margin: 10px;
}
`;
// background-image: url(https://chrischasedesign.com/cd_files/wp-content/uploads/2017/10/google_logo_2015.png);
// background-image: url(/images/LogoFM6E.png);
