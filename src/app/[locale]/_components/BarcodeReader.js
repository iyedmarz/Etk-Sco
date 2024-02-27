"use client";
import React, { useState } from "react";
import BarcodeReader from "react-barcode-reader";

const BarcodeReaderComponent = () => {
  const [scannedData, setScannedData] = useState("No Data");

  const handleScan = (data) => {
    setScannedData(data);
  };

  const handleError = (err) => {
    console.error(err);
  };

  return (
    <div>
      <BarcodeReader
        onError={handleError}
        onScan={handleScan}
        facingMode="environment"
      />
      <p>Scanned Data: {scannedData}</p>
    </div>
  );
};

export default BarcodeReaderComponent;
