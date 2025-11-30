interface Props {
  onClick: () => void;
}

export default function AddAnimalCard({ onClick }: Props) {
  return (
    <div className="add-card" onClick={onClick}>
      <div className="add-content">
        <span className="plus">+</span>
        <p>Adicionar Novo Animal</p>
      </div>
    </div>
  );
}
