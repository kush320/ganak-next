"use client";
import React from "react";
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

export default function Navbar({ children }) {
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
				boxShadow={"base"}
			>
				<Flex
					justifyContent={"space-evenly"}
					h={"full"}
					alignItems={"center"}
					w={"full"}
				>
					<Flex alignItems={"center"} gap={3}>
						<Avatar
							borderRadius={"30%"}
							marginTop={"0%"}
							marginLeft={"3%"}
							height={"40px"}
							name="Ryan Florence"
							src="https://bit.ly/ryan-florence"
						/>

						<Flex direction={"column"} height={"full"}>
							<Text marginTop={"18%"} fontWeight={"semibold"}>
								राम चोर
							</Text>
							<Text fontSize={"14px"}>ब्यबस्थापक</Text>
						</Flex>
						<Box width={"10%"}>
							<Stack marginLeft={"70%"}>
								<Divider
									orientation="vertical"
									h="40px"
									borderColor={"blackAlpha.300"}
								/>
							</Stack>
						</Box>
					</Flex>
					<Box width={"45%"}>
						<SearchBar />
					</Box>
					<Box>
						<Text textAlign={"end"}>{getCurrentNepaliDate()}</Text>
					</Box>
				</Flex>
			</GridItem>

			<GridItem
				overflow={"scroll"}
				height={"100%"}
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