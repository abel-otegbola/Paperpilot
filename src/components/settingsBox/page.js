export default function SettingBox({ children, text, subtext }) {
    return (
        <div className="rounded border pb-4 border-gray-400/[0.2] dark:bg-dark my-10">
            <h3 className="rounded-t text-lg font-semibold p-4 bg-gray-700 dark:bg-slate-100/[0.05] text-white">{text}</h3>
            <p className="dark:opacity-[0.5] m-4">{subtext}</p>
            <div className="m-4">
                {children}
            </div>
        </div>
    )
}