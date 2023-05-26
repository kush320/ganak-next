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
  Stack,
  TableContainer,
  Button,
  HStack,
} from "@chakra-ui/react";
import SearchBar from "@/component/SearchBar";
import Navbar from "@/component/Navbar";

const data = [
  {
    id: "१",
    name: "राम​",
    ward: "१",
    address: "पेप्सिकोला",
    date: "२०८०।०३।२०",
  },
  {
    id: "१",
    name: "राम​",
    ward: "२",
    address: "पेप्सिकोला",
    date: "२०८०।०३।२०",
  },
  {
    id: "१",
    name: "राम​",
    ward: "९",
    address: "पेप्सिकोला",
    date: "२०८०।०३।२०",
  },
  {
    id: "१",
    name: "राम​",
    ward: "६",
    address: "पेप्सिकोला",
    date: "२०८०।०३।२०",
  },
  {
    id: "१",
    name: "राम​",
    ward: "७",
    address: "पेप्सिकोला",
    date: "२०८०।०३।२०",
  },
  {
    id: "१",
    name: "राम​",
    ward: "४",
    address: "पेप्सिकोला",
    date: "२०८०।०३।२०",
  },
  {
    id: "१",
    name: "राम​",
    ward: "८",
    address: "पेप्सिकोला",
    date: "२०८०।०३।२०",
  },
  {
    id: "१",
    name: "राम​",
    ward: "७",
    address: "पेप्सिकोला",
    date: "२०८०।०३।२०",
  },
  {
    id: "१",
    name: "राम​",
    ward: "९",
    address: "पेप्सिकोला",
    date: "२०८०।०३।२०",
  },
];

export default function page() {
  return (
    <div>
    <TableContainer
      // width={"70%"}
      marginLeft={"2%"}
      marginTop={"2%"}
      marginRight={"2%"}
    >
      <HStack>
        <Box>
          <Text textAlign={"left"} fontSize={"24px"} fontWeight={"semibold"}>
            सूचि
          </Text>
        </Box>
        <Box width={"100%"}>
          <Stack marginLeft={"70%"} >
          <SearchBar />
          </Stack>
        </Box>
      </HStack>
      <Table size="sm" marginTop={"2%"} backgroundColor={"white"}>
        <Thead>
          <Tr height={"50px"} bg="#EFEFEF">
            <Th fontWeight={"semibold"} fontSize={"15px"}>परिवार त्र.स​</Th>
            <Th fontWeight={"semibold"} fontSize={"15px"}>प्रयोगकर्ताको नाम​</Th>
            <Th fontWeight={"semibold"} fontSize={"15px"}>वार्ड न​</Th>
            <Th fontWeight={"semibold"} fontSize={"15px"}>बस्तिको नाम​​</Th>
            <Th fontWeight={"semibold"} fontSize={"15px"}>पेश मिती​</Th>
            <Th fontWeight={"semibold"} fontSize={"15px"}>कार्य​ </Th>​
          </Tr>
        </Thead>
        <Tbody>
          {data.map((i) => ( 
            <Tr>
              <Td fontSize={"14px"}>{i.id}</Td>
              <Td fontSize={"14px"}>{i.name}</Td>
              <Td fontSize={"14px"}>{i.ward}</Td>
              <Td fontSize={"14px"}>{i.address}</Td>
              <Td fontSize={"14px"}>{i.date}</Td>
              <Td>
                <ViewIcon sx={{ size: "25px" }} />
                {/* <DeleteIcon
                  sx={{
                    marginLeft: "5%",
                    size: "20px",
                  }}
                /> */}
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
    </div>
  );
}
