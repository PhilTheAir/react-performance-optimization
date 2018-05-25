import React, { Component, PureComponent } from 'react';

class ListOfWords extends PureComponent {

  // PureComponent does shallow comparison 
  // between this.props & nextProps and this.state & nextState

  render() {
    return <div>{this.props.words.join(',')}</div>;
  }
}

// Or use stateless functional component:
// 
// const ListOfWords = ({ words }) => (
//   <div>{words.join(',')}</div>
// )

class WordAdder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      words: ['marklar']
    };
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   deep comparison happens here
  //   // if (this.props.color !== nextProps.color) return true;
  //   // if (this.state.count !== nextState.count) return true;
  //   return false;
  // }

  handleClick = () => {
    const words = this.state.words;
    // avoid shallowEqual to be true so use spread operator
    // to create a new array rather than Array.push()
    this.setState(prevState => ({
      words: [...prevState.words, ...words],
    }));  
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick} />
        <ListOfWords words={this.state.words} />
      </div>
    );
  }
}

export default WordAdder;