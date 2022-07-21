import MockAdapter from 'axios-mock-adapter'
import axios from 'axios'
import 'babel-polyfill'
import { sendMessage } from '../mail'

const mock = new MockAdapter(axios)

describe('mail', () => {
  const token = 'testToken'

  beforeEach(() => {
    mock.reset()
    mock
      .onPost(
        `https://www.google.com/recaptcha/api/siteverify?secret=${undefined}&response=${token}`
      )
      .reply(200, { success: true })
  })

  it('should return 400 error when email, name and message are missing', async () => {
    const req = {
      body: {
        token,
      },
    }
    const res = {
      status(statusCode) {
        expect(statusCode).toBe(400)
        return this
      },
      send(result) {
        expect(result.text).toBe('Name, email and message are required.')
      },
    }

    await sendMessage(req, res)
  })
})
