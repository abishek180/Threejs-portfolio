import { Html } from "@react-three/drei";
import { InfinitySpin } from "react-loader-spinner";

const Loader = () => {
  return (
    <Html>
      <div className="flex justify-center items-center">
        {/* <div className="w-20 h-20 border-2 border-opacity-20 border-blue-500 border-t-blue-500 rounded-full animate-spin" /> */}
        <InfinitySpin/>
      </div>
    </Html>
  );
};

export default Loader;
