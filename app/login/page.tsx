"use client";
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Box,
  Divider,
  Card,
  Flex,
  Image,
  Text,
  Center,
} from "@chakra-ui/react";

export default function Home() {
  return (
    <Flex
      width={"100%"}
      height={"100vh"}
      overflow={"hidden"}
      backgroundColor={"#f8f9ff"}
    >
      <Box width={"50%"} backgroundImage={"mountain.svg"} borderRightRadius={"10px"}>
        <Box>
          <Center>
            <Image marginTop={"35vh"} w={"30%"} src={"logo.png"}></Image>
          </Center>
          <Text
            textAlign={"center"}
            color={"white"}
            fontSize={"24px"}
            marginTop={"2%"}
          >
            घरधुरि सर्बेछ्र्न बेसिसहर नगरपालिका
          </Text>
        </Box>
      </Box>

      <Box width={"50%"}>
        <Card
          sx={{ marginTop: "10%", marginLeft: "20%" }}
          backgroundColor={"white"}
          width={"60%"}
          height={"80%"}
          borderRadius={"5px"}
          boxShadow={"2xl"}
        >
          <Text
            fontSize={"20px"}
            fontWeight={"bold"}
            textAlign={"center"}
            marginTop={"3%"}
          >
            लग - इन गर्नुहोस्
          </Text>

          <Input
            type="text"
            variant="outline"
            placeholder="मोबाईल नम्बर"
            sx={{
              height: "50px",
              width: "80%",
              marginTop: "5%",
              marginLeft: "10%",
            }}
          />

          <Input
            type="password"
            variant="outline"
            placeholder="पासवर्ड"
            sx={{
              height: "50px",
              width: "80%",
              marginTop: "5%",
              marginLeft: "10%",
            }}
          />

          <Text
            marginLeft={"10%"}
            textAlign={"center"}
            marginRight={"10%"}
            marginTop={"5%"}
          >
            लग - इन हुनका लागि आफ्नो मोबाईल नम्बर र पसवर्ड हाल्नुहोस{" "}
          </Text>
          <Button
            bgColor="#2E2C72"
            color="white"
            sx={{
              marginTop: "5%",
              marginLeft: "10%",
              height: "40px",
              width: "78%",
            }}
          >
            अगादि बध्नुहोस्
          </Button>
          <Text marginTop={"5%"} textAlign={"center"}>
            पासवर्ड बिर्सिनुभयो ?
          </Text>
          <Divider
            marginLeft={"5%"}
            height={"1px"}
            marginTop={"10%"}
            backgroundColor={"black"}
            width={"90%"}
          />
          <Button
            bgColor="#30A525"
            color={"white"}
            sx={{
              marginLeft: "12%",
              marginTop: "5%",
              height: "40px",
              width: "78%",
            }}
          >
            नया खाता बनाउनुहोस्
          </Button>
        </Card>
      </Box>
    </Flex>
  );
}
