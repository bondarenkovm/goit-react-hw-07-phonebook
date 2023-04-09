import { useSelector, useDispatch } from 'react-redux';
import {
  selectFilteredContact,
  // getContacts,
  // getFilterValue,
  selectLoading,
  selectError,
} from 'redux/selectors';
import { useEffect } from 'react';
import { fetchContacts, deleteContact } from 'redux/operations';

import { List, Item, Button } from './ContactList.styled';
import { ThreeDots } from 'react-loader-spinner';

const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContact);
  // const contacts = useSelector(getContacts);
  // const filter = useSelector(getFilterValue);
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  // const filteredContacts = contacts.filter(({ name }) =>
  //   name.toLowerCase().includes(filter.toLowerCase())
  // );

  const delContact = id => {
    dispatch(deleteContact(id));
  };

  return (
    <>
      {isLoading && !error && (
        <ThreeDots
          height="40"
          width="40"
          radius="9"
          color="#4fa94d"
          ariaLabel="three-dots-loading"
          wrapperStyle={{}}
          wrapperClassName=""
          visible={true}
        />
      )}
      {/* {isLoading && !error && <div>Loading...</div>} */}
      <List>
        {filteredContacts.map(({ id, name, number }) => {
          return (
            <Item key={id}>
              <span>{name}:</span>
              <span>{number}</span>
              <Button type="button" onClick={() => delContact(id)}>
                Delete
              </Button>
            </Item>
          );
        })}
      </List>
    </>
  );
};

export { ContactList };
