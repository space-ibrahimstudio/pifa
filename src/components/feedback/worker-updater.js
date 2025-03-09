import React, { useState, useEffect, Fragment } from "react";
import * as serviceWorkerRegistration from "../../serviceWorkerRegistration";

const WorkerUpdater = () => {
  const [showReload, setShowReload] = useState(false);
  const [waitingWorker, setWaitingWorker] = useState(null);

  const onSWUpdate = (registration) => {
    setShowReload(true);
    setWaitingWorker(registration.waiting);
  };

  const reloadPage = () => {
    waitingWorker?.postMessage({ type: "SKIP_WAITING" });
    setShowReload(false);
    window.location.reload();
  };

  useEffect(() => {
    serviceWorkerRegistration.register({ onUpdate: onSWUpdate });
  }, []);

  return (
    <Fragment>
      {showReload && (
        <div style={{ position: "fixed", bottom: 20, right: 20, backgroundColor: "#333", color: "white", padding: "12px 20px", borderRadius: 4, boxShadow: "0 2px 10px rgba(0,0,0,0.2)", zIndex: 99999 }}>
          <p style={{ margin: "0 0 10px 0" }}>New version available!</p>
          <button onClick={reloadPage} style={{ backgroundColor: "#4CAF50", border: "none", color: "white", padding: "8px 16px", borderRadius: 4, cursor: "pointer" }}>
            Update Now
          </button>
        </div>
      )}
    </Fragment>
  );
};

export default WorkerUpdater;
