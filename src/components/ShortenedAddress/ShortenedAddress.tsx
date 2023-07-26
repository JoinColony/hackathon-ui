import React from 'react';

const ShortenedAddress: React.FC<{ address: string }> = ({ address }) => {
  const truncateAddress = (address: string) => {
    return address.slice(0, 7) + '...' + address.slice(-4);
  };

  return <span>{truncateAddress(address)}</span>;
};

export default ShortenedAddress;
