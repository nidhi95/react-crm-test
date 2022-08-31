import { ErrorMessage } from "../../components/ErrorMessage";
import React from "react";
import PropTypes from "prop-types";

const variants = {
  OutlineBluegray100: "bg-white_A700 border border-bluegray_100 border-solid",
  OutlineGray201: "border border-gray_201 border-solid",
  OutlineIndigo50: "bg-gray_100 border border-indigo_50 border-solid",
  OutlineBluegray200: "border border-bluegray_200 border-solid",
};
const shapes = {
  RoundedBorder4: "rounded-radius4",
  CustomBorder:
    "rounded-bl-[0] rounded-br-[4px] rounded-tl-[0] rounded-tr-[4px]",
};
const sizes = {
  sm: "lg:p-[5px] xl:p-[6px] p-[7px] 3xl:p-[8px]",
  md: "p-[10px] 3xl:p-[12px] lg:p-[7px] xl:p-[8px]",
  lg: "lg:p-[14px] xl:p-[16px] p-[18px] 3xl:p-[21px]",
};

const Input = React.forwardRef(
  (
    {
      wrapClassName = "",
      className = "",
      name,
      placeholder,
      type = "text",
      children,
      errors = [],
      label = "",
      prefix,
      suffix,
      shape,
      variant,
      size,
      ...restProps
    },
    ref
  ) => {
    return (
      <div
        className={`${wrapClassName} ${shapes[shape] || ""} ${
          variants[variant] || ""
        } ${sizes[size] || ""}`}
      >
        {!!label && label}
        {!!prefix && prefix}
        <input
          ref={ref}
          className={className}
          type={type}
          name={name}
          placeholder={placeholder}
          {...restProps}
        />
        {!!suffix && suffix}
        {!!errors && <ErrorMessage errors={errors} />}
      </div>
    );
  }
);

Input.propTypes = {
  wrapClassName: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  errors: PropTypes.array,
  label: PropTypes.string,
  prefix: PropTypes.node,
  suffix: PropTypes.node,
  shape: PropTypes.oneOf(["RoundedBorder4", "CustomBorder"]),
  variant: PropTypes.oneOf([
    "OutlineBluegray100",
    "OutlineGray201",
    "OutlineIndigo50",
    "OutlineBluegray200",
  ]),
  size: PropTypes.oneOf(["sm", "md", "lg"]),
};
Input.defaultProps = {
  wrapClassName: "",
  className: "",
  name: "",
  placeholder: "",
  type: "text",
  errors: [],
  label: "",
  prefix: null,
  suffix: null,
  shape: "",
  variant: "",
  size: "",
};

export { Input };
