import { Component } from "react";
import { GlobalStyle } from './GlobalStyle';
import { ContactForm } from "./ContactForm";
import { Filter } from "./Filter";
import { ContactList } from "./ContactList";
import { AppContainer, AppTitle, AppTitleContact } from "./App.style";
export class App extends Component {
    state = {
      contacts: [],
      filter: '',
  }; 

  addContact = newContact => {
     this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };


  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };


    handleFilterChange = (filter) => {
        this.setState({ filter });
  };
   
  render() {
    const { contacts, filter } = this.state;
    const filteredContacts = contacts.filter((contact) =>
  contact.name && contact.name.toLowerCase().includes(filter.toLowerCase().trim())
    );
        
    return (
      <AppContainer>
        <AppTitle>Phonebook</AppTitle>
        <ContactForm addContact={this.addContact} contacts={contacts}
        />

        {contacts.length > 0 ? (
          <>
             <AppTitleContact>Contacts list</AppTitleContact>
             <Filter filter={filter} onChange={this.handleFilterChange} />       
             <ContactList contacts={filteredContacts} deleteContact={this.deleteContact} />
          </>
        ) : null}
            
        <GlobalStyle />
      </AppContainer>
    );
  }
}
