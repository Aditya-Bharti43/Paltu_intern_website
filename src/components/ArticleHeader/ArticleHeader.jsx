import React from 'react'
import './ArticleHeader.css'
function ArticleHeader() {
  return (
    <div className='article-header-main'>
        <div className='article-header-heading'>
            UNCATEGORIZED
        </div>
        <div className='article-header-divider-content'>
            <div className='article-header-divider'></div>
            <div className='article-header-content'>
                <div className='article-header-admin'>
                    <img src="" alt="" />
                    <p>Admin</p>
                </div>
                <div className='article-header-date'>
                    <img src="" alt="" />
                    <p>July 4, 2023</p>
                </div>
                <div className='article-header-comment'>
                    <img src="" alt="" />
                    <p>No Comments</p>
                </div>
            </div>
            <div className='article-header-divider'></div>
        </div>
      
    </div>
  )
}

export default ArticleHeader
