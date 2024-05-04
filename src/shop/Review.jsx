import React, { useState } from 'react'
import Ratting from '../components/Ratting';





const reviwtitle = "Add a Review";

let ReviewList = [
    {
        imgUrl: "/src/assets/images/instructor/01.jpg",
        imgAlt: "Client thumb",
        name: "Ganelon Boileau",
        date: "Posted on Jun 10, 2022 at 6:57 am",
        desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.",
    },
    {
        imgUrl: "/src/assets/images/instructor/02.jpg",
        imgAlt: "Client thumb",
        name: "Morgana Cailot",
        date: "Posted on Jun 10, 2022 at 6:57 am",
        desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.",
    },
    {
        imgUrl: "/src/assets/images/instructor/03.jpg",
        imgAlt: "Client thumb",
        name: "Telford Bois",
        date: "Posted on Jun 10, 2022 at 6:57 am",
        desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.",
    },
    {
        imgUrl: "/src/assets/images/instructor/04.jpg",
        imgAlt: "Client thumb",
        name: "Cher Daviau",
        date: "Posted on Jun 10, 2022 at 6:57 am",
        desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.",
    },
];

const Review = () => {
    const [reviewShow, setReviewShow] = useState(true)
    return (
        <>
            <ul className={`review-nav lab-ul ${reviewShow ? "RevActive" : "DescActive"}`}>
                <li className="desc" onClick={() => setReviewShow(!reviewShow)}>Description</li>
                <li className="rev" onClick={() => setReviewShow(!reviewShow)}>Review 4</li>

            </ul>
            <div className={`review-content ${reviewShow ? "review-content-show" : "description-show"}`}>
                <div className="review-showing">
                    <ul className="content lab-ul">
                        {
                            ReviewList.map((review, i) => (
                                <li key={i}>

                                    <div className='post-thumb'>
                                        <img src={review.imgUrl} alt="" />
                                    </div>
                                    <div className="post-content">
                                        <div className="entry-meta">
                                            <div className="posted-on">
                                                <a href="#">{review.name}</a>
                                                <p>{review.date}</p>
                                            </div>
                                        </div>

                                        <div className="entry-cotent">

                                            <p>{review.desc}</p>
                                        </div>
                                    </div>
                                </li>

                            ))
                        }
                    </ul>



                    <div className="client-review">
                        <div className="review-form">
                            <div className="review-title">
                                <h5>{reviwtitle}</h5>
                            </div>

                            <form action="action" className="row" >
                                <div className="col-md-4 col-12">
                                    <input type="text" name='name' id='name' placeholder='Full Name' />
                                </div>
                                <div className="col-md-4 col-12">
                                    <input type="text" name='emil' id='email' placeholder='Email' />
                                </div>

                                <div className="col-md-4 col-12">
                                    <div className="rating">
                                        <span className='me-2'> Your Rating</span>
                                        <Ratting />
                                    </div>
                                </div>
                                <div className="col-md-12 col-12">
                                    <textarea name="message" id="message" placeholder='Type here message' rows="10"></textarea>
                                </div>
                                <div className="col-12">

                                    <button type='submit' className='default-button'>
                                        <span>Submit Review</span>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>


                <div className="description">
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia labore
                        sed modi a? Harum minima qui consectetur impedit veniam at unde exercitationem dolor, inventore quidem eum necessitatibus iste eius sint earum! Et voluptatem, consequatur voluptas explicabo impedit placeat, dolores, reprehenderit doloremque iste fugit laudantium
                        maiores quae quaerat rem autem distinctio.
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero temporibus perferendis eius. Et nesciunt cum accusamus! Quas minus nobis veritatis reprehenderit ut nostrum autem, minima accusantium earum sit sunt suscipit!</p>



                    <div className="post-item">
                        <div className="post-thumb">
                            <img src="/src/assets/images/shop/01.jpg" alt="" />
                        </div>

                        <div className="post-content">

                            <ul className="lab-ul">
                                <li> sit amet consectetur adipisicing elit. Omnis, qui.</li>
                                <li> sit amet consectetur adipisicing elit. Omnis, qui.</li>
                                <li> sit amet consectetur adipisicing elit. Omnis, qui.</li>
                                <li> sit amet consectetur adipisicing elit. Omnis, qui.</li>
                                <li> sit amet consectetur adipisicing elit. Omnis, qui.</li>
                                <li> sit amet consectetur adipisicing elit. Omnis, qui.</li>
                            </ul>
                        </div>
                    </div>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Non distinctio adipisci sunt, dicta reprehenderit aliquam totam doloribus et accusamus numquam repudiandae dolore animi rem nostrum sint tenetur? Vitae aut optio ducimus. Necessitatibus asperiores aperiam nam reiciendis corrupti nihil placeat quasi non adipisci hic neque facere, suscipit quis consectetur quas pariatur vero porro autem iste maxime velit maiores. Voluptatem commodi magni, tempora expedita pariatur inventore ipsum sed facilis nisi fuga dicta tenetur ipsam velit atque tempore molestiae vitae consequatur rem quas quia. Autem sunt aliquam provident praesentium suscipit molestias neque quibusdam facilis fugit voluptate blanditiis minima sapiente dolorum, aspernatur reiciendis necessitatibus!
                    </p>
                </div>
            </div>
        </>
    )
}

export default Review