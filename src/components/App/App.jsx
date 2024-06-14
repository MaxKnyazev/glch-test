import { Footer } from '../Footer';
import { Header } from '../Header';
import { Main } from '../Main';
import './App.scss';

const App = () => {

  return (
    <div className='app'>
      <Header />
      <Main />
      <Footer />
    </div>
  )
}

export { App }
