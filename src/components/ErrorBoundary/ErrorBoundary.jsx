import React from 'react';
import s from './errorBoundary.module.scss';

import Logo from '../icons/Logo/Logo';
import SomethingWentWrongIcon from '../../assets/images/somethingWentWrong.svg';
import Button from '../Button/Button';
import Title from '../Title/Title';

export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
    this.reloadPage = this.reloadPage.bind(this);
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.log('Catch error  - ', error);
    console.log('Catch errorInfo  - ', errorInfo);
    // logErrorToMyService(error, errorInfo);
  }
  reloadPage() {
    window.location.reload();
  }
  render() {
    if (this.state.hasError) {
      return (
        <div className={s.errorBoundaryWrapper}>
          <div className={s.errorBoundaryContainer}>
            <a href={'/'}>
              <Logo fill="#DC4055" />
            </a>
            <img
              className={s.somethingWentWrongImage}
              src={SomethingWentWrongIcon}
              alt=""
            />
            <Title style={{ margin: '30px -15px 0' }}>
              Something went wrong
            </Title>
            <div className={s.description}>
              Try to reload page or try again later
            </div>
            <Button className={s.reloadButton} onClick={this.reloadPage}>
              Reload
            </Button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
