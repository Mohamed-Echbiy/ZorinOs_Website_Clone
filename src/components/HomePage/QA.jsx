import React from "react";

function QA({ question, answer }) {
  return (
    <div className="QA_wrapper md:w-5/12 mx-auto my-5">
      <h5 className="question text-xl mb-5 font-bold">{question}</h5>
      <p className="answer text-lg ">{answer}</p>
    </div>
  );
}

export default QA;
