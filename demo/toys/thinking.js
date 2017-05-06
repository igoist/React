// import '../css/index.scss';

// [
//   {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
//   {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
//   {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
//   {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
//   {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
//   {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
// ];

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleFilterTextInputChange = this.handleFilterTextInputChange.bind(this);
    this.handleInStockInputChange = this.handleInStockInputChange.bind(this);
  }

  handleFilterTextInputChange(e) {
    this.props.onFilterTextInput(e.target.value);
  }

  handleInStockInputChange(e) {
    this.props.onInStockInput(e.target.checked);
  }

  render() {
    return (
      <div id='search-bar'>
        <form>
          <input
            type="text"
            placeholder="Search..."
            value={this.props.filterText}
            onChange={this.handleFilterTextInputChange}
          />
          <p>
            <input
              type="checkbox"
              checked={this.props.inStockOnly}
              onChange={this.handleInStockInputChange}
            />
            {' '}
            Only show products in stock
          </p>
        </form>
      </div>
    );
  }
}

function ProductCategoryRow(props) {
  return (
    <div className='pcr'>
      <h4>{props.category}</h4>
    </div>
  );
}

function ProductRow(props) {
  var name = props.product.stocked ?
      props.product.name :
      <span style={{color: 'red'}}>
        {props.product.name}
      </span>;
  return (
    <li className='pr'>{name} {props.product.price}</li>
  );
}

class ProductTable extends React.Component {
  render() {
    var rows = [];
    var lastCategory = null;
    // console.log(this);
    this.props.products.forEach((product) => {
      // console.log(this);
      if (product.name.indexOf(this.props.filterText) === -1 || (!product.stocked && this.props.inStockOnly)) {
        return;
      }
      if (product.category !== lastCategory) {
        rows.push(<ProductCategoryRow category={product.category} key={product.category} />);
      }
      rows.push(<ProductRow product={product} key={product.name} />);
      lastCategory = product.category;
    });
    return (
      <div id='pt'>
        <ul className='pt-h'>
          <li>Name</li>
          <li>Price</li>
        </ul>
        {rows}
      </div>
    );
    // <ProductCategoryRow title='Sporting Goods'>
    //   <ProductRow r='Football $49.99' />
    //   <ProductRow r='Football $49.99' />
    // </ProductCategoryRow>
    // <ProductCategoryRow title='Electronics'>
    //   <ProductRow r='iPod $22.22' />
    //   <ProductRow r='iPod $22.22' />
    // </ProductCategoryRow>
  }
}


class FilterableProductTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
      inStockOnly: false
    };

    this.handleFilterTextInput = this.handleFilterTextInput.bind(this);
    this.handleInStockInput = this.handleInStockInput.bind(this);
  }

  handleFilterTextInput(filterText) {
    this.setState({
      filterText: filterText
    });
  }

  handleInStockInput(inStockOnly) {
    this.setState({
      inStockOnly: inStockOnly
    })
  }

  render() {
    return (
      <div id='ftp'>
        <SearchBar
          filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly}
          onFilterTextInput={this.handleFilterTextInput}
          onInStockInput={this.handleInStockInput}
        />
        <ProductTable
          products={this.props.products}
          filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly}
        />
      </div>
    );
  }
}

var PRODUCTS = [
  {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
  {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
  {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
  {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
  {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
  {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
];

ReactDOM.render(
  <FilterableProductTable products={PRODUCTS} />,
  document.getElementById('example')
);
