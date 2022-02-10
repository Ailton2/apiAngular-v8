import { DateUtil } from './../../../shared/utils/date.utils';
import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { FormBuilder, FormGroup } from '@angular/forms';

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
form : FormGroup;

  constructor(private services: UsuarioService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.iniciarFormulario();
  }

  iniciarFormulario(){
    this.form = this.formBuilder.group({
      dataInicio: [''],
      dataFinal: ['']
    })
  }

  imprimeRelatorio(){
    const dataini = new Date(this.requesParams.dataInicio).toLocaleDateString();
    const dataf = new Date(this.requesParams.dataFim).toLocaleDateString();
    this.services.downloadPdfPorParams(dataini, dataf).subscribe((res: any) =>{
      fetch(res).then(res => res.blob()).then(res => window.open(URL.createObjectURL(res), '_blank'));
    })
  }

  maskDate(value:any) {
      DateUtil.maskDate(value);
  }

}
