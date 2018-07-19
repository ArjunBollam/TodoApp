import {Injectable} from '@angular/core';

@Injectable({
    providedIn:'root'
})
export class Store {
   
    private state: {[key:string]: any};
    private reducers:{[key:string]:Function};
    constructor(reducers = {}, initialState={}){
    this.reducers = reducers
    this.state = this.reduce(initialState,{});
    }

    get value(){
        return this.state;
    }
    select(prop:string){
         let todos = this.state.todos;
         return todos;
    }
    dispatch(action){
     this.state = this.reduce(this.state,action); 
    }
    subscribe(){

    }

    private reduce(state,action): any {
        const newState = {};
        for(const prop in this.reducers){
            newState[prop] = this.reducers[prop](state[prop],action);
        }
        return newState;
    }
}