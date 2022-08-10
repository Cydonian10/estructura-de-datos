import { MyArray } from './estructura-datos/Array'

export function main() {
  const myArray = new MyArray<string | number>()
  const resp1 = myArray.push( "gabriel" )
  myArray.push( "mabe" )
  myArray.push( "rafael" )
  myArray.push( "fiorella" )
  console.log( resp1 );
  const resp2 = myArray.get( 1 )
  console.log( resp2 );
  myArray.delete( 2 )

  console.log( myArray );

}