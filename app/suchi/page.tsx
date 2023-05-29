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
import axios from "axios";

export default function Suchi() {
	const [data, setData] = useState([]);
	const [query, setQuery] = useState("");

	useEffect(() => {
		getRequest("/api/suchi/get-suchi").then((data) => {
			setData(data.data);
		});
	}, []);

	const options = {
		includeScore: true,
		keys: ["id"],
	};
	const fuse = new Fuse(data, options);
	const filteredData = fuse.search(query);

	const router = useRouter();

	const TableContent = (data) => {
		return (
			<Tr key={data.id}>
				<Td fontSize={"14px"}>{data.id}</Td>
				<Td fontSize={"14px"}>{data.fullName}</Td>
				<Td fontSize={"14px"}>{data.ward}</Td>
				<Td fontSize={"14px"}>{data.bastiName}</Td>
				<Td fontSize={"14px"}>
					{data.createdAt.year}-{data.createdAt.month + 1}-{data.createdAt.date}
				</Td>
				<Td display={"flex"} gap={4}>
					<DeleteIcon
						color={"red.400"}
						cursor={"pointer"}
						onClick={() =>
							axios.delete(`/api/suchi/delete-suchi?suchiId=${data.suchiId}`)
						}
						sx={{
							marginLeft: "5%",
							size: "20px",
						}}
					/>
					<EditIcon
						cursor={"pointer"}
						sx={{
							marginLeft: "5%",
							size: "20px",
						}}
						onClick={() => router.push("/question")}
					/>
				</Td>
			</Tr>
		);
	};

	if (data) {
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
						{query === ""
							? data.map((i) => TableContent(i))
							: filteredData.map((i) => TableContent(i.item))}
					</Tbody>
				</Table>
			</TableContainer>
		);
	}
}
