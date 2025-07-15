import React, { useState } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
// import MapView from '../../components/MapView';


const stations = [
  'Станция Каракалпакстан',
  'Разъезд Кийиксай',
  'Разъезд Актобе',
  'Станция Бостан',
  'Разъезд Бердах',
  'Разъезд Аяпберген',
  'Станция Жаслык',
  'Разъезд Куаныш',
  'Станция Абадан',
  'Разъезд Ажинияз',
  'Станция Барса-келмес',
  'Станция Кырк-кыз',
  'Станция Кунходжа',
  'Разъезд Раушан',
  'Станция Кунград',
  'Станция Канлыкул',
  'Разъезд Балгалы',
  'Станция Шуманай',
  'Разъезд Хатеп',
  'Станция Ходжейли',
  'Станция Найманкул',
  'Станция Тахияташ- Пристань',
  'Станция Нукус',
  'Станция Тахыркуль',
  'Станция Кумшумкуль',
  'Станция Чимбай',
  'Станция Назархан',
  'Станция Куйбакли',
  'Станция Блок пост 180',
  'Станция Караузяк',
  'Станция Бадай',
  'Станция Беруний',
  'Станция Элликкала',
  'Станция Турткул',
  'Станция Мискин',
  'Станция Блок пост 2',
  'Станция Питняк',
  'Станция Истиклол',
  'Станция Хазарасп',
  'Станция Багат',
  'Станция Ханки',
  'Станция Ургенч',
  'Станция Шават',
  'Станция Обод',
  'Станция Хива',
  'Станция Кыпшак',
  'Станция Мангыт',
  'Станция Джумуртау',
  'Станция Гурлен',
];

