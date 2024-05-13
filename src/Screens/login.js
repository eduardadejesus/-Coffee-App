import { NativeWindStyleSheet } from "nativewind";
 
NativeWindStyleSheet.setOutput({
  default: "native",
});

import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from "react-native";


export default function App() {
  return (
    <ScrollView>
      <View style={styles.Card}>
        <img
          style={styles.img}
          src="https://s3-alpha-sig.figma.com/img/d716/c0cd/5ad78bd61e69987924ba120ea4bba9c5?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=iL2tL2KurtkulWfcFKB-G-MN4R8qb9NQoJ~saVXAgMJNZIjB3MW9oFgY6-cQVkugUA-gV~O0FZR1wZcjXPF5cyESnM6Xs2Lpgt6La8ZV9hH8fEEfd7BTwgVjhVodf8PkOkhKotD9leJqOgZG65w1LHQ-4Legs~eTDYn53DQ85iJIVdWNSt2Rm5kWdWBOuzoGzDvhNVccG3FUuArGgaFhfMewSNVax4s~HtoWgXU6T2P4ae3byrJhRYK9nYynl~Zk7SpZOd76gl2UacHHyGAQcYh~vqBgUbfAt0Rt1VcktaFdr0AlM4a9viiGNbJx0aIsxLxRxb4v1EQWfIQVxv1nRg__"
        ></img>
      </View>

      <View style={styles.texto}>
        <Text className="flex-row">
          O Melhor <Text style={{ color: "#B98875" }}>Café</Text>
        </Text>
        <Text className="flex-row">na Cidade</Text>
      </View>

      <View className="flex flex-row">
        <View
          style={styles.botao}
          className="flex-row justify-center space-x-1000 mb-2 mt-5"
        >
          <TouchableOpacity className="rounded-full border-2 m-12 px-2 py-2 bg-yellow-900">
            <Text className="text-white text-lg justify-center items-center flex">
              Cadastrar
            </Text>
          </TouchableOpacity>
        </View>

        <View
          style={styles.botao}
          className="flex-row justify-center space-x-1000 mb-2 mt-5"
        >
          <TouchableOpacity className="rounded-full border-2 m-12 px-5 py-2 bg-yellow-900">
            <Text className="text-white text-lg justify-center items-center flex">
            Entrar
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};


const styles = StyleSheet.create({
    texto:{
      justifyContent: "center",
      alignItems: "center",
      margin: 15,
    },
  });
  

