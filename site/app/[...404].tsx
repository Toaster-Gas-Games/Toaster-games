// App.js
import React from "react";
import { StyleSheet, View, Text, Image, Pressable, Linking } from "react-native";

export default function App() {
  const handleOpenLink = (url) => Linking.openURL(url);

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: "https://sparxapi20.vercel.app/favicon.ico" }}
        style={styles.logo}
      />

      <Text style={styles.header}>Notice of Seizure</Text>

      <Text style={styles.subtitle}>
        This website has been seized by the Sparkly Anti-Skid team due to infringement of our rights.
      </Text>

      <Text style={styles.subtitle}>
        If you are a user of this site, don't worry. Please migrate to the following site to continue enjoying our collection:
      </Text>

      <Pressable onPress={() => handleOpenLink("https://sparxapi20.vercel.app")}>
        <Text style={styles.link}>https://sparxapi20.vercel.app</Text>
      </Pressable>

      <Text style={styles.notice}>
        © {new Date().getFullYear()} Sparkly Games. Keep shining.
      </Text>

      <Text style={[styles.notice, styles.codeNote]}>
        Your site was seized for being out of date and obsolete, clogging our backends further than we need right now, especially after our <Text style={{textDecorationLine: 'underline'}} onPress={() => {Linking.openURL('https://sparkly.statuspage.io/incidents/s9rdr063054x')}}>Vercel Takedown.</Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  logo: {
    width: 94,
    height: 94,
    marginBottom: 20,
  },
  header: {
    fontSize: 34,
    fontWeight: "bold",
    color: "#ff4d4d",
    marginBottom: 20,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 18,
    color: "#fff",
    textAlign: "center",
    marginBottom: 20,
    lineHeight: 24,
  },
  link: {
    fontSize: 18,
    color: "#4da6ff",
    textDecorationLine: "underline",
    textAlign: "center",
    marginBottom: 40,
  },
  notice: {
    fontSize: 14,
    color: "#aaa",
    textAlign: "center",
  },
  codeNote: {
    fontFamily: "monospace",
    marginTop: 30,
    color: "#ccc",
    opacity: 0.4,
    lineHeight: 20,
  },
});
