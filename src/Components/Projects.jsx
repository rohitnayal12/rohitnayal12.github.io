import React from "react";
import {
  Box,
  Grid,
  GridItem,
  HStack,
  Image,
  Link,
  Text,
  grid,
  textDecoration,
} from "@chakra-ui/react";

const projects = [
  {
    title: "Project 1",
    githubLink: "https://github.com/Biswajit2595/warlike-current-5989",
    liveLink: "https://upstylenew.netlify.app/",
    image: "images/Screenshot(1395).png",
    techStack: "React, Node.js",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    daysToComplete: 14,
  },
  {
    title: "Project 2",
    image: "images/Screenshot(1395).png",
    githubLink: "https://github.com/Biswajit2595/warlike-current-5989",
    liveLink: "https://upstylenew.netlify.app/",
    techStack: "Vue.js, Express",
    description:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
    daysToComplete: 21,
  },
  {
    title: "Project 3",
    image: "images/Screenshot(1395).png",
    githubLink: "https://github.com/Biswajit2595/warlike-current-5989",
    liveLink: "https://upstylenew.netlify.app/",
    techStack: "Angular, Firebase",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.",
    daysToComplete: 18,
  },
  {
    title: "Project 4",
    image: "images/Screenshot(1395).png",
    githubLink: "https://github.com/Biswajit2595/warlike-current-5989",
    liveLink: "https://upstylenew.netlify.app/",
    techStack: "Svelte, Flask",
    description:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.",
    daysToComplete: 12,
  },
];

function Project() {
  return (
    <Box id="projects" p={6} marginLeft="40px" marginRight="40px">
      <Text fontSize="2xl" fontWeight="bold" mb={4}>
        My Projects
      </Text>
      <Grid templateColumns="repeat(2, 1fr)" gap={6}>
        {projects.map((project, index) => (
          <GridItem key={index} class="project-card">
            <HStack spacing="50%">
              <Link
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                class="project-github-link"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill="#000000"
                    d="M8 0C3.58 0 0 3.582 0 8c0 3.538 2.29 6.533 5.47 7.59.4.074.547-.174.547-.386 0-.19-.007-.693-.01-1.36-2.116.468-2.719-.513-2.895-.986-.096-.244-.514-.986-.878-1.184-.3-.16-.73-.552-.01-.562.678-.01 1.16.622 1.322.878.78 1.312 2.03.94 2.534.716.08-.564.302-.94.55-1.156-1.922-.22-3.935-.96-3.935-4.284 0-.948.336-1.724.88-2.332-.088-.22-.383-1.106.085-2.31 0 0 .734-.234 2.4.896a8.55 8.55 0 012.248-.306 8.55 8.55 0 012.248.306c1.666-1.13 2.4-.896 2.4-.896.468 1.204.174 2.09.085 2.31.54.608.88 1.384.88 2.332 0 3.332-2.017 4.064-3.94 4.28.308.268.58.794.58 1.598 0 1.154-.01 2.083-.01 2.366 0 .21.143.46.55.383C13.71 14.53 16 11.535 16 8c0-4.418-3.582-8-8-8z"
                  />
                </svg>
              </Link>
              <Link
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                class="project-deployed-link"
                _hover={{ textDecoration: 'none' }}
              >
                <Box backgroundColor="blue.200" borderRadius="md" p={2} w="100px">
                  <Text fontSize="xl" fontWeight="bold" color="blue.500" >
                    Go Live
                  </Text>
                </Box>
              </Link>
            </HStack>
            <br />
            <Image
              src={require("../images/Screenshot (1395).png")}
              alt={project.title}
              borderRadius="md"
            />
            <Text mt={2} fontSize="lg" fontWeight="bold"  class="project-title">
              {project.title}
            </Text>
            <Text fontSize="sm" color="gray.500" class="project-tech-stack">
              {project.techStack}
            </Text>
            <Text mt={2}>{project.description}</Text>
            <Text mt={2} fontSize="sm" color="gray.500">
              {`${project.daysToComplete} days to complete`}
            </Text>
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
}

export default Project;
