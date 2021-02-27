import React from 'react';

const hello = () => {
  return (
    <div>
      <h1>hi harold</h1>
      <p>only this paragraph will get the style :)</p>
      <style jsx>{`
        h1 {
          color: red;
        }
      `}</style>
    </div>
  );
};

export default hello;
