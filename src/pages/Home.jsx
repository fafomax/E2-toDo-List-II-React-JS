import ReactPlayer from "react-player";
import "../styles/Home.css";

export default function Home() {
  return (
    <>
      <h1>Home</h1>
      <div className="contenedor">
        <ReactPlayer
          url="https://youtu.be/vO4VjRahgm4"
          width="60%"
          height="60%"
          controls
          playing
          volume="0.15"
          className="react-player"
        />
      </div>
    </>
  );
}
