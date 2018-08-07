import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'categories'
})
export class CategoriesPipe implements PipeTransform {
    transform(items: any[], selectedCategory: {}): any[] {
        return items.filter(i => i.bsr_category == selectedCategory);
    }
}
