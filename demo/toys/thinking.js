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
      <input type='text' />
    </div>
  );
}

function ProductCategoryRow(props) {
  return (
    <div className='pcr'>
      <h4>{props.title}</h4>
      <ul>
        {props.children}
      </ul>
    </div>
  );
}

function ProductRow(props) {
  return (
    <li className='pr'>{props.r}</li>
  );
}

function ProductTable() {
  return (
    <div id='pt'>
      <ul className='pt-h'>
        <li>Name</li>
        <li>Price</li>
      </ul>
      <ProductCategoryRow title='Sporting Goods'>
        <ProductRow r='Football $49.99' />
        <ProductRow r='Football $49.99' />
      </ProductCategoryRow>
      <ProductCategoryRow title='Electronics'>
        <ProductRow r='iPod $22.22' />
        <ProductRow r='iPod $22.22' />
      </ProductCategoryRow>
    </div>
  );
}


class FilterableProductTable extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div id='ftp'>
        <SearchBar />
        <ProductTable />
      </div>
    );
  }
}

ReactDOM.render(
  <FilterableProductTable />,
  document.getElementById('example')
);
