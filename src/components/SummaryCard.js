import { Text, StyleSheet } from "react-native"
import AppCard from "./AppCard" 
import { formatCurrency } from "../utils/format"

export default function SummaryCard({title, value, type}) {
    const color = type === 'receita' ? '#2ed573' : '#ff4757'
    return (
        <AppCard style={styles.card}>
            <Text style={styles.title}>{title}</Text>
            <Text style={[styles.value, {color}]}>{formatCurrency(value)}</Text>
        </AppCard>
    )
}

const styles = StyleSheet.create({
    card: {
        flex: 1,
        marginHorizontal: 4
    },
    title: {
        color: '#7f8c8d',
        fontSize: 12
    },
    value: {
        fontWeight: '800',
        fontSize: 17,
        marginTop: 6
    }
})