import '../styles/mobile.css';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import MobileHeader from '../components/mobileHeader';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import { IoMdPerson } from "react-icons/io";
import { HiLockClosed, HiLockOpen } from "react-icons/hi";
import { MdLocalPhone } from "react-icons/md";
import { BsCurrencyExchange } from "react-icons/bs";
import { TbAffiliateFilled } from "react-icons/tb";
import { useTranslation } from 'react-i18next';

import banner1 from '../assets/images/mobile-banner.png';

const bannerData = [
    {id:1, image: banner1, alt: 'banner1' },
    {id:2, image: banner1, alt: 'banner2' },
    {id:3, image: banner1, alt: 'banner3' },
];

const MobileRegister = () => {
     const { t, i18n } = useTranslation();
    
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    const [randomCode, setRandomCode] = useState('');

    const generateRandomCode = () => {
        const code = Math.floor(10000 + Math.random() * 90000);
        setRandomCode(code); 
    };

    useEffect(() => {
        generateRandomCode();  
    }, []);  

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
                    <input type="text" name='username' id='username' className='username' placeholder={t('username')}/>
                </div>
                <div className="input-control">
                    <label htmlFor="password"> {t('password')} </label>
                    <HiLockClosed className='icon'/>
                    <input type="password" name='password' id='password' className='password' placeholder={t('password')} autoComplete='false'/>
                </div>
                <div className="input-control">
                    <label htmlFor="password"> {t('phoneNumber')} </label>
                    <MdLocalPhone className='icon'/>
                    <input type="tel" name='phoneNumber' id='phoneNumber' className='phoneNumber' placeholder='012-123-123'/>
                </div>
                <div className="input-control">
                    <label htmlFor="currency"> {t('currency')} </label>
                    <BsCurrencyExchange className='icon'/>
                    <select name="currency" id="currency" className="currency">
                        <option value="USD">USD</option>
                    </select>
                </div>
                <div className="input-control">
                    <label htmlFor="affiliate"> {t('affiliate')} </label>
                    <TbAffiliateFilled className='icon'/>
                    <input type="text" name='affiliate' id='affiliate' className='affiliate' placeholder={t('affiliate')}/>
                </div>
                <div className="input-control">
                    <label htmlFor="code"> {t('code')} </label>
                    <HiLockOpen className='icon'/>
                    <div className="code-control">
                    <input type="number" name='code' id='code' className='code' placeholder={t('code')}/>
                    <input type="number" className='code-random' value={randomCode} readOnly/>
                    </div>
                </div>
            <button type="submit" className='btn btn-register'> {t('register')} </button>
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
                <Link to="/register">Web Version</Link>
                <Link to="/m.login"> {t('loginAccount')} </Link>
            </div>
        </div>
    )
}

export default MobileRegister;