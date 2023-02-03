import React, { useEffect, useState } from "react"
import Counter from "./component/Counter"
import './App.css'
//it is a asyncronus code

const getUserData =() =>
 fetch('/user.json')
 .then((Response) => Response.json())

function App () {
const [name, setName] = useState()
const[roles, setRoles] = useState ()
const [roleList, setRoleList] = useState ()
useEffect (() => {
  console.log(`useEffect  ${name} ${roles}`)
  if(name){
    //use object.key to conwert arry into object
    setRoleList(Object.keys(roles).filter((item) => roles[item]))
  }
}, [name, roles])
//asyncronus code
const loadUser = async () => {
  const data = await getUserData()
  
setName(data.name)
setRoles(data.roles)
}
//const loadUser = () => {
//setName ('user1')
//setRoles ({
  //reader: true ,
//})
//}
  return(
    <div className="app">
     {/*<Counter />*/}
     <h3>{JSON.stringify(name)}</h3>
     <h3>{JSON.stringify(roles)}</h3>
     <h3>{JSON.stringify(roleList)}</h3>
     <button onClick={loadUser}>Load user</button>
    </div>
  )
}

export default App

