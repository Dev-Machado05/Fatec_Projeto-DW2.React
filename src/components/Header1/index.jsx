import './style.css'
import Logo from '../../assets/image/Logo1.jpeg';

export default function Header1({ ButtonUse }) {

    function GoTo() {
        if (ButtonUse === 'Sign-Up') {
            window.location.href = '/Sign-up';
        } else if (ButtonUse === 'Login') {
            window.location.href = '/';
        }
    }

    return (
        <div className="HeaderContainer">
            <div className='LogoContainer'>
                <img src={Logo} alt="icone da Logo" />
                <p>BuyFlow</p>
            </div>
            <button onClick={GoTo}>{ButtonUse}</button>
        </div>
    )
}