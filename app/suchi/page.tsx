"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { ViewIcon, DeleteIcon, EditIcon, Search2Icon } from "@chakra-ui/icons";
import {
	Table,
	Thead,
	Tbody,
	Tfoot,
	Tr,
	Th,
	Td,
	TableCaption,
	Box,
	Text,
	Stack,
	TableContainer,
	Button,
	HStack,
} from "@chakra-ui/react";
import SearchBar from "@/components/SearchBar";
import Navbar from "@/components/Navbar";

const data = [
	{
		id: "१",
		name: "राम​",
		ward: "१",
		address: "पेप्सिकोला",
		date: "२०८०।०३।२०",
	},
	{
		id: "१",
		name: "राम​",
		ward: "२",
		address: "पेप्सिकोला",
		date: "२०८०।०३।२०",
	},
	{
		id: "१",
		name: "राम​",
		ward: "९",
		address: "पेप्सिकोला",
		date: "२०८०।०३।२०",
	},
	{
		id: "१",
		name: "राम​",
		ward: "६",
		address: "पेप्सिकोला",
		date: "२०८०।०३।२०",
	},
	{
		id: "१",
		name: "राम​",
		ward: "७",
		address: "पेप्सिकोला",
		date: "२०८०।०३।२०",
	},
	{
		id: "१",
		name: "राम​",
		ward: "४",
		address: "पेप्सिकोला",
		date: "२०८०।०३।२०",
	},
	{
		id: "१",
		name: "राम​",
		ward: "८",
		address: "पेप्सिकोला",
		date: "२०८०।०३।२०",
	},
	{
		id: "१",
		name: "राम​",
		ward: "७",
		address: "पेप्सिकोला",
		date: "२०८०।०३।२०",
	},
	{
		id: "१",
		name: "राम​",
		ward: "९",
		address: "पेप्सिकोला",
		date: "२०८०।०३।२०",
	},
];

export default function Suchi() {
	const router = useRouter();
	return (
		<div>
			<TableContainer marginLeft={"2%"} marginTop={"2%"} marginRight={"2%"}>
				<HStack>
					<Box>
						<Text textAlign={"left"} fontSize={"24px"} fontWeight={"semibold"}>
							सूचि
						</Text>
					</Box>
					<Box width={"100%"}>
						<Stack marginLeft={"70%"}>
							<SearchBar />
						</Stack>
					</Box>
				</HStack>
				<Table marginTop={"2%"} backgroundColor={"white"}>
					<Thead>
						<Tr height={"50px"} bg="#081A51">
							<Th fontWeight={"semibold"} fontSize={"15px"} color="white">
								परिवार क्र.सं.
							</Th>
							<Th fontWeight={"semibold"} fontSize={"15px"} color="white">
								प्रयोगकर्ताको नाम​
							</Th>
							<Th fontWeight={"semibold"} fontSize={"15px"} color="white">
								वडा नं.
							</Th>
							<Th fontWeight={"semibold"} fontSize={"15px"} color="white">
								बस्तिको नाम​​
							</Th>
							<Th fontWeight={"semibold"} fontSize={"15px"} color="white">
								पेश मिती​
							</Th>
							<Th fontWeight={"semibold"} fontSize={"15px"} color="white">
								कार्य​{" "}
							</Th>
						</Tr>
					</Thead>
					<Tbody>
						{data.map((i) => (
							<Tr key={i.id}>
								<Td fontSize={"14px"}>{i.id}</Td>
								<Td fontSize={"14px"}>{i.name}</Td>
								<Td fontSize={"14px"}>{i.ward}</Td>
								<Td fontSize={"14px"}>{i.address}</Td>
								<Td fontSize={"14px"}>{i.date}</Td>
								<Td>
									{/* <ViewIcon sx={{ size: "25px" }} /> */}
									<DeleteIcon
										sx={{
											marginLeft: "5%",
											size: "20px",
										}}
									/>
									<EditIcon
										sx={{
											marginLeft: "5%",
											size: "20px",
										}}
										onClick={() => router.push("/question")}
									/>
								</Td>
							</Tr>
						))}
					</Tbody>
				</Table>
			</TableContainer>
		</div>
	);
}
