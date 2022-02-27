
const Review = ({ userData }) => {
    return <div className="userData">
        <p>Address: {userData.address}</p>
        <p>Zipcode: {userData.zip_code}</p>
        <p>Total Units: {userData.total_units}</p>
        <p>Unit Types: {userData.unit_type}</p>
        <p>Phone Number: {userData.property_manager_phone_number}</p>
      </div>;
  };
  
  export default Review;