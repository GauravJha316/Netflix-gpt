import {onAuthStateChanged ,signOut} from "firebase/auth";
import {auth} from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
 
const Header = () => {
  const navigate = useNavigate();
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
  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
    if (user) {
      const {uid, email, displayName, photoURL}     =user;

        dispatch(addUser({ uid:uid, email:email, displayName:displayName, photoURL:photoURL}));
        navigate("/browse");


    // ...
    } else {
    dispatch(removeUser());
      navigate("/")
    // User is signed out
    // ...
    
    });
  })
  return (
    <div className="absolute w-screen w-full px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img
        className="w-44"
        src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2026-04-27/consent/87b6a5c0-0104-4e96-a291-092c11350111/019ae4b5-d8fb-7693-90ba-7a61d24a8837/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
      />
    { user && <div className="flex items-center gap-2">
      <img
        className="w-8 h-8"
        src={user.photoURL || "https://avatars.githubusercontent.com/u/136838276?v=4"}
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