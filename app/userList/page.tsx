"use client";
import React, { useState } from "react";
import { ViewIcon, DeleteIcon, EditIcon, Search2Icon, ChevronRightIcon } from "@chakra-ui/icons";
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
  Stack,
  Avatar,
  TableContainer,
  Button,
  ChakraBaseProvider,
  HStack,
} from "@chakra-ui/react";
import { ChevronLeftIcon } from '@chakra-ui/icons'
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
    <div>
    <TableContainer marginLeft={"2%"} marginTop={"2%"} marginRight={"2%"}>
      <HStack>
        <Box>
          <Text fontSize={"24px"} fontWeight={"bold"}>
            प्रयोगकर्ता सूचि
          </Text>
        </Box>
        <Box width={"100%"}>
          <Stack marginLeft={"70%"}>
            <SearchBar />
          </Stack>
        </Box>
      </HStack>
      <Table size="sm" marginTop={"1%"} backgroundColor={"white"}>
        <Thead>
          <Tr height={"50px"} bg="#EFEFEF">
            <Th fontWeight={"semibold"} fontSize={"15px"}>नाम​</Th>
            <Th fontWeight={"semibold"} fontSize={"15px"}>आइदि</Th>
            <Th fontWeight={"semibold"} fontSize={"15px"}>सम्पर्क​</Th>
            <Th fontWeight={"semibold"} fontSize={"15px"}>कार्य​</Th>​
          </Tr>
        </Thead>
        <Tbody>
          {data.map((i) => (
            <Tr>
              <Td fontSize={"14px"}>
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
              <Td fontSize={"14px"}>{i.id}</Td>
              <Td fontSize={"14px"}>{i.contact}</Td>
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
      {/* <HStack marginLeft={"80%"} >
      <ChevronLeftIcon/>
      <ChevronRightIcon/>
      </HStack> */}
    </TableContainer>
    </div>
  );
}
