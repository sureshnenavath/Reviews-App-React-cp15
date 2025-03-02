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
    const currentReview = this.reviewsList[activeCarouselIndex]

    return (
      <div className="main-container">
        <h1>Reviews</h1>
        <div className="container">
          <button data-testid="leftArrow" onClick={this.onHandleLeftArrowClick}>
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
              className="arrow-icon"
            />
          </button>
          <div className="carousel-container">
            <img src={currentReview.imgUrl} alt={currentReview.username} />
            <p className="align-center">{currentReview.username}</p>
            <p className="align-center">{currentReview.companyName}</p>
            <p className="align-center">{currentReview.description}</p>
          </div>
          <button
            data-testid="rightArrow"
            onClick={this.onHandleRightArrowClick}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right arrow"
              className="arrow-icon"
            />
          </button>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
