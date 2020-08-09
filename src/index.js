import React from "react";
import ReactDOM from "react-dom";
import App from "./pages/App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter, HashRouter } from "react-router-dom";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const client = new ApolloClient({
  uri: "http://localhost:1337/graphql",
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <HashRouter>
        <ApolloProvider client={client}>
          <App />
        </ApolloProvider>
      </HashRouter>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
