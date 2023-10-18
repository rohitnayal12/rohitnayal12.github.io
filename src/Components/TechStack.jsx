import { Box, Grid, Stack, Text, useColorModeValue } from "@chakra-ui/react";
import React, { useState } from "react";
import {
  SiChakraui,
  SiCss3,
  SiExpress,
  SiHtml5,
  SiJavascript,
  SiReactrouter,
  SiNodedotjs,
  SiReact,
  SiTypescript,
  SiRedux,
  SiStyledcomponents,
} from "react-icons/si";

const Techstack = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div id="skills">
      <Box
        maxW={"7xl"}
        m="auto"
        mb={8}
        padding="20px"
        paddingTop={["auto", "auto", "20"]}
        alignItems="center"
      >
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
            Tech Skills
          </Text>
        </Stack>
        <Grid
          maxW={"5xl"}
          m="auto"
          gridTemplateColumns={[
            // "repeat(1, 1fr)",
            "repeat(2, 1fr)",
            "repeat(2, 1fr)",
            "repeat(3,1fr)",
            "repeat(4,1fr)",
            "repeat(4,1fr)",
            "repeat(6,1fr)",
          ]}
          alignItems="center"
          gap={15.5}
          justifyContent="center"
        >
          <Box
            border={"1px solid gray"}
            borderRadius="15px"
            boxShadow="rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px"
            padding="12px"
            pt={6}
            pl={6}
            pr={6}
            display={"flex"}
            flexDirection="column"
            alignItems={"center"}
            className="skills-card"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            _hover={{
              transform: isHovered ? "scale(1.1)" : "scale(1)",
            }}
          >
            <SiHtml5 size="50px" className="skills-card-img" />
            <Text mt={2} className="skills-card-name">
              HTML
            </Text>
          </Box>

          <Box
            border={"1px solid gray"}
            boxShadow="rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px"
            borderRadius="15px"
            padding="12px"
            pt={6}
            pl={6}
            pr={6}
            display={"flex"}
            flexDirection="column"
            alignItems={"center"}
            className="skills-card"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            _hover={{
              transform: isHovered ? "scale(1.1)" : "scale(1)",
            }}
          >
            <SiCss3 size="50px" className="skills-card-img" />
            <Text mt={2} className="skills-card-name">
              CSS
            </Text>
          </Box>

          <Box
            border={"1px solid gray"}
            borderRadius="15px"
            boxShadow="rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px"
            padding="12px"
            pt={6}
            pl={6}
            pr={6}
            display={"flex"}
            flexDirection="column"
            alignItems={"center"}
            className="skills-card"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            _hover={{
              transform: isHovered ? "scale(1.1)" : "scale(1)",
            }}
          >
            <SiJavascript size="50px" className="skills-card-img" />
            <Text mt={2} className="skills-card-name">
              Javascript
            </Text>
          </Box>

          <Box
            border={"1px solid gray"}
            boxShadow="rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px"
            borderRadius="15px"
            padding="12px"
            pt={6}
            pl={6}
            pr={6}
            display={"flex"}
            flexDirection="column"
            alignItems={"center"}
            className="skills-card"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            _hover={{
              transform: isHovered ? "scale(1.1)" : "scale(1)",
            }}
          >
            <SiReact size="50px" className="skills-card-img" />
            <Text mt={2} className="skills-card-name">
              React
            </Text>
          </Box>

          <Box
            border={"1px solid gray"}
            boxShadow="rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px"
            borderRadius="15px"
            padding="12px"
            pt={6}
            pl={6}
            pr={6}
            display={"flex"}
            flexDirection="column"
            alignItems={"center"}
            className="skills-card"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            _hover={{
              transform: isHovered ? "scale(1.1)" : "scale(1)",
            }}
          >
            <SiRedux size="50px" className="skills-card-img" />
            <Text mt={2} className="skills-card-name">
              Redux
            </Text>
          </Box>
          <Box
            border={"1px solid gray"}
            boxShadow="rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px"
            borderRadius="15px"
            padding="12px"
            pt={6}
            pl={6}
            pr={6}
            display={"flex"}
            flexDirection="column"
            alignItems={"center"}
            className="skills-card"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            _hover={{
              transform: isHovered ? "scale(1.1)" : "scale(1)",
            }}
          >
            <SiReactrouter size="50px" className="skills-card-img" />
            <Text mt={2} className="skills-card-name">
              ReactRouter
            </Text>
          </Box>

          <Box
            border={"1px solid gray"}
            boxShadow="rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px"
            borderRadius="15px"
            padding="12px"
            pt={6}
            pl={6}
            pr={6}
            display={"flex"}
            flexDirection="column"
            alignItems={"center"}
            className="skills-card"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            _hover={{
              transform: isHovered ? "scale(1.1)" : "scale(1)",
            }}
          >
            <SiChakraui size="50px" className="skills-card-img" />
            <Text mt={2} className="skills-card-name">
              Chakra UI
            </Text>
          </Box>

          <Box
            border={"1px solid gray"}
            boxShadow="rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px"
            borderRadius="15px"
            padding="12px"
            pt={6}
            pl={6}
            pr={6}
            display={"flex"}
            flexDirection="column"
            alignItems={"center"}
            className="skills-card"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            _hover={{
              transform: isHovered ? "scale(1.1)" : "scale(1)",
            }}
          >
            <SiTypescript size="50px" className="skills-card-img" />
            <Text mt={2} className="skills-card-name">
              TypeScript
            </Text>
          </Box>

          <Box
            border={"1px solid gray"}
            boxShadow="rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px"
            borderRadius="15px"
            padding="12px"
            pt={6}
            pl={6}
            pr={6}
            display={"flex"}
            flexDirection="column"
            alignItems={"center"}
            className="skills-card"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            _hover={{
              transform: isHovered ? "scale(1.1)" : "scale(1)",
            }}
          >
            <SiExpress size="50px" className="skills-card-img" />
            <Text mt={2} className="skills-card-name">
              Express
            </Text>
          </Box>

          <Box
            border={"1px solid gray"}
            boxShadow="rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px"
            borderRadius="15px"
            padding="12px"
            pt={6}
            pl={6}
            pr={6}
            display={"flex"}
            flexDirection="column"
            alignItems={"center"}
            className="skills-card"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            _hover={{
              transform: isHovered ? "scale(1.1)" : "scale(1)",
            }}
          >
            <SiNodedotjs size="50px" className="skills-card-img" />
            <Text mt={2} className="skills-card-name">
              Node
            </Text>
          </Box>
          <Box
            border={"1px solid gray"}
            borderRadius="15px"
            boxShadow="rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px"
            padding="12px"
            pt={6}
            pl={6}
            pr={6}
            display={"flex"}
            flexDirection="column"
            alignItems={"center"}
            className="skills-card"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            _hover={{
              transform: isHovered ? "scale(1.1)" : "scale(1)",
            }}
          >
            <SiStyledcomponents size="50px" className="skills-card-img" />
            <Text mt={2} className="skills-card-name">
              StyleComponent
            </Text>
          </Box>
        </Grid>
      </Box>
    </div>
  );
};

export default Techstack;
