import React from 'react';

class Tab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {index: 0}
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    // this.state.index = 
  }

  render() {
    // const indicies = [0, 1 , 2];

    // this.indicies.map(index => {
    //   return
    // })

    return(
      <>
      <ul className="tabs">
        <li>
          <h1 onClick={this.handleClick}>1</h1>
          <article></article>
        </li>
        <li>
          <h1 onClick={this.handleClick}>2</h1>
          <article></article>
        </li>        
        <li>
          <h1 onClick={this.handleClick}>3</h1>
          <article></article>
        </li>
      </ul>
      </>
    )
  }
}

export default Tab;