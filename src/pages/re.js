import React, { useEffect, useState } from "react";

/**
 * RePage - A reusable React component for redirecting to URLs with various options
 *
 * @param {Object} props
 * @param {string} props.to - The URL to redirect to
 * @param {boolean} [props.external=false] - Whether the link is external (uses window.location vs React routing)
 * @param {number} [props.delay=0] - Delay in milliseconds before redirecting
 * @param {boolean} [props.openInNewTab=false] - Open in a new tab/window
 * @param {boolean} [props.showCountdown=false] - Show a countdown before redirecting
 * @param {ReactNode} [props.loadingComponent] - Component to show while waiting for redirect
 * @param {Function} [props.onBeforeRedirect] - Callback before redirecting
 * @param {Function} [props.onRedirectComplete] - Callback after redirect is triggered
 * @param {boolean} [props.preventRedirect=false] - Prevent actual redirect (for testing)
 * @param {Object} [props.analytics] - Analytics tracking options
 * @param {Function} [props.navigate] - Navigation function (for React Router integration)
 * @param {ReactNode} [props.children] - Content to show (typically used with manual redirect)
 * @param {boolean} [props.manual=false] - Only redirect when triggered manually
 */
const RePage = ({ to, external = false, delay = 0, openInNewTab = false, showCountdown = false, loadingComponent = null, onBeforeRedirect = null, onRedirectComplete = null, preventRedirect = false, analytics = null, navigate = null, children = null, manual = false }) => {
  const [timeLeft, setTimeLeft] = useState(Math.ceil(delay / 1000));
  const [isRedirecting, setIsRedirecting] = useState(!manual);

  const performRedirect = () => {
    if (onBeforeRedirect && typeof onBeforeRedirect === "function") onBeforeRedirect(to);
    if (analytics && window.analytics) {
      try {
        window.analytics.track(analytics.action || "redirect", { category: analytics.category || "Navigation", label: analytics.label || to, url: to });
      } catch (error) {
        console.error("Analytics tracking failed:", error);
      }
    }
    if (preventRedirect) {
      console.log(`Redirect prevented to: ${to}`);
      if (onRedirectComplete && typeof onRedirectComplete === "function") onRedirectComplete(to);
      return;
    }
    if (external) {
      if (openInNewTab) window.open(to, "_blank", "noopener,noreferrer");
      else window.location.href = to;
    } else {
      if (navigate && typeof navigate === "function") navigate(to);
      else {
        if (openInNewTab) window.open(to, "_blank", "noopener,noreferrer");
        else window.location.href = to;
      }
    }
    if (onRedirectComplete && typeof onRedirectComplete === "function") onRedirectComplete(to);
  };

  const triggerRedirect = () => setIsRedirecting(true);

  useEffect(() => {
    if (!isRedirecting) return;
    if (delay === 0) {
      performRedirect();
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(timer);
          performRedirect();
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isRedirecting]);

  if (manual && children) {
    return React.Children.map(children, (child) =>
      React.cloneElement(child, {
        onClick: (e) => {
          if (child.props.onClick) child.props.onClick(e);
          triggerRedirect();
        },
      })
    );
  }
  if (delay > 0 && isRedirecting) {
    if (loadingComponent) return loadingComponent;
    if (showCountdown) {
      return (
        <div className="redirect-countdown">
          Redirecting to {to} in {timeLeft} seconds...
        </div>
      );
    }

    return <div className="redirect-message">Redirecting, please wait...</div>;
  }

  return null;
};

export default RePage;
