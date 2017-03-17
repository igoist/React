var Message = React.createClass({
  getInitialState() {
    return {
      message: ''
    }
  },

  handleMessageChange(e) {
    this.setState({
      message: e.target.value
    });
  },

  render() {
    return (
      <div>
        <input type="text" onChange={this.handleMessageChange} />
        <span>{this.state.message}</span>
      </div>
    )
  }
})

ReactDOM.render(
  <Message />,
  document.getElementById('example')
)
