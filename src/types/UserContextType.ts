import { UserEntity } from "./UserEntity";

export type UserContextType = {
  userData: UserEntity | null;
  setUserData: React.Dispatch<React.SetStateAction<UserEntity | null>>;
};
