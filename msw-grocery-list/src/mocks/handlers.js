import { rest } from 'msw';

const endpoint = 'http://localhost:3001/grocery-list';

let items = [];

export const handlers = [
  rest.get(endpoint, (req, res, ctx) => {
    return res(ctx.delay(500), ctx.status(200), ctx.json(items));
  }),
  rest.delete(`${endpoint}/:id`, (req, res, ctx) => {
    const { id } = req.params;
    items = items.filter((todo) => todo.id !== id);
    return res(ctx.delay(200), ctx.status(204));
  }),
  rest.patch(`${endpoint}/:id`, (req, res, ctx) => {
    const { id } = req.params;
    items = items.map((todo) => {
      if (todo.id !== id) {
        return todo;
      }
      return req.body;
    });
    return res(ctx.delay(200), ctx.status(200), ctx.json(req.body));
  }),
  rest.post(endpoint, (req, res, ctx) => {
    // const id = items[items.length - 1]?.id + 1 || 1; //!
    const lastId = items[items.length - 1]?.id;
    const id = lastId + 1 || 1; // ! no-unsafe-optional-chaining
    const newItem = {
      id: id.toString(),
      description: req.body,
      completed: false,
    };

    items = [...items, newItem];
    return res(ctx.delay(500), ctx.status(201), ctx.json(newItem));
  }),
];
