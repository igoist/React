class EnterBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'Enter something...'
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleChange(event) {
    this.setState({
      value: event.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    // console.log(this.props);
    this.props.onSubmit(e.target.xt.value);
  }

  render() {
    return (
      <div id='search-bar'>
        <form onSubmit={this.handleSubmit}>
          <label>
            Cot:
            <input type='text' name='xt' value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

// class Item extends React.Component {
//   render() {
//     return (
//       <li>{item.text}</li>
//     );
//   }
// }

class Items extends React.Component {
  constructor(props) {
    super(props);

    this.handleItemClick = this.handleItemClick.bind(this);
  }

  handleItemClick(e) {
    this.props.handleItemClick(e);
  }

  render() {
    var rows = [];
    // console.log(this);
    this.props.items.forEach((item, index) => {
      if(item.done) {
        rows.push(<li className='done' key={index.toString()} id={index} onClick={this.props.handleItemClick}>{item.text}</li>);
      } else {
        rows.push(<li key={index.toString()} id={index} onClick={this.props.handleItemClick}>{item.text}</li>);
      }
    });
    return (
      <div id='pt'>
        <ul className='pt-h'>
          {rows}
        </ul>
      </div>
    );
  }
}

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.items = [
      {text: 'axxxxxx', done: false},
      {text: 'bxxxxxxx', done: true}
    ];
    this.state = {
      clickFlag: false,
      count: this.items.length
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleItemClick = this.handleItemClick.bind(this);
  }

  handleSubmit(text) {
    this.items.push({text: text, done: false});
    this.setState({
      count: this.items.length
    });
  }

  handleItemClick(e) {
    // console.log(e.target.id);
    this.items[e.target.id].done = !this.items[e.target.id].done;
    this.setState({
      clickFlag: !this.state.clickFlag,
    });
  }

  render() {
    return (
      <div id='ftp'>
        <EnterBar onSubmit={this.handleSubmit} onChange={this.handleTextInputChange} />
        <Items items={this.items} handleItemClick={this.handleItemClick} />
      </div>
    );
  }
}


ReactDOM.render(
  <Todo />,
  document.getElementById('example')
);
