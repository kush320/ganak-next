"use client";
import React from "react";
import {
  Button,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightAddon,
} from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";

const SearchBar = () => {
  return (
  
      <InputGroup borderRadius={"5px"} >
        <InputLeftElement
          pointerEvents="none"
          children={<Search2Icon color="gray.600" />}
        />
        <Input
        backgroundColor={"#f8f9ff"}
          type="text"
          placeholder="खोजि गर्नुहोस्..."
          border="1px solid #949494"
        />
       
      </InputGroup>
  
  );
};

export default SearchBar;
