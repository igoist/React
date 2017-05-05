// import '../css/index.scss';

// [
//   {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
//   {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
//   {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
//   {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
//   {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
//   {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
// ];

function SearchBar() {
  return (
    <div id='search-bar'>
      <form>
        <input type="text" placeholder="Search..." />
        <p>
          <input type="checkbox" />
          {' '}
          Only show products in stock
        </p>
      </form>
    </div>
  );
}

function ProductCategoryRow(props) {
  return (
    <div className='pcr'>
      <h4>{props.category}</h4>
    </div>
  );
}

function ProductRow(props) {
  return (
    <li className='pr'>{props.product.name} {props.product.price}</li>
  );
}

class ProductTable extends React.Component {
  render() {
    var rows = [];
    var lastCategory = null;
    this.props.products.forEach(function(product) {
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
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <div id='ftp'>
        <SearchBar />
        <ProductTable products={this.props.products} />
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
