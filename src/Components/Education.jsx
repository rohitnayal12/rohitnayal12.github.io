import {
  Box,
  Text,
  Stack,
  Flex,
  useColorModeValue,
  Image,
  Grid,
} from "@chakra-ui/react";
import { useState } from "react";

const Education = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <>
      <Box width="100%" m="auto" padding={["5", "5", "0"]}>
        <Stack spacing={4} w={["100%"]} m="auto">
          <Text
            textTransform={"uppercase"}
            color={"white.400"}
            border="1px solid black"
            fontWeight={600}
            fontSize={"sm"}
            bg={useColorModeValue("blue.50", "blue.900")}
            p={2}
            alignSelf={"center"}
            rounded={"md"}
            _hover={{
              transform: isHovered ? "scale(1.2)" : "scale(1)",
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            Education
          </Text>
        </Stack>
        <Box p={4} mt={8} width="100%">
          {/* <SimpleGrid columns={{ base: 1, md: 3 }} spacing={20}> */}
          <Grid
            maxW={"5xl"}
            m="auto"
            gridTemplateColumns={[
              "repeat(1, 1fr)",
              "repeat(1, 1fr)",
              "repeat(2, 1fr)",
              "repeat(2, 1fr)",

              // "repeat(4,1fr)",
            ]}
            alignItems="center"
            gap={20}
            justifyContent="center"
          >
            <Stack
              style={{
                boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                paddingLeft: "40px",
                paddingRight: "40px",
                paddingTop: "50px",
                paddingBottom: "45px",
                borderRadius: "10px",
                transition: "background-color 0.3s, color 0.3s", // Add transition for smooth effect
              }}
              _hover={{
                transform: isHovered ? "scale(1.1)" : "scale(1)",
                backgroundColor: "teal.500", // Change background color to teal on hover
                color: "white", // Change font color to white on hover
              }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
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
                <Image
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpuvIOfB5VovxyHjlNJ1nGOKplOhF-l9VsryQ1lGMQzYV3heBa8B0xZNtilGSSH4cig2I&usqp=CAU"
                  alt="logo"
                />
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
                I enrolled full-time in a MERN Full Stack Web Development course
                at Masai School.
              </Text>
            </Stack>
            <Stack
              style={{
                boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                paddingLeft: "40px",
                paddingRight: "40px",
                paddingTop: "40px",
                paddingBottom: "30px",
                borderRadius: "10px",
                transition: "background-color 0.3s, color 0.3s", // Add transition for smooth effect
              }}
              _hover={{
                transform: isHovered ? "scale(1.1)" : "scale(1)",
                backgroundColor: "teal.500", // Change background color to teal on hover
                color: "white", // Change font color to white on hover
              }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
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
                <Image
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgy0Y-E9NpjG9dZc6ogdjfVPW5XRis_lTc-i20TeYx&s"
                  alt="logo"
                />
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
              <Text color={"white.100"} fontWeight={400} fontSize={"17px"}>
                I completed my Bachelor Degree in Mechanical Engineering.
              </Text>
            </Stack>
            <Stack
              style={{
                boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                paddingLeft: "40px",
                paddingRight: "40px",
                paddingTop: "40px",
                paddingBottom: "30px",
                borderRadius: "10px",
                transition: "background-color 0.3s, color 0.3s", // Add transition for smooth effect
              }}
              _hover={{
                transform: isHovered ? "scale(1.1)" : "scale(1)",
                backgroundColor: "teal.500", // Change background color to teal on hover
                color: "white", // Change font color to white on hover
              }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
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
                <Image
                  borderRadius="50%"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOWyDQJvgkROwyHVDCCAU3qOVy9h17_nBgnxLCDfGocw&s"
                  alt="logo"
                />
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
              <br />
              <Text color={"white.100"} fontWeight={400} fontSize={"17px"}>
                I completed my diploma in Mechanical Engineering.
              </Text>
            </Stack>

            <Stack
              style={{
                boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                paddingLeft: "40px",
                paddingRight: "40px",
                paddingTop: "40px",
                paddingBottom: "40px",
                borderRadius: "10px",
                transition: "background-color 0.3s, color 0.3s", // Add transition for smooth effect
              }}
              _hover={{
                transform: isHovered ? "scale(1.1)" : "scale(1)",
                backgroundColor: "teal.500", // Change background color to teal on hover
                color: "white", // Change font color to white on hover
              }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
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
                <Image
                  borderRadius="50%"
                  src="https://upload.wikimedia.org/wikipedia/en/8/82/Jawahar_Navodaya_Vidyalaya_logo.png"
                  alt="logo"
                />
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
                I completed my higher secondary schooling with 84% in the PCM
                group.
              </Text>
            </Stack>
          </Grid>
          {/* </SimpleGrid> */}
        </Box>
      </Box>
    </>
  );
};

export default Education;
