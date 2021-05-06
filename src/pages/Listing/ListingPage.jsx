import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { listingsSelector } from '../../modules/Listings';
import { ListingItem } from '../../modules/Listings/components/ListingItem/ListingItem';

export const ListingPage = () => {
  const { listingId } = useParams();

  const { listings } = useSelector(listingsSelector);

  const listing = listings.find((item) => item.id === String(listingId));

  return (
    <div>
      <ListingItem item={listing} viewStatus={'list'} />
    </div>
  );
};
