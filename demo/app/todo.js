// class NameForm extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {value: 'Please write an essay about you favorite DOM element.'};
//
//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }
//
//   handleChange(event) {
//     this.setState({value: event.target.value.toUpperCase()});
//     console.log('   e: ' + event.target.value);
//     console.log('this: ' + this.state.value);
//   }
//
//   handleSubmit(event) {
//     console.log("A name was submitted: " + this.state.value);
//     event.preventDefault();
//   }
//
//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <label>
//           Name:
//           <textarea value={this.state.value} onChange={this.handleChange} />
//         </label>
//         <input type="submit" value="Submit" />
//       </form>
//     )
//   }
// }
// ReactDOM.render(
//   <NameForm />,
//   document.getElementById('example2')
// );

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
    // console.log('   e: ' + event.target.value);
    // console.log('this: ' + this.state.value);
  }

  handleSubmit(e) {
    e.preventDefault();
    // console.log(this.props);
    this.props.onSubmit(e.target.xt.value);
    // console.log(e.target.xt.value);
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

class Items extends React.Component {
  render() {
    var rows = [];
    // console.log(this);
    this.props.items.forEach((item, index) => {
      rows.push(<li key={index.toString()}>{item.text}</li>);
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
      {text: 'axxxxxx'},
      {text: 'bxxxxxxx'}
    ];
    this.state = {
      filterText: '',
      inStockOnly: false,
      // count: this.items.length
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(text) {
    // *
    this.items.push({text: text});
    this.setState({
      count: this.items.length
    });
  }

  handleTextInputChange(e) {

  }

  render() {
    return (
      <div id='ftp'>
        <EnterBar onSubmit={this.handleSubmit} onChange={this.handleTextInputChange} />
        <Items items={this.items} />
      </div>
    );
  }

}


ReactDOM.render(
  <Todo />,
  document.getElementById('example')
);
