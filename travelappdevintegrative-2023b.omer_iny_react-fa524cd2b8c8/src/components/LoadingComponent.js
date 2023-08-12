import React from 'react';
import '../LoadingComponent.css';

const LoadingComponent = () => {
  return (
    <div className="spinner">
      <div className="double-bounce1"></div>
      <div className="double-bounce2"></div>
    </div>
  );
};

export default LoadingComponent;
