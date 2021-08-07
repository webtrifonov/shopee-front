import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import s from './listingPage.module.scss';
import { listingsSelector } from '../../modules/Listings';
import { ListingItem } from '../../modules/Listings/components/ListingItem/ListingItem';
import { Breadcrumbs } from '../../components/Breadcrumbs/Breadcrumbs';

export const ListingPage = () => {
  const { listingId } = useParams();

  const { listings } = useSelector(listingsSelector);

  const listing = listings.find((item) => item?.id === String(listingId));

  return (
    <div className={s.listingPage}>
      <div className={s.breadcrumbs}>
        <Breadcrumbs
          data={[
            {
              to: '/',
              name: 'Home',
            },
            {
              to: '/products',
              name: 'Products',
            },
            {
              to: `/products/${listingId}`,
              name: listing?.title,
            },
          ]}
        />
      </div>
      <ListingItem item={listing} viewStatus={'list'} />
    </div>
  );
};
