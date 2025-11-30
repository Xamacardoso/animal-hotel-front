import { useState } from "react";

interface ModalProps {
  onClose: () => void;
}

export default function ModalCadastrarAnimal({ onClose }: ModalProps) {
  const [form, setForm] = useState({
    nome: "",
    especie: "",
    raca: "",
    idade: 0,
    observacao: "",
    genero: "M",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch("https://animal-hotel-backend.onrender.com/api/animals", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        throw new Error("Erro ao cadastrar o animal");
      }

      alert("Animal cadastrado com sucesso!");
      onClose();
      window.location.reload(); 
    } catch (error) {
      alert("Falha ao cadastrar");
    }
  };

  return (
    <div style={styles.overlay}>
      <div style={styles.modal}>
        <h2>Cadastrar Novo Animal</h2>

        <form onSubmit={handleSubmit} style={styles.form}>
          <input name="nome" placeholder="Nome" onChange={handleChange} required />
          <input name="especie" placeholder="Espécie" onChange={handleChange} required />
          <input name="raca" placeholder="Raça" onChange={handleChange} required />
          <input name="idade" type="number" placeholder="Idade" onChange={handleChange} required />

          <input name="observacao" placeholder="Observação" onChange={handleChange} />

          <select name="genero" onChange={handleChange}>
            <option value="M">Macho</option>
            <option value="F">Fêmea</option>
          </select>

          <button type="submit">Cadastrar</button>
        </form>

        <button onClick={onClose} style={styles.closeBtn}>Fechar</button>
      </div>
    </div>
  );
}

const styles = {
  overlay: {
    position: "fixed" as const,
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    backgroundColor: "rgba(0,0,0,0.4)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  modal: {
    background: "white",
    padding: "20px",
    borderRadius: "10px",
    width: "400px",
  },
  form: {
    display: "flex",
    flexDirection: "column" as const,
    gap: "10px",
  },
  closeBtn: {
    marginTop: "10px",
    background: "#d9534f",
    color: "white",
    border: "none",
    padding: "10px",
    cursor: "pointer",
  },
};
