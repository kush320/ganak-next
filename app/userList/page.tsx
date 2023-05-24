"use client";
import React, { useState } from "react";
import { ViewIcon, DeleteIcon, EditIcon, Search2Icon } from "@chakra-ui/icons";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  Box,
  Text,
  Avatar,
  TableContainer,
  Button,
  ChakraBaseProvider,
  HStack,
} from "@chakra-ui/react";
import SearchBar from "@/component/SearchBar";

const data = [
  { name: "राम​", id: "१०३४९८", contact: "९८४८२७९८७६" },
  { name: "राम​", id: "१०३४९८", contact: "९८४८२७९८७६" },
  { name: "राम​", id: "१०३४९८", contact: "९८४८२७९८७६" },
  { name: "राम​", id: "१०३४९८", contact: "९८४८२७९८७६" },
  { name: "राम​", id: "१०३४९८", contact: "९८४८२७९८७६" },
  { name: "राम​", id: "१०३४९८", contact: "९८४८२७९८७६" },
  { name: "राम​", id: "१०३४९८", contact: "९८४८२७९८७६" },
  { name: "राम​", id: "१०३४९८", contact: "९८४८२७९८७६" },
  { name: "राम​", id: "१०३४९८", contact: "९८४८२७९८७६" },
];

export default function page() {
  return (
    <TableContainer marginLeft={"2%"} marginTop={"5%"} marginRight={"2%"}>
      <HStack>
        <Box>
          <Text fontSize={"24px"} fontWeight={"bold"}>
            प्रयोगकर्ता सूचि
          </Text>
        </Box>
        <Box>
          <SearchBar />
        </Box>
      </HStack>
      <Table size="sm" marginTop={"1%"} backgroundColor={"white"}>
        <Thead >
          <Tr height={"50px"} bg="#EFEFEF">
            <Th fontSize={"20px"}>नाम​</Th>
            <Th fontSize={"20px"}>आइदि</Th>
            <Th fontSize={"20px"}>सम्पर्क​</Th>
            <Th fontSize={"20px"}>कार्य​</Th>​
          </Tr>
        </Thead>
        <Tbody>
          {data.map((i) => (
            <Tr>
              <Td>
                {" "}
                <Avatar
                  borderRadius={"30%"}
                  height={"30px"}
                  width={"30px"}
                  name="Ryan Florence"
                  src="https://bit.ly/ryan-florence"
                />
                {i.name}
              </Td>
              <Td >{i.id}</Td>
              <Td>{i.contact}</Td>
              <Td>
                <ViewIcon />
                <DeleteIcon
                  sx={{
                    marginLeft: "5%",
                    size: "20px",
                  }}
                />
                <EditIcon
                  sx={{
                    marginLeft: "5%",
                    size: "20px",
                  }}
                />
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
}
