type TypeButtonProps = {
  type: string,
  isSelected: boolean,
  onClick: (type: string) => void,
}
export default function TypeButton({ type, isSelected, onClick }: TypeButtonProps) {

  return (
    <button
      className={`filter-btn ${type.toLowerCase()} ${isSelected ? 'selected' : ''}`}
      onClick={() => onClick(type)}
    >
      {type}
    </button>
  );
}; 