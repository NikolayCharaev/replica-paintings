import React from 'react';
import '@/styles/spinner.scss';

const Spinner = ({ status }) => {
  return (
    <>
      {status === 'pending' && (
        <div className="spinner">
          <span className="spinner-inner-1"></span>
          <span className="spinner-inner-2"></span>
          <span className="spinner-inner-3"></span>
        </div>
      )}
      {status === 'failed' && <h1>Произошла ошибка</h1>}
    </>
  );
};

export default Spinner;
