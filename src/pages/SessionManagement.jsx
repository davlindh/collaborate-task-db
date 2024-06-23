import { Box, Heading, VStack, Text, Input, Button } from "@chakra-ui/react";
import { useState } from "react";

const SessionManagement = () => {
  const [sessions, setSessions] = useState([]);
  const [newSession, setNewSession] = useState("");

  const handleAddSession = () => {
    setSessions([...sessions, newSession]);
    setNewSession("");
  };

  return (
    <Box p={4}>
      <Heading as="h1" mb={6}>Session Management</Heading>
      <VStack spacing={4} align="start">
        <Input placeholder="New Session" value={newSession} onChange={(e) => setNewSession(e.target.value)} />
        <Button colorScheme="blue" onClick={handleAddSession}>Add Session</Button>
        <VStack spacing={2} align="start">
          {sessions.map((session, index) => (
            <Text key={index}>{session}</Text>
          ))}
        </VStack>
      </VStack>
    </Box>
  );
};

export default SessionManagement;