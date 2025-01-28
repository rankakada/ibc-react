import '../styles/mobile.css';
import React from 'react';
import { Link } from 'react-router-dom';
import MobileHeader from '../components/mobileHeader';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import { IoMdPerson } from "react-icons/io";
import { HiLockClosed } from "react-icons/hi";
import { useTranslation } from 'react-i18next';

import banner1 from '../assets/images/mobile-banner.png';

const bannerData = [
    {id:1, image: banner1, alt: 'banner1' },
    {id:2, image: banner1, alt: 'banner2' },
    {id:3, image: banner1, alt: 'banner3' },
];

const MobileLogin = () => {
    const { t, i18n } = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    return (
        <div>
            <MobileHeader/>
            <Swiper 
                spaceBetween={50} 
                slidesPerView={1} 
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                effect={'fade'}
                modules={[Autoplay, EffectFade]}
                >
                {bannerData.map(banner => (
                    <SwiperSlide key={banner.id}>
                        <img src={banner.image} alt={banner.alt} style={{ width: '100%', height: 'auto' }}/>
                    </SwiperSlide>
                ))}
            </Swiper>
            <form action="#" className="form login-form">
                <div className="input-control">
                    <label htmlFor="username"> {t('username')} </label>
                    <IoMdPerson className='icon'/>
                    <input type="text" name='username' id='username' className='username' placeholder={t('username')} autoComplete='username'/>
                </div>
                <div className="input-control">
                    <label htmlFor="password"> {t('password')} </label>
                    <HiLockClosed className='icon'/>
                    <input type="password" name='password' id='password' className='password' placeholder={t('password')} autoComplete='current-password'/>
                </div>
                <div className="checkbox-wrapper">
                    <div className="checkbox-control">
                        <input type="checkbox" name="rememberMe" id="rememberMe" className='rememberMe'/>
                        <label htmlFor="rememberMe"> {t('rememberMe')} </label>
                    </div>
                    <div className="checkbox-control">
                        <input type="checkbox" name="agree" id="agree" className='agree'/>
                        <label htmlFor="agree"> {t('agree')} </label>
                    </div>
                </div>
            <button type="submit" className='btn btn-login'> {t('login')} </button>
            </form>
            <table>
                <tbody>
                    <tr className="language-wrapper">
                        <td className="changeLanguage" onClick={() => changeLanguage('en')}>English</td>
                        <td className="changeLanguage" onClick={() => changeLanguage('kh')}>ខ្មែរ</td>
                        <td className="changeLanguage" onClick={() => changeLanguage('th')}>ไทย</td>
                        <td className="changeLanguage" onClick={() => changeLanguage('ch')}>中文</td>
                        <td className="changeLanguage" onClick={() => changeLanguage('vn')}>Tiếng Việt</td>
                    </tr>
                </tbody>    
            </table>
            <div className="footer-link">
                <Link to="/login">Web Version</Link>
                <Link to="/m.register"> {t('createAccount')} </Link>
            </div>
        </div>
    )
}

export default MobileLogin;