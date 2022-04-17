export type Theme = {
  theme: string
}

export type ChangeThemeProps = {
  type: string
  payload: string
}

export type MailResponse = {
  text: string
  kind: string
}

export type FormEvent = {
  target: {
    name: string
    value: string
  }
}
