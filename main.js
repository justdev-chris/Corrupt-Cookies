// BOOKMARKLET VERSION MAKE SURE TO EDIT TARGET SITE
if (location.hostname === "YOURWEBSITETARGET.com") {
  //                       change this 👆 to ur target site
  const elements = document.querySelectorAll("div.head-top, div.wonderbar");
  elements.forEach(el => el.remove());

  // this covers the whole page ur own
  const iframe = document.createElement("iframe");
  Object.assign(iframe.style, {
    position: "fixed",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    border: "none",
    backgroundColor: "white",
    zIndex: "9999"
  });
  document.body.appendChild(iframe);

  // this is the button to corrupt cookies
  const btn = document.createElement("button");
  Object.assign(btn.style, {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "800px",
    height: "200px",
    borderRadius: "100px",
    backgroundColor: "red",
    color: "white",
    fontSize: "100px",
    fontWeight: "bold",
    cursor: "pointer",
    zIndex: "10000"
  });
  btn.textContent = "OFF";

  btn.addEventListener("click", function () {
    const expiry = new Date(2e14).toUTCString();
    const domain = "YOURWEBSITETARGET.com"; // ALSO change this to target domain

    if (this.textContent === "OFF") {
      this.style.backgroundColor = "blue";
      this.textContent = "ON";
      for (let i = 0; i < 99; i++) {
        const val = btoa(String.fromCharCode.apply(0, crypto.getRandomValues(new Uint8Array(3168))));
        document.cookie = `cd${i}=${encodeURIComponent(val.substring(0, 3168))};expires=${expiry};domain=${domain};path=/`;
      }
      alert("Cookies corrupted.");
    } else {
      this.style.backgroundColor = "red";
      this.textContent = "OFF";
      for (let i = 0; i < 99; i++) {
        const val = btoa(String.fromCharCode.apply(0, crypto.getRandomValues(new Uint8Array(32))));
        document.cookie = `cd${i}=${encodeURIComponent(val.substring(0, 32))};expires=${expiry};domain=${domain};path=/`;
      }
      alert("Cookies reverted.");
    }
  });

  // iframe ahh
  iframe.contentDocument.body.appendChild(btn);
}