// Station data with coordinates and journals
const stationData = {
  'Станция Каракалпакстан': {
    journals: [
      'Журнал Каракалпакстан-1',
      'Журнал Каракалпакстан-2', 
      'Журнал Каракалпакстан-3',
      'Журнал Каракалпакстан-4',
      'Журнал Каракалпакстан-5',
      'Журнал Каракалпакстан-6',
      'Журнал Каракалпакстан-7',
      'Журнал Каракалпакстан-8',
      'Журнал Каракалпакстан-9',
      'Журнал Каракалпакстан-10',
      'Журнал Каракалпакстан-11',
      'Журнал Каракалпакстан-12',
    ],
    coordinates: { lat: 43.8041, lng: 59.4458 },
    address: 'Кунград, Республика Каракалпакстан',
    phone: '+998 61 XXX XX XX',
    workingHours: '24/7',
    status: 'Онлайн'
  },
  'Разъезд Кийиксай': {
    journals: [
      'Журнал Кийиксай-1',
      'Журнал Кийиксай-2',
      'Журнал Кийиксай-3',
      'Журнал Кийиксай-4',
      'Журнал Кийиксай-5', 
      'Журнал Кийиксай-6', 
      'Журнал Кийиксай-7', 
      'Журнал Кийиксай-8', 
      'Журнал Кийиксай-9', 
      'Журнал Кийиксай-10', 
      'Журнал Кийиксай-11', 
      'Журнал Кийиксай-12', 
    ],
    coordinates: { lat: 43.8050, lng: 59.5000 },
    address: 'Кунград, Республика Каракалпакстан',
    phone: '+998 61 XXX XX XX',
    workingHours: '24/7',
    status: 'Онлайн'
  },
  'Разъезд Актобе': {
    journals: [
      'Журнал Актобе-1',
      'Журнал Актобе-2',
      'Журнал Актобе-3',
      'Журнал Актобе-4',
      'Журнал Актобе-5',
      'Журнал Актобе-6',
      'Журнал Актобе-7',
      'Журнал Актобе-8',
      'Журнал Актобе-9',
      'Журнал Актобе-10',
      'Журнал Актобе-11',
    ],
    coordinates: { lat: 43.14936, lng: 58.20968 },
    address: 'Кунград, Республика Каракалпакстан',
    phone: '+998 61 XXX XX XX',
    workingHours: '24/7',
    status: 'Онлайн'
  },
  'Станция Бостан': {
    journals: [
      'Журнал Бостан-1',
      'Журнал Бостан-2',
      'Журнал Бостан-3',
      'Журнал Бостан-4',
      'Журнал Бостан-5',
      'Журнал Бостан-6',
      'Журнал Бостан-7',
      'Журнал Бостан-8',
      'Журнал Бостан-9',
      'Журнал Бостан-10',
      'Журнал Бостан-11',
      'Журнал Бостан-12',
    ],
    coordinates: { lat: 40.533, lng: 72.133 },
    address: 'Кунград, Республика Каракалпакстан',
    phone: '+998 62 XXX XX XX',
    workingHours: '24/7',
    status: 'Онлайн'
  },
  'Разъезд Бердах': {
    journals: [
      'Журнал Бердах-1',
      'Журнал Бердах-2',
      'Журнал Бердах-3',
      'Журнал Бердах-4',
      'Журнал Бердах-5',
      'Журнал Бердах-6',
      'Журнал Бердах-7',
      'Журнал Бердах-8',
      'Журнал Бердах-9',
      'Журнал Бердах-10',
      'Журнал Бердах-11',
      'Журнал Бердах-12',
    ],
    coordinates: { lat: 42.5, lng: 58.0 },
    address: 'Кунград, Республика Каракалпакстан',
    phone: '+998 62 XXX XX XX',
    workingHours: '24/7',
    status: 'Онлайн'
  },
  'Разъезд Аяпберген': {
    journals: [
      'Журнал Аяпберген-1',
      'Журнал Аяпберген-2',
      'Журнал Аяпберген-3',
      'Журнал Аяпберген-4',
      'Журнал Аяпберген-5',
      'Журнал Аяпберген-6',
      'Журнал Аяпберген-7',
      'Журнал Аяпберген-8',
      'Журнал Аяпберген-9',
      'Журнал Аяпберген-10',
      'Журнал Аяпберген-11',
      'Журнал Аяпберген-12',
    ],
    coordinates: { lat: 43.05, lng: 58.85 },
    address: 'Кунград, Республика Каракалпакстан',
    phone: '+998 61 XXX XX XX',
    workingHours: '24/7',
    status: 'Онлайн'
  },
  'Станция Жаслык': {
    journals: [
      'Журнал Жаслык-1',
      'Журнал Жаслык-2',
      'Журнал Жаслык-3',
      'Журнал Жаслык-4',
      'Журнал Жаслык-5',
      'Журнал Жаслык-6',
      'Журнал Жаслык-7',
      'Журнал Жаслык-8',
      'Журнал Жаслык-9',
      'Журнал Жаслык-10',
      'Журнал Жаслык-11',
      'Журнал Жаслык-12',
    ],
    coordinates: { lat: 43.97163, lng: 57.48974 },
    address: 'Кунград, Республика Каракалпакстан',
    phone: '+998 61 XXX XX XX',
    workingHours: '24/7',
    status: 'Онлайн'
  },
  'Разъезд Куаныш': {
    journals: [
      'Журнал Куаныш-1',
      'Журнал Куаныш-2',
      'Журнал Куаныш-3',
      'Журнал Куаныш-4',
      'Журнал Куаныш-5',
      'Журнал Куаныш-6',
      'Журнал Куаныш-7',
      'Журнал Куаныш-8',
      'Журнал Куаныш-9',
      'Журнал Куаныш-10',
      'Журнал Куаныш-11',
      'Журнал Куаныш-12',
    ],
    coordinates: { lat: 43.1, lng: 58.9 },
    address: 'Кунград, Республика Каракалпакстан',
    phone: '+998 61 XXX XX XX',
    workingHours: '24/7',
    status: 'Онлайн'
  },
  'Станция Абадан': {
    journals: [
      'Журнал Абадан-1',
      'Журнал Абадан-2',
      'Журнал Абадан-3',
      'Журнал Абадан-4',
      'Журнал Абадан-5',
      'Журнал Абадан-6',
      'Журнал Абадан-7',
      'Журнал Абадан-8',
      'Журнал Абадан-9',
      'Журнал Абадан-10',
      'Журнал Абадан-11',
      'Журнал Абадан-12',
    ],
    coordinates: { lat: 42.68928, lng: 59.47035 },
    address: 'Кунград, Республика Каракалпакстан',
    phone: '+998 61 XXX XX XX',
    workingHours: '24/7',
    status: 'Онлайн'
  },
  'Разъезд Ажинияз': {
    journals: [
      'Журнал Ажинияз-1',
      'Журнал Ажинияз-2',
      'Журнал Ажинияз-3',
      'Журнал Ажинияз-4',
      'Журнал Ажинияз-5',
      'Журнал Ажинияз-6',
      'Журнал Ажинияз-7',
      'Журнал Ажинияз-8',
      'Журнал Ажинияз-9',
      'Журнал Ажинияз-10',
      'Журнал Ажинияз-11',
      'Журнал Ажинияз-12',
    ],
    coordinates: { lat: 43.522125, lng: 57.9606015 },
    address: 'Кунград, Республика Каракалпакстан',
    phone: '+998 61 XXX XX XX',
    workingHours: '24/7',
    status: 'Онлайн'
  },
  'Станция Барса-келмес': {
    journals: [
      'Журнал Барса-келмес-1',
      'Журнал Барса-келмес-2',
      'Журнал Барса-келмес-3',
      'Журнал Барса-келмес-4',
      'Журнал Барса-келмес-5',
      'Журнал Барса-келмес-6',
      'Журнал Барса-келмес-7',
      'Журнал Барса-келмес-8',
      'Журнал Барса-келмес-9',
      'Журнал Барса-келмес-10',
      'Журнал Барса-келмес-11',
      'Журнал Барса-келмес-12',
    ],
    coordinates: { lat: 43.348145, lng: 58.083279 },
    address: 'Кунград, Республика Каракалпакстан',
    phone: '+998 61 XXX XX XX',
    workingHours: '24/7',
    status: 'Онлайн'
  },
  'Станция Кырккыз': {
    journals: [
      'Журнал Кырккыз-1',
      'Журнал Кырккыз-2',
      'Журнал Кырккыз-3',
      'Журнал Кырккыз-4',
      'Журнал Кырккыз-5',
      'Журнал Кырккыз-6',
      'Журнал Кырккыз-7',
      'Журнал Кырккыз-8',
      'Журнал Кырккыз-9',
      'Журнал Кырккыз-10',
      'Журнал Кырккыз-11',
      'Журнал Кырккыз-12',
    ],
    coordinates: { lat: 43.150188, lng: 58.206841 },
    address: 'Кунград, Республика Каракалпакстан',
    phone: '+998 61 XXX XX XX',
    workingHours: '24/7',
    status: 'Онлайн'
  },
  'Станция Кунходжа': {
    journals: [
      'Журнал Кунходжа-1',
      'Журнал Кунходжа-2',
      'Журнал Кунходжа-3',
      'Журнал Кунходжа-4',
      'Журнал Кунходжа-5',
      'Журнал Кунходжа-6',
      'Журнал Кунходжа-7',
      'Журнал Кунходжа-8',
      'Журнал Кунходжа-9',
      'Журнал Кунходжа-10',
      'Журнал Кунходжа-11',
      'Журнал Кунходжа-12',
    ],
    coordinates: { lat: 43.109859, lng: 58.3481701 },
    address: 'Кунград, Республика Каракалпакстан',
    phone: '+998 61 XXX XX XX',
    workingHours: '24/7',
    status: 'Онлайн'
  },
  'Разъезд Раушан': {
    journals: [
      'Журнал Раушан-1',
      'Журнал Раушан-2',
      'Журнал Раушан-3',
      'Журнал Раушан-4',
      'Журнал Раушан-5',
      'Журнал Раушан-6',
      'Журнал Раушан-7',
      'Журнал Раушан-8',
      'Журнал Раушан-9',
      'Журнал Раушан-10',
      'Журнал Раушан-11',
      'Журнал Раушан-12',
    ],
    coordinates: { lat: 43.117512, lng: 58.6290994 },
    address: 'Кунград, Республика Каракалпакстан',
    phone: '+998 61 XXX XX XX',
    workingHours: '24/7',
    status: 'Онлайн'
  },
  'Станция Кунград': {
    journals: [
      'Журнал Кунград-1',
      'Журнал Кунград-2',
      'Журнал Кунград-3',
      'Журнал Кунград-4',
      'Журнал Кунград-5',
      'Журнал Кунград-6',
      'Журнал Кунград-7',
      'Журнал Кунград-8',
      'Журнал Кунград-9',
      'Журнал Кунград-10',
      'Журнал Кунград-11',
      'Журнал Кунград-12',
    ],
    coordinates: { lat: 43.04077, lng: 58.84135 },
    address: 'Кунград, Республика Каракалпакстан',
    phone: '+998 61 XXX XX XX',
    workingHours: '24/7',
    status: 'Онлайн'
  },
  'Станция Канлыкуль': {
    journals: [
      'Журнал Канлыкуль-1',
      'Журнал Канлыкуль-2',
      'Журнал Канлыкуль-3',
      'Журнал Канлыкуль-4',
      'Журнал Канлыкуль-5',
      'Журнал Канлыкуль-6',
      'Журнал Канлыкуль-7',
      'Журнал Канлыкуль-8',
      'Журнал Канлыкуль-9',
      'Журнал Канлыкуль-10',
      'Журнал Канлыкуль-11',
      'Журнал Канлыкуль-12',
    ],
    coordinates: { lat: 42.87509, lng: 58.96719 },
    address: 'Канлыкуль, Республика Каракалпакстан',
    phone: '+998 61 XXX XX XX',
    workingHours: '24/7',
    status: 'Онлайн'
  },
  'Разъезд Балгалы': {
    journals: [
      'Журнал Балгалы-1',
      'Журнал Балгалы-2',
      'Журнал Балгалы-3',
      'Журнал Балгалы-4',
      'Журнал Балгалы-5',
      'Журнал Балгалы-6',
      'Журнал Балгалы-7',
      'Журнал Балгалы-8',
      'Журнал Балгалы-9',
      'Журнал Балгалы-10',
      'Журнал Балгалы-11',
      'Журнал Балгалы-12',
    ],
    coordinates: { lat: 39.98450, lng: 65.91881 },
    address: 'Канлыкуль, Республика Каракалпакстан',
    phone: '+998 61 XXX XX XX',
    workingHours: '24/7',
    status: 'Онлайн'
  },
  'Станция Шуманай': {
    journals: [
      'Журнал Шуманай-1',
      'Журнал Шуманай-2',
      'Журнал Шуманай-3',
      'Журнал Шуманай-4',
      'Журнал Шуманай-5',
      'Журнал Шуманай-6',
      'Журнал Шуманай-7',
      'Журнал Шуманай-8',
      'Журнал Шуманай-9',
      'Журнал Шуманай-10',
      'Журнал Шуманай-11',
      'Журнал Шуманай-12',
    ],
    coordinates: { lat: 42.607227, lng: 59.199909 },
    address: 'Шуманай, Республика Каракалпакстан',
    phone: '+998 61 XXX XX XX',
    workingHours: '24/7',
    status: 'Онлайн'
  },
  'Разъезд Хатеп': {
    journals: [
      'Журнал Хатеп-1',
      'Журнал Хатеп-2',
      'Журнал Хатеп-3',
      'Журнал Хатеп-4',
      'Журнал Хатеп-5',
      'Журнал Хатеп-6',
      'Журнал Хатеп-7',
      'Журнал Хатеп-8',
      'Журнал Хатеп-9',
      'Журнал Хатеп-10',
      'Журнал Хатеп-11',
      'Журнал Хатеп-12',
    ],
    coordinates: { lat: 42.499451, lng: 59.3210609 },
    address: 'Ходжейли, Республика Каракалпакстан',
    phone: '+998 61 XXX XX XX',
    workingHours: '24/7',
    status: 'Онлайн'
  },
  'Станция Ходжейли': {
    journals: [
      'Журнал Ходжейли-1',
      'Журнал Ходжейли-2',
      'Журнал Ходжейли-3',
      'Журнал Ходжейли-4',
      'Журнал Ходжейли-5'
    ],
    coordinates: { lat: 42.40191, lng: 59.43960 },
    address: 'Ходжейли, Республика Каракалпакстан',
    phone: '+998 61 XXX XX XX',
    workingHours: '24/7',
    status: 'Онлайн'
  },
  'Станция Найманкул': {
    journals: [
      'Журнал Найманкул-1',
      'Журнал Найманкул-2',
      'Журнал Найманкул-3',
      'Журнал Найманкул-4',
      'Журнал Найманкул-5'
    ],
    coordinates: { lat: 42.297062, lng: 59.551516 },
    address: 'Такыятас, Республика Каракалпакстан',
    phone: '+998 61 XXX XX XX',
    workingHours: '24/7',
    status: 'Онлайн'
  },
  'Станция Такыятас- Пристань': {
    journals: [
      'Журнал Такыятас- Пристань-1',
      'Журнал Такыятас- Пристань-2',
      'Журнал Такыятас- Пристань-3',
      'Журнал Такыятас- Пристань-4',
      'Журнал Такыятас- Пристань-5'
    ],
    coordinates: { lat: 42.34678, lng: 59.56367 },
    address: 'Такыятас, Республика Каракалпакстан',
    phone: '+998 61 XXX XX XX',
    workingHours: '24/7',
    status: 'Онлайн'
  },
  'Станция Нукус': {
    journals: [
      'Журнал Нукус-1',
      'Журнал Нукус-2',
      'Журнал Нукус-3',
      'Журнал Нукус-4',
      'Журнал Нукус-5'
    ],
    coordinates: { lat: 42.45321, lng: 59.62006 },
    address: 'Нукус, Республика Каракалпакстан',
    phone: '+998 61 XXX XX XX',
    workingHours: '24/7',
    status: 'Онлайн'
  },
  'Станция Тахыркуль': {
    journals: [
      'Журнал Тахыркуль-1',
      'Журнал Тахыркуль-2',
      'Журнал Тахыркуль-3',
      'Журнал Тахыркуль-4',
      'Журнал Тахыркуль-5'
    ],
    coordinates: { lat: 42.55474, lng: 59.74254 },
    address: 'Такыятас, Республика Каракалпакстан',
    phone: '+998 61 XXX XX XX',
    workingHours: '24/7',
    status: 'Онлайн'
  },
  'Станция Кумшунгуль': {
    journals: [
      'Журнал Кумшунгуль-1',
      'Журнал Кумшунгуль-2',
      'Журнал Кумшунгуль-3',
      'Журнал Кумшунгуль-4',
      'Журнал Кумшунгуль-5'
    ],
    coordinates: { lat: 42.679569, lng: 59.7577303 },
    address: 'Такыятас, Республика Каракалпакстан',
    phone: '+998 61 XXX XX XX',
    workingHours: '24/7',
    status: 'Онлайн'
  },
  'Станция Чимбай': {
    journals: [
      'Журнал Чимбай-1',
      'Журнал Чимбай-2',
      'Журнал Чимбай-3',
      'Журнал Чимбай-4',
      'Журнал Чимбай-5'
    ],
    coordinates: { lat: 42.92120, lng: 59.81342 },
    address: 'Такыятас, Республика Каракалпакстан',
    phone: '+998 61 XXX XX XX',
    workingHours: '24/7',
    status: 'Онлайн'
  },
  'Станция Назархан': {
    journals: [
      'Журнал Назархан-1',
      'Журнал Назархан-2',
      'Журнал Назархан-3',
      'Журнал Назархан-4',
      'Журнал Назархан-5'
    ],
    coordinates: { lat: 42.36297, lng: 59.96509 },
    address: 'Такыятас, Республика Каракалпакстан',
    phone: '+998 61 XXX XX XX',
    workingHours: '24/7',
    status: 'Онлайн'
  },
  'Станция Куйбакли': {
    journals: [
      'Журнал Куйбакли-1',
      'Журнал Куйбакли-2',
      'Журнал Куйбакли-3',
      'Журнал Куйбакли-4',
      'Журнал Куйбакли-5'
    ],
    coordinates: { lat: 38.404591, lng: 68.0618913 },
    address: 'Такыятас, Республика Каракалпакстан',
    phone: '+998 61 XXX XX XX',
    workingHours: '24/7',
    status: 'Онлайн'
  },
  'Станция Блок пост 180': {
    journals: [
      'Журнал Блок пост 180-1',
      'Журнал Блок пост 180-2',
      'Журнал Блок пост 180-3',
      'Журнал Блок пост 180-4',
      'Журнал Блок пост 180-5'
    ],
    coordinates: { lat: 41.37896, lng: 69.29781 },
    address: 'Такыятас, Республика Каракалпакстан',
    phone: '+998 61 XXX XX XX',
    workingHours: '24/7',
    status: 'Онлайн'
  },
  'Станция Караузяк': {
    journals: [
      'Журнал Караузяк-1',
      'Журнал Караузяк-2',
      'Журнал Караузяк-3',
      'Журнал Караузяк-4',
      'Журнал Караузяк-5'
    ],
    coordinates: { lat: 42.10687, lng: 60.37943 },
    address: 'Караузяк, Республика Каракалпакстан',
    phone: '+998 61 XXX XX XX',
    workingHours: '24/7',
    status: 'Онлайн'
  },
  'Станция Бадай': {
    journals: [
      'Журнал Бадай-1',
      'Журнал Бадай-2',
      'Журнал Бадай-3',
      'Журнал Бадай-4',
      'Журнал Бадай-5'
    ],
    coordinates: { lat: 43.00, lng: 58.90 },
    address: 'Амударья, Республика Каракалпакстан',
    phone: '+998 61 XXX XX XX',
    workingHours: '24/7',
    status: 'Онлайн'
  },
  'Станция Беруний': {
    journals: [
      'Журнал Беруний-1',
      'Журнал Беруний-2',
      'Журнал Беруний-3',
      'Журнал Беруний-4',
      'Журнал Беруний-5'
    ],
    coordinates: { at: 41.98296, lng: 60.62730 },
    address: 'Беруний, Республика Каракалпакстан',
    phone: '+998 61 XXX XX XX',
    workingHours: '24/7',
    status: 'Онлайн'
  },
  'Станция Элликкала': {
    journals: [
      'Журнал Элликкала-1',
      'Журнал Элликкала-2',
      'Журнал Элликкала-3',
      'Журнал Элликкала-4',
      'Журнал Элликкала-5'
    ],
    coordinates: { lat: 42.1642893953, lng: 60.1728498061 },
    address: 'Элликкала, Республика Каракалпакстан',
    phone: '+998 61 XXX XX XX',
    workingHours: '24/7',
    status: 'Онлайн'
  },
  'Станция Турткул': {
    journals: [
      'Журнал Турткул-1',
      'Журнал Турткул-2',
      'Журнал Турткул-3',
      'Журнал Турткул-4',
      'Журнал Турткул-5'
    ],
    coordinates: { lat: 41.57059, lng: 61.03278 },
    address: 'Турткул, Республика Каракалпакстан',
    phone: '+998 61 XXX XX XX',
    workingHours: '24/7',
    status: 'Онлайн'
  },
  'Станция Мискин': {
    journals: [
      'Журнал Мискин-1',
      'Журнал Мискин-2',
      'Журнал Мискин-3',
      'Журнал Мискин-4',
      'Журнал Мискин-5'
    ],
    coordinates: { lat: 41.380138, lng: 61.264199 },
    address: 'Мискин, Республика Каракалпакстан',
    phone: '+998 61 XXX XX XX',
    workingHours: '24/7',
    status: 'Онлайн'
  },
  'Разъезд Блок пост 2': {
    journals: [
      'Журнал Блок пост 2-1',
      'Журнал Блок пост 2-2',
      'Журнал Блок пост 2-3',
      'Журнал Блок пост 2-4',
      'Журнал Блок пост 2-5'
    ],
    coordinates: { lat: 41.35, lng: 69.28 },
    address: 'Мискин, Республика Каракалпакстан',
    phone: '+998 61 XXX XX XX',
    workingHours: '24/7',
    status: 'Онлайн'
  },
  'Станция Питняк': {
    journals: [
      'Журнал Питняк-1',
      'Журнал Питняк-2',
      'Журнал Питняк-3',
      'Журнал Питняк-4',
      'Журнал Питняк-5'
    ],
    coordinates: { lat: 41.215383, lng: 61.308169 },
    address: 'Питняк, Хорезм регион',
    phone: '+998 61 XXX XX XX',
    workingHours: '24/7',
    status: 'Онлайн'
  },
  'Станция Истиклол': {
    journals: [
      'Журнал Истиклол-1',
      'Журнал Истиклол-2',
      'Журнал Истиклол-3',
      'Журнал Истиклол-4',
      'Журнал Истиклол-5'
    ],
    coordinates: { lat: 41.27206, lng: 61.17795 },
    address: 'Турткуль, Республика Каракалпакстан',
    phone: '+998 61 XXX XX XX',
    workingHours: '24/7',
    status: 'Онлайн'
  },
  'Станция Хазарасп': {
    journals: [
      'Журнал Хазарасп-1',
      'Журнал Хазарасп-2',
      'Журнал Хазарасп-3',
      'Журнал Хазарасп-4',
      'Журнал Хазарасп-5'
    ],
    coordinates: { lat: 41.318, lng: 61.06624 },
    address: 'Хазарасп, Хорезм регион',
    phone: '+998 61 XXX XX XX',
    workingHours: '24/7',
    status: 'Онлайн'
  },
  'Станция Багат': {
    journals: [
      'Журнал Багат-1',
      'Журнал Багат-2',
      'Журнал Багат-3',
      'Журнал Багат-4',
      'Журнал Багат-5'
    ],
    coordinates: { lat: 43.03, lng: 58.85 },
    address: 'Багат, Хорезм регион',
    phone: '+998 61 XXX XX XX',
    workingHours: '24/7',
    status: 'Онлайн'
  },
  'Станция Ханки': {
    journals: [
      'Журнал Ханки-1',
      'Журнал Ханки-2',
      'Журнал Ханки-3',
      'Журнал Ханки-4',
      'Журнал Ханки-5'
    ],
    coordinates: { lat: 41.46388, lng: 60.77545 },
    address: 'Ханки, Хорезм регион',
    phone: '+998 61 XXX XX XX',
    workingHours: '24/7',
    status: 'Онлайн'
  },
  'Станция Ургенч': {
    journals: [
      'Журнал Ургенч-1',
      'Журнал Ургенч-2',
      'Журнал Ургенч-3',
      'Журнал Ургенч-4',
      'Журнал Ургенч-5'
    ],
    coordinates: { lat: 41.53677, lng: 60.63220 },
    address: 'Ургенч, Хорезм регион',
    phone: '+998 61 XXX XX XX',
    workingHours: '24/7',
    status: 'Онлайн'
  },
  'Станция Шават': {
    journals: [
      'Журнал Шават-1',
      'Журнал Шават-2',
      'Журнал Шават-3',
      'Журнал Шават-4',
      'Журнал Шават-5'
    ],
    coordinates: { lat: 41.693212, lng: 60.302163 },
    address: 'Шават, Хорезм регион',
    phone: '+998 61 XXX XX XX',
    workingHours: '24/7',
    status: 'Онлайн'
  },
  'Разъезд Обод': {
    journals: [
      'Журнал Обод-1',
      'Журнал Обод-2',
      'Журнал Обод-3',
      'Журнал Обод-4',
      'Журнал Обод-5'
    ],
    coordinates: { lat: 42.2500, lng: 59.2000 },
    address: 'Хорезм регион',
    phone: '+998 61 XXX XX XX',
    workingHours: '24/7',
    status: 'Онлайн'
  },
  'Станция Хива': {
    journals: [
      'Журнал Хива-1',
      'Журнал Хива-2',
      'Журнал Хива-3',
      'Журнал Хива-4',
      'Журнал Хива-5'
    ],
    coordinates: { lat: 41.37704, lng: 60.37648 },
    address: 'Хива, Хорезм регион',
    phone: '+998 61 XXX XX XX',
    workingHours: '24/7',
    status: 'Онлайн'
  },
  'Станция Кыпшак': {
    journals: [
      'Журнал Кыпшак-1',
      'Журнал Кыпшак-2',
      'Журнал Кыпшак-3',
      'Журнал Кыпшак-4',
      'Журнал Кыпшак-5'
    ],
    coordinates: { lat: 41.50, lng: 60.30 },
    address: 'Амударья, Республика Каракалпакстан',
    phone: '+998 61 XXX XX XX',
    workingHours: '24/7',
    status: 'Онлайн'
  },
  'Станция Мангыт': {
    journals: [
      'Журнал Мангыт-1',
      'Журнал Мангыт-2',
      'Журнал Мангыт-3',
      'Журнал Мангыт-4',
      'Журнал Мангыт-5'
    ],
    coordinates: { lat: 42.11494, lng: 60.05799 },
    address: 'Мангыт, Республика Каракалпакстан',
    phone: '+998 61 XXX XX XX',
    workingHours: '24/7',
    status: 'Онлайн'
  },
  'Станция Джумуртау': {
    journals: [
      'Журнал Джумуртау-1',
      'Журнал Джумуртау-2',
      'Журнал Джумуртау-3',
      'Журнал Джумуртау-4',
      'Журнал Джумуртау-5'
    ],
    coordinates: { lat: 42.05907, lng: 60.23940 },
    address: 'Амударья, Республика Каракалпакстан',
    phone: '+998 61 XXX XX XX',
    workingHours: '24/7',
    status: 'Онлайн'
  },
  'Станция Гурлен': {
    journals: [
      'Журнал Гурлен-1',
      'Журнал Гурлен-2',
      'Журнал Гурлен-3',
      'Журнал Гурлен-4',
      'Журнал Гурлен-5'
    ],
    coordinates: { lat: 41.84472, lng: 60.39194 },
    address: 'Гурлен, Хорезм регион',
    phone: '+998 61 XXX XX XX',
    workingHours: '24/7',
    status: 'Онлайн'
  },

};

