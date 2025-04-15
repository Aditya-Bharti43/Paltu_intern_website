import React, { useState } from "react";
import fb_icon from "../../assets/fb_icon.svg";
import tweet_icon from "../../assets/tweet_icon.svg";
import ln_icon from "../../assets/linkedin_icon.svg";
import pin_icon from "../../assets/pinterest_icon.svg";
import whapp_icon from "../../assets/whatsapp_icon.svg";
import tel_icon from "../../assets/telegram_icon.svg";
import admin_icon from '../../assets/admin_user_icon.png'
import Footer from "../Footer/Footer";
import Walkingdog from "../WalkingDog/Walkingdog";
import axios from "axios";


import "./ArticleFooter.css";

function ArticleFooter() {

  const [commentData, setCommentData] = useState({
    username: "",
    email: "",
    website: "",
    comment: "",
  });

  const [comments, setComments] = useState([]);
  const [showComments, setShowComments] = useState(false);

  const handleFetchComments = async () => {
    if (!showComments) {
      try {
        const res = await axios.get("http://localhost:4000/api/v1/blog/getComments");
        setComments(res.data.comments);
        setShowComments(true);
      } catch (err) {
        console.error("Error fetching comments:", err);
      }
    } else {
      setShowComments(false);
    }
  };


  const [responseMsg, setResponseMsg] = useState("");

  const handleChange = (e) => {
    setCommentData({ ...commentData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      const res = await axios.post("http://localhost:4000/api/v1/blog/comments", commentData);
      setResponseMsg("Comment posted successfully!");
      setCommentData({ username: "", email: "", website: "", comment: "" }); // Clear fields
    } catch (err) {
      console.error(err);
      setResponseMsg("Failed to post comment.");
    }
  };

  return (
    <>
      <div className="article-main">
        <div className="article-heading">Like this article?</div>
        <div className="article-social-media">
          <div className="article-social-media-row">
            <div className="article-icon article-facebook">
              <img src={fb_icon} alt="Facebook" />
              <p>Share on Facebook</p>
            </div>
            <div className="article-icon article-twitter">
              <img src={tweet_icon} alt="Twitter" />
              <p>Share on Twitter</p>
            </div>
            <div className="article-icon article-linkedin">
              <img src={ln_icon} alt="LinkedIn" />
              <p>Share on LinkedIn</p>
            </div>
          </div>
          <div className="article-social-media-row">
            <div className="article-icon article-pinterest">
              <img src={pin_icon} alt="Pinterest" />
              <p>Share on Pinterest</p>
            </div>
            <div className="article-icon article-whatsapp">
              <img src={whapp_icon} alt="WhatsApp" />
              <p>Share on WhatsApp</p>
            </div>
            <div className="article-icon article-telegram">
              <img src={tel_icon} alt="Telegram" />
              <p>Share on Telegram</p>
            </div>
          </div>
        </div>
        <div className="article-divider-admin">
          <div className="article-divider"></div>
          <div className="article-admin">
            <img src={admin_icon} alt="" />
            <p>Admin</p>
          </div>
          <div class="article-divider"></div>
          <div class="article-divider"></div>
        </div>
        <div className="article-comment">
          <p className="comment-para1">Leave a Comment</p>
          <p className="comment-para2">Your email address will not be published. Required fields are marked *</p>
          <input
            type="text"
            placeholder="Type here.."
            name="comment"
            value={commentData.comment}
            onChange={handleChange}
          />
        </div>
        <div className="article-credentials">
          <input
            className="article-name"
            type="text"
            placeholder="Name*"
            name="username"
            value={commentData.username}
            onChange={handleChange}
          />

          <input
            className="article-email"
            type="text"
            placeholder="Email*"
            name="email"
            value={commentData.email}
            onChange={handleChange}
          />
          <input
            className="article-website"
            type="text"
            placeholder="Website"
            name="website"
            value={commentData.website}
            onChange={handleChange}
          />

        </div>
        <div className="article-save-and-button">
          <div className="article-checkbx-content">
            <input type="checkbox" />
            <p>Save my name, email, and website in this browser for the next time I comment.</p>
          </div>
          <div className="article-button-row">
            <button onClick={handleSubmit}>Post Comment</button>
            <button onClick={handleFetchComments}>{showComments ? "Hide Comments" : "View Comments"}</button>
          </div>

        </div>
        {responseMsg && <p>{responseMsg}</p>}

        {showComments && comments.length > 0 && (
          <div className="article-comments-table">
            <table>
              <thead>
                <tr>
                  <th>Username</th>
                  <th>Email</th>
                  <th>Website</th>
                  <th>Comment</th>
                </tr>
              </thead>
              <tbody>
                {comments.map((item, index) => (
                  <tr key={index}>
                    <td>{item.username}</td>
                    <td>{item.email}</td>
                    <td>{item.website || "-"}</td>
                    <td>{item.comment}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

      </div>
      <Footer />
      <Walkingdog />
    </>
  );
}

export default ArticleFooter;
