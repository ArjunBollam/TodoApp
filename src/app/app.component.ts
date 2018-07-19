import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup, FormBuilder, Validators} from '@angular/forms';

import {of} from 'rxjs/observable/of';
import {timer} from "rxjs/observable/timer";
import { Observable } from 'rxjs';
import { Store } from './Store';
import { AddTodos, reducer, ToggleCompleted } from './reducers/todos.reducer';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent implements OnInit {

  item:string;
  todos:any[];
  todoForm:FormGroup = new FormGroup({
    todoItem: new FormControl('',[Validators.required])
  })
  constructor(private store:Store){   
    // const reducers = {todos:reducer}  
    // this.store = new Store(reducers,{todos:[{name:'Go to Wallamrt',completed:false}]});
  }

  ngOnInit(): void {
    this.getTodos(); 
  }

  getTodos(){
    this.todos = this.store.select('todos');
    console.log(this.todos);
  }


  onKey(value:string):void{
   this.item = value;
  }

  AddItem(value?:string):void {
    this.store.dispatch(new AddTodos({id:this.todos.length, name:value,completed:false}));
    this.getTodos();

    console.log(`Values of state after adding
     are`);
    this.todos.forEach(element => {
      console.log(element);
    });
  }

  public toggleComplete(i: any){
     this.store.dispatch(new ToggleCompleted({index:i}));
     console.log(`Values of state after modifications
     are`);
    this.todos.forEach(element => {
      console.log(element);
    });
  }
  
  
}
