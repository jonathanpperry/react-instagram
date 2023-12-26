import { useEffect, useState } from "react";
import useShowToast from "./useShowToast";
import useGetUserProfileById from "./useGetUserProfileById";
import {
  collection,
  getDocs,
  orderBy,
  query,
  where,
} from "firebase/firestore";
import { firestore } from "../firebase/firebase";

const useGetFollowing = (userId) => {
  const [isLoading, setIsLoading] = useState(true);
  const [followingUsers, setFollowingUsers] = useState([]);
  const { userProfile } = useGetUserProfileById(userId);
  const showToast = useShowToast();

  useEffect(() => {
    const getFollowing = async () => {
      setIsLoading(true);
      try {
        const usersRef = collection(firestore, "users");

        const q = query(
          usersRef,
          where("uid", "in", userProfile.following),
          orderBy("uid")
        );

        const querySnapshot = await getDocs(q);
        const users = [];
        querySnapshot.forEach((doc) => {
          users.push({ ...doc.data(), id: doc.id });
        });

        setFollowingUsers(users);
      } catch (error) {
        showToast("Error", error.message, "error");
      } finally {
        setIsLoading(false);
      }
    };
    if (userProfile) getFollowing();
  }, [userProfile, showToast]);

  return { isLoading, followingUsers };
};

export default useGetFollowing;
