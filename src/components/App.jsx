import { PhoneBook } from './Phonebook/PhoneBook';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const App = () => {
  return (
    <>
      <ToastContainer />
      <PhoneBook />
    </>
  );
};
