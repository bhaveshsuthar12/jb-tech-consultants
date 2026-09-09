"use client";

const reviews = [
  {
    name: "Kunal Gour",
    text: "Best soil testing agency in chittorgarh",
  },
  {
    name: "sonu Mistry",
    text: "Best rock drilling agency",
  },
  {
    name: "Ayush Jaiswal",
    text: "Best mineral lab in Chittorgarh",
  },
  {
    name: "akash garg",
    text: "best soil agency in chittorgarh",
  },
  {
    name: "Santosh Suthar",
    text: "Best agriculture soil testing and construction soil testing agency in chittorgarh",
  },
  {
    name: "Prakash Kumar Sen",
    text: "Best agency for bridge design & material testing",
  },
  {
    name: "Vishal Sharma",
    text: "Accuracy 99.9 percent good lab and their results",
  },
  {
    name: "illusion BAISA_HKM",
    text: "Good lab accurate results for food. Excellent 👌👌",
  },
  {
    name: "Abhishek Suthar",
    text: "Very professional soil testing lab. Accurate reports, fast service, and helpful staff. Highly recommended for construction and agricultural soil testing.",
  },
  {
    name: "Devendra Singh Rao",
    text: "Professional and reliable Mineral & Civil Testing Consulting Agency. They provide accurate testing reports and excellent technical guidance. The team is knowledgeable and the service is timely and trustworthy. Highly recommended.",
  },
];

export default function Reviews() {
  return (
    <section id="reviews" className="reviews-section">
      <div className="reviews-container">

        <div className="reviews-heading">
          <p className="reviews-label">CLIENT FEEDBACK</p>

          <h2>
            What Our <span>Clients Say</span>
          </h2>

          <p className="reviews-subtitle">
            Trusted by clients for reliable testing, surveying and
            technical consultancy services.
          </p>

          <div className="google-rating">
            <span className="google-stars">★★★★★</span>
            <strong>5.0</strong>
            <span>Google Reviews</span>
          </div>
        </div>

        <div className="reviews-grid">
          {reviews.map((review, index) => (
            <div className="review-card" key={index}>

              <div className="review-top">
                <div className="review-avatar">
                  {review.name.charAt(0).toUpperCase()}
                </div>

                <div>
                  <h3>{review.name}</h3>
                  <div className="review-stars">★★★★★</div>
                </div>
              </div>

              <p className="review-text">
                “{review.text}”
              </p>

              <div className="review-source">
                <span>Google</span>
                <span>Verified Review</span>
              </div>

            </div>
          ))}
        </div>

        <div className="reviews-button-wrapper">
          <a
            href="https://maps.app.goo.gl/EpYLHGk3XWV8uBSZ7?g_st=ac"
            target="_blank"
            rel="noopener noreferrer"
            className="reviews-button"
          >
            See all reviews on Google →
          </a>
        </div>

      </div>
    </section>
  );
}