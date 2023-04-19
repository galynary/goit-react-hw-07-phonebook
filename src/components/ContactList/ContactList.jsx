import { List, Item, DeleteButton } from './ContactList.styled';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { deleteContact, fetchContacts } from 'redux/contact/operations';
import {
  selectContacts,
  selectError,
  selectFilter,
  selectIsLoading,
} from 'redux/contact/selectors';

export const ContactList = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);
  const contacts = useSelector(selectContacts);
  const onError = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const filteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    const filtered = contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
    if (filtered.length === 0 && filter) {
    }
    return filtered;
  };

  const contactsToDisplay = filteredContacts();

  return (
    <List>
      {isLoading}
      {onError}
      {contactsToDisplay.map(({ id, name, phone }) => (
        <Item key={id}>
          {name}: {phone}
          <DeleteButton
            type="button"
            onClick={() => dispatch(deleteContact(id))}
          >
            Delete
          </DeleteButton>
        </Item>
      ))}
    </List>
  );
};
