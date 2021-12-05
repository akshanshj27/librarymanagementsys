import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useState } from "react";

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const loginUser = (event) => {
    event.preventDefault();
    const credential = { username: username, password: password };
    onLogin(credential);
  };
  return (
    <div className="card col-4 p-5 mb-1 ">
      <Box
        component="form"
        onSubmit={loginUser}
        className=" d-flex flex-column"
      >
        <TextField
          className=" mb-2"
          id="username"
          label="Username"
          variant="outlined"
          value={username}
          size="small"
          onChange={(ev) => setUsername(ev.target.value)}
        />
        <TextField
          className=" mb-2"
          id="password"
          label="Pasword"
          type="password"
          variant="outlined"
          value={password}
          size="small"
          onChange={(ev) => setPassword(ev.target.value)}
        />
        <Button className=" mb-2" variant="contained" type="submit">
          Login
        </Button>
      </Box>
    </div>
  );
};

export default Login;
