import {onAuthStateChanged ,signOut} from "firebase/auth";
import {auth} from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, USER_AVATAR } from "../utils/constants";
 
const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch(); // MISSING
  const user=useSelector(store => store.user);
  const handleSignOut=()=>{
    signOut(auth)
    .then(()=>{
      navigate("/");
      //sign-out sucessfully
    }).catch((error)=>{
      navigate("/error");
      // An error happened.
    });
  }
  useEffect(() => {
  const unsubscribe=onAuthStateChanged(auth, (user) => {
    if (user) {
      const { uid, email, displayName, photoURL } = user;

      dispatch(
        addUser({
          uid: uid,
          email: email,
          displayName: displayName,
          photoURL: photoURL,
        })
      );

      navigate("/browse");
    } else {
      dispatch(removeUser());
      navigate("/");
    }
  });
  //unscribe when component unmounts
  return ()=> unsubscribe();
}, []);
  return (
    <div className="absolute w-screen w-full px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img
        className="w-44"
        src={LOGO}
        alt="logo"
      />
    { user && <div className="flex items-center gap-2">
      <img
        className="w-8 h-8"
        src={user.photoURL || {USER_AVATAR}}
        alt="sign-out"
          />

      <button
        onClick={handleSignOut}
        className="whitespace-nowrap font-bold text-white">
        Sign Out
      </button>
    </div>
    }
    </div>

  );
};

export default Header;