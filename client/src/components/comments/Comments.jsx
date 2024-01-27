import { useContext, useState } from "react"
import "./comments.scss"
import { AuthContext } from "../../context/authContext"
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import { useQuery, useQueryClient, useMutation } from '@tanstack/react-query';
import { makeRequest } from "../../axios";
import moment from "moment";

export const Comments = ({postId}) => {

    const [desc, setDesc] =useState("");
    const [file, setFile] =useState("");

    const {currentUser} = useContext(AuthContext);

    const { isLoading, error, data } = useQuery({
        queryKey: ["comments"],
        queryFn: () => makeRequest.get("/comments?postId="+postId).then((res) => {
            return res.data;
        })
    });

    const queryClient = useQueryClient();

  const mutation = useMutation({
    
    mutationFn: (newComment) => makeRequest.post("/comments", newComment),

    onSuccess: () => {
      // utaInvalidate and refetch
      queryClient.invalidateQueries(["comments"]);
    },
  });

  const handleClick = async (e) => {
    e.preventDefault();
    
    mutation.mutate({ desc, postId});
    setDesc("");
    setFile(null);
  };

    
  return (
    <div className="comments">
        <div className="write">
            <img src={currentUser.profilePic} alt="" />
            <input type="text" placeholder="Write your comment" value={desc} onChange={(e)=>setDesc(e.target.value)}/>
            <button onClick={handleClick}><SendOutlinedIcon/></button>
        </div>
        {isLoading? "loading" : data.map((comment)=>(
            <div className="comment" key={comment.id} >
                <img src={comment.profilePic} alt="" />
                <div className="info">
                    <span>{comment.name}</span>
                    <p>{comment.desc}</p>
                </div>
                <span className="date">{moment(comment.createdAt).fromNow()}</span>
            </div>
        ))}

    </div>
  )
}
