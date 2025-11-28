import { useState } from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import "../styles/Login.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://animal-hotel-backend.onrender.com/api/login",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, senha }),
        }
      );

      if (!response.ok) {
        alert("Credenciais inválidas");
        return;
      }

      const data = await response.json();
      const token = data.token;

      Cookies.set("auth_token", token, { expires: 7, secure: true });

      navigate("/dashboard");
    } catch (error) {
      console.error("Erro ao logar:", error);
    }
  };

  return (
    <div className="login-container">
      <form className="card" onSubmit={handleLogin}>
        <h2>Login</h2>

        <div className="input-group">
          <label>E-mail</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="input-group">
          <label>Senha</label>
          <input
            type="password"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />
        </div>

        <button type="submit" className="btn">
          Entrar
        </button>
      </form>
    </div>
  );
}
