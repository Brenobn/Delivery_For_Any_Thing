import { TouchableOpacity, TouchableOpacityProps, Image, ImageProps } from "react-native";

type ProductDataProps = {
  title: string
  description: string
  thumbnail: ImageProps
}

type ProductProps = TouchableOpacityProps & {
  data: ProductDataProps
}

export function Product({data, ...rest}: ProductProps) {
  return(
    <TouchableOpacity className="w-full flex-row items-center pb-4"
      {...rest}
    >
      <Image source={data.thumbnail} className="w-20 h-20 rounded-md" />
    </TouchableOpacity>
  )
}