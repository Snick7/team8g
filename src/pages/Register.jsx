import { useState } from "react";
import { registerUser } from "../auth";
import { useNavigate } from "react-router-dom";

function Register() {
 const handleLogin = async () => {
  try {
    console.log("Email:", `"${email}"`);
    console.log("Password:", `"${password}"`);

    const userCredential = await loginUser(email.trim(), password);

    console.log(userCredential.user);

    alert("Вы вошли!");
    navigate("/");
  } catch (err) {
    console.log(err);
    alert(`${err.code}\n${err.message}`);
  }
};
  return (
    <div style={{ padding: 40 }}>
      <h1>Регистрация</h1>

      <input
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Пароль"
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={handleRegister}>
        Создать аккаунт
      </button>
    </div>
  );
}

export default Register;