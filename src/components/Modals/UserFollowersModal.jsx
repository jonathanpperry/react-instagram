import {
  Avatar,
  Box,
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  VStack,
} from "@chakra-ui/react";
import useGetFollowers from "../../hooks/useGetFollowers";
import { Link } from "react-router-dom";

const UserFollowersModal = ({ isOpen, onClose, userId }) => {
  const { isLoading, followingUsers } = useGetFollowers(userId);

  // Optional: render a loading skeleton
  if (isLoading) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent bg={"black"} border={"1px solid gray"}>
        <ModalHeader>Followers</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          {followingUsers.map((user, idx) => (
            <Link to={`/${user.username}`} key={idx}>
              <Flex
                flexDir={"row"}
                justifyContent={"space-around"}
                alignItems={"center"}
                w={36}
                my={2}
              >
                <Avatar src={user.profilePicURL} size={"md"} />
                <Box fontSize={12} fontWeight={"bold"}>
                  {user.fullName}
                </Box>
              </Flex>
            </Link>
          ))}
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default UserFollowersModal;
