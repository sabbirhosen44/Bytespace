import { cn } from "@/lib/utils";

type StatCardProps = {
    title: string;
    sub: string;
    value: string;
    progress?: number;
    badge?: string;
    className?: string;
};

export function StatCard({ title, sub, value, progress, badge, className }: StatCardProps) {
    return (
        <div className={cn("rounded-xl bg-primary-600 p-4 text-white", className)}>
            <p className="font-body text-label-m leading-none">{title}</p>
            <p className="mt-1 font-body text-[10px] leading-none opacity-80">{sub}</p>
            <p className="mt-3 font-body text-[24px] font-medium leading-none">{value}</p>
            {progress !== undefined && (
                <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-white/80">
                    <div className="h-full rounded-full bg-secondary-400" style={{ width: `${progress}%` }} />
                </div>
            )}
            {badge && (
                <span className="mt-3 inline-block rounded-full bg-secondary-400 px-2 py-1 font-body text-[10px] font-medium leading-none text-neutral-950">
                    {badge}
                </span>
            )}
        </div>
    );
}