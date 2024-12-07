import React from "react";
import blogImage1 from "../Assets/Images/blog-1.png";
import blogImage2 from "../Assets/Images/blog-2.png";
import blogImage3 from "../Assets/Images/blog-3.png";
import arrowUp from "../Assets/Images/arrow-up.png";

const blogs = [
  {
    title: "How to Drive Business Growth in the Digital Era",
    buttonText: "More Updates",
    image: blogImage1,
  },
  {
    title: "The Ultimate Guide to Data-Driven Marketing",
    buttonText: "More Updates",
    image: blogImage2,
  },
  {
    title: "Top Trends in Digital Marketing for This Year",
    buttonText: "More Updates",
    image: blogImage3,
  },
];

const Blogs = () => {
  return (
    <section id="blogs" className="py-5">
      <div className="container text-center">
      <h2 className="section-title white-btn" style={{width: "150px", padding: "10px", fontSize: "20px"}}>Our Blogs</h2>
        <p className="section-subtitle" style={{margin: "30px 0", fontSize: "20px"}}>Our latest insight & update</p>
        <div className="row">
          {blogs.map((blog, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div className="blog-card">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="img-fluid rounded-top"
                />
                <div className="blog-content p-3">
                  <h5 className="blog-title">{blog.title}</h5>
                  <img 
                  src={arrowUp} 
                  alt="Arrow" 
                  style={{
                    width: "18px",
                    height: "18px"
                  }}
                />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
