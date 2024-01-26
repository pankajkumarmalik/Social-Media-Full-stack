import moment from "moment/moment.js";
import {db} from "../connect.js";
import  Jwt  from "jsonwebtoken";

export const getPost = (req, res)=>{
    const token=req.cookies.accessToken;
    if(!token) return res.status(401).json("Not logged in!");

    Jwt.verify(token, "secretKey", (err, userInfo)=>{
        if(err) return res.status(403).json("Token is not valid!");

        const q= `SELECT p.*, u.id AS userId, name, profilePic FROM posts AS p JOIN users AS u ON (u.id = p.userId) LEFT JOIN relationship as r ON (p.userId = r.followedId) WHERE r.followersId= ? OR p.userId= ? ORDER BY p.createdAt DESC`;

    db.query(q, [userInfo.id, userInfo.id], (err, data)=>{
        if(err) return res.status(500).json(err);
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