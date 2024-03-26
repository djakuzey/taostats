import { IconProps } from "./utils";

const BoxArrowUp = ({ width, height, className }: IconProps) => (
  <svg className={className} width={width || 17} height={height || 17} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="12" height="12" fill="currentColor"/>
    <path
      d="M8.82845 8.12138L9.53555 7.41428L6.00005 3.87872L2.46448 7.41428L3.17158 8.12138L6.00005 5.29293L8.82845 8.12138Z"
      fill="black"/>
  </svg>
);

export default BoxArrowUp;
