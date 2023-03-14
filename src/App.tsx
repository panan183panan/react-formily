import React from 'react'
import Login from './sign_in'
import Regester from './sign_up'
import Formlist from './formsearch';
import Formsroll from './formsroll';
export default function App() {
  return (
    <div>
      <Login></Login>
      <Regester></Regester>
      <Formlist />
      <Formsroll />
    </div>
  )
}
