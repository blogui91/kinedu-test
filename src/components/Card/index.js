/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import footIcon from 'src/assets/foot-icon.svg';
import propTypes from 'prop-types';
import './styles.scss';

export default function Card({ data, onClickCard, style }) {
  return (
    <div className="card non-selectable fade-in" style={style}>
      <div className="card-header" onClick={e => onClickCard(data.content)}>
        <img src={data.content.shareable_thumbnail_url} alt="" />
      </div>
      <div className="card-body" />
      <div className="card-footer">
        <div className="circle bg-blue-lighten">
          <img src={footIcon} alt="" />
        </div>
        <div className="footer-content">
          <h3 style={{ fontWeight: 'bold', padding: '5px' }} className="text-grey">
            {data.content.name}
          </h3>
          <p style={{ fontWeight: 'lighter' }} className="text-grey-lighten">
            Physical
          </p>
        </div>
      </div>
    </div>
  );
}

Card.defaultProps = {
  style: {},
};

Card.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  data: propTypes.object.isRequired,
  onClickCard: propTypes.func.isRequired,
  style: propTypes.object,
};
