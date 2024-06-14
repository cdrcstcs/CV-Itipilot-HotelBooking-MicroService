import "./navbar.scss";
import { Link } from "react-router-dom";
import { useNotificationStore } from "../../lib/notificationStore";
import { useUser } from "../../context/UserContext";
function Navbar() {
  const currentUser  = useUser();
  const fetch = useNotificationStore((state) => state.fetch);
  const number = useNotificationStore((state) => state.number);
  if(currentUser) fetch();
  return (
    <nav>
      <div className="left">
        <a href="/" className="logo">
          <span>Itipilot</span>
        </a>
      </div>
      <div className="right">
        <div className="user">
          <span>{currentUser.name}</span>
          <Link to="/profile" className="profile">
            {number > 0 && <div className="notification">{number}</div>}
            <span>Profile</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
