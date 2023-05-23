"use client";
import React from "react";
import Link from "next/link";
import {
  Grid,
  GridItem,
  Center,
  Image,
  Text,
  List,
  ListItem,
  ListIcon,
  Avatar,
  Box,
  Stack,
  HStack,
  Divider,
  Button,
} from "@chakra-ui/react";
import { InfoIcon, Search2Icon } from "@chakra-ui/icons";
import SearchBar from "./SearchBar";
export default function Navbar() {
  return (
    <Grid
      h="100vh"
      templateRows="repeat(2, 1fr)"
      templateColumns="repeat(5, 1fr)"
      backgroundColor={"#f8f9ff"}
    >
      <GridItem  rowSpan={2} colSpan={1} bg="#081A51">
        <Center>
          <Image marginTop={"2%"} w={"30%"} src={"logo.png"}></Image>
        </Center>
        <Text
          textAlign={"center"}
          color={"white"}
          fontSize={"12px"}
          marginTop={"2%"}
        >
          घरधुरि सर्बेछ्र्न बेसिसहर नगरपालिका
        </Text>
        <List marginLeft={"30%"}>
          <ListItem >
            <Text  color={"white"} marginTop={"40%"}>
              <ListIcon marginRight={"5%"}>
                <InfoIcon color="white" />
              </ListIcon>
              दायस्बोर्द्
            </Text>
          </ListItem>
          <ListItem ><a href="/userList">
            <Text color={"white"} marginTop={"10%"}>
              <ListIcon marginRight={"5%"}>
                <InfoIcon color="white" />
              </ListIcon>
              प्रयोगकर्ता
            </Text>
            </a>
          </ListItem>
          <ListItem><a href="/list">
            <Text color={"white"} marginTop={"10%"}>
              <ListIcon marginRight={"5%"}>
                <InfoIcon color="white" />
              </ListIcon>
              सूचि
            </Text>
            </a>
          </ListItem>
        </List>
      </GridItem>

      <GridItem height={"60px"} colSpan={4} bg="white">
        <HStack>
          <Box>
            <Avatar
              borderRadius={"30%"}
              marginTop={"20%"}
              marginLeft={"3%"}
              height={"40px"}
              name="Ryan Florence"
              src="https://bit.ly/ryan-florence"
            />
          </Box>
          <Box >
            <Text marginTop={"10%"} fontWeight={"bold"}>राम दामना​</Text>
            <Text fontSize={"14px"}>ब्यबस्थापक</Text>
          </Box>
          <Box  >
            <SearchBar/>
        
          </Box>
        </HStack>
      </GridItem>
    </Grid>
  );
}
