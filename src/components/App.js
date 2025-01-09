import { useState } from "react";
import Content from "./Content";
import Image from "./Image";
import SharePopup from "./SharePopup";
import Footer from "./Footer";

function App() {
  const [isShow, setIsShow] = useState(false);
  return (
    <>
      <div className="app">
        <Image />
        <Content setIsShow={setIsShow} isShow={isShow} />
      </div>
      <SharePopup isShow={isShow} />
      <Footer />
    </>
  );
}

export default App;
