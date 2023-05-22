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
} from "@chakra-ui/react";

export default function Home() {
  return (
    <Flex
      width={"100%"}
      height={"100vh"}
      overflow={"hidden"}
      backgroundColor={"#f8f9ff"}
      boxShadow={"outline"}
    >
      <Box width={1 / 2}>
        <Box>
          <Image w={"100%"} src={"mountain.svg"}></Image>
        </Box>
      </Box>
      <Box width={1 / 2}>
        <Card
          sx={{ marginTop: "10%", marginLeft: "20%" }}
          backgroundColor={"white"}
          width={"60%"}
          height={"80%"}
        >
          <FormControl sx={{ marginLeft: "10%", marginTop: "3%" }}>
            <Text marginLeft={"25%"} fontSize={"20px"} fontWeight={"bold"}>
              लग - इन गर्नुहोस्
            </Text>
            <Input
              type="text"
              placeholder="मोबाईल नम्बर"
              sx={{ height: "40px", width: "300px", marginTop:'10%' }}
            />

            <Input
              type="password"
              placeholder="पासवर्ड"
              sx={{ height: "40px", width: "300px", marginTop: "5%" }}
            />
          </FormControl>
          <Text marginLeft={"10%"} marginRight={"10%"} marginTop={"5%"}>
            लगिन हुनका लागि आफ्नो मोबाईल नम्बर र पसवर्ड हाल्नुहोस{" "}
          </Text>
          <Button
            bgColor="#2E2C72"
            color="white"
            sx={{
              marginTop: "5%",
              marginLeft: "10%",
             
              height: "40px",
              width: "300px",
            }}
          >
            अगादि बध्नुहोस्
          </Button>
          <Text marginLeft={"30%"} marginTop={"5%"}>
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
              marginLeft: "10%",
              marginTop: "5%",
              height: "40px",
              width: "300px",
            }}
          >
            नया खाता बनाउनुहोस्
          </Button>
        </Card>
      </Box>
    </Flex>
  );
}
