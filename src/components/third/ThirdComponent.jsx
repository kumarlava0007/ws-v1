import React from 'react';
import '../../styles/third/third.css'
import resultsSvg from '../../images/results.svg'

export default function ThirdComponent() {
    return (
        <div className='t_thirdCompMainCont'>
            <div className="t_thirdCompCont">
                <div className="t_thirdCompFirst">
                    <div className='t_thirdCompFirstImg'>
                        <img src={resultsSvg} alt="img" className='svgImage' />
                    </div>
                </div>
                <div className="t_thirdCompSecond">
                    <div className='t_thirdCompSecondContent'>
                        <span className='textTagOne'>
                            Heading
                        </span>
                        <br /><br />
                        <span className='textTagTwo t_textTagTwo'>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum nam rem consequuntur adipisci odio quisquam cupiditate quia, perspiciatis vel sed quas reiciendis quidem iure optio animi modi earum, vitae voluptates?
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}
