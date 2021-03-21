import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';

import { EventService } from '../_services/event.service';

@Component({ selector: 'list', templateUrl: 'list.component.html' })
export class ListComponent implements OnInit {
    events = null;

    constructor(private eventService: EventService) {}

    ngOnInit() {
        this.eventService.getAll()
            .pipe(first())
            .subscribe(events => this.events = events);
    }

   /* deleteUser(id: string) {
        const user = this.users.find(x => x.id === id);
        user.isDeleting = true;
        this.userService.delete(id)
            .pipe(first())
            .subscribe(() => this.users = this.users.filter(x => x.id !== id));
    }
    */
}