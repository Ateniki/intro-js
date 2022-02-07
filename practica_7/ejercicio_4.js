
function primLetraMayusc( oracion ) {
    return oracion.toLowerCase().trim().split(' ').map( v => v[0].toUpperCase() + v.substr(1) ).join(' ');  
  }
  
  console.log( primLetraMayusc( 'esta es una oracion en minusculas' ) );
