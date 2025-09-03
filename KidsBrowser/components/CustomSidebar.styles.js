// Вставьте этот ПОЛНОСТЬЮ НОВЫЙ код в KidsBrowser/components/CustomSidebar.styles.js

import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
const isTablet = width >= 768;

export const sidebar_width_expanded = isTablet ? 320 : 280;
export const sidebar_width_collapsed = isTablet ? 100 : 80;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        paddingBottom: 20,
        alignItems: 'center', // Центрируем все по умолчанию для свернутого вида
    },
    // Кнопка для сворачивания/разворачивания
    toggleButton: {
        position: 'absolute',
        top: isTablet ? 30 : 20,
        right: 20,
        zIndex: 10,
    },
    toggleIcon: {
        width: 30,
        height: 30,
        opacity: 0.5,
    },
    title: {
        fontFamily: 'Nunito_700Bold',
        fontSize: isTablet ? 34 : 28,
        marginTop: isTablet ? 80 : 60, // Больше отступ сверху
        marginBottom: 30,
        color: '#82c9e3',
    },
    websiteItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 15,
        marginBottom: 10,
        borderRadius: 20,
        width: '100%',
    },
    websiteIcon: {
        width: isTablet ? 50 : 40,
        height: isTablet ? 50 : 40,
        borderRadius: 15,
    },
    // Текст ссылки, который будет показываться/скрываться
    websiteUrl: {
        fontFamily: 'Nunito_400Regular',
        fontSize: isTablet ? 18 : 16,
        color: '#3d5a80',
        marginLeft: 20, // Отступ от иконки
    },
    removeButton: {
        fontSize: isTablet ? 24 : 20,
        opacity: 0.3,
        marginLeft: 'auto', // Прижимаем крестик вправо
    },
    // --- Форма добавления ---
    addWebsiteContainer: {
        width: '100%',
        padding: isTablet ? 30 : 20,
        paddingTop: 20,
        borderTopWidth: 1,
        borderTopColor: '#f0f0f0',
        backgroundColor: '#FFFFFF',
    },
    addTitle: {
        fontFamily: 'Nunito_700Bold',
        fontSize: 16,
        color: '#3d5a80',
        marginBottom: 15,
    },
    input: {
        fontFamily: 'Nunito_400Regular',
        width: '100%',
        backgroundColor: '#f7f7f7',
        borderWidth: 0,
        borderRadius: 15,
        paddingHorizontal: 20,
        paddingVertical: 15,
        fontSize: 16,
        color: '#3d5a80',
        marginBottom: 15,
    },
    addButton: {
        backgroundColor: '#52b64a',
        paddingVertical: 15,
        borderRadius: 15,
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2, },
        shadowOpacity: 0.2,
        shadowRadius: 2.62,
        elevation: 4,
    },
    addButtonText: {
        fontFamily: 'Nunito_700Bold',
        color: 'white',
        fontSize: 18,
    },
});

export default styles;