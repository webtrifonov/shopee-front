import React, {useState, useEffect, useRef} from 'react';
import s from './Accordion.module.scss';
import {
  faAngleUp, faAngleDown
} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const Accordion = ({summary, Details}) => {
  const detailsRef = useRef();
  const [isOpened, setIsOpened] = useState(false);
  const [maxHeight, setMaxHeight] = useState(0);

  useEffect(() => {
    setMaxHeight(detailsRef.current.scrollHeight);
  }, [Details])

  const handleOpen = () => {
    setIsOpened(!isOpened)
  }

  return (
    <>
    <div className={s.summary}>
      <div className={s.summaryText}>{summary}</div>
      <div
        className={`${s.toggleButton} ${isOpened && s.toggleButtonOpened}`}
        onClick={handleOpen}
      >
        <FontAwesomeIcon
          size={'lg'}
          icon={faAngleDown}
          color={'#fafafa'}
        />
      </div>
    </div>
    <div
      ref={detailsRef}
      style={{maxHeight: isOpened ? maxHeight : 0}}
      className={`${s.details}`}
    >
      {Details && <Details />}
    </div>
    </>
  );
};

export default Accordion;
