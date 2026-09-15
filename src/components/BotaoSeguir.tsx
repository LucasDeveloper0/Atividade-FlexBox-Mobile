import React, { useState } from 'react';
import { TouchableOpacity, Text } from 'react-native';

export function BotaoSeguir() {
  const [seguindo, setSeguindo] = useState(false);

  return (
    <TouchableOpacity
      onPress={() => setSeguindo(!seguindo)}
      className={`w-full py-2.5 rounded-lg items-center justify-center border ${
        seguindo 
          ? 'bg-transparent border-gray-400' 
          : 'bg-blue-600 border-blue-600'
      }`}
    >
      <Text className={`font-semibold ${seguindo ? 'text-gray-800' : 'text-white'}`}>
        {seguindo ? 'Seguindo' : 'Seguir'}
      </Text>
    </TouchableOpacity>
  );
}