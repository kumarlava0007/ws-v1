import React, { useState } from 'react';
import AnchorLink from "react-anchor-link-smooth-scroll";
import '../../styles/first/navigation.css'
import logo from '../../images/logo.png'
import instagramSvg from '../../images/instagram.svg'
import linkedinSvg from '../../images/linkedin.svg'
import youtubeSvg from '../../images/youtube.svg'
import menuSvg from '../../images/menu.svg'
import cancelSvg from '../../images/cancel.svg'

export default function NavigationComponent() {

    const [sideBar, setSideBar] = useState(false);

    function toggle() {
        setSideBar(!sideBar);
    }

    function close() {
        setSideBar(false);
    }

    return (
        <div className='navigationCompMainContainer'>
            <div className='navigationCompContainer'>
                <div className='navigationCompContainerLogo'>
                    <img src={logo} alt="img" className='logoImage' />
                </div>
                <div className='navigationCompNavsCompOne'>
                    <div className='navigationCompNavs'>
                        <AnchorLink href='#second_component' className='navLinks'><span>Courses</span></AnchorLink>
                        <AnchorLink href='#third_component' className='navLinks'><span>Team</span></AnchorLink>
                        <AnchorLink href='#footer_component' className='navLinks'><span>Contact</span></AnchorLink>
                    </div>
                    <div className='navigationCompSocialsCont'>
                        <div className='navigationCompSocials'>
                            <img className='svgImage' src={instagramSvg} alt="Your SVG" />
                            <img className='svgImage' src={linkedinSvg} alt="Your SVG" />
                            <img className='svgImage' src={youtubeSvg} alt="Your SVG" />
                        </div>

                    </div>
                </div>
                <div className='navigationCompNavsCompTwo openMenu' onClick={toggle}>
                    <img className='menuImage' src={sideBar ? cancelSvg : menuSvg} alt="Your SVG" />
                </div>

                <div className={sideBar ? 'sideBarOpen sideBarCont' : 'sideBarClose sideBarCont'}  onClick={close}>
                    <div className='sideBarNavs'>
                        <AnchorLink href='#second_component' className='navLinks'><span>Courses</span></AnchorLink>
                        <AnchorLink href='#third_component' className='navLinks'><span>Team</span></AnchorLink>
                        <AnchorLink href='#footer_component' className='navLinks'><span>Contact</span></AnchorLink>
                    </div>

                    <div className='sideBarNavsSocialsCont'>
                        <div className='sideBarNavsSocials'>
                            <img className='svgImage' src={instagramSvg} alt="Your SVG" />
                            <img className='svgImage' src={linkedinSvg} alt="Your SVG" />
                            <img className='svgImage' src={youtubeSvg} alt="Your SVG" />
                        </div>

                    </div>
                </div>

            </div>
        </div>

    );
}
