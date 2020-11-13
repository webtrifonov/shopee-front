import React, { memo, useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import s from './Tooltip.module.scss';
import { toggleTooltip } from '../../../store/actions/appActions';
import { TOOLTIP_DURATION } from '../../../utils/constants';

const Tooltip = () => {
  const dispatch = useDispatch();
  const { visible, text } = useSelector((state) => state.appReducer.tooltip);

  const closeTooltip = useCallback(() => dispatch(toggleTooltip('')), [
    dispatch,
  ]);

  useEffect(
    useCallback(() => {
      if (visible) {
        setTimeout(closeTooltip, TOOLTIP_DURATION);
      }
    }, [visible, closeTooltip])
  );

  return (
    visible && (
      <div onClick={closeTooltip} className={s.wrapper}>
        <div className={s.tooltip}>{text}</div>
      </div>
    )
  );
};

export default memo(Tooltip);
