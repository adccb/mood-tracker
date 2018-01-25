// @flow

export type ApplicationState = {
  data: Array<string>,
  daysInMonth: number,
  menuVisible: boolean,
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
  menuExpanded: boolean,
  monthName: string,
  toggleMenu: Function,
  year: number
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

type MenuToggleAction = {
  type: 'MENUTOGGLE',
}

export type Action = SaveAction | ClearAction | MenuToggleAction

