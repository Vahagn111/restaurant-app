import React, { useState, useEffect } from "react";
import { Text, StyleSheet, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { useSelector,useDispatch } from "react-redux";
import CategoriesBlock from "../../screen/homBlock/CategoriesBlock";
import TopRestaurants from "../../components/TopRestaurants";
import VirtualizedView from "../../utils/VirtualizedView";
import SearchHeader from "../../components/headers/SearchHeader";
import { Restaurant } from "../../store/reducers/restaurant/action"

const HomeScreen = ({ navigation }) => {
  const { restaurants } = useSelector((state) => state.home);

  const goToRestaurantPage = (item) => {
    navigation.navigate("ChooseTable", {
      item,
    });
  
  };
    useEffect(() => {
      console.log("Only once!");
      dispatch(Restaurant())
    }, []);

const dispatch = useDispatch();

  return (
    <View>
      <LinearGradient colors={["black", "black"]}>
        <VirtualizedView>
          <SearchHeader />
          <Text style={styles.text}>Категории</Text>
          <CategoriesBlock />
          <Text style={styles.text}>Топ рестораны</Text>
          <TopRestaurants state={restaurants} />
        </VirtualizedView>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    marginTop: 30,
    fontSize: 16,
    color: "#FFFFFF",
    marginBottom: 20,
    marginLeft: 10,
  },
});

export default HomeScreen;
