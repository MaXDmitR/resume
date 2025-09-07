import React, { useEffect, useRef } from "react";
import counterAnimation from "../../scripts/counterAnimation";

const Stats = (props) => {
  const counterRef = useRef(null);

  useEffect(() => {
    if (counterRef.current) {
      counterAnimation(counterRef.current, props.count.length, 2000); 
    }
  }, []);

  return (
    <div className="stats-box">
      <h4>Реалізовано проєктів</h4>
      <span ref={counterRef}>0</span>
    </div>
  );
};

export default Stats;

