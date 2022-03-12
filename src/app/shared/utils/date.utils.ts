export class DateUtil {
  //formatar data
  static maskDate(f:any) {

    if (f.charCode > 47 && f.charCode < 58) {
      this.verify(f);
      return true;
    } else {
      if (f.keyCode !== 8 && f.keyCode !== 9) {
        return false;
      } else {
        this.verify(f);
        return true;
      }
    }
  }

  static verify(f:any) {
    const date = f.target.value;
    f.target.value = this.mdata(date);
  }

  static mdata(v:any) {
    v = v.replace(/\D/g, '');
    v = v.replace(/(\d{2})(\d)/, '$1/$2');
    v = v.replace(/(\d{2})(\d)/, '$1/$2');
    v = v.replace(/(\d{2})(\d{2})$/, '$1$2');
    return v;
  }

 static maskDate2(str:any){
    var v = str.target.value;
    v.replace('/', '');
    if (v.match(/^\d{2}$/) !== null || v.match(/^\d{2}\/\d{2}$/) !== null) {
       str.value = v + '/';
    }
    return str;
  }

  static moeda(z:any){
   var v = z.value;
    v=v.replace(/\D/g,"") // permite digitar apenas numero
    v=v.replace(/(\d{1})(\d{14})$/,"$1.$2") // coloca ponto antes dos ultimos digitos
    v=v.replace(/(\d{1})(\d{11})$/,"$1.$2") // coloca ponto antes dos ultimos 11 digitos
    v=v.replace(/(\d{1})(\d{8})$/,"$1.$2") // coloca ponto antes dos ultimos 8 digitos
    v=v.replace(/(\d{1})(\d{5})$/,"$1.$2") // coloca ponto antes dos ultimos 5 digitos
    v=v.replace(/(\d{1})(\d{1,2})$/,"$1,$2") // coloca virgula antes dos ultimos 2 digitos
    z.value = v;
  }

}
