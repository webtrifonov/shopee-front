import { Component } from 'react';
import ReactDOM from 'react-dom';

class Portal extends Component {
  constructor(props) {
    super(props);
    this.el = document.createElement('div');
    this.rootEl = document.getElementById(props.id ?? 'root');
  }

  componentDidMount() {
    this.rootEl.appendChild(this.el);
  }

  componentWillUnmount() {
    this.rootEl.removeChild(this.el);
  }

  render() {
    const { children } = this.props;

    return ReactDOM.createPortal(children, this.el);
  }
}

export default Portal;
