import { createSlice } from '@reduxjs/toolkit'

const formSlice = createSlice({
  name: 'forms',
  initialState: {
    eventRegistrations: [],
    contactMessages: [],
    applications: [],
  },
  reducers: {
    addEventRegistration: (state, action) => {
      state.eventRegistrations.push({
        ...action.payload,
        id: Date.now(),
        submittedAt: new Date().toISOString(),
      })
    },
    addContactMessage: (state, action) => {
      state.contactMessages.push({
        ...action.payload,
        id: Date.now(),
        submittedAt: new Date().toISOString(),
      })
    },
    addApplication: (state, action) => {
      state.applications.push({
        ...action.payload,
        id: Date.now(),
        submittedAt: new Date().toISOString(),
      })
    },
  },
})

export const { addEventRegistration, addContactMessage, addApplication } = formSlice.actions
export default formSlice.reducer
