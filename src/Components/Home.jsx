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
import { TypeAnimation } from "react-type-animation";

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
  const [isHovered, setIsHovered] = useState(false);
  const SkillArr = [
    "JAVASCRIPT",
    "REACT",
    "REDUX",
    "REST API",
    "GIT",
    "POSTMAN",
  ];
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

  const onButtonClick = async () => {
    window.open(
      "https://drive.google.com/file/d/1ArJNmEthfCLC2-YLY0Rlb5tBLEfwSQDk/view?usp=sharing",
      "_blank"
    );

    // Trigger the download after a short delay (e.g., 500 milliseconds)
    setTimeout(() => {
      const link = document.createElement("a");
      link.href =
        "https://drive.google.com/uc?export=download&id=1ArJNmEthfCLC2-YLY0Rlb5tBLEfwSQDk";
      link.download =
        "https://drive.google.com/file/d/1ArJNmEthfCLC2-YLY0Rlb5tBLEfwSQDk/view?usp=sharing"; // Set the desired file name here
      link.style.display = "none";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }, 200); // Adjust the delay as needed
  };

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
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            _hover={{
              transform: isHovered ? "scale(1.10)" : "scale(1)",
              color: "teal.500", // Change font color to teal on hover
              backgroundColor: "transparent", // Remove background color on hover
            }}
          >
            A MERN Stack Developer
          </Text>
          <Box>
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed once, initially
                "Hi, I am Rohit Nayal",
                3000,
                "",
              ]}
              omitDeletionAnimation={true}
              speed={50}
              style={{ fontSize: "3em" }}
              repeat={Infinity}
            />
          </Box>

          <TypeAnimation
            splitter={(str) => str.split(/(?= )/)} 
            sequence={[
              "A highly motivated and adaptable individual with a passion for implementing technical and logical skills in the creative domain. Specializes in quickly learning new skills and tech stacks,problem-solving, responsive design principles, and teamwork. Aspires to build a career in an organization with dedicated people that aligns with their career goals.",
              3000,
            ]}
            speed={{ type: "keyStrokeDelayInMs", value: 90 }}
            omitDeletionAnimation={true}
            style={{ fontSize: "1.2em", display: "block", minHeight: "200px" }}
            // repeat={Infinity}
          />
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
              _hover={{
                transform: isHovered ? "scale(1.1)" : "scale(1)",
                backgroundColor: "teal.500", // Change background color to teal on hover
                color: "white", // Change font color to white on hover
              }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
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
              <Text fontWeight={600} color={"blue"} mb={4}>
                {`@${result.login}`}
              </Text>
              <Text
                textAlign={"center"}
                color={useColorModeValue(["black"])}
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
                {SkillArr.map((ele) => (
                  <Badge px={2} py={1} fontWeight={"400"} key={ele}>
                    {ele}
                  </Badge>
                ))}
              </Stack>

              <Stack mt={8} direction={"row"} spacing={4}>
                <Button
                  flex={1}
                  fontSize={"sm"}
                  variant="outline"
                  color={"black"}
                  bg={useColorModeValue("blue.100", "blue.900")}
                  rounded={"full"}
                  _focus={{
                    bg: "blue.900",
                  }}
                  onClick={onButtonClick}
                  id="resume-button-2"
                >
                  Resume
                </Button>

                <Button
                  flex={1}
                  fontSize={"sm"}
                  rounded={"full"}
                  bg={"blue.800"}
                  color={"white"}
                  _hover={{
                    bg: "blue.300",
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
};
export default Home;
