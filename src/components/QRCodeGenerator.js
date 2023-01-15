import React, { useState } from "react";
import QRCode from "qrcode.react";

function QRCodeGenerator() {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Do something with the value
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Input:
          <input
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Generate QR Code</button>
      </form>
      {value && <QRCode value={value} />}
    </div>
  );
}

export default QRCodeGenerator;
