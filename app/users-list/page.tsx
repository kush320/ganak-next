"use client";
import React, { useEffect, useState } from "react";
import {
	ViewIcon,
	DeleteIcon,
	EditIcon,
	Search2Icon,
	ChevronRightIcon,
} from "@chakra-ui/icons";
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
	Avatar,
	TableContainer,
	Button,
	ChakraBaseProvider,
	HStack,
} from "@chakra-ui/react";
import { ChevronLeftIcon } from "@chakra-ui/icons";
import SearchBar from "@/components/SearchBar";
import getRequest from "@/utils/getRequest";
import Fuse from "fuse.js";

export default function UsersList() {
	const [data, setData] = useState([]);
	const [query, setQuery] = useState("");

	useEffect(() => {
		getRequest("/api/user/get-user").then((data) => {
			setData(data.data);
		});
	}, []);

	const options = {
		includeScore: true,
		keys: ["profile.fullName"],
	};
	const fuse = new Fuse(data, options);
	const filteredData = fuse.search(query);

	return (
		<div>
			<TableContainer marginLeft={"2%"} marginTop={"2%"} marginRight={"2%"}>
				<HStack>
					<Box>
						<Text fontSize={"24px"} fontWeight={"semibold"}>
							प्रयोगकर्ता सूचि
						</Text>
					</Box>
					<Box width={"100%"}>
						<Stack marginLeft={"70%"}>
							<SearchBar query={query} setQuery={setQuery} />
						</Stack>
					</Box>
				</HStack>
				<Table marginTop={"2%"} backgroundColor={"white"}>
					<Thead>
						<Tr height={"50px"} bg="#081A51">
							<Th fontWeight={"semibold"} fontSize={"15px"} color="white">
								नाम​
							</Th>
							<Th fontWeight={"semibold"} fontSize={"15px"} color="white">
								आइदि
							</Th>
							<Th fontWeight={"semibold"} fontSize={"15px"} color="white">
								सम्पर्क​
							</Th>
							<Th fontWeight={"semibold"} fontSize={"15px"} color="white">
								कार्य​
							</Th>
						</Tr>
					</Thead>
					<Tbody>
						{query === ""
							? data.map((i) => (
									<Tr key={i.id}>
										<Td fontSize={"14px"}>
											{" "}
											<Avatar
												borderRadius={"30%"}
												height={"30px"}
												width={"30px"}
												name="Ryan Florence"
												src="https://bit.ly/ryan-florence"
											/>
											{i.profile.fullName}
										</Td>
										<Td fontSize={"14px"}>{i.id}</Td>
										<Td fontSize={"14px"}>{i.number}</Td>
										<Td>
											<ViewIcon />
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
											/>
										</Td>
									</Tr>
							  ))
							: filteredData.map((i) => (
									<Tr key={i.item.id}>
										<Td fontSize={"14px"}>
											{" "}
											<Avatar
												borderRadius={"30%"}
												height={"30px"}
												width={"30px"}
												name="Ryan Florence"
												src="https://bit.ly/ryan-florence"
											/>
											{i.item.profile.fullName}
										</Td>
										<Td fontSize={"14px"}>{i.item.id}</Td>
										<Td fontSize={"14px"}>{i.item.number}</Td>
										<Td>
											<ViewIcon />
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
											/>
										</Td>
									</Tr>
							  ))}
					</Tbody>
				</Table>
				{/* <HStack marginLeft={"80%"} >
      <ChevronLeftIcon/>
      <ChevronRightIcon/>
      </HStack> */}
			</TableContainer>
		</div>
	);
}
