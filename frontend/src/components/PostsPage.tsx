import {useState, useEffect} from "react";
import {PostModel} from "./models/postModel";
import './PostsPage.scss'
import moment from "moment";
// import fetch from 'node-fetch';

export default function PostsPage() {
    const [postList, setPostList] = useState<PostModel[]>([]);

    useEffect(() => 
        {
            fetch("http://localhost:3001/posts")
                .then(response => response.json())
                .then(data => setPostList((data as { results: PostModel[] }).results))
        }, 
        []
    );

    if (postList.length === 0) 
    {
        return <div>Waiting for data!</div>
    }
    else 
    {
        return (<body>
            <div className="card-container">
                {postList.map((post) => 
                <div className="post-container">
                    <img src={post.imageUrl} alt="post image"/>
                    <p className="message">{post.message}</p> 
                    <div className="text-container">
                        <p className="timestamp">{moment(post.createdAt).format('MMMM Do YYYY, h:mm:ss a')}</p>
                        <p className="username">Posted By: {post.postedBy.username}</p> 
                    </div>
                    <div className="stats">                    
                        <p className="likeButton">Likes: {post.likedBy.length}</p>
                        <p className="dislikeButton">Dislikes: {post.dislikedBy.length}</p>    
                    </div>
                </div>)
            }</div>
        </body>);
    }
}      





