import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';
import { Location } from '@angular/common';


@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  currentUser = sessionStorage.getItem("userId"); 

  event = {
   
    "userId": {
        "userId": this.currentUser
       
    },
    "name": "",
    "street": "",
    "city": "",
    "zip": null,
    "hour": null,
    "minute": null,
    
  }

  myEvents: any
  allEvents: any

  constructor(private eventService: EventService, private location: Location) { }

  ngOnInit(): void {

   window.location.reload
   

  //  sessionStorage.getItem("userId");

   this.eventService.getAllEvents().subscribe( response => {
     this.allEvents = response
   })

   this.eventService.getEventByUserId(this.currentUser).subscribe(response => {
     this.myEvents = response;

   })
    
  }


  createEvent() {
   this.eventService.createEvent(this.event).subscribe()
  alert("Event created!");
  }

  clearSession() {
    sessionStorage.clear()
    
  }


}
