import axios from 'axios';
import { action, makeObservable, observable, runInAction, toJS } from 'mobx';

import type { TodoType } from '../@types/todos';

const baseUrl = 'http://localhost:4000';
class BlogModel {
  posts: TodoType[] = [];

  constructor() {
    makeObservable(this, {
      posts: observable,
      // addPost: action,
      // deletePost: action,
      allPosts: action,
      getPost: action,
    });
  }

  getPost(id: TodoType['id']) {
    return this.posts.find((post) => post.id === id);
  }

  // addPost = async (post) => {
  //   const res = await axios.post(`${baseUrl}/posts`, {
  //     title: post.title,
  //     body: post.body,
  //   });
  //   runInAction(() => {
  //     this.posts.unshift(res.data);
  //   });
  // };

  // updatePost = async ({ id, title, body }) => {
  //   console.log(id, title, body);
  //   const post = this.getPost(id);

  //   await axios.put(`${baseUrl}/posts/${id}`, {
  //     title,
  //     body,
  //   });

  //   if (post) {
  //     runInAction(() => {
  //       post.title = title;
  //       post.body = body;
  //     });
  //   }
  // };

  // deletePost = async (id) => {
  //   await axios.delete(`${baseUrl}/posts/${id}`);
  //   runInAction(() => {
  //     const index = this.posts.findIndex((post) => post.id === id);
  //     if (index > -1) this.posts.splice(index, 1);
  //   });
  // };

  async allPosts() {
    if (this.posts.length < 1) {
      const res = await axios.get(`${baseUrl}/todos`);
      runInAction(() => {
        this.posts = res.data.reverse();
      });
    }
    console.log('this.posts', toJS(this.posts));
    return toJS(this.posts);
  }
}

const blogStore = new BlogModel();
export default blogStore;
