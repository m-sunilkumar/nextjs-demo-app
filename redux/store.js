import { createStore } from "redux";
import authentication from "./reducers/authentication";

export default createStore(authentication);

// Once we get more reducers need to combine
// import rootReducer from "./reducers";
// export default createStore(rootReducer);

