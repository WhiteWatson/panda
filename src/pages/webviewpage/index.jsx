import Taro, { useRouter } from "@tarojs/taro";
import { WebView, View } from "@tarojs/components";

export default function Index() {
  const router = useRouter();
  let webUrl = router.params.weburl;

  // Taro.useDidShow(() => {
  //   drawQrcode({
  //     width: 200,
  //     height: 200,
  //     canvasId: "myQrcode",
  //     text: webUrl, // 二维码的内容
  //   })
  //     .then(() => {
  //       console.log("二维码生成成功");
  //     })
  //     .catch((err) => {
  //       console.error("二维码生成失败:", err);
  //     });
  // });

  return <WebView style="width:200px;height:200px;"></WebView>;
  // return (
  //   <View className="flex ">
  //     <Canvas canvasId="myQrcode" style="width:200px;height:200px;" />
  //     <View className="text-center">长按二维码识别跳转</View>
  //   </View>
  // );
}
