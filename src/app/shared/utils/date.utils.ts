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

}
