import React from "react";
import Unity, { UnityContext } from "react-unity-webgl";
import DashboardNav from "../main_pages/DashboardNav.js";
import { useNavigate} from "react-router-dom";

const unityContext = new UnityContext({
  loaderUrl: "build/PhishGame.loader.js",
  dataUrl: "build/PhishGame.data",
  frameworkUrl: "build/PhishGame.framework.js",
  codeUrl: "build/PhishGame.wasm",
});

function UnityGame() {
    return (
    <div>    
      <nav>
        <div class="wrapper">
          <DashboardNav/>
          <div class="main_content">
            <div class="info">
            <div className="text_content">
              <div><h1>Phishing Adventure</h1></div>
              <span style={{color: "red"}}>Head back to mark this course as "Complete"</span>
            <Unity unityContext={unityContext } 
              style={{
                height: "calc(100vh - 60px)",
                width: '100%',
                border: "2px solid #d3cccc",
                background: "grey",
              }}
              />
              <br></br>
            </div>
          </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default UnityGame;