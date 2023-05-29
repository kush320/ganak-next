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
import { createUser } from "@/typings";
import toast from "react-hot-toast";

export default function Register() {
	const [show, setShow] = React.useState(false);
	const handleClick = () => setShow(!show);
	const [value, setValue] = React.useState("1");
	const [selectedImage, setSelectedImage] = React.useState(null);
	const [confirmPassword, setConfirmPassword] = React.useState("");

	const [newUser, setNewUser] = React.useState<createUser>({
		number: "",
		password: "",
		ward: "",
		gender: "",
		role: "",
		fullName: "",
		email: "",
		image: "",
	});

	// console.log(newUser.fullName);

	function handleCreateUser() {
		if (newUser.password !== confirmPassword) {
			toast.error("Passwords don't match");
		}
		const url = `/api/auth/${value === "1" ? "register-admin" : "register"}`;

		fetch(url, {
			method: "POST",
			body: JSON.stringify(newUser),
			headers: {
				"Content-type": "application/json; charset=UTF-8",
			},
		});
		console.log(newUser);
	}

	const handleImageChange = (e) => {
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
			width={"full"}
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
						<Image
							alt="image"
							marginTop={"1%"}
							w={"20%"}
							src={"logo.png"}
						></Image>
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
					required
					type="text"
					placeholder="पुरा नाम्"
					sx={{ height: "50px", width: "55%" }}
					value={newUser.fullName}
					onChange={(e) =>
						setNewUser((newUser) => ({
							...newUser,
							fullName: e.target.value,
						}))
					}
				/>
				<Text marginLeft="25%" fontSize={"14px"} marginTop={"3%"}>
					आफ्नो मोबाईल नम्बर हाल्नुहोस्
				</Text>
				<Input
					marginLeft="25%"
					marginTop={"1%"}
					fontSize={"14px"}
					required
					borderRadius={"10px"}
					type={"number"}
					placeholder="आफ्नो मोबाईल नम्बर हाल्नुहोस्"
					sx={{ height: "50px", width: "55%" }}
					value={newUser.number}
					onChange={(e) =>
						setNewUser((newUser) => ({ ...newUser, number: e.target.value }))
					}
				/>
				<Text marginLeft="25%" fontSize={"14px"} marginTop={"3%"}>
					वडा नं
				</Text>
				<Input
					marginLeft="25%"
					marginTop={"1%"}
					fontSize={"14px"}
					required
					borderRadius={"10px"}
					type="number"
					placeholder="आफ्नो इमेल हाल्नुहोस्"
					sx={{ height: "50px", width: "55%" }}
					value={newUser.ward}
					onChange={(e) =>
						setNewUser((newUser) => ({ ...newUser, ward: e.target.value }))
					}
				/>
				<Text marginLeft="25%" fontSize={"14px"} marginTop={"3%"}>
					आफ्नो इमेल हाल्नुहोस्
				</Text>
				<Input
					marginLeft="25%"
					marginTop={"1%"}
					fontSize={"14px"}
					required
					borderRadius={"10px"}
					type="email"
					placeholder="आफ्नो इमेल हाल्नुहोस्"
					sx={{ height: "50px", width: "55%" }}
					value={newUser.email}
					onChange={(e) =>
						setNewUser((newUser) => ({
							...newUser,
							email: e.target.value,
						}))
					}
				/>
				<Text marginLeft="25%" fontSize={"14px"} marginTop={"3%"}>
					पासवर्ड हाल्नुहोस्
				</Text>
				<Input
					marginLeft="25%"
					borderRadius={"10px"}
					fontSize={"14px"}
					required
					marginTop={"1%"}
					type="password"
					placeholder="पासवर्ड हाल्नुहोस्"
					sx={{ height: "50px", width: "55%" }}
					value={newUser.password}
					onChange={(e) =>
						setNewUser((newUser) => ({ ...newUser, password: e.target.value }))
					}
				/>
				<Text marginLeft="25%" fontSize={"14px"} marginTop={"3%"}>
					पासवर्ड पुस्ति गर्नुहोस्
				</Text>
				<Input
					marginLeft="25%"
					marginTop={"1%"}
					fontSize={"14px"}
					required
					borderRadius={"10px"}
					type="password"
					placeholder="पासवर्ड पुस्ति गर्नुहोस्"
					sx={{ height: "50px", width: "55%" }}
					value={confirmPassword}
					onChange={(e) => setConfirmPassword(e.target.value)}
				/>
				{/*<FormControl*/}
				{/*	marginLeft="25%"*/}
				{/*	marginTop={"2%"}*/}
				{/*	borderRadius={"10px"}*/}
				{/*	sx={{ height: "50px", width: "55%" }}*/}
				{/*>*/}
				{/*	<FormLabel fontSize={"14px"} >फोतो छानुहोस्</FormLabel>*/}
				{/*	<Input*/}
				{/*		fontSize={"14px"} required*/}
				{/*		variant="unstyled"*/}
				{/*		type="file"*/}
				{/*		onChange={handleImageChange}*/}
				{/*	/>*/}
				{/*</FormControl>*/}
				<RadioGroup onChange={setValue} value={value}>
					<Stack direction="row" marginLeft="25%" marginTop={"5%"}>
						<Radio fontSize={"14px"} required value={"1"}>
							प्रसासन
						</Radio>
						<Radio fontSize={"14px"} required value={"2"}>
							गणक
						</Radio>
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
					onClick={() => handleCreateUser()}
				>
					साइन अप
				</Button>
				<Grid
					marginBottom={"5%"}
					templateColumns="repeat(2, 1fr)"
					marginTop={"2%"}
				>
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
