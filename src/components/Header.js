import {onAuthStateChanged ,signOut} from "firebase/auth";
import {auth} from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, SUPPORTED_LANGUAGES, USER_AVATAR } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";
 
const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch(); // MISSING
  const user=useSelector(store => store.user);
  const showGptSearch=useSelector((store)=>store.gpt.showGptSearch)
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

  const handleGptSearchClick =()=>{
    //Toggle GPT Search
    dispatch(toggleGptSearchView())
  }

  const handleLanguageChange=(e)=>{
    // console.log(e.target.value)
    dispatch(changeLanguage(e.target.value))
  }
return (
    
    <div className="absolute w-screen w-full px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img
        className="w-44"
        src={LOGO}
        alt="logo"
      />
    { user && (
      <div className="flex items-center gap-4">
  { showGptSearch && <select onChange={handleLanguageChange}
    className="px-4 py-2 bg-black/80 text-white text-sm font-semibold 
               border border-gray-500 rounded-lg shadow-md cursor-pointer
               hover:bg-black hover:border-red-600
               focus:outline-none focus:ring-2 focus:ring-red-600
               transition-all duration-200"
  >
    {SUPPORTED_LANGUAGES.map((lang) => (
      <option
        key={lang.identifier}
        value={lang.identifier}
        className="bg-black text-white"
      >
        {lang.name}
      </option>
    ))}
  </select>}

        <button className="py-2 px-4 mx-4 bg-purple-800 rounded-lg text-white"
        onClick={handleGptSearchClick}
        >
         {showGptSearch? "Homepage":"GPT Search"}
        </button>
      <img
        className="w-8 h-8"
        src={user.photoURL || USER_AVATAR}
        alt="sign-out"
          />

      <button
        onClick={handleSignOut}
        className="whitespace-nowrap font-bold text-white">
        Sign Out
      </button>
    </div>
    )}
    </div>

  );
};

export default Header;