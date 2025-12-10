import React, { useState } from 'react';
// import './ColorSelector.css'; // Import the styling

// 1. Define the available colors
const COLORS: string[] = [
  '#FF5733', // Red-Orange
  '#33FF57', // Bright Green
  '#3357FF', // Blue
  '#FF33E9', // Magenta
  '#33FFF0', // Cyan
  '#FFC300', // Gold/Yellow
];

const ColorSelector: React.FC = () => {
  // 2. State to store the currently selected color.
  // Initialize it with the first color in the list.
  const [selectedColor, setSelectedColor] = useState<string>(COLORS[0]);

  // 3. Handler function to update the state when a button is clicked
  const handleColorClick = (color: string) => {
    setSelectedColor(color);
  };

  return (
    <div className="color-selector-container">
      {/* 4. Color Preview Box */}
      <div 
        className="color-preview-box"
        // Apply the selectedColor as the background
        style={{ backgroundColor: selectedColor }}
      >
        **Preview**
        <p>{selectedColor.toUpperCase()}</p>
      </div>

      {/* 5. Color Buttons */}
      <div className="color-buttons-panel">
        {COLORS.map((color) => (
          <button
            key={color}
            style={{ backgroundColor: color }}
            onClick={() => handleColorClick(color)}
            // Apply a special class if this button's color matches the selectedColor
            className={
              selectedColor === color ? 'color-button active' : 'color-button'
            }
            aria-label={`Select color ${color}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ColorSelector;