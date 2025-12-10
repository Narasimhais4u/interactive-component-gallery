import React, { useState } from 'react';

// 1. Define the TypeScript interface for the User data structure
interface User {
  id: number;
  name: string;
  title: string;
  email: string;
  phone: string;
  address: {
    street: string;
    city: string;
    zipcode: string;
  };
}
  
// 2. Define the props for the component
interface UserProfileCardProps {
  user: User;
}

// 3. The Functional Component
const UserProfileCard: React.FC<UserProfileCardProps> = ({ user }) => {
  // State to track whether the card is expanded or not
  const [isExpanded, setIsExpanded] = useState(false);

  // Function to toggle the expanded state
  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="profile-card">
      {/* --- Basic Profile Header --- */}
      <div className="profile-header">
        <h2>{user.name}</h2>
        <p className="title">{user.title}</p>
        <button onClick={toggleExpand}>
          {/* Button text changes based on the state */}
          {isExpanded ? 'Show Less' : 'Show More'}
        </button>
      </div>

      {/* --- Full Details Section (Conditionally Rendered) --- */}
      {isExpanded && (
        <div className="profile-details">
          <h3>Contact Information</h3>
          <p>
            **Email:** {user.email}
          </p>
          <p>
            **Phone:** {user.phone}
          </p>

          <h3>Address</h3>
          <p>
            {user.address.street}
            <br />
            {user.address.city}, {user.address.zipcode}
          </p>
        </div>
      )}
    </div>
  );
};

export default UserProfileCard;