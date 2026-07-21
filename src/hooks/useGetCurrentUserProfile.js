import { useEffect } from "react";
import useAuthStore from "../store/authStore";
import useUserProfileStore from "../store/userProfileStore";

const useGetCurrentUserProfile = () => {
  const authUser = useAuthStore((state) => state.user);
  const setUserProfile = useUserProfileStore((state) => state.setUserProfile);

  useEffect(() => {
    if (authUser) {
      setUserProfile(authUser);
    }
  }, [authUser, setUserProfile]);
};

export default useGetCurrentUserProfile;
