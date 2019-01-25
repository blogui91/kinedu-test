import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import { connect } from 'react-redux';
import { setCurrentDay } from 'src/store/activity_plans/actions';

function Header({
  fixed, days, dispatch, currentDay,
}) {
  function renderTabs() {
    return days.map((day) => {
      let tabClassNames = ['tab'];
      if (day.day === currentDay) {
        tabClassNames.push('active');
      }
      tabClassNames = tabClassNames.join(' ');
      return (
        <a 
          href={`#tab-${day.day}`}
          key={day.day}
          onClick={() => dispatch(setCurrentDay(day.day))}
          className={tabClassNames}
        >
          Day
          {day.day}
          <div className="line" />
        </a>
      );
    });
  }

  const classes = ['navbar', 'bg-blue', 'non-selectable'];
  if (fixed) {
    classes.push('fixed');
  }
  return (
    <header className={classes.join(' ')}>
      <div className="container">
        <div className="tabs">
          { renderTabs() }
        </div>
      </div>
    </header>
  );
}

const mapStateToProps = ({ activityPlansReducer }) => {
  const { list, currentDay, totalDays } = activityPlansReducer;
  let days = []
  if (list && list.days) {
    days = list.days;
  }
  return {
    days,
    currentDay,
    totalDays,
  };
};

Header.defaultProps = {
  fixed: false,
  currentDay: 1,
};

Header.propTypes = {
  fixed: PropTypes.bool,
  currentDay: PropTypes.number,
  days: PropTypes.array.isRequired,
};

export default connect(mapStateToProps)(Header);
