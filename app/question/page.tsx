"use client";
import React from "react";
import { Box, Container, Text, Stack, Select, Input } from "@chakra-ui/react";
import { Radio, RadioGroup } from "@chakra-ui/react";
import { Table, Thead, Tr, Th, Td, Tbody } from "@chakra-ui/react";

const question = () => {
  const [value, setValue] = React.useState("1");
  const [data, setData] = React.useState("1");
  const [clinic, setClinic] = React.useState("1");
  return (
    // <Box bg="D9D9D9" w="100%" p={4} color="black" textAlign={"center"}>
    //   फारम​
    // </Box>
    <Container
      marginTop={"2%"}
      maxW="2xl"
      bg="white"
      borderRadius={"10px"}
      centerContent
    >
      <Text textAlign={"center"} fontSize={"bold"} marginTop={"5%"}>
        अनुसूची १ घरधुरी सर्वेक्षण फारमको नमुना (दफा १० (३) ख सँग सम्बन्धित)
      </Text>
      <Box
        marginTop={"2%"}
        width={"85%"}
        bg="#f8f9ff"
        color="black"
        marginLeft={"5%"}
        marginRight={"5%"}
      >
        <Text marginLeft={"5%"} fontSize={"bold"}>
          वडा नं.
        </Text>
        <Text marginLeft={"5%"}>बस्तीको नाम</Text>
        <Text marginLeft={"5%"}>परिवार क्र.सं</Text>
      </Box>
      <Box
        marginTop={"2%"}
        width={"85%"}
        bg="#f8f9ff"
        color="black"
        marginLeft={"5%"}
        marginRight={"5%"}
      >
        <Text marginLeft={"5%"} fontSize={"bold"}>
          १. परिवार मूलीको नाम
        </Text>
        <Input marginLeft={"5%"} variant="flushed" width={"90%"} />
        <Text marginLeft={"5%"} marginTop={"2%"} fontSize={"bold"}>
          लिङ्ग
        </Text>
        <RadioGroup onChange={setValue} value={value}>
          <Stack marginLeft={"5%"} marginTop={"1%"} direction="column">
            <Radio value="1">महिला</Radio>
            <Radio value="2">पुरुष</Radio>
            <Radio value="3">तेस्रो लिङ्गी</Radio>
          </Stack>
        </RadioGroup>
      </Box>
      <Box
        marginTop={"2%"}
        width={"85%"}
        bg="#f8f9ff"
        color="black"
        marginLeft={"5%"}
        marginRight={"5%"}
      >
        <Text marginLeft={"5%"} fontSize={"bold"}>
          वडा नं.
        </Text>
        <Text marginLeft={"5%"}>बस्तीको नाम</Text>
        <Text marginLeft={"5%"}>परिवार क्र.सं</Text>
      </Box>
      <Box
        marginTop={"2%"}
        width={"85%"}
        bg="#f8f9ff"
        color="black"
        marginLeft={"5%"}
        marginRight={"5%"}
      >
        <Text marginLeft={"5%"} fontSize={"bold"}>
          २. जाति
        </Text>
        <Select marginLeft={"5%"} width={"40%"} placeholder="जाति छानुहोस्">
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </Select>
      </Box>
      <Box
        marginTop={"2%"}
        width={"85%"}
        bg="#f8f9ff"
        color="black"
        marginLeft={"5%"}
        marginRight={"5%"}
      >
        <Text marginLeft={"5%"} fontSize={"bold"}>
          ३. धर्म
        </Text>
        <Select marginLeft={"5%"} width={"40%"} placeholder="जाति छानुहोस्">
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </Select>
      </Box>
      <Box
        marginTop={"2%"}
        width={"85%"}
        bg="#f8f9ff"
        color="black"
        marginLeft={"5%"}
        marginRight={"5%"}
      >
        <Text marginLeft={"5%"} fontSize={"bold"}>
          ३. परिवार संख्या
        </Text>
        <Table borderColor={"black"}>
          <Thead>
            <Tr>
              <Th>उमेर</Th>
              <Th>महिला​</Th>
              <Th>पुरुष​</Th>
              <Th>जम्मा​</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Td></Td>
            <Td></Td>
            <Td></Td>
            <Td></Td>
          </Tbody>
        </Table>
      </Box>
      <Box
        marginTop={"2%"}
        width={"85%"}
        bg="#f8f9ff"
        color="black"
        marginLeft={"5%"}
        marginRight={"5%"}
      >
        <Text marginLeft={"5%"} fontSize={"bold"}>
          ४. परिवारको कुनै सदस्य विरामी भएमा उपचारका लागि सबैभन्दा पहिला कहाँ
          जानुहुन्छ ?
        </Text>

        <RadioGroup onChange={setData} value={data}>
          <Stack marginLeft={"5%"} marginTop={"1%"} direction="column">
            <Radio value="1">लामा, धामी, झाँक्री</Radio>
            <Radio value="2">औषधि पसल</Radio>
            <Radio value="3">स्वास्थ्य चौकी</Radio>
            <Radio value="4">अस्पताल (निजी, सरकारी)</Radio>
          </Stack>
        </RadioGroup>
      </Box>
      <Box
        marginTop={"2%"}
        width={"85%"}
        bg="#f8f9ff"
        color="black"
        marginLeft={"5%"}
        marginRight={"5%"}
      >
        <Text marginLeft={"5%"} fontSize={"bold"}>
          ५ . नजिकको स्वास्थ्य संस्थामा पुग्न लाग्ने समय
        </Text>

        <RadioGroup onChange={setClinic} value={clinic}>
          <Stack marginLeft={"5%"} marginTop={"1%"} direction="column">
            <Radio value="1">
              स्वास्थ्य चौकी पुग्न लाग्ने समय (१५ मिनेट – ३० मिनेट – १ घण्टा – १
              घण्टाभन्दा बढी)
            </Radio>
            <Radio value="2">
              अस्पताल पुग्न लाग्ने समय (१५ मिनेट – ३० मिनेट – १ घण्टा – १
              घण्टाभन्दा बढी)
            </Radio>
          </Stack>
        </RadioGroup>
      </Box>
      <Box
        marginTop={"2%"}
        width={"85%"}
        bg="#f8f9ff"
        color="black"
        marginLeft={"5%"}
        marginRight={"5%"}
      >
        <Text marginLeft={"5%"} fontSize={"bold"}>
          ६. वितेको २ बर्षभित्र जन्मेका बालबालिकाको विवरण
        </Text>

        <RadioGroup onChange={setClinic} value={clinic}>
          <Stack marginLeft={"5%"} marginTop={"1%"} direction="column">
            <Radio value="1">जन्मेको जीवित शिशुको जम्मा संख्या:</Radio>
            <Radio value="2">जन्मेको १ घण्टाभित्र दुध खुवाएको संख्या:</Radio>
            <Radio value="3">६ महिनासम्म आमाको दुधमात्र खुवाएको संख्या:</Radio>
            <Radio value="4">२ वर्षसम्म आमाको दुध खुवाएको संख्या:</Radio>
          </Stack>
        </RadioGroup>
      </Box>
      <Box
        marginTop={"2%"}
        width={"85%"}
        bg="#f8f9ff"
        color="black"
        marginLeft={"5%"}
        marginRight={"5%"}
      >
        <Text marginLeft={"5%"} fontSize={"bold"}>
          ७. बितेको १ वर्षभित्रको तपाईको परिवारमा रहेका गर्भवती महिलाको
          स्वास्थ्य अवस्था बारे जानकारी
        </Text>
        <Text marginLeft={"5%"}>क. कति पटक गर्भवती परिक्षण गरेको छ?</Text>
        <Input marginLeft={"5%"} variant="flushed" width={"90%"} />
        <Text marginLeft={"5%"} marginTop="2%">
          ख. प्रसुति कहाँ भएको हो?
        </Text>

        <RadioGroup onChange={setClinic} value={clinic}>
          <Stack marginLeft={"5%"} marginTop={"1%"} direction="column">
            <Radio value="1">स्वास्थ्य संस्थामा</Radio>
            <Radio value="2">घरमा स्वास्थ्य कर्मीको सहयोगमा</Radio>
            <Radio value="3">घरमा स्वास्थ्य कर्मीको सहयोगबिना</Radio>
            <Radio value="4">अन्य</Radio>
          </Stack>
        </RadioGroup>
      </Box>

      <Box
        marginTop={"2%"}
        width={"85%"}
        bg="#f8f9ff"
        color="black"
        marginLeft={"5%"}
        marginRight={"5%"}
      >
        <Text marginLeft={"5%"} fontSize={"bold"}>
          ८. तपाईको परिवारको १८ वर्षभन्दा मुनिको सदस्यलाई कुनै दीर्घ रोग लागेको
          छ ?
        </Text>
        <RadioGroup onChange={setClinic} value={clinic}>
          <Stack marginLeft={"5%"} marginTop={"1%"} direction="row">
            <Radio value="1">छ</Radio>
            <Radio value="2">छैन</Radio>
          </Stack>
        </RadioGroup>
        <Text marginLeft={"5%"} fontSize={"bold"} marginTop={"2%"}>
          यदि लागेको छ भने कुन रोग लागेको थियो?
        </Text>
        <RadioGroup onChange={setClinic} value={clinic}>
          <Stack marginLeft={"5%"} marginTop={"1%"} direction="column">
            <Radio value="1">क्यान्सर</Radio>
            <Radio value="2">मधुमेह(चिनिरोग)</Radio>
            <Radio value="3">मुटु</Radio>
            <Radio value="4">मृगौला</Radio>
            <Radio value="5">अन्य</Radio>
          </Stack>
        </RadioGroup>
      </Box>
      <Box
        marginTop={"2%"}
        width={"85%"}
        bg="#f8f9ff"
        color="black"
        marginLeft={"5%"}
        marginRight={"5%"}
      >
        <Text marginLeft={"5%"} fontSize={"bold"}>
          ९. तपाईको परिवारमा दीर्घ रोगको कारण विगत १० वर्षमा १८ वर्ष भन्दामुनिका
          कुनै सदस्यको मृत्यु भएको छ ?
        </Text>
        <RadioGroup onChange={setClinic} value={clinic}>
          <Stack marginLeft={"5%"} marginTop={"1%"} direction="row">
            <Radio value="1">छ</Radio>
            <Radio value="2">छैन</Radio>
          </Stack>
        </RadioGroup>
        <Text marginLeft={"5%"} fontSize={"bold"} marginTop={"2%"}>
          यदि छ भने कुन रोगको कारण मृत्यु भएको थियो?
        </Text>
        <RadioGroup onChange={setClinic} value={clinic}>
          <Stack marginLeft={"5%"} marginTop={"1%"} direction="column">
            <Radio value="1">क्यान्सर</Radio>
            <Radio value="2">मधुमेह(चिनिरोग)</Radio>
            <Radio value="3">मुटु</Radio>
            <Radio value="4">मृगौला</Radio>
            <Radio value="5">अन्य</Radio>
          </Stack>
        </RadioGroup>
      </Box>
      <Box
        marginTop={"2%"}
        width={"85%"}
        bg="#f8f9ff"
        color="black"
        marginLeft={"5%"}
        marginRight={"5%"}
      >
        <Text marginLeft={"5%"} fontSize={"bold"}>
          १०. बितेको १ वर्षभित्र तपाईंको परिवारमा ५ वर्षमुनिका कुनै बालबालिकाको
          मृत्यु भएको छ?
        </Text>
        <RadioGroup onChange={setClinic} value={clinic}>
          <Stack marginLeft={"5%"} marginTop={"1%"} direction="row">
            <Radio value="1">छ</Radio>
            <Radio value="2">छैन</Radio>
          </Stack>
        </RadioGroup>
        <Text marginLeft={"5%"} fontSize={"bold"} marginTop={"2%"}>
          यदि छ भने कतिजनाको मृत्यु भएको थियो र के कारणबाट मृत्यु भएको थियो ?
        </Text>
        <RadioGroup onChange={setClinic} value={clinic}>
          <Stack marginLeft={"5%"} marginTop={"1%"} direction="column">
            <Radio value="1">क्यान्सर</Radio>
            <Radio value="2">मधुमेह(चिनिरोग)</Radio>
            <Radio value="3">मुटु</Radio>
            <Radio value="4">मृगौला</Radio>
            <Radio value="5">अन्य</Radio>
          </Stack>
        </RadioGroup>
      </Box>
      <Box
        marginTop={"2%"}
        width={"85%"}
        bg="#f8f9ff"
        color="black"
        marginLeft={"5%"}
        marginRight={"5%"}
      >
        <Text marginLeft={"5%"} fontSize={"bold"}>
          ११. दुई बालबालिका चिन्ह भएको आयोडिनयुक्त नुन प्रयोग गर्ने गर्नुभएको छ
          ?
        </Text>
        <RadioGroup onChange={setClinic} value={clinic}>
          <Stack marginLeft={"5%"} marginTop={"1%"} direction="row">
            <Radio value="1">छ</Radio>
            <Radio value="2">छैन</Radio>
          </Stack>
        </RadioGroup>
      </Box>
      <Box
        marginTop={"2%"}
        width={"85%"}
        bg="#f8f9ff"
        color="black"
        marginLeft={"5%"}
        marginRight={"5%"}
      >
        <Text marginLeft={"5%"} fontSize={"bold"}>
          १२. ५ बर्ष मुनिका बालबालिकाले पोषिलो खाना (दिनको कम्तिमा ३ पटक दुघ,
          लिटो, भात, फलफुल र सागसव्जी) खान पाउँछन्? दुई बालबालिका चिन्ह भएको
          आयोडिनयुक्त नुन प्रयोग गर्ने गर्नुभएको छ ?
        </Text>
        <RadioGroup onChange={setClinic} value={clinic}>
          <Stack marginLeft={"5%"} marginTop={"1%"} direction="row">
            <Radio value="1">पाउँछन्</Radio>
            <Radio value="2">पाउँदैनन्</Radio>
          </Stack>
        </RadioGroup>
      </Box>
      <Box
        marginTop={"2%"}
        width={"85%"}
        bg="#f8f9ff"
        color="black"
        marginLeft={"5%"}
        marginRight={"5%"}
      >
        <Text marginLeft={"5%"} fontSize={"bold"}>
          १३. तपाईंको परिवारका १ वर्ष मुनिकाको मासिक र १ वर्ष भन्दा माथि ५ वर्ष
          सम्मका बालबालिकाहरुको त्रैमासिक रुपमा तौल लिने गरिएको छ ?
        </Text>
        <RadioGroup onChange={setClinic} value={clinic}>
          <Stack marginLeft={"5%"} marginTop={"1%"} direction="row">
            <Radio value="1">छ</Radio>
            <Radio value="2">छैन</Radio>
          </Stack>
        </RadioGroup>
      </Box>
      <Box
        marginTop={"2%"}
        width={"85%"}
        bg="#f8f9ff"
        color="black"
        marginLeft={"5%"}
        marginRight={"5%"}
      >
        <Text marginLeft={"5%"} fontSize={"bold"}>
          १४. आफ्नो बच्चाको जन्मदर्ता गराउनु भएको छ कि छैन?
        </Text>
        <RadioGroup onChange={setClinic} value={clinic}>
          <Stack marginLeft={"5%"} marginTop={"1%"} direction="row">
            <Radio value="1">गराएको</Radio>
            <Radio value="2">नगराएको</Radio>
          </Stack>
        </RadioGroup>
      </Box>
      <Box
        marginTop={"2%"}
        width={"85%"}
        bg="#f8f9ff"
        color="black"
        marginLeft={"5%"}
        marginRight={"5%"}
      >
        <Text marginLeft={"5%"} fontSize={"bold"}>
          १५. गएको ३ वर्षभित्र तपाईंको परिवारमा कसैको विवाह भएको छ कि छैन?
        </Text>
        <RadioGroup onChange={setClinic} value={clinic}>
          <Stack marginLeft={"5%"} marginTop={"1%"} direction="row">
            <Radio value="1">गराएको</Radio>
            <Radio value="2">नगराएको</Radio>
          </Stack>
        </RadioGroup>
      </Box>
      <Box
        marginTop={"2%"}
        width={"85%"}
        bg="#f8f9ff"
        color="black"
        marginLeft={"5%"}
        marginRight={"5%"}
      >
        <Text marginLeft={"5%"} fontSize={"bold"}>
          १६. तपाईको परिवारका १८ वर्षसम्मका बालबालिका अरुको घरमा काम गर्न बसेका
          छन्?
        </Text>
        <RadioGroup onChange={setClinic} value={clinic}>
          <Stack marginLeft={"5%"} marginTop={"1%"} direction="row">
            <Radio value="1">छ</Radio>
            <Radio value="2">छैन</Radio>
          </Stack>
        </RadioGroup>
        <Text marginLeft={"5%"} fontSize={"bold"} marginTop={"2%"}>
          यदि छन् भने के मा काम गर्छन?
        </Text>
        <RadioGroup onChange={setClinic} value={clinic}>
          <Stack marginLeft={"5%"} marginTop={"1%"} direction="column">
            <Radio value="1">बालभरिया</Radio>
            <Radio value="2">घरेलु बालश्रम अर्काको घरमा काम गर्ने</Radio>
            <Radio value="3">होटल+पसलमा काम गर्ने</Radio>
            <Radio value="4">यातायात</Radio>
            <Radio value="5">कारखाना+उद्योग</Radio>
            <Radio value="6">अन्य</Radio>
          </Stack>
        </RadioGroup>
      </Box>
      <Box
        marginTop={"2%"}
        width={"85%"}
        bg="#f8f9ff"
        color="black"
        marginLeft={"5%"}
        marginRight={"5%"}
      >
        <Text marginLeft={"5%"} fontSize={"bold"}>
          १७. तपाईको परिवारका बालबालिकाहरुले कस्ता प्रकारका बालश्रम गरिरहेका छन्
          ?
        </Text>

        <RadioGroup onChange={setData} value={data}>
          <Stack marginLeft={"5%"} marginTop={"1%"} direction="column">
            <Radio value="1">बालभरिया</Radio>
            <Radio value="2">घरेलु बालश्रम अर्काको घरमा काम गर्ने</Radio>
            <Radio value="3">होटल+पसलमा काम गर्ने</Radio>
            <Radio value="4">यातायात</Radio>
            <Radio value="5">कारखाना+उद्योग</Radio>
            <Radio value="6">अन्य</Radio>
          </Stack>
        </RadioGroup>
      </Box>
      <Box
        marginTop={"2%"}
        width={"85%"}
        bg="#f8f9ff"
        color="black"
        marginLeft={"5%"}
        marginRight={"5%"}
      >
        <Text marginLeft={"5%"} fontSize={"bold"}>
          १८. बालबालिकाहरु घरबाहिर काम गरेको भए गरेको ठाउँमा के कस्तो समस्या
          भोग्ने गरेका छन्?
        </Text>

        <RadioGroup onChange={setData} value={data}>
          <Stack marginLeft={"5%"} marginTop={"1%"} direction="column">
            <Radio value="1">गाली+गलौज</Radio>
            <Radio value="2">कुटपिट</Radio>
            <Radio value="3">खानामा भेदभाव</Radio>
            <Radio value="4">यौन शोषण</Radio>
            <Radio value="5">मनोवैज्ञानिक तनाव</Radio>
            <Radio value="6">खेल्नमा भेदभाव वा खेल्न नदिने</Radio>
            <Radio value="7">अन्य...</Radio>
          </Stack>
        </RadioGroup>
      </Box>
      <Box
        marginTop={"2%"}
        width={"85%"}
        bg="#f8f9ff"
        color="black"
        marginLeft={"5%"}
        marginRight={"5%"}
      >
        <Text marginLeft={"5%"} fontSize={"bold"}>
          १९. तपाईंको परिवारमा बालबालिकाले कमजोरी गरेमा के गर्नु हुन्छ ?
        </Text>

        <RadioGroup onChange={setData} value={data}>
          <Stack marginLeft={"5%"} marginTop={"1%"} direction="column">
            <Radio value="1">गाली</Radio>
            <Radio value="2">कुटपीट</Radio>
            <Radio value="3">खानामा भेदभाव</Radio>
            <Radio value="4">कोठामा थुन्ने</Radio>
            <Radio value="5">सम्झाउने</Radio>
            <Radio value="6">
              हेप्ने, निन्दा गर्ने वा मनोवैज्ञानिक तनाव दिने
            </Radio>
            <Radio value="7">अन्य</Radio>
          </Stack>
        </RadioGroup>
      </Box>
      <Box
        marginTop={"2%"}
        width={"85%"}
        bg="#f8f9ff"
        color="black"
        marginLeft={"5%"}
        marginRight={"5%"}
      >
        <Text marginLeft={"5%"} fontSize={"bold"}>
          २०. तपाईंको घरमा छोरा र छोरीमा कुनै फरक व्यवहार गर्ने गर्नुभएको छ ?
        </Text>
        <RadioGroup onChange={setClinic} value={clinic}>
          <Stack marginLeft={"5%"} marginTop={"1%"} direction="row">
            <Radio value="1">छ</Radio>
            <Radio value="2">छैन</Radio>
          </Stack>
        </RadioGroup>
        <Text marginLeft={"5%"} fontSize={"bold"} marginTop={"2%"}>
          यदि छ भने,
        </Text>
        <RadioGroup onChange={setClinic} value={clinic}>
          <Stack marginLeft={"5%"} marginTop={"1%"} direction="column">
            <Radio value="1">शिक्षामा</Radio>
            <Radio value="2">खानपिनमा</Radio>
            <Radio value="3">घरेलु काममा</Radio>
            <Radio value="4">पोशाकमा</Radio>
            <Radio value="5">अन्य</Radio>
          </Stack>
        </RadioGroup>
      </Box>
      <Box
        marginTop={"2%"}
        width={"85%"}
        bg="#f8f9ff"
        color="black"
        marginLeft={"5%"}
        marginRight={"5%"}
      >
        <Text marginLeft={"5%"} fontSize={"bold"}>
          २१ एक वर्षभित्र तपाईंको परिवारमा महिला तथा बालबालिका उपर हिंसा तथा
          सामाजिक कुरिती सम्बन्धी निम्न कुनै घटना घटेका छन+छैनन् ?
        </Text>

        <RadioGroup onChange={setData} value={data}>
          <Stack marginLeft={"5%"} marginTop={"1%"} direction="column">
            <Radio value="1">दाईजोसम्बन्धी</Radio>
            <Radio value="2">वहुविवाह</Radio>
            <Radio value="3">घरायसी हिंसा</Radio>
            <Radio value="4">बालविवाह</Radio>
            <Radio value="5">बलात्कार</Radio>
            <Radio value="6">महिला+बालबालिका बेचविखन</Radio>
            <Radio value="7">कुनै पनि घटना नघटेको</Radio>
          </Stack>
        </RadioGroup>
      </Box>
      <Box
        marginTop={"2%"}
        width={"85%"}
        bg="#f8f9ff"
        color="black"
        marginLeft={"5%"}
        marginRight={"5%"}
      >
        <Text marginLeft={"5%"} fontSize={"bold"}>
          २२. तपाईंको परिवारका कुनै बालबालिका बालगृह वा कुनै संस्थामा बसेका छन्
          ?
        </Text>
        <RadioGroup onChange={setClinic} value={clinic}>
          <Stack marginLeft={"5%"} marginTop={"1%"} direction="row">
            <Radio value="1">छ</Radio>
            <Radio value="2">छैन</Radio>
          </Stack>
        </RadioGroup>
        <Text marginLeft={"5%"}>यदि छन् भन कहा?</Text>
        <Input
          marginLeft={"5%"}
          marginBottom={"5%"}
          variant="flushed"
          width={"90%"}
        />
      </Box>
      <Box
        marginTop={"2%"}
        width={"85%"}
        bg="#f8f9ff"
        color="black"
        marginLeft={"5%"}
        marginRight={"5%"}
      >
        <Text marginLeft={"5%"} fontSize={"bold"}>
          २३. तपाईंलाई बाल अधिकारको बारेमा जानकारी छ ?
        </Text>
        <RadioGroup onChange={setClinic} value={clinic}>
          <Stack marginLeft={"5%"} marginTop={"1%"} direction="row">
            <Radio value="1">छ</Radio>
            <Radio value="2">छैन</Radio>
            <Radio value="2">केही कुरा सुनेको छु</Radio>
          </Stack>
        </RadioGroup>
      </Box>
      <Box
        marginTop={"2%"}
        width={"85%"}
        bg="#f8f9ff"
        color="black"
        marginLeft={"5%"}
        marginRight={"5%"}
      >
        <Text marginLeft={"5%"} fontSize={"bold"}>
          २४. तपाईंको परिवारका कुनै बालबालिकामा लागू पदार्थ दुव्र्यसनको लत रहे छ
          कि छैन ?
        </Text>
        <RadioGroup onChange={setClinic} value={clinic}>
          <Stack marginLeft={"5%"} marginTop={"1%"} direction="row">
            <Radio value="1">छ</Radio>
            <Radio value="2">छैन</Radio>
          </Stack>
        </RadioGroup>
        <Text marginLeft={"5%"} fontSize={"bold"} marginTop={"2%"}>
          छन् भने?
        </Text>
        <RadioGroup onChange={setClinic} value={clinic}>
          <Stack marginLeft={"5%"} marginTop={"1%"} direction="column">
            <Radio value="1">धुम्रपान गर्नेको संख्या: </Radio>
            <Radio value="2">मद्यपान गर्नेको संख्या:</Radio>
            <Radio value="3">नसालु पदार्थ गर्नेको संख्या:</Radio>
          </Stack>
        </RadioGroup>
      </Box>
      <Box
        marginTop={"2%"}
        width={"85%"}
        bg="#f8f9ff"
        color="black"
        marginLeft={"5%"}
        marginRight={"5%"}
      >
        <Text marginLeft={"5%"} fontSize={"bold"}>
          २५. बालबालिका बस्ने, पढ्ने कोठा अलग्गै छ ?
        </Text>
        <RadioGroup onChange={setClinic} value={clinic}>
          <Stack marginLeft={"5%"} marginTop={"1%"} direction="row">
            <Radio value="1">छ</Radio>
            <Radio value="2">छैन</Radio>
          </Stack>
        </RadioGroup>
      </Box>
      <Box
        marginTop={"2%"}
        width={"85%"}
        bg="#f8f9ff"
        color="black"
        marginLeft={"5%"}
        marginRight={"5%"}
      >
        <Text marginLeft={"5%"} fontSize={"bold"}>
          २६. मानिस बस्ने घर (मूल घर) र गाईवस्तुहरु बाँध्ने गोठ अलग्गै छ ?
        </Text>
        <RadioGroup onChange={setClinic} value={clinic}>
          <Stack marginLeft={"5%"} marginTop={"1%"} direction="row">
            <Radio value="1">छ</Radio>
            <Radio value="2">छैन</Radio>
            <Radio value="3">
              गोठ अलग्गै भए पनि गोठमाथि पनि सुत्ने गरेको छ
            </Radio>
          </Stack>
        </RadioGroup>
      </Box>
      <Box
        marginTop={"2%"}
        width={"85%"}
        bg="#f8f9ff"
        color="black"
        marginLeft={"5%"}
        marginRight={"5%"}
      >
        <Text marginLeft={"5%"} fontSize={"bold"}>
          २७. तपाईको परिवारमा बाल विकास केन्द्र वा पूर्व प्रा.वि. तहमा जाने ३
          देखि ४ वर्षसम्मका बालबालिका संख्या कति छ ?
        </Text>
        <Input
          marginLeft={"5%"}
          marginBottom={"5%"}
          variant="flushed"
          width={"90%"}
        />
      </Box>
      <Box
        marginTop={"2%"}
        width={"85%"}
        bg="#f8f9ff"
        color="black"
        marginLeft={"5%"}
        marginRight={"5%"}
      >
        <Text marginLeft={"5%"} fontSize={"bold"}>
          २८. परिवारको शैक्षिक स्थिति
        </Text>
        <RadioGroup onChange={setClinic} value={clinic}>
          <Stack marginLeft={"5%"} marginTop={"1%"} direction="column">
            <Radio value="1">क. आधारभुत तह पढ्नेको संख्या: </Radio>
            <Radio value="2">ख. कक्षा दशसम्म पढ्नेको संख्या:</Radio>
            <Radio value="3"> ग. ‌कक्षा १२ सम्म पढ्नेको संख्या:</Radio>
            <Radio value="4"> घ. कक्षा १२ भन्दामाथीको संख्या:</Radio>
          </Stack>
        </RadioGroup>
      </Box>
      <Box
        marginTop={"2%"}
        width={"85%"}
        bg="#f8f9ff"
        color="black"
        marginLeft={"5%"}
        marginRight={"5%"}
      >
        <Text marginLeft={"5%"} fontSize={"bold"}>
        २९. विद्यालयस्तरमा अध्ययन गरिरहेका बालबालिकाको विवरण
        </Text>
        <RadioGroup onChange={setClinic} value={clinic}>
          <Stack marginLeft={"5%"} marginTop={"1%"} direction="column">
            <Radio value="1">१. प्रारम्भिक बालबिकास संख्या:</Radio>
            <Radio value="3"> २. आधारभुत तह संख्या:</Radio>
            <Radio value="4"> ३. कक्षा दशसम्म संख्या:</Radio>
            <Radio value="4"> ४. कक्षा १२ सम्म संख्या:</Radio>
          </Stack>
        </RadioGroup>
      </Box>
      <Box
        marginTop={"2%"}
        width={"85%"}
        bg="#f8f9ff"
        color="black"
        marginLeft={"5%"}
        marginRight={"5%"}
      >
        <Text marginLeft={"5%"} fontSize={"bold"}>
        २९.१ पालिका बाहिरका विद्यालयमा अध्ययनरत संख्या
        </Text>
        <RadioGroup onChange={setClinic} value={clinic}>
          <Stack marginLeft={"5%"} marginTop={"1%"} direction="column">
            <Radio value="1">१. प्रारम्भिक बालबिकास संख्या:</Radio>
            <Radio value="3"> २. आधारभुत तह संख्या:</Radio>
            <Radio value="4"> ३. कक्षा दशसम्म संख्या:</Radio>
            <Radio value="4"> ४. कक्षा १२ सम्म संख्या:</Radio>
          </Stack>
        </RadioGroup>
      </Box>
    </Container>
  );
};

export default question;
