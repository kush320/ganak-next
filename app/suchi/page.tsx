"use client";

import React, { useEffect, useState } from "react";
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
import getRequest from "@/utils/getRequest";
import Fuse from "fuse.js";

export default function Suchi() {
	const [data, setData] = useState([]);
	const [query, setQuery] = useState("");

	useEffect(() => {
		getRequest("/api/suchi/get-suchi?ward=5").then((data) => {
			setData(data.data);
		});
	}, []);

	const options = {
		includeScore: true,
		keys: ["profile.fullName"],
	};
	const fuse = new Fuse(data, options);
	const filteredData = fuse.search(query);

	const router = useRouter();
	return (
		<TableContainer position={"relative"}>
			<HStack padding={"2%"} position={"sticky"} w={"full"} top={0}>
				<Box>
					<Text textAlign={"left"} fontSize={"24px"} fontWeight={"semibold"}>
						सूचि
					</Text>
				</Box>
				<Box width={"100%"}>
					<Stack marginLeft={"70%"}>
						<SearchBar query={query} setQuery={setQuery} />
					</Stack>
				</Box>
			</HStack>
			<Table
				marginTop={"1%"}
				marginRight={"2%"}
				marginLeft={"2%"}
				backgroundColor={"white"}
			>
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
							<Td fontSize={"14px"}>{i.fullName}</Td>
							<Td fontSize={"14px"}>{i.ward}</Td>
							<Td fontSize={"14px"}>{i.bastiName}</Td>
							<Td fontSize={"14px"}>{i.createdAt}</Td>
							<Td>
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
	);
}
