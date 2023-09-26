import React, { useState } from "react";
import {
  Box,
  Flex,
  Image,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

const About = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div id="about" className="about section">
      <Box maxW={"7xl"} m="auto" paddingTop={["8", "8", "20"]} mb={8}>
        <Flex
          direction={[
            "column-reverse",
            "column-reverse",
            "column-reverse",
            "row",
          ]}
          alignItems="center"
          gap={["50px", "50px", "80px"]}
        >
          <Box>
            <Image
              borderRadius="50%"
              className="home-img"
              m={[0, 0, 12]}
              ml={["0px", "0px", "90px"]}
              w={"300px"}
              height={"300px"}
              boxShadow="rgba(0, 0, 0, 0.2) 0px 20px 30px"
              src="https://avatars.githubusercontent.com/u/119488668?v=4"
              alt="img"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              _hover={{
                transform: isHovered ? "scale(1.1)" : "scale(1)",
              }}
            />
          </Box>
          <Box w={["85%", "85%", "70%"]} m="auto">
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
                _hover={{
                  transform: isHovered ? "scale(1.2)" : "scale(1)",
                }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                About Rohit Nayal
              </Text>
              <Text
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                _hover={{
                  transform: isHovered ? "scale(1.10)" : "scale(1)",
                  color: "teal.500", // Change font color to teal on hover
                  backgroundColor: "transparent", // Remove background color on hover
                }}
                color={"gray.500"}
                fontSize={"lg"}
                id="user-detail-intro"
              >
                I am an MERN Full Stack Developer with a strong understanding of
                Web Development and exceptional problem-solving skills in HTML,
                CSS, JavaScript, React and Redux. . Currently, I am seeking a
                challenging role as a MERN Stack developer. As a passionate
                Full-Stack Web Developer, I have a keen eye for stunning designs
                and a deep commitment to social causes. I am eager to expand my
                knowledge of niche technologies while working for a
                forward-thinking organization and contributing to its growth.
              </Text>
            </Stack>
          </Box>
        </Flex>
      </Box>
    </div>
  );
};

export default About;
