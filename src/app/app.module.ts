import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { MediaItemComponent } from './media-item/media-item.component';
import { MediaItemListComponent } from './media-item-list/media-item-list.component';
import { FavoriteDirective } from './favorite.directive';
import { CategoryList } from './category-list.pipe';
import { ReactiveFormsModule } from '@angular/forms';
import { MediaItemFormComponent } from './media-item-form/media-item-form.component';
import { lookupLists, lookupListToken } from './providers';

@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule
        
    ],
    declarations: [
        AppComponent,
        MediaItemComponent,
        MediaItemListComponent,
        FavoriteDirective,
        CategoryList,
        MediaItemFormComponent
    ],
    providers: [
        {provide: lookupListToken, useValue:lookupLists}
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {}