import React from 'react';
import { View } from 'react-native';

export function GradeDePublicacoes({ publicacoes }: { publicacoes: string[] }) {
  return (
    <View className="flex-row flex-wrap justify-between gap-y-2">
      {publicacoes.map((item, index) => (
        <View 
          key={index} 
          style={{ backgroundColor: item }} 
          className="w-[31%] aspect-square rounded"
        />
      ))}
    </View>
  );
}