import React from "react";
import PropTypes from "prop-types";

const shapes = {
  icbCircleBorder: "rounded-radius20",
  icbRoundedBorder4: "rounded-radius4",
  RoundedBorder4: "rounded-radius4",
};
const variants = {
  icbOutlineGray200: "bg-white_A700 border border-gray_200 border-solid",
  icbFillBlue50: "bg-blue_50",
  icbFillBluegray900: "bg-bluegray_900",
  icbFillRed600: "bg-red_600",
  icbFillAmber100: "bg-amber_100",
  icbFillBlue800: "bg-blue_800",
  OutlineGray201: "border border-gray_201 border-solid",
  OutlineBlue800:
    "bg-indigo_51 border border-blue_800 border-solid text-blue_800",
};
const sizes = {
  smIcn: "p-[2px]",
  mdIcn: "lg:p-[3px] xl:p-[4px] p-[5px] 3xl:p-[6px]",
  lgIcn: "p-[10px] 3xl:p-[12px] lg:p-[7px] xl:p-[8px]",
  xlIcn: "lg:p-[10px] xl:p-[12px] p-[14px] 3xl:p-[16px]",
  "2xlIcn": "lg:p-[13px] xl:p-[15px] p-[17px] 3xl:p-[20px]",
  sm: "lg:p-[4px] xl:p-[5px] p-[6px] 3xl:p-[7px]",
  md: "lg:p-[12px] xl:p-[14px] p-[16px] 3xl:p-[19px]",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant,
  size,
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${shapes[shape] || ""} ${
        variants[variant] || ""
      } ${sizes[size] || ""} common-button `}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  shape: PropTypes.oneOf([
    "icbCircleBorder",
    "icbRoundedBorder4",
    "RoundedBorder4",
  ]),
  variant: PropTypes.oneOf([
    "icbOutlineGray200",
    "icbFillBlue50",
    "icbFillBluegray900",
    "icbFillRed600",
    "icbFillAmber100",
    "icbFillBlue800",
    "OutlineGray201",
    "OutlineBlue800",
  ]),
  size: PropTypes.oneOf([
    "smIcn",
    "mdIcn",
    "lgIcn",
    "xlIcn",
    "2xlIcn",
    "sm",
    "md",
  ]),
};
Button.defaultProps = {
  className: "",
  leftIcon: null,
  rightIcon: null,
  shape: "",
  variant: "",
  size: "",
};

export { Button };
