export const products = [
  { title: 'Burger', price: 121 },
  { title: 'Pizza', price: 20 },
  { title: 'Soda', price: 5 },
]

console.log( `🫣🫣 ForNormal 🫣🫣` )
for ( let i = 0; i < products.length; i++ ) {
  const element = products[ i ];
  console.log( element );

}
console.log( `🫣🫣 ForEach 🫣🫣` )
products.forEach( item => console.log( item ) )

export class Products {

  elementDiv: HTMLDivElement

  constructor( elem: HTMLDivElement ) {
    this.elementDiv = elem
  }

  print() {
    products.forEach( product => {
      this.elementDiv.innerHTML += `<li>${ product.title } - ${ product.price }</li>`
    } )
  }

  mapElemnts() {
    return products.map( product => this.elementDiv.innerHTML = `<li>${ product.title } - ${ product.price }</li>`
    )
  }

}