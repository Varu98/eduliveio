import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { VideoProvider } from "./frontend/Context/VideoContext";
import { BrowserRouter } from "react-router-dom";
import PlaylistProvider from "./frontend/Context/PlaylistContext";
import { AuthProvider } from "./frontend/Context/AuthContext";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <VideoProvider>
        <AuthProvider>
          <PlaylistProvider>
            <App />
          </PlaylistProvider>
        </AuthProvider>
      </VideoProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
