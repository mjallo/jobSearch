import React, { useState } from "react";
import QrReader from "qrcode-reader";

function QRReader() {
  const [result, setResult] = useState("");

  const handleScan = (data) => {
    if (data) {
      setResult(data);
    }
  };

  const handleError = (err) => {
    console.error(err);
  };

  return (
    <div>
      <QrReader onError={handleError} onScan={handleScan} />
      <p>{result}</p>
    </div>
  );
}

export default QRReader;
