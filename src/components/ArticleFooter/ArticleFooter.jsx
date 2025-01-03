import React from 'react'
import fb_icon from '../../assets/fb_icon.svg'
import tweet_icon from '../../assets/tweet_icon.svg'
import ln_icon from '../../assets/linkedin_icon.svg'
import pin_icon from '../../assets/pinterest_icon.svg'
import whapp_icon from '../../assets/whatsapp_icon.svg'
import tel_icon from '../../assets/telegram_icon.svg'

import './ArticleFooter.css'

function ArticleFooter() {
  return (
   <>
   <div className="article-main">
    <div className='article-heading'>
        Like this article?
    </div>
    <div className='article-social-media'>
        <div className='article-social-media-row1'>
            <div className='article-facebook'>
                <div className='facebook-logo-text'>
                    <img src={fb_icon} alt="" />
                    <p>Share on Facebook</p>
                </div>
            </div>
            <div className='article-twitter'>
                <div className="twitter-logo-text">
                    <img src={tweet_icon} alt="" />
                    <p>Share on Twitter</p>
                </div>
            </div>
            <div className='article-linkedin'>
                <div className='linkedin-logo-text' >
                    <img src={ln_icon} alt="" />
                    <p>Share on Linkedin</p>
                </div>
            </div>
        </div>
        <div className='article-social-media-row2'>
            <div className='article-pinterest'>
                <div className='pinterest-logo-text'>
                    <img src={pin_icon} alt="" />
                    <p>Share on Pinterest</p>
                </div>
            </div>
            <div className='article-whatsapp'>
                <div className='whatsapp-logo-text'>
                    <img src={whapp_icon} alt="" />
                    <p>Share on WhatsApp</p>
                </div>
            </div>
            <div className='article-telegram'>
                <div className="telegram-logo-text">
                    <img src={tel_icon} alt="" />
                    <p>Share on Telegram</p>
                </div>

            </div>
        </div>
    </div>
    <div className='article-divider'>
        <div className="article-divider1"></div>
        <div className='article-admin'>
            <img src="" alt="" />
            <p>Admin</p>
        </div>
        <div className="article-divider1"></div>
        <div className="article-divider1"></div>
    </div>
    <div className='article-comment'>
        <p>Leave a Comment</p>
        <p>Your email address will not be published. Required fields are marked * </p>
        <input type="text" placeholder='Type here..' />
    </div>
    <div className='article-credentials'>
        <input type="text" placeholder='Name*' />
        <input type="text" placeholder='Email*' />
        <input type="text" placeholder='Website' />
    </div>
    <div className='article-save-and-button'>
        <div className="article-checkbox-and-save">
        <input type="checkbox" />
        <p> Save my name, email, and website in this browser for the next time I comment.</p>
        </div>
        <div className='article-button'>
            <button>Post Comment</button>
        </div>
    </div>
   </div>
   </>
  )
}

export default ArticleFooter
