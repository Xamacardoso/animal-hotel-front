import Cookies from "js-cookie";

export default function Dashboard() {

  function logout() {
    Cookies.remove("auth_token");
    window.location.href = "/login"; // volta para login
  }

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h1>🐾 Bem vindo ao Painel do Hotel Pet!</h1>
      <button onClick={logout}>Sair</button>
    </div>
  );
}
