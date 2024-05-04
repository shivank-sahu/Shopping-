import React, { useState } from 'react'
import blogList from '../utilis/blogdata'
import { useParams } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import Tag from '../shop/Tag';
import PopularPost from '../shop/PopularPost';

const socialList = [
    {
        iconName: 'icofont-facebook',
        siteLink: '#',
        className: 'facebook',
    },
    {
        iconName: 'icofont-twitter',
        siteLink: '#',
        className: 'twitter',
    },
    {
        iconName: 'icofont-linkedin',
        siteLink: '#',
        className: 'linkedin',
    },
    {
        iconName: 'icofont-instagram',
        siteLink: '#',
        className: 'instagram',
    },
    {
        iconName: 'icofont-pinterest',
        siteLink: '#',
        className: 'pinterest',
    },
]


const SingleBlog = () => {
    const [blog, setBlog] = useState(blogList);
    const { id } = useParams()
    const result = blog.filter((b) => b.id === Number(id));
    console.log(result[0])
  return (
      <div>
          <PageHeader title={"Single Blog Paghed"} curPage={"Blog / Blog Details"}/>
          <div className="blog-section blog-single padding-tb section-bg">
              <div className="container">
                  <div className="row justify-content-center">
                      <div className="col-lg-8 col-12">
                          <article>
                              <div className="section-wrapper">
                                  <div className="row row-cols-1 justify-content-center g-4">
                                      <div className="col">
                                          <div className="post-item style-2">
                                              <div className="post-inner">
                                                  {
                                                      result.map((item) => (
                                                          
                                                          <div key={item.id}>
                                                              <div className="post-thumb">
                                                                  <img src={item.imgUrl} className='w-100' alt=""/>
                                                              </div>

                                                              <div className="post-content">
                                                                  
                                                             
                                                                  <h3>{item.title}</h3>
                                                                  <div className="meta-post">
                                                                    
                                                                      <ul className="lab-ul">
                                                                          {
                                                                              item.metaList.map((val, i) => (
                                                                                  <li key={i}><i className={val.iconName}></i>{val.text}</li>
                                                                              ))
                                                                          }
                                                                 </ul>
                                                                  </div>
                                                                  <p>
                                                                      
                                                                 
                                                                 
                                                                      pan made history by becoming only the fifth country to successfully complete a soft landing on the moon with its
                                                                      'Moon Sniper' robotic explorer, but the mission may end prematurely because the spacecraft's solar cell is not
                                                                      generating electricity, CNN reported, citing the Japan Aerospace Exploration Agency. </p>
                                                                  
                                                                  <blockquote>
                                                                      <p>
                                                                          desc: 'Pluoresnts customize prancing apcentered customer service anding ands asing straelg Interacvely cordinate performe',

                                                                      </p>

                                                                 
                                                                      <cite>
                                                                          <a href="#">...Melissa
                                                                          Hunter
                                                                          </a>
                                                                      </cite>
                                                                  </blockquote>
                                                                  <p>
                                                                      The lander is currently running on restricted battery power, which is expected to last several hours, while the JAXA team analyses the data to discover the reason of the solar cell issue and the lander's next actions. According to JAXA authorities, the solar cell issue might be caused by the spacecraft not pointing in the proper direction.
                                                                  </p>
                                                                  <img src="/src/assets/images/blog/single/01.jpg" alt="" />
                                                                  <p>The lander is currently running on restricted battery power, which is expected to last several hours, while the JAXA team analyses the data to discover the reason of the solar cell issue and the lander's next actions. According to JAXA authorities, the solar cell issue might be caused by the spacecraft not pointing in the proper direction.</p>
                                                               
                                                                  <div className="video-thumb">
                                                                      <img src="/src/assets/images/blog/single/02.jpg" alt="" />
                                                                      <a href="https://www.youtube.com/watch?v=PGuKjkdGrEI" className="video-button popup">
                                                                          <i className="icofont-ui-play"></i>
                                                                      </a>
                                                                  </div>

                                                                  <p>
                                                                      The lander is currently running on restricted battery power, which is expected to last several hours, while the JAXA team analyses the data to discover the reason of the solar cell issue and the lander's next actions. According to JAXA authorities, the solar cell issue might be caused by the spacecraft not pointing in the proper direction.

                                                                  </p>
                                                                  <div className="tags-section">
                                                                      <ul className="tags lab-ul">
                                                                          <li>
                                                                              <a href="">Agency</a>
                                                                          </li>
                                                                          <li>
                                                                              <a href="">Business</a>
                                                                          </li>
                                                                          <li>
                                                                              <a href="">Personal</a>
                                                                          </li>
                                                                      </ul>

                                                                      <ul className="lab-ul social-icons">
                                                                          {
                                                                              socialList.map((val, i) => (
                                                                                  <li key={i}>
                                                                                      <a href="" className={val.className}>
                                                                                          <i className={val.iconName}></i>
                                                                                      </a>
                                                                                  </li>
                                                                              ))
                                                                          }
                                                                      </ul>
                                                                  </div>
                                                              </div>
                                                             </div>
                                                        ))
                                                  }
                                              </div>
                                          </div>

                                          <div className="navigations-part">
                                              <div className="left">
                                                  <a href="#" className='prev'>
                                                      <i className="icofont-double-left"></i> Previous Blog
                                                  </a>
                                                  <a href="" className='title'>
                                                      evdf nui dhf hfhidfj fjdiofjd killo koejho
                                                  </a>
                                              </div>
                                              <div className="right">
                                                  <a href="#" className='prev'>
                                                      <i className="icofont-double-right"></i> Previous Blog
                                                  </a>
                                                  <a href="" className='title'>
                                                      evdf nui dhf hfhidfj fjdiofjd killo koejho
                                                  </a>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </article>
                      </div>

                      <div className="col-lg-4 col-12">
                          <Tag />
                          <PopularPost/>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  )  
}

export default SingleBlog