import { useState } from "react";
import { loginUser } from "../auth";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      await loginUser(email, password);

      alert("Вы вошли!");

      navigate("/");
    } catch (err) {
      console.log("Ошибка Firebase:", err);
      console.log("Код ошибки:", err.code);
      console.log("Сообщение:", err.message);

      alert(`${err.code}\n${err.message}`);
    }
  };

  return (
    <div style={{ padding: 40 }}>
      <h1>Вход</h1>

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <br />
      <br />

      <input
        type="password"
        placeholder="Пароль"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <br />
      <br />

      <button onClick={handleLogin}>
        Войти
      </button>
    </div>
  );
}

export default Login;