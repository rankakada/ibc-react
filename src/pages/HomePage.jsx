import '../styles/home.css';
import React from 'react';
import { Link } from 'react-router-dom';
import MobileHeader from '../components/mobileHeader';
import { useTranslation } from 'react-i18next';

import kh from '../assets/icons/kh.svg';
import en from '../assets/icons/en.svg';
import ch from '../assets/icons/ch.svg';
import th from '../assets/icons/th.svg';
import vn from '../assets/icons/vn.svg';
import desktopIcon from '../assets/icons/desktop.png';
import mobileIcon from '../assets/icons/mobile.png';
import playstoreIcon from '../assets/icons/playstore.png';
import appstoreIcon from '../assets/icons/appstore.png';
import afbgaming from '../assets/icons/afbgaming.png';
import asiagaminng from '../assets/icons/asiagaming.png';
import dreamgaming from '../assets/icons/dreamgaming.png';
import jokergaming from '../assets/icons/jokergaming.png';
import microgaming from '../assets/icons/microgaming.png';
import sexygaming from '../assets/icons/sexygaming.png';
import askap from '../assets/icons/askap.png';
import logo from '../assets/icons/logo.png';

const HomePage = () => {
    const { t, i18n } = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

  return (
    <div>
        <MobileHeader/>
        <main className='main'>
            <div className='languages-wrapper'>
                <img src={en} alt="english" className='changeLanguage' onClick={() => changeLanguage('en')}/>
                <img src={kh} alt="khmer" className='changeLanguage' onClick={() => changeLanguage('kh')}/>
                <img src={th} alt="thai" className='changeLanguage' onClick={() => changeLanguage('th')}/>
                <img src={ch} alt="chinese" className='changeLanguage' onClick={() => changeLanguage('ch')}/>
                <img src={vn} alt="vietnam" className='changeLanguage' onClick={() => changeLanguage('vn')}/>
            </div>
            <div className='option-view-wrapper'>
                <Link to="/login" className='option-view' id='desktop-view'>
                    <img src={desktopIcon} alt="desktop" />
                </Link>
                <Link to="/m.login" className='option-view' id='mobile-view'>
                    <img src={mobileIcon} alt="mobile" />
                </Link>
            </div>
            <div className="option-download-wrapper">
                <div className="option-download" id='appstore'>
                    <img src={appstoreIcon} alt="appstore" />
                </div>
                <div className="option-download" id='playstore'>
                    <img src={playstoreIcon} alt="playstore" />
                </div>
            </div>
            <div className="game-icon-wrapper">
                <img src={logo} alt="ibc2888" className='game-icon'/>
                <img src={dreamgaming} alt="dreamgaming" className='game-icon'/>
                <img src={sexygaming} alt="sexygaming" className='game-icon'/>
                <img src={asiagaminng} alt="asiagaming" className='game-icon'/>
                <img src={jokergaming} alt="jokergaming" className='game-icon'/>
                <img src={afbgaming} alt="afbgaming" className='game-icon'/>
                <img src={microgaming} alt="microgaming" className='game-icon'/>
                <img src={askap} alt="askap" className='game-icon'/>
            </div>
            <div className="footer">
                <h3 className="hotline">Hotline: 096 789 789</h3>
                <h3 className="privacy-text">{t('privacy')}</h3>
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
            </div>
        </main>
    </div>
  )
}

export default HomePage;