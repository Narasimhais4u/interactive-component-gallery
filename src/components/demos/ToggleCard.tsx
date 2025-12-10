import React, { useState } from 'react';


// Define the component's props (in this case, none are needed, but it's good practice)
interface ToggleCardProps {}

const ToggleCard: React.FC<ToggleCardProps> = () => {
  // 1. State to track the toggle status (true = ON, false = OFF)
  const [isOn, setIsOn] = useState(false);

  // 2. Function to handle the state change
  const handleToggle = () => {
    setIsOn(!isOn);
  };

  // 3. Determine the CSS class based on the state
  const cardClass = isOn ? 'toggle-card card-on' : 'toggle-card card-off';

  // 4. Determine the status text
  const statusText = isOn ? 'ON' : 'OFF';

  return (
    <div className={cardClass}>
      <h2>Card State Control</h2>
      <p>
        The current status is: **{statusText}**
      </p>

      {/* --- Toggle Switch Implementation --- */}
      <div className="toggle-container">
        <label className="switch">
          <input
            type="checkbox"
            checked={isOn}
            onChange={handleToggle}
          />
          <span className="slider round"></span>
        </label>
        <span className="switch-label">{statusText}</span>
      </div>

      <div className="card-content">
        <p>
          This card's background color changes when the switch is set to **{statusText}**.
        </p>
      </div>
    </div>
  );
};

export default ToggleCard;