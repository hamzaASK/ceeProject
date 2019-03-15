import React, { Component } from 'react';
import './App.css'
import styled from 'styled-components'
import { Route, HashRouter } from 'react-router-dom';
import { connect } from 'react-redux'
import { lang } from './Settings/Lang'
import { mapDispatchToProps } from './Settings/ReduxStore/langActions'
import { mapStateToProps } from './Settings/ReduxStore/stateReducer'
import { Timers } from './Settings/Timers'

import AppBar from './Components/AppBar'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Sidebar from './Sidebar'
import Adminbar from './Adminbar'

import Homescreen from './Homescreen'
import Indicators from './Indicators'
import Ressources from './Ressources'
import PDFReports from './PDFReports'
import Adminspace from './Adminspace'

let timer = 0

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      width: 0,
    }
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  changeLang() {
    this.props.lang === 'fr' ? this.props.AR() : this.props.FR()
  }

  componentWillReceiveProps() {
    if (this.props.admin) {
      clearInterval(timer)
    }
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
    timer = setInterval(() => this.changeLang(), Timers.lang / 10)
  }

  componentWillUnmount() {
    clearInterval(timer)
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth });
  }

  render() {
    let x = this.props.lang === 'fr' ? 0 : 1
    return (
      <div className="viewport">

        <Header text={lang[x].title} />

        <HashRouter>
          <div style={{ flex: 1, flexDirection: 'column', display: 'flex' }} >
            <AppBar admin={this.props.admin}
              version={this.props.admin ? 'CEE Monitor v1.0' : 'CEE Monitor Autodisplay v1.0'}
              menu={[
                { label: lang[x].AppBar.Menu[0].label, link: "/" },
                { label: lang[x].AppBar.Menu[1].label, link: "/indicators" },
                { label: lang[x].AppBar.Menu[2].label, link: "/ressources" },
                { label: lang[x].AppBar.Menu[3].label, link: "/reports" }
              ]} />

            <Body>
              {
                this.state.width >= 1200 ?
                  this.props.admin ? <Adminbar /> : <Sidebar />
                  : null
              }
              <Content>
                <Route component={Homescreen} path="/" exact />
                <Route component={Indicators} path="/indicators" />
                <Route component={Ressources} path="/ressources" />
                <Route component={PDFReports} path="/reports" />
                <Route component={Adminspace} path="/ceeadmin" />
              </Content>
            </Body>
          </div>
        </HashRouter>
        {
          this.state.width >= 1200 && !this.props.admin ?
            <Footer />
            : null
        }
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

const Body = styled.div`
flex: 1;
display: flex;
flex-direction: row;
min-height: 360px;
padding: 10px;
`;

const Content = styled.div`
flex: 1;
display: flex;
flex-direction: column;
min-height: 580px;
`;

// const Tempo = styled.div`
// flex: 1;
// display: flex;
// justify-content: center;
// align-items: center;
// background-color: orange;
// `;
