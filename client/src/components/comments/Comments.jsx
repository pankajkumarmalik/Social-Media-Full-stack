import { useContext } from "react"
import "./comments.scss"
import { AuthContext } from "../../context/authContext"
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';

export const Comments = () => {

    const {currentUser} = useContext(AuthContext);

    //Temp
    const comments = [
        {
            id: 1,
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam ipsam nam rem corrupti, necessitatibus facilis.",
            name: "Joy Roy",
            userId: 1,
            profilePic:"https://images.pexels.com/photos/1615776/pexels-photo-1615776.jpeg"
        },
        {
            id: 2,
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam ipsam nam rem corrupti, necessitatibus facilis.",
            name: "Joy Roy",
            userId: 2,
            profilePic:"https://images.pexels.com/photos/1615776/pexels-photo-1615776.jpeg"
        },
        {
            id: 3,
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam ipsam nam rem corrupti, necessitatibus facilis.",
            name: "Joy Roy",
            userId: 3,
            profilePic:"https://images.pexels.com/photos/1615776/pexels-photo-1615776.jpeg"
        }
    ]
  return (
    <div className="comments">
        <div className="write">
            <img src={currentUser.profilePic} alt="" />
            <input type="text" placeholder="Write your commeny" />
            <button><SendOutlinedIcon/></button>
        </div>
        {comments.map((comment)=>(
            <div className="comment">
                <img src={comment.profilePic} alt="" />
                <div className="info">
                    <span>{comment.name}</span>
                    <p>{comment.desc}</p>
                </div>
                <span className="date">1 hour</span>
            </div>
        ))}

    </div>
  )
}
