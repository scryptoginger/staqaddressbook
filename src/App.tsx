import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import ContactForm from './Components/ContactForm';
import DisplayContacts from './Components/DisplayContacts';

function App() {
  const [entries, setEntries] = useState([]);
  return (
    <div className="App">
      <ContactForm />
      <br />
      <DisplayContacts />
    </div>
  );
}

function EntryForm() {
  return(
    //Formik form stuff here?
  )
}

export default App;

/*
Still need to get the form to render and work,
get the form submissions to display on screen with default sorting, alphabetical by name, with option to switch to email instead.
Look more into Formik with email validation
*/