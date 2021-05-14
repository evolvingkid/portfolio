import evolvingkidLogo from "./evolvingkidLogo.png";
import './profile.css'

const Profile = () => {

    return (
        <div className="profile-tab">

            <div className="profile-tile">
                <img src={evolvingkidLogo} alt="evolvingkidLogo" className="profile-avatar" />
                <p className="profile-title"> Hi, I’m Mohammed Fayez </p>
                <p className="profile-MainTitle">
                    SOFTWARE DEVELOPER, FLUTTER, <br />
                    NODE JS, REACT JS, NEXT js
                </p>
                <p className="profile-subTitle"> my main tech stack is Flutter and node js </p>
                <button className="profile-btn">Contact</button>
            </div>

        </div>
    );


}

export default Profile;