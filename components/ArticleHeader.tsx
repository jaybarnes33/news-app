import { View, Text, TouchableOpacity, Share, Alert } from "react-native";

import React from "react";
import { Entypo, FontAwesome6 } from "@expo/vector-icons";
import { useNavigation } from "expo-router";

const ArticleHeader = ({ article }: { article: Record<string, any> }) => {
  const navigation = useNavigation();
  const onShare = async () => {
    try {
      const result = await Share.share({
        message: `${article.source.name} | ${article.title}`,
        url: article.url,
      });
    } catch (error: any) {
      Alert.alert(`Couldn't share ${article.title}`);
    }
  };
  return (
    <View className="flex-row  justify-between my-6">
      <TouchableOpacity
        className="w-8 h-8 -mb-8 rounded-full"
        onPress={() => navigation.goBack()}
      >
        <FontAwesome6 name="arrow-left-long" size={20} />
      </TouchableOpacity>

      <TouchableOpacity onPress={onShare}>
        <Entypo name="share" size={20} />
      </TouchableOpacity>
    </View>
  );
};

export default ArticleHeader;
