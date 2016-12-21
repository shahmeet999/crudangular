import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TaskdataService } from '../shared/taskdata.service';
import { Task } from '../shared/task';

@Component({
  selector: 'app-addtasks',
  templateUrl: './addtasks.component.html',
  styleUrls: ['./addtasks.component.css']
})
export class AddtasksComponent implements OnInit {

status:string[]=[
  'done',
  'pending'
];
//model = {Id:'',Title:'',Status:'pending'};
model:Task=new Task('','','');

  constructor(private _taskdata:TaskdataService,private _router:Router) { }

  ngOnInit() {
  }
taskSubmit()
{
this._taskdata.addTask(this.model)
.subscribe(
(data:any)=>{
  console.log(data);
this._router.navigate(['/allTask']);
},
function(error){
  console.log(error);
},
function(){
  console.log('add');

}
);
}
}
