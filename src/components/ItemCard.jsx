import React from 'react';
import PropTypes from 'prop-types';
import { Info } from 'lucide-react';

function ItemCard({
  title,
  price,
  children,
  bg = 'bg-green-800',
  hoverBg = 'bg-yellow-400',
  textColor = 'text-yellow-100',
  info = true,
  ...props
}) {
  return (
    <button
      type="button"
      tabIndex={0}
      aria-label={title}
      className={`relative rounded-xl shadow-md p-5 max-w-[280px] min-w-[220px] w-full transition box-border ${bg} ${textColor} hover:${hoverBg} hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-yellow-400 flex flex-col items-start`}
      {...props}
    >
      {/* Info icon in upper right; aria-hidden, since button aleady describes itself*/}
      {info && (
        <Info
          className="absolute top-3 right-2 text-gray-400 w-5 h-5"
          aria-hidden="true"
          focusable="false"
        />
      )}
      <h3 className="text-lg font-semibold mb-1 pr-7">{title}</h3>
      <span className="font-bold">{price}</span>
      {children}
    </button>
  );
}

ItemCard.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  children: PropTypes.node,
  bg: PropTypes.string,
  hoverBg: PropTypes.string,
  textColor: PropTypes.string,
  info: PropTypes.bool,
};

export default ItemCard;
