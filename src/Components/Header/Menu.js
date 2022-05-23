import React, { useEffect, useState } from 'react'
import Container from '../UI/Container'
import classes from './Menu.module.css'

const Menu = (props) => {

  const [searchList, setSearchList] = useState([]);

  useEffect(() => {
    const identifier = setTimeout(() => {
      console.log('timer')
    }, 500)
    return () => {
      console.log('cleanup')
      clearTimeout(identifier)
    }
  }, [])

  const searchHandler = () => {

  }

  
  return (
    <Container>
        <div className={classes.menu}>
            <div className={classes.menu_item}>Portfolio</div>
            <div className={classes.menu_item}>MusArt</div>
            <div className={classes.menu_item}>Contact Me</div>
            <input type='text' placeholder="search..." onChange={searchHandler}/>
        </div>
    </Container>
  )
}

export default Menu