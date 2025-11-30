import type { Animal } from "../types/Animal";

interface Props {
  animal: Animal;
  onClick: () => void;
  onDelete: () => void;
}

export default function AnimalCard({ animal, onClick, onDelete }: Props) {
  return (
    <div className="animal-card" onClick={onClick}>

      <div className="animal-info">
        <h3>{animal.nome}</h3>
        <p>{animal.especie}, {animal.idade} anos</p>
      </div>

      <button
        className="delete-btn"
        onClick={(e) => {
          e.stopPropagation();
          onDelete();
        }}
      >
        ✖
      </button>
    </div>
  );
}
