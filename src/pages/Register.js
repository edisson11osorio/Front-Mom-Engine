import React, { useState, useEffect } from 'react'
import LogoV from "../images/logo.png"
import noteService from './services/notes'
import "../styles/Vendor.css"

const AppRegister = () => {
  const [notes, setNotes] = useState([])
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [username, setUsername] = useState('')
  const [foundation, setFoundation] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [password, setPassword] = useState('')
  //const [showAll, setShowAll] = useState(true)
  /*const [errorMessage, setErrorMessage] = useState(null)*/

  useEffect(() => {
    noteService
      .getAll()
      .then(initialNotes => {
        setNotes(initialNotes)
      })
  }, [])

  const addNote = (event) => {
    event.preventDefault()
    const newObject = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      username: username,
      foundationName: foundation,
      phoneNumber: phoneNumber,
      password: password,
      date: new Date().toISOString(),
      vendor: Math.random() > 0.5,
      id: notes.length + 1,
    }
    noteService
      .create(newObject)
      .then(returnedNote => {
        setNotes(notes.concat(returnedNote))
        setFirstName('')
        setLastName('')
        setEmail('')
        setUsername('')
        setFoundation('')
        setPhoneNumber('')
        setPassword('')
      })
  }

  /*const toggleProfileOf = (id) => {
    const note = notes.find(n => n.id === id)
    const changedNote = { ...note, vendor: !note.vendor }
  
    noteService
      .update(id, changedNote)
      .then(returnedNote => {
        setNotes(notes.map(note => note.id !== id ? note : returnedNote))
      })
      .catch(error => {
        setErrorMessage(
          `Note '${note.username}' was already removed from server`
        )
        setTimeout(() => {
          setErrorMessage(null)
        }, 5000)   
      })
  }*/

  /*const handleNoteChange = (event) => {
    setNewNote(event.target.value)
  }*/

  const handleFirstName = (event) => {
    setFirstName(event.target.value)
  }

  const handleLastName = (event) => {
    setLastName(event.target.value)
  }

  const handleEmail = (event) => {
    setEmail(event.target.value)
  }

  const handleUsername = (event) => {
    setUsername(event.target.value)
  }

  const handlePhoneNumber = (event) => {
    setPhoneNumber(event.target.value)
  }

  const handlePassword = (event) => {
    setPassword(event.target.value)
  }
  return (
    <div className='pre'>
      <img alt="logo" src={LogoV}  className='logov' />
      <h1 className='title'>Register</h1>
      <form onSubmit={addNote} className="formu">
        <div className='container'>
          <label htmlfor="firstname">First Name</label>
          <input type="text" id="firstName"
            value={firstName}
            onChange={handleFirstName}
          />
          <br />
          <label htmlfor="lastName">Last Name</label>
          <input type="text" id="lastName"
            value={lastName}
            onChange={handleLastName}
          />
          <br />
          <label htmlfor="email">Email</label>
          <input type="email" id="email"
            value={email}
            onChange={handleEmail}
          />
          <br />
          <label htmlfor="username">UserName</label>
          <input type="text" id="username"
            value={username}
            onChange={handleUsername}
          />
          <br />
          <label htmlfor="phoneNumber">Phone Number</label>
          <input type="text" id="phoneNumber"
            value={phoneNumber}
            onChange={handlePhoneNumber}
          />
          <br />
          <label htmlfor="password">Password</label>
          <input type="password" id="password"
            value={password}
            onChange={handlePassword} />
          <button type='submit'>Create Acount</button>
        </div>
      </form>
    </div>
  )
}
export default AppRegister 
