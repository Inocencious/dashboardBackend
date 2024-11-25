import { googleLogout } from '@react-oauth/google';
import LogoutIcon from "../assets/svg/logout.svg";
import { useNavigate } from 'react-router-dom';
import { useData } from '../context/DataContext';

const Logout = () => {
  const navigate = useNavigate()
  const { setData } = useData();
  return (
    <div id="signOutButton">
      
          <a
            href=""
            onClick={(e) => {
              e.preventDefault();
              googleLogout()
              localStorage.clear()
              setData(null)
              navigate('/')
            }}
          >
            <img src={LogoutIcon}></img>
          </a>
    </div>
  );
};

export default Logout;
