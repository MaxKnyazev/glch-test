import { useSelector } from 'react-redux';
import { Footer } from '../Footer';
import { Header } from '../Header';
import { Init } from '../Init';
import { Loader } from '../Loader/Loader';
import { Main } from '../Main';
import './App.scss';

const App = () => {
  const { isLoading, isInit } = useSelector(state => state.cardsReducer);

  return (
    <div className='app'>
      <Header />
      {isInit && <Init />}
      {isLoading && <Loader />}
      {isInit || isLoading || <Main />}
      <Footer />
    </div>
  )
}

export { App }