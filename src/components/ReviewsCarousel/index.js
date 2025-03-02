import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  constructor(props) {
    super(props)
    this.reviewsList = props.reviewsList
    this.reviewsListLength = this.reviewsList.length - 1
  }

  state = {
    activeCarouselIndex: 0,
  }

  onHandleLeftArrowClick = () => {
    this.setState(prevState => {
      if (prevState.activeCarouselIndex > 0) {
        return {activeCarouselIndex: prevState.activeCarouselIndex - 1}
      }
      return null
    })
  }

  onHandleRightArrowClick = () => {
    this.setState(prevState => {
      if (prevState.activeCarouselIndex < this.reviewsListLength) {
        return {activeCarouselIndex: prevState.activeCarouselIndex + 1}
      }
      return null
    })
  }

  render() {
    const {activeCarouselIndex} = this.state
    return (
      <div className="main-container">
        <h1>Reviews</h1>
        <div className="container">
          <button>
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
              className="arrow-icon"
              onClick={this.onHandleLeftArrowClick}
            />
          </button>
          <div className="carousel-container">
            <img
              src={this.reviewsList[activeCarouselIndex].imgUrl}
              alt={this.reviewsList[activeCarouselIndex].username}
            />
            <p className="align-center">
              {this.reviewsList[activeCarouselIndex].username}
            </p>
            <p className="align-center">
              {this.reviewsList[activeCarouselIndex].companyName}
            </p>
            <p className="align-center">
              {this.reviewsList[activeCarouselIndex].description}
            </p>
          </div>
          <button>
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right arrow"
              className="arrow-icon"
              onClick={this.onHandleRightArrowClick}
            />
          </button>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
