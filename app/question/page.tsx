"use client";
import React from "react";
import {
	Box,
	Container,
	Text,
	Stack,
	Select,
	Input,
	HStack,
} from "@chakra-ui/react";
import { Radio, RadioGroup } from "@chakra-ui/react";
import { Table, Thead, Tr, Th, Td, Tbody } from "@chakra-ui/react";

export default function Questions() {
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
			<Text textAlign={"center"} fontWeight={"bold"} marginTop={"5%"}>
				अनुसूची १
			</Text>
			<Text textAlign={"center"} fontWeight={"bold"} marginTop={"1%"}>
				घरधुरी सर्वेक्षण फारमको नमुना
			</Text>
			<Text textAlign={"center"} marginTop={"1%"}>
				(दफा १० (३) ख सँग सम्बन्धित)
			</Text>
			<Box
				marginTop={"2%"}
				width={"85%"}
				bg="#f8f9ff"
				color="black"
				marginLeft={"5%"}
				borderRadius={"5px"}
				marginRight={"5%"}
			>
				<HStack marginTop={"2%"}>
					<Text marginLeft={"5%"} fontWeight={"bold"}>
						वडा नं. :
					</Text>
					<Input marginLeft={"45%"} variant="outline" width={"40%"} />
				</HStack>
				<HStack>
					<Text marginLeft={"5%"} fontWeight={"bold"}>
						बस्तीको नाम :
					</Text>
					<Input marginLeft={"45%"} variant="outline" width={"40%"} />
				</HStack>
				<HStack marginBottom={"5%"}>
					<Text marginLeft={"5%"} fontWeight={"bold"}>
						परिवार क्र.सं :
					</Text>
					<Input marginLeft={"85%"} variant="outline" width={"40%"} />
				</HStack>
			</Box>
			<Box
				marginTop={"2%"}
				width={"85%"}
				bg="#f8f9ff"
				borderRadius={"5px"}
				color="black"
				marginLeft={"5%"}
				marginRight={"5%"}
			>
				<HStack marginTop={"2%"}>
					<Text marginLeft={"5%"} fontWeight={"bold"}>
						१. परिवार मूलीको नाम
					</Text>
					<Input variant="outline" width={"40%"} />
				</HStack>
				<Text marginLeft={"5%"} marginTop={"2%"} fontWeight={"bold"}>
					लिङ्ग
				</Text>
				<RadioGroup onChange={setValue} value={value} marginBottom={"5%"}>
					<Stack marginLeft={"5%"} marginTop={"1%"} direction="column">
						<Radio value="1">महिला</Radio>
						<Radio value="2">पुरुष</Radio>
						<Radio value="3">तेस्रो लिङ्गी</Radio>
					</Stack>
				</RadioGroup>
			</Box>
			{/* <Box
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
      </Box> */}
			<Box
				marginTop={"2%"}
				width={"85%"}
				borderRadius={"5px"}
				bg="#f8f9ff"
				color="black"
				marginLeft={"5%"}
				marginRight={"5%"}
			>
				<Text marginLeft={"5%"} fontWeight={"bold"} marginTop={"2%"}>
					२. जाति
				</Text>
				<Select
					marginLeft={"5%"}
					width={"40%"}
					placeholder="जाति छानुहोस्"
					marginBottom={"5%"}
				>
					<option value="option1">ब्राह्मण </option>
					<option value="option2">क्षेत्री</option>
					<option value="option3">वैश्य</option>
					<option value="option3">षुद्र​</option>
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
				<Text marginLeft={"5%"} fontWeight={"bold"} marginTop={"2%"}>
					३. धर्म
				</Text>
				<Select
					marginLeft={"5%"}
					width={"40%"}
					// placeholder="धर्म छानुहोस्"
					marginBottom={"5%"}
				>
					<option value="option1">हिन्दुजम</option>
					<option value="option2">बुधिजम </option>
					<option value="option3">इस्लाम </option>
					<option value="option3">क्रिस्टियन </option>
					<option value="option3">अन्य​</option>
				</Select>
			</Box>
			<Box
				marginTop={"2%"}
				width={"85%"}
				borderRadius={"5px"}
				bg="#f8f9ff"
				color="black"
				marginLeft={"5%"}
				marginRight={"5%"}
			>
				<Text marginLeft={"5%"} fontWeight={"bold"}>
					३. परिवार संख्या
				</Text>
				<div>
					<Table borderColor={"black"}>
						<Thead>
							<Tr>
								<Th>महिला​</Th>
								<Th>पुरुष​</Th>
								<Th>जम्मा​</Th>
							</Tr>
						</Thead>
						<Tbody>
							<Td>
								<Input variant="outline" width={"60%"} />
							</Td>
							<Td>
								<Input variant="outline" width={"60%"} />
							</Td>
							<Td>
								<Input variant="outline" width={"60%"} />
							</Td>
						</Tbody>
					</Table>
				</div>
			</Box>
			<Box
				marginTop={"2%"}
				width={"85%"}
				borderRadius={"5px"}
				bg="#f8f9ff"
				color="black"
				marginLeft={"5%"}
				marginRight={"5%"}
			>
				<Text marginLeft={"5%"} fontWeight={"bold"} marginTop={"2%"}>
					४. परिवारको कुनै सदस्य विरामी भएमा उपचारका लागि सबैभन्दा पहिला कहाँ
					जानुहुन्छ ?
				</Text>

				<RadioGroup onChange={setData} value={data} marginBottom={"5%"}>
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
				borderRadius={"5px"}
				bg="#f8f9ff"
				color="black"
				marginLeft={"5%"}
				marginRight={"5%"}
			>
				<Text marginLeft={"5%"} fontWeight={"bold"} marginTop={"2%"}>
					५ . नजिकको स्वास्थ्य संस्थामा पुग्न लाग्ने समय
				</Text>

				<RadioGroup onChange={setClinic} value={clinic} marginBottom={"5%"}>
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
				borderRadius={"5px"}
				bg="#f8f9ff"
				color="black"
				marginLeft={"5%"}
				marginRight={"5%"}
			>
				<Text marginLeft={"5%"} fontWeight={"bold"} marginTop={"2%"}>
					६. वितेको २ बर्षभित्र जन्मेका बालबालिकाको विवरण
				</Text>

				<RadioGroup onChange={setClinic} value={clinic} marginBottom={"5%"}>
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
				borderRadius={"5px"}
				bg="#f8f9ff"
				color="black"
				marginLeft={"5%"}
				marginRight={"5%"}
			>
				<Text marginLeft={"5%"} fontWeight={"bold"} marginTop={"2%"}>
					७. बितेको १ वर्षभित्रको तपाईको परिवारमा रहेका गर्भवती महिलाको
					स्वास्थ्य अवस्था बारे जानकारी
				</Text>
				<Text marginLeft={"5%"} fontWeight={"bold"}>
					क. कति पटक गर्भवती परिक्षण गरेको छ?
				</Text>
				<Input marginLeft={"5%"} variant="outline" width={"90%"} />
				<Text marginLeft={"5%"} fontWeight={"bold"} marginTop={"2%"}>
					ख. प्रसुति कहाँ भएको हो?
				</Text>

				<RadioGroup onChange={setClinic} value={clinic} marginBottom={"5%"}>
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
				borderRadius={"5px"}
				bg="#f8f9ff"
				color="black"
				marginLeft={"5%"}
				marginRight={"5%"}
			>
				<Text marginLeft={"5%"} fontWeight={"bold"} marginTop={"2%"}>
					८. तपाईको परिवारको १८ वर्षभन्दा मुनिको सदस्यलाई कुनै दीर्घ रोग लागेको
					छ ?
				</Text>
				<RadioGroup onChange={setClinic} value={clinic}>
					<Stack marginLeft={"5%"} marginTop={"1%"} direction="row">
						<Radio value="1">छ</Radio>
						<Radio value="2">छैन</Radio>
					</Stack>
				</RadioGroup>
				<Text marginLeft={"5%"} fontWeight={"bold"} marginTop={"2%"}>
					यदि लागेको छ भने कुन रोग लागेको थियो?
				</Text>
				<RadioGroup onChange={setClinic} value={clinic} marginBottom={"5%"}>
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
				borderRadius={"5px"}
				bg="#f8f9ff"
				color="black"
				marginLeft={"5%"}
				marginRight={"5%"}
			>
				<Text marginLeft={"5%"} fontWeight={"bold"} marginTop={"2%"}>
					९. तपाईको परिवारमा दीर्घ रोगको कारण विगत १० वर्षमा १८ वर्ष भन्दामुनिका
					कुनै सदस्यको मृत्यु भएको छ ?
				</Text>
				<RadioGroup onChange={setClinic} value={clinic}>
					<Stack marginLeft={"5%"} marginTop={"1%"} direction="row">
						<Radio value="1">छ</Radio>
						<Radio value="2">छैन</Radio>
					</Stack>
				</RadioGroup>
				<Text marginLeft={"5%"} fontWeight={"bold"} marginTop={"2%"}>
					यदि छ भने कुन रोगको कारण मृत्यु भएको थियो?
				</Text>
				<RadioGroup onChange={setClinic} value={clinic} marginBottom={"5%"}>
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
				borderRadius={"5px"}
				bg="#f8f9ff"
				color="black"
				marginLeft={"5%"}
				marginRight={"5%"}
				padding={"5%"}
			>
				<Text fontWeight={"bold"} marginTop={"2%"}>
					१०.१ बितेको १ बर्षभित्र तपाईंको परिवार्मा ५ बर्षमुनिको कुनै
					बाल्बालिकको मृत्यु भयको छ ? (रोग्)
				</Text>
				<Input variant="outline" width={"60%"} />

				<Text fontWeight={"bold"} marginTop={"2%"}>
					१०.२ बितेको १ बर्षभित्र तपाईंको परिवार्मा ५ बर्षमुनिको कुनै
					बाल्बालिकको मृत्यु भयको छ ? (दुर्घटना)
				</Text>
				<Input variant="outline" width={"60%"} />
			</Box>
			<Box
				marginTop={"2%"}
				width={"85%"}
				borderRadius={"5px"}
				bg="#f8f9ff"
				color="black"
				marginLeft={"5%"}
				marginRight={"5%"}
			>
				<Text marginLeft={"5%"} fontWeight={"bold"} marginTop={"2%"}>
					११. दुई बालबालिका चिन्ह भएको आयोडिनयुक्त नुन प्रयोग गर्ने गर्नुभएको छ
					?
				</Text>
				<RadioGroup onChange={setClinic} value={clinic} marginBottom={"5%"}>
					<Stack marginLeft={"5%"} marginTop={"1%"} direction="row">
						<Radio value="1">छ</Radio>
						<Radio value="2">छैन</Radio>
					</Stack>
				</RadioGroup>
			</Box>
			<Box
				marginTop={"2%"}
				width={"85%"}
				borderRadius={"5px"}
				bg="#f8f9ff"
				color="black"
				marginLeft={"5%"}
				marginRight={"5%"}
			>
				<Text marginLeft={"5%"} fontWeight={"bold"} marginTop={"2%"}>
					१२. ५ बर्ष मुनिका बालबालिकाले पोषिलो खाना (दिनको कम्तिमा ३ पटक दुघ,
					लिटो, भात, फलफुल र सागसव्जी) खान पाउँछन्? दुई बालबालिका चिन्ह भएको
					आयोडिनयुक्त नुन प्रयोग गर्ने गर्नुभएको छ ?
				</Text>
				<RadioGroup onChange={setClinic} value={clinic} marginBottom={"5%"}>
					<Stack marginLeft={"5%"} marginTop={"1%"} direction="row">
						<Radio value="1">पाउँछन्</Radio>
						<Radio value="2">पाउँदैनन्</Radio>
					</Stack>
				</RadioGroup>
			</Box>
			<Box
				marginTop={"2%"}
				width={"85%"}
				borderRadius={"5px"}
				bg="#f8f9ff"
				color="black"
				marginLeft={"5%"}
				marginRight={"5%"}
			>
				<Text marginLeft={"5%"} fontWeight={"bold"} marginTop={"2%"}>
					१३. तपाईंको परिवारका १ वर्ष मुनिकाको मासिक र १ वर्ष भन्दा माथि ५ वर्ष
					सम्मका बालबालिकाहरुको त्रैमासिक रुपमा तौल लिने गरिएको छ ?
				</Text>
				<RadioGroup onChange={setClinic} value={clinic} marginBottom={"5%"}>
					<Stack marginLeft={"5%"} marginTop={"1%"} direction="row">
						<Radio value="1">छ</Radio>
						<Radio value="2">छैन</Radio>
					</Stack>
				</RadioGroup>
			</Box>
			<Box
				marginTop={"2%"}
				width={"85%"}
				borderRadius={"5px"}
				bg="#f8f9ff"
				color="black"
				marginLeft={"5%"}
				marginRight={"5%"}
			>
				<Text marginLeft={"5%"} fontWeight={"bold"} marginTop={"2%"}>
					१४. आफ्नो बच्चाको जन्मदर्ता गराउनु भएको छ कि छैन?
				</Text>
				<RadioGroup onChange={setClinic} value={clinic} marginBottom={"5%"}>
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
				borderRadius={"5px"}
				color="black"
				marginLeft={"5%"}
				marginRight={"5%"}
			>
				<Text marginLeft={"5%"} fontWeight={"bold"} marginTop={"2%"}>
					१५. गएको ३ वर्षभित्र तपाईंको परिवारमा कसैको विवाह भएको छ कि छैन?
				</Text>
				<RadioGroup onChange={setClinic} value={clinic} marginBottom={"5%"}>
					<Stack marginLeft={"5%"} marginTop={"1%"} direction="row">
						<Radio value="1">छ</Radio>
						<Radio value="2">छैन</Radio>
					</Stack>
				</RadioGroup>
				<Text marginLeft={"5%"} fontWeight={"bold"} marginTop={"2%"}>
					छ भने
				</Text>
				<Table>
					<Table borderColor={"black"} marginBottom={"5%"}>
						<Thead>
							<Tr>
								<Th>उमेर</Th>
							</Tr>
						</Thead>
						<Tbody>
							<Tr>
								<Td>
									<Input variant="outline" width={"60%"} />
								</Td>
							</Tr>
						</Tbody>
					</Table>
				</Table>
			</Box>
			<Box
				marginTop={"2%"}
				width={"85%"}
				borderRadius={"5px"}
				bg="#f8f9ff"
				color="black"
				marginLeft={"5%"}
				marginRight={"5%"}
			>
				<Text marginLeft={"5%"} fontWeight={"bold"} marginTop={"2%"}>
					१६. तपाईको परिवारका १८ वर्षसम्मका बालबालिका अरुको घरमा काम गर्न बसेका
					छन्?
				</Text>
				<RadioGroup onChange={setClinic} value={clinic}>
					<Stack marginLeft={"5%"} marginTop={"1%"} direction="row">
						<Radio value="1">छ</Radio>
						<Radio value="2">छैन</Radio>
					</Stack>
				</RadioGroup>
				<Text marginLeft={"5%"} fontWeight={"bold"} marginTop={"2%"}>
					यदि छन् भने के मा काम गर्छन?
				</Text>
				<RadioGroup onChange={setClinic} value={clinic} marginBottom={"5%"}>
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
				borderRadius={"5px"}
				bg="#f8f9ff"
				color="black"
				marginLeft={"5%"}
				marginRight={"5%"}
			>
				<Text marginLeft={"5%"} fontWeight={"bold"} marginTop={"2%"}>
					१७. तपाईको परिवारका बालबालिकाहरुले कस्ता प्रकारका बालश्रम गरिरहेका छन्
					?
				</Text>

				<RadioGroup onChange={setData} value={data} marginBottom={"5%"}>
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
				borderRadius={"5px"}
				bg="#f8f9ff"
				color="black"
				marginLeft={"5%"}
				marginRight={"5%"}
			>
				<Text marginLeft={"5%"} fontWeight={"bold"} marginTop={"2%"}>
					१८. बालबालिकाहरु घरबाहिर काम गरेको भए गरेको ठाउँमा के कस्तो समस्या
					भोग्ने गरेका छन्?
				</Text>

				<RadioGroup onChange={setData} value={data} marginBottom={"5%"}>
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
				borderRadius={"5px"}
				bg="#f8f9ff"
				color="black"
				marginLeft={"5%"}
				marginRight={"5%"}
			>
				<Text marginLeft={"5%"} fontWeight={"bold"} marginTop={"2%"}>
					१९. तपाईंको परिवारमा बालबालिकाले कमजोरी गरेमा के गर्नु हुन्छ ?
				</Text>

				<RadioGroup onChange={setData} value={data} marginBottom={"5%"}>
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
				borderRadius={"5px"}
				bg="#f8f9ff"
				color="black"
				marginLeft={"5%"}
				marginRight={"5%"}
			>
				<Text marginLeft={"5%"} fontWeight={"bold"} marginTop={"2%"}>
					२०. तपाईंको घरमा छोरा र छोरीमा कुनै फरक व्यवहार गर्ने गर्नुभएको छ ?
				</Text>
				<RadioGroup onChange={setClinic} value={clinic}>
					<Stack marginLeft={"5%"} marginTop={"1%"} direction="row">
						<Radio value="1">छ</Radio>
						<Radio value="2">छैन</Radio>
					</Stack>
				</RadioGroup>
				<Text marginLeft={"5%"} fontWeight={"bold"} marginTop={"2%"}>
					यदि छ भने,
				</Text>
				<RadioGroup onChange={setClinic} value={clinic} marginBottom={"5%"}>
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
				borderRadius={"5px"}
				bg="#f8f9ff"
				color="black"
				marginLeft={"5%"}
				marginRight={"5%"}
			>
				<Text marginLeft={"5%"} fontWeight={"bold"} marginTop={"2%"}>
					२१. एक वर्षभित्र तपाईंको परिवारमा महिला तथा बालबालिका उपर हिंसा तथा
					सामाजिक कुरिती सम्बन्धी निम्न कुनै घटना घटेका छन+छैनन् ?
				</Text>

				<RadioGroup onChange={setData} value={data} marginBottom={"5%"}>
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
				borderRadius={"5px"}
				bg="#f8f9ff"
				color="black"
				marginLeft={"5%"}
				marginRight={"5%"}
			>
				<Text marginLeft={"5%"} fontWeight={"bold"} marginTop={"2%"}>
					२२. तपाईंको परिवारका कुनै बालबालिका बालगृह वा कुनै संस्थामा बसेका छन्
					?
				</Text>
				<RadioGroup onChange={setClinic} value={clinic}>
					<Stack marginLeft={"5%"} marginTop={"1%"} direction="row">
						<Radio value="1">छ</Radio>
						<Radio value="2">छैन</Radio>
					</Stack>
				</RadioGroup>
				<Text marginLeft={"5%"} fontWeight={"bold"} marginTop={"2%"}>
					यदि छन् भन कहा?
				</Text>
				<Input
					marginLeft={"5%"}
					marginBottom={"5%"}
					variant="outline"
					width={"90%"}
				/>
			</Box>
			<Box
				marginTop={"2%"}
				width={"85%"}
				borderRadius={"5px"}
				bg="#f8f9ff"
				color="black"
				marginLeft={"5%"}
				marginRight={"5%"}
			>
				<Text marginLeft={"5%"} fontWeight={"bold"} marginTop={"2%"}>
					२३. तपाईंलाई बाल अधिकारको बारेमा जानकारी छ ?
				</Text>
				<RadioGroup onChange={setClinic} value={clinic} marginBottom={"5%"}>
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
				borderRadius={"5px"}
				bg="#f8f9ff"
				color="black"
				marginLeft={"5%"}
				marginRight={"5%"}
			>
				<Text marginLeft={"5%"} fontWeight={"bold"} marginTop={"2%"}>
					२४. तपाईंको परिवारका कुनै बालबालिकामा लागू पदार्थ दुव्र्यसनको लत रहे छ
					कि छैन ?
				</Text>
				<RadioGroup onChange={setClinic} value={clinic} marginBottom={"5%"}>
					<Stack marginLeft={"5%"} marginTop={"1%"} direction="row">
						<Radio value="1">छ</Radio>
						<Radio value="2">छैन</Radio>
					</Stack>
				</RadioGroup>
				<Text marginLeft={"5%"} fontWeight={"bold"} marginTop={"2%"}>
					छन् भने?
				</Text>
				<RadioGroup onChange={setClinic} value={clinic} marginBottom={"5%"}>
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
				borderRadius={"5px"}
				bg="#f8f9ff"
				color="black"
				marginLeft={"5%"}
				marginRight={"5%"}
			>
				<Text marginLeft={"5%"} fontWeight={"bold"} marginTop={"2%"}>
					२५. बालबालिका बस्ने, पढ्ने कोठा अलग्गै छ ?
				</Text>
				<RadioGroup onChange={setClinic} value={clinic} marginBottom={"5%"}>
					<Stack marginLeft={"5%"} marginTop={"1%"} direction="row">
						<Radio value="1">छ</Radio>
						<Radio value="2">छैन</Radio>
					</Stack>
				</RadioGroup>
			</Box>
			<Box
				marginTop={"2%"}
				width={"85%"}
				borderRadius={"5px"}
				bg="#f8f9ff"
				color="black"
				marginLeft={"5%"}
				marginRight={"5%"}
			>
				<Text marginLeft={"5%"} fontWeight={"bold"} marginTop={"2%"}>
					२६. मानिस बस्ने घर (मूल घर) र गाईवस्तुहरु बाँध्ने गोठ अलग्गै छ ?
				</Text>
				<RadioGroup onChange={setClinic} value={clinic} marginBottom={"5%"}>
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
				borderRadius={"5px"}
				bg="#f8f9ff"
				color="black"
				marginLeft={"5%"}
				marginRight={"5%"}
			>
				<Text marginLeft={"5%"} fontWeight={"bold"} marginTop={"2%"}>
					२७. तपाईको परिवारमा बाल विकास केन्द्र वा पूर्व प्रा.वि. तहमा जाने ३
					देखि ४ वर्षसम्मका बालबालिका संख्या कति छ ?
				</Text>
				<Input
					marginLeft={"5%"}
					marginBottom={"5%"}
					variant="outline"
					width={"90%"}
				/>
			</Box>
			<Box
				marginTop={"2%"}
				width={"85%"}
				borderRadius={"5px"}
				bg="#f8f9ff"
				color="black"
				marginLeft={"5%"}
				marginRight={"5%"}
			>
				<Text marginLeft={"5%"} fontWeight={"bold"} marginY={"2%"}>
					२८. परिवारको शैक्षिक स्थिति
				</Text>
				<Text marginLeft={"5%"} fontWeight={"bold"} marginY={"2%"}>
					२८.१ आधारभुत तह पढ्नेको संख्या:
				</Text>
				<Input marginLeft={"5%"} variant="outline" width={"60%"} />

				<Text marginLeft={"5%"} fontWeight={"bold"} marginY={"2%"}>
					२८.२ कक्षा दशसम्म पढ्नेको संख्या:
				</Text>
				<Input marginLeft={"5%"} variant="outline" width={"60%"} />

				<Text marginLeft={"5%"} fontWeight={"bold"} marginY={"2%"}>
					२८.३ कक्षा १२ सम्म पढ्नेको संख्या:
				</Text>
				<Input marginLeft={"5%"} variant="outline" width={"60%"} />

				<Text marginLeft={"5%"} fontWeight={"bold"} marginY={"2%"}>
					२८.४ कक्षा १२ भन्दामाथीको संख्या:
				</Text>
				<Input marginLeft={"5%"} variant="outline" width={"60%"} />
			</Box>
			<Box
				marginTop={"2%"}
				width={"85%"}
				borderRadius={"5px"}
				bg="#f8f9ff"
				color="black"
				marginLeft={"5%"}
				marginRight={"5%"}
			>
				<Text marginLeft={"5%"} fontWeight={"bold"} marginTop={"2%"}>
					२९. विद्यालयस्तरमा अध्ययन गरिरहेका बालबालिकाको विवरण
				</Text>
				<RadioGroup onChange={setClinic} value={clinic} marginBottom={"5%"}>
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
				borderRadius={"5px"}
				bg="#f8f9ff"
				color="black"
				marginLeft={"5%"}
				marginRight={"5%"}
			>
				<Text marginLeft={"5%"} fontWeight={"bold"} marginTop={"2%"}>
					२९.१ पालिका बाहिरका विद्यालयमा अध्ययनरत संख्या
				</Text>
				<RadioGroup onChange={setClinic} value={clinic} marginBottom={"5%"}>
					<Stack marginLeft={"5%"} marginTop={"1%"} direction="column">
						<Radio value="1">१. प्रारम्भिक बालबिकास संख्या:</Radio>
						<Radio value="3"> २. आधारभुत तह संख्या:</Radio>
						<Radio value="4"> ३. कक्षा दशसम्म संख्या:</Radio>
						<Radio value="4"> ४. कक्षा १२ सम्म संख्या:</Radio>
					</Stack>
				</RadioGroup>
			</Box>
			<Box
				marginY={"2%"}
				width={"85%"}
				borderRadius={"5px"}
				bg="#f8f9ff"
				color="black"
				marginLeft={"5%"}
				marginRight={"5%"}
			>
				<Text marginLeft={"5%"} fontWeight={"bold"} marginY={"2%"}>
					३०.१ घरबाट विद्यालय जान लाग्ने समय (कक्षा पाँचसम्म)
				</Text>
				<Input marginLeft={"5%"} variant="outline" width={"60%"} />

				<Text marginLeft={"5%"} fontWeight={"bold"} marginY={"2%"}>
					३०.२ घरबाट विद्यालय जान लाग्ने समय (आधारभतु तह)
				</Text>
				<Input marginLeft={"5%"} variant="outline" width={"60%"} />

				<Text marginLeft={"5%"} fontWeight={"bold"} marginY={"2%"}>
					३०.३ घरबाट विद्यालय जान लाग्ने समय (कक्षा दिसम्म)
				</Text>
				<Input marginLeft={"5%"} variant="outline" width={"60%"} />

				<Text marginLeft={"5%"} fontWeight={"bold"} marginY={"2%"}>
					३०.४ घरबाट विद्यालय जान लाग्ने समय (माध्यालमक तह)
				</Text>
				<Input marginLeft={"5%"} variant="outline" width={"60%"} />
			</Box>
			<Box
				marginTop={"2%"}
				width={"85%"}
				borderRadius={"5px"}
				bg="#f8f9ff"
				color="black"
				marginLeft={"5%"}
				marginRight={"5%"}
			>
				<Text marginLeft={"5%"} fontWeight={"bold"} marginTop={"2%"}>
					३१. बीचैमा विद्यालय जान छोडेका ६ – १५ वर्ष उमेर समूहका बालबालिकाहरुका
					संख्या र कारण
				</Text>
				<div>
					<Table variant="simple" marginBottom={"5%"}>
						<Thead>
							<Tr>
								<Th>बालक/बालिका</Th>
								<Th>विद्यालय छोड्नुको कारण</Th>
							</Tr>
						</Thead>
						<Tbody>
							<Tr>
								<Td>
									<Radio value="1">बालक</Radio>
								</Td>
								<Td>
									<Input variant="outline" />
								</Td>
							</Tr>
							<Tr>
								<Td>
									<Radio value="1">बालिका</Radio>
								</Td>
								<Td>
									<Input variant="outline" />
								</Td>
							</Tr>
							<Tr>
								<Td>
									<Text marginLeft={"2%"}>जम्मा</Text>
								</Td>
								<Td>
									<Input variant="outline" />
								</Td>
							</Tr>
						</Tbody>
					</Table>
				</div>
			</Box>
			<Box
				marginTop={"2%"}
				width={"85%"}
				borderRadius={"5px"}
				bg="#f8f9ff"
				color="black"
				marginLeft={"5%"}
				marginRight={"5%"}
			>
				<Text marginLeft={"5%"} fontWeight={"bold"} marginTop={"2%"}>
					३२. परिवारमा बालबालिकासँग सम्बन्धित कुनै विषयमा निर्णय गर्दा उनीहरुलाई
					पनि सहभागी गराउने गर्नु भएको छ ?
				</Text>
				<RadioGroup onChange={setClinic} value={clinic} marginBottom={"5%"}>
					<Stack marginLeft={"5%"} marginTop={"1%"} direction="row">
						<Radio value="1">क. गराउने गरेको छ</Radio>
						<Radio value="2">ख. गराउने गरेको छैन</Radio>
					</Stack>
				</RadioGroup>
			</Box>
			<Box
				marginTop={"2%"}
				width={"85%"}
				borderRadius={"5px"}
				bg="#f8f9ff"
				color="black"
				marginLeft={"5%"}
				marginRight={"5%"}
			>
				<Text marginLeft={"5%"} fontWeight={"bold"} marginTop={"2%"}>
					३३. तपाईंको परिवारका बालबालिकाहरु बाल क्लव÷संगठन आदिमा आबद्धता रहेका
					छन् ? छन भने क्लबको नाम उल्लेख गर्नुहोस।
				</Text>
				<Input
					marginLeft={"5%"}
					marginBottom={"5%"}
					variant="outline"
					width={"90%"}
				/>
			</Box>
			<Box
				marginTop={"2%"}
				width={"85%"}
				borderRadius={"5px"}
				bg="#f8f9ff"
				color="black"
				marginLeft={"5%"}
				marginRight={"5%"}
			>
				<Text marginLeft={"5%"} fontWeight={"bold"} marginTop={"2%"}>
					३४. तपाईका घरका १८ वर्षभन्दा कम उमेरका कतिजना बालबालिका देहायको
					निकायमा प्रतिनिधि वा सदस्य रहेका छन् ? यदी छन भने कुन मा?
				</Text>
				<RadioGroup onChange={setClinic} value={clinic} marginBottom={"5%"}>
					<Stack marginLeft={"5%"} marginTop={"1%"} direction="column">
						<Radio value="1">
							क. स्थानिय तह/योजना तर्जुमा वा कार्यान्वयन समिति
						</Radio>
						<Radio value="3">ख. वडा नागरिक मञ्च</Radio>
						<Radio value="4">
							{" "}
							ग. विद्यालय/स्वास्थ्य संस्था व्यवस्थापन समिति
						</Radio>
						<Radio value="5"> घ. बाल संरक्षण समिति</Radio>
						<Radio value="5">
							{" "}
							ङ. बाल समुह वा बाल क्लब, बालमैत्री स्थानिय शासन समिति वा बाल संजाल
						</Radio>
					</Stack>
				</RadioGroup>
			</Box>
			<Box
				marginTop={"2%"}
				width={"85%"}
				borderRadius={"5px"}
				bg="#f8f9ff"
				color="black"
				marginLeft={"5%"}
				marginRight={"5%"}
			>
				<Text marginLeft={"5%"} fontWeight={"bold"} marginTop={"2%"}>
					३५. तपाईको परिवारका कुनै सदस्य स्थानीय कुनै संघसंस्था वा समूहमा आवद्ध
					हुनुहुन्छ ?
				</Text>
				<RadioGroup onChange={setClinic} value={clinic} marginBottom={"5%"}>
					<Stack marginLeft={"5%"} marginTop={"1%"} direction="column">
						<Radio value="1">क. सामुदायिक संस्था</Radio>
						<Radio value="3">ख. कृषक समूह</Radio>
						<Radio value="4"> ग. सामुदायिक वन उपभोक्ता समूह</Radio>
						<Radio value="5"> घ. सहकारी संस्था</Radio>
						<Radio value="5"> ङ. नागरिक सचेतना केन्द्र</Radio>
						<Radio value="5"> च. परम्परागत समूह</Radio>
						<Radio value="5"> छ. अन्य (नागरिक मञ्च, विभिन्न समिति...)</Radio>
						<Radio value="5"> ज. प्यारालिगल कमिटि</Radio>
						<Radio value="5"> झ. कुनैमा पनि नरहेको</Radio>
					</Stack>
				</RadioGroup>
			</Box>
			<Box
				marginTop={"2%"}
				width={"85%"}
				borderRadius={"5px"}
				bg="#f8f9ff"
				color="black"
				marginLeft={"5%"}
				marginRight={"5%"}
			>
				<Text marginLeft={"5%"} fontWeight={"bold"} marginTop={"2%"}>
					३६. तपाइको परिवारमा बाल संरक्षण, बालअधिकार, बालमैत्रि र बालविकास
					सम्बन्धित तालिम लिनु भएको छ?
				</Text>
				<RadioGroup onChange={setClinic} value={clinic} marginBottom={"5%"}>
					<Stack marginLeft={"5%"} marginTop={"1%"} direction="row">
						<Radio value="1">छ</Radio>
						<Radio value="2">छैन</Radio>
					</Stack>
				</RadioGroup>
			</Box>
			<Box
				marginTop={"2%"}
				width={"85%"}
				borderRadius={"5px"}
				bg="#f8f9ff"
				color="black"
				marginLeft={"5%"}
				marginRight={"5%"}
			>
				<Text marginLeft={"5%"} fontWeight={"bold"} marginTop={"2%"}>
					३७. परिवारको मुख्य पेशा (एकमा मात्र चिन्ह लगाउने)
				</Text>
				<RadioGroup onChange={setClinic} value={clinic} marginBottom={"5%"}>
					<Stack marginLeft={"5%"} marginTop={"1%"} direction="column">
						<Radio value="1">क. कृषि +पशुपालन+फलफूल​ खेती</Radio>
						<Radio value="2">ख. व्यापार व्यवसाय</Radio>
						<Radio value="2">ग. सेवा+नोकरी</Radio>
						<Radio value="2">घ. ज्याला+मजदुरी</Radio>
						<Radio value="2">ङ. विप्रेषण (विदेशबाट पठाएको रकम)</Radio>
						<Radio value="2">च. अन्य</Radio>
					</Stack>
				</RadioGroup>
			</Box>
			<Box
				marginTop={"2%"}
				width={"85%"}
				borderRadius={"5px"}
				bg="#f8f9ff"
				color="black"
				marginLeft={"5%"}
				marginRight={"5%"}
				paddingBottom={"2%"}
			>
				<Text marginLeft={"5%"} fontWeight={"bold"} marginY={"2%"}>
					३८.१ आजभन्दा पाँच वर्ष पहिले तपाईंको परिवारको बसोवास कहाँ थियो ?
				</Text>
				<Input marginLeft={"5%"} variant="outline" width={"60%"} />
				<Text marginLeft={"5%"} fontWeight={"bold"} marginY={"2%"}>
					३८.२ यसै स्थानमा अन्यत्र स्थानबाट आएको भए यहाँ किन आउनु भएको ?
				</Text>
				<Input marginLeft={"5%"} variant="outline" width={"60%"} />
			</Box>
			<Box
				marginTop={"2%"}
				width={"85%"}
				borderRadius={"5px"}
				bg="#f8f9ff"
				color="black"
				marginLeft={"5%"}
				marginRight={"5%"}
			>
				<Text marginLeft={"5%"} fontWeight={"bold"} marginTop={"2%"}>
					३९. घरको अवस्था : (एकभन्दा बढी घर भएमा मूल घरको विवरणका आधारमा चिन्ह
					लगाउने)
				</Text>

				<RadioGroup onChange={setClinic} value={clinic} marginBottom={"5%"}>
					<Stack marginLeft={"5%"} marginTop={"1%"} direction="column">
						<Radio value="1">क. खर वा फुसको छानो भएको</Radio>
						<Radio value="2">ख. टायल, झिँगटी वा स्लेटको छानो भएको</Radio>
						<Radio value="2">ग. जस्ता पाताको छानो भएको</Radio>
						<Radio value="2">घ. घर ढलान भएको</Radio>
					</Stack>
				</RadioGroup>
			</Box>
			<Box
				marginTop={"2%"}
				width={"85%"}
				borderRadius={"5px"}
				bg="#f8f9ff"
				color="black"
				marginLeft={"5%"}
				marginRight={"5%"}
			>
				<Text marginLeft={"5%"} fontWeight={"bold"} marginTop={"2%"}>
					४०. तपाईंको घरमा खाना पकाउन प्रयोग हुने प्रमुख इन्धन कुन हो ?
				</Text>

				<RadioGroup onChange={setClinic} value={clinic} marginBottom={"5%"}>
					<Stack marginLeft={"5%"} marginTop={"1%"} direction="column">
						<Radio value="1">क. दाउरा</Radio>
						<Radio value="2">ख. गोवरग्याँस</Radio>
						<Radio value="2">ग. एल.पि. ग्याँस</Radio>
						<Radio value="2">घ. विद्युत</Radio>
						<Radio value="2">ङ. अन्य</Radio>
					</Stack>
				</RadioGroup>
			</Box>
			<Box
				marginTop={"2%"}
				width={"85%"}
				borderRadius={"5px"}
				bg="#f8f9ff"
				color="black"
				marginLeft={"5%"}
				marginRight={"5%"}
			>
				<Text marginLeft={"5%"} fontWeight={"bold"} marginTop={"2%"}>
					४१. तपार्इंको घरमा संचारका साधनहरु के के रहेका छन् ? (वहु उत्तर) :
				</Text>

				<RadioGroup marginBottom={"5%"}>
					<Stack marginLeft={"5%"} marginTop={"1%"} direction="column">
						<Radio>क. रेडियो</Radio>
						<Radio>ख. टि.भि.</Radio>
						<Radio>ग. टेलिफोन</Radio>
						<Radio>घ. मोबाइल</Radio>
						<Radio>ङ. इमेल+इन्टरनेट</Radio>
						<Radio>च. नियमित आउने पत्रपत्रिका</Radio>
						<Radio>छ. अन्य</Radio>
					</Stack>
				</RadioGroup>
			</Box>
			<Box
				marginTop={"2%"}
				width={"85%"}
				borderRadius={"5px"}
				bg="#f8f9ff"
				color="black"
				marginLeft={"5%"}
				marginRight={"5%"}
			>
				<Text marginLeft={"5%"} fontWeight={"bold"} marginTop={"2%"}>
					४२. तपाईंको परिवारका सदस्यहरु कुन कुन पेशा (रोजगारी) मा संलग्न
					हुनुहुन्छ ?
				</Text>

				<RadioGroup marginBottom={"5%"}>
					<Stack marginLeft={"5%"} marginTop={"1%"} direction="column">
						<Radio>क. कृषि</Radio>
						<Radio>ख. व्यापार</Radio>
						<Radio>ग. जागिर</Radio>
						<Radio>घ. ज्याला मजदुरी</Radio>
						<Radio>ङ. उद्योग</Radio>
						<Radio>च. बैदेशिक रोजगार</Radio>
					</Stack>
				</RadioGroup>
			</Box>
			<Box
				marginTop={"2%"}
				width={"85%"}
				borderRadius={"5px"}
				bg="#f8f9ff"
				color="black"
				marginLeft={"5%"}
				marginRight={"5%"}
			>
				<Text marginLeft={"5%"} fontWeight={"bold"} marginY={"2%"}>
					४३.१ तपाईको परिवारमा १८ वर्षभन्दा कम उमेरका शारीरिक तथा मानसिक हिसाबले
					अपांगता भएका सदस्यहरु भएमा तलको विवरण दिनुहोस् ।(बालक)
				</Text>
				<Input marginLeft={"5%"} variant="outline" width={"60%"} />

				<Text marginLeft={"5%"} fontWeight={"bold"} marginY={"2%"}>
					४३.२ यसै स्थानमा अन्यत्र स्थानबाट आएको भए यहाँ किन आउनु भएको ?
				</Text>
				<Input marginLeft={"5%"} variant="outline" width={"60%"} />

				<div>
					<Table variant="simple" marginBottom={"5%"}>
						<Thead>
							<Tr>
								<Th>बालक/बालिका</Th>
								<Th>भिन्न क्षमताको विवरण</Th>
							</Tr>
						</Thead>
						<Tbody>
							<Tr>
								<Td>
									<Radio value="1">बालक</Radio>
								</Td>

								<Td>
									<RadioGroup>
										<Radio value="2">शारीरिक अपाङ्गता </Radio>
										<Radio marginLeft={"11%"} value="3">
											दृष्टिविहिन र न्यन दृष्टिविहिन
										</Radio>
										<Radio value="4">सुस्त श्रवण तथा बहिरा </Radio>
										<Radio marginLeft={"5.5%"} value="5">
											स्वर बोलाइसम्बन्धी अपाङ्गता
										</Radio>
										<Radio value="4">मानसिक/बौद्दिकअपाङ्गता </Radio>
										<Radio value="4">श्रवण र दृष्टिविहिन (दुवै) </Radio>
										<Radio value="4">बहु अपाङ्गता </Radio>
									</RadioGroup>
								</Td>
							</Tr>
							<Tr>
								<Td>
									<Radio value="1">बालिका</Radio>
								</Td>

								<Td>
									<RadioGroup>
										<Radio value="2">शारीरिक अपाङ्गता </Radio>
										<Radio marginLeft={"11%"} value="3">
											दृष्टिविहिन र न्यन दृष्टिविहिन
										</Radio>
										<Radio value="4">सुस्त श्रवण तथा बहिरा </Radio>
										<Radio marginLeft={"5.5%"} value="5">
											स्वर बोलाइसम्बन्धी अपाङ्गता
										</Radio>
										<Radio value="4">मानसिक/बौद्दिकअपाङ्गता </Radio>
										<Radio value="4">श्रवण र दृष्टिविहिन (दुवै) </Radio>
										<Radio value="4">बहु अपाङ्गता </Radio>
									</RadioGroup>
								</Td>
							</Tr>
						</Tbody>
					</Table>
				</div>
			</Box>
			<Box
				marginTop={"2%"}
				width={"85%"}
				borderRadius={"5px"}
				bg="#f8f9ff"
				color="black"
				marginLeft={"5%"}
				marginRight={"5%"}
			>
				<Text marginLeft={"5%"} fontWeight={"bold"} marginTop={"2%"}>
					४४. तपाईंको परिवारलाई आफ्नो उत्पादन÷आम्दानीले वर्षमा कति महिना खान
					पुग्छ ?
				</Text>

				<RadioGroup marginBottom={"5%"}>
					<Stack marginLeft={"5%"} marginTop={"1%"} direction="column">
						<Radio>क. ३ महिनाभन्दा कम खान पुग्ने</Radio>
						<Radio>ख. ३ – ६ महिना खान पुग्ने</Radio>
						<Radio>ग. ६ – ९ महिना खान पुग्ने</Radio>
						<Radio>घ. ९ – १२ महिना खान पुग्ने</Radio>
						<Radio>ङ. वचत हुने</Radio>
					</Stack>
				</RadioGroup>
			</Box>
			<Box
				marginTop={"2%"}
				width={"85%"}
				borderRadius={"5px"}
				bg="#f8f9ff"
				color="black"
				marginLeft={"5%"}
				marginRight={"5%"}
			>
				<Text marginLeft={"5%"} fontWeight={"bold"} marginTop={"2%"}>
					४५. ऋण लिएको भए कुन उद्देश्यका लागि लिनु भएको हो ?
				</Text>

				<RadioGroup marginBottom={"5%"}>
					<Stack marginLeft={"5%"} marginTop={"1%"} direction="column">
						<Radio>क. घरायसी कार्य वा घर खर्च</Radio>
						<Radio>ख. कृषि तथा पशुपालन व्यवसाय गर्न</Radio>
						<Radio>ग. उद्योग व्यापार</Radio>
						<Radio>घ. बैदेशिक रोजगारी</Radio>
						<Radio>ङ. सामाजिक तथा धार्मिक कार्य गर्न</Radio>
						<Radio>च. शिक्षा </Radio>
						<Radio>छ. औषधि उपचार</Radio>
						<Radio>ज. विवाह, व्रतवन्ध वा यस्तै व्यावहारिक खर्च</Radio>
						<Radio>झ. गोवर ग्याँस, सोलार, विजुली आदि राख्न</Radio>
						<Radio>झ. अन्य</Radio>
					</Stack>
				</RadioGroup>
			</Box>
			<Box
				marginTop={"2%"}
				width={"85%"}
				borderRadius={"5px"}
				bg="#f8f9ff"
				color="black"
				marginLeft={"5%"}
				marginRight={"5%"}
			>
				<Text marginLeft={"5%"} fontWeight={"bold"} marginY={"2%"}>
					४६.१ तपाईंको परिवारमा निम्न कार्यहरु प्रायः कसले गर्दछ ?(घर
					व्यवहारसम्बन्धी विषयमा निर्णय)
				</Text>
				<Input marginLeft={"5%"} variant="outline" width={"60%"} />
				<Text marginLeft={"5%"} fontWeight={"bold"} marginY={"2%"}>
					४६.२ तपाईंको परिवारमा निम्न कार्यहरु प्रायः कसले गर्दछ ?(घरायसी काममा
					संलग्न)
				</Text>
				<Input marginLeft={"5%"} variant="outline" width={"60%"} />
				<Text marginLeft={"5%"} fontWeight={"bold"} marginY={"2%"}>
					४६.३ तपाईंको परिवारमा निम्न कार्यहरु प्रायः कसले गर्दछ ?(बैंकमा खाता
					संचालन)
				</Text>
				<Input marginLeft={"5%"} variant="outline" width={"60%"} />
				<Text marginLeft={"5%"} fontWeight={"bold"} marginY={"2%"}>
					४६.४ तपाईंको परिवारमा निम्न कार्यहरु प्रायः कसले गर्दछ ?(घरायसी काममा)
				</Text>
				<Input marginLeft={"5%"} variant="outline" width={"60%"} />
			</Box>
			<Box
				marginTop={"2%"}
				width={"85%"}
				borderRadius={"5px"}
				bg="#f8f9ff"
				color="black"
				marginLeft={"5%"}
				marginRight={"5%"}
			>
				<Text marginLeft={"5%"} fontWeight={"bold"} marginTop={"2%"}>
					४७. विगत ३ वर्ष भित्रमा तपाईंको परिवारमा कति मानिसहरु प्रकोपवाट
					प्रभावित भएका छन् कि छैनन?
				</Text>
				<RadioGroup onChange={setClinic} value={clinic}>
					<Stack marginLeft={"5%"} marginTop={"1%"} direction="row">
						<Radio value="1">छ</Radio>
						<Radio value="2">छैन</Radio>
					</Stack>
				</RadioGroup>
				<Text marginLeft={"5%"} fontWeight={"bold"} marginTop={"2%"}>
					यदी छ भने के बाट?
				</Text>
				<RadioGroup onChange={setClinic} value={clinic} marginBottom={"5%"}>
					<Stack marginLeft={"5%"} marginTop={"1%"} direction="column">
						<Radio value="1">बाढी </Radio>
						<Radio value="2">पहिरो</Radio>
						<Radio value="3">असिना</Radio>
						<Radio value="4">हुरीबतास</Radio>
						<Radio value="5">आगलागी</Radio>
						<Radio value="5">भूकम्प</Radio>
						<Radio value="5">खडेरी</Radio>
						<Radio value="5">अतिबृष्टी</Radio>
						<Radio value="5">महामारी</Radio>
						<Radio value="5">सलह किरा आदी</Radio>
						<Radio value="5">अन्य</Radio>
					</Stack>
				</RadioGroup>
			</Box>
			<Box
				marginTop={"2%"}
				width={"85%"}
				borderRadius={"5px"}
				bg="#f8f9ff"
				color="black"
				marginLeft={"5%"}
				marginRight={"5%"}
			>
				<Text marginLeft={"5%"} fontWeight={"bold"} marginTop={"2%"}>
					४८. तपाइको बालबालिका पढ्ने विद्यालय कुन प्रकोपको जोखिममा रहेको छ?
				</Text>
				<RadioGroup onChange={setClinic} value={clinic} marginBottom={"5%"}>
					<Stack marginLeft={"5%"} marginTop={"1%"} direction="column">
						<Radio value="1">क. बाढी</Radio>
						<Radio value="2">ख. पहिरो</Radio>
						<Radio value="2">ग. भुकम्प</Radio>
						<Radio value="2">घ. आगलागी</Radio>
						<Radio value="2">ङ. अन्य</Radio>
					</Stack>
				</RadioGroup>
			</Box>
			<Box
				marginTop={"2%"}
				width={"85%"}
				bg="#f8f9ff"
				borderRadius={"5px"}
				color="black"
				marginLeft={"5%"}
				marginRight={"5%"}
			>
				<Text marginLeft={"5%"} fontWeight={"bold"} marginTop={"2%"}>
					४९. विद्यालय जाँदा आउँदा बालबालिकालाई के को जोखिम रहेको छ?
				</Text>
				<RadioGroup onChange={setClinic} value={clinic} marginBottom={"5%"}>
					<Stack marginLeft={"5%"} marginTop={"1%"} direction="column">
						<Radio value="1">क. बाढी</Radio>
						<Radio value="2">ख. पहिरो</Radio>
						<Radio value="2">ग. वन्यजन्तु</Radio>
						<Radio value="2">घ. भिरबाट लढ्ने</Radio>
						<Radio value="2">ङ. अन्य</Radio>
					</Stack>
				</RadioGroup>
			</Box>
			<Box
				marginTop={"2%"}
				width={"85%"}
				bg="#f8f9ff"
				borderRadius={"5px"}
				color="black"
				marginLeft={"5%"}
				marginRight={"5%"}
			>
				<Text marginLeft={"5%"} fontWeight={"bold"} marginTop={"2%"}>
					५०. विद्यालय जाँदा आउँदा बालबालिकालाई के को जोखिम रहेको छ ?
				</Text>
				<RadioGroup onChange={setClinic} value={clinic} marginBottom={"5%"}>
					<Stack marginLeft={"5%"} marginTop={"1%"} direction="column">
						<Radio value="1">छ</Radio>
						<Radio value="2">छैन</Radio>
					</Stack>
				</RadioGroup>
				<Text marginLeft={"5%"} fontWeight={"semibold"} marginTop={"2%"}>
					यदी छ भने
				</Text>
				<RadioGroup onChange={setClinic} value={clinic} marginBottom={"5%"}>
					<Stack marginLeft={"5%"} marginTop={"1%"} direction="column">
						<Radio value="1">बुबा गुमाएको</Radio>
						<Radio value="2">आमा गुमाएको</Radio>
						<Radio value="2">दुवै गुमाएको</Radio>
					</Stack>
				</RadioGroup>
			</Box>
		</Container>
	);
}
