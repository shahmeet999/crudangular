import { Component, OnInit } from '@angular/core';
import { Task } from '../shared/task';
import { TaskdataService } from '../shared/taskdata.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
allTasks:Task[]=[];
  constructor(private _taskdata:TaskdataService) { }

  ngOnInit() {

    this._taskdata.getAllTask().subscribe(

  (data:Task[])=>{this.allTasks=data;}
  ,function(error){console.log(error);}
  ,function(){console.log('all done display');}
    );
  }

  deleteStatus(item:Task)
  {
    this._taskdata.deleteTask(item.Id).subscribe(

      (data:any)=>{
        
        this.allTasks.splice(this.allTasks.indexOf(item),1); 
      },
      function(error){console.log(error);}
  ,function(){console.log('delete done');}
    );
  }

updateStatus(item:Task)
{
  this._taskdata.editTask(item)
  .subscribe(
    (data:any)=>{
      if(item.Status=="done")
      {
        item.Status='pending';
      }
      else
      {
          item.Status='done';
      }
    },
    function(error){
      console.log(error);
    },
    function(){
      alert('Edited successfully');
    }
  );
}
}
