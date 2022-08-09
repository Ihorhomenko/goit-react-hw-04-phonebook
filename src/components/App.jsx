import { useState, useEffect } from 'react';
import PhoneRegBook from './phonebook/phonebook';
import Contacts from './contacts/contacts';
import Filter from './filter/filter';

function App () {
 
  const [contacts, setContacts] = useState(() => {
    try {
      const savedContacts = localStorage.getItem('contacts');
      return savedContacts === null ? undefined : JSON.parse(savedContacts);
    } catch (error) {
      console.error("Get state error: ", error.message);
    }
  })

  const [filter, setFilter] = useState('')

  useEffect (() => {
    window.localStorage.setItem("contacts", JSON.stringify(contacts))
  }, [contacts]) 

  const handleSubmitForm = (data) => {
    setContacts([...contacts, data] )
  };

  const handleChangeFilter = value => {
    setFilter(value);
  };

  const normalazeFilter = filter.toLowerCase();
  const visibleContacts = contacts.filter(contact =>
  contact.name.toLowerCase().includes(normalazeFilter))

  const handleDelete = id => {
    setContacts(contacts.filter(contact => contact.id !== id))
  };


    
  return (
      <div>
        <section className='phonebook'>
        <h2>Phonebook</h2>
        <div className="phone-reg-book">
          <PhoneRegBook onSubmit={handleSubmitForm} />
        </div>
        <div>
          <h2>Contacts</h2>
          <Filter onFilter={handleChangeFilter} />
          <Contacts contacts={visibleContacts} onDelete={handleDelete} />
        </div>
        </section>
      </div>
    );
  }

export default App;
