import React from "react";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCategoryId, setCurrentPage } from "../redux/slices/filterSlice";
import axios from "axios";

import Categories from "../components/Categories";
import Sort from "../components/Sort";
import PizzaBlock from '../components/PizzaBlock';
import Skeleton from '../components/PizzaBlock/Skeleton';
import Pagination from "../components/Pagination";
import { SearchContext } from "../App";
import { useContext } from "react";

const Home = () => {
  const { searchValue } = useContext(SearchContext)
  const dispatch = useDispatch();
  const { categoryId, currentPage } = useSelector((state) => state.filter);
  // const { setCurrentPage } = useSelector((state) => state.filter.currentPage)
  const sortType = useSelector((state) => state.filter.sort.sortProperty);
  const [pizzas, setPizzas] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const onChangeCategory = (id) => {
    dispatch(setCategoryId(id))
  };
  const onChangPage = number => {
    dispatch(setCurrentPage(number))
  }
  const category = categoryId > 0 ? `category=${categoryId}` : '';
  const search = searchValue ? `search=${searchValue}` : '';

  useEffect(() => {
    setIsLoading(true);
    axios.get(`https://63acb4bbda81ba97618aded2.mockapi.io/pizzas?page=${currentPage}&limit=4&${search}${category}&sortBy=${sortType}&order=desc`)
      .then(res => {
        setPizzas(res.data);
        setIsLoading(false);
      })
    window.scrollTo(0, 0)
  }, [categoryId, sortType, searchValue, currentPage])

  return (
    <div className="container">
      <div className="content__top">
        <Categories value={categoryId} onChangeCategory={onChangeCategory} />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoading
          ? [...new Array(6)].map((_, index) => <Skeleton key={index} />)
          : pizzas.map((obj) => <PizzaBlock key={obj.id} {...obj} />)}
      </div>
      <Pagination currentPage={currentPage} onChangePage={onChangPage} />
    </div>
  )
}
export default Home;