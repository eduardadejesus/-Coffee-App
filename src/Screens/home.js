import { NativeWindStyleSheet } from "nativewind";
 
NativeWindStyleSheet.setOutput({
    default: "native",
});
 

import React from "react";
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from "react-native";

export default function App() {
    return (
      <View className="">
      <View className="  flex justify-between items-center  ">
  <Text className=" mr-8  text-3xl text-amarelo" style={{ color: "#B98875" }}> Escolha o seu Café</Text>
  </View>
  
  <View className=" mt-10 ml-4  flex justify-start flex-row">
      <img width={50} src="https://s3-alpha-sig.figma.com/img/f026/2b51/6f19438d33fbbab38825dc0e816e5b30?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YVS-SW6~nDalLw9qIcgO8aJ6jl9ROp99kwVhMmBKk2qc8YcjU1mOUK7fWT2ypQIciyFABZm7XqfHn3XvGajmZE8SkgyQF6Z0t-IL0~V~bdWnl4bj6zjb5ZuX5BdToY6QddwTOqQnehIfHhxBZgzmTeuF3-W4jsZzScHZqhs2Ph99SmymUG2~DvUArJpsCilTS~UxAXW7ttvu9CrKSPFXExjiCx5z2j3j0UxvEKnd2yyt2~fXnJXGayKwq1j1AgPO-JkMXPUKGcgzzlSVWadJIWuVrW8NdGqcoTSOukhMxL1qI9e3Lhpz-F1iotpbBNqbVLHRBMPIcaTLcXoSXy2dtw__"></img>
      <Text className=" text-xl  mt-4 "> Espresso</Text>
  <View className="  ml-44 rotate-180">
      <img width={30}  height={30}  src="https://s3-alpha-sig.figma.com/img/00ab/09c8/f1fe4527919a4d04eb6a34bb65a26ef2?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WdyNnB4VT5qWNriLJkDRbU98KFsmPJNk-NuIJqPmf4HBfEk6bhiitn2AVBvCbZYp9B-RNkLEXwGnV3W~KONf8F-ThkH2nqVCaS3NqPMS69lnYhGOzE8CWQggNb-JYJ6w58xIANTVskF7~4iqVMcx0qi~KeF19z6Sm51w-3Z0hI7NZO5N4oZUP8jS6V~0QBFHBS9uKr~nqhg3Wi1xwY2hisZ~Si4lwzKbcMypKQsPi0LM-a3phS0p0FPY35RbbvLq74ncwqxNuPaYKL1R55H-yWQLnTrQkUkR6CuXHfuSf8rkwq9rvBEwa5YyZ0QmSTgzk5fJ1TN9rXX8ahNvpvvxDA__"></img>
  </View>
  </View>
  
  
  <View className=" mt-10 ml-4 flex justify-start flex-row">
      <img  width={40} src="https://s3-alpha-sig.figma.com/img/7322/9ba8/abb2188246833121fe337ef5a1ad3ceb?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BdhUVc9vtR4rFDecCZKInZQvSFd4h9uqEAUhVs3Lz8wV3vOay0LOOB6lzLyxyvc0wZhyMPsZF561~o9fbVIqB~WGNkTd8~p1VR4vPIrM-K6TSDS6eVwuOhDu6WHn-8fU~aUyJxny62rOM6aF0US1FWZCVTAcpI5Sp~trot9Dv4elnhav-P4Mm9kZJc-0ui6m4vug-cRk5bZ-m4svDRPZDC9etgVzes0C5peWzSgATVvCQnj39FjDbhVF5SeNVXgNzsTpl8XHm2qDTYFg4js5-nyOCQjk4FKO4UqRnYGtrB6jTPPiHHBUvMKOrM628pu2USEDku-F95O1piX9GfrtnQ__"></img>
      <Text className=" text-xl  mt-4 "> Cappuccino</Text>
  <View className="  ml-40 rotate-180">
  <img width={30}  height={30}  src="https://s3-alpha-sig.figma.com/img/00ab/09c8/f1fe4527919a4d04eb6a34bb65a26ef2?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WdyNnB4VT5qWNriLJkDRbU98KFsmPJNk-NuIJqPmf4HBfEk6bhiitn2AVBvCbZYp9B-RNkLEXwGnV3W~KONf8F-ThkH2nqVCaS3NqPMS69lnYhGOzE8CWQggNb-JYJ6w58xIANTVskF7~4iqVMcx0qi~KeF19z6Sm51w-3Z0hI7NZO5N4oZUP8jS6V~0QBFHBS9uKr~nqhg3Wi1xwY2hisZ~Si4lwzKbcMypKQsPi0LM-a3phS0p0FPY35RbbvLq74ncwqxNuPaYKL1R55H-yWQLnTrQkUkR6CuXHfuSf8rkwq9rvBEwa5YyZ0QmSTgzk5fJ1TN9rXX8ahNvpvvxDA__"></img>
  </View>
  </View>
  
  <View className=" mt-10 ml-4  flex justify-start flex-row">
      <img width={38} src="https://s3-alpha-sig.figma.com/img/ee90/2815/78acbfa051997d2a3c16b2b15fe7032e?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qw9N4DrgRpZYTsO9YnwdwbaSRD7VBrAQi-BLTKTEBMxUDABAaDTqo-w0zAMPvx8ua7l7H6n-zFw5wqYjeEvR7xluuuXe9SDlY439TbvQZBGcWghvxDQqn9U02Tw0NnvgxkN7Kdq4GJPdCz9C9kqDAxyLHTpKUJ6WVkrX~cdHwtYFn7kaYLFuSWiL4krF69dK2fJ89NKs5VCjKPza6nlSzPCU2uMk4MXCavvk8ZUbd7wVWS~ezeI0ANVTPCWcqzVWYQaMNW5DurMfd84k6ZN4p9KXZnTNBpXM60mS3PiFoIK7GcVNUD1Yi6EI-y35WUwLe1sVzKgQQGRYthrggQzIHw__"></img>
      <Text className=" text-xl  mt-4 "> Macchiato</Text>
  <View className=" flex-row ml-44 rotate-180">
  <img width={30}  height={30}  src="https://s3-alpha-sig.figma.com/img/00ab/09c8/f1fe4527919a4d04eb6a34bb65a26ef2?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WdyNnB4VT5qWNriLJkDRbU98KFsmPJNk-NuIJqPmf4HBfEk6bhiitn2AVBvCbZYp9B-RNkLEXwGnV3W~KONf8F-ThkH2nqVCaS3NqPMS69lnYhGOzE8CWQggNb-JYJ6w58xIANTVskF7~4iqVMcx0qi~KeF19z6Sm51w-3Z0hI7NZO5N4oZUP8jS6V~0QBFHBS9uKr~nqhg3Wi1xwY2hisZ~Si4lwzKbcMypKQsPi0LM-a3phS0p0FPY35RbbvLq74ncwqxNuPaYKL1R55H-yWQLnTrQkUkR6CuXHfuSf8rkwq9rvBEwa5YyZ0QmSTgzk5fJ1TN9rXX8ahNvpvvxDA__"></img>
  </View>
  </View>
  
  <View className=" mt-10 ml-4  flex justify-start flex-row">
      <img width={40} src="https://s3-alpha-sig.figma.com/img/5b2c/9fd0/e5bb93b8bb110272d43f04dae6b811f0?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bqsRFBeRgY3sL2ENuq73DXhHSK0blvnifV4yASxIORsllrtfXLhR71dVLG4wUHyKC8JJCnIXc2Xd~N7JhveZcK7PtkMlcHPOd~-Wx32WVgA8jf98X2MlCHn-Leb3ZPimxoEbvpWHXWwLzvz6KCOIfNcMzlUKUPlo3aON0K5WQkvk15BGaB2gkUNT36iwWTvFJpnT1OO~ilYxK0wJUKiXe8Lt1xnIw7qZQm0sQCX-Y4-elQlvb8q-sWLdKmZNZCbhuTT3ht0Jth8j5Js6FfYxB9MzJh29Z~m8WdrUJ2dWd7lRtbS61AzmvUHKwLok9G4a~FYVoZqttQdN1-CRPADZhA__"></img>
      <Text className=" text-xl mt-4 "> Mocha</Text>
  <View className="  ml-48 rotate-180">
  <img width={30}  height={30}  src="https://s3-alpha-sig.figma.com/img/00ab/09c8/f1fe4527919a4d04eb6a34bb65a26ef2?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WdyNnB4VT5qWNriLJkDRbU98KFsmPJNk-NuIJqPmf4HBfEk6bhiitn2AVBvCbZYp9B-RNkLEXwGnV3W~KONf8F-ThkH2nqVCaS3NqPMS69lnYhGOzE8CWQggNb-JYJ6w58xIANTVskF7~4iqVMcx0qi~KeF19z6Sm51w-3Z0hI7NZO5N4oZUP8jS6V~0QBFHBS9uKr~nqhg3Wi1xwY2hisZ~Si4lwzKbcMypKQsPi0LM-a3phS0p0FPY35RbbvLq74ncwqxNuPaYKL1R55H-yWQLnTrQkUkR6CuXHfuSf8rkwq9rvBEwa5YyZ0QmSTgzk5fJ1TN9rXX8ahNvpvvxDA__"></img>
  </View>
  </View>
  
  <View className=" mt-10 ml-4  flex justify-start flex-row">
      <img width={45} src="https://s3-alpha-sig.figma.com/img/6984/a298/9f8d7764bf750b8757169458bcd55f20?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Pejq7rsCh4eYap~t0A2eeHua4dted-9ctWyrUcZx39o6~IS8Sd1SBh8ndup56xmDxyU0wYBwQEwgmBMnUa53KW1r2pz7JV2hx9DhiRM4QGA1QnEDXrhYydwZfngzvIxZWZySbAC~Nwyp1awsQpKGexW6-Xws0ZqIyKXnBz7ZQvL4Z4YkOHiONdzd3ayb-qfWKCPlpH9MGDtCmtWdPaJ1aKPmdAQlrGD4egYPzHSF3HpI~3PbA~oinjYCbOzDLdWpVL4L~wFGk7mM9XuE0T6pur-yomv~SbpLUrnq0KkzmnSkCfUJjKQ61QuhEz1h31qX-6m5o8-~sktai7n0kzzEfQ__"></img>
      <Text className=" text-xl  mt-4 "> Latte</Text>
  <View className="  ml-52 rotate-180">
  <img width={30}  height={30}  src="https://s3-alpha-sig.figma.com/img/00ab/09c8/f1fe4527919a4d04eb6a34bb65a26ef2?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WdyNnB4VT5qWNriLJkDRbU98KFsmPJNk-NuIJqPmf4HBfEk6bhiitn2AVBvCbZYp9B-RNkLEXwGnV3W~KONf8F-ThkH2nqVCaS3NqPMS69lnYhGOzE8CWQggNb-JYJ6w58xIANTVskF7~4iqVMcx0qi~KeF19z6Sm51w-3Z0hI7NZO5N4oZUP8jS6V~0QBFHBS9uKr~nqhg3Wi1xwY2hisZ~Si4lwzKbcMypKQsPi0LM-a3phS0p0FPY35RbbvLq74ncwqxNuPaYKL1R55H-yWQLnTrQkUkR6CuXHfuSf8rkwq9rvBEwa5YyZ0QmSTgzk5fJ1TN9rXX8ahNvpvvxDA__"></img>
  </View>
  </View>
  </View>
    );
  }


