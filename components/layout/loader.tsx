import "@/styles/loader.css";
import { Player } from "@lottiefiles/react-lottie-player";
const Loader = () => {
  return (
    <Player
      autoplay
      loop
      src="/assets/animations/loader.json"
      className="h-60 w-60"
    ></Player>
  );
};

export default Loader;
