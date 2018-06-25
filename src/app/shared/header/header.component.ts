import { Component, OnInit } from '@angular/core';
import { VendedorService } from '../../services/vendedor.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private _vendedorService: VendedorService) { }

  ngOnInit() {
    
  }

}
