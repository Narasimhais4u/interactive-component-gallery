import React, { useState } from 'react';


// Define the initial color state (a light blue/cyan)
const INITIAL_COLOR = '#A3D2F7';

const ColorPickerCard: React.FC = () => {
  // 1. State to track the card's background color
  const [cardColor, setCardColor] = useState<string>(INITIAL_COLOR);

  // 2. Function to handle color change from the picker
  const handleColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // The event.target.value contains the new color hex code
    setCardColor(event.target.value);
  };

  return (
    // 3. Apply the state-controlled color as an inline style
    <div className="color-picker-card" style={{ backgroundColor: cardColor }}>
      <h2>🎨 Dynamic Color Card</h2>
      
      <p className="current-color-display">
        Current Background Color: **{cardColor.toUpperCase()}**
      </p>

      {/* --- Color Picker Input --- */}
      <div className="picker-control">
        <label htmlFor="color-input">Choose a new color:</label>
        <input
          id="color-input"
          type="color"
          value={cardColor} // Controlled component: value is set by state
          onChange={handleColorChange} // Update state on change
        />
      </div>

      <div className="card-content">
        <p>
          Use the color picker above to instantly change the background of this card!
        </p>
      </div>
    </div>
  );
};

export default ColorPickerCard;