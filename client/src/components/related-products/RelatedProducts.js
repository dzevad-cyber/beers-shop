import React from 'react';

const RelatedProducts = ({ children, _className }) => {
  return <section className={`${_className}`}>{children}</section>;
};

export default React.memo(RelatedProducts);
