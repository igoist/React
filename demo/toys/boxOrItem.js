class Item extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            i: props.ind,
            v: props.val
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState((prevState) => {
            return {v: prevState.v + 1};
        });
    }

    render() {
        return (
            <li onClick={this.handleClick} value={this.state.i}>{this.state.v}</li>
        )
    }
}

class Box extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            arr: [
            {
                index: 0,
                value: 1
            },
            {
                index: 1,
                value: 2
            },
            {
                index: 2,
                value: 3
            },
            {
                index: 3,
                value: 4
            },
            {
                index: 4,
                value: 5
            }]
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        // console.log(e);
        // console.log(e.target);
        // console.log(e.target.value);
        // console.log(e.target.ind);
        // console.log(this.state.arr[e.target.value-1]);
        // e.target.value = e.target.value + 2;
        // console.log(e.target.value);
        // console.log(this.state.arr[e.target.value].value);
        var ind = e.target.value
        this.setState({
            arr: [{ index: 0, value: 12 }, ...arr]
        });

    }

    render() {
        var items = this.state.arr.map((obj, index) => {
            // console.log(obj);
            // console.log(index);
            return <Item 
                    key={index.toString()}
                    ind={obj.index}
                    val={obj.value}
                    />;
        });
        return (
            <ul>
                {items}
            </ul>
        )
    }



}


ReactDOM.render(
  <Box tag={true} />,
  document.getElementById('example3')
);