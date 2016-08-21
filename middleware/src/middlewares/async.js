export default function ({ dispatch }) {
  return next => action => {
    //if action does not have a payload or a then property then send to the next middleware
    if(!action.payload || !action.payload.then){
      return next(action);
    }
    //Make sure the Promise resolves
    action.payload.then(function(response) {
      //new action with old type but replace the promise with the response data
      const newAction = { ...action, payload: response };
      dispatch(newAction);
    })
  }
}
