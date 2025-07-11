import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import {
  FlatList,
  Modal,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

const assetData = {
  ETFs: ['Vanguard S&P 500', 'Invesco QQQ', 'iShares Russell 2000'],
  Stocks: ['Apple (AAPL)', 'Google (GOOGL)', 'Tesla (TSLA)'],
  Bonds: ['US Treasury Bond', 'Corporate Bond Fund', 'Municipal Bond'],
};

const InvestScreen: React.FC = () => {
  const [recurring, setRecurring] = React.useState(true);
  const [selectedAssetClass, setSelectedAssetClass] =
    React.useState<keyof typeof assetData>('ETFs');
  const [specificAssets, setSpecificAssets] = React.useState(
    assetData[selectedAssetClass]
  );
  const [selectedSpecificAsset, setSelectedSpecificAsset] = React.useState(
    specificAssets[0]
  );
  const [amount, setAmount] = React.useState('');

  type ModalType = 'assetClass' | 'specificAsset' | null;
  const [activeModal, setActiveModal] = React.useState<ModalType>(null);
  const [modalPosition, setModalPosition] = React.useState({ x: 0, y: 0, width: 0 });

  const assetClassSelectRef = React.useRef<TouchableOpacity>(null);
  const specificAssetSelectRef = React.useRef<TouchableOpacity>(null);

  React.useEffect(() => {
    const newSpecificAssets = assetData[selectedAssetClass];
    setSpecificAssets(newSpecificAssets);
    setSelectedSpecificAsset(newSpecificAssets[0]);
  }, [selectedAssetClass]);

  const handleBuy = () => {
    console.log(`Buying $${amount} of ${selectedSpecificAsset}`);
    // Add API call or navigation here
  };

  const handleSell = () => {
    console.log(`Selling $${amount} of ${selectedSpecificAsset}`);
    // Add API call or navigation here
  };

  const openModal = (type: 'assetClass' | 'specificAsset') => {
    const ref = type === 'assetClass' ? assetClassSelectRef : specificAssetSelectRef;
    ref.current?.measure((_fx, _fy, width, height, px, py) => {
      setModalPosition({ x: px, y: py + height + 5, width });
      setActiveModal(type);
    });
  };

  const modalData =
    activeModal === 'assetClass' ? Object.keys(assetData) : specificAssets;

  const onModalItemPress = (item: string) => {
    if (activeModal === 'assetClass') {
      setSelectedAssetClass(item as keyof typeof assetData);
    } else {
      setSelectedSpecificAsset(item);
    }
    setActiveModal(null);
  };

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView contentContainerStyle={styles.container}>
        {/* Portfolio Balance Card */}
        <LinearGradient colors={['#5F27CD', '#00F0FF']} style={styles.card}>
          <Text style={styles.cardTitle}>Portfolio Balance</Text>
          <Text style={styles.cardAmount}>$12,435.22</Text>
        </LinearGradient>

        {/* Asset Breakdown */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Asset Breakdown</Text>
          <View style={styles.assetRow}>
            <Text style={styles.assetName}>ETFs</Text>
            <Text style={styles.assetPercent}>45%</Text>
          </View>
          <View style={styles.assetRow}>
            <Text style={styles.assetName}>Stocks</Text>
            <Text style={styles.assetPercent}>35%</Text>
          </View>
          <View style={styles.assetRow}>
            <Text style={styles.assetName}>Bonds</Text>
            <Text style={styles.assetPercent}>20%</Text>
          </View>
        </View>

        {/* Asset Class Selector */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Select Asset Class</Text>
          <TouchableOpacity
            ref={assetClassSelectRef}
            style={styles.selectBox}
            onPress={() => openModal('assetClass')}
          >
            <Text style={styles.selectBoxText}>{selectedAssetClass}</Text>
          </TouchableOpacity>
        </View>

        {/* Specific Asset Selector */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Select Specific Asset</Text>
          <TouchableOpacity
            ref={specificAssetSelectRef}
            style={styles.selectBox}
            onPress={() => openModal('specificAsset')}
          >
            <Text style={styles.selectBoxText}>{selectedSpecificAsset}</Text>
          </TouchableOpacity>
        </View>

        {/* Amount Input */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Enter Amount</Text>
          <TextInput
            style={styles.amountInput}
            keyboardType="numeric"
            value={amount}
            onChangeText={setAmount}
            placeholder="$0.00"
            placeholderTextColor="#666"
          />
        </View>

        {/* Recurring Investment Toggle */}
        <View style={styles.section}>
          <View style={styles.toggleRow}>
            <Text style={styles.sectionTitle}>Recurring Investment</Text>
            <Switch
              value={recurring}
              onValueChange={setRecurring}
              thumbColor="#00F0FF"
              trackColor={{ false: '#333', true: '#5F27CD' }}
            />
          </View>
        </View>

        {/* Action Buttons */}
        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.actionButton} onPress={handleBuy}>
            <Text style={styles.actionText}>Buy</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton} onPress={handleSell}>
            <Text style={styles.actionText}>Sell</Text>
          </TouchableOpacity>
        </View>

        {/* AI Coach Placeholder */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Your AI Coach</Text>
          <Text style={styles.sectionNote}>Start receiving insights soon.</Text>
        </View>
      </ScrollView>

      {/* Asset Selection Modal */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={activeModal !== null}
        onRequestClose={() => setActiveModal(null)}
      >
        <Pressable
          style={styles.modalOverlay}
          onPress={() => setActiveModal(null)}
        >
          <View
            style={[
              styles.popover,
              {
                top: modalPosition.y,
                left: modalPosition.x,
                width: modalPosition.width,
              },
            ]}
          >
            <FlatList
              data={modalData}
              keyExtractor={(item) => item}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.modalItem}
                  onPress={() => onModalItemPress(item)}
                >
                  <Text style={styles.modalItemText}>{item}</Text>
                </TouchableOpacity>
              )}
            />
          </View>
        </Pressable>
      </Modal>
    </SafeAreaView>
  );
};

export default InvestScreen;

export const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#0D0D0D',
  },
  container: {
    padding: 20,
    paddingBottom: 40,
  },
  card: {
    borderRadius: 20,
    padding: 24,
    marginBottom: 24,
  },
  cardTitle: {
    fontSize: 16,
    color: '#fff',
    opacity: 0.8,
    marginBottom: 8,
  },
  cardAmount: {
    fontSize: 28,
    color: '#fff',
    fontWeight: '600',
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    color: '#fff',
    marginBottom: 12,
    fontWeight: '600',
  },
  assetRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 6,
  },
  assetName: {
    color: '#ccc',
    fontSize: 15,
  },
  assetPercent: {
    color: '#00F0FF',
    fontWeight: '600',
  },
  toggleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  amountInput: {
    backgroundColor: '#1A1A1A',
    color: '#fff',
    padding: 12,
    borderRadius: 8,
    fontSize: 16,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 24,
  },
  actionButton: {
    backgroundColor: '#1A1A1A',
    borderColor: '#333',
    borderWidth: 1,
    borderRadius: 12,
    paddingVertical: 14,
    paddingHorizontal: 32,
  },
  actionText: {
    color: '#00F0FF',
    fontSize: 16,
    fontWeight: '600',
  },
  sectionNote: {
    color: '#666',
    fontSize: 14,
  },
  selectBox: {
    backgroundColor: '#1A1A1A',
    borderRadius: 8,
    padding: 16,
  },
  selectBoxText: {
    color: '#fff',
    fontSize: 16,
  },
  modalOverlay: {
    flex: 1,
  },
  popover: {
    position: 'absolute',
    backgroundColor: '#1A1A1A',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#333',
    maxHeight: 200,
    // iOS Shadow
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    // Android Shadow
    elevation: 8,
  },
  modalItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#333',
  },
  modalItemText: {
    color: '#fff',
    fontSize: 16,
  },
});
