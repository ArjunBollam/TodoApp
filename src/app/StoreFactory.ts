import {Store} from './Store';
import {reducer} from './reducers/todos.reducer';

const reducers = {todos:reducer}  
const initialState= {todos:[{id:0,name:'Go to Wallamrt',completed:false}]};

 let StoreFactoryService = () => {
    return new Store(reducers,initialState);
};

export let StoreProvioder = {
    provide:Store,
    useFactory:StoreFactoryService
}