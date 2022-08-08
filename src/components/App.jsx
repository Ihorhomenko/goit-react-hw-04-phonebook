import React, { Component } from 'react';
import PhoneRegBook from './phonebook/phonebook';
import Contacts from './contacts/contacts';
import Filter from './filter/filter';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
      try {
        const savedContacts = localStorage.getItem('contacts');
        return savedContacts === null ? undefined : this.setState({ contacts: JSON.parse(savedContacts) });
      } catch (error) {
        console.error("Get state error: ", error.message);
      }
  }

  componentDidUpdate() {
    localStorage.setItem("contacts", JSON.stringify(this.state.contacts))
  }

  handleSubmitForm = data => {
    this.setState({ contacts: [...this.state.contacts, data] })
  };

  handleChangeFilter = value => {
    this.setState({ filter: value });
  };

  handleDelete = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    const normalazeFilter = this.state.filter.toLowerCase();
    const visibleContacts = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalazeFilter)
    );
    return (
      <div>
        <section className='phonebook'>
        <h2>Phonebook</h2>
        <div className="phone-reg-book">
          <PhoneRegBook onSubmit={this.handleSubmitForm} />
        </div>
        <div>
          <h2>Contacts</h2>
          <Filter onFilter={this.handleChangeFilter} />
          <Contacts contacts={visibleContacts} onDelete={this.handleDelete} />
        </div>
        </section>
      </div>
    );
  }
}

export default App;
