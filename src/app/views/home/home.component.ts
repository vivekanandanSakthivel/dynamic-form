import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';


export class ItemBean {
	itemId: number;
	itemLabel: string;
}


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public dynamicForm: FormGroup;
  public fieldItems: ItemBean[] = [{itemId: 1, itemLabel: 'Field 1'}, {itemId: 2, itemLabel: 'Field 2'}];
  public fields: ItemBean[] = [
    {itemId: 1, itemLabel: 'Field 1'},
    {itemId: 2, itemLabel: 'Field 2'},
    {itemId: 3, itemLabel: 'Field 3'},
    {itemId: 4, itemLabel: 'Field 4'},
    {itemId: 5, itemLabel: 'Field 5'},
    {itemId: 6, itemLabel: 'Field 6'},
    {itemId: 7, itemLabel: 'Field 7'},
    {itemId: 8, itemLabel: 'Field 8'},
    {itemId: 9, itemLabel: 'Field 9'},
    {itemId: 10, itemLabel: 'Field 10'},
  ];
  public navItems = ['Link 1', 'Link 2', 'Link 3', 'Link 4', 'Link 5'];
  constructor(private formBuilder: FormBuilder, private _authService: AuthService) { }

  ngOnInit() {
    this.dynamicForm = this.formBuilder.group({
      ItemName1: [''],
      ItemName2: [''],
      ItemName3: [''],
      ItemName4: [''],
      ItemName5: [''],
      ItemName6: [''],
      ItemName7: [''],
      ItemName8: [''],
      ItemName9: [''],
      ItemName10: [''],
    });
  }

  public getFormControlName(index) {
    return `ItemName${this.fields[index].itemId}`;
  }

  public onClickNavItem(index) {
    this.fieldItems = this.fields.slice(0, (index+1)*2);
  }

  public logout(): void {
    this._authService.logOut();
  }

  public onSubmit(): void {
    console.log(this.dynamicForm);
  }
}
