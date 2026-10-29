import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import AppButton from "../../src/components/AppButton"
import BalanceCard from '../../src/components/BalanceCard'
import SummaryCard from '../../src/components/SummaryCard'
import FloatingButton from '../../src/components/FloatingButton'

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

            <View style={styles.row}>
                <SummaryCard
                    title = "Receitas"
                    value = {10000}
                    type = "receita"
                />

                <SummaryCard
                    title = "Receitas"
                    value = {5000}
                    type = "despesa"
                />
            </View>

            <Text style={styles.section}>Últimas transações</Text>

            <FloatingButton/>

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
    },
    row: {
        flexDirection: 'row',
        marginHorizontal: -4
    },
    section: {
        fontSize: 18,
        fontWeight: '800',
        marginVertical: 10
    }
})