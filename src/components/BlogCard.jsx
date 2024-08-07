import React from 'react'

const BlogCard = ({blog}) => {
    // const blog = {
    //     author:
    //         "shubham@gmail.com",
    //     blog:
    //         "Jai ho krsna kanhaiya lal ki",
    //     date:
    //         "Wed Aug 07 2024 15:09:51 GMT+0530 (India Standard Time)",
    //     imgUrl:
    //         "https://www.shutterstock.com/image-vector/indiandahi-handi-festival-happy-shree-260nw-2492416663.jpg",
    //     title:
    //         "Happy Janmastami"
    // }
    return (
        <div className='blog-card'>
            <img src={blog['imgUrl'] ? blog['imgUrl'] : 'https://img.freepik.com/premium-vector/lord-krishna-janmashtami-festival-banner-design-with-flute-peacock_551880-1654.jpg'} alt="" />
            <h2>{blog['title']}</h2>
            <p>{blog['blog']}</p>
            <div className='date-time'>
                <span></span>
                <span>
                    <p>~ {blog['date'].slice(0, 25)}</p>
                    <span>By: {blog['author']}</span>
                </span>
            </div>
        </div>
    )
}

export default BlogCard