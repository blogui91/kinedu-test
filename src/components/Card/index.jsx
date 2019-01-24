import React, { Component } from 'react'
import footIcon from 'src/assets/foot-icon.svg'
import './styles.scss'

export default class Card extends Component {
  constructor (props) {
    super(props)
    this.state = {
      selectedItem: undefined,
      showModal: false
    }
  }

  openModal () {
    this.setState({
      showModal: true
    })
  }

  closeModal () {
    this.setState({
      showModal: false,
      selectedItem: undefined
    })
  }

  render () {
    const { data, onClickCard } = this.props
    return <>
        <div className="card non-selectable" style={this.props.style}>
          <div className="card-header" onClick={e => onClickCard(data.content)}>
            <img src={data.content.shareable_thumbnail_url} alt="" />
          </div>
          <div className="card-body" />
          <div className="card-footer">
            <div className="circle bg-blue-lighten">
              <img src={footIcon} alt="" />
            </div>
            <div className="footer-content">
              <h3 style={{ fontWeight: "bold", padding: "5px" }} className="text-grey">
                {data.content.name}
              </h3>
              <p style={{ fontWeight: "lighter" }} className="text-grey-lighten">
                Physical
              </p>
            </div>
          </div>
        </div>
      </>
  }
}
