import * as React from 'react';
import PropTypes from 'prop-types';
import './style.css';

function Card (props) {
  return (
    <div className="card">
      sad
    </div>
  );
}

Card.propTypes = {
  id: PropTypes.number.isRequired,
  direction: PropTypes.shape({
    from: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired
  }),
  arrival: PropTypes.string.isRequired,
  departure: PropTypes.string.isRequired,
};

export default Card;