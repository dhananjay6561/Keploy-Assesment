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
    const style = styles[type];

    return (
        <div className={`my-6 flex gap-3 rounded-lg border p-4 ${style}`}>
            <Icon className="h-5 w-5 shrink-0 mt-0.5" />
            <div className="flex-1 space-y-2">
                {title && <h5 className="font-semibold leading-none">{title}</h5>}
                <div className="text-sm [&>p]:m-0 leading-relaxed opacity-90">{children}</div>
            </div>
        </div>
    );
}
