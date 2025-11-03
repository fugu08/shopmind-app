
import React from 'react';
import { ShoppingBag, AlertCircle } from 'lucide-react';
import { Purchase } from '../types';

interface PurchaseCardProps {
  purchase: Purchase;
}

const PurchaseCard: React.FC<PurchaseCardProps> = ({ purchase }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm border">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-primary-50 rounded-lg">
            <ShoppingBag size={20} className="text-primary-500" />
          </div>
          <div>
            <h3 className="font-medium text-gray-900">{purchase.name}</h3>
            <p className="text-sm text-gray-500">
              {purchase.category} • {new Date(purchase.date).toLocaleDateString('ru-RU')}
            </p>
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          <span className="font-semibold text-gray-900">{purchase.amount}₽</span>
          {purchase.isImpulse && (
            <div className="flex items-center text-red-500">
              <AlertCircle size={16} className="mr-1" />
              <span className="text-sm">Импульсная</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PurchaseCard;
