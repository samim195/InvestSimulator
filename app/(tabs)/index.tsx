import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';
import React from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const LoginRegisterScreen: React.FC = () => {
  const handleGuestLogin = () => {
    router.push('/invest');
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.headerWrapper}>
          {/* Header */}
          <Text style={styles.header}>Micro{'\n'}Investing{'\n'}Simulator</Text>
          <Text style={styles.subtext}>
            Practice micro-investing with{'\n'}real-time simulated data.
          </Text>
        </View>

        {/* Wallet Image */}
        <Image
          source={require('../../assets/images/wallet.png')}
          style={styles.walletImage}
          resizeMode="contain"
        />

        {/* Login Button */}
        <TouchableOpacity style={styles.loginWrapper}>
          <LinearGradient
            colors={['#5F27CD', '#00F0FF']}
            style={styles.loginButton}
          >
            <Text style={styles.loginText}>Log In</Text>
          </LinearGradient>
        </TouchableOpacity>

        {/* Guest Login */}
        <TouchableOpacity style={styles.guestButton} onPress={handleGuestLogin}>
          <Text style={styles.guestText}>Login as Guest</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default LoginRegisterScreen;



export const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#0D0D0D',
  },
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
  },
  headerWrapper: {
    alignSelf: 'center',
  },
  header: {
    fontSize: 36,
    fontWeight: '700',
    color: '#FFFFFF',
    marginBottom: 10,
    lineHeight: 42,
    textAlign: 'left',
  },
  subtext: {
    fontSize: 14,
    color: '#AAAAAA',
    marginBottom: 30,
    textAlign: 'left',
    lineHeight: 20,
  },
  walletImage: {
    width: 320,
    height: 240,
    alignSelf: 'center',
    marginBottom: 40,
  },
  loginWrapper: {
    borderRadius: 12,
    overflow: 'hidden',
    marginBottom: 20,
    width: '80%',
    alignSelf: 'center',
  },
  loginButton: {
    paddingVertical: 16,
    alignItems: 'center',
    borderRadius: 12,
  },
  loginText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  guestButton: {
    borderWidth: 1,
    borderColor: '#333',
    borderRadius: 12,
    paddingVertical: 14,
    alignItems: 'center',
    width: '80%',
    alignSelf: 'center',
  },
  guestText: {
    color: '#AAAAAA',
    fontSize: 16,
  },
});
