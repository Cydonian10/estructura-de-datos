export class HashTable {

  private data: Array<Array<[ string, string ]>>

  constructor( size: number ) {
    this.data = new Array( size );
  }
  hashMethod( key: string ) {
    let hash = 0;
    for ( let i = 0; i < key.length; i++ ) {
      hash = ( hash + key.charCodeAt( i ) * i ) % this.data.length;
    }
    return hash;
  }

  set( key: string, value: string ) {
    const address = this.hashMethod( key )
    if ( !this.data[ address ] ) {
      this.data[ address ] = []
    }
    this.data[ address ].push( [ key, value ] )
    return this.data
  }
}
const myHashTable = new HashTable( 50 );
myHashTable.set( "gabriel", "12" )
myHashTable.set( "mabel", "11" )
console.log( myHashTable );