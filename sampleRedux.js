export const types = {
  GCHANGE : 'GCHANGE',   //Gender Change
  SCHANGE : 'SCHANGE',  //Status Change
  SET_NAME: 'SET_NAME', //Name set
}

//Helper that will be utilized in other smart container
export const actionCreators = {
  gChange: (key) => {
    return {type: types.GCHANGE, payload: key}
  },
  sChange: (key) => {
    return {type: types.SCHANGE, payload: key}
  },
  setName: (name) => {
    return {type: types.SET_NAME, payload: name}
  },
}

const initialState = {
  profileKeys: ['key0', 'key3'], //First gender, second status
  name: 'UNKNOWN'
}

export const reducer = (state = initialState, action) => {
  const {profileKeys, name} = state
  const {type, payload} = action

  switch (type) {
    case types.GCHANGE: {
      return {
        ...state,
        profileKeys: [payload, ...profileKeys]
      }
    }

    case types.SCHANGE: {
      return {
        ...state,
        profileKeys: [profileKeys[0], payload]
      }
    }
  }

  return state
}
