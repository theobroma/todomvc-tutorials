// import Footer from '../../@components/Footer';
// import Header from '../../@components/Header';

import { useEffect, useState } from 'react';
import { observer } from 'mobx-react';

import type { TodoType } from '../../@types';
import blogStore from '../../stores/TodoStore';

// const MainApp = () => {
//   return (
//     <div className="App">
//       <section className="todoapp">
//         <div>
//           <Header />
//           <List />
//           <Footer />
//         </div>
//       </section>
//     </div>
//   );
// };

// export default MainApp;

const Home = observer(() => {
  const [posts, setPosts] = useState<TodoType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  // const createAction = (data) => {
  //   blogStore.addPost(data);
  // };

  useEffect(() => {
    // blogStore.allPosts().then((res) => {
    //   setState({ isLoading: false, posts: res });
    // });
    blogStore.allPosts().then((res) => {
      setPosts(res);
      setLoading(false);
    });
    console.log('posts', posts);
  });

  return (
    <div className="container w-50 p-3">
      <div className="pt-3 pb-5">
        {/* <Form buttonText="Add Post" submitAction={createAction} /> */}
      </div>
      <div>
        <div className="card">
          <h2 className="card-header p-2">Latest Posts</h2>
          {/* <PostList posts={state.posts} isLoading={state.isLoading} /> */}
        </div>
      </div>
    </div>
  );
});

export default Home;
