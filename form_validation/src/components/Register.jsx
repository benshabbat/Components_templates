import {useState,useRef,useEffect} from 'react'
import  {faCheck,faTime,faInfoCircle} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const Register = () => {
  const userRef = useRef()
  const errRef = useRef()

  const [user, setUser] = useState("")
  const [validName, setValidName] = useState(false)
  const [userFocus, setUserFocus] = useState(false)
  return (
    <div>
      
    </div>
  )
}

export default Register