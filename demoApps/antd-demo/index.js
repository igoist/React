import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import { DatePicker } from 'antd';
import { Select } from 'antd';

const Option = Select.Option;

// function handleChange(value) {
//   console.log(`selected ${value}`);
// }


class SelectBar extends React.Component {
  constructor(props) {
    super(props);
    this.op1 = []; // product
    this.op2 = []; // view
    this.op2.push(<Option key={''} value='' disabled>请选择视图</Option>);
    this.props.items.forEach((item, index) => {
      this.op2.push(<Option key={index.toString()} value={item.v}>{item.v}</Option>);
    });
    this.op1.push(<Option key={''} value='' disabled>请选择产品</Option>);

    this.handleProductChange = this.handleProductChange.bind(this);
    this.handleViewChange = this.handleViewChange.bind(this);
  }

  handleProductChange(value) {
    this.props.handleProductChange(value);
  }

  handleViewChange(value) {
    this.props.handleViewChange(value);
  }

  render() {
    this.props.items.forEach((item, index1) => {
      if (this.props.v2 == '') {
      } else {
        if (item.v == this.props.v2) {
          this.op1 = [];
          item.products.forEach((p, index2) => {
            this.op1.push(<Option key={index2.toString()} value={p.p}>{p.p}</Option>);
          });
        }
      }
    });
    return(
      <div>
        <Select defaultValue='' onChange={this.handleViewChange}>
          {this.op2}
        </Select>
        <Select defaultValue='' onChange={this.handleProductChange}>
          {this.op1}
        </Select>
      </div>
    );
  }
}


class Items extends React.Component {
  constructor(props) {
    super(props);
    this.op1 = []; // product
    this.op2 = []; // view
    this.op2.push(<option key={''} disabled value=''>请选择视图</option>);
    this.op1.push(<option key={''} disabled value=''>请选择产品</option>);
    this.props.items.forEach((item, index) => {
      this.op2.push(<option key={index.toString()} value={item.v}>{item.v}</option>);
    });

    this.handleProductChange = this.handleProductChange.bind(this);
    this.handleViewChange = this.handleViewChange.bind(this);
    this.handleItemClick = this.handleItemClick.bind(this);
  }

  handleProductChange(e) {
    this.props.handleProductChange(e.target.value);
  }

  handleViewChange(e) {
    this.props.handleViewChange(e.target.value);
  }

  handleItemClick(e) {
    this.props.handleItemClick(e);
  }

  render() {
    var rows = [];
    this.props.items.forEach((item, index1) => {
      if (this.props.v2 == '') {
        item.products.forEach((p, index2) => {
          rows.push(<li className='item' key={index1.toString() + '-' + index2.toString()}><span>{item.v}</span><span>{p.p}</span><span>{p.info}</span></li>);
        });
      } else {
        if (item.v == this.props.v2) {
          // console.log(item.products);
          this.op1 = [];
          item.products.forEach((p, index2) => {
            this.op1.push(<option key={index2.toString()} value={p.p}>{p.p}</option>);
            if (this.props.v1 == '') {
              rows.push(<li className='item' key={index1.toString() + '-' + index2.toString()}><span>{item.v}</span><span>{p.p}</span><span>{p.info}</span></li>);
            } else if (p.p == this.props.v1) {
              rows.push(<li className='item' key={index1.toString() + '-' + index2.toString()}><span>{item.v}</span><span>{p.p}</span><span>{p.info}</span></li>);
            }
          });
        }
      }
    });

    return (
      <div>
        <div id='sel-wrap'>
          <select name='view' value={this.props.v2} onChange={this.handleViewChange}>{this.op2}</select>
          <select name='product' value={this.props.v1} onChange={this.handleProductChange}>{this.op1}</select>
        </div>
        <div id='items-wrap'>

          <ul className='items'>
            {rows}
          </ul>
        </div>
      </div>
    );
  }
}

function adjustHeight(iHeight, length) {
  const sel = document.getElementById('sel-wrap');
  let tmp = sel.offsetHeight + iHeight * length;
  let todo = document.querySelector('.card');
  todo.style.height = tmp + 'px';
}

