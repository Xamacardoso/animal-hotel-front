import { useState } from "react";

interface Props {
  onDelete: () => void;
}

export default function OptionsMenu({ onDelete }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <div className="options-container" onClick={(e) => e.stopPropagation()}>
      <button className="dots" onClick={() => setOpen(!open)}>⋮</button>

      {open && (
        <div className="options-menu">
          <button onClick={onDelete}>Excluir</button>
        </div>
      )}
    </div>
  );
}
