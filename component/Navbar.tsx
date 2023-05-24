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
import { InfoIcon, Search2Icon, Icon } from "@chakra-ui/icons";
import { FiCalendar, FiUser, FiAlignCenter } from "react-icons/fi";
import SearchBar from "./SearchBar";

export default function Navbar({children}) {
  return (
    <Grid
      h="100vh"
      w={"100%"}
      templateRows="repeat(14, 1fr)"
      templateColumns="repeat(5, 1fr)"
      backgroundColor={"#f8f9ff"}
    >
      <GridItem rowSpan={14} colSpan={1} bg="#081A51">
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
          <ListItem>
            <Text color={"white"} marginTop={"40%"}>
              <ListIcon marginRight={"5%"}>
                <Icon as={FiAlignCenter} size={"25px"} color="white" />
              </ListIcon>
              दायस्बोर्द्
            </Text>
          </ListItem>
          <ListItem>
            <Link href="/userList">
              <Text color={"white"} marginTop={"10%"}>
                <ListIcon marginRight={"5%"}>
                  <Icon as={FiUser} size={"25px"} color="white" />
                </ListIcon>
                प्रयोगकर्ता
              </Text>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="/list">
              <Text color={"white"} marginTop={"10%"}>
                <ListIcon marginRight={"5%"}>
                  <Icon as={FiCalendar} size={"25px"} color="white" />
                </ListIcon>
                सूचि
              </Text>
            </Link>
          </ListItem>
        </List>
      </GridItem>

      <GridItem rowSpan={1} colSpan={4} bg="white">
        <HStack>
            <Avatar
              borderRadius={"30%"}
              marginTop={"1%"}
              marginLeft={"1%"}
              height={"40px"}
              name="Ryan Florence"
              src="https://bit.ly/ryan-florence"
            />
          
          <Box>
            <Text marginTop={"10%"} fontWeight={"bold"}>
              राम दामना​
            </Text>
            <Text fontSize={"14px"}>ब्यबस्थापक</Text>
          </Box>
          <Box>
            <SearchBar />
          </Box>
        </HStack>

      </GridItem>
      <GridItem height={"100%"} rowSpan={13} colSpan={4} bg="white" bgColor={"#f8f9ff"}>
        {children}
      </GridItem>
    </Grid>
  );
}
