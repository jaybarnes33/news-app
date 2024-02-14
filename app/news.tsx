import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useRoute } from "@react-navigation/native";
import ArticleFull from "@/components/ArticleFull";
import { FontAwesome6 } from "@expo/vector-icons";
import ArticleHeader from "@/components/ArticleHeader";

const news = () => {
  const route = useRoute();
  const { params: article }: Record<string, any> = route.params!;

  return (
    <SafeAreaView className="bg-white flex-1 px-4">
      <ArticleHeader article={article} />
      <ArticleFull article={article} />
    </SafeAreaView>
  );
};

export default news;
