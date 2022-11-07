import { Component } from "@angular/core";

@Component({
    selector: 'mw-app',
    templateUrl: './app.component.html',
    styleUrls: [ 'app.component.css']
})
export class AppComponent {
    firstMediaItem = {
        id:1,
        name: 'Firebug',
        meduim: 'series',
        category: 'Science Fiction',
        year: 2010,
        watchedOn: 129416656384,
        isFavorite: false
    }

    onMediaItemDelete(mediaItem) {

    }
}