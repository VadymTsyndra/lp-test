import React from 'react';
import amazon from '../icons/Amazon.png';
import delivery from '../icons/Delivery.png';
import fotos from '../icons/Fotos.png';
import rozetka from '../icons/Group 80.png';
import flag from '../icons/flag.png';
import lifecell from '../icons/lifecell.png';
import unknown from '../icons/ощщь.png';
import shopLogistic from '../icons/Shop Logistics.png';
import ups from '../icons/UPS.png';
import group from '../icons/Group 81.png';
import red from '../icons/red.png';
import autolux from '../icons/Autolux.png';
import ebay from '../icons/Ebay.png';
import meest from '../icons/Meest express.png';
import modnaCasta from '../icons/Modna kasta.png';
import kyivstar from '../icons/bodyIcon.png';

const images = [
  { id: 'amazon', src: amazon },
  { id: 'delivery', src: delivery },
  { id: 'fotos', src: fotos },
  { id: 'rozetka', src: rozetka },
  { id: 'flag', src: flag },
  { id: 'lifecell', src: lifecell },
  { id: 'unknown', src: unknown },
  { id: 'shopLogistic', src: shopLogistic },
  { id: 'ups', src: ups },
  { id: 'group', src: group },
  { id: 'red', src: red },
  { id: 'autolux', src: autolux },
  { id: 'ebay', src: ebay },
  { id: 'meest', src: meest },
  { id: 'modnaCasta', src: modnaCasta },
  { id: 'kyivstar', src: kyivstar },
];

export const SelectImages = ({ changeImage, row }) => {
  return (
    <>
      {images.map(image => (
        <div key={image.id} className="menu-body__select-image" onClick={() => changeImage(row.key, image.src)}>
          <img src={image.src} alt={image.id} />
        </div>
      ))}
    </>
  );
};
