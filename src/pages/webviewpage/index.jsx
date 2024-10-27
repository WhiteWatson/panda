import Taro, { useRouter } from "@tarojs/taro";
import { WebView, View } from "@tarojs/components";

export default function Index() {
  const router = useRouter();
  let webUrl = decodeURIComponent(router.params.weburl);
  console.log("webUrl", webUrl);
  return (
    <>
      <WebView style="width:200px;height:200px;" src={webUrl}></WebView>
      {/* <WebView
        style="width:200px;height:200px;"
        src={
          "https://80001004.uat-e.fadada.com/connect/free?appAccessTicket=9c794b1e456742e2a69205c976709584&resourceUrl=https%3A%2F%2F80001004.uat-e.fadada.com%2Fmanage%2Ftemplateui%2Fpreview%3FownerId%3D1774681618396012544%26id%3D1720938983435188962%26type%3D1"
        }
      ></WebView> */}
    </>
  );
}
