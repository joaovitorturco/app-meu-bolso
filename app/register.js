import React, { useState } from 'react'
import { StyleSheet, View, Text, TouchableOpacity, Alert, KeyboardAvoidingView, Platform } from 'react-native'
import AppInput from '../src/components/AppInput'
import AppButton from '../src/components/AppButton'
import { router } from 'expo-router'


export default function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [loading, setLoading] = useState(false)

    return (
        <KeyboardAvoidingView style={styles.container}
            behavior={ Platform.OS === 'ios' ? 'padding': undefined }
        >
            <View>
                <Text style={styles.title}>
                    Criar Conta
                </Text>
                <Text style={styles.subtitle}>
                    Preencha os dados para começar 
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
                <AppInput
                    label='Confirmar senha'
                    securetextEntry
                    placeholder='Confirmar senha'
                    value={confirmPassword}
                    onChangeText={setConfirmPassword}
                />
                <AppButton
                    title='Entrar'
                    loading={loading}
                />
                <TouchableOpacity onPress={() => router.push('/')}>
                    <Text style={styles.link}>Voltar para Login</Text>
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