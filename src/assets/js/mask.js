function maskDate(str){
  var v = str.value;
  v.replace('/', '');
  if (v.match(/^\d{2}$/) !== null || v.match(/^\d{2}\/\d{2}$/) !== null) {
     str.value = v + '/';
  }
  return str;
}
