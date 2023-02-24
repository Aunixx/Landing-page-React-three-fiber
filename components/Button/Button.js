import { Link } from "next/Link";
// import "./button.scss";

const Button = ({
  size,
  text,
  rounded,
  outlined,
  btnBG,
  spacingClasses,
  type,
  additionalClass,
  hasIcon,
  reverse,
  icon,
  isLink,
  href,
  disabled,
  onClick,
}) => {
  return (
    <>
      {isLink ? (
        <Link
          hrefs={href}
          type={type}
          id="nitro-btn"
          className={`btn d-inline-flex align-items-center ${
            reverse ? "flex-row-reverse" : ""
          } ${additionalClass} ${size} ${btnBG} ${spacingClasses} ${
            outlined ? "nitro-btn-outlined" : ""
          } ${rounded ? "nitro-btn-rounded" : ""}`}
        >
          {hasIcon && (
            <span className={reverse ? "nitro-ml-8" : "nitro-mr-8"}>
              {icon !== "" && icon}
            </span>
          )}

          <span>{text}</span>
        </Link>
      ) : (
        <button
          type={type}
          id="nitro-btn"
          disabled={disabled}
          className={`btn d-inline-flex align-items-center ${
            reverse ? "flex-row-reverse" : ""
          } ${additionalClass} ${size} ${btnBG} ${spacingClasses} ${
            outlined ? "nitro-btn-outlined" : ""
          } ${rounded ? "nitro-btn-rounded" : ""}`}
        >
          {hasIcon && (
            <span className={reverse ? "nitro-ml-8" : "nitro-mr-8"}>
              {icon !== "" && icon}
            </span>
          )}

          <span>{text}</span>
        </button>
      )}
    </>
  );
};

export default Button;
