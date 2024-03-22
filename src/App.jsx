import { useState } from 'react'
import './App.css'
import EduForm from './components/education'
import ExpForm from './components/experience'
import GeneralForm from './components/general-info'

export default function App() {
  return (
    <div className='wrapper'>
      <GeneralForm />
      <EduForm />
      <ExpForm />
    </div>
  )
}
