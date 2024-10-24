import { useReducer, useState } from "react";
import loginReducer from "../reducers/loginReducer";
const Login = () => {
  const [username] = useState<string>("Jose!");
  const [login, dispatch] = useReducer(loginReducer, "");

  const handleLogin = () => {
    dispatch({ type: "LOGIN", username });
  };
  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };
  return (
    <div className="container mt-5">
      <h1 className="mb-4">User Authentication</h1>
      {login ? (
        <div>
          <h2>It is I, {login}!</h2>
          <button className="btn btn-danger" onClick={handleLogout}>
            Log Out
          </button>
        </div>
      ) : (
        <button className="btn btn-primary" onClick={handleLogin}>
          Log In
        </button>
      )}
    </div>
  );
};
export default Login;
