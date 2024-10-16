import React from "react";

const Subscribe = () => {
  return (
    <section className="subscribe flex justify-center items-center mt-20">
      <div className="p-10">
        <h4 className="mb-12">Recomended books for you to review</h4>
        <form>
          <input
            placeholder="write your recomendation"
            className="submit-area"
          ></input>
          <button className="submit-button">Submit</button>
        </form>
      </div>
    </section>
  );
};

export default Subscribe;
