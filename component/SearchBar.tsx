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
        {/* <InputRightAddon p={0} border="none">
          <Button
            backgroundColor={"#081A51"}
            borderLeftRadius={0}
            borderRightRadius={"5px"}
            border="1px solid #949494"
            color={"white"}
          >
            खोजि गर्नुहोस्
          </Button>
        </InputRightAddon> */}
      </InputGroup>
  
  );
};

export default SearchBar;
