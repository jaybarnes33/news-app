import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { format } from "date-fns";
import { Image } from "expo-image";
import { useNavigation, useRouter } from "expo-router";
import {
  FlatList,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

const Article = ({ article }: { article: Record<string, any> }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      //@ts-ignore
      onPress={() => navigation.navigate("news", { params: article })}
      className="flex-row my-2  h-[100px]  items-center space-x-2 "
    >
      <Image className="w-2/5 h-full " source={{ uri: article?.urlToImage }} />
      <View className="space-y-1 flex-1">
        <Text>{article?.source?.name}</Text>
        <Text className="font-bold">{article?.title}</Text>
      </View>
    </TouchableOpacity>
  );
};
export default function TabOneScreen() {
  const navigation = useNavigation();
  const fetchNews = async () => {
    const { data } = await axios.get(
      "https://newsapi.org/v2/top-headlines?sources=techcrunch,joy-news&apiKey=b0f155ff3e164e3382053e53c0b14df9"
    );
    return data;
  };

  const { data: top, isLoading } = useQuery({
    queryKey: ["news"],
    queryFn: fetchNews,
  });

  const fetchAll = async () => {
    const { data } = await axios.get(
      "https://newsapi.org/v2/everything?sources=techcrunch,joy-news&apiKey=b0f155ff3e164e3382053e53c0b14df9"
    );
    return data;
  };

  const { data: everything, isLoading: isLoadingAll } = useQuery({
    queryKey: [`news-everything`],
    queryFn: fetchAll,
  });

  return (
    <SafeAreaView className="p-3 bg-white">
      <ScrollView>
        <View className="space-y-1">
          <Text className="text-2xl font-bold">Top Stories</Text>
          <Text className="text-neutral-400">
            {format(new Date(), "dd LLLL, yyyy")}
          </Text>
        </View>
        <ScrollView horizontal className="space-x-4 h-[290px] mt-4 mb-2">
          {top?.articles.map((_: Record<string, any>, i: number) => (
            <TouchableOpacity
              //@ts-ignore
              onPress={() => navigation.navigate("news", { params: _ })}
              className="relative w-[300px] h-full rounded-md p-2 "
            >
              <Image className="w-full h-40" source={{ uri: _?.urlToImage }} />
              <View>
                <Text className="text-base text-neutral-800 font-bold">
                  {_.title}
                </Text>

                <View className="flex-row items-center justify-between my-1">
                  <View className="flex-row items-center space-x-2">
                    <View className="h-6 w-6 bg-gray-300 rounded-full" />
                    <Text className="text-xs">{_.source.name}</Text>
                  </View>
                  <Text className="text-xs">
                    {format(_.publishedAt, "dd LLLL, yyyy")}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
        <Text className="font-bold text-lg">Trending Headlines</Text>
        <View>
          {everything?.articles && (
            <FlatList
              data={everything.articles}
              renderItem={(article) => (
                <Article key={article.item.title} article={article.item} />
              )}
            />
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
