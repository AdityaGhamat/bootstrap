import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { Auth0Provider } from "@auth0/auth0-react";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Auth0Provider
      domain="dev-2cm5jbzhm0dc3e0w.us.auth0.com"
      clientId="LCnB1wxhyXzjVOko6s3PC0WmSVu5IGc1"
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <App />
    </Auth0Provider>
  </BrowserRouter>
);
