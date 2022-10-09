import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/service/category.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css'],
})
export class AddCategoryComponent implements OnInit {
  category = {
    title: '',
    description: '',
  };

  constructor(private categoryService: CategoryService) {}

  ngOnInit(): void {}

  addCategory() {
    console.log(this.category);
    if (this.category.title == '' || this.category.description == '') {
      Swal.fire("Title or Description can't be Empty", ' ', 'info');
      return;
    } else {
      this.categoryService.addCategory(this.category).subscribe(
        (data) => {
          Swal.fire('Category added Successfully !', '', 'success');
        },
        (error) => {
          Swal.fire('Error adding Category. Try Again !', ' ', 'error');
          return;
        }
      );
    }
  }
}
