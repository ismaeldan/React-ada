import { useState } from "react"
import styles from '../button.module.css'

export default function Contador() {

  const [contar, setContar] = useState(0)

  function aumentar (){
    setContar(contar + 1)
  }

  return(
    <div className="container">
      <h1>Meu Contador:</h1>
      {contar}
      <button className={styles.myButton} onClick={aumentar}>aumentar</button>
    </div>
  )
}