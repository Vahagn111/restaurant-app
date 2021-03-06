import React from "react";
import { Text, View, StyleSheet } from "react-native";
import MainButton from "../../components/UI/buttons/MainButton";
import LogoSvg from "../../components/UI/logoSvg/LogoSvg";

const WelcomeScreen = ({ navigation }) => {
  const goLogin1 = () => {
    navigation.replace("login");
    console.log("ok");
  };

  const goRegister1 = () => {
    navigation.replace("register");
    console.log("ok");
  };
  return (
    <View style={{ backgroundColor: "#000000", paddingHorizontal: 40 }}>
      <View style={styles.logo} onPress={() => console.log("111")}>
        <LogoSvg />
      </View>
      <View>
        <Text style={styles.title}>
          Зарегистрируйтесь и найдите лучшие рестораны
        </Text>
        <Text style={styles.content}>
          Разнообразный и богатый опыт реализация намеченных плановых заданий в
          значительной степени обуславливает создание форм развития. Товарищи!
          укрепление и развитие структуры позволяет оценить значение модели
          развития.
        </Text>
      </View>

      <View style={{ marginBottom: 18 }}>
        <MainButton goTo={goLogin1} textBtn={"Войти"} />
      </View>
      <View style={{ marginBottom: 180 }}>
        <MainButton
          goTo={goRegister1}
          textBtn={"Зарегистрироваться"}
          // horizontal={40}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  logo: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 80,
  },
  title: {
    color: "#FFFFFF",
    fontSize: 22,
    marginBottom: 20,
    marginTop: 35,
  },
  content: {
    color: "#646464",
    fontSize: 18,
    marginBottom: 40,
  },
});

export default WelcomeScreen;
