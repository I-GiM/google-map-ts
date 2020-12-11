import React from 'react'
import {Box} from '@chakra-ui/react'

interface SearchItemProps {
  bgColor: string,
  image: any,
  itemName: string
}

export const AreaSearchItem: React.FC<SearchItemProps> = ({bgColor, image, itemName}) => {
  return (
    <Box borderRadius="8px" >
      <Box bg={bgColor} d="flex" alignItems="center" justifyContent="center" h="56px" w="56px" borderRadius="50%" margin="13px 20px">
        <img src={image} alt="" />
      </Box>
      <Box textAlign="center" color="#0000008A" fontSize="12px">
        {itemName}
      </Box>
    </Box>
  )
}
