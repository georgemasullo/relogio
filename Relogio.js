import React from 'react';
class Relogio extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        hora: new Date().toLocaleString()
      };
    }
    componentDidMount() {
      this.inrtervalo = setInterval(
        () => this.tick(),
        1000
      );
    }
    componentWillUnmount() {
      clearInterval(this.inrtervalo);
    }
    tick() {
      this.setState({
        hora: new Date().toLocaleString()
      });
    }
    render() {
      return (
        <p className="App-clock">
          {this.state.hora}
        </p>
      );
    }
  }
  export default Relogio;