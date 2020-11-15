import { Component, OnInit } from '@angular/core';
import { getData } from 'shared-libs';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

  constructor() { }

  data = getData();

  ngOnInit(): void {
  }

}
