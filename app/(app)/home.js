import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import AppButton from "../../src/components/AppButton"
import BalanceCard from '../../src/components/BalanceCard'

export default function home(){
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View>
                    <Text>Meu Bolso</Text>
                    <Text>Resumo Financeiro</Text>
                </View>
                <TouchableOpacity>
                    <Text style={styles.profile}>Perfil</Text>
                </TouchableOpacity>
            </View>

            <BalanceCard balance={50000}/>
            
            <AppButton 
                title = "Gerar relatório PDF"
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8f9fa',
        padding: 24,
        paddingTop: 60
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 16
    },
    profile: {
        color: '#008f72',
        fontWeight: '700'
    }
})