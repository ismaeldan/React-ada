import { useEffect, useState } from "react"

const minhaLista = [
  {id: '1', value: 'Fruta'},
  {id: '2', value: 'Legume'},
  {id: '3', value: 'Carne'},
]

export default function ListasDois() {

  const [product, setProduct] = useState(minhaLista)
  const [pesquisa, setPesquisa] = useState('')

  useEffect(
    ()=> {
      if(pesquisa) {
        const novaLista = minhaLista.filter( (item) => {
          return item.value.toLowerCase().includes(pesquisa.toLowerCase())
        })
        setProduct (novaLista)
      } else {
        setProduct (minhaLista)
      }
    }
  , [pesquisa])
  


  return (

    <div>
      <h1>Efeitos Colaterais</h1>
      <input 
        
        value={pesquisa}
        onChange={(e) => setPesquisa(e.target.value)}
      
      placeholder="pesquise aqui"></input>

      {product.map( (item) => {
        return ( 
          <div key={item.id}>
            <h4>{item.value}</h4>
          </div>
        )
      })}
    </div>
  )
}