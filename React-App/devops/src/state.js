import {createGlobalState} from "react-hooks-global-state";

let isAuth;
const {setGlobalState, useGlobalState} = createGlobalState(
    {
        isAuth : "false",
    });
export {useGlobalState,setGlobalState}