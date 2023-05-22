"use client";
import {
  Box,
  Card,
  Text,
  Input,
  Button,
  Grid,
  GridItem,
  Avatar,
} from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";
import React from "react";

export default function page() {
  return (
    <div>
      <Box
        height="30%"
        bgColor={"#081A51"}
        borderBottomLeftRadius={"20%"}
        borderBottomRightRadius={"20%"}
        position={"absolute"}
        width={"100%"}
      >
        <Card
          marginLeft={"30%"}
          width={"40%"}
          backgroundColor={"white"}
          height={"350%"}
          marginTop={"5%"}
          
          
        >
          <Box>
            <Text
              fontSize={"24px"}
              fontWeight={"bold"}
              marginLeft={"35%"}
              marginTop={"2%"}
            >
              साइन अप गर्नुहोस्
            </Text>
            <Text fontSize={"16px"} marginLeft={"20%"}>
              आफ्नो खाता सिर्जना गर्न बिबरनहरु प्रबिस्त गर्नुहोस्
            </Text>

            <Avatar
              marginLeft={"45%"}
              height={"60px"}
              name="Ryan Florence"
              src="https://bit.ly/ryan-florence"
            />
          </Box>
          <Box>
            <Text marginLeft="5%" fontSize={"16px"} marginTop={"5%"}>
              पुरा नाम्
            </Text>
            <Input
              size={"lg"}
              marginLeft="5%"
              borderRadius={"10px"}
              type="text"
              placeholder="पुरा नाम्"
              sx={{ height: "12%", width: "55%" }}
            />
            <Text marginLeft="5%" fontSize={"16px"} marginTop={"2%"}>
              आफ्नो मोबाईल नम्बर हाल्नुहोस्
            </Text>
            <Input
              size={"lg"}
              marginLeft="5%"
              borderRadius={"10px"}
              type="text"
              placeholder="आफ्नो मोबाईल नम्बर हाल्नुहोस्"
              sx={{ height: "12%",width: "55%"}}
            />
            <Text marginLeft="5%" fontSize={"16px"} marginTop={"2%"}>
              आफ्नो इमेल हाल्नुहोस्
            </Text>
            <Input
              size={"lg"}
              marginLeft="5%"
              borderRadius={"10px"}
              type="text"
              placeholder="आफ्नो इमेल हाल्नुहोस्"
              sx={{height: "12%",width: "55%" }}
            />
            <Text marginLeft="5%" fontSize={"16px"} marginTop={"2%"}>
              पासवर्ड हाल्नुहोस्
            </Text>
            <Input
              size={"lg"}
              marginLeft="5%"
              borderRadius={"10px"}
              type="text"
              placeholder="पासवर्ड हाल्नुहोस्"
              sx={{ height: "12%", width: "55%" }}
            />
            <Text marginLeft="5%" fontSize={"16px"} marginTop={"2%"}>
              पासवर्ड पुस्ति गर्नुहोस्
            </Text>
            <Input
              size={"lg"}
              marginLeft="5%"
              borderRadius={"10px"}
              type="text"
              placeholder="पासवर्ड पुस्ति गर्नुहोस्"
              sx={{ height: "12%", width: "55%"}}
            />
          </Box>
          <Button
            bgColor="#2E2C72"
            position={"relative"}
            height={"5%"}
            width="40%"
            color={"white"}
            marginLeft={"30%"}
            marginTop={"20%"}
          >
           साइन अप​
          </Button>
          <Grid templateColumns="repeat(2, 1fr)" marginTop={"2%"}>
            <GridItem w="100%" marginLeft={"55%"}>
              {" "}
              पहिले नै खाता छ् ​?
            </GridItem>
            <GridItem w="100%" marginLeft={"5%"} color={"#3547CE"}>
              साइन गर्नुहोस्
            </GridItem>
          </Grid>
        </Card>
      </Box>
    </div>
  );
}
