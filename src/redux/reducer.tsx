const initialState = {
    data: {
      type: 'folder',
      name: 'Loading...',
      children: [
        {
          type: 'file',
          name: 'loading...'
        }
      ]
    },
    loading: true
}

export const mainReducer = (state = initialState, action: any)=>{
    if(action.type == 'main') return { ...action.payload  }

    return state
}

export default mainReducer