import moment from "moment/moment.js";
import {db} from "../connect.js";
import  Jwt  from "jsonwebtoken";

export const getPost = (req, res)=>{

    const userId= req.query.userId;
    
    const token=req.cookies.accessToken;

    if(!token) return res.status(401).json("Not logged in!");

    Jwt.verify(token, "secretKey", (err, userInfo)=>{
        if(err) return res.status(403).json("Token is not valid!");
        console.log("userInfo:", userInfo.id);



const q =
      userId !== "undefined"
        ? `SELECT DISTINCT p.*, u.id AS userId, name, profilePic FROM posts AS p JOIN users AS u ON (u.id = p.userId) WHERE p.userId = ? ORDER BY p.createdAt DESC`
        : `SELECT DISTINCT p.*, u.id AS userId, name, profilePic FROM posts AS p JOIN users AS u ON (u.id = p.userId) LEFT JOIN relationship AS r ON (u.id= r.followedId) WHERE r.followersId= ? OR p.userId =? ORDER BY p.createdAt DESC`;

    const values =
      userId !== "undefined" ? [userId] : [userInfo.id, userInfo.id];



        db.query(q, values, (err, data) => {
            if (err) return res.status(500).json(err);
            return res.status(200).json(data);
            
        })
       
        
    
    })
}



export const addPost = (req, res)=>{

    
    const token=req.cookies.accessToken;
    if(!token) return res.status(401).json("Not logged in!");

    Jwt.verify(token, "secretKey", (err, userInfo)=>{
        if(err) return res.status(403).json("Token is not valid!");

        const q= "INSERT INTO posts (`desc`, `img`, `userId`, `createdAt`) VALUES (?)";

        const values= [
            req.body.desc,
            req.body.img,
            userInfo.id,
            moment(Date.now()).format("YYYY-MM-DD HH:mm:ss")

        ]

    db.query(q, [values], (err, data)=>{
        if(err) return res.status(500).json(err);
        return res.status(200).json("Post has been created");
    })
    
    })
}