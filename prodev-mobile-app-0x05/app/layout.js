"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = RootLayout;
var expo_router_1 = require("expo-router");
function RootLayout() {
    return (<expo_router_1.Stack screenOptions={{
            headerShown: false,
        }}>
      <expo_router_1.Stack.Screen name="/"/>
      <expo_router_1.Stack.Screen name="join"/>
      <expo_router_1.Stack.Screen name="signin"/>
    </expo_router_1.Stack>);
}
