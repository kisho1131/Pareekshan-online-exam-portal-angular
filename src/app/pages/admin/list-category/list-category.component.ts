import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/service/category.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-category',
  templateUrl: './list-category.component.html',
  styleUrls: ['./list-category.component.css'],
})
export class ListCategoryComponent implements OnInit {
  categoryList = [
    { id: 3, title: 'Programming', description: 'Software Development' },
    { id: 3, title: 'General', description: 'Software Development' },
    { id: 3, title: 'Science', description: 'Software Development' },
    { id: 3, title: 'Java Basic', description: 'Software Development' },
    { id: 3, title: 'Cpp Basic', description: 'Software Development' },
  ];
  constructor(private categoryService: CategoryService) {}

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe(
      (data: any) => {
        this.categoryList = data;
        if (this.categoryList.length == 0) {
          Swal.fire(
            'No Category Available. Please Add from the Menu !',
            ' ',
            'info'
          );
        }
        console.log(this.categoryList);
      },
      (error) => {
        console.log(error);
        Swal.fire('Error Fetching Category List', '', 'error');
      }
    );
  }
}
