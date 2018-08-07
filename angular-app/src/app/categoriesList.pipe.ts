import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'categoriesList'
})
export class CategoriesListPipe implements PipeTransform {
    transform(items: any[]): any[] {
        
        let categories = items.map(a => a.bsr_category);
       
        function unique(arr) {
            let obj = {};
            for (let i = 0; i < arr.length; i++) {
              let str = arr[i];
              obj[str] = true;
            }
            return Object.keys(obj);
          }
          
          let uniqueCategories = unique(categories); 

        return uniqueCategories;

    }
}
