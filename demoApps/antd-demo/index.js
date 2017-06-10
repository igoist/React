import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import { DatePicker } from 'antd';
import { Table, Select } from 'antd';
const Option = Select.Option;

import { Layout } from 'antd';

const { Header, Footer, Sider, Content } = Layout;


class SelectBar extends React.Component {
  constructor(props) {
    super(props);
    this.op1 = []; // product
    this.op2 = []; // view
    this.op2.push(<Option key={''} value='' disabled>请选择视图</Option>);
    this.props.items.forEach((item, index) => {
      this.op2.push(<Option key={index.toString()} value={item.v}>{item.v}</Option>);
    });

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
        this.op1.push(<Option key={''} value='' disabled>请选择产品</Option>);
      } else {
        if (item.v == this.props.v2) {
          this.op1 = [];
          this.op1.push(<Option key={''} value='' disabled>请选择产品</Option>);
          item.products.forEach((p, index2) => {
            this.op1.push(<Option key={index2.toString()} value={p.p}>{p.p}</Option>);
          });
        }
      }
    });
    return(
      <div>
        <Select value={this.props.v2} onChange={this.handleViewChange} style={{width: '120px', padding: '10px 12px'}}>
          {this.op2}
        </Select>
        <Select value={this.props.v1} onChange={this.handleProductChange} style={{width: '120px', padding: '10px 12px', paddingLeft: '0'}}>
          {this.op1}
        </Select>
      </div>
    );
  }
}


class Items extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    var rows = [];
    rows.push(<li className='item-h' key={''}><span>视图</span><span>产品</span><span>信息</span></li>);
    this.props.items.forEach((item, index1) => {
      if (this.props.v2 == '') {
        item.products.forEach((p, index2) => {
          rows.push(<li className='item' key={index1.toString() + '-' + index2.toString()}><span>{item.v}</span><span>{p.p}</span><span>{p.info}</span></li>);
        });
      } else {
        if (item.v == this.props.v2) {
          item.products.forEach((p, index2) => {
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
  // const sel = document.getElementById('sel-wrap');
  // let tmp = sel.offsetHeight + iHeight * length;
  let tmp = iHeight * length;
  let todo = document.querySelector('.card');
  todo.style.height = tmp + 'px';
}

class ProductAndView extends React.Component {
  constructor(props) {
    super(props);
    this.items = [];
    try {
      let ip = '192.168.1.107';
      // let ip = '127.0.0.1';
      let xhr = new XMLHttpRequest();
      xhr.open('get', 'http://' + ip + ':8000/qrcode/api/', false);
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

    this.handleTextInputChange = this.handleTextInputChange.bind(this);
    this.handleProductChange = this.handleProductChange.bind(this);
    this.handleViewChange = this.handleViewChange.bind(this);
    this.handleItemClick = this.handleItemClick.bind(this);
  }

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
      // console.log(item.v);
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
      <div id='qr-wrap'>
        <SelectBar
          items={this.items}
          v1={this.state.v1}
          v2={this.state.v2}
          handleProductChange={this.handleProductChange}
          handleViewChange={this.handleViewChange}
        />
        <br />
        <div className='card'>
          <Items
            items={this.items}
            v1={this.state.v1}
            v2={this.state.v2}
          />
        </div>
      </div>
    );
  }
}

import { Menu, Icon, Switch } from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class App extends React.Component {
  state = {
    theme: 'dark',
    current: '1',
  }
  changeTheme = (value) => {
    this.setState({
      theme: value ? 'dark' : 'light',
    });
  }
  handleClick = (e) => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  }
  render() {
    return (
      <Layout>
        <Header id='qr-header' className='et-header' style={{height: '56px'}}>
          <Menu
            onClick={this.handleClick}
            selectedKeys={[this.state.current]}
            mode="horizontal"
            style={{padding: '8px 12px'}}
          >
            <Menu.Item key="mail">
              <Icon type="mail" />Navigation One
            </Menu.Item>
            <Menu.Item key="app">
              <Icon type="appstore" />Navigation Two
            </Menu.Item>
            <Menu.Item key="a">
              <Icon type="appstore" />Navigation Three
            </Menu.Item>
            <Menu.Item key="b">
              <Icon type="appstore" />Navigation Four
            </Menu.Item>
            <Menu.Item key="c">
              <Icon type="appstore" />Navigation Five
            </Menu.Item>
          </Menu>
        </Header>
        <Layout>
          <Sider id='qr-sider' style={{paddingTop: '20px'}}>
            <Switch
              checked={this.state.theme === 'dark'}
              onChange={this.changeTheme}
              checkedChildren="Dark"
              unCheckedChildren="Light"
              style={{marginLeft: '16px'}}
            />
            <br />
            <br />
            <Menu
              theme={this.state.theme}
              onClick={this.handleClick}
              style={{ width: 200 }}
              defaultOpenKeys={['sub1']}
              selectedKeys={[this.state.current]}
              mode="inline"
            >
              <SubMenu key="sub1" title={<span><Icon type="mail" /><span>Navigation One</span></span>}>
                <Menu.Item key="1">Option 1</Menu.Item>
                <Menu.Item key="2">Option 2</Menu.Item>
                <Menu.Item key="3">Option 3</Menu.Item>
                <Menu.Item key="4">Option 4</Menu.Item>
              </SubMenu>
              <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>Navigtion Two</span></span>}>
                <Menu.Item key="5">Option 5</Menu.Item>
                <Menu.Item key="6">Option 6</Menu.Item>
                <SubMenu key="sub3" title="Submenu">
                  <Menu.Item key="7">Option 7</Menu.Item>
                  <Menu.Item key="8">Option 8</Menu.Item>
                </SubMenu>
              </SubMenu>
              <SubMenu key="sub4" title={<span><Icon type="setting" /><span>Navigation Three</span></span>}>
                <Menu.Item key="9">Option 9</Menu.Item>
                <Menu.Item key="10">Option 10</Menu.Item>
                <Menu.Item key="11">Option 11</Menu.Item>
                <Menu.Item key="12">Option 12</Menu.Item>
              </SubMenu>
            </Menu>
          </Sider>
          <Content style={{height: '600px'}}>
            <ProductAndView />
          </Content>
        </Layout>
        <Footer>Footer</Footer>
      </Layout>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

// const sel = document.getElementById('sel-wrap');
const ul = document.getElementById('items-wrap');
// const tmp = sel.offsetHeight + ul.offsetHeight;
const tmp = ul.offsetHeight;
let todo = document.querySelector('.card');
todo.style.height = tmp + 'px';
todo = null;
