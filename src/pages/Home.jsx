import React from 'react'
import Card from "src/components/Card/index.jsx"
import Modal from "components/Modal"
import { Rounded } from "src/components/Buttons"
import Icon from "src/components/Icon/index.jsx"
import { connect } from 'react-redux'
import { getCurrentActivities, moveDay } from "src/store/activity_plans/actions"

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showModal: false,
      selectedCard: undefined
    }
  }

  getActivityPlan() {
    const { dispatch } = this.props
    dispatch(getCurrentActivities({ babyId: 1 })).catch(error => {
      console.log("There was an error getting the activities", error)
    })
  }

  componentDidMount() {
    this.getActivityPlan()
  }

  openModal(cardInfo) {
    this.setState(prevState => ({
      selectedCard: cardInfo,
      showModal: true
    }))

    if (this.refs.video) {
      this.refs.video.currentTime = 0
      this.refs.video.play()
    }
  }

  closeModal(e) {
    e.persist()
    this.setState({
      showModal: false
    })
    this.refs.video.pause()
    this.refs.video.currentTime = 0
  }

  showActivities() {
    const { day } = this.props
    if (day === undefined) {
      return <p className="loading-text">Loading ...</p>
    } else if (day.items.length === 0) {
      return <p className="loading-text">No activities yet</p>
    }
    return day.items
      .filter(item => item.type === "activity")
      .map(activity => {
        return (
          <div className="col" key={activity.instance_id}>
            <Card data={activity} onClickCard={this.openModal.bind(this)} />
          </div>
        )
      })
  }

  shouldShowModal() {
    if (this.state.selectedCard) {
      return (
        <Modal show={this.state.showModal} onClose={this.closeModal.bind(this)}>
          <video className="activity-image" ref="video" src={this.state.selectedCard.shareable_video_url} autoPlay>
            Tu navegador no implementa el elemento <code>video</code>.
          </video>
          <div className="modal-card-title bg-blue-lighten">
            <p>{this.state.selectedCard.name}</p>
          </div>
          <div className="modal-card-description">
            <p className="description-title"> Description: </p>
            <p className="caption">{this.state.selectedCard.description}</p>
          </div>
        </Modal>
      )
    }
  }

  isLastPage = () => this.props.currentDay === this.props.totalDays
  isFirstPage = () => this.props.currentDay === 1

  canGetBack = () => {
    const { dispatch } = this.props
    if (!this.isFirstPage()) {
      return (
        <div style={{ transform: "translateY(-50%)", position: "fixed", top: "50%", left: "10px" }} onClick={e => dispatch(moveDay('prev'))}>
          <Rounded color="#75B753" >
            <Icon name="arrow_back" color="#fff" />
          </Rounded>
        </div>
      )
    }
    return null
  }

  canMoveNext = () => {
    const { dispatch } = this.props
    if (!this.isLastPage()) {
      return (
        <div style={{ transform: "translateY(-50%)", position: "fixed", top: "50%", right: "10px" }} onClick={e => dispatch(moveDay('next'))}>
          <Rounded color="#75B753">
            <Icon name="arrow_forward" color="#fff" />
          </Rounded>
        </div>
      )
    }
    return null
  }

  render() {
    return (
      <div className="page">
        <div className="page-content">
          {this.canGetBack()}
          <div className="row">{this.showActivities()}</div>
          {this.canMoveNext()}
        </div>
        {this.shouldShowModal()}
      </div>
    )
  }
}

const mapStateToProps = ({ activityPlansReducer }) => {
  const { list, currentDay, totalDays } = activityPlansReducer
  let days = undefined
  let day = undefined

  if (list && list.days) {
    days = list.days
  }

  if (days && currentDay) {
    day = days[currentDay - 1]
  }

  return {
    day,
    currentDay,
    totalDays
  }
}
export default connect(mapStateToProps)(Home)
