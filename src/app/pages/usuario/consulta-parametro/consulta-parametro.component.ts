import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';

export class Params{
  dataInicio: string;
  dataFim: string;
}

@Component({
  selector: 'app-consulta-parametro',
  templateUrl: './consulta-parametro.component.html',
  styleUrls: ['./consulta-parametro.component.scss']
})
export class ConsultaParametroComponent implements OnInit {

requesParams = new Params();

  constructor(private services: UsuarioService) { }

  ngOnInit(): void {
  }

  imprimeRelatorio(){
    const dataini = new Date(this.requesParams.dataInicio).toLocaleDateString();
    const dataf = new Date(this.requesParams.dataFim).toLocaleDateString();
    console.log(dataini)
    console.log(dataf)
    this.services.downloadPdfPorParams(dataini, dataf).subscribe((res: any) =>{
      console.log(res)
      fetch(res).then(res => res.blob()).then(res => window.open(URL.createObjectURL(res), '_blank'));
    })
  }
}
