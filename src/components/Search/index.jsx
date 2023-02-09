import React, { useCallback, useContext, useEffect, useRef, useState } from 'react'
import styles from './search.module.scss'
import Vector from '../../assets/img/Vector.png'
import Cross from '../../assets/img/cross.svg'
import { SearchContext } from '../../App'
import debounce from 'lodash.debounce'


const Search = () => {
  const [value, setValue] = useState('')
  const { setSearchValue } = useContext(SearchContext);
  const inputRef = useRef()
  const onClickClear = () => {
    setSearchValue('');
    setValue('');
    inputRef.current.focus();
  };

  const updateSearchValue = useCallback(
    debounce((str) => {
      setSearchValue(str);
    }, 250),
    [],
  );

  const onChangeInput = (event) => {
    setValue(event.target.value);
    updateSearchValue(event.target.value);
  }

  return (
    <div className={styles.searchwrapper}>
      <input
        ref={inputRef}
        value={value}
        onChange={onChangeInput}
        className={styles.root} placeholder='Поиск пиццы...' />
      <img className={styles.vector} src={Vector} />
      {value && (<img onClick={onClickClear} className={styles.cross} src={Cross} />)}
    </div>

  )
}

export default Search;