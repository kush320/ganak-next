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
  ChakraBaseProvider,
} from "@chakra-ui/react";

const data = [
  { id: "१", name: "राम​", contact: "९८४८२७९८७६" },
  { id: "१", name: "राम​", contact: "९८४८२७९८७६" },
  { id: "१", name: "राम​", contact: "९८४८२७९८७६" },
  { id: "१", name: "राम​", contact: "९८४८२७९८७६" },
  { id: "१", name: "राम​", contact: "९८४८२७९८७६" },
  { id: "१", name: "राम​", contact: "९८४८२७९८७६" },
  { id: "१", name: "राम​", contact: "९८४८२७९८७६" },
  { id: "१", name: "राम​", contact: "९८४८२७९८७६" },
  { id: "१", name: "राम​", contact: "९८४८२७९८७६" },
];

export default function page() {
  return (
    
    <TableContainer
      
      width={"60%"}
      marginLeft={"25%"}
      marginTop={"10%"}
      marginRight={"5%"}
    >
      <Box>
        <Text textAlign={"left"} fontSize={"24px"} fontWeight={"bold"}>
          प्रयोगकर्ता सूचि
        </Text>
        <Button
          marginLeft={"60%"}
          width={"40%"}
          borderRadius={"8px"}
          leftIcon={<Search2Icon />}
        >
          {" "}
          खोजि गर्नुहोस्
        </Button>
      </Box>
      <Table size="sm" marginTop={"1%"}>
        <Thead>
          <Tr bg="#EFEFEF">
            <Th>नाम​</Th>
            <Th>आइदि</Th>
            <Th>सम्पर्क​</Th>
            <Th>कर्य </Th>​
          </Tr>
        </Thead>
        <Tbody>
          {data.map((i: any) => (
            <Tr>
              <Td>{i.id}</Td>
              <Td>{i.name}</Td>
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
