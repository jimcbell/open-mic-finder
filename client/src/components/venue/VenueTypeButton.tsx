type VenueTypeButtonProps = {
    venueType: string,
    isSelected: boolean,
    onClick: (type: string) => void,
}
export default function VenueTypeButton({ venueType, isSelected, onClick } : VenueTypeButtonProps) {
    const baseClasses = 'px-6 py-3 rounded-full text-lg font-semibold transition-all duration-300 ease-in-out shadow-md';
    const selectedClasses = 'bg-blue-600 text-white border border-blue-700';
    const unselectedClasses = 'bg-gray-700 text-gray-300 border border-gray-600 hover:bg-gray-600 hover:text-white';
  
    return (
      <button
        className={`${baseClasses} ${isSelected ? selectedClasses : unselectedClasses}`}
        onClick={() => onClick(venueType)}
      >
        {venueType}
      </button>
    );
  }; 