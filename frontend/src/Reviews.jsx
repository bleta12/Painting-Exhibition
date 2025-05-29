import React, { useState } from "react";

const Reviews = () => {
  const [currentRating, setCurrentRating] = useState(0);
  const [comment, setComment] = useState("");
  const [error, setError] = useState(null); 
  const handleStarClick = (index) => {
    setCurrentRating(index + 1);
  };

  const handleSubmit = async () => {
    if (currentRating === 0) {
      alert("Please select a star rating.");
      return;
    }


    const reviewData = {
      rating: currentRating,
      comment: comment,
    };

    try {
      // Send the POST request to the backend
      const response = await fetch("http://localhost:8080/api/reviews", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(reviewData),
      });

      if (response.ok) {
        alert("Review submitted successfully!");
        setCurrentRating(0);
        setComment("");
      } else {
        const errorMessage = await response.text();
        setError(errorMessage); // Set error message if something went wrong
        alert("Failed to submit review. Please try again.");
      }
    } catch (error) {
      setError(error.message); // Capture error if network or other issue
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div className="container my-5 d-flex justify-content-center">
      <div className="card p-4 shadow-sm" style={{ maxWidth: "500px", width: "100%" }}>
        <h4 className="text-center mb-3">Rate This Exhibition</h4>

       
        <div className="text-center mb-2">
          {[...Array(5)].map((_, index) => (
            <span
              key={index}
              onClick={() => handleStarClick(index)}
              style={{
                fontSize: "1.8rem",
                cursor: "pointer",
                color: index < currentRating ? "#FFD700" : "#ccc",
                transition: "color 0.2s",
              }}
            >
              ★
            </span>
          ))}
        </div>

       
        <p className="text-center small text-muted mb-3">
          You selected: {currentRating} star{currentRating !== 1 ? "s" : ""}
        </p>

       
        <textarea
          className="form-control rounded"
          placeholder="Write a short review..."
          rows="3"
          style={{ resize: "none" }}
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        ></textarea>

      
        <button className="btn btn-dark mt-3 w-100" onClick={handleSubmit}>
          Submit
        </button>

        
        {error && (
          <div className="alert alert-danger mt-3">
            <strong>Error:</strong> {error}
          </div>
        )}
      </div>
    </div>
  );
};

export default Reviews;
