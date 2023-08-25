import './appHeader.sass';
import globe from '../../resources/img/globe.png'
import avatar from '../../resources/img/avatar.jpg';

const AppHeader = () => {
    return (
        <header className="app__header">
            <div className="app__header_img-group">
                <svg className='app__header_star' version="1.0" xmlns="http://www.w3.org/2000/svg"
                    width="810.000000pt" height="786.000000pt" viewBox="0 0 810.000000 786.000000"
                    preserveAspectRatio="xMidYMid meet">
                    <g transform="translate(0.000000,786.000000) scale(0.100000,-0.100000)"
                        fill="#000000" stroke="none">
                        <path d="M3649 7160 c-160 -20 -381 -115 -511 -219 -124 -98 -174 -158 -310
                                -372 -198 -309 -550 -499 -926 -499 -354 0 -685 -172 -889 -461 -147 -207
                                -218 -468 -194 -712 16 -161 49 -266 141 -452 86 -174 111 -243 136 -374 22
                                -118 15 -345 -15 -451 -31 -108 -35 -118 -122 -295 -43 -88 -90 -199 -103
                                -247 -134 -469 73 -981 496 -1233 164 -97 294 -133 528 -145 206 -10 298 -27
                                438 -82 200 -78 388 -232 506 -413 32 -49 75 -115 95 -145 51 -79 203 -227
                                290 -284 99 -65 206 -113 321 -144 85 -23 114 -26 275 -26 165 0 188 2 280 27
                                200 54 419 189 537 331 29 33 78 102 109 151 96 150 130 194 214 274 124 119
                                235 188 395 246 110 39 205 55 395 65 130 7 192 15 263 35 180 49 329 133 466
                                265 258 248 380 612 321 961 -22 132 -50 209 -141 389 -85 167 -118 274 -135
                                431 -24 222 15 398 147 664 118 237 138 316 138 535 -1 145 -4 177 -26 261
                                -87 323 -285 573 -568 715 -154 77 -261 102 -495 114 -442 24 -706 178 -957
                                560 -145 221 -271 337 -466 432 -144 69 -264 98 -432 103 -74 2 -165 0 -201
                                -5z"/>
                    </g>
                </svg>
                <span className='app__header_text'>EUGE</span>
                <img className='app__header_globe' src={globe} alt="globe" />
            </div>
            <div className="app__header__bio">
                <div className='app__header__bio__image'>
                    <img src={avatar} alt="avatar" />
                </div>
                <div className="app__header__bio__text">
                    <span className="app__header__bio__text_big">I am</span>
                    <span className="app__header__bio__text_small">Eugene Gudoshnikov, a passionate front-end developer who thrives on conquering the latest web trends. He's a master of JavaScript, React.js, Redux, HTML, and CSS, making your site look and feel like a digital masterpiece</span>
                </div>
            </div>
        </header>
    )
}

export default AppHeader;