"use client";
import {
  Box,
  Card,
  Text,
  Input,
  Button,
  Grid,
  GridItem,
  Stack,
  FormControl,
  FormLabel,
  Center,
  Image,
  Avatar,
} from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";
import React from "react";
import { Radio, RadioGroup } from "@chakra-ui/react";

export default function page() {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  const [value, setValue] = React.useState("1");
  const [selectedImage, setSelectedImage] = React.useState(null);

  const handleImageChange = (e:any) => {
    const file = e.target.files[0];
    setSelectedImage(file);
  };

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
        height={"400%"}
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

          <Center>
            <Image marginTop={"1%"} w={"20%"} src={"logo.png"}></Image>
          </Center>
        </Box>

        <Text marginLeft="25%" fontSize={"14px"} marginTop={"5%"}>
          पुरा नाम्
        </Text>
        <Input
          marginLeft="25%"
          borderRadius={"10px"}
          marginTop={"1%"}
          fontSize={"14px"}
          type="text"
          placeholder="पुरा नाम्"
          sx={{ height: "50px", width: "55%" }}
        />
        <Text marginLeft="25%" fontSize={"14px"} marginTop={"3%"}>
          आफ्नो मोबाईल नम्बर हाल्नुहोस्
        </Text>
        <Input
          marginLeft="25%"
          marginTop={"1%"}
          fontSize={"14px"}
          borderRadius={"10px"}
          type="text"
          placeholder="आफ्नो मोबाईल नम्बर हाल्नुहोस्"
          sx={{ height: "50px", width: "55%" }}
        />

        <Text marginLeft="25%" fontSize={"14px"} marginTop={"3%"}>
          आफ्नो इमेल हाल्नुहोस्
        </Text>
        <Input
          marginLeft="25%"
          marginTop={"1%"}
          fontSize={"14px"}
          borderRadius={"10px"}
          type="text"
          placeholder="आफ्नो इमेल हाल्नुहोस्"
          sx={{ height: "50px", width: "55%" }}
        />
        <Text marginLeft="25%" fontSize={"14px"} marginTop={"3%"}>
          पासवर्ड हाल्नुहोस्
        </Text>

        <Input
          marginLeft="25%"
          borderRadius={"10px"}
          fontSize={"14px"}
          marginTop={"1%"}
          type="password"
          placeholder="पासवर्ड हाल्नुहोस्"
          sx={{ height: "50px", width: "55%" }}
        />
        <Text marginLeft="25%" fontSize={"14px"} marginTop={"3%"}>
          पासवर्ड पुस्ति गर्नुहोस्
        </Text>
        <Input
          marginLeft="25%"
          marginTop={"1%"}
          fontSize={"14px"}
          borderRadius={"10px"}
          type="password"
          placeholder="पासवर्ड पुस्ति गर्नुहोस्"
          sx={{ height: "50px", width: "55%" }}
        />

        <FormControl  marginLeft="25%"
          marginTop={"2%"}
          borderRadius={"10px"}
          sx={{ height: "50px", width: "55%" }}>
          <FormLabel fontSize={"14px"}>फोतो छानुहोस्</FormLabel>
          <Input fontSize={"14px"} variant='unstyled' type="file" onChange={handleImageChange} />
        </FormControl>


        <RadioGroup onChange={setValue} value={value}>
          <Stack direction="row" marginLeft="25%" marginTop={"5%"}>
            <Radio fontSize={"14px"} value="1">प्रसासन</Radio>
            <Radio fontSize={"14px"} value="2">गणक</Radio>
          </Stack>
        </RadioGroup>

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
            पहिले नै खाता छ् ?
          </GridItem>
          <GridItem w="100%" marginLeft={"7%"} color={"#3547CE"}>
            साइन इन गर्नुहोस्
          </GridItem>
        </Grid>
      </Card>
    </Box>
  );
}
