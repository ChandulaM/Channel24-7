import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { SessionStorageService } from 'ngx-webstorage';

@Component({
  selector: 'app-search-docs',
  templateUrl: './search-docs.component.html',
  styleUrls: ['./search-docs.component.css']
})
export class SearchDocsComponent implements OnInit {
  searchForm: FormGroup|any;
  session : any;
  constructor(private router: Router, private fb : FormBuilder,  private sessionSt : SessionStorageService) { }
  search(){
    console.log('in search')
    this.router.navigate(['patient/select-doctor']);
  }
  ngOnInit(): void {
    this.session = this.sessionSt.retrieve("logged");
    console.log(this.session,"dsaflks");
    this.searchForm = new FormGroup({
      logEmail : new FormControl(),
      password :new FormControl()
    });
  }

}
