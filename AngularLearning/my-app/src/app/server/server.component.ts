import { Component, OnInit } from '@angular/core';
import { ServerDataService } from './server-data.service';
import { IServerList } from './iserver-list';
import { Router } from '@angular/router';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
serverList:IServerList[];
  constructor(private serverDataService: ServerDataService, private router: Router) { }

  ngOnInit(): void {
    this.loadServerList();
  }
  private loadServerList() {
    this.serverDataService.getServerList().subscribe({
      next: data => this.serverList = data
    });
  }
  addNewButtonClick(){
this.router.navigate(['/serveradd'])   ;
  }
}
