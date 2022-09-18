import { View, Text, FlatList } from "react-native";

import OrderListItem from "../../components/OrderListItem";
import orders from "../../../assets/data/orders.json";
import styles from "../RestaurantDetailsScreen/styles";

const OrderScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        width: "100%",
        paddingTop: 50,
      }}
    >
      <FlatList
        data={orders}
        renderItem={({ item }) => <OrderListItem order={item} />}
      />
      <Text>OrderScreen</Text>
    </View>
  );
};

export default OrderScreen;
