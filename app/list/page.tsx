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
  TableContainer,
  Button,
  HStack,
} from "@chakra-ui/react";
import SearchBar from "@/component/SearchBar";
import Navbar from "@/component/Navbar";

const data = [
  { id: "१", name: "राम​", ward: "१", address:"पेप्सिकोला", date:"२०८०।०३।२०",},
  { id: "१", name: "राम​", ward: "२", address:"पेप्सिकोला", date:"२०८०।०३।२०", },
  { id: "१", name: "राम​", ward: "९", address:"पेप्सिकोला", date:"२०८०।०३।२०", },
  { id: "१", name: "राम​", ward: "६", address:"पेप्सिकोला", date:"२०८०।०३।२०", },
  { id: "१", name: "राम​", ward: "७", address:"पेप्सिकोला", date:"२०८०।०३।२०", },
  { id: "१", name: "राम​", ward: "४", address:"पेप्सिकोला", date:"२०८०।०३।२०", },
  { id: "१", name: "राम​", ward: "८", address:"पेप्सिकोला", date:"२०८०।०३।२०", },
  { id: "१", name: "राम​", ward: "७", address:"पेप्सिकोला", date:"२०८०।०३।२०", },
  { id: "१", name: "राम​", ward: "९", address:"पेप्सिकोला", date:"२०८०।०३।२०", },
];

export default function page() {
  return (
    
    <TableContainer
      // width={"70%"}
      marginLeft={"2%"}
      
      marginTop={"5%"}
      marginRight={"2%"}
    >
      <HStack>
        <Box>
          <Text textAlign={"left"} fontSize={"24px"} fontWeight={"bold"}>
            सूचि
          </Text>
        </Box>
        <Box>
          <SearchBar/>
        </Box>
      </HStack>
      <Table size="sm" marginTop={"2%"} backgroundColor={"white"}>
        <Thead>
          <Tr height={"50px"} bg="#EFEFEF">
            <Th fontSize={"20px"}>परिवार त्र.स​</Th>
            <Th fontSize={"20px"}>प्रयोगकर्ताको नाम​</Th>
            <Th fontSize={"20px"}>वार्ड न​</Th>
            <Th fontSize={"20px"}>बस्तिको नाम​​</Th>
            <Th fontSize={"20px"}>पेश मिती​</Th>
            <Th fontSize={"20px"}>कार्य​ </Th>​
          </Tr>
        </Thead>
        <Tbody>
          {data.map((i) => (
            <Tr>
              <Td>{i.id}</Td>
              <Td>{i.name}</Td>
              <Td>{i.ward}</Td>
              <Td>{i.address}</Td>
              <Td>{i.date}</Td>
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
