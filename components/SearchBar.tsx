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

const SearchBar = ({ query, setQuery }) => {
	return (
		<InputGroup borderRadius={"5px"}>
			<InputLeftElement pointerEvents="none">
				<Search2Icon color="gray.600" />
			</InputLeftElement>
			<Input
				backgroundColor={"#f8f9ff"}
				type="text"
				placeholder="खोजि गर्नुहोस्..."
				border="1px solid #949494"
				value={query}
				onChange={(e) => setQuery(e.target.value)}
			/>
		</InputGroup>
	);
};

export default SearchBar;
