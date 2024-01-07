'use client';
import { useState } from "react";
import QRCode from "react-qr-code";

export default function QRCodeGenerator() {
  const [qrCode, setQrCode] = useState("");
  const [input, setInput] = useState("");

  function handleGenerateQrCode() {
    setQrCode(input);
    setInput("");
  }

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-8">QR Code Generator</h1>
        <div className="mb-4">
          <input
            onChange={(e) => setInput(e.target.value)}
            type="text"
            name="qr-code"
            value={input}
            placeholder="Enter your value here"
            className="p-2 border border-gray-300"
          />
          <button
            disabled={input && input.trim() !== "" ? false : true}
            onClick={handleGenerateQrCode}
            className="ml-2 px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
          >
            Generate
          </button>
        </div>
        <div>
          <QRCode id="qr-code-value" value={qrCode} size={400} bgColor="#fff" />
        </div>
      </div>
    </div>
  );
}