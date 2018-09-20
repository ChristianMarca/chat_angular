import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import {Usuario} from "../../modelo/usuario";
// import { EventEmitter } from 'selenium-webdriver';

@Component({
  selector: 'app-ingreso',
  templateUrl: './ingreso.component.html',
  styleUrls: ['./ingreso.component.css']
})
export class IngresoComponent implements OnInit {

  msgInicio="Bienvenido"
  @Output() loginEvent = new EventEmitter();
  user=new Usuario;

  constructor() { }

  onSubmitLogin(){
    this.loginEvent.emit(this.user);
  }

  ngOnInit() {
  }

}
