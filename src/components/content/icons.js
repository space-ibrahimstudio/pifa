import React from "react";
import { toPathname } from "../../libs/plugins/helpers";
import styles from "./styles/icons.module.css";

const markers = process.env.REACT_APP_MARKERS;

const useIcons = () => {
  const Close = ({ size, color, onClick = () => {} }) => {
    const fill = color ? color : "currentColor";
    const iconstyle = { width: size, height: size };

    return (
      <div id={`${toPathname(markers)}-close-icon`} className={styles.isIcon} style={iconstyle} onClick={onClick}>
        <svg width="100%" height="100%" viewBox="0 0 26 25" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M20.1857 6.82904C20.6041 6.41062 20.6041 5.73223 20.1857 5.31381C19.7673 4.8954 19.0889 4.8954 18.6705 5.31381L12.9995 10.9848L7.32855 5.31381C6.91014 4.8954 6.23174 4.8954 5.81333 5.31381C5.39491 5.73223 5.39491 6.41062 5.81333 6.82904L11.4843 12.5L5.81333 18.171C5.39491 18.5894 5.39491 19.2678 5.81333 19.6862C6.23174 20.1046 6.91014 20.1046 7.32855 19.6862L12.9995 14.0152L18.6705 19.6862C19.0889 20.1046 19.7673 20.1046 20.1857 19.6862C20.6041 19.2678 20.6041 18.5894 20.1857 18.171L14.5147 12.5L20.1857 6.82904Z"
            fill={fill}
          />
        </svg>
      </div>
    );
  };
  const HChevron = ({ size, color, direction = "right" }) => {
    const fill = color ? color : "currentColor";
    const iconstyle = { width: size, height: size };
    let rotation = 0;

    switch (direction) {
      case "left":
        rotation = 180;
        break;
      case "up":
        rotation = -90;
        break;
      case "down":
        rotation = 90;
        break;
      case "right":
        rotation = 0;
        break;
      default:
        rotation = 0;
        break;
    }

    return (
      <div id={`${toPathname(markers)}-chevron-${direction}-icon`} className={styles.isIcon} style={iconstyle}>
        <svg width="100%" height="100%" viewBox="0 0 26 25" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ transform: `rotate(${rotation}deg)` }}>
          <path d="M9.02744 18.171C8.60902 18.5894 8.60902 19.2678 9.02744 19.6862C9.44586 20.1046 10.1242 20.1046 10.5427 19.6862L16.9712 13.2576C17.3897 12.8392 17.3897 12.1608 16.9712 11.7424L10.5427 5.31381C10.1242 4.8954 9.44586 4.8954 9.02744 5.31381C8.60902 5.73223 8.60902 6.41062 9.02744 6.82904L14.6984 12.5L9.02744 18.171Z" fill={fill} />
        </svg>
      </div>
    );
  };
  const Arrow = ({ size, color, direction = "right" }) => {
    const fill = color ? color : "currentColor";
    const iconstyle = { width: size, height: size };
    let rotation = 0;

    switch (direction) {
      case "left":
        rotation = 180;
        break;
      case "up":
        rotation = -90;
        break;
      case "down":
        rotation = 90;
        break;
      case "right":
        rotation = 0;
        break;
      default:
        rotation = 0;
        break;
    }

    return (
      <div id={`${toPathname(markers)}-arrow-${direction}-icon`} className={styles.isIcon} style={iconstyle}>
        <svg width="100%" height="100%" viewBox="0 0 43 43" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ transform: `rotate(${rotation}deg)` }}>
          <path
            d="M19.728 12.0614C20.4765 11.3129 21.6901 11.3129 22.4386 12.0614L30.0946 19.7174C30.1335 19.7557 30.1707 19.7956 30.2062 19.837C30.3248 19.9752 30.4204 20.1264 30.4932 20.2854C30.6046 20.5283 30.6667 20.7986 30.6667 21.0833C30.6667 21.3529 30.611 21.6094 30.5106 21.8421C30.4173 22.0588 30.2822 22.2617 30.1052 22.4386L22.4386 30.1053C21.6901 30.8538 20.4765 30.8538 19.728 30.1053C18.9795 29.3568 18.9795 28.1432 19.728 27.3947L24.1228 23H13.4167C12.3581 23 11.5 22.1418 11.5 21.0833C11.5 20.0247 12.3581 19.1666 13.4167 19.1666H24.1227L19.728 14.772C18.9795 14.0234 18.9795 12.8099 19.728 12.0614Z"
            fill={fill}
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6.17517 6.17517C10.1291 2.22127 15.4917 0 21.0833 0C26.675 0 32.0376 2.22127 35.9915 6.17517C39.9454 10.1291 42.1667 15.4917 42.1667 21.0833C42.1667 26.675 39.9454 32.0376 35.9915 35.9915C32.0376 39.9454 26.675 42.1667 21.0833 42.1667C15.4917 42.1667 10.1291 39.9454 6.17517 35.9915C2.22127 32.0376 0 26.675 0 21.0833C0 15.4917 2.22127 10.1291 6.17517 6.17517ZM21.0833 3.83333C16.5083 3.83333 12.1207 5.65074 8.88574 8.88574C5.65074 12.1207 3.83333 16.5083 3.83333 21.0833C3.83333 25.6583 5.65074 30.0459 8.88574 33.2809C12.1207 36.5159 16.5083 38.3333 21.0833 38.3333C25.6583 38.3333 30.0459 36.5159 33.2809 33.2809C36.5159 30.0459 38.3333 25.6583 38.3333 21.0833C38.3333 16.5083 36.5159 12.1207 33.2809 8.88574C30.0459 5.65074 25.6583 3.83333 21.0833 3.83333Z"
            fill={fill}
          />
        </svg>
      </div>
    );
  };
  const Trash = ({ size, color }) => {
    const fill = color ? color : "currentColor";
    const iconstyle = { width: size, height: size };

    return (
      <div id={`${toPathname(markers)}-trash-icon`} className={styles.isIcon} style={iconstyle}>
        <svg width="100%" height="100%" viewBox="0 0 39 43" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15.3333 17.25C16.3918 17.25 17.25 18.1081 17.25 19.1667V30.6667C17.25 31.7252 16.3918 32.5833 15.3333 32.5833C14.2747 32.5833 13.4166 31.7252 13.4166 30.6667V19.1667C13.4166 18.1081 14.2747 17.25 15.3333 17.25Z" fill={fill} />
          <path d="M24.9167 30.6667V19.1667C24.9167 18.1081 24.0586 17.25 23 17.25C21.9415 17.25 21.0834 18.1081 21.0834 19.1667V30.6667C21.0834 31.7252 21.9415 32.5833 23 32.5833C24.0586 32.5833 24.9167 31.7252 24.9167 30.6667Z" fill={fill} />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9.58337 7.66663V5.75C9.58337 4.225 10.1892 2.76247 11.2675 1.68414C12.3458 0.605802 13.8084 0 15.3334 0H23C24.525 0 25.9876 0.605802 27.0659 1.68414C28.1442 2.76247 28.75 4.225 28.75 5.75V7.66663H36.4167C37.4752 7.66663 38.3333 8.52475 38.3333 9.58329C38.3333 10.6418 37.4752 11.5 36.4167 11.5H34.5V36.4167C34.5 37.9417 33.8942 39.4042 32.8159 40.4825C31.7376 41.5609 30.275 42.1667 28.75 42.1667H9.58337C8.05838 42.1667 6.59584 41.5609 5.51751 40.4825C4.43918 39.4042 3.83337 37.9417 3.83337 36.4167V11.5H1.91667C0.858121 11.5 0 10.6418 0 9.58329C0 8.52475 0.858121 7.66663 1.91667 7.66663H9.58337ZM13.9781 4.39471C14.3375 4.03527 14.825 3.83333 15.3334 3.83333H23C23.5084 3.83333 23.9959 4.03527 24.3553 4.39471C24.7148 4.75416 24.9167 5.24167 24.9167 5.75V7.66663H13.4167V5.75C13.4167 5.24167 13.6186 4.75416 13.9781 4.39471ZM11.4875 11.5L11.5 11.5L11.5126 11.5H26.8208L26.8334 11.5L26.8459 11.5H30.6667V36.4167C30.6667 36.925 30.4648 37.4125 30.1053 37.772C29.7459 38.1314 29.2584 38.3333 28.75 38.3333H9.58337C9.07504 38.3333 8.58753 38.1314 8.22809 37.772C7.86864 37.4125 7.66671 36.925 7.66671 36.4167V11.5H11.4875Z"
            fill={fill}
          />
        </svg>
      </div>
    );
  };
  const Edit = ({ size, color }) => {
    const fill = color ? color : "currentColor";
    const iconstyle = { width: size, height: size };

    return (
      <div id={`${toPathname(markers)}-edit-icon`} className={styles.isIcon} style={iconstyle}>
        <svg width="100%" height="100%" viewBox="0 0 43 43" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M36.4167 0C34.83 0 33.3083 0.630301 32.1864 1.75224L13.978 19.9606C13.7324 20.2062 13.5581 20.514 13.4739 20.851L11.5572 28.5177C11.3939 29.1708 11.5853 29.8618 12.0614 30.3378C12.5374 30.8139 13.2284 31.0053 13.8815 30.842L21.5482 28.9253C21.8852 28.8411 22.193 28.6668 22.4386 28.4212L40.647 10.2128C41.7689 9.09088 42.3992 7.5692 42.3992 5.98253C42.3992 4.39586 41.7689 2.87418 40.647 1.75224C39.525 0.630301 38.0033 0 36.4167 0ZM34.897 4.46282C35.3 4.05977 35.8467 3.83333 36.4167 3.83333C36.9867 3.83333 37.5333 4.05977 37.9364 4.46282C38.3394 4.86587 38.5659 5.41253 38.5659 5.98253C38.5659 6.55253 38.3394 7.09919 37.9364 7.50224L20.1034 25.3352L16.0509 26.3483L17.064 22.2958L34.897 4.46282Z"
            fill={fill}
          />
          <path
            d="M5.75 4.06587C4.22501 4.06587 2.76247 4.67167 1.68414 5.75001C0.605801 6.82834 0 8.29088 0 9.81587V36.6492C0 38.1742 0.605802 39.6367 1.68414 40.7151C2.76247 41.7934 4.225 42.3992 5.75 42.3992H32.5833C34.1083 42.3992 35.5709 41.7934 36.6492 40.7151C37.7275 39.6367 38.3333 38.1742 38.3333 36.6492V23.2325C38.3333 22.174 37.4752 21.3159 36.4167 21.3159C35.3581 21.3159 34.5 22.174 34.5 23.2325V36.6492C34.5 37.1575 34.2981 37.645 33.9386 38.0045C33.5792 38.3639 33.0917 38.5659 32.5833 38.5659H5.75C5.24167 38.5659 4.75416 38.3639 4.39471 38.0045C4.03527 37.645 3.83333 37.1575 3.83333 36.6492V9.81587C3.83333 9.30754 4.03527 8.82003 4.39471 8.46058C4.75416 8.10114 5.24167 7.89921 5.75 7.89921H19.1667C20.2252 7.89921 21.0833 7.04108 21.0833 5.98254C21.0833 4.92399 20.2252 4.06587 19.1667 4.06587H5.75Z"
            fill={fill}
          />
        </svg>
      </div>
    );
  };
  const VGrid = ({ size, color }) => {
    const fill = color ? color : "currentColor";
    const iconstyle = { width: size, height: size };

    return (
      <div id={`${toPathname(markers)}-view-grid-icon`} className={styles.isIcon} style={iconstyle}>
        <svg width="100%" height="100%" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M1.91667 15.3333H13.4167C13.925 15.3333 14.4125 15.1314 14.772 14.772C15.1314 14.4125 15.3333 13.925 15.3333 13.4167V1.91667C15.3333 1.40834 15.1314 0.920823 14.772 0.561379C14.4125 0.201934 13.925 0 13.4167 0H1.91667C1.40834 0 0.920823 0.201934 0.561379 0.561379C0.201934 0.920823 0 1.40834 0 1.91667V13.4167C0 13.925 0.201934 14.4125 0.561379 14.772C0.920823 15.1314 1.40834 15.3333 1.91667 15.3333ZM21.0833 15.3333H32.5833C33.0917 15.3333 33.5792 15.1314 33.9386 14.772C34.2981 14.4125 34.5 13.925 34.5 13.4167V1.91667C34.5 1.40834 34.2981 0.920823 33.9386 0.561379C33.5792 0.201934 33.0917 0 32.5833 0H21.0833C20.575 0 20.0875 0.201934 19.728 0.561379C19.3686 0.920823 19.1667 1.40834 19.1667 1.91667V13.4167C19.1667 13.925 19.3686 14.4125 19.728 14.772C20.0875 15.1314 20.575 15.3333 21.0833 15.3333ZM1.91667 34.5H13.4167C13.925 34.5 14.4125 34.2981 14.772 33.9386C15.1314 33.5792 15.3333 33.0917 15.3333 32.5833V21.0833C15.3333 20.575 15.1314 20.0875 14.772 19.728C14.4125 19.3686 13.925 19.1667 13.4167 19.1667H1.91667C1.40834 19.1667 0.920823 19.3686 0.561379 19.728C0.201934 20.0875 0 20.575 0 21.0833V32.5833C0 33.0917 0.201934 33.5792 0.561379 33.9386C0.920823 34.2981 1.40834 34.5 1.91667 34.5ZM21.0833 34.5H32.5833C33.0917 34.5 33.5792 34.2981 33.9386 33.9386C34.2981 33.5792 34.5 33.0917 34.5 32.5833V21.0833C34.5 20.575 34.2981 20.0875 33.9386 19.728C33.5792 19.3686 33.0917 19.1667 32.5833 19.1667H21.0833C20.575 19.1667 20.0875 19.3686 19.728 19.728C19.3686 20.0875 19.1667 20.575 19.1667 21.0833V32.5833C19.1667 33.0917 19.3686 33.5792 19.728 33.9386C20.0875 34.2981 20.575 34.5 21.0833 34.5Z"
            fill={fill}
          />
        </svg>
      </div>
    );
  };
  const VList = ({ size, color }) => {
    const fill = color ? color : "currentColor";
    const iconstyle = { width: size, height: size };

    return (
      <div id={`${toPathname(markers)}-view-list-icon`} className={styles.isIcon} style={iconstyle}>
        <svg width="100%" height="100%" viewBox="0 0 31 23" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 0H3.83333V3.83333H0V0ZM0 9.58333H3.83333V13.4167H0V9.58333ZM0 19.1667H3.83333V23H0V19.1667ZM30.6667 3.83333V0H7.71075V3.83333H30.6667ZM7.66667 9.58333H30.6667V13.4167H7.66667V9.58333ZM7.66667 19.1667H30.6667V23H7.66667V19.1667Z" fill={fill} />
        </svg>
      </div>
    );
  };
  const VPlus = ({ size, color }) => {
    const fill = color ? color : "currentColor";
    const iconstyle = { width: size, height: size };

    return (
      <div id={`${toPathname(markers)}-plus-icon`} className={styles.isIcon} style={iconstyle}>
        <svg width="100%" height="100%" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.25 1.91667C17.25 0.858121 16.3919 0 15.3333 0C14.2748 0 13.4167 0.858121 13.4167 1.91667V13.4167H1.91667C0.858121 13.4167 0 14.2748 0 15.3333C0 16.3919 0.858121 17.25 1.91667 17.25H13.4167V28.75C13.4167 29.8085 14.2748 30.6667 15.3333 30.6667C16.3919 30.6667 17.25 29.8085 17.25 28.75V17.25H28.75C29.8085 17.25 30.6667 16.3919 30.6667 15.3333C30.6667 14.2748 29.8085 13.4167 28.75 13.4167H17.25V1.91667Z" fill={fill} />
        </svg>
      </div>
    );
  };

  return { Close, HChevron, Arrow, Trash, Edit, VGrid, VList, VPlus };
};

export default useIcons;
