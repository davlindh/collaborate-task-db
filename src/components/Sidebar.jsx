import { Box, VStack, Button, Collapse, useDisclosure, Select, Input, useBreakpointValue, IconButton } from "@chakra-ui/react";
import SidebarLink from "./SidebarLink.jsx";
import { useState } from "react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

const Sidebar = () => {
  const [filter, setFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const { isOpen, onToggle } = useDisclosure();
  const isMobile = useBreakpointValue({ base: true, md: false });

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearch = () => {
    console.log(`Searching for ${searchQuery} with filter ${filter}`);
  };

  return (
    <Box bg="gray.100" width={isMobile ? "100%" : "250px"} position="fixed" top="60px" bottom="0" overflowY="auto" boxShadow="md">
      <VStack align="start" p={4}>
        {isMobile && (
          <IconButton
            aria-label="Toggle Sidebar"
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            onClick={onToggle}
            mb={4}
          />
        )}
        <Collapse in={!isMobile || isOpen} animateOpacity>
          <VStack align="start" spacing={4} width="100%">
            <Button onClick={onToggle} width="100%">
              {isOpen ? "Hide Filters" : "Show Filters"}
            </Button>
            <Collapse in={isOpen} animateOpacity>
              <VStack align="start" spacing={2} width="100%">
                <Select placeholder="Filter" value={filter} onChange={handleFilterChange} bg="white" color="black">
                  <option value="all">All</option>
                  <option value="tasks">Tasks</option>
                  <option value="files">Files</option>
                  <option value="groups">Groups</option>
                  <option value="profiles">Profiles</option>
                </Select>
                <Input placeholder="Search" value={searchQuery} onChange={handleSearchChange} bg="white" color="black" />
                <Button colorScheme="blue" onClick={handleSearch} width="100%">Search</Button>
              </VStack>
            </Collapse>
            <SidebarLink to="/recent-activities" _hover={{ bg: "gray.200", transition: "background-color 0.3s" }}>Recent Activities</SidebarLink>
            <SidebarLink to="/notifications" _hover={{ bg: "gray.200", transition: "background-color 0.3s" }}>Notifications</SidebarLink>
          </VStack>
        </Collapse>
      </VStack>
    </Box>
  );
};

export default Sidebar;