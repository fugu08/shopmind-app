tsx
import React, { useState } from 'react';
import { X } from 'lucide-react';
import { Purchase } from '../types';

interface AddPurchaseModalProps {
  onClose: () => void;
  onSave: (purchase: Omit<Purchase, 'id'>) => void;
}

const AddPurchaseModal: React.FC<AddPurchaseModalProps> = ({ onClose, onSave }) => {
  const [formData, setFormData] = useState({
    name: '',
    amount: '',
    category: 'еда',
    isImpulse: false,
    mood: 'neutral'
  });

  const categories = ['еда', 'быт', 'развлечения', 'транспорт', 'здоровье', 'другое'];
  const moods = [
    { value: 'happy', label: '😊 Радостный' },
    { value: 'neutral', label: '😐 Обычный' },
    { value: 'stressed', label: '😫 Стресс' },
    { value: 'tired', label: '😪 Усталость' }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave({
      name: formData.name,
      amount: Number(formData.amount),
      category: formData.category,
      date: new Date().toISOString(),
      isImpulse: formData.isImpulse,
      mood: formData.mood
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg max-w-md w-full p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold">Добавить покупку</h2>
          <button onClick={onClose} className="p-1 hover:bg-gray-100 rounded">
            <X size={20} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Что купили?
            </label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
              className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              placeholder="Например: Кофе, шоколад"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Сумма (₽)
            </label>
            <input
              type="number"
              required
              min="1"
              value={formData.amount}
              onChange={(e) => setFormData(prev => ({ ...prev, amount: e.target.value }))}
              className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              placeholder="500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Категория
            </label>
            <select
              value={formData.category}
              onChange={(e) => setFormData(prev => ({ ...prev, category: e.target.value }))}
              className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            >
              {categories.map(cat => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Настроение
            </label>
            <select
              value={formData.mood}
              onChange={(e) => setFormData(prev => ({ ...prev, mood: e.target.value }))}
              className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            >
              {moods.map(mood => (
                <option key={mood.value} value={mood.value}>{mood.label}</option>
              ))}
            </select>
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              id="impulse"
              checked={formData.isImpulse}
              onChange={(e) => setFormData(prev => ({ ...prev, isImpulse: e.target.checked }))}
              className="mr-2"
            />
            <label htmlFor="impulse" className="text-sm text-gray-700">
              Это была импульсная покупка?
            </label>
          </div>

          <div className="flex space-x-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 py-2 px-4 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
            >
              Отмена
            </button>
            <button
              type="submit"
              className="flex-1 py-2 px-4 bg-primary-500 text-white rounded-lg hover:bg-primary-600"
            >
              Добавить
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddPurchaseModal;
