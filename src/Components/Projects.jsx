import React, { useState } from "react";
import {
  Box,
  Grid,
  GridItem,
  HStack,
  Image,
  Link,
  Text,
} from "@chakra-ui/react";
import img1 from "../images/Buy-Fashion.png";
import img2 from "../images/BazarBuzz.png";
const projects = [
  {
    title: "UPSTYLE.com",
    githubLink: "https://github.com/rohitnayal12/UpStyle",
    liveLink: "https://upstylenew.netlify.app/",
    image:
      "https://github.com/Biswajit2595/warlike-current-5989/assets/119488668/844e8624-7f60-42da-a24d-1837eabfc5c5",
    techStack: "HTML, CSS, Javascript,typescript",
    description:
      "This project is a full stack application which focuses on e-commerce for men and women products. You can buy different products as per your body needs by exploring our website!",
    daysToComplete: 5,
  },
  {
    title: "TuneWave",
    image:
      "https://github.com/WDwithSuraj/shocking-grade-9442/assets/119648587/2bf5132e-c63f-4888-a817-f9fafd5ae748",
    githubLink: "https://github.com/rohitnayal12/Tune-Waves",
    liveLink: "https://tunewaves.vercel.app/",
    techStack: "React,Express,Node,MongoDB,JavaScript,HTML,CSS",
    description:
      "TuneWaves is not just a music platform, it's your portal to a world of limitless audio exploration. Hear the music and make your time special.",
    daysToComplete: 5,
  },
  {
    title: "Buy-Fashion.com",

    image: img1,
    githubLink: "https://github.com/rohitnayal12/Buy-Fashion",
    liveLink: "https://fastidious-melba-d436e9.netlify.app/",
    techStack: "HTML, CSS, Javascript,Json-Server",
    description:
      "Buy-fashion is your canvas to explore foot wares according to your choice. Immerse yourself in the rhythms of the world, uncover hidden gems, and craft your foot ware journey like never before",
    daysToComplete: 5,
  },
  {
    title: "BazarBuzz",
    image: img2,
    githubLink: "https://github.com/rohitnayal12/BazarBuzz",
    liveLink: "https://curly-hobbies-5555.netlify.app/",
    techStack: "HTML, CSS, Javascript,Json-Server",
    description:
      "This project is a e-commerce application which focuses on different daily needs and  men and women products. You can buy different products as per your home needs by exploring our website!",
    daysToComplete: 5,
  },
];

function Project() {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <Box
      id="projects"
      p={6}
      style={{ marginLeft: "20px", marginRight: "20px" }}
    >
      <Text
        fontSize="4xl"
        fontWeight="bold"
        color="teal"
        mb={4}
        textAlign={"center"}
        _hover={{
          transform: isHovered ? "scale(1.2)" : "scale(1)",
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        PROJECTS
      </Text>
      <br />
      <Grid
        gridTemplateColumns={[
          "repeat(1, 1fr)",
          "repeat(1, 1fr)",
          "repeat(1, 1fr)",
          "repeat(2, 1fr)",

         
        ]}
        gap={6}
        className="project-card"
      >
        {projects.map((project, index) => (
          <GridItem
            key={index}
            className="project-card"
            style={{
              "box-shadow": "rgba(0, 0, 0, 0.35) 0px 5px 15px",
              paddingLeft: "40px",
              paddingRight: "40px",
              paddingTop: "5px",
              paddingBottom: "5px",
              borderRadius: "20px",
            }}
          >
            <HStack
              spacing="30%"
              display={"flex"}
              justifyContent={"space-evenly"}
            >
              <Link
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                class="project-github-link"
                _hover={{ textDecoration: "none" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="4vh"
                  style={{ color: "#00FFFF" }}
                  viewBox="0 0 16 16"
                  _hover={{
                    transform: isHovered ? "scale(1.1)" : "scale(1)",
                  }}
                >
                  <path
                    fill="#3399ff"
                    d="M8 0C3.58 0 0 3.582 0 8c0 3.538 2.29 6.533 5.47 7.59.4.074.547-.174.547-.386 0-.19-.007-.693-.01-1.36-2.116.468-2.719-.513-2.895-.986-.096-.244-.514-.986-.878-1.184-.3-.16-.73-.552-.01-.562.678-.01 1.16.622 1.322.878.78 1.312 2.03.94 2.534.716.08-.564.302-.94.55-1.156-1.922-.22-3.935-.96-3.935-4.284 0-.948.336-1.724.88-2.332-.088-.22-.383-1.106.085-2.31 0 0 .734-.234 2.4.896a8.55 8.55 0 012.248-.306 8.55 8.55 0 012.248.306c1.666-1.13 2.4-.896 2.4-.896.468 1.204.174 2.09.085 2.31.54.608.88 1.384.88 2.332 0 3.332-2.017 4.064-3.94 4.28.308.268.58.794.58 1.598 0 1.154-.01 2.083-.01 2.366 0 .21.143.46.55.383C13.71 14.53 16 11.535 16 8c0-4.418-3.582-8-8-8z"
                  />
                </svg>
              </Link>
              <Link
                href={project.liveLink}
                target="_blank"
                alignItems={"center"}
                textAlign={"center"}
                rel="noopener noreferrer"
                className="project-deployed-link"
                _hover={{ textDecoration: "none" }}
              >
                <Box
                  backgroundColor="blue.200"
                  borderRadius="md"
                  p={2}
                  w="15vh"
                  _hover={{ backgroundColor: "blue", color: "black" }}
                >
                  <Text fontSize="xl" fontWeight="bold" color="blue.500">
                    Go Live
                  </Text>
                </Box>
              </Link>
            </HStack>
            <br />
            <Box
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <Image
                src={project.image}
                alt={project.title}
                borderRadius="md"
                transition="transform 0.3s ease-in-out"
                _hover={{
                  transform: isHovered ? "scale(1.1)" : "scale(1)",
                }}
              />
            </Box>
            <Text className="project-title">{project.title}</Text>
            <br />
            <Text className="project-tech-stack">{project.techStack}</Text>
            <Text className="project-description">{project.description}</Text>
            <Text className="project-days-to-complete">
              {`${project.daysToComplete} days to complete`}
            </Text>
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
}

export default Project;
