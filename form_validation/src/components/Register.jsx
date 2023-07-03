import {useState,useRef,useEffect} from 'react'
import  {faCheck,faTime,faInfoCircle} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const Register = () => {
  const userRef = useRef()
  const errRef = useRef()

  const [user, setUser] = useState("")
  const [validName, setValidName] = useState(false)
  const [userFocus, setUserFocus] = useState(false)

  const [password, setPassword] = useState("")
  const [validPassword, setValidPassword] = useState(false)
  const [passwordFocus, setPasswordFocus] = useState(false)

  const [matchPass, setMatchPass] = useState("")
  const [validMatchPass, setValidMatchPass] = useState(false)
  const [matchPassFocus, setMatchPassFocus] = useState(false)

  const [errMsg, setErrMsg] = useState("")
  const [isSuccses, setIsSuccses] = useState(false)


  return (
    <div>
      
    </div>
  )
}

export default Register