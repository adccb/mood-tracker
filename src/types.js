// @flow

export type ApplicationState = {
  data: Array<string>,
  daysInMonth: number,
  monthName: string,
  stateOptions: Array<string>,
  year: number
}

export type ApplicationProps = ApplicationState & {
  clear: Function,
  update: Function
}

export type CalendarProps = {
  data: Array<string>,
  daysInMonth: number,
  update: Function
}

export type NavbarProps = {
  clear: Function,
  monthName: string,
  year: number
}

export type NavbarState = {
  menuExpanded: boolean
}

export type SidebarProps = {
  stateOptions: Array<string>
}

type SaveAction = {
  type: 'UPDATE',
  data: {
    date: number,
    status: 'ok' | 'up' | 'down' | 'anxious'
  }
}

type ClearAction = {
  type: 'CLEAR',
  data: []
}

export type Action = SaveAction | ClearAction

