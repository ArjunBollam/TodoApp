
interface Action {
    type:string;
    payload?:any;
}
interface Todo{
    id:number;
    name:string;
    completed:boolean;
}

const ADD_TODO = 'ADD_TODO';
const TOGGLE_COMPLETD = 'TOGGLE_COMPLETD';

export class AddTodos implements Action{
   type=ADD_TODO;
   constructor(public payload:any){

   }
}
export class ToggleCompleted implements Action {
    type = TOGGLE_COMPLETD;
    constructor(public payload:any){

    }
}

export function reducer(state: any[],action){
    switch(action.type){
        case ADD_TODO:
         return [...state,action.payload];

        case TOGGLE_COMPLETD:
        let newtodo:Todo = state.find((todo) => todo.id == action.payload.index);
        newtodo.completed = !newtodo.completed;
        let newstate =  state.map((todo)=> (todo.id == action.payload.index) ? newtodo : todo);
        return newstate;         
    }
    return state;
}