import List from '../../@components/List';

const MainApp = () => {
  return (
    <div className="App">
      <section className="todoapp">
        <div>
          {/* <Header /> */}
          <List />
          {/* <Footer /> */}
        </div>
      </section>
    </div>
  );
};

export default MainApp;