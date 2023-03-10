import React from "react";
import { StyleSheet, View, Image, TouchableHighlight } from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { AppText } from "../AppText";
import colors from "../../config/colors";
import { AvatarText } from "../AvatarText";

export const ListItem = ({
  avatar,
  image,
  title,
  subTitle,
  onPress,
  renderRightActions,
  IconComponent,
  showChevrons,
}) => {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
        <View style={styles.container}>
          <View style={styles.detailsContainer}>
            <AppText style={styles.title} numberOfLines={1}>
              {title}
            </AppText>
            {subTitle && (
              <AppText style={styles.subTitle} numberOfLines={2}>
                {subTitle}
              </AppText>
            )}
          </View>
          {IconComponent}
          {image && <Image style={styles.image} source={image} />}
          {avatar && <AvatarText text={avatar} />}

          {showChevrons && (
            <MaterialCommunityIcons
              name="chevron-left"
              size={25}
              color={colors.medium}
            />
          )}
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 15,
    backgroundColor: colors.white,
    alignItems: "center",
    borderWidth: "0.6px",
    borderColor: colors.border,
    borderRadius: "8px",
    justifyContent: "space-between",
  },
  detailsContainer: {
    marginLeft: 10,
    alignItems: "flex-start",
  },
  image: {
    height: 70,
    width: 70,
    borderRadius: 35,
  },
  subTitle: {
    color: colors.medium,
  },
  title: {
    fontWeight: "500",
  },
});
