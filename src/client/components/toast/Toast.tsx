import React, { FunctionComponent, useEffect } from 'react'
import { DURATION } from './constants'

type ToastProps = {
  message: string
  kind: string
}

const Toast: FunctionComponent<ToastProps> = ({ message, kind }) => {
  const timeoutIds: number[] = []

  useEffect(() => {
    const toastElements = document.getElementsByClassName('toast-container')
    timeoutIds.push(
      window.setTimeout(() => {
        toastElements[0].remove()
      }, DURATION)
    )

    return () => {
      while (timeoutIds.length) {
        clearTimeout(timeoutIds.shift())
      }
    }
  }, [])

  return <div className={`toast ${kind}`}>{message}</div>
}

export default Toast
