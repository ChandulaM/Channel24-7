import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home-components',
  templateUrl: './home-components.component.html',
  styleUrls: ['./home-components.component.css']
})
export class HomeComponentsComponent implements OnInit {
  searchForm: FormGroup|any;
 

  constructor(private router: Router, private fb : FormBuilder) { }

  search(){
    console.log('in search')
    this.router.navigate(['patient/select-doctor']);
  }

  ngOnInit(): void {
    this.searchForm = new FormGroup({
      logEmail : new FormControl(),
      password :new FormControl()
    });
  }

}
