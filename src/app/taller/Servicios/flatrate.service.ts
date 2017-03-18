import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { beanservicios } from '../Bean/beanservicios';
import { beanoperacion } from '../Bean/beanoperacion';
import { beanoperacionservicios } from '../Bean/beanoperacionservicios';
import { beanoperacionservicios2 } from '../Bean/beanoperacionservicios2';
import { beanHoraHombre } from '../Bean/beanHoraHombre';
import { beanNumCodigo } from '../Bean/beanNumCodigo';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class Flatrateservice {
  //private _produccion1Url = 'http://10.0.0.249:8082/api/v1/firstcombo';
  //para local
  // private _produccion1Url = 'http://localhost:8081/api/v1/firstcombo';
  // private _produccion2Url = 'http://localhost:8081/api/v1/secondcomb';
  // private _produccion3Url = 'http://localhost:8081/api/v1/grid';
  // private _produccion4Url = 'http://localhost:8081/api/v1/post';
  // private _produccion5Url = 'http://localhost:8081/api/v1/HorasHombres';
  // private _produccion6Url = 'http://localhost:8081/api/v1/PutOperaServi';
  // private _produccion7Url = 'http://localhost:8081/api/v1/PutHorasHombre';
  // private _produccion8Url = 'http://localhost:8081/api/v1/Getnumcodigo';
  // private _produccion9Url = 'http://localhost:8081/api/v1/PostHorasHombres';
  // private _produccion10Url = 'http://localhost:8081/api/v1/Getcodigovalidacion';
  // private _produccion11Url = 'http://localhost:8081/api/v1/BuscarOperServiciosParam';
  // private _produccion12Url = 'http://localhost:8081/api/v1/LISTAROPERSERVCONTENIDOS';
  // private _produccion13Url = 'http://localhost:8081/api/v1/Getnumcodigoop';

  //para servidor
  private _produccion1Url = 'http://10.0.0.249:8081/api/v1/firstcombo';
  private _produccion2Url = 'http://10.0.0.249:8081/api/v1/secondcomb';
  private _produccion3Url = 'http://10.0.0.249:8081/api/v1/grid';
  private _produccion4Url = 'http://10.0.0.249:8081/api/v1/post';
  private _produccion5Url = 'http://10.0.0.249:8081/api/v1/HorasHombres';
  private _produccion6Url = 'http://10.0.0.249:8081/api/v1/PutOperaServi';
  private _produccion7Url = 'http://10.0.0.249:8081/api/v1/PutHorasHombre';
  private _produccion8Url = 'http://10.0.0.249:8081/api/v1/Getnumcodigo';
  private _produccion9Url = 'http://10.0.0.249:8081/api/v1/PostHorasHombres';
  private _produccion10Url = 'http://10.0.0.249:8081/api/v1/Getcodigovalidacion';
  private _produccion11Url = 'http://10.0.0.249:8081/api/v1/BuscarOperServiciosParam';
  private _produccion12Url = 'http://10.0.0.249:8081/api/v1/LISTAROPERSERVCONTENIDOS';
  private _produccion13Url = 'http://10.0.0.249:8081/api/v1/Getnumcodigoop';
  lessons = [];
  constructor(private http: Http) { }

  getProduccion(): Observable<beanservicios[]> {
    return this.http.get(this._produccion1Url)
      .map((res: Response) => res.json())

      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));

  }

  getProduccion2(argumento: string): Observable<beanoperacion[]> {
    return this.http.get(this._produccion2Url + '/' + argumento)
      .map((res: Response) => res.json())

      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));

  }

  getProduccion3(argumento2: string): Observable<beanoperacionservicios[]> {
    return this.http.get(this._produccion3Url + '/' + argumento2)
      .map((res: Response) => res.json())

      ._catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  postinsertardatos(vchcodigooperacion:string,chrcodigooperacionservicio:string,vchnrotrabajo:string,vchdescripcion:string,numhorashombre:number,numpreciosugerido:number,
                     numdescuento:number,numcodigo:number,numtotal:number): Observable<beanoperacionservicios[]>{
    return this.http.post(this._produccion4Url,{vchcodigooperacion:vchcodigooperacion, chrcodigooperacionservicio:chrcodigooperacionservicio,vchnrotrabajo:vchnrotrabajo, vchdescripcion:vchdescripcion,
      numhorashombre:numhorashombre, numpreciosugerido:numpreciosugerido, numdescuento:numdescuento,numcodigo:numcodigo ,numtotal:numtotal})
      .map((res: Response) => res.json())

      ._catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  getHorasHombre(): Observable<beanHoraHombre[]>{
    return this.http.get(this._produccion5Url)
      .map((res: Response) => res.json())

      ._catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  putOperacionServicio(vchnrotrabajo:string,vchdescripcion:string,numpreciosugerido:number,numhorashombre:number,numdescuento:number,numtotal:number,chrcodigooperacionservicio:string,
                        vchcodigooperacion:string):Observable<beanoperacionservicios[]>{
    return this.http.put(this._produccion6Url,{vchnrotrabajo:vchnrotrabajo,vchdescripcion:vchdescripcion,numpreciosugerido:numpreciosugerido,numhorashombre:numhorashombre,numdescuento:numdescuento,
                              numtotal:numtotal,chrcodigooperacionservicio:chrcodigooperacionservicio,vchcodigooperacion:vchcodigooperacion})
    .map((res: Response) => res.json())

    ._catch((error: any) => Observable.throw(error.json().error || 'Server error'));

  }

  PutHorasHombre(numpreciooficial:number):Observable<beanoperacionservicios[]>{
    return this.http.put(this._produccion7Url,{numpreciooficial:numpreciooficial})
    .map((res: Response) => res.json())

    ._catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  Getnumcodigo(): Observable<beanHoraHombre[]>{
    return this.http.get(this._produccion8Url)
      .map((res: Response) => res.json())

      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  PostHorasHombres(numcodigo:number,numhorashombre:number): Observable<any[]>{
    return this.http.post(this._produccion9Url,{numcodigo:numcodigo,numhorashombre:numhorashombre})
      .map((res: Response) => res.json())

      ._catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  Getcodigovalidacion(argumento3: string,argumento4: string): Observable<beanoperacionservicios2[]> {
    return this.http.get(this._produccion10Url + '/' + argumento3+'/'+argumento4)
      .map((res: Response) => res.json())

      ._catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  BuscarOperServiciosParam(argumento5:string): Observable<any[]> {
    return this.http.get(this._produccion11Url + '/' + argumento5)
      .map((res: Response) => res.json())

      ._catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  LISTAROPERSERVCONTENIDOS(argumento6:string,argumento7:string):Observable<beanoperacionservicios2[]>  {
    return this.http.get(this._produccion12Url + '/' + argumento6+'/'+argumento7)
      .map((res: Response) => res.json())

      ._catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  Getnumcodigoop():Observable<beanNumCodigo[]>{
    return this.http.get(this._produccion13Url)
      .map((res: Response) => res.json())

      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  private extractData(res: Response) {
    let body = res.json();
    return body.data || {};
  }

  private handleError(error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }


}