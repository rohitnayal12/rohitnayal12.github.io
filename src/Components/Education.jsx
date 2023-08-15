import {
    Box,
    SimpleGrid,
    Text,
    Stack,
    Flex,
    useColorModeValue,
    Image,
} from "@chakra-ui/react";

const Education = () => {
    return (
        <>
            <Box width="100%" m="auto" padding={["5", "5", "20"]}>
                <Stack spacing={4} w={["100%"]} m="auto">
                    <Text
                        textTransform={"uppercase"}
                        color={"white.400"}
                        border="1px solid black"
                        fontWeight={600}
                        fontSize={"sm"}
                        bg={useColorModeValue("blue.50", "blue.900")}
                        p={2}
                        alignSelf={"flex-start"}
                        rounded={"md"}
                    >
                        Education 
                    </Text>
                </Stack>
                <Box p={4} mt={8} width="100%" >
                    <SimpleGrid columns={{ base: 1, md: 3 }} spacing={20}>
                        <Stack>
                            <Flex
                                w={16}
                                h={16}
                                align={"center"}
                                justify={"center"}
                                color={"white"}
                                // rounded={"full"}
                                bg={"gray.100"}
                                mb={1}
                            >
                                <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpuvIOfB5VovxyHjlNJ1nGOKplOhF-l9VsryQ1lGMQzYV3heBa8B0xZNtilGSSH4cig2I&usqp=CAU" alt="logo" />
                            </Flex>
                            <Text fontWeight={600} fontSize={"20px"}>
                                Full-Stack Web Development (Full-Time)
                            </Text>
                            <Text fontWeight={300} fontSize={"16px"}>
                                Bengaluru - Masai School (Full Time)
                            </Text>
                            <Text fontWeight={100} fontSize={"15px"}>
                                Nov 2022 - Present
                            </Text>

                            <Text color={"white.100"} fontWeight={400} fontSize={"17px"}>
                                I enrolled full-time in a MERN Full Stack Web Development course at Masai School.
                            </Text>
                        </Stack>
                        <Stack>
                            <Flex
                                w={16}
                                h={16}
                                align={"center"}
                                justify={"center"}
                                color={"white"}
                                rounded={"full"}
                                bg={"gray.100"}
                                mb={1}
                            >
                                <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgy0Y-E9NpjG9dZc6ogdjfVPW5XRis_lTc-i20TeYx&s" alt="logo" />
                            </Flex>
                            <Text fontWeight={600} fontSize={"20px"}>
                                Bachelor of technology (Mechanical Engineering )
                            </Text>
                            <Text fontWeight={300} fontSize={"16px"}>
                                Dwarahat, Uttarakhand
                            </Text>
                            <Text fontWeight={100} fontSize={"15px"}>
                                2017 - 2020
                            </Text>
{/* 
                            <Text color={"white.100"} fontWeight={400} fontSize={"17px"}>
                                I have completed my graduation from Yashwantrao Chavan Open University in Nashik.
                            </Text> */}
                        </Stack>
                        <Stack>
                            <Flex
                                w={16}
                                h={16}
                                align={"center"}
                                justify={"center"}
                                color={"white"}
                                rounded={"full"}
                                bg={"gray.100"}
                                mb={1}
                            >
                                <Image borderRadius="50%" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOWyDQJvgkROwyHVDCCAU3qOVy9h17_nBgnxLCDfGocw&s" alt="logo" />
                            </Flex>
                            <Text fontWeight={600} fontSize={"20px"}>
                               Diploma (Mechanical Engineering)
                            </Text>
                            <Text fontWeight={300} fontSize={"16px"}>
                                Government Polytechnic Kashipur
                            </Text>
                            <Text fontWeight={100} fontSize={"15px"}>
                                2014 - 2017 
                            </Text>

                            {/* <Text color={"white.100"} fontWeight={400} fontSize={"17px"}>
                                I attended Government College of Engineering for Instrumentation Engineering, but I was not comfortable there, so I quit after 2 years.
                            </Text> */}
                        </Stack>
                        <Stack>
                            <Flex
                                w={16}
                                h={16}
                                align={"center"}
                                justify={"center"}
                                color={"white"}
                                rounded={"full"}
                                bg={"gray.100"}
                                mb={1}
                            >
                                <Image borderRadius="50%" src="https://upload.wikimedia.org/wikipedia/en/8/82/Jawahar_Navodaya_Vidyalaya_logo.png" alt="logo" />
                            </Flex>
                            <Text fontWeight={600} fontSize={"20px"}>
                                Higher Secondary - Science
                            </Text>
                            <Text fontWeight={300} fontSize={"16px"}>
                                Jawahar Navodaya Vidyalaya Suyalbari, Nainital
                            </Text>
                            <Text fontWeight={100} fontSize={"15px"}>
                                2012 - 2014
                            </Text>

                            <Text color={"white.100"} fontWeight={400} fontSize={"17px"}>
                                I completed my higher secondary schooling with 84% in the PCM group.
                            </Text>
                        </Stack>
                    </SimpleGrid>
                </Box>
            </Box>
        </>
    );
};

export default Education;