export default function theme(state = "bright", action) {
  if (action.type === "CHANGE_THEME") {
    return action.payload;
  } else {
    return state;
  }
}
