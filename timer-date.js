function htmlDomBaumToken() {
  const html = document.documentElement;
  const style = document.querySelector("style");
  if (!style) return;

  const fontFamilyVar = "--font-family";
  const robotoBold = getComputedStyle(html)
    .getPropertyValue(fontFamilyVar)
    .trim();
  const body = document.body;

  const params = new URLSearchParams(window.location.search);
  const timer = params.get("timer");
  const ms = params.get("ms");
  const display = params.get("display");

  function bodyInnerElementToken() {
    const divTimeDateEl = document.createElement("div");
    divTimeDateEl.classList.add("time-date-container");
    body.appendChild(divTimeDateEl);

    const divTimeEl = document.createElement("div");
    divTimeEl.classList.add("title-time-container");
    divTimeDateEl.appendChild(divTimeEl);

    const hOneTimeDateEl = document.createElement("h1");
    hOneTimeDateEl.innerText = "";
    hOneTimeDateEl.classList.add("title-time-txt");
    if (display === "block") {
      hOneTimeDateEl.classList.add("h-one-underline-class");
    } else if (display === "none") {
      hOneTimeDateEl.classList.remove("h-one-underline-class");
    } else {
      console.log("Keine angeben zum Unterstrich!");
    }
    divTimeEl.appendChild(hOneTimeDateEl);

    const divDateEl = document.createElement("div");
    divDateEl.classList.add("title-date-container");
    divTimeDateEl.appendChild(divDateEl);

    const hTwoDateEl = document.createElement("h2");
    hTwoDateEl.innerText = "";
    hTwoDateEl.classList.add("title-date-txt");
    if (display === "block") {
      hTwoDateEl.classList.add("h-tow-underline-class");
    } else if (display === "none") {
      hTwoDateEl.classList.remove("h-tow-underline-class");
    } else {
      console.log("Keine angeben zum Unterstrich!");
    }
    divDateEl.appendChild(hTwoDateEl);

    const timeNumber = 3;
    const msNumber = 1000;
    const interimResult = timeNumber * 2;
    const timeResult = interimResult * msNumber;

    const randomColorToken = () => {
      const randomColorOne = `#${Math.floor(Math.random() * 0xffffff)
        .toString(16)
        .padStart(6, "0")}`;
      const randomColorTwo = `#${Math.floor(Math.random() * 0xffffff)
        .toString(16)
        .padStart(6, "0")}`;

      hOneTimeDateEl.style.transition = `background ${timeNumber}s ease-in-out`;
      hTwoDateEl.style.transition = `background ${timeNumber}s ease-in-out`;

      Object.assign(hOneTimeDateEl.style, {
        background: `linear-gradient(45deg, ${randomColorOne}, ${randomColorTwo} 75%)`,
        backgroundSize: "100% 100%",
        WebkitBackgroundClip: "text",
        backgroundClip: "text",
        WebkitTextFillColor: "rgba(0, 0, 0, 0)",
        color: "rgba(0, 0, 0, 0)",
      });

      Object.assign(hTwoDateEl.style, {
        background: `linear-gradient(45deg, ${randomColorTwo} 25%, ${randomColorOne})`,
        backgroundSize: "100% 100%",
        WebkitBackgroundClip: "text",
        backgroundClip: "text",
        WebkitTextFillColor: "rgba(0, 0, 0, 0)",
        color: "rgba(0, 0, 0, 0)",
      });

      const styleCss = `
        .h-one-underline-class {
          position: relative;
          overflow: hidden;
          text-decoration: none;
          -webkit-user-select: none;
          user-select: none;
          cursor: default;
          pointer-events: none;
        } 

        .h-one-underline-class::after {
          content: "";
          background: linear-gradient(45deg, ${randomColorTwo}, ${randomColorOne});
          background-size: 100% 100%;
          position: absolute;
          left: 0;
          bottom: 0;
          width: 100%;
          height: 3px;
          transform: scale(1);
          transform-origin: center;
          transition: background ${timeNumber}s ease-in-out;
          -webkit-user-select: none;
          user-select: none;
          cursor: default;
          pointer-events: none;
        } 

        .h-tow-underline-class {
          position: relative;
          overflow: hidden;
          text-decoration: none;
          -webkit-user-select: none;
          user-select: none;
          cursor: default;
          pointer-events: none;
        } 

        .h-tow-underline-class::after {
          content: "";
          background: linear-gradient(45deg, ${randomColorOne}, ${randomColorTwo});
          background-size: 100% 100%;
          position: absolute;
          left: 0;
          bottom: 0;
          width: 100%;
          height: 3px;
          transform: scale(1);
          transform-origin: center;
          transition: background ${timeNumber}s ease-in-out;
          -webkit-user-select: none;
          user-select: none;
          cursor: default;
          pointer-events: none;
        }
      `;

      if (style && styleCss) style.innerHTML = styleCss;
    };
    randomColorToken();
    setInterval(randomColorToken, timeResult);

    function nowTimeDateToken() {
      const now = new Date();

      const hours = String(now.getHours()).padStart(2, "0");
      const minutes = String(now.getMinutes()).padStart(2, "0");
      const seconds = String(now.getSeconds()).padStart(2, "0");
      const milliseconds = String(now.getMilliseconds()).padStart(3, "0");

      const day = String(now.getDate()).padStart(2, "0");
      const month = String(now.getMonth() + 1).padStart(2, "0");
      const year = String(now.getFullYear()).padStart(4, "0");

      let timeText;
      if (ms === "block") {
        timeText = `${hours}:${minutes}:${seconds}:${milliseconds}`;
      } else if (ms === "none") {
        timeText = `${hours}:${minutes}:${seconds}`;
      }

      hOneTimeDateEl.textContent = timeText;
      hTwoDateEl.textContent = `${day}.${month}.${year}`;
    }
    nowTimeDateToken();

    if (ms === "block") {
      setInterval(nowTimeDateToken, 50);
    } else if (ms === "none") {
      setInterval(nowTimeDateToken, 1000);
    }

    function SecurityToken() {
      const elementArray = [
        style,
        body,
        divTimeDateEl,
        divTimeEl,
        hOneTimeDateEl,
        divDateEl,
        hTwoDateEl,
      ];

      const eventArray = ["copy", "dragstart", "keydown", "select"];

      const dataStyle = {
        fontFamily: robotoBold,
        WebkitUserSelect: "none",
        userSelect: "none",
        cursor: "default",
        pointerEvents: "none",
      };

      elementArray.forEach((element) => {
        if (!element) return;

        eventArray.forEach((event) => {
          if (!event) return;

          element.addEventListener(event, (e) => e.preventDefault());
        });

        if (element && robotoBold && dataStyle)
          Object.assign(element.style, dataStyle);
      });
    }
    SecurityToken();
  }

  if (timer === "on") {
    bodyInnerElementToken();

    console.log("Timer ist Aktiv!");
  } else if (timer === "off") {
    console.log("Timer ist nicht Aktiv!");
  } else {
    console.log("Leerer URL-Parameter!\nBitte eingeben!");
  }
}

document.addEventListener("DOMContentLoaded", htmlDomBaumToken);
