import { ChangeThemeProps } from 'src/client/components/types'

export default function changeTheme(theme: string): ChangeThemeProps {
  return {
    type: 'CHANGE_THEME',
    payload: theme,
  }
}
