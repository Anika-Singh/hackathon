import './SocialCard.css';
import Review from './Review';
// import austin from './austin.jpeg';

const SocialCard = ({ userData }) => {
    return (
        <div className="card" style={{
            backgroundColor: 'white'}}>
            <div className="card__title">{userData.project_name}</div>
            <div className="card__body">
                {/* <Location location={userData.location}/> */}
                <Review userData={userData}/>
            </div>

        </div>
    )
};

export default SocialCard;