import {
    Container,
    Flex,
    Heading,
    Text,
    Stack,
    StackDivider,
    Icon,
    useColorModeValue,
    Avatar,
    Box,
    Center,
    Button,
    Badge,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { DiDatabase } from "react-icons/di";
import { MdOutlineSyncProblem } from "react-icons/md";
import { GiSkills } from "react-icons/gi";


const getData = async () => {
    const res = await fetch("https://api.github.com/users/rohitnayal12");
    return await res.json();
};

const Feature = ({ text, icon, iconBg }) => {
    return (
        <Stack direction={"row"} align={"center"}>
            <Flex
                w={8}
                h={8}
                align={"center"}
                justify={"center"}
                rounded={"full"}
                bg={iconBg}
            >
                {icon}
            </Flex>
            <Text fontWeight={600}>{text}</Text>
        </Stack>
    );
};

const Home = () => {
    const [result, setResult] = useState({});
    const SkillArr = ['JAVASCRIPT', 'REACT', 'REDUX',  'REST API', 'GIT', 'POSTMAN']
    useEffect(() => {
        fetchData();
    }, []);


    const fetchData = async () => {
        try {
            const data = await getData();
            setResult(data);
        } catch (err) {
            console.log(err);
        }
    };

    const onButtonClick = () => {
        // using Java Script method to get PDF file
        fetch('Rohit-Nayal-Resume.pdf').then(response => {
            response.blob().then(blob => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);
                // Setting various property values
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'Rohit-Nayal-Resume.pdf';
                alink.click();
            })
        })
    }


    return (
        <Container maxW={"7xl"} m={"auto"} paddingTop="80px" id="home">
            <Flex
                direction={["column", "column", "row"]}
                justifyContent="space-between"
                alignItems={"center"}
                padding="20px"
                gap={"50px"}
            >
                <Stack spacing={4} w={["95%", "95%", "55%"]} m="auto">
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
                        A MERN Stack Developer
                    </Text>
                    <Heading id="user-detail-name" >Hi, I'm Rohit Nayal</Heading>
                    <Text id="user-detail-intro" color={"gray.500"} fontSize={"lg"}>
                        A highly motivated and adaptable individual with a passion for
                        implementing technical and logical skills in the creative
                        domain. Specializes in quickly learning new skills and tech
                        stacks, problem-solving, responsive design principles, and
                        teamwork. Aspires to build a career in an organization with
                        dedicated people that aligns with their career goals.
                    </Text>
                    <Stack
                        spacing={4}
                        mt={8}
                        divider={
                            <StackDivider
                                borderColor={useColorModeValue("gray.100", "gray.700")}
                            />
                        }
                    >
                        <Feature
                            icon={
                                <Icon
                                    as={MdOutlineSyncProblem}
                                    color={"green.500"}
                                    w={5}
                                    h={5}
                                />
                            }
                            iconBg={useColorModeValue("green.100", "green.900")}
                            text={"Problem Solving Mindset"}
                        />
                        <Feature
                            icon={<Icon as={GiSkills} color={"purple.500"} w={5} h={5} />}
                            iconBg={useColorModeValue("purple.100", "purple.900")}
                            text={"Soft Skills & Tech Skills"}
                        />
                        <Feature
                            icon={<Icon as={DiDatabase} color={"yellow.500"} w={5} h={5} />}
                            iconBg={useColorModeValue("yellow.100", "yellow.900")}
                            text={"Data Structure & Algorithim"}
                        />
                    </Stack>
                </Stack>

                <Flex>
                    <Center py={6}>
                        <Box
                            maxW={"420px"}
                            w={"full"}
                            bg={useColorModeValue("white", "gray.900")}
                            border="1px solid gainsboro"
                            rounded={"2xl"}
                            p={18}
                            boxShadow="rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px"
                            textAlign={"center"}
                            height="auto"
                            paddingTop={8}
                            paddingBottom={16}
                        >
                            <Avatar
                                className="home-img"
                                size={"xl"}
                                src={result.avatar_url}
                                alt={"Avatar Alt"}
                                mb={4}
                                pos={"relative"}
                                _after={{
                                    content: '""',
                                    w: 4,
                                    h: 4,
                                    bg: "green.300",
                                    border: "2px solid white",
                                    rounded: "full",
                                    pos: "absolute",
                                    bottom: 0,
                                    right: 3,
                                }}
                            />
                            <Heading fontSize={"2xl"} fontFamily={"body"}>
                                {result.name}
                            </Heading>
                            <Text fontWeight={600} color={"gray.500"} mb={4}>
                                {`@${result.login}`}
                            </Text>
                            <Text
                                textAlign={"center"}
                                color={useColorModeValue("gray.700", "gray.400")}
                                px={3}
                            >
                                {result.bio}
                            </Text>
                            <Stack
                                align={"center"}
                                justify={"center"}
                                direction={"row"}
                                mt={6}
                                display="flex"
                                flexWrap={"wrap"}
                                gap="10px"
                            >
                                {SkillArr.map((ele) => (<Badge
                                    px={2}
                                    py={1}
                                    fontWeight={"400"}
                                >
                                    {ele}
                                </Badge>))}
                            </Stack>

                            <Stack mt={8} direction={"row"} spacing={4}>
                                <Button
                                    flex={1}
                                    fontSize={"sm"}
                                    variant="outline"
                                    color={"white.400"}
                                    bg={useColorModeValue("blue.50", "blue.900")}
                                    rounded={"full"}
                                    _focus={{
                                        bg: "gray.200",
                                    }}
                                    id="resume-link-2"
                                >
                                    <a
                                        href={""}
                                        target="_blank"
                                        rel="noreferrer"
                                        id="resume-button-2"
                                        download="https://drive.google.com/file/d/1I_sRKJeEhcfHOy_pm00utH5wsgC5FeMX/view?usp=sharing"
                                        onClick={onButtonClick}
                                    >
                                        Resume
                                    </a>
                                </Button>

                                <Button
                                    flex={1}
                                    fontSize={"sm"}
                                    rounded={"full"}
                                    bg={"blue.800"}
                                    color={"white"}
                                    _hover={{
                                        bg: "blue.500",
                                    }}
                                    _focus={{
                                        bg: "blue.500",
                                    }}
                                >
                                    <a href={result.html_url}>Follow</a>
                                </Button>
                            </Stack>
                        </Box>
                    </Center>
                </Flex>
            </Flex>
        </Container>
    );
}
export default Home;