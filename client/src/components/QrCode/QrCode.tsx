import React, { useState, useRef, ChangeEvent, FormEvent } from "react";
import { QRCodeCanvas } from "qrcode.react";
import './QrCode.css';

const QrCode: React.FC = () => {
  const [url, setUrl] = useState<string>("");
  const qrRef = useRef<HTMLDivElement>(null);

  const downloadQRCode = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (qrRef.current) {
      const canvas = qrRef.current.querySelector("canvas") as HTMLCanvasElement;
      const image = canvas.toDataURL("image/png");
      const anchor = document.createElement("a");
      anchor.href = image;
      anchor.download = `qr-code.png`;
      document.body.appendChild(anchor);
      anchor.click();
      document.body.removeChild(anchor);
    }
    setUrl("");
  };

  const qrCodeEncoder = (e: ChangeEvent<HTMLInputElement>) => {
    setUrl(e.target.value);
  };

  const qrcode = (
    <QRCodeCanvas
      id="qrCode"
      value={url}
      size={200}
      bgColor={"#f8f8f8"}
      level={"H"}
    />
  );

  return (
    <div className="qrcode__container">
      <div ref={qrRef}>{qrcode}</div>
      <div className="input__group">
        <form onSubmit={downloadQRCode}>
          <label>Enter URL</label>
          <input
            type="text"
            value={url}
            onChange={qrCodeEncoder}
            placeholder="https://eseosa.com"
          />
          <button type="submit" disabled={!url}>
            Download QR code
          </button>
        </form>
      </div>
    </div>
  );
};

export default QrCode;
