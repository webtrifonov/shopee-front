import React, { memo, useCallback, useEffect } from 'react';
import s from './tooltip.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { TOOLTIP_DURATION } from './tooltip.constants';
import { toggleTooltip } from './tooltip.actions';

export const Tooltip = memo(() => {
  const dispatch = useDispatch();
  const { visible, message } = useSelector((state) => state.tooltip);

  const closeTooltip = useCallback(
    () => dispatch(toggleTooltip({ message: '' })),
    [dispatch]
  );

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
        <div className={s.tooltip}>{message}</div>
      </div>
    )
  );
});
