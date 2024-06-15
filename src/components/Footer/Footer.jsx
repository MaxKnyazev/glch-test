import { useSelector } from 'react-redux';
import './Footer.scss';

const Footer = () => {
  const { isDark } = useSelector(state => state.cardsReducer);	

  return (
    <footer className={isDark ? 'footer footer--dark' : 'footer footer--light'}>
      <div className={isDark ? 'footer__copyright footer__copyright--dark' : 'footer__copyright footer__copyright--light'}>
        Maxim Knyazev &copy; 2024
      </div>
    </footer>
  )
}

export { Footer }
