import './Slider.css';
import CardCarousel from './CardCarousel';
import CardCarouselData from './CardCarouselData';
import { useState } from 'react';
import CardCarouselT from './CardCarouselT';


export default function Slider() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [selectedProduct, setSelectedProduct] = useState(0);
    const [activeButton, setActiveButton] = useState(0); // State to track active button index

    const maxIndex = CardCarouselData[selectedProduct].length - 1;

    const handleRightArrowClick = () => {
        if (activeIndex < maxIndex) {
            setActiveIndex(activeIndex + 1);
        }
    };

    const handleLeftArrowClick = () => {
        if (activeIndex > 0) {
            setActiveIndex(activeIndex - 1);
        }
    };

    const handleProductSelect = (productIndex) => {
        setSelectedProduct(productIndex);
        setActiveIndex(0);
        setActiveButton(productIndex);
    };

    return (
        <div className='slider'>
            <div className='s-w-1'>
                <p className='s-p-1'>RESOURCES</p>
                <h1 className='s-h-1'>Discover exclusive resources to supercharge growth</h1>
            </div>
            <div className='s-bn-1'>
                <button
                    className={`s-bt-1 ${activeButton === 0 ? 'active' : ''}`}
                    onClick={() => handleProductSelect(0)}
                >
                    <div className='s-bt-1-t'>
                        READ
                        {activeButton === 0 && (
                            <span>
                                <svg width="18" height="14" fill="none" className="dir-arrow">
                                    <path
                                        d="M17 7H1M11 13l6-6-6-6"
                                        stroke="#170426"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </span>
                        )}
                    </div>
                </button>
                <button
                    className={`s-bt-2 ${activeButton === 1 ? 'active' : ''}`}
                    onClick={() => handleProductSelect(1)}
                >
                    <div className='s-bt-2-t'>
                        LISTEN
                        {activeButton === 1 && (
                            <span>
                                <svg width="18" height="14" fill="none" className="dir-arrow">
                                    <path
                                        d="M17 7H1M11 13l6-6-6-6"
                                        stroke="#170426"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </span>
                        )}
                    </div>
                </button>
                <button
                    className={`s-bt-3 ${activeButton === 2 ? 'active' : ''}`}
                    onClick={() => handleProductSelect(2)}
                >
                    <div className='s-bt-3-t'>
                        DOWNLOAD
                        {activeButton === 2 && (
                            <span>
                                <svg width="18" height="14" fill="none" className="dir-arrow">
                                    <path
                                        d="M17 7H1M11 13l6-6-6-6"
                                        stroke="#170426"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </span>
                        )}
                    </div>
                </button>
                <button className='s-n-1'>
                    <span onClick={handleLeftArrowClick}>
                        <svg width="39" height="39" fill="none" className="left-arrow">
                            <path
                                className='l-a-p'
                                clipRule="evenodd"
                                d="M19.477 37.582v0c9.942 0 18-8.058 18-18v0c0-9.942-8.058-18-18-18v0c-9.942 0-18 8.058-18 18v0c0 9.942 8.058 18 18 18z"
                                stroke="#170426"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                className='l-a-p-a'
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M16.77 12.875a1 1 0 011.414 1.414l-4.293 4.293h13.586a1 1 0 010 2H13.89l4.293 4.293a1 1 0 01-1.415 1.414l-6-6a.995.995 0 01-.217-1.09.996.996 0 01.218-.325m6-6l-6 6 6-6z"
                                fill="#170426"
                            />
                        </svg>
                    </span>
                    <p className='s-n-p-1'>{`${activeIndex + 1}/${CardCarouselData[selectedProduct].length}`}</p>
                    <span onClick={handleRightArrowClick}>
                        <svg width="39" height="39" fill="none" className="right-arrow">
                            <path
                                className='r-a-p'
                                clipRule="evenodd"
                                d="M19.477 37.582v0c9.942 0 18-8.058 18-18v0c0-9.942-8.058-18-18-18v0c-9.942 0-18 8.058-18 18v0c0 9.942 8.058 18 18 18z"
                                stroke="#170426"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                className='r-a-p-a'
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M22.57 12.875a1 1 0 00-1.414 1.414l4.293 4.293H11.863a1 1 0 100 2H25.45l-4.293 4.293a1 1 0 101.414 1.414l6-6a.995.995 0 00.217-1.09.998.998 0 00-.21-.318l-.007-.007m-6-6l6 6-6-6z"
                                fill="#170426"
                            />
                        </svg>
                    </span>
                </button>
            </div>
            <div className='s-s-1'>
                <div className='s-s-1-t'>
                    {CardCarouselData[selectedProduct].map((item, itemIndex) => (
                        <p className='s-s-p-1'>
                            <span className='s-s-p-1-b'>{item.bold}</span>
                            {item.head}
                        </p>
                    ))}
                    <a className='s-s-a-1'>view all </a>
                </div>
                <div className='s-s-1-s' style={{ transform: `translateX(${-400 * activeIndex}px)` }}>
                    {CardCarouselData[selectedProduct].map((item, itemIndex) => (
                        selectedProduct === 2 ?
                            <CardCarouselT
                                key={itemIndex}
                                imageUrl={item.imageUrl}
                            />
                            :
                            <CardCarousel
                                key={itemIndex}
                                imageUrl={item.imageUrl}
                                content={item.content}
                            />
                    ))}
                </div>
            </div>
        </div>
    );
}
