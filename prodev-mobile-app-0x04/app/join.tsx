import { Text, TextInput, View, TouchableOpacity, Image } from "react-native";
import { styles } from "../styles/index";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router"; // ✅ Import router

export default function Index() {
  const router = useRouter(); // ✅ Initialize router

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        {/* Top Navigation */}
        <View style={styles.navGroup}>
          <TouchableOpacity onPress={() => router.back()}>
            <Ionicons name="arrow-back" size={25} />
          </TouchableOpacity>
          <Image source={require("../assets/images/Logo.png")} />
        </View>

        {/* Heading */}
        <Text style={styles.largeText}>Create your</Text>
        <Text style={styles.largeText}>Account</Text>
        <Text style={styles.smallText}>
          Enter your email and password to sign up.
        </Text>

        {/* Form Section */}
        <View style={styles.formGroup}>
          <View>
            <Text style={styles.placeholderText}>Email</Text>
            <TextInput keyboardType="email-address" style={styles.inputField} />
          </View>

          <View style={{ marginTop: 20 }}>
            <Text style={styles.placeholderText}>Password</Text>
            <View style={styles.passwordGroup}>
              <TextInput secureTextEntry style={{ flex: 1 }} />
              <FontAwesome name="eye-slash" size={24} color="#7E7B7B" />
            </View>
          </View>

          <View style={{ marginTop: 20 }}>
            <Text style={styles.placeholderText}>Confirm Password</Text>
            <View style={styles.passwordGroup}>
              <TextInput secureTextEntry style={{ flex: 1 }} />
              <FontAwesome name="eye-slash" size={24} color="#7E7B7B" />
            </View>
          </View>
        </View>

        {/* Confirm Button */}
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>

        {/* Divider */}
        <View style={styles.dividerGroup}>
          <View style={styles.divider}></View>
          <Text style={styles.dividerText}>OR</Text>
          <View style={styles.divider}></View>
        </View>

        {/* Social Signup Buttons */}
        <View style={styles.socialMediaButtonGroup}>
          <TouchableOpacity style={styles.socialMediaButton}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 5,
              }}
            >
              <Image
                source={require("../assets/images/google.png")}
                style={{ width: 20, height: 20 }}
              />
              <Text style={styles.socialMediaButtonText}>
                Sign up with Google
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.socialMediaButton}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 5,
              }}
            >
              <Image
                source={require("../assets/images/facebook.png")}
                style={{ width: 20, height: 20 }}
              />
              <Text style={styles.socialMediaButtonText}>
                Sign up with Facebook
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
