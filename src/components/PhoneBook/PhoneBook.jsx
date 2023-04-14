import { useSelector } from 'react-redux';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { Wrapper, Title, ContactTitle } from './PhoneBook.styled';
import { Loader } from 'components/Loader/Loader';
import { selectIsLoading } from 'redux/contact/selectors';

export const PhoneBook = () => {
  const isLoading = useSelector(selectIsLoading);
  return (
    <Wrapper>
      {isLoading && <Loader />}
      <Title>Phonebook</Title>
      <ContactForm></ContactForm>
      <ContactTitle>Contacts</ContactTitle>
      <Filter />
      <ContactList />
    </Wrapper>
  );
};
