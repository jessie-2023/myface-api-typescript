import { useState, useEffect } from "react";  
import {UserModel} from "./models/userModel";
import './UsersPage.scss'

export default function UsersPage() {
    const [userList, setUserList] = useState<UserModel[]>([]); 
    
    useEffect(() => {
        fetch("http://localhost:3001/users")
            .then(response => response.json())
            .then(data => setUserList(data.results));
    }, []);
    
    if (userList.length === 0) {
        return <div>Waiting for data!</div>
        }
    
        return (
        <div className="card-container">
            {userList.map((user) => 
            <div className="user-container">
                <p>{user.username}</p>
                <p className="message">Lastest: {user.posts[user.posts.length-1].message}</p>
                <img src={user.profileImageUrl} />
                <div className="stats">
                    <p>Posts: {user.posts.length}</p>
                    <p>Likes: {user.likes.length}</p>
                    <p>Dislikes: {user.dislikes.length}</p>
                </div> 
            </div> 
            )}
        </div>
        );

}
