import {Component, OnInit, OnDestroy} from "@angular/core";
import {Router, NavigationEnd} from "@angular/router";
import {Subscription} from "rxjs";
import * as io from "socket.io-client";

@Component(
    {
        selector: 'my-app',
        template: 'App Component',
    }
)
export class AppComponent implements OnInit, OnDestroy
{
    protected subscription: Subscription;

    constructor(protected router: Router)
    {
    }

    dumb()
    {
      let socket = io();

      socket.on('connect', onConnect);

      function onConnect(){
        console.log('connect ' + socket.id);
      }
    }

    ngOnInit()
    {
        this.subscription = this.router.events.subscribe(this.routeChanges.bind(this));
    }

    ngOnDestroy()
    {
        if (this.subscription) {
            this.subscription.unsubscribe();
            this.subscription = null;
        }
    }

    protected routeChanges(event: Event | NavigationEnd)
    {
        if (event instanceof NavigationEnd) {
            localStorage.setItem('sioPreviousUrl', event.url);
        }
    }
}
