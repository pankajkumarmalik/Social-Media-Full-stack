import  express  from "express";
import userRoutes from "../api/routes/users.js";
import postRoutes from "../api/routes/posts.js";
import likeRoutes from "../api/routes/likes.js";
import commentRoutes from "../api/routes/comments.js";
import authRoutes from "../api/routes/auth.js";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();

app.listen(8800, ()=>{
    console.log("API is working");
})

//middlewares

app.use((req, res, next)=>{
    res.header("Access-Control-Allow-Credentials", true)
    next()
})

app.use(express.json());
app.use(cors({
    origin: "http://localhost:3000",
}));
app.use(cookieParser());

app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/posts", postRoutes);
app.use("/api/likes", likeRoutes);
app.use("/api/comments", commentRoutes);