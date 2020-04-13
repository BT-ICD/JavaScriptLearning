import { Component, OnInit, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

import { IServerTypeDTOAdd } from './iserver-type-dtoadd';
import { ServerTypeDataService } from './server-type-data.service';
import { IServerType } from './iserver-type';

@Component({
  selector: 'app-lesson-twelve-httppost',
  templateUrl: './lesson-twelve-httppost.component.html'
})
export class LessonTwelveHttppostComponent implements OnInit, OnDestroy {
  serverTypeObj: IServerTypeDTOAdd = {
    "serverTypeId": 16,
    "name": "DR-Stack-2",
    "createdBy": "Angular"
  };
  showModal: boolean;
  selectedServerTypeId: number;
  serverTypeList: IServerType[];
  mySubscription: any;

  constructor(private serverTypeDataService: ServerTypeDataService, private router: Router, private changeDetectorRef: ChangeDetectorRef) {
    // Added to refresh page - reference URL:https://dzone.com/articles/refresh-angular-component-without-reload-or-naviga
    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    }
    this.mySubscription = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.router.navigated = false;
      }
    });

  }

  // Added to refresh page - reference URL:https://dzone.com/articles/refresh-angular-component-without-reload-or-naviga
  ngOnDestroy(): void {
    if (this.mySubscription) {
      this.mySubscription.unsubscribe();
    }
  }

  ngOnInit(): void {
    this.loadServerTypeDetails();
  }

  private loadServerTypeDetails() {
    const observable = this.serverTypeDataService.getServerTypes().subscribe({
      next: data => {
        this.serverTypeList = data;
      }
    });

  }
  addNewButtonClick() {
    this.router.navigate(['/L13']);
  }
  editButtonClick(id: number) {
    console.log('Edit Clicked:' + id);
    this.router.navigate(['/L14', id]);
  }
  deleteButtonClick(id: number) {
    console.log(`Delete button clicked ${id}`);
    this.serverTypeDataService.deleteServerType(id).subscribe({
      next: data => {
        console.log(data);
      }
    }
    );

    this.showModal = false;
    //Currently used following line to refresh page - need to work on changeDetectorRef
    window.location.reload();

  }
  showDeleteModal(id: number) {
    this.selectedServerTypeId = id;
    this.showModal = true;
  }
  hideModal() {
    this.showModal = false;
    this.selectedServerTypeId = 0;
  }
  addButtonClick() {
    this.serverTypeDataService.addNewServerType(this.serverTypeObj).subscribe({
      next: data => console.log(data)
    })
  }


}
