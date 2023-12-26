import { Text, useDisclosure } from "@chakra-ui/react";
import React from "react";
import UserFollowersModal from "../Modals/UserFollowersModal";

const FollowersCount = ({ userProfile }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Text
        fontSize={{ base: "xs", md: "sm" }}
        cursor={"pointer"}
        onClick={onOpen}
      >
        <Text as="span" fontWeight={"bold"} mr={1}>
          {userProfile.followers.length}
        </Text>
        Followers
      </Text>

      {isOpen && (
        <UserFollowersModal
          isOpen={isOpen}
          onClose={onClose}
          userId={userProfile.uid}
        />
      )}
    </>
  );
};

export default FollowersCount;
