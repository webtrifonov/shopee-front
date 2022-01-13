import React, { memo, useCallback } from 'react';
import Portal from './Portal';
import s from './defaultModal.module.scss';
import DefaultCentralModal from './components/DefaultCentralModal/DefaultCentralModal';

export const DefaultModal = memo((props) => {
  const { visible, setVisible, title, message, children } = props;
  const onCloseHandler = (event) => {
    setVisible(false);
  };
  document.body.style.overflowY = visible ? 'hidden' : 'auto';
  const renderContent = useCallback(() => {
    if (title || message) {
      return <DefaultCentralModal title={title} message={message} />;
    } else if (children) {
      return children;
    }
  }, [title, message, children]);
  return visible ? (
    <Portal>
      <div onClick={onCloseHandler} className={s.wrapper}>
        <div onClick={(event) => event.stopPropagation()}>
          {renderContent()}
        </div>
      </div>
    </Portal>
  ) : null;
});
DefaultModal.displayName = 'DefaultModal';
