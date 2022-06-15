import React from 'react';

const Start = ({ onQuizStart }) => {
  return(
    <div className="card">
      <div className="card-content">
        <div className="content">
          <h1>Chúng ta bắt đầu nhé !!!</h1>
          <p>Chúc bạn may mắn!</p>
          <button className="button is-info is-medium" onClick={onQuizStart}>Bắt đầu</button>
        </div>
      </div>
    </div>
  );
}

export default Start;