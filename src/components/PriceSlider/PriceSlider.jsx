import React from 'react';
import s from './PriceSlider.module.scss';

const PriceSlider = (props) => {
  const {
    minPrice,
    maxPrice,
    MAX_PRICE,
    changeMinPriceHandler,
    changeMaxPriceHandler,
  } = props;

  return (
    <div className={s.priceSliderContainer}>
      <input
        onChange={changeMinPriceHandler}
        className={s.priceInput}
        name="minPrice"
        type="text"
        maxLength="6"
        value={minPrice}
      />

      <div className={s.priceSlider}>
        <div className={s.priceSliderPart} />
        <div
          style={{ left: `${(minPrice / MAX_PRICE) * 100}%` }}
          className={s.sliderCorner}
        />

        <div
          style={{ left: `${(maxPrice / MAX_PRICE) * 100}%` }}
          className={s.sliderCorner}
        />
      </div>
      <input
        onChange={changeMaxPriceHandler}
        className={s.priceInput}
        name="maxPrice"
        type="text"
        maxLength="6"
        value={maxPrice}
      />
    </div>
  );
};

export default PriceSlider;
