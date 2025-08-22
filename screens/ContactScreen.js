import { View, ScrollView } from "react-native";
import { List, Avatar } from "react-native-paper";
import contactsData from "../data";

const ContactScreen = () => (
  <ScrollView style={{ backgroundColor: "#fff", flex: 1 }}>
    <View>
      {contactsData.map((contact, idx) => (
        <List.Item
          key={contact.name + idx}
          title={contact.name}
          description={`${contact.title}, ${contact.company}`}
          left={() => (
            <Avatar.Image
              size={48}
              source={{ uri: contact.pic }}
              style={{ marginTop: 8, marginLeft: 8 }}
            />
          )}
          titleStyle={{ fontWeight: "bold", fontSize: 18 }}
          descriptionStyle={{ color: "#b0b0b0", fontSize: 15 }}
          style={{
            paddingVertical: 8,
            borderBottomWidth: 1,
            borderBottomColor: "#eee"
          }}
        />
      ))}
    </View>
  </ScrollView>
);

export default ContactScreen;
