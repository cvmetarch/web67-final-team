import { useState } from 'react';
import ReactSimplyCarousel from 'react-simply-carousel';
import { Link } from 'react-router-dom';
import ban1 from '../../images/banner-top0.png';
import ban2 from '../../images/banner-top1.png';
import ban3 from '../../images/banner-top2.png';
import ban4 from '../../images/banner-top3.jpg';
import ban5 from '../../images/banner-top4.png';

export default function Carousel() {
    const [activeSlideIndex, setActiveSlideIndex] = useState(0);
    return (
        <div style={{ width: '100%', margin: '2.5% 0 2.5% 0'}}>
            <ReactSimplyCarousel
                activeSlideIndex={activeSlideIndex}
                onRequestChange={setActiveSlideIndex}
                itemsToShow={1}
                itemsToScroll={1}
                forwardBtnProps={{
                    style: {
                        alignSelf: 'center',
                        background: 'blue',
                        border: 'none',
                        borderRadius: '50%',
                        color: 'white',
                        cursor: 'pointer',
                        fontSize: '20px',
                        height: 30,
                        lineHeight: 1,
                        textAlign: 'center',
                        width: 30,
                        marginLeft: '15px',
                    },
                    children: <span>{`>`}</span>,
                }}
                backwardBtnProps={{
                    style: {
                        alignSelf: 'center',
                        background: 'blue',
                        border: 'none',
                        borderRadius: '50%',
                        color: 'white',
                        cursor: 'pointer',
                        fontSize: '20px',
                        height: 30,
                        lineHeight: 1,
                        textAlign: 'center',
                        width: 30,
                        marginRight: '15px',
                    },
                    children: <span>{`<`}</span>,
                }}
                responsiveProps={[
                    {
                        itemsToShow: 1,
                        itemsToScroll: 1,
                        minWidth: 768,
                    },
                ]}
                autoplay={true}
                autoplayDelay={5000}
                speed={1000}
                easing="linear"
            >
                <banner>
                    <div style={{ backgroundSize: 'cover', width: '90vw', height: '60vh', backgroundImage: `url(${ban1})` }}>
                    </div>
                </banner>
                <banner>
                    <div style={{ backgroundSize: 'cover', width: '90vw', height: '60vh', backgroundImage: `url(${ban2})` }}>
                    </div>
                </banner>
                <banner>
                    <div style={{ backgroundSize: 'cover', width: '90vw', height: '60vh', backgroundImage: `url(${ban3})` }}>
                    </div>
                </banner>
                <banner>
                    <div style={{ backgroundSize: 'cover', width: '90vw', height: '60vh', backgroundImage: `url(${ban4})` }}>
                    </div>
                </banner>
                <banner>
                    <div style={{ backgroundSize: 'cover', width: '90vw', height: '60vh', backgroundImage: `url(${ban5})` }}>
                    </div>
                </banner>
            </ReactSimplyCarousel>
        </div>
    );
}