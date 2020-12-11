import React from 'react';
import { Box, InputGroup, InputLeftElement, InputRightElement, Input } from '@chakra-ui/react'

interface InputProps {
  iconMenu: any,
  iconSearch: any,
  iconDirection: any,
  type: string,
  inputFocus: any,
}

const InputSearch: React.FC<InputProps> = ({ iconMenu, iconSearch, iconDirection, type, inputFocus }) => {
  return (
    <Box margin="8px" padding="12px" boxShadow="0 2px 4px rgba(0,0,0,0.2), 0 -1px 0px rgba(0,0,0,0.02)" borderRadius="8px" zIndex="2000" position="absolute" bg="#fff" w="392px" h="48px">
      <InputGroup h="100%" d="flex" alignItems="center">
        <InputLeftElement
          pos="unset"
          h="100%"
          bg="transparent"
          pointerEvents="none"
          children={iconMenu}
        />
        <Input onFocus={inputFocus} fontSize="15px" focusBorderColor="none" h="100%" w="100%" pl="16px" bg="transparent" placeholder="Search Google Maps" border="none" type={type} />
        <InputRightElement
          h="100%"
          pos="unset"
          pr="16px"
          bg="transparent"
          pointerEvents="none"
          children={iconSearch}
        />
        <InputRightElement
          pl="24px"
          borderLeft="1px solid #949494"
          pos="unset"
          bg="transparent"
          pointerEvents="none"
          children={iconDirection}
        />
      </InputGroup>
    </Box>
  )
}

export default InputSearch
