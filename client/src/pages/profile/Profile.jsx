import "./profile.scss";
import FacebookTwoToneIcon from '@mui/icons-material/FacebookTwoTone';
import LinnkedIIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import {Posts} from "../../components/posts/Posts"

export const Profile = () => {
  return (
    <div className="profile">
      <div className="images">
        <img src="https://images.pexels.com/photos/1477495/pexels-photo-1477495.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="cover"/>

        <img src="https://images.pexels.com/photos/3657429/pexels-photo-3657429.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="profilePic" />
      </div>
      <div className="profileContainer">
        <div className="uInfo">
          <div className="left">
              <a href="/">
                <FacebookTwoToneIcon fontSize="large"/>
              </a>
              <a href="/">
                <InstagramIcon fontSize="large"/>
              </a>
              <a href="/">
                <TwitterIcon fontSize="large"/>
              </a>
              <a href="/">
                <LinnkedIIcon fontSize="large"/>
              </a>
              {/* <a href="https://www.facebook.com/">
                <PinterestIcon fontSize="large"/>
              </a> */}
          </div>
          <div className="center">
                <span>Aindrila Mitra</span>
                <div className="info">
                  <div className="item">
                    <FmdGoodOutlinedIcon/>
                    <span>USA</span>
                  </div>
                  <div className="item">
                    <LanguageOutlinedIcon/>
                    <span>pankaj.abc</span>
                  </div>
                </div>
                <button>Follow</button>
          </div>
          <div className="right">
              <EmailOutlinedIcon/>
              <MoreVertOutlinedIcon/>
          </div>
        </div>
        <Posts/>
      </div>
    </div>
  )
}
