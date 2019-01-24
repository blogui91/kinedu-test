import React from 'react';
import './styles.scss';

export default function Header ({ fixed }) {
  const days = [1, 2, 3, 4, 5]

  function selectTab (e, day) {
    const tabs = document.querySelectorAll('.tabs .tab');
    tabs.forEach(tab => tab.classList.remove('active'));
    e.target.classList.add('active');
  }

  function renderTabs () {
    return days.map((day, index) => {
      return (
        <a 
          href={`#tab-${day}`}
          key={index}
          onClick={ e => selectTab(e, day) }
          className="tab"
        >
          Day {day}
          <div className="line"></div>
        </a>
      )
    })
  }

  function getClasses () {
    const classes = ['navbar', 'bg-blue', 'non-selectable'];
    if (fixed) {
      classes.push('fixed');
    }
    return classes.join(' ');
  }

  return (
    <header className={getClasses()}>
      <div className="container">
        <div className="tabs">
          { renderTabs() }
        </div>
      </div>
    </header>
  )

}
