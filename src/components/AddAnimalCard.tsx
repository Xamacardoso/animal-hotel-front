interface Props {
  onAdd: () => void;
}

export default function AddAnimalCard({ onAdd }: Props) {
  return (
    <div className="add-card" onClick={onAdd}>
      <div className="add-content">
        <span className="plus">+</span>
        <p>Adicionar Novo Animal</p>
      </div>
    </div>
  );
}
