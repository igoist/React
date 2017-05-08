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
    this.props.onSubmit(e.target.it.value);
  }

  render() {
    return (
      <div id='search-bar'>
        <form onSubmit={this.handleSubmit}>
          <label>
            Cot:
            <input type='text' name='it' value={this.state.value} onChange={this.handleChange} />
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
    this.props.items.forEach((item, index) => {
      if(item.done) {
        rows.push(<li className='item done' key={index.toString()} id={index} onClick={this.props.handleItemClick}>{item.text}</li>);
      } else {
        rows.push(<li className='item' key={index.toString()} id={index} onClick={this.props.handleItemClick}>{item.text}</li>);
      }
    });
    return (
      <div id='items-wrap'>
        <ul className='items'>
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
    this.iHeight = 32 + 1;

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleItemClick = this.handleItemClick.bind(this);
  }

  handleSubmit(text) {
    this.items.push({text: text, done: false});
    this.setState({
      count: this.items.length
    });

    // console.log(this.items.length);

    const sb = document.getElementById('search-bar');
    console.log(sb.offsetHeight);
    let tmp = sb.offsetHeight + this.iHeight * this.items.length;
    let todo = document.querySelector('.card');
    todo.style.height = tmp + 'px';
    console.log(this);
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
      <div id='todo-wrap'>
        <div className='card'>
          <EnterBar onSubmit={this.handleSubmit} onChange={this.handleTextInputChange} />
          <Items items={this.items} handleItemClick={this.handleItemClick} />
        </div>
      </div>
    );
  }
}


ReactDOM.render(
  <Todo />,
  document.getElementById('example')
);

// console.log(document.getElementById('todo-wrap'));
const sb = document.getElementById('search-bar');
const ul = document.getElementById('items-wrap');
console.log(sb.offsetHeight);
const tmp = sb.offsetHeight + ul.offsetHeight;
let todo = document.querySelector('.card');
todo.style.height = tmp + 'px';
todo = null;
