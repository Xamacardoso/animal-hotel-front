interface Props {
  onAdd: () => void;
}

export default function EmptyState({ onAdd }: Props) {
  return (
    <div className="empty-box">
      <h2>Nenhum animal de estimação adicionado</h2>
      <p>Comece adicionando seu primeiro animal para gerenciar suas informações aqui.</p>

      <button className="primary-btn" onClick={onAdd}>
        Adicionar seu primeiro animal
      </button>
    </div>
  );
}
