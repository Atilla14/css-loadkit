const initialState = {
  text: 'hey there bitches'
}

export default function reducer (state=initialState, action) {
  switch (action.type) {
    case 'test':
      return Object.assign({}, state, { text: action.text })
      break;
    default:
      return state
  }
}
