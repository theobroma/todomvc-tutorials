import Header from '@components/Header';
import List from '@components/List';
import React from 'react';

const MainApp = () => {
  // const todos = useSelector(todosSelector).data;

  // const activeTodoCount = todos.reduce((accum: number, todo: TodoType) => {
  //     return todo.completed ? accum : accum + 1;
  // }, 0);

  // const completedCount = todos.length - activeTodoCount;

  // let footer;

  // if (activeTodoCount || completedCount) {
  //     footer = (
  //         <FooterComponent
  //             activeTodoCount={activeTodoCount}
  //             completedCount={completedCount}
  //         />
  //     );
  // }

  return (
    <div className="App">
      <section className="todoapp">
        <div>
          {/* Header */}
          <Header />
          {/* Main */}
          <List />
          {/* Footer */}
          {/* {footer} */}
        </div>
      </section>
    </div>
  );
};

export default MainApp;
