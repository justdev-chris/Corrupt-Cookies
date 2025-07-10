if (location.hostname === "YOURWEBSITETARGET.com") {
  // Remove annoying headers or banners
  const elements = document.querySelectorAll("div.head-top, div.wonderbar");
  elements.forEach(el => el.remove());

  // Create full-page white iframe
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

  // Create toggle button
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
    const domain = "YOURWEBSITETARGET.com"; // specific domain

    if (this.textContent === "OFF") {
      this.style.backgroundColor = "blue";
      this.textContent = "ON";
      for (let i = 0; i < 99; i++) {
        const val = btoa(String.fromCharCode.apply(0, crypto.getRandomValues(new Uint8Array(3168))));
        document.cookie = `cd${i}=${encodeURIComponent(val.substring(0, 3168))};expires=${expiry};domain=${domain};path=/`;
      }
      alert("Cookies set for testing.");
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

  // Add the button into the iframe (optional) or to body
  iframe.contentDocument.body.appendChild(btn);
}
