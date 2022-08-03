// usefull for delay in thunk creators
// eslint-disable-next-line import/no-unused-modules
export function waitForMe(milisec: number) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('');
    }, milisec);
  });
}
