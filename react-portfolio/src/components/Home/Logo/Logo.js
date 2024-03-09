import './Logo.css'
import LogoS from '../../../assets/images/logo-s.png'

function Logo() {
  return (
    <div className='logo-container'>
        <img src={LogoS} className='solid-logo' alt="S" />
    </div>
  )
}

export default Logo;