import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'categoryList'
})
export class CategoryList implements PipeTransform {
    transform(mediaItems) {
        let categories = [];
        mediaItems.forEach(mediaItem => {
            if(categories.indexOf(mediaItem.category) <= -1) {
                categories.push(mediaItem.category);
            }
            
        });
        return categories.join(', ');
    }

}