

export class MyArray<T> {

  public length: number
  private data: Record<number, T>

  constructor() {
    this.length = 0
    this.data = {}
  }

  push( item: T ) {
    this.data[ this.length ] = item
    this.length++
    return this.data
  }

  get( index: number ) {
    if ( !this.data[ index ] ) {
      return null
    }
    return this.data[ index ]
  }

  /**
   * Elimina el ultimo elemento
   */
  pop() {
    const lastItem = this.data[ this.length - 1 ]
    delete this.data[ this.length - 1 ]
    this.length--
    return lastItem
  }


  /**
   * Elimina un item segun su indice
   * @param index
   */
  delete( index: number ) {
    const item = this.data[ index ]
    this.shiftIndex( index )
    return item
  }

  /**
   * Elimina el primer elemento del arreglo
   */
  shift() {
    const firstItem = this.data[ 0 ]
    this.shiftIndex( 0 )
    return firstItem
  }

  /**
   * Agrega elementos al inicio del arreglo
   */
  unshif( item: T ) {
    for ( let i = this.length; i > 0; i-- ) {
      this.data[ i ] = this.data[ i - 1 ]
    }
    this.data[ 0 ] = item
    this.length++
    return this.data
  }

  private shiftIndex( index: number ) {
    for ( let i = index; i < this.length; i++ ) {
      this.data[ i ] = this.data[ i + 1 ]
    }
    delete this.data[ this.length - 1 ]
    this.length--
  }
}

