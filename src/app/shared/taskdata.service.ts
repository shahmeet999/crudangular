import { Injectable } from '@angular/core';
import { Http,Response,RequestOptions,Headers } from '@angular/http';
import { Task } from './task';
import 'rxjs/Rx';

@Injectable()
export class TaskdataService {

  url:string="http://localhost:3000/Tasks/";

  constructor(private _http:Http) { }

getAllTask()
{
  return this._http.get(this.url).map((res:Response)=>res.json());
}

addTask(item:Task)
{
  let body=JSON.stringify(item);
  let header=new Headers({'Content-Type':'application/json'});
  let req=new RequestOptions({headers:header});
  return this._http.post(this.url,body,req)
  .map((res:Response)=>res.json());

}
editTask(item:Task)
{

  let body=JSON.stringify(item);
  let headers=new Headers({'Content-Type':'application/json'});
  let req=new RequestOptions({headers:headers});
  return this._http.put(this.url+item.Id,body,req).map((res:Response)=>res.json());

}

deleteTask(Id:string)
{

  let headers=new Headers({'Content-Type':'application/json'});
  let req=new RequestOptions({headers:headers});
  return this._http.delete(this.url+Id,req);

}

}
