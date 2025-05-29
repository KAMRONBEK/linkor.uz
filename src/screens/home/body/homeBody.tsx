import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import styles from './styleBody';

const HomeBody: React.FC = () => {
  return (
    <View style={styles.container}>
      {/* Левая часть - текст */}
      <View style={styles.left}>
        <Text style={styles.suiteTitle}>Linkor для компаний</Text>
        <Text style={styles.mainTitle}>
          Вот как <Text style={styles.highlight}>сильные компании</Text>{'\n'}
          <Text style={styles.highlight}>находят сильных специалистов</Text>
        </Text>
        <Text style={styles.description}>
          Получите доступ к топ-1% специалистов на Linkor.uz и полному набору инструментов для гибкого управления персоналом.
        </Text>

        {/* Преимущества */}
        <View style={styles.benefit}>
          <Ionicons name="person-outline" size={18} color="#CDEBDA" />
          <Text style={styles.benefitText}>Подбирайте экспертов под нужные задачи</Text>
        </View>
        <View style={styles.benefit}>
          <MaterialIcons name="work-outline" size={18} color="#CDEBDA" />
          <Text style={styles.benefitText}>Управляйте рабочим процессом: найм, оплата, контроль</Text>
        </View>
        <View style={styles.benefit}>
          <Ionicons name="headset-outline" size={18} color="#CDEBDA" />
          <Text style={styles.benefitText}>Партнёрская поддержка от команды Linkor</Text>
        </View>

        {/* Кнопка */}
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Узнать больше</Text>
        </TouchableOpacity>
      </View>

      {/* Правая часть - изображение */}
      <View style={styles.right}>
        <Image
          source={require('../assets/home-right.png')} // замените на свой путь
          style={styles.image}
          resizeMode="cover"
        />
      </View>
    </View>
  );
};

export default HomeBody;