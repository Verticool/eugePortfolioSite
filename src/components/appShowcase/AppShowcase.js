import './appShowcase.sass';
import first from '../../resources/img/4.png'
import second from '../../resources/img/5.png'
import third from '../../resources/img/runsmart1.png'
import fourth from '../../resources/img/windows_2.png'
// import { createPortal } from 'react-dom';





const AppShowcase = () => {


    return (
        <div className="appShowcase">
            <div className="appShowcase-grid">
                <div className="appShowcase-item appShowcase-item-1"><img src={first} alt="123" /></div>
                <div className="appShowcase-item appShowcase-item-2"><img src={second} alt="123" /></div>
                <div className="appShowcase-item appShowcase-item-3"><img src={third} alt="123" /></div>
                <div className="appShowcase-item appShowcase-item-4"><img src={fourth} alt="123" /></div>
            </div>
        </div>
    )
}

export default AppShowcase;