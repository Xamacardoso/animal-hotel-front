import type { Animal } from "../types/Animal";

interface Props {
  animal: Animal | null;
  onClose: () => void;
}

export default function AnimalModal({ animal, onClose }: Props) {
  if (!animal) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        <h2>{animal.nome}</h2>

        <p><strong>Espécie:</strong> {animal.especie}</p>
        <p><strong>Idade:</strong> {animal.idade} anos</p>
        <p><strong>Gênero:</strong> {animal.genero === "M" ? "Macho" : "Fêmea"}</p>
        <p><strong>Observação:</strong> {animal.observacao || "Nenhuma"}</p>

        <button className="close-btn" onClick={onClose}>Fechar</button>
      </div>
    </div>
  );
}
