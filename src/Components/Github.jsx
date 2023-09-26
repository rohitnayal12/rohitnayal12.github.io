import {
  Box,
  Flex,
  Image,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import React, { useState } from "react";
import Githubcalendar from "react-github-calendar";

const Github = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <>
      <Box maxW={"7xl"} m="auto" mb={8} padding="20px" alignItems="center">
        <Stack spacing={4} w={["100%"]} m="auto">
          <Text
            textTransform={"uppercase"}
            color={"white.400"}
            border="1px solid black"
            fontWeight={600}
            textAlign="center"
            width="200px"
            m={"auto"}
            mb={16}
            fontSize={"sm"}
            bg={useColorModeValue("blue.50", "blue.900")}
            p={2}
            alignSelf={"flex-start"}
            rounded={"md"}
            _hover={{
              transform: isHovered ? "scale(1.2)" : "scale(1)",
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            Github Calander
          </Text>
        </Stack>
        <Githubcalendar
          username="rohitnayal12"
          style={{ width: "100%", margin: "auto" }}
          blockMargin={5}
          fontSize={16}
          _hover={{
            transform: isHovered ? "scale(1.1)" : "scale(1)",
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        />
        <Stack spacing={4} w={["100%"]} m="auto">
          <Text
            textTransform={"uppercase"}
            color={"white.400"}
            border="1px solid black"
            fontWeight={600}
            textAlign="center"
            width="200px"
            m={"auto"}
            mt={16}
            mb={8}
            fontSize={"sm"}
            bg={useColorModeValue("blue.50", "blue.900")}
            p={2}
            alignSelf={"flex-start"}
            rounded={"md"}
            _hover={{
              transform: isHovered ? "scale(1.2)" : "scale(1)",
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            Github Stats
          </Text>
        </Stack>
        <Flex
          direction={["column", "column", "column", "column", "row"]}
          alignItems="center"
          justifyContent={"center"}
          gap="10px"
          border={"1px solid gray"}
          padding="6px"
          m={4}
          borderRadius={"20px"}
          width="90%"
          margin="auto"
          boxShadow="rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px"
        >
          <Image
            src="https://github-readme-stats.vercel.app/api?username=rohitnayal12&show_icons=true&locale=en"
            alt="rohit"
            w={"35%"}
            borderRadius={"20px"}
            id="github-stats-card"
          />
          <Image
            src="https://github-readme-streak-stats.herokuapp.com/?user=rohitnayal12"
            alt="rohit"
            w={"35%"}
            borderRadius={"20px"}
            id="github-streak-stats"
          />
          <Image
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=rohitnayal12&layout=compact"
            alt="rohit"
            w={"35%"}
            borderRadius={"20px"}
            id="github-top-langs"
          />
        </Flex>
      </Box>
    </>
  );
};

export default Github;
