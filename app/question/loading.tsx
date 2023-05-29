"use client";
import { Box, Flex } from "@chakra-ui/react";
import Image from "next/image";

export default function Loading() {
	return (
		<Flex h={"full"} w={"full"} alignItems={"center"} justifyContent={"center"}>
			<Image src={"/logo.png"} height={100} width={100} alt="Logo" />
		</Flex>
	);
}
