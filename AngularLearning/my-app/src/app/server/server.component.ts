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
  serverList: IServerList[];
  showModal: boolean;
  selectedServerId: number;
  constructor(private serverDataService: ServerDataService, private router: Router) { }

  ngOnInit(): void {
    this.loadServerList();
  }
  private loadServerList() {
    this.serverDataService.getServerList().subscribe({
      next: data => this.serverList = data
    });
  }
  addNewButtonClick() {
    this.router.navigate(['/servers/add']);
  }
  showDeleteModal(id: number) {
    console.log('Delete button clicked ' + id);
    this.selectedServerId = id;
    this.showModal = true;
  }
  deleteButtonClick(id:number){
    console.log('Confirmed delete');
    this.serverDataService.deleteServer(id).subscribe({
      next:data=>{
        console.log(data);
        this.loadServerList();
      }
    })
    this.showModal = false;
  }
  hideModal() {
    this.showModal = false;
    this.selectedServerId = 0;
  }

}
