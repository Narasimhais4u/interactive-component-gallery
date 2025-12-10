import UserProfileCard from '../../components/demos/UserProfileCard';


const mockUser = {
  id: 1,
  name: 'Alex Johnson',
  title: 'Senior Software Engineer',
  email: 'alex.j@example.com',
  phone: '555-123-4567',
  address: {
    street: '123 React Lane',
    city: 'Codeville',
    zipcode: '90210',
  },
};

function CardDemo() {
  return (   
    <div className="card-item">
      <h3>User Profiles</h3>
      <UserProfileCard user={mockUser} />
      {/* You can add more cards here... */}
    </div>
    
  );
}

export default CardDemo;