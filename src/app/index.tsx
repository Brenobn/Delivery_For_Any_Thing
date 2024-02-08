import { useState } from "react";
import { View, FlatList, SectionList, Text } from "react-native"

import { CATEGORIES, MENU } from "@/utils/data/products"

import { Header } from "@/components/header"
import { CategoryButton } from "@/components/category-button";

export default function Home() {
  const [category, setCategory] = useState(CATEGORIES[0])

  function handleCategorySelect(selectedCadegory: string) {
    setCategory(selectedCadegory)
  }

  return(
    <View className="flex-1 pt-8">
      <Header title="Faça seu pedido" cartQuantityItems={5}/>

      <FlatList 
        data={CATEGORIES}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <CategoryButton 
          title={item} 
          isSelected={item === category} 
          onPress={() => handleCategorySelect(item)} />
        )}
        horizontal
        className="max-h-10 mt-5"
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ gap: 12, paddingHorizontal: 20 }}
      />

      <SectionList 
        sections={MENU}
        keyExtractor={(item) => item.id}
        stickySectionHeadersEnabled={false}
        renderItem={({ item }) => (
          <Text>{item.title}</Text>
        )}
        renderSectionHeader={({section: {title}}) => (
          <Text>{title}</Text>
        )}
      />

    </View>
  );
}