/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable prefer-destructuring */
import React from 'react';
import Card from 'src/components/Card';
import Modal from 'components/Modal';
import { Rounded } from 'src/components/Buttons';
import Icon from 'src/components/Icon/index.jsx';
import { connect } from 'react-redux';
import { getCurrentActivities, moveDay } from 'src/store/activity_plans/actions';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      selectedCard: undefined,
    };
    this.refVideo = undefined;
  }

  componentDidMount() {
    this.getActivityPlan();
  }

  getActivityPlan() {
    // eslint-disable-next-line react/destructuring-assignment
    const babyId = Math.floor(Math.random() * 10);
    this.props.dispatch(getCurrentActivities({ babyId })).catch((error) => {
      console.log('There was an error getting the activities', error);
      throw error;
    });
  }

  closeModal = (e) => {
    e.persist();
    this.setState({
      showModal: false,
    });
    this.refVideo.pause();
    this.refVideo.currentTime = 0;
  }

  isLastPage = () => this.props.currentDay === this.props.totalDays;

  isFirstPage = () => this.props.currentDay === 1;

  canGetBack = () => {
    // eslint-disable-next-line react/prop-types
    const { dispatch } = this.props;
    if (!this.isFirstPage()) {
      return (
        <div
          className="arrow-prev"
          onClick={() => dispatch(moveDay('prev'))}
        >
          <Rounded color="#75B753">
            <Icon name="arrow_back" color="#fff" />
          </Rounded>
        </div>
      );
    }
    return null;
  }

  canMoveNext = () => {
    // eslint-disable-next-line react/prop-types
    const { dispatch } = this.props;
    // if (!this.isLastPage()) {
    return (
      <div className="arrow-next" onClick={() => dispatch(moveDay('next'))}>
        <Rounded color="#75B753">
          <Icon name="arrow_forward" color="#fff" />
        </Rounded>
      </div>
    );
    // }
    // return null;
  }

  shouldShowModal() {
    const { selectedCard, showModal } = this.state;
    if (selectedCard) {
      return (
        <Modal
          show={showModal}
          onClose={this.closeModal}
        >
          <video
            className="activity-image"
            ref={(ref) => { this.refVideo = ref; }}
            src={selectedCard.shareable_video_url}
            autoPlay
          >
            Tu navegador no implementa el elemento
            <code>video</code>
          </video>
          <div className="modal-card-title bg-blue">
            <p>{selectedCard.name}</p>
          </div>
          <div className="modal-card-description">
            <p className="description-title"> Description: </p>
            <p className="caption">{selectedCard.description}</p>
          </div>
        </Modal>
      );
    }
    return null;
  }

  showActivities() {
    // eslint-disable-next-line react/prop-types
    const { day } = this.props;
    if (day === undefined) {
      return <p className="loading-text">Loading ...</p>;
    } if (day.items.length === 0) {
      return <p className="loading-text">No activities yet</p>;
    }
    return day.items
      .filter(item => item.type === 'activity')
      .map(activity => (
          <div className="col" key={activity.instance_id}>
            <Card data={activity} onClickCard={e => this.openModal(e)} />
          </div>
      ));
  }


  openModal(cardInfo) {
    this.setState({
      selectedCard: cardInfo,
      showModal: true,
    });

    if (this.refVideo) {
      this.refVideo.currentTime = 0;
      this.refVideo.play();
    }
  }

  render() {
    const { currentDay } = this.props;
    return (
      <div className="page">
        <div className="page-content">
          {this.canGetBack()}
          <h1 className="text-blue">
            Day
            {' '}
            {currentDay}
          </h1>
          <div className="row">{this.showActivities()}</div>
          {this.canMoveNext()}
        </div>
        {this.shouldShowModal()}
      </div>
    );
  }
}

const mapStateToProps = ({ activityPlansReducer }) => {
  const { list, currentDay, totalDays } = activityPlansReducer;
  let days; let day;

  if (list && list.days) {
    days = list.days;
  }

  if (days && currentDay) {
    day = days[currentDay - 1];
  }

  return {
    day,
    currentDay,
    totalDays,
  };
};

export default connect(mapStateToProps)(Home);
