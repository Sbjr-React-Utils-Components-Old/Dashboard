import React from 'react';
import PropTypes from 'prop-types';

import './style.less';

/**
 * Dashboard Component
*/
const Dashboard = ({ cards, onClick }) => (
  <div className="dashboard-container">
    {
      cards.map(card => (
        <div
          key={card.title}
          className={`dashboard-card ${card.disabled ? 'disabled' : ''}`}
          onClick={card.disabled ? () => {} : () => onClick(card)}
        >
          <h1 className="dashboard-card-title">
            {card.title}
          </h1>
          <div className="dashboard-card-bottom-left">
            {
              card.bottomLeftComponent && card.bottomLeftComponent
            }
          </div>
          <div className="dashboard-card-bottom-right">
            {
              card.bottomRightComponent && card.bottomRightComponent
            }
          </div>
        </div>
      ))
    }
  </div>
);

Dashboard.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    bottomLeftComponent: PropTypes.component,
    bottomRightComponent: PropTypes.component,
    disabled: PropTypes.bool,
  })),
  onClick: PropTypes.func,
};

Dashboard.defaultProps = {
  cards: [
    {
      title: 'Example Card',
      bottomLeftComponent: null,
      bottomRightComponent: null,
      disabled: false,
    },
    {
      title: 'Another Example Card',
      bottomLeftComponent: null,
      bottomRightComponent: null,
      disabled: true,
    },
  ],
  onClick: () => {},
};

export default Dashboard;
