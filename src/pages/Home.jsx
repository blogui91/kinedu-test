import React from 'react'
import { ActivityPlanService } from 'services/ActivityPlan.service'
import Card from "src/components/Card/index.jsx"
import Modal from "components/Modal"

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      activities: undefined,
      showModal: false,
      selectedCard: undefined
    }
  }

  getActivityPlan() {
    ActivityPlanService.current({ parentId: 1 }).then(response => {
      this.setState({
        activities: response.activity_plan
      })
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
    e.stopPropagation()
    this.setState({
      showModal: false
    })
    this.refs.video.pause()
    this.refs.video.currentTime = 0;
  }

  showActivities() {
    if (this.state.activities === undefined) {
      return <p className="loading-text">Loading ...</p>
    } else if (this.state.activities.days[0].items.length === 0) {
      return <p className="loading-text">No activities yet</p>
    }
    return this.state.activities.days[0].items
      .filter(item => item.type === "activity")
      .map(activity => {
        return (
          <div className="col" key={activity.instance_id}>
            <Card data={activity} onClickCard={this.openModal.bind(this)}/>
          </div>
        )
      })
  }

  shouldShowModal () {
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
    console.error('cannot load the modal')
  }

  render() {
    return (
      <div className="page">
        <div className="page-content">
          <div className="row">{this.showActivities()}</div>
        </div>
        {this.shouldShowModal()}
      </div>
    )
  }
}

export default Home
