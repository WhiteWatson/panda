import Taro, { useRouter } from "@tarojs/taro";
import { WebView, View } from "@tarojs/components";

export default function Index() {
  const router = useRouter();
  let webUrl = decodeURIComponent(router.params.weburl);
  console.log("webUrl", webUrl);
  return (
    <>
      <WebView style="width:200px;height:200px;" src={webUrl}></WebView>
    </>
  );
}
