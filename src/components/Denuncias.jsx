import React from 'react';
import { View, Text } from 'react-native';

const Denuncias = () => {
    const comercios = [
        { nombre: 'Denuncia 1', direccion: 'Dirección 1', telefono: '123456789' },
        { nombre: 'Denuncia 2', direccion: 'Dirección 2', telefono: '987654321' },
        { nombre: 'Denuncia 3', direccion: 'Dirección 3', telefono: '456789123' },
    ];

    return (
        <View>
            {comercios.map((comercio, index) => (
                <View key={index} style={{ backgroundColor: 'white', padding: 10, margin: 10 }}>
                    <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{comercio.nombre}</Text>
                    <Text>Dirección: {comercio.direccion}</Text>
                    <Text>Teléfono: {comercio.telefono}</Text>
                </View>
            ))}
        </View>
    );
};

export default Denuncias;