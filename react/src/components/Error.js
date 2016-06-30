import React from 'react';

export default function Error({isError, error, onErrorClick}) {

    let displayStyle = 'none';
    if (isError === true) {
      displayStyle = 'flex';
    }
    let styles = {
      display: displayStyle
    }
    
    return (
      <div className='error-message'>
        <dialog style={styles}>
          <h1>Sorry, something went wrong, please try again later</h1>
          <button onClick={(e) => onErrorClick()}>X</button>
        </dialog>
      </div>
    );
};
