import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter} from 'react-router-dom'
// import App from "./components/App";
import App from "./App";
import { Provider } from "react-redux";
import store from "./redux/store"
import "./styles/root.scss"

ReactDOM.render(
  <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);




// chmod 777 /var/run/docker.sock
/* docker stop $(docker ps -a -q)
docker rm $(docker ps -a -q)


docker rmi $(docker images -a -q) */