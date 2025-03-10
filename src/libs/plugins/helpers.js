import he from "he";

export const getCurrentDate = () => {
  const today = new Date();
  const year = today.getFullYear();
  let month = today.getMonth() + 1;
  let day = today.getDate();
  month = month < 10 ? "0" + month : month;
  day = day < 10 ? "0" + day : day;

  return `${year}-${month}-${day}`;
};

export const inputValidator = (formData, requiredFields) => {
  const errors = {};
  const checkRequired = (value, field, path) => {
    if (!value) errors[path.join(".")] = `The ${field} field is required`;
  };

  const validateField = (data, field, path = []) => {
    if (Array.isArray(data[field])) {
      data[field].forEach((item, index) => {
        Object.keys(item).forEach((key) => {
          if (requiredFields.includes(`${field}.${key}`)) checkRequired(item[key], key, [...path, field, index, key]);
        });
      });
    } else checkRequired(data[field], field, [...path, field]);
  };

  requiredFields.forEach((field) => {
    const [mainField, ...nestedField] = field.split(".");
    if (nestedField.length > 0) validateField(formData, mainField);
    else checkRequired(formData[mainField], mainField, [mainField]);
  });

  return errors;
};

export const useOptions = () => {
  const limitopt = [
    { value: 10, label: "Baris per Halaman: 10" },
    { value: 20, label: "Baris per Halaman: 20" },
    { value: 50, label: "Baris per Halaman: 50" },
    { value: 100, label: "Baris per Halaman: 100" },
    { value: 500, label: "Baris per Halaman: 500" },
  ];

  return { limitopt };
};

export const useInputSchema = () => {
  const inputSch = {
    name: "",
    phone: "",
    address: "",
    post_date: "",
    judul: "",
    penulis: "",
    catberita: "",
    catdaerah: "",
    thumbnail: "",
    tag: [{ tag: "" }],
    desc: "",
    image: "",
    highlight: "",
    syarat: "",
    info: "",
    tanggal: "",
    event_id: "",
    event_title: "",
    event_image: "",
    event_day: "",
    event_loc: "",
    event_info: "",
    event_cost: "",
    event_date: "",
    event_guide: "",
    event_coords: "",
    tag_suggest: "",
  };
  const errorSch = {
    name: "",
    phone: "",
    address: "",
    post_date: "",
    judul: "",
    penulis: "",
    catberita: "",
    catdaerah: "",
    thumbnail: "",
    tag: [{ tag: "" }],
    desc: "",
    image: "",
    highlight: "",
    syarat: "",
    info: "",
    tanggal: "",
    event_id: "",
    event_title: "",
    event_image: "",
    event_day: "",
    event_loc: "",
    event_info: "",
    event_cost: "",
    event_date: "",
    event_guide: "",
    event_coords: "",
    tag_suggest: "",
  };

  return { inputSch, errorSch };
};

export const useDocument = () => {
  const company = "Pifa Admin Panel";
  const short = "pifa-admp";
  const domain = process.env.REACT_APP_DOMAIN_MAIN;
  const exactdomain = `${domain}/dashboard`;

  return { company, short, domain, exactdomain };
};

export const formatToISO8601 = (dateTimeStr) => {
  const date = new Date(dateTimeStr);
  const isoString = date.toISOString();
  const [datePart, timePart] = isoString.split("T");
  const [timeWithoutMs, msPart] = timePart.split(".");

  return `${datePart}T${timeWithoutMs}+07:00`;
};

export const stripHtml = (html) => {
  const plainText = html.replace(/<[^>]+>/g, "");
  return he.decode(plainText);
};

export const toPathname = (text) => {
  let pathname = text.toLowerCase();
  pathname = pathname.replace(/[^a-z0-9\s]/g, "");
  pathname = pathname.replace(/\s+/g, "-");

  return pathname;
};

export const getNestedValue = (obj, path) => {
  return path.split(".").reduce((acc, part) => acc && acc[part], obj);
};

