tsx
import React, { useState } from 'react';
import { Plus, TrendingUp, Search, User } from 'lucide-react';
import PurchaseCard from './components/PurchaseCard';
import InsightCard from './components/InsightCard';
import AddPurchaseModal from './components/AddPurchaseModal';
import { Purchase, Insight } from './types';

function App() {
  const [purchases, setPurchases] = useState<Purchase[]>([]);
  const [showAddModal, setShowAddModal] = useState(false);

  const insights: Insight[] = [
    {
      id: 1,
      title: "Паттерн выходного дня",
      description: "По субботам вы тратите на 40% больше",
      type: "pattern",
      severity: "medium"
    },
    {
      id: 2, 
      title: "Сладкий стресс",
      description: "После сложных дней +300% сладостей в чеке",
      type: "emotional",
      severity: "high"
    }
  ];

  const addPurchase = (purchase: Omit<Purchase, 'id'>) => {
    const newPurchase: Purchase = {
      ...purchase,
      id: Date.now().toString()
    };
    setPurchases(prev => [newPurchase, ...prev]);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-gray-900">ShopMind</h1>
            <div className="flex items-center space-x-4">
              <button className="p-2 hover:bg-gray-100 rounded-lg">
                <Search size={20} />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-lg">
                <User size={20} />
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Insights Section */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-900 flex items-center">
              <TrendingUp className="mr-2" size={20} />
              Ваши инсайты
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {insights.map(insight => (
              <InsightCard key={insight.id} insight={insight} />
            ))}
          </div>
        </section>

        {/* Purchases Section */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-900">История покупок</h2>
            <button 
              onClick={() => setShowAddModal(true)}
              className="bg-primary-500 text-white px-4 py-2 rounded-lg flex items-center hover:bg-primary-600"
            >
              <Plus size={20} className="mr-2" />
              Добавить покупку
            </button>
          </div>
          
          <div className="space-y-4">
            {purchases.length === 0 ? (
              <div className="text-center py-12 text-gray-500">
                Пока нет покупок. Добавьте первую!
              </div>
            ) : (
              purchases.map(purchase => (
                <PurchaseCard key={purchase.id} purchase={purchase} />
              ))
            )}
          </div>
        </section>
      </div>

      {/* Add Purchase Modal */}
      {showAddModal && (
        <AddPurchaseModal 
          onClose={() => setShowAddModal(false)}
          onSave={addPurchase}
        />
      )}
    </div>
  );
}

export default App
