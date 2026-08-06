import LOGO from "../../../public/logo.png";

interface AppLogoProps {
  width?: number | string;
  height?: number | string;
}

export default function AppLogo({
  width = 120,
  height = 120,
}: AppLogoProps) {
  return (
    <img
      src={LOGO}
      alt="MOVVA Logo"
      width={width}
      height={height}
      className="dark:brightness-0 invert"
    />
  );
}