import React from 'react';
import '../../styles/first/first.css'
import NavigationComponent from './NavigationComponent';
import image from '../../images/study.svg'
import bulb from '../../images/bulb.svg'

export default function ThirdComponent() {
    return (
        <div className='f_firstComponentMainContainer'>
            < NavigationComponent />

            {/* Break Component */}

            <div className='f_firstComponentContainer'>
                <div className='f_firstComponentContFirst'>
                    <div className='f_firstComponentContFirstImage'>
                        <img src={image} alt="img" className='svgImage' />
                    </div>
                    <div className='f_firstComponentContFirstContent'>
                        <span className='textTagOne'>
                            Join us on a journey <br /> to simplify the learning process
                        </span>
                        <br /><br />
                        <span className='textTagTwo f_textTagTwo'>
                            Our approach is all about making learning as easy as pie.
                            <br />
                            Learn smarter, not harder, with our educational solutions.
                        </span>
                    </div>
                </div>
            </div>

            <div className='breakFirst'>

            </div>

            {/* Break Component */}

            <div className='f_secComponentContainer'>
                <div className='f_secComponentContFirst'>
                    <div className='f_secComponentCard'>
                        <div className='f_secComponentCardFirst'>
                            <img src={bulb} alt="img" className='svgImage' />
                        </div>
                        <div className='f_secComponentCardSec'>
                            <h3>Head</h3>
                            <span className='textTagFour'>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam magni tempora ad modi veritatis porro autem, doloremque ullam non eaque earum, unde sint eum velit facere consectetur corrupti neque labore.
                            </span>
                        </div>
                    </div>
                    <div className='f_secComponentCard'>
                        <div className='f_secComponentCardFirst'>
                            <img src={bulb} alt="img" className='svgImage' />
                        </div>
                        <div className='f_secComponentCardSec'>
                            <h3>Head</h3>
                            <span className='textTagFour'>

                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam magni tempora ad modi veritatis porro autem, doloremque
                            </span>
                        </div>
                    </div>
                    <div className='f_secComponentCard'>
                        <div className='f_secComponentCardFirst'>
                            <img src={bulb} alt="img" className='svgImage' />
                        </div>
                        <div className='f_secComponentCardSec'>
                            <h3>Head</h3>
                            <span className='textTagFour'>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam magni tempora ad modi veritatis porro autem, doloremque ullam non eaque earum, unde sint eum velit facere consectetur corrupti neque labore.
                            </span>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}
