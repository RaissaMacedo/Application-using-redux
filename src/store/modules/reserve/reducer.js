export default function reserve(state = [], action) {
  console.log('teste', state);
  switch (action.type) {
    case 'ADD_RESEVE':
      return [...state, action.trip];
    default:
      return state;
  }
}
