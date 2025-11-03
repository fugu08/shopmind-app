
import React from 'react';
import { TrendingUp, Heart, PiggyBank, AlertTriangle } from 'lucide-react';
import { Insight } from '../types';

interface InsightCardProps {
  insight: Insight;
}

const InsightCard: React.FC<InsightCardProps> = ({ insight }) => {
  const getIcon = () => {
    switch (insight.type) {
      case 'pattern': return <TrendingUp size={20} />;
      case 'emotional': return <Heart size={20} />;
      case 'saving': return <PiggyBank size={20} />;
      default: return <TrendingUp size={20} />;
    }
  };

  const getSeverityColor = () => {
    switch (insight.severity) {
      case 'high': return 'bg-red-50 text-red-700 border-red-200';
      case 'medium': return 'bg-yellow-50 text-yellow-700 border-yellow-200';
      case 'low': return 'bg-green-50 text-green-700 border-green-200';
      default: return 'bg-gray-50 text-gray-700 border-gray-200';
    }
  };

  return (
    <div className={`p-4 rounded-lg border ${getSeverityColor()}`}>
      <div className="flex items-start space-x-3">
        <div className="p-2 bg-white rounded-lg">
          {getIcon()}
        </div>
        <div className="flex-1">
          <h3 className="font-semibold mb-1">{insight.title}</h3>
          <p className="text-sm opacity-90">{insight.description}</p>
        </div>
        {insight.severity === 'high' && (
          <AlertTriangle size={16} className="text-red-500 mt-1" />
        )}
      </div>
    </div>
  );
};

export default InsightCard;
