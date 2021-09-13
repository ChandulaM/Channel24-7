import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-docs',
  templateUrl: './search-docs.component.html',
  styleUrls: ['./search-docs.component.css']
})
export class SearchDocsComponent implements OnInit {
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
