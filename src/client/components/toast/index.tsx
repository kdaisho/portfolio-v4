import { DURATION } from './constants'
import React from 'react'
import ReactDOM from 'react-dom'
import Toast from './Toast'
import './toast.css'

type ShowToastProps = {
  message: string
  kind: string
}

export const showToast = ({ message, kind }: ShowToastProps): Promise<void> => {
  const div = document.createElement('div')
  div.className = 'toast-container'
  ReactDOM.render(
    <Toast message={message} kind={kind} />,
    document.body.appendChild(div)
  )

  return new Promise<void>(resolve => {
    setTimeout(() => {
      resolve()
    }, DURATION)
  })
}
