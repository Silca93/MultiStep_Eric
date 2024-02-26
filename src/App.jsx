import { useState, useRef, useEffect} from 'react'
import Main from './Main/Mains'
import './App.css'

function App() {
  const [text, setText] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")

 
 let textMatch = (e) => {
    setText(e.target.value)

  }
 let emailMatch = (e) => {
    setEmail(e.target.value)

  }
 let phoneMatch = (e) => {
    setPhone(e.target.value)

  }
 
  
  return (
    <div className="">
    <Main textMatch={textMatch} emailMatch={emailMatch} phoneMatch={phoneMatch} text={text} email={email} phone={phone}/>
     
    </div>
  )
}

export default App
