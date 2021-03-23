const hourReducer = (state = [], action) => {
  switch(action.type) {
    case 'ADD_DATE':
      return state.concat([action.data]);
    case 'EDIT_DATE':
      return state.map((postHour)=>postHour.id === action.id ? {...postHour,editing:!postHour.editing}:postHour)
    case 'UPDATE':
      return state.map((postHour)=>{
        if(postHour.id === action.id) {
          return {
             ...postHour,
             name:action.data.newName,
             phone:action.data.newPhone,
             editing: !postHour.editing
          }
        } else return postHour;
      })
    default:
      return state;
  }
}
export default hourReducer;