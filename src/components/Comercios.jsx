import React from 'react';
import { View, Text, FlatList } from 'react-native';


const Comercios = () => {
    const comercios = [
        { nombre: 'Comercio 1', direccion: 'Dirección 1', telefono: '123456789' },
        { nombre: 'Comercio 2', direccion: 'Dirección 2', telefono: '987654321' },
        { nombre: 'Comercio 3', direccion: 'Dirección 3', telefono: '456789123' },
    ];

    return (
        <FlatList
            data={comercios}
            keyExtractor={(comercio, index) => index.toString()}
            renderItem={({ item }) => (
                <View style={{ backgroundColor: 'white', padding: 10, margin: 10 }}>
                    <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{item.nombre}</Text>
                    <Text>Dirección: {item.direccion}</Text>
                    <Text>Teléfono: {item.telefono}</Text>
                </View>
            )}
        />
    );
};

export default Comercios;