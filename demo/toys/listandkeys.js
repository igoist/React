function ListItem(props) {
  return <li>{props.value}</li>;
}

function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map(number =>
    <ListItem key={number.toString()}
              value={number} />
  );

  return (
    <ul>{listItems}</ul>
  );
}

const numbers = [1, 2, 3, 4, 5];
// const listItems = numbers.map(number => <li>{number}</li>);

function Post(props) {
  // console.log(props.key);  // Warning: Element: `key` is not a prop.
  // console.log(props.key2); // It's OK
  return (
    <div key={props.id}>
      <h3>{props.title}</h3>
      <p>{props.content}</p>
    </div>
  );
}

function Blog(props) {
  const sidebar = (
    <ul>
      {props.posts.map(post =>
        <li key={post.id}>
          {post.title}
        </li>
      )}
    </ul>
  );

  const content = props.posts.map(post =>
    // <div key={post.id}>
    //   <h3>{post.title}</h3>
    //   <p>{post.content}</p>
    // </div>
    // here: deweila
    <Post key={post.id}
        //  key2={post.id}  // we can annotate like this way
           id={post.id}
        title={post.title}
      content={post.content} />
  );
  return (
    <div>
      {sidebar}
      <hr />
      {content}
    </div>
  );
}

const posts = [
  {id: 1, title: "Hello World", content: "Welcome to learning React!"},
  {id: 2, title: "Installation", content: "You can install React from npm."}
];

ReactDOM.render(
  <Blog posts={posts} />,
  document.getElementById('example')
);
