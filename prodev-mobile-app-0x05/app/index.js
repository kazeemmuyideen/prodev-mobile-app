"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Index;
var react_native_1 = require("react-native");
var react_native_safe_area_context_1 = require("react-native-safe-area-context");
var expo_router_1 = require("expo-router");
function Index() {
    return (<react_native_safe_area_context_1.SafeAreaProvider>
      <react_native_safe_area_context_1.SafeAreaView style={{ flex: 1 }}>
        <react_native_1.ImageBackground source={require("../assets/images/hero-icon.png")} style={styles.background} resizeMode="cover">
          <react_native_1.View style={styles.container}>
            {/* Company Logo */}
            <react_native_1.View style={styles.companyLogo}>
              <react_native_1.Image source={require("../assets/images/Logo.png")}/>
            </react_native_1.View>

            {/* Text Group */}
            <react_native_1.View style={styles.textGroup}>
              <react_native_1.Text style={styles.textLarge}>
                Find your favorite place here
              </react_native_1.Text>
              <react_native_1.Text style={styles.textSmall}>The best prices for over 2 </react_native_1.Text>
              <react_native_1.Text style={styles.textSmall}>million properties worldwide</react_native_1.Text>
            </react_native_1.View>

            {/* Buttons + Navigation Prompt */}
            <react_native_1.View style={{ position: "absolute", bottom: 0, width: "100%" }}>
              <react_native_1.View style={styles.buttonGroup}>
                <expo_router_1.Link href="/join" asChild>
                  <react_native_1.TouchableOpacity style={styles.button}>
                    <react_native_1.Text style={__assign(__assign({}, styles.textSmall), { color: "black" })}>
                      Join here
                    </react_native_1.Text>
                  </react_native_1.TouchableOpacity>
                </expo_router_1.Link>

                <expo_router_1.Link href="/signin" asChild>
                  <react_native_1.TouchableOpacity style={styles.transparentButton}>
                    <react_native_1.Text style={styles.textSmall}>Sign In</react_native_1.Text>
                  </react_native_1.TouchableOpacity>
                </expo_router_1.Link>
              </react_native_1.View>
              <react_native_1.View style={{ alignItems: "center", paddingVertical: 20 }}>
                <react_native_1.Text style={{ color: "white" }}>Continue to home</react_native_1.Text>
              </react_native_1.View>
            </react_native_1.View>
          </react_native_1.View>
          <react_native_1.Text style={styles.textLarge}>Find your favorite place here</react_native_1.Text>
        </react_native_1.ImageBackground>
      </react_native_safe_area_context_1.SafeAreaView>
    </react_native_safe_area_context_1.SafeAreaProvider>);
}
var styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1,
    },
    background: {
        flex: 1,
        justifyContent: "center",
        width: "100%",
        height: react_native_1.Dimensions.get("window").height,
    },
    companyLogo: {
        width: "100%",
        alignItems: "center",
        padding: 20,
        marginBottom: 50,
    },
    textGroup: {
        alignItems: "center",
    },
    textLarge: {
        color: "white",
        fontWeight: "800",
        fontSize: 40,
        textAlign: "center",
        marginBottom: 12,
    },
    textSmall: {
        color: "white",
        fontSize: 18,
        fontWeight: "200",
        textAlign: "center",
    },
    transparentButton: {
        borderColor: "white",
        borderWidth: 2,
        borderRadius: 40,
        paddingVertical: 15,
        paddingHorizontal: 5,
        alignItems: "center",
        fontSize: 20,
        flex: 1,
    },
    button: {
        borderColor: "white",
        borderWidth: 2,
        borderRadius: 40,
        paddingVertical: 15,
        paddingHorizontal: 5,
        alignItems: "center",
        fontSize: 20,
        backgroundColor: "white",
        flex: 1,
    },
    buttonGroup: {
        flexDirection: "row",
        gap: 20,
        paddingHorizontal: 20,
    },
});
