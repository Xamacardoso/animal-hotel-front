import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { api } from "../services/api";
import type { Animal } from "../types/Animal";

import Header from "../components/Header";
import AnimalCard from "../components/AnimalCard";
import AddAnimalCard from "../components/AddAnimalCard";
import EmptyState from "../components/EmptyState";
import ModalCadastrarAnimal from "../components/ModalCadastrarAnimal";

import "../styles/dashboard.css";

export default function Dashboard() {
  const [animais, setAnimais] = useState<Animal[]>([]);
  const [selectedAnimal, setSelectedAnimal] = useState<Animal | null>(null);
  const [showModal, setShowModal] = useState(false);
  
  async function carregarAnimais() {
    try {
      const response = await api.get("/animals/");
      setAnimais(response.data);
    } catch (error) {
      console.log("Erro ao carregar animais:", error);
      Cookies.remove("auth_token");
      window.location.href = "/login";
    }
  }

  useEffect(() => {
    const token = Cookies.get("auth_token");
    if (!token) window.location.href = "/login";

    carregarAnimais();
  }, []);


  function logout() {
    Cookies.remove("auth_token");
    window.location.href = "/login";
  }

  return (
    <div className="dashboard">
      <Header />

      <h2 className="title">Meus Animais de Estimação</h2>

      <div className="animals-grid">

        {/* ✔️ Card "Adicionar Animal" funcionando */}
        <AddAnimalCard onClick={() => setShowModal(true)} />

        {/* ✔️ Lista de animais */}
        {animais.map((animal) => (
          <AnimalCard
            key={animal.id}
            animal={animal}
            onClick={() => setSelectedAnimal(animal)}
            onDelete={() => console.log("Deletar:", animal.id)}
          />
        ))}
      </div>

      {/* Estado vazio */}
      {animais.length === 0 && (
        <EmptyState onAdd={() => setShowModal(true)} />
      )}

      {/* ✔️ Modal abre aqui */}
      {showModal && (
        <ModalCadastrarAnimal 
          onClose={() => setShowModal(false)} 
          onSuccess={() => {
            setShowModal(false);
            carregarAnimais();
          }}
        />
      )}
    </div>
  );
}