/**
 * openLink - A reusable function to open links with various options in a React application
 *
 * @param {Object} options - Configuration options
 * @param {string} options.url - The URL to open
 * @param {string} [options.target="_blank"] - Window target (_blank, _self, _parent, _top)
 * @param {boolean} [options.isNewTab=false] - Open in a new window instead of a tab
 * @param {string} [options.windowName=""] - Name for the new window
 * @param {Object} [options.windowFeatures] - Window features for the new window
 * @param {number} [options.windowFeatures.width] - Width of the new window
 * @param {number} [options.windowFeatures.height] - Height of the new window
 * @param {boolean} [options.windowFeatures.menubar] - Show menubar
 * @param {boolean} [options.windowFeatures.toolbar] - Show toolbar
 * @param {boolean} [options.windowFeatures.location] - Show location bar
 * @param {boolean} [options.windowFeatures.status] - Show status bar
 * @param {boolean} [options.windowFeatures.resizable] - Allow window resizing
 * @param {boolean} [options.windowFeatures.scrollbars] - Show scrollbars
 * @param {boolean} [options.preventNavigation=false] - Prevent navigation for testing
 * @param {Function} [options.onBeforeOpen] - Callback before opening the link
 * @param {Function} [options.onAfterOpen] - Callback after opening the link
 * @param {Function} [options.onError] - Callback if error occurs
 * @param {boolean} [options.confirmBeforeOpen=false] - Show confirmation before opening
 * @param {string} [options.confirmMessage="Are you sure you want to open this link?"] - Confirmation message
 * @param {Object} [options.analytics] - Analytics tracking options
 * @param {string} [options.analytics.category] - Category for analytics
 * @param {string} [options.analytics.action="open_link"] - Action for analytics
 * @param {string} [options.analytics.label] - Label for analytics
 *
 * @returns {Window|null} The window object or null if prevented/failed
 */
export const openLink = (options) => {
  const { url, target = "_blank", isNewTab = false, windowName = "", windowFeatures = {}, preventNavigation = false, onBeforeOpen, onAfterOpen, onError, confirmBeforeOpen = false, confirmMessage = "Are you sure you want to open this link?", analytics = null } = options;

  try {
    if (!url) throw new Error("URL is required");
    if (onBeforeOpen && typeof onBeforeOpen === "function") onBeforeOpen(url);
    if (confirmBeforeOpen) {
      if (!window.confirm(confirmMessage)) return null;
    }
    if (analytics && window.analytics) {
      try {
        window.analytics.track(analytics.action || "open_link", { category: analytics.category, label: analytics.label || url, url: url });
      } catch (error) {
        console.error("Analytics tracking failed:", error);
      }
    }
    if (preventNavigation) {
      console.log(`Navigation prevented to: ${url}`);
      if (onAfterOpen && typeof onAfterOpen === "function") onAfterOpen(null, url);
      return null;
    }

    let featuresString = "";

    if (isNewTab && windowFeatures) {
      const features = [];
      if (windowFeatures.width) features.push(`width=${windowFeatures.width}`);
      if (windowFeatures.height) features.push(`height=${windowFeatures.height}`);
      const boolFeatures = ["menubar", "toolbar", "location", "status", "resizable", "scrollbars"];
      boolFeatures.forEach((feature) => {
        if (windowFeatures[feature] !== undefined) features.push(`${feature}=${windowFeatures[feature] ? "yes" : "no"}`);
      });

      featuresString = features.join(",");
    }

    const openedWindow = window.open(url, isNewTab ? windowName || "_blank" : target, isNewTab ? featuresString : null);

    if (onAfterOpen && typeof onAfterOpen === "function") onAfterOpen(openedWindow, url);

    return openedWindow;
  } catch (error) {
    console.error("Error opening link:", error);
    if (onError && typeof onError === "function") onError(error);
    return null;
  }
};
