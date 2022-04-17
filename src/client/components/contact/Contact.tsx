import { FormEvent, MailResponse, Theme } from '@src/components/types'
import React, { RefObject, useRef, useState } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'
import { connect } from 'react-redux'
import { showToast } from '../toast'
import './contact.css'

const Contact = ({ theme }: Theme) => {
  const [mail, setMail] = useState({ name: '', email: '', message: '' })
  const [isFormActive, setIsFormActive] = useState(true)
  const [mailResult, setMailResult] = useState('')
  const contactForm: RefObject<HTMLFormElement> = useRef()
  const reCaptchaRef = useRef<ReCAPTCHA>()

  const handleSubmit = async (event: {
    preventDefault: () => void
  }): Promise<void> => {
    event.preventDefault()
    launchMailAnimation()
    let token: string | null
    if (reCaptchaRef?.current) {
      token = await reCaptchaRef.current.executeAsync()
      reCaptchaRef.current.reset()
    } else {
      return void null
    }

    const response = await fetch('/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ ...mail, token }),
    })
    const { text, kind } = (await response.json()) as MailResponse

    setMailResult('Done!')
    void showToast({ message: text, kind })
  }

  const handleChange = ({ target }: FormEvent) => {
    setMail({ ...mail, [target.name]: target.value })
  }

  const launchMailAnimation = () => {
    contactForm?.current?.classList.add('fly')
    setTimeout(() => setIsFormActive(false), 200)
  }

  return (
    <section id='toContact' className={`section is-contact ${theme}`}>
      <div className='content-wrap is-side-by-side'>
        <div className='left-side title-group'>
          <h2 className='title'>Contact</h2>
          <p className='subtitle font-large'>
            Hopefully you found some of things that I've done over the years
            interesting and useful.
            <br />
            I'll be in touch with you when I hear from you.
          </p>
        </div>
        <div className='right-side'>
          <p className='thank-you-note'>
            {mailResult.length ? (
              <span>{mailResult}</span>
            ) : (
              !isFormActive && <span>Sending...</span>
            )}
          </p>
          <form
            className='contact-form'
            onSubmit={handleSubmit}
            ref={contactForm}
          >
            <div className='form-group'>
              <label htmlFor='name'>Name</label>
              <input
                className='text-input'
                type='text'
                name='name'
                value={mail.name}
                onChange={handleChange}
                tabIndex={isFormActive ? 0 : -1}
                maxLength={45}
                required
              />
            </div>
            <div className='form-group'>
              <label htmlFor='email'>Email</label>
              <input
                className='text-input'
                type='email'
                name='email'
                value={mail.email}
                onChange={handleChange}
                tabIndex={isFormActive ? 0 : -1}
                maxLength={45}
                required
              />
            </div>
            <div className='form-group'>
              <label htmlFor='message'>Message</label>
              <textarea
                name='message'
                rows={6}
                value={mail.message}
                onChange={handleChange}
                tabIndex={isFormActive ? 0 : -1}
                maxLength={2500}
                required
              />
            </div>
            <ReCAPTCHA
              sitekey='6Lc7kkkcAAAAAEin0TkCgCe0UlZzUPcLsvRDanPr'
              size='invisible'
              ref={reCaptchaRef}
            />
            <button
              className='button is-flat is-submit outline-button'
              tabIndex={isFormActive ? 0 : -1}
            >
              SEND
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

const mapStateToProps = ({ theme }: Theme) => ({
  theme,
})

export default connect(mapStateToProps)(Contact)
