import { Info, AlertTriangle, CheckCircle, XCircle } from 'lucide-react';
import { ReactNode } from 'react';

type CalloutType = 'info' | 'warning' | 'success' | 'error';

interface CalloutProps {
    type?: CalloutType;
    title?: string;
    children: ReactNode;
}

const icons = {
    info: Info,
    warning: AlertTriangle,
    success: CheckCircle,
    error: XCircle,
};

const styles = {
    info: 'bg-blue-50 border-blue-200 text-blue-900',
    warning: 'bg-amber-50 border-amber-200 text-amber-900',
    success: 'bg-emerald-50 border-emerald-200 text-emerald-900',
    error: 'bg-red-50 border-red-200 text-red-900',
};

export function Callout({ type = 'info', title, children }: CalloutProps) {
  const Icon = icons[type];

  return (
    <div className={`flex gap-4 p-5 my-6 rounded-xl border ${styles[type]}`}>
      <div className="w-9 h-9 flex items-center justify-center rounded-lg bg-black/5 shrink-0">
        <Icon size={18} />
      </div>

      <div className="flex-1">
        {title && <div className="font-semibold mb-2">{title}</div>}
        <div>{children}</div>
      </div>
    </div>
  );
}
