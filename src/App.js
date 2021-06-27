import { Component } from 'react';

import contacts from "./contacts.json";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      contactList: [contacts[Math.floor(Math.random() * contacts.length)]],
    }
  }

  handleAddRandomContact = () => {
    let newList = [...this.state.contactList];
    newList.push(contacts[Math.floor(Math.random() * contacts.length)]);
    this.setState({ 
      contactList: newList,
    });
  }

  handleSortByName = () => {
    let sortedList = [...this.state.contactList];
    sortedList.sort((a, b) => a.name.localeCompare(b.name));
    this.setState({ 
      contactList: sortedList,
    });
  }

  handleSortByPopularity = () => {
    let sortedList = [...this.state.contactList];
    sortedList.sort((a, b) => b.popularity-a.popularity);
    this.setState({ 
      contactList: sortedList,
    });
  }

  handleRemove = (event) => {
    let copyList = [...this.state.contactList];

    let newList = copyList.filter(x => {
      return x.id != event.target.value });

      console.log(event);

    this.setState({ 
      contactList: newList,
    });
  }

  render() {
    const { contactList } = this.state;

    return (
      <div className="container mx-auto">
        <header>
          <link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet"/>
        </header>
        <h1 className="font-bold text-6xl">IronContacts</h1>
        <button className="m-2 p-2 border" onClick={this.handleAddRandomContact}>Add Random Contact</button>
        <button className="m-2 p-2 border" onClick={this.handleSortByName}>Sort By Name</button>
        <button className="m-2 p-2 border" onClick={this.handleSortByPopularity}>Sort By Popularity</button>
        <div className="table-auto font-thin text-xl" >
        <table >
          <tr className="">
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Action</th>
          </tr>
          {contactList.map((contact) => {
            return (
              <tr>
                <td><img className="w-20" src={contact.pictureUrl} ></img></td>
                <td className="">{contact.name}</td>
                <td>{Math.round(contact.popularity)}</td>
                <button className="m-1 border" onClick={this.handleRemove} value = {contact.id}>Remove</button>
            </tr>
            );
          })}
        </table>
        </div>
      </div>
    )
  }
}

export default App;
