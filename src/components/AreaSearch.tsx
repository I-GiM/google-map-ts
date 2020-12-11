import React, { Fragment } from 'react'
import {Box} from '@chakra-ui/react'
import { AreaSearchItem } from './AreaSearchItem'
import Groceries from '../assets/images/local_grocery_store_white_24dp.png'
import Restaurant from '../assets/images/restaurant_white_24dp.png'
import Takeouts from '../assets/images/takeout_dining_white_24dp.png'
import Hotels from '../assets/images/hotel_white_24dp.png'

const SearchItems = [
  <AreaSearchItem
    bgColor="#188038"
    image={Groceries}
    itemName="Groceries"
  />,
  <AreaSearchItem
    bgColor="#129EAF"
    image={Restaurant}
    itemName="Restaurants"
  />,
  <AreaSearchItem
    bgColor="#C5221F"
    image={Takeouts}
    itemName="Takeouts"
  />,
  <AreaSearchItem
    bgColor="#E37400"
    image={Hotels}
    itemName="Hotels"
  />,
]

const AreaSearch = () => {
  return (
    <Box margin="8px" padding="12px" boxShadow="0 2px 4px rgba(0,0,0,0.2), 0 -1px 0px rgba(0,0,0,0.02)" borderRadius="8px" zIndex="2000" position="absolute" bg="#fff" w="392px" top="88px">
      <Box color="#000000DE" fontWeight="500" padding="10px 20px">Search this area</Box>
      <Box d="flex" justifyContent="space-between" padding="4px 11px">
      {SearchItems.map((SearchItem, index) => {
        return (
        <Fragment key={index}>
          {SearchItem}
        </Fragment>
        )
      })}
      </Box>
      <Box h="44px" d="flex" alignItems="center" justifyContent="center" color="0000008A" marginTop="16px" borderTop="1px solid #E8EAED">See more like this</Box>
    </Box>
  )
}

export default AreaSearch
