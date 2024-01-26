import "./post.scss";
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import TextsmsOutlinedIcon from '@mui/icons-material/TextsmsOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import { Link } from "react-router-dom";
import { Comments } from "../comments/Comments";
import { useState } from "react";

export const Post = ({post}) => {

    const [commentOpen, setCommentOpen]= useState(false);
    //Temp
    const liked= false;

  return (
    <div className="post">
        <div className="container">
            <div className="user">
                <div className="userInfo">
                    <a href={`/profile/${post.userId}`}><img src={post.profilePic} alt="" /></a>
                    <div className="details">
                        <Link to={`/profile/${post.userId}`} style={{textDecoration:"none", color: "inherit"}}>
                        <span className="name">{post.name}</span>
                        </Link>
                        <span className="date"> 1 min ago</span>
                    </div>
                </div>
                <MoreHorizOutlinedIcon/>
            </div>
            <div className="content">
                <p>{post.desc}</p>
                <img src={post.img} alt="" />
            </div>
            <div className="info">
                <div className="item">
                    {liked? <FavoriteOutlinedIcon/> : <FavoriteBorderOutlinedIcon/>}
                    15 likes
                </div>
                <div className="item" onClick={()=>setCommentOpen(!commentOpen)}>
                    <TextsmsOutlinedIcon/>
                    15 comments
                </div>
                <div className="item">
                    <ShareOutlinedIcon/>
                    15 shares
                </div>
            </div>
            {commentOpen && <Comments/>}
        </div>
    </div>
  )
}
