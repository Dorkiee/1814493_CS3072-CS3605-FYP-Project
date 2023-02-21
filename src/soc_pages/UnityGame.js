import React from "react";
import Unity, { UnityContext } from "react-unity-webgl";
import DashboardNav from "../main_pages/DashboardNav.js";

const unityContext = new UnityContext({
  loaderUrl: "build/UnityBuiltGames.loader.js",
  dataUrl: "build/UnityBuiltGames.data",
  frameworkUrl: "build/UnityBuiltGames.framework.js",
  codeUrl: "build/UnityBuiltGames.wasm",
});

function UnityGame() {
    return (
    <div>    
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow">
        <div class="wrapper">
          <DashboardNav/>
          <div class="main_content">
            <div class="info">
              <div><h1>Phishing Adventure</h1></div>
              <div><h4>Welcome to Phishing Adventure, the goal of this game is to collect as much points to pass based on </h4></div>
            <Unity unityContext={unityContext } 
              style={{
                height: 700,
                width: 1010,
                border: "2px solid black",
                background: "grey",
              }}
              />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default UnityGame;