import { Component } from 'react';
import ReactDOM from 'react-dom';

class Portal extends Component {
  constructor(props) {
    super(props);
    this.el = document.createElement('div');
    this.rootEl = document.getElementById(props.id ?? 'root');
  }

  componentDidMount() {
    const { el, rootEl } = this.state;
    if (rootEl) {
      rootEl.appendChild(el);
    }
  }

  componentWillUnmount() {
    const { el, rootEl } = this.state;
    if (rootEl) {
      rootEl.removeChild(el);
    }
  }

  render() {
    const { children } = this.props;

    return ReactDOM.createPortal(children, this.el);
  }
}

export default Portal;
