// import {TweenMax} from "gsap";

// TYPE  --帮助避免重复 type
export const actionTypes = {
  TAB_ON_INIT:'TAB_ON_INIT',
  TOUCH_ON_TAB:'TOUCH_ON_TAB',
  FOCUS_ON:'FOCUS_ON',
}






// ACTIONS

/*用于网页刷新/跳转时初始化 各个Tabs 的状态*/
export const initTabs = (obj) => (dispatch)=> {

  return dispatch({
        type: actionTypes.TAB_ON_INIT,
        obj: obj,
    })
}



export const touchOnTab = (name, pos) => (dispatch)=> {
  // debugger
  return dispatch({
        type: actionTypes.TOUCH_ON_TAB,
        name: name,
    })
}

export const setFocusOn = (index) => (dispatch)=> {
  // debugger
  // console.log(window)
  return dispatch({
        type: actionTypes.FOCUS_ON,
        index: index,
    })
}







//REDUCERS
export default (state = {}, action) => {
    switch (action.type) {

        /*@initTabs*/
        /*用于网页刷新/跳转时初始化 各个Tabs 的状态*/
        case actionTypes.TAB_ON_INIT:
          return {
            ...action.obj
          }

        case actionTypes.TOUCH_ON_TAB:
            return {
                ...state,
                on:action.name,
            }

        case actionTypes.FOCUS_ON:
            return {
                ...state,
                worksFocusOn:action.index,
            }


        default:
            return state
    }
}






