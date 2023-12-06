import React from 'react'
import ReactDOM from 'react-dom/client'
// import { HooksApp } from './HooksApp'
import { CounterApp } from './01-useState/CounterApp'
import { CounterWithCustomeHook } from './01-useState/CounterWithCustomeHook'
import { SimpleForm } from './02-useEffect/SimpleForm'
import { Message } from './02-useEffect/Message'
import { FormWidthCustomeHook } from './02-useEffect/FormWidthCustomeHook'
import { MultipleCustomeHook } from './03-example/MultipleCustomeHook'
import { FocusScreen } from './04-useRef/FocusScreen'
import { Layout } from './05-useLayoutEffect/Layout'
import { Memorize } from './06-memos/Memorize'
import { MemorizeHook } from './06-memos/MemorizeHook'
import { CallbackHook } from './06-memos/CallbackHook'
import { Padre } from './07-tarea-memo/Padre'

import './index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <Layout />
  </>,
)
