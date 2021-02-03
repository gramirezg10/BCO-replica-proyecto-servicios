import { Component, OnInit } from '@angular/core';
import { ServiceMainService } from '../service-main.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  constructor(
    public service: ServiceMainService
  ) { }

  ngOnInit(): void {
    this.service.get().subscribe(
      res => console.log(res),
      err => console.log(err)
    )
  }

}