const Stations = () => {
  const [selectedStation, setSelectedStation] = useState(null);
  const [showJournals, setShowJournals] = useState(false);

  const handleStationClick = (station) => {
    setSelectedStation(station);
    setShowJournals(true);
  };

  const handleBackToStations = () => {
    setSelectedStation(null);
    setShowJournals(false);
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white px-4 py-10">
      <div className="max-w-[1180px] mx-auto">
        {!showJournals ? (
          <>
            <h1 className="text-4xl sm:text-5xl font-bold text-center mb-10">
              Станции
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {stations.map((station, index) => (
                <div
                  key={index}
                  onClick={() => handleStationClick(station)}
                  className="bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-md transform transition-all duration-300 hover:scale-105 hover:bg-white/20 hover:shadow-xl cursor-pointer"
                >
                  <h2 className="text-xl font-semibold text-white text-center">
                    {station}
                  </h2>
                </div>
              ))}
            </div>
          </>
        ) : (
          <>
            {/* Back Button */}
            <div className="mb-6">
              <button
                onClick={handleBackToStations}
                className="flex items-center text-blue-300 hover:text-blue-200 transition-colors mb-4"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Возврат на станции
              </button>
            </div>

            {/* Station Title */}
            <h1 className="text-4xl sm:text-5xl font-bold text-center mb-10">
              {selectedStation}
            </h1>

            {/* Journals Section */}
            <div className="text-center mb-8">
              <h2 className="text-2xl sm:text-3xl font-semibold mb-6">
                Журналы
              </h2>
              <p className="text-gray-300 mb-8">
                12 журналов, принадлежащих этой станции
              </p>
            </div>

            {/* Journals Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {stationData[selectedStation]?.journals.map((journal, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-md transform transition-all duration-300 hover:scale-105 hover:bg-white/20 hover:shadow-xl cursor-pointer border border-white/20"
                >
                  <div className="text-center">
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {journal}
                    </h3>
                    <p className="text-gray-300 text-sm">
                      Журнал #{index + 1}
                    </p>
                    <div className="mt-4">
                      <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors text-sm">
                        Вид
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Station Information */}
            <div className="mt-12 text-center">
              <div className="bg-white/5 backdrop-blur-md p-6 rounded-xl max-w-2xl mx-auto">
                <h3 className="text-xl font-semibold mb-4">
                  Информация о станции
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-300">
                  <div>
                    <p><strong>Адрес:</strong> {stationData[selectedStation]?.address}</p>
                    <p><strong>Teлефон:</strong> {stationData[selectedStation]?.phone}</p>
                  </div>
                  <div>
                    <p><strong>Рабочее время:</strong> {stationData[selectedStation]?.workingHours}</p>
                    <p><strong>Статус:</strong> {stationData[selectedStation]?.status}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Section */}
            <div className="mt-12">
              <div className="bg-white/5 backdrop-blur-md p-6 rounded-xl max-w-4xl mx-auto">
                <h3 className="text-xl font-semibold mb-6 text-center">
                  Расположение станции
                </h3>
                <div className="bg-gray-800 rounded-lg p-4 h-96 relative overflow-hidden">
                  {/* Map Placeholder with Station Location */}
                  <div className="w-full h-full bg-gradient-to-br from-blue-900 to-slate-800 rounded-lg relative">
                    {/* Map Grid Lines */}
                    <div className="absolute inset-0 opacity-20">
                      <div className="w-full h-full" style={{
                        backgroundImage: `
                          linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                          linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
                        `,
                        backgroundSize: '20px 20px'
                      }}></div>
                    </div>
                    
                    {/* Station Marker */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <div className="bg-red-500 w-6 h-6 rounded-full border-4 border-white shadow-lg animate-pulse"></div>
                      <div className="bg-white text-gray-800 px-3 py-1 rounded-lg shadow-lg mt-2 text-sm font-semibold whitespace-nowrap">
                        {selectedStation}
                      </div>
                    </div>

                    {/* Coordinates Display */}
                    <div className="absolute bottom-4 left-4 bg-black/50 backdrop-blur-md px-4 py-2 rounded-lg text-white text-sm">
                      <div>Lat: {stationData[selectedStation]?.coordinates.lat}</div>
                      <div>Lng: {stationData[selectedStation]?.coordinates.lng}</div>
                    </div>

                    {/* Map Controls */}
                    <div className="absolute top-4 right-4 space-y-2">
                      <button className="bg-white/20 backdrop-blur-md p-2 rounded-lg text-white hover:bg-white/30 transition-colors">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                      </button>
                      <button className="bg-white/20 backdrop-blur-md p-2 rounded-lg text-white hover:bg-white/30 transition-colors">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
                
                {/* Map Actions */}
                <div className="mt-4 flex justify-center space-x-4">
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors flex items-center">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-1.447-.894L15 4m0 13V4m0 0L9 7" />
                    </svg>
                    Открыть в Google Картах
                  </button>
                  <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg transition-colors flex items-center">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    Navigatsiya
                  </button>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Stations;
