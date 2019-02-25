import React, { Component } from 'react';
import './App.css'
import styled from 'styled-components'
import { Route, HashRouter } from 'react-router-dom';
import { connect } from 'react-redux'
import { lang } from './Settings/Lang'
import { mapStateToProps, mapDispatchToProps } from './Settings/ReduxStore/actions'
// let x = this.props.lang === 'fr' ? 0 : 1
// export default connect(mapStateToProps, mapDispatchToProps)(App)
import { Timers } from './Settings/Timers'

import AppBar from './Components/AppBar'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Sidebar from './Sidebar'

import Homescreen from './Homescreen'
import Indicators from './Indicators'
import Ressources from './Ressources'

let timer = 0

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      width: 0,
    }
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
    timer = setInterval(() => this.props.lang === 'fr' ? this.props.AR() : this.props.FR(), Timers.lang / 10)
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
            <AppBar menu={[
              { label: lang[x].AppBar.Menu[0].label, link: "/" },
              { label: lang[x].AppBar.Menu[1].label, link: "/indicators" },
              { label: lang[x].AppBar.Menu[2].label, link: "/ressources" },
            ]} />

            <Body>
              {
                this.state.width >= 1200 ?
                  <Sidebar />
                  : null
              }
              <Content>
                <Route component={Homescreen} path="/" exact />
                <Route component={Indicators} path="/indicators" />
                <Route component={Ressources} path="/ressources" />
              </Content>
            </Body>
          </div>
        </HashRouter>
        {
          this.state.width >= 1200 ?
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
