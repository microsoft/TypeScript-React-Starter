import { Middleware } from "redux";

const logger: Middleware = store => next => action => {
  console.group(action.type);
  console.info("Dispatching", action);
  let result = next(action);
  console.log("Next state", store.getState());
  console.groupEnd();
  return result;
};

export default logger;
