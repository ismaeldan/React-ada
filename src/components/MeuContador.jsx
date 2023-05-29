import { useState } from "react"
import styles from '../button.module.css'

export default function MeuContador (){

  const [contador, setContador] = useState(0)

  function aumentar (){
    setContador(contador + 1)
  }

  function diminuir (){
    setContador(contador - 1)
  }

  if (contador > 5) {
    return(
      <div className="container">
        <h1>Meu Contador:</h1>
        {contador}
        <h1>Valor grande</h1>
        <button className={styles.myButton} onClick={aumentar}>aumentar</button>
        <button className={styles.myButton} onClick={diminuir}>Quer diminuir?</button>  
      </div>
    )
  }

  return(
    <div className="container">
      <h1>Meu Contador:</h1>
      {contador}
      <button className={styles.myButton} onClick={aumentar}>aumentar</button>
      <button className={styles.myButton} onClick={diminuir}>Quer diminuir?</button>
    </div>
  )
}