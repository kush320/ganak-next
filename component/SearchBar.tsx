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
    <>
      <InputGroup borderRadius={"5px"}>
        <InputLeftElement
          pointerEvents="none"
          children={<Search2Icon color="gray.600" />}
        />
        <Input
          type="text"
          placeholder="खोजि गर्नुहोस्..."
          border="1px solid #949494"
        />
        <InputRightAddon p={0} border="none">
          {/* <Button  borderLeftRadius={0} borderRightRadius={3.3} border="1px solid #949494">
              खोजि गर्नुहोस्
              </Button> */}
        </InputRightAddon>
      </InputGroup>
    </>
  );
};

export default SearchBar;
