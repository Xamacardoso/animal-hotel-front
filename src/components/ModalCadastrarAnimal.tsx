import { useState } from "react";
import "../styles/ModalCadastrarAnimal.css";

interface ModalProps {
  onClose: () => void;
  onSuccess: () => void;
}

export default function ModalCadastrarAnimal({ onClose, onSuccess }: ModalProps) {
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
    <div className="modal-overlay">
      <div className="modal-container">
        <h2>Cadastrar Novo Animal</h2>

        <form onSubmit={handleSubmit} className="modal-form">
          <input className="modal-input" name="nome" placeholder="Nome" onChange={handleChange} required />
          <input className="modal-input" name="especie" placeholder="Espécie" onChange={handleChange} required />
          <input className="modal-input" name="raca" placeholder="Raça" onChange={handleChange} required />
          <input className="modal-input" name="idade" type="number" placeholder="Idade" onChange={handleChange} required />

          <input className="modal-input" name="observacao" placeholder="Observação" onChange={handleChange} />

          <select className="modal-input" name="genero" onChange={handleChange}>
            <option value="M">Macho</option>
            <option value="F">Fêmea</option>
          </select>

          <button className="primary-btn" type="submit" onClick={onSuccess}>Cadastrar</button>
        </form>

        <button onClick={onClose} className="modal-close-btn">Fechar</button>
      </div>
    </div>
  );
}
