import { ScrollView, Text, View } from 'react-native';
import { BotaoSeguir } from '../components/BotaoSeguir';
import { GradeDePublicacoes } from '../components/GradeDePublicacoes';
import { ListaDeChips } from '../components/ListaDeChips';

const interessesMock = [
  'React Native', 'Mobile', 'Tailwind', 'JavaScript', 
  'TypeScript', 'UI/UX', 'Flexbox', 'NativeWind'
];

const postsMock = [
  '#ef4444', '#3b82f6', '#10b981', 
  '#f59e0b', '#8b5cf6', '#ec4899', 
  '#6366f1', '#14b8a6', '#84cc16'
];

export default function Index() {
  return (
    <ScrollView className="flex-1 bg-white p-4 pt-12">
      {/* Header */}
      <View className="flex-row items-center gap-4 mb-6">
        <View className="w-16 h-16 rounded-full bg-gray-300 justify-center items-center">
          <Text className="text-xl font-bold text-gray-600">Foto</Text>
        </View>
        <View className="justify-center">
          <Text className="text-lg font-bold text-gray-900">Nome do Usuário</Text>
          <Text className="text-sm text-gray-500">@nome_usuario</Text>
        </View>
      </View>

      {/* Estatísticas */}
      <View className="flex-row justify-around py-4 border-y border-gray-200 mb-6">
        <View className="items-center">
          <Text className="font-bold text-base">9</Text>
          <Text className="text-xs text-gray-500">Posts</Text>
        </View>
        <View className="items-center">
          <Text className="font-bold text-base">1.2k</Text>
          <Text className="text-xs text-gray-500">Seguidores</Text>
        </View>
        <View className="items-center">
          <Text className="font-bold text-base">350</Text>
          <Text className="text-xs text-gray-500">Seguindo</Text>
        </View>
      </View>

      {/* Interesses */}
      <View className="mb-6">
        <Text className="font-bold text-base mb-2">Interesses</Text>
        <ListaDeChips chips={interessesMock} />
      </View>

      {/* Publicações */}
      <View className="mb-6">
        <Text className="font-bold text-base mb-2">Publicações</Text>
        <GradeDePublicacoes publicacoes={postsMock} />
      </View>

      {/* Rodapé */}
      <View className="mb-8">
        <BotaoSeguir />
      </View>
    </ScrollView>
  );
}