import React, { useState } from 'react';

const EightBall = ({ answers }) => {
  const [message, setMessage] = useState("Think of a Question");
  const [color, setColor] = useState("black");

  const handleClick = () => {
    const randomAnswer = answers[Math.floor(Math.random() * answers.length)];
    setMessage(randomAnswer.msg);
    setColor(randomAnswer.color);
  };

  return (
    <div 
      onClick={handleClick}
      style={{
        backgroundColor: color,
        color: 'white',
        borderRadius: '50%',
        width: '200px',
        height: '200px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        cursor: 'pointer'
      }}
    >
      {message}
    </div>
  );
};

export default EightBall;
