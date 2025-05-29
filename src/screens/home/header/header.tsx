import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import styles from './styleHeader';

const Header: React.FC = () => {
  return (
    <View style={styles.header}>
      {/* Логотип */}
      <Text style={styles.logo}>linkor.uz</Text>

      {/* Меню */}
      <View style={styles.menu}>
        <TouchableOpacity><Text style={styles.menuItem}>Найти таланты</Text></TouchableOpacity>
        <TouchableOpacity><Text style={styles.menuItem}>Найти работу</Text></TouchableOpacity>
        <TouchableOpacity><Text style={styles.menuItem}>Почему Linkor</Text></TouchableOpacity>
        <TouchableOpacity><Text style={styles.menuItem}>Цены</Text></TouchableOpacity>
      </View>

      {/* Поиск + кнопки */}
      <View style={styles.rightSide}>
        <View style={styles.searchContainer}>
          <Ionicons name="search" size={18} color="#555" />
          <TextInput
            placeholder="Поиск"
            placeholderTextColor="#666"
            style={styles.searchInput}
          />
        </View>

        <TouchableOpacity>
          <Text style={styles.auth}>Войти</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.signupButton}>
          <Text style={styles.signupText}>Регистрация</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;

