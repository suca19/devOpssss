import {create} from "zustand";
import {createDirectus, authentication, rest, login, readMe, readUsers, readRole} from '@directus/sdk';

const createSelector = (_store)=>{
    let store = _store;
    store.use= {};
    for (let k of Object.keys(store.getState()))
    {
        store.use[k] = ()=>{store((s)=>s[k])}
    }
    return store;
}

export const useAppStore = createSelector(create((set)=>
    ({
        email : "",
        password:"",
        user : null,

    })))

export const loginUser = async (email,password)=>
{
    const client = createDirectus('http://localhost:8055').with(authentication('json')).with(rest());
    const result = await client.login(email, password);
    const userDirectus = await client.request(readMe(""));

    useAppStore.setState({user: userDirectus})
};
export const globalUpdateEmail = (email)=>
{
    useAppStore.setState({email: email})
}
export const globalUpdatePassword = (password)=>
{
    useAppStore.setState({password: password})
}
