import React, {
  FunctionComponent,
  MutableRefObject,
  useEffect,
  useRef,
} from 'react'
import { createPortal } from 'react-dom'
import './modal.css'

const modalRoot = document.getElementById('modal')

const Modal: FunctionComponent = ({ children }) => {
  const elementRef: MutableRefObject<unknown | null> = useRef(null)
  if (!elementRef.current) {
    elementRef.current = document.createElement('div')
  }

  useEffect(() => {
    if (!modalRoot || !elementRef.current) {
      return
    }
    modalRoot.appendChild(elementRef.current as HTMLElement)

    return () => {
      if (elementRef.current) {
        modalRoot.removeChild(elementRef.current as HTMLElement)
      }
    }
  }, [])

  return createPortal(<div>{children}</div>, elementRef.current as HTMLElement)
}

export default Modal
