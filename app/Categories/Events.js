import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { getEventsByCategory } from "../api/categories";
import SearchCard from "../Components/Search/SearchCard";
import { styles } from "./categoriesStyle";
import { FlatList } from "react-native";

function Events({ route, navigation }) {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const eventsByCategory = getEventsByCategory(route.params.title);
    setEvents(eventsByCategory);
  }, []);
  return (
    <View style={styles.categoryContainer}>
      <FlatList
        data={events}
        renderItem={({ item }) => (
          <SearchCard
            title={item.Title} // Changed from item.Adi
            image={item.SmallPoster} // Changed from item.KucukAfis
            date={item.EventStartDate} // Changed from item.EtkinlikBaslamaTarihi
            location={item.EventCenter} // Changed from item.EtkinlikMerkezi
            onPress={() => navigation.navigate("EventDetail", { id: item.Id })}
          />
        )}
        keyExtractor={(item) => item.Id}
        scrollEnabled={true}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

export default Events;
