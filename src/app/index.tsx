import { View, FlatList } from "react-native"

import { CATEGORIES } from "@/utils/data/products"

import { Header } from "@/components/header"
import { CategoryButton } from "@/components/category-button";

export default function Home() {
  let category = "Lanche do dia"

  function handleCategorySelect(selectedCadegory: string) {
    console.log(selectedCadegory)
    category = selectedCadegory
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
    </View>
  );
}