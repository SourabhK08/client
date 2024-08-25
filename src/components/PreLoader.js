import React, { useState, useEffect } from "react";
import PulseLoader from "react-spinners/RingLoader";

const PreLoader = () => {
  const [loading, setLoading] = useState(true);

  return (
    <div className="App">
      <PulseLoader
        color={"rgb(0, 255, 255)"}
        loading={loading}
        size={50}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};

export default PreLoader;
