function generateQRCode() {
  const url = document.getElementById("urlInput").value;
  if (!url) {
    alert("Please enter a URL");
    return;
  }
  const qrCodeContainer = document.getElementById("qrCode");
  qrCodeContainer.innerHTML = ""; // Clear previous QR code

  const img = document.createElement("img");
  img.src = `https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(
    url
  )}&size=150x150`;
  img.alt = "QR Code";
  qrCodeContainer.appendChild(img);
}
