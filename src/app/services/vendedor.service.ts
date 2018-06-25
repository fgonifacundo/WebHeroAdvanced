import { Injectable } from '@angular/core';
import { Vendedor } from '../_model/vendedor.model';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class VendedorService {

  public vendedor: Vendedor;

  constructor(private _http: HttpClient) {
    this.loadVendedor();
  }
  
  loadVendedor(){
    console.log("ook");
    let rq = {
      "Aplicacion": "TURBO",
      "CodigoSeguimiento": "I9-QF05-QF05",
      "CodigosEntorno": "PROD/NMO/TBO",
      "Parametros": "Q75"
    };

    let endPoint = "http://gds1.webfarefinder.com/gds1_serviciosgds/api/ServicioSabreRedApp.json/ObtenerVendedorPorID";

    this._http.post(endPoint, rq).subscribe( (res: any) => {
      this.vendedor = res.Resultado;
    }, error => {
      console.log("Error" , error);
    });
  }



}
