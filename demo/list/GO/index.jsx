class Chess extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      flag: this.props.flag
    }
    this.h = this.h.bind(this)
  }

  h() {
    this.setState({
      flag: !this.state.flag
    })
  }


  render() {
    let str = this.state.flag > 0 ? 'chess flag' : 'chess'
    return (
      <div className={str} onClick={this.h}>
      </div>
    )
  }
}

class App extends React.Component {
  constructor(props) {
    super(props)
    console.log(this.props.arr)
    this.handleChess = this.handleChess.bind(this)
  }

  handleChess(i) {
    this.arr
  }

  render() {
    let rows = [];
    this.props.arr.map((i, index) => {
      let f = i > 0 ? true : false
      rows.push(<Chess id={index} flag={f} key={index.toString()} />)
    })
    return (
      <div id="board">
        {rows}
      </div>
    )
  }
}

var arr = [0, 1, 1, 1, 0, 1, 1, 1, 0]

ReactDOM.render(
  <App arr={arr} />,
  document.getElementById('root')
)