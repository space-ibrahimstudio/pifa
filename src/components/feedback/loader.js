import React, { useState, createContext, useContext } from "react";
import styles from "./styles/loader.module.css";

const LoadingContext = createContext();

export const LoadingScreen = () => {
  return (
    <section className={styles.loadingScreen}>
      <div className={styles.loadingContent}>
        <span className={`${styles.loadingCircle} ${styles.sp1}`}>
          <span className={`${styles.loadingCircle} ${styles.sp2}`}>
            <span className={`${styles.loadingCircle} ${styles.sp3}`}></span>
          </span>
        </span>
      </div>
    </section>
  );
};

export const LoadingProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);

  const setLoading = (status) => setIsLoading(status);

  return (
    <LoadingContext.Provider value={{ isLoading, setLoading }}>
      {children}
      {isLoading && <LoadingScreen />}
    </LoadingContext.Provider>
  );
};

const useLoading = () => useContext(LoadingContext);

export default useLoading;
