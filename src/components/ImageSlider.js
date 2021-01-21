import React, { Component } from "react";

export class ImageSlider extends Component {
  state = {
    images: [
      "C:/Users/Nihar Singla/Pictures/christopher-gower-m_HRfLhgABo-unsplash.jpg",
      "https://www.google.com/search?q=car&rlz=1C1GCEU_enIN918IN918&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjAwfvIgonuAhXw8XMBHdKHAO8Q_AUoAnoECAUQBA&biw=1707&bih=771&dpr=1.13#imgrc=Ok1FLyRoBPte8M",
      "https://www.google.com/search?q=pizza&rlz=1C1GCEU_enIN918IN918&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjRveLYgonuAhW1H7cAHZ2hB5gQ_AUoAnoECAQQBA&biw=1707&bih=771&dpr=1.13#imgrc=D9dBGv05-9pJLM",
      "https://www.google.com/search?q=java+developer&rlz=1C1GCEU_enIN918IN918&source=lnms&tbm=isch&sa=X&ved=2ahUKEwiqr4LogonuAhXf7HMBHVFgAu0Q_AUoAXoECBUQAw&biw=1707&bih=771&dpr=1.13#imgrc=CSCxrmu8ZEK2cM",
    ],
    idx: 0,
  };

  handleNext = () =>
    this.setState({
      idx: this.state.idx + 1,
    });

  render() {
    return (
      <div>
        <button
          onClick={() => {
            this.setState({ idx: this.state.idx - 1 });
          }}
        >
          Previous
        </button>
        <img
          style={{ width: 100, height: 100 }}
          src={this.state.images[this.state.idx]}
        ></img>
        <button onClick={this.handleNext}>Next</button>
      </div>
    );
  }
}
