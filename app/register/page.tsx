"use client";
import {
  Box,
  Card,
  Text,
  Input,
  Button,
  Grid,
  GridItem,
  InputRightElement,
  InputGroup,
  Avatar,
} from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";
import React from "react";

export default function page() {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  return (
    <Box
      height="200px"
      bgColor={"#081A51"}
      borderBottomLeftRadius={"80px"}
      borderBottomRightRadius={"80px"}
      position={"absolute"}
      width={"100%"}
    >
      <Card
        marginLeft={"30%"}
        width={"40%"}
        backgroundColor={"white"}
        height={"350%"}
        marginTop={"5%"}
        borderRadius={"5px"}
        boxShadow={"2xl"}
      >
        <Box>
          <Text
            fontSize={"24px"}
            fontWeight={"bold"}
            textAlign={"center"}
            marginTop={"2%"}
          >
            साइन अप गर्नुहोस्
          </Text>
          <Text fontSize={"16px"} textAlign={"center"}>
            आफ्नो खाता सिर्जना गर्न बिबरनहरु प्रबिस्त गर्नुहोस्
          </Text>

          <Avatar
            marginLeft={"45%"}
            borderRadius={"70%"}
            height={"60px"}
            name="Ryan Florence"
            src="https://bit.ly/ryan-florence"
          />
        </Box>

        <Text marginLeft="25%" fontSize={"16px"} marginTop={"5%"}>
          पुरा नाम्
        </Text>
        <Input
          marginLeft="25%"
          borderRadius={"10px"}
          marginTop={"1%"}
          type="text"
          placeholder="पुरा नाम्"
          sx={{ height: "50px", width: "55%" }}
        />
        <Text marginLeft="25%" fontSize={"16px"} marginTop={"3%"}>
          आफ्नो मोबाईल नम्बर हाल्नुहोस्
        </Text>
        <Input
          marginLeft="25%"
          marginTop={"1%"}
          borderRadius={"10px"}
          type="text"
          placeholder="आफ्नो मोबाईल नम्बर हाल्नुहोस्"
          sx={{ height: "50px", width: "55%" }}
        />
        <Text marginLeft="25%" fontSize={"16px"} marginTop={"3%"}>
          आफ्नो इमेल हाल्नुहोस्
        </Text>
        <Input
          marginLeft="25%"
          marginTop={"1%"}
          borderRadius={"10px"}
          type="text"
          placeholder="आफ्नो इमेल हाल्नुहोस्"
          sx={{ height: "50px", width: "55%" }}
        />
        <Text marginLeft="25%" fontSize={"16px"} marginTop={"3%"}>
          पासवर्ड हाल्नुहोस्
        </Text>
        {/* <InputGroup size="md">
          <Input
         
          marginLeft="25%"
          borderRadius={"10px"}
          marginTop={"1%"}
          // type="text"
          placeholder="पासवर्ड हाल्नुहोस्"
          sx={{ height: "50px", width: "55%" }}
        
            // pr="4.5rem"
            type={show ? "text" : "password"}
            // placeholder="Enter password"
          />
          <InputRightElement >
            <Button h="1.75rem" size="sm" onClick={handleClick}>
              {show ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup> */}
        <Input
          marginLeft="25%"
          borderRadius={"10px"}
          marginTop={"1%"}
          type="password"
          placeholder="पासवर्ड हाल्नुहोस्"
          sx={{ height: "50px", width: "55%" }}
        />
        <Text marginLeft="25%" fontSize={"16px"} marginTop={"3%"}>
          पासवर्ड पुस्ति गर्नुहोस्
        </Text>
        <Input
          marginLeft="25%"
          marginTop={"1%"}
          borderRadius={"10px"}
          type="password"
          placeholder="पासवर्ड पुस्ति गर्नुहोस्"
          sx={{ height: "50px", width: "55%" }}
        />

        <Button
          bgColor="#2E2C72"
          position={"relative"}
          height={"40px"}
          width="55%"
          color={"white"}
          marginLeft={"25%"}
          marginTop={"5%"}
        >
          साइन अप​
        </Button>
        <Grid templateColumns="repeat(2, 1fr)" marginTop={"2%"}>
          <GridItem w="100%" marginLeft={"57%"}>
            {" "}
            पहिले नै खाता छ् ​?
          </GridItem>
          <GridItem w="100%" marginLeft={"7%"} color={"#3547CE"}>
            साइन गर्नुहोस्
          </GridItem>
        </Grid>
      </Card>
    </Box>
  );
}
