import { useContext } from "react";
import "./stories.scss";
import { AuthContext } from "../../context/authContext";

export const Stories = () => {

    const {currentUser} = useContext(AuthContext);

    //Temp
    const stories= [

        {
            id:1,
            name: "Sonia Dey",
            img:"https://images.pexels.com/photos/19589485/pexels-photo-19589485/free-photo-of-a-woman-sitting-on-a-chair-in-front-of-a-restaurant.jpeg?auto=compress&cs=tinysrgb&w=600"
        },
        {
            id:2,
            name: "Sonia Dey",
            img:"https://images.pexels.com/photos/19589485/pexels-photo-19589485/free-photo-of-a-woman-sitting-on-a-chair-in-front-of-a-restaurant.jpeg?auto=compress&cs=tinysrgb&w=600"
        },
        {
            id:3,
            name: "Sonia Dey",
            img:"https://images.pexels.com/photos/19589485/pexels-photo-19589485/free-photo-of-a-woman-sitting-on-a-chair-in-front-of-a-restaurant.jpeg?auto=compress&cs=tinysrgb&w=600"
        },
        {
            id:4,
            name: "Sonia Dey",
            img:"https://images.pexels.com/photos/19589485/pexels-photo-19589485/free-photo-of-a-woman-sitting-on-a-chair-in-front-of-a-restaurant.jpeg?auto=compress&cs=tinysrgb&w=600"
        }

    ]

    
  return (
    <div className="stories">
        <div className="story">
                <img src={currentUser.profilePic} alt="" />
                <span>{currentUser.name}</span>
                <button>+</button>
            </div>
        {stories.map(story=>(
            <div className="story" key={story.id}>
                <img src={story.img} alt="" />
                <span>{story.name}</span>
            </div>
        ))}
    </div>

  )
}
