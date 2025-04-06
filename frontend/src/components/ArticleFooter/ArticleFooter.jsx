import React from "react";
import fb_icon from "../../assets/fb_icon.svg";
import tweet_icon from "../../assets/tweet_icon.svg";
import ln_icon from "../../assets/linkedin_icon.svg";
import pin_icon from "../../assets/pinterest_icon.svg";
import whapp_icon from "../../assets/whatsapp_icon.svg";
import tel_icon from "../../assets/telegram_icon.svg";
import admin_icon from '../../assets/admin_user_icon.png'
import Footer from "../Footer/Footer";
import Walkingdog from "../WalkingDog/Walkingdog";


import "./ArticleFooter.css";

function ArticleFooter() {
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
            <input type="text" placeholder="Type here.." />
        </div>
        <div className="article-credentials">
            <input className="article-name" type="text" placeholder="Name*"/>
            <input className="article-email" type="text" placeholder="Email*" />
            <input className="article-website"type="text" placeholder="Website"/>
        </div>
        <div className="article-save-and-button">
            <div className="article-checkbx-content">
                <input type="checkbox" />
                <p>Save my name, email, and website in this browser for the next time I comment.</p>
            </div>
            <div className="article-button">
                <button>Post Comment</button>
            </div>
        </div>
      </div>
      <Footer/>
      <Walkingdog/>
    </>
  );
}

export default ArticleFooter;
