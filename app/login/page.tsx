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

import { useState } from "react";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";

async function handleLogin(number, password) {
	const url = "/api/auth/login";

	const data = {
		number: number,
		password: password,
	};

	const response = await fetch(url, {
		method: "POST",
		body: JSON.stringify(data),
		headers: {
			"Content-type": "application/json; charset=utf-8",
		},
		credentials: "include",
	});
	if (response.ok) {
		location.href = "/suchi";
	}
	if (!response.ok) {
		toast.error("Login crediantials didn't match.");
	}
}

export default function Home() {
	const [password, setPassword] = useState("");
	const [number, setNumber] = useState("");

	const router = useRouter();

	return (
		<Flex
			width={"100%"}
			height={"100vh"}
			overflow={"hidden"}
			backgroundColor={"#f8f9ff"}
		>
			<Box
				width={"50%"}
				backgroundImage={"mountain.svg"}
				borderRightRadius={"10px"}
			>
				<Box>
					<Center>
						<Image
							alt="image"
							marginTop={"30vh"}
							w={"20%"}
							src={"logo.png"}
						></Image>
					</Center>
					<Text
						textAlign={"center"}
						color={"white"}
						fontSize={"20px"}
						marginTop={"1%"}
					>
						घरधुरि सर्वेक्षण
					</Text>
					<Text
						textAlign={"center"}
						color={"white"}
						fontSize={"20px"}
						marginTop={"0%"}
					>
						बेसीशहर​ नगरपालिका
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
						value={number}
						onChange={(e) => setNumber(e.target.value)}
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
						value={password}
						onChange={(e) => setPassword(e.target.value)}
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
						onClick={() => {
							handleLogin(number, password);
						}}
						sx={{
							marginTop: "5%",
							marginLeft: "10%",
							height: "40px",
							width: "78%",
						}}
					>
						अगादि बध्नुहोस्
					</Button>
					{/* <Text marginTop={"5%"} textAlign={"center"}>
						पासवर्ड बिर्सिनुभयो ?
					</Text> */}
				</Card>
			</Box>
		</Flex>
	);
}
