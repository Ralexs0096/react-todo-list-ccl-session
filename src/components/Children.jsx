import React, { useEffect } from 'react';

const Children = () => {
  useEffect(() => {
    console.log('Children component mounted');

    return () => {
      // cleanup function
      console.log('Component unmounted');
    };
  }, []);

  return <div>Children</div>;
};

export default Children;
