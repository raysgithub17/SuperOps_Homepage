import './Box.css';
import LeftData from './LeftData';
import RightData from './RightData';
import { useState } from 'react';
import ImgLink from './ImgLink';
import RightItem from './RightItem';

function Box() {
  const [selectedProduct, setSelectedProduct] = useState(0);
  const [expandedProduct, setExpandedProduct] = useState(0);

  const handleProductClick = (index) => {
    setSelectedProduct(index);
    if (index === expandedProduct) {
      setExpandedProduct(index);
    } else {
      setExpandedProduct(index);
    }
  };

  return (
    <div className="red-box">
      <div className="flex-left">
        <h1 className="typo-1">Do it all with SuperOps</h1>
        <p className="para-1">One truly unified platform to super power your MSP to growth</p>
        <div className="product">
          {LeftData.map((item, index) => (
            <div
              key={index}
              className={`pr ${index === selectedProduct ? 'selected' : ''}`}
              onClick={() => handleProductClick(index)}
            >
              <p className="pr-head">{item.product}</p>
              {index === expandedProduct && (
                <>
                  <p className="pr-info">{item.prod_desc}</p>
                  <p className="pr-ln">learn now</p>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="flex-right">
        {RightData[selectedProduct].map((item, itemIndex) => (
          <RightItem 
            key={itemIndex} 
            heading={item.heading} 
            content={item.content} 
            imageUrl={item.imageUrl} 
          />
        ))}
        <img src={ImgLink[selectedProduct].src} alt="img" className='img-2 animate-img' />
      </div>
    </div>
  );
}

export default Box;
