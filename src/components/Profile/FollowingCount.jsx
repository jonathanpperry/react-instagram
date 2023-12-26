import { Text, useDisclosure } from "@chakra-ui/react";
import React from "react";
import UserFollowingModal from "../Modals/UserFollowingModal";

const FollowingCount = ({ userProfile }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Text
        fontSize={{ base: "xs", md: "sm" }}
        cursor={"pointer"}
        onClick={onOpen}
      >
        <Text as="span" fontWeight={"bold"} mr={1} onClick={onOpen}>
          {userProfile.following.length}
        </Text>
        Following
      </Text>

      {isOpen && (
        <UserFollowingModal
          isOpen={isOpen}
          onClose={onClose}
          userId={userProfile.uid}
        />
      )}
    </>
  );
};

export default FollowingCount;
