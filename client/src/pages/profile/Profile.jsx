import "./profile.scss";
import FacebookTwoToneIcon from '@mui/icons-material/FacebookTwoTone';
import LinnkedIIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import {Posts} from "../../components/posts/Posts";
import { useQuery, useQueryClient, useMutation} from "@tanstack/react-query";
import { makeRequest } from "../../axios";
import { useLocation } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
import { useContext } from "react";

export const Profile = () => {

  const userId= parseInt(useLocation().pathname.split("/")[2]);
   

  const {currentUser} = useContext(AuthContext);

  const {isLoading: rIsloading, data: relationshipData } = useQuery({
    queryKey: ['relationship'],
    queryFn: () => makeRequest.get("/relationships?followedId="+ userId).then((res) => {
        return res.data;
    })
});

console.log(relationshipData)

const { isLoading, error, data } = useQuery({
  queryKey: ['user'],
  queryFn: () => makeRequest.get("/users/find/"+userId).then((res) => {
      return res.data;
  })
});

console.log(data);

const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (following) => {
      if (following) return makeRequest.delete("/relationships?userId=" + userId);
      return makeRequest.post("/relationships", { userId });
    },
    

    onSuccess: () => {
      // utaInvalidate and refetch
      queryClient.invalidateQueries(["relationship"]);
    },
  });

  const handleFollow = () => {
    mutation.mutate(relationshipData.includes(currentUser.id));
  };
  


return (
    <div className="profile">
      {isLoading ? "loading" :<>
      <div className="images">
        <img src={data.coverPic} alt="" className="cover"/>

        <img src={data.profilePic} alt="" className="profilePic" />
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
              
          </div>
          <div className="center">
           
              <span>{data.name}</span>
                <div className="info">
                  <div className="item">
                    <FmdGoodOutlinedIcon/>
                    <span>{data.city}</span>
                  </div>
                  <div className="item">
                    <LanguageOutlinedIcon/>
                    <span>{data.website}</span>
                  </div>
                </div>

                {rIsloading? "loading" : userId == currentUser.id? <button>Update</button> : <button onClick={handleFollow}>{relationshipData.includes(currentUser.id)? "Following" : "Follow" }</button> }
                
           
                
          </div>
          <div className="right">
              <EmailOutlinedIcon/>
              <MoreVertOutlinedIcon/>
          </div>
        </div>
        <Posts userId ={userId}/>
      </div>
      
      </>}
        
    </div>
  )
}
