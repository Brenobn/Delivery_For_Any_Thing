import { TouchableOpacity, TouchableOpacityProps } from "react-native";

type ProductDataProps = {
  title: string
  description: string
  thumbnail: string
}

type ProductProps = TouchableOpacityProps & {
  data: ProductDataProps
}

export function Product({data, ...rest}: ProductProps) {
  return(
    <TouchableOpacity className="w-full flex-row items-center pb-4"
      {...rest}
    ></TouchableOpacity>
  )
}