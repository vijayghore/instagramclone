import React from 'react'
import '../styles/Post.css'
import dp from '../images/dp.png'
import post1 from '../images/post1.jpg'

const Post = (props) => {

    let username = 'javascript.js';
    return (
        <div className='post'>
            <div className="user">
                <div className="userpicandname">
                    <div className="userpic">
                        <img src={dp} alt="" className="dp" />
                    </div>
                    <div className="username">{username}</div>
                </div>
                <div className="more">...</div>
            </div>

            <img src={props.address} alt="" />

            <div className="action">
                <div className="post-action">
                    <div className="action-btn like">
                        <i class="fa-regular fa-heart"></i>
                    </div>
                    <div className="action-btn comment">
                        <i class="fa-regular fa-comment"></i>
                    </div>
                    <div className="action-btn share">
                        <i class="fa-regular fa-paper-plane"></i>
                    </div>

                </div>
                <div className="action-btn bookmark">
                    <i class="fa-regular fa-bookmark"></i>
                </div>

            </div>

            <div className='other-info'>
            <div className="like-counts">26 likes</div>

            <div className="caption"><span className='user-caption'>{username} </span>This is caption</div>

            <div className="all-comments">View all 409 comments</div>

            <div className="upload-time">3 hours ago</div>

            <div className="comment-self">
                <i class="action-btn fa-regular fa-face-smile-beam"></i>
                <input type="text" className='add-comment' placeholder='Add a comment...'/>
                <div className='post-btn'>Post</div>
            </div>
            </div>

        </div>
    )
}

export default Post
