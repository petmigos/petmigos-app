import React from "react";
import { StyleSheet, View } from "react-native";

export interface ModalProps {
  visible: boolean;
  children: any;
}

export const Modal: React.FC<ModalProps> = ({ visible, children }) => {
  return visible && <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    top: 0,
    left: 0,
    zIndex: 99,
    width: "100%",
    height: "100%",
    backgroundColor: "#00000022",
  },
});
