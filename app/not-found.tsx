"use client";
import { Box, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";

export default function NotFound() {
	return (
		<Flex
			direction={"column"}
			mb={4}
			h={"full"}
			w={"full"}
			alignItems={"center"}
			justifyContent={"center"}
		>
			<Image src={"/logo.png"} height={100} width={100} alt="Logo" />
			<Text display={"flex"} mt={3} fontSize={28}>
				<span style={{ color: "red", fontWeight: 600 }}>404 {""}</span> {""}{" "}
				Page not found.
			</Text>
		</Flex>
	);
}
