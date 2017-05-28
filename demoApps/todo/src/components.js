import React from 'react';


function Todo(props) {
  const {todo} = props;
  if (todo.isDone) {
    return <strike>{todo.text}</strike>;
  } else {
    return <span>{todo.text}</span>;
  }
}

// class TodoList extends React.Components {
//   constructor(props) {
//     super(props);
//     this.todos = props.todos;
//     // console.log(this.todos);
//     // console.log(typeof this.todos);
//   }
//
//   render() {
//     return (
//       <div className='todo'>
//         <input type='text' placeholder='Add todo' />
//         <ul className='todo__list'>
//           {
//             this.todos.map(t => (
//               <li key={t.id} className='todo__item'>
//                 <Todo todo={t} />
//               </li>
//             ))
//           }
//         </ul>
//       </div>
//     );
//   }
// }
//
// export default TodoList;
export function TodoList(props) {
  const { todos } = props;
  return (
    <div className='todo'>
      <input type='text' placeholder='Add todo' />
      <ul className='todo__list'>
        {todos.map(t => (
          <li key={t.id} className='todo__item'>
            <Todo todo={t} />
          </li>
        ))}
      </ul>
    </div>
  );
}