class ProductAndView extends React.Component {
  constructor(props) {
    super(props);
    this.items = [];
    try {
      let xhr = new XMLHttpRequest();
      xhr.open('get', 'http://127.0.0.1:8000/qrcode/api/', false);
      xhr.send(null);
      let listObj = JSON.parse(xhr.responseText);
      console.log(listObj);
      let tmp_p = [];
      let last = '';
      listObj.forEach((item, index) => {
        if (item.v !== last) {
          if (index !== 0) {
            if (index !== (listObj.length - 1)) {
              this.items.push({products: tmp_p, v: last});
              tmp_p = [];
            // important below
            } else {
              this.items.push({products: tmp_p, v: last});
              tmp_p = [];
              tmp_p.push({info: item.info, p: item.p});
              this.items.push({products: tmp_p, v: item.v});
              // 若不 return，👇下面还有句 'tmp_p.push...'
              return ;
            }
          }
        }
        tmp_p.push({info: item.info, p: item.p});
        last = item.v;
      });
      // console.log(this.items);
    } catch(e) {
      console.log(e);
      console.log("It's on Other Page Or by Error ?");
    }

    this.state = {
      // clickFlag: false,
      filterText: '',
      count: this.items.length,
      v1: '', // 产品
      v2: '' // 视图
    };

    this.iHeight = 32 + 1;

    // this.handleSubmit = this.handleSubmit.bind(this);
    this.handleTextInputChange = this.handleTextInputChange.bind(this);
    this.handleProductChange = this.handleProductChange.bind(this);
    this.handleViewChange = this.handleViewChange.bind(this);
    this.handleItemClick = this.handleItemClick.bind(this);
  }

  // handleSubmit(text) {
  //   this.items.push({text: text, done: false});
  //   this.setState({
  //     count: this.items.length
  //   });
  //
  //   // console.log(this.items.length);
  //
  //   const sb = document.getElementById('search-bar');
  //   console.log(sb.offsetHeight);
  //   let tmp = sb.offsetHeight + this.iHeight * this.items.length;
  //   let todo = document.querySelector('.card');
  //   todo.style.height = tmp + 'px';
  //   console.log(this);
  // }

  handleTextInputChange(text) {
    this.setState({
      filterText: text
    });
  }

  handleProductChange(text) {
    this.setState({
      v1: text
    });

    adjustHeight(this.iHeight, 1);
  }

  handleViewChange(text) {
    this.setState({
      v2: text,
      v1: ''
    });
    let length = 0;
    this.items.forEach((item, index1) => {
      console.log(item.v);
      if (item.v == text) {
        length = item.products.length;
      }
    });
    adjustHeight(this.iHeight, length);
  }

  handleItemClick(e) {
    this.items[e.target.id].done = !this.items[e.target.id].done;
    this.setState({
      clickFlag: !this.state.clickFlag,
    });
  }

  // <SearchBar onSubmit={this.handleSubmit} onChange={this.handleTextInputChange} />
  render() {
    return (
      <div id='todo-wrap'>
        <SelectBar
          items={this.items}
          v1={this.state.v1}
          v2={this.state.v2}
          handleProductChange={this.handleProductChange}
          handleViewChange={this.handleViewChange}
        />
        <hr />
        <div className='card'>

          <Items
            items={this.items}
            v1={this.state.v1}
            v2={this.state.v2}
            handleItemClick={this.handleItemClick}
            handleProductChange={this.handleProductChange}
            handleViewChange={this.handleViewChange}
          />
        </div>
      </div>
    );
  }
}

function App() {
  return (
    <div style={{ margin: 100 }}>
      <ProductAndView />
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

const sel = document.getElementById('sel-wrap');
const ul = document.getElementById('items-wrap');
const tmp = sel.offsetHeight + ul.offsetHeight;
let todo = document.querySelector('.card');
todo.style.height = tmp + 'px';
todo = null;
