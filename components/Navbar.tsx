"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import {
	Grid,
	GridItem,
	Center,
	Image,
	Text,
	List,
	ListItem,
	ListIcon,
	Avatar,
	Box,
	Stack,
	HStack,
	Divider,
	Button,
	Flex,
} from "@chakra-ui/react";
import { InfoIcon, Search2Icon, Icon } from "@chakra-ui/icons";
import { FiCalendar, FiUser, FiAlignCenter } from "react-icons/fi";
import SearchBar from "./SearchBar";
import { useRouter } from "next/navigation";
import getCurrentNepaliDate from "get-nepali-date";
import getRequest from "@/utils/getRequest";

export default function Navbar({ children }) {
	const [data, setData] = useState(null);

	useEffect(() => {
		getRequest("/api/user/get-profile").then((data) => {
			setData(data.data);
		});
	}, []);

	const router = useRouter();

	return (
		<Grid
			h="100vh"
			w={"100%"}
			templateRows="repeat(14, 1fr)"
			templateColumns="repeat(10, 1fr)"
			backgroundColor={"#f8f9ff"}
			overflow={"hidden"}
		>
			<GridItem rowSpan={14} colSpan={2} bg="#081A51">
				<Center>
					<Image alt="" marginTop={"10%"} w={"30%"} src={"logo.png"}></Image>
				</Center>
				<Text
					textAlign={"center"}
					color={"white"}
					fontSize={"14px"}
					marginTop={"3%"}
				>
					घरधुरि सर्वेक्षण
				</Text>
				<Text textAlign={"center"} color={"white"} fontSize={"14px"}>
					बेसीशहर​ नगरपालिका
				</Text>
				<List marginLeft={"10%"}>
					<ListItem>
						<Text color={"white"} marginTop={"40%"}>
							<ListIcon marginRight={"5%"}>
								<Icon as={FiAlignCenter} size={"25px"} color="white" />
							</ListIcon>
							दायस्बोर्द्
						</Text>
					</ListItem>

					<Link href={"/users-list"}>
						<ListItem>
							<Text color={"white"} marginTop={"10%"}>
								<ListIcon marginRight={"5%"}>
									<Icon as={FiUser} size={"25px"} color="white" />
								</ListIcon>
								प्रयोगकर्ता
							</Text>
						</ListItem>
					</Link>

					<Link href={"/suchi"}>
						<ListItem>
							<Text color={"white"} marginTop={"10%"}>
								<ListIcon marginRight={"5%"}>
									<Icon as={FiCalendar} size={"25px"} color="white" />
								</ListIcon>
								सूचि
							</Text>
						</ListItem>
					</Link>
				</List>
			</GridItem>

			<GridItem
				rowSpan={2}
				colSpan={8}
				bg="white"
				w={"full"}
				h="full"
				boxShadow={"base"}
			>
				<Flex alignItems={"center"} h={"full"} w={"full"} gap={3}>
					<Avatar
						borderRadius={"30%"}
						marginTop={"0%"}
						marginLeft={"3%"}
						height={"40px"}
						name={data?.profile.fullName}
						src={`/api/public/images/${data?.profile.image}`}
					/>
					<Flex w={"fit-content"} direction={"column"} height={"full"}>
						<Text
							w={"full"}
							fontSize={"15px"}
							marginTop={"18%"}
							fontWeight={"semibold"}
						>
							{data?.profile.fullName}
						</Text>
						<Text fontSize={"12px"}>{data?.role}</Text>
					</Flex>
				</Flex>
			</GridItem>

			<GridItem
				overflowY={"scroll"}
				width={"full"}
				height={"full"}
				rowSpan={12}
				colSpan={8}
				// bg="white"
				bgColor={"#f8f9ff"}
			>
				{children}
			</GridItem>
		</Grid>
	);
}
