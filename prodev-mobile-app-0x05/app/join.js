"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Index;
var react_native_1 = require("react-native");
var index_1 = require("../styles/index");
var react_native_safe_area_context_1 = require("react-native-safe-area-context");
var vector_icons_1 = require("@expo/vector-icons");
var expo_router_1 = require("expo-router"); // ✅ Import router
function Index() {
    var router = (0, expo_router_1.useRouter)(); // ✅ Initialize router
    return (<react_native_safe_area_context_1.SafeAreaProvider>
      <react_native_safe_area_context_1.SafeAreaView style={index_1.styles.container}>
        {/* Top Navigation */}
        <react_native_1.View style={index_1.styles.navGroup}>
          <react_native_1.TouchableOpacity onPress={function () { return router.back(); }}>
            <vector_icons_1.Ionicons name="arrow-back" size={25}/>
          </react_native_1.TouchableOpacity>
          <react_native_1.Image source={require("../assets/images/Logo.png")}/>
        </react_native_1.View>

        {/* Heading */}
        <react_native_1.Text style={index_1.styles.largeText}>Create your</react_native_1.Text>
        <react_native_1.Text style={index_1.styles.largeText}>Account</react_native_1.Text>
        <react_native_1.Text style={index_1.styles.smallText}>
          Enter your email and password to sign up.
        </react_native_1.Text>

        {/* Form Section */}
        <react_native_1.View style={index_1.styles.formGroup}>
          <react_native_1.View>
            <react_native_1.Text style={index_1.styles.placeholderText}>Email</react_native_1.Text>
            <react_native_1.TextInput keyboardType="email-address" style={index_1.styles.inputField}/>
          </react_native_1.View>

          <react_native_1.View style={{ marginTop: 20 }}>
            <react_native_1.Text style={index_1.styles.placeholderText}>Password</react_native_1.Text>
            <react_native_1.View style={index_1.styles.passwordGroup}>
              <react_native_1.TextInput secureTextEntry style={{ flex: 1 }}/>
              <vector_icons_1.FontAwesome name="eye-slash" size={24} color="#7E7B7B"/>
            </react_native_1.View>
          </react_native_1.View>

          <react_native_1.View style={{ marginTop: 20 }}>
            <react_native_1.Text style={index_1.styles.placeholderText}>Confirm Password</react_native_1.Text>
            <react_native_1.View style={index_1.styles.passwordGroup}>
              <react_native_1.TextInput secureTextEntry style={{ flex: 1 }}/>
              <vector_icons_1.FontAwesome name="eye-slash" size={24} color="#7E7B7B"/>
            </react_native_1.View>
          </react_native_1.View>
        </react_native_1.View>

        {/* Confirm Button */}
        <react_native_1.TouchableOpacity style={index_1.styles.button}>
          <react_native_1.Text style={index_1.styles.buttonText}>Sign Up</react_native_1.Text>
        </react_native_1.TouchableOpacity>

        {/* Divider */}
        <react_native_1.View style={index_1.styles.dividerGroup}>
          <react_native_1.View style={index_1.styles.divider}></react_native_1.View>
          <react_native_1.Text style={index_1.styles.dividerText}>OR</react_native_1.Text>
          <react_native_1.View style={index_1.styles.divider}></react_native_1.View>
        </react_native_1.View>

        {/* Social Signup Buttons */}
        <react_native_1.View style={index_1.styles.socialMediaButtonGroup}>
          <react_native_1.TouchableOpacity style={index_1.styles.socialMediaButton}>
            <react_native_1.View style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 5,
        }}>
              <react_native_1.Image source={require("../assets/images/google.png")} style={{ width: 20, height: 20 }}/>
              <react_native_1.Text style={index_1.styles.socialMediaButtonText}>
                Sign up with Google
              </react_native_1.Text>
            </react_native_1.View>
          </react_native_1.TouchableOpacity>

          <react_native_1.TouchableOpacity style={index_1.styles.socialMediaButton}>
            <react_native_1.View style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 5,
        }}>
              <react_native_1.Image source={require("../assets/images/facebook.png")} style={{ width: 20, height: 20 }}/>
              <react_native_1.Text style={index_1.styles.socialMediaButtonText}>
                Sign up with Facebook
              </react_native_1.Text>
            </react_native_1.View>
          </react_native_1.TouchableOpacity>
        </react_native_1.View>
      </react_native_safe_area_context_1.SafeAreaView>
    </react_native_safe_area_context_1.SafeAreaProvider>);
}
