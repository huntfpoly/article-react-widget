import React from 'react';

function MenuItem(props) {
  return (
    <React.Fragment>
      <div className="mmt-menu__item">
        <div className="mt-tooltip">
          <span className="mmt-button">
            <img
              alt="url"
              src="https://media.metu.vn/fillcolor?url=https%3A%2F%2Fmedia.metu.vn%2Fimages%2Ficon_callmeback_01.svg&amp;color=%23ffffff"
              className="mmt-button__icon mmt-button__icon--motion"
            />
            <span className="mmt-button__label">Form biểu mẫu</span>
          </span>
          <div className="mt-tooltip__text">Form biểu mẫu</div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default MenuItem;
