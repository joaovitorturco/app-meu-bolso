import React, { useState } from 'react'
import { router } from "expo-router";
import { StyleSheet, View, Text, TouchableOpacity, Alert, KeyboardAvoidingView, Platform } from 'react-native'
import AppInput from '../src/components/AppInput'
import AppButton from '../src/components/AppButton'
import { signIn } from '../src/services/authService'

export default function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)

    async function handleLogin() {
        if (!email.trim() || !password)
            return Alert.alert('Atenção', 'Informe seu email e senha.');
        try {
            setLoading(true);
            const { error } = await signIn(email.trim(), password);
            if (error) return alert('Erro no login', error.message);
            console.log(error)
            Alert.alert('Bem-vindo', 'Login realizado com sucesso.');
        } catch (error) {
            Alert.alert('Erro', error.message || 'Não foi possível entrar.');
        } finally {
            setLoading(false);
        }
    }
    

    return (
        <KeyboardAvoidingView style={styles.container}
            behavior={ Platform.OS === 'ios' ? 'padding': undefined }
        >
            <View>
                <Text style={styles.title}>
                    Meu Bolso
                </Text>
                <Text style={styles.subtitle}>
                    Controle suas finanças. 
                </Text>
                <AppInput 
                    label='Email' 
                    placeholder='seu@email.com'
                    autoCapitalize='none'
                    KeyboardType='email-address'
                    value={email}
                    onChangeText={setEmail}
                />
                <AppInput
                    label='Senha'
                    securetextEntry
                    placeholder='********'
                    value={password}
                    onChangeText={setPassword}
                />
                <AppButton
                    title='Entrar'
                    loading={loading}
                    onPress={handleLogin}
                />
                <TouchableOpacity onPress={() => router.push('/register')}>
                    <Text style={styles.link}>Criar nova conta</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 24,
        backgroundColor: '#f8f9fa'
    },
    title: {
        fontSize: 34,
        fontWeight: '900',
        color: '#2f3640',
        textAlign: 'center'
    },
    subtitle: {
        color: '#7f8c8d',
        textAlign: 'center',
        marginBottom: 32
    },
    link: {
        color: '#008f72',
        textAlign: 'center',
        marginTop: 20,
        fontWeight: '700'
    }
})