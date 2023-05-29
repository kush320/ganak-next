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
	Center,
	Image,
	Avatar,
	FormControl,
	FormLabel,
	Flex,
} from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";
import React, { HtmlHTMLAttributes } from "react";
import { Radio, RadioGroup } from "@chakra-ui/react";
import { createUser } from "@/typings";
import toast from "react-hot-toast";
import { parseUrl } from "next/dist/shared/lib/router/utils/parse-url";
import { resolveObjectURL } from "buffer";

async function handleCreateUser(newUser, image) {
	const formData = new FormData();

	Object.keys(newUser).forEach((key) => {
		formData.append(key, newUser[key]);
	});
	formData.append("image", image);

	if (newUser.password && newUser.password !== newUser.confirmPassword) {
		toast.error("Passwords don't match");
	}

	const url = "/api/auth/register";

	const response = await fetch(url, {
		method: "POST",
		body: formData,
		credentials: "include",
	});
	if (response.ok) {
		location.href = "/login";
	}
	if (!response.ok) {
		toast.error("Invalid input, please check your information.");
	}
}

export default function Register() {
	const [show, setShow] = React.useState(false);
	const handleClick = () => setShow(!show);
	const [role, setRole] = React.useState("gadak");
	const [gender, setGender] = React.useState("male");
	const [selectedImage, setSelectedImage] = React.useState("");
	const [confirmPassword, setConfirmPassword] = React.useState("");
	const [previewImage, setPreviewImage] = React.useState(null);
	const [newUser, setNewUser] = React.useState<createUser>({
		number: "",
		password: "",
		ward: "",
		gender: gender,
		role: role,
		fullName: "",
		email: "",
	});

	function handleImage(e) {
		console.log(e.target.files);
		setSelectedImage(e.target.files[0]);
		setPreviewImage(URL.createObjectURL(e.target.files[0]));
	}

	return (
		<Box
			height="250px"
			bgColor={"#081A51"}
			borderBottomLeftRadius={"80px"}
			borderBottomRightRadius={"80px"}
			position={"absolute"}
			width={"full"}
		>
			<Card
				margin={"auto"}
				marginY={"20px"}
				width={"50%"}
				justifyContent={"center"}
				backgroundColor={"white"}
				// height={"400%"}
				borderRadius={"5px"}
				boxShadow={"2xl"}
			>
				<Box marginY={"20px"}>
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
				<Flex
					direction={"column"}
					margin={"auto"}
					justifyContent={"center"}
					width={"60%"}
				>
					<FormControl textAlign={"left"}>
						<Text fontSize={"14px"} marginY={"4px"}>
							पुरा नाम्
						</Text>
						<Input
							margin={"auto"}
							borderRadius={"10px"}
							fontSize={"14px"}
							required
							type="text"
							placeholder="पुरा नाम्"
							sx={{ height: "50px", width: "100%" }}
							value={newUser.fullName}
							onChange={(e) =>
								setNewUser((newUser) => ({
									...newUser,
									fullName: e.target.value,
								}))
							}
						/>
						<Text fontSize={"14px"} marginY={"4px"} marginTop={"3%"}>
							आफ्नो मोबाईल नम्बर हाल्नुहोस्
						</Text>
						<Input
							margin={"auto"}
							fontSize={"14px"}
							required
							borderRadius={"10px"}
							type={"number"}
							placeholder="आफ्नो मोबाईल नम्बर हाल्नुहोस्"
							sx={{ height: "50px", width: "100%" }}
							value={newUser.number}
							onChange={(e) =>
								setNewUser((newUser) => ({
									...newUser,
									number: e.target.value,
								}))
							}
						/>
						<Text fontSize={"14px"} marginY={"4px"} marginTop={"3%"}>
							वडा नं
						</Text>
						<Input
							margin={"auto"}
							fontSize={"14px"}
							required
							borderRadius={"10px"}
							type="string"
							placeholder="आफ्नो इमेल हाल्नुहोस्"
							sx={{ height: "50px", width: "100%" }}
							value={newUser.ward}
							onChange={(e) =>
								setNewUser((newUser) => ({ ...newUser, ward: e.target.value }))
							}
						/>
						<Text fontSize={"14px"} marginY={"4px"} marginTop={"3%"}>
							आफ्नो इमेल हाल्नुहोस्
						</Text>
						<Input
							margin={"auto"}
							fontSize={"14px"}
							required
							borderRadius={"10px"}
							type="email"
							placeholder="आफ्नो इमेल हाल्नुहोस्"
							sx={{ height: "50px", width: "100%" }}
							value={newUser.email}
							onChange={(e) =>
								setNewUser((newUser) => ({
									...newUser,
									email: e.target.value,
								}))
							}
						/>
						<Text fontSize={"14px"} marginY={"4px"} marginTop={"3%"}>
							पासवर्ड हाल्नुहोस्
						</Text>
						<Input
							margin={"auto"}
							borderRadius={"10px"}
							fontSize={"14px"}
							required
							type="password"
							placeholder="पासवर्ड हाल्नुहोस्"
							sx={{ height: "50px", width: "100%" }}
							value={newUser.password}
							onChange={(e) =>
								setNewUser((newUser) => ({
									...newUser,
									password: e.target.value,
								}))
							}
						/>
						<Text fontSize={"14px"} marginY={"4px"} marginTop={"3%"}>
							पासवर्ड पुस्ति गर्नुहोस्
						</Text>
						<Input
							margin={"auto"}
							fontSize={"14px"}
							required
							marginBottom={"10px"}
							borderRadius={"10px"}
							type="password"
							placeholder="पासवर्ड पुस्ति गर्नुहोस्"
							sx={{ height: "50px", width: "100%" }}
							value={confirmPassword}
							onChange={(e) => setConfirmPassword(e.target.value)}
						/>
						{previewImage && (
							<Image src={previewImage} alt="Selected profile image." />
						)}
						<FormControl
							marginY={"20px"}
							borderRadius={"10px"}
							sx={{ height: "50px", width: "55%" }}
						>
							<FormLabel fontSize={"14px"}>फोतो छानुहोस्</FormLabel>
							<Input
								fontSize={"14px"}
								required
								variant="unstyled"
								type="file"
								onChange={handleImage}
							/>
						</FormControl>

						<Text marginTop={"5%"}>भूमिका</Text>
						<RadioGroup onChange={setRole} value={role}>
							<Stack direction="row">
								<Radio fontSize={"14px"} required value={"admin"}>
									प्रसासन
								</Radio>
								<Radio fontSize={"14px"} required value={"gadak"}>
									गणक
								</Radio>
							</Stack>
						</RadioGroup>

						<Text marginTop={"5%"}>लिङ्ग</Text>
						<RadioGroup onChange={setGender} value={gender}>
							<Stack direction="row">
								<Radio fontSize={"14px"} required value={"male"}>
									पुरुष
								</Radio>
								<Radio fontSize={"14px"} required value={"female"}>
									महिला
								</Radio>
								<Radio fontSize={"14px"} required value={"others"}>
									तेस्रो लिङ्गी
								</Radio>
							</Stack>
						</RadioGroup>
						<Button
							bgColor="#2E2C72"
							position={"relative"}
							height={"50px"}
							width="100%"
							color={"white"}
							margin={"auto"}
							type="submit"
							marginY={"5%"}
							onClick={(e) => handleCreateUser(newUser, selectedImage)}
						>
							साइन अप
						</Button>
					</FormControl>
				</Flex>
			</Card>
		</Box>
	);
}
