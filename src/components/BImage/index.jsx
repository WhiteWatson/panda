import { Image, View } from "@tarojs/components";

export default function Index(props) {
  const { src, mode } = props;

  return <Image className="w-full h-full" src={src || ""} mode={mode} />;
}
