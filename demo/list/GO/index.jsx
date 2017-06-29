const rows = 5
const t = (x) => Math.floor((x * Math.random()))
const boxSize = rows * (32 + 6 * 2)

// var arr = [0, 1, 1, 1, 0, 1, 1, 1, 0]
let arr = (rows) => {
  let arr = []
  for (let i = 0; i < rows * rows; i++) {
    arr.push(t(100) % 2)
  }
}

console.log('finish arr initial: ' + arr)

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
  // handleChessClick

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
    this.arr = this.props.arr
    this.rows = this.props.rows
    console.log(this.props.arr)
    this.handleChess = this.handleChess.bind(this)
  }

  handleChess(x, y) {
    let index = x * this.rows + y
    if (this.arr[index]) {
      this.arr[index] = 0
    } else {
      this.arr[index] = 1
    }
    console.log(this.arr[index])
  }

  render() {
    var inlineStyle = {
      width: boxSize + 'px'
    }

    let rows = [];
    // this.props.arr.map((i, index) => {
    //   let f = i > 0 ? true : false
    //   rows.push(<Chess id={index} flag={f} key={index.toString()} />)
    // })
    for (let x = 0; x < this.props.rows; x++) {
      for (let y = 0; y < this.props.rows; y++) {
        let index = x * this.rows + y
        let f = this.arr[index] > 0 ? true : false 
        rows.push(<Chess id={index} flag={f} key={index.toString()} />)
      }
    }

    return (
      <div id="board" style={inlineStyle}>
        {rows}
      </div>
    )
  }
}



ReactDOM.render(
  <App arr={arr} rows={rows} />,
  document.getElementById('root')
)