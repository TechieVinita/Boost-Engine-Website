import React from "react";
import galleryImage1 from "../Assets/Images/gallery-1.png"; 
import galleryImage2 from "../Assets/Images/gallery-2.png"; 
import galleryImage3 from "../Assets/Images/gallery-3.png"; 
import galleryImage4 from "../Assets/Images/gallery-4.png"; 
import galleryImage5 from "../Assets/Images/gallery-5.png"; 
import galleryImage6 from "../Assets/Images/gallery-6.png"; 
import galleryImage7 from "../Assets/Images/gallery-7.png"; 

const galleryItems = [
  { image: galleryImage1},
  { image: galleryImage2},
  { image: galleryImage3},
  { image: galleryImage4},
  { image: galleryImage5},
  { image: galleryImage6},
  { image: galleryImage7},
];

const Gallery = () => {
  return (
    <section id="gallery" className="py-5">
      <div className="container text-center">
        <h2 className="section-title white-btn" style={{width: "150px", padding: "10px", fontSize: "20px"}}>Gallery</h2>
        <div className="row">
          {/* Upper Row with 4 Images */}
          <div className="col-12 d-flex justify-content-center mb-4">
            {galleryItems.slice(0, 4).map((item, index) => (
              <div className="gallery-card mx-2" key={index}>
                <img
                  src={item.image}
                  alt={item.title}
                  className="img-fluid rounded"
                />
                <p className="mt-2">{item.title}</p>
              </div>
            ))}
          </div>
          {/* Bottom Row with 3 Images */}
          <div className="col-12 d-flex justify-content-center">
            {galleryItems.slice(4).map((item, index) => (
              <div className="gallery-card mx-2" key={index}>
                <img
                  src={item.image}
                  alt={item.title}
                  className="img-fluid rounded"
                />
                <p className="mt-2">{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
