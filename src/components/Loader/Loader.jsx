import { SpinnerDotted } from 'spinners-react';
import './Loader.scss';

const Loader = () => {
  return (
    <SpinnerDotted className='loader' size={90} thickness={100} speed={77} color="rgba(172, 57, 57, 1)" />
  )
}

export { Loader }