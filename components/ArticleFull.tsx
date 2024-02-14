import { View, Text, ScrollView } from "react-native";
import React from "react";
import { format } from "date-fns";
import { FontAwesome6 } from "@expo/vector-icons";
import { Image } from "expo-image";

const ArticleFull = ({ article }: { article: Record<string, any> }) => {
  return (
    <ScrollView className="space-y-2">
      <Image
        className=" h-1/4 rounded-2xl"
        source={{ uri: article.urlToImage }}
      />
      <Text className="text-2xl font-bold">{article.title}</Text>
      <View className="flex-row  space-x-4 items-center pb-2 border-b border-gray-300">
        <View className="flex-row space-x-2 items-center">
          <View className="h-5 w-5 bg-gray-100 rounded-full" />
          <Text className="font-semibold">{article.author}</Text>
        </View>
        <View className="flex-row space-x-2 items-center ">
          <FontAwesome6 name="calendar" />
          <Text className="text-xs font-semibold">
            {format(article.publishedAt, "dd LLLL yyyy")}
          </Text>
        </View>
      </View>

      <Text>
        {article.content} Lorem ipsum, dolor sit amet consectetur adipisicing
        elit. Rem magnam accusantium adipisci assumenda aspernatur at
        voluptatibus culpa, totam officiis cupiditate! Nemo perspiciatis ducimus
        molestiae itaque. Quis quibusdam quia voluptate rem! lorem500
      </Text>
      <Text>
        {article.content} Lorem ipsum, dolor sit amet consectetur adipisicing
        elit. Rem magnam accusantium adipisci assumenda aspernatur at
        voluptatibus culpa, totam officiis cupiditate! Nemo perspiciatis ducimus
        molestiae itaque. Quis quibusdam quia voluptate rem! lorem500
      </Text>
      <Text>
        {article.content} Lorem ipsum, dolor sit amet consectetur adipisicing
        elit. Rem magnam accusantium adipisci assumenda aspernatur at
        voluptatibus culpa, totam officiis cupiditate! Nemo perspiciatis ducimus
        molestiae itaque. Quis quibusdam quia voluptate rem! lorem500
      </Text>
      <Text>
        {article.content} Lorem ipsum, dolor sit amet consectetur adipisicing
        elit. Rem magnam accusantium adipisci assumenda aspernatur at
        voluptatibus culpa, totam officiis cupiditate! Nemo perspiciatis ducimus
        molestiae itaque. Quis quibusdam quia voluptate rem! lorem500
      </Text>
      <Text>
        {article.content} Lorem ipsum, dolor sit amet consectetur adipisicing
        elit. Rem magnam accusantium adipisci assumenda aspernatur at
        voluptatibus culpa, totam officiis cupiditate! Nemo perspiciatis ducimus
        molestiae itaque. Quis quibusdam quia voluptate rem! lorem500
      </Text>
      <Text>
        {article.content} Lorem ipsum, dolor sit amet consectetur adipisicing
        elit. Rem magnam accusantium adipisci assumenda aspernatur at
        voluptatibus culpa, totam officiis cupiditate! Nemo perspiciatis ducimus
        molestiae itaque. Quis quibusdam quia voluptate rem! lorem500
      </Text>
    </ScrollView>
  );
};

export default ArticleFull;
