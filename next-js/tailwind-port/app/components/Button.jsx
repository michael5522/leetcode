import Image from "next/image";

const Button = ({
  label,
  iconURL,
  backgroundColor,
  textColor,
  borderColor,
  fullWidth,
  linkURL
}) => {
  // console.log('button getting rendered')
  // console.log('inside button----', label)
  return (
    <a
    href={linkURL}
    target="_blank"
    rel="noreferrer"
    >
    <button
      className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none
      ${backgroundColor
          ? `${backgroundColor} ${textColor} ${borderColor}`
          : "bg-coral-red text-white border-coral-red"
        } rounded-full ${fullWidth && "w-full"}`}
    >
      {label}

      {iconURL && (
        <Image
          src={iconURL}
          alt="arrow right icon"
          className="ml-2 rounded-full bg-white w-5 h-5"
        />
      )}
    </button>
    </a>
  );
};

export default Button;
