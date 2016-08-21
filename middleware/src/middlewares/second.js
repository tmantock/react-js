export default function ({ dispatch }) {
  return next => action => {
    console.log("Second Middleware called");
    next(action);
  }
}
