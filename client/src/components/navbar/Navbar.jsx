import "./navbar.scss";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import { Link } from "react-router-dom";
import { useContext } from "react";
import { DarkModeContext } from "../../context/darkModeContext";
import { AuthContext } from "../../context/authContext";

export const Navbar = () => {

    const {toggle, darkMode}= useContext(DarkModeContext);
    const {currentUser}= useContext(AuthContext);


  return (
    <div className="navbar">
        <div className="left">
            <Link to="/" style={{textDecoration: "none"}} >
                <span>PankajSocial</span>
            </Link>
            <HomeOutlinedIcon/>
            {darkMode ? <WbSunnyOutlinedIcon style={{cursor: "pointer"}} onClick= {toggle}/> :  <DarkModeOutlinedIcon style={{cursor: "pointer"}} onClick={toggle}/>}
            <GridViewOutlinedIcon/>

            <div className="search">
            <SearchOutlinedIcon/>
            <input type="text" placeholder="Search" />
            </div>
        </div>
        <div className="right">
            <Person2OutlinedIcon/>
            <EmailOutlinedIcon/>
            <NotificationsNoneOutlinedIcon/>
            <div className="user">
                <img src={currentUser.profilePic} />
                <span>{currentUser.name}</span>
            </div>

        </div>
    </div>
  )
}
