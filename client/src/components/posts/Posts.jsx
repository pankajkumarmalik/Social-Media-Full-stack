import "./posts.scss";
import { Post } from "../post/Post";
import { useQuery } from '@tanstack/react-query'
import { makeRequest } from "../../axios";


export const Posts = () => {

  const { isLoading, error, data } = useQuery({
    queryKey: ['posts'],
    queryFn: () => makeRequest.get("/posts").then((res) => {
        return res.data;
    })
});

console.log(data);
    
  return (
    <div className="posts">
        {error ? console.log(error) : (isLoading ? "Loading" : data.map((post)=>(
           <Post post={post} key={post.id}/>
        )))}
    </div>
  )
}
