import React, { Component } from 'react';
import { MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';
import styled from 'styled-components'

class Biodiv extends Component {

    getState(status) {
        switch (status) {
            case "En danger":
            return 'limegreen'
            case "Vulnérable":
            return 'orangered'
            case "Préoccupation mineur":
            return 'red'
            default:
            return 'whitesmoke'
        }
    }

    render() {
        return (
            <MDBCol>
                <MDBCard style={{ height: 520, width: "22rem", borderRadius: 10 }}>
                    <MDBCardImage className="img-fluid" src={this.props.image} />
                    <MDBCardBody>
                        <State>
                            <StateColor style={{ backgroundColor: this.getState(this.props.status) }} />
                            <div className="" style={{ marginLeft: 20, flex: 1 }} >
                                {this.props.status == '' ? 'Indéfini' : this.props.status}
                            </div>
                        </State>
                        <MDBCardTitle>{this.props.title}</MDBCardTitle>
                        <MDBCardText>
                            {this.props.text}
                        </MDBCardText>
                    </MDBCardBody>
                </MDBCard>
            </MDBCol>
        )
    }
}

export default Biodiv;

const State = styled.div`
width: inherit;
height: 30px;
font-size: 16px;
margin-bottom: 5px;
display: flex;
flex-direction: row;
align-items: center;
`;

const StateColor = styled.div`
width: 30px;
height: 30px;
display: flex;
border-radius: 50px;
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
`;
