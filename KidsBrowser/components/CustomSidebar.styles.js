// Вставьте этот обновленный код в KidsBrowser/components/CustomSidebar.styles.js

import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
const isTablet = width >= 768;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF', // Белый фон для боковой панели
        paddingBottom: 20,
    },
    title: {
        fontFamily: 'Nunito_700Bold', // <-- ПРИМЕНЯЕМ ШРИФТ
        fontSize: isTablet ? 34 : 28,
        margin: 30,
        marginTop: 50,
        color: '#82c9e3', // Голубой цвет заголовка
        textAlign: 'left',
    },
    websiteItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: isTablet ? 15 : 12,
        paddingHorizontal: 30,
        justifyContent: 'space-between',
    },
    iconButton: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
        marginRight: 10,
    },
    websiteIcon: {
        width: isTablet ? 50 : 40,
        height: isTablet ? 50 : 40,
        marginRight: 20,
        borderRadius: 15,
    },
    websiteUrl: {
        fontFamily: 'Nunito_400Regular', // <-- ПРИМЕНЯЕМ ШРИФТ
        fontSize: isTablet ? 18 : 16,
        color: '#3d5a80', // Темно-синий для текста
        flex: 1,
    },
    removeButton: {
        fontSize: isTablet ? 24 : 20,
        opacity: 0.5, // Делаем крестик менее навязчивым
    },
    // Контейнер для формы добавления
    addWebsiteContainer: {
        padding: 30,
        paddingTop: 20,
        borderTopWidth: 1,
        borderTopColor: '#f0f0f0', // Очень светлый разделитель
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
        backgroundColor: '#f7f7f7', // Светло-серый фон для поля ввода
        borderWidth: 0, // Убираем рамку
        borderRadius: 15, // Сильное скругление
        paddingHorizontal: 20,
        paddingVertical: 15,
        fontSize: 16,
        color: '#3d5a80',
        marginBottom: 15,
    },
    addButton: {
        backgroundColor: '#52b64a', // Яркий зеленый, как на макете
        paddingVertical: 15,
        borderRadius: 15,
        alignItems: 'center',
        // Добавляем "3D" эффект с помощью тени
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
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