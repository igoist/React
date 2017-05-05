import React, { Component } from 'react';
import {Motion, spring} from 'react-motion';
import glamorous, {ThemeProvider} from 'glamorous';
// const { Component, createElement, DOM } = React;
// const { Motion, spring, presets } = ReactMotion;
const { Div, Button } = glamorous;

const buttonStyle = {
  backgroundColor: 'transparent',
  color: 'white',
  border: '1px solid white',
  borderRadius: 4,
  height: 40,
  lineHeight: 2.5,
  paddingLeft: 16,
  paddingRight: 16,
  outline: 'none',
  cursor: 'pointer'
}

const appStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh',
  width: '100vw',
  background: '#55DFBD'
}

const panelStyle = {
  position: 'absolute',
  top: 0,
  bottom: 0,
  left: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh',
  width: 320,
  background: '#45B0F9'
}

class Apt extends Component {
  constructor (props) {
    super(props)
    this.state = {
      panelOpen: false
    }
  }

  render () {
    const { panelOpen } = this.state

    return (
      <Div css={appStyle}>
        <Button
          css={buttonStyle}
          onClick={() => this.setState({ panelOpen: !panelOpen })}
        >
          Toggle Panel
        </Button>
        <Motion
          style={{
            x: spring(panelOpen ? 0 : -100),
            opacity: spring(panelOpen ? 1 : 0)
          }}
        >{(currentStyles) => (
          <Div
            css={{
              ...panelStyle,
              transform: `translate3d(${currentStyles.x}%, 0, 0)`,
              opacity: currentStyles.opacity
            }}
          >
            <Button
              css={buttonStyle}
              onClick={() => this.setState({ panelOpen: false })}
            >
              Close Panel
            </Button>
          </Div>
        )}
        </Motion>
      </Div>
    )
  }
}

// ReactDOM.render(createElement(App), document.getElementById('app'))
export default Apt;
