import { Header } from "../Component/Header";
import { Videos } from "../Component/videos";
import { Body } from "../Component/Body";



export default function Home() {
  return (
    <div
      style={{ backgroundColor: "RGB(33,33,33)", height: 2000, width: "100vw" }}
    >
      <Header />
      <Body />
     <div className="video-container"> <Videos/></div>
    </div>
  );
}
