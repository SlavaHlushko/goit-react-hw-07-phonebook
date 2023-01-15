import { InputForm } from 'components/inputForm/InputForm';
import { Contacts } from 'components/contacts/Contacts';
import { Filter } from 'components/filter/Filter';

import { Div, Header, PContact, Section } from './App.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectError, selectIsLoading } from 'redux/selectors';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';
import { Loader } from './loader/Loader';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <Div>
      <Header>Phonebook</Header>
      <Section>
        <InputForm />
      </Section>
      <PContact>Contacts</PContact>
      {isLoading && !error && <Loader />}
      <Filter />
      <Contacts />
    </Div>
  );
};
