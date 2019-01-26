import React from 'react';
import { Link } from 'react-router-dom';
import Landing from '../../components/layout/Landing';

export default () => {
  return (
    <div className="text-center">
      <h1 className="display-4 text-white text-center">Page Not Found</h1>
      <p className="text-white text-center">Sorry, this page does not exist</p>
      <p className="text-white text-center">You can click any of the navigation links to go elsewhere.</p>
      <br />
      <p className="text-white text-center">Or...</p>
      <br />
      <button className="btn btn-info text-white"><a id="drake" href="https://www.youtube.com/watch?v=km4l8ZI-kQA" target="_blank"
        rel="noopener noreferrer">You could listen to this instead.</a></button>
    </div>
  );
};
