import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";

const WelcomeScreen = ({ navigation }) => {
	return (
		<View style={{ flex: 1, alignItems: "center" }}>
			<Image
				source={require("../../assets/images/welcome.png")}
				style={{
					marginTop: 70,
					marginBottom: 30,
				}}
			/>

			<Text style={{ color: "#00ADB5", fontSize: 22, fontWeight: "bold" }}>
				Info Seputar Resep Makanan
			</Text>

			<Text
				style={{
					fontSize: 42,
					fontWeight: "bold",
					color: "#222831",
					marginTop: 44,
					marginBottom: 40,
					textAlign: "center",
				}}
			>
				Memasak Menjadi Lebih Mudah
			</Text>

			<TouchableOpacity
				onPress={() => navigation.navigate("RecipeList")}
				style={{
					backgroundColor: "#00ADB5",
					borderRadius: 18,
					paddingVertical: 18,
					width: "80%",
					alignItems: "center",
				}}
			>
				<Text style={{ fontSize: 18, color: "#EEEEEE", fontWeight: "700" }}>
					Pilih Resep
				</Text>
			</TouchableOpacity>
		</View>
	);
};

export default WelcomeScreen;

const styles = StyleSheet.create({});
