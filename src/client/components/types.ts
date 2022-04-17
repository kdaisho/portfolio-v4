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

type HandleFilterChangeProps = {
  target: { checked: boolean }
  value: string | number
  filterTerms: string[]
  setFilterTerms: (terms: string[]) => void
}

export type FilterableSection = {
  openPane: string
  togglePane: (name: string) => void
  handleFilterChange: (props: HandleFilterChangeProps) => void
  theme: string
}
