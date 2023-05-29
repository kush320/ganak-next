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
import axios from "axios";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function UsersList() {
	const router = useRouter();
	const [data, setData] = useState([]);
	const [query, setQuery] = useState("");

	useEffect(() => {
		getRequest("/api/user/get-user").then((data) => {
			setData(data.data);
		});
	}, []);

	async function handleDelete(id) {
		const res = await axios.delete(`/api/user/delete?userId=${id}`);
		if (res.status === 200) {
			toast.success("User deleted successfully.");
		} else {
			toast.error("Action not completed, try again.");
		}
	}

	const options = {
		includeScore: true,
		keys: ["profile.fullName"],
	};
	const fuse = new Fuse(data, options);
	const filteredData = fuse.search(query);

	const TableContent = (data) => {
		return (
			<Tr key={data.id}>
				<Td display={"flex"} gap={2} alignItems={"center"} fontSize={"14px"}>
					{" "}
					<Avatar
						borderRadius={"30%"}
						height={"30px"}
						width={"30px"}
						name={data.profile.fullName}
						src={`/api/public/images/${data.profile.image}`}
					/>
					{data.profile.fullName}
				</Td>
				<Td fontSize={"14px"}>{data.id}</Td>
				<Td fontSize={"14px"}>{data.number}</Td>
				<Td display={"flex"} gap={3}>
					<ViewIcon />
					<DeleteIcon
						color={"red.500"}
						onClick={() => handleDelete(data.userId)}
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
		);
	};

	if (!data) {
		return <h1>कुनै डाटा फेला परेन</h1>;
	}
	if (data) {
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
						<Box>
							<Button
								bgColor="#2E2C72"
								position={"relative"}
								height={"50px"}
								width="100%"
								color={"white"}
								margin={"auto"}
								type="submit"
								marginY={"5%"}
								onClick={(e) => router.push("/register")}
							>
								Add new user
							</Button>
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
								? data?.map((i) => TableContent(i))
								: filteredData?.map((i) => TableContent(i.item))}
						</Tbody>
					</Table>
				</TableContainer>
			</div>
		);
	}
}
