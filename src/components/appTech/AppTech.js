import './appTech.sass';
import gitpic from '../../resources/img/git.svg';
import html5pic from '../../resources/img/html5.svg';
import jspic from '../../resources/img/JS.svg';
import css3 from '../../resources/img/css3.svg';
import reactpic from '../../resources/img/React.svg';

const AppTech = () => {
    return (
        <section className="appTech">
            <div className="container">
                <span className='appTech__title'>Technologies</span>
                <div className="appTech-grid">
                    <div className="appTech-item">
                        <img src={gitpic} alt="git" />
                        <div className="text_big"></div>
                        <div className="text_small"></div>
                    </div>
                    <div className="appTech-item">
                        <img src={html5pic} alt="html5" />
                        <div className="text_big"></div>
                        <div className="text_small"></div>
                    </div>
                    <div className="appTech-item">
                        <img src={jspic} alt="jspic" />
                        <div className="text_big"></div>
                        <div className="text_small"></div>
                    </div>
                    <div className="appTech-item">
                        <img src={reactpic} alt="reactpic" />
                        <div className="text_big"></div>
                        <div className="text_small"></div>
                    </div>
                    <div className="appTech-item">
                        <img src={css3} alt="css3" />
                        <div className="text_big"></div>
                        <div className="text_small"></div>
                    </div>
                </div>
                <div className="appTech__footer">
                    <span className="appTech__footer-text">
                        Born to create fire.
                    </span>
                </div>
            </div>
        </section>
    )
}

export default AppTech;