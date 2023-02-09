import React from 'react'

import styles from './NotFoundBlock.module.scss'

const NotFoundBlock = () => {
  return (
    <div className={styles.root}>
      <h1>
        <span className={styles.spanni}>😻</span> <br />
        Ничего не найдено</h1>
      <p className={styles.discriptions}>К сожалению данная страница отсутствует в нашем инернет-магазине</p>
    </div>

  )
}

export default NotFoundBlock;
