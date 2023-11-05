import React from 'react';
import '../../styles/second/second.css'
import teachingSvg from '../../images/teaching.svg'

export default function SecondComponent() {
    return (
       <div className='s_secondCompMainCont'>
        <div className="s_secondCompCont">
            <div className="s_secondCompFirst">
                <div className='s_secondCompFirstImg'>
                <img src={teachingSvg} alt="img" className='svgImage' />
                </div>
            </div>
            <div className="s_secondCompSecond">
                <div className='s_secondCompSecondContent'>
                    <span className='textTagOne'>
                        Heading
                    </span>
                    <br /><br />
                    <span className='textTagTwo s_textTagTwo'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum nam rem consequuntur adipisci odio quisquam cupiditate quia, perspiciatis vel sed quas reiciendis quidem iure optio animi modi earum, vitae voluptates?
                    </span>
                </div>
            </div>
        </div>
       </div>
    );
}
